import React, { useState } from 'react';
import { ActivePage, ExamRecord } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { formatDate } from '../utils/dateUtils';
import { getLatestAnswerKeys } from '../utils/centralQueries';
import { getPageUrl } from '../utils/urlHelper';
import {
  FileCheck,
  Search,
  Calculator,
  AlertCircle,
  Download,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  CheckCircle,
  MessageSquareWarning
} from 'lucide-react';

interface AnswerKeyPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AnswerKeyPage: React.FC<AnswerKeyPageProps> = ({ onNavigate, depth = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Central query 20 answer keys sorted by date
  const centralAnswerKeys = getLatestAnswerKeys(20);

  const isFiltering = searchQuery.trim() !== '' || filterCategory !== 'All';

  const displayedAnswerKeys = isFiltering
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
    : centralAnswerKeys;

  const resetFilters = () => {
    setSearchQuery('');
    setFilterCategory('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Answer Keys 2026' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Response Sheets &amp; Official Keys</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Latest Answer Keys 2026
          </h1>
          <p className="text-sm sm:text-base text-amber-100 leading-relaxed">
            Download official provisional answer keys, candidate response sheets, challenge question papers, and calculate your raw marks with our built-in negative marking score calculator.
          </p>
        </div>
      </div>

      {/* FEATURE INFO TILES */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 font-display">How to Calculate Score</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Raw Score = (Correct Answers × Marks per Correct) - (Wrong Answers × Penalty Marks).
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 font-display">Objection Process</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Submit proof per question during active objection window (usually ₹100 per challenged question).
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 font-display">Final Answer Key</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Scrutinized by subject matter experts before generating final merit lists and cut-offs.
            </p>
          </div>
        </div>
      </div>

      {/* SEARCH AND FILTER */}
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
              placeholder="Search answer key by name or org..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-amber-500 outline-none"
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
          LATEST 20 ANSWER KEYS SECTION
          ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-display">
              Latest 20 Answer Keys 2026
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Official provisional answer keys, candidate response sheets &amp; online objection tracking.
            </p>
          </div>

          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            {displayedAnswerKeys.length} Answer Keys
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedAnswerKeys.map((exam) => {
            const isReleased = exam.status === 'ANSWER_KEY_RELEASED' || Boolean(exam.answerKeyDate);
            const hasObjection = Boolean(exam.objectionLastDate);

            return (
              <div
                key={exam.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl p-2 bg-amber-50 rounded-xl">{exam.logoIcon}</span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        exam.status === 'ANSWER_KEY_RELEASED'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {exam.status === 'ANSWER_KEY_RELEASED' ? 'Answer Key Out' : 'Expected Soon'}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {exam.category} • {exam.organization}
                  </div>
                  <a
                    href={getPageUrl('answer-key-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate && !window.location.pathname.endsWith('.html')) {
                        e.preventDefault();
                        onNavigate('answer-key-detail', exam.slug);
                      }
                    }}
                    className="font-bold text-slate-900 text-base font-display line-clamp-1 hover:text-amber-600 cursor-pointer transition-colors block"
                  >
                    {exam.examName} Answer Key
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{exam.postName}</p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5 my-3.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Release Date:</span>
                      <strong className="text-slate-800">
                        {exam.answerKeyDate ? formatDate(exam.answerKeyDate) : 'Notify Soon'}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Objection Last Date:</span>
                      <strong className="text-red-600 font-bold">
                        {exam.objectionLastDate ? formatDate(exam.objectionLastDate) : '7 Days after Release'}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Exam Held:</span>
                      <span className="text-slate-700 font-medium">{formatDate(exam.examDate)}</span>
                    </div>
                  </div>
                </div>

                {/* Requested Action Buttons: Download Key / Response Sheet, Raise Objection, View Details */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={getPageUrl('answer-key-detail', exam.slug, depth)}
                      onClick={(e) => {
                        if (onNavigate && !window.location.pathname.endsWith('.html')) {
                          e.preventDefault();
                          onNavigate('answer-key-detail', exam.slug);
                        }
                      }}
                      className="py-2 px-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Key</span>
                    </a>

                    {hasObjection ? (
                      <a
                        href={exam.answerKeyLink || exam.officialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2.5 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer border border-red-200 flex items-center justify-center gap-1"
                      >
                        <MessageSquareWarning className="w-3.5 h-3.5" />
                        <span>Raise Objection</span>
                      </a>
                    ) : (
                      <a
                        href={getPageUrl('answer-key-detail', exam.slug, depth)}
                        onClick={(e) => {
                          if (onNavigate && !window.location.pathname.endsWith('.html')) {
                            e.preventDefault();
                            onNavigate('answer-key-detail', exam.slug);
                          }
                        }}
                        className="py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer block"
                      >
                        Score Tool
                      </a>
                    )}
                  </div>

                  <a
                    href={getPageUrl('job-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate && !window.location.pathname.endsWith('.html')) {
                        e.preventDefault();
                        onNavigate('job-detail', exam.slug);
                      }
                    }}
                    className="w-full py-1.5 px-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1 border border-slate-200 block"
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
