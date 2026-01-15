"use client";

import { logout } from "../../utils/auth";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 font-bold text-lg">SaaS</div>
        <nav className="px-4 space-y-2 text-sm">
          <a href="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">
            Dashboard
          </a>
          <a href="/dashboard/users" className="block px-3 py-2 rounded hover:bg-gray-100">
            Users
          </a>
          <a href="/dashboard/settings" className="block px-3 py-2 rounded hover:bg-gray-100">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h1 className="font-semibold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
