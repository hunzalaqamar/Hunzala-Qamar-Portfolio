// components/WorkExperienceSection.tsx
import { WORK_EXPERIENCE } from "../data/data";
import ExperienceCard from "./ExperienceCard";

export function WorkExperienceSection() {
  return (
    <section id="work-experience" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WORK_EXPERIENCE.map((experience, index) => (
            <ExperienceCard
              key={index}
              role={experience.role}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              image={experience.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
