import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import { Services } from "@/sections/Services";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}
