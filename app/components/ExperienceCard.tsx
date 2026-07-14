"use client";

import { Experience } from "@/components/interface/interface";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ExperienceCardProps extends Experience {
  index: number;
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  image,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 md:pl-16 pb-12 last:pb-0 group"
    >
      {/* Vertical connecting line — aurora gradient fading downward */}
      <div className="absolute left-[21px] md:left-[25px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-400/60 via-pink-500/30 to-blue-500/10 group-last:hidden" />

      {/* Timeline Bullet Node with Logo */}
      <div className="absolute left-0 md:left-1 top-0 z-10 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full glow-border bg-background shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(167,139,250,0.4)]">
        <img
          src={image}
          alt={company}
          className="h-6 w-6 md:h-7 md:w-7 object-contain rounded-full"
        />
      </div>

      {/* Card Content */}
      <Card className="glass-panel glow-border relative border-black/5 dark:border-white/5 p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
        <CardContent className="p-0 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground tracking-tight group-hover:text-gradient-primary transition-colors">
                {role}
              </h3>
              <p className="font-display font-semibold text-sm md:text-base text-primary/80">
                {company}
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-violet-400/20 bg-gradient-to-r from-violet-400/10 via-pink-500/10 to-blue-500/10 px-3.5 py-1.5 text-xs font-display font-semibold text-foreground/80 w-fit whitespace-nowrap">
              {period}
            </span>
          </div>

          <ul className="space-y-2.5 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
            {description.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-pink-500 mt-2 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
