"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function AnimatedPinInput() {
  const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
  const [completed, setCompleted] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, val: string) => {
    const char = val.slice(-1);
    if (val && !/^\d$/.test(char)) return;

    const next = [...digits];
    next[index] = char;
    setDigits(next);

    if (char && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (next.every((d) => d !== "")) {
      setTimeout(() => setCompleted(true), 400);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full max-w-sm p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-md shadow-xl text-center space-y-5">
      <div className="flex justify-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20"
        >
          <ShieldCheck className="h-6 w-6" />
        </motion.div>
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-bold text-foreground">Secure Passcode</h4>
        <p className="text-xs text-muted-foreground">Enter your 4-digit security PIN</p>
      </div>

      <div className="flex justify-center gap-3">
        {digits.map((digit, i) => (
          <motion.div
            key={i}
            animate={{ scale: digit ? [1, 1.15, 1] : 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            <input
              ref={(el) => { inputRefs.current[i] = el; }}
              type="text"
              maxLength={1}
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-14 text-center text-xl font-bold rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/25 outline-none transition-all shadow-xs"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {completed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex items-center justify-center gap-2 text-xs font-semibold text-green-500 bg-green-500/10 py-2 rounded-xl border border-green-500/20"
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>Passcode Verified!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
