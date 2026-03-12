"use client";

import { motion } from "framer-motion";
import { useState, InputHTMLAttributes } from "react";

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AnimatedInput({ label, ...props }: AnimatedInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <label style={{
        fontSize: "0.875rem",
        fontWeight: "500",
        color: focused ? "#2e8673" : "#374151",
        display: "block",
        marginBottom: "6px",
        transition: "color 0.2s",
      }}>
        {label}
      </label>
      <motion.div
        animate={{
          scale: focused ? 1.01 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <input
          {...props}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          style={{
            width: "100%",
            padding: "12px 16px",
            border: focused ? "2px solid #2e8673" : "1.5px solid #d1d5db",
            borderRadius: "12px",
            fontSize: "0.875rem",
            outline: "none",
            boxSizing: "border-box",
            boxShadow: focused ? "0 0 0 4px rgba(46,134,115,0.1)" : "none",
            transition: "border 0.2s, box-shadow 0.2s",
            backgroundColor: focused ? "#f0faf8" : "#ffffff",
            ...props.style,
          }}
        />
      </motion.div>
    </div>
  );
}