"use client";
import { GlareCard } from "@/components/ui/glare-card";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const services = [
  {
    id: 1,
    heading: "Frontend Development",
    description:
      "Turning designs into responsive, accessible interfaces with React, Next.js, and TypeScript — from UI/UX and layout decisions to smooth, high-performance experiences across desktop, tablet, and mobile.",
    github: "https://github.com/brayanriunge",
    linkedIn: "https://www.linkedin.com/in/riunge-brian/",
  },
  {
    id: 2,
    heading: "Backend Development",
    description:
      "Designing and building APIs, auth, and data layers with NestJS and Go, backed by PostgreSQL — handling everything from payments and permissions to audit trails and business logic.",
    github: "https://github.com/brayanriunge",
    linkedIn: "https://www.linkedin.com/in/riunge-brian/",
  },
  {
    id: 3,
    heading: "Fullstack Development",
    description:
      "Owning a product end to end — frontend, backend, database, and deployment — to ship complete, reliable platforms for fintech, government, ed-tech, and real-estate clients.",
    github: "https://github.com/brayanriunge",
    linkedIn: "https://www.linkedin.com/in/riunge-brian/",
  },
];

export function Services() {
  return (
    <section className="bg-background  px-8 py-8" id="services">
      <div className="space-y-4 flex mt-10 px-2 mb-4">
        <p className="text-accent px-4 font-[sora] italic">Services</p>
      </div>
      <div className="space-y-4  ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-accent font-[sora]">
          What I Build
        </h2>
        <p className=" px-4 text-grey text-xl">
          I turn complex business problems into scalable, clean, and efficient
          software applications. From designing robust system architectures to
          launching responsive user interfaces, I engineer digital products with
          modern tech stacks that focus on high performance, reliable uptime,
          and intuitive user experiences. Whether you need a minimum viable
          product (MVP) built from scratch or system performance optimized, I
          write code that drives business results.
        </p>
      </div>
      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center px-8 py-8 gap-6">
        {services.map((service) => (
          <GlareCard className="flex flex-col  p-6  bg-card" key={service.id}>
            <h1 className="text-3xl text-grey mt-12">{service.heading}</h1>
            <p className="text-lg text-secondarytext mt-10 mb-8">
              {service.description}
            </p>
            <div className="flex relative z-30 pointer-events-auto flex-row items-center gap-4">
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
          </GlareCard>
        ))}
      </div>
    </section>
  );
}
