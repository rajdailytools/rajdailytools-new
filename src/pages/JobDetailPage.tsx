import React, { useState, useEffect } from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { ConcorToolsModal } from '../components/ConcorToolsModal';
import { UpesscToolsModal } from '../components/UpesscToolsModal';
import { HpscFsoToolsModal } from '../components/HpscFsoToolsModal';
import { NtpcToolsModal } from '../components/NtpcToolsModal';
import { UpesscAssistantProfessorToolsModal } from '../components/UpesscAssistantProfessorToolsModal';
import { LiveCountdownWidget } from '../components/LiveCountdownWidget';
import { RankingToolEngine } from '../components/RankingTools';
import { getCountdown, formatDate } from '../utils/dateUtils';
import { getLiveBadgeStatus, LiveBadgeResult } from '../utils/countdownEngine';
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
  Sparkles,
  Calculator,
  Percent,
  FileCheck,
  DollarSign,
  Award
} from 'lucide-react';

interface JobDetailPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const JobDetailPage: React.FC<JobDetailPageProps> = ({ exam, onNavigate, depth = 1 }) => {
  const [concorModalTool, setConcorModalTool] = useState<string | null>(null);
  const [upesscModalTool, setUpesscModalTool] = useState<string | null>(null);
  const [hpscFsoModalTool, setHpscFsoModalTool] = useState<string | null>(null);
  const [ntpcModalTool, setNtpcModalTool] = useState<string | null>(null);
  const [upesscApModalTool, setUpesscApModalTool] = useState<string | null>(null);
  const [badgeStatus, setBadgeStatus] = useState<LiveBadgeResult>(() =>
    getLiveBadgeStatus(exam.applicationLastDate, 'deadline')
  );

  useEffect(() => {
    setBadgeStatus(getLiveBadgeStatus(exam.applicationLastDate, 'deadline'));
    const timer = setInterval(() => {
      setBadgeStatus(getLiveBadgeStatus(exam.applicationLastDate, 'deadline'));
    }, 1000);

    const handleVisibility = () => {
      if (!document.hidden) {
        setBadgeStatus(getLiveBadgeStatus(exam.applicationLastDate, 'deadline'));
      }
    };
    window.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleVisibility);

    return () => {
      clearInterval(timer);
      window.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleVisibility);
    };
  }, [exam.applicationLastDate]);

  const countdown = getCountdown(exam.applicationLastDate, 'deadline');
  const isConcor = exam.id === 'concor-mt-ao-2026' || exam.slug?.includes('concor') || exam.shortName?.includes('CONCOR');
  const isUpesscPrt = exam.id === 'upessc-prt-assistant-teacher-2026' || exam.slug?.includes('upessc-prt') || exam.shortName?.includes('UPESSC PRT');
  const isUpesscAssistantProfessor = exam.id === 'upessc-assistant-professor-2026' || exam.slug?.includes('upessc-assistant-professor') || exam.shortName?.includes('UPESSC Assistant Professor');
  const isHpscFso = exam.id === 'hpsc-food-safety-officer-fso-2026' || exam.slug?.includes('hpsc-food-safety-officer') || exam.shortName?.includes('HPSC FSO');
  const isNtpcao = exam.id === 'ntpc-assistant-officer-2026' || exam.slug?.includes('ntpc-assistant-officer') || exam.shortName?.includes('NTPC AO');

  useEffect(() => {
    (window as any).__openUpesscApTool = (tool: string) => {
      setUpesscApModalTool(tool);
    };
    return () => {
      delete (window as any).__openUpesscApTool;
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Latest Jobs', page: 'latest-jobs' },
          ...(exam.category === 'Police'
            ? [
                { label: 'Police Recruitment', page: 'latest-jobs' as ActivePage },
                ...(exam.state === 'Madhya Pradesh' ? [{ label: 'MP State Jobs', page: 'latest-jobs' as ActivePage }] : [])
              ]
            : []),
          ...(exam.category === 'Teaching'
            ? [
                { label: 'Teaching Jobs', page: 'latest-jobs' as ActivePage },
                ...(exam.state === 'Uttar Pradesh' ? [{ label: 'Uttar Pradesh Jobs', page: 'latest-jobs' as ActivePage }] : []),
                ...(exam.organization?.includes('UPESSC') ? [{ label: 'UPESSC', page: 'latest-jobs' as ActivePage }] : [])
              ]
            : []),
          ...(exam.state === 'Haryana' || exam.organization?.includes('HPSC')
            ? [
                { label: 'Haryana Jobs', page: 'latest-jobs' as ActivePage },
                { label: 'HPSC', page: 'latest-jobs' as ActivePage }
              ]
            : []),
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
                {exam.category === 'Police' && (
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    Police Recruitment
                  </span>
                )}
                {exam.state === 'Madhya Pradesh' && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    MP State Jobs
                  </span>
                )}
                {exam.category === 'Teaching' && (
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                    Teaching Jobs
                  </span>
                )}
                {exam.state === 'Uttar Pradesh' && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    Uttar Pradesh Jobs
                  </span>
                )}
                {exam.organization?.includes('UPESSC') && (
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    UPESSC
                  </span>
                )}
                {exam.state === 'Haryana' && (
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                    Haryana Jobs
                  </span>
                )}
                {exam.organization?.includes('HPSC') && (
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    HPSC
                  </span>
                )}
                <span
                  data-countdown-badge="true"
                  data-target-date={exam.applicationLastDate}
                  data-badge-type="deadline"
                  className={`text-xs font-bold px-3 py-0.5 rounded-full transition-colors ${
                    badgeStatus.isClosed
                      ? 'bg-slate-100 text-slate-600'
                      : badgeStatus.isUrgent
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}
                >
                  {badgeStatus.text}
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

        {/* Live Countdowns for UPESSC Assistant Professor */}
        {isUpesscAssistantProfessor && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <LiveCountdownWidget
              targetDate="2026-10-07T23:59:59+05:30"
              title="Application Deadline"
              subtitle="07 October 2026 (23:59:59 IST)"
              badgeLabel="Fee &amp; Form Close"
              variant="red"
              passedText="Application Closed"
            />
            <LiveCountdownWidget
              targetDate="2026-10-11T23:59:59+05:30"
              title="Correction Deadline"
              subtitle="11 October 2026 (23:59:59 IST)"
              badgeLabel="Correction Window Closes"
              variant="purple"
              passedText="Correction Window Closed"
            />
            <LiveCountdownWidget
              targetDate="2026-11-19T00:00:00+05:30"
              title="Exam Starts On 19 November 2026"
              subtitle="19 November 2026 (Official Date Boundary IST)"
              badgeLabel="Written Exam Date"
              variant="emerald"
              passedText="Exam Started / Ongoing"
            />
          </div>
        )}

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

          {isUpesscAssistantProfessor && (
            <a
              href="https://www.upessc.up.gov.in/Home/Syllabus_all"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-indigo-200"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Syllabus &amp; Exam Pattern</span>
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
          {/* Interactive Ranking Tool Engine (if applicable) */}
          <RankingToolEngine exam={exam} />

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

            {isConcor ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* CONCOR Tool 1: Eligibility Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        12 Disciplines
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Eligibility Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Check MBA, CA, CS, MCA, BE/B.Tech, or Diploma marks requirements for MT &amp; AO posts.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConcorModalTool('eligibility')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-200 hover:border-blue-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* CONCOR Tool 2: Age Eligibility Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        Cut-Off: 31-08-2026
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Age Eligibility Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Calculate age as on 31 August 2026 (MT 18-28 yrs, AO 18-32 yrs, Max 50 yrs).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConcorModalTool('age')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white text-purple-700 border border-purple-200 hover:border-purple-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate Official Age</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* CONCOR Tool 3: Experience Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                        <Award className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        0 Yrs (MT) / 1-4 Yrs (AO)
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Experience Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Verify post-qualification experience requirements for MT freshers vs AO professionals.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConcorModalTool('experience')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Verify Experience</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* CONCOR Tool 4: Application Fee Calculator */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                        <DollarSign className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        ₹750 / ₹500 / NIL
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Application Fee Calculator</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Calculate exact category registration fees and check SC/ST/PwBD/ESM exemptions.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConcorModalTool('fee')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-amber-600 hover:text-white text-amber-900 border border-amber-200 hover:border-amber-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate Application Fee</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* CONCOR Tool 5: CBT Score Calculator */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 hover:bg-indigo-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                        <Calculator className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        100 Questions / 100 Marks
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">CBT Score Calculator</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Compute gross score, negative deductions, and percentage for 90-min online CBT paper.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConcorModalTool('cbt')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 border border-indigo-200 hover:border-indigo-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate CBT Score</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* CONCOR Tool 6: Negative Marking Calculator */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-rose-300 hover:bg-rose-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-rose-100 text-rose-700 rounded-lg">
                        <Percent className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        -0.25 Per Wrong
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Negative Marking Calculator</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Simulate negative marking penalties across 5-option multiple choice questions.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConcorModalTool('negative')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-rose-600 hover:text-white text-rose-700 border border-rose-200 hover:border-rose-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Simulate Penalties</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* CONCOR Tool 7: Document Checklist */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-300 hover:bg-cyan-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-cyan-100 text-cyan-700 rounded-lg">
                        <FileCheck className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                        DV Checklist
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Document Checklist</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Verify mandatory certificates (10th, Degree, OBC-NCL/EWS, Experience, NOC).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConcorModalTool('documents')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-cyan-600 hover:text-white text-cyan-700 border border-cyan-200 hover:border-cyan-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Open Checklist</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* CONCOR Tool 8: Online Mock Test */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 hover:bg-indigo-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        100 Qs / 90 Mins
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">CONCOR CBT Mock Test</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Practice official pattern 100-question CBT with Domain (50) and Aptitude (50).
                    </p>
                  </div>
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/mock-test.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/mock-test?exam=${exam.slug}`;
                        onNavigate('tool-detail', `mock-test?exam=${exam.slug}`);
                      }
                    }}
                    className="mt-3.5 w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Start Mock Test</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : isUpesscPrt ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* UPESSC Tool 1: Eligibility Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        D.El.Ed / BTC / TET Mandate
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Eligibility Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Verify Graduation + 2-Yr D.El.Ed./BTC &amp; UPTET/CTET Paper-I validity (B.Ed. not eligible).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscModalTool('eligibility')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-200 hover:border-blue-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 2: Age Eligibility Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        Cut-Off: 01-07-2026
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Age Eligibility Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Calculate exact age on 01.07.2026 (Urban 21-40 yrs, Attached up to 62 yrs, Relaxations).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscModalTool('age')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white text-purple-700 border border-purple-200 hover:border-purple-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate Official Age</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 3: Application Fee Calculator */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                        <DollarSign className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        ₹1,000 / ₹500 / ₹300
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Application Fee Calculator</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Compute official application fees based on category and Uttar Pradesh domicile status.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscModalTool('fee')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-amber-600 hover:text-white text-amber-900 border border-amber-200 hover:border-amber-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate Fee</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 4: OMR Score Calculator */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 hover:bg-indigo-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                        <Calculator className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        120 MCQs / 360 Marks
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">OMR Written Exam Score Calculator</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Simulate net marks (+3 for correct, -1 for incorrect) for the 2-hour offline OMR exam.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscModalTool('omr')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 border border-indigo-200 hover:border-indigo-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate OMR Score</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 5: Negative Marking Simulator */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-rose-300 hover:bg-rose-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-rose-100 text-rose-700 rounded-lg">
                        <Percent className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        -1 Mark Penalty
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Negative Marking Simulator</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Analyze the risk and score impact of blind guesses and multiple bubbling per question.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscModalTool('negative')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-rose-600 hover:text-white text-rose-700 border border-rose-200 hover:border-rose-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Simulate Penalties</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 6: Photo & Signature Resizer */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                        <Image className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        30-300 KB &bull; 10-200 KB
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Photo &amp; Signature Resizer</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Resize candidate photo (30-300 KB) and signature (10-200 KB) to exact UPESSC OTR standards.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscModalTool('resizer')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Resize Documents</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 7: Document Verification Checklist */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-300 hover:bg-cyan-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-cyan-100 text-cyan-700 rounded-lg">
                        <FileCheck className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                        Appendix-6 &bull; DV Dossier
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Document Verification Checklist</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Verify mandatory marksheets, D.El.Ed./BTC degree, UPTET/CTET certificate, and Appendix-6 affidavit.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscModalTool('documents')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-cyan-600 hover:text-white text-cyan-700 border border-cyan-200 hover:border-cyan-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Open Checklist</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 8: Online Mock Test */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 hover:bg-indigo-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        120 MCQs Pattern
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Online Mock Test</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Practice primary teacher pedagogy, child psychology, languages, math, and GK with timed scoring.
                    </p>
                  </div>
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/mock-test.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/mock-test?exam=${exam.slug}`;
                        onNavigate('tool-detail', `mock-test?exam=${exam.slug}`);
                      }
                    }}
                    className="mt-3.5 w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Start Mock Test</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : isNtpcao ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* NTPC Tool 1: Qualification Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        2-Tier Degree Norm
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Educational Qualification Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Verify Bachelor's (60%) + 2-year full-time PG Degree/Diploma in Mass Comm, Journalism, or PR (60%).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNtpcModalTool('eligibility')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-200 hover:border-blue-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check Qualifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* NTPC Tool 2: Age Eligibility Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        Cut-Off: 05-10-2026
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">NTPC Age Eligibility Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Calculate age as on 05.10.2026 (UR/EWS max 29 yrs, OBC 32 yrs, SC/ST 34 yrs, PwBD 39 yrs).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNtpcModalTool('age')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white text-purple-700 border border-purple-200 hover:border-purple-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate Official Age</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* NTPC Tool 3: Deadline Countdown */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Closes 05 Oct 2026
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Application Deadline Timer</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Live countdown to online registration and fee payment closure on NTPC Careers portal.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNtpcModalTool('countdown')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-amber-600 hover:text-white text-amber-700 border border-amber-200 hover:border-amber-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>View Deadline Timer</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* NTPC Tool 4: Marks & CGPA Calculator */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-sky-300 hover:bg-sky-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-sky-100 text-sky-700 rounded-lg">
                        <Percent className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                        Formula Upload
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Marks &amp; CGPA Calculator</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Calculate aggregate percentage for Graduation and PG, or convert CGPA using university multiplier.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNtpcModalTool('calculator')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-sky-600 hover:text-white text-sky-700 border border-sky-200 hover:border-sky-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate Percentage</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* NTPC Tool 5: Document Verification Checklist */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-300 hover:bg-cyan-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-cyan-100 text-cyan-700 rounded-lg">
                        <FileCheck className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                        Mandatory Uploads
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Document Checklist</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Verify mandatory Class 10, consolidated marksheets, conversion formula, and central caste certs.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNtpcModalTool('documents')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-cyan-600 hover:text-white text-cyan-700 border border-cyan-200 hover:border-cyan-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Audit Documents</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* NTPC Tool 6: Selection Roadmap & 85:15 Weightage */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 hover:bg-indigo-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                        <Award className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        85% CBT + 15% Interview
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Selection Process Roadmap</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Review multi-stage selection scheme: SKT &amp; EAT written CBT and personal interview evaluation.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNtpcModalTool('selection')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 border border-indigo-200 hover:border-indigo-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>View Selection Scheme</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* NTPC Tool 7: Salary & Pay Scale Explorer */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                        <DollarSign className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        E0 IDA Pattern
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Pay Scale &amp; Salary Structure</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Explore E0 grade pay scale (₹30,000–₹1,20,000), IDA rates, cafeteria perks, and medical benefits.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNtpcModalTool('salary')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Explore Pay Scale</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* NTPC Tool 8: Online Mock Test */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        CBT Practice
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Online Mock Test Portal</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Practice Mass Communication &amp; Executive Aptitude online CBT test modules on RajDailyTools.
                    </p>
                  </div>
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/mock-test.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/mock-test?exam=${exam.slug}`;
                        onNavigate('tool-detail', `mock-test?exam=${exam.slug}`);
                      }
                    }}
                    className="mt-3.5 w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Start Mock Practice</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : isHpscFso ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* HPSC Tool 1: Eligibility & Degree Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        Degree / Allied Sciences
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">FSO Qualification Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Verify Food Tech, Agri, Dairy, Biotech, Chemistry, or Medical degree + Hindi/Sanskrit language.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHpscFsoModalTool('checklist')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-200 hover:border-blue-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check Qualification</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* HPSC Tool 2: Age Eligibility Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        Cut-Off: 19-10-2026
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Age Eligibility Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Calculate exact age as on 19.10.2026 (18-42 yrs, SC/BC +5 yrs, Contractual/ESM, Max 52 yrs cap).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHpscFsoModalTool('age')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white text-purple-700 border border-purple-200 hover:border-purple-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate Official Age</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* HPSC Tool 3: Application Fee Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                        <DollarSign className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        ₹0 / ₹250 / ₹1000
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Application Fee Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Instant calculation of official application fee for PwBD (NIL), Reserved/Women (₹250), and UR Male (₹1000).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHpscFsoModalTool('fee')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check Fee Structure</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* HPSC Tool 4: Application Countdown */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Closes 19 Oct 05:00 PM
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Application Deadline Timer</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Live countdown to 19.10.2026 (05:00 PM) submission and signed application form upload window.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHpscFsoModalTool('countdown')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-amber-600 hover:text-white text-amber-700 border border-amber-200 hover:border-amber-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>View Live Countdown</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* HPSC Tool 5: Selection Process & Training Guide */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 hover:bg-indigo-50/20 transition-all sm:col-span-2">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                        <Award className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        Screening &bull; SKT &bull; Interview &bull; Training
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Selection &amp; Training Roadmap</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Step-by-step roadmap: Screening Test, Subject Knowledge Test, Interview Viva-Voce, and post-appointment Food Authority training.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHpscFsoModalTool('selection')}
                    className="mt-3.5 w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Explore Selection Roadmap</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ) : isUpesscAssistantProfessor ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* UPESSC Tool 1: Photo Resizer & Compressor */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                        <Image className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        30–300 KB &bull; 300–600 px
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Photo Resizer &amp; Compressor</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Format passport photo to 30–300 KB JPG with 300–600 px dimensions per Advt 04/2026.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscApModalTool('photo')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-200 hover:border-blue-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Resize Photo (30-300 KB)</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 2: Signature Resizer */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                        <Wrench className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        140 × 110 px &bull; 10–200 KB
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Signature Resizer &amp; Formatter</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Crop and format scanned signature to 140×110 px on pure white background.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscApModalTool('signature')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white text-purple-700 border border-purple-200 hover:border-purple-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Format Signature (140x110)</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 3: Age Eligibility Checker */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Cut-Off: 01-07-2026
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Age Eligibility Checker</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Check superannuation age limit (maximum 62 years as on 01.07.2026 under Section 2.7).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscApModalTool('age')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check Age Limit (Max 62)</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 4: OMR Written Score & Negative Penalty */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 hover:bg-indigo-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                        <Calculator className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        +3 / -1 &bull; 360 + 40 = 400
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">OMR Marks &amp; Penalty Calculator</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Calculate written score (120 Qs) with -1 negative deduction and interview composite out of 400.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscApModalTool('omr')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 border border-indigo-200 hover:border-indigo-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate OMR Score</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 5: Deadlines & Exam Countdown */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                        <Clock className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        07 Oct Fee &bull; 19 Nov Exam
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Deadlines &amp; Exam Countdown</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Live countdown to 07 October 2026 fee deadline and 19-20 November 2026 written exam.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscApModalTool('countdown')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-amber-600 hover:text-white text-amber-700 border border-amber-200 hover:border-amber-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>View Live Timers</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 6: 42 Subject Matrix Explorer */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-sky-300 hover:bg-sky-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-sky-100 text-sky-700 rounded-lg">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                        1,936 Posts across 42 Disciplines
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">42 Subject Matrix &amp; Allied Degrees</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Search eligible postgraduate courses and university equivalence rules across 42 subjects.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscApModalTool('subjects')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-sky-600 hover:text-white text-sky-700 border border-sky-200 hover:border-sky-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Explore 42 Subjects</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 7: 18 DV Checklist & PDF Guide */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-300 hover:bg-cyan-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-cyan-100 text-cyan-700 rounded-lg">
                        <FileCheck className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                        50–500 KB PDF Specs
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">18 DV Checklist &amp; PDF Guide</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Section 13.5 checklist for 18 certificates, affidavits, and UGC compliance letters.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpesscApModalTool('documents')}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-cyan-600 hover:text-white text-cyan-700 border border-cyan-200 hover:border-cyan-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check 18 Documents</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* UPESSC Tool 8: Online Mock Test */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                        <Sparkles className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        OMR Mock Engine
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">UPESSC Assistant Professor Mock Test</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Practice General Knowledge &amp; Subject Paper online CBT test modules on RajDailyTools.
                    </p>
                  </div>
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/mock-test.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/mock-test?exam=${exam.slug}`;
                        onNavigate('tool-detail', `mock-test?exam=${exam.slug}`);
                      }
                    }}
                    className="mt-3.5 w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Start Mock Practice</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
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
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/eligibility-calculator.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/eligibility-calculator?exam=${exam.slug}`;
                        onNavigate('tool-detail', `eligibility-calculator?exam=${exam.slug}`);
                      }
                    }}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-200 hover:border-blue-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
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
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/age-calculator.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/age-calculator?exam=${exam.slug}`;
                        onNavigate('tool-detail', `age-calculator?exam=${exam.slug}`);
                      }
                    }}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white text-purple-700 border border-purple-200 hover:border-purple-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Calculate Official Age</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
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
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/photo-resizer.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/photo-resizer?exam=${exam.slug}`;
                        onNavigate('tool-detail', `photo-resizer?exam=${exam.slug}`);
                      }
                    }}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Resize Documents</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
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
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/physical-eligibility.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/physical-eligibility?exam=${exam.slug}`;
                        onNavigate('tool-detail', `physical-eligibility?exam=${exam.slug}`);
                      }
                    }}
                    className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-amber-600 hover:text-white text-amber-900 border border-amber-200 hover:border-amber-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Check Physical Fitness</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
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
                  <a
                    href={`${depth === 1 ? '../' : './'}tools/mock-test.html?exam=${exam.slug}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        window.location.hash = `#/tools/mock-test?exam=${exam.slug}`;
                        onNavigate('tool-detail', `mock-test?exam=${exam.slug}`);
                      }
                    }}
                    className="py-2.5 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                  >
                    <span>Start Mock Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 50-SECTION ACCORDIONS */}
          <Accordion
            sections={exam.allInformation}
            title={
              isConcor
                ? "Complete 50-Section Recruitment Information & Guidelines"
                : isUpesscPrt
                ? "Complete 50-Section Recruitment Information & Guidelines (Advt 05/2026)"
                : "Complete 50-Section Exam Information & Guidelines"
            }
            defaultOpenFirst={true}
          />

          {/* CONCOR Tools Modal */}
          {isConcor && (
            <ConcorToolsModal
              tool={concorModalTool}
              onClose={() => setConcorModalTool(null)}
            />
          )}

          {/* UPESSC Tools Modal */}
          {isUpesscPrt && (
            <UpesscToolsModal
              tool={upesscModalTool}
              onClose={() => setUpesscModalTool(null)}
            />
          )}

          {/* HPSC FSO Tools Modal */}
          {isHpscFso && (
            <HpscFsoToolsModal
              tool={hpscFsoModalTool}
              onClose={() => setHpscFsoModalTool(null)}
            />
          )}

          {/* NTPC Tools Modal */}
          {isNtpcao && (
            <NtpcToolsModal
              tool={ntpcModalTool}
              onClose={() => setNtpcModalTool(null)}
            />
          )}

          {/* UPESSC Assistant Professor Tools Modal */}
          {isUpesscAssistantProfessor && (
            <UpesscAssistantProfessorToolsModal
              tool={upesscApModalTool}
              onClose={() => setUpesscApModalTool(null)}
            />
          )}

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
