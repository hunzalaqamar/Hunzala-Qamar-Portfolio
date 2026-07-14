"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="space-y-4 mb-16 text-center"
    >
      <span className="inline-block text-xs md:text-sm font-display font-bold uppercase tracking-[0.25em] text-gradient-primary">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-foreground">
        {title}
      </h2>
      <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-violet-400 via-pink-500 to-blue-500" />
      <p className="text-muted-foreground max-w-md mx-auto text-base md:text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
}
