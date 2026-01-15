"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  // 1. Fetch Data on Mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // 2. Handle Search and Sort
  useEffect(() => {
    let result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    result.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredUsers(result);
  }, [searchTerm, sortOrder, users]);

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold dark:text-white">User Management</h2>
            <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
              Total Users: {users.length}
            </div>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-full sm:max-w-md">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button
              onClick={toggleSort}
              className="w-full sm:w-auto px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              Sort {sortOrder === "asc" ? "A-Z ↑" : "Z-A ↓"}
            </button>
          </div>

          {/* Users Table */}
          <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-10 text-center dark:text-gray-400">Loading users...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
                    <tr>
                      <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Name</th>
                      <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Email</th>
                      <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Company</th>
                      <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <tr key={user.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                          <td className="p-4 font-medium dark:text-white">{user.name}</td>
                          <td className="p-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                          <td className="p-4 text-gray-600 dark:text-gray-400">{user.company.name}</td>
                          <td className="p-4">
                            <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                              {user.website}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="p-10 text-center text-gray-500">No users found matching your search.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}