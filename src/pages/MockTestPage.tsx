import React from 'react';
import { ActivePage } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { Layers, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { getPageUrl } from '../utils/urlHelper';

interface MockTestPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const MockTestPage: React.FC<MockTestPageProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Mock Test Series' }]} onNavigate={onNavigate} depth={depth} />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-blue-400/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Online CBT Simulation Engine</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Government Exam Mock Tests 2026
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Practice full-length test papers designed on the latest official exam patterns. Experience real CBT timer interfaces, negative marking evaluation, and instant performance analysis.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Real Exam Timer</h3>
            <p className="text-xs text-slate-500">60 - 120 minute countdowns with section switching</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Negative Marking</h3>
            <p className="text-xs text-slate-500">Exact 0.25 / 0.50 deductions calculated automatically</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Detailed Explanations</h3>
            <p className="text-xs text-slate-500">Step-by-step solution keys for every question</p>
          </div>
        </div>
      </div>

      {/* Mock Tests Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 font-display">
          Available Online Test Series ({EXAMS_DATABASE.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXAMS_DATABASE.map((exam) => (
            <div
              key={exam.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-3xl p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                    {exam.logoIcon}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                    {exam.category}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 font-display mb-1">
                  {exam.examName} Mock Test
                </h3>
                <p className="text-xs text-slate-500 mb-4">{exam.organization}</p>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs space-y-1.5 mb-5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Questions:</span>
                    <strong className="text-slate-800">
                      {exam.examPattern[0]?.subjects.reduce((sum, s) => sum + s.questions, 0) || 100} Qs
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Duration:</span>
                    <strong className="text-slate-800">
                      {exam.examPattern[0]?.duration || '60 Minutes'}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Marking Penalty:</span>
                    <strong className="text-amber-700">
                      {exam.examPattern[0]?.negativeMarking || '0.50 Marks'}
                    </strong>
                  </div>
                </div>
              </div>

              <a
                href={exam.mockTestLink || getPageUrl('tool-detail', `mock-test?exam=${exam.slug}`, depth)}
                target={exam.mockTestLink ? '_blank' : undefined}
                rel={exam.mockTestLink ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!exam.mockTestLink && onNavigate && !window.location.pathname.endsWith('.html')) {
                    e.preventDefault();
                    onNavigate('mock-test-not-found', exam.slug);
                  }
                }}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs text-center block"
              >
                <span>Start Practice Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
