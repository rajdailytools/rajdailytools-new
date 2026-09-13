import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate, getCountdown } from '../utils/dateUtils';
import {
  GraduationCap,
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
  BookOpen,
  HelpCircle,
  Download
} from 'lucide-react';

interface AllahabadUniversityPhdPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AllahabadUniversityPhdPage: React.FC<AllahabadUniversityPhdPageProps> = ({
  exam,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(exam.applicationLastDate, 'deadline');

  const applyOnlineUrl =
    exam.applyLink || 'https://aupravesh2026.cbtexam.in/Home/Applicationform.aspx';
  const officialWebsiteUrl = exam.officialWebsite || 'https://allduniv.ac.in/';
  const officialNotificationUrl =
    exam.officialNotification ||
    'https://allduniv.ac.in/upload/file_collection/PhD%20Admission%20Brochure-2026.pdf';
  const shortNoticeUrl =
    'https://allduniv.ac.in/upload/file_collection/SCAN_20260831_180711324.pdf';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Admission Form', page: 'admission' },
          { label: 'Allahabad University Ph.D. Admission 2026-27' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Exam & Admission Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-3xl flex items-center justify-center shrink-0 shadow-xs">
              {exam.logoIcon || '🎓'}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Central University &bull; Estd. 1887
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Applications Open (2026-27)
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  NAAC A+ Grade
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-display tracking-tight">
                {exam.examName}
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Doctor of Philosophy (Ph.D.) Entrance &amp; Admission &bull; 959 Total Seats in 49 Subjects
              </p>
            </div>
          </div>

          {/* Social Share Badges */}
          <div className="shrink-0 self-start sm:self-auto">
            <ShareButtons title={exam.examName} url={typeof window !== 'undefined' ? window.location.href : 'https://rajdailytools.in/allahabad-university-phd-admission-2026.html'} />
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
            <span>Apply Online (Direct Portal)</span>
          </a>

          <a
            href={officialNotificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Ph.D. Admission Brochure (PDF)</span>
          </a>

          <a
            href={shortNoticeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <FileText className="w-4 h-4 text-slate-600" />
            <span>Short Notice PDF</span>
          </a>

          <a
            href={officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <Building2 className="w-4 h-4 text-slate-600" />
            <span>Official University Website</span>
          </a>
        </div>
      </div>

      {/* Main Grid: Content Column (8 cols) + Right Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Active Application Notice & Deadline Alert */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 sm:p-6 text-white shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-amber-300" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
                    Online Application Window Active
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Last Date to Apply: 25 September 2026
                </h3>
                <p className="text-xs text-blue-100">
                  Registration commenced on 02 September 2026 &bull; Form submission &amp; fee payment closes on 25 September 2026.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-center shrink-0 w-full sm:w-auto">
                <div className="text-[10px] uppercase font-bold text-blue-200">
                  Application Deadline
                </div>
                <div className="text-lg font-black text-amber-300 font-mono mt-0.5">
                  {countdown.text}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Summary Snapshot Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Ph.D. Admission 2026-27 Key Highlights</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Total Ph.D. Seats</span>
                <span className="font-bold text-slate-900 text-sm">959 Seats (470 Campus + 489 Colleges)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Number of Disciplines</span>
                <span className="font-bold text-slate-900 text-sm">49 Academic Departments</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Registration Fee</span>
                <span className="font-bold text-slate-900 text-sm">₹600 (UR/OBC/EWS) | ₹300 (SC/ST/PwBD)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Exempted Applicants Fee</span>
                <span className="font-bold text-purple-700 text-sm">₹1,200/- (Teachers/Armed/Part-time)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Minimum Eligibility</span>
                <span className="font-bold text-slate-900 text-sm">Master\'s Degree 55% (50% Reserved)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Direct Ph.D. after 4-Yr UG</span>
                <span className="font-bold text-emerald-700 text-sm">Eligible with min 75% marks</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Merit Evaluation Base</span>
                <span className="font-bold text-slate-900 text-sm">120 Total Marks (70 Test + 30 RAT + 20 Academics)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">RAT Exam / Interview Date</span>
                <span className="font-bold text-amber-600 text-sm">Not Released / To Be Updated</span>
              </div>
            </div>
          </div>

          {/* Step-by-Step "How to Apply" Guide */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  How to Check &amp; Submit Allahabad University Ph.D. Application Form
                </h3>
                <p className="text-xs text-slate-500">
                  Step-by-step instructions for online registration on aupravesh2026.cbtexam.in
                </p>
              </div>
            </div>

            <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li>
                Open the official admission portal: <strong>https://aupravesh2026.cbtexam.in/</strong> or navigate from <strong>www.allduniv.ac.in</strong>.
              </li>
              <li>
                Select <strong>Ph.D. Admission-2026</strong> from the application dropdown and click on <strong>Proceed to Registration</strong>.
              </li>
              <li>
                Complete the primary registration with candidate full name, parents\' name, date of birth, mobile number, and active email ID.
              </li>
              <li>
                Obtain your unique <strong>Application ID and Password</strong> sent to your registered mobile number and email.
              </li>
              <li>
                Log in and enter your educational credentials (10th, 12th, Bachelor\'s, and Master\'s degree scores) along with qualifying examination details (UGC/CSIR-NET, JRF, GATE, JEST, ICAR, etc.).
              </li>
              <li>
                Upload your clear scanned photograph, running signature, and category/PwBD/NOC certificate in the prescribed JPG/PDF file limits.
              </li>
              <li>
                Pay the non-refundable registration fee (<strong>₹600</strong> for UR/OBC/EWS, <strong>₹300</strong> for SC/ST/PwBD, or <strong>₹1,200</strong> for Exempted categories) via online payment gateway.
              </li>
              <li>
                Review all submitted particulars carefully and take <strong>two clean printouts</strong> of the final confirmation form for subsequent document verification during the RAT interview.
              </li>
            </ol>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Important Note on Multiple Subjects:</strong> An applicant may apply for multiple Ph.D. subjects as per eligibility criteria. However, each subject requires a separate online application form and payment of the prescribed registration fee.
              </div>
            </div>
          </div>

          {/* 5-Phase Admission Roadmap */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-200">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Ph.D. Admission &amp; Selection Roadmap (2026-27)
                </h3>
                <p className="text-xs text-slate-500">
                  Comprehensive 5-stage selection workflow as per University Ph.D. Ordinance
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 shadow-2xs">
                <div className="text-[10px] font-bold text-emerald-700 uppercase">Phase 1</div>
                <div className="text-xs font-black text-emerald-900 mt-1">Online Form</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-0.5">02 – 25 Sept 2026</div>
              </div>

              <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-[10px] font-bold text-blue-600 uppercase">Phase 2</div>
                <div className="text-xs font-bold text-blue-900 mt-1">Shortlisting</div>
                <div className="text-[10px] text-blue-600 mt-0.5">Group A, B &amp; C</div>
              </div>

              <div className="p-3.5 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-[10px] font-bold text-purple-600 uppercase">Phase 3</div>
                <div className="text-xs font-bold text-purple-900 mt-1">RAT &amp; Interview</div>
                <div className="text-[10px] text-purple-700 mt-0.5">30 Marks (DPC)</div>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-[10px] font-bold text-amber-600 uppercase">Phase 4</div>
                <div className="text-xs font-bold text-amber-900 mt-1">Merit List</div>
                <div className="text-[10px] text-amber-700 mt-0.5">120 Composite Marks</div>
              </div>

              <div className="p-3.5 bg-indigo-50 rounded-xl border border-indigo-200">
                <div className="text-[10px] font-bold text-indigo-600 uppercase">Phase 5</div>
                <div className="text-xs font-bold text-indigo-900 mt-1">Coursework</div>
                <div className="text-[10px] text-indigo-700 mt-0.5">1 Semester (6 Months)</div>
              </div>
            </div>
          </div>

          {/* DEDICATED WORKING ADMISSION TOOLS SECTION */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Application Tools &amp; Utilities (Allahabad University Ph.D.)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Client-side utilities calibrated for Allahabad University portal upload guidelines.
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
                      Passport Photo &bull; JPG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Photo Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Crop and format your candidate passport photo for online registration and verification.
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
                      Signature &bull; JPG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Signature Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Resize your signature strictly to portal dimension and file size guidelines.
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

              {/* Tool 3: Percentage / Academic Calculator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 hover:bg-emerald-50/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                      <Calculator className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Academic Score &bull; Max 20 M
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Percentage &amp; CGPA Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Convert CGPA to percentage and calculate your Table 2 Academic Performance Score out of 20 marks.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `percentage-calculator?exam=${exam.slug}`);
                    } else {
                      window.location.hash = `#/tools/percentage-calculator?exam=${exam.slug}`;
                    }
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Calculate Academic Score</span>
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
                      55% / 50% / 75% Rules
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Eligibility Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Instant check for category percentage relaxations, 4-year degree eligibility, and subject mapping.
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
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* 50-SECTION EXPANDABLE TABLE SYSTEM (EXPAND ALL / COLLAPSE ALL) */}
          <Accordion
            sections={exam.allInformation}
            title="Complete 50-Section Admission Information & Detailed Seat Matrix"
            defaultOpenFirst={true}
          />

          {/* Frequently Asked Questions (FAQ) */}
          {exam.faq && exam.faq.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span>Frequently Asked Questions ({exam.faq.length})</span>
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
