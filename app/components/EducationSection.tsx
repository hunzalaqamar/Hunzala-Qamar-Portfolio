// components/EducationSection.tsx
import { EDUCATION } from "../data/data";
import ExperienceCard from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32">
      <SectionHeading
        eyebrow="Academics"
        title="Education & Studies"
        subtitle="My academic history and certifications in computer science and security."
      />

      <div className="relative max-w-3xl mx-auto">
        {EDUCATION.map((edu, index) => (
          <ExperienceCard
            key={index}
            role={edu.role}
            company={edu.company}
            period={edu.period}
            description={edu.description}
            image={edu.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
