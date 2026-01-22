import {
  TreePine,
  Star,
  Plus,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

interface FamilyTreeHeroProps {
  familyTree: any;
  familyMembers: any[];
  loading: boolean;
  onCreateTree: () => void;
}

const FamilyTreeHero = ({ familyTree, familyMembers, loading, onCreateTree }: FamilyTreeHeroProps) => {
  return (
    <div className="rounded-lg border-2 bg-white shadow-sm" style={{ borderColor: '#d4c5cb' }}>
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <TreePine className="h-5 w-5" style={{ color: '#64303A' }} />
            Your Family Tree
            <span className="ml-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              <Star className="inline h-3 w-3 mr-1" />
              Hero Feature
            </span>
          </h3>
          {!familyTree && (
            <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50" onClick={onCreateTree} disabled={loading}>
              <Plus className="h-4 w-4" />
              Create Tree
            </button>
          )}
        </div>
      </div>
      <div className="px-6 py-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-t-transparent rounded-full mx-auto mb-4" style={{ borderColor: '#64303A' }}></div>
            <p className="text-gray-600">Loading your family tree...</p>
          </div>
        ) : familyTree ? (
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#64303A' }}>
                <TreePine className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{familyTree.name}</h4>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{familyMembers.length} members</span>
                </div>
                <p className="text-sm text-gray-600">{familyTree.description || 'Your family tree'}</p>
              </div>
            </div>
            <Link href={`/tree/${familyTree.id}`}>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowRight className="h-5 w-5" style={{ color: '#64303A' }} />
              </button>
            </Link>
          </div>
        ) : (
          <div className="text-center py-8">
            <TreePine className="h-12 w-12 mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500 mb-4">No family tree yet</p>
            <button className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200" onClick={onCreateTree} disabled={loading}>
              <Plus className="h-4 w-4" />
              Create Your First Tree
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyTreeHero;
