import React from 'react';
import { ActivePage, ExamRecord } from '../types/exam';
import { Layers, ArrowLeft, Clock, Bell, Sparkles, BookOpen } from 'lucide-react';

interface MockTestPlaceholderProps {
  exam?: ExamRecord;
  onNavigate: (page: ActivePage, slug?: string) => void;
}

export const MockTestPlaceholder: React.FC<MockTestPlaceholderProps> = ({ exam, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <div className="bg-white border-2 border-dashed border-blue-200 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Layers className="w-9 h-9 text-blue-600 animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Under Active Preparation</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display mb-3">
            Mock Test Not Available Yet
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            {exam
              ? `The simulated online test series for ${exam.examName} is currently being mapped with the latest exam pattern, sectional timing, and negative marking.`
              : 'Our interactive online mock test portal is being prepared with full-length sectional tests, previous year papers, and instant performance analysis.'}
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 font-bold text-slate-800 text-xs mb-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Exact CBT Interface</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Matches the actual TCS / NTA exam screen layout and palette.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 font-bold text-slate-800 text-xs mb-1">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>Detailed Solutions</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Step-by-step bilingual explanations in Hindi and English.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 font-bold text-slate-800 text-xs mb-1">
                <Bell className="w-3.5 h-3.5 text-amber-600" />
                <span>All India Rank (AIR)</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Benchmarking against thousands of real competing aspirants.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {exam ? (
              <button
                onClick={() => onNavigate('job-detail', exam.slug)}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to {exam.examName}</span>
              </button>
            ) : (
              <button
                onClick={() => onNavigate('latest-jobs')}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Explore Latest Jobs</span>
              </button>
            )}

            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all cursor-pointer border border-slate-200"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
