"use client";

import Link from "next/link";

export default function Navbar({ isLoggedIn }) {
  return (
    <header className="w-full border-b bg-white dark:bg-gray-950 dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
            SaaS<span className="text-blue-600">App</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="#features" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            About
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link href={isLoggedIn ? "/dashboard" : "/login"}>
            <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-blue-500/20 transition-all active:scale-95">
              {isLoggedIn ? "Dashboard" : "Get Started"}
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
}