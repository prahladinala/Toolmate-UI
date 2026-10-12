"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export default function AnimatedAlert() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.96 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="w-full max-w-md p-4 rounded-xl border border-primary/30 bg-primary/5 text-foreground flex items-start justify-between gap-3 shadow-xs"
        >
          <div className="flex items-start gap-2.5">
            <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-foreground">Interactive Notification</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click the close button to trigger a physics-based exit slide transition.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close notification"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
