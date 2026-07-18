import { PageShell } from '@/components/layout/page-shell';
import { CompanyCard } from '@/components/features/company-card';
import { getCompanies, getJobs } from '@/lib/data';

export default function CompaniesPage() {
  const companies = getCompanies();
  const jobs = getJobs();

  return (
    <PageShell
      eyebrow="Trusted teams"
      title="Discover companies building the next wave of products"
      description="Browse modern organizations with strong cultures, compelling missions, and active hiring pipelines."
      actionLabel="Explore jobs"
      actionHref="/jobs"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} openJobs={jobs.filter((job) => job.companyId === company.id).length} />
        ))}
      </div>
    </PageShell>
  );
}
