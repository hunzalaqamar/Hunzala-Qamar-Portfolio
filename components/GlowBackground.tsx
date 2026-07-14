"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function GlowBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.8 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by 150px (half the size of the 300px trail circle) to center it on the mouse
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-background">
      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" 
        style={{ 
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)", 
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)" 
        }}
      />

      {/* Floating static/drifting background orbs */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-violet-500/10 dark:bg-violet-500/20 blur-[100px] animate-pulse" style={{ animationDuration: "12s" }} />
      <div className="absolute top-[45%] right-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[130px] animate-pulse" style={{ animationDuration: "16s" }} />
      <div className="absolute bottom-[5%] left-[20%] w-[300px] h-[300px] rounded-full bg-pink-500/10 dark:bg-pink-500/15 blur-[90px] animate-pulse" style={{ animationDuration: "10s" }} />

      {/* Interactive Cursor Trail Orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-cyan-500/15 blur-[80px]"
        style={{
          x: trailX,
          y: trailY,
        }}
      />
    </div>
  );
}
