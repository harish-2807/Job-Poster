import { PageShell } from '@/components/layout/page-shell';

export default function AboutPage() {
  return (
    <PageShell eyebrow="About" title="Built for modern talent and thoughtful employers" description="Northstar Jobs brings together premium opportunities, curated companies, and a refined hiring experience in one elegant experience.">
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
          <h2 className="text-xl font-semibold text-white">Why Northstar</h2>
          <p className="mt-4 text-sm leading-8 text-slate-400">A premium, design-forward job board focused on clarity, trust, and high-quality opportunities from selected companies.</p>
        </section>
        <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
          <h2 className="text-xl font-semibold text-white">What you can expect</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <p>Thoughtful product experience with no backend complexity.</p>
            <p>Structured content for jobs, companies, and categories.</p>
            <p>A polished interface suitable for production-grade demos.</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
