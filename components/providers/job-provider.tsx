"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import type { Job } from '@/types/job';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface JobContextType {
  savedJobIds: string[];
  toggleSaveJob: (jobId: string) => void;
  isJobSaved: (jobId: string) => boolean;
  recentlyViewedIds: string[];
  addRecentlyViewed: (jobId: string) => void;
  appliedJobIds: string[];
  applyToJob: (jobId: string) => void;
  isJobApplied: (jobId: string) => boolean;
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  dismissToast: (id: string) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [savedJobIds, setSavedJobIds] = useLocalStorage<string[]>('northstar_saved_jobs', []);
  const [recentlyViewedIds, setRecentlyViewedIds] = useLocalStorage<string[]>('northstar_recently_viewed', []);
  const [appliedJobIds, setAppliedJobIds] = useLocalStorage<string[]>('northstar_applied_jobs', []);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSaveJob = (jobId: string) => {
    if (savedJobIds.includes(jobId)) {
      setSavedJobIds(savedJobIds.filter(id => id !== jobId));
      showToast('Job removed from saved list', 'info');
    } else {
      setSavedJobIds([...savedJobIds, jobId]);
      showToast('Job saved successfully!', 'success');
    }
  };

  const isJobSaved = (jobId: string) => savedJobIds.includes(jobId);

  const addRecentlyViewed = (jobId: string) => {
    setRecentlyViewedIds(prev => {
      const filtered = prev.filter(id => id !== jobId);
      return [jobId, ...filtered].slice(0, 10);
    });
  };

  const applyToJob = (jobId: string) => {
    if (!appliedJobIds.includes(jobId)) {
      setAppliedJobIds([...appliedJobIds, jobId]);
    }
    showToast('Application submitted successfully!', 'success');
  };

  const isJobApplied = (jobId: string) => appliedJobIds.includes(jobId);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Prevent rendering children until mounted to avoid hydration mismatch with LocalStorage
  if (!isMounted) {
    return null;
  }

  return (
    <JobContext.Provider value={{
      savedJobIds,
      toggleSaveJob,
      isJobSaved,
      recentlyViewedIds,
      addRecentlyViewed,
      appliedJobIds,
      applyToJob,
      isJobApplied,
      toasts,
      showToast,
      dismissToast
    }}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border p-4 shadow-xl transition-all duration-300 animate-in slide-in-from-bottom-5 ${toast.type === 'success'
                ? 'border-emerald-500/20 bg-emerald-950/90 text-emerald-200'
                : toast.type === 'error'
                  ? 'border-rose-500/20 bg-rose-950/90 text-rose-200'
                  : 'border-cyan-500/20 bg-cyan-950/90 text-cyan-200'
              }`}
          >
            <span className="text-sm font-medium">{toast.message}</span>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-xs opacity-70 hover:opacity-100 transition-opacity"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
}
