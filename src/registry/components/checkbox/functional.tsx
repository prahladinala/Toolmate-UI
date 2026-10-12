"use client";

import React, { useState } from "react";

interface CheckboxProps {
  label?: string;
  description?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({
  label = "Enable two-factor authentication",
  description = "Protect your account with an extra security verification layer.",
  defaultChecked = false,
  onChange,
}: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <label className="flex items-start gap-3 cursor-pointer select-none max-w-sm p-3.5 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
        className="sr-only"
      />
      <div
        className={`h-5 w-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
          checked
            ? "bg-primary border-primary text-primary-foreground shadow-xs"
            : "border-input bg-background hover:border-primary/50"
        }`}
      >
        {checked && (
          <svg className="h-3 w-3 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <div>
        <span className="text-xs font-bold text-foreground block">{label}</span>
        {description && (
          <span className="text-[11px] text-muted-foreground block mt-0.5 leading-relaxed">{description}</span>
        )}
      </div>
    </label>
  );
}
