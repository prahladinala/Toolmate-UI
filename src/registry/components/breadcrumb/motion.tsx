"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

const pathSteps = [
  { label: "Overview", icon: Home },
  { label: "Settings" },
  { label: "Billing & Plans" },
];

export default function AnimatedBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="p-4 rounded-2xl border border-border bg-card/70 backdrop-blur-md shadow-xs">
      <ol className="flex items-center gap-2 text-xs">
        {pathSteps.map((step, idx) => {
          const isLast = idx === pathSteps.length - 1;
          const Icon = step.icon;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <ChevronRight className="h-3 w-3 text-muted-foreground/60 shrink-0" />
              )}
              <motion.li
                whileHover={!isLast ? { y: -1 } : {}}
                className={`flex items-center gap-1.5 ${
                  isLast
                    ? "font-bold text-foreground"
                    : "text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                <span>{step.label}</span>
              </motion.li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
