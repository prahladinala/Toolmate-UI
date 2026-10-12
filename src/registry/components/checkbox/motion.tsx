"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCheckbox({
  label = "Auto-save changes to cloud",
}: {
  label?: string;
}) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="sr-only"
      />
      <motion.div
        animate={{
          scale: isChecked ? 1 : 0.95,
          backgroundColor: isChecked ? "var(--color-primary)" : "transparent",
        }}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`h-5 w-5 rounded-md border flex items-center justify-center ${
          isChecked ? "border-primary" : "border-input bg-background"
        }`}
      >
        <motion.svg
          initial={false}
          animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
          className="h-3 w-3 text-primary-foreground stroke-[3]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </motion.svg>
      </motion.div>
      <span className="text-xs font-semibold text-foreground">{label}</span>
    </label>
  );
}
