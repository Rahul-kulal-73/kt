import mongoose, { Schema, Model } from 'mongoose';

export interface IFamilyTree {
    _id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

const FamilyTreeSchema = new Schema<IFamilyTree>({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const FamilyTree: Model<IFamilyTree> = mongoose.models.FamilyTree || mongoose.model<IFamilyTree>('FamilyTree', FamilyTreeSchema);

export default FamilyTree;
