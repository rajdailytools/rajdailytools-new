import React from 'react';
import { ActivePage, AdmissionRecord } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate, getCountdown } from '../utils/dateUtils';
import { generateNvsClass9_50Sections, NVS_CLASS_9_2027_ADMISSION } from '../data/nvsClass9Data';
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
  Download,
  School,
  Check,
  ChevronRight,
  Award
} from 'lucide-react';

interface NvsClass9AdmissionPageProps {
  admission?: AdmissionRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const NvsClass9AdmissionPage: React.FC<NvsClass9AdmissionPageProps> = ({
  admission = NVS_CLASS_9_2027_ADMISSION,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(admission.applicationLastDate, 'deadline');

  const applyOnlineUrl =
    admission.applyLink || 'https://cbseitms.nic.in/2026/nvsix_9';
  const officialProspectusUrl =
    admission.officialNotification ||
    'https://cbseitms.nic.in/2026/nvsix_9/assets/pdf/FINAL_CLASS_IX_PROSPECTUS_2027.pdf';
  const officialPortalUrl =
    admission.officialLink || 'https://cbseitms.rcil.gov.in/nvs/';
  const nvsHqUrl = 'https://www.navodaya.gov.in';

  const sections50 = generateNvsClass9_50Sections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation - Strictly Admission Form Category */}
      <Breadcrumb
        items={[
          { label: 'Admission Form', page: 'admission' },
          { label: 'NVS Class 9 Lateral Entry Admission 2027-28' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Exam & Admission Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-3xl flex items-center justify-center shrink-0 shadow-xs">
              🏫
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Navodaya Vidyalaya Samiti &bull; Govt. of India
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Application Active (LEST 2027)
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  665 Functional JNVs
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-display tracking-tight">
                NVS Class 9 Admission 2027-28 (LEST 2027)
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Jawahar Navodaya Vidyalaya Lateral Entry Selection Test for Class IX &bull; Free Residential Education
              </p>
            </div>
          </div>

          {/* Social Share Badges */}
          <div className="shrink-0 self-start sm:self-auto">
            <ShareButtons
              title="NVS Class 9 Admission 2027-28 – Lateral Entry Selection Test (LEST)"
              url={
                typeof window !== 'undefined'
                  ? window.location.href
                  : 'https://rajdailytools.in/nvs-class-9-admission-2027.html'
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
            <span>Apply Online (cbseitms.nic.in)</span>
          </a>

          <a
            href={officialProspectusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Download Official Prospectus (PDF)</span>
          </a>

          <a
            href={officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <Building2 className="w-4 h-4 text-slate-600" />
            <span>NVS Admission Portal</span>
          </a>

          <a
            href={nvsHqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition-all cursor-pointer text-center"
          >
            <School className="w-4 h-4 text-slate-600" />
            <span>Navodaya Vidyalaya Samiti HQ</span>
          </a>
        </div>
      </div>

      {/* Main Grid: Content Column (8 cols) + Right Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Active Application Notice & Deadline Alert Banner */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-2xl p-5 sm:p-6 text-white shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-amber-300" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
                    Registration Deadline Approaching
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Last Date to Apply: 30 September 2026 (Wednesday)
                </h3>
                <p className="text-xs text-blue-100">
                  Selection Test (LEST 2027) on <strong>10 April 2027 (Saturday, 11:00 AM – 01:30 PM)</strong> &bull; Free Application
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

          {/* Key Highlights Quick Snapshot Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>NVS Class IX Admission 2027-28 Highlights</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Organization</span>
                <span className="font-bold text-slate-900 text-sm">Navodaya Vidyalaya Samiti (Ministry of Education)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Target Class</span>
                <span className="font-bold text-blue-700 text-sm">Class IX (Lateral Entry Session 2027-28)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Total JNVs Participating</span>
                <span className="font-bold text-slate-900 text-sm">665 Functional JNVs across 27 States &amp; 8 UTs</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Registration Fee</span>
                <span className="font-bold text-emerald-700 text-sm">₹0 / 100% Free of Cost (All Categories)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Permissible Date of Birth</span>
                <span className="font-bold text-slate-900 text-sm">01 May 2012 to 31 July 2014 (Both inclusive)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Class 8 Academic Requirement</span>
                <span className="font-bold text-emerald-700 text-sm">Studying 8th in 2026-27 session in same district</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Selection Test Date &amp; Shift</span>
                <span className="font-bold text-rose-700 text-sm">10 April 2027 (Saturday, 11:00 AM – 01:30 PM)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block">Admit Card &amp; Result Status</span>
                <span className="font-bold text-amber-600 text-sm">Not Released / To Be Updated</span>
              </div>
            </div>
          </div>

          {/* VISUAL PROCESS DIAGRAM 1: ELIGIBILITY VERIFICATION FLOW CHART */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Eligibility Verification Flowchart (Check Step-by-Step)
                </h3>
                <p className="text-xs text-slate-500">
                  Visual roadmap to confirm if you satisfy all three mandatory conditions before applying
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-blue-200 text-blue-900 font-bold text-[10px]">
                      Step 1
                    </span>
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-blue-950 text-xs mb-1">Age Verification</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Born between <strong>01-05-2012</strong> and <strong>31-07-2014</strong>?
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-blue-800 bg-white/80 px-2 py-1 rounded border border-blue-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Applies to ALL categories
                </div>
              </div>

              <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-900 font-bold text-[10px]">
                      Step 2
                    </span>
                    <School className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-indigo-950 text-xs mb-1">Class VIII Session</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Currently enrolled in <strong>Class VIII in Session 2026-27</strong> in a recognized school?
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-indigo-800 bg-white/80 px-2 py-1 rounded border border-indigo-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Repeaters strictly barred
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold text-[10px]">
                      Step 3
                    </span>
                    <Building2 className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-amber-950 text-xs mb-1">District Matching</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    School located in the <strong>same revenue district</strong> where candidate resides and JNV is situated?
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-amber-800 bg-white/80 px-2 py-1 rounded border border-amber-100 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Twin condition rule
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-bold text-[10px]">
                      Step 4
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-emerald-950 text-xs mb-1">Status: Eligible!</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Ready to submit free online application on <strong>cbseitms.nic.in</strong>.
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-emerald-800 bg-white/80 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1">
                  <Award className="w-3 h-3 text-emerald-600" /> Cost: ₹0 / Free
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL PROCESS DIAGRAM 2: SELECTION TEST & 85-MARK MERIT ROADMAP */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-200">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Selection Test &amp; 85-Mark Merit Roadmap (Class IX LEST)
                </h3>
                <p className="text-xs text-slate-500">
                  How 100 test questions are filtered through sectional cutoffs and calculated into an 85-mark merit score
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-[10px] font-bold text-blue-600 uppercase">Phase 1</div>
                <div className="text-xs font-bold text-blue-900 mt-1">Written Test</div>
                <div className="text-[10px] text-blue-700 mt-0.5">100 MCQs / 100 Marks</div>
              </div>

              <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200">
                <div className="text-[10px] font-bold text-rose-600 uppercase">Phase 2</div>
                <div className="text-xs font-bold text-rose-900 mt-1">Sectional Cutoff</div>
                <div className="text-[10px] text-rose-700 mt-0.5">Pass in All 4 Subjects</div>
              </div>

              <div className="p-3.5 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-[10px] font-bold text-purple-600 uppercase">Phase 3</div>
                <div className="text-xs font-bold text-purple-900 mt-1">Merit Score /85</div>
                <div className="text-[10px] text-purple-700 mt-0.5">Math+Sci+Higher Lang</div>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-[10px] font-bold text-amber-600 uppercase">Phase 4</div>
                <div className="text-xs font-bold text-amber-900 mt-1">District Merit</div>
                <div className="text-[10px] text-amber-700 mt-0.5">Open &amp; Rural Quota</div>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-[10px] font-bold text-emerald-600 uppercase">Phase 5</div>
                <div className="text-xs font-bold text-emerald-900 mt-1">Verification &amp; TC</div>
                <div className="text-[10px] text-emerald-700 mt-0.5">DEO Countersignature</div>
              </div>
            </div>
          </div>

          {/* EXAM PATTERN & SECTIONAL COMPOSITION TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>NVS Class IX Test Pattern &amp; Merit Formula</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Subject / Paper</th>
                    <th className="p-3 text-center">Questions</th>
                    <th className="p-3 text-center">Max Marks</th>
                    <th className="p-3">Role in Merit List</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  <tr>
                    <td className="p-3 font-bold text-blue-700">English</td>
                    <td className="p-3 text-center font-mono">15</td>
                    <td className="p-3 text-center font-mono font-bold">15</td>
                    <td className="p-3 text-slate-600">Considered for merit ONLY if score is higher than Hindi score</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-blue-700">Hindi</td>
                    <td className="p-3 text-center font-mono">15</td>
                    <td className="p-3 text-center font-mono font-bold">15</td>
                    <td className="p-3 text-slate-600">Considered for merit ONLY if score is higher than English score</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-purple-700">Mathematics</td>
                    <td className="p-3 text-center font-mono">35</td>
                    <td className="p-3 text-center font-mono font-bold">35</td>
                    <td className="p-3 font-bold text-purple-900">Compulsorily counted in Merit Score (35 Marks)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-emerald-700">General Science</td>
                    <td className="p-3 text-center font-mono">35</td>
                    <td className="p-3 text-center font-mono font-bold">35</td>
                    <td className="p-3 font-bold text-emerald-900">Compulsorily counted in Merit Score (35 Marks)</td>
                  </tr>
                  <tr className="bg-slate-50 font-bold border-t-2 border-slate-200">
                    <td className="p-3 text-slate-900">Total Test Paper</td>
                    <td className="p-3 text-center font-mono">100</td>
                    <td className="p-3 text-center font-mono">100</td>
                    <td className="p-3 text-blue-800 font-bold">Merit Calculated Out of 85 Marks (Math + Science + 1 Language)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              *Candidate must also have secured minimum qualifying marks in each of the 4 test sections to qualify.
            </p>
          </div>

          {/* REAL-LIFE EXAMPLES ACCORDION / HIGHLIGHT PANEL */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Real-Life Eligibility &amp; Selection Examples
                </h3>
                <p className="text-xs text-slate-500">
                  Practical illustrations explaining complicated rules (Age, Cutoff, Merit &amp; Quota)
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-blue-700 text-xs uppercase tracking-wider block mb-1">
                  Example 1: Age Eligibility Boundary
                </span>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Scenario:</strong> Candidate Amit was born on <strong>25th April 2012</strong>, while Candidate Neha was born on <strong>5th May 2012</strong>.
                  <br />
                  <strong>Result:</strong> Neha is <span className="font-bold text-emerald-700">ELIGIBLE</span> because 5 May 2012 falls within the window 01-05-2012 to 31-07-2014. Amit is <span className="font-bold text-rose-700">NOT ELIGIBLE</span> because he was born 6 days before the permissible cutoff date (01 May 2012). No category relaxation applies to age.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-emerald-700 text-xs uppercase tracking-wider block mb-1">
                  Example 2: 85-Mark Merit Calculation
                </span>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Scenario:</strong> Candidate Rohit scored: English = 14/15, Hindi = 11/15, Mathematics = 33/35, and General Science = 31/35.
                  <br />
                  <strong>Result:</strong> Since Rohit's English score (14) is higher than his Hindi score (11), his merit score is calculated as: <strong>33 (Maths) + 31 (Science) + 14 (English) = 78 Marks out of 85</strong>. His Hindi score (11) satisfied the sectional qualifying cutoff but is not added to the merit total.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-rose-700 text-xs uppercase tracking-wider block mb-1">
                  Example 3: Sectional Cut-off Disqualification
                </span>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Scenario:</strong> Candidate Suresh scored: Mathematics = 35/35, Science = 34/35, English = 14/15, but scored <strong>02/15 in Hindi</strong> (below the minimum qualifying threshold). Total = 85/100.
                  <br />
                  <strong>Result:</strong> Suresh is <span className="font-bold text-rose-700">DISQUALIFIED</span> because every candidate must secure minimum qualifying marks in all 4 subjects individually.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-purple-700 text-xs uppercase tracking-wider block mb-1">
                  Example 4: Tie-Breaker Resolution Scenario
                </span>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Scenario:</strong> Candidate Deepa (Girl) and Candidate Sunil (Boy) both scored identical 80/85 merit marks for the vacant seat in their district.
                  <br />
                  <strong>Result:</strong> Under <strong>Sequence (a)</strong> of the tie-breaking rules, <strong>female candidates receive first preference</strong> over male candidates. Therefore, Deepa is provisionally selected.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-amber-700 text-xs uppercase tracking-wider block mb-1">
                  Example 5: Rural vs Urban Quota Classification
                </span>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Scenario:</strong> Student lives in a rural village but has enrolled in a Class VIII school situated inside the municipal limits of the district headquarters.
                  <br />
                  <strong>Result:</strong> Under NVS rules, studying in an urban school even for a single day classifies the candidate as an <strong>Urban candidate</strong> for seat allocation.
                </p>
              </div>
            </div>
          </div>

          {/* STEP-BY-STEP HOW TO APPLY GUIDE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  How to Submit NVS Class 9 Lateral Entry Application Form
                </h3>
                <p className="text-xs text-slate-500">
                  Step-by-step instructions for online registration on cbseitms.nic.in
                </p>
              </div>
            </div>

            <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li>
                Open the official CBSE ITMS registration portal: <strong>https://cbseitms.nic.in/2026/nvsix_9</strong> or click the link from <strong>www.navodaya.gov.in</strong>.
              </li>
              <li>
                Click on <strong>"Class IX Lateral Entry Registration 2027"</strong> and review the instructions.
              </li>
              <li>
                Select State and District where the candidate is currently studying Class VIII during session 2026-27.
              </li>
              <li>
                Enter candidate particulars: Name, Father's Name, Mother's Name, Date of Birth (between 01-05-2012 and 31-07-2014), Gender, Category, and Aadhaar number / APAAR ID.
              </li>
              <li>
                Enter academic Class VIII school information, Board affiliation (CBSE/State Board/ICSE), and Rural/Urban classification of the school.
              </li>
              <li>
                Upload candidate passport photo, candidate signature, and parent/guardian signature (JPG format, 10 KB to 100 KB).
              </li>
              <li>
                Submit the form (<strong>Fee is ₹0 / Free</strong>) and save the generated <strong>Registration Number</strong> and acknowledgment page.
              </li>
            </ol>

            <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong>Free Helpdesks at Local JNVs:</strong> Candidates without internet or computer access can visit their district Jawahar Navodaya Vidyalaya, where staff will upload and submit the form completely free of cost.
              </div>
            </div>
          </div>

          {/* APPLICATION TOOLS & UTILITIES */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Application Tools &amp; Utilities (NVS Class 9)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Client-side utilities calibrated for NVS CBSE-ITMS upload guidelines.
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
                      10 KB – 100 KB &bull; JPG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Photo Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Crop and resize your candidate photograph to meet exact cbseitms portal upload limits.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `photo-resizer?exam=${admission.slug}`);
                    } else {
                      window.location.hash = `#/tools/photo-resizer?exam=${admission.slug}`;
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
                      10 KB – 100 KB &bull; JPG
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Signature Resizer</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Format candidate &amp; parent signatures strictly between 10 KB and 100 KB in JPG format.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `signature-resizer?exam=${admission.slug}`);
                    } else {
                      window.location.hash = `#/tools/signature-resizer?exam=${admission.slug}`;
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
                      01-05-2012 to 31-07-2014
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">NVS Age Calculator</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Check if your exact date of birth falls strictly within the permissible Navodaya Class IX window.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `age-calculator?exam=${admission.slug}`);
                    } else {
                      window.location.hash = `#/tools/age-calculator?exam=${admission.slug}`;
                    }
                  }}
                  className="mt-3.5 w-full py-2 px-3 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Calculate Age Eligibility</span>
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
                      Twin District Rule
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">District Eligibility Checker</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Verify Class 8 school district jurisdiction, rural/urban quota, and board criteria.
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tool-detail', `eligibility-calculator?exam=${admission.slug}`);
                    } else {
                      window.location.hash = `#/tools/eligibility-calculator?exam=${admission.slug}`;
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

          {/* 50-SECTION EXPANDABLE SYSTEM (EXPAND ALL / COLLAPSE ALL) */}
          <Accordion
            sections={sections50}
            title="Complete 50-Section NVS Class 9 Admission Prospectus Guide"
            defaultOpenFirst={true}
          />

          {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
          {admission.faq && admission.faq.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span>Frequently Asked Questions ({admission.faq.length})</span>
              </h3>
              <div className="space-y-3">
                {admission.faq.map((f, idx) => (
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
          <RightSidebar
            currentExam={{
              id: admission.id,
              slug: admission.slug,
              examName: admission.course,
              organization: admission.university,
              category: 'Admission',
              postName: 'Class IX Lateral Entry Selection Test (LEST 2027)',
              totalVacancy: 'Vacant Seats in 665 JNVs',
              applicationStartDate: admission.applicationStartDate,
              applicationLastDate: admission.applicationLastDate,
              admitCardDate: 'Not Released / To Be Updated',
              examDate: admission.entranceExamDate || '2027-04-10',
              answerKeyDate: 'Not Released / To Be Updated',
              resultDate: admission.meritListDate || 'Not Released / To Be Updated',
              cutOffDate: 'Not Released / To Be Updated',
              status: 'APPLICATION_OPEN',
              officialWebsite: 'https://cbseitms.rcil.gov.in/nvs/',
              officialNotification:
                'https://cbseitms.nic.in/2026/nvsix_9/assets/pdf/FINAL_CLASS_IX_PROSPECTUS_2027.pdf',
              applyLink:
                'https://cbseitms.nic.in/2026/nvsix_9',
              logoIcon: '🏫',
              description: admission.description,
              shortSummary:
                'NVS Class 9 Lateral Entry Admission 2027-28 online form open till 30-09-2026 for 665 JNVs. Exam on 10-04-2027.',
              applicationFee: [
                { category: 'All Candidates (UR/OBC/SC/ST/Girls/BPL)', amount: '₹0 / Free' }
              ],
              importantDates: [
                { label: 'Online Application Commenced', date: 'Active' },
                { label: 'Last Date to Apply Online', date: '30 September 2026', isHighlight: true },
                { label: 'Admit Card Release', date: 'Not Released / To Be Updated' },
                { label: 'Lateral Entry Test (LEST)', date: '10 April 2027 (11:00 AM)', isHighlight: true },
                { label: 'Selection Result / Merit List', date: 'Not Released / To Be Updated' }
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
