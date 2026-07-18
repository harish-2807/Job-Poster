import companies from '@/data/companies.json';
import categories from '@/data/categories.json';
import jobs from '@/data/jobs.json';
import skills from '@/data/skills.json';
import type { Company, Category, Job, Skill } from '@/types/job';

export function getCompanies(): Company[] {
  return companies as Company[];
}

export function getCategories(): Category[] {
  return categories as Category[];
}

export function getSkills(): Skill[] {
  return skills as Skill[];
}

export function getJobs(): Job[] {
  return jobs as Job[];
}

export function getFeaturedJobs(): Job[] {
  return (jobs as Job[]).filter((job) => job.featured);
}

export function getCompanyById(id: string): Company | undefined {
  return (companies as Company[]).find((company) => company.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return (categories as Category[]).find((category) => category.id === id);
}

export function getJobById(id: string): Job | undefined {
  return (jobs as Job[]).find((job) => job.id === id);
}

export function getJobsByCompanyId(companyId: string): Job[] {
  return (jobs as Job[]).filter((job) => job.companyId === companyId);
}

export function getJobsByCategoryId(categoryId: string): Job[] {
  return (jobs as Job[]).filter((job) => job.categoryId === categoryId);
}
