import { PageShell } from '@/components/layout/page-shell';
import { JobsPageClient } from '@/components/features/jobs-page-client';
import { getCategories, getCompanies, getJobs } from '@/lib/data';

export default function JobsPage() {
  const jobs = getJobs();
  const companies = getCompanies();
  const categories = getCategories();

  return (
    <PageShell
      eyebrow="Career marketplace"
      title="Explore hundreds of thoughtfully curated opportunities"
      description="Search, refine, and discover jobs that align with your strengths, preferred location, and growth stage."
      actionLabel="View featured roles"
      actionHref="/"
    >
      <JobsPageClient jobs={jobs} companies={companies} categories={categories} />
    </PageShell>
  );
}
