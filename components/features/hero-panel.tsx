"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function HeroPanel({ featuredJobs, companies }: { featuredJobs: Array<{ id: string; title: string; type: string; location: string; salary: string; companyId: string }>; companies: Array<{ id: string; name: string; logo: string }> }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Featured this week</p>
        <Badge variant="success">Hiring now</Badge>
      </div>
      <div className="mt-6 space-y-4">
        {featuredJobs.slice(0, 3).map((job) => (
          <div key={job.id} className="group rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-800 transition-colors duration-200 group-hover:text-blue-600">{job.title}</p>
                <p className="mt-1 text-xs text-slate-400 font-medium">{companies.find((company) => company.id === job.companyId)?.name}</p>
              </div>
              <Badge variant="cyan" className="text-[10px] px-2 py-0">{job.type}</Badge>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="outline" className="text-[10px] px-2 py-0">{job.location}</Badge>
              <Badge variant="success" className="text-[10px] px-2 py-0">{job.salary}</Badge>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

