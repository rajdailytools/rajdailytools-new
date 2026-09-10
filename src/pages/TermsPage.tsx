import React from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

interface TermsPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Terms & Conditions' }]} onNavigate={onNavigate} depth={depth} />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Usage Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 2026 • RajDailyTools Educational Portal
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">1. Acceptance of Terms</h2>
            <p>
              By accessing and browsing <strong>RajDailyTools</strong>, you acknowledge and agree to comply with the terms and conditions outlined here. If you do not accept these terms, please refrain from using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">2. Educational &amp; Informational Purpose Only</h2>
            <p>
              RajDailyTools is an independent educational and informational website. <strong>We are NOT affiliated, endorsed, or associated with any government recruitment board, commission, or organization.</strong> All information—such as dates, vacancies, eligibility criteria, and cut-off marks—is curated from official recruitment advertisements published in the public domain.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">3. Verification with Official Notifications</h2>
            <p>
              While every effort is made to maintain accurate, up-to-date, and verified information, users and candidates are strictly instructed to verify all critical notifications, eligibility conditions, dates, and instructions with the official government advertisements and websites before submitting applications or fee payments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">4. Intellectual Property &amp; Content</h2>
            <p>
              The design, layout, custom calculation algorithms, and structured summaries on RajDailyTools are protected intellectual property. Government notices, circulars, and official logos remain the property of their respective government departments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">5. Limitation of Liability</h2>
            <p>
              RajDailyTools, its authors, and administrators shall not be held liable for any inaccuracies, discrepancies, missed application deadlines, examination changes, or incidental damages resulting from reliance on the data presented on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
