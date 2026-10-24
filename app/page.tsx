import About from "@/sections/About";
import Contact from "@/sections/contact";

import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import { Services } from "@/sections/Services";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
