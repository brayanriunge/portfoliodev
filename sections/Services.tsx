import { GlareCard } from "@/components/ui/glare-card";
import Link from "next/link";
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
    <section className="bg-background px-8 py-8">
      <div className="space-y-4 flex px-2 ">
        <p className="text-accent px-4 font-[sora] italic">Services</p>
      </div>
      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center px-8 py-8 gap-6">
        {services.map((service) => (
          <GlareCard className="flex flex-col  p-6  bg-card" key={service.id}>
            <h1 className="text-3xl text-grey mt-12">{service.heading}</h1>
            <p className="text-lg text-secondarytext mt-10 mb-8">
              {service.description}
            </p>
            <div className="flex flex-row items-start gap-4">
              <Link href={service.github}>
                <AiFillGithub size={30} />
              </Link>
              <Link href={service.linkedIn}>
                <FaLinkedin size={30} color="#4ade80" />
              </Link>
            </div>
          </GlareCard>
        ))}
      </div>
    </section>
  );
}
