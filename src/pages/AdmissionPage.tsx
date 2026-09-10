import React, { useState } from 'react';
import { ActivePage, AdmissionRecord } from '../types/exam';
import { ADMISSIONS_DATABASE } from '../data/admissions';
import { Breadcrumb } from '../components/Breadcrumb';
import { getCountdown, formatDate } from '../utils/dateUtils';
import { getPageUrl } from '../utils/urlHelper';
import {
  GraduationCap,
  Search,
  ExternalLink,
  Calendar,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface AdmissionPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AdmissionPage: React.FC<AdmissionPageProps> = ({ onNavigate, depth = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredAdmissions = ADMISSIONS_DATABASE.filter((adm) => {
    const matchesSearch =
      !searchQuery ||
      adm.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adm.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adm.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = filterCategory === 'All' || adm.category === filterCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Admissions 2026' }]} onNavigate={onNavigate} depth={depth} />

      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>University &amp; Professional Admissions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Latest Admission Forms 2026
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
            Apply online for central universities, polytechnic diplomas, ITI admissions, engineering entrance exams, and counselling schedules.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-500">Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 outline-none cursor-pointer"
          >
            <option value="All">All Disciplines</option>
            <option value="Central University">Central University</option>
            <option value="Technical / Diploma">Technical / Diploma</option>
            <option value="Vocational / ITI">Vocational / ITI</option>
          </select>
        </div>

        <div className="w-full sm:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search admission forms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 outline-none"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAdmissions.map((adm) => {
          const countdown = getCountdown(adm.applicationLastDate, 'deadline');
          return (
            <div
              key={adm.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {adm.category}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                      countdown.isClosed
                        ? 'bg-slate-100 text-slate-600'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {countdown.text}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display mb-1">{adm.course}</h3>
                <div className="text-xs font-medium text-slate-500 mb-3">{adm.university}</div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {adm.description}
                </p>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1.5 text-xs text-slate-600 mb-5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Eligibility:</span>
                    <strong className="text-slate-800">{adm.eligibility}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Application Window:</span>
                    <strong className="text-slate-800">
                      {formatDate(adm.applicationStartDate)} – {formatDate(adm.applicationLastDate)}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Application Fee:</span>
                    <strong className="text-slate-800">{adm.feeDetails}</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <a
                  href={getPageUrl('admission-detail', adm.slug, depth)}
                  onClick={(e) => {
                    if (onNavigate && !window.location.pathname.endsWith('.html')) {
                      e.preventDefault();
                      onNavigate('admission-detail', adm.slug);
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 block"
                >
                  <span>View Admission Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
