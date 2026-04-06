"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Skills from "./components/skill"; 
import Projects from "./components/projects"; 
import Contact from "./components/contact"; 
import Footer from "./components/footer"; 

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode initialization and updates
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // Default to dark mode if no saved theme exists
    const initialDarkMode = savedTheme ? savedTheme === "dark" : true; 

    // Apply initial dark mode class to document root
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Set initial state and save to localStorage
    setDarkMode(initialDarkMode);
    localStorage.setItem("theme", initialDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initialDarkMode);

    // Update class on state change
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: { matches: any; }) => {
      const newDarkMode = savedTheme ? savedTheme === "dark" : e.matches;
      setDarkMode(newDarkMode);
      document.documentElement.classList.toggle("dark", newDarkMode);
      localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []); // Initial setup

  // Update DOM and local storage on theme change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}