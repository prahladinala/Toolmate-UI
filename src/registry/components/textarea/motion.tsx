"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedTextarea() {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-foreground">Feedback & Comments</span>
        <motion.span
          animate={{ scale: text.length > 0 ? [1, 1.15, 1] : 1 }}
          transition={{ duration: 0.2 }}
          className="text-[10px] font-mono text-purple-400 font-bold"
        >
          {text.length} characters
        </motion.span>
      </div>

      <motion.div
        animate={{
          boxShadow: isFocused ? "0 0 0 3px rgba(168, 85, 247, 0.25)" : "none",
        }}
        className="rounded-xl overflow-hidden border border-input bg-background"
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
          className="w-full px-3.5 py-2.5 text-xs text-foreground bg-transparent focus:outline-hidden resize-none"
          placeholder="Share your thoughts or feedback..."
        />
      </motion.div>
    </div>
  );
}
