import React, { useState } from 'react';
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
import { generateRpscSo50Sections } from '../data/rpscStatisticalOfficerData';

interface RpscStatisticalOfficerAnswerKeyPageProps {
  exam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const RpscStatisticalOfficerAnswerKeyPage: React.FC<RpscStatisticalOfficerAnswerKeyPageProps> = ({
  exam,
  onNavigate,
  depth = 0
}) => {
  // Verified Official Links from user instructions and official RPSC documents
  const officialAnswerKeyPdfUrl =
    'https://rpsc.rajasthan.gov.in/Static/AnswerKeys/FE782986-A958-4799-BE59-A0868F5653FB.pdf';
  const officialAnswerKeyNoticeUrl =
    'https://rpsc.rajasthan.gov.in/Static/PressNotes/C578123D-2427-4E41-A08C-F88E266E48CF.pdf';
  const officialAdmitCardUrl = 'https://sso.rajasthan.gov.in/signin';
  const officialExamCityNoticeUrl =
    'https://rpsc.rajasthan.gov.in/Static/PressNotes/BC0C0054-874B-4843-B8A6-769FF4A6FF4E.pdf';
  const officialApplyOnlineUrl = 'https://sso.rajasthan.gov.in/signin';
  const officialNotificationUrl =
    'https://rpsc.rajasthan.gov.in/Static/RecruitmentAdvertisements/BE73BA4C8E8042CAB7D57CD3660C025E.pdf';
  const officialWebsiteUrl = 'https://rpsc.rajasthan.gov.in/news';

  // 50 Useful Sections
  const sections =
    exam.allInformation && exam.allInformation.length >= 45
      ? exam.allInformation
      : generateRpscSo50Sections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Canonical Breadcrumbs: Answer Key → RPSC Answer Key → RPSC Statistical Officer */}
      <Breadcrumb
        items={[
          { label: 'Answer Key', page: 'answer-key' },
          { label: 'RPSC Answer Key', page: 'answer-key' },
          { label: 'RPSC Statistical Officer Answer Key 2026' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Center Content */}
        <main className="lg:col-span-8 space-y-6">
          {/* Header Card */}
          <section id="header-section" className="bg-white border border-amber-200 rounded-xl p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-300">
                <FileCheck className="w-3.5 h-3.5 text-amber-600" />
                RPSC Official Model Answer Key Released
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Advt No: 11/Exam/S.O.(Statistics Deptt.)/RPSC/EP-I/2025-26
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              RPSC Statistical Officer Answer Key 2026
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Rajasthan Public Service Commission (RPSC), Ajmer has officially published the Model
              Answer Key for 113 posts of Statistical Officer (सांख्यिकी अधिकारी) in the Planning /
              Statistics Department, Government of Rajasthan. Download the official Model Answer
              Key PDF, check the press note, match with the Master Question Paper, and raise online
              objections via SSO portal.
            </p>

            {/* Quick Metrics Badge Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3 text-center">
                <span className="text-xs text-amber-900 font-semibold uppercase block">Total Vacancy</span>
                <span className="text-xl font-extrabold text-amber-950">113 Posts</span>
                <span className="text-[11px] text-amber-800 block mt-0.5">Statistics Dept</span>
              </div>
              <div className="bg-blue-50/70 border border-blue-200 rounded-lg p-3 text-center">
                <span className="text-xs text-blue-900 font-semibold uppercase block">Exam Date</span>
                <span className="text-sm font-extrabold text-blue-950">30 Aug 2026</span>
                <span className="text-[11px] text-blue-700 block mt-0.5">11:00 AM – 1:30 PM</span>
              </div>
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3 text-center">
                <span className="text-xs text-emerald-900 font-semibold uppercase block">Key Released</span>
                <span className="text-sm font-extrabold text-emerald-950">07 Sept 2026</span>
                <span className="text-[11px] text-emerald-700 block mt-0.5">Model Key Out</span>
              </div>
              <div className="bg-purple-50/70 border border-purple-200 rounded-lg p-3 text-center">
                <span className="text-xs text-purple-900 font-semibold uppercase block">Pay Scale</span>
                <span className="text-sm font-extrabold text-purple-950">Level L-12</span>
                <span className="text-[11px] text-purple-700 block mt-0.5">GP ₹4,800/-</span>
              </div>
            </div>

            {/* Direct Official Action Buttons */}
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
                id="btn-download-notice"
                href={officialAnswerKeyNoticeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
              >
                <FileText className="w-4 h-4" />
                Answer Key Notice PDF
              </a>
              <a
                id="btn-raise-objection-sso"
                href={officialApplyOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                Raise Objection on SSO Portal
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
                  Important Notice: Match Answers strictly with RPSC Master Question Paper
                </p>
                <p className="text-xs text-amber-800 leading-relaxed">
                  As per RPSC Press Note dated 07 September 2026, the uploaded Model Answer Key
                  strictly corresponds to the <strong>Master Question Paper</strong> uploaded on the
                  official RPSC portal. Do not match directly with your personal question booklet
                  number sequence without cross-referencing the Master Paper questions. Online
                  objection fee is ₹100/- per question challenged with authentic proof.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Important Dates Table */}
          <section id="section-important-dates" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                RPSC Statistical Officer 2026: Important Dates
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                Official RPSC Schedule
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-2.5 text-left font-semibold">Event / Milestone</th>
                    <th className="px-4 py-2.5 text-left font-semibold">Scheduled Date / Timeline</th>
                    <th className="px-4 py-2.5 text-left font-semibold">Status / Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Official Notification Release (Advt 11/2025-26)</td>
                    <td className="px-4 py-2.5 text-gray-700">14 October 2025</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-gray-600">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Online Application Window</td>
                    <td className="px-4 py-2.5 text-gray-700">28 October 2025 to 26 November 2025 (Midnight)</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-gray-600">Closed</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Application Correction Period</td>
                    <td className="px-4 py-2.5 text-gray-700">27 November to 06 December 2025 (Fee ₹500/-)</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-gray-600">Closed</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Exam City / District Notice</td>
                    <td className="px-4 py-2.5 text-gray-700">Released via Official Press Note</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-blue-700">Published</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Admit Card / Hall Ticket Release</td>
                    <td className="px-4 py-2.5 text-gray-700">Available on SSO Portal</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-blue-700">Live</span></td>
                  </tr>
                  <tr className="bg-amber-50/40">
                    <td className="px-4 py-2.5 font-bold text-amber-900">Written Examination Date (Single Shift)</td>
                    <td className="px-4 py-2.5 font-bold text-amber-900">30 August 2026 (11:00 AM – 01:30 PM)</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-amber-800">Conducted</span></td>
                  </tr>
                  <tr className="bg-emerald-50/50">
                    <td className="px-4 py-2.5 font-bold text-emerald-950">Official Model Answer Key Released</td>
                    <td className="px-4 py-2.5 font-bold text-emerald-950">07 September 2026</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold px-2 py-0.5 bg-emerald-600 text-white rounded">Released Now</span></td>
                  </tr>
                  <tr className="bg-indigo-50/40">
                    <td className="px-4 py-2.5 font-medium text-indigo-900">Online Objection / Challenge Window</td>
                    <td className="px-4 py-2.5 text-indigo-900">Active as per Official Press Note (SSO Portal)</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-bold text-indigo-700">Active</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Scrutiny of Objections by Expert Committee</td>
                    <td className="px-4 py-2.5 text-gray-700">After close of objection portal</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-medium text-gray-500">Scheduled</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Final Answer Key Release</td>
                    <td className="px-4 py-2.5 text-gray-600 italic">Not Released / To Be Updated</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-medium text-amber-600">Pending</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Written Exam Result & Merit List for DV</td>
                    <td className="px-4 py-2.5 text-gray-600 italic">Not Released / To Be Updated</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-medium text-amber-600">Pending</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Category Cut-off Marks</td>
                    <td className="px-4 py-2.5 text-gray-600 italic">Not Released / To Be Updated</td>
                    <td className="px-4 py-2.5"><span className="text-xs font-medium text-amber-600">Pending</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-800">Document Verification (DV) Schedule</td>
                    <td className="px-4 py-2.5 text-gray-600 italic">To Be Announced</td>
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
                <Layers className="w-5 h-5 text-amber-600" />
                Category-wise Vacancies Distribution (113 Posts)
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-800 rounded">
                Advt 11/2025-26 Page 1
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Category</th>
                    <th className="px-3 py-2 text-center font-semibold">General (Male)</th>
                    <th className="px-3 py-2 text-center font-semibold">General (Female)</th>
                    <th className="px-3 py-2 text-center font-semibold">Widow (WD)</th>
                    <th className="px-3 py-2 text-center font-semibold">Divorcee (DV)</th>
                    <th className="px-3 py-2 text-center font-semibold">Total Category Posts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">General / Unreserved (UR)</td>
                    <td className="px-3 py-2 text-center text-gray-800">8</td>
                    <td className="px-3 py-2 text-center text-gray-800">3</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center font-bold text-indigo-900 bg-indigo-50/40">30</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">Scheduled Caste (SC)</td>
                    <td className="px-3 py-2 text-center text-gray-800">4</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center font-bold text-indigo-900 bg-indigo-50/40">12</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">Scheduled Tribe (ST)</td>
                    <td className="px-3 py-2 text-center text-gray-800">3</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center font-bold text-indigo-900 bg-indigo-50/40">9</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">Other Backward Classes (OBC-NCL)</td>
                    <td className="px-3 py-2 text-center text-gray-800">5</td>
                    <td className="px-3 py-2 text-center text-gray-800">3</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center font-bold text-indigo-900 bg-indigo-50/40">16</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">More Backward Classes (MBC-NCL)</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center text-gray-800">1</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center font-bold text-indigo-900 bg-indigo-50/40">3</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-900">Economically Weaker Sections (EWS)</td>
                    <td className="px-3 py-2 text-center text-gray-800">3</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center text-gray-800">0</td>
                    <td className="px-3 py-2 text-center font-bold text-indigo-900 bg-indigo-50/40">7</td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="px-3 py-2.5 text-gray-900">Total Notified Vacancies</td>
                    <td colSpan={4} className="px-3 py-2.5 text-center text-gray-700">Statistics Department (Govt of Rajasthan)</td>
                    <td className="px-3 py-2.5 text-center text-base text-amber-900">113 Posts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-700 space-y-1">
              <p className="font-bold text-gray-900">Horizontal Reservation Summary:</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li><strong>Ex-Servicemen:</strong> 4 Posts (UR: 2, SC: 1, ST: 1, OBC: 1, MBC: 0, EWS: 0)</li>
                <li><strong>Divyangjan (PwBD):</strong> (i) Blindness/Low Vision: 1, (ii) Deaf/Hard of Hearing: 1, (iii) Locomotor Disability/Cerebral Palsy: 1, (iv) Autism/SLD/Mental Illness/Multiple Disabilities: 2 (including 01 backlog from year 2023-24).</li>
              </ul>
            </div>
          </section>

          {/* Section: Eligibility Criteria Table */}
          <section id="section-eligibility-criteria" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-indigo-600" />
                RPSC Statistical Officer: Official Eligibility Criteria
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                Notification Page 1 & 2
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 space-y-2">
                <h3 className="font-bold text-gray-900 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  Prescribed Educational Qualifications (Any One)
                </h3>
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>At least <strong>Second Class Master's Degree in Economics</strong></li>
                  <li>At least <strong>Second Class Master's Degree in Statistics</strong></li>
                  <li>At least <strong>Second Class Master's Degree in Mathematics with paper in Statistics</strong></li>
                  <li>At least <strong>Second Class Master's Degree in Commerce with Statistics</strong></li>
                  <li>At least <strong>Second Class M.Sc (Agriculture) Statistics</strong> from a University established by law in India or recognized equivalent.</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 space-y-2">
                <h3 className="font-bold text-gray-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Computer Qualification & Language
                </h3>
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>Certificate of <strong>RS-CIT course</strong> conducted by RKCL awarded by VMOU, Kota</li>
                  <li>OR any other certificate declared equivalent by Department of Information Technology and Communication (DoIT&C), Govt. of Rajasthan.</li>
                  <li>Working knowledge of <strong>Hindi written in Devnagri Script</strong>.</li>
                  <li>Knowledge of <strong>Rajasthani Culture</strong>, traditions, and geography.</li>
                </ul>
              </div>
            </div>

            <div className="border border-amber-200 bg-amber-50/50 rounded-lg p-3 text-xs text-gray-800 space-y-1">
              <p className="font-bold text-amber-950">Official Experience Requirement & Exemption Rules:</p>
              <p>
                <strong>General Rule:</strong> Experience of handling official statistics at least for <strong>one (1) year</strong> in a Government Department or reputed commercial concern or University.
              </p>
              <p className="font-semibold text-amber-900">Experience is NOT required for candidates who:</p>
              <ul className="list-disc list-inside pl-1 text-[11px] text-gray-700 space-y-0.5">
                <li>(a) Hold First Class Master's Degree or Doctorate in any of the prescribed subjects; OR</li>
                <li>(b) Have successfully undergone two years' training in Statistics at a recognized Statistical Institute or University; OR</li>
                <li>(c) Have passed one year's Diploma Course having Statistics and Economics as optional papers; OR</li>
                <li>(d) Belong to Scheduled Castes (SC) or Scheduled Tribes (ST) category.</li>
              </ul>
            </div>
          </section>

          {/* Section: Scheme of Examination & Exam Pattern */}
          <section id="section-exam-pattern" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-indigo-600" />
                Scheme of Examination & Marks Distribution (150 Marks)
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded">
                Official Scheme (Page 4)
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-2.5 text-left font-semibold">Paper Part</th>
                    <th className="px-4 py-2.5 text-left font-semibold">Subject / Section</th>
                    <th className="px-4 py-2.5 text-center font-semibold">No. of Questions</th>
                    <th className="px-4 py-2.5 text-center font-semibold">Total Marks</th>
                    <th className="px-4 py-2.5 text-center font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-4 py-2.5 font-bold text-indigo-900">Part-A</td>
                    <td className="px-4 py-2.5 text-gray-800">
                      <strong>General Knowledge of Rajasthan</strong> (History, Art & Culture, Heritage, Geography, Natural Resources, Economy & Current Affairs)
                    </td>
                    <td className="px-4 py-2.5 text-center font-bold text-gray-900">40</td>
                    <td className="px-4 py-2.5 text-center font-bold text-gray-900">40</td>
                    <td rowSpan={2} className="px-4 py-2.5 text-center font-bold text-gray-900 bg-gray-50">
                      2 Hours & 30 Minutes<br />
                      <span className="text-xs font-normal text-gray-500">(150 Minutes)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-bold text-indigo-900">Part-B</td>
                    <td className="px-4 py-2.5 text-gray-800">
                      <strong>Concerned Subject</strong> (Economics, Statistics, Mathematics, Commerce with Stats, Agricultural Statistics as prescribed)
                    </td>
                    <td className="px-4 py-2.5 text-center font-bold text-gray-900">110</td>
                    <td className="px-4 py-2.5 text-center font-bold text-gray-900">110</td>
                  </tr>
                  <tr className="bg-amber-50 font-bold">
                    <td colSpan={2} className="px-4 py-2.5 text-amber-950">Total Scheme</td>
                    <td className="px-4 py-2.5 text-center text-amber-950">150 Questions</td>
                    <td className="px-4 py-2.5 text-center text-amber-950">150 Marks</td>
                    <td className="px-4 py-2.5 text-center text-xs text-amber-900">+10 mins for 5th circle</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Official Exam Rules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-700">
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                <span className="font-bold text-rose-900 block mb-1">1/3rd Negative Marking</span>
                <p>One-third (1/3rd) of the prescribed marks is deducted for each wrong answer or multiple darkened bubbles.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <span className="font-bold text-amber-900 block mb-1">Mandatory 5th Option</span>
                <p>If not attempting a question, circle '5' must be darkened. Leaving all 5 circles blank results in 1/3rd deduction.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <span className="font-bold text-blue-900 block mb-1">10% Disqualification Rule</span>
                <p>Any candidate leaving none of the 5 circles darkened in more than 10% questions (16+ questions) is disqualified.</p>
              </div>
            </div>
          </section>

          {/* Flowchart: Lifecycle Stages */}
          <section id="flowchart-lifecycle" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              RPSC Statistical Officer Examination Process Flowchart
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="border-2 border-emerald-500 bg-emerald-50/50 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold uppercase text-emerald-800 block">Step 1: Completed</span>
                <span className="text-sm font-extrabold text-emerald-950 mt-1 block">Written Exam</span>
                <span className="text-xs text-emerald-700">30 Aug 2026 (150 MCQs)</span>
              </div>

              <div className="border-2 border-amber-500 bg-amber-50/60 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold uppercase text-amber-800 block">Step 2: Active</span>
                <span className="text-sm font-extrabold text-amber-950 mt-1 block">Model Answer Key</span>
                <span className="text-xs text-amber-700">Released 07 Sept 2026</span>
              </div>

              <div className="border border-indigo-300 bg-indigo-50/30 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold uppercase text-indigo-800 block">Step 3: In Progress</span>
                <span className="text-sm font-extrabold text-indigo-950 mt-1 block">Online Objections</span>
                <span className="text-xs text-indigo-700">SSO Portal (₹100/Question)</span>
              </div>

              <div className="border border-gray-200 bg-gray-50 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold uppercase text-gray-500 block">Step 4: Upcoming</span>
                <span className="text-sm font-extrabold text-gray-700 mt-1 block">Final Key & Result</span>
                <span className="text-xs text-gray-500 italic">Not Released / To Be Updated</span>
              </div>
            </div>
          </section>

          {/* Interactive Score Calculator */}
          <section id="score-calculator-wrapper" className="space-y-2">
            <ScoreCalculator
              defaultTotalQuestions={150}
              defaultMarksPerCorrect={1}
              defaultNegativeMark={0.3333}
              examName="RPSC Statistical Officer 2026"
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
                  <strong className="text-gray-900">Open the Official Model Answer Key PDF:</strong> Click on the verified direct RPSC link (<a href={officialAnswerKeyPdfUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">Download PDF</a>) to open the official key document.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">2</span>
                <div>
                  <strong className="text-gray-900">Download the Master Question Paper:</strong> Ensure you download the official Master Question Paper for Statistical Officer from the RPSC website (Candidate Information → Question Papers).
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">3</span>
                <div>
                  <strong className="text-gray-900">Cross-Map with Candidate OMR Copy:</strong> Locate the question in the Master Question Paper first, find the corresponding question in your personal carbon copy OMR sheet, and verify which option (1, 2, 3, 4, or 5) was marked.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">4</span>
                <div>
                  <strong className="text-gray-900">Calculate Tentative Raw Score:</strong> Award +1 mark for each correct match and deduct 0.3333 mark for each incorrect response or blank question without 5th circle. Use the embedded calculator above for precision.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-xs">5</span>
                <div>
                  <strong className="text-gray-900">File Challenges if Needed:</strong> If any question or answer in the Master Paper is found incorrect, submit your challenge along with standard reference textbook proof via the SSO Recruitment Portal.
                </div>
              </div>
            </div>
          </section>

          {/* Section: Objection Submission Flowchart */}
          <section id="section-how-to-object" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-indigo-600" />
              Official Online Objection Process on SSO Rajasthan Portal
            </h2>

            <div className="border border-indigo-100 bg-indigo-50/40 rounded-lg p-4 text-xs text-indigo-950 space-y-2">
              <p className="font-bold text-sm text-indigo-950">Official Objection Submission Protocol:</p>
              <ol className="list-decimal list-inside space-y-1 leading-relaxed">
                <li>Visit <strong>sso.rajasthan.gov.in</strong> and log in with your SSO ID and password.</li>
                <li>Go to <strong>Citizen Apps (G2C)</strong> and click on <strong>Recruitment Portal</strong>.</li>
                <li>Navigate to the active link: <strong>"Question Objection - Statistical Officer Exam 2026"</strong>.</li>
                <li>Select the question number strictly in accordance with the <strong>Master Question Paper</strong>.</li>
                <li>Choose the type of discrepancy (Wrong Answer / Ambiguous Question / Out of Syllabus / Multiple Correct).</li>
                <li>Attach clear scanned PDF proof from authentic standard reference books or official government publications with author, title, and page number clearly visible.</li>
                <li>Pay the online objection fee of <strong>₹100/- per question</strong> via e-Mitra payment gateway.</li>
                <li>Submit and take a printout of the objection transaction slip for future verification.</li>
              </ol>
            </div>
          </section>

          {/* Section: 50 Accordion Sections */}
          <section id="section-comprehensive-details" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Comprehensive 50 Sections: RPSC Statistical Officer Guide
                </h2>
                <p className="text-xs text-gray-500">
                  Complete official information verified strictly from RPSC notification and official press notes
                </p>
              </div>
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
              <HelpCircle className="w-5 h-5 text-amber-600" />
              Frequently Asked Questions (FAQs) – RPSC SO Answer Key 2026
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
              Official Links Directory – RPSC Statistical Officer 2026
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Document / Portal</th>
                    <th className="px-4 py-2 text-left font-semibold">Official Source Link</th>
                    <th className="px-4 py-2 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Download Model Answer Key PDF</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">FE782986-A958-4799-BE59-A0868F5653FB.pdf</td>
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
                    <td className="px-4 py-2.5 font-medium text-gray-900">Answer Key Press Note PDF</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">C578123D-2427-4E41-A08C-F88E266E48CF.pdf</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialAnswerKeyNoticeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200"
                      >
                        <FileText className="w-3.5 h-3.5" /> Notice
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Admit Card / Candidate Portal</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">sso.rajasthan.gov.in/signin</td>
                    <td className="px-4 py-2.5 text-center">
                      <a
                        href={officialAdmitCardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> SSO Login
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-900">Exam City / Admit Card Notice</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">BC0C0054-874B-4843-B8A6-769FF4A6FF4E.pdf</td>
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
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">BE73BA4C8E8042CAB7D57CD3660C025E.pdf</td>
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
                    <td className="px-4 py-2.5 font-medium text-gray-900">RPSC Official News & Portal</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 font-mono">rpsc.rajasthan.gov.in/news</td>
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
            title="RPSC Statistical Officer Answer Key 2026 – Download PDF, Model Key & Press Note"
            url="https://rajdailytools.in/rpsc-statistical-officer-answer-key-2026.html"
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
