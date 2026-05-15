"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type NavbarProps = {
  language: "en" | "es";
  onLanguageChange: (language: "en" | "es") => void;
};

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = {
    home: language === "en" ? "Home" : "Inicio",
    rooms: language === "en" ? "Rooms" : "Habitaciones",
    experiences: language === "en" ? "Experiences" : "Experiencias",
    gallery: language === "en" ? "Gallery" : "Galería",
    reservations: language === "en" ? "Reservations" : "Reservas",
    bookNow: language === "en" ? "Book Now" : "Reservar",
    menu: language === "en" ? "Menu" : "Menú",
    toggleMenu: language === "en" ? "Toggle menu" : "Abrir menú",
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-3">
      <div className={`mx-auto max-w-7xl rounded-2xl px-4 py-4 transition-all duration-300 ease-out md:px-6 md:py-5 ${scrolled || menuOpen ? "shadow-lg backdrop-blur" : "bg-transparent"}`} style={scrolled || menuOpen ? { backgroundColor: "rgba(231,229,225,0.92)" } : undefined}>
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src={scrolled || menuOpen ? "/images/logo-nidu-black.png" : "/images/logo-nidu.png"}
              alt="NIDU Nature House"
              width={190}
              height={62}
              className="h-9 w-auto transition-all duration-300 md:h-10"
              priority
            />
          </a>

          <nav className={`hidden items-center gap-8 text-sm transition-colors duration-300 md:flex ${scrolled ? "text-black" : "text-white"}`}>
            <a href="#">{t.home}</a>
            <a href="#rooms">{t.rooms}</a>
            <a href="#experiences">{t.experiences}</a>
            <a href="#gallery">{t.gallery}</a>
            <a href="#">{t.reservations}</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className={`rounded-full border px-1 py-1 text-xs ${scrolled ? "border-black/20" : "border-white/30"}`}>
              <button
                className={`rounded-full px-3 py-1 transition ${language === "es" ? (scrolled ? "bg-black text-white" : "bg-white text-black") : (scrolled ? "text-black" : "text-white")}`}
                onClick={() => onLanguageChange("es")}
              >
                ES
              </button>
              <button
                className={`rounded-full px-3 py-1 transition ${language === "en" ? (scrolled ? "bg-black text-white" : "bg-white text-black") : (scrolled ? "text-black" : "text-white")}`}
                onClick={() => onLanguageChange("en")}
              >
                EN
              </button>
            </div>

            <button className={`rounded-full border px-5 py-2 text-sm transition-colors duration-300 ${scrolled ? "border-black/20 text-black hover:bg-black/5" : "text-white"}`} style={scrolled ? undefined : { borderColor: "rgba(231,229,225,0.5)", backgroundColor: "rgba(164,84,52,0.85)" }}>
              {t.bookNow}
            </button>
          </div>

          <button
            className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.2em] transition-colors duration-300 md:hidden ${scrolled || menuOpen ? "border-black/20 text-black" : "text-white"}`}
            style={scrolled || menuOpen ? undefined : { borderColor: "rgba(231,229,225,0.5)", backgroundColor: "rgba(164,84,52,0.8)" }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={t.toggleMenu}
            aria-expanded={menuOpen}
          >
            {t.menu}
          </button>
        </div>

        <div className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${menuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <nav className="min-h-0 overflow-hidden">
            <div className="flex flex-col gap-4 pb-1 pt-2 text-sm text-black">
              <div className="mb-1 flex w-fit rounded-full border border-black/20 px-1 py-1 text-xs">
                <button
                  className={`rounded-full px-3 py-1 transition ${language === "es" ? "bg-black text-white" : "text-black"}`}
                  onClick={() => onLanguageChange("es")}
                >
                  ES
                </button>
                <button
                  className={`rounded-full px-3 py-1 transition ${language === "en" ? "bg-black text-white" : "text-black"}`}
                  onClick={() => onLanguageChange("en")}
                >
                  EN
                </button>
              </div>
              <a href="#" onClick={() => setMenuOpen(false)}>{t.home}</a>
              <a href="#rooms" onClick={() => setMenuOpen(false)}>{t.rooms}</a>
              <a href="#experiences" onClick={() => setMenuOpen(false)}>{t.experiences}</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>{t.gallery}</a>
              <a href="#" onClick={() => setMenuOpen(false)}>{t.reservations}</a>
              <button className="mt-2 w-fit rounded-full border border-black/20 px-5 py-2 text-sm text-black transition hover:bg-black/5">
                {t.bookNow}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
