"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedButton({
  children = "Explore Catalog",
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-md hover:bg-primary/90 transition-colors cursor-pointer"
    >
      <span>{children}</span>
      <motion.span
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        →
      </motion.span>
    </motion.button>
  );
}
