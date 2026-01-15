"use client";

import { useState } from "react";
import { logout } from "../../utils/auth";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  // Helper to highlight active link
  const isActive = (path) => pathname === path;

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/dashboard/users" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-950 transition-colors">
      
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 hidden md:block">
        <div className="p-6 font-bold text-xl text-blue-600 dark:text-blue-400">SaaS App</div>
        <nav className="px-4 mt-4 space-y-1 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2.5 rounded-lg transition-colors ${
                isActive(link.href)
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-gray-900 border-b dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 dark:text-gray-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <h1 className="font-semibold text-gray-800 dark:text-white capitalize">
              {pathname.split("/").pop() || "Overview"}
            </h1>
          </div>
          
          <button
            onClick={handleLogout}
            className="text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 dark:bg-red-900/10 px-4 py-2 rounded-lg transition-all"
          >
            Logout
          </button>
        </header>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800 px-6 py-4 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md ${
                  isActive(link.href) ? "bg-blue-50 text-blue-600" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}