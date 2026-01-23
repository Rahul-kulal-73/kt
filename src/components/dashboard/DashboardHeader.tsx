import { TreePine, LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const DashboardHeader = () => {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      signOut();
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };
  
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <div className="h-10 w-10 rounded-lg overflow-hidden animate-in zoom-in duration-500">
            <Image
              src="/kutumba-tree-logo.jpg"
              alt="Kutumba Tree Logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <h1 className="text-xl font-extrabold text-kutumba-dark-text animate-in slide-in-from-left duration-500 delay-100">
            <span className="text-kutumba-maroon">Kutumba</span> Tree
          </h1>
        </Link>
            <div className="hidden sm:block border-l border-gray-300 pl-4">
              <h1 className="text-lg font-semibold">Welcome, {user?.first_name || user?.email?.split('@')[0] || 'User'}!</h1>
              <p className="text-sm text-gray-600">Build and explore your family heritage</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 border rounded-full text-sm font-medium" style={{ borderColor: '#64303A', color: '#64303A' }}>
              Free Plan
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md text-sm font-medium text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#64303A' }}
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
