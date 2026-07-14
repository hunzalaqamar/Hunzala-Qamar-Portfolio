"use client";

import { EDUCATION, WORK_EXPERIENCE } from "../data/data";
import { SectionHeading } from "./SectionHeading";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

const TABS = [
  { key: "work", label: "Work", Icon: Briefcase, items: WORK_EXPERIENCE },
  { key: "education", label: "Education", Icon: GraduationCap, items: EDUCATION },
] as const;

export function JourneySection() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = TABS.find((tab) => tab.key === activeTab)!.items;
  const selected = items[Math.min(selectedIndex, items.length - 1)];

  return (
    <section id="work-experience" className="py-20 md:py-32">
      <SectionHeading
        eyebrow="Career & Academics"
        title="My Journey"
        subtitle="Where I've worked and what I've studied — pick a stop on the timeline."
      />

      {/* Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="glass-panel inline-flex items-center rounded-full p-1.5 h-12">
          {TABS.map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setSelectedIndex(0);
              }}
              className={`relative inline-flex items-center gap-2 rounded-full px-6 h-9 text-sm font-display font-semibold transition-colors duration-300 ${
                activeTab === key
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === key && (
                <motion.span
                  layoutId="journeyTab"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4" />
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px,1fr] gap-6 md:gap-10 items-start">
        {/* Left Rail — company / school selector */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {items.map((item, index) => {
            const isActive = index === Math.min(selectedIndex, items.length - 1);
            return (
              <button
                key={item.company + item.period}
                onClick={() => setSelectedIndex(index)}
                className={`relative flex items-center gap-3 rounded-2xl px-4 py-3 text-left shrink-0 md:shrink md:w-full transition-all duration-300 border ${
                  isActive
                    ? "border-primary/30 shadow-[0_0_20px_rgba(167,139,250,0.15)]"
                    : "border-transparent hover:border-black/10 dark:hover:border-white/10 hover:bg-muted/50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="journeySelector"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400/10 via-pink-500/5 to-blue-500/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border transition-all duration-300 ${
                    isActive
                      ? "border-primary/40 shadow-[0_0_15px_rgba(167,139,250,0.3)]"
                      : "border-black/5 dark:border-white/5"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.company}
                    className="h-6 w-6 object-contain rounded-full"
                  />
                </span>
                <span className="relative z-10 hidden md:block min-w-0">
                  <span
                    className={`block font-display font-bold text-sm truncate transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.company}
                  </span>
                  <span className="block text-xs text-muted-foreground truncate">
                    {item.period}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Right — Spotlight Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + selected.company + selected.period}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-panel glow-border relative rounded-2xl border-black/5 dark:border-white/5 p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground tracking-tight">
                  {selected.role}
                </h3>
                <p className="font-display font-semibold text-sm md:text-base text-gradient-primary w-fit">
                  {selected.company}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-violet-400/20 bg-gradient-to-r from-violet-400/10 via-pink-500/10 to-blue-500/10 px-3.5 py-1.5 text-xs font-display font-semibold text-foreground/80 w-fit whitespace-nowrap">
                {selected.period}
              </span>
            </div>

            <ul className="space-y-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              {selected.description.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 + idx * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-pink-500 mt-2 shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
