import React, { useState, useMemo } from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate, getCountdown } from '../utils/dateUtils';
import {
  CONCOR_VACANCIES,
  CONCOR_TOTALS,
  generateConcor50Sections,
  CONCOR_RECRUITMENT_2026_EXAM,
  ConcorVacancyItem
} from '../data/concorData';
import {
  Building2,
  ExternalLink,
  Calendar,
  Layers,
  FileText,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
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
  Train,
  Container,
  PhoneCall,
  GraduationCap
} from 'lucide-react';

interface ConcorRecruitmentPageProps {
  exam?: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

type ExamStage = 'latest-job' | 'admit-card' | 'answer-key' | 'result' | 'cut-off' | 'mock-test';

export const ConcorRecruitmentPage: React.FC<ConcorRecruitmentPageProps> = ({
  exam = CONCOR_RECRUITMENT_2026_EXAM,
  onNavigate,
  depth = 0
}) => {
  // Top 6 Ecosystem Navigation Tabs
  const [activeStage, setActiveStage] = useState<ExamStage>('latest-job');

  // Vacancy Filter State
  const [cadreFilter, setCadreFilter] = useState<'all' | 'MT' | 'AO'>('all');
  const [streamSearch, setStreamSearch] = useState('');

  // Copy Link State
  const [copiedLink, setCopiedLink] = useState(false);

  // Tool 1: Age Eligibility Checker State
  const [birthYear, setBirthYear] = useState<number>(1998);
  const [birthMonth, setBirthMonth] = useState<number>(5);
  const [birthDay, setBirthDay] = useState<number>(15);
  const [candidateCategory, setCandidateCategory] = useState<'UR' | 'OBC' | 'SC' | 'ST' | 'PwBD' | 'ESM' | 'Departmental'>('UR');
  const [targetCadre, setTargetCadre] = useState<'MT' | 'AO'>('MT');
  const [esmServiceYears, setEsmServiceYears] = useState<number>(5);

  // Tool 2: Eligibility & Qualification Checker State
  const [selectedPostCode, setSelectedPostCode] = useState<string>('MT/CO');
  const [userQualLevel, setUserQualLevel] = useState<string>('mba');
  const [userMarksPercent, setUserMarksPercent] = useState<number>(62);

  // Tool 3: Experience Checker for AO
  const [selectedAoPost, setSelectedAoPost] = useState<string>('AO/CO');
  const [hasSpecialDiplomas, setHasSpecialDiplomas] = useState<boolean>(false);
  const [userExpYears, setUserExpYears] = useState<number>(3);

  // Tool 4: Fee Calculator State
  const [feeCadre, setFeeCadre] = useState<'MT' | 'AO'>('MT');
  const [feeCategory, setFeeCategory] = useState<'UR' | 'OBC' | 'EWS' | 'SC' | 'ST' | 'PwBD' | 'ESM'>('UR');

  // Tool 5: CBT Score & Negative Marking Calculator (100 Questions, +1.0 / -0.25)
  const [calcCorrect, setCalcCorrect] = useState<number>(75);
  const [calcWrong, setCalcWrong] = useState<number>(15);

  // Tool 6: Interactive Document Checklist
  const [checkedDocs, setCheckedDocs] = useState<{ [key: string]: boolean }>({
    doc1: true,
    doc2: true,
    doc3: false,
    doc4: true,
    doc5: false,
    doc6: false,
    doc7: false
  });

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filtered Vacancy Table
  const filteredVacancies = useMemo(() => {
    return CONCOR_VACANCIES.filter((item) => {
      if (item.postCode === 'MT/FA/CS') return false; // Show as note under MT/FA to preserve official count
      const matchesSearch =
        item.name.toLowerCase().includes(streamSearch.toLowerCase()) ||
        item.postCode.toLowerCase().includes(streamSearch.toLowerCase());
      if (!matchesSearch) return false;
      if (cadreFilter === 'MT') return item.category === 'MT';
      if (cadreFilter === 'AO') return item.category === 'AO';
      return true;
    });
  }, [cadreFilter, streamSearch]);

  // Age Calculator Logic (Reckoning Date: 31 August 2026)
  const ageResults = useMemo(() => {
    const reckoningDate = new Date(2026, 7, 31); // August 31, 2026
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    let years = reckoningDate.getFullYear() - birthDate.getFullYear();
    let months = reckoningDate.getMonth() - birthDate.getMonth();
    let days = reckoningDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonthLastDay = new Date(reckoningDate.getFullYear(), reckoningDate.getMonth(), 0).getDate();
      days += prevMonthLastDay;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const ageDecimal = years + months / 12 + days / 365;

    // Normal limits
    const baseMin = 18;
    const baseMax = targetCadre === 'MT' ? 28 : 32;

    // Relaxation calculation
    let relaxation = 0;
    if (candidateCategory === 'SC' || candidateCategory === 'ST') relaxation = 5;
    else if (candidateCategory === 'OBC') relaxation = 3;
    else if (candidateCategory === 'PwBD') relaxation = 10;
    else if (candidateCategory === 'ESM') relaxation = 3 + Math.max(0, esmServiceYears);
    else if (candidateCategory === 'Departmental') relaxation = 5;

    // Absolute cap from notification clause 1.8: "Maximum upper age ... should not exceed 50 years"
    const allowedMax = Math.min(50, baseMax + relaxation);

    const isEligible = ageDecimal >= baseMin && ageDecimal <= allowedMax;

    return {
      exactAge: `${years} Years, ${months} Months, ${days} Days`,
      decimalAge: ageDecimal.toFixed(1),
      baseMax,
      relaxation,
      allowedMax,
      isEligible,
      reason:
        ageDecimal < baseMin
          ? `Below minimum age limit of 18 years on 31.08.2026.`
          : ageDecimal > allowedMax
          ? `Exceeds upper age limit of ${allowedMax} years (inclusive of permissible relaxations, capped at 50).`
          : `Eligible! Your age falls within the permissible window (18 to ${allowedMax} years).`
    };
  }, [birthYear, birthMonth, birthDay, candidateCategory, targetCadre, esmServiceYears]);

  // Experience Checker for AO
  const aoExpResult = useMemo(() => {
    let requiredYears = 4;
    let desc = '';

    if (selectedAoPost === 'AO/CO') {
      requiredYears = hasSpecialDiplomas ? 2 : 4;
      desc = hasSpecialDiplomas
        ? 'Requires min 2 years experience with IRT Diploma / Logistics course.'
        : 'Requires min 4 years experience for general degree graduates.';
    } else if (selectedAoPost === 'AO/FA') {
      requiredYears = hasSpecialDiplomas ? 2 : 4;
      desc = hasSpecialDiplomas
        ? 'Requires min 2 years experience for CA(Inter)/CMA(Inter) qualified candidates.'
        : 'Requires min 4 years experience for B.Com graduates.';
    } else if (selectedAoPost === 'AO/TH') {
      requiredYears = hasSpecialDiplomas ? 1 : 3;
      desc = hasSpecialDiplomas
        ? 'Requires min 1 year experience for B.E./B.Tech engineering graduates.'
        : 'Requires min 3 years experience for Engineering Diploma holders.';
    } else if (selectedAoPost === 'AO/MIS') {
      requiredYears = hasSpecialDiplomas ? 1 : 3;
      desc = hasSpecialDiplomas
        ? 'Requires min 1 year experience for MCA / B.Tech / M.Sc(IT) degree holders.'
        : 'Requires min 3 years experience for BCA / PGDCA / B.Sc CS graduates.';
    } else if (selectedAoPost === 'AO/CE') {
      requiredYears = hasSpecialDiplomas ? 1 : 3;
      desc = hasSpecialDiplomas
        ? 'Requires min 1 year experience for B.E./B.Tech in Civil Engineering.'
        : 'Requires min 3 years experience for Diploma in Civil Engineering.';
    }

    const isEligible = userExpYears >= requiredYears;

    return {
      requiredYears,
      desc,
      isEligible,
      statusText: isEligible
        ? `Eligible! You have ${userExpYears} years experience (Required: ${requiredYears} years).`
        : `Not Eligible. You need at least ${requiredYears} years of experience as on 31.08.2026.`
    };
  }, [selectedAoPost, hasSpecialDiplomas, userExpYears]);

  // CBT Score Calculation Result (100 Questions, +1.0 / -0.25)
  const cbtScoreResults = useMemo(() => {
    const safeCorrect = Math.max(0, Math.min(100, calcCorrect));
    const safeWrong = Math.max(0, Math.min(100 - safeCorrect, calcWrong));
    const unattempted = Math.max(0, 100 - (safeCorrect + safeWrong));

    const grossScore = safeCorrect * 1.0;
    const penalty = safeWrong * 0.25;
    const netMarks = Math.max(0, grossScore - penalty);
    const accuracy = safeCorrect + safeWrong > 0 ? ((safeCorrect / (safeCorrect + safeWrong)) * 100).toFixed(1) : '0.0';
    const percentScore = ((netMarks / 100) * 100).toFixed(2);

    return {
      safeCorrect,
      safeWrong,
      unattempted,
      grossScore,
      penalty,
      netMarks: netMarks.toFixed(2),
      accuracy,
      percentScore
    };
  }, [calcCorrect, calcWrong]);

  // Fee Calculator Result
  const feeResult = useMemo(() => {
    const isExempt = ['SC', 'ST', 'PwBD', 'ESM'].includes(feeCategory);
    if (isExempt) {
      return {
        amount: '₹0 (Fee Exempted)',
        gstNotice: 'SC, ST, PwBD, and Ex-Servicemen are 100% exempted from application fee.',
        isFree: true
      };
    }
    const baseFee = feeCadre === 'MT' ? 750 : 500;
    return {
      amount: `₹${baseFee} + GST`,
      gstNotice: `Non-refundable application fee for ${feeCadre} (UR / OBC / EWS) via online payment gateway.`,
      isFree: false
    };
  }, [feeCadre, feeCategory]);

  const sections = useMemo(() => generateConcor50Sections(), []);
  const countdown = getCountdown(exam.applicationLastDate, 'deadline');

  const officialPortalUrl = 'https://www.concorindia.co.in/';
  const applyOnlineUrl = 'https://rrb.digialm.com/EForms/configuredHtml/1181/101565/Index.html';
  const notificationPdfUrl = 'https://cms.concorindia.co.in:8000/uploads/cms/pdf/Asf6Xc3Mnw5BWdp_FinalAdvertisement-18thAug2026(Published).pdf';

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Structured Data (JSON-LD) for SEO
  const jsonLdJobPosting = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'CONCOR Management Trainee & Assistant Officer Recruitment 2026',
    description:
      'Container Corporation of India Limited (CONCOR), Ministry of Railways, invites online applications for 77 Management Trainee (MT) and Assistant Officer (AO) vacancies under Employment Notification No. 05/2026.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Container Corporation of India Limited',
      value: 'Advt No. 05/2026'
    },
    datePosted: '2026-08-31',
    validThrough: '2026-09-30T23:55:00+05:30',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Container Corporation of India Limited (CONCOR)',
      sameAs: 'https://www.concorindia.co.in/',
      logo: 'https://www.concorindia.co.in/images/concor_logo.png'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'New Delhi / Pan-India'
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 40000,
        maxValue: 160000,
        unitText: 'MONTH'
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 font-sans">
      {/* CRAWLABLE SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdJobPosting) }}
      />

      {/* BREADCRUMB NAVIGATION */}
      <Breadcrumb
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Latest Jobs', page: 'latest-jobs' },
          { label: 'Government/PSU Jobs', page: 'latest-jobs' },
          { label: 'CONCOR Recruitment 2026' }
        ]}
        onNavigate={onNavigate}
      />

      {/* LIVE NOTIFICATION TICKER / ALERT STRIP */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-3.5 rounded-xl flex items-center justify-between shadow-xs text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Train className="w-3.5 h-3.5" /> Advt 05/2026
          </span>
          <span className="truncate font-medium">
            CONCOR MT & AO Online Registration Open: Apply by 30 September 2026 (11:55 PM) for 77 Executive Posts.
          </span>
        </div>
        <a
          href={applyOnlineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 text-white font-semibold px-3 py-1 rounded-md text-xs transition shrink-0 ml-2 hidden sm:inline-flex items-center gap-1"
        >
          Apply Online <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* TOP HEADER: HERO & META SUMMARY */}
      <header className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" /> Navratna CPSE • Ministry of Railways
              </span>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                77 Total Vacancies
              </span>
              <span className="px-2.5 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
                CTC: Up to ₹20.11 LPA
              </span>
              <span className="px-2.5 py-1 bg-purple-100 text-purple-900 text-xs font-bold rounded-full">
                Online Application Active
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              CONCOR Management Trainee & Assistant Officer Recruitment 2026
            </h1>

            <p className="text-sm text-slate-600 max-w-4xl leading-relaxed">
              Container Corporation of India Limited (CONCOR), a Navratna Central Public Sector Enterprise under the
              Ministry of Railways, invites online applications under <strong>Employment Notification No. 05/2026</strong>{' '}
              for recruitment of <strong>77 positions</strong> across Management Trainee (MT - 45 Posts) and Assistant
              Officer (AO - 32 Posts) cadres in Commercial & Operations, Accounts, Technical, MIS, Civil, and Personnel &
              Administration disciplines.
            </p>
          </div>

          {/* DEADLINE COUNTDOWN BOX */}
          <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl shrink-0 text-center md:w-64 border border-slate-800 shadow-md">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Application Deadline
            </span>
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
              30 September 2026
            </div>
            <div className="text-xs text-slate-400 mt-0.5 mb-2">Closes at 11:55 PM</div>
            <div className="bg-slate-800/80 rounded-lg py-1.5 px-3 text-xs font-semibold text-emerald-400 border border-slate-700">
              {countdown.isClosed ? 'Application Closed' : `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m Left`}
            </div>
          </div>
        </div>

        {/* QUICK ACTION TOOLBAR */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={applyOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Apply Online (DigiALM)
            </a>
            <a
              href={notificationPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center gap-1.5 border border-slate-200"
            >
              <Download className="w-4 h-4 text-slate-600" /> Official Notification PDF
            </a>
            <a
              href={officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center gap-1.5 border border-slate-200"
            >
              <Building2 className="w-4 h-4 text-slate-600" /> CONCOR Official Website
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 transition text-xs font-medium flex items-center gap-1"
              title="Copy Page Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Copy Link'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 transition text-xs font-medium flex items-center gap-1"
              title="Print Page"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <ShareButtons title="CONCOR MT & AO Recruitment 2026 - Apply Online" url={window.location.href} />
          </div>
        </div>
      </header>

      {/* RAJDAILYTOOLS ECOSYSTEM STAGE SELECTOR (LATEST JOB / ADMIT CARD / ANSWER KEY / RESULT / CUT OFF / MOCK TEST) */}
      <nav aria-label="Exam Lifecycle Stages" className="bg-white border border-slate-200 rounded-xl p-1.5 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1.5 text-center text-xs font-bold">
          <button
            onClick={() => setActiveStage('latest-job')}
            className={`py-2.5 px-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
              activeStage === 'latest-job'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>LATEST JOB</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </button>

          <button
            onClick={() => setActiveStage('admit-card')}
            className={`py-2.5 px-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
              activeStage === 'admit-card'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>ADMIT CARD</span>
          </button>

          <button
            onClick={() => setActiveStage('answer-key')}
            className={`py-2.5 px-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
              activeStage === 'answer-key'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>ANSWER KEY</span>
          </button>

          <button
            onClick={() => setActiveStage('result')}
            className={`py-2.5 px-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
              activeStage === 'result'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>RESULT</span>
          </button>

          <button
            onClick={() => setActiveStage('cut-off')}
            className={`py-2.5 px-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
              activeStage === 'cut-off'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>CUT OFF</span>
          </button>

          <button
            onClick={() => setActiveStage('mock-test')}
            className={`py-2.5 px-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
              activeStage === 'mock-test'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>MOCK TEST</span>
          </button>
        </div>
      </nav>

      {/* STAGE NOTIFICATION POPUP (IF ADMIT CARD, ANSWER KEY, RESULT, CUT OFF, MOCK TEST IS CLICKED) */}
      {activeStage !== 'latest-job' && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 space-y-1">
            <p className="font-bold">
              {activeStage === 'admit-card' && 'CONCOR CBT Admit Card Status: Not Released / To Be Updated'}
              {activeStage === 'answer-key' && 'CONCOR CBT Answer Key Status: To Be Released After Examination'}
              {activeStage === 'result' && 'CONCOR CBT & Selection Result: To Be Updated Post Examination'}
              {activeStage === 'cut-off' && 'CONCOR Official Cut-Off: Not Released / To Be Updated by CONCOR'}
              {activeStage === 'mock-test' && 'CONCOR MT & AO CBT Online Practice & Mock Test Module'}
            </p>
            <p>
              As per official notification guidelines, no historical or speculative cutoff dates are published. Official
              updates will appear immediately upon release by CONCOR. You are viewing the complete recruitment details below.
            </p>
          </div>
        </div>
      )}

      {/* MAIN TWO-COLUMN LAYOUT: 8 COLS CONTENT + 4 COLS SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT MAIN CONTENT: 8 COLS */}
        <div className="lg:col-span-8 space-y-8">
          {/* CORE OVERVIEW MATRIX CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <span className="text-xs text-slate-500 font-medium block">Total Posts</span>
              <span className="text-xl font-black text-slate-900">77 Posts</span>
              <span className="text-[11px] text-blue-600 block mt-0.5">MT: 45 | AO: 32</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <span className="text-xs text-slate-500 font-medium block">Application Dates</span>
              <span className="text-sm font-bold text-slate-900">31 Aug – 30 Sep</span>
              <span className="text-[11px] text-emerald-600 block mt-0.5">11:55 PM Closing</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <span className="text-xs text-slate-500 font-medium block">MT Pay & CTC</span>
              <span className="text-sm font-bold text-slate-900">₹50K – ₹1.60L</span>
              <span className="text-[11px] text-purple-700 font-semibold block mt-0.5">~₹20.11 Lakhs CTC</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <span className="text-xs text-slate-500 font-medium block">AO Pay & CTC</span>
              <span className="text-sm font-bold text-slate-900">₹40K – ₹1.36L</span>
              <span className="text-[11px] text-indigo-700 font-semibold block mt-0.5">~₹16.09 Lakhs CTC</span>
            </div>
          </div>

          {/* OFFICIAL RECRUITMENT TIMELINE COMPONENT */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">CONCOR Recruitment Official Timeline 2026</h2>
            </div>

            <div className="relative pl-6 border-l-2 border-blue-500 space-y-6 py-2">
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
                <div className="text-xs font-bold text-emerald-700">31 August 2026 (10:00 AM) • Active</div>
                <div className="text-sm font-bold text-slate-900">Online Application Registration Opens</div>
                <p className="text-xs text-slate-500">
                  DigiALM online application portal activated for candidate registration and fee payment.
                </p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-100"></span>
                <div className="text-xs font-bold text-blue-700">30 September 2026 (11:55 PM) • Crucial Deadline</div>
                <div className="text-sm font-bold text-slate-900">Last Date for Online Submission & Fee Payment</div>
                <p className="text-xs text-slate-500">
                  Last date for submitting application forms and online fee payments.
                </p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-100"></span>
                <div className="text-xs font-bold text-amber-800">Date: Not Released / To Be Updated</div>
                <div className="text-sm font-bold text-slate-900">Computer Based Test (CBT) for MT & AO</div>
                <p className="text-xs text-slate-500">
                  Will be held on the same day in two separate shifts across allocated pan-India test cities.
                </p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100"></span>
                <div className="text-xs font-bold text-slate-500">Schedule: To Be Updated</div>
                <div className="text-sm font-bold text-slate-900">MT Group Discussion & Interview / AO Direct Merit</div>
                <p className="text-xs text-slate-500">
                  MT candidates shortlisted for GD/Interview. AO merit declared purely on CBT performance.
                </p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100"></span>
                <div className="text-xs font-bold text-slate-500">Schedule: To Be Updated</div>
                <div className="text-sm font-bold text-slate-900">Document Verification & Pre-Employment Medical</div>
                <p className="text-xs text-slate-500">
                  Original credential verification, NOC checks, and medical fitness by CONCOR authorities.
                </p>
              </div>
            </div>
          </div>

          {/* MT VS AO RECRUITMENT ARCHITECTURE COMPARISON */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Scale className="w-5 h-5 text-indigo-600" />
              <h2 className="text-base font-bold text-slate-900">Management Trainee (MT) vs Assistant Officer (AO)</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 border border-blue-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wide text-blue-900 bg-blue-200/80 px-2 py-0.5 rounded">
                    Management Trainee (MT)
                  </span>
                  <span className="text-xs font-bold text-blue-700">45 Vacancies</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  <li><strong>Pay Scale:</strong> ₹50,000-3%-₹1,60,000 (E-1 Track)</li>
                  <li><strong>Approximate CTC:</strong> ₹20.11 Lakhs Per Annum</li>
                  <li><strong>Age Limit (UR):</strong> 18 – 28 Years</li>
                  <li><strong>Prior Experience:</strong> NIL (Freshers & final-year candidates eligible)</li>
                  <li><strong>Selection Stage:</strong> CBT + GD and/or Personal Interview</li>
                  <li><strong>Training:</strong> 1-Year Comprehensive Rotational Training</li>
                  <li><strong>Service Bond:</strong> ₹2 Lakhs + 12% interest p.a. for 3 years</li>
                  <li><strong>Post-Training Grade:</strong> Absorbed as Assistant Manager (E1)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/60 to-teal-50/60 border border-emerald-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-900 bg-emerald-200/80 px-2 py-0.5 rounded">
                    Assistant Officer (AO)
                  </span>
                  <span className="text-xs font-bold text-emerald-700">32 Vacancies</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  <li><strong>Pay Scale:</strong> ₹40,000-3%-₹1,36,000</li>
                  <li><strong>Approximate CTC:</strong> ₹16.09 Lakhs Per Annum</li>
                  <li><strong>Age Limit (UR):</strong> 18 – 32 Years</li>
                  <li><strong>Prior Experience:</strong> Mandatory (1 to 4 years based on degree/diploma)</li>
                  <li><strong>Selection Stage:</strong> 100% Purely CBT Written Merit (NO Interview!)</li>
                  <li><strong>Training:</strong> Direct field posting after brief orientation</li>
                  <li><strong>Service Bond:</strong> Standard enterprise service terms</li>
                  <li><strong>Posting:</strong> CONCOR Terminals, CFS, ICDs, and Ports nationwide</li>
                </ul>
              </div>
            </div>
          </div>

          {/* COMPLETE OFFICIAL VACANCY TABLE WITH FILTER */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Official Post-Wise & Category-Wise Vacancy Table
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Employment Notification No. 05/2026 • 12 Post Streams (77 Total Posts)
                </p>
              </div>

              {/* Filter Tabs & Search */}
              <div className="flex items-center gap-2">
                <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setCadreFilter('all')}
                    className={`px-3 py-1 rounded-md transition ${cadreFilter === 'all' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-600'}`}
                  >
                    All ({CONCOR_TOTALS.grandTotal})
                  </button>
                  <button
                    onClick={() => setCadreFilter('MT')}
                    className={`px-3 py-1 rounded-md transition ${cadreFilter === 'MT' ? 'bg-white shadow-xs text-blue-700' : 'text-slate-600'}`}
                  >
                    MT ({CONCOR_TOTALS.mtTotal})
                  </button>
                  <button
                    onClick={() => setCadreFilter('AO')}
                    className={`px-3 py-1 rounded-md transition ${cadreFilter === 'AO' ? 'bg-white shadow-xs text-emerald-700' : 'text-slate-600'}`}
                  >
                    AO ({CONCOR_TOTALS.aoTotal})
                  </button>
                </div>
              </div>
            </div>

            {/* Note on MT/FA/CS */}
            <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong>Official Note on MT/FA/CS:</strong> As per notification, the 1 vacancy for{' '}
                <em>Management Trainee (Accounts)/Compliance [MT/FA/CS]</em> is included within the 9 posts of{' '}
                <em>Management Trainee (Accounts) [MT/FA]</em>. It is not double-counted. PwBD and ESM are horizontal
                reservations included within total posts.
              </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3 border-r border-slate-200">Post Code</th>
                    <th className="p-3 border-r border-slate-200">Name of Post</th>
                    <th className="p-3 border-r border-slate-200 text-center">Pay Scale</th>
                    <th className="p-3 border-r border-slate-200 text-center">SC</th>
                    <th className="p-3 border-r border-slate-200 text-center">ST</th>
                    <th className="p-3 border-r border-slate-200 text-center">OBC</th>
                    <th className="p-3 border-r border-slate-200 text-center">EWS</th>
                    <th className="p-3 border-r border-slate-200 text-center">UR</th>
                    <th className="p-3 border-r border-slate-200 text-center font-extrabold bg-slate-100">Total</th>
                    <th className="p-3 border-r border-slate-200 text-center">PwBD</th>
                    <th className="p-3 text-center">ESM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredVacancies.map((v) => (
                    <tr key={v.postCode} className="hover:bg-slate-50 transition">
                      <td className="p-3 font-bold text-blue-700 border-r border-slate-200 whitespace-nowrap">
                        {v.postCode}
                      </td>
                      <td className="p-3 font-medium text-slate-900 border-r border-slate-200">
                        {v.name}
                        {v.note && <span className="block text-[10px] text-slate-500 mt-0.5">*{v.note}</span>}
                      </td>
                      <td className="p-3 text-center border-r border-slate-200 text-[11px] whitespace-nowrap text-slate-600">
                        {v.payScale}
                      </td>
                      <td className="p-3 text-center border-r border-slate-200 font-semibold">{v.sc || '-'}</td>
                      <td className="p-3 text-center border-r border-slate-200 font-semibold">
                        {v.st ? `${v.st}${v.postCode === 'MT/FA' ? ' (BL)' : ''}` : '-'}
                      </td>
                      <td className="p-3 text-center border-r border-slate-200 font-semibold">
                        {v.obc ? `${v.obc}${v.postCode === 'MT/MIS' ? ' (BL)' : ''}` : '-'}
                      </td>
                      <td className="p-3 text-center border-r border-slate-200 font-semibold">{v.ews || '-'}</td>
                      <td className="p-3 text-center border-r border-slate-200 font-semibold">{v.ur || '-'}</td>
                      <td className="p-3 text-center border-r border-slate-200 font-extrabold bg-blue-50/50 text-blue-950">
                        {v.total}
                      </td>
                      <td className="p-3 text-center border-r border-slate-200 text-slate-500 font-semibold">
                        {v.pwbd || '-'}
                      </td>
                      <td className="p-3 text-center text-slate-500 font-semibold">{v.esm || '-'}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-100 font-extrabold text-slate-900 border-t-2 border-slate-300">
                  <tr>
                    <td colSpan={3} className="p-3 text-right uppercase border-r border-slate-300">
                      Grand Total Vacancies:
                    </td>
                    <td className="p-3 text-center border-r border-slate-300">{CONCOR_TOTALS.grandSc}</td>
                    <td className="p-3 text-center border-r border-slate-300">{CONCOR_TOTALS.grandSt}</td>
                    <td className="p-3 text-center border-r border-slate-300">{CONCOR_TOTALS.grandObc}</td>
                    <td className="p-3 text-center border-r border-slate-300">{CONCOR_TOTALS.grandEws}</td>
                    <td className="p-3 text-center border-r border-slate-300">{CONCOR_TOTALS.grandUr}</td>
                    <td className="p-3 text-center border-r border-slate-300 text-blue-700 text-sm">
                      {CONCOR_TOTALS.grandTotal}
                    </td>
                    <td className="p-3 text-center border-r border-slate-300 text-purple-700">
                      {CONCOR_TOTALS.grandPwbd}
                    </td>
                    <td className="p-3 text-center text-emerald-700">{CONCOR_TOTALS.grandEsm}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              BL = Backlog reservation post. PwBD = Persons with Benchmark Disabilities. ESM = Ex-Servicemen. Horizontal
              reservations are accommodated within the parent vertical category quotas.
            </p>
          </div>

          {/* CBT EXAM PATTERN & SCHEME TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileCheck className="w-5 h-5 text-blue-600" />
              <div>
                <h2 className="text-base font-bold text-slate-900">Official CBT Scheme & Examination Pattern</h2>
                <p className="text-xs text-slate-500">Clause 5 Scheme of Examination for MT & AO Posts</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 font-medium block">Questions / Marks</span>
                <span className="text-lg font-black text-slate-900">100 Qs / 100 M</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 font-medium block">Total Duration</span>
                <span className="text-lg font-black text-slate-900">90 Minutes</span>
                <span className="text-[10px] text-purple-600 block">(120m for Scribe)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 font-medium block">Answer Options</span>
                <span className="text-lg font-black text-slate-900">5 Options</span>
                <span className="text-[10px] text-slate-500 block">MCQ Format</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="text-[11px] text-slate-500 font-medium block">Negative Marking</span>
                <span className="text-lg font-black text-rose-600">-0.25 Mark</span>
                <span className="text-[10px] text-rose-500 block">1/4th Deduction</span>
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3 border-r border-slate-200 text-center">SN</th>
                    <th className="p-3 border-r border-slate-200">Name of the Test (Subject Section)</th>
                    <th className="p-3 border-r border-slate-200 text-center">No. of Questions</th>
                    <th className="p-3 border-r border-slate-200 text-center">Maximum Marks</th>
                    <th className="p-3 text-center">Duration & Guidelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 text-center font-bold border-r border-slate-200">1</td>
                    <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                      Professional Knowledge (Domain / Discipline Specific)
                    </td>
                    <td className="p-3 text-center font-bold border-r border-slate-200 text-blue-700">50</td>
                    <td className="p-3 text-center font-bold border-r border-slate-200 text-blue-700">50</td>
                    <td rowSpan={5} className="p-3 text-center text-xs bg-slate-50/50 align-middle">
                      <div className="font-extrabold text-slate-900">Total 90 Minutes</div>
                      <div className="text-[11px] text-purple-700 font-semibold mt-1">
                        (120 Minutes for eligible PwBD candidates with Scribe)
                      </div>
                      <div className="text-[10px] text-slate-500 mt-2">
                        Bilingual in English & Hindi. English version prevails in case of ambiguity.
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 text-center font-bold border-r border-slate-200">2</td>
                    <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                      English Language
                    </td>
                    <td className="p-3 text-center font-bold border-r border-slate-200">10</td>
                    <td className="p-3 text-center font-bold border-r border-slate-200">10</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 text-center font-bold border-r border-slate-200">3</td>
                    <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                      Reasoning
                    </td>
                    <td className="p-3 text-center font-bold border-r border-slate-200">10</td>
                    <td className="p-3 text-center font-bold border-r border-slate-200">10</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 text-center font-bold border-r border-slate-200">4</td>
                    <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                      Quantitative Aptitude
                    </td>
                    <td className="p-3 text-center font-bold border-r border-slate-200">15</td>
                    <td className="p-3 text-center font-bold border-r border-slate-200">15</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 text-center font-bold border-r border-slate-200">5</td>
                    <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                      General Knowledge
                    </td>
                    <td className="p-3 text-center font-bold border-r border-slate-200">15</td>
                    <td className="p-3 text-center font-bold border-r border-slate-200">15</td>
                  </tr>
                </tbody>
                <tfoot className="bg-slate-100 font-extrabold border-t-2 border-slate-300">
                  <tr>
                    <td colSpan={2} className="p-3 text-right uppercase border-r border-slate-300">
                      Total Test Scheme:
                    </td>
                    <td className="p-3 text-center text-blue-700 text-sm border-r border-slate-300">100</td>
                    <td className="p-3 text-center text-blue-700 text-sm border-r border-slate-300">100</td>
                    <td className="p-3 text-center text-rose-600 text-[11px]">
                      Penalty: 0.25 Mark for each wrong answer
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* VISUAL FLOWCHARTS: APPLICATION JOURNEY & SELECTION JOURNEY */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Layers className="w-5 h-5 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">Official Process Flowcharts & Architecture</h2>
            </div>

            {/* Application Flowchart */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1. Online Application Process Flowchart
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center text-xs">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto mb-1 text-[10px]">1</span>
                  <span className="font-bold text-slate-800 block text-[11px]">Official Notice</span>
                  <span className="text-[10px] text-slate-500">Read Advt 05/2026</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto mb-1 text-[10px]">2</span>
                  <span className="font-bold text-slate-800 block text-[11px]">Check Eligibility</span>
                  <span className="text-[10px] text-slate-500">Age & Qualification</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto mb-1 text-[10px]">3</span>
                  <span className="font-bold text-slate-800 block text-[11px]">DigiALM Register</span>
                  <span className="text-[10px] text-slate-500">Email & Mobile ID</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto mb-1 text-[10px]">4</span>
                  <span className="font-bold text-slate-800 block text-[11px]">Upload Details</span>
                  <span className="text-[10px] text-slate-500">Photo, Sign, Certs</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto mb-1 text-[10px]">5</span>
                  <span className="font-bold text-slate-800 block text-[11px]">Pay Online Fee</span>
                  <span className="text-[10px] text-slate-500">₹750/₹500 or Exempt</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto mb-1 text-[10px]">6</span>
                  <span className="font-bold text-slate-800 block text-[11px]">Final Submit</span>
                  <span className="text-[10px] text-slate-500">Review all details</span>
                </div>
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 font-bold flex items-center justify-center mx-auto mb-1 text-[10px]">7</span>
                  <span className="font-bold text-emerald-900 block text-[11px]">Save PDF</span>
                  <span className="text-[10px] text-emerald-700">Download Form</span>
                </div>
              </div>
            </div>

            {/* Selection Flowchart */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                <Award className="w-4 h-4 text-indigo-600" /> 2. Selection Process Flowcharts (MT vs AO)
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* MT Selection Flow */}
                <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 space-y-2 text-xs">
                  <span className="font-extrabold text-blue-900 block uppercase">
                    Management Trainee (MT) Journey:
                  </span>
                  <div className="space-y-1 text-slate-700">
                    <div className="p-2 bg-white rounded border border-blue-100">1. Online CBT (100 Qs / 100 Marks, 90 Mins)</div>
                    <div className="p-2 bg-white rounded border border-blue-100">2. Group Discussion (GD) and/or Personal Interview</div>
                    <div className="p-2 bg-white rounded border border-blue-100">3. Document Verification (DV) with Caste & NOC</div>
                    <div className="p-2 bg-white rounded border border-blue-100">4. Pre-Employment Medical Fitness</div>
                    <div className="p-2 bg-white rounded border border-blue-100">5. ₹2L + 12% Interest Service Bond Execution</div>
                    <div className="p-2 bg-emerald-50 text-emerald-900 font-bold rounded border border-emerald-200">
                      6. 1-Year Training → Absorption as Assistant Manager (E1)
                    </div>
                  </div>
                </div>

                {/* AO Selection Flow */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4 space-y-2 text-xs">
                  <span className="font-extrabold text-emerald-900 block uppercase">
                    Assistant Officer (AO) Journey:
                  </span>
                  <div className="space-y-1 text-slate-700">
                    <div className="p-2 bg-white rounded border border-emerald-100">1. Online CBT (100 Qs / 100 Marks, 90 Mins)</div>
                    <div className="p-2 bg-emerald-100/70 text-emerald-950 font-bold rounded border border-emerald-300">
                      2. Direct Merit List Compiled Purely on CBT Scores (NO GD / NO Interview!)
                    </div>
                    <div className="p-2 bg-white rounded border border-emerald-100">3. Original Document Verification (DV) & Work Exp Check</div>
                    <div className="p-2 bg-white rounded border border-emerald-100">4. Pre-Employment Medical Fitness</div>
                    <div className="p-2 bg-emerald-50 text-emerald-900 font-bold rounded border border-emerald-200">
                      5. Direct Appointment as Assistant Officer (₹40,000–₹1,36,000)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OFFICIAL NUMERICAL CHARTS / DATA VISUALIZATIONS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Percent className="w-5 h-5 text-indigo-600" />
              <div>
                <h2 className="text-base font-bold text-slate-900">Official Numerical Data Visualizations</h2>
                <p className="text-xs text-slate-500">Distribution of Vacancies, Test Weightages, and Remuneration</p>
              </div>
            </div>

            {/* Visual Bar 1: CBT Section Weightage */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>CBT Section-Wise Question Weightage (100 Marks)</span>
                <span className="text-blue-700">Professional Knowledge: 50%</span>
              </div>
              <div className="h-6 w-full bg-slate-100 rounded-lg overflow-hidden flex text-[10px] font-extrabold text-white text-center leading-6">
                <div style={{ width: '50%' }} className="bg-blue-600 truncate" title="Professional Knowledge 50 Qs">
                  Domain (50Q)
                </div>
                <div style={{ width: '15%' }} className="bg-emerald-600 truncate" title="Quantitative Aptitude 15 Qs">
                  Quant (15Q)
                </div>
                <div style={{ width: '15%' }} className="bg-amber-500 truncate" title="General Knowledge 15 Qs">
                  GK (15Q)
                </div>
                <div style={{ width: '10%' }} className="bg-purple-600 truncate" title="English Language 10 Qs">
                  Eng (10Q)
                </div>
                <div style={{ width: '10%' }} className="bg-indigo-600 truncate" title="Reasoning 10 Qs">
                  Reas (10Q)
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-600 pt-1">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-blue-600"></span> Professional (50)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-600"></span> Quant (15)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-500"></span> GK (15)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-purple-600"></span> English (10)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-indigo-600"></span> Reasoning (10)</span>
              </div>
            </div>

            {/* Visual Bar 2: Cadre Vacancy Share */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Cadre-Wise Vacancy Share (77 Posts)</span>
                <span className="text-slate-600">MT: 58.4% • AO: 41.6%</span>
              </div>
              <div className="h-6 w-full bg-slate-100 rounded-lg overflow-hidden flex text-[10px] font-extrabold text-white text-center leading-6">
                <div style={{ width: '58.4%' }} className="bg-blue-700" title="Management Trainee 45 Posts">
                  Management Trainee (45 Posts)
                </div>
                <div style={{ width: '41.6%' }} className="bg-teal-600" title="Assistant Officer 32 Posts">
                  Assistant Officer (32 Posts)
                </div>
              </div>
            </div>

            {/* Visual Bar 3: Social Category Reservation Share */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Category Reservation Breakdown (77 Posts)</span>
                <span className="text-slate-600">UR: 37 | OBC: 19 | SC: 12 | ST: 6 | EWS: 3</span>
              </div>
              <div className="h-6 w-full bg-slate-100 rounded-lg overflow-hidden flex text-[10px] font-extrabold text-white text-center leading-6">
                <div style={{ width: '48%' }} className="bg-slate-700" title="UR: 37 Posts">UR (37)</div>
                <div style={{ width: '25%' }} className="bg-amber-600" title="OBC: 19 Posts">OBC (19)</div>
                <div style={{ width: '15.5%' }} className="bg-blue-600" title="SC: 12 Posts">SC (12)</div>
                <div style={{ width: '7.5%' }} className="bg-emerald-600" title="ST: 6 Posts">ST (6)</div>
                <div style={{ width: '4%' }} className="bg-purple-600" title="EWS: 3 Posts">EWS (3)</div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE WORKING TOOLS SUITE */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                CONCOR Recruitment Interactive Tools & Eligibility Checkers
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Accurate, official-compliant calculators to verify qualifications, age, experience, fees, and CBT score.
              </p>
            </div>

            {/* TOOL 1: AGE ELIGIBILITY CHECKER */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <UserCheck className="w-5 h-5 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  1. Age Eligibility Checker (Reckoned as on 31 August 2026)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Target Cadre</label>
                  <select
                    value={targetCadre}
                    onChange={(e) => setTargetCadre(e.target.value as 'MT' | 'AO')}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  >
                    <option value="MT">Management Trainee (18–28 Yrs UR)</option>
                    <option value="AO">Assistant Officer (18–32 Yrs UR)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Candidate Category</label>
                  <select
                    value={candidateCategory}
                    onChange={(e) => setCandidateCategory(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                  >
                    <option value="UR">General / Unreserved (UR)</option>
                    <option value="OBC">OBC-NCL (+3 Years)</option>
                    <option value="SC">Scheduled Caste (SC) (+5 Years)</option>
                    <option value="ST">Scheduled Tribe (ST) (+5 Years)</option>
                    <option value="PwBD">PwBD (+10 Years)</option>
                    <option value="ESM">Ex-Servicemen (+3 Yrs + Service)</option>
                    <option value="Departmental">Departmental (+5 Years)</option>
                  </select>
                </div>

                {candidateCategory === 'ESM' ? (
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Military Service (Years)</label>
                    <input
                      type="number"
                      min={1}
                      max={35}
                      value={esmServiceYears}
                      onChange={(e) => setEsmServiceYears(Number(e.target.value))}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Date of Birth</label>
                    <div className="grid grid-cols-3 gap-1">
                      <input
                        type="number"
                        placeholder="DD"
                        min={1}
                        max={31}
                        value={birthDay}
                        onChange={(e) => setBirthDay(Number(e.target.value))}
                        className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-center"
                      />
                      <input
                        type="number"
                        placeholder="MM"
                        min={1}
                        max={12}
                        value={birthMonth}
                        onChange={(e) => setBirthMonth(Number(e.target.value))}
                        className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-center"
                      />
                      <input
                        type="number"
                        placeholder="YYYY"
                        min={1970}
                        max={2015}
                        value={birthYear}
                        onChange={(e) => setBirthYear(Number(e.target.value))}
                        className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-center font-bold"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  ageResults.isEligible
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/80 border-rose-200 text-rose-950'
                }`}
              >
                {ageResults.isEligible ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="text-xs space-y-1">
                  <div className="font-extrabold text-sm flex items-center gap-2">
                    <span>{ageResults.isEligible ? 'AGE ELIGIBLE' : 'AGE INELIGIBLE'}</span>
                    <span className="font-normal text-xs opacity-90">({ageResults.exactAge} as on 31.08.2026)</span>
                  </div>
                  <p>{ageResults.reason}</p>
                  <p className="text-[11px] opacity-75">
                    Permissible Age Range: 18 to {ageResults.allowedMax} Years (Base Max: {ageResults.baseMax} Yrs +{' '}
                    {ageResults.relaxation} Yrs relaxation, absolute cap 50 Years).
                  </p>
                </div>
              </div>
            </div>

            {/* TOOL 2: EXPERIENCE ELIGIBILITY CHECKER (FOR AO POSTS) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  2. Assistant Officer (AO) Experience Eligibility Checker
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Select AO Stream</label>
                  <select
                    value={selectedAoPost}
                    onChange={(e) => setSelectedAoPost(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                  >
                    <option value="AO/CO">AO (Commercial & Operations)</option>
                    <option value="AO/FA">AO (Accounts)</option>
                    <option value="AO/TH">AO (Technical)</option>
                    <option value="AO/MIS">AO (MIS)</option>
                    <option value="AO/CE">AO (Civil)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Qualification Category</label>
                  <select
                    value={hasSpecialDiplomas ? 'special' : 'standard'}
                    onChange={(e) => setHasSpecialDiplomas(e.target.value === 'special')}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                  >
                    <option value="standard">Standard Degree / Diploma</option>
                    <option value="special">Higher / Special Degree (IRT, CA-Inter, B.Tech)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Your Total Experience (Years)</label>
                  <input
                    type="number"
                    min={0}
                    max={30}
                    step={0.5}
                    value={userExpYears}
                    onChange={(e) => setUserExpYears(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                  />
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  aoExpResult.isEligible
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/80 border-rose-200 text-rose-950'
                }`}
              >
                {aoExpResult.isEligible ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="text-xs space-y-1">
                  <div className="font-extrabold text-sm">{aoExpResult.statusText}</div>
                  <p>{aoExpResult.desc}</p>
                </div>
              </div>
            </div>

            {/* TOOL 3: APPLICATION FEE CALCULATOR */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <DollarSign className="w-5 h-5 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">3. Application Fee Calculator</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Select Post Cadre</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFeeCadre('MT')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                        feeCadre === 'MT'
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      Management Trainee (MT)
                    </button>
                    <button
                      onClick={() => setFeeCadre('AO')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                        feeCadre === 'AO'
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      Assistant Officer (AO)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Select Category</label>
                  <select
                    value={feeCategory}
                    onChange={(e) => setFeeCategory(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                  >
                    <option value="UR">General / Unreserved (UR)</option>
                    <option value="OBC">Other Backward Classes (OBC)</option>
                    <option value="EWS">Economically Weaker Section (EWS)</option>
                    <option value="SC">Scheduled Caste (SC) [Exempted]</option>
                    <option value="ST">Scheduled Tribe (ST) [Exempted]</option>
                    <option value="PwBD">Persons with Benchmark Disabilities [Exempted]</option>
                    <option value="ESM">Ex-Servicemen [Exempted]</option>
                  </select>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-center justify-between ${
                  feeResult.isFree ? 'bg-emerald-50 border-emerald-200' : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-slate-900 block">Payable Application Fee</span>
                  <span className="text-slate-600">{feeResult.gstNotice}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-slate-900">{feeResult.amount}</span>
                  <span className="text-[10px] text-slate-500 block">Online Mode Only</span>
                </div>
              </div>
            </div>

            {/* TOOL 4: CBT SCORE & NEGATIVE MARKING CALCULATOR */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Percent className="w-5 h-5 text-purple-600" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    4. CBT Score & Negative Marking Calculator (100 Questions)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    +1.0 Mark for Correct • -0.25 Mark for Wrong • 0 for Unattempted
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Correct Answers (+1.0 Mark):</span>
                    <span className="font-bold text-emerald-700">{cbtScoreResults.safeCorrect} / 100</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={calcCorrect}
                    onChange={(e) => setCalcCorrect(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Wrong Answers (-0.25 Mark Penalty):</span>
                    <span className="font-bold text-rose-600">{cbtScoreResults.safeWrong} / 100</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100 - cbtScoreResults.safeCorrect}
                    value={calcWrong}
                    onChange={(e) => setCalcWrong(Number(e.target.value))}
                    className="w-full accent-rose-600 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[11px] text-slate-500 block">Gross Score</span>
                  <span className="text-base font-black text-slate-900">+{cbtScoreResults.grossScore}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[11px] text-slate-500 block">Penalty (-0.25)</span>
                  <span className="text-base font-black text-rose-600">-{cbtScoreResults.penalty}</span>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <span className="text-[11px] text-blue-800 font-bold block">Net CBT Score</span>
                  <span className="text-lg font-black text-blue-900">{cbtScoreResults.netMarks} / 100</span>
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span className="text-[11px] text-emerald-800 font-bold block">Accuracy %</span>
                  <span className="text-lg font-black text-emerald-900">{cbtScoreResults.accuracy}%</span>
                </div>
              </div>
            </div>

            {/* TOOL 5: INTERACTIVE DOCUMENT CHECKLIST */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-900">5. Document Verification Readiness Checklist</h3>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { id: 'doc1', label: 'Class 10th / Matriculation Certificate (DOB proof)' },
                  { id: 'doc2', label: 'Qualifying Degree / Diploma Marksheets & Final Degree Certificate' },
                  { id: 'doc3', label: 'CA / CS / ICWA Professional Membership Certificate (for Accounts posts)' },
                  { id: 'doc4', label: 'OBC-NCL / EWS Certificate (must not be older than 1 year at DV)' },
                  { id: 'doc5', label: 'Work Experience Certificates & Relieving Letters (mandatory for AO)' },
                  { id: 'doc6', label: 'No Objection Certificate (NOC) from present Govt/PSU employer' },
                  { id: 'doc7', label: 'Original Photo ID (Aadhaar / PAN / Passport / Driving License)' }
                ].map((doc) => (
                  <label
                    key={doc.id}
                    className="flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl cursor-pointer transition border border-slate-200"
                  >
                    <input
                      type="checkbox"
                      checked={checkedDocs[doc.id]}
                      onChange={() => toggleDoc(doc.id)}
                      className="w-4 h-4 rounded text-blue-600 accent-blue-600"
                    />
                    <span className={checkedDocs[doc.id] ? 'text-slate-900 font-medium' : 'text-slate-500'}>
                      {doc.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* DYNAMIC 50-SECTION MASTER ACCORDION ENGINE */}
          <Accordion
            sections={sections}
            title="Complete 50-Section Recruitment Information & Guidelines"
            defaultOpenFirst={true}
          />

          {/* OFFICIAL HIGHLIGHTED LINKS TABLE */}
          <div className="bg-amber-50/70 border-2 border-amber-300 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-200 pb-3">
              <ExternalLink className="w-5 h-5 text-amber-800" />
              <h2 className="text-base font-extrabold text-amber-950 uppercase tracking-wide">
                Important Official Links (Advt No. 05/2026)
              </h2>
            </div>

            <div className="overflow-x-auto border border-amber-200 rounded-xl bg-white">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-amber-100/60 text-amber-950 font-bold border-b border-amber-200 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3 border-r border-amber-200">Official Resource / Service</th>
                    <th className="p-3 border-r border-amber-200">Status</th>
                    <th className="p-3 text-right">Direct Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100">
                  <tr className="hover:bg-amber-50/50 transition">
                    <td className="p-3 font-bold text-slate-900 border-r border-amber-200">
                      Apply Online (DigiALM Application Portal)
                    </td>
                    <td className="p-3 border-r border-amber-200">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        Active Now
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <a
                        href={applyOnlineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 underline"
                      >
                        Click Here <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-amber-50/50 transition">
                    <td className="p-3 font-bold text-slate-900 border-r border-amber-200">
                      Official Employment Notification PDF (05/2026)
                    </td>
                    <td className="p-3 border-r border-amber-200">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                        Available (PDF)
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <a
                        href={notificationPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 underline"
                      >
                        Download PDF <Download className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-amber-50/50 transition">
                    <td className="p-3 font-bold text-slate-900 border-r border-amber-200">
                      CONCOR Career & Recruitment Section
                    </td>
                    <td className="p-3 border-r border-amber-200">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px]">
                        Official Portal
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <a
                        href="https://www.concorindia.co.in/recruitment-notice?lang=hi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 underline"
                      >
                        Visit Portal <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-amber-50/50 transition">
                    <td className="p-3 font-bold text-slate-900 border-r border-amber-200">
                      CONCOR Official Homepage
                    </td>
                    <td className="p-3 border-r border-amber-200">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px]">
                        Live
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <a
                        href={officialPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 underline"
                      >
                        concorindia.co.in <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-amber-50/50 transition">
                    <td className="p-3 font-bold text-slate-900 border-r border-amber-200">
                      Official Candidate Helpdesk Support
                    </td>
                    <td className="p-3 border-r border-amber-200">
                      <span className="text-[11px] text-slate-600">Toll-Free 9 AM to 6 PM</span>
                    </td>
                    <td className="p-3 text-right font-bold text-slate-900">
                      Tel: 9594491568
                    </td>
                  </tr>
                </tbody>
              </table>
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
                {/* CONCOR Organization Card */}
                <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-blue-950 font-bold text-xs uppercase tracking-wide">
                    <Container className="w-4 h-4 text-blue-700" />
                    <span>CONCOR Corporate Information</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <p><strong>Organization:</strong> Container Corporation of India Ltd</p>
                    <p><strong>Classification:</strong> Navratna CPSE (Govt of India)</p>
                    <p><strong>Ministry:</strong> Ministry of Railways</p>
                    <p><strong>Registered Office:</strong> C-3, Mathura Road, Opp. Apollo Hospital, New Delhi - 110076</p>
                    <p><strong>Employment Notification:</strong> 05/2026</p>
                    <p><strong>Toll-Free Helpdesk:</strong> 9594491568 (9 AM - 6 PM)</p>
                  </div>
                </div>

                {/* Quick Post Code Lookup */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
                    CONCOR 12 Post Codes
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">MT/CO (25)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">AO/CO (20)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">MT/FA (09)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">AO/FA (02)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">MT/TH (04)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">AO/TH (04)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">MT/MIS (03)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">AO/MIS (02)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">MT/CE (02)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">AO/CE (04)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-blue-700">MT/P&A (02)</span>
                    <span className="p-1.5 bg-white border border-slate-200 rounded font-mono font-bold text-emerald-700">Total: 77</span>
                  </div>
                </div>

                {/* Related PSU & Govt Jobs */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
                    Related PSU & Railway Jobs
                  </span>
                  <div className="space-y-2 text-xs">
                    <a
                      href="#/job-detail/rrb-group-d-level-1-recruitment-2026"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate?.('job-detail', 'rrb-group-d-level-1-recruitment-2026');
                      }}
                      className="block p-2.5 bg-white border border-slate-200 hover:border-blue-400 rounded-lg transition"
                    >
                      <span className="font-bold text-slate-900 block">RRB Railway Group D 2026</span>
                      <span className="text-[11px] text-blue-700 font-semibold">Indian Railways Recruitment</span>
                    </a>

                    <a
                      href="#/job-detail/nic-scientific-technical-assistant-recruitment-2026"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate?.('job-detail', 'nic-scientific-technical-assistant-recruitment-2026');
                      }}
                      className="block p-2.5 bg-white border border-slate-200 hover:border-blue-400 rounded-lg transition"
                    >
                      <span className="font-bold text-slate-900 block">NIC Scientific & Technical Assistant</span>
                      <span className="text-[11px] text-emerald-700 font-semibold">Central Govt IT Posts</span>
                    </a>

                    <a
                      href="#/job-detail/bank-of-india-so-recruitment-2026"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate?.('job-detail', 'bank-of-india-so-recruitment-2026');
                      }}
                      className="block p-2.5 bg-white border border-slate-200 hover:border-blue-400 rounded-lg transition"
                    >
                      <span className="font-bold text-slate-900 block">Bank of India SO Recruitment 2026</span>
                      <span className="text-[11px] text-purple-700 font-semibold">Specialist Officer Cadre</span>
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
