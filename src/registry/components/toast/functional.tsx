"use client";

import React, { useState, useEffect } from "react";

export type ToastType = "success" | "error" | "info";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message: string;
}

export default function ToastDemo() {
  const [toasts, setToasts] = useState<ToastItem[]>([
    {
      id: "demo-1",
      type: "success",
      title: "Changes Published",
      message: "Your documentation edits are now live across all regions.",
    },
  ]);

  const addToast = (type: ToastType) => {
    const id = Math.random().toString(36).slice(2, 9);
    const item: ToastItem = {
      id,
      type,
      title:
        type === "success"
          ? "Build Deployed"
          : type === "error"
          ? "Connection Timeout"
          : "System Update",
      message:
        type === "success"
          ? "Static assets generated in 1.4s"
          : type === "error"
          ? "Could not resolve API gateway"
          : "Scheduled maintenance in 2 hours",
    };
    setToasts((prev) => [item, ...prev].slice(0, 3));
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Toast Trigger Actions */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => addToast("success")}
          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-500/15 text-green-700 dark:text-green-300 border border-green-500/30 hover:bg-green-500/25 transition-all cursor-pointer"
        >
          + Success Toast
        </button>
        <button
          type="button"
          onClick={() => addToast("error")}
          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-destructive/15 text-destructive border border-destructive/30 hover:bg-destructive/25 transition-all cursor-pointer"
        >
          + Error Toast
        </button>
        <button
          type="button"
          onClick={() => addToast("info")}
          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-all cursor-pointer"
        >
          + Info Toast
        </button>
      </div>

      {/* Rendered Toasts Container */}
      <div className="space-y-2.5">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="alert"
            className="flex items-start justify-between gap-3 p-3.5 rounded-xl border border-border bg-card text-card-foreground shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex items-start gap-2.5">
              <span
                className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  toast.type === "success"
                    ? "bg-green-500/20 text-green-600 dark:text-green-400"
                    : toast.type === "error"
                    ? "bg-destructive/20 text-destructive"
                    : "bg-primary/20 text-primary"
                }`}
              >
                {toast.type === "success" ? "✓" : toast.type === "error" ? "!" : "i"}
              </span>
              <div className="space-y-0.5">
                <h5 className="text-xs font-bold text-foreground">{toast.title}</h5>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{toast.message}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-muted-foreground hover:text-foreground text-xs p-1 rounded-md hover:bg-muted transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        ))}

        {toasts.length === 0 && (
          <p className="text-xs text-center text-muted-foreground py-2">
            No active toasts. Click a button above to summon one.
          </p>
        )}
      </div>
    </div>
  );
}
