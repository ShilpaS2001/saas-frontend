"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../utils/auth";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate signup delay for realism
    setTimeout(() => {
      // In this "Fake Auth" setup, signing up logs you in immediately
      login(email);
      router.push("/dashboard");
    }, 800);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Create account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Join us and start building today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border dark:border-gray-700 rounded-xl bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email address</label>
            <input
              type="email"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {isSubmitting ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}