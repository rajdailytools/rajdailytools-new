import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate, getCountdown } from '../utils/dateUtils';
import {
  IdCard,
  Download,
  MapPin,
  ExternalLink,
  Calendar,
  Layers,
  FileText,
  Clock,
  Sparkles,
  Wrench,
  Image,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  ArrowRight,
  Send,
  Sprout
} from 'lucide-react';

interface MpesbAdmitCardPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const MpesbAdmitCardPage: React.FC<MpesbAdmitCardPageProps> = ({
  exam,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(exam.examDate, 'exam');

  const officialAdmitCardUrl =
    exam.admitCardLink ||
    'https://esb.mp.gov.in/tacs/tac_2026/Group2_SG1_Tac26/default_tac.htm';
  const officialWebsiteUrl = exam.officialWebsite || 'https://esb.mp.gov.in/';
  const officialNotificationUrl =
    exam.officialNotification ||
    'https://esb.mp.gov.in/Rulebooks/RB_2026/Group2_SG1_RuleBook_2026_02072026.pdf';
  const examDateNoticeUrl =
    'https://esb.mp.gov.in/Advertisement/ADV_2026/Group2_SG1_2026_ExamDateExtended_31072026.pdf';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Admit Card', page: 'admit-card' },
          { label: 'MPESB Krishi Vistar Adhikari Admit Card 2026' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* 5-Stage Recruitment Lifecycle Navbar */}
      <LifecycleNavbar
        currentExamSlug={exam.slug}
        activeTab="admit-card"
        exam={exam}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Exam Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-3xl flex items-center justify-center shrink-0 shadow-xs">
              {exam.logoIcon || '🌾'}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Group-2 Sub Group-1
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Admit Card Released
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  {exam.category}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-display tracking-tight">
                {exam.examName}
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Rural Agriculture Extension Officer (समूह-2 उप समूह-1) &bull; 2,784 Vacancies
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {exam.organization} &bull; Chayan Bhawan, Bhopal, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Alert Box */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <IdCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-emerald-900 tracking-wide">
                Official Hall Ticket Active &bull; MPESB Test Admit Card (TAC) Portal
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                Written Examination Scheduled on 17 September 2026 (2 Shifts)
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Admit Card released on 10 September 2026 (Available Now). Enter your 13-digit Application Number &amp; Date of Birth to download.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-white text-emerald-900 border border-emerald-200 shadow-2xs">
              Exam: {countdown.text}
            </span>
          </div>
        </div>

        {/* 6 Quick Information Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Total Posts</div>
            <div className="text-base font-extrabold text-blue-700 mt-0.5 font-display">
              {exam.totalVacancy}
            </div>
            <div className="text-[10px] text-slate-500">1,126 UR &bull; 776 OBC</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Admit Card Date</div>
            <div className="text-sm font-bold text-purple-700 mt-0.5">
              10 Sept 2026
            </div>
            <div className="text-[10px] font-bold text-emerald-600">Available Now</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Exam Date</div>
            <div className="text-sm font-bold text-rose-700 mt-0.5">
              17 Sept 2026
            </div>
            <div className="text-[10px] text-slate-500">Across 11 MP Cities</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Age Limit</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              18 to 40 / 45 Yrs
            </div>
            <div className="text-[10px] text-slate-500">As on 01-01-2026</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Application Fee</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              ₹500 / ₹250
            </div>
            <div className="text-[10px] text-slate-500">SC/ST/OBC/PwD: ₹250</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Pay Scale</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              Level-6 (7th PRC)
            </div>
            <div className="text-[10px] text-slate-500">₹25,300 – ₹80,500</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* PRIMARY ADMIT CARD BUTTON */}
          <a
            href={officialAdmitCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Admit Card (Direct TAC Link)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* EXAM DATE NOTICE */}
          <a
            href={examDateNoticeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-rose-200 shadow-2xs"
          >
            <Calendar className="w-4 h-4 text-rose-600" />
            <span>Exam Date Notice PDF</span>
            <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
          </a>

          {/* OFFICIAL NOTIFICATION RULEBOOK PDF */}
          <a
            href={officialNotificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-blue-200 shadow-2xs"
          >
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Official Rulebook PDF</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
          </a>

          {/* MPESB OFFICIAL WEBSITE */}
          <a
            href={officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <Building2 className="w-4 h-4 text-slate-600" />
            <span>MPESB Official Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* JOIN TELEGRAM */}
          <a
            href="https://t.me/Educator4ll"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span>Join Telegram</span>
          </a>
        </div>
      </div>

      {/* Social & Web Share Bar */}
      <ShareButtons title="MPESB Krishi Vistar Adhikari Admit Card 2026" />

      {/* Main Grid: Content (8 Cols) & Sidebar (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
          {/* Step-by-Step How to Check & Download Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <IdCard className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  How To Check &amp; Download MPESB Krishi Vistar Adhikari Admit Card 2026
                </h3>
                <p className="text-xs text-slate-500">
                  Follow these verified step-by-step instructions to download your Test Admit Card (TAC)
                </p>
              </div>
            </div>

            <ol className="list-decimal pl-5 text-xs sm:text-sm space-y-2.5 text-slate-700 leading-relaxed font-medium">
              <li>
                Open the official MPESB direct TAC portal:{' '}
                <a
                  href="https://esb.mp.gov.in/tacs/tac_2026/Group2_SG1_Tac26/default_tac.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-bold"
                >
                  https://esb.mp.gov.in/tacs/tac_2026/Group2_SG1_Tac26/default_tac.htm
                </a>{' '}
                or visit the MPESB homepage (
                <a
                  href="https://esb.mp.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-bold"
                >
                  https://esb.mp.gov.in/
                </a>
                ) and click on <strong>Admit Card – Group-2 (Sub Group-1) Krishi Vistar Adhikari Recruitment Test - 2026</strong>.
              </li>
              <li>
                Review the advisory instructions and COVID-19/exam-hall advisory on screen, then close the advisory prompt.
              </li>
              <li>
                In the <strong>Application No.</strong> box, type your 13-digit online application number accurately.
              </li>
              <li>
                In the <strong>Date of Birth</strong> field, enter your DOB in <span class="font-mono font-bold">DD/MM/YYYY</span> format.
              </li>
              <li>
                Select your paper/subject from the dropdown:{' '}
                <strong>Krishi Vistar Adhikari (Agriculture / Horticulture)</strong>.
              </li>
              <li>
                Enter the candidate identification parameter:{' '}
                <strong>First 2 letters of Mother’s Name</strong> (in English capital letters) +{' '}
                <strong>Last 4 digits of Aadhaar Number</strong>.
              </li>
              <li>
                Solve the security mathematical calculation captcha shown on screen.
              </li>
              <li>
                Click on the blue <strong>SEARCH</strong> button.
              </li>
              <li>
                Your MPESB Test Admit Card (TAC) will open displaying your Roll Number, Exam Date (17 September 2026), Reporting Time, Shift timing, and Test Center Address.
              </li>
              <li>
                Click the <strong>Print</strong> button. Save the PDF and take <strong>two clear color or black-and-white printouts</strong> on white A4 paper.
              </li>
            </ol>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Mandatory Exam Hall Requirement:</strong> Bring the printed Test Admit Card (TAC), one original Photo Identity Proof (Aadhaar Card, Voter ID, PAN Card, Driving License, or Passport), 2 passport photos, and a black ballpoint pen. Ensure your Aadhaar biometric is unlocked before exam day.
              </div>
            </div>
          </div>

          {/* Selection Process Roadmap */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-200">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Recruitment &amp; Selection Process Roadmap
                </h3>
                <p className="text-xs text-slate-500">
                  Comprehensive 5-stage selection workflow for Krishi Vistar Adhikari 2026
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Phase 1</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Application</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Closed 17.07.2026</div>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 shadow-2xs">
                <div className="text-[10px] font-bold text-emerald-600 uppercase">Phase 2</div>
                <div className="text-xs font-black text-emerald-900 mt-1">TAC Hall Ticket</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-0.5">Active (10.09.2026)</div>
              </div>

              <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 shadow-2xs">
                <div className="text-[10px] font-bold text-rose-600 uppercase">Phase 3</div>
                <div className="text-xs font-black text-rose-900 mt-1">Written CBT (200 M)</div>
                <div className="text-[10px] text-rose-700 font-bold mt-0.5">17 September 2026</div>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-[10px] font-bold text-amber-600 uppercase">Phase 4</div>
                <div className="text-xs font-bold text-amber-900 mt-1">Key Objection</div>
                <div className="text-[10px] text-amber-700 mt-0.5">3-Day Window (₹150/Q)</div>
              </div>

              <div className="p-3.5 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-[10px] font-bold text-purple-600 uppercase">Phase 5</div>
                <div className="text-xs font-bold text-purple-900 mt-1">Merit &amp; Joining</div>
                <div className="text-[10px] text-purple-700 mt-0.5">87% Main + 13% Prov</div>
              </div>
            </div>
          </div>

          {/* DEDICATED WORKING DOCUMENT & EXAM TOOLS SECTION */}
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
                    Client-side utilities calibrated for MPESB document specifications.
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 self-start sm:self-center">
                <Sparkles className="w-3 h-3" />
                <span>100% Client-Side Private</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Tool 1: Photo Resizer */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                      <Image className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      MPESB White BG &bull; JPG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Photo Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Resize and format passport photos with white background and name/date template per MPESB norms.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `photo-resizer?exam=${exam.slug}`);
                    } else {
                      window.location.hash = `#/tools/photo-resizer?exam=${exam.slug}`;
                    }
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-200 hover:border-blue-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Resize Photograph</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Tool 2: Signature Resizer */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                      <FileText className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                      Clear Ink &bull; JPG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Signature Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Crop and resize running-hand signature on white paper for MPESB online verification.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `signature-resizer?exam=${exam.slug}`);
                    } else {
                      window.location.hash = `#/tools/signature-resizer?exam=${exam.slug}`;
                    }
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white text-purple-700 border border-purple-200 hover:border-purple-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Resize Signature</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Tool 3: Age Calculator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                      <Calculator className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Cut-off: 01.01.2026
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Age Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Calculate your exact age as on 01 January 2026 against UR Male (40 yrs) &amp; Reserved/Women (45 yrs) limits.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `age-calculator?exam=${exam.slug}`);
                    } else {
                      window.location.hash = `#/tools/age-calculator?exam=${exam.slug}`;
                    }
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Check Exact Age</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Tool 4: Eligibility Calculator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      B.Sc Agriculture / Horticulture
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Eligibility Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Verify graduation in Agriculture or Horticulture, MP Rojgar portal live status, and category reservations.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `eligibility-calculator?exam=${exam.slug}`);
                    } else {
                      window.location.hash = `#/tools/eligibility-calculator?exam=${exam.slug}`;
                    }
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-amber-600 hover:text-white text-amber-900 border border-amber-200 hover:border-amber-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Check Qualification</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* 50-SECTION EXPANDABLE TABLE SYSTEM (EXPAND ALL / COLLAPSE ALL) */}
          <Accordion
            sections={exam.allInformation}
            title="Complete 50-Section Exam Information & Expandable Tables"
            defaultOpenFirst={true}
          />

          {/* Frequently Asked Questions (FAQ) */}
          {exam.faq && exam.faq.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 font-display mb-4">
                Frequently Asked Questions ({exam.faq.length})
              </h3>
              <div className="space-y-3">
                {exam.faq.map((f, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-start gap-2">
                      <span className="text-emerald-600 font-black">Q{idx + 1}.</span>
                      <span>{f.q}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar Column */}
        <div className="lg:col-span-4">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
