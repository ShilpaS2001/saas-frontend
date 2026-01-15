"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("light");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    const savedTheme = localStorage.getItem("theme") || "light";

    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setName(parsed.name || "");
        setEmail(parsed.email || "");
      } catch (e) { console.error(e); }
    }
    setTheme(savedTheme);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);

    // 1. Persist to LocalStorage
    const profileData = { name, email };
    localStorage.setItem("profile", JSON.stringify(profileData));

    // 2. TRIGGER REFRESH: 
    // We dispatch a custom event so the Sidebar/Navbar knows the name changed
    window.dispatchEvent(new Event("profileUpdate"));

    // 3. Mock a network delay for better UX
    setTimeout(() => {
      setIsSaving(false);
      alert("✅ Profile updated successfully!");
    }, 500);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Settings</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <section className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase">User Profile</h3>
              <form onSubmit={handleSave} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border dark:border-gray-800 shadow-sm space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-gray-300">Full Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border dark:border-gray-700 bg-transparent dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl border dark:border-gray-700 bg-transparent dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button 
                  disabled={isSaving}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : "Save Profile"}
                </button>
              </form>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase">Preferences</h3>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border dark:border-gray-800 shadow-sm flex items-center justify-between">
                <span className="font-medium dark:text-white">Dark Mode</span>
                <button onClick={toggleTheme} className={`w-12 h-6 rounded-full transition-colors ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </div>
            </section>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}