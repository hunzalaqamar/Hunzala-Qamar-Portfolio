// components/EducationSection.tsx
import { EDUCATION } from "../data/data";
import ExperienceCard from "./ExperienceCard";

export function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EDUCATION.map((edu, index) => (
            <ExperienceCard
              key={index}
              role={edu.role}
              company={edu.company}
              period={edu.period}
              description={edu.description}
              image={edu.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
