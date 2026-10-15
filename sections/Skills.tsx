import React from "react";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";

const titles = [
  {
    id: 1,
    text: "Frontend Development",
  },
  {
    id: 2,
    text: " Backend Development",
  },
  {
    id: 3,
    text: " Styling",
  },
];

const frontend = [
  {
    id: 1,
    text1: "HTML",
    text2: "Experienced",
    icon: <IoLogoHtml5 />,
  },
  {
    id: 2,
    text1: "JavaScript",
    text2: "Experienced",
    icon: <IoLogoJavascript />,
  },
  {
    id: 3,
    text1: "TypeScript",
    text2: "Experienced",
    icon: "",
  },
  {
    id: 4,
    text1: "React",
    text2: "Experienced",
    icon: <FaReact />,
  },
  {
    id: 5,
    text1: "Next JS",
    text2: "Experienced",
    icon: "",
  },
  {
    id: 6,
    text1: "Vite",
    text2: "Experienced",
    icon: "",
  },
];

export default function Skills() {
  return (
    <div className="px-8 py-8 bg-primary" id="skills">
      <p className="text-accent px-4 font-[sora] italic">My Skills</p>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-col-2 gap-6 mt-4">
        <div className="grid grid-col-2 bg-background">
          <p className="text-accent font-bold font-[Sora] flex items-center justify-center">
            title
          </p>
          <div className="flex items-center gap-4 justify-evenly">
            <div>icon</div>
            <div className="flex flex-col gap-2 text-grey">
              <p>text 1</p>
              <p>text 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
