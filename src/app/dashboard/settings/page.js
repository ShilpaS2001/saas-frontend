"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("light");

  // Load saved settings
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    const savedTheme = localStorage.getItem("theme");

    if (savedProfile) {
      setName(savedProfile.name || "");
      setEmail(savedProfile.email || "");
    }

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  // Save profile
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "profile",
      JSON.stringify({ name, email })
    );
    alert("Profile saved");
  };

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h2 className="text-xl font-bold mb-6">Settings</h2>

        {/* Profile Form */}
        <form
          onSubmit={handleSave}
          className="max-w-md bg-white border rounded-xl p-6 space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Profile
          </button>
        </form>

        {/* Theme Toggle */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm text-gray-600">Theme:</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded-md"
          >
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
        </div>

      </DashboardLayout>
    </ProtectedRoute>
  );
}
