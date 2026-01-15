"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright Section */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            SaaS<span className="text-blue-600">App</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} SaaS Project. Built for the Banao Shortlist Task.
          </p>
        </div>

        {/* Footer Links */}
        <nav className="flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="mailto:support@example.com" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Contact Support
          </Link>
        </nav>

      </div>
    </footer>
  );
}