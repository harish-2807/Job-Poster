"use client";

import React from 'react';
import { useJobs } from '@/components/providers/job-provider';
import { getJobs, getCompanies } from '@/lib/data';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function RecentlyViewed() {
  const { recentlyViewedIds } = useJobs();
  const allJobs = getJobs();
  const companies = getCompanies();

  const recentJobs = allJobs
    .filter((job) => recentlyViewedIds.includes(job.id))
    .sort((a, b) => recentlyViewedIds.indexOf(a.id) - recentlyViewedIds.indexOf(b.id))
    .slice(0, 4);

  if (recentJobs.length === 0) return null;

  return (
    <section className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Recently Viewed</p>
        <h2 className="mt-2 text-xl font-bold text-slate-900">Roles you recently looked at</h2>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {recentJobs.map((job) => {
          const company = companies.find((entry) => entry.id === job.companyId);
          return (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="group block rounded-xl border border-slate-200/60 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sm font-bold text-slate-700 transition-transform duration-300 group-hover:scale-105">
                    {company?.logo}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600">{job.title}</p>
                    <p className="text-xs text-slate-400 font-semibold">{company?.name}</p>
                  </div>
                </div>
                {job.featured && <span className="rounded-md bg-amber-50 border border-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-600">Featured</span>}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-[10px] px-2 py-0">{job.location}</Badge>
                <Badge variant="cyan" className="text-[10px] px-2 py-0">{job.type}</Badge>
                <Badge variant="success" className="text-[10px] px-2 py-0">{job.salary}</Badge>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
