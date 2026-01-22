import FamilyTreeBuilder from '@/app/dashboard/FamilyTreeBuilder/FamilyTreeBuilder';

interface PageProps {
    params: Promise<{
        treeId: string;
    }>;
}

export default async function TreePage({ params }: PageProps) {
    // Await params if needed in the future, currently FamilyTreeBuilder manages its own state
    const { treeId } = await params;

    return <FamilyTreeBuilder treeId={treeId} />;
}
