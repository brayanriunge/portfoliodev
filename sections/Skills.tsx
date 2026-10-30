"use client";
import { motion } from "motion/react";
import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import {
  SiExpress,
  SiMaterialdesignicons,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const frontend = [
  {
    id: 1,
    text1: "HTML",
    text2: "Experienced",
    icon: <IoLogoHtml5 color="#E44D26" size={35} />,
  },
  {
    id: 2,
    text1: "JavaScript",
    text2: "Experienced",
    icon: <IoLogoJavascript color="#F5DE19" size={30} />,
  },
  {
    id: 3,
    text1: "TypeScript",
    text2: "Experienced",
    icon: <SiTypescript color="#007ACC" size={30} />,
  },
  {
    id: 4,
    text1: "React",
    text2: "Experienced",
    icon: <FaReact color="#5ED4F5" size={30} />,
  },
  {
    id: 5,
    text1: "Next JS",
    text2: "Experienced",
    icon: <SiNextdotjs color="#000000" size={30} />,
  },
  {
    id: 6,
    text1: "Vite",
    text2: "Experienced",
    icon: <SiVite color="#646CFF" size={30} />,
  },
];

const backend = [
  {
    id: 1,
    text1: "Express JS",
    text2: "Experienced",
    icon: <SiExpress color="#F7DF1E" size={30} />,
  },
  {
    id: 2,
    text1: "Pstgress",
    text2: "Experienced",
    icon: <SiPostgresql color="#336791 " size={30} />,
  },
  {
    id: 3,
    text1: "Mongoose DB",
    text2: "Experienced",
    icon: <SiMongodb color="#00684A" size={30} />,
  },
  {
    id: 4,
    text1: "MySkil",
    text2: "Experienced",
    icon: <GrMysql color="#00718A" size={30} />,
  },
  {
    id: 5,
    text1: "Node JS",
    text2: "Experienced",
    icon: <FaNodeJs color="#5DAD45" size={30} />,
  },
];

const styles = [
  {
    id: 1,
    text1: "Tailwind CSS",
    text2: "Experienced",
    icon: <SiTailwindcss color="#00BCFF" size={30} />,
  },
  {
    id: 2,
    text1: "Bootstrap",
    text2: "Experienced",
    icon: <FaBootstrap color="#7740FF" size={30} />,
  },
  {
    id: 3,
    text1: "ShadCN",
    text2: "Experienced",
    icon: <SiShadcnui color="#ffffff" size={30} />,
  },
  {
    id: 4,
    text1: "Material UI",
    text2: "Experienced",
    icon: <SiMaterialdesignicons color="#0079F5" size={30} />,
  },
];

export default function Skills() {
  return (
    <div className="px-8 py-8 bg-primary" id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="space-y-4 flex mt-10 px-2 mb-4 "
      >
        <p className="text-accent px-4 font-[sora] italic">My Skills</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-2 gap-6 mt-4">
        <div className=" p-2 bg-background rounded-xl border-2 border-accent">
          <p className="text-accent font-bold font-[Sora] flex items-center p-6 text-xl justify-center">
            Frontend Development
          </p>

          <motion.div className="grid grid-cols-2 mb-4">
            {frontend.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center gap-4 justify-center p-3"
              >
                <div>{item.icon}</div>
                <div className="flex flex-col gap-1 text-grey">
                  <p className="font-bold ">{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className=" p-2 bg-background rounded-xl border-2 border-accent">
          <p className="text-accent font-bold font-[Sora] flex items-center p-6 text-xl justify-center">
            Backend Development
          </p>

          <div className="grid grid-cols-2  mb-4">
            {backend.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 justify-center p-3"
              >
                <div>{item.icon}</div>
                <div className="flex flex-col gap-1 text-grey">
                  <p className="font-bold ">{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" p-2 bg-background rounded-xl border-2 border-accent">
          <p className="text-accent font-bold font-[Sora] flex items-center p-6 text-xl  justify-center">
            Styling
          </p>

          <div className="grid grid-cols-2 mb-4">
            {styles.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 justify-center p-3"
              >
                <div>{item.icon}</div>
                <div className="flex flex-col gap-1 text-grey">
                  <p className="font-bold ">{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
