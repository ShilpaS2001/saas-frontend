"use client";

import Link from "next/link";

export default function Hero({ isLoggedIn }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-center transition-colors">
      
      {/* Heading with Dark Mode support */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
        Build Your SaaS <span className="text-blue-600">Faster</span>
      </h2>

      {/* Subtext */}
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Launch your product with a modern, scalable frontend built using Next.js and Tailwind CSS. 
        Experience the power of a pixel-perfect design.
      </p>

      {/* Buttons with Logic */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
        
        {/* Main CTA: Changes based on Auth status */}
        <Link href={isLoggedIn ? "/dashboard" : "/login"}>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold transition-all hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25">
            {isLoggedIn ? "Go to Dashboard" : "Start Free Trial"}
          </button>
        </Link>

        {/* Secondary Button */}
        <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
          Learn More
        </button>
      </div>

    </section>
  );
}