"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const isAbovemediaScreens = useMediaQuery("(min-width: 1060px)");
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "testimonies", label: "Testimonies" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      for (let i = sections.length; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuToggled(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      } bg-accentBackground`}
    >
      <nav className="mx-auto flex items-center justify-between px-6 container">
        <Link
          href="/"
          className="text-xl tracking-tight hover:text-secondary text-accent"
        >
          Brayan
        </Link>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-1">
          <div className="gap-1 items-center rounded-full flex px-4 py-1 bg-background">
            {navItems.map((navItem) => (
              <button
                key={navItem.id}
                onClick={() => handleClick(navItem.id)}
                className={`relative transition-all duration-300 rounded-full px-4 py-2 ${
                  activeSection === navItem.id
                    ? "text-accent font-bold"
                    : "text-grey hover:text-secondary"
                }`}
              >
                {navItem.label}
                {activeSection === navItem.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
