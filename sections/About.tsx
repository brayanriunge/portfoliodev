import Image from "next/image";
import React from "react";
import { SiCssdesignawards } from "react-icons/si";
import { TiTick } from "react-icons/ti";

export default function About() {
  return (
    <>
      <section id="about" className="px-8 py-8 bg-primary">
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
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 mx-auto px-6">
          <div className="flex space-y-4 flex-row md:flex-col lg:flex-col  text-grey text-lg  max-w-lg animate-slide-in-left transition-all duration-300 transiton-delay-200 gap-2">
            <div className="text-secondaryText">
              <p className="">
                I&apos;m a passionate software engineer with experience in
                crafting digital products that make a difference. My journey
                started with a curiosity for how things work on the web, and it
                has evolved into a deep expertise in modern frontend
                technologies. add
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
          <div className="space-y-4 w-full items-center justify-center flex ">
            <Image
              src={"/profile.avif"}
              height={600}
              width={600}
              alt="profile"
              className="rounded-lg aspect-3/2 w-full "
            />
          </div>
        </div>
      </section>
      <section className="px-10 py-10 bg-primary ">
        <div className="px-4 py-4 bg-background rounded-md border border-accent">
          <div className="flex flex-col p-4">
            <div className=" items-start flex">
              <p className=" bg-forecolor rounded-xl px-4 py-3 tracking-wide uppercase text-accent text-lg font-bold">
                value propostion
              </p>
            </div>
            <h2 className="text-4xl text-grey mt-4 font-semibold tracking-wider">
              Why Collaborate With Me?
            </h2>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4  mt-8">
              <div className="flex flex-col gap-2 justify-between">
                <div className="flex row gap-4 flex-row items-center">
                  <div className="rounded-full p-1 border-2 border-accent">
                    <TiTick color="#4ade80" size={12} />
                  </div>
                  <p className="font-bold text-grey text-3xl">
                    {" "}
                    Technical Reliability
                  </p>
                </div>
                <p className="text-secondaryText text-lg mt-6">
                  I design and build software with a fault-tolerant,
                  reliability-first mindset, ensuring systems remain highly
                  available, scalable, and performant under heavy loads. My
                  approach bridges rigorous engineering practices with proactive
                  monitoring to minimize downtime and secure data integrity.
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-between">
                <div className="flex row gap-4 flex-row items-center">
                  <SiCssdesignawards color="#4ade80" size={20} />

                  <p className="font-bold text-grey text-3xl">
                    {" "}
                    Design Sensitivity
                  </p>
                </div>
                <p className="text-secondaryText text-lg mt-6">
                  I build software that balances technical precision with
                  high-fidelity user experiences. Many engineers treat design as
                  an afterthought. I view it as a core requirement. True design
                  sensitivity means ensuring that clean architecture under the
                  hood directly translates to a seamless, accessible, and
                  high-performance interface for the user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
