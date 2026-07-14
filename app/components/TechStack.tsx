"use client";

import { Card } from "@/components/ui/card";
import { TECHNOLOGIES } from "@/data/data";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Code2, Server, Smartphone, Cpu, Wrench } from "lucide-react";

// Helper to assign icons to categories
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "frontend":
      return <Code2 className="h-6 w-6 text-violet-500" />;
    case "backend":
      return <Server className="h-6 w-6 text-cyan-500" />;
    case "mobile":
      return <Smartphone className="h-6 w-6 text-pink-500" />;
    case "devops":
      return <Cpu className="h-6 w-6 text-emerald-500" />;
    default:
      return <Wrench className="h-6 w-6 text-amber-500" />;
  }
};

function TechCard({ category, skills, index }: { category: string; skills: string[]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="group relative overflow-hidden rounded-2xl glass-panel p-6 border-black/5 dark:border-white/5 transition-all duration-300 hover:shadow-xl h-full"
        onMouseMove={handleMouseMove}
      >
        {/* Mouse Glow Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                250px circle at ${mouseX}px ${mouseY}px,
                rgba(167, 139, 250, 0.08),
                transparent 80%
              )
            `,
          }}
        />

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/5 border border-black/5 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
            {getCategoryIcon(category)}
          </div>
          <h3 className="font-display font-bold text-xl text-foreground tracking-tight">
            {category}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full bg-primary/5 hover:bg-primary/10 transition-colors px-3 py-1 text-sm font-semibold text-muted-foreground hover:text-foreground ring-1 ring-inset ring-black/5 dark:ring-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-32">
      <div className="space-y-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-foreground">
          Skills & Tech Stack
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto text-base md:text-lg">
          A breakdown of languages, frameworks, libraries, and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {TECHNOLOGIES.map((tech, index) => (
          <TechCard
            key={tech.category}
            category={tech.category}
            skills={tech.skills}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
