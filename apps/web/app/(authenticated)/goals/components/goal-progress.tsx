"use client";

import { motion } from "framer-motion";
import { Book } from "lucide-react";

interface GoalProgressProps {
  current: number;
  target: number;
  size?: "sm" | "lg";
  showEmpty?: boolean;
}

export function GoalProgress({
  current,
  target,
  size = "lg",
  showEmpty = true,
}: GoalProgressProps) {
  const progress = (current / target) * 100;
  const radius = size === "lg" ? 120 : 60;
  const strokeWidth = size === "lg" ? 4 : 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative">
      <svg
        className="transform -rotate-90"
        width={radius * 2 + strokeWidth * 2}
        height={radius * 2 + strokeWidth * 2}
      >
        {showEmpty && (
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            className="stroke-muted"
            strokeWidth={strokeWidth}
            fill="none"
          />
        )}
        <motion.circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          className="stroke-primary"
          strokeWidth={strokeWidth}
          fill="none"
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: circumference - (progress / 100) * circumference,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span
          className={
            size === "lg" ? "text-5xl font-bold" : "text-2xl font-semibold"
          }
        >
          {current}
        </span>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Book className="h-4 w-4" />
          <span>of {target}</span>
        </div>
        {size === "lg" && (
          <span className="mt-1 text-sm text-muted-foreground">
            Books in {new Date().getFullYear()}
          </span>
        )}
      </div>
    </div>
  );
}
