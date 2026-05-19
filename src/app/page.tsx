"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import Gallery from "../sections/Gallery";
import Rooms from "../sections/Rooms";

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "es">(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const storedLanguage = window.localStorage.getItem("nidu-language");
    return storedLanguage === "en" || storedLanguage === "es" ? storedLanguage : "en";
  });

  const handleLanguageChange = (nextLanguage: "en" | "es") => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("nidu-language", nextLanguage);
  };

  return (
    <main className="w-full" style={{ backgroundColor: "#161514" }}>
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <Experience language={language} />
      <Gallery language={language} />
      <Rooms language={language} />
    </main>
  );
}
