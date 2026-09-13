import React from 'react';
import { ActivePage, AdmissionRecord } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate, getCountdown } from '../utils/dateUtils';
import { generateAibe_50Sections, AIBE_XXII_2026_ADMISSION } from '../data/aibeData';
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
  Check,
  ChevronRight,
  Award,
  Scale,
  Users,
  Briefcase,
  FileCheck
} from 'lucide-react';

interface AibeAdmissionPageProps {
  admission?: AdmissionRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AibeAdmissionPage: React.FC<AibeAdmissionPageProps> = ({
  admission = AIBE_XXII_2026_ADMISSION,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(admission.applicationLastDate, 'deadline');

  const applyOnlineUrl =
    admission.applyLink || 'https://aibe.digivarsity.online/WebApp/Forms/Authentication.aspx';
  const loginUrl =
    'https://aibe.digivarsity.online/WebApp/Forms/UserAuthentication.aspx';
  const officialPressReleaseUrl =
    admission.officialNotification ||
    'https://www.allindiabarexamination.com/img/PressReleasedated18.07.2026.pdf';
  const officialSyllabusUrl =
    'https://www.allindiabarexamination.com/img/Syllabus%20for%20All%20India%20Bar%20Exam-XXI.pdf#toolbar=0&navpanes=0&scrollbar=0';
  const officialPortalUrl =
    admission.officialLink || 'https://www.allindiabarexamination.com/';
  const bciUrl = 'https://www.barcouncilofindia.org';

  const sections50 = generateAibe_50Sections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation - Strictly Admission Form Category */}
      <Breadcrumb
        items={[
          { label: 'Admission Form', page: 'admission' },
          { label: 'AIBE 22nd Online Form 2026 (AIBE-XXII)' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Exam & Admission Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-3xl flex items-center justify-center shrink-0 shadow-xs text-amber-800">
              ⚖️
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1">
                  <Scale className="w-3 h-3" />
                  Bar Council of India &bull; Statutory Authority
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Registration Active (AIBE-XXII)
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Certificate of Practice (COP)
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-display tracking-tight">
                AIBE 22nd Online Form 2026 (All India Bar Examination XXII)
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Bar Council of India (BCI) &bull; Mandatory Certification for Advocates &bull; Exam on 29 November 2026
              </p>
            </div>
          </div>

          {/* Social Share Badges */}
          <div className="shrink-0 self-start sm:self-auto">
            <ShareButtons
              title="AIBE 22nd Online Form 2026 – All India Bar Examination XXII Apply Online"
              url={
                typeof window !== 'undefined'
                  ? window.location.href
                  : 'https://rajdailytools.in/aibe-22nd-online-form-2026.html'
              }
            />
          </div>
        </div>

        {/* Quick Official Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={applyOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer text-center"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Apply Online (Authentication)</span>
          </a>

          <a
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm rounded-xl transition-all cursor-pointer text-center"
          >
            <Users className="w-4 h-4 text-slate-300" />
            <span>Applicant Login</span>
          </a>

          <a
            href={officialPressReleaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Official Press Release (PDF)</span>
          </a>

          <a
            href={officialSyllabusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span>Syllabus Reference (PDF)</span>
          </a>

          <a
            href={officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <Building2 className="w-4 h-4 text-slate-600" />
            <span>AIBE Official Portal</span>
          </a>
        </div>
      </div>

      {/* Main Grid: Content Column (8 cols) + Right Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Active Application Notice & Deadline Alert Banner */}
          <div className="bg-gradient-to-r from-amber-700 via-stone-800 to-amber-900 rounded-2xl p-5 sm:p-6 text-white shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-amber-300" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                    Registration Deadline Approaching
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Last Date to Apply: 27 October 2026 (Payment till 28 Oct 2026)
                </h3>
                <p className="text-xs text-amber-100">
                  National Examination Date: <strong>29 November 2026 (Sunday)</strong> &bull; Admit Cards Live: <strong>14 November 2026</strong>
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-center shrink-0 w-full sm:w-auto">
                <div className="text-[10px] uppercase font-bold text-amber-200">
                  Registration Closes In
                </div>
                <div className="text-lg font-black text-amber-300 font-mono mt-0.5">
                  {countdown.text}
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights Quick Snapshot Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>AIBE-XXII 2026 Key Highlights Snapshot</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Statutory Body</span>
                <span className="font-bold text-slate-900 text-sm">Bar Council of India (BCI)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Examination Name</span>
                <span className="font-bold text-blue-700 text-sm">All India Bar Examination - XXII (AIBE-XXII)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Educational Qualification</span>
                <span className="font-bold text-slate-900 text-sm">3-Year or 5-Year LL.B from BCI-Recognized College</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">State Bar Enrollment</span>
                <span className="font-bold text-emerald-700 text-sm">Enrolled as Advocate / Undertaking Candidate</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Age Limit</span>
                <span className="font-bold text-emerald-700 text-sm">NO Upper Age Limit (Open to all ages)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Application Fee</span>
                <span className="font-bold text-slate-900 text-sm">₹3,500 (Gen/OBC) | ₹2,500 (SC/ST)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Examination Date</span>
                <span className="font-bold text-rose-700 text-sm">29 November 2026 (Sunday) (29-Nov-26)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Result Declaration Schedule</span>
                <span className="font-bold text-purple-700 text-sm">Between 7 to 10 January 2027 (7 to 10 Jan-2027)</span>
              </div>
            </div>
          </div>

          {/* VISUAL PROCESS DIAGRAM 1: ELIGIBILITY VERIFICATION FLOW CHART */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Eligibility Verification Roadmap (Step-by-Step Flow)
                </h3>
                <p className="text-xs text-slate-500">
                  Four sequential steps to confirm your eligibility before registering for AIBE-XXII
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold text-[10px]">
                      Stage 1
                    </span>
                    <Scale className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <h4 className="font-bold text-amber-950 text-xs mb-1">LL.B Degree Passed</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Completed 3-Year or 5-Year Integrated LL.B from a BCI-recognized college/university.
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-amber-900 bg-white/80 px-2 py-1 rounded border border-amber-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Recognized Law College
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-blue-200 text-blue-900 font-bold text-[10px]">
                      Stage 2
                    </span>
                    <Award className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-blue-950 text-xs mb-1">State Bar Enrollment</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Enrolled as an Advocate with any State Bar Council (Section 24) or eligible under Undertaking.
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-blue-800 bg-white/80 px-2 py-1 rounded border border-blue-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Has Enrollment ID
                </div>
              </div>

              <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-900 font-bold text-[10px]">
                      Stage 3
                    </span>
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-indigo-950 text-xs mb-1">Age &amp; Attempts</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    No upper age limit for AIBE. No restriction on number of attempts.
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-indigo-800 bg-white/80 px-2 py-1 rounded border border-indigo-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Universal Eligibility
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-bold text-[10px]">
                      Stage 4
                    </span>
                    <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-emerald-950 text-xs mb-1">AIBE Registration</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Register online on Digivarsity portal, pay application fee, and download admit card.
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-emerald-800 bg-white/80 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Ready to Apply
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL PROCESS DIAGRAM 2: APPLICATION WORKFLOW */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Step-by-Step Application Submission Workflow
                </h3>
                <p className="text-xs text-slate-500">
                  Follow these 5 verified steps to submit your AIBE-XXII form without errors
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Primary Authentication on Digivarsity Portal</h4>
                  <p className="text-slate-600 mt-0.5">
                    Navigate to <a href="https://aibe.digivarsity.online/WebApp/Forms/Authentication.aspx" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">Authentication.aspx</a>, select Enrolled Advocate or Undertaking, provide name, email, mobile number, and generate OTP.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Fill Application &amp; Academic Particulars</h4>
                  <p className="text-slate-600 mt-0.5">
                    Enter matriculation, intermediate, graduation, and LL.B marks, State Bar Council enrollment details, and choose your preferred 3 exam cities and paper language.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Upload Mandatory Documents &amp; Photos</h4>
                  <p className="text-slate-600 mt-0.5">
                    Upload passport photo (10-50 KB), signature (10-50 KB), State Bar Enrollment Certificate / Law Degree (50-500 KB), and Category / PwD certificates if applicable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Online Fee Payment</h4>
                  <p className="text-slate-600 mt-0.5">
                    Pay ₹3,500 (Gen/OBC) or ₹2,500 (SC/ST) via Debit/Credit Card, UPI, or Net Banking on or before 28 October 2026.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  5
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Download Confirmation Page &amp; Correction Window</h4>
                  <p className="text-slate-600 mt-0.5">
                    Download and save confirmation page. If needed, make corrections before 30 October 2026. Download Admit Card on 14 November 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* REAL-LIFE PRACTICAL EXAMPLES (Clearly labelled) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Real-Life Case Scenarios &amp; Examples
                </h3>
                <p className="text-xs text-slate-500">
                  Practical illustrations clarifying eligibility, qualifying marks, and Bare Acts regulations
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-purple-900 text-sm">
                  <span className="px-2 py-0.5 rounded-full bg-purple-200 text-purple-800 text-[10px] uppercase font-mono">
                    Example 1
                  </span>
                  <span>Enrolled Advocate within the 2-Year Provisional Window</span>
                </div>
                <p className="leading-relaxed">
                  <em>Priya graduated with an LL.B in 2024 and enrolled with the Bar Council of Delhi on 15 October 2024 with enrollment number D/4521/2024. As of August 2026, she is within the 2-year statutory period. She can register for AIBE-XXII using her permanent enrollment certificate. Upon clearing AIBE on 29 November 2026, her Certificate of Practice (COP) will be issued, confirming her lifetime right to practice law.</em>
                </p>
              </div>

              <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-blue-900 text-sm">
                  <span className="px-2 py-0.5 rounded-full bg-blue-200 text-blue-800 text-[10px] uppercase font-mono">
                    Example 2
                  </span>
                  <span>Final Year Law Student under the Undertaking Category</span>
                </div>
                <p className="leading-relaxed">
                  <em>Vikram is a 5th-year student of B.A. LL.B whose final semester exams ended in July 2026, but the university has not declared the final results. Under BCI regulations, Vikram selects the "Undertaking Candidate" route on the portal and uploads an undertaking issued by his university. Over 56,000 candidates appeared under this undertaking route in AIBE-XXI. Once his degree is conferred and he registers with a State Bar Council, his AIBE qualification will be regularized.</em>
                </p>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800 text-[10px] uppercase font-mono">
                    Example 3
                  </span>
                  <span>Scoring Strategy &amp; Absence of Negative Marking</span>
                </div>
                <p className="leading-relaxed">
                  <em>Candidate Amit (General category) answers 60 questions with complete certainty and is unsure about the remaining 40 questions. Because there is NO negative marking in AIBE, Amit intelligently marks answers for all remaining 40 questions on his OMR sheet. Even if he guesses 12 of them correctly, his total score becomes 72 marks out of 100, easily exceeding the 45-mark passing threshold. Leaving bubbles blank carries zero marks.</em>
                </p>
              </div>

              <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-800 text-[10px] uppercase font-mono">
                    Example 4
                  </span>
                  <span>Bare Acts Permissibility in Exam Hall</span>
                </div>
                <p className="leading-relaxed">
                  <em>Candidate Sunita carries universal Bare Acts of CPC, CrPC, IPC, and Constitution containing bare sections and short legislative historical footnotes. These are fully permitted inside the hall. In contrast, candidate Ramesh brings a 600-page textbook on Constitutional Law with solved case commentaries; the exam center frisking team confiscates Ramesh's commentary book at the security gate.</em>
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL DIAGRAM 4: AIBE-XXI OFFICIAL BENCHMARKS TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Official AIBE-XXI Statistical Insights (BCI Press Release dated 18.07.2026)
                </h3>
                <p className="text-xs text-slate-500">
                  National benchmarks showing candidate participation and qualifying standards
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <div className="text-xl font-black text-blue-900 font-mono">1,75,701</div>
                <div className="text-[11px] font-bold text-blue-700 mt-1">Total Appeared</div>
                <div className="text-[10px] text-slate-500">292 Centres in 60 Cities</div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="text-xl font-black text-emerald-900 font-mono">1,15,805</div>
                <div className="text-[11px] font-bold text-emerald-700 mt-1">Total Qualified</div>
                <div className="text-[10px] text-slate-500">Received COP clearance</div>
              </div>

              <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="text-xl font-black text-indigo-900 font-mono">65.92%</div>
                <div className="text-[11px] font-bold text-indigo-700 mt-1">National Pass %</div>
                <div className="text-[10px] text-slate-500">Robust professional rate</div>
              </div>

              <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                <div className="text-xl font-black text-purple-900 font-mono">56,352</div>
                <div className="text-[11px] font-bold text-purple-700 mt-1">Undertaking Appeared</div>
                <div className="text-[10px] text-slate-500">41,682 Qualified (74%)</div>
              </div>
            </div>
          </div>

          {/* 50-SECTION ACCORDION WITH EXPAND ALL / COLLAPSE ALL */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display">
                  Comprehensive 50-Section Official Information Guide
                </h3>
                <p className="text-xs text-slate-500">
                  Detailed statutory clauses, syllabus breakdown, qualification norms, and instructions
                </p>
              </div>
            </div>

            <Accordion sections={sections50} defaultOpenFirst={true} />
          </div>

          {/* Frequently Asked Questions Section */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Frequently Asked Questions (AIBE-XXII FAQs)
                </h3>
                <p className="text-xs text-slate-500">
                  Quick answers to critical queries regarding All India Bar Examination XXII
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {admission.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-xs text-slate-700"
                >
                  <h4 className="font-bold text-slate-900 text-sm flex items-start gap-2">
                    <span className="text-blue-600 font-mono">Q{idx + 1}.</span>
                    <span>{item.q}</span>
                  </h4>
                  <p className="text-slate-600 leading-relaxed pl-6">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick External Navigation Links */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs space-y-3">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider">
              Official BCI &amp; AIBE Web Portals
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={applyOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all inline-flex items-center gap-1.5"
              >
                <span>Apply Online (Digivarsity)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl transition-all inline-flex items-center gap-1.5"
              >
                <span>Applicant Login</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={officialPressReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-300 transition-all inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                <span>Press Release (18.07.2026)</span>
              </a>

              <a
                href={officialSyllabusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-300 transition-all inline-flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                <span>Syllabus Reference (PDF)</span>
              </a>

              <a
                href={officialPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-300 transition-all inline-flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-slate-600" />
                <span>AIBE Portal</span>
              </a>

              <a
                href={bciUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-300 transition-all inline-flex items-center gap-1.5"
              >
                <Scale className="w-3.5 h-3.5 text-slate-600" />
                <span>Bar Council of India HQ</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <RightSidebar
            currentExam={{
              id: admission.id,
              slug: admission.slug,
              examName: 'AIBE XXII (22nd) Exam 2026',
              organization: admission.university,
              category: 'Admission',
              postName: 'Certificate of Practice (COP) for Advocates',
              totalVacancy: 'National Qualifying Exam',
              applicationStartDate: admission.applicationStartDate,
              applicationLastDate: admission.applicationLastDate,
              admitCardDate: '15 November 2026',
              examDate: admission.entranceExamDate || '30 November 2026',
              answerKeyDate: '02 December 2026',
              resultDate: admission.meritListDate || 'January 2027',
              status: 'APPLICATION_OPEN',
              officialWebsite: officialPortalUrl,
              officialNotification: officialPressReleaseUrl,
              applyLink: applyOnlineUrl,
              logoIcon: '⚖️',
              description: admission.description,
              shortSummary:
                'All India Bar Examination XXII (AIBE-22) 2026 registration online form open from 19 Aug to 27 Oct 2026. Exam on 30 Nov 2026.',
              applicationFee: [
                { category: 'General / OBC Candidates', amount: '₹3,560' },
                { category: 'SC / ST / PwD Candidates', amount: '₹2,560' }
              ],
              importantDates: [
                { label: 'Online Registration Commenced', date: '19 August 2026' },
                { label: 'Last Date to Apply Online', date: '27 October 2026', isHighlight: true },
                { label: 'Admit Card Verification Window', date: '15 November 2026' },
                { label: 'AIBE XXII Examination Date', date: '30 November 2026', isHighlight: true },
                { label: 'Official Answer Key & Result', date: 'Dec 2026 / Jan 2027' }
              ],
              allInformation: sections50,
              faq: admission.faq || []
            }}
            onNavigate={onNavigate}
            depth={depth}
          />
        </div>
      </div>
    </div>
  );
};
