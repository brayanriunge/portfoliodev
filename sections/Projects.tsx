import Image from "next/image";
import React from "react";

const projects = [
  {
    id: 1,
    lin: "/public/consulting.png",
    describe:
      "A consulting website to position  trusted advisors, showcase your specialized expertise, and convert site visitors into paying clients.",
    tools: ["Nextjs", "Tailwind CSS", "Typescript"],
  },
];

export default function Projects() {
  return (
    <section className="bg-background  px-8 py-8" id="projects">
      <div className="space-y-4 flex mt-10 px-2 mb-4">
        <p className="text-accent px-4 font-[sora] italic">Contact</p>
      </div>
      <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3">
        {projects.map((project) => (
          <div className="p-4 flex flex-col gap-4 rounded-lg" key={project.id}>
            <Image
              src={project.lin}
              height={50}
              width={50}
              alt="project image"
              className="rounded-md"
            />
            <p className="text-grey text-xl">{project.describe}</p>
            {project.tools.map((tool) => (
              <div className="flex flex-row gap-3" key={tool[0]}>
                {tool}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
