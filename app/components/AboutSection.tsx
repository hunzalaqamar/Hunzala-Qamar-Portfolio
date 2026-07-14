"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EMAIL, RESUME_URL, SOCIAL_LINKS } from "../data/data";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingCube } from "@/components/FloatingCube";
import { OrbitRing } from "@/components/OrbitRing";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 flex flex-col justify-center min-h-[85vh]">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-left max-w-3xl flex-1"
        >
          {/* Glowing Availability Status Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold font-display text-emerald-600 dark:text-emerald-400 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Hero Title */}
          <div className="space-y-4">
            <motion.h4 variants={itemVariants} className="text-base md:text-lg font-semibold tracking-wide uppercase font-display text-muted-foreground">
              Hi, my name is
            </motion.h4>
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-display text-foreground leading-[0.95]"
            >
              Hunzala Qamar.
            </motion.h1>
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-gradient-primary leading-[1.05]"
            >
              I engineer digital solutions.
            </motion.h2>
          </div>

          {/* Hero Description */}
          <motion.p 
            variants={itemVariants} 
            className="max-w-2xl text-lg md:text-xl text-muted-foreground font-sans leading-relaxed"
          >
            I am a <strong className="text-foreground font-semibold">Full Stack & Mobile Engineer</strong> specialized in building scalable backends with <span className="text-foreground font-medium">Spring Boot</span>, modern mobile apps, and fluid, high-performance web experiences. Currently crafting secure digital payment solutions at EftaaPay.
          </motion.p>

          {/* CTA Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's work together")}`}>
              <Button size="lg" className="rounded-full px-6 py-6 font-display font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.5)]">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 py-6 font-display font-semibold glow-border transition-all duration-300 hover:bg-muted"
              onClick={() => window.open(RESUME_URL, "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> Get My Resume
            </Button>
          </motion.div>

          {/* Prominent Social Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            {SOCIAL_LINKS.map(({ href, Icon, srLabel }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-background/50 px-4 py-2 text-sm font-display font-semibold text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/40 hover:shadow-[0_0_20px_rgba(167,139,250,0.25)] hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4 transition-colors group-hover:text-primary" />
                {srLabel}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column — 3D Floating Cube + Orbit Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex items-center justify-center relative flex-shrink-0"
        >
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            <OrbitRing />
            <FloatingCube />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

