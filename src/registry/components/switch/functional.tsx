"use client";

import React, { useState } from "react";

export interface SwitchProps {
  label?: string;
  description?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Switch({
  label = "Push Notifications",
  description = "Receive instant push alerts for new activities",
  defaultChecked = false,
  disabled = false,
  onChange,
}: SwitchProps) {
  const [enabled, setEnabled] = useState(defaultChecked);

  const toggle = () => {
    if (disabled) return;
    const next = !enabled;
    setEnabled(next);
    onChange?.(next);
  };

  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-sm p-3.5 rounded-xl border border-border bg-card shadow-2xs">
      <div className="space-y-0.5">
        <label
          onClick={toggle}
          className="text-xs sm:text-sm font-semibold text-foreground cursor-pointer select-none"
        >
          {label}
        </label>
        {description && (
          <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        disabled={disabled}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
          enabled ? "bg-primary" : "bg-muted"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
