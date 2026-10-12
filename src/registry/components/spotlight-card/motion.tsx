"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Zap, ArrowUpRight } from "lucide-react";

export default function AnimatedSpotlightCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.22), transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative w-full max-w-sm rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl p-7 shadow-lg overflow-hidden group cursor-pointer"
    >
      {/* 60fps GPU-accelerated motion spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlightBg }}
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Zap className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>

        <div className="space-y-1.5">
          <h3 className="font-bold text-lg text-foreground group-hover:text-purple-400 transition-colors">
            Motion Spotlight Card
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Smooth GPU-calculated radial illumination using Framer Motion template values.
          </p>
        </div>

        <div className="pt-2 text-[11px] font-mono text-purple-400 font-semibold">
          framer-motion • useMotionTemplate
        </div>
      </div>
    </motion.div>
  );
}
