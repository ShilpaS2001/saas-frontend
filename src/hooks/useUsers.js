"use client";

import { useEffect, useState, useMemo } from "react";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // Optimized Search and Sort logic using useMemo
  const filteredUsers = useMemo(() => {
    let result = [...users].filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    result.sort((a, b) => {
      return sortOrder === "asc" 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    });

    return result;
  }, [users, searchTerm, sortOrder]);

  return { 
    users: filteredUsers, 
    totalCount: users.length, // Useful for the Dashboard Summary!
    loading, 
    error, 
    searchTerm, 
    setSearchTerm, 
    toggleSort: () => setSortOrder(prev => prev === "asc" ? "desc" : "asc"),
    sortOrder 
  };
}