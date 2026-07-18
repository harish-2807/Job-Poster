import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <PageShell eyebrow="404" title="The page you’re looking for doesn’t exist" description="It may have moved, been removed, or never existed in the first place.">
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-10 text-center">
        <p className="text-sm text-slate-400">Return to a safe place and continue exploring opportunities.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/">
            <Button>Go home</Button>
          </Link>
          <Link href="/jobs">
            <Button variant="outline">Browse jobs</Button>
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
