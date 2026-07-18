import Link from 'next/link';
import { Building2, BriefcaseBusiness, MapPin, Sparkles } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { getCompanies, getCompanyById, getJobsByCompanyId } from '@/lib/data';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompanies().find((entry) => entry.slug === slug);
  return {
    title: company ? `${company.name} | Northstar Jobs` : 'Company Details',
    description: company?.tagline ?? 'Company details',
  } satisfies Metadata;
}

export default async function CompanyDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompanies().find((entry) => entry.slug === slug);

  if (!company) {
    return (
      <PageShell eyebrow="Not found" title="This company is not available" description="Try viewing the full company directory for similar organizations.">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-10 text-center">
          <p className="text-slate-400">The company you requested could not be found.</p>
        </div>
      </PageShell>
    );
  }

  const jobs = getJobsByCompanyId(company.id);

  return (
    <PageShell eyebrow="Company profile" title={company.name} description={company.tagline} actionLabel="Back to companies" actionHref="/companies">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-sm font-semibold text-cyan-300">
              {company.logo}
            </div>
            <div>
              <p className="font-semibold text-white">{company.name}</p>
              <p className="text-sm text-slate-400">{company.industry}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 font-semibold text-white">{company.location}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-400">Company size</p>
              <p className="mt-1 font-semibold text-white">{company.size}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-400">Open jobs</p>
              <p className="mt-1 font-semibold text-white">{jobs.length}</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-8 text-slate-400">{company.tagline} working at the intersection of craft, precision, and product ambition.</p>
        </section>

        <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
          <div className="flex items-center gap-2 text-cyan-300">
            <Sparkles size={16} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">Why join</p>
          </div>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            <p>High-trust, high-autonomy environments across product-led teams.</p>
            <p>Meaningful ownership, thoughtful tooling, and modern collaboration practices.</p>
            <p>Flexible remote and hybrid patterns depending on the role.</p>
          </div>
          <Button className="mt-6">View all roles</Button>
        </section>
      </div>

      <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Open roles</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Current opportunities at {company.name}</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {jobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`} className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/30">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{job.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{job.type} • {job.location}</p>
                </div>
                <div className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">{job.salary}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
