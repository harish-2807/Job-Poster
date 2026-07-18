"use client";

import React, { useEffect, useState } from 'react';
import { useJobs } from '@/components/providers/job-provider';
import { JobActions } from '@/components/features/job-actions';
import { ApplyModal } from '@/components/features/apply-modal';

interface JobDetailClientProps {
  jobId: string;
  jobTitle: string;
}

export function JobDetailClient({ jobId, jobTitle }: JobDetailClientProps) {
  const { isJobSaved, toggleSaveJob, applyToJob, isJobApplied, addRecentlyViewed } = useJobs();
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  useEffect(() => {
    addRecentlyViewed(jobId);
  }, [jobId]);

  const saved = isJobSaved(jobId);
  const applied = isJobApplied(jobId);

  const handleApplyConfirm = () => {
    applyToJob(jobId);
    setIsApplyOpen(false);
  };

  return (
    <>
      <JobActions
        jobId={jobId}
        onApply={() => setIsApplyOpen(true)}
        onSaveToggle={() => toggleSaveJob(jobId)}
        saved={saved}
      />

      <ApplyModal
        open={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        onConfirm={handleApplyConfirm}
        message={applied ? "You have already applied to this role." : `You are applying for the ${jobTitle} position.`}
      />
    </>
  );
}
