"use client";

import { useState } from 'react';
import { Check, Copy, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobActionsProps {
  jobId: string;
  onApply: () => void;
  onSaveToggle: () => void;
  saved: boolean;
}

export function JobActions({ jobId, onApply, onSaveToggle, saved }: JobActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/jobs/${jobId}`;
    if (navigator.share) {
      await navigator.share({ title: 'Northstar Jobs', text: 'Check out this job opening', url });
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={onApply}>Apply now</Button>
      <Button variant="outline" onClick={onSaveToggle}>{saved ? 'Unsave' : 'Save'}</Button>
      <Button variant="ghost" onClick={handleShare} className="border border-slate-200">
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </Button>
      <Button variant="ghost" onClick={handleShare} className="border border-slate-200">
        <Share2 size={16} />
      </Button>
    </div>
  );
}
