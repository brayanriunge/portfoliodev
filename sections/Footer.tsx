"use client";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
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
            navItems[i].id;
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="bg-background  px-8 py-8">
      <div className=" flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-7 gap-2 lg:grid-cols-7 mt-4">
          {navItems.map((navItem) => (
            <button
              key={navItem.id}
              onClick={() => handleClick(navItem.id)}
              className={` text-grey text-xl cursor-pointer `}
            >
              {navItem.label}
            </button>
          ))}
        </div>
        <div className="flex mt-10 cursor-pointer flex-row items-center gap-4">
          <a
            href="https://github.com/brayanriunge"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="GitHub Profile"
          >
            <AiFillGithub size={30} color="#ffffff" />
          </a>
          <a
            href="https://linkedin.com/in/riunge-brian/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={30} color="#ffffff" />
          </a>
        </div>
        <div className="flex flex-row gap-2 text-grey text-xl mt-10 mb-10">
          <p>Copyright</p>
          <p> All rights reserved by Devloper</p>
          <p>-</p>
          <p>2026</p>
        </div>
      </div>
    </section>
  );
}
