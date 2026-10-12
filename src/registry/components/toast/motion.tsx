"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

export default function AnimatedToast() {
  const [toasts, setToasts] = useState([
    {
      id: 1,
      type: "success",
      title: "File Upload Complete",
      description: "design-system-spec.pdf (4.2 MB) saved to cloud.",
    },
  ]);

  const add = () => {
    const nextId = Date.now();
    setToasts((prev) => [
      {
        id: nextId,
        type: "success",
        title: "Deployment Successful",
        description: `Edge function deployed to cluster #${Math.floor(Math.random() * 90 + 10)}`,
      },
      ...prev,
    ]);
  };

  const remove = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={add}
          className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
        >
          Summon Toast ✨
        </motion.button>
      </div>

      <div className="space-y-2.5">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="flex items-start justify-between gap-3 p-4 rounded-2xl border border-border bg-card/90 backdrop-blur-md shadow-xl"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-foreground">{toast.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{toast.description}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => remove(toast.id)}
                className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
