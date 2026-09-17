import React, { useState, useMemo } from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate, getCountdown } from '../utils/dateUtils';
import {
  UKSSSC_SCALER_VACANCIES,
  UKSSSC_SCALER_HORIZONTAL_TOTALS,
  UKSSSC_SCALER_PST_STANDARDS,
  UKSSSC_SCALER_PET_STANDARDS,
  generateUkssscScaler50Sections,
  UKSSSC_SCALER_2026_EXAM
} from '../data/ukssscScalerData';
import {
  Trees,
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
  Activity,
  Footprints,
  Eye,
  Check,
  X,
  Share2,
  Copy,
  GraduationCap,
  FileSpreadsheet,
  Compass,
  MessageCircle,
  Printer
} from 'lucide-react';

interface UkssscGroupCScalerPageProps {
  exam?: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

type ExamTab = 'job' | 'admit-card' | 'answer-key' | 'result' | 'cut-off' | 'mock-test';

export const UkssscGroupCScalerPage: React.FC<UkssscGroupCScalerPageProps> = ({
  exam = UKSSSC_SCALER_2026_EXAM,
  onNavigate,
  depth = 0
}) => {
  // Top Navigation Tab State
  const [activeTab, setActiveTab] = useState<ExamTab>('job');
  const [copyToast, setCopyToast] = useState<boolean>(false);

  // Physical Eligibility Checker State
  const [pstGender, setPstGender] = useState<'male' | 'female'>('male');
  const [isHillOrSt, setIsHillOrSt] = useState<boolean>(false);
  const [userHeight, setUserHeight] = useState<number>(165);
  const [userChestExp, setUserChestExp] = useState<number>(5.5);
  const [userVisionDefect, setUserVisionDefect] = useState<number>(1.5);

  // Age Calculator State
  const [birthYear, setBirthYear] = useState<number>(2000);
  const [birthMonth, setBirthMonth] = useState<number>(5);
  const [birthDay, setBirthDay] = useState<number>(15);
  const [userCategory, setUserCategory] = useState<'UR' | 'OBC' | 'SC' | 'ST' | 'PwBD' | 'DFF'>('UR');

  // Interactive Score Estimator State (100 Questions, 1 mark each, 0.25 negative)
  const [correctQuestions, setCorrectQuestions] = useState<number>(75);
  const [wrongQuestions, setWrongQuestions] = useState<number>(12);

  const scoreCalculation = useMemo(() => {
    const attempted = correctQuestions + wrongQuestions;
    const unattempted = Math.max(0, 100 - attempted);
    const positiveMarks = correctQuestions * 1.0;
    const negativeMarks = wrongQuestions * 0.25;
    const netMarks = Math.max(0, positiveMarks - negativeMarks);
    const isQualifying =
      userCategory === 'SC' || userCategory === 'ST'
        ? netMarks >= 35
        : netMarks >= 45;
    return {
      attempted,
      unattempted,
      positiveMarks,
      negativeMarks,
      netMarks: Number(netMarks.toFixed(2)),
      percentage: Number(((netMarks / 100) * 100).toFixed(2)),
      isQualifying
    };
  }, [correctQuestions, wrongQuestions, userCategory]);

  const physicalEligibilityResult = useMemo(() => {
    const minHeight =
      pstGender === 'male'
        ? isHillOrSt
          ? 152
          : 163
        : isHillOrSt
        ? 145
        : 150;

    const heightPass = userHeight >= minHeight;
    const chestPass = pstGender === 'male' ? userChestExp >= 5.0 : true;
    const visionPass = Math.abs(userVisionDefect) <= 4.0;
    const overallPstPass = heightPass && chestPass && visionPass;

    return { minHeight, heightPass, chestPass, visionPass, overallPstPass };
  }, [pstGender, isHillOrSt, userHeight, userChestExp, userVisionDefect]);

  const calculatedAge = useMemo(() => {
    // Cut-off date: 01 July 2026
    const cutoffDate = new Date(2026, 6, 1); // July 1, 2026
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    let years = cutoffDate.getFullYear() - birthDate.getFullYear();
    let months = cutoffDate.getMonth() - birthDate.getMonth();
    let days = cutoffDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += 30;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const maxAgeAllowed =
      userCategory === 'SC' || userCategory === 'ST' || userCategory === 'OBC' || userCategory === 'DFF'
        ? 33
        : userCategory === 'PwBD'
        ? 38
        : 28;

    const isEligible = years >= 18 && (years < maxAgeAllowed || (years === maxAgeAllowed && months === 0 && days === 0));

    return { years, months, days, maxAgeAllowed, isEligible };
  }, [birthYear, birthMonth, birthDay, userCategory]);

  const countdown = getCountdown(exam.applicationLastDate, 'deadline');
  const sections = useMemo(() => generateUkssscScaler50Sections(), []);

  const applyOnlineUrl = exam.applyLink || 'https://sssc.uk.gov.in/';
  const officialWebsiteUrl = exam.officialWebsite || 'https://sssc.uk.gov.in/';
  const officialNotificationUrl =
    exam.officialNotification ||
    'https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/09/202609151072597881.pdf';

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText('https://rajdailytools.in/uksssc-group-c-scaler-recruitment-2026.html');
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Toast Notification */}
      {copyToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 text-xs font-bold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Link copied to clipboard!</span>
        </div>
      )}

      {/* TOP EXAM LIFECYCLE NAVIGATION TABS (Horizontal Scrollable on Mobile) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('job')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black shrink-0 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'job'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <span>💼 Latest Job</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              activeTab === 'job' ? 'bg-emerald-700 text-white' : 'bg-emerald-100 text-emerald-800'
            }`}>
              Apply Open
            </span>
          </button>

          <button
            onClick={() => setActiveTab('admit-card')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black shrink-0 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'admit-card'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <span>🪪 Admit Card</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              activeTab === 'admit-card' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'
            }`}>
              Coming Soon
            </span>
          </button>

          <button
            onClick={() => setActiveTab('answer-key')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black shrink-0 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'answer-key'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <span>📋 Answer Key</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              activeTab === 'answer-key' ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800'
            }`}>
              Notify Soon
            </span>
          </button>

          <button
            onClick={() => setActiveTab('result')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black shrink-0 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'result'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <span>🏆 Result</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              activeTab === 'result' ? 'bg-amber-700 text-white' : 'bg-amber-100 text-amber-800'
            }`}>
              Notify Soon
            </span>
          </button>

          <button
            onClick={() => setActiveTab('cut-off')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black shrink-0 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'cut-off'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <span>📊 Cut Off</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              activeTab === 'cut-off' ? 'bg-rose-700 text-white' : 'bg-rose-100 text-rose-800'
            }`}>
              Notify Soon
            </span>
          </button>

          <button
            onClick={() => setActiveTab('mock-test')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black shrink-0 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'mock-test'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <span>📝 Mock Test</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              activeTab === 'mock-test' ? 'bg-teal-700 text-white' : 'bg-teal-100 text-teal-800'
            }`}>
              Practice Now
            </span>
          </button>
        </div>
      </div>

      {/* DEDICATED LIFECYCLE STAGE BANNER (When non-job tab is active) */}
      {activeTab !== 'job' && (
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-xs animate-fadeIn">
          {activeTab === 'admit-card' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800">
                    Stage 1 Physical Hall Ticket
                  </span>
                  <h2 className="text-xl font-black text-slate-900 mt-1">
                    UKSSSC Group C Scaler PST &amp; PET Admit Card 2026
                  </h2>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full self-start sm:self-center">
                  Status: Not Released / To Be Updated
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">PST/PET Start Date</span>
                  <strong className="text-slate-900 text-sm">19 November 2026</strong>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-blue-700 block">Expected Release</span>
                  <strong className="text-blue-950 text-sm">1st / 2nd Week of Nov 2026</strong>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Login Requirement</span>
                  <strong className="text-slate-900 text-sm">Mobile No. / OTR &amp; DOB</strong>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As per official procedure, UKSSSC will upload the Physical Standard Test (PST) and Physical Efficiency Test (PET) Admit Cards approximately 7 to 10 days before the commencement of physical events scheduled from <strong>19 November 2026</strong> onwards. Candidates must carry the printed admit card, valid government photo ID (Aadhaar, Voter ID, DL), and 2 passport photos to the physical venue.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl"
                >
                  <span>Check UKSSSC Portal (sssc.uk.gov.in)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveTab('job')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
                >
                  Return to Full Recruitment Overview
                </button>
              </div>
            </div>
          )}

          {activeTab === 'answer-key' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800">
                    Post-Examination Key
                  </span>
                  <h2 className="text-xl font-black text-slate-900 mt-1">
                    UKSSSC Scaler 2026 Official Answer Key &amp; Question Challenge
                  </h2>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-purple-100 text-purple-900 border border-purple-300 rounded-full self-start sm:self-center">
                  Status: Notify Soon (Post Exam)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Exam Mode</span>
                  <strong className="text-slate-900 text-sm">Offline OMR (Triplicate Sheet)</strong>
                </div>
                <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                  <span className="text-purple-700 block">Objection Fee</span>
                  <strong className="text-purple-950 text-sm">₹50 Per Question Challenged</strong>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Candidate Carbon Copy</span>
                  <strong className="text-slate-900 text-sm">Retained by Candidate</strong>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The provisional answer key will be released on <strong>sssc.uk.gov.in</strong> within 5 to 7 days following the completion of the 100-mark written test. Candidates can verify their triplicate carbon copy answers against the master answer key. Objections can be submitted online with authenticated standard textbook proofs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl"
                >
                  <span>Visit Commission Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveTab('job')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
                >
                  Return to Full Recruitment Overview
                </button>
              </div>
            </div>
          )}

          {activeTab === 'result' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800">
                    Official Merit List
                  </span>
                  <h2 className="text-xl font-black text-slate-900 mt-1">
                    UKSSSC Scaler 2026 Written Exam Result &amp; Merit List
                  </h2>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full self-start sm:self-center">
                  Status: Notify Soon (Post Exam)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Selection Merit Basis</span>
                  <strong className="text-slate-900 text-sm">100 Marks Written Test Only</strong>
                </div>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <span className="text-amber-700 block">PST / PET Role</span>
                  <strong className="text-amber-950 text-sm">Strictly Qualifying (No Merit Marks)</strong>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Next Stage</span>
                  <strong className="text-slate-900 text-sm">Document Verification &amp; Medical</strong>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The final merit list will be prepared strictly on the basis of marks scored in the 100-mark objective written examination among candidates who qualify the PST and PET. Shortlisted candidates will be invited for Document Verification at UKSSSC office, Raipur, Dehradun.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setActiveTab('job')}
                  className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                >
                  Return to Full Recruitment Overview
                </button>
              </div>
            </div>
          )}

          {activeTab === 'cut-off' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-800">
                    Statutory Qualifying Benchmarks
                  </span>
                  <h2 className="text-xl font-black text-slate-900 mt-1">
                    UKSSSC Scaler 2026 Official Cut Off &amp; Qualifying Marks
                  </h2>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-rose-100 text-rose-900 border border-rose-300 rounded-full self-start sm:self-center">
                  Status: Notify Soon (With Result)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 font-bold block mb-1">General / OBC / EWS Minimum Qualifying:</span>
                  <strong className="text-slate-900 text-base">45% (45.00 / 100 Marks)</strong>
                  <p className="text-slate-600 mt-1">Mandatory minimum under Section 11 of UKSSSC Service Rules.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 font-bold block mb-1">SC / ST Minimum Qualifying:</span>
                  <strong className="text-slate-900 text-base">35% (35.00 / 100 Marks)</strong>
                  <p className="text-slate-600 mt-1">Candidates scoring below 35% are disqualified from selection.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setActiveTab('job')}
                  className="px-4 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl"
                >
                  Return to Full Recruitment Overview
                </button>
              </div>
            </div>
          )}

          {activeTab === 'mock-test' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-teal-100 text-teal-800">
                    Online Practice Portal
                  </span>
                  <h2 className="text-xl font-black text-slate-900 mt-1">
                    UKSSSC Scaler 2026 Online Mock Test (Science &amp; Maths)
                  </h2>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full self-start sm:self-center">
                  Status: Available / Practice Online
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Total Questions</span>
                  <strong className="text-slate-900 text-sm">100 MCQs</strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Total Marks</span>
                  <strong className="text-slate-900 text-sm">100 Marks</strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Test Duration</span>
                  <strong className="text-slate-900 text-sm">120 Minutes</strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Negative Marking</span>
                  <strong className="text-rose-700 text-sm">-0.25 / Wrong</strong>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Test your preparation on actual UKSSSC pattern: 40 Qs Intermediate Science, 25 Qs Mathematics, 20 Qs Uttarakhand Forestry &amp; GK, 15 Qs Hindi &amp; Reasoning. Experience real exam timing and instant detailed score breakdown!
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => onNavigate && onNavigate('tool-detail', 'test-series?exam=uksssc-group-c-scaler-recruitment-2026')}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Launch Free Practice Mock Test</span>
                </button>
                <button
                  onClick={() => setActiveTab('job')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
                >
                  Return to Full Recruitment Overview
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Category Breadcrumb Navigation (Exact Chain) */}
      <Breadcrumb
        items={[
          { label: 'Latest Jobs', page: 'latest-jobs' },
          { label: 'Uttarakhand Jobs' },
          { label: 'UKSSSC' },
          { label: 'Group C Jobs' },
          { label: 'UKSSSC Group C Scaler Recruitment 2026' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Exam & Recruitment Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-3xl flex items-center justify-center shrink-0 shadow-xs">
              🌲
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Apply Open
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  Advt No. 82/2026
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Uttarakhand Jobs
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  UKSSSC Group C
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-mono">
                  200 Vacancies &bull; Level-02
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
                UKSSSC Group C Scaler Recruitment 2026
              </h1>
              <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">
                Uttarakhand Subordinate Service Selection Commission (UKSSSC) / Uttarakhand Forest Development Corporation (उत्तराखण्ड वन विकास निगम)
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Direct recruitment for 200 posts of Scaler (स्केलर). Pay Scale Level-02 (₹19,900–₹63,200). Minimum qualification: Intermediate (10+2) with Science or Mathematics.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-col items-end gap-2 shrink-0">
            <a
              href={applyOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>Apply Online Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={officialNotificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download Notification PDF
            </a>
          </div>
        </div>

        {/* 7 Key Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-6">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Total Posts</span>
            <span className="text-base sm:text-lg font-black text-slate-900 mt-0.5 block">200 Posts</span>
            <span className="text-[11px] text-emerald-700 font-semibold">Van Vikas Nigam</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Apply Start</span>
            <span className="text-base sm:text-lg font-black text-slate-900 mt-0.5 block">22 Sep 2026</span>
            <span className="text-[11px] text-slate-600 font-semibold">Online Gateway</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
            <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Last Date</span>
            <span className="text-base sm:text-lg font-black text-amber-900 mt-0.5 block">22 Oct 2026</span>
            <span className="text-[11px] text-amber-800 font-semibold">{countdown.text}</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Correction</span>
            <span className="text-base sm:text-lg font-black text-slate-900 mt-0.5 block">26–27 Oct 2026</span>
            <span className="text-[11px] text-purple-700 font-semibold">Online Edit</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">PST / PET</span>
            <span className="text-base sm:text-lg font-black text-emerald-900 mt-0.5 block">19 Nov 2026</span>
            <span className="text-[11px] text-emerald-700 font-semibold">Qualifying Stage</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Admit Card</span>
            <span className="text-xs sm:text-sm font-black text-slate-800 mt-1 block">Not Released</span>
            <span className="text-[10px] text-slate-500">Expected Nov 2026</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Exam Date</span>
            <span className="text-xs sm:text-sm font-black text-slate-800 mt-1 block">To Be Updated</span>
            <span className="text-[10px] text-slate-500">Post Physicals</span>
          </div>
        </div>

        {/* MAIN ACTION BUTTONS BAR */}
        <div className="pt-6 border-t border-slate-100 mt-6 flex flex-wrap items-center gap-2.5">
          <a
            href={applyOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5"
          >
            <span>Apply Online</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={officialNotificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Official Notification</span>
          </a>
          <a
            href={officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5"
          >
            <span>Official Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setActiveTab('admit-card')}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Admit Card</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-blue-100 text-blue-800 rounded">Soon</span>
          </button>
          <button
            onClick={() => setActiveTab('answer-key')}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Answer Key</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-purple-100 text-purple-800 rounded">Soon</span>
          </button>
          <button
            onClick={() => setActiveTab('result')}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Result</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded">Soon</span>
          </button>
          <button
            onClick={() => setActiveTab('cut-off')}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Cut Off</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-rose-100 text-rose-800 rounded">Soon</span>
          </button>
          <button
            onClick={() => setActiveTab('mock-test')}
            className="px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold text-xs rounded-xl border border-teal-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Mock Test</span>
          </button>
          <a
            href="https://t.me/rajdailytools"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Join Telegram</span>
          </a>
        </div>
      </div>

      {/* QUICK TOOLS STRIP (RajDailyTools Direct Utilities) */}
      <div className="bg-linear-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <h2 className="text-sm sm:text-base font-black text-slate-900">
              Candidate Preparation &amp; Application Utilities
            </h2>
          </div>
          <span className="text-[11px] font-bold text-emerald-800">
            Free Official Exam Tools
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'image-resizer?exam=uksssc-group-c-scaler-recruitment-2026')}
            className="p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xs text-left transition-all cursor-pointer"
          >
            <span className="text-lg block mb-1">📸</span>
            <span className="text-xs font-bold text-slate-900 block">Photo Resizer</span>
            <span className="text-[10px] text-slate-500">20 KB – 50 KB</span>
          </button>
          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'image-resizer?exam=uksssc-group-c-scaler-recruitment-2026')}
            className="p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xs text-left transition-all cursor-pointer"
          >
            <span className="text-lg block mb-1">✍️</span>
            <span className="text-xs font-bold text-slate-900 block">Sign Resizer</span>
            <span className="text-[10px] text-slate-500">10 KB – 20 KB</span>
          </button>
          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'pdf-tools?exam=uksssc-group-c-scaler-recruitment-2026')}
            className="p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xs text-left transition-all cursor-pointer"
          >
            <span className="text-lg block mb-1">📄</span>
            <span className="text-xs font-bold text-slate-900 block">PDF Compressor</span>
            <span className="text-[10px] text-slate-500">&lt; 200 KB Proofs</span>
          </button>
          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'age-calculator?exam=uksssc-group-c-scaler-recruitment-2026')}
            className="p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xs text-left transition-all cursor-pointer"
          >
            <span className="text-lg block mb-1">🎂</span>
            <span className="text-xs font-bold text-slate-900 block">Age Calculator</span>
            <span className="text-[10px] text-slate-500">01.07.2026 Cut-off</span>
          </button>
          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'eligibility-calculator?exam=uksssc-group-c-scaler-recruitment-2026')}
            className="p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xs text-left transition-all cursor-pointer"
          >
            <span className="text-lg block mb-1">🏃</span>
            <span className="text-xs font-bold text-slate-900 block">PST Checker</span>
            <span className="text-[10px] text-slate-500">Height &amp; Run Test</span>
          </button>
          <button
            onClick={() => onNavigate && onNavigate('tool-detail', 'test-series?exam=uksssc-group-c-scaler-recruitment-2026')}
            className="p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xs text-left transition-all cursor-pointer"
          >
            <span className="text-lg block mb-1">📝</span>
            <span className="text-xs font-bold text-slate-900 block">Mock Test</span>
            <span className="text-[10px] text-teal-700 font-semibold">100 Qs Practice</span>
          </button>
        </div>
      </div>

      {/* Share Buttons Strip with Copy Link */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4 text-slate-600" />
          <span className="text-xs font-bold text-slate-800">Share UKSSSC Scaler Recruitment:</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent('UKSSSC Group C Scaler Recruitment 2026 – 200 Posts Apply Online: https://rajdailytools.in/uksssc-group-c-scaler-recruitment-2026.html')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-lg border border-emerald-200 flex items-center gap-1.5"
          >
            <span>WhatsApp</span>
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent('https://rajdailytools.in/uksssc-group-c-scaler-recruitment-2026.html')}&text=${encodeURIComponent('UKSSSC Group C Scaler Recruitment 2026 (200 Posts)')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-xs rounded-lg border border-sky-200 flex items-center gap-1.5"
          >
            <span>Telegram</span>
          </a>
          <button
            onClick={handleCopyLink}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">

          {/* VISUAL 1: ELIGIBILITY FLOWCHART */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-5">
              <Compass className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-black text-slate-900">
                1. Official Eligibility Determination Flowchart
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              Verify your eligibility step-by-step through the 5 mandatory criteria before filling out the online application form on sssc.uk.gov.in:
            </p>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/40 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Education Requirement: Intermediate with Science OR Mathematics</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Must have passed Class 12th from a recognized Board in India or Uttarakhand institution with Science or Mathematics subject.</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl border border-purple-200 bg-purple-50/40 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Age Benchmark: 18 to 28 Years as on 01 July 2026</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Born between 02 July 1998 and 01 July 2008. Age relaxation: +5 years for UK SC/ST/OBC/DFF (up to 33 yrs) and +10 years for UK PwBD (up to 38 yrs).</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/40 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Uttarakhand Domicile / Employment Exchange Registration</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Section 09 Mandate: Must be registered in an Employment Office of Uttarakhand, hold Uttarakhand Domicile, or have passed 10th &amp; 12th in Uttarakhand.</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">4</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Physical Standards (PST) Benchmark</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Height: Male 163 cm (152 cm Hill/ST) with 5 cm expansion; Female 150 cm (145 cm Hill/ST). Vision defect not exceeding +/- 4.00 Diopters.</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/50 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">5</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-teal-950">Eligible to Apply: Proceed to UKSSSC Portal</h3>
                  <p className="text-xs text-teal-800 mt-0.5">Submit the online application and pay fee before the final deadline of <strong>22 October 2026</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL 2: APPLICATION PROCESS FLOWCHART */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-5">
              <FileCheck className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-black text-slate-900">
                2. Step-by-Step Online Application Flowchart
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Step 01</span>
                <h3 className="font-bold text-slate-900">Visit sssc.uk.gov.in</h3>
                <p className="text-slate-600">Open the official portal and select 'Advt 82/2026 – Scaler (Van Vikas Nigam) Recruitment'.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Step 02</span>
                <h3 className="font-bold text-slate-900">OTR Registration / Login</h3>
                <p className="text-slate-600">Complete One Time Registration (OTR) with mobile OTP, email verification, and Aadhaar card details.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Step 03</span>
                <h3 className="font-bold text-slate-900">Fill Application Details</h3>
                <p className="text-slate-600">Enter personal bio-data, 10+2 Intermediate Science/Maths marks, hill area status, and category claims.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Step 04</span>
                <h3 className="font-bold text-slate-900">Upload Photo, Sign &amp; Thumb</h3>
                <p className="text-slate-600">Upload passport photograph (20–50 KB), clear signature (10–20 KB), and left thumb impression (10–20 KB).</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Step 05</span>
                <h3 className="font-bold text-slate-900">Online Fee Payment</h3>
                <p className="text-slate-600">Pay application fee online (₹300 UR/OBC, ₹150 SC/ST/EWS/PwBD, ₹0 UK Orphans) via Net Banking, Card, or UPI.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-1">
                <span className="text-[10px] font-bold text-emerald-700 uppercase">Step 06 &amp; 07</span>
                <h3 className="font-bold text-emerald-950">Final Submit &amp; Print 2 Copies</h3>
                <p className="text-emerald-800">Verify all entries and print at least 2 hard copies. Mandatory requirement during Document Verification!</p>
              </div>
            </div>
          </div>

          {/* VISUAL 3: SELECTION ARCHITECTURE FLOWCHART */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-5">
              <Layers className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-black text-slate-900">
                3. Official 2-Stage Selection Process Flowchart
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
              As per Section 03 of the official UKSSSC notification, the selection process is conducted strictly in <strong>02 distinct stages</strong>. Physical tests are purely qualifying; merit is drafted purely on written test marks:
            </p>

            {/* Vertical Flowchart Steps */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 1: Online Application &amp; OTR Registration
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Submit online application on sssc.uk.gov.in between 22 Sep &amp; 22 Oct 2026 with Aadhaar authentication and educational proof (Intermediate with Science or Maths).
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-white text-blue-700 rounded-lg border border-blue-200 shrink-0 self-start sm:self-center">
                  Mandatory Entry
                </span>
              </div>

              <div className="flex justify-center text-slate-400">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 2: Physical Standard (PST) &amp; Physical Efficiency Test (PET)
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Commencing from <strong>19 November 2026</strong>. Height/Chest measurements + 25km (Male) / 14km (Female) Run in 4 hours, followed by Shot Put, Long Jump, High Jump. Strictly <strong>Qualifying (अहर्कारी)</strong>.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-300 shrink-0 self-start sm:self-center">
                  Qualifying Only
                </span>
              </div>

              <div className="flex justify-center text-slate-400">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 3: Objective Type Written Competitive Examination
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      100 Questions, 100 Marks, 2 Hours Offline OMR test based on Intermediate Science and Mathematics syllabus. +1 Mark correct, -0.25 Mark negative.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-purple-100 text-purple-800 rounded-lg border border-purple-300 shrink-0 self-start sm:self-center">
                  Determines Merit
                </span>
              </div>

              <div className="flex justify-center text-slate-400">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Step 4: Document Verification (DV) &amp; Medical Fitness
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Verification of original 10th/12th marksheets, employment exchange registration, domicile, and caste certificates. Vision defect test (≤ +/- 4.00 D) and CMO fitness.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-lg border border-amber-300 shrink-0 self-start sm:self-center">
                  Final Appointment
                </span>
              </div>
            </div>
          </div>

          {/* VISUAL 2: Complete Category-wise Vacancy & Horizontal Reservation Tables */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-black text-slate-900">
                  Complete Category-Wise &amp; Horizontal Vacancies (200 Posts)
                </h2>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                Official PDF Page 2
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Exact reservation figures as notified in UKSSSC Advt No. 82/2026 for Scaler post (Post Code 548/623/82/2026):
            </p>

            {/* Responsive Table 1: Category Breakdown */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Reservation Category</th>
                    <th className="p-3 text-center">Category Code</th>
                    <th className="p-3 text-center">Total Posts</th>
                    <th className="p-3 text-center bg-pink-50 text-pink-900">UK Women (30%)</th>
                    <th className="p-3 text-center">DFF (2%)</th>
                    <th className="p-3 text-center">Ex-SM (5%)</th>
                    <th className="p-3 text-center">Orphan (5%)</th>
                    <th className="p-3 text-center">Sports (4%)</th>
                    <th className="p-3 text-center">State Movement (10%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {UKSSSC_SCALER_VACANCIES.map((v, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-bold text-slate-900">{v.category}</td>
                      <td className="p-3 text-center font-mono font-semibold">{v.code}</td>
                      <td className="p-3 text-center font-black text-slate-900 text-sm">{v.totalPosts}</td>
                      <td className="p-3 text-center font-bold text-pink-800 bg-pink-50/50">{v.women}</td>
                      <td className="p-3 text-center">{v.dff || '–'}</td>
                      <td className="p-3 text-center font-semibold">{v.exServicemen || '–'}</td>
                      <td className="p-3 text-center">{v.orphan || '–'}</td>
                      <td className="p-3 text-center">{v.skilledSports || '–'}</td>
                      <td className="p-3 text-center font-semibold text-blue-800">{v.stateMovement}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100/90 font-black text-slate-900">
                    <td className="p-3 uppercase">Total Vacancy</td>
                    <td className="p-3 text-center font-mono">–</td>
                    <td className="p-3 text-center text-base text-emerald-800">200</td>
                    <td className="p-3 text-center text-sm text-pink-900 bg-pink-100/70">60</td>
                    <td className="p-3 text-center text-sm">04</td>
                    <td className="p-3 text-center text-sm">10</td>
                    <td className="p-3 text-center text-sm">10</td>
                    <td className="p-3 text-center text-sm">08</td>
                    <td className="p-3 text-center text-sm text-blue-900">20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PwBD / Divyang Breakdown Box */}
            <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-2 mb-6">
              <h3 className="text-sm font-bold text-indigo-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                PwBD / Divyang (दिव्यांग) Horizontal Reservation: 08 Posts Total
              </h3>
              <p className="text-xs text-slate-700">
                Official post distribution among approved benchmark disability categories:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {UKSSSC_SCALER_HORIZONTAL_TOTALS.divyangBreakdown.map((div, idx) => (
                  <div key={idx} className="bg-white p-2.5 rounded-lg border border-indigo-100 text-xs">
                    <span className="font-bold text-indigo-900 block">{div.subCategory}</span>
                    <span className="text-slate-600 font-semibold mt-0.5 block">{div.posts} Reserved Posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vacancy Distribution Bar Chart */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Category Share Visual Breakdown</span>
                <span>UR (52.5%) | SC (19.5%) | OBC (13.5%) | EWS (10.5%) | ST (4%)</span>
              </div>
              <div className="h-4 rounded-full overflow-hidden flex shadow-inner bg-slate-100">
                <div style={{ width: '52.5%' }} className="bg-blue-600" title="UR: 105 Posts (52.5%)" />
                <div style={{ width: '19.5%' }} className="bg-emerald-600" title="SC: 39 Posts (19.5%)" />
                <div style={{ width: '13.5%' }} className="bg-amber-500" title="OBC: 27 Posts (13.5%)" />
                <div style={{ width: '10.5%' }} className="bg-purple-600" title="EWS: 21 Posts (10.5%)" />
                <div style={{ width: '4%' }} className="bg-rose-600" title="ST: 8 Posts (4.0%)" />
              </div>
              <div className="flex flex-wrap gap-4 text-[11px] font-semibold text-slate-600 pt-1">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-blue-600" /> UR: 105</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-600" /> SC: 39</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-500" /> OBC: 27</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-purple-600" /> EWS: 21</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-rose-600" /> ST: 08</span>
              </div>
            </div>
          </div>

          {/* VISUAL 3: Mandatory Physical Standards (PST) & Physical Efficiency Test (PET) Visual Cards */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-black text-slate-900">
                  Mandatory Physical Standards (PST) &amp; Efficiency Test (PET)
                </h2>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md border border-emerald-200">
                19 Nov 2026 Onwards
              </span>
            </div>

            {/* PST Measurement Cards */}
            <div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-emerald-600" />
                1. Physical Standard Test (PST - शारीरिक माप परीक्षण)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-slate-500">Male Standards</span>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Height &amp; Chest</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span>General / OBC / SC Height:</span>
                      <strong className="font-mono text-slate-900 text-sm">163 cm</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span>Hill Areas &amp; ST Height:</span>
                      <strong className="font-mono text-emerald-700 text-sm">152 cm</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Chest Expansion (फुलाव):</span>
                      <strong className="font-semibold text-slate-900">Min 5 cm Expansion</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-slate-500">Female Standards</span>
                    <span className="text-xs font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded">Height Only</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span>General / OBC / SC Height:</span>
                      <strong className="font-mono text-slate-900 text-sm">150 cm</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span>Hill Areas &amp; ST Height:</span>
                      <strong className="font-mono text-emerald-700 text-sm">145 cm</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Chest Measurement:</span>
                      <span className="text-slate-500 italic">Not Applicable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision standard callout */}
              <div className="mt-3 p-3 rounded-xl border border-amber-200 bg-amber-50/60 text-xs text-amber-900 flex items-start gap-2.5">
                <Eye className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Official Vision Standard (Section 5.vi.b):</strong> No candidate will be appointed whose defect in normal vision exceeds <strong>+/- 4.00 Diopters</strong> (सामान्य दृष्टि में +/- 4.00 डायोप्टर से अधिक दोष न हो).
                </div>
              </div>
            </div>

            {/* PET 4-Event Details */}
            <div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-emerald-600" />
                2. Physical Efficiency Test (PET - शारीरिक दक्षता परीक्षा) – 4 Mandatory Events
              </h3>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Physical Event</th>
                      <th className="p-3 text-center">Male Standard</th>
                      <th className="p-3 text-center">Female Standard</th>
                      <th className="p-3 text-center">Allowed Attempts</th>
                      <th className="p-3 text-center">Nature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {UKSSSC_SCALER_PET_STANDARDS.map((pet, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">{pet.event}</td>
                        <td className="p-3 text-center font-bold text-blue-900">{pet.maleCriteria}</td>
                        <td className="p-3 text-center font-bold text-pink-900">{pet.femaleCriteria}</td>
                        <td className="p-3 text-center text-slate-600">{pet.attempts}</td>
                        <td className="p-3 text-center font-semibold text-emerald-700">{pet.nature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-3 p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed">
                <strong>Crucial PET Sequence Mandate:</strong> The 25 km (Male) and 14 km (Female) Running is conducted first. Only candidates who successfully complete the run within the 4-hour limit are eligible to participate in Shot Put, Long Jump, and High Jump. Candidates failing the run are eliminated immediately.
              </div>
            </div>
          </div>

          {/* VISUAL 4: Interactive PST / PET Pass/Fail Checker & Age Calculator */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-black text-slate-900">
                Interactive Eligibility &amp; Physical Standards Checkers
              </h2>
            </div>

            {/* Tool 1: PST Live Verifier */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  PST Physical Fitness Checker
                </h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${physicalEligibilityResult.overallPstPass ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}`}>
                  {physicalEligibilityResult.overallPstPass ? 'ELIGIBLE (PASSED PST)' : 'INELIGIBLE (BELOW BENCHMARK)'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Gender</label>
                  <select
                    value={pstGender}
                    onChange={(e) => setPstGender(e.target.value as 'male' | 'female')}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
                  >
                    <option value="male">Male (पुरुष)</option>
                    <option value="female">Female (महिला)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Hill Region / ST Certificate</label>
                  <select
                    value={isHillOrSt ? 'yes' : 'no'}
                    onChange={(e) => setIsHillOrSt(e.target.value === 'yes')}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
                  >
                    <option value="no">No (General / Plains)</option>
                    <option value="yes">Yes (Hill Domicile / ST)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Your Height (cm)</label>
                  <input
                    type="number"
                    value={userHeight}
                    onChange={(e) => setUserHeight(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
                    placeholder="e.g. 165"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {pstGender === 'male' && (
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Chest Expansion (cm)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={userChestExp}
                      onChange={(e) => setUserChestExp(Number(e.target.value))}
                      className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
                      placeholder="Min 5 cm"
                    />
                  </div>
                )}
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Eye Vision Defect (Diopters +/-)</label>
                  <input
                    type="number"
                    step="0.25"
                    value={userVisionDefect}
                    onChange={(e) => setUserVisionDefect(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
                    placeholder="Max +/- 4.00 D"
                  />
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs flex flex-wrap gap-4">
                <span className="flex items-center gap-1.5 font-semibold">
                  Required Height: <strong>{physicalEligibilityResult.minHeight} cm</strong>
                  {physicalEligibilityResult.heightPass ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-rose-600" />}
                </span>
                {pstGender === 'male' && (
                  <span className="flex items-center gap-1.5 font-semibold">
                    Expansion: <strong>{userChestExp >= 5.0 ? '≥ 5cm (Pass)' : '< 5cm (Fail)'}</strong>
                    {physicalEligibilityResult.chestPass ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-rose-600" />}
                  </span>
                )}
                <span className="flex items-center gap-1.5 font-semibold">
                  Vision Defect: <strong>{Math.abs(userVisionDefect) <= 4.0 ? 'Within Limit' : 'Exceeds +/- 4D'}</strong>
                  {physicalEligibilityResult.visionPass ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-rose-600" />}
                </span>
              </div>
            </div>

            {/* Tool 2: Age Cut-Off Calculator (Cut-off 01 July 2026) */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  Official Age Calculator (Cut-off Date: 01 July 2026)
                </h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${calculatedAge.isEligible ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}`}>
                  {calculatedAge.isEligible ? 'AGE ELIGIBLE' : 'AGE INELIGIBLE'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Birth Day</label>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={birthDay}
                    onChange={(e) => setBirthDay(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Birth Month</label>
                  <select
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => (
                      <option key={m} value={m}>Month {m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Birth Year</label>
                  <input
                    type="number"
                    value={birthYear}
                    onChange={(e) => setBirthYear(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select
                    value={userCategory}
                    onChange={(e) => setUserCategory(e.target.value as any)}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="UR">UR / General (Max 28)</option>
                    <option value="OBC">OBC UK (Max 33)</option>
                    <option value="SC">SC UK (Max 33)</option>
                    <option value="ST">ST UK (Max 33)</option>
                    <option value="DFF">DFF UK (Max 33)</option>
                    <option value="PwBD">PwBD UK (Max 38)</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs flex items-center justify-between">
                <span>
                  Age on 01 July 2026: <strong>{calculatedAge.years} Years, {calculatedAge.months} Months, {calculatedAge.days} Days</strong>
                </span>
                <span className="text-slate-600">
                  Upper Limit: <strong>{calculatedAge.maxAgeAllowed} Years</strong>
                </span>
              </div>
            </div>

            {/* Tool 3: Score & Negative Marking Estimator */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-blue-600" />
                  Written Exam Score Estimator (+1 / -0.25 Marking)
                </h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${scoreCalculation.isQualifying ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {scoreCalculation.isQualifying ? 'Above Minimum Qualifying Marks' : 'Below Minimum Qualifying Marks'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Correct Questions (+1 each)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={correctQuestions}
                    onChange={(e) => setCorrectQuestions(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Wrong Questions (-0.25 penalty each)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={wrongQuestions}
                    onChange={(e) => setWrongQuestions(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-slate-500 block">Gross Score</span>
                  <strong className="text-slate-900">{scoreCalculation.positiveMarks} Marks</strong>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-rose-600 block">Penalty (-0.25)</span>
                  <strong className="text-rose-700">-{scoreCalculation.negativeMarks} Marks</strong>
                </div>
                <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-emerald-800 block">Net Marks</span>
                  <strong className="text-emerald-900 text-sm font-black">{scoreCalculation.netMarks} / 100</strong>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-slate-500 block">Net %</span>
                  <strong className="text-blue-900">{scoreCalculation.percentage}%</strong>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL 5: Real-Life Practical Examples (Clearly Labelled) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Info className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-black text-slate-900">
                Real-Life Explanatory Examples
              </h2>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-black uppercase text-blue-700 tracking-wider block mb-1">
                  Example 1: Age Eligibility Check
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Candidate A was born on <strong>15 August 1999</strong> and belongs to the General (Unreserved) category. On the crucial date of <strong>01 July 2026</strong>, Candidate A is 26 years, 10 months, and 16 days old. Because the general age ceiling is 28 years, Candidate A is completely eligible.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-black uppercase text-blue-700 tracking-wider block mb-1">
                  Example 2: Educational Stream Qualification
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Candidate B passed Class 12th with Physics, Chemistry, and Mathematics (PCM). Candidate C passed Class 12th with Arts (History, Geography, and Hindi). Candidate B is <strong>eligible</strong> because the rule explicitly mandates Intermediate with Science OR Mathematics. Candidate C is <strong>ineligible</strong> unless they studied Mathematics as an additional subject.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-black uppercase text-blue-700 tracking-wider block mb-1">
                  Example 3: PET Race Sequence &amp; 3 Attempts in Field Events
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Candidate D runs the 25 km endurance race and completes it in 3 hours 45 minutes (within the 4-hour limit). Candidate D then proceeds to the High Jump (1.10 m standard). In the 1st attempt, the bar falls. In the 2nd attempt, Candidate D successfully clears 1.10 m. Candidate D is declared <strong>Qualified</strong> in High Jump because up to 3 attempts are officially permitted.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-black uppercase text-blue-700 tracking-wider block mb-1">
                  Example 4: 100-Mark OMR Negative Marking Calculation
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  In the written test, Candidate E attempts 88 questions out of 100. 72 questions are correct (+72 marks), and 16 questions are incorrect (16 × 0.25 = -4 marks). Candidate E's net written score is <strong>68.00 marks</strong>. Since 68 is above the 45% qualifying benchmark (45 marks), Candidate E's score will be ranked on the final merit list.
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL 6: Written Exam Pattern & Detailed Syllabus Roadmap */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-black text-slate-900">
                  Written Examination Pattern &amp; Detailed Syllabus
                </h2>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-indigo-50 text-indigo-800 rounded-md border border-indigo-200">
                100 Marks &bull; 2 Hours
              </span>
            </div>

            {/* Pattern Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Subject / Paper Component</th>
                    <th className="p-3 text-center">Questions</th>
                    <th className="p-3 text-center">Marks</th>
                    <th className="p-3 text-center">Marking Scheme</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Intermediate Science (Physics, Chemistry, Biology)</td>
                    <td className="p-3 text-center font-bold">40</td>
                    <td className="p-3 text-center font-bold">40</td>
                    <td className="p-3 text-center text-slate-600">+1.00 Correct | -0.25 Wrong</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Intermediate Mathematics &amp; Mensuration</td>
                    <td className="p-3 text-center font-bold">25</td>
                    <td className="p-3 text-center font-bold">25</td>
                    <td className="p-3 text-center text-slate-600">+1.00 Correct | -0.25 Wrong</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Uttarakhand State GK, Geography &amp; Forestry</td>
                    <td className="p-3 text-center font-bold">20</td>
                    <td className="p-3 text-center font-bold">20</td>
                    <td className="p-3 text-center text-slate-600">+1.00 Correct | -0.25 Wrong</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">General Hindi &amp; Mental Ability / Reasoning</td>
                    <td className="p-3 text-center font-bold">15</td>
                    <td className="p-3 text-center font-bold">15</td>
                    <td className="p-3 text-center text-slate-600">+1.00 Correct | -0.25 Wrong</td>
                  </tr>
                  <tr className="bg-slate-50 font-bold text-slate-900">
                    <td className="p-3">Total Written Examination</td>
                    <td className="p-3 text-center font-black text-sm">100</td>
                    <td className="p-3 text-center font-black text-sm">100</td>
                    <td className="p-3 text-center text-emerald-700">Duration: 120 Minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Syllabus Topic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Science &amp; Environment:</h4>
                <p className="text-slate-600 leading-relaxed">
                  Newton's laws, optics, reflection, diopter vision, gravitation, thermodynamics, atomic structure, periodic table, chemical bonding, plant &amp; animal physiology, cell biology, and forest ecology.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Mathematics &amp; Mensuration:</h4>
                <p className="text-slate-600 leading-relaxed">
                  Arithmetic, algebra, quadratic equations, trigonometry, cylinder/cone/log volume (Quarter Girth Formula for timber measurement), coordinate geometry, and basic statistics.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Uttarakhand General Knowledge:</h4>
                <p className="text-slate-600 leading-relaxed">
                  History of dynasties (Katyuri, Chand, Garhwal), Uttarakhand rivers, Corbett/Rajaji National Parks, Van Panchayats, Chipko movement, state symbols, and Van Vikas Nigam background.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">General Hindi &amp; Reasoning:</h4>
                <p className="text-slate-600 leading-relaxed">
                  Varn Vichar, sandhi, samas, paryayvachi, vilom, muhavare, coding-decoding, blood relations, number series, direction sense, and non-verbal logic.
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL 7: Important Dates Timeline & Application Fee */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Calendar className="w-5 h-5 text-purple-600" />
              <h2 className="text-xl font-black text-slate-900">
                Important Dates Timeline &amp; Application Fee
              </h2>
            </div>

            {/* Timeline Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400">Published</span>
                <span className="text-sm font-bold text-slate-900 block mt-0.5">15 Sep 2026</span>
                <span className="text-[10px] text-slate-500">Official Notice</span>
              </div>
              <div className="p-3 rounded-xl border border-blue-200 bg-blue-50/60 text-center">
                <span className="text-[10px] font-bold uppercase text-blue-600">Apply Start</span>
                <span className="text-sm font-bold text-blue-900 block mt-0.5">22 Sep 2026</span>
                <span className="text-[10px] text-blue-700">Online Open</span>
              </div>
              <div className="p-3 rounded-xl border border-amber-200 bg-amber-50 text-center">
                <span className="text-[10px] font-bold uppercase text-amber-700">Last Date</span>
                <span className="text-sm font-bold text-amber-900 block mt-0.5">22 Oct 2026</span>
                <span className="text-[10px] text-amber-800 font-semibold">{countdown.text}</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400">Correction</span>
                <span className="text-sm font-bold text-slate-900 block mt-0.5">26–27 Oct 2026</span>
                <span className="text-[10px] text-slate-500">2 Days Window</span>
              </div>
              <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold uppercase text-emerald-700">PST/PET Start</span>
                <span className="text-sm font-bold text-emerald-900 block mt-0.5">19 Nov 2026</span>
                <span className="text-[10px] text-emerald-700 font-semibold">From 19.11.2026</span>
              </div>
            </div>

            {/* Fee Table */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Category-Wise Application Fee (Section 17)
              </h3>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Category</th>
                      <th className="p-3 text-center">Official Fee</th>
                      <th className="p-3">Payment Modes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Unreserved (General) / Uttarakhand OBC</td>
                      <td className="p-3 text-center font-mono font-bold text-slate-900 text-sm">₹300.00</td>
                      <td className="p-3 text-slate-600">Net Banking / Debit Card / Credit Card / UPI</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Uttarakhand SC / ST / EWS</td>
                      <td className="p-3 text-center font-mono font-bold text-slate-900 text-sm">₹150.00</td>
                      <td className="p-3 text-slate-600">Net Banking / Debit Card / Credit Card / UPI</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Uttarakhand Divyang (PwBD)</td>
                      <td className="p-3 text-center font-mono font-bold text-slate-900 text-sm">₹150.00</td>
                      <td className="p-3 text-slate-600">Net Banking / Debit Card / Credit Card / UPI</td>
                    </tr>
                    <tr className="bg-emerald-50/60 font-semibold text-emerald-950">
                      <td className="p-3">Orphan (अनाथ) Candidates of Uttarakhand</td>
                      <td className="p-3 text-center font-mono font-bold text-emerald-800 text-sm">₹0.00</td>
                      <td className="p-3 text-emerald-700 font-bold">100% Fee Exempted</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* VISUAL 8: 52 COMPREHENSIVE SECTIONS ACCORDION (With Expand All / Collapse All) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="border-b border-slate-100 pb-4 mb-4">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                Detailed Guide &bull; 52 Official Information Sections
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Complete point-by-point documentation based strictly on UKSSSC Advt 82/2026. Use the controls below to expand or collapse all sections.
              </p>
            </div>

            <Accordion
              items={sections.map((sec) => ({
                id: sec.id,
                title: sec.title,
                content: sec.content
              }))}
            />
          </div>

          {/* VISUAL 9: Important Links Yellow Highlighted Box */}
          <div className="bg-amber-50/70 border-2 border-amber-300 rounded-2xl p-6 shadow-xs">
            <h2 className="text-xl font-black text-amber-950 flex items-center gap-2 mb-2">
              <ExternalLink className="w-5 h-5 text-amber-700" />
              Official Links Directory – UKSSSC Scaler 2026
            </h2>
            <p className="text-xs sm:text-sm text-amber-900 mb-4">
              Direct official portals for online application, official notification PDF, and commission portal:
            </p>

            <div className="overflow-x-auto border border-amber-200 rounded-xl bg-white">
              <table className="w-full text-xs text-left">
                <thead className="bg-amber-100/70 text-amber-950 font-bold border-b border-amber-200">
                  <tr>
                    <th className="p-3">Official Resource</th>
                    <th className="p-3">Action / Link</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100 text-slate-700">
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Online Application Form</td>
                    <td className="p-3">
                      <a
                        href={applyOnlineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        <span>Apply Online</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                    <td className="p-3 text-emerald-700 font-semibold">Active (22 Sep – 22 Oct 2026)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Official Notification PDF (Advt 82/2026)</td>
                    <td className="p-3">
                      <a
                        href={officialNotificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Notification PDF</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Official 22-Page Rulebook</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">UKSSSC Official Website</td>
                    <td className="p-3">
                      <a
                        href={officialWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <span>sssc.uk.gov.in</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Commission Web Portal</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">PST / PET Admit Card</td>
                    <td className="p-3 text-slate-400 font-semibold">Not Released / To Be Updated</td>
                    <td className="p-3 text-amber-800 font-semibold">Expected Nov 2026</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Written Exam Date Notice</td>
                    <td className="p-3 text-slate-400 font-semibold">Not Released / To Be Updated</td>
                    <td className="p-3 text-amber-800 font-semibold">Will Be Announced Separately</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* VISUAL 10: FAQs & Schema.org Structured Data */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              Frequently Asked Questions ({exam.faq?.length || 10})
            </h2>
            <div className="space-y-3">
              {exam.faq?.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-emerald-600 font-black">Q{idx + 1}.</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Schema.org JobPosting JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'JobPosting',
                  title: 'UKSSSC Group C Scaler Recruitment 2026',
                  description:
                    'UKSSSC Scaler Recruitment 2026 – Apply online for 200 Scaler posts in Uttarakhand Van Vikas Nigam (Forest Development Corporation). Level-02 pay matrix.',
                  datePosted: '2026-09-15',
                  validThrough: '2026-10-22',
                  employmentType: 'FULL_TIME',
                  hiringOrganization: {
                    '@type': 'Organization',
                    name: 'Uttarakhand Subordinate Service Selection Commission (UKSSSC)',
                    sameAs: 'https://sssc.uk.gov.in/'
                  },
                  jobLocation: {
                    '@type': 'Place',
                    address: {
                      '@type': 'PostalAddress',
                      addressRegion: 'Uttarakhand',
                      addressCountry: 'IN'
                    }
                  },
                  baseSalary: {
                    '@type': 'MonetaryAmount',
                    currency: 'INR',
                    value: {
                      '@type': 'QuantitativeValue',
                      minValue: 19900,
                      maxValue: 63200,
                      unitText: 'MONTH'
                    }
                  }
                })
              }}
            />
          </div>

        </div>

        {/* Right Column Sticky Sidebar */}
        <div className="space-y-6">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
