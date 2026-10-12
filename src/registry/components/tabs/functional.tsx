"use client";

import React, { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

const defaultTabs: TabItem[] = [
  { id: "account", label: "Account", content: "Make changes to your account settings and personal details here." },
  { id: "password", label: "Password", content: "Change your password here. After saving, you'll be prompted to sign back in." },
  { id: "notifications", label: "Notifications", content: "Customize how and when you receive automated project alerts." },
];

export default function Tabs({ tabs = defaultTabs }: { tabs?: TabItem[] }) {
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
              className={`w-full rounded-lg py-2 text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/40"
              }`}
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
}
