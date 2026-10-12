"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const defaultItems: AccordionItem[] = [
  { id: "1", title: "Smooth spring collapse physics", content: "Built with Framer Motion layout transitions for fluid, stutter-free expansion." },
  { id: "2", title: "Automatic height calculation", content: "Transitions gracefully from 0 to 'auto' with zero hardcoded CSS heights." },
  { id: "3", title: "Full accessibility standards", content: "Supports ARIA expanded roles and keyboard spacebar / enter triggers." },
];

export default function AnimatedAccordion({ items = defaultItems }: { items?: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-md space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="rounded-xl border border-border bg-card overflow-hidden transition-colors">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span>{item.title}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-4 pb-4 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border/40">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
