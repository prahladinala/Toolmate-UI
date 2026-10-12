"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.12), 0 8px 10px -6px rgb(0 0 0 / 0.08)",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="w-full max-w-sm rounded-2xl border border-border/80 bg-card p-6 shadow-xs cursor-pointer overflow-hidden relative"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
          Motion Physics
        </span>
        <span className="text-xs text-muted-foreground/60 font-mono">v2.0</span>
      </div>
      <h3 className="font-bold text-lg text-foreground mb-1.5">Interactive 3D Card</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Hover to trigger realistic physical lift and smooth elevation shadows without CSS animation jitter.
      </p>

      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Framer Motion</span>
        <motion.span
          whileHover={{ x: 4 }}
          className="font-semibold text-primary"
        >
          View More →
        </motion.span>
      </div>
    </motion.div>
  );
}
