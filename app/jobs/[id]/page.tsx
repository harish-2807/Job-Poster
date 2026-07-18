import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Building2, CircleDollarSign, MapPin } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { getCompanyById, getJobById, getJobsByCompanyId } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { JobDetailClient } from '@/components/features/job-detail-client';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = getJobById(id);
  return {
    title: job ? `${job.title} | Northstar Jobs` : 'Job Details',
    description: job?.description ?? 'Detailed job preview',
  } satisfies Metadata;
}

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) {
    return (
      <PageShell eyebrow="Not found" title="This opportunity no longer exists" description="Try exploring the full job board for similar roles.">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-10 text-center">
          <p className="text-slate-400">The job you requested could not be found.</p>
        </div>
      </PageShell>
    );
  }

  const company = getCompanyById(job.companyId);
  const similarJobs = getJobsByCompanyId(job.companyId).filter((entry) => entry.id !== job.id).slice(0, 3);

  return (
    <PageShell eyebrow="Role overview" title={job.title} description={job.description} actionLabel="Back to jobs" actionHref="/jobs">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-sm font-semibold text-cyan-300">
                  {company?.logo ?? 'N'}
                </div>
                <div>
                  <p className="font-semibold text-white">{company?.name ?? 'Northstar'}</p>
                  <p className="text-sm text-slate-400">{job.location} • {job.type}</p>
                </div>
              </div>
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">{job.experience}</div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-center gap-2 text-slate-400"><CircleDollarSign size={16} /> Salary</div>
                <p className="mt-2 font-semibold text-white">{job.salary}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-center gap-2 text-slate-400"><BriefcaseBusiness size={16} /> Posted</div>
                <p className="mt-2 font-semibold text-white">{job.postedAt}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-center gap-2 text-slate-400"><MapPin size={16} /> Location</div>
                <p className="mt-2 font-semibold text-white">{job.location}</p>
              </div>
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-xl font-semibold text-white">Responsibilities</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
              {job.requirements.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />{item}</li>)}
            </ul>
          </section>

          <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-xl font-semibold text-white">Requirements</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
              {job.requirements.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />{item}</li>)}
            </ul>
          </section>

          <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-xl font-semibold text-white">Benefits</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.benefits.map((benefit) => (
                <span key={benefit} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-300">{benefit}</span>
              ))}
            </div>
          </section>
        </div>

        <div className="relative">
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-sm font-semibold text-cyan-300">{company?.logo ?? 'N'}</div>
                <div>
                  <p className="font-semibold text-white">{company?.name ?? 'Northstar'}</p>
                  <p className="text-sm text-slate-400">{company?.industry ?? 'Growth-focused company'}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-400">
                <p>{company?.tagline}</p>
                <p>{company?.location}</p>
              </div>
              <div className="mt-6">
                <JobDetailClient jobId={job.id} jobTitle={job.title} />
              </div>
            </div>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center gap-2 text-cyan-300">
                <Building2 size={16} />
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">Company overview</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{company?.tagline}</p>
              <p className="mt-3 text-sm text-slate-400">{company?.industry} • {company?.size} • {company?.location}</p>
            </section>
          </div>
        </div>
      </div>

      {/* Similar Jobs Section */}
      <section className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
        <h3 className="text-lg font-semibold text-white">Similar jobs</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {similarJobs.map((entry) => (
            <Link key={entry.id} href={`/jobs/${entry.id}`} className="block rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/30">
              <p className="text-base font-semibold text-white">{entry.title}</p>
              <p className="mt-2 text-sm text-slate-400">{entry.location} • {entry.salary}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
