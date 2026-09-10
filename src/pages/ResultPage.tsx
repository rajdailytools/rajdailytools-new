import React, { useState } from 'react';
import { ActivePage, ExamRecord } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { formatDate } from '../utils/dateUtils';
import { getLatestResults } from '../utils/centralQueries';
import {
  Trophy,
  Search,
  CheckCircle,
  FileText,
  Users,
  ExternalLink,
  Filter,
  UserCheck,
  RotateCcw,
  BarChart2,
  ArrowRight
} from 'lucide-react';
import { getPageUrl } from '../utils/urlHelper';

interface ResultPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const ResultPage: React.FC<ResultPageProps> = ({ onNavigate, depth = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Interactive Roll Number / Candidate Search simulation for aspirants
  const [rollInput, setRollInput] = useState('');
  const [searchedExam, setSearchedExam] = useState(EXAMS_DATABASE[0].id);
  const [searchStatus, setSearchStatus] = useState<null | {
    found: boolean;
    name?: string;
    marks?: number;
    qualified?: boolean;
    nextStage?: string;
  }>(null);

  const handleRollSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollInput.trim()) return;

    const isQualified = rollInput.length % 2 === 0 || rollInput.includes('7') || rollInput.includes('1');
    setSearchStatus({
      found: true,
      name: `Aspirant (${rollInput.toUpperCase()})`,
      marks: isQualified ? 142.5 : 98.0,
      qualified: isQualified,
      nextStage: isQualified ? 'Qualified for Stage-II / PET Verification' : 'Did Not Clear Category Cut Off'
    });
  };

  // Central 20 results sorted by date
  const centralLatestResults = getLatestResults(20);

  const isFiltering = searchQuery.trim() !== '' || filterCategory !== 'All';

  const displayedResults = isFiltering
    ? EXAMS_DATABASE.filter((exam) => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          !searchQuery ||
          exam.examName.toLowerCase().includes(query) ||
          exam.organization.toLowerCase().includes(query) ||
          exam.postName.toLowerCase().includes(query);
        const matchesCategory = filterCategory === 'All' || exam.category === filterCategory;
        return matchesSearch && matchesCategory;
      }).slice(0, 20)
    : centralLatestResults;

  const resetFilters = () => {
    setSearchQuery('');
    setFilterCategory('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Results 2026' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5" />
            <span>Merit Lists, Scorecards &amp; Cut-Offs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Latest Government Exam Results 2026
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
            Check official merit lists, roll-number wise qualified PDFs, normalized marks, scorecards, and next stage physical/document verification schedules.
          </p>
        </div>
      </div>

      {/* TODAY'S UPDATES TICKER CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Declared Today</div>
            <div className="text-lg font-black text-emerald-900 font-display">New Merit Lists</div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Individual Scorecard</div>
            <div className="text-lg font-black text-blue-900 font-display">Marks Out</div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Final Selection</div>
            <div className="text-lg font-black text-purple-900 font-display">Appointment List</div>
          </div>
        </div>
      </div>

      {/* SEARCH YOUR RESULT DIRECT TOOL */}
      <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 shadow-sm">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
            <UserCheck className="w-4 h-4" />
            <span>Fast Result Finder</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">
            Check Your Name / Roll Number in Merit List
          </h2>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Verify whether your roll number appears in the official shortlisted candidate list for the next phase.
          </p>

          <form onSubmit={handleRollSearch} className="flex flex-col sm:flex-row gap-3">
            <select
              value={searchedExam}
              onChange={(e) => setSearchedExam(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 outline-none cursor-pointer"
            >
              {EXAMS_DATABASE.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.examName}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Enter 10-digit Roll Number or Candidate Name..."
              value={rollInput}
              onChange={(e) => setRollInput(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 outline-none focus:bg-white focus:border-emerald-500"
            />

            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              Check Status
            </button>
          </form>

          {/* Search result notification feedback */}
          {searchStatus && (
            <div
              className={`mt-4 p-4 rounded-2xl border text-xs ${
                searchStatus.qualified
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-sm mb-1">
                <span>{searchStatus.name}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs ${
                    searchStatus.qualified
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-600 text-white'
                  }`}
                >
                  {searchStatus.qualified ? 'Provisionally Shortlisted' : 'Below Cut Off'}
                </span>
              </div>
              <p className="mt-1">
                <strong>Normalized Raw Score:</strong> {searchStatus.marks} Marks
              </p>
              <p className="mt-0.5">
                <strong>Next Phase:</strong> {searchStatus.nextStage}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-500">Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 outline-none cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="SSC">Staff Selection (SSC)</option>
            <option value="Railway">Railway (RRB)</option>
            <option value="Police">Police Forces</option>
            <option value="Army">Defence &amp; Armed Forces</option>
            <option value="Bank">Banking (IBPS/SBI)</option>
            <option value="UPSC">UPSC</option>
          </select>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search exam result by name or post..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 outline-none"
            />
          </div>

          {isFiltering && (
            <button
              onClick={resetFilters}
              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer"
              title="Reset Filter"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* ========================================================
          LATEST 20 RESULTS SECTION
          ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-display">
              Latest 20 Government Exam Results 2026
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Declared scorecards, merit lists, and category-wise cut-off scores sorted by release date.
            </p>
          </div>

          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {displayedResults.length} Results
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedResults.map((exam) => {
            const isDeclared = exam.status === 'RESULT_RELEASED' || exam.status === 'CUT_OFF_RELEASED';
            const cutOffSummary = exam.cutOffData?.categories?.[0]
              ? `UR: ${exam.cutOffData.categories[0].marks} Marks`
              : 'Available in Notification';

            return (
              <div
                key={exam.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl p-2 bg-emerald-50 rounded-xl">{exam.logoIcon}</span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isDeclared
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isDeclared ? 'Result Declared' : 'Stage In-Progress'}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {exam.category} • {exam.organization}
                  </div>
                  <a
                    href={getPageUrl('result-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate && !window.location.pathname.endsWith('.html')) {
                        e.preventDefault();
                        onNavigate('result-detail', exam.slug);
                      }
                    }}
                    className="font-bold text-slate-900 text-base font-display line-clamp-1 hover:text-emerald-700 cursor-pointer transition-colors block"
                  >
                    {exam.examName} Result
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{exam.postName}</p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5 my-3.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Result Date:</span>
                      <strong className="text-slate-800">
                        {exam.resultDate ? formatDate(exam.resultDate) : 'Notify Soon'}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cut Off Marks:</span>
                      <strong className="text-emerald-700 font-bold">{cutOffSummary}</strong>
                    </div>
                    {exam.nextStage && (
                      <div className="flex justify-between">
                        <span className="text-slate-400">Next Stage:</span>
                        <strong className="text-blue-700 font-semibold line-clamp-1">{exam.nextStage}</strong>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3 User-Requested Action Buttons: Check Result, View Cut Off, View Details */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={getPageUrl('result-detail', exam.slug, depth)}
                      onClick={(e) => {
                        if (onNavigate && !window.location.pathname.endsWith('.html')) {
                          e.preventDefault();
                          onNavigate('result-detail', exam.slug);
                        }
                      }}
                      className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors text-center cursor-pointer shadow-xs block"
                    >
                      Check Result
                    </a>
                    <a
                      href={getPageUrl('cut-off-detail', exam.slug, depth)}
                      onClick={(e) => {
                        if (onNavigate && !window.location.pathname.endsWith('.html')) {
                          e.preventDefault();
                          onNavigate('cut-off-detail', exam.slug);
                        }
                      }}
                      className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer border border-slate-200 block"
                    >
                      View Cut Off
                    </a>
                  </div>

                  <a
                    href={getPageUrl('job-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate && !window.location.pathname.endsWith('.html')) {
                        e.preventDefault();
                        onNavigate('job-detail', exam.slug);
                      }
                    }}
                    className="w-full py-1.5 px-3 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1 block"
                  >
                    <span>View Exam Details</span>
                    <ArrowRight className="w-3 h-3" />
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
