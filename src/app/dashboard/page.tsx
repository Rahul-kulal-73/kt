'use client';

import DashboardHeader from './DashboardHeader';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Dashboard = () => {
  const { user } = useAuth();
  const [familyTrees, setFamilyTrees] = useState<any[]>([]); // Using array as user might have multiple
  const [loading, setLoading] = useState(true);

  // For MVP compatibility with LeftSection which expects single tree for now or List
  // Let's assume LeftSection can accept a list or we just pass the first one
  const activeTree = familyTrees.length > 0 ? familyTrees[0] : null;

  useEffect(() => {
    const fetchTrees = async () => {
      if (user?._id) {
        try {
          const res = await fetch(`/api/trees?userId=${user._id}`);
          if (res.ok) {
            const data = await res.json();
            const mapped = data.map((t: any) => ({
              id: t._id, // Map _id to id
              name: t.name,
              description: t.description,
              updated_at: t.updated_at
            }));
            setFamilyTrees(mapped);
          }
        } catch (error) {
          console.error('Failed to fetch trees', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchTrees();
  }, [user]);

  const handleCreateTree = async () => {
    if (user?._id) {
      try {
        const res = await fetch('/api/trees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: user._id,
            name: `${user.first_name}'s Family Tree`,
            description: 'My family heritage'
          })
        });

        if (res.ok) {
          const newTree = await res.json();
          setFamilyTrees(prev => [...prev, {
            id: newTree._id,
            name: newTree.name,
            description: newTree.description,
            updated_at: newTree.updated_at
          }]);
          toast.success('Family tree created');
        }
      } catch (error) {
        console.error('Failed to create tree', error);
        toast.error('Failed to create tree');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <LeftSection
            familyTree={activeTree}
            familyMembers={[]} // We don't fetch members here for MVP summary yet, or we could
            loading={loading}
            onCreateTree={handleCreateTree}
          />
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
