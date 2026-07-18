import { PageShell } from '@/components/layout/page-shell';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Let’s talk about your next hiring experience" description="Reach out for product questions, partnership ideas, or demo requests.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
          <h2 className="text-xl font-semibold text-white">Get in touch</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <p>Email: hello@northstarjobs.dev</p>
            <p>Location: Remote-first, worldwide</p>
            <p>Response time: within one business day</p>
          </div>
        </section>
        <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
          <div className="space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none" placeholder="Your name" />
            <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none" placeholder="Your email" />
            <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none" placeholder="Tell us what you need" />
            <Button className="w-full">Send message</Button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
