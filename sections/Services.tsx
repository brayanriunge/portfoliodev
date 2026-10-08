import { GlareCard } from "@/components/ui/glare-card";

const services = [{}];

export function Services() {
  return (
    <section className="bg-background px-8 py-8">
      <div className="space-y-4 flex px-2 ">
        <p className="text-accent px-4 font-[sora] italic">Services</p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6">
        <GlareCard className="flex flex-col items-center justify-center">
          <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
          >
            <path
              d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
              stroke="currentColor"
              strokeWidth="15"
              strokeMiterlimit="3.86874"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-white font-bold text-xl mt-4">Aceternity</p>
        </GlareCard>
      </div>
    </section>
  );
}
