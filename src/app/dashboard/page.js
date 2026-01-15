"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function DashboardSummary() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeSessions: 5, // Mock data for status cards
    pendingRequests: 2, // Mock data for status cards
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSummaryData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        setStats(prev => ({
          ...prev,
          totalUsers: data.length // This will be 10 based on JSONPlaceholder
        }));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch summary:", error);
        setLoading(false);
      }
    };

    getSummaryData();
  }, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold dark:text-white">Dashboard Overview</h2>
            <p className="text-gray-500 dark:text-gray-400">Welcome back! Here is what's happening today.</p>
          </div>

          {/* Status Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Total Users Card - PRIMARY REQUIREMENT */}
            <div className="p-6 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">+12%</span>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Users</h3>
              <p className="text-3xl font-bold dark:text-white">
                {loading ? "..." : stats.totalUsers}
              </p>
            </div>

            {/* Active Sessions Card */}
            <div className="p-6 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Active Sessions</h3>
              <p className="text-3xl font-bold dark:text-white">{stats.activeSessions}</p>
            </div>

            {/* Pending Requests Card */}
            <div className="p-6 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending Tasks</h3>
              <p className="text-3xl font-bold dark:text-white">{stats.pendingRequests}</p>
            </div>

          </div>

          {/* Additional Content: Quick Tips */}
          <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-2">Platform Tip</h3>
            <p className="opacity-90 max-w-xl">
              You can now manage your user database and toggle between light and dark themes directly from the settings panel.
            </p>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}