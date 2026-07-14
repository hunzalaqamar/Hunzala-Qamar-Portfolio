// components/WorkExperienceSection.tsx
import { WORK_EXPERIENCE } from "../data/data";
import ExperienceCard from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";

export function WorkExperienceSection() {
  return (
    <section id="work-experience" className="py-20 md:py-32">
      <SectionHeading
        eyebrow="Career"
        title="Where I've Worked"
        subtitle="My professional timeline and software engineering roles."
      />

      <div className="relative max-w-3xl mx-auto">
        {WORK_EXPERIENCE.map((experience, index) => (
          <ExperienceCard
            key={index}
            role={experience.role}
            company={experience.company}
            period={experience.period}
            description={experience.description}
            image={experience.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
