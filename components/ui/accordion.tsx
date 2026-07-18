import * as React from "react";
import { cn } from "@/utils/cn";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  );
}

export function AccordionItem({ title, children, className, ...props }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm", className)} {...props}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      <div
        className={`transition-all duration-200 ease-in-out ${isOpen ? "max-h-96 border-t border-slate-100 p-5 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="text-sm leading-7 text-slate-500">{children}</div>
      </div>
    </div>
  );
}
