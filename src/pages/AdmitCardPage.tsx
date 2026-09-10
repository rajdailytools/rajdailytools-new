import React, { useState } from 'react';
import { ActivePage, ExamRecord } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { formatDate } from '../utils/dateUtils';
import {
  getLatestAdmitCards,
  getLatestCityIntimations,
  getExamCountdownStatus,
  getDaysDifference
} from '../utils/centralQueries';
import {
  IdCard,
  Search,
  MapPin,
  Clock,
  Download,
  CheckCircle,
  ArrowRight,
  RotateCcw,
  ExternalLink,
  Calendar,
  Layers,
  AlertCircle
} from 'lucide-react';
import { getPageUrl } from '../utils/urlHelper';

interface AdmitCardPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AdmitCardPage: React.FC<AdmitCardPageProps> = ({ onNavigate, depth = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  // Central query 20 items
  const centralAdmitCards = getLatestAdmitCards(20);
  const centralCityIntimations = getLatestCityIntimations(20);

  const isFiltering = searchQuery.trim() !== '' || filterCategory !== 'All' || filterStatus !== 'All';

  // Filter admit cards
  const displayedAdmitCards = isFiltering
    ? EXAMS_DATABASE.filter((exam) => {
        const query = searchQuery.toLowerCase();
        const matchesQuery =
          !searchQuery ||
          exam.examName.toLowerCase().includes(query) ||
          exam.organization.toLowerCase().includes(query) ||
          exam.postName.toLowerCase().includes(query) ||
          exam.category.toLowerCase().includes(query);

        const matchesCategory = filterCategory === 'All' || exam.category === filterCategory;

        const matchesStatus =
          filterStatus === 'All' ||
          (filterStatus === 'RELEASED' && (exam.status === 'ADMIT_CARD_RELEASED' || (exam.admitCardDate && (getDaysDifference(exam.admitCardDate) ?? 1) <= 0))) ||
          (filterStatus === 'SOON' && exam.status !== 'ADMIT_CARD_RELEASED');

        return matchesQuery && matchesCategory && matchesStatus;
      }).slice(0, 20)
    : centralAdmitCards;

  // Filter city intimations independently
  const displayedCityIntimations = isFiltering
    ? EXAMS_DATABASE.filter((exam) => {
        const query = searchQuery.toLowerCase();
        const matchesQuery =
          !searchQuery ||
          exam.examName.toLowerCase().includes(query) ||
          exam.organization.toLowerCase().includes(query) ||
          exam.category.toLowerCase().includes(query);

        const matchesCategory = filterCategory === 'All' || exam.category === filterCategory;
        return matchesQuery && matchesCategory;
      }).slice(0, 20)
    : centralCityIntimations;

  const resetFilters = () => {
    setSearchQuery('');
    setFilterCategory('All');
    setFilterStatus('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Admit Cards 2026' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <IdCard className="w-3.5 h-3.5" />
            <span>Official Hall Tickets &amp; City Intimation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Latest Admit Cards 2026
          </h1>
          <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
            Download your hall tickets, check exam dates, shift timings, venue details, and view regional exam city intimation slips across all government recruitments.
          </p>
        </div>
      </div>

      {/* TODAY'S UPDATES TICKER TILES */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-purple-50/80 border border-purple-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Admit Cards Out</div>
            <div className="text-lg font-black text-purple-900 font-display">Released</div>
          </div>
        </div>

        <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Exam City Out</div>
            <div className="text-lg font-black text-blue-900 font-display">Active Slips</div>
          </div>
        </div>

        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Countdown</div>
            <div className="text-lg font-black text-amber-900 font-display">Live Tracking</div>
          </div>
        </div>

        <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <IdCard className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Central Database</div>
            <div className="text-lg font-black text-emerald-900 font-display">20+ Records</div>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTER BAR */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by exam name, organization, post, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-purple-500 outline-none"
            />
          </div>

          {isFiltering && (
            <button
              onClick={resetFilters}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Category & Status Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Filter by Organization
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="All">All Organizations / Categories</option>
              <option value="SSC">Staff Selection Commission (SSC)</option>
              <option value="Railway">Railway Recruitment Boards (RRB)</option>
              <option value="Police">State Police Forces</option>
              <option value="Army">Indian Armed Forces / Defence</option>
              <option value="Bank">Banking (IBPS &amp; SBI)</option>
              <option value="UPSC">UPSC Civil &amp; Defence</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Release Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="RELEASED">Admit Card Released</option>
              <option value="SOON">Coming Soon / Expected Shortly</option>
            </select>
          </div>
        </div>
      </div>

      {/* ========================================================
          SECTION 1: LATEST 20 ADMIT CARDS
          ======================================================== */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-display flex items-center gap-2">
              <IdCard className="w-5 h-5 text-purple-600" />
              <span>Latest 20 Admit Cards 2026</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Official hall tickets, exam roll numbers, and venue confirmation letters.
            </p>
          </div>

          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 self-start sm:self-auto">
            Showing {displayedAdmitCards.length} Cards
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedAdmitCards.map((exam) => {
            const countdown = getExamCountdownStatus(exam.examDate);
            const isReleased =
              exam.status === 'ADMIT_CARD_RELEASED' ||
              Boolean(exam.admitCardDate && (getDaysDifference(exam.admitCardDate) ?? 1) <= 0);

            return (
              <div
                key={exam.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header & Status */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-2xl p-2 bg-purple-50/80 rounded-xl border border-purple-100 shrink-0">
                      {exam.logoIcon}
                    </span>

                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          isReleased
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-purple-50 text-purple-700 border border-purple-200'
                        }`}
                      >
                        {isReleased ? 'Released' : 'Expected Soon'}
                      </span>

                      {/* Days remaining countdown (Today, Tomorrow, X Days Left, Exam Completed) - Never negative */}
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          countdown.isToday
                            ? 'bg-red-500 text-white animate-pulse'
                            : countdown.isTomorrow
                            ? 'bg-amber-500 text-white'
                            : countdown.isCompleted
                            ? 'bg-slate-100 text-slate-500'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        ⏱️ {countdown.text}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {exam.category} • {exam.organization.split('(')[0]}
                  </div>
                  <a
                    href={getPageUrl('admit-card-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate && !window.location.pathname.endsWith('.html')) {
                        e.preventDefault();
                        onNavigate('admit-card-detail', exam.slug);
                      }
                    }}
                    className="font-bold text-slate-900 text-base font-display hover:text-purple-600 transition-colors cursor-pointer line-clamp-2 block"
                  >
                    {exam.examName}
                  </a>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{exam.postName}</p>

                  {/* Date Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 my-3.5">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Admit Card Date</span>
                      <strong className="text-purple-900 text-[11px]">
                        {exam.admitCardDate ? formatDate(exam.admitCardDate) : 'Notify Soon'}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Exam Date</span>
                      <strong className="text-slate-900 text-[11px]">{formatDate(exam.examDate)}</strong>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <a
                    href={getPageUrl('admit-card-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate && !window.location.pathname.endsWith('.html')) {
                        e.preventDefault();
                        onNavigate('admit-card-detail', exam.slug);
                      }
                    }}
                    className="flex-1 py-2 px-3 bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-800 font-bold text-xs rounded-xl transition-all text-center cursor-pointer border border-slate-200 block"
                  >
                    View Details
                  </a>

                  {isReleased && (exam.admitCardLink || exam.officialNotification) ? (
                    <a
                      href={exam.admitCardLink || exam.officialNotification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="py-2 px-3 bg-slate-100 text-slate-400 font-bold text-xs rounded-xl cursor-not-allowed shrink-0"
                    >
                      Notify Soon
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          SECTION 2: "LATEST EXAM CITY INTIMATION" (SEPARATE 20 ITEMS)
          ======================================================== */}
      <section className="bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 border-2 border-blue-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-blue-200/70">
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-extrabold text-blue-700 uppercase tracking-wider bg-blue-100 px-2.5 py-0.5 rounded-full mb-1 border border-blue-300">
              <MapPin className="w-3 h-3 text-blue-600" /> Independent Advanced Slips
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              Latest Exam City Intimation ({displayedCityIntimations.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Check assigned examination district, city center, and reporting shifts before the final admit card is published.
            </p>
          </div>

          <span className="text-xs font-bold text-blue-700 bg-white px-3 py-1 rounded-xl border border-blue-200 self-start sm:self-auto">
            Updated Daily
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedCityIntimations.map((item) => {
            const cityReleaseDate = item.cityIntimationDate || item.admitCardDate || item.examDate;
            const hasCityLink = Boolean(item.examCityLink || item.admitCardLink || item.officialWebsite);

            return (
              <div
                key={`city-${item.id}`}
                className="bg-white border border-blue-100 hover:border-blue-300 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xl p-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      {item.logoIcon}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      City Intimation
                    </span>
                  </div>

                  <a
                    href={getPageUrl('admit-card-detail', item.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate && !window.location.pathname.endsWith('.html')) {
                        e.preventDefault();
                        onNavigate('admit-card-detail', item.slug);
                      }
                    }}
                    className="font-bold text-slate-900 text-sm font-display hover:text-blue-600 cursor-pointer line-clamp-2 block"
                  >
                    {item.examName}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{item.organization}</p>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 my-3 text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Slip Release:</span>
                      <strong className="text-blue-800">{formatDate(cityReleaseDate)}</strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Exam Date:</span>
                      <strong className="text-slate-800">{formatDate(item.examDate)}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <a
                    href={getPageUrl('admit-card-detail', item.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate && !window.location.pathname.endsWith('.html')) {
                        e.preventDefault();
                        onNavigate('admit-card-detail', item.slug);
                      }
                    }}
                    className="flex-1 py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer block"
                  >
                    Details
                  </a>

                  <a
                    href={item.examCityLink || item.admitCardLink || item.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer shrink-0"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>Check City</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
