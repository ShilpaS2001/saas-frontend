"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // 1. Check for token in localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // 2. If no token, send to login
      router.push("/login");
    } else {
      // 3. If token exists, allow access
      setIsAuth(true);
    }
  }, [router]);

  // While checking the token, show nothing or a loading spinner
  // This prevents the "flash" of protected content
  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return children;
}