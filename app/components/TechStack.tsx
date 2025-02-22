import { Card } from "@/components/ui/card";
import { TECHNOLOGIES } from "@/data/data";

export function TechStack() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Tech Stack
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {TECHNOLOGIES.map((tech) => (
            <Card key={tech.category} className="p-6">
              <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
