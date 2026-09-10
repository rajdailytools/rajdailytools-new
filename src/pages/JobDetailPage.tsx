import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { getCountdown, formatDate } from '../utils/dateUtils';
import { getPageUrl } from '../utils/urlHelper';
import {
  Briefcase,
  Calendar,
  ExternalLink,
  Send,
  Download,
  AlertCircle,
  Wrench,
  CheckCircle2,
  Clock,
  Image,
  Activity,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface JobDetailPageProps {
  exam: ExamRecord;
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const JobDetailPage: React.FC<JobDetailPageProps> = ({ exam, onNavigate, depth = 1 }) => {
  const countdown = getCountdown(exam.applicationLastDate, 'deadline');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Latest Jobs', page: 'latest-jobs' },
          { label: exam.examName }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Connected Exam Lifecycle Journey Bar */}
      <LifecycleNavbar exam={exam} currentSection="job" onNavigate={onNavigate} depth={depth} />

      {/* Hero Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-slate-50 border border-slate-200 rounded-2xl shrink-0">
              {exam.logoIcon}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  {exam.category}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-0.5 rounded-full ${
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
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {exam.examName}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{exam.organization}</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed my-5">
          {exam.description}
        </p>

        {/* 5 Quick Information Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 mb-6">
          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Total Posts</div>
            <div className="text-base font-extrabold text-blue-700 mt-0.5 font-display">
              {exam.totalVacancy}
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Apply Start</div>
            <div className="text-sm font-bold text-slate-800 mt-0.5">
              {formatDate(exam.applicationStartDate)}
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Last Date</div>
            <div className="text-sm font-bold text-red-600 mt-0.5">
              {formatDate(exam.applicationLastDate)}
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Admit Card</div>
            <div className="text-sm font-bold text-purple-700 mt-0.5">
              {exam.admitCardDate ? formatDate(exam.admitCardDate) : 'Notify Soon'}
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs col-span-2 sm:col-span-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Exam Date</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              {formatDate(exam.examDate)}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {exam.applyLink && exam.status === 'APPLICATION_OPEN' ? (
            <a
              href={exam.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Apply Online Form</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <button
              disabled
              className="px-6 py-3 bg-slate-100 text-slate-400 font-bold text-xs sm:text-sm rounded-xl cursor-not-allowed"
            >
              Application Form Closed
            </button>
          )}

          {exam.officialNotification && (
            <a
              href={exam.officialNotification}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-200"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>Official Notification</span>
            </a>
          )}

          {exam.officialWebsite && (
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300"
            >
              <span>Official Website</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          )}

          <a
            href="https://t.me/Educator4ll"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span>Join Telegram</span>
          </a>
        </div>
      </div>

      {/* Share with Friends Bar */}
      <ShareButtons title={exam.examName} />

      {/* Main Content Layout (Left: 50 Accordions & FAQs, Right: Sticky Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Quick Notification Summary */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display pb-3 border-b border-slate-100">
              Key Recruitment Criteria Summary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 font-bold uppercase block text-[10px]">Educational Qualification</span>
                <span className="font-semibold text-slate-800 text-sm mt-0.5 block">{exam.education.join(', ')}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 font-bold uppercase block text-[10px]">Age Range</span>
                <span className="font-semibold text-slate-800 text-sm mt-0.5 block">{exam.ageMin} to {exam.ageMax} Years</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 font-bold uppercase block text-[10px]">Pay Scale / Salary</span>
                <span className="font-semibold text-slate-800 text-xs mt-0.5 block">{exam.salary.payScale}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 font-bold uppercase block text-[10px]">Estimated In-Hand Salary</span>
                <span className="font-semibold text-emerald-700 font-bold text-xs mt-0.5 block">{exam.salary.inHand}</span>
              </div>
            </div>
          </div>

          {/* DEDICATED EXAM TOOLS SECTION */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Exam Tools &amp; Utilities ({exam.examName})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Customized calculators, measurement verifiers, and practice tests configured for this post.
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 self-start sm:self-center">
                <Sparkles className="w-3 h-3" />
                <span>Separate Tool Routes</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Tool 1: Eligibility Calculator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Pre-Loaded Specs</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Eligibility Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Check if your degree ({exam.education.join(', ')}) and age meet the criteria for {exam.examName}.
                  </p>
                </div>
                <button
                  onClick={() => {
                    window.location.hash = `#/tools/eligibility-calculator?exam=${exam.slug}`;
                    onNavigate('tool-detail', `eligibility-calculator?exam=${exam.slug}`);
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-200 hover:border-blue-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Tool 2: Age Calculator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                      <Clock className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                      Cut-Off: {formatDate(exam.applicationLastDate || '2026-08-01')}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Age Cut-Off Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Calculate exact Years, Months &amp; Days on official cut-off date ({exam.ageMin}-{exam.ageMax} yrs).
                  </p>
                </div>
                <button
                  onClick={() => {
                    window.location.hash = `#/tools/age-calculator?exam=${exam.slug}`;
                    onNavigate('tool-detail', `age-calculator?exam=${exam.slug}`);
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white text-purple-700 border border-purple-200 hover:border-purple-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Calculate Official Age</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Tool 3: Photo & Signature Resizer */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                      <Image className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      20-50 KB &bull; 10-20 KB
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Photo &amp; Signature Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Crop and compress documents directly matching {exam.organization} upload specifications.
                  </p>
                </div>
                <button
                  onClick={() => {
                    window.location.hash = `#/tools/photo-resizer?exam=${exam.slug}`;
                    onNavigate('tool-detail', `photo-resizer?exam=${exam.slug}`);
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Resize Documents</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Tool 4: Physical Eligibility Checker */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <Activity className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      PST / PET Standards
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Physical Standards Checker</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Check height (170/157cm), chest expansion (80-85cm), and running endurance pass/fail.
                  </p>
                </div>
                <button
                  onClick={() => {
                    window.location.hash = `#/tools/physical-eligibility?exam=${exam.slug}`;
                    onNavigate('tool-detail', `physical-eligibility?exam=${exam.slug}`);
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-amber-600 hover:text-white text-amber-900 border border-amber-200 hover:border-amber-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Check Physical Fitness</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Tool 5: Online Mock Test */}
              <div className="sm:col-span-2 bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-indigo-300 hover:bg-indigo-50/20 transition-all">
                <div className="flex items-start gap-3">
                  <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">
                      {exam.examName} Online Mock Test
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Practice official pattern questions (Reasoning, GK, Math, English) with negative marking and instant scorecard.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    window.location.hash = `#/tools/mock-test?exam=${exam.slug}`;
                    onNavigate('tool-detail', `mock-test?exam=${exam.slug}`);
                  }}
                  className="py-2.5 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                >
                  <span>Start Mock Test</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 50-SECTION ACCORDIONS */}
          <Accordion
            sections={exam.allInformation}
            title="Complete 50-Section Exam Information & Guidelines"
            defaultOpenFirst={true}
          />

          {/* Frequently Asked Questions */}
          {exam.faq && exam.faq.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 font-display mb-4">
                Frequently Asked Questions ({exam.faq.length})
              </h3>
              <div className="space-y-3">
                {exam.faq.map((f, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-start gap-2">
                      <span className="text-blue-600 font-black">Q{idx + 1}.</span>
                      <span>{f.q}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
