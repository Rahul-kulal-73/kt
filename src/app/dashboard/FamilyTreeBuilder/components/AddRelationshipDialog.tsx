import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { FamilyMember } from '../hooks/useFamilyTree';

interface AddRelationshipDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    familyMembers: FamilyMember[];
    selectedMember?: FamilyMember | null;
    onAddRelationship: (relationshipData: {
        person1_id: string;
        person2_id: string;
        relationship_type: string;
        start_date?: string;
        end_date?: string;
        is_primary?: boolean;
        notes?: string;
    }) => Promise<void>;
}

// Simplified relationship types for MVP
const relationshipTypes = [
    { value: 'parent_of', label: 'Parent of' },
    { value: 'child_of', label: 'Child of' },
    { value: 'spouse', label: 'Spouse/Partner' },
    { value: 'sibling', label: 'Sibling' },
];

export const AddRelationshipDialog: React.FC<AddRelationshipDialogProps> = ({
    open,
    onOpenChange,
    familyMembers,
    selectedMember,
    onAddRelationship
}) => {
    const [relationshipData, setRelationshipData] = useState({
        person1_id: selectedMember?.id || '',
        person2_id: '',
        relationship_type: '',
    });

    const handleSubmit = async () => {
        if (!relationshipData.person1_id || !relationshipData.person2_id || !relationshipData.relationship_type) {
            return;
        }

        let finalPerson1 = relationshipData.person1_id;
        let finalPerson2 = relationshipData.person2_id;
        let finalType = relationshipData.relationship_type;

        if (relationshipData.relationship_type === 'parent_of') {
            finalType = 'parent_child';
            // Person 1 is parent, Person 2 is child. Correct order for parent_child type usually depends on schema.
            // Assuming parent_child means person1 is parent of person2.
        } else if (relationshipData.relationship_type === 'child_of') {
            finalType = 'parent_child';
            // Person 1 is child of Person 2. So we swap them so Person 1 (param) is always the parent.
            finalPerson1 = relationshipData.person2_id;
            finalPerson2 = relationshipData.person1_id;
        }

        try {
            await onAddRelationship({
                person1_id: finalPerson1,
                person2_id: finalPerson2,
                relationship_type: finalType,
            });

            // Reset form
            setRelationshipData({
                person1_id: selectedMember?.id || '',
                person2_id: '',
                relationship_type: '',
            });

            onOpenChange(false);
        } catch (error) {
            console.error('Failed to add relationship:', error);
        }
    };

    // Filter out the selected member from the second person dropdown
    const availableMembers = familyMembers.filter(member => member.id !== relationshipData.person1_id);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Family Relationship</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label htmlFor="person1">First Person</Label>
                        <Select
                            value={relationshipData.person1_id}
                            onValueChange={(value) => setRelationshipData(prev => ({ ...prev, person1_id: value }))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select first person" />
                            </SelectTrigger>
                            <SelectContent>
                                {familyMembers.map((member) => (
                                    <SelectItem key={member.id} value={member.id}>
                                        {member.first_name} {member.last_name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="relationship_type">Relationship Type</Label>
                        <Select
                            value={relationshipData.relationship_type}
                            onValueChange={(value) => setRelationshipData(prev => ({ ...prev, relationship_type: value }))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select relationship type" />
                            </SelectTrigger>
                            <SelectContent>
                                {relationshipTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="person2">Second Person</Label>
                        <Select
                            value={relationshipData.person2_id}
                            onValueChange={(value) => setRelationshipData(prev => ({ ...prev, person2_id: value }))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select second person" />
                            </SelectTrigger>
                            <SelectContent>
                                {availableMembers.map((member) => (
                                    <SelectItem key={member.id} value={member.id}>
                                        {member.first_name} {member.last_name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex gap-2 pt-2">
                        <Button
                            onClick={handleSubmit}
                            className="flex-1"
                            disabled={!relationshipData.person1_id || !relationshipData.person2_id || !relationshipData.relationship_type}
                        >
                            Add Relationship
                        </Button>
                        <Button variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
