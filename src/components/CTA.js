"use client";

import Link from "next/link";

export default function CTA({ isLoggedIn }) {
  return (
    <section className="bg-blue-600 dark:bg-blue-700 py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Ready to build your SaaS product?
        </h3>

        {/* Supporting Text */}
        <p className="mt-4 text-blue-100 dark:text-blue-50 max-w-2xl mx-auto text-lg opacity-90">
          Start building today with a modern frontend stack designed for speed and scalability. 
          Join hundreds of developers scaling their ideas.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href={isLoggedIn ? "/dashboard" : "/login"}>
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-gray-100 transition-all shadow-xl active:scale-95">
              {isLoggedIn ? "Go to Dashboard" : "Get Started Now"}
            </button>
          </Link>

          <button className="w-full sm:w-auto px-10 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition-all active:scale-95">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}