"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

export function ApplyModal({ open, onClose, onConfirm, message }: ApplyModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm">
          <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 12, opacity: 0 }} className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Application</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">Apply for this role</h3>
              </div>
              <button onClick={onClose} className="rounded-lg border border-slate-200 p-2 text-slate-400 transition hover:text-slate-700 hover:bg-slate-50">
                <X size={16} />
              </button>
            </div>

            <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-700">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} />{message}</div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={onConfirm}>Confirm application</Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
