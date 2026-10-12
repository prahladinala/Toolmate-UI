"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Check } from "lucide-react";

const frameworks = [
  { id: "react", name: "React 19", stars: "220k" },
  { id: "next", name: "Next.js 15", stars: "125k" },
  { id: "astro", name: "Astro 6", stars: "48k" },
  { id: "vue", name: "Vue 3", stars: "207k" },
  { id: "svelte", name: "Svelte 5", stars: "78k" },
];

export default function AnimatedCombobox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(frameworks[0]);
  const [query, setQuery] = useState("");

  const filtered = frameworks.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-sm">
      <motion.div
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-border bg-card/80 backdrop-blur cursor-pointer shadow-xs hover:border-primary/50 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">{selected.name}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-2 shadow-2xl"
          >
            <input
              type="text"
              placeholder="Filter list..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-3 py-1.5 mb-2 text-xs rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
            />

            <div className="space-y-1">
              {filtered.map((fw) => {
                const isSelected = selected.id === fw.id;
                return (
                  <motion.div
                    key={fw.id}
                    whileHover={{ x: 3 }}
                    onClick={() => {
                      setSelected(fw);
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                      isSelected ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <span>{fw.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] ${isSelected ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        ★ {fw.stars}
                      </span>
                      {isSelected && <Check className="h-3.5 w-3.5" />}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
