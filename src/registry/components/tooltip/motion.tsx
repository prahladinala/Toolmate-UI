"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

export default function AnimatedTooltip() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-flex items-center justify-center py-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
      >
        <Info className="h-4 w-4" />
        <span>Inspect Metric</span>
      </motion.button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="absolute bottom-full mb-2.5 flex flex-col items-center pointer-events-none z-50"
          >
            <div className="px-3 py-1.5 text-[11px] font-semibold text-zinc-100 bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-950 rounded-xl shadow-2xl whitespace-nowrap">
              Latency: 14ms (99th percentile) ⚡
            </div>
            <div className="w-2.5 h-2.5 bg-zinc-950 dark:bg-zinc-100 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
