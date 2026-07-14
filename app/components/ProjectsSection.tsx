"use client";

import { MOBILE_APPS, PROJECTS } from "../data/data";
import ProjectCard from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="projects" className="py-20 md:py-32">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Projects"
        subtitle="A curated collection of web applications and mobile applications that I've built."
      />

      <Tabs defaultValue="web" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-12">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 rounded-full p-1.5 glass-panel h-12">
            <TabsTrigger 
              value="web" 
              className="rounded-full font-display font-semibold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-9"
            >
              Web Apps
            </TabsTrigger>
            <TabsTrigger 
              value="mobile" 
              className="rounded-full font-display font-semibold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-9"
            >
              Mobile Apps
            </TabsTrigger>
          </TabsList>
        </div>

        <AnimatePresence mode="wait">
          <TabsContent value="web" className="mt-0 focus-visible:outline-none">
            <motion.div 
              key="web-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
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
            </motion.div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0 focus-visible:outline-none">
            <motion.div 
              key="mobile-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {MOBILE_APPS.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.url}
                  tags={project.technologies}
                  isBigImage
                />
              ))}
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </section>
  );
}
