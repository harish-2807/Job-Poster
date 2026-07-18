import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
            <Sparkles size={14} />
          </div>
          <span>Northstar Jobs © 2026</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/jobs" className="transition hover:text-white">Browse jobs</Link>
          <Link href="/companies" className="transition hover:text-white">Companies</Link>
          <Link href="/saved-jobs" className="transition hover:text-white">Saved jobs</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
