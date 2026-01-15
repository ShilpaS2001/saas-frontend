"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../utils/auth";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Added for UI completeness
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      login(email);
      router.push("/dashboard");
    }, 800);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Welcome back</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Login to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border dark:border-gray-700 rounded-xl bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border dark:border-gray-700 rounded-xl bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl bg-blue-600 text-white font-bold transition-all shadow-lg shadow-blue-500/30 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700 active:scale-[0.98]"
            }`}
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}