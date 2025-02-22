// ProjectsSection.tsx
import { PROJECTS } from "../data/data";
import ProjectCard from "./project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.url}
              tags={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
