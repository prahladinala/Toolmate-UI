"use client";

import React, { useState } from "react";

interface AlertProps {
  title?: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "destructive";
  onDismiss?: () => void;
}

export default function Alert({
  title = "Update Completed",
  description = "Your deployment build has been published to production edge nodes.",
  variant = "default",
  onDismiss,
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const variantStyles = {
    default: "border-border bg-card text-card-foreground",
    success: "border-emerald-500/30 bg-emerald-500/5 text-emerald-950 dark:text-emerald-200",
    warning: "border-amber-500/30 bg-amber-500/5 text-amber-950 dark:text-amber-200",
    destructive: "border-destructive/30 bg-destructive/5 text-destructive dark:text-red-300",
  }[variant];

  return (
    <div className={`w-full max-w-md p-4 rounded-xl border shadow-xs flex items-start justify-between gap-3 transition-all ${variantStyles}`}>
      <div className="space-y-1">
        <h4 className="text-xs font-bold leading-none">{title}</h4>
        <p className="text-xs opacity-90 leading-relaxed">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          setDismissed(true);
          onDismiss?.();
        }}
        className="opacity-70 hover:opacity-100 p-1 rounded-md transition-opacity cursor-pointer"
        aria-label="Dismiss alert"
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
