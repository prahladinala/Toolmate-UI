"use client";

import React, { useState, useEffect } from "react";

export interface DrawerProps {
  title?: string;
  description?: string;
  triggerText?: string;
}

export default function Drawer({
  title = "Project Settings",
  description = "Configure your environment variables and deployment webhooks.",
  triggerText = "Open Drawer Panel",
}: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
      >
        {triggerText}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md h-full bg-card text-card-foreground border-l border-border p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-foreground">{title}</h3>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 py-2 text-xs">
                <div className="space-y-1">
                  <label className="font-medium text-foreground">Environment Name</label>
                  <input
                    type="text"
                    defaultValue="production-main"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-medium text-foreground">Branch Strategy</label>
                  <input
                    type="text"
                    defaultValue="main -> auto-deploy"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t border-border">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-border hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
