import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-neutral-50 overflow-hidden lg:ml-0">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}