"use client";

import { useEffect, useState } from "react";
import { logout } from "../../utils/auth";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for the user profile data
  const [userName, setUserName] = useState("User");

  // Load and listen for Profile Updates
  useEffect(() => {
    const loadProfile = () => {
      const savedProfile = localStorage.getItem("profile");
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        setUserName(parsed.name || "User");
      }
    };

    loadProfile(); // Initial load

    // Listen for the custom event we added in the Settings Page
    window.addEventListener("profileUpdate", loadProfile);
    
    return () => window.removeEventListener("profileUpdate", loadProfile);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const isActive = (path) => pathname === path;

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/dashboard/users" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 hidden md:flex flex-col">
        <div className="p-6">
          <div className="font-black text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SaaS App
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive(link.href)
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* User Mini-Profile in Sidebar */}
        <div className="p-4 border-t dark:border-gray-800">
          <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{userName}</p>
              <p className="text-xs text-gray-500 truncate">Admin Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Topbar */}
        <header className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <h1 className="font-bold text-gray-900 dark:text-white capitalize">
              {pathname.split("/").pop() || "Overview"}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm font-medium text-gray-500 dark:text-gray-400">
              Hi, <span className="text-blue-600 dark:text-blue-400 font-bold">{userName}</span>
            </span>
            <button
              onClick={handleLogout}
              className="text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded-xl transition-all"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bg-white dark:bg-gray-900 border-b dark:border-gray-800 p-4 space-y-2 shadow-2xl z-30 animate-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-bold ${
                  isActive(link.href) 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}