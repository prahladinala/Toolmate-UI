"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export interface AnimatedSwitchProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function AnimatedSwitch({
  label = "Airplane Mode",
  defaultChecked = true,
  onChange,
}: AnimatedSwitchProps) {
  const [isOn, setIsOn] = useState(defaultChecked);

  const toggle = () => {
    const next = !isOn;
    setIsOn(next);
    onChange?.(next);
  };

  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-sm p-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm">
      <span className="text-sm font-semibold text-foreground select-none">{label}</span>

      <motion.button
        type="button"
        role="switch"
        aria-checked={isOn}
        onClick={toggle}
        whileTap={{ scale: 0.94 }}
        className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full p-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          isOn ? "bg-primary" : "bg-muted"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
          className={`flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md text-zinc-900 ${
            isOn ? "ml-auto" : "mr-auto"
          }`}
        >
          {isOn ? (
            <Check className="h-3 w-3 text-primary stroke-[3]" />
          ) : (
            <X className="h-3 w-3 text-zinc-400 stroke-[2.5]" />
          )}
        </motion.span>
      </motion.button>
    </div>
  );
}
