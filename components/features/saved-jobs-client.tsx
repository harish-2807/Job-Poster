"use client";

import React from 'react';
import { PageShell } from '@/components/layout/page-shell';
import { getJobs, getCompanies } from '@/lib/data';
import { JobCard } from '@/components/features/job-card';
import { useJobs } from '@/components/providers/job-provider';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { Bookmark } from 'lucide-react';
import Link from 'next/link';

export function SavedJobsClient() {
  const { savedJobIds } = useJobs();
  const allJobs = getJobs();
  const companies = getCompanies();

  const savedJobs = allJobs.filter((job) => savedJobIds.includes(job.id));

  return (
    <PageShell
      eyebrow="Saved roles"
      title="Keep a shortlist of jobs you want to revisit"
      description="Bookmark roles you’re interested in and come back later when you’re ready to apply."
    >
      {savedJobs.length > 0 ? (
        <div className="grid gap-4 xl:grid-cols-2">
          {savedJobs.map((job) => {
            const company = companies.find((c) => c.id === job.companyId);
            return <JobCard key={job.id} job={job} company={company} />;
          })}
        </div>
      ) : (
        <EmptyState
          title="No saved jobs yet"
          description="Explore the job board and bookmark roles you are interested in to see them here."
          icon={<Bookmark size={24} />}
          actionLabel="Browse Jobs"
          onAction={() => window.location.href = '/jobs'}
        />
      )}
    </PageShell>
  );
}
