"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Flame, Sparkles, Terminal, Cpu, Database } from "lucide-react";

const logos = [
  { icon: Terminal, name: "CLI Engine" },
  { icon: Sparkles, name: "Design AI" },
  { icon: Flame, name: "Fast Builds" },
  { icon: Cpu, name: "Edge Compute" },
  { icon: Database, name: "Vector Index" },
  { icon: Code, name: "TypeScript" },
];

export default function AnimatedMarquee() {
  return (
    <div className="relative w-full max-w-xl overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max gap-4"
      >
        {logos.concat(logos).map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm text-foreground text-xs font-semibold shadow-xs hover:border-primary/50 transition-colors shrink-0 cursor-pointer"
            >
              <Icon className="h-4 w-4 text-primary" />
              <span>{item.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
