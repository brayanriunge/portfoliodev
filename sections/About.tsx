import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="px-8 py-8 bg-accentBackground">
      <div className="space-y-4 flex px-2 ">
        <p className="text-accent px-4 font-[sora] italic">About Me</p>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl animate-fade-in transition-all duration-300 transition-delay-100 font-bold leading-tight text-grey px-2">
        <p>
          {" "}
          Building the future,
          <span className="text-accent font-[sora]">
            one component at a time.
          </span>
        </p>
      </h2>
      <div className="flex flex-col md:flex-row lg-flex-row items-center justify-center gap-6 px-2">
        <div className="flex space-y-4 flex-col md:flex-col lg:flex-row text-grey text-lg  max-w-md animate-slide-in-left transition-all duration-300 transiton-delay-200 gap-2">
          <div className="text-secondaryText">
            <p className="">
              I&apos;m a passionate software engineer with experience in
              crafting digital products that make a difference. My journey
              started with a curiosity for how things work on the web, and it
              has evolved into a deep expertise in modern frontend technologies.
            </p>
            <p className="py-4">
              I specialize in React, Next.js, and TypeScript, building
              everything from sleek landing pages to complex enterprise
              applications. My approach combines technical excellence with a
              keen eye for design and user experience.
            </p>
            <p className="py-4">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </div>
        </div>
        <div className="space-y-4 w-full">
          <Image
            src={"/profile.avif"}
            height={600}
            width={600}
            alt="profile"
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
}
