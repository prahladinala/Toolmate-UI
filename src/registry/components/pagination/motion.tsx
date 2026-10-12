"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AnimatedPagination() {
  const [currentPage, setCurrentPage] = useState(2);
  const total = 5;

  return (
    <nav aria-label="Pagination" className="flex items-center gap-1.5 p-2 rounded-2xl border border-border bg-card/70 backdrop-blur-md shadow-xs">
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-xl text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4" />
      </motion.button>

      <div className="flex items-center gap-1 relative">
        {Array.from({ length: total }, (_, i) => i + 1).map((page) => {
          const isActive = currentPage === page;
          return (
            <motion.button
              key={page}
              whileTap={{ scale: 0.92 }}
              onClick={() => setCurrentPage(page)}
              className={`relative z-10 w-9 h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer ${
                isActive ? "text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePagePill"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-sm"
                />
              )}
              {page}
            </motion.button>
          );
        })}
      </div>

      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setCurrentPage((p) => Math.min(total, p + 1))}
        disabled={currentPage === total}
        className="p-2 rounded-xl text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors cursor-pointer"
      >
        <ChevronRight className="h-4 w-4" />
      </motion.button>
    </nav>
  );
}
