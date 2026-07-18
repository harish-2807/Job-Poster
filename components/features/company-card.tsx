import Link from 'next/link';
import { Building2, Sparkles } from 'lucide-react';
import type { Company } from '@/types/job';
import { Badge } from '@/components/ui/badge';

interface CompanyCardProps {
  company: Company;
  openJobs: number;
}

export function CompanyCard({ company, openJobs }: CompanyCardProps) {
  const rating = (4.6 + (openJobs % 3) * 0.1).toFixed(1);

  return (
    <article className="group relative rounded-xl border border-slate-200/60 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-base font-bold text-slate-700 shadow-inner transition-transform duration-300 group-hover:scale-105">
          {company.logo}
        </div>
        <Badge variant="warning">
          ★ {rating}
        </Badge>
      </div>

      <Link href={`/companies/${company.slug}`} className="mt-4 block text-lg font-bold text-slate-900 transition-colors duration-200 hover:text-blue-600">
        {company.name}
      </Link>
      <p className="mt-2 text-sm leading-6 text-slate-500 font-normal">{company.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="outline">{company.industry}</Badge>
        <Badge variant="secondary">{company.size}</Badge>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400 font-medium">
        <div className="flex items-center gap-1.5">
          <Building2 size={13} />
          <span>{openJobs} open jobs</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles size={13} />
          <span>{company.location}</span>
        </div>
      </div>
    </article>
  );
}
