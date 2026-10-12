"use client";

import React, { useState, useRef } from "react";

export interface PinInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  autoFocus?: boolean;
}

export default function PinInput({
  length = 6,
  onComplete,
  autoFocus = true,
}: PinInputProps) {
  const [digits, setDigits] = useState<string[]>(Array(length).fill(""));
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    // Only accept numeric inputs
    const lastChar = value.slice(-1);
    if (value && !/^\d$/.test(lastChar)) return;

    const newDigits = [...digits];
    newDigits[index] = lastChar;
    setDigits(newDigits);

    // Auto-advance focus to next cell
    if (lastChar && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check completion
    const fullCode = newDigits.join("");
    if (fullCode.length === length && !newDigits.includes("")) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setIsSuccess(true);
        onComplete?.(fullCode);
      }, 800);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
        const newDigits = [...digits];
        newDigits[index - 1] = "";
        setDigits(newDigits);
      } else {
        const newDigits = [...digits];
        newDigits[index] = "";
        setDigits(newDigits);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;

    const newDigits = [...digits];
    pasted.split("").forEach((char, i) => {
      newDigits[i] = char;
    });
    setDigits(newDigits);

    const targetFocus = Math.min(pasted.length, length - 1);
    inputRefs.current[targetFocus]?.focus();

    if (pasted.length === length) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setIsSuccess(true);
        onComplete?.(pasted);
      }, 800);
    }
  };

  const handleReset = () => {
    setDigits(Array(length).fill(""));
    setIsSuccess(false);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="w-full max-w-sm space-y-4 p-5 rounded-2xl border border-border bg-card shadow-sm text-center">
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-foreground">Verification Code</h4>
        <p className="text-xs text-muted-foreground">
          Enter the 6-digit confirmation code sent to your device.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-2.5">
        {digits.map((digit, index) => (
          <React.Fragment key={index}>
            <input
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              autoFocus={autoFocus && index === 0}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`w-10 h-13 sm:w-11 sm:h-14 text-center text-lg font-bold rounded-xl border bg-background text-foreground transition-all focus:outline-none focus:ring-2 ${
                isSuccess
                  ? "border-green-500 ring-green-500/20 text-green-500"
                  : digit
                  ? "border-primary ring-primary/20"
                  : "border-input hover:border-border"
              }`}
            />
            {index === 2 && <span className="text-muted-foreground font-semibold px-0.5">-</span>}
          </React.Fragment>
        ))}
      </div>

      {isVerifying && (
        <p className="text-xs text-primary font-medium animate-pulse">Verifying code...</p>
      )}

      {isSuccess && (
        <div className="flex items-center justify-center gap-2 text-xs text-green-600 dark:text-green-400 font-semibold">
          <span>✓ Verification Successful</span>
          <button
            type="button"
            onClick={handleReset}
            className="text-[11px] underline text-muted-foreground hover:text-foreground ml-2"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
