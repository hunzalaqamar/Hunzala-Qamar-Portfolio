"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A 3D floating code cube that rotates continuously
 * and tilts toward the user's cursor for an interactive feel.
 */
export function FloatingCube() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-15, 15]),
    springConfig
  );

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  const codeSnippets = [
    // Front face
    `const app = express();\napp.use(cors());\napp.use(auth());`,
    // Right face
    `const [data, set]\n = useState([]);\nuseEffect(() => {\n  fetch(API)...\n});`,
    // Back face
    `db.collection\n  .find({ active })\n  .sort({ date: -1 })\n  .limit(10);`,
    // Left face
    `export async\n  function handler(\n    req, res\n) { ... }`,
    // Top face
    `docker build\n  -t app .\ndocker push`,
    // Bottom face
    `npm test\n✓ 42 passed\n✗ 0 failed`,
  ];

  return (
    <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]" style={{ perspective: "800px" }}>
      {/* Ambient glow behind the cube */}
      <div className="absolute inset-0 rounded-full bg-violet-500/20 dark:bg-violet-500/30 blur-[80px] animate-pulse" style={{ animationDuration: "4s" }} />

      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        animate={{ rotateZ: [0, 360] }}
        transition={{
          rotateZ: { duration: 60, repeat: Infinity, ease: "linear" },
        }}
      >
        {/* Front face */}
        <CubeFace
          code={codeSnippets[0]}
          color="from-violet-500/20 to-fuchsia-500/20"
          borderColor="border-violet-500/30"
          transform="translateZ(120px)"
        />
        {/* Back face */}
        <CubeFace
          code={codeSnippets[2]}
          color="from-blue-500/20 to-cyan-500/20"
          borderColor="border-blue-500/30"
          transform="rotateY(180deg) translateZ(120px)"
        />
        {/* Right face */}
        <CubeFace
          code={codeSnippets[1]}
          color="from-pink-500/20 to-rose-500/20"
          borderColor="border-pink-500/30"
          transform="rotateY(90deg) translateZ(120px)"
        />
        {/* Left face */}
        <CubeFace
          code={codeSnippets[3]}
          color="from-emerald-500/20 to-teal-500/20"
          borderColor="border-emerald-500/30"
          transform="rotateY(-90deg) translateZ(120px)"
        />
        {/* Top face */}
        <CubeFace
          code={codeSnippets[4]}
          color="from-amber-500/20 to-orange-500/20"
          borderColor="border-amber-500/30"
          transform="rotateX(90deg) translateZ(120px)"
        />
        {/* Bottom face */}
        <CubeFace
          code={codeSnippets[5]}
          color="from-cyan-500/20 to-sky-500/20"
          borderColor="border-cyan-500/30"
          transform="rotateX(-90deg) translateZ(120px)"
        />

        {/* Glowing wireframe edges */}
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={`edge-${deg}`}
            className="absolute inset-0 border border-violet-500/10 dark:border-violet-400/15 rounded-lg"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${deg}deg) translateZ(120px)`,
              width: "240px",
              height: "240px",
              left: "50%",
              top: "50%",
              marginLeft: "-120px",
              marginTop: "-120px",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function CubeFace({
  code,
  color,
  borderColor,
  transform,
}: {
  code: string;
  color: string;
  borderColor: string;
  transform: string;
}) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 w-[240px] h-[240px] -ml-[120px] -mt-[120px] rounded-xl border ${borderColor} bg-gradient-to-br ${color} backdrop-blur-md overflow-hidden`}
      style={{
        transform,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Terminal-style code content */}
      <div className="p-4 h-full flex flex-col">
        <div className="flex gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <pre className="text-[10px] md:text-xs font-mono text-foreground/70 leading-relaxed whitespace-pre-wrap flex-1 overflow-hidden">
          {code}
        </pre>
      </div>
    </div>
  );
}
