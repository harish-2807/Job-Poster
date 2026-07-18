import * as React from "react";
import { cn } from "@/utils/cn";

export function Spinner({ className, size = "md", ...props }: React.HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-t-transparent border-cyan-400",
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
