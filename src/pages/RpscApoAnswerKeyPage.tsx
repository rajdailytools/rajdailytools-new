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
  Scale,
  BookOpen
} from 'lucide-react';
import { generateRpscApo50Sections } from '../data/rpscApoData';

interface RpscApoAnswerKeyPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const RpscApoAnswerKeyPage: React.FC<RpscApoAnswerKeyPageProps> = ({
  exam,
  onNavigate,
  depth = 0
}) => {
  // Official Verified Links from user instructions and RPSC official publications
  const officialAnswerKeyPdfUrl =
    'https://rpsc.rajasthan.gov.in/Static/AnswerKeys/2A391A07-19AD-4A3D-8E8F-33C0B79C48E1.pdf';
  const officialAdmitCardUrl =
    'https://recruitment.rajasthan.gov.in/rectlogingetadmitcard';
  const officialExamCityUrl = 'https://sso.rajasthan.gov.in/';
  const officialExamCityNoticeUrl =
    'https://rpsc.rajasthan.gov.in/Static/PressNotes/3D38E43A-CCB7-4415-B543-61D93575E0E1.pdf';
  const officialMainsExamNoticeUrl =
    'https://rpsc.rajasthan.gov.in/Static/PressNotes/D431D6FF-37AD-426C-B91C-0CB97216E45F.pdf';
  const officialNotificationUrl =
    'https://rpsc.rajasthan.gov.in/Static/RecruitmentAdvertisements/3ABD11DA80374279A39F1BF78AAB0950.pdf';
  const officialWebsiteUrl = 'https://rpsc.rajasthan.gov.in/home';

  // 50 Useful Sections
  const sections =
    exam.allInformation && exam.allInformation.length >= 45
      ? exam.allInformation
      : generateRpscApo50Sections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Canonical Breadcrumbs: Answer Key → RPSC Answer Key → RPSC APO Answer Key */}
      <Breadcrumb
        items={[
          { label: 'Answer Key', page: 'answer-key' },
          { label: 'RPSC Answer Key', page: 'answer-key' },
          { label: 'RPSC APO Answer Key 2026' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Center Content */}
        <main className="lg:col-span-8 space-y-6">
          {/* Header Card */}
          <section id="header-section" className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-100 pb-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-300">
                <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                RPSC Official Model Answer Key Released
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Advt No: 03/EXAM/APO/EP-I/2026-27
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              RPSC APO Answer Key 2026
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Rajasthan Public Service Commission (RPSC), Ajmer has officially released the Model
              Answer Key for 371 posts of Assistant Prosecution Officer (सहायक अभियोजन अधिकारी) in the
              Home (Prosecution) Department, Government of Rajasthan. Download the official Model Answer
              Key PDF, check the examination notices, compare responses with the Master Question Paper,
              calculate tentative scores, and submit online objections via SSO portal.
            </p>

            {/* Quick Metrics Badge Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              <div className="bg-blue-50/70 border border-blue-200 rounded-lg p-3 text-center">
                <span className="text-xs text-blue-900 font-semibold uppercase block">Total Vacancy</span>
                <span className="text-xl font-extrabold text-blue-950">371 Posts</span>
                <span className="text-[11px] text-blue-800 block mt-0.5">Home (Prosecution)</span>
              </div>
              <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3 text-center">
                <span className="text-xs text-amber-900 font-semibold uppercase block">Pre Exam Date</span>
                <span className="text-sm font-extrabold text-amber-950">02 Sept 2026</span>
                <span className="text-[11px] text-amber-700 block mt-0.5">Objective OMR</span>
              </div>
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3 text-center">
                <span className="text-xs text-emerald-900 font-semibold uppercase block">Key Released</span>
                <span className="text-sm font-extrabold text-emerald-950">07 Sept 2026</span>
                <span className="text-[11px] text-emerald-700 block mt-0.5">Model Key Out</span>
              </div>
              <div className="bg-purple-50/70 border border-purple-200 rounded-lg p-3 text-center">
                <span className="text-xs text-purple-900 font-semibold uppercase block">Mains Exam</span>
                <span className="text-sm font-extrabold text-purple-950">27 Dec 2026</span>
                <span className="text-[11px] text-purple-700 block mt-0.5">Official Notice</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                id="btn-download-answer-key"
                href={officialAnswerKeyPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Answer Key PDF (Official)
              </a>
              <a
                id="btn-download-mains-notice"
                href={officialMainsExamNoticeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
              >
                <FileText className="w-4 h-4" />
                Mains Exam Date Notice PDF
              </a>
              <a
                id="btn-admit-card-portal"
                href={officialAdmitCardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Admit Card Portal
              </a>
              <a
                id="btn-raise-objection-sso"
                href={officialExamCityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                SSO Objection Portal
              </a>
              <a
                id="btn-notification-pdf"
                href={officialNotificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-lg border border-gray-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-gray-600" />
                Official Notification PDF
              </a>
            </div>
          </section>

          {/* Lifecycle Navbar */}
          <LifecycleNavbar
            exam={exam}
            currentSection="answer-key"
            onNavigate={onNavigate}
            depth={depth}
          />

          {/* Official Notice Alert Box */}
          <section id="official-notice-alert" className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900 space-y-1">
                <p className="font-bold">
                  Important Instruction: Match Answers Strictly with Master Question Paper
                </p>
                <p className="text-xs text-amber-800 leading-relaxed">
                  As per RPSC press notice, the uploaded Model Answer Key strictly corresponds to the{' '}
                  <strong>Master Question Paper</strong> available on the RPSC portal. Do not match
                  answers directly with the numerical question sequence of your individual question booklet
                  without first cross-referencing with the Master Paper. Challenges must be submitted
                  through SSO Rajasthan with standard textbook evidence and ₹100/- fee per question.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Important Dates Table */}
          <section id="section-important-dates" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                RPSC APO Recruitment 2026: Important Dates & Timelines
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                Official Schedule
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-2.5 text-left font-semibold">Recruitment Milestone</th>
                    <th className="px-4 py-2.5 text-left font-semibold">Official Date / Timeline</th>
                    <th className="px-4 py-2.5 text-left font-semibold">Verification / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Detailed Notification Release (Advt 03/2026-27)</td>
                    <td className="px-4 py-2.5 text-gray-700">27 May 2026</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-gray-600">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Online Application Window (SSO Portal)</td>
                    <td className="px-4 py-2.5 text-gray-700">08 June 2026 to 07 July 2026 (Midnight)</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-gray-600">Closed</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Exam City Details Press Note</td>
                    <td className="px-4 py-2.5 text-gray-700">26 August 2026</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-blue-700">Released</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Preliminary Admit Card Download Link</td>
                    <td className="px-4 py-2.5 text-gray-700">30 August 2026</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-blue-700">Live</span></td>
                  </tr>
                  <tr className="bg-amber-50/40">
                    <td className="px-4 py-2.5 font-bold text-amber-900">Preliminary Examination Date (Objective OMR)</td>
                    <td className="px-4 py-2.5 font-bold text-amber-900">02 September 2026</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-amber-800">Conducted</span></td>
                  </tr>
                  <tr className="bg-emerald-50/50">
                    <td className="px-4 py-2.5 font-bold text-emerald-950">Official Model Answer Key Released</td>
                    <td className="px-4 py-2.5 font-bold text-emerald-950">07 September 2026</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold px-2 py-0.5 bg-emerald-600 text-white rounded">Available Now</span></td>
                  </tr>
                  <tr className="bg-indigo-50/40">
                    <td className="px-4 py-2.5 font-medium text-indigo-900">Online Objection Window on SSO Portal</td>
                    <td className="px-4 py-2.5 text-indigo-900">Active as per Official Press Note (₹100/Question)</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-indigo-700">Active</span></td>
                  </tr>
                  <tr className="bg-purple-50/50">
                    <td className="px-4 py-2.5 font-bold text-purple-950">Main Examination Date (Written Descriptive)</td>
                    <td className="px-4 py-2.5 font-bold text-purple-950">27 December 2026</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold px-2 py-0.5 bg-purple-600 text-white rounded">Officially Notified</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Preliminary Final Answer Key & Result</td>
                    <td className="px-4 py-2.5 text-gray-600 italic">Not Released / To Be Updated</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-medium text-amber-600">Pending</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Category Cut-off Marks for Mains Selection</td>
                    <td className="px-4 py-2.5 text-gray-600 italic">Not Released / To Be Updated</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-medium text-amber-600">Pending</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Document Verification (DV) Schedule</td>
                    <td className="px-4 py-2.5 text-gray-600 italic">To Be Announced after Mains Exam</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-medium text-gray-500">Upcoming</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Vacancy Breakdown Table */}
          <section id="section-vacancy-breakdown" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                RPSC APO 2026: Vacancy Distribution (371 Posts)
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-800 rounded">
                Advt 03/2026-27 Page 1
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Area / Department</th>
                    <th className="px-3 py-2 text-center font-semibold">General (UR)</th>
                    <th className="px-3 py-2 text-center font-semibold">SC</th>
                    <th className="px-3 py-2 text-center font-semibold">ST</th>
                    <th className="px-3 py-2 text-center font-semibold">OBC</th>
                    <th className="px-3 py-2 text-center font-semibold">MBC</th>
                    <th className="px-3 py-2 text-center font-semibold">EWS</th>
                    <th className="px-3 py-2 text-center font-semibold">Total Posts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">Non-Scheduled Area (Non-TSP)</td>
                    <td className="px-3 py-2 text-center text-gray-800">110</td>
                    <td className="px-3 py-2 text-center text-gray-800">69</td>
                    <td className="px-3 py-2 text-center text-gray-800">53</td>
                    <td className="px-3 py-2 text-center text-gray-800">53</td>
                    <td className="px-3 py-2 text-center text-gray-800">12</td>
                    <td className="px-3 py-2 text-center text-gray-800">25</td>
                    <td className="px-3 py-2 text-center font-bold text-blue-900">355</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">Scheduled Area (TSP)</td>
                    <td className="px-3 py-2 text-center text-gray-800">8</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center text-gray-800">7</td>
                    <td className="px-3 py-2 text-center text-gray-800">-</td>
                    <td className="px-3 py-2 text-center text-gray-800">-</td>
                    <td className="px-3 py-2 text-center text-gray-800">-</td>
                    <td className="px-3 py-2 text-center font-bold text-blue-900">15</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">Sahariya (Baran District)</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center text-gray-800">-</td>
                    <td className="px-3 py-2 text-center text-gray-800">-</td>
                    <td className="px-3 py-2 text-center text-gray-800">-</td>
                    <td className="px-3 py-2 text-center text-gray-800">-</td>
                    <td className="px-3 py-2 text-center text-gray-800">-</td>
                    <td className="px-3 py-2 text-center font-bold text-blue-900">1</td>
                  </tr>
                  <tr className="bg-blue-50/50 font-bold text-blue-950">
                    <td className="px-3 py-2">Grand Total</td>
                    <td className="px-3 py-2 text-center">119</td>
                    <td className="px-3 py-2 text-center">69</td>
                    <td className="px-3 py-2 text-center">60</td>
                    <td className="px-3 py-2 text-center">53</td>
                    <td className="px-3 py-2 text-center">12</td>
                    <td className="px-3 py-2 text-center">25</td>
                    <td className="px-3 py-2 text-center text-base">371 Posts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 italic">
              *Horizontal reservations: Ex-Servicemen: 18 posts across categories; PwBD: 18 posts across B/LV, D/HH, LD/CP, and SLD/Mul.Dis.
            </p>
          </section>

          {/* Section: Eligibility & Educational Qualifications */}
          <section id="section-eligibility" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-600" />
              Eligibility Criteria & Educational Qualifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="border border-blue-100 bg-blue-50/40 rounded-lg p-4 space-y-2">
                <span className="font-bold text-blue-950 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  Prescribed Law Degree
                </span>
                <ul className="text-xs text-gray-700 space-y-1.5 list-disc list-inside">
                  <li><strong>Degree in Law (Professional):</strong> LL.B. (3-Year course) from a University established by law in India; OR</li>
                  <li><strong>Integrated Law Course:</strong> 5-Year Integrated Degree (B.A. LL.B., B.B.A. LL.B., B.Com. LL.B.) from a recognized University.</li>
                  <li>Candidates appearing in the final year/semester were eligible to apply, subject to acquiring the qualification prior to the exam date.</li>
                </ul>
              </div>

              <div className="border border-emerald-100 bg-emerald-50/40 rounded-lg p-4 space-y-2">
                <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  Language & Cultural Knowledge
                </span>
                <ul className="text-xs text-gray-700 space-y-1.5 list-disc list-inside">
                  <li>Working Knowledge of Hindi written in Devnagri Script.</li>
                  <li>Knowledge of Rajasthani dialects and social customs of Rajasthan.</li>
                  <li>Tested in Preliminary Exam (30% language weightage) and Mains Paper-II (100 marks).</li>
                </ul>
              </div>
            </div>

            {/* Age Limits & Relaxation Table */}
            <div className="border-t border-gray-100 pt-3">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Age Limits as on 01.01.2027:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-xs">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold">Category</th>
                      <th className="px-3 py-2 text-left font-semibold">Age Limit</th>
                      <th className="px-3 py-2 text-left font-semibold">Permissible Age Relaxation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="px-3 py-2 font-medium">General (UR) Male</td>
                      <td className="px-3 py-2">21 to 40 Years</td>
                      <td className="px-3 py-2">Normal age criteria (1 year general state relaxation applied)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">SC / ST / OBC / MBC / EWS Male of Rajasthan</td>
                      <td className="px-3 py-2">21 to 45 Years</td>
                      <td className="px-3 py-2">5 Years Upper Age Relaxation</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">General Category Female</td>
                      <td className="px-3 py-2">21 to 45 Years</td>
                      <td className="px-3 py-2">5 Years Upper Age Relaxation</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">SC / ST / OBC / MBC / EWS Female of Rajasthan</td>
                      <td className="px-3 py-2">21 to 50 Years</td>
                      <td className="px-3 py-2">10 Years Upper Age Relaxation</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Widows and Divorced Women</td>
                      <td className="px-3 py-2">No Upper Age Limit</td>
                      <td className="px-3 py-2">Subject to superannuation age of 60 years</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Persons with Benchmark Disabilities (PwBD)</td>
                      <td className="px-3 py-2">Category Limit + 5 Years</td>
                      <td className="px-3 py-2">5 Years over and above category upper limit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section: Exam Pattern & Syllabus Details */}
          <section id="section-exam-pattern" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                Scheme of Examination: Preliminary & Main Written Exam
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                Official Scheme
              </span>
            </div>

            {/* Prelims Exam Table */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded text-xs font-extrabold">Stage 1</span>
                Preliminary Examination (Objective Screening Test)
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold">Component</th>
                      <th className="px-4 py-2 text-left font-semibold">Subject / Area</th>
                      <th className="px-4 py-2 text-center font-semibold">Weightage</th>
                      <th className="px-4 py-2 text-center font-semibold">Marking Scheme</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="px-4 py-2 font-bold text-blue-900">Part A</td>
                      <td className="px-4 py-2 text-gray-800">Law Paper Subjects (Substantive, Procedural, Local & Special Acts)</td>
                      <td className="px-4 py-2 text-center font-bold text-blue-900">70% Weightage</td>
                      <td rowSpan={2} className="px-4 py-2 text-center text-xs text-gray-700 bg-gray-50">
                        1 Mark per question<br />
                        <span className="text-rose-600 font-bold">1/3rd Negative Marking</span><br />
                        5th circle mandatory
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-bold text-blue-900">Part B</td>
                      <td className="px-4 py-2 text-gray-800">Language Proficiency (General Hindi & General English - 12th Level)</td>
                      <td className="px-4 py-2 text-center font-bold text-blue-900">30% Weightage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic">
                *Note: Marks in Preliminary Exam are for screening only and not counted in final selection. Approximately 15 times the category vacancies are shortlisted for Mains.
              </p>
            </div>

            {/* Mains Exam Table */}
            <div className="space-y-2 pt-3 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-purple-100 text-purple-900 rounded text-xs font-extrabold">Stage 2</span>
                Main Examination (Written Descriptive Papers – 27 December 2026)
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-semibold">Paper</th>
                      <th className="px-4 py-2.5 text-left font-semibold">Subject & Scope</th>
                      <th className="px-4 py-2.5 text-center font-semibold">Total Marks</th>
                      <th className="px-4 py-2.5 text-center font-semibold">Time Duration</th>
                      <th className="px-4 py-2.5 text-center font-semibold">Min. Qualifying Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-purple-900">Paper I</td>
                      <td className="px-4 py-2.5 text-gray-800">
                        <strong>Law:</strong> Practical knowledge of criminal law, framing charges, evidence appraisal, IPC, CrPC, Evidence Act, BNS 2023, BSA 2023, BNSS 2023, SC/ST Act, POCSO, JJ Act, Probation, Arms, Excise, Rajasthan Unfair Means Acts (1992 & 2022)
                      </td>
                      <td className="px-4 py-2.5 text-center font-bold text-purple-900">300 Marks</td>
                      <td className="px-4 py-2.5 text-center font-medium text-gray-700">3 Hours</td>
                      <td rowSpan={2} className="px-4 py-2.5 text-center text-xs font-semibold text-emerald-800 bg-emerald-50/50">
                        40% in each paper<br />
                        <span className="text-gray-500 font-normal">(35% for SC / ST)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-purple-900">Paper II</td>
                      <td className="px-4 py-2.5 text-gray-800">
                        <strong>Language:</strong> General Hindi (50 Marks) & General English (50 Marks) – Senior Secondary Standard
                      </td>
                      <td className="px-4 py-2.5 text-center font-bold text-purple-900">100 Marks</td>
                      <td className="px-4 py-2.5 text-center font-medium text-gray-700">2 Hours</td>
                    </tr>
                    <tr className="bg-purple-50 font-bold text-purple-950">
                      <td colSpan={2} className="px-4 py-2.5">Total Aggregate Marks (Final Merit Decider)</td>
                      <td className="px-4 py-2.5 text-center text-base">400 Marks</td>
                      <td colSpan={2} className="px-4 py-2.5 text-center text-xs text-purple-900">Final selection purely on Mains merit (No Interview)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Official 5-Option OMR Rules */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-700 pt-2">
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                <span className="font-bold text-rose-900 block mb-1">1/3rd Negative Marking</span>
                <p>One-third (1/3rd) of the prescribed marks is deducted for each incorrect answer or multiple darkened bubbles.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <span className="font-bold text-amber-900 block mb-1">Mandatory 5th Option</span>
                <p>If not attempting a question, circle '5' must be darkened. Leaving all 5 circles blank incurs a 1/3rd mark penalty.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <span className="font-bold text-blue-900 block mb-1">10% Disqualification Rule</span>
                <p>Leaving none of the 5 circles darkened in more than 10% questions results in permanent disqualification from the exam.</p>
              </div>
            </div>
          </section>

          {/* Flowchart: Lifecycle Stages */}
          <section id="flowchart-lifecycle" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              RPSC APO 2026 Examination Lifecycle Flowchart
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="border-2 border-emerald-500 bg-emerald-50/50 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold uppercase text-emerald-800 block">Step 1: Completed</span>
                <span className="text-sm font-extrabold text-emerald-950 mt-1 block">Pre Exam</span>
                <span className="text-xs text-emerald-700">02 Sept 2026 (Screening)</span>
              </div>

              <div className="border-2 border-emerald-500 bg-emerald-50/60 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold uppercase text-emerald-800 block">Step 2: Active</span>
                <span className="text-sm font-extrabold text-emerald-950 mt-1 block">Model Answer Key</span>
                <span className="text-xs text-emerald-700">Released 07 Sept 2026</span>
              </div>

              <div className="border border-indigo-300 bg-indigo-50/30 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold uppercase text-indigo-800 block">Step 3: In Progress</span>
                <span className="text-sm font-extrabold text-indigo-950 mt-1 block">SSO Objections</span>
                <span className="text-xs text-indigo-700">₹100 / Challenged Question</span>
              </div>

              <div className="border-2 border-purple-500 bg-purple-50/60 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold uppercase text-purple-800 block">Step 4: Scheduled</span>
                <span className="text-sm font-extrabold text-purple-950 mt-1 block">Mains Exam</span>
                <span className="text-xs text-purple-700 font-semibold">27 December 2026</span>
              </div>
            </div>
          </section>

          {/* Interactive Score Calculator */}
          <section id="score-calculator-wrapper" className="space-y-2">
            <ScoreCalculator
              defaultTotalQuestions={100}
              defaultMarksPerCorrect={1}
              defaultNegativeMark={0.3333}
              examName="RPSC Assistant Prosecution Officer (APO) 2026"
            />
          </section>

          {/* Section: Step-by-Step Instructions */}
          <section id="section-how-to-check" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              How to Download Answer Key & Match with Master Question Paper
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">1</span>
                <div>
                  <strong className="text-gray-900">Open the Official RPSC Answer Key Link:</strong> Access the verified direct RPSC PDF link (<a href={officialAnswerKeyPdfUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">Download Answer Key PDF</a>) or visit the RPSC Candidate Information portal.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">2</span>
                <div>
                  <strong className="text-gray-900">Download the Master Question Paper:</strong> Download the official RPSC Master Question Paper for Assistant Prosecution Officer (APO) from the Candidate Information → Question Papers tab on rpsc.rajasthan.gov.in.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">3</span>
                <div>
                  <strong className="text-gray-900">Compare Answers with Candidate OMR Carbon Copy:</strong> Map the questions in your candidate OMR copy against the Master Question Paper sequence, and verify the option marked (1, 2, 3, 4, or 5).
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">4</span>
                <div>
                  <strong className="text-gray-900">Calculate Tentative Raw Score:</strong> Apply +1 mark for each correct response and deduct 0.3333 mark for each wrong answer or unattempted question without the 5th circle darkened. Use the interactive calculator above.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">5</span>
                <div>
                  <strong className="text-gray-900">Submit Objections Online if Discrepancy Found:</strong> In case of factual or printing errors in the Master Key, submit an online objection on the SSO portal with authentic standard textbook references within the prescribed window.
                </div>
              </div>
            </div>
          </section>

          {/* Section: Official Objection Submission Guide */}
          <section id="section-how-to-object" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-indigo-600" />
              Official Online Objection Process on SSO Rajasthan Portal
            </h2>

            <div className="border border-indigo-100 bg-indigo-50/40 rounded-lg p-4 text-xs text-indigo-950 space-y-2">
              <p className="font-bold text-sm text-indigo-950">Official SSO Portal Objection Protocol:</p>
              <ol className="list-decimal list-inside space-y-1 leading-relaxed">
                <li>Visit <strong>sso.rajasthan.gov.in</strong> and log in using your digital SSO ID and password.</li>
                <li>Under <strong>Citizen Apps (G2C)</strong>, select the <strong>Recruitment Portal</strong>.</li>
                <li>Click on the active link: <strong>"Question Objection - Assistant Prosecution Officer (APO) Exam 2026"</strong>.</li>
                <li>Select the question number strictly as numbered in the official <strong>Master Question Paper</strong>.</li>
                <li>Choose the appropriate discrepancy category (Wrong Official Key / Multiple Answers Correct / Question Out of Syllabus / Ambiguous Wording).</li>
                <li>Upload clear scanned PDF proof from recognized standard legal treatises, government gazette publications, or statutory bare acts with author, publisher, and page numbers.</li>
                <li>Pay the mandatory non-refundable objection fee of <strong>₹100/- per challenged question</strong> through e-Mitra or Net Banking/UPI.</li>
                <li>Submit the challenge and save the electronic confirmation receipt for future reference.</li>
              </ol>
            </div>
          </section>

          {/* Section: 50 Comprehensive Sections Accordion */}
          <section id="section-comprehensive-details" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Comprehensive 50 Sections: RPSC APO Complete Guide
              </h2>
              <p className="text-xs text-gray-500">
                Complete official details verified strictly from RPSC Advertisement 03/2026-27 and official press notes
              </p>
            </div>

            <Accordion
              items={sections.map((sec) => ({
                id: sec.id,
                title: sec.title,
                content: sec.content
              }))}
            />
          </section>

          {/* Section: FAQs with Schema */}
          <section id="section-faqs" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              Frequently Asked Questions (FAQs) – RPSC APO Answer Key 2026
            </h2>

            <div className="space-y-3">
              {(exam.faq || []).map((faqItem, idx) => (
                <div key={idx} className="border border-gray-100 rounded-lg p-3 bg-gray-50/50">
                  <h3 className="text-sm font-bold text-gray-900">{faqItem.q}</h3>
                  <p className="text-xs text-gray-700 mt-1 leading-relaxed">{faqItem.a}</p>
                </div>
              ))}
            </div>

            {/* Structured Data JSON-LD for Google Rich Snippets */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: (exam.faq || []).map((item) => ({
                    '@type': 'Question',
                    name: item.q,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: item.a
                    }
                  }))
                })
              }}
            />
          </section>

          {/* Direct Links Summary Table */}
          <section id="section-direct-links" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Download className="w-5 h-5 text-indigo-600" />
              Official Links Directory – RPSC APO Recruitment 2026
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Document / Service</th>
                    <th className="px-4 py-2 text-left font-semibold">Official Source Link</th>
                    <th className="px-4 py-2 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Download Model Answer Key PDF</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">2A391A07-19AD-4A3D-8E8F-33C0B79C48E1.pdf</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialAnswerKeyPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200"
                      >
                        <Download className="w-3.5 h-3.5" /> Download
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Mains Exam Date Notice PDF</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">D431D6FF-37AD-426C-B91C-0CB97216E45F.pdf</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialMainsExamNoticeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-800 bg-purple-50 px-2.5 py-1 rounded border border-purple-200"
                      >
                        <FileText className="w-3.5 h-3.5" /> Notice
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Download Admit Card Portal</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">recruitment.rajasthan.gov.in/rectlogingetadmitcard</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialAdmitCardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Admit Card
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Exam City Details / SSO Portal</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">sso.rajasthan.gov.in/</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialExamCityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> SSO Login
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Exam City / Admit Card Notice PDF</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">3D38E43A-CCB7-4415-B543-61D93575E0E1.pdf</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialExamCityNoticeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200"
                      >
                        <FileText className="w-3.5 h-3.5" /> Notice
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Official Recruitment Advertisement PDF</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">3ABD11DA80374279A39F1BF78AAB0950.pdf</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialNotificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-gray-800 bg-gray-50 px-2.5 py-1 rounded border border-gray-200"
                      >
                        <Download className="w-3.5 h-3.5" /> Notification
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">RPSC Official Website Home</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">rpsc.rajasthan.gov.in/home</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-gray-800 bg-gray-50 px-2.5 py-1 rounded border border-gray-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Website
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Share Buttons */}
          <ShareButtons
            title="RPSC APO Answer Key 2026 – Download Official Model Key PDF, Mains Exam Date & Notices"
            url="https://rajdailytools.in/rpsc-apo-answer-key-2026.html"
          />
        </main>

        {/* Right Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
};
