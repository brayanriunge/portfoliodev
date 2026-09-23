import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
