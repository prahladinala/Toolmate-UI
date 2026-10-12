"use client";

import React, { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const defaultItems: AccordionItem[] = [
  { id: "1", title: "What is ToolMate UI?", content: "ToolMate UI is a production-ready, open-source Tailwind CSS UI library featuring copy-and-paste primitives, full page sections, and website templates." },
  { id: "2", title: "Do I need to install an npm package?", content: "No npm dependencies required. You own the complete source code directly inside your project repository." },
  { id: "3", title: "How does dark mode work?", content: "Dark mode is natively handled via CSS variables and Tailwind's dark class selector with zero flash of unstyled content." },
];

export default function Accordion({ items = defaultItems }: { items?: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
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
              className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span>{item.title}</span>
              <svg
                className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
}
