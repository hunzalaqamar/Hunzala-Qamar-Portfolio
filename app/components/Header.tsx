"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EMAIL, NAV_LINKS } from "../data/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { useState } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-4 z-50 w-full mb-8"
    >
      <div className="flex h-16 items-center justify-between rounded-full border border-black/5 dark:border-white/5 bg-background/50 px-6 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]">
        <Link className="flex items-center space-x-2 transition-transform hover:scale-[1.02]" href="/">
          <span className="font-display font-bold text-lg tracking-tight text-gradient-primary">
            Hunzala Qamar
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeSection === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setActiveSection(href)}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-display text-sm font-semibold"
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 -z-10 rounded-full bg-muted/80"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's work together")}`}
            className="hidden sm:inline-block"
          >
            <Button size="sm" className="rounded-full font-display font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]">
              Hire Me
            </Button>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
