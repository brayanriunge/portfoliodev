"use client";
import { CodeBlockDemo } from "@/components/CodeBlock";
import Link from "next/link";
import { motion } from "motion/react";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="home" className="px-8 py-28 bg-background">
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between px-2 gap-4 mx-auto">
        <div className="flex flex-col justify-between">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-accent px-4 font-[sora] italic"
          >
            Software Engineering
          </motion.p>
          <div className="space-y-4">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-5xl md:text-6xl lg:text-7xl  font-bold leading-tight text-grey"
            >
              Turning{" "}
              <span className="text-accent font-[sora]">complex technical</span>
              <br />
              challanges into clean,
              <br />
              <span className="text-secondary font-serif italic">
                reliable software.
              </span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-lg text-secondaryText max-w-lg transition-all "
            >
              Hi, I&apos;m Brian Mutahi — a software engineer specializing in
              React, Next.js, JavaScript and TypeScript. I build scalable,
              performant web applications that users love.
            </motion.p>
            <Link href={"#contact"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accentBackground px-4 py-4 rounded-2xl text-background text-lg font-bold hover:text-grey  mt-4  cursor-pointer"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex gap-4 items-center "
                >
                  Contact Me <FaArrowRightLong size={20} />
                </motion.div>
              </motion.button>
            </Link>
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
