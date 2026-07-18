"use client";

import React from 'react';
import { PageShell } from '@/components/layout/page-shell';
import { getJobs } from '@/lib/data';
import { useJobs } from '@/components/providers/job-provider';
import { EmptyState } from '@/components/ui/empty-state';
import { BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ApplicationsClient() {
  const { appliedJobIds } = useJobs();
  const allJobs = getJobs();

  const appliedJobs = allJobs.filter((job) => appliedJobIds.includes(job.id));

  return (
    <PageShell
      eyebrow="Applications"
      title="Track every application in one place"
      description="Stay organized with status updates, interview notes, and follow-up reminders."
    >
      {appliedJobs.length > 0 ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {appliedJobs.map((job, index) => (
            <div key={job.id} className="rounded-[1.35rem] border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{job.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{job.location}</p>
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  Applied
                </span>
              </div>
              <div className="mt-4 text-sm leading-7 text-slate-400">{job.description}</div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No applications yet"
          description="You haven't applied to any jobs yet. Find your dream job and apply today!"
          icon={<BriefcaseBusiness size={24} />}
          actionLabel="Browse Jobs"
          onAction={() => window.location.href = '/jobs'}
        />
      )}
    </PageShell>
  );
}
