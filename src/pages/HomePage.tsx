import React, { useState } from 'react';
import { ActivePage, ExamCategory } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { ADMISSIONS_DATABASE } from '../data/admissions';
import { getCountdown, formatDate } from '../utils/dateUtils';
import { performGlobalSearch, GlobalSearchResult } from '../utils/searchUtils';
import { getPageUrl } from '../utils/urlHelper';
import {
  Search,
  Briefcase,
  IdCard,
  FileCheck,
  Trophy,
  BarChart2,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Layers,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, depth = 0 }) => {
  const [heroSearch, setHeroSearch] = useState('');
  const [searchResults, setSearchResults] = useState<GlobalSearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHeroSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setHeroSearch(val);
    if (val.trim().length >= 2) {
      setSearchResults(performGlobalSearch(val));
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const handleSelectResult = (item: GlobalSearchResult) => {
    setShowDropdown(false);
    if (typeof window !== 'undefined' && window.location && window.location.pathname.endsWith('.html')) {
      window.location.href = getPageUrl(item.page, item.slug, depth);
    } else {
      onNavigate(item.page, item.slug);
    }
  };

  const openApplications = EXAMS_DATABASE.filter((e) => e.status === 'APPLICATION_OPEN');
  const admitCards = EXAMS_DATABASE.filter(
    (e) => e.status === 'ADMIT_CARD_RELEASED' || e.admitCardDate
  );
  const answerKeys = EXAMS_DATABASE.filter(
    (e) => e.status === 'ANSWER_KEY_RELEASED' || e.answerKeyDate
  );
  const results = EXAMS_DATABASE.filter(
    (e) => e.status === 'RESULT_RELEASED' || e.resultDate
  );

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-[#f0f7ff] via-white to-[#fef9ee] pt-12 pb-16 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>185+ Guides &amp; Resources • Updated Daily</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-display">
                India's Exam Preparation <br />
                <span className="text-blue-600">&amp; Recruitment Resource</span>
              </h1>

              <p className="text-lg font-semibold text-slate-600 font-display">
                Helping Students &amp; Aspirants Prepare Smarter Every Day.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                RajDailyTools unites government exam updates, eligibility checkers, recruitment notifications, admit cards, answer keys, results, and smart calculators directly built into our guides so you can prepare with total clarity.
              </p>

              {/* Central Search Box */}
              <div className="relative max-w-xl">
                <div className="flex items-center bg-white border-2 border-slate-300 rounded-2xl shadow-md p-1.5 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                  <div className="pl-3 pr-2 text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search exams, latest jobs, admit cards, results..."
                    value={heroSearch}
                    onChange={handleHeroSearch}
                    onFocus={() => {
                      if (heroSearch.length >= 2) setShowDropdown(true);
                    }}
                    className="w-full text-sm text-slate-800 placeholder-slate-400 bg-transparent py-2.5 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      if (searchResults.length > 0) {
                        handleSelectResult(searchResults[0]);
                      } else {
                        onNavigate('latest-jobs');
                      }
                    }}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 shrink-0 cursor-pointer"
                  >
                    Search Portal
                  </button>
                </div>

                {/* Dropdown Results */}
                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 max-h-[380px] overflow-y-auto p-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                      Matching Resources ({searchResults.length})
                    </div>
                    {searchResults.length === 0 ? (
                      <div className="py-6 text-center text-xs text-slate-500">
                        No matching exams found. Try typing 'SSC', 'Army', 'Railway', or 'Police'.
                      </div>
                    ) : (
                      searchResults.map((item) => (
                        <a
                          key={item.id}
                          href={getPageUrl(item.page, item.slug, depth)}
                          onClick={(e) => {
                            if (onNavigate && (!window.location.pathname.endsWith('.html'))) {
                              e.preventDefault();
                              handleSelectResult(item);
                            }
                          }}
                          className="w-full text-left p-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-3 cursor-pointer border-b border-slate-100 last:border-none block"
                        >
                          <span className="text-xl p-2 bg-slate-100 rounded-lg">{item.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 truncate">{item.title}</div>
                            <div className="text-[11px] text-slate-500">{item.subtitle}</div>
                          </div>
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 shrink-0">
                            {item.badge}
                          </span>
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={getPageUrl('latest-jobs', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('latest-jobs');
                    }
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Latest Jobs</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={getPageUrl('admit-card', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('admit-card');
                    }
                  }}
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold rounded-xl border border-slate-300 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <IdCard className="w-4 h-4 text-blue-600" />
                  <span>Download Admit Cards</span>
                </a>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200/80 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    185<span className="text-blue-600">+</span>
                  </div>
                  <div className="text-xs font-medium text-slate-500">Guides &amp; Updates</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    4<span className="text-blue-600">+</span>
                  </div>
                  <div className="text-xs font-medium text-slate-500">Exam Categories</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    100<span className="text-emerald-600">%</span>
                  </div>
                  <div className="text-xs font-medium text-slate-500">Free to Access</div>
                </div>
              </div>
            </div>

            {/* Right Dashboard Widget Preview */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 relative">
                {/* Topbar decoration */}
                <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-slate-400 ml-2">RajDailyTools Hub Preview</span>
                </div>

                <div className="space-y-3">
                  {EXAMS_DATABASE.slice(0, 4).map((job) => {
                    const badgeText =
                      job.status === 'APPLICATION_OPEN'
                        ? 'Apply Open'
                        : job.status === 'ADMIT_CARD_RELEASED'
                        ? 'Admit Card Out'
                        : job.status === 'ANSWER_KEY_RELEASED'
                        ? 'Answer Key'
                        : job.status === 'RESULT_RELEASED'
                        ? 'Result Out'
                        : 'Active';

                    const badgeStyle =
                      job.status === 'APPLICATION_OPEN'
                        ? 'bg-emerald-100 text-emerald-800'
                        : job.status === 'ADMIT_CARD_RELEASED'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800';

                    return (
                      <a
                        key={job.id}
                        href={getPageUrl('job-detail', job.slug, depth)}
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate('job-detail', job.slug);
                          }
                        }}
                        className="p-3.5 bg-slate-50 hover:bg-blue-50/70 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                            {job.logoIcon}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 line-clamp-1">{job.examName}</div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {job.totalVacancy} • {(job.education || []).join(', ')}
                            </div>
                          </div>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${badgeStyle} shrink-0 ml-2`}>
                          {badgeText}
                        </span>
                      </a>
                    );
                  })}
                </div>

                {/* Direct category icons row */}
                <div className="grid grid-cols-4 gap-2 pt-4 mt-4 border-t border-slate-100 text-center">
                  <a
                    href={getPageUrl('latest-jobs', undefined, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('latest-jobs');
                      }
                    }}
                    className="p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer block"
                  >
                    <div className="text-xl">📘</div>
                    <span className="text-[10px] font-bold text-slate-700">SSC</span>
                  </a>
                  <a
                    href={getPageUrl('latest-jobs', undefined, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('latest-jobs');
                      }
                    }}
                    className="p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer block"
                  >
                    <div className="text-xl">🪖</div>
                    <span className="text-[10px] font-bold text-slate-700">Army</span>
                  </a>
                  <a
                    href={getPageUrl('latest-jobs', undefined, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('latest-jobs');
                      }
                    }}
                    className="p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer block"
                  >
                    <div className="text-xl">👮</div>
                    <span className="text-[10px] font-bold text-slate-700">Police</span>
                  </a>
                  <a
                    href={getPageUrl('latest-jobs', undefined, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('latest-jobs');
                      }
                    }}
                    className="p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer block"
                  >
                    <div className="text-xl">🚆</div>
                    <span className="text-[10px] font-bold text-slate-700">Railway</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LATEST VACANCIES — APPLY BEFORE LAST DATE (BOX WITH DYNAMIC COUNTDOWN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/15">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Urgent Deadlines</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
                Latest Vacancies — Apply Before Last Date
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">
                Real-time countdown timer tracking official recruitment deadlines. Do not miss applying!
              </p>
            </div>
            <a
              href={getPageUrl('latest-jobs', undefined, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('latest-jobs');
                }
              }}
              className="self-start md:self-auto px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-700 text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              View All Open Jobs →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {openApplications.slice(0, 3).map((job) => {
              const countdown = getCountdown(job.applicationLastDate, 'deadline');
              return (
                <div
                  key={job.id}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-2xl p-1.5 bg-white/20 rounded-xl">{job.logoIcon}</span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-display shadow-xs">
                        {countdown.text}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-white font-display line-clamp-1 mb-1">
                      {job.examName}
                    </h3>
                    <p className="text-xs text-blue-100 line-clamp-2 mb-4">
                      {job.postName}
                    </p>

                    <div className="space-y-1.5 text-xs text-blue-100/90 mb-5 bg-black/20 p-3 rounded-xl">
                      <div className="flex justify-between">
                        <span className="text-blue-200">Vacancy:</span>
                        <strong className="text-white font-bold">{job.totalVacancy}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-200">Last Date:</span>
                        <strong className="text-white">{formatDate(job.applicationLastDate)}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-200">Education:</span>
                        <strong className="text-white">{job.education.join(', ')}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={getPageUrl('job-detail', job.slug, depth)}
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault();
                          onNavigate('job-detail', job.slug);
                        }
                      }}
                      className="py-2.5 px-3 bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer"
                    >
                      View Details
                    </a>
                    {job.applyLink ? (
                      <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>Apply Online</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <a
                        href={getPageUrl('job-detail', job.slug, depth)}
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate('job-detail', job.slug);
                          }
                        }}
                        className="py-2.5 px-3 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl cursor-pointer text-center"
                      >
                        Apply Online
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LATEST JOBS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Briefcase className="w-4 h-4" />
              <span>Recruitments 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Latest Government Jobs
            </h2>
          </div>
          <a
            href={getPageUrl('latest-jobs', undefined, depth)}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('latest-jobs');
              }
            }}
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Jobs</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXAMS_DATABASE.slice(0, 6).map((exam) => {
            const countdown = getCountdown(exam.applicationLastDate, 'deadline');
            return (
              <div
                key={exam.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <span className="text-2xl p-2 bg-slate-50 rounded-xl shrink-0">{exam.logoIcon}</span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                        countdown.isClosed
                          ? 'bg-slate-100 text-slate-600'
                          : countdown.isUrgent
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {countdown.text}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display line-clamp-1 mb-1">
                    {exam.examName}
                  </h3>
                  <div className="text-xs text-slate-500 line-clamp-1 mb-3">{exam.organization}</div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                    <div>
                      <span className="text-[10.5px] text-slate-400 block">Total Vacancy:</span>
                      <strong className="text-slate-800">{exam.totalVacancy}</strong>
                    </div>
                    <div>
                      <span className="text-[10.5px] text-slate-400 block">Last Date:</span>
                      <strong className="text-slate-800">{formatDate(exam.applicationLastDate)}</strong>
                    </div>
                    <div>
                      <span className="text-[10.5px] text-slate-400 block">Education:</span>
                      <strong className="text-slate-800">{exam.education.join(', ')}</strong>
                    </div>
                    <div>
                      <span className="text-[10.5px] text-slate-400 block">Age Limit:</span>
                      <strong className="text-slate-800">{exam.ageMin} - {exam.ageMax} Yrs</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <a
                    href={getPageUrl('job-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('job-detail', exam.slug);
                      }
                    }}
                    className="flex-1 py-2 px-3 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-xs rounded-xl transition-all cursor-pointer text-center"
                  >
                    View Details
                  </a>
                  {exam.applyLink && exam.status === 'APPLICATION_OPEN' && (
                    <a
                      href={exam.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Apply</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. ADMIT CARDS & EXAM CITY UPDATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
              <IdCard className="w-4 h-4" />
              <span>Hall Tickets &amp; City Slips</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Latest Admit Cards 2026
            </h2>
          </div>
          <a
            href={getPageUrl('admit-card', undefined, depth)}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('admit-card');
              }
            }}
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Admit Cards</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {admitCards.slice(0, 3).map((exam) => {
            const examCountdown = getCountdown(exam.examDate, 'exam');
            return (
              <div
                key={exam.id}
                className="bg-white border border-purple-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl p-2 bg-purple-50 rounded-xl">{exam.logoIcon}</span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
                      {exam.status === 'ADMIT_CARD_RELEASED' ? 'Admit Card Released' : 'Admit Card Soon'}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base font-display mb-1">
                    {exam.examName} Admit Card
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{exam.organization}</p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Exam Date:</span>
                      <strong className="text-slate-800">{formatDate(exam.examDate)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Countdown:</span>
                      <strong className="text-purple-700 font-bold">{examCountdown.text}</strong>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getPageUrl('admit-card-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('admit-card-detail', exam.slug);
                      }
                    }}
                    className="py-2.5 px-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl transition-colors text-center cursor-pointer"
                  >
                    Download Hall Ticket
                  </a>
                  <a
                    href={getPageUrl('admit-card-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('admit-card-detail', exam.slug);
                      }
                    }}
                    className="py-2.5 px-3 bg-purple-50 text-purple-700 hover:bg-purple-100 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer"
                  >
                    Check Exam City
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ANSWER KEY & SCORE CALCULATOR UPDATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              <FileCheck className="w-4 h-4" />
              <span>Response Sheets &amp; Objections</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Latest Answer Keys &amp; Calculators
            </h2>
          </div>
          <a
            href={getPageUrl('answer-key', undefined, depth)}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('answer-key');
              }
            }}
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Answer Keys</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {answerKeys.slice(0, 3).map((exam) => (
            <div
              key={exam.id}
              className="bg-white border border-amber-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl p-2 bg-amber-50 rounded-xl">{exam.logoIcon}</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                    Answer Key Out
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base font-display mb-1">
                  {exam.examName} Answer Key
                </h3>
                <p className="text-xs text-slate-500 mb-3">{exam.organization}</p>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Exam Date:</span>
                    <strong className="text-slate-800">{formatDate(exam.examDate)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Objection Window:</span>
                    <strong className="text-amber-700 font-bold">
                      {exam.objectionLastDate ? formatDate(exam.objectionLastDate) : 'Active'}
                    </strong>
                  </div>
                </div>
              </div>

              <a
                href={getPageUrl('answer-key-detail', exam.slug, depth)}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('answer-key-detail', exam.slug);
                  }
                }}
                className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer shadow-xs block"
              >
                Calculate Score &amp; View Response Sheet →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RESULTS & CUT OFF UPDATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest Results Box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900 font-display">Latest Results 2026</h3>
              </div>
              <a
                href={getPageUrl('result', undefined, depth)}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('result');
                  }
                }}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                All Results →
              </a>
            </div>
            <div className="space-y-3">
              {results.slice(0, 3).map((res) => (
                <div
                  key={res.id}
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-100 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display">{res.examName} Result</h4>
                    <span className="text-[11px] text-slate-500">
                      Declared on {formatDate(res.resultDate)}
                    </span>
                  </div>
                  <a
                    href={getPageUrl('result-detail', res.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('result-detail', res.slug);
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    Check Result
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Cut Off Box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900 font-display">Latest Category Cut Off</h3>
              </div>
              <a
                href={getPageUrl('cut-off', undefined, depth)}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('cut-off');
                  }
                }}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                All Cut Offs →
              </a>
            </div>
            <div className="space-y-3">
              {EXAMS_DATABASE.filter((e) => e.cutOffData).slice(0, 3).map((cut) => (
                <div
                  key={cut.id}
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display">{cut.examName} Cut Off</h4>
                    <span className="text-[11px] text-slate-500">
                      UR: {cut.cutOffData?.categories[0]?.marks} • OBC: {cut.cutOffData?.categories[1]?.marks}
                    </span>
                  </div>
                  <a
                    href={getPageUrl('cut-off-detail', cut.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('cut-off-detail', cut.slug);
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    View Cut Off
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. MOCK TESTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-400/30">
                <Layers className="w-3.5 h-3.5" />
                <span>Simulated Online CBT Platform</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
                Latest Exam Mock Tests
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Full-length mock tests mapped to official question types, negative marking, and real timer controls.
              </p>
            </div>
            <a
              href={getPageUrl('mock-test', undefined, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('mock-test');
                }
              }}
              className="self-start md:self-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              Explore Mock Test Series →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXAMS_DATABASE.slice(0, 4).map((test) => (
              <div
                key={test.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-4.5 hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl p-1.5 bg-white/10 rounded-xl inline-block mb-3">
                    {test.logoIcon}
                  </div>
                  <h3 className="font-bold text-sm text-white font-display line-clamp-1 mb-1">
                    {test.examName}
                  </h3>
                  <div className="text-xs text-slate-400 mb-3">Full Mock Test &amp; PYQ Sets</div>
                </div>

                {test.mockTestLink ? (
                  <a
                    href={test.mockTestLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer text-center block"
                  >
                    Start Mock Test
                  </a>
                ) : (
                  <a
                    href={getPageUrl('mock-test-not-found', test.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('mock-test-not-found', test.slug);
                      }
                    }}
                    className="w-full py-2 px-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer text-center block"
                  >
                    Start Mock Test
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LATEST ADMISSION FORMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Universities &amp; Technical Courses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Latest Admissions 2026
            </h2>
          </div>
          <a
            href={getPageUrl('admission', undefined, depth)}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('admission');
              }
            }}
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Admissions</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ADMISSIONS_DATABASE.map((adm) => {
            const countdown = getCountdown(adm.applicationLastDate, 'deadline');
            return (
              <div
                key={adm.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                      {adm.category}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        countdown.isClosed
                          ? 'bg-slate-100 text-slate-600'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {countdown.text}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 font-display mb-1">{adm.course}</h3>
                  <div className="text-xs text-slate-500 mb-3">{adm.university}</div>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-4">{adm.description}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs text-slate-500">
                    Last Date: <strong className="text-slate-800">{formatDate(adm.applicationLastDate)}</strong>
                  </span>
                  <a
                    href={getPageUrl('admission-detail', adm.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('admission-detail', adm.slug);
                      }
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
                  >
                    View Admission Form →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. WHY CHOOSE RAJDAILYTOOLS & STUDENT HELP */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
              Why RajDailyTools
            </span>
            <h2 className="text-3xl font-black text-slate-900 font-display mt-3">
              Built to Help Aspirants Prepare Smarter
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From understanding official qualifications to planning your preparation timeline, here is why students across India rely on RajDailyTools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-base text-slate-900 font-display mb-1">Trusted Information</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Researched directly from official gazette notifications and reviewed for accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-base text-slate-900 font-display mb-1">Easy Language</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Eligibility rules and recruitment stages explained in simple, candidate-friendly language.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-3xl mb-3">🧮</div>
              <h3 className="font-bold text-base text-slate-900 font-display mb-1">Smart Calculators</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Interactive age calculators, negative marking score calculators, and rank predictors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-3xl mb-3">🔓</div>
              <h3 className="font-bold text-base text-slate-900 font-display mb-1">100% Free &amp; No Login</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Access every guide and calculator instantly without mandatory registrations or subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ABOUT FOUNDER & FOUNDATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-800 text-white rounded-3xl p-8 text-center shadow-lg shadow-blue-500/20">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl mx-auto mb-4 border-2 border-white/30">
                👨‍💻
              </div>
              <h3 className="text-2xl font-black font-display text-white">Raj Singh Sengar</h3>
              <p className="text-xs text-blue-200 mb-6">Founder, RajDailyTools</p>
              <div className="space-y-2 text-xs text-blue-100 font-semibold">
                <div className="p-2 bg-white/10 rounded-xl">🎓 BSc Physics Graduate</div>
                <div className="p-2 bg-white/10 rounded-xl">💻 COPA ITI Certified</div>
                <div className="p-2 bg-white/10 rounded-xl">🇮🇳 Serving Students Across India</div>
                <div className="p-2 bg-white/10 rounded-xl">📚 185+ Guides &amp; Growing</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                About RajDailyTools
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                Built by Someone Who Understands Your Journey
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                RajDailyTools was founded by Raj Bhai — a BSc Physics graduate and COPA ITI certified professional from India. We started with a clear purpose: eliminating confusing misinformation and providing Indian students with accurate, transparent recruitment guidelines, authentic notifications, and smart calculator tools.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every guide is cross-verified against official gazettes before publication and continuously audited for recruitment date adjustments and rule alterations.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Physics-trained accuracy</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No paywalls or login traps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
