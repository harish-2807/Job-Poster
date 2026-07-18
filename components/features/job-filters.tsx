"use client";

import { useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { Category, Company, Job } from '@/types/job';
import { Button } from '@/components/ui/button';

interface JobFiltersProps {
  jobs: Job[];
  companies: Company[];
  categories: Category[];
  filters: {
    query: string;
    location: string;
    category: string;
    experience: string;
    jobType: string;
    salary: string;
    remote: boolean;
  };
  sort: string;
  onFilterChange: (changes: Partial<JobFiltersProps['filters']>) => void;
  onSortChange: (value: string) => void;
  onReset: () => void;
}

export function JobFilters({ jobs, companies, categories, filters, sort, onFilterChange, onSortChange, onReset }: JobFiltersProps) {
  const locations = useMemo(() => Array.from(new Set(jobs.map((job) => job.location))), [jobs]);
  const salaryOptions = ['Any', '< $100k', '$100k - $150k', '$150k - $200k', '$200k+'];

  return (
    <div className="space-y-5 rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-slate-400">
        <SlidersHorizontal size={15} />
        <p className="text-xs font-semibold uppercase tracking-[0.2em]">Filters</p>
      </div>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block text-xs font-semibold text-slate-500">Search</span>
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 focus-within:border-blue-500/30 transition-colors">
          <Search size={15} className="text-slate-400" />
          <input value={filters.query} onChange={(event) => onFilterChange({ query: event.target.value })} placeholder="Role, company, keyword" className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" />
        </div>
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block text-xs font-semibold text-slate-500">Location</span>
        <select value={filters.location} onChange={(event) => onFilterChange({ location: event.target.value })} className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500/30 transition-colors">
          <option value="All">All locations</option>
          {locations.map((location) => <option key={location} value={location}>{location}</option>)}
        </select>
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block text-xs font-semibold text-slate-500">Category</span>
        <select value={filters.category} onChange={(event) => onFilterChange({ category: event.target.value })} className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500/30 transition-colors">
          <option value="All">All categories</option>
          {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
        </select>
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block text-xs font-semibold text-slate-500">Experience</span>
        <select value={filters.experience} onChange={(event) => onFilterChange({ experience: event.target.value })} className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500/30 transition-colors">
          <option value="All">Any experience</option>
          <option value="Entry">Entry</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block text-xs font-semibold text-slate-500">Job Type</span>
        <select value={filters.jobType} onChange={(event) => onFilterChange({ jobType: event.target.value })} className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500/30 transition-colors">
          <option value="All">All types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Remote">Remote</option>
        </select>
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block text-xs font-semibold text-slate-500">Salary</span>
        <select value={filters.salary} onChange={(event) => onFilterChange({ salary: event.target.value })} className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500/30 transition-colors">
          <option value="Any">Any salary</option>
          {salaryOptions.filter((option) => option !== 'Any').map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>

      <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
        <input type="checkbox" checked={filters.remote} onChange={(event) => onFilterChange({ remote: event.target.checked })} className="h-4 w-4 rounded border-slate-200 bg-slate-50/50 text-blue-600 focus:ring-0" />
        <span className="text-xs font-semibold text-slate-500">Remote only</span>
      </label>

      <label className="block text-sm text-slate-700">
        <span className="mb-2 block text-xs font-semibold text-slate-500">Sort</span>
        <select value={sort} onChange={(event) => onSortChange(event.target.value)} className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500/30 transition-colors">
          <option value="featured">Featured</option>
          <option value="recent">Most recent</option>
          <option value="salary">Highest salary</option>
          <option value="title">Title A-Z</option>
        </select>
      </label>

      <Button variant="outline" className="w-full text-xs h-9" onClick={onReset}>Reset filters</Button>
    </div>
  );
}
