"use client";

import { useMemo, useState } from 'react';
import { JobFilters } from '@/components/features/job-filters';
import type { Company, Job, Category } from '@/types/job';
import { JobCard } from '@/components/features/job-card';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { Search } from 'lucide-react';

interface JobsPageClientProps {
  jobs: Job[];
  companies: Company[];
  categories: Category[];
}

export function JobsPageClient({ jobs, companies, categories }: JobsPageClientProps) {
  const [filters, setFilters] = useState({
    query: '',
    location: 'All',
    category: 'All',
    experience: 'All',
    jobType: 'All',
    salary: 'Any',
    remote: false,
  });
  const [sort, setSort] = useState('featured');
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const handleFilterChange = (changes: Partial<typeof filters>) => {
    setFilters((prev) => ({ ...prev, ...changes }));
    setPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setPage(1);
  };

  const handleReset = () => {
    setFilters({
      query: '',
      location: 'All',
      category: 'All',
      experience: 'All',
      jobType: 'All',
      salary: 'Any',
      remote: false,
    });
    setSort('featured');
    setPage(1);
  };

  const filteredJobs = useMemo(() => {
    const normalizedQuery = filters.query.toLowerCase();
    const filtered = jobs.filter((job) => {
      const company = companies.find((entry) => entry.id === job.companyId);
      const matchesQuery =
        !normalizedQuery ||
        job.title.toLowerCase().includes(normalizedQuery) ||
        company?.name.toLowerCase().includes(normalizedQuery) ||
        job.description.toLowerCase().includes(normalizedQuery);
      
      const matchesLocation = filters.location === 'All' || job.location === filters.location;
      const matchesType = filters.jobType === 'All' || job.type === filters.jobType;
      const matchesExperience = filters.experience === 'All' || job.experience === filters.experience;
      const matchesCategory = filters.category === 'All' || categories.find((entry) => entry.id === job.categoryId)?.name === filters.category;
      const matchesRemote = !filters.remote || job.remote === true || job.type === 'Remote';

      // Simple salary parsing for filtering
      let matchesSalary = true;
      if (filters.salary !== 'Any') {
        const numericSalary = parseInt(job.salary.replace(/[^0-9]/g, ''), 10);
        if (filters.salary === '< $100k') {
          matchesSalary = numericSalary < 100000;
        } else if (filters.salary === '$100k - $150k') {
          matchesSalary = numericSalary >= 100000 && numericSalary <= 150000;
        } else if (filters.salary === '$150k - $200k') {
          matchesSalary = numericSalary >= 150000 && numericSalary <= 200000;
        } else if (filters.salary === '$200k+') {
          matchesSalary = numericSalary >= 200000;
        }
      }

      return matchesQuery && matchesLocation && matchesType && matchesExperience && matchesCategory && matchesRemote && matchesSalary;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'salary') {
        const salaryA = parseInt(a.salary.replace(/[^0-9]/g, ''), 10) || 0;
        const salaryB = parseInt(b.salary.replace(/[^0-9]/g, ''), 10) || 0;
        return salaryB - salaryA;
      }
      if (sort === 'recent') return b.postedAt.localeCompare(a.postedAt);
      if (sort === 'title') return a.title.localeCompare(b.title);
      return Number(b.featured ?? false) - Number(a.featured ?? false);
    });

    return sorted;
  }, [jobs, companies, categories, filters, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / pageSize));
  const visibleJobs = filteredJobs.slice((page - 1) * pageSize, page * pageSize);

  const handlePageChange = (nextPage: number) => {
    setPage(Math.min(Math.max(1, nextPage), totalPages));
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="h-fit lg:sticky lg:top-24">
        <JobFilters
          jobs={jobs}
          companies={companies}
          categories={categories}
          filters={filters}
          sort={sort}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          onReset={handleReset}
        />
      </aside>

      <div className="space-y-6">
        <div className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Showing {visibleJobs.length} of {filteredJobs.length} jobs</p>
            <p className="text-lg font-semibold text-white">Curated opportunities for modern teams</p>
          </div>
        </div>

        {visibleJobs.length > 0 ? (
          <div className="grid gap-4 xl:grid-cols-2">
            {visibleJobs.map((job) => {
              const company = companies.find((entry) => entry.id === job.companyId);
              return <JobCard key={job.id} job={job} company={company} />;
            })}
          </div>
        ) : (
          <EmptyState
            title="No jobs match your criteria"
            description="Try resetting your filters or adjusting your search query to find what you are looking for."
            icon={<Search size={24} />}
            actionLabel="Reset Filters"
            onAction={handleReset}
          />
        )}

        {filteredJobs.length > pageSize && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-400">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</Button>
              <Button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Next</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

