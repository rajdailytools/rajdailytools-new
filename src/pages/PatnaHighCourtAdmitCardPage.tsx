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
  Scale
} from 'lucide-react';

interface PatnaHighCourtAdmitCardPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const PatnaHighCourtAdmitCardPage: React.FC<PatnaHighCourtAdmitCardPageProps> = ({
  exam,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(exam.examDate, 'exam');

  const officialAdmitCardUrl =
    exam.admitCardLink ||
    'https://cdn.digialm.com//EForms/configuredHtml/1149/101044/login.html';
  const officialWebsiteUrl = exam.officialWebsite || 'https://patnahighcourt.gov.in/';
  const officialNotificationUrl =
    exam.officialNotification ||
    'https://g03.tcsion.com//per/g03/pub/726/EForms/image/ImageDocUpload/71161/6/4401366769.pdf';
  const examDateNoticeUrl =
    'https://patnahighcourt.gov.in/getfile/MTEwNDY=-2tjBZpWo07o=';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Admit Card', page: 'admit-card' },
          { label: 'Patna High Court Assistant Admit Card 2026' }
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
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-3xl flex items-center justify-center shrink-0 shadow-xs">
              {exam.logoIcon || '⚖️'}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Advt No. PHC/03/2026
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
                Ex-Cadre Assistant Recruitment Examination 2026 &bull; 68 Vacancies
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {exam.organization} &bull; Bailey Road, Patna, Bihar
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Alert Box */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-purple-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <IdCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-amber-900 tracking-wide">
                Official Hall Ticket Active &bull; Direct Digialm Portal Link
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                Written Examination Scheduled on 18 September 2026
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Login with your Registration Number &amp; Password on the official TCS iON Digialm portal to download and print.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-white text-amber-900 border border-amber-200 shadow-2xs">
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
            <div className="text-[10px] text-slate-500">23 Women Horizontal</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Admit Card Date</div>
            <div className="text-sm font-bold text-purple-700 mt-0.5">
              12 Sept 2026
            </div>
            <div className="text-[10px] font-bold text-emerald-600">Available Now</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Exam Date</div>
            <div className="text-sm font-bold text-rose-700 mt-0.5">
              18 Sept 2026
            </div>
            <div className="text-[10px] text-slate-500">Friday (Across Bihar)</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Age Limit</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              18 to 37 / 42 Yrs
            </div>
            <div className="text-[10px] text-slate-500">As on 01-01-2026</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Application Fee</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              ₹1500 / ₹750
            </div>
            <div className="text-[10px] text-slate-500">SC/ST/PwBD Bihar: ₹750</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Pay Scale</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              Level-4 (7th PRC)
            </div>
            <div className="text-[10px] text-slate-500">₹25,500 – ₹81,100</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* PRIMARY ADMIT CARD BUTTON */}
          <a
            href={officialAdmitCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-amber-600/30 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Admit Card (Direct Login)</span>
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
            <span>Exam Date Notice</span>
            <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
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

          {/* PATNA HIGH COURT OFFICIAL WEBSITE */}
          <a
            href={officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <Building2 className="w-4 h-4 text-slate-600" />
            <span>Patna High Court Website</span>
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
      <ShareButtons title="Patna High Court Assistant Admit Card 2026" />

      {/* Main Grid: Content (8 Cols) & Sidebar (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
          {/* Step-by-Step How to Check & Download Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <IdCard className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  How To Download Patna High Court Assistant Admit Card 2026
                </h3>
                <p className="text-xs text-slate-500">
                  Follow these verified steps to retrieve and print your hall ticket from Digialm
                </p>
              </div>
            </div>

            <ol className="list-decimal pl-5 text-xs sm:text-sm space-y-2.5 text-slate-700 leading-relaxed font-medium">
              <li>
                Visit the direct Digialm login portal:{' '}
                <a
                  href="https://cdn.digialm.com//EForms/configuredHtml/1149/101044/login.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-bold"
                >
                  https://cdn.digialm.com//EForms/configuredHtml/1149/101044/login.html
                </a>{' '}
                or go to Patna High Court official portal (
                <a
                  href="https://patnahighcourt.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-bold"
                >
                  https://patnahighcourt.gov.in/
                </a>
                ) under the <strong>Recruitments</strong> menu.
              </li>
              <li>
                Look for the <strong>Candidate Login</strong> box.
              </li>
              <li>
                Enter your <strong>Registration Number / User ID</strong> accurately.
              </li>
              <li>
                Enter your secret <strong>Password</strong> generated during registration.
              </li>
              <li>
                Input the seven-character security <strong>Captcha code</strong> shown on screen.
              </li>
              <li>
                Click on the <strong>Login</strong> button to access the candidate dashboard.
              </li>
              <li>
                Click on the tab titled <strong>E-Admit Card</strong> on the top menu.
              </li>
              <li>
                Under assessment, choose <strong>Ex-Cadre Assistant Recruitment Examination 2026</strong>.
              </li>
              <li>
                Click the blue <strong>Download E-Admit Card</strong> button to save the PDF.
              </li>
              <li>
                Verify exam date (18 September 2026), reporting time, shift, and test center address. Print <strong>two clear color copies</strong> on clean A4 paper.
              </li>
            </ol>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Important Instruction:</strong> Admit cards will NOT be dispatched by post. Candidates must carry a clear printed E-Admit Card along with an original Photo Identity Proof (Aadhaar, Voter ID, Driving License, PAN Card, or Passport) and 2 passport photos to the test venue.
              </div>
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
                  Recruitment &amp; Selection Process Roadmap
                </h3>
                <p className="text-xs text-slate-500">
                  Comprehensive 5-stage timeline for Ex-Cadre Assistant Recruitment 2026
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Phase 1</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Application</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Closed 27.08.2026</div>
              </div>

              <div className="p-3.5 bg-purple-50 rounded-xl border border-purple-200 shadow-2xs">
                <div className="text-[10px] font-bold text-purple-600 uppercase">Phase 2</div>
                <div className="text-xs font-black text-purple-900 mt-1">Hall Ticket</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-0.5">Active (12.09.2026)</div>
              </div>

              <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 shadow-2xs">
                <div className="text-[10px] font-bold text-rose-600 uppercase">Phase 3</div>
                <div className="text-xs font-black text-rose-900 mt-1">Written Test</div>
                <div className="text-[10px] text-rose-700 font-bold mt-0.5">18 September 2026</div>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-[10px] font-bold text-amber-600 uppercase">Phase 4</div>
                <div className="text-xs font-bold text-amber-900 mt-1">CPT (50 M)</div>
                <div className="text-[10px] text-amber-700 mt-0.5">6x Merit Ratio (Qualifying)</div>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-[10px] font-bold text-emerald-600 uppercase">Phase 5</div>
                <div className="text-xs font-bold text-emerald-900 mt-1">Interview &amp; Merit</div>
                <div className="text-[10px] text-emerald-700 mt-0.5">Written (100) + Int (10)</div>
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
                    Client-side utilities calibrated for Patna High Court document guidelines.
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
                      Passport Photo &bull; JPG / JPEG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Photo Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Crop and resize passport photographs for Patna High Court exam and interview verification.
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
                      50 KB – 80 KB &bull; JPG / JPEG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Signature Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Resize your black-ink running hand signature strictly to 50–80 KB for exam verification.
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
                    Calculate your exact age as on 01 January 2026 against UR/EWS (37 yrs) &amp; BC/EBC/SC/ST criteria.
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
                      Graduation + Computer DCA
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Eligibility Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Verify graduation requirements, 6-month computer diploma eligibility, and Bihar reservation norms.
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
