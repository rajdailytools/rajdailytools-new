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
  Briefcase
} from 'lucide-react';

interface NbemsAdmitCardPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const NbemsAdmitCardPage: React.FC<NbemsAdmitCardPageProps> = ({
  exam,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(exam.examDate, 'exam');

  const officialAdmitCardUrl =
    exam.admitCardLink || 'https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html';
  const officialWebsiteUrl = exam.officialWebsite || 'https://natboard.edu.in/';
  const officialNotificationUrl =
    exam.officialNotification || 'https://natboard.edu.in/viewNotice.php?NBE=UGRseW1ZVldCdUcxbmZZWWg1ZFMxdz09';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Admit Card', page: 'admit-card' },
          { label: 'NBEMS Group A, B & C Admit Card 2026' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Lifecycle Navbar */}
      <LifecycleNavbar
        exam={exam}
        currentSection="admit-card"
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-purple-50 border border-purple-200 rounded-2xl shrink-0">
              {exam.logoIcon || '🏥'}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  {exam.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 animate-pulse">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Admit Card Status: RELEASED / AVAILABLE</span>
                </span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Advt. No. A-12011/3/2025-Estb
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
                NBEMS Group A, B &amp; C Various Posts Admit Card 2026
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                National Board of Examinations in Medical Sciences Recruitment 2026
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {exam.organization} &bull; Ministry of Health &amp; Family Welfare, Govt. of India
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Alert Box */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <IdCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-purple-900 tracking-wide">
                Official Hall Ticket Active &bull; Direct Digialm Portal Link
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                CBT Stage-I Written Exam Scheduled on 15–16 September 2026
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Login with your User ID / Application Number &amp; Password on the official TCS iON Digialm portal to print.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-white text-purple-900 border border-purple-200 shadow-2xs">
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
            <div className="text-[10px] text-slate-500">5 Cadres (A, B, C)</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Admit Card Date</div>
            <div className="text-sm font-bold text-purple-700 mt-0.5">
              01 Sept 2026
            </div>
            <div className="text-[10px] font-bold text-emerald-600">Available Now</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Exam Dates</div>
            <div className="text-sm font-bold text-rose-700 mt-0.5">
              15–16 September 2026
            </div>
            <div className="text-[10px] text-slate-500">Tuesday &amp; Wednesday</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Age Limit</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              18 - 27 / 35 Yrs
            </div>
            <div className="text-[10px] text-slate-500">As on 20-07-2026</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Application Fee</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              ₹1500 + GST
            </div>
            <div className="text-[10px] text-emerald-600 font-bold">SC/ST/PwBD/Women: ₹0</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Pay Scale</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              Level 2 to 11
            </div>
            <div className="text-[10px] text-slate-500">7th CPC Matrix</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* PRIMARY ADMIT CARD BUTTON */}
          <a
            href={officialAdmitCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-purple-700 hover:bg-purple-800 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-purple-600/30 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Admit Card (Direct Login)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* OFFICIAL NOTIFICATION PDF */}
          <a
            href={officialNotificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-blue-200 shadow-2xs"
          >
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Official Notification PDF</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
          </a>

          {/* NBEMS OFFICIAL WEBSITE */}
          <a
            href={officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <Building2 className="w-4 h-4 text-slate-600" />
            <span>NBEMS Official Website</span>
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
      <ShareButtons title="NBEMS Group A, B & C Various Posts Admit Card 2026" />

      {/* Main Grid: Content (8 Cols) & Sidebar (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
          {/* Step-by-Step How to Check & Download Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200">
                <IdCard className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  How To Download NBEMS Group A, B &amp; C Admit Card 2026
                </h3>
                <p className="text-xs text-slate-500">
                  Follow these 10 official steps to retrieve and print your hall ticket from Digialm
                </p>
              </div>
            </div>

            <ol className="list-decimal pl-5 text-xs sm:text-sm space-y-2.5 text-slate-700 leading-relaxed font-medium">
              <li>
                Click on the direct official Digialm login link: <a href="https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-bold">https://cdn3.digialm.com/EForms/configuredHtml/1815/101418/login.html</a> or visit the NBEMS website (<a href="https://natboard.edu.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-bold">https://natboard.edu.in/</a>) under <strong>Vacancy</strong>.
              </li>
              <li>
                Locate the <strong>Candidate Login</strong> box on the screen.
              </li>
              <li>
                Enter your registered <strong>User ID / Application Number</strong>.
              </li>
              <li>
                Enter your confidential <strong>Password</strong> sent to your registered mobile and email.
              </li>
              <li>
                Type the verification Captcha text correctly into the box.
              </li>
              <li>
                Click on the <strong>Login</strong> button.
              </li>
              <li>
                In the candidate dashboard, click on the <strong>Admit Card</strong> tab.
              </li>
              <li>
                Select your applied post (Deputy Director, Jr Programmer, Jr Accountant, Stenographer, or Jr Assistant) and click <strong>Download</strong>.
              </li>
              <li>
                Your <strong>NBEMS E-Admit Card 2026 PDF</strong> will be downloaded.
              </li>
              <li>
                Verify exam date, reporting time, shift, and test center address. Print <strong>two clear color copies</strong> on clean A4 paper.
              </li>
            </ol>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href={officialAdmitCardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Go to Official Admit Card Download Link</span>
              </a>
              <span className="text-[11px] text-slate-500">
                Official NBEMS Digialm Server (Secure Direct Login)
              </span>
            </div>
          </div>

          {/* Simple Exam / Selection Lifecycle Flowchart */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-200">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Recruitment &amp; Selection Process Flowchart
                </h3>
                <p className="text-xs text-slate-500">
                  5-stage roadmap from online form to two-year service bond execution
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Phase 1</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Application</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Closed 20.07.2026</div>
              </div>

              <div className="p-3.5 bg-purple-50 rounded-xl border border-purple-200 shadow-2xs">
                <div className="text-[10px] font-bold text-purple-600 uppercase">Phase 2</div>
                <div className="text-xs font-black text-purple-900 mt-1">Hall Ticket</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-0.5">Active (01.09.2026)</div>
              </div>

              <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 shadow-2xs">
                <div className="text-[10px] font-bold text-rose-600 uppercase">Phase 3</div>
                <div className="text-xs font-black text-rose-900 mt-1">Stage-I CBT</div>
                <div className="text-[10px] text-rose-700 font-bold mt-0.5">15–16 September 2026</div>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-[10px] font-bold text-amber-600 uppercase">Phase 4</div>
                <div className="text-xs font-bold text-amber-900 mt-1">Stage-II Skill Test</div>
                <div className="text-[10px] text-amber-700 mt-0.5">1:5 Merit Ratio (100 M)</div>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-[10px] font-bold text-emerald-600 uppercase">Phase 5</div>
                <div className="text-xs font-bold text-emerald-900 mt-1">DV &amp; 2-Yr Bond</div>
                <div className="text-[10px] text-emerald-700 mt-0.5">Appointment</div>
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
                    Real working document resizers and age/eligibility calculators configured for NBEMS guidelines.
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
                      ≤ 80 KB &bull; JPG / JPEG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Photo Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Crop and compress passport photographs matching NBEMS upload specifications (max 80 KB).
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
                      ≤ 50 KB &bull; JPG / JPEG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Signature Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Resize and compress your scanned signature on white paper for NBEMS portal and hall ticket matching.
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

              {/* Tool 3: Age Cut-Off Calculator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                      <Calculator className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Cut-off: 20-07-2026
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Age Cut-Off Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Check your exact age in Years, Months, and Days on the crucial cut-off date (18 - 27 / 35 Years).
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
                  <span>Calculate Official Age</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Tool 4: Eligibility Calculator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300 hover:bg-amber-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      12th / Grad / PG Med
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Eligibility Evaluator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Verify qualification matching for Deputy Director, Junior Programmer, Accountant, Steno or Junior Assistant.
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

        {/* Right Sidebar Column */}
        <div className="lg:col-span-4">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
