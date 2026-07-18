import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: '/' | '/jobs' | '/companies' | '/saved-jobs' | '/about' | '/contact';
  children: ReactNode;
}

export function PageShell({ eyebrow, title, description, actionLabel, actionHref, children }: PageShellProps) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{eyebrow}</p> : null}
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
            {description ? <p className="mt-3 text-sm leading-7 text-slate-500 font-normal">{description}</p> : null}
          </div>
          {actionLabel && actionHref ? (
            <Link href={actionHref} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-600 transition-colors">
              {actionLabel} <ArrowRight size={14} />
            </Link>
          ) : null}
        </div>
      </section>
      {children}
    </div>
  );
}
