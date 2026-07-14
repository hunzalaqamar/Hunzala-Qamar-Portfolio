"use client";

import { ProjectCardProps } from "@/components/interface/interface";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  isBigImage,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Handle tags that are comma-separated in the raw data
  const processedTags = tags.flatMap(tag => 
    tag.includes(",") ? tag.split(",").map(t => t.trim()) : [tag]
  );

  return (
    <Card
      className="group relative overflow-hidden rounded-2xl glass-panel glow-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 flex flex-col h-full border-black/5 dark:border-white/5"
      onMouseMove={handleMouseMove}
    >
      {/* Background Spotlight Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(167, 139, 250, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image container with scale effect */}
      <div className="relative aspect-video overflow-hidden rounded-t-2xl border-b border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`transition-all duration-700 ease-out group-hover:scale-105 ${
            isBigImage ? "object-contain p-4" : "object-cover"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
      </div>

      {/* Card Content */}
      <CardContent className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="font-display font-bold text-xl tracking-tight text-foreground transition-colors group-hover:text-primary flex items-center gap-1">
            {title}
            {link && <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-muted-foreground group-hover:text-primary" />}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
            {description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mt-6">
          {processedTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/5 hover:bg-primary/10 transition-colors px-2.5 py-0.5 text-xs font-semibold text-muted-foreground hover:text-foreground ring-1 ring-inset ring-black/5 dark:ring-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      {/* Card Footer */}
      {link && (
        <CardFooter className="px-6 pb-6 pt-0">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-xs font-display font-bold uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/40 hover:shadow-[0_0_15px_rgba(167,139,250,0.25)]"
          >
            <Globe className="h-3.5 w-3.5" />
            Live Preview
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
