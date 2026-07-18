"use client";

import Link from 'next/link';
import { Bookmark, BriefcaseBusiness, MapPin } from 'lucide-react';
import type { Company, Job } from '@/types/job';
import { useJobs } from '@/components/providers/job-provider';
import { Badge } from '@/components/ui/badge';

interface JobCardProps {
  job: Job;
  company?: Company;
}

export function JobCard({ job, company }: JobCardProps) {
  const { isJobSaved, toggleSaveJob } = useJobs();
  const saved = isJobSaved(job.id);

  return (
    <article className="group relative rounded-xl border border-slate-200/60 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-base font-bold text-slate-700 shadow-inner transition-transform duration-300 group-hover:scale-105">
            {company?.logo ?? 'N'}
          </div>
          <div>
            <Link href={`/jobs/${job.id}`} className="text-base font-bold text-slate-900 transition-colors duration-200 hover:text-blue-600">
              {job.title}
            </Link>
            <p className="mt-1 text-xs text-slate-400 font-semibold">{company?.name ?? 'Northstar'}</p>
          </div>
        </div>
        <button
          onClick={() => toggleSaveJob(job.id)}
          className={`rounded-lg border p-2 transition-all duration-200 ${
            saved
              ? 'border-blue-200 bg-blue-50 text-blue-600'
              : 'border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50'
          }`}
          aria-label={saved ? "Unsave job" : "Save job"}
        >
          <Bookmark size={16} className={saved ? 'fill-blue-600' : ''} />
        </button>
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500 font-normal">{job.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge variant="outline">{job.location}</Badge>
        <Badge variant="cyan">{job.type}</Badge>
        <Badge variant="success">{job.salary}</Badge>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400 font-medium">
        <div className="flex items-center gap-1.5">
          <MapPin size={13} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <BriefcaseBusiness size={13} />
          <span>{job.experience}</span>
        </div>
      </div>
    </article>
  );
}
