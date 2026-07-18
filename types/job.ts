export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  tagline: string;
  hiring: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface Job {
  id: string;
  title: string;
  companyId: string;
  categoryId: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  postedAt: string;
  description: string;
  requirements: string[];
  benefits: string[];
  featured?: boolean;
  remote?: boolean;
  experience: 'Entry' | 'Mid' | 'Senior';
}
