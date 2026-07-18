import * as React from "react";
import { cn } from "@/utils/cn";

export function Avatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100",
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
