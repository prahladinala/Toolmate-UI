"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Cpu, Globe2 } from "lucide-react";

const bentoCards = [
  {
    title: "Global CDN Edge Distribution",
    desc: "Autonomous edge routing delivers your components worldwide with sub-20ms latency.",
    icon: Globe2,
    span: "md:col-span-2",
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "AI Assisted Code",
    desc: "Generated with optimal patterns.",
    icon: Sparkles,
    span: "md:col-span-1",
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    title: "Hardware Accelerated",
    desc: "60 FPS GPU animations.",
    icon: Cpu,
    span: "md:col-span-1",
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    title: "Enterprise Grade Hardened",
    desc: "Zero external dependencies, zero supply-chain risk, 100% auditable source code.",
    icon: Shield,
    span: "md:col-span-2",
    color: "text-emerald-500 bg-emerald-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function AnimatedBentoGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full max-w-2xl"
    >
      {bentoCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`${card.span} p-6 rounded-3xl border border-border bg-card/70 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-primary/40 transition-colors flex flex-col justify-between cursor-pointer`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2.5 rounded-2xl ${card.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground font-semibold">
                0{i + 1}
              </span>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-sm text-foreground">{card.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
