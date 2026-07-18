import * as React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "cyan";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-blue-50 text-blue-600 border border-blue-100",
    secondary: "bg-slate-100 text-slate-600 border border-slate-200/60",
    outline: "text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-slate-900",
    success: "bg-emerald-50 text-emerald-600 border border-emerald-100 font-medium",
    warning: "bg-amber-50 text-amber-600 border border-amber-100 font-medium",
    cyan: "bg-sky-50 text-sky-600 border border-sky-100 font-medium",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-medium transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
