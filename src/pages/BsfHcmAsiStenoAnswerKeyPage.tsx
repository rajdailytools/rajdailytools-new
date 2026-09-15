import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { ScoreCalculator } from '../components/ScoreCalculator';
import {
  FileCheck,
  Download,
  ExternalLink,
  Calendar,
  Layers,
  FileText,
  Clock,
  Sparkles,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  ArrowRight,
  Send,
  HelpCircle,
  UserCheck,
  Award,
  ChevronRight
} from 'lucide-react';

interface BsfHcmAsiStenoAnswerKeyPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const BsfHcmAsiStenoAnswerKeyPage: React.FC<BsfHcmAsiStenoAnswerKeyPageProps> = ({
  exam,
  onNavigate,
  depth = 0
}) => {
  const officialAnswerKeyUrl =
    exam.answerKeyLink || 'https://www.digialm.com/EForms/configuredHtml/1258/102021/login.html';
  const officialNoticeUrl =
    exam.officialNotification || 'https://d3t79nicn48uzj.cloudfront.net/bsf/custom/1788950396.pdf';
  const officialAdmitCardUrl =
    exam.admitCardLink || 'https://cdn.digialm.com//EForms/configuredHtml/1258/102021/login.html';
  const officialPetPstResultUrl =
    exam.resultPdfLink || 'https://d3t79nicn48uzj.cloudfront.net/bsf/custom/1756724609.pdf';
  const officialApplyUrl = exam.applyLink || 'https://rectt.bsf.gov.in/';
  const officialWebsiteUrl = exam.officialWebsite || 'https://www.bsf.gov.in/';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Canonical Breadcrumbs */}
      <Breadcrumb
        items={[
          { label: 'Answer Key', page: 'answer-key' },
          { label: 'BSF Answer Key', page: 'answer-key' },
          { label: 'BSF HCM & ASI Steno Answer Key 2026' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Lifecycle Navbar */}
      <LifecycleNavbar
        exam={exam}
        currentSection="answer-key"
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-amber-50 border border-amber-200 rounded-2xl shrink-0">
              🛡️
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Answer Key → BSF Answer Key
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 animate-pulse">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Answer Key Released: 10 September 2026</span>
                </span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  1,526 Total Posts
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
                BSF HCM &amp; ASI Steno Answer Key 2026
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Head Constable (Ministerial) &amp; Assistant Sub Inspector (Stenographer) in CAPFs &amp; Assam Rifles
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Border Security Force (BSF) Nodal Agency &bull; Ministry of Home Affairs, Govt. of India
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Alert Box */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-amber-900 tracking-wide">
                Official Answer Key &amp; Candidate Response Sheet Active &bull; Digialm Portal
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                CBT Written Exam Held 01–03 September 2026 | Key Released 10 September 2026
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Login with your Roll Number &amp; Password on the official Digialm portal to view recorded responses and file representations.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={officialNoticeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-amber-900 border border-amber-300 shadow-2xs inline-flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>Official Notice PDF</span>
            </a>
          </div>
        </div>

        {/* 6 Quick Information Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Total Vacancies</div>
            <div className="text-base font-extrabold text-blue-700 mt-0.5 font-display">
              1,526 Posts
            </div>
            <div className="text-[10px] text-slate-500">All CAPFs &amp; AR</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Answer Key Date</div>
            <div className="text-sm font-bold text-amber-700 mt-0.5">
              10 Sept 2026
            </div>
            <div className="text-[10px] font-bold text-emerald-600">Available Now</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">CBT Exam Dates</div>
            <div className="text-sm font-bold text-rose-700 mt-0.5">
              01–03 Sept 2026
            </div>
            <div className="text-[10px] text-slate-500">Multi-Shift CBT</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Admit Card Date</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              19 August 2026
            </div>
            <div className="text-[10px] text-slate-500">Phase 2 Hall Ticket</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Phase 1 PST/PET</div>
            <div className="text-sm font-bold text-purple-700 mt-0.5">
              Result Declared
            </div>
            <div className="text-[10px] text-purple-600 font-bold">Check Qualified PDF</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">CBT Result</div>
            <div className="text-sm font-bold text-slate-800 mt-0.5">
              Not Released
            </div>
            <div className="text-[10px] text-amber-600 font-bold">To Be Updated</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* PRIMARY DOWNLOAD ANSWER KEY BUTTON */}
          <a
            href={officialAnswerKeyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Answer Key (Candidate Login)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* OFFICIAL ANSWER KEY NOTICE */}
          <a
            href={officialNoticeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-blue-200 shadow-2xs"
          >
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Official Answer Key Notice PDF</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
          </a>

          {/* DOWNLOAD ADMIT CARD */}
          <a
            href={officialAdmitCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-purple-200 shadow-2xs"
          >
            <Download className="w-4 h-4 text-purple-600" />
            <span>Download Admit Card</span>
          </a>

          {/* PET/PST RESULT PDF */}
          <a
            href={officialPetPstResultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-emerald-200 shadow-2xs"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>PET/PST Result Notice PDF</span>
          </a>

          {/* BSF APPLY ONLINE PORTAL */}
          <a
            href={officialApplyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <span>Apply Portal (rectt.bsf.gov.in)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* BSF OFFICIAL WEBSITE */}
          <a
            href={officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <Building2 className="w-4 h-4 text-slate-600" />
            <span>BSF Official Website</span>
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

      {/* Share Buttons */}
      <ShareButtons title="BSF HCM & ASI Steno Answer Key 2026 – Check Response Sheet & Download PDF" />

      {/* EMBEDDED SCORE CALCULATOR (CONFIGURED FOR BSF CBT: 100 QS, +1 MARK, 0 NEGATIVE MARKING) */}
      <ScoreCalculator
        defaultTotal={100}
        defaultMarksPerCorrect={1}
        defaultNegativeMarks={0}
        examTitle="BSF HCM & ASI Steno CBT 2026"
      />

      {/* Main Grid: Content (8 Cols) & Sidebar (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
          {/* VISUAL FLOWCHART 1: ANSWER KEY TO RESULT EVALUATION */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Answer Key &rarr; Objection &rarr; Result Evaluation Lifecycle
                </h3>
                <p className="text-xs text-slate-500">
                  Standard official stages for CBT response sheet review, expert scrutiny and result compilation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-2">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-amber-700">Stage 1 &bull; Released</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Provisional Answer Key</div>
                <p className="text-[11px] text-slate-600 mt-1">Uploaded 10 Sept 2026 with candidate response sheets.</p>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-blue-700">Stage 2 &bull; Active</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Online Objections</div>
                <p className="text-[11px] text-slate-600 mt-1">Candidates submit challenges online with authentic references.</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-slate-600">Stage 3 &bull; Scrutiny</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Expert Review</div>
                <p className="text-[11px] text-slate-600 mt-1">Subject expert committee analyzes all received representations.</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-slate-600">Stage 4 &bull; Final Key</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Master Answer Key</div>
                <p className="text-[11px] text-slate-600 mt-1">Updated master keys formulated; used for final computer evaluation.</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-slate-600">Stage 5 &bull; Result</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Normalized Result</div>
                <p className="text-[11px] text-slate-600 mt-1">Phase 3 shortlisting lists (10x HC Min, 30x ASI Steno) declared.</p>
              </div>
            </div>
          </div>

          {/* VISUAL FLOWCHART 2: COMPLETE 6-STAGE RECRUITMENT SELECTION PROCESS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  BSF HCM &amp; ASI Steno Official Selection Process Flowchart
                </h3>
                <p className="text-xs text-slate-500">
                  Six sequential recruitment phases formulated by Ministry of Home Affairs
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P1
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Phase 1: Physical Standard Test (PST) &amp; Physical Efficiency Test (PET)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Completed &bull; Result Declared</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Qualifying in nature: 1.6 Km run in 6m 30s (Male) and 800m in 4m 45s (Female) along with Height and Chest verification.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P2
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Phase 2: Computer Based Test (CBT Written Exam)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Answer Key Released 10-09-2026</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    100 MCQs, 100 Marks, 100 Minutes across 5 subjects with ZERO negative marking. Normalized scores used for merit.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P3
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Phase 3: Skill Test on Computer (Typing &amp; Stenography)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Upcoming After CBT Result</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    HC (Min): 35 wpm English OR 30 wpm Hindi Typing in Mangal Font. ASI (Steno): 80 wpm 10-minute shorthand dictation &amp; transcription. Qualifying only.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P4
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Phase 4: Document Verification (DV)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Mandatory</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Physical scrutiny of original 10+2 educational qualifications, age certificates, caste/EWS credentials and NOCs.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P5
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Phase 5: Detailed Medical Examination (DME) &amp; Review (RME)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">CAPF Standards</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Physical fitness, 6/6 and 6/9 vision without glasses, color blindness test (CP III), and tattoo guidelines.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  P6
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Phase 6: Final Merit List &amp; Force Allotment</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">Final Appointment</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Declared by BSF (Nodal Force) strictly based on CBT normalized marks subject to qualifying Skill Test, DV &amp; Medical fitness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP-BY-STEP HOW TO DOWNLOAD & CHECK ANSWER KEY CARD */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Official Steps to Download BSF Response Sheet &amp; Check Answer Key
                </h3>
                <p className="text-xs text-slate-500">
                  Follow these 7 official steps to view and download your question paper from Digialm
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <strong className="text-slate-900">Open the Official BSF Answer Key Login Link:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Navigate to <a href={officialAnswerKeyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">https://www.digialm.com/EForms/configuredHtml/1258/102021/login.html</a> on your web browser.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div>
                  <strong className="text-slate-900">Enter Required Candidate Credentials:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Input your Examination Roll Number / User ID and Password (Date of Birth) as mentioned on your Phase 2 CBT Admit Card.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <div>
                  <strong className="text-slate-900">Complete Captcha &amp; Login:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Solve the visual verification code and click on the 'Login' button to access your candidate dashboard.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  4
                </span>
                <div>
                  <strong className="text-slate-900">View Response Sheet &amp; Provisional Answer Key:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Click on the 'Candidate Response' or 'Question Paper' tab and click on the generated hyperlink to display your question paper.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  5
                </span>
                <div>
                  <strong className="text-slate-900">Compare Responses with Official Master Key:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Compare your chosen option against the officially correct answer highlighted with a green tick. Note that CBT carries +1 mark per correct answer and ZERO negative marking.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  6
                </span>
                <div>
                  <strong className="text-slate-900">Download &amp; Save PDF Copy:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Use your browser's Print option (Ctrl + P) and choose 'Save as PDF' to store a permanent backup of your question paper.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  7
                </span>
                <div>
                  <strong className="text-slate-900">Raise Objection Online (If Discrepancy Found):</strong>
                  <p className="text-slate-600 mt-0.5">
                    If any key is incorrect, switch to the 'Objection Form' tab, select the Question ID, attach authentic proof, and submit representations online within the official deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 50-SECTION EXPANDABLE ACCORDION (WORKING EXPAND ALL / COLLAPSE ALL) */}
          <Accordion
            sections={exam.allInformation}
            title="Complete 50-Section BSF HCM & ASI Steno Exam & Answer Key Information"
            defaultOpenFirst={true}
          />

          {/* IMPORTANT OFFICIAL LINKS TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Official BSF Recruitment Links &amp; Resources
                </h3>
                <p className="text-xs text-slate-500">
                  Verified government portals for answer keys, hall tickets, and recruitment announcements
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border border-slate-200 divide-y divide-slate-200">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    <th className="p-3 text-left">Link Description</th>
                    <th className="p-3 text-left">Action</th>
                    <th className="p-3 text-left">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-bold text-slate-800">Candidate Login: Answer Key &amp; Response Sheet</td>
                    <td className="p-3">
                      <a href={officialAnswerKeyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg font-bold text-xs">
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Key</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Answer Key</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-800">Official Answer Key &amp; Objection Notice PDF</td>
                    <td className="p-3">
                      <a href={officialNoticeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg font-bold text-xs border border-blue-200">
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Notice</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Notice PDF</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-800">Download CBT Admit Card</td>
                    <td className="p-3">
                      <a href={officialAdmitCardUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-800 rounded-lg font-bold text-xs border border-purple-200">
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Card</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Admit Card</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-800">Phase 1 PST &amp; PET Qualified Result PDF</td>
                    <td className="p-3">
                      <a href={officialPetPstResultUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg font-bold text-xs border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Check Result</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Result</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-800">BSF Recruitment Portal</td>
                    <td className="p-3">
                      <a href={officialApplyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline">
                        <span>rectt.bsf.gov.in</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Portal</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-800">BSF Official Website</td>
                    <td className="p-3">
                      <a href={officialWebsiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline">
                        <span>bsf.gov.in</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Official Web</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="lg:col-span-4">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
