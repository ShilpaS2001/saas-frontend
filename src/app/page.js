"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    // overflow-x-hidden is a critical Banao tech requirement
    <main className="bg-white min-h-screen overflow-x-hidden transition-colors duration-300 dark:bg-gray-950">
      
      {/* We pass isLoggedIn to the components so they can change 
        their buttons from "Login" to "Go to Dashboard" 
      */}
      <Navbar isLoggedIn={isLoggedIn} />
      
      <Hero isLoggedIn={isLoggedIn} />
      
      <div className="space-y-20 pb-20">
        <Features />
        <CTA isLoggedIn={isLoggedIn} />
      </div>
      
      <Footer />
    </main>
  );
}