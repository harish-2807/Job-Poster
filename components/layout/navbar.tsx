"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Menu, Moon, Sun, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dropdown, DropdownItem } from '@/components/ui/dropdown';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const links = [
  { href: '/jobs' as const, label: 'Jobs' },
  { href: '/companies' as const, label: 'Companies' },
  { href: '/saved-jobs' as const, label: 'Saved' },
  { href: '/applications' as const, label: 'Applications' },
  { href: '/profile' as const, label: 'Profile' },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-2 text-blue-600">
            <BriefcaseBusiness size={18} />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-slate-800 uppercase">Northstar</p>
            <p className="text-xs text-slate-400 font-semibold">Jobs</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-500 transition hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {mounted && theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>

          <Dropdown
            align="right"
            trigger={
              <button className="flex items-center focus:outline-none">
                <Avatar className="h-9 w-9 cursor-pointer hover:border-blue-500/30 transition-colors">
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
              </button>
            }
          >
            <DropdownItem onClick={() => window.location.href = '/profile'}>
              <User size={14} className="mr-2" /> Profile
            </DropdownItem>
            <DropdownItem onClick={() => window.location.href = '/saved-jobs'}>
              Saved Jobs
            </DropdownItem>
            <DropdownItem onClick={() => window.location.href = '/applications'}>
              Applications
            </DropdownItem>
          </Dropdown>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
}
