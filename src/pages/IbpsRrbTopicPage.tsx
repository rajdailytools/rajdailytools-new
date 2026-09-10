import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { getPageUrl } from '../utils/urlHelper';
import { getCountdown } from '../utils/dateUtils';
import {
  ExternalLink,
  Download,
  Send,
  Calendar,
  Layers,
  BookOpen,
  DollarSign,
  Clock,
  GraduationCap,
  Users,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  FileText,
  Building2,
  Briefcase,
  ShieldCheck,
  Award
} from 'lucide-react';

export type IbpsTopic =
  | 'vacancy'
  | 'exam-pattern'
  | 'syllabus'
  | 'salary'
  | 'important-links'
  | 'apply-online'
  | 'age-limit'
  | 'eligibility';

interface IbpsRrbTopicPageProps {
  exam: ExamRecord;
  topic: IbpsTopic;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const IbpsRrbTopicPage: React.FC<IbpsRrbTopicPageProps> = ({
  exam,
  topic,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(exam.applicationLastDate, 'deadline');

  const topicConfig: Record<
    IbpsTopic,
    { title: string; subtitle: string; icon: React.ReactNode; breadcrumbLabel: string }
  > = {
    vacancy: {
      title: `${exam.examName} Vacancy 2026 (13,706 Posts)`,
      subtitle: `Post-wise & Bank-wise breakdown for Office Assistant (8,183) and Officer Scale I, II & III across 28 Regional Rural Banks.`,
      icon: <Users className="w-7 h-7 text-blue-600" />,
      breadcrumbLabel: 'Vacancy Details'
    },
    'exam-pattern': {
      title: `${exam.examName} Exam Pattern 2026`,
      subtitle: `Official scheme for Prelims (80 Q, 45 Min), Mains (200 Q, 120 Min), Single CBT for Scale II & III, and negative marking rules.`,
      icon: <Layers className="w-7 h-7 text-indigo-600" />,
      breadcrumbLabel: 'Exam Pattern'
    },
    syllabus: {
      title: `${exam.examName} Syllabus 2026 (Prelims & Mains)`,
      subtitle: `Detailed subject-wise syllabus for Reasoning, Quantitative Aptitude, Computer Knowledge, General Awareness, and English/Hindi.`,
      icon: <BookOpen className="w-7 h-7 text-emerald-600" />,
      breadcrumbLabel: 'Syllabus'
    },
    salary: {
      title: `${exam.examName} Salary Structure 2026`,
      subtitle: `Pay scale, basic pay, DA, HRA, special allowances, and in-hand take-home salary for Clerk and Officers.`,
      icon: <DollarSign className="w-7 h-7 text-amber-600" />,
      breadcrumbLabel: 'Salary & Allowances'
    },
    'important-links': {
      title: `${exam.examName} Official Important Links 2026`,
      subtitle: `Direct verified links to Apply Online (Office Assistant & Officers), Notification PDF, and IBPS candidate portal.`,
      icon: <ExternalLink className="w-7 h-7 text-purple-600" />,
      breadcrumbLabel: 'Important Links'
    },
    'apply-online': {
      title: `How to Apply Online for ${exam.examName}`,
      subtitle: `Step-by-step registration guide, Live Photo capture rules, left thumb impression, signature, and handwritten declaration text.`,
      icon: <Send className="w-7 h-7 text-rose-600" />,
      breadcrumbLabel: 'Apply Online Guide'
    },
    'age-limit': {
      title: `${exam.examName} Age Limit & Cut-Off 2026`,
      subtitle: `Crucial cut-off date (01-09-2026), post-wise age criteria (18 to 40 years), and category-wise age relaxations.`,
      icon: <Clock className="w-7 h-7 text-cyan-600" />,
      breadcrumbLabel: 'Age Limit Criteria'
    },
    eligibility: {
      title: `${exam.examName} Eligibility Criteria 2026`,
      subtitle: `Educational qualifications, crucial date (21-09-2026), local language proficiency norms, and work experience criteria.`,
      icon: <GraduationCap className="w-7 h-7 text-teal-600" />,
      breadcrumbLabel: 'Eligibility Criteria'
    }
  };

  const currentTopic = topicConfig[topic];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Latest Jobs', page: 'latest-jobs' },
          { label: exam.examName, page: 'job-detail', slug: exam.slug },
          { label: currentTopic.breadcrumbLabel }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Lifecycle Navigation Bar */}
      <LifecycleNavbar exam={exam} currentSection="job" onNavigate={onNavigate} depth={depth} />

      {/* Hero Header Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-blue-50 border border-blue-200 rounded-2xl shrink-0">
              {exam.logoIcon}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  {exam.category}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Advt No: CRP-RRBs-XV / 2026
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight">
                {currentTopic.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
                {currentTopic.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end gap-2 shrink-0">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">
              Applications Active
            </span>
            <span className="text-[11px] text-slate-400 font-semibold">
              Official PDF Verified
            </span>
          </div>
        </div>

        {/* Highlight Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Organization</span>
            <strong className="text-slate-800 text-xs font-bold">{exam.organization}</strong>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Total Vacancies</span>
            <strong className="text-blue-700 text-xs font-bold">13,706 Posts</strong>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Application Window</span>
            <strong className="text-slate-800 text-xs font-bold">01.09.2026 to 21.09.2026</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Countdown</span>
            <strong className="text-emerald-700 text-sm font-bold">{countdown.text}</strong>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={exam.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Apply Online (Office Assistant)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href="https://ibps.in/crp-rrb-xv/apply-officers"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Apply Online (Officers Scale I/II/III)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href={exam.officialNotification}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-emerald-200"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF (88 Pages)</span>
          </a>
        </div>
      </div>

      {/* Topic-Specific Navigation Pills */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max text-xs font-bold">
          <span className="text-slate-400 uppercase tracking-wider px-2 text-[10px]">IBPS RRB XV Hub:</span>
          <a
            href={getPageUrl('ibps-rrb-recruitment-2026', undefined, depth)}
            className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            50-Section Overview
          </a>
          <a
            href={getPageUrl('ibps-rrb-eligibility-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'eligibility' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Eligibility
          </a>
          <a
            href={getPageUrl('ibps-rrb-age-limit-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'age-limit' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Age Limit
          </a>
          <a
            href={getPageUrl('ibps-rrb-vacancy-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'vacancy' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Vacancy (13,706)
          </a>
          <a
            href={getPageUrl('ibps-rrb-exam-pattern-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'exam-pattern' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Exam Pattern
          </a>
          <a
            href={getPageUrl('ibps-rrb-syllabus-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'syllabus' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Syllabus
          </a>
          <a
            href={getPageUrl('ibps-rrb-salary-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'salary' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Salary
          </a>
          <a
            href={getPageUrl('ibps-rrb-important-links-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'important-links' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Important Links
          </a>
          <a
            href={getPageUrl('ibps-rrb-apply-online-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'apply-online' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Apply Online
          </a>
        </div>
      </div>

      <ShareButtons title={currentTopic.title} />

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* ========================================================= */}
          {/* TOPIC 1: VACANCY DETAILS */}
          {/* ========================================================= */}
          {topic === 'vacancy' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <h2 className="text-xl font-bold text-slate-900 font-display mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Post-Wise Vacancy Distribution (13,706 Total Posts)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  The Institute of Banking Personnel Selection (IBPS) has officially announced <strong>13,706 vacancies</strong> under Common Recruitment Process for RRBs (CRP-RRBs-XV) across 28 Regional Rural Banks in India.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Post Title</th>
                        <th className="p-3">Pay Scale</th>
                        <th className="p-3 text-right">Vacancies</th>
                        <th className="p-3">Cadre</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr className="bg-blue-50/40 font-bold">
                        <td className="p-3">Office Assistant (Multipurpose)</td>
                        <td className="p-3">Clerical Cadre</td>
                        <td className="p-3 text-right text-blue-700">8,183</td>
                        <td className="p-3">Group "B"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-I (Assistant Manager)</td>
                        <td className="p-3">JMGS-I</td>
                        <td className="p-3 text-right font-bold text-slate-900">4,256</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (General Banking Officer)</td>
                        <td className="p-3">MMGS-II</td>
                        <td className="p-3 text-right font-bold text-slate-900">666</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (Information Technology Officer)</td>
                        <td className="p-3">MMGS-II Specialist</td>
                        <td className="p-3 text-right font-bold text-slate-900">182</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (Chartered Accountant)</td>
                        <td className="p-3">MMGS-II Specialist</td>
                        <td className="p-3 text-right font-bold text-slate-900">81</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (Law Officer)</td>
                        <td className="p-3">MMGS-II Specialist</td>
                        <td className="p-3 text-right font-bold text-slate-900">46</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (Treasury Manager)</td>
                        <td className="p-3">MMGS-II Specialist</td>
                        <td className="p-3 text-right font-bold text-slate-900">18</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (Marketing Officer)</td>
                        <td className="p-3">MMGS-II Specialist</td>
                        <td className="p-3 text-right font-bold text-slate-900">16</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (Agriculture Officer)</td>
                        <td className="p-3">MMGS-II Specialist</td>
                        <td className="p-3 text-right font-bold text-slate-900">38</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-III (Senior Manager)</td>
                        <td className="p-3">MMGS-III</td>
                        <td className="p-3 text-right font-bold text-slate-900">220</td>
                        <td className="p-3">Group "A"</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td className="p-3" colSpan={2}>Grand Total (All Posts across 28 RRBs)</td>
                        <td className="p-3 text-right text-emerald-700 text-sm">13,706</td>
                        <td className="p-3">All India</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900">Key Highlights of Participating RRBs</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Vacancies are allocated state-wise across 28 participating regional rural banks, including Baroda Rajasthan Kshetriya Gramin Bank, Rajasthan Marudhara Gramin Bank, Aryavart Bank, Prathama UP Gramin Bank, Baroda UP Bank, Dakshin Bihar Gramin Bank, Uttar Bihar Gramin Bank, Punjab Gramin Bank, and Madhya Pradesh Gramin Bank.
                </p>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                  <strong>Important Notice on Multiple Applications:</strong> A candidate can apply for the Post of Office Assistant (Multipurpose) and can also apply for the Post of Officer. However, a candidate can apply for only <strong>ONE post in the Officer cadre</strong> (either Scale-I, Scale-II, or Scale-III).
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 2: EXAM PATTERN */}
          {/* ========================================================= */}
          {topic === 'exam-pattern' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <span>Preliminary Examination Pattern (Objective CBT)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Applicable for Office Assistant (Multipurpose) and Officer Scale-I. Composite time of <strong>45 minutes</strong> for 80 questions carrying 80 marks.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Section</th>
                        <th className="p-3">Medium of Exam</th>
                        <th className="p-3 text-center">No. of Questions</th>
                        <th className="p-3 text-center">Max Marks</th>
                        <th className="p-3 text-center">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr>
                        <td className="p-3 font-semibold">Reasoning</td>
                        <td className="p-3 text-slate-500">State / Regional + English/Hindi</td>
                        <td className="p-3 text-center">40</td>
                        <td className="p-3 text-center">40</td>
                        <td className="p-3 text-center rowspan-2 font-bold" rowSpan={2}>
                          Composite Time of 45 Minutes
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Numerical Ability / Quantitative Aptitude</td>
                        <td className="p-3 text-slate-500">State / Regional + English/Hindi</td>
                        <td className="p-3 text-center">40</td>
                        <td className="p-3 text-center">40</td>
                      </tr>
                      <tr className="bg-blue-50 font-bold">
                        <td className="p-3">Total Prelims</td>
                        <td className="p-3">-</td>
                        <td className="p-3 text-center text-blue-700">80 Qs</td>
                        <td className="p-3 text-center text-blue-700">80 Marks</td>
                        <td className="p-3 text-center">45 Minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                  <strong>Penalty for Wrong Answers:</strong> There will be penalty for wrong answers marked in the Objective Tests. For each question for which a wrong answer has been given by the candidate, one fourth or <strong>0.25 of the marks</strong> assigned to that question will be deducted as penalty.
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900">Main Examination Pattern (200 Questions, 200 Marks)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Test Name</th>
                        <th className="p-3 text-center">Questions</th>
                        <th className="p-3 text-center">Max Marks</th>
                        <th className="p-3 text-center">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr><td className="p-3">1. Reasoning</td><td className="p-3 text-center">40</td><td className="p-3 text-center">50</td><td className="p-3 text-center rowspan-5 font-bold" rowSpan={5}>Composite Time of 2 Hours (120 Minutes)</td></tr>
                      <tr><td className="p-3">2. Computer Knowledge</td><td className="p-3 text-center">40</td><td className="p-3 text-center">20</td></tr>
                      <tr><td className="p-3">3. General Awareness</td><td className="p-3 text-center">40</td><td className="p-3 text-center">40</td></tr>
                      <tr><td className="p-3">4. English Language or Hindi Language (Candidate Choice)</td><td className="p-3 text-center">40</td><td className="p-3 text-center">40</td></tr>
                      <tr><td className="p-3">5. Numerical Ability / Quantitative Aptitude</td><td className="p-3 text-center">40</td><td className="p-3 text-center">50</td></tr>
                      <tr className="bg-slate-100 font-bold"><td className="p-3">Total Mains Scheme</td><td className="p-3 text-center">200 Qs</td><td className="p-3 text-center">200 Marks</td><td className="p-3 text-center">120 Minutes</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 3: SYLLABUS */}
          {/* ========================================================= */}
          {topic === 'syllabus' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <span>Subject-Wise Syllabus for IBPS RRB XV 2026</span>
                </h2>

                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-blue-800 mb-1">1. Reasoning Ability</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Puzzles (Floor, Flat, Box, Scheduling), Seating Arrangement (Circular, Linear, Square facing inside/outside), Syllogism, Blood Relations, Direction Sense, Coding-Decoding, Inequalities, Alphanumeric Series, Order &amp; Ranking, Data Sufficiency.
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-indigo-800 mb-1">2. Quantitative Aptitude &amp; Numerical Ability</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Data Interpretation (Bar Graph, Line Graph, Table DI, Pie Chart, Caselet), Simplification &amp; Approximation, Number Series (Missing &amp; Wrong), Quadratic Equations, Arithmetic Word Problems (Percentage, Profit &amp; Loss, Ratio &amp; Proportion, Simple &amp; Compound Interest, Time &amp; Work, Time-Speed-Distance, Mixtures, Permutation &amp; Probability).
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-emerald-800 mb-1">3. General Awareness / Financial Awareness</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Banking Terms &amp; Abbreviations, RBI Monetary Policy, Rural Banking Initiatives, Priority Sector Lending (PSL), NABARD schemes, Union Budget, Government Schemes for Agriculture, National &amp; International Current Affairs (Last 6 Months), Headquarters, Capital &amp; Currencies.
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-purple-800 mb-1">4. Computer Knowledge</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fundamentals of Computers, Hardware &amp; Software, Operating Systems, Microsoft Office (Word, Excel, PowerPoint keyboard shortcuts), Internet &amp; Networking (LAN, WAN, Protocols), Cyber Security, DBMS Basics, History of Computers.
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-rose-800 mb-1">5. English / Hindi Language</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Reading Comprehension, Cloze Test, Error Spotting, Sentence Improvement, Para Jumbles, Fillers, Vocabulary (Synonyms, Antonyms, Idioms &amp; Phrases), हिंदी व्याकरण, गद्यांश, वाक्य त्रुटि शोधन.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 4: SALARY */}
          {/* ========================================================= */}
          {topic === 'salary' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-amber-600" />
                  <span>Salary Structure, Pay Scales &amp; In-Hand Pay (12th BPS)</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Post Designation</th>
                        <th className="p-3">Basic Pay Scale</th>
                        <th className="p-3">Approx. In-Hand Monthly Pay</th>
                        <th className="p-3">Perks &amp; Allowances</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr>
                        <td className="p-3 font-semibold">Office Assistant (Multipurpose)</td>
                        <td className="p-3">₹19,900 – ₹47,920</td>
                        <td className="p-3 font-bold text-emerald-700">₹34,000 – ₹38,000 / mo</td>
                        <td className="p-3">DA, HRA, Transport, Medical Reimbursement</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-I (Assistant Manager)</td>
                        <td className="p-3">₹36,000 – ₹63,840</td>
                        <td className="p-3 font-bold text-emerald-700">₹62,000 – ₹68,000 / mo</td>
                        <td className="p-3">DA, HRA, Leased Accommodation, Newspaper, Petrol</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (Manager)</td>
                        <td className="p-3">₹48,170 – ₹69,810</td>
                        <td className="p-3 font-bold text-emerald-700">₹82,000 – ₹89,000 / mo</td>
                        <td className="p-3">Higher DA, Executive Medical, Special Allowance</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-III (Senior Manager)</td>
                        <td className="p-3">₹63,840 – ₹78,230</td>
                        <td className="p-3 font-bold text-emerald-700">₹1,05,000 – ₹1,15,000 / mo</td>
                        <td className="p-3">Senior Executive perks, Official conveyance, House lease</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                  <strong>Career Growth:</strong> Regional Rural Banks offer systematic promotions up to Chief General Manager and Chairman level through internal fast-track promotion exams and performance interviews.
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 5: IMPORTANT LINKS */}
          {/* ========================================================= */}
          {topic === 'important-links' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-purple-600" />
                  <span>Official Verified Important Links</span>
                </h2>

                <div className="space-y-3">
                  <a
                    href="https://ibps.in/crp-rrb-xv/apply-office-assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-between transition-colors"
                  >
                    <div>
                      <strong className="text-sm text-blue-950 block">Apply Online – Office Assistant (Multipurpose)</strong>
                      <span className="text-xs text-blue-700">Registration, Live Photo Capture &amp; Fee Payment</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </a>

                  <a
                    href="https://ibps.in/crp-rrb-xv/apply-officers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-between transition-colors"
                  >
                    <div>
                      <strong className="text-sm text-slate-900 block">Apply Online – Officers Scale I, II &amp; III</strong>
                      <span className="text-xs text-slate-600">Common Application Portal for Officer Cadres</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-600" />
                  </a>

                  <a
                    href={exam.officialNotification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-between transition-colors"
                  >
                    <div>
                      <strong className="text-sm text-emerald-950 block">Download Detailed Notification PDF (88 Pages)</strong>
                      <span className="text-xs text-emerald-700">CRP-RRBs-XV Complete Advertisement &amp; Annexures</span>
                    </div>
                    <Download className="w-4 h-4 text-emerald-600" />
                  </a>

                  <a
                    href="https://ibps.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-between transition-colors"
                  >
                    <div>
                      <strong className="text-sm text-slate-900 block">Official IBPS Website</strong>
                      <span className="text-xs text-slate-600">https://www.ibps.in</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-600" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 6: APPLY ONLINE */}
          {/* ========================================================= */}
          {topic === 'apply-online' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Send className="w-5 h-5 text-rose-600" />
                  <span>How to Apply Online for IBPS RRB XV 2026</span>
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong className="text-slate-900 block mb-1">Step 1: New Registration</strong>
                    Visit ibps.in, click on "CRP RRBs-XV" and select "Click here for New Registration". Enter basic details (Full name, mobile number, email ID) to receive Registration Number &amp; Password.
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong className="text-slate-900 block mb-1">Step 2: Live Photograph Capture</strong>
                    Capture a live webcam/mobile photograph ensuring good lighting, plain background, and no cap/sunglasses.
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong className="text-slate-900 block mb-1">Step 3: Signature &amp; Thumb Impression Upload</strong>
                    Upload signature in black ink on white paper (10KB–20KB, 140×60 px) and Left Thumb Impression (20KB–50KB).
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong className="text-slate-900 block mb-1">Step 4: Handwritten Declaration</strong>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs font-mono text-amber-900 mt-1">
                      "I, _______ (Name of candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required."
                    </div>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong className="text-slate-900 block mb-1">Step 5: Fee Payment &amp; Printout</strong>
                    Pay application fee online (General/OBC: ₹850, SC/ST/PwBD: ₹175) via Net Banking/UPI/Debit Card. Print final submitted form.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 7: AGE LIMIT */}
          {/* ========================================================= */}
          {topic === 'age-limit' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-600" />
                  <span>Age Limit Criteria as on 01.09.2026</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Cadre &amp; Post</th>
                        <th className="p-3">Age Requirement</th>
                        <th className="p-3">Born Not Earlier Than</th>
                        <th className="p-3">Born Not Later Than</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      <tr>
                        <td className="p-3 font-semibold">Office Assistant (Multipurpose)</td>
                        <td className="p-3 font-bold text-blue-700">18 to 28 Years</td>
                        <td className="p-3">02.09.1998</td>
                        <td className="p-3">01.09.2008</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-I (Assistant Manager)</td>
                        <td className="p-3 font-bold text-blue-700">18 to 30 Years</td>
                        <td className="p-3">03.09.1996</td>
                        <td className="p-3">31.08.2008</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-II (Manager)</td>
                        <td className="p-3 font-bold text-blue-700">21 to 32 Years</td>
                        <td className="p-3">03.09.1994</td>
                        <td className="p-3">31.08.2005</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Officer Scale-III (Senior Manager)</td>
                        <td className="p-3 font-bold text-blue-700">21 to 40 Years</td>
                        <td className="p-3">03.09.1986</td>
                        <td className="p-3">31.08.2005</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Category-Wise Upper Age Relaxation:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Scheduled Caste / Scheduled Tribe (SC/ST): <strong>+5 Years</strong></li>
                    <li>Other Backward Classes (OBC Non-Creamy Layer): <strong>+3 Years</strong></li>
                    <li>Persons with Benchmark Disabilities (PwBD): <strong>+10 Years</strong></li>
                    <li>Ex-Servicemen / Disabled ESM: Actual military service + 3 years (up to max 50 yrs)</li>
                    <li>Widows, Divorced Women (Office Assistant): Up to 35 years (General), 38 years (OBC), 40 years (SC/ST)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 8: ELIGIBILITY */}
          {/* ========================================================= */}
          {topic === 'eligibility' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-teal-600" />
                  <span>Educational Qualification &amp; Experience (Cut-off: 21.09.2026)</span>
                </h2>

                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Office Assistant (Multipurpose)</h3>
                    <p className="text-xs text-slate-600">
                      Bachelor’s degree in any discipline from a recognized University or its equivalent. Proficiency in local language as prescribed by the participating RRB(s). Desirable: Working knowledge of Computer. <strong>No prior experience required.</strong>
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Officer Scale-I (Assistant Manager)</h3>
                    <p className="text-xs text-slate-600">
                      Bachelor’s degree in any discipline. Preference given to candidates having degree in Agriculture, Horticulture, Forestry, Animal Husbandry, Veterinary Science, Agricultural Engineering, IT, Law, Economics or Accountancy. Proficiency in local language required. <strong>No experience required.</strong>
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Officer Scale-II (General Banking Officer)</h3>
                    <p className="text-xs text-slate-600">
                      Bachelor’s degree in any discipline with minimum 50% marks in aggregate. <strong>Experience:</strong> Two years as an officer in a Bank or Financial Institution.
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Officer Scale-III (Senior Manager)</h3>
                    <p className="text-xs text-slate-600">
                      Bachelor’s degree in any discipline with minimum 50% marks in aggregate. <strong>Experience:</strong> Minimum 5 years experience as an Officer in a Bank or Financial Institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Tools Box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
              Tools for IBPS RRB XV
            </h3>
            <div className="space-y-2">
              <a
                href={getPageUrl('tool-detail', `photo-resizer?exam=${exam.slug}`, depth)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-xs font-bold text-slate-700"
              >
                <span>Passport Photo Resizer</span>
                <span className="text-[10px] text-slate-400">20–50 KB</span>
              </a>
              <a
                href={getPageUrl('tool-detail', `signature-resizer?exam=${exam.slug}`, depth)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-xs font-bold text-slate-700"
              >
                <span>Signature Resizer</span>
                <span className="text-[10px] text-slate-400">10–20 KB</span>
              </a>
              <a
                href={getPageUrl('tool-detail', `age-calculator?exam=${exam.slug}`, depth)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-xs font-bold text-slate-700"
              >
                <span>Age Calculator (as on 01.09.2026)</span>
                <span className="text-[10px] text-emerald-600 font-bold">Auto</span>
              </a>
              <a
                href={getPageUrl('tool-detail', `salary-calculator?exam=${exam.slug}`, depth)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-xs font-bold text-slate-700"
              >
                <span>Salary &amp; In-Hand Pay Calculator</span>
                <span className="text-[10px] text-slate-400">12th BPS</span>
              </a>
            </div>
          </div>

          {/* Official Helpdesk */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-xs text-slate-600 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">IBPS Candidate Helpdesk</h3>
            <p>Toll-Free Helpline: 1800 222 366 / 1800 103 4566 (09:30 AM to 06:00 PM)</p>
            <p>Candidate Grievance: cgrs.ibps.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
