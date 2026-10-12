"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const defaultTabs = [
  { id: "overview", label: "Overview", content: "Real-time analytics and system uptime performance overview." },
  { id: "integrations", label: "Integrations", content: "Manage connected third-party APIs, webhooks, and tokens." },
  { id: "settings", label: "Settings", content: "Adjust organization parameters, security, and member roles." },
];

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(defaultTabs[0].id);

  return (
    <div className="w-full max-w-md">
      {/* Sliding pill tab navigation */}
      <div className="relative flex space-x-1 rounded-xl border border-border/80 bg-muted/60 p-1.5">
        {defaultTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative w-full rounded-lg py-2 text-xs font-semibold transition-colors z-10 cursor-pointer ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  className="absolute inset-0 bg-background rounded-lg shadow-xs -z-10"
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content with fade & rise animation */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-4 rounded-xl border border-border p-5 bg-card text-card-foreground text-xs leading-relaxed shadow-2xs"
      >
        {defaultTabs.find((t) => t.id === activeTab)?.content}
      </motion.div>
    </div>
  );
}
