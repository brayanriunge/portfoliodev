"use client";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  SiAppwrite,
  SiNextdotjs,
  SiPostgresql,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const projects = [
  {
    id: 1,
    lin: "/consulting.png",
    describe:
      "A consulting website to position  trusted advisors, showcase your specialized expertise, and convert site visitors into paying clients.",
    tools: [
      <SiNextdotjs color="#000000" size={30} key="first" />,
      <SiTailwindcss color="#00BCFF" size={30} key="second" />,
      <SiTypescript color="#007ACC" size={30} key="third" />,
    ],
    src: "https://consultingdev.vercel.app/",
  },
  {
    id: 2,
    lin: "/gym.png",
    describe:
      "A gym website that act as a digital storefront and 24/7 informational hub that converts prospective visitors into members while retaining existing ones.",
    tools: [
      <FaReact color="#5ED4F5" size={30} key="first" />,
      <SiTailwindcss color="#00BCFF" size={30} key="second" />,
      <SiTypescript color="#007ACC" size={30} key="third" />,
      <TbBrandFramerMotion color="#5ED4F5" size={30} key="four" />,
    ],
    src: "https://evolvegym.vercel.app/",
  },
  {
    id: 3,
    lin: "/mental.png",
    describe:
      "The primary purpose of this mental health application is to provide an accessible, all-in-one ecosystem for self-awareness, emotional validation, and mutual support.",
    tools: [
      <SiNextdotjs color="#000000" size={30} key="first" />,
      <SiTailwindcss color="#00BCFF" size={30} key="second" />,
      <SiTypescript color="#007ACC" size={30} key="third" />,
      <TbBrandFramerMotion color="#5ED4F5" size={30} key="four" />,
      <SiPostgresql color="#336791 " size={30} key="five" />,
    ],
    src: "https://mentalhealthdev.vercel.app/",
  },
  {
    id: 4,
    lin: "/healthcare.png",
    describe:
      "The purpose of a healthcare appointment scheduling application is to streamline and digitize the connection between patients and medical facilities, allowing individuals to conveniently book visits online while administrators manage provider availability, through a centralized dashboard.",
    tools: [
      <SiNextdotjs color="#000000" size={30} key="first" />,
      <SiTailwindcss color="#00BCFF" size={30} key="second" />,
      <SiTypescript color="#007ACC" size={30} key="third" />,
      <SiShadcnui color="#ffffff" size={30} key="four" />,
      <SiAppwrite color="#FD366E" size={30} key="five" />,
    ],
    src: "https://healthcaredev.vercel.app/",
  },
  {
    id: 5,
    lin: "/jambo.png",
    describe:
      "The purpose of a bar and restaurant website is to serve as a digital storefront that drives foot traffic by providing essential information to potential diners.",
    tools: [
      <SiNextdotjs color="#000000" size={30} key="first" />,
      <SiTailwindcss color="#00BCFF" size={30} key="second" />,
      <SiTypescript color="#007ACC" size={30} key="third" />,
    ],
    src: "https://jambolounge.vercel.app/",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.4,
    },
  },
};
export default function Projects() {
  return (
    <section className="bg-background  px-8 py-8" id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="space-y-4 flex mt-10 px-2 mb-4"
      >
        <p className="text-accent px-4 font-[sora] italic">Project</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
            transition={{ delay: (index % 3) * 0.05 }}
            className="p-6 flex flex-col gap-10 rounded-lg border-accent border-2"
            key={project.id}
          >
            <Image
              src={project.lin}
              height={400}
              width={400}
              alt="project image"
              className="rounded-md"
              loading="eager"
            />
            <p className="text-grey text-lg">{project.describe}</p>

            <div className="flex flex-row gap-3 text-grey">
              {project.tools.map((toolName, index) => (
                <div className="bg-forecolor p-2 rounded-md" key={index}>
                  {toolName}
                </div>
              ))}
            </div>
            <a href={project.src} target="-blank">
              <div className="flex items-center justify-center mb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent hover:bg-accentBackground px-4 py-4 rounded-2xl text-background text-lg font-bold hover:text-grey transition-all duration-300 mt-4 animate-slide-in-left cursor-pointer"
                >
                  <div className="flex gap-4 items-center ">
                    View live Site
                    <FaArrowRightLong size={20} />
                  </div>
                </motion.button>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
