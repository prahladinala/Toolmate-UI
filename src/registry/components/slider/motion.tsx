"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function AnimatedSlider() {
  const [value, setValue] = useState(55);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-sm p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-md shadow-lg space-y-4">
      <div className="flex items-center justify-between text-xs font-semibold text-foreground">
        <div className="flex items-center gap-2">
          {value === 0 ? (
            <VolumeX className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Volume2 className="h-4 w-4 text-primary" />
          )}
          <span>Master Output</span>
        </div>
        <motion.span
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="font-mono text-primary font-bold px-2 py-0.5 rounded-md bg-primary/10"
        >
          {value} dB
        </motion.span>
      </div>

      <div
        className="relative py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2.5 rounded-full appearance-none cursor-pointer bg-muted accent-primary focus:outline-none"
        />

        {/* Floating spring badge */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            boxShadow: isHovered
              ? "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
              : "0 2px 5px rgba(0,0,0,0.1)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="pointer-events-none mt-2 flex justify-between text-[10px] text-muted-foreground font-mono"
        >
          <span>Mute</span>
          <span>Nominal</span>
          <span>Peak</span>
        </motion.div>
      </div>
    </div>
  );
}
