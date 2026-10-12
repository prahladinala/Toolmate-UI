import React from "react";

export function Drawer({ isOpen = false, onClose, children }: { isOpen?: boolean; onClose?: () => void; children?: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-md h-full bg-card p-6 shadow-2xl border-l border-border">
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">Close</button>
        {children}
      </div>
    </div>
  );
}
