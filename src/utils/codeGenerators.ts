import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export interface CodeTab {
  id: string;
  label: string;
  lang: string;
  code: string;
  badge?: string;
  requiresInstall?: boolean;
  dependencies?: string[];
}

// Convert kebab-case or id to PascalCase (e.g. acc-bordered -> BorderedAccordion)
export function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

// Generate smart functional component with useState if custom file not present
export function generateFunctionalComponent(name: string, baseReactCode: string): string {
  const componentName = toPascalCase(name);

  // If already contains import or export, return as is
  if (baseReactCode.includes('import ') && baseReactCode.includes('export ')) {
    return baseReactCode;
  }

  // Tailored generation based on component type
  const isButton = name.includes('btn') || name.includes('button');
  const isAccordion = name.includes('acc') || name.includes('accordion');
  const isDialog = name.includes('dialog') || name.includes('modal');
  const isTabs = name.includes('tab');
  const isCheckbox = name.includes('check') || name.includes('checkbox');
  const isRadio = name.includes('radio');
  const isInput = name.includes('input');
  const isTextarea = name.includes('textarea');
  const isAlert = name.includes('alert');

  if (isDialog) {
    return `"use client";

import React, { useState, useEffect } from "react";

interface ${componentName}Props {
  title?: string;
  description?: string;
  triggerText?: string;
  onConfirm?: () => void;
}

export default function ${componentName}({
  title = "Confirm Action",
  description = "Are you sure you want to proceed? This action cannot be undone.",
  triggerText = "Open Dialog",
  onConfirm,
}: ${componentName}Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Dismiss on Escape key
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
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm active:scale-95"
      >
        {triggerText}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-border bg-card text-card-foreground shadow-2xl p-6 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h3 className="font-bold text-xl text-foreground mb-1.5">{title}</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onConfirm?.();
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`;
  }

  if (isTabs) {
    return `"use client";

import React, { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

const defaultTabs: TabItem[] = [
  { id: "tab1", label: "Overview", content: "Comprehensive analytics and performance metrics overview." },
  { id: "tab2", label: "Settings", content: "Manage project configurations and workspace preferences." },
  { id: "tab3", label: "Integrations", content: "Connect your favourite third-party APIs and services." },
];

export default function ${componentName}({
  tabs = defaultTabs,
}: {
  tabs?: TabItem[];
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="w-full max-w-md">
      <div className="flex space-x-1 rounded-xl border border-border bg-muted/60 p-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={\`w-full rounded-lg py-2 text-xs font-semibold transition-all \${
                isActive
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/40"
              }\`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 rounded-xl border border-border p-5 bg-card text-card-foreground text-xs leading-relaxed shadow-2xs">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}`;
  }

  if (isAccordion) {
    return `"use client";

import React, { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const defaultItems: AccordionItem[] = [
  { id: "1", title: "What is ToolMate UI?", content: "A production-grade copy-and-paste Tailwind CSS UI library." },
  { id: "2", title: "How do I install dependencies?", content: "No npm packages required. Copy the code straight into your project." },
  { id: "3", title: "Is TypeScript supported?", content: "Yes! Every functional component includes strict TypeScript definitions." },
];

export default function ${componentName}({
  items = defaultItems,
}: {
  items?: AccordionItem[];
}) {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-md space-y-2.5">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="rounded-xl border border-border bg-card overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-foreground hover:text-primary transition-colors"
            >
              <span>{item.title}</span>
              <svg
                className={\`h-4 w-4 text-muted-foreground transition-transform duration-200 \${isOpen ? "rotate-180" : ""}\`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border/40">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}`;
  }

  if (isButton) {
    return `"use client";

import React, { useState } from "react";

interface ${componentName}Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isLoading?: boolean;
}

export default function ${componentName}({
  children = "Click Me",
  isLoading: initialLoading = false,
  className = "",
  ...props
}: ${componentName}Props) {
  const [loading, setLoading] = useState(initialLoading);
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    props.onClick?.(e);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={\`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none \${
        clicked ? "ring-2 ring-primary/40 ring-offset-2 ring-offset-background" : ""
      } \${className || "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"}\`}
    >
      {loading && (
        <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
}`;
  }

  if (isCheckbox) {
    return `"use client";

import React, { useState } from "react";

interface ${componentName}Props {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function ${componentName}({
  label = "Accept terms and conditions",
  defaultChecked = false,
  onChange,
}: ${componentName}Props) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />
      <div
        className={\`h-5 w-5 rounded-md border flex items-center justify-center transition-all duration-200 \${
          checked
            ? "bg-primary border-primary text-primary-foreground shadow-xs"
            : "border-input bg-background hover:border-primary/50"
        }\`}
      >
        {checked && (
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <span className="text-xs font-medium text-foreground">{label}</span>
    </label>
  );
}`;
  }

  if (isRadio) {
    return `"use client";

import React, { useState } from "react";

interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

const defaultOptions: RadioOption[] = [
  { value: "standard", label: "Standard Plan", description: "Best for individuals and small hobby projects." },
  { value: "pro", label: "Pro Team Plan", description: "Best for high-growth commercial organizations." },
];

export default function ${componentName}({
  options = defaultOptions,
  defaultValue = "standard",
}: {
  options?: RadioOption[];
  defaultValue?: string;
}) {
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className="w-full max-w-sm space-y-2.5">
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <label
            key={opt.value}
            onClick={() => setSelected(opt.value)}
            className={\`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all \${
              isSelected
                ? "border-primary bg-primary/5 shadow-2xs"
                : "border-border hover:bg-muted/40"
            }\`}
          >
            <div
              className={\`h-4 w-4 mt-0.5 rounded-full border flex items-center justify-center shrink-0 transition-colors \${
                isSelected ? "border-primary" : "border-muted-foreground/60"
              }\`}
            >
              {isSelected && <div className="h-2 w-2 rounded-full bg-primary" />}
            </div>
            <div>
              <span className="text-xs font-bold text-foreground block">{opt.label}</span>
              {opt.description && (
                <span className="text-[11px] text-muted-foreground block mt-0.5 leading-relaxed">{opt.description}</span>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
}`;
  }

  if (isAlert) {
    return `"use client";

import React, { useState } from "react";

interface ${componentName}Props {
  title?: string;
  message?: string;
  dismissible?: boolean;
}

export default function ${componentName}({
  title = "Important Notification",
  message = "Your account configuration changes have been successfully applied.",
  dismissible = true,
}: ${componentName}Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full max-w-md p-4 rounded-xl border border-border bg-card text-card-foreground shadow-xs flex items-start justify-between gap-3 animate-in fade-in duration-200">
      <div className="space-y-1">
        <h4 className="text-xs font-bold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{message}</p>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted transition-colors"
          aria-label="Dismiss alert"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}`;
  }

  if (isInput) {
    return `"use client";

import React, { useState } from "react";

interface ${componentName}Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function ${componentName}({
  label = "Email Address",
  error,
  className = "",
  ...props
}: ${componentName}Props) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-xs space-y-1.5">
      {label && <label className="text-xs font-semibold text-foreground">{label}</label>}
      <div className="relative">
        <input
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={\`w-full px-3.5 py-2 text-xs rounded-xl border bg-background text-foreground transition-all focus:outline-hidden \${
            isFocused
              ? "border-primary ring-2 ring-primary/20"
              : "border-input hover:border-border"
          } \${error ? "border-destructive ring-destructive/20" : ""} \${className}\`}
          placeholder="Enter value..."
        />
        {value && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
          >
            ✕
          </button>
        )}
      </div>
      {error && <p className="text-[11px] text-destructive">{error}</p>}
    </div>
  );
}`;
  }

  // General fallback functional wrapper
  return `"use client";

import React, { useState } from "react";

interface ${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}

export default function ${componentName}({
  className = "",
  children,
}: ${componentName}Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={\`transition-all \${isActive ? "ring-2 ring-primary/30 rounded-xl" : ""} \${className}\`}
    >
      ${baseReactCode.trim()}
    </div>
  );
}`;
}

// Generate high-end Framer Motion animated variant
export function generateMotionComponent(name: string, baseReactCode: string): string {
  const componentName = `Animated${toPascalCase(name)}`;
  const isButton = name.includes('btn') || name.includes('button');
  const isAccordion = name.includes('acc') || name.includes('accordion');
  const isDialog = name.includes('dialog') || name.includes('modal');
  const isTabs = name.includes('tab');
  const isCard = name.includes('card');
  const isAlert = name.includes('alert');

  if (isDialog) {
    return `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ${componentName}() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
      >
        Open Animated Dialog
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with fade animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Box with spring scale & slide */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl relative z-10"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="font-bold text-xl text-foreground mb-1.5">Animated Modal</h3>
              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                Smooth layout transitions powered by Framer Motion spring physics.
              </p>

              <div className="flex justify-end gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-xs font-medium rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-colors"
                >
                  Confirm Action
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}`;
  }

  if (isTabs) {
    return `"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "overview", label: "Overview", content: "Real-time analytics and performance metrics overview." },
  { id: "integrations", label: "Integrations", content: "Manage connected third-party APIs and microservices." },
  { id: "settings", label: "Settings", content: "Adjust workspace preferences and member permissions." },
];

export default function ${componentName}() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-md">
      <div className="relative flex space-x-1 rounded-xl border border-border/80 bg-muted/60 p-1.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={\`relative w-full rounded-lg py-2 text-xs font-semibold transition-colors z-10 \${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }\`}
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
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-4 rounded-xl border border-border p-5 bg-card text-card-foreground text-xs leading-relaxed shadow-2xs"
      >
        {tabs.find((t) => t.id === activeTab)?.content}
      </motion.div>
    </div>
  );
}`;
  }

  if (isAccordion) {
    return `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const items = [
  { id: "1", title: "Smooth spring transitions", content: "Powered by Framer Motion physics for ultra-fluid collapse animations." },
  { id: "2", title: "Zero CSS calculation lag", content: "Uses auto-height transitions with zero hardcoded pixel heights." },
  { id: "3", title: "Accessible keyboard navigation", content: "Supports space and enter keys for full WAI-ARIA compliance." },
];

export default function ${componentName}() {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-md space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="rounded-xl border border-border bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs text-foreground hover:text-primary transition-colors"
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
}`;
  }

  if (isButton) {
    return `"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ${componentName}() {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-md hover:bg-primary/90 transition-colors"
    >
      <span>Interactive Motion Button</span>
      <motion.span
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        →
      </motion.span>
    </motion.button>
  );
}`;
  }

  if (isCard) {
    return `"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ${componentName}() {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-xs cursor-pointer"
    >
      <h3 className="font-bold text-base text-foreground mb-1">Animated Card</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Hover to trigger realistic physical lift and elevation shadow transitions.
      </p>
    </motion.div>
  );
}`;
  }

  if (isAlert) {
    return `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export default function ${componentName}() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md p-4 rounded-xl border border-primary/30 bg-primary/5 text-foreground flex items-start justify-between gap-3 shadow-xs"
        >
          <div className="flex items-start gap-2.5">
            <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-foreground">Animated Notification</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click the close button to watch the smooth exit animation.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground p-1 rounded-md transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}`;
  }

  // General motion wrapper
  return `"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ${componentName}() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="cursor-pointer"
    >
      ${baseReactCode.trim()}
    </motion.div>
  );
}`;
}

// Master function to collect all available code tabs for a component
export function getComponentCodeTabs(registry: string, name: string): CodeTab[] {
  const dirPath = resolve(process.cwd(), `src/registry/${registry}/${name}`);
  const tabs: CodeTab[] = [];

  // Helper to read file safely
  const readFile = (fileName: string): string | null => {
    try {
      const fullPath = resolve(dirPath, fileName);
      if (existsSync(fullPath)) {
        return readFileSync(fullPath, 'utf-8');
      }
    } catch (e) {}
    return null;
  };

  const htmlCode = readFile('html.html');
  const reactCode = readFile('react.tsx') || '';
  const astroCode = readFile('astro.astro');
  const vueCode = readFile('vue.vue');
  const svelteCode = readFile('svelte.svelte');
  const customFunctional = readFile('functional.tsx');
  const customMotion = readFile('motion.tsx');

  // 1. HTML Snippet
  if (htmlCode) {
    tabs.push({ id: 'html', label: 'HTML', lang: 'html', code: htmlCode });
  }

  // 2. React Snippet
  if (reactCode) {
    tabs.push({ id: 'react', label: 'React (JSX)', lang: 'tsx', code: reactCode });
  }

  // 3. Functional Component (with useState / hooks)
  const functionalCode = customFunctional || generateFunctionalComponent(name, reactCode || htmlCode || '');
  if (functionalCode) {
    tabs.push({
      id: 'functional',
      label: 'React (Functional + Hooks)',
      lang: 'tsx',
      code: functionalCode,
      badge: 'useState',
    });
  }

  // 4. Animated Component (Framer Motion)
  const motionCode = customMotion || generateMotionComponent(name, reactCode || htmlCode || '');
  if (motionCode) {
    tabs.push({
      id: 'motion',
      label: 'Animated (Framer Motion)',
      lang: 'tsx',
      code: motionCode,
      badge: 'Motion ✨',
      requiresInstall: true,
      dependencies: ['framer-motion', 'lucide-react'],
    });
  }

  // 5. Astro
  if (astroCode) {
    tabs.push({ id: 'astro', label: 'Astro', lang: 'astro', code: astroCode });
  }

  // 6. Vue 3
  if (vueCode) {
    tabs.push({ id: 'vue', label: 'Vue 3', lang: 'vue', code: vueCode });
  }

  // 7. Svelte
  if (svelteCode) {
    tabs.push({ id: 'svelte', label: 'Svelte', lang: 'svelte', code: svelteCode });
  }

  return tabs;
}
