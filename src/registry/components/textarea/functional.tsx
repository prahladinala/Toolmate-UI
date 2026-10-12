"use client";

import React, { useState } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  maxLength?: number;
}

export default function Textarea({
  label = "Project Description",
  maxLength = 250,
  className = "",
  ...props
}: TextareaProps) {
  const [value, setValue] = useState("");

  const remaining = maxLength - value.length;

  return (
    <div className="w-full max-w-sm space-y-1.5">
      <div className="flex items-center justify-between text-xs font-semibold text-foreground">
        <span>{label}</span>
        <span className={`text-[10px] font-mono ${remaining < 20 ? "text-amber-500 font-bold" : "text-muted-foreground"}`}>
          {remaining} left
        </span>
      </div>
      <textarea
        {...props}
        value={value}
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        className={`w-full px-3.5 py-2.5 text-xs rounded-xl border border-input bg-background text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden resize-none ${className}`}
        placeholder="Provide brief details about your use-case..."
      />
    </div>
  );
}
