import React, { useState } from 'react';
import { ActivePage, ExamCategory, EducationLevel } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { getCountdown, formatDate } from '../utils/dateUtils';
import {
  getTodayActiveJobs,
  getLatestJobs,
  getDaysDifference
} from '../utils/centralQueries';
import { EligibilityFinder } from '../components/EligibilityFinder';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Search,
  Filter,
  ExternalLink,
  RotateCcw,
  Briefcase,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
  Layers
} from 'lucide-react';
import { getPageUrl } from '../utils/urlHelper';

interface LatestJobsPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const LatestJobsPage: React.FC<LatestJobsPageProps> = ({ onNavigate, depth = 0 }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterEducation, setFilterEducation] = useState<string>('All');
  const [filterState, setFilterState] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');

  // "Today's Jobs You Can Apply For" from central data (active applications only)
  const todayActiveJobs = getTodayActiveJobs();

  // Latest 20 Jobs list base from central data
  const centralLatestJobs = getLatestJobs(20);

  // Filter logic across the central database
  const isFiltering =
    searchKeyword.trim() !== '' ||
    filterCategory !== 'All' ||
    filterEducation !== 'All' ||
    filterState !== 'All' ||
    filterStatus !== 'All';

  const displayedJobs = isFiltering
    ? EXAMS_DATABASE.filter((job) => {
        const query = searchKeyword.toLowerCase();
        const matchesKeyword =
          !searchKeyword ||
          job.examName.toLowerCase().includes(query) ||
          job.organization.toLowerCase().includes(query) ||
          job.postName.toLowerCase().includes(query) ||
          job.category.toLowerCase().includes(query) ||
          (job.state && job.state.toLowerCase().includes(query)) ||
          job.education.some((e) => e.toLowerCase().includes(query));

        const matchesCategory = filterCategory === 'All' || job.category === filterCategory;

        const matchesEducation =
          filterEducation === 'All' || job.education.includes(filterEducation as EducationLevel);

        const matchesState = filterState === 'All' || job.state === filterState;

        const matchesStatus =
          filterStatus === 'All' ||
          (filterStatus === 'OPEN' && job.status === 'APPLICATION_OPEN') ||
          (filterStatus === 'CLOSED' && job.status !== 'APPLICATION_OPEN');

        return matchesKeyword && matchesCategory && matchesEducation && matchesState && matchesStatus;
      })
    : centralLatestJobs;

  const resetFilters = () => {
    setSearchKeyword('');
    setFilterCategory('All');
    setFilterEducation('All');
    setFilterState('All');
    setFilterStatus('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Latest Jobs 2026' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Official Government Recruitment Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Latest Government Jobs 2026
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
            Discover all active government job notifications, vacancy counts, educational criteria, age limits, syllabus patterns, and official application portals.
          </p>
        </div>
      </div>

      {/* ========================================================
          1. "TODAY'S JOBS YOU CAN APPLY FOR" (ACTIVE APPLICATIONS)
          ======================================================== */}
      <section className="bg-gradient-to-br from-amber-500/10 via-white to-blue-500/5 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-amber-200/60">
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-800 uppercase tracking-wider bg-amber-100/90 px-2.5 py-0.5 rounded-full mb-1.5 border border-amber-300">
              <Clock className="w-3 h-3 text-amber-700 animate-pulse" /> Live Applications Open Today
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              Today's Jobs You Can Apply For ({todayActiveJobs.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Recruitments where the application window is currently active and the deadline has not expired.
            </p>
          </div>

          <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
            Updated Real-time
          </span>
        </div>

        {todayActiveJobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500">
            <p className="text-sm font-semibold">No active applications today.</p>
            <p className="text-xs text-slate-400 mt-1">Check back tomorrow or view upcoming announcements below.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todayActiveJobs.map((job) => {
              const daysLeft = getDaysDifference(job.applicationLastDate) ?? 0;
              const isUrgent = daysLeft <= 5;

              return (
                <div
                  key={job.id}
                  className="bg-white border border-amber-200/90 hover:border-amber-400 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header badges */}
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <span className="text-2xl p-2 bg-amber-50/70 border border-amber-100 rounded-xl">
                        {job.logoIcon}
                      </span>
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border ${
                            isUrgent
                              ? 'bg-red-50 text-red-700 border-red-300 animate-pulse'
                              : 'bg-amber-100 text-amber-900 border-amber-300'
                          }`}
                        >
                          ⏳ {daysLeft === 0 ? 'Last Day Today!' : daysLeft === 1 ? '1 Day Left!' : `${daysLeft} Days Left`}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {job.totalVacancy}
                        </span>
                      </div>
                    </div>

                    {/* Job Titles */}
                    <h3
                      onClick={() => onNavigate('job-detail', job.slug)}
                      className="font-bold text-slate-900 text-sm sm:text-base font-display hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {job.examName}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{job.postName}</p>

                    {/* Crucial Info */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50/90 p-2.5 rounded-xl border border-slate-100 my-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Last Date</span>
                        <strong className="text-red-600 font-bold text-xs">{formatDate(job.applicationLastDate)}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Qualification</span>
                        <strong className="text-slate-800 text-xs line-clamp-1">{job.education.join(', ')}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={getPageUrl('job-detail', job.slug, depth)}
                      onClick={(e) => {
                        if (onNavigate && !window.location.pathname.endsWith('.html')) {
                          e.preventDefault();
                          onNavigate('job-detail', job.slug);
                        }
                      }}
                      className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all text-center cursor-pointer border border-slate-200 block"
                    >
                      View Details
                    </a>

                    {job.applyLink && (
                      <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer shrink-0"
                      >
                        <span>Apply Now</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ========================================================
          2. ELIGIBILITY FINDER WIDGET
          ======================================================== */}
      <EligibilityFinder onNavigate={onNavigate} depth={depth} />

      {/* ========================================================
          3. SEARCH & ADVANCED FILTERS BAR
          ======================================================== */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search box */}
          <div className="flex-1 w-full relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by exam name, organization, post, qualification, or state (e.g. SSC, CGL, Railway, Police)..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          {/* Reset button */}
          {isFiltering && (
            <button
              onClick={resetFilters}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Multi-criteria Filter Dropdowns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Category / Org
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:bg-white focus:border-blue-500 outline-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="SSC">Staff Selection (SSC)</option>
              <option value="Railway">Railway (RRB)</option>
              <option value="Police">State Police Forces</option>
              <option value="Army">Indian Armed Forces</option>
              <option value="Bank">Banking (IBPS/SBI)</option>
              <option value="UPSC">UPSC Civil / Defence</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Qualification
            </label>
            <select
              value={filterEducation}
              onChange={(e) => setFilterEducation(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:bg-white focus:border-blue-500 outline-none cursor-pointer"
            >
              <option value="All">All Qualifications</option>
              <option value="10th">10th (Matric)</option>
              <option value="12th">12th (Intermediate)</option>
              <option value="Graduation">Graduation / Degree</option>
              <option value="ITI">ITI Trade Certificate</option>
              <option value="Diploma">Polytechnic Diploma</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              State / Zone
            </label>
            <select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:bg-white focus:border-blue-500 outline-none cursor-pointer"
            >
              <option value="All">All States / Zones</option>
              <option value="All India">All India / Central</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Bihar">Bihar</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Delhi">Delhi / NCR</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Application Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:bg-white focus:border-blue-500 outline-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="OPEN">Application Open (Active)</option>
              <option value="CLOSED">Application Closed / Upcoming</option>
            </select>
          </div>
        </div>
      </div>

      {/* ========================================================
          4. DEFAULT LATEST 20 JOBS LIST
          ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-display">
              {isFiltering ? `Search & Filtered Results (${displayedJobs.length})` : `Latest 20 Government Jobs 2026`}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {isFiltering
                ? 'Filtered from central database according to your selected criteria.'
                : 'Top 20 latest recruitment advertisements automatically updated from central data.'}
            </p>
          </div>

          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            {displayedJobs.length} Jobs
          </span>
        </div>

        {displayedJobs.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-base font-bold text-slate-800 font-display">No matching recruitments found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try modifying your search keywords or resetting qualification and state filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-5 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedJobs.map((job) => {
              const countdown = getCountdown(job.applicationLastDate, 'deadline');
              const daysRemaining = getDaysDifference(job.applicationLastDate);
              const isApplicationOpen = job.status === 'APPLICATION_OPEN';

              return (
                <div
                  key={job.id}
                  className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top info badge */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-2xl p-2 bg-slate-50 rounded-2xl border border-slate-100">
                        {job.logoIcon}
                      </span>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[11px] font-extrabold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                          {job.totalVacancy}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
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
                    </div>

                    {/* Department Tag */}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {job.category}
                      </span>
                      {job.state && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="text-[11px] text-slate-500 flex items-center gap-0.5">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {job.state}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Job Title */}
                    <a
                      href={getPageUrl('job-detail', job.slug, depth)}
                      onClick={(e) => {
                        if (onNavigate && !window.location.pathname.endsWith('.html')) {
                          e.preventDefault();
                          onNavigate('job-detail', job.slug);
                        }
                      }}
                      className="font-bold text-slate-900 text-base font-display hover:text-blue-600 cursor-pointer transition-colors line-clamp-2 block"
                    >
                      {job.examName}
                    </a>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{job.postName}</p>

                    {/* Timeline Data Card */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100 my-4">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Apply Starts</span>
                        <span className="font-semibold text-slate-800 text-[11px]">{formatDate(job.applicationStartDate)}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Last Date</span>
                        <span className="font-bold text-red-600 text-[11px]">{formatDate(job.applicationLastDate)}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Qualification</span>
                        <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">{job.education.join(', ')}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Countdown</span>
                        <span className="font-bold text-blue-700 text-[11px]">
                          {daysRemaining !== null && daysRemaining >= 0 ? `${daysRemaining} days left` : 'Expired'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <a
                      href={getPageUrl('job-detail', job.slug, depth)}
                      onClick={(e) => {
                        if (onNavigate && !window.location.pathname.endsWith('.html')) {
                          e.preventDefault();
                          onNavigate('job-detail', job.slug);
                        }
                      }}
                      className="flex-1 py-2.5 px-3 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer border border-blue-200 text-center"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    {job.applyLink && isApplicationOpen && (
                      <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer border border-slate-200"
                        title="Direct Official Application Portal"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
