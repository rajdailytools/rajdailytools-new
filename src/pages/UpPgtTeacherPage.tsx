import React, { useState, useMemo } from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate, getCountdown } from '../utils/dateUtils';
import {
  UP_PGT_SUBJECT_VACANCIES,
  UP_PGT_TOTALS,
  generateUpPgtTeacher50Sections,
  UP_PGT_TEACHER_2026_EXAM
} from '../data/upPgtTeacherData';
import {
  GraduationCap,
  ExternalLink,
  Calendar,
  Layers,
  FileText,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Download,
  Users,
  Award,
  DollarSign,
  Search,
  CheckSquare,
  AlertTriangle,
  FileCheck,
  Info,
  Calculator,
  UserCheck,
  Scale,
  Share2,
  Copy,
  Printer,
  Check,
  Percent,
  CheckCircle,
  Briefcase,
  SlidersHorizontal,
  ChevronRight,
  School
} from 'lucide-react';

interface UpPgtTeacherPageProps {
  exam?: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

type ExamStage = 'latest-job' | 'admit-card' | 'answer-key' | 'result' | 'cut-off' | 'mock-test';

export const UpPgtTeacherPage: React.FC<UpPgtTeacherPageProps> = ({
  exam = UP_PGT_TEACHER_2026_EXAM,
  onNavigate,
  depth = 0
}) => {
  // Top 6 Exam Navigation Tabs
  const [activeStage, setActiveStage] = useState<ExamStage>('latest-job');

  // Vacancy Table Filters
  const [cadreFilter, setCadreFilter] = useState<'all' | 'boys' | 'girls'>('all');
  const [subjectSearch, setSubjectSearch] = useState('');

  // Selected Subject for Qualification Modal/Detail
  const [selectedSubjectId, setSelectedSubjectId] = useState<number>(1);

  // Score Calculator State (120 Questions, +3 / -1)
  const [calcCorrect, setCalcCorrect] = useState<number>(85);
  const [calcWrong, setCalcWrong] = useState<number>(15);
  const [calcInterview, setCalcInterview] = useState<number>(30);

  // Copy Link State
  const [copiedLink, setCopiedLink] = useState(false);

  // Filtered Vacancies
  const filteredSubjects = useMemo(() => {
    return UP_PGT_SUBJECT_VACANCIES.filter((s) => {
      const matchesSearch =
        s.subjectHindi.toLowerCase().includes(subjectSearch.toLowerCase()) ||
        s.subjectEnglish.toLowerCase().includes(subjectSearch.toLowerCase()) ||
        s.sn.toString() === subjectSearch.trim();

      if (!matchesSearch) return false;
      if (cadreFilter === 'boys') return s.boys.total > 0;
      if (cadreFilter === 'girls') return s.girls.total > 0;
      return true;
    });
  }, [subjectSearch, cadreFilter]);

  // Score Calculation Result
  const scoreResults = useMemo(() => {
    const totalAttempted = Math.min(120, Math.max(0, calcCorrect) + Math.max(0, calcWrong));
    const unattempted = Math.max(0, 120 - totalAttempted);
    const grossMarks = Math.max(0, calcCorrect) * 3;
    const negativePenalty = Math.max(0, calcWrong) * 1;
    const writtenScore = Math.max(0, grossMarks - negativePenalty);
    const interviewMarks = Math.min(40, Math.max(0, calcInterview));
    const totalSelectionMarks = writtenScore + interviewMarks;
    const writtenPercent = ((writtenScore / 360) * 100).toFixed(2);
    const totalPercent = ((totalSelectionMarks / 400) * 100).toFixed(2);

    return {
      unattempted,
      grossMarks,
      negativePenalty,
      writtenScore,
      interviewMarks,
      totalSelectionMarks,
      writtenPercent,
      totalPercent
    };
  }, [calcCorrect, calcWrong, calcInterview]);

  const sections = useMemo(() => generateUpPgtTeacher50Sections(), []);
  const countdown = getCountdown(exam.applicationLastDate, 'deadline');

  const officialPortalUrl = 'https://upessc.up.gov.in/';
  const officialSyllabusUrl = 'https://www.upessc.up.gov.in/Home/Syllabus_all';

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const selectedSubjectData = useMemo(() => {
    return UP_PGT_SUBJECT_VACANCIES.find((s) => s.sn === selectedSubjectId) || UP_PGT_SUBJECT_VACANCIES[0];
  }, [selectedSubjectId]);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 space-y-6">
      {/* 1. BREADCRUMB NAVIGATION */}
      <Breadcrumb
        items={[
          { label: 'Latest Jobs', page: 'latest-jobs' },
          { label: 'Teaching Jobs' },
          { label: 'UP State Jobs' },
          { label: 'UPESSC' },
          { label: 'UP PGT Teacher Recruitment 2026' }
        ]}
        onNavigate={onNavigate}
      />

      {/* 2. MASTER TEMPLATE TOP EXAM NAVIGATION CARDS / TABS (6 TABS) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2.5 sm:p-3 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-thin scrollbar-thumb-slate-300">
          {/* TAB 1: LATEST JOB */}
          <button
            onClick={() => setActiveStage('latest-job')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 ${
              activeStage === 'latest-job'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>LATEST JOB</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] uppercase font-black bg-emerald-500 text-white leading-none">
              Apply Open
            </span>
          </button>

          {/* TAB 2: ADMIT CARD */}
          <button
            onClick={() => setActiveStage('admit-card')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 ${
              activeStage === 'admit-card'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>ADMIT CARD</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] uppercase font-bold bg-amber-200 text-amber-900 leading-none">
              Coming Soon
            </span>
          </button>

          {/* TAB 3: ANSWER KEY */}
          <button
            onClick={() => setActiveStage('answer-key')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 ${
              activeStage === 'answer-key'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>ANSWER KEY</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] uppercase font-bold bg-slate-200 text-slate-700 leading-none">
              Notify Soon
            </span>
          </button>

          {/* TAB 4: RESULT */}
          <button
            onClick={() => setActiveStage('result')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 ${
              activeStage === 'result'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>RESULT</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] uppercase font-bold bg-slate-200 text-slate-700 leading-none">
              Notify Soon
            </span>
          </button>

          {/* TAB 5: CUT OFF */}
          <button
            onClick={() => setActiveStage('cut-off')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 ${
              activeStage === 'cut-off'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
            }`}
          >
            <Percent className="w-4 h-4" />
            <span>CUT OFF</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] uppercase font-bold bg-slate-200 text-slate-700 leading-none">
              Notify Soon
            </span>
          </button>

          {/* TAB 6: MOCK TEST */}
          <button
            onClick={() => setActiveStage('mock-test')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 ${
              activeStage === 'mock-test'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>MOCK TEST</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] uppercase font-black bg-blue-100 text-blue-800 leading-none">
              Practice Now
            </span>
          </button>
        </div>

        {/* STAGE CONTEXT NOTIFIER WHEN SWITCHED */}
        {activeStage !== 'latest-job' && (
          <div className="mt-3 p-3 bg-amber-50/80 border border-amber-200 rounded-xl flex items-center justify-between text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                You are viewing the <strong>{activeStage.replace('-', ' ').toUpperCase()}</strong> status view for UP PGT 2026.
                Future milestones will be dynamically activated upon official commission release.
              </span>
            </div>
            <button
              onClick={() => setActiveStage('latest-job')}
              className="text-xs font-bold text-blue-700 hover:underline shrink-0 ml-2"
            >
              Return to Full Job Details &rarr;
            </button>
          </div>
        )}
      </div>

      {/* DEDICATED STAGE VIEWS */}
      {activeStage === 'admit-card' && (
        <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">UP PGT Admit Card 2026 – Status & Protocol</h2>
              <p className="text-xs text-slate-600">Official Exam Date: 15 & 16 December 2026 (15 व 16 दिसम्बर, 2026)</p>
            </div>
            <span className="ml-auto px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full border border-amber-300">
              Not Released / To Be Updated
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Admit Card Timeline (Section 8 & 10.2)</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>District Allotment Slip:</strong> 10 days before the exam (~05 December 2026) on the portal.</li>
                <li><strong>Admit Card Download:</strong> 03 days before the exam (~12 December 2026) on www.upessc.up.gov.in.</li>
                <li><strong>Login Credentials:</strong> Registration Number / Mobile Number and Date of Birth.</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Exam Day Mandatory Documents</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>Printed copy of UPESSC PGT Admit Card 2026.</li>
                <li>Original Government Photo ID (Aadhaar, Voter ID, Driving License, Passport).</li>
                <li>Two passport-size color photographs matching the application form.</li>
                <li><strong>Black Ballpoint Pen</strong> for OMR darkening (Section 10.5).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeStage === 'answer-key' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2.5 bg-blue-100 text-blue-800 rounded-xl">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">UP PGT Answer Key 2026 – Objections & Response Protocol</h2>
              <p className="text-xs text-slate-600">Expected post-examination in December 2026</p>
            </div>
            <span className="ml-auto px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full border border-slate-300">
              Notify Soon
            </span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
            <p>Following the 15–16 December 2026 written exam, UPESSC will publish provisional answer keys across Sets A, B, C, D on <strong>upessc.up.gov.in</strong>.</p>
            <p>Candidates will receive an online window to file objections supported by authentic reference book citations. Final answer keys prepared by subject committees will govern the final OMR evaluation.</p>
          </div>
        </div>
      )}

      {activeStage === 'result' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2.5 bg-purple-100 text-purple-800 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">UP PGT Result 2026 & Interview Shortlist</h2>
              <p className="text-xs text-slate-600">Written Exam (360 Marks) + Interview (40 Marks) = 400 Marks Total</p>
            </div>
            <span className="ml-auto px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full border border-slate-300">
              Notify Soon
            </span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
            <p>The written examination merit and interview shortlisted roll numbers will be published subject-wise and category-wise after OMR scanning.</p>
            <p>Candidates shortlisted for the 40-mark interview will receive call letters on the portal along with date, session, and document verification venue details at UPESSC Prayagraj.</p>
          </div>
        </div>
      )}

      {activeStage === 'cut-off' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">UP PGT Cut Off 2026 – Official Category & Subject Benchmarks</h2>
              <p className="text-xs text-slate-600">Official cut-offs will be released after completion of selection process (Section 9-क)</p>
            </div>
            <span className="ml-auto px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full border border-slate-300">
              Notify Soon
            </span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
            <p>As per Section 9(क) bullet 6 of the official notification:</p>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-semibold">
              "लिखित परीक्षा के कटऑफ एवं अभ्यर्थियों के प्राप्तांक चयन प्रक्रिया पूर्ण होने के उपरान्त वेबसाइट पर प्रदर्शित किये जायेंगे।"
            </div>
            <p>Official cut-off scores and candidate scorecards will be published on upessc.up.gov.in once the final merit list is drafted.</p>
          </div>
        </div>
      )}

      {activeStage === 'mock-test' && (
        <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2.5 bg-blue-100 text-blue-800 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">UP PGT 2026 Official Pattern Mock Test Series</h2>
              <p className="text-xs text-slate-600">120 Questions | 360 Marks | 2 Hours | +3 Correct / -1 Penalty</p>
            </div>
            <span className="ml-auto px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full border border-blue-300">
              Practice Now
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-950 text-sm">Test Configuration</h3>
              <ul className="list-disc pl-4 space-y-1 text-slate-700">
                <li><strong>General Knowledge:</strong> 30 Questions (90 Marks)</li>
                <li><strong>Concerned Subject:</strong> 90 Questions (270 Marks)</li>
                <li><strong>Exam Timer:</strong> 120 Minutes strict countdown</li>
                <li><strong>Negative Marking:</strong> -1 Mark for wrong answer</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">RajMocks PGT Test Simulator</h3>
                <p className="text-slate-600 mt-1">Practice timed full-length mock tests mapped to official UPESSC 2026 syllabus standards.</p>
              </div>
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('mock-test', 'up-pgt-teacher-2026');
                }}
                className="mt-3 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center shadow-xs transition"
              >
                Launch UP PGT Free Mock Test &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. HERO BANNER (MPESB PREMIUM ARCHITECTURE) */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-blue-500 text-white">
              UPESSC Advt 06/2026
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 backdrop-blur-xs">
              Teaching Jobs
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 backdrop-blur-xs">
              UP State Jobs
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 backdrop-blur-xs">
              Level-8 Pay Matrix
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 ml-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Apply Online Active
            </span>
          </div>

          {/* Title & Organization */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl shrink-0 border border-white/20">
                🎓
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                  UP PGT Teacher Recruitment 2026
                </h1>
                <p className="text-xs sm:text-sm text-blue-200">
                  उत्तर प्रदेश शिक्षा सेवा चयन आयोग, प्रयागराज (UPESSC) • प्रवक्ता (PGT) चयन परीक्षा 2026
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed pt-1">
              Online applications are officially invited through One Time Registration (OTR) on <strong>upessc.up.gov.in</strong> for
              recruitment to <strong>2,607 PGT posts</strong> (2,329 Boys Schools + 278 Girls Schools) across 26 subjects in government-aided
              secondary institutions of Uttar Pradesh. Selection is through Written Exam (360 Marks) and Interview (40 Marks).
            </p>
          </div>

          {/* Main 7 Key Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-blue-200 block">Total Posts</span>
              <span className="text-xl font-black text-white mt-0.5 block">2,607</span>
              <span className="text-[10px] text-emerald-300 font-semibold">Boys 2329 | Girls 278</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-blue-200 block">Apply Start</span>
              <span className="text-base font-bold text-white mt-0.5 block">18 Sep 2026</span>
              <span className="text-[10px] text-slate-300">OTR Portal Open</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-amber-300 block">Last Date</span>
              <span className="text-base font-bold text-amber-200 mt-0.5 block">17 Oct 2026</span>
              <span className="text-[10px] text-amber-300/80 font-semibold">{countdown.text}</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-blue-200 block">Correction</span>
              <span className="text-base font-bold text-white mt-0.5 block">21 Oct 2026</span>
              <span className="text-[10px] text-purple-300">Online Window</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-rose-300 block">Exam Date</span>
              <span className="text-base font-bold text-rose-200 mt-0.5 block">15–16 Dec 2026</span>
              <span className="text-[10px] text-rose-300/90 font-bold">OMR Offline</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-300 block">Admit Card</span>
              <span className="text-xs font-bold text-slate-200 mt-1 block">Not Released</span>
              <span className="text-[10px] text-slate-400">~12 Dec 2026</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-slate-300 block">Result</span>
              <span className="text-xs font-bold text-slate-200 mt-1 block">To Be Updated</span>
              <span className="text-[10px] text-slate-400">Post Interview</span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <a
              href="https://upessc.up.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Apply Online (upessc.up.gov.in)</span>
            </a>

            <a
              href="https://upessc.up.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition"
            >
              <FileText className="w-4 h-4" />
              <span>Official Notification (Advt 06/2026)</span>
            </a>

            <a
              href="https://www.upessc.up.gov.in/Home/Syllabus_all"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition"
            >
              <BookOpen className="w-4 h-4" />
              <span>Syllabus &amp; Exam Pattern</span>
            </a>

            <button
              onClick={() => setActiveStage('mock-test')}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>Free Mock Test</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. CANDIDATE PREPARATION & APPLICATION QUICK TOOLS STRIP */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Official Application &amp; Preparation Utilities
            </span>
          </div>
          <span className="text-[11px] text-slate-500">Free candidate tools tailored to UPESSC specifications</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'photo-resizer')}
            className="p-3 bg-white border border-slate-200 hover:border-blue-400 rounded-xl text-left transition group shadow-2xs"
          >
            <span className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 block">
              Photo Resizer
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">30–300 KB • 300–600 px</span>
          </button>

          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'signature-resizer')}
            className="p-3 bg-white border border-slate-200 hover:border-blue-400 rounded-xl text-left transition group shadow-2xs"
          >
            <span className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 block">
              Signature Resizer
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">10–200 KB • 140×110 px</span>
          </button>

          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'pdf-compressor')}
            className="p-3 bg-white border border-slate-200 hover:border-blue-400 rounded-xl text-left transition group shadow-2xs"
          >
            <span className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 block">
              PDF Compressor
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">50–500 KB Documents</span>
          </button>

          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'age-calculator')}
            className="p-3 bg-white border border-slate-200 hover:border-blue-400 rounded-xl text-left transition group shadow-2xs"
          >
            <span className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 block">
              Age Calculator
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Cut-off: 01 July 2026</span>
          </button>

          <a
            href="#score-calculator"
            className="p-3 bg-white border border-slate-200 hover:border-blue-400 rounded-xl text-left transition group shadow-2xs"
          >
            <span className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 block">
              Score Calculator
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">120 Qs • +3 / -1 Marks</span>
          </a>

          <button
            onClick={() => setActiveStage('mock-test')}
            className="p-3 bg-blue-50/80 border border-blue-200 hover:bg-blue-100 rounded-xl text-left transition group shadow-2xs"
          >
            <span className="text-[11px] font-bold text-blue-900 group-hover:text-blue-700 block">
              Mock Test Portal
            </span>
            <span className="text-[10px] text-blue-700 mt-0.5 block">Full 360 Marks Practice</span>
          </button>
        </div>
      </div>

      {/* 5. MAIN CONTENT LAYOUT (2 COLUMNS: LEFT 70% + RIGHT SIDEBAR 30%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: 8 COLS */}
        <div className="lg:col-span-8 space-y-6">

          {/* VISUAL 1: SELECTION ARCHITECTURE & EXAM PATTERN DIAGRAM */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">
                  Official Selection Architecture &amp; Marks Distribution (400 Marks Total)
                </h2>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                Advt Section 9(क)
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              As mandated by Section 9(क) of Advt 06/2026, final merit is computed out of <strong>400 Marks</strong> strictly on the basis of
              the Written Competitive Examination (360 marks) and Interview (40 marks).
            </p>

            {/* Exam Pattern Visual Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase">Part A: General Knowledge</span>
                  <div className="text-2xl font-black text-blue-950 mt-1">30 Questions</div>
                  <p className="text-xs text-slate-600 mt-1">30 × 3 = <strong>90 Marks</strong></p>
                </div>
                <span className="text-[11px] text-blue-800 font-semibold mt-3 pt-2 border-t border-blue-200">
                  Polity, History, UP GK, Science
                </span>
              </div>

              <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-purple-700 uppercase">Part B: Concerned Subject</span>
                  <div className="text-2xl font-black text-purple-950 mt-1">90 Questions</div>
                  <p className="text-xs text-slate-600 mt-1">90 × 3 = <strong>270 Marks</strong></p>
                </div>
                <span className="text-[11px] text-purple-800 font-semibold mt-3 pt-2 border-t border-purple-200">
                  Postgraduate Core Subject Mastery
                </span>
              </div>

              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase">Part C: Interview</span>
                  <div className="text-2xl font-black text-emerald-950 mt-1">40 Marks</div>
                  <p className="text-xs text-slate-600 mt-1">Selection Board Viva-voce</p>
                </div>
                <span className="text-[11px] text-emerald-800 font-semibold mt-3 pt-2 border-t border-emerald-200">
                  Pedagogy, Expression &amp; Personality
                </span>
              </div>
            </div>

            {/* Visual Formula Bar */}
            <div className="p-3 bg-slate-900 text-white rounded-xl flex flex-wrap items-center justify-around gap-2 text-center text-xs sm:text-sm font-bold">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Written Test</span>
                <span>120 MCQs = 360 Marks</span>
              </div>
              <span className="text-blue-400 text-lg font-black">+</span>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Interview</span>
                <span>40 Marks</span>
              </div>
              <span className="text-emerald-400 text-lg font-black">=</span>
              <div>
                <span className="text-emerald-400 block text-[10px] uppercase">Final Selection Merit</span>
                <span className="text-emerald-300">400 Total Marks</span>
              </div>
            </div>

            {/* Marking & Penalty Notice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-emerald-900">
                  <strong>Correct Answer:</strong> +03 Marks per question
                </span>
              </div>
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="text-rose-900">
                  <strong>Negative Penalty:</strong> -01 Mark per wrong / multiple answer
                </span>
              </div>
            </div>
          </div>

          {/* VISUAL 2: FLOWCHART 1 - ELIGIBILITY DETERMINATION */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">
                  Eligibility Determination Flowchart (Section 6 &amp; 7)
                </h2>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                Verification Flow
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-xl flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Age Verification (as on 01 July 2026)</h3>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Are you at least 21 years old and not older than 62 years (superannuation age)?
                    If YES &rarr; Proceed to Qualification Check. If NO &rarr; Ineligible.
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-slate-400">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              <div className="p-3.5 bg-purple-50/60 border border-purple-200 rounded-xl flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Postgraduate Qualification in Concerned Subject</h3>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Do you hold a Master\'s Degree (M.A. / M.Sc. / M.Com) in the concerned subject from a recognized University?
                    (For Hindi: M.A. Hindi + B.A. with Sanskrit). If YES &rarr; Proceed.
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-slate-400">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              <div className="p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Training Degree (NCTE Recognized B.Ed. or M.P.Ed.)</h3>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Do you possess an NCTE recognized B.Ed. degree? (Or M.P.Ed. for Physical Education / Diploma for Fine Arts).
                    If YES &rarr; Fully Eligible to Apply.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL 3: FLOWCHART 2 - STEP-BY-STEP OTR ONLINE APPLICATION */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                <h2 className="text-base font-bold text-slate-900">
                  Step-by-Step OTR Online Application Flowchart
                </h2>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded-md">
                Official Protocol
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-blue-700 block">Step 1: One Time Registration (OTR)</span>
                <p className="text-slate-600">Register on <strong>upessc.up.gov.in</strong> with Aadhaar authentication, mobile number, and active email ID to obtain permanent OTR number.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-blue-700 block">Step 2: Login &amp; Select Advt 06/2026</span>
                <p className="text-slate-600">Log in via OTR credentials and select <strong>प्रवक्ता (PGT) चयन परीक्षा, 2026</strong> from the active recruitments list.</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-blue-700 block">Step 3: Subject &amp; Cadre Choice</span>
                <p className="text-slate-600">Choose 1 of the 26 notified subjects. Female candidates choose either Boys School or Girls School cadre (Section 12.7).</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-blue-700 block">Step 4: Academic Details &amp; Uploads</span>
                <p className="text-slate-600">Upload Photo (30–300 KB), Signature (10–200 KB, 140×110 px), and required certificates in PDF format (50–500 KB).</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-blue-700 block">Step 5: Online Fee Payment</span>
                <p className="text-slate-600">Pay application fee online via Gateway: General/OBC/EWS ₹1,500; SC/ST ₹750; Divyangjan ₹500.</p>
              </div>

              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                <span className="font-bold text-emerald-800 block">Step 6: Final Print (3 Copies)</span>
                <p className="text-emerald-950">As per Section 2.16, preserve 3 hard copies of the completed form. Two copies must be submitted at interview.</p>
              </div>
            </div>
          </div>

          {/* VISUAL 4: FLOWCHART 3 - SELECTION PROCESS & TIE BREAKING */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-purple-600" />
                <h2 className="text-base font-bold text-slate-900">
                  Selection Stages &amp; Statutory Tie-Breaking Sequence (Section 9-क)
                </h2>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 bg-purple-50 text-purple-800 rounded-md">
                5-Tier Rule
              </span>
            </div>

            <p className="text-xs text-slate-600">
              When two or more candidates secure identical combined merit scores (out of 400), the commission resolves ties strictly in this statutory order:
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <span className="font-bold text-slate-900">1. Written Examination Marks</span>
                <span className="text-blue-700 font-semibold">Candidate with higher written test score (out of 360) is ranked higher</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <span className="font-bold text-slate-900">2. Interview Marks</span>
                <span className="text-blue-700 font-semibold">If written marks are equal, higher interview score (out of 40) breaks the tie</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <span className="font-bold text-slate-900">3. Postgraduate Percentage</span>
                <span className="text-blue-700 font-semibold">If interview marks are equal, candidate with higher Master\'s degree percentage wins</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <span className="font-bold text-slate-900">4. Training (B.Ed.) Percentage</span>
                <span className="text-blue-700 font-semibold">If PG marks are equal, percentage obtained in B.Ed. / training qualification is evaluated</span>
              </div>
              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between">
                <span className="font-bold text-amber-950">5. Age Seniority</span>
                <span className="text-amber-900 font-bold">If all 4 criteria are equal, candidate older in age (अधिक आयु) is placed higher</span>
              </div>
            </div>
          </div>

          {/* VISUAL 5: VACANCY GRAPHS & COMPARISON (2,607 TOTAL) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">
                  Official Vacancy Distribution &amp; Cadre Analysis (Table 01)
                </h2>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                2,607 Total Posts
              </span>
            </div>

            {/* Boys vs Girls Visual Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="text-blue-700">Boys Schools: 2,329 Posts (89.3%)</span>
                <span className="text-purple-700">Girls Schools: 278 Posts (10.7%)</span>
              </div>
              <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex">
                <div style={{ width: '89.3%' }} className="bg-blue-600 h-full" title="Boys Schools 2,329" />
                <div style={{ width: '10.7%' }} className="bg-purple-500 h-full" title="Girls Schools 278" />
              </div>
            </div>

            {/* Category Distribution Visual */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-700 uppercase block mb-2">Category Split (Combined 2,607 Posts):</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-500 font-bold block text-[10px] uppercase">UR / Unreserved</span>
                  <span className="text-lg font-black text-slate-900">1,156</span>
                  <span className="text-[10px] text-slate-500 block">44.34% of total</span>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <span className="text-blue-700 font-bold block text-[10px] uppercase">OBC (Non-Creamy)</span>
                  <span className="text-lg font-black text-blue-950">650</span>
                  <span className="text-[10px] text-blue-700 block">24.93% of total</span>
                </div>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <span className="text-amber-800 font-bold block text-[10px] uppercase">SC (Scheduled Castes)</span>
                  <span className="text-lg font-black text-amber-950">583</span>
                  <span className="text-[10px] text-amber-800 block">22.36% of total</span>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
                  <span className="text-purple-700 font-bold block text-[10px] uppercase">EWS (Economically Weaker)</span>
                  <span className="text-lg font-black text-purple-950">215</span>
                  <span className="text-[10px] text-purple-700 block">8.25% of total</span>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL 6: COMPLETE INTERACTIVE 26-SUBJECT VACANCY TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Complete 26-Subject Official Vacancy Table (सारणी-1)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Extracted directly from Page 13 Table 01 of official UPESSC Advt No. 06/2026
                </p>
              </div>

              {/* Cadre Filter Buttons */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0 text-xs font-semibold">
                <button
                  onClick={() => setCadreFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    cadreFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All (2,607)
                </button>
                <button
                  onClick={() => setCadreFilter('boys')}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    cadreFilter === 'boys' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Boys (2,329)
                </button>
                <button
                  onClick={() => setCadreFilter('girls')}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    cadreFilter === 'girls' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Girls (278)
                </button>
              </div>
            </div>

            {/* Subject Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={subjectSearch}
                onChange={(e) => setSubjectSearch(e.target.value)}
                placeholder="Search subject in Hindi or English (e.g. Hindi, Chemistry, Sanskrit, भूगोल)..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-2.5 w-10 text-center">#</th>
                    <th className="p-2.5">Subject Name (विषय)</th>
                    <th className="p-2.5 text-center bg-blue-50/50">Boys Schools</th>
                    <th className="p-2.5 text-center bg-purple-50/50">Girls Schools</th>
                    <th className="p-2.5 text-center font-black bg-slate-200/60">Total</th>
                    <th className="p-2.5 text-center">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {filteredSubjects.map((s) => (
                    <tr key={s.sn} className="hover:bg-slate-50/80 transition">
                      <td className="p-2.5 text-center font-mono text-slate-500">{s.sn}</td>
                      <td className="p-2.5 font-bold">
                        <span className="text-slate-900">{s.subjectHindi}</span>
                        <span className="text-[11px] text-slate-500 block font-normal">{s.subjectEnglish}</span>
                      </td>
                      <td className="p-2.5 text-center font-mono bg-blue-50/30">
                        <span className="font-bold text-blue-900">{s.boys.total}</span>
                        <span className="text-[10px] text-slate-500 block">
                          UR:{s.boys.ur} SC:{s.boys.sc} OBC:{s.boys.obc} EWS:{s.boys.ews}
                        </span>
                      </td>
                      <td className="p-2.5 text-center font-mono bg-purple-50/30">
                        <span className="font-bold text-purple-900">{s.girls.total}</span>
                        <span className="text-[10px] text-slate-500 block">
                          UR:{s.girls.ur} SC:{s.girls.sc} OBC:{s.girls.obc} EWS:{s.girls.ews}
                        </span>
                      </td>
                      <td className="p-2.5 text-center font-black text-sm bg-slate-100/50">
                        {s.combined.total}
                      </td>
                      <td className="p-2.5 text-center">
                        <button
                          onClick={() => setSelectedSubjectId(s.sn)}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition"
                        >
                          View Criteria
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-100 text-slate-900 font-bold border-t border-slate-200 text-xs">
                  <tr>
                    <td colSpan={2} className="p-2.5 text-right font-black uppercase">
                      Total All Subjects:
                    </td>
                    <td className="p-2.5 text-center text-blue-900 font-mono font-black">
                      2,329 (UR:1027 SC:516 OBC:585 EWS:201)
                    </td>
                    <td className="p-2.5 text-center text-purple-900 font-mono font-black">
                      278 (UR:132 SC:67 OBC:65 EWS:14)
                    </td>
                    <td className="p-2.5 text-center font-black text-sm bg-slate-200">
                      2,607
                    </td>
                    <td className="p-2.5 text-center text-slate-500">26 Subjects</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Selected Subject Criteria Box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 uppercase">
                  Subject Qualifications Preview: {selectedSubjectData.sn}. {selectedSubjectData.subjectHindi} ({selectedSubjectData.subjectEnglish})
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                  {selectedSubjectData.combined.total} Posts
                </span>
              </div>
              <p className="text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                {selectedSubjectData.qualification}
              </p>
              {selectedSubjectData.specialNote && (
                <div className="p-2 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 font-semibold">
                  ⚠️ Note: {selectedSubjectData.specialNote}
                </div>
              )}
            </div>
          </div>

          {/* VISUAL 7: INTERACTIVE WORKING UP PGT SCORE CALCULATOR */}
          <div id="score-calculator" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">
                  Interactive UP PGT Score Calculator (360 Written + 40 Interview)
                </h2>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                Live Simulator
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Test your estimated score based on the official marking formula: <strong>Score = (Correct × 3) − (Wrong × 1)</strong> out of 360 written marks,
              plus viva-voce marks out of 40 for a combined total of 400 marks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Correct Questions (+3 Marks each)
                </label>
                <input
                  type="number"
                  min={0}
                  max={120}
                  value={calcCorrect}
                  onChange={(e) => setCalcCorrect(Math.min(120, Math.max(0, parseInt(e.target.value) || 0)))}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 font-bold text-slate-900"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">Max: 120 Questions</span>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Wrong / Multiple Answers (-1 Mark each)
                </label>
                <input
                  type="number"
                  min={0}
                  max={120}
                  value={calcWrong}
                  onChange={(e) => setCalcWrong(Math.min(120, Math.max(0, parseInt(e.target.value) || 0)))}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-rose-500/30 font-bold text-rose-700"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">Deducts 1 mark per mistake</span>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Interview Score (out of 40)
                </label>
                <input
                  type="number"
                  min={0}
                  max={40}
                  value={calcInterview}
                  onChange={(e) => setCalcInterview(Math.min(40, Math.max(0, parseInt(e.target.value) || 0)))}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-purple-500/30 font-bold text-purple-700"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">Viva-voce: 0 to 40</span>
              </div>
            </div>

            {/* Score Output Banner */}
            <div className="p-4 bg-slate-900 text-white rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Gross Marks</span>
                <span className="text-lg font-black text-white">{scoreResults.grossMarks}</span>
                <span className="text-[10px] text-slate-400 block">{calcCorrect} × 3</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-rose-400 block">Penalty</span>
                <span className="text-lg font-black text-rose-300">-{scoreResults.negativePenalty}</span>
                <span className="text-[10px] text-rose-400 block">{calcWrong} × 1</span>
              </div>
              <div className="border-x border-slate-800">
                <span className="text-[10px] uppercase font-bold text-blue-300 block">Written Score</span>
                <span className="text-xl font-black text-blue-400">{scoreResults.writtenScore} / 360</span>
                <span className="text-[10px] text-blue-300 block">{scoreResults.writtenPercent}%</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-300 block">Total Merit Marks</span>
                <span className="text-xl font-black text-emerald-400">{scoreResults.totalSelectionMarks} / 400</span>
                <span className="text-[10px] text-emerald-300 block">{scoreResults.totalPercent}%</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 italic text-center">
              Note: This calculator is provided for personal evaluation only based on official Advt 06/2026 marking rules. It does not predict or guarantee selection cut-offs.
            </p>
          </div>

          {/* REAL-LIFE EXPLANATORY EXAMPLES SECTION */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h2 className="text-base font-bold text-slate-900">
                Official Rule Interpretations &amp; Real-Life Examples
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-900 text-sm block">Example 1: Age Eligibility Calculation</span>
                <p>
                  <strong>Candidate DOB:</strong> 15 June 2005. As on 01 July 2026, the candidate\'s age is 21 years and 16 days.
                  Since candidate has completed 21 years, they are <strong>ELIGIBLE</strong>.
                </p>
                <p>
                  <strong>Candidate DOB:</strong> 10 August 2005. As on 01 July 2026, candidate is 20 years 10 months old.
                  Since minimum 21 years is not completed on cut-off date, candidate is <strong>INELIGIBLE</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-900 text-sm block">Example 2: Negative Marking Penalty</span>
                <p>
                  A candidate attempts 110 questions in PGT Chemistry: 90 are correct, 20 are wrong, and 10 are unattempted.
                </p>
                <p>
                  <strong>Gross Marks:</strong> 90 × 3 = 270 marks.<br />
                  <strong>Penalty Deducted:</strong> 20 × 1 = 20 marks.<br />
                  <strong>Net Written Score:</strong> 270 − 20 = <strong>250 marks</strong> (out of 360).
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-900 text-sm block">Example 3: Subject Qualification for PGT Hindi</span>
                <p>
                  A candidate possesses M.A. in Hindi and NCTE B.Ed., but did not study Sanskrit at the Graduation (B.A.) level.
                </p>
                <p>
                  Under Section 7 (Sr 1), B.A. with Sanskrit is a mandatory qualification for PGT Hindi. Without Sanskrit in B.A.,
                  the candidate will be disqualified at document verification.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-900 text-sm block">Example 4: Boys vs Girls Cadre Choice</span>
                <p>
                  A female candidate holds M.Sc. and B.Ed. in Mathematics. She can choose either the Boys school cadre (105 posts)
                  or the Girls school cadre (7 posts). However, she must choose only one during application (Section 12.7).
                </p>
                <p>Male candidates can only apply for Boys schools.</p>
              </div>
            </div>
          </div>

          {/* COMPLETE 50-SECTION EXAM INFORMATION & GUIDELINES ACCORDION */}
          <Accordion
            sections={sections}
            title="Complete 50-Section Exam Information & Guidelines"
            defaultOpenFirst={true}
          />

          {/* OFFICIAL HIGHLIGHTED LINKS TABLE */}
          <div className="bg-amber-50/70 border-2 border-amber-300 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-200 pb-3">
              <ExternalLink className="w-5 h-5 text-amber-800" />
              <h2 className="text-base font-bold text-amber-950">
                Official Important Links &amp; Direct Portals
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-amber-200 rounded-xl overflow-hidden bg-white">
                <thead className="bg-amber-100/70 text-amber-950 font-bold border-b border-amber-200">
                  <tr>
                    <th className="p-3">Recruitment Resource</th>
                    <th className="p-3">Current Status</th>
                    <th className="p-3 text-right">Official Access Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100 text-slate-800">
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Apply Online (OTR Portal)</td>
                    <td className="p-3 text-emerald-700 font-bold">Active (18 Sep to 17 Oct 2026)</td>
                    <td className="p-3 text-right">
                      <a
                        href="https://upessc.up.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg inline-flex items-center gap-1 transition"
                      >
                        <span>Apply Online</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-900">Official Website</td>
                    <td className="p-3 text-blue-700 font-semibold">UPESSC Prayagraj</td>
                    <td className="p-3 text-right">
                      <a
                        href="https://upessc.up.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg inline-flex items-center gap-1 transition"
                      >
                        <span>upessc.up.gov.in</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-900">Official Syllabus &amp; Exam Pattern</td>
                    <td className="p-3 text-slate-700">All 26 Subjects Downloadable</td>
                    <td className="p-3 text-right">
                      <a
                        href="https://www.upessc.up.gov.in/Home/Syllabus_all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg inline-flex items-center gap-1 transition"
                      >
                        <span>View Syllabus</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-900">Official Detailed Notification</td>
                    <td className="p-3 text-slate-700">Advt No. 06/2026 (21 Pages PDF)</td>
                    <td className="p-3 text-right">
                      <a
                        href="https://upessc.up.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg inline-flex items-center gap-1 transition"
                      >
                        <span>Download PDF</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-900">UP PGT Admit Card 2026</td>
                    <td className="p-3 text-amber-800 font-bold">Not Released (3 Days Before Exam)</td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1.5 bg-slate-100 text-slate-400 font-bold rounded-lg text-xs">
                        Coming Soon
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-900">UP PGT Answer Key 2026</td>
                    <td className="p-3 text-slate-500">Post Exam Release</td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1.5 bg-slate-100 text-slate-400 font-bold rounded-lg text-xs">
                        Notify Soon
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-900">UP PGT Result &amp; Merit List</td>
                    <td className="p-3 text-slate-500">To Be Notified</td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1.5 bg-slate-100 text-slate-400 font-bold rounded-lg text-xs">
                        Notify Soon
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-900">UP PGT Cut Off 2026</td>
                    <td className="p-3 text-slate-500">Post Selection Release (Sec 9-क)</td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1.5 bg-slate-100 text-slate-400 font-bold rounded-lg text-xs">
                        Notify Soon
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-900">Free PGT Mock Test</td>
                    <td className="p-3 text-blue-700 font-bold">120 Qs / 360 Marks Simulator</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => setActiveStage('mock-test')}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg inline-flex items-center gap-1 transition"
                      >
                        <span>Practice Free</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SOCIAL SHARE COMPONENT */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-blue-600" />
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  SHARE WITH FRIENDS &amp; ASPIRANT GROUPS
                </span>
                <span className="text-[11px] text-slate-500">
                  Help fellow teaching aspirants stay informed with verified UPESSC PGT 2026 details
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  'UP PGT Teacher Recruitment 2026 (Advt 06/2026) announced for 2607 Posts. Check 26 subject vacancies, Level-8 pay, eligibility, 120 Qs exam pattern & apply: https://rajdailytools.in/up-pgt-teacher-recruitment-2026.html'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition"
              >
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  'https://rajdailytools.in/up-pgt-teacher-recruitment-2026.html'
                )}&text=${encodeURIComponent('UP PGT Teacher Recruitment 2026 - 2607 Posts, Syllabus & Apply Link')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition"
              >
                <span>Telegram</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg text-xs flex items-center gap-1.5 transition"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 4 COLS (SIDEBAR) */}
        <div className="lg:col-span-4 space-y-6">
          <RightSidebar
            exam={exam}
            onNavigate={onNavigate}
            extraContent={
              <div className="space-y-4">
                {/* UP PGT Quick Card */}
                <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-blue-950 font-bold text-xs uppercase tracking-wide">
                    <Building2 className="w-4 h-4 text-blue-700" />
                    <span>UPESSC Commission Desk</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <p><strong>Commission:</strong> उत्तर प्रदेश शिक्षा सेवा चयन आयोग</p>
                    <p><strong>Office:</strong> 23 एलनगंज, प्रयागराज - 211002</p>
                    <p><strong>Advt No:</strong> 06/2026 (प्रवक्ता परीक्षा)</p>
                    <p><strong>Official Phone:</strong> 0532-2466851</p>
                    <p><strong>Technical Help:</strong> 08448573939</p>
                    <p><strong>Commission Email:</strong> upesscprayagraj@gmail.com</p>
                  </div>
                </div>

                {/* Related Teaching Jobs in UP */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
                    Related Teaching Recruitments
                  </span>
                  <div className="space-y-2 text-xs">
                    <a
                      href="/upessc-prt-assistant-teacher-recruitment-2026.html"
                      className="block p-2.5 bg-white border border-slate-200 hover:border-blue-400 rounded-lg transition"
                    >
                      <span className="font-bold text-slate-900 block">UPESSC PRT Assistant Teacher 2026</span>
                      <span className="text-[11px] text-emerald-700 font-semibold">12,405 Vacancies • Primary</span>
                    </a>

                    <a
                      href="/up-special-tet-online-form-2026.html"
                      className="block p-2.5 bg-white border border-slate-200 hover:border-blue-400 rounded-lg transition"
                    >
                      <span className="font-bold text-slate-900 block">UP Special TET 2026</span>
                      <span className="text-[11px] text-blue-700 font-semibold">Eligibility Test • Special Ed</span>
                    </a>

                    <a
                      href="/latest-jobs/nvs-recruitment-2026.html"
                      className="block p-2.5 bg-white border border-slate-200 hover:border-blue-400 rounded-lg transition"
                    >
                      <span className="font-bold text-slate-900 block">NVS PGT/TGT Recruitment 2026</span>
                      <span className="text-[11px] text-slate-500">Navodaya Vidyalaya Samiti</span>
                    </a>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
