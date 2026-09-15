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
  ChevronRight,
  TrendingUp,
  Scale
} from 'lucide-react';
import { generateRrbGroupD50Sections } from '../data/rrbGroupDData';

interface RrbGroupDAnswerKeyPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const RrbGroupDAnswerKeyPage: React.FC<RrbGroupDAnswerKeyPageProps> = ({
  exam,
  onNavigate,
  depth = 0
}) => {
  // Verified Official Links strictly adhering to user instructions
  const officialAnswerKeyUrl = 'https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html';
  const officialAdmitCardUrl = 'https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html';
  const officialExamCityUrl = 'https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html';
  const officialRevisedScheduleUrl = 'https://rrb.indianrailways.gov.in/-/image/1785395249352REVISED_TENTATIVE_CBT_SCHEDULE_FOR_CEN_09_2025.pdf/examsDocuments';
  const officialAppStatusUrl = 'https://www.rrbapply.gov.in/#/auth/home';
  const officialApplyOnlineUrl = 'https://www.rrbapply.gov.in/#/auth/landing';
  const officialDateExtensionNoticeUrl = 'https://rrbahmedabad.gov.in/wp-content/uploads/2026/01/Corrigendum-4-CEN-09-2025-02.03.2026.pdf';
  const officialRevisedVacancyUrl = 'https://www.rrbjammu.nic.in/09-2025/Corrigendum-2%2009%202025.pdf';
  const officialWebsiteUrl = 'https://indianrailways.gov.in/';

  // 50 useful sections
  const sections = exam.allInformation && exam.allInformation.length >= 40 
    ? exam.allInformation 
    : generateRrbGroupD50Sections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Canonical Breadcrumbs: Answer Key → Railway Answer Key → RRB Group D */}
      <Breadcrumb
        items={[
          { label: 'Answer Key', page: 'answer-key' },
          { label: 'Railway Answer Key', page: 'answer-key' },
          { label: 'Railway RRB Group D Answer Key 2026' }
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
            <span className="text-4xl p-3 bg-blue-50 border border-blue-200 rounded-2xl shrink-0">
              🚆
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Answer Key &rarr; Railway Answer Key &rarr; RRB Group D
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>CEN 09/2025 &bull; Candidate Login Active</span>
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  22,195 Total Vacancies
                </span>
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  Level-1 Pay ₹18,000/-
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
                Railway RRB Group D Answer Key 2026
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Centralised Employment Notification (CEN) No. 09/2025 &bull; Various Posts in Level-1 of 7th CPC Pay Matrix
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Railway Recruitment Boards (RRBs) / Railway Recruitment Cells (RRCs) &bull; Ministry of Railways, Govt of India
              </p>
            </div>
          </div>

          {/* Quick Official Status Card */}
          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200/80 min-w-[210px] shrink-0">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Answer Key Status</span>
            <span className="text-sm sm:text-base font-black text-amber-700 mt-0.5">
              Not Released / To Be Updated
            </span>
            <span className="text-[11px] text-slate-600 font-medium">Candidate Login Portal Ready</span>
          </div>
        </div>

        {/* Highlight Metadata Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-5 border-b border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">CEN Number</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              CEN 09/2025
            </div>
            <div className="text-[10px] text-slate-500">Official Notification</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Total Posts</div>
            <div className="text-sm font-bold text-blue-700 mt-0.5">
              22,195 Vacancies
            </div>
            <div className="text-[10px] text-slate-500">16 Zonal Railways</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Initial Pay</div>
            <div className="text-sm font-bold text-emerald-700 mt-0.5">
              ₹18,000/- Basic
            </div>
            <div className="text-[10px] text-emerald-600 font-bold">Level-1 7th CPC</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Negative Marking</div>
            <div className="text-sm font-bold text-rose-700 mt-0.5">
              1/3 Mark (0.33)
            </div>
            <div className="text-[10px] text-rose-600 font-bold">Per Wrong Answer</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Age Limit</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              18–33 Years
            </div>
            <div className="text-[10px] text-slate-500">As on 01.01.2026</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="text-[11px] font-bold text-slate-400 uppercase">PET Shortlisting</div>
            <div className="text-sm font-bold text-purple-700 mt-0.5">
              3 Times (3X)
            </div>
            <div className="text-[10px] text-purple-600 font-bold">DV Ratio: 1:1</div>
          </div>
        </div>

        {/* Action Buttons with ALL Official Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          {/* PRIMARY DOWNLOAD ANSWER KEY BUTTON */}
          <a
            href={officialAnswerKeyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Answer Key (Candidate Login)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* DOWNLOAD ADMIT CARD */}
          <a
            href={officialAdmitCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-purple-200 shadow-2xs"
          >
            <Download className="w-4 h-4 text-purple-600" />
            <span>Download Admit Card (Login)</span>
          </a>

          {/* DOWNLOAD EXAM CITY DETAILS */}
          <a
            href={officialExamCityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-amber-200 shadow-2xs"
          >
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>Exam City &amp; Date Details</span>
          </a>

          {/* REVISED CBT EXAM SCHEDULE PDF */}
          <a
            href={officialRevisedScheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-emerald-200 shadow-2xs"
          >
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>Revised Exam Schedule PDF</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
          </a>

          {/* APPLICATION STATUS */}
          <a
            href={officialAppStatusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <UserCheck className="w-4 h-4 text-slate-600" />
            <span>Application Status Login</span>
          </a>

          {/* APPLY ONLINE */}
          <a
            href={officialApplyOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <span>Apply Online (rrbapply.gov.in)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* REVISED VACANCY NOTICE */}
          <a
            href={officialRevisedVacancyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <FileText className="w-4 h-4 text-slate-600" />
            <span>Revised Vacancy Corrigendum</span>
          </a>

          {/* DATE EXTENSION NOTICE */}
          <a
            href={officialDateExtensionNoticeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <AlertCircle className="w-4 h-4 text-slate-600" />
            <span>Date Extension Notice PDF</span>
          </a>

          {/* OFFICIAL RAILWAY WEBSITE */}
          <a
            href={officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300 shadow-2xs"
          >
            <Building2 className="w-4 h-4 text-slate-600" />
            <span>Indian Railways Official Portal</span>
          </a>

          {/* JOIN TELEGRAM */}
          <a
            href="https://t.me/Educator4ll"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span>Join Telegram Channel</span>
          </a>
        </div>
      </div>

      {/* Share Buttons */}
      <ShareButtons title="Railway RRB Group D Answer Key 2026 – Check Response Sheet, CBT Score & Question Paper PDF" />

      {/* EMBEDDED SCORE CALCULATOR CONFIGURED FOR RRB GROUP D CBT (100 Qs, +1 Mark, -0.3333 Negative) */}
      <ScoreCalculator
        defaultTotal={100}
        defaultMarksPerCorrect={1}
        defaultNegativeMarks={0.3333}
        examTitle="Railway RRB Group D CBT 2026 (CEN 09/2025)"
      />

      {/* Main Grid: Content (8 Cols) & Sidebar (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
          {/* VISUAL FLOWCHART 1: ANSWER KEY TO RESULT EVALUATION */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Answer Key &rarr; Response Sheet &rarr; Objection &rarr; Final Key &rarr; Result Lifecycle
                </h3>
                <p className="text-xs text-slate-500">
                  Official stage progression for RRB Group D CBT evaluation under CEN 09/2025
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-2">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-blue-700">Stage 1 &bull; Login</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Candidate Response Sheet</div>
                <p className="text-[11px] text-slate-600 mt-1">DigiALM login opens with candidate chosen options and provisional keys.</p>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-amber-700">Stage 2 &bull; Objections</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Objection Tracker</div>
                <p className="text-[11px] text-slate-600 mt-1">Challenge doubtful questions online with authentic textual references &amp; fee.</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-slate-600">Stage 3 &bull; Scrutiny</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Expert Committee</div>
                <p className="text-[11px] text-slate-600 mt-1">Subject matter experts evaluate all challenges; invalid questions cancelled.</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-slate-600">Stage 4 &bull; Final Key</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Final Master Key</div>
                <p className="text-[11px] text-slate-600 mt-1">Final decisive master key generated; no further representation accepted.</p>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col justify-between">
                <div className="text-[10px] font-black uppercase text-emerald-700">Stage 5 &bull; Result</div>
                <div className="text-xs font-extrabold text-slate-900 mt-1">Normalized CBT Score</div>
                <p className="text-[11px] text-slate-600 mt-1">Scorecards published &amp; 3X candidates shortlisted for Physical Test (PET).</p>
              </div>
            </div>
          </div>

          {/* VISUAL FLOWCHART 2: COMPLETE 6-STAGE RECRUITMENT SELECTION FLOW */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Official Selection Flow: CBT &rarr; CBT Merit &rarr; PET &rarr; DV &rarr; Medical &rarr; Empanelment
                </h3>
                <p className="text-xs text-slate-500">
                  Strictly per Para 14.0 of Detailed CEN 09/2025 Notification
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-blue-50/50 border border-blue-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  S1
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Stage 1: Computer Based Test (CBT)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">100 MCQs &bull; 90 Min</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Science (25), Math (25), Reasoning (30), General Awareness (20). 1/3 negative marking for each incorrect response.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  S2
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Stage 2: CBT Merit &amp; Normalisation of Marks</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Multi-Shift Formula</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Shortlisting of candidates for PET based on normalized CBT marks. Minimum qualifying cutoffs: UR: 40%, EWS: 40%, OBC: 30%, SC: 30%, ST: 30%.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50/50 border border-amber-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  S3
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Stage 3: Physical Efficiency Test (PET)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">3X Shortlist &bull; Qualifying</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Male: 35 kg weight carry for 100m in 2 min + 1000m run in 4 min 15 sec. Female: 20 kg weight carry for 100m in 2 min + 1000m run in 5 min 40 sec. (ExSM &amp; CCAA Exempted).
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  S4
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Stage 4: Document Verification (DV)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">1:1 Vacancy Ratio</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Railway/RRC-wise 1:1 calling based on CBT merit and qualifying PET. Scrutiny of 10th/ITI/NAC certificates, caste, EWS, and photo/signature upload on oirms-ir.gov.in/rrbdv.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  S5
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Stage 5: Pre-Appointment Medical Examination (ME)</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Railway Hospital Standards</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Testing of visual acuity (A2, A3, B1, C1) and general physical capability. Unfit candidates receive no alternative appointment.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/50 border border-emerald-200 rounded-xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  S6
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Stage 6: Final Empanelment &amp; Appointment Offer</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Final Allotment</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Zonal Railway administrations publish the provisional empanelment list and dispatch appointment letters following character verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP-BY-STEP HOW TO DOWNLOAD & CHECK ANSWER KEY CARD */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Official Steps to Download RRB Group D Answer Key &amp; Response Sheet
                </h3>
                <p className="text-xs text-slate-500">
                  Follow these 8 verified steps to access your evaluated question paper and file objections
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <strong className="text-slate-900">Open Official DigiALM Candidate Login:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Navigate to <a href={officialAnswerKeyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html</a> on your desktop or mobile browser.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div>
                  <strong className="text-slate-900">Enter Registration / Enrollment Credentials:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Input your RRB Registration Number and User Password (or Date of Birth in DDMMYYYY format as officially designated).
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <div>
                  <strong className="text-slate-900">Complete Security Captcha Verification &amp; Login:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Solve the visual alphanumeric captcha displayed on the screen and click on the "Login" button.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  4
                </span>
                <div>
                  <strong className="text-slate-900">Navigate to Candidate Response Tab:</strong>
                  <p className="text-slate-600 mt-0.5">
                    On your candidate dashboard, locate the tab titled <em>"Candidate Response"</em> or <em>"Question Paper &amp; Keys"</em>.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  5
                </span>
                <div>
                  <strong className="text-slate-900">Generate &amp; View Question Paper:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Click on the active link: <em>"To download your question paper for Level 1 Computer Based Test CEN 09/2025, click here to generate it"</em>.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  6
                </span>
                <div>
                  <strong className="text-slate-900">Compare Answers &amp; Evaluate Raw Score:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Compare your chosen option with the correct official option (indicated with a green checkmark). Apply +1 mark for each correct response and deduct 1/3 (0.33) marks for each incorrect response.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  7
                </span>
                <div>
                  <strong className="text-slate-900">Download &amp; Save PDF Copy:</strong>
                  <p className="text-slate-600 mt-0.5">
                    Press <kbd className="px-1.5 py-0.5 bg-slate-200 rounded text-slate-800 font-mono text-xs">Ctrl + P</kbd> on your keyboard, choose <em>"Save as PDF"</em> as destination, and keep an offline copy safe for PET and DV reference.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  8
                </span>
                <div>
                  <strong className="text-slate-900">Raise Objection / Challenge (Only if Window is Officially Open):</strong>
                  <p className="text-slate-600 mt-0.5">
                    Click on the <em>"Objection"</em> tab, choose the Question ID, select objection reason, attach supporting documents, and pay the prescribed fee online. If sustained, the fee is refunded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* OFFICIAL CBT EXAM PATTERN & MARKING SCHEME TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Official CEN 09/2025 CBT Exam Pattern &amp; Marks Distribution
                </h3>
                <p className="text-xs text-slate-500">
                  Total 100 Questions &bull; 90 Minutes Duration &bull; 1/3rd Negative Marking
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border border-slate-200 divide-y divide-slate-200">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    <th className="p-3 text-left">Subject / Section</th>
                    <th className="p-3 text-center">Number of Questions</th>
                    <th className="p-3 text-center">Maximum Marks</th>
                    <th className="p-3 text-left">Syllabus Standard &amp; Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  <tr>
                    <td className="p-3 font-bold">General Science</td>
                    <td className="p-3 text-center font-semibold">25</td>
                    <td className="p-3 text-center font-semibold">25</td>
                    <td className="p-3 text-slate-600">Physics, Chemistry, and Life Sciences of 10th standard level (CBSE)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Mathematics</td>
                    <td className="p-3 text-center font-semibold">25</td>
                    <td className="p-3 text-center font-semibold">25</td>
                    <td className="p-3 text-slate-600">BODMAS, Decimals, Fractions, LCM, HCF, Ratio, Percentages, Time &amp; Work, SI/CI, Algebra</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">General Intelligence &amp; Reasoning</td>
                    <td className="p-3 text-center font-semibold">30</td>
                    <td className="p-3 text-center font-semibold">30</td>
                    <td className="p-3 text-slate-600">Analogies, Series, Coding-Decoding, Venn Diagrams, Syllogism, Directions, Assumptions</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">General Awareness on Current Affairs</td>
                    <td className="p-3 text-center font-semibold">20</td>
                    <td className="p-3 text-center font-semibold">20</td>
                    <td className="p-3 text-slate-600">Science &amp; Tech, Sports, Culture, Personalities, Economics, Politics, National Events</td>
                  </tr>
                  <tr className="bg-blue-50/50 font-bold">
                    <td className="p-3 text-blue-900">Total CBT Paper</td>
                    <td className="p-3 text-center text-blue-900">100 Questions</td>
                    <td className="p-3 text-center text-blue-900">100 Marks</td>
                    <td className="p-3 text-blue-900">Duration: 90 Minutes (120 Minutes for Scribe Candidates)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PHYSICAL EFFICIENCY TEST (PET) STANDARDS TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Official Physical Efficiency Test (PET) Standards &bull; Para 14.2 CEN 09/2025
                </h3>
                <p className="text-xs text-slate-500">
                  Mandatory &amp; Qualifying in Nature &bull; Shortlisting @ 3 times vacancies
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50/40 border border-blue-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                  <h4 className="font-bold text-blue-900 text-sm">Male Candidates PET Criteria</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">2 Stages</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <strong className="text-slate-900 block font-semibold">1. Weight Carrying Test:</strong>
                    Lift and carry <strong>35 Kg of weight</strong> for a distance of <strong>100 meters in 2 minutes</strong> in one single chance without putting the weight down on the ground.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <strong className="text-slate-900 block font-semibold">2. Running Endurance Test:</strong>
                    Run for a distance of <strong>1000 meters in 4 minutes and 15 seconds</strong> in one single chance.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-rose-50/40 border border-rose-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between border-b border-rose-100 pb-2">
                  <h4 className="font-bold text-rose-900 text-sm">Female &amp; Transgender PET Criteria</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">2 Stages</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="p-2.5 bg-white rounded-lg border border-rose-100">
                    <strong className="text-slate-900 block font-semibold">1. Weight Carrying Test:</strong>
                    Lift and carry <strong>20 Kg of weight</strong> for a distance of <strong>100 meters in 2 minutes</strong> in one single chance without putting the weight down on the ground.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-rose-100">
                    <strong className="text-slate-900 block font-semibold">2. Running Endurance Test:</strong>
                    Run for a distance of <strong>1000 meters in 5 minutes and 40 seconds</strong> in one single chance.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
              <strong>Official Exemption Note:</strong> Persons with Benchmark Disabilities (PwBD), Ex-Servicemen (ExSM), and Course Completed Act Apprentices (CCAA) trained in Railway Establishments are <strong>exempted from the Physical Efficiency Test (PET)</strong> as per official CEN rules.
            </div>
          </div>

          {/* 50-SECTION EXPANDABLE ACCORDION (WORKING EXPAND ALL / COLLAPSE ALL) */}
          <Accordion
            sections={sections}
            title="Complete 50-Section Railway RRB Group D Exam & Answer Key Information Guide"
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
                  Official RRB Group D (CEN 09/2025) Important Links Table
                </h3>
                <p className="text-xs text-slate-500">
                  Strictly verified official Railway Recruitment Boards and Indian Railways links
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border border-slate-200 divide-y divide-slate-200">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    <th className="p-3 text-left">Link Description</th>
                    <th className="p-3 text-left">Official Action</th>
                    <th className="p-3 text-left">Category / Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-bold text-slate-800">Download Answer Key</td>
                    <td className="p-3">
                      <a
                        href={officialAnswerKeyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Candidate Login</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">rrb.digialm.com</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-800">Download Admit Card</td>
                    <td className="p-3">
                      <a
                        href={officialAdmitCardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-800 rounded-lg font-bold text-xs border border-purple-200"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Card</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">rrb.digialm.com</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-800">Download Exam City Details</td>
                    <td className="p-3">
                      <a
                        href={officialExamCityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg font-bold text-xs border border-amber-200"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>City Intimation</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">rrb.digialm.com</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-800">Revised Exam Schedule PDF</td>
                    <td className="p-3">
                      <a
                        href={officialRevisedScheduleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg font-bold text-xs border border-emerald-200"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">rrb.indianrailways.gov.in</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-800">Application Status</td>
                    <td className="p-3">
                      <a
                        href={officialAppStatusUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline"
                      >
                        <span>Check Status</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">rrbapply.gov.in</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-800">Apply Online Portal</td>
                    <td className="p-3">
                      <a
                        href={officialApplyOnlineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline"
                      >
                        <span>rrbapply.gov.in</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Online Application</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-800">Date Extension Notice PDF</td>
                    <td className="p-3">
                      <a
                        href={officialDateExtensionNoticeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-bold text-xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Corrigendum-4</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">rrbahmedabad.gov.in</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-800">Revised Vacancy Notice PDF</td>
                    <td className="p-3">
                      <a
                        href={officialRevisedVacancyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-bold text-xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Corrigendum-2</span>
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">rrbjammu.nic.in</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-bold text-slate-800">Official Indian Railways Website</td>
                    <td className="p-3">
                      <a
                        href={officialWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline"
                      >
                        <span>indianrailways.gov.in</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                    <td className="p-3 text-slate-600">Official Portal</td>
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
