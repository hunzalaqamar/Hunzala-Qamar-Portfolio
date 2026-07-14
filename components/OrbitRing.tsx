"use client";

import { motion } from "framer-motion";

const ORBIT_ICONS = [
  { label: "React", emoji: "⚛️" },
  { label: "Node", emoji: "🟢" },
  { label: "TS", emoji: "🔷" },
  { label: "DB", emoji: "🗄️" },
  { label: "API", emoji: "🔗" },
  { label: "AWS", emoji: "☁️" },
];

/**
 * Floating tech icons orbiting in a 3D ring around the cube.
 */
export function OrbitRing() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ perspective: "600px" }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d", rotateX: "70deg" }}
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_ICONS.map((icon, i) => {
          const angle = (360 / ORBIT_ICONS.length) * i;
          const radius = 180;
          return (
            <motion.div
              key={icon.label}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotateZ(${angle}deg) translateX(${radius}px) rotateZ(-${angle}deg) rotateX(-70deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex items-center justify-center w-10 h-10 -ml-5 -mt-5 rounded-full bg-background/80 border border-black/5 dark:border-white/10 shadow-lg backdrop-blur-sm text-lg hover:scale-125 transition-transform cursor-default"
                title={icon.label}
              >
                {icon.emoji}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
