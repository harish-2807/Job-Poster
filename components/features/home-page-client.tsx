"use client";

import Link from 'next/link';
import { ArrowRight, Building2, Compass, Newspaper, Sparkles, TrendingUp, Users, Search, MapPin, Briefcase, Bell, Upload } from 'lucide-react';
import { getCategories, getCompanies, getFeaturedJobs, getJobs, getSkills } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { HeroPanel } from '@/components/features/hero-panel';
import { RecentlyViewed } from '@/components/features/recently-viewed';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function HomePageClient() {
  const jobs = getJobs();
  const companies = getCompanies();
  const categories = getCategories();
  const skills = getSkills();
  const featuredJobs = getFeaturedJobs();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm sm:p-10 lg:p-14"
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-xs font-semibold text-blue-600">
              <Sparkles size={12} />
              Premium opportunities, thoughtfully curated
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Find your next chapter in a <span className="text-blue-600">world-class</span> team.
            </h1>
            <p className="text-base leading-7 text-slate-500 max-w-xl">
              Discover high-impact roles at modern companies, from design-led startups to category-defining scale-ups.
            </p>

            {/* Search Area */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50/50 p-2 shadow-sm max-w-xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex flex-1 items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200/60">
                  <Search size={16} className="text-slate-400" />
                  <input placeholder="Search by Job Title..." className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" />
                </div>
                <div className="flex flex-1 items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200/60">
                  <MapPin size={16} className="text-slate-400" />
                  <input placeholder="Search by Location..." className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 rounded-lg">
                  Search
                </Button>
              </div>
              <div className="mt-3 px-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-medium">Popular:</span>
                {['Remote', 'React', 'Design Systems', 'Product Manager'].map((tag) => (
                  <Link key={tag} href={`/jobs?query=${tag}`} className="hover:text-blue-600 transition-colors">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <div>
                <p className="text-2xl font-bold text-slate-900">{jobs.length}+</p>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Open roles</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{companies.length}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Companies</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{categories.length}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Categories</p>
              </div>
            </div>
          </div>

          {/* Smiling Woman Hero Image & Floating Cards */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-teal-500/10 rounded-full blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg max-w-[360px] aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                alt="Professional working on laptop" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats Cards */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-6 top-12 rounded-xl border border-slate-200 bg-white p-4 shadow-md flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <TrendingUp size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Success Rate</p>
                <p className="text-sm font-bold text-slate-800">98.4% Match</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute -right-6 bottom-12 rounded-xl border border-slate-200 bg-white p-4 shadow-md flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Users size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Active Talent</p>
                <p className="text-sm font-bold text-slate-800">12,400+ Online</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trusted by Leading Companies Section */}
      <section className="py-8 border-y border-slate-200/60 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
            Trusted by Leading Companies
          </p>
          <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-2 px-4 md:flex-row md:justify-between md:overflow-x-visible md:pb-0 md:pt-0 md:px-0 scrollbar-none">
            {['Google', 'Microsoft', 'Amazon', 'Apple', 'Adobe', 'Atlassian', 'Stripe', 'Spotify', 'Salesforce', 'Netflix', 'Uber', 'Airbnb'].map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:border-blue-100 min-w-[120px] h-16 shrink-0 md:min-w-0 md:flex-1"
              >
                <img
                  src={`/logos/${logo.toLowerCase()}.svg`}
                  alt={`${logo} logo`}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecentlyViewed />

      {/* Main Content Grid with Sidebar */}
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Left Column: Featured Jobs */}
        <div className="space-y-8">
          <section id="jobs" className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Latest openings</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">Curated roles across product, design, and engineering</h2>
              </div>
              <Link href="/jobs" className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-600 transition-colors">
                View all <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-1">
              {jobs.slice(0, 6).map((job) => {
                const company = companies.find((entry) => entry.id === job.companyId);
                return (
                  <article key={job.id} className="group relative rounded-xl border border-slate-200/60 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-base font-bold text-slate-700 shadow-inner transition-transform duration-300 group-hover:scale-105">
                          {company?.logo}
                        </div>
                        <div>
                          <Link href={`/jobs/${job.id}`} className="text-base font-bold text-slate-900 transition-colors duration-200 hover:text-blue-600">
                            {job.title}
                          </Link>
                          <p className="text-xs text-slate-400 font-semibold mt-1">{company?.name}</p>
                          <p className="mt-3 text-sm leading-6 text-slate-500 font-normal">{job.description}</p>
                        </div>
                      </div>
                      {job.featured && <Badge variant="warning">Featured</Badge>}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge variant="cyan">{job.type}</Badge>
                      <Badge variant="success">{job.salary}</Badge>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Popular Categories */}
          <section id="categories" className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Explore by discipline</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">Build a career around what you love</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {categories.slice(0, 6).map((category) => (
                <div key={category.id} className="group rounded-xl border border-slate-200/60 bg-slate-50/50 p-5 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-sm">
                  <p className="text-sm font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600">{category.name}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400 font-normal">{category.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          {/* Upload Resume Card */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Upload size={18} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Upload your Resume</h3>
            <p className="text-xs text-slate-400 leading-5">Let top employers find you directly by uploading your resume to our talent pool.</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold h-9 rounded-lg">
              Upload Resume
            </Button>
          </div>

          {/* Job Alerts Card */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <Bell size={18} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Create Job Alert</h3>
            <p className="text-xs text-slate-400 leading-5">Get notified instantly when new roles matching your preferences are posted.</p>
            <Button variant="outline" className="w-full text-xs font-semibold h-9 rounded-lg">
              Set Alert
            </Button>
          </div>

          {/* Featured Jobs Sidebar Card */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">Featured Jobs</h3>
            <div className="space-y-3">
              {featuredJobs.slice(0, 3).map((job) => (
                <Link key={job.id} href={`/jobs/${job.id}`} className="block group">
                  <p className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{job.title}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{job.salary} • {job.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Stack */}
      <section className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Skill stack</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Elevate your profile with the tools teams are hiring for</h2>
          </div>
          <Button variant="outline" className="text-xs h-9">Browse Skills</Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill.id} variant="outline" className="px-3 py-1 text-xs">
              {skill.name}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
