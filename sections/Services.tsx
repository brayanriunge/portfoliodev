import { GlareCard } from "@/components/ui/glare-card";

const services = [
  {
    id: 1,
    heading: "Frontend Development",
    description:
      "Turning designs into responsive, accessible interfaces with React, Next.js, and TypeScript — from UI/UX and layout decisions to smooth, high-performance experiences across desktop, tablet, and mobile.",
  },
  {
    id: 2,
    heading: "Backend Development",
    description:
      "Designing and building APIs, auth, and data layers with NestJS and Go, backed by PostgreSQL — handling everything from payments and permissions to audit trails and business logic.",
  },
  {
    id: 3,
    heading: "Fullstack Development",
    description:
      "Owning a product end to end — frontend, backend, database, and deployment — to ship complete, reliable platforms for fintech, government, ed-tech, and real-estate clients.",
  },
];

export function Services() {
  return (
    <section className="bg-background px-8 py-8">
      <div className="space-y-4 flex px-2 ">
        <p className="text-accent px-4 font-[sora] italic">Services</p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6">
        {services.map((service) => (
          <GlareCard
            className="flex flex-col items-center justify-center p-6 bg-card"
            key={service.id}
          >
            <h1 className="text-3xl text-grey ">{service.heading}</h1>
            <p className="text-lg text-secondarytext mt-4">
              {service.description}
            </p>
            <p className="text-white font-bold text-xl mt-4">Aceternity</p>
          </GlareCard>
        ))}
      </div>
    </section>
  );
}
