import useMediaQuery from "@/hooks/useMediaQuery";
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
  return <div>Navbar</div>;
}
