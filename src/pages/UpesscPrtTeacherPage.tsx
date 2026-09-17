import React, { useState, useMemo } from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate, getCountdown } from '../utils/dateUtils';
import {
  UPESSC_DISTRICT_VACANCIES,
  generateUpesscPrt50Sections,
  UPESSC_PRT_TEACHER_2026_EXAM
} from '../data/upesscPrtTeacherData';
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
  Users,
  Award,
  DollarSign,
  Search,
  CheckSquare,
  AlertTriangle,
  FileCheck,
  Info,
  ChevronDown,
  ChevronUp,
  Calculator,
  UserCheck,
  PhoneCall,
  Mail,
  Scale
} from 'lucide-react';

interface UpesscPrtTeacherPageProps {
  exam?: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const UpesscPrtTeacherPage: React.FC<UpesscPrtTeacherPageProps> = ({
  exam = UPESSC_PRT_TEACHER_2026_EXAM,
  onNavigate,
  depth = 0
}) => {
  const [districtSearch, setDistrictSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'urban' | 'attached'>('urban');

  // Score Calculator state
  const [correctCount, setCorrectCount] = useState<number>(90);
  const [wrongCount, setWrongCount] = useState<number>(15);

  const calculatedScore = useMemo(() => {
    const unattempted = Math.max(0, 120 - (correctCount + wrongCount));
    const grossMarks = correctCount * 3;
    const penaltyMarks = wrongCount * 1;
    const netMarks = grossMarks - penaltyMarks;
    const percentage = ((netMarks / 360) * 100).toFixed(2);
    return { grossMarks, penaltyMarks, netMarks, percentage, unattempted };
  }, [correctCount, wrongCount]);

  const filteredDistricts = useMemo(() => {
    if (!districtSearch.trim()) return UPESSC_DISTRICT_VACANCIES;
    const q = districtSearch.toLowerCase();
    return UPESSC_DISTRICT_VACANCIES.filter((d) =>
      d.district.toLowerCase().includes(q)
    );
  }, [districtSearch]);

  const countdown = getCountdown(exam.applicationLastDate, 'deadline');
  const sections = useMemo(() => generateUpesscPrt50Sections(), []);

  const applyOnlineUrl = exam.applyLink || 'https://apply.upessc.org/';
  const officialWebsiteUrl = exam.officialWebsite || 'https://upessc.up.gov.in/';
  const officialNotificationUrl =
    exam.officialNotification ||
    'https://www.upessc.up.gov.in/Notice/a429-726e-4862-f3dc-8a6f.pdf';
  const officialSyllabusUrl =
    'https://www.upessc.up.gov.in/syllabus/837218cf-1d9a-4252-a08c-404719d1b9d9.pdf';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Latest Jobs', page: 'latest-jobs' },
          { label: 'Teaching Jobs' },
          { label: 'UP State Jobs' },
          { label: 'UPESSC PRT Assistant Teacher Recruitment 2026' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Exam & Recruitment Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-3xl flex items-center justify-center shrink-0 shadow-xs">
              📚
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Applications Open (Advt 05/2026)
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  UPESSC Prayagraj
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  Total 12,405 Posts
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  Pay Level-6 (₹35,400 – ₹1,12,400)
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
                UPESSC PRT Assistant Teacher Recruitment 2026
              </h1>
              <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">
                उत्तर प्रदेश शिक्षा सेवा चयन आयोग – सहायक अध्यापक चयन परीक्षा 2026 (प्राथमिक शहरी 11,508 + सम्बद्ध प्राइमरी 897 = 12,405 पद)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-col items-end gap-2 shrink-0">
            <a
              href={applyOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl shadow-xs transition-all duration-150"
            >
              Apply Online (OTR)
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

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Total Vacancy</span>
            <span className="text-lg font-black text-slate-900 mt-0.5 block">12,405 Posts</span>
            <span className="text-[11px] text-emerald-700 font-semibold">Urban 11,508 + Attached 897</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Application Start</span>
            <span className="text-lg font-black text-slate-900 mt-0.5 block">16 Sep 2026</span>
            <span className="text-[11px] text-slate-600 font-semibold">OTR Mandatory</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Fee Last Date</span>
            <span className="text-lg font-black text-amber-900 mt-0.5 block">15 Oct 2026</span>
            <span className="text-[11px] text-amber-800 font-semibold">{countdown.text}</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Correction Last Date</span>
            <span className="text-lg font-black text-slate-900 mt-0.5 block">19 Oct 2026</span>
            <span className="text-[11px] text-slate-600 font-semibold">Online Window</span>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">Exam Date</span>
            <span className="text-lg font-black text-blue-900 mt-0.5 block">03-04 Dec 2026</span>
            <span className="text-[11px] text-blue-700 font-semibold">OMR Written Test</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Pay Matrix</span>
            <span className="text-lg font-black text-slate-900 mt-0.5 block">Level-6</span>
            <span className="text-[11px] text-slate-600 font-semibold">₹35,400 – ₹1,12,400</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">

          {/* VISUAL 1: Recruitment Overview & Vacancy Architecture Diagram */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-indigo-600" />
              1. UPESSC Assistant Teacher 2026: Vacancy Architecture & Cadres
            </h2>
            <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 border border-indigo-100 rounded-xl p-4 sm:p-6">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-100/80 px-3 py-1 rounded-full border border-indigo-200">
                  Advt No. 05/2026 Grand Total
                </span>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">12,405 Posts</div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">State-wide primary assistant teacher selection by UPESSC Prayagraj</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Cadre A */}
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 shadow-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                    <span className="text-xs font-bold text-blue-800 uppercase">Cadre 1 &bull; Table 01</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">Basic Education</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mt-2">
                    Assistant Teacher Primary Urban
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">शहरी क्षेत्र के प्राथमिक विद्यालय (बेसिक शिक्षा विभाग)</p>
                  <div className="text-2xl font-black text-blue-700">11,508 Posts</div>
                  <div className="grid grid-cols-5 gap-1 text-center text-xs font-bold mt-3 pt-3 border-t border-slate-100">
                    <div className="bg-slate-50 p-1 rounded">
                      <div className="text-[10px] text-slate-500">UR</div>
                      <div className="text-slate-900">4,746</div>
                    </div>
                    <div className="bg-slate-50 p-1 rounded">
                      <div className="text-[10px] text-slate-500">EWS</div>
                      <div className="text-slate-900">1,116</div>
                    </div>
                    <div className="bg-slate-50 p-1 rounded">
                      <div className="text-[10px] text-slate-500">OBC</div>
                      <div className="text-slate-900">3,069</div>
                    </div>
                    <div className="bg-slate-50 p-1 rounded">
                      <div className="text-[10px] text-slate-500">SC</div>
                      <div className="text-slate-900">2,379</div>
                    </div>
                    <div className="bg-slate-50 p-1 rounded">
                      <div className="text-[10px] text-slate-500">ST</div>
                      <div className="text-slate-900">198</div>
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] text-slate-600 flex justify-between px-1">
                    <span>Horizontal: PwD 429 &bull; DFF 198 &bull; Ex-Army 540</span>
                  </div>
                </div>

                {/* Cadre B */}
                <div className="bg-white border-2 border-purple-200 rounded-xl p-4 shadow-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-purple-100">
                    <span className="text-xs font-bold text-purple-800 uppercase">Cadre 2 &bull; Table 02</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-900">Secondary Education</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mt-2">
                    Assistant Teacher Attached Primary
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">सम्बद्ध प्राइमरी (अशासकीय सहायता प्राप्त विद्यालय)</p>
                  <div className="text-2xl font-black text-purple-700">897 Posts</div>
                  <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100">
                    <div className="bg-purple-50/60 p-2 rounded-lg border border-purple-100 text-center">
                      <span className="text-xs font-bold text-purple-900 block">Boys Schools (बालक)</span>
                      <span className="text-lg font-black text-purple-800">473 Posts</span>
                      <span className="text-[10px] text-purple-700 block">UR 196 | SC 189 | OBC 84 | EWS 4</span>
                    </div>
                    <div className="bg-pink-50/60 p-2 rounded-lg border border-pink-100 text-center">
                      <span className="text-xs font-bold text-pink-900 block">Girls Schools (बालिका)</span>
                      <span className="text-lg font-black text-pink-800">424 Posts</span>
                      <span className="text-[10px] text-pink-700 block">UR 182 | SC 159 | OBC 80 | EWS 3</span>
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] text-slate-600 text-center">
                    <span>Combined: UR 378 | SC 348 | ST 0 | OBC 164 | EWS 7 = 897</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL 2: Important Dates Timeline */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-emerald-600" />
              2. Important Dates & Recruitment Schedule Timeline
            </h2>
            <div className="relative border-l-2 border-emerald-200 ml-4 pl-4 space-y-4">
              {exam.importantDates?.map((item, index) => (
                <div key={index} className="relative group">
                  <div
                    className={`absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ${
                      item.isHighlight ? 'bg-emerald-600 ring-4 ring-emerald-100' : 'bg-slate-300'
                    }`}
                  />
                  <div className="bg-slate-50 group-hover:bg-slate-100 transition-colors p-3 rounded-xl border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-sm font-bold text-slate-800">{item.label}</span>
                      <span
                        className={`text-xs font-black px-2.5 py-0.5 rounded-md ${
                          item.isHighlight
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            : 'bg-slate-200/70 text-slate-700'
                        }`}
                      >
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL 3: OTR to Submission Flowchart */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <CheckSquare className="w-5 h-5 text-blue-600" />
              3. OTR-Based Application Flowchart & Steps (100% Online)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center mx-auto mb-2">1</div>
                <div className="font-black text-sm text-slate-900">OTR Registration</div>
                <div className="text-xs text-slate-600 mt-1">One Time Registration on upessc.up.gov.in portal</div>
              </div>
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center mx-auto mb-2">2</div>
                <div className="font-black text-sm text-slate-900">Fill Application</div>
                <div className="text-xs text-slate-600 mt-1">Select School Preference & Qualifications</div>
              </div>
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center mx-auto mb-2">3</div>
                <div className="font-black text-sm text-slate-900">Upload Media</div>
                <div className="text-xs text-slate-600 mt-1">Photo (30-300KB), Sign (10-200KB), PDF Docs (50-500KB)</div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mx-auto mb-2">4</div>
                <div className="font-black text-sm text-slate-900">Fee & 3 Prints</div>
                <div className="text-xs text-slate-600 mt-1">Pay online & preserve 3 hard copies for DV stage</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Correction Policy:</strong> Permitted modifications can be completed until 19 October 2026. Note that Category, Sub-Category, DOB, and Gender cannot be altered after final submission.
              </span>
            </div>
          </div>

          {/* VISUAL 4 & 5: Eligibility Comparison & Flowchart */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              4. Separate Cadre-wise Eligibility Criteria (Clause 7)
            </h2>
            <div className="space-y-4">
              {/* Post A */}
              <div className="border border-blue-200 rounded-xl p-4 bg-blue-50/30">
                <div className="flex items-center gap-2 text-sm font-black text-blue-900 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Post A: Assistant Teacher Primary Urban (बेसिक शिक्षा विभाग – 11,508 Posts)
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                  <li><strong>Graduation Degree:</strong> Bachelor’s degree from a recognized University in India or equivalent.</li>
                  <li>
                    <strong>Teacher Training Qualification:</strong> Any one of the following:
                    <ul className="list-circle list-inside ml-4 mt-1 text-slate-600 space-y-1">
                      <li>Basic Teacher Certificate (B.T.C.) [Now conducted as D.El.Ed.]</li>
                      <li>2-Year BTC (Urdu)</li>
                      <li>Special BTC</li>
                      <li>2-Year Diploma in Special Education approved by Rehabilitation Council of India (RCI)</li>
                      <li>4-Year Bachelor of Elementary Education (B.El.Ed.)</li>
                      <li>2-Year Diploma in Elementary Education under NCTE 2002 Regulations</li>
                    </ul>
                  </li>
                  <li><strong>Teacher Eligibility Test (TET):</strong> Primary Level (Classes 1 to 5) passed, conducted by UP Government (UPTET Paper-I) or Central Government (CTET Paper-I).</li>
                  <li><strong>Age Limit:</strong> 21 to 40 Years as on 01 July 2026 (5 yrs relaxation for UP SC/ST/OBC, 15 yrs for PwD, up to 60 yrs for Shiksha Mitra).</li>
                </ul>
              </div>

              {/* Post B */}
              <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/30">
                <div className="flex items-center gap-2 text-sm font-black text-purple-900 mb-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  Post B: Assistant Teacher Attached Primary (अशासकीय सहायता प्राप्त विद्यालय – 897 Posts)
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                  <li><strong>Graduation Degree:</strong> Bachelor’s degree from a recognized University or Deemed University.</li>
                  <li><strong>Teacher Training:</strong> B.T.C. or D.El.Ed. degree from an NCTE-recognized curriculum.</li>
                  <li><strong>TET Requirement:</strong> Primary Level (Classes 1 to 5) passed, conducted by Uttar Pradesh Government or Government of India.</li>
                  <li><strong>Age Limit:</strong> Minimum 21 Years as on 01 July 2026; Maximum age extends up to retirement age of 62 years.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* VISUAL 6: Exam Pattern & Infographic (120 Qs, 360 Marks, 2 Hours, +3/-1) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-indigo-600" />
              5. Scheme of Written Examination & Official Marking Infographic
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Total Questions</span>
                <span className="text-2xl font-black text-slate-900 mt-1 block">120 MCQs</span>
                <span className="text-[10px] text-slate-500">Objective 4 Options</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Total Marks</span>
                <span className="text-2xl font-black text-slate-900 mt-1 block">360 Marks</span>
                <span className="text-[10px] text-slate-500">3 Marks Each</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Duration</span>
                <span className="text-2xl font-black text-slate-900 mt-1 block">2 Hours</span>
                <span className="text-[10px] text-slate-500">120 Minutes</span>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-3">
                <span className="text-[11px] font-bold text-rose-700 uppercase block">Negative Marking</span>
                <span className="text-2xl font-black text-rose-800 mt-1 block">-1 Mark</span>
                <span className="text-[10px] text-rose-600">Wrong / Multi Answer</span>
              </div>
            </div>

            {/* Official Subject-wise Topics Table from Syllabus PDF */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Subject / Domain</th>
                    <th className="p-3 text-center">Questions</th>
                    <th className="p-3 text-center">Marks</th>
                    <th className="p-3">Core Topics (Official Syllabus PDF)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Language (Hindi, English, Sanskrit)</td>
                    <td className="p-3 text-center font-bold">25</td>
                    <td className="p-3 text-center font-bold text-indigo-700">75</td>
                    <td className="p-3 text-xs">Grammar, Comprehension passages, vocabulary, sentence structuring, literary fundamentals.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Mathematics (गणित)</td>
                    <td className="p-3 text-center font-bold">20</td>
                    <td className="p-3 text-center font-bold text-indigo-700">60</td>
                    <td className="p-3 text-xs">Numerical ability, decimal, fractions, percentages, profit & loss, simple interest, algebra, geometry, mensuration, statistics.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Science (विज्ञान)</td>
                    <td className="p-3 text-center font-bold">10</td>
                    <td className="p-3 text-center font-bold text-indigo-700">30</td>
                    <td className="p-3 text-xs">Everyday science, kinematics, force, energy, optics, acoustics, matter & chemical changes, living world, human physiology & nutrition.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Environment & Social Studies (पर्यावरण व सामाजिक अध्ययन)</td>
                    <td className="p-3 text-center font-bold">15</td>
                    <td className="p-3 text-center font-bold text-indigo-700">45</td>
                    <td className="p-3 text-xs">Physical geography, rivers, mountains, continents, Indian Constitution, governance, Indian freedom struggle, social reforms, road safety.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Teaching Methodology (शिक्षण कौशल)</td>
                    <td className="p-3 text-center font-bold">12</td>
                    <td className="p-3 text-center font-bold text-indigo-700">36</td>
                    <td className="p-3 text-xs">Methods of teaching, learning theories, current Indian education, inclusive classroom, continuous comprehensive evaluation.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Child Psychology & Pedagogy (बाल मनोविज्ञान)</td>
                    <td className="p-3 text-center font-bold">12</td>
                    <td className="p-3 text-center font-bold text-indigo-700">36</td>
                    <td className="p-3 text-xs">Developmental stages of children, factors affecting learning, identification of learning deficits, special needs pedagogy.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Life Skill, Management & Aptitude (जीवन कौशल)</td>
                    <td className="p-3 text-center font-bold">10</td>
                    <td className="p-3 text-center font-bold text-indigo-700">30</td>
                    <td className="p-3 text-xs">Professional conduct & ethics, teacher as facilitator and guide, constitutional & human values, motivation techniques.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">General Knowledge & Current Affairs (सामान्य ज्ञान)</td>
                    <td className="p-3 text-center font-bold">10</td>
                    <td className="p-3 text-center font-bold text-indigo-700">30</td>
                    <td className="p-3 text-xs">Prominent national & international happenings, UP Special GK, arts & culture, sports, honors & awards, books & authors.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Logical Knowledge / Reasoning (तार्किक ज्ञान)</td>
                    <td className="p-3 text-center font-bold">3</td>
                    <td className="p-3 text-center font-bold text-indigo-700">9</td>
                    <td className="p-3 text-xs">Analogies, coding-decoding, series, Venn diagrams, directional tests, binary logic.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Information Technology (सूचना तकनीकी)</td>
                    <td className="p-3 text-center font-bold">3</td>
                    <td className="p-3 text-center font-bold text-indigo-700">9</td>
                    <td className="p-3 text-xs">Computers, internet, open educational resources (OER), digital classroom teaching aids.</td>
                  </tr>
                  <tr className="bg-slate-100 font-black text-slate-900">
                    <td className="p-3">TOTAL (Full Question Paper)</td>
                    <td className="p-3 text-center">120 Questions</td>
                    <td className="p-3 text-center text-indigo-800">360 Marks</td>
                    <td className="p-3 text-xs font-semibold">2 Hours &bull; Bilingual (Hindi &amp; English) &bull; OMR Based</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Interactive Score Estimator */}
            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900 mb-3">
                <Calculator className="w-4 h-4 text-indigo-600" />
                Interactive Score Estimator (+3 / -1 Rule)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Correct Questions (+3 marks each): {correctCount}
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={120}
                    value={correctCount}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setCorrectCount(val);
                      if (val + wrongCount > 120) setWrongCount(120 - val);
                    }}
                    className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Wrong Questions (-1 mark each): {wrongCount}
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={120 - correctCount}
                    value={wrongCount}
                    onChange={(e) => setWrongCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3 pt-3 border-t border-slate-200 text-center text-xs">
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block">Gross Score</span>
                  <span className="font-black text-emerald-700 text-sm">+{calculatedScore.grossMarks}</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block">Penalty (-1)</span>
                  <span className="font-black text-rose-700 text-sm">-{calculatedScore.penaltyMarks}</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block">Net Marks</span>
                  <span className="font-black text-indigo-700 text-sm">{calculatedScore.netMarks} / 360</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block">Percentage</span>
                  <span className="font-black text-slate-900 text-sm">{calculatedScore.percentage}%</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block">Unattempted</span>
                  <span className="font-black text-slate-600 text-sm">{calculatedScore.unattempted} Qs</span>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL 7: Selection Flowchart & Statutory Tie-Breaking Rules */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-600" />
              6. Selection Process & Statutory Tie-Breaking Rules (Clause 9a)
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs font-bold mb-6">
              <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-200 w-full">Written Exam (360 M)</div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
              <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-200 w-full">Normalization (If shifts)</div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
              <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-200 w-full">State Merit List</div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
              <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-200 w-full">Document Verification</div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
              <div className="bg-emerald-100 text-emerald-900 p-2.5 rounded-lg border border-emerald-300 w-full">Final Allotment</div>
            </div>

            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
              <div className="font-black text-sm text-amber-900 mb-2 flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-700" />
                Official Tie-Breaking Protocol (यदि एक से अधिक अभ्यर्थियों की मेरिट समान हो):
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-amber-200">
                  <span className="font-black text-amber-800 shrink-0">Rule 1:</span>
                  <span><strong>Graduation Percentage:</strong> Candidate possessing a higher percentage of marks in Graduation degree will be positioned higher in the merit list.</span>
                </div>
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-amber-200">
                  <span className="font-black text-amber-800 shrink-0">Rule 2:</span>
                  <span><strong>Training Qualification Percentage:</strong> If Graduation percentage is also identical, the candidate with higher percentage in Teacher Training (BTC / D.El.Ed. / B.El.Ed.) gets priority.</span>
                </div>
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-amber-200">
                  <span className="font-black text-amber-800 shrink-0">Rule 3:</span>
                  <span><strong>Older Candidate Preference:</strong> If written marks, graduation percentage, and training qualification percentage are all identical, the older candidate in age will be placed higher.</span>
                </div>
              </div>
            </div>
          </div>

          {/* VACANCY TABLES SECTION (Interactive Tabs) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Official Vacancy Breakdown (Tables 01 &amp; 02)
                </h2>
                <p className="text-xs text-slate-500 font-medium">Exact data reproduced from official advertisement notification</p>
              </div>

              <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab('urban')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === 'urban'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Urban Primary (75 Districts &bull; 11,508)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('attached')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === 'attached'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Attached Primary (Aided &bull; 897)
                </button>
              </div>
            </div>

            {activeTab === 'urban' ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search any of 75 districts (e.g. Bareilly, Kanpur, Lucknow, Varanasi)..."
                      value={districtSearch}
                      onChange={(e) => setDistrictSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-500 shrink-0">
                    Showing {filteredDistricts.length} / 75
                  </span>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-xl max-h-96">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-bold sticky top-0 border-b border-slate-200">
                      <tr>
                        <th className="p-2.5">S.N.</th>
                        <th className="p-2.5">District</th>
                        <th className="p-2.5 text-center bg-blue-50 text-blue-900">Total</th>
                        <th className="p-2.5 text-center">UR</th>
                        <th className="p-2.5 text-center">EWS</th>
                        <th className="p-2.5 text-center">OBC</th>
                        <th className="p-2.5 text-center">SC</th>
                        <th className="p-2.5 text-center">ST</th>
                        <th className="p-2.5 text-center bg-amber-50 text-amber-900">PwD</th>
                        <th className="p-2.5 text-center">DFF</th>
                        <th className="p-2.5 text-center">Ex-Army</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {filteredDistricts.map((item) => (
                        <tr key={item.sn} className="hover:bg-slate-50 transition-colors">
                          <td className="p-2.5 font-bold text-slate-400">{item.sn}</td>
                          <td className="p-2.5 font-bold text-slate-900">{item.district}</td>
                          <td className="p-2.5 text-center font-black bg-blue-50/50 text-blue-800">{item.total}</td>
                          <td className="p-2.5 text-center">{item.ur}</td>
                          <td className="p-2.5 text-center">{item.ews}</td>
                          <td className="p-2.5 text-center">{item.obc}</td>
                          <td className="p-2.5 text-center">{item.sc}</td>
                          <td className="p-2.5 text-center">{item.st}</td>
                          <td className="p-2.5 text-center font-semibold bg-amber-50/50 text-amber-900">{item.handicap}</td>
                          <td className="p-2.5 text-center">{item.freedomFighter}</td>
                          <td className="p-2.5 text-center">{item.exArmy}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-200/80 font-black text-slate-900 sticky bottom-0">
                        <td className="p-2.5" colSpan={2}>TOTAL (All 75 Districts)</td>
                        <td className="p-2.5 text-center bg-blue-100 text-blue-950">11,508</td>
                        <td className="p-2.5 text-center">4,746</td>
                        <td className="p-2.5 text-center">1,116</td>
                        <td className="p-2.5 text-center">3,069</td>
                        <td className="p-2.5 text-center">2,379</td>
                        <td className="p-2.5 text-center">198</td>
                        <td className="p-2.5 text-center bg-amber-100 text-amber-950">429</td>
                        <td className="p-2.5 text-center">198</td>
                        <td className="p-2.5 text-center">540</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-purple-50 text-purple-900 font-bold border-b border-purple-200">
                    <tr>
                      <th className="p-3">Category / Institution Type</th>
                      <th className="p-3 text-center">General (UR)</th>
                      <th className="p-3 text-center">SC</th>
                      <th className="p-3 text-center">ST</th>
                      <th className="p-3 text-center">OBC</th>
                      <th className="p-3 text-center">EWS</th>
                      <th className="p-3 text-center font-black bg-purple-100">Total Posts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">
                        Boys Schools (बालक विद्यालय) – Aided Secondary
                      </td>
                      <td className="p-3 text-center">196</td>
                      <td className="p-3 text-center">189</td>
                      <td className="p-3 text-center">0</td>
                      <td className="p-3 text-center">84</td>
                      <td className="p-3 text-center">4</td>
                      <td className="p-3 text-center font-black text-purple-900 bg-purple-50/50">473</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">
                        Girls Schools (बालिका विद्यालय) – Aided Secondary
                      </td>
                      <td className="p-3 text-center">182</td>
                      <td className="p-3 text-center">159</td>
                      <td className="p-3 text-center">0</td>
                      <td className="p-3 text-center">80</td>
                      <td className="p-3 text-center">3</td>
                      <td className="p-3 text-center font-black text-pink-900 bg-pink-50/50">424</td>
                    </tr>
                    <tr className="bg-slate-100 font-black text-slate-900">
                      <td className="p-3">Total Attached Primary Posts</td>
                      <td className="p-3 text-center">378</td>
                      <td className="p-3 text-center">348</td>
                      <td className="p-3 text-center">0</td>
                      <td className="p-3 text-center">164</td>
                      <td className="p-3 text-center">7</td>
                      <td className="p-3 text-center font-black text-purple-950 bg-purple-200">897</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* VISUAL 8 & 9: Photo, Signature & Document Upload Specs */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              7. Mandatory Photo, Signature &amp; Document Upload Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-xs font-bold text-slate-500 uppercase">Passport Photo</div>
                <div className="text-xl font-black text-slate-900 mt-1">30 KB – 300 KB</div>
                <div className="text-xs text-slate-600 mt-1">Resolution: 300 to 600 Pixels</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-2">Format: JPG / JPEG</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-xs font-bold text-slate-500 uppercase">Candidate Signature</div>
                <div className="text-xl font-black text-slate-900 mt-1">10 KB – 200 KB</div>
                <div className="text-xs text-slate-600 mt-1">Resolution: 140 × 110 Pixels</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-2">White Background &bull; JPG/JPEG</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-xs font-bold text-slate-500 uppercase">Educational &amp; Category Docs</div>
                <div className="text-xl font-black text-slate-900 mt-1">50 KB – 500 KB</div>
                <div className="text-xs text-slate-600 mt-1">Legible Clear Scans</div>
                <div className="text-[11px] text-indigo-700 font-semibold mt-2">Format: PDF only</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center justify-between">
              <span>Need to resize your photo or signature to exact UPESSC pixels?</span>
              <button
                type="button"
                onClick={() => onNavigate?.('tool-detail', 'image-resizer')}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shrink-0 ml-2"
              >
                Use Photo Resizer Tool
              </button>
            </div>
          </div>

          {/* VISUAL 10: Document Verification & 2-Set Protocol */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              8. Document Verification (DV) Protocols &amp; Checklist (Clause 14)
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <p>
                As per Clause 14 of the official notification, shortlisted candidates must attend Document Verification at the UPESSC Commission office with <strong>original certificates</strong> and <strong>two (02) complete separate sets of self-attested copies</strong> of the following:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>2 copies of final submitted online application form</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>High School (10th) mark sheet and passing certificate (for DOB)</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Intermediate (12th) mark sheet and passing certificate</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Graduation mark sheets (all years/semesters) &amp; Degree certificate</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>BTC / D.El.Ed. / B.El.Ed. training certificate &amp; mark sheets</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Teacher Eligibility Test (TET) Paper-I Certificate (UPTET/CTET)</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>SC / ST / OBC / EWS Caste Certificate (on official UP format)</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Female candidates: Caste certificate issued from Father’s side</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>PwD Certificate (Appendix 5) / DFF (Appendix 4) / Ex-Servicemen</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sworn Affidavit on prescribed Appendix 6 format</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Character certificate from last attended institution + 2 gazetted ones</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>NOC from current employer for serving candidates</span>
                </div>
              </div>
            </div>
          </div>

          {/* 50+ COMPREHENSIVE SECTIONS ACCORDION (With Expand All / Collapse All) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="border-b border-slate-100 pb-4 mb-4">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Detailed Guide &bull; 52 Official Information Sections
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Complete point-by-point documentation based strictly on UPESSC Advt 05/2026 &amp; official Syllabus PDF. Use the controls below to expand or collapse all sections.
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

          {/* FAQs & Schema.org Structured Data */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              Frequently Asked Questions (UPESSC PRT Teacher 2026)
            </h2>
            <div className="divide-y divide-slate-100">
              {exam.faq?.map((item, index) => (
                <div key={index} className="py-3">
                  <h3 className="text-sm font-bold text-slate-900">{item.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Direct Action Hub */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-emerald-600" />
              Official Action Links
            </h3>
            <div className="space-y-2">
              <a
                href={applyOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors shadow-xs"
              >
                <span>Apply Online (apply.upessc.org)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={officialNotificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-200 text-xs transition-colors"
              >
                <span>Official Notification PDF (Advt 05/2026)</span>
                <Download className="w-3.5 h-3.5" />
              </a>
              <a
                href={officialSyllabusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-200 text-xs transition-colors"
              >
                <span>Official Syllabus &amp; Exam Pattern PDF</span>
                <Download className="w-3.5 h-3.5" />
              </a>
              <a
                href={officialWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-200 text-xs transition-colors"
              >
                <span>UPESSC Official Portal (upessc.up.gov.in)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Application Fee Box */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              Application Fee (Clause 4)
            </h3>
            <div className="space-y-2">
              {exam.applicationFee?.map((fee, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs border border-slate-100">
                  <span className="font-medium text-slate-700">{fee.category}</span>
                  <span className="font-black text-slate-900">{fee.amount}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-2 text-center">
              Mode: Debit/Credit Card or Net Banking. Non-refundable.
            </p>
          </div>

          {/* Helpline & Support Desk */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-600" />
              Official Helplines (Clause 12.9)
            </h3>
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block">Technical Application Helpline</span>
                <span className="font-mono text-blue-700 font-bold">08448573939</span>
                <span className="text-[10px] text-slate-500 block">09:30 AM – 06:00 PM (Mon–Sat)</span>
                <span className="text-[10px] text-slate-500 block">Email: Support@upessc.org</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block">Bank Payment Support (ICICI / Union)</span>
                <span className="font-mono text-slate-800 block">8879370946 / 8657723283</span>
                <span className="text-[10px] text-slate-500 block">Email: pgsupport@billdesk.com</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block">UPESSC Commission Prayagraj</span>
                <span className="font-mono text-slate-800 block">0532-2466851</span>
                <span className="text-[10px] text-slate-500 block">Email: upesscprayagraj@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Standard Right Sidebar Tools & Updates */}
          <RightSidebar onNavigate={onNavigate} currentSlug={exam.slug} />

          {/* Social Share Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-2">
              Share With Aspirants
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              Share the official UPESSC 12,405 Assistant Teacher notification &amp; syllabus.
            </p>
            <ShareButtons title="UPESSC PRT Assistant Teacher Recruitment 2026 (12,405 Vacancies)" />
          </div>

        </div>
      </div>

      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: 'UPESSC PRT Assistant Teacher Recruitment 2026',
            description:
              'Official UPESSC Assistant Teacher Selection Examination 2026 (Advt 05/2026) for 12,405 vacancies in Urban Primary and Attached Primary schools across Uttar Pradesh.',
            identifier: {
              '@type': 'PropertyValue',
              name: 'UPESSC',
              value: 'Advt No. 05/2026'
            },
            datePosted: '2026-09-15',
            validThrough: '2026-10-15',
            employmentType: 'FULL_TIME',
            hiringOrganization: {
              '@type': 'Organization',
              name: 'Uttar Pradesh Education Service Selection Commission (UPESSC)',
              sameAs: 'https://upessc.up.gov.in/'
            },
            jobLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN'
              }
            },
            baseSalary: {
              '@type': 'MonetaryAmount',
              currency: 'INR',
              value: {
                '@type': 'QuantitativeValue',
                minValue: 35400,
                maxValue: 112400,
                unitText: 'MONTH'
              }
            }
          })
        }}
      />
    </div>
  );
};
