"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("light");

  // 1. Initial Load: Sync UI with existing preferences
  useEffect(() => {
    // Load Profile
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setName(parsed.name || "");
        setEmail(parsed.email || "");
      } catch (e) { console.error(e); }
    }

    // Load Theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    
    // Apply class to <html> on load to prevent flash
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 2. Save Profile Function
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify({ name, email }));
    alert("✅ Profile updated!");
  };

  // 3. Unified Theme Toggle (The Fix)
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Update the HTML class and localStorage
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="max-w-4xl mx-auto p-4 md:p-8 transition-colors">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">Settings</h2>

          <div className="grid gap-10 md:grid-cols-2">
            
            {/* --- Profile Section --- */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">User Profile</h3>
              <form onSubmit={handleSave} className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-2xl p-6 shadow-sm space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-xl bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-xl bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-transform active:scale-95">
                  Save Changes
                </button>
              </form>
            </section>

            {/* --- Appearance Section --- */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Appearance</h3>
              <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block font-bold text-gray-900 dark:text-white">Dark Mode</span>
                    <span className="text-sm text-gray-500">Switch between light and dark themes.</span>
                  </div>
                  
                  {/* Custom Toggle Switch */}
                  <button
                    onClick={toggleTheme}
                    className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                      theme === "dark" ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
                        theme === "dark" ? "translate-x-8" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm">
                Current theme is set to: <span className="font-bold uppercase">{theme}</span>
              </div>
            </section>

          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}