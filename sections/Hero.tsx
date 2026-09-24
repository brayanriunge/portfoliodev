import { CodeBlockDemo } from "@/components/CodeBlock";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="px-8 py-28 bg-background">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4 mx-auto">
        <div className="flex flex-col justify-between">
          <p className="text-accent px-4 font-[sora] italic">
            Software Engineering
          </p>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl animate-fade-in transition-all duration-300 transition-delay-100 font-bold leading-tight text-grey">
              Turning{" "}
              <span className="text-accent font-[sora]">complex technical</span>
              <br />
              challanges into clean,
              <br />
              <span className="text-secondary font-serif italic">
                reliable software.
              </span>
            </h1>
            <p className="text-lg text-secondaryText max-w-lg animate-fade-in transition-all duration-300 transiton-delay-200">
              Hi, I&apos;m Brian Mutahi — a software engineer specializing in
              React, Next.js, JavaScript and TypeScript. I build scalable,
              performant web applications that users love.
            </p>
            <button className="bg-accent hover:bg-accentBackground px-4 py-4 rounded-2xl text-background text-lg font-bold hover:text-grey transition-all duration-300 mt-4 animate-slide-in-left ">
              <div className="flex gap-4 items-center ">
                <Link href={"#contact"}>Contact Me</Link>{" "}
                <FaArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>

        <div
          className="mx-auto mt-4 animate-slide-in-right  
         "
        >
          <CodeBlockDemo />
        </div>
      </div>
    </section>
  );
}
