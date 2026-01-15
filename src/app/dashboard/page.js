"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function DashboardSummary() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeSessions: 5,
    pendingRequests: 2,
  });
  const [loading, setLoading] = useState(true);

  // Function to fetch data - demonstrates "Read" from CRUD
  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Primary Requirement: API Integration
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      
      setStats(prev => ({
        ...prev,
        totalUsers: data.length
      }));
    } catch (error) {
      console.error("Failed to fetch summary:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-8 animate-in fade-in duration-700">
          {/* Header Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Dashboard Overview
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Welcome back! Here's a real-time look at your platform.
            </p>
          </div>

          {/* Status Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Total Users Card */}
            <div className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <button 
                  onClick={fetchDashboardData}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Refresh
                </button>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Total Users</h3>
              <p className="text-4xl font-black text-gray-900 dark:text-white mt-1">
                {loading ? <span className="animate-pulse">...</span> : stats.totalUsers}
              </p>
            </div>

            {/* Active Sessions Card */}
            <div className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Active Now</h3>
              <p className="text-4xl font-black text-gray-900 dark:text-white mt-1">{stats.activeSessions}</p>
            </div>

            {/* Pending Tasks Card */}
            <div className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Pending Tasks</h3>
              <p className="text-4xl font-black text-gray-900 dark:text-white mt-1">{stats.pendingRequests}</p>
            </div>

          </div>

          {/* Featured Action Card */}
          <div className="relative overflow-hidden p-8 bg-blue-600 dark:bg-blue-700 rounded-3xl text-white shadow-2xl shadow-blue-500/20">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Theme Personalization</h3>
              <p className="opacity-90 max-w-xl mb-4">
                Your preference for Dark or Light mode is automatically saved to your profile settings and persists across sessions.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-sm font-medium">
                  Auto-Sync Enabled
                </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}