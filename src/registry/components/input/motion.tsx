"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedFloatingInput() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative w-full max-w-sm pt-2">
      <motion.label
        animate={{
          y: isFloating ? -18 : 10,
          scale: isFloating ? 0.85 : 1,
          color: isFocused ? "var(--color-primary)" : "var(--color-muted-foreground)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="absolute left-3.5 origin-left text-xs font-medium pointer-events-none z-10"
      >
        Work Email Address
      </motion.label>
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-input bg-background text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden"
      />
    </div>
  );
}
