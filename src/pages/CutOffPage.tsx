import React, { useState } from 'react';
import { ActivePage, ExamRecord } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { formatDate } from '../utils/dateUtils';
import { getPageUrl } from '../utils/urlHelper';
import {
  BarChart2,
  Search,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface CutOffPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const CutOffPage: React.FC<CutOffPageProps> = ({ onNavigate, depth = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const cutOffExams = EXAMS_DATABASE.filter(
    (exam) =>
      Boolean(exam.cutOffData || exam.cutOffDate || exam.cutOffLink || exam.status === 'CUT_OFF_RELEASED' || exam.status === 'RESULT_RELEASED') &&
      (!searchQuery ||
        exam.examName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.organization.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Cut Off Marks 2026' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Official &amp; Expected Qualifying Marks</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Category-Wise Cut Off Marks 2026
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
            Official qualifying cut-off scores across General, OBC, EWS, SC, ST, and Ex-Servicemen categories, with previous year trend comparisons and safe target scores.
          </p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs font-bold text-slate-500">
          Showing official cut-off archives for {cutOffExams.length} examinations
        </div>
        <div className="w-full sm:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search exam cut off..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      {/* CUT OFF CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cutOffExams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2.5 bg-blue-50 rounded-2xl">{exam.logoIcon}</span>
                  <div>
                    <a
                      href={getPageUrl('cut-off-detail', exam.slug, depth)}
                      onClick={(e) => {
                        if (onNavigate && !window.location.pathname.endsWith('.html')) {
                          e.preventDefault();
                          onNavigate('cut-off-detail', exam.slug);
                        }
                      }}
                      className="font-extrabold text-slate-900 text-base font-display hover:text-blue-600 transition-colors block"
                    >
                      {exam.examName} Cut Off
                    </a>
                    <p className="text-xs text-slate-500">{exam.organization}</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {exam.cutOffData?.year || 'Expected 2026'}
                </span>
              </div>

              {/* Category Mini Table */}
              {exam.cutOffData ? (
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/80 text-slate-500 font-bold text-[11px]">
                        <th className="py-2 px-3 rounded-l-lg">Category</th>
                        <th className="py-2 px-3">Cut Off Marks</th>
                        <th className="py-2 px-3 rounded-r-lg">Candidates Selected</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {exam.cutOffData.categories.slice(0, 4).map((cat, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="py-2 px-3 font-bold text-slate-800">{cat.category}</td>
                          <td className="py-2 px-3 text-blue-700 font-bold">{cat.marks}</td>
                          <td className="py-2 px-3 text-slate-500">{cat.candidates || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-3 bg-slate-50 rounded-xl text-center mb-4 border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">Official Cut Off Releasing with Result • Expected Cut Off in Details</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Total Vacancies: {exam.totalVacancy}</span>
              <a
                href={getPageUrl('cut-off-detail', exam.slug, depth)}
                onClick={(e) => {
                  if (onNavigate && !window.location.pathname.endsWith('.html')) {
                    e.preventDefault();
                    onNavigate('cut-off-detail', exam.slug);
                  }
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Full Cut Off &amp; Trends</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
