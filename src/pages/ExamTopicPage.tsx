import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { getCountdown, formatDate } from '../utils/dateUtils';
import { getPageUrl } from '../utils/urlHelper';
import {
  Briefcase,
  Calendar,
  ExternalLink,
  Send,
  Download,
  AlertCircle,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
  FileText,
  DollarSign,
  GraduationCap,
  Users,
  ShieldAlert,
  Layers,
  PhoneCall,
  Laptop
} from 'lucide-react';

export type ExamTopic =
  | 'vacancy'
  | 'exam-pattern'
  | 'syllabus'
  | 'salary'
  | 'important-links'
  | 'apply-online'
  | 'age-limit'
  | 'eligibility';

interface ExamTopicPageProps {
  exam: ExamRecord;
  topic: ExamTopic;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const ExamTopicPage: React.FC<ExamTopicPageProps> = ({
  exam,
  topic,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(exam.applicationLastDate, 'deadline');

  const topicConfig: Record<
    ExamTopic,
    { title: string; subtitle: string; icon: React.ReactNode; breadcrumbLabel: string }
  > = {
    vacancy: {
      title: `${exam.examName} Vacancy 2026`,
      subtitle: `Post-wise & Department-wise vacancy distribution for LDC, JSA, and DEO posts.`,
      icon: <Users className="w-7 h-7 text-blue-600" />,
      breadcrumbLabel: 'Vacancy Details'
    },
    'exam-pattern': {
      title: `${exam.examName} Exam Pattern 2026`,
      subtitle: `Scheme of Tier-I & Tier-II Computer Based Examination, marking scheme, and sectional timings.`,
      icon: <Layers className="w-7 h-7 text-indigo-600" />,
      breadcrumbLabel: 'Exam Pattern'
    },
    syllabus: {
      title: `${exam.examName} Syllabus 2026 (Tier 1 & Tier 2)`,
      subtitle: `Subject-wise syllabus for English, General Intelligence, Quantitative Aptitude, General Awareness & Computer Knowledge.`,
      icon: <BookOpen className="w-7 h-7 text-emerald-600" />,
      breadcrumbLabel: 'Syllabus'
    },
    salary: {
      title: `${exam.examName} Salary Structure 2026`,
      subtitle: `7th Central Pay Commission Pay Level-2, Level-4, Level-5 matrix, HRA, DA, and in-hand calculation.`,
      icon: <DollarSign className="w-7 h-7 text-amber-600" />,
      breadcrumbLabel: 'Salary & Pay Scale'
    },
    'important-links': {
      title: `${exam.examName} Official Important Links 2026`,
      subtitle: `Verified direct links to Notification PDF, One-Time Registration (OTR), Candidate Portal Login & Commission website.`,
      icon: <ExternalLink className="w-7 h-7 text-purple-600" />,
      breadcrumbLabel: 'Important Links'
    },
    'apply-online': {
      title: `How to Apply Online for ${exam.examName}`,
      subtitle: `Step-by-step OTR instructions, live photo capture guidelines, signature specifications, and fee payment rules.`,
      icon: <Send className="w-7 h-7 text-rose-600" />,
      breadcrumbLabel: 'Apply Online Guide'
    },
    'age-limit': {
      title: `${exam.examName} Age Limit & Cut-Off 2026`,
      subtitle: `Crucial eligibility cut-off date (01-08-2026), age criteria (18-27 years), and category-wise age relaxations.`,
      icon: <Clock className="w-7 h-7 text-cyan-600" />,
      breadcrumbLabel: 'Age Limit Criteria'
    },
    eligibility: {
      title: `${exam.examName} Eligibility Criteria 2026`,
      subtitle: `Educational qualification, crucial date (07-10-2026), post-wise conditions, and nationality norms.`,
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
                <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Application Active
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {currentTopic.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
                {currentTopic.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Key Quick Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 my-5">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Total Vacancies</span>
            <strong className="text-blue-700 text-sm font-display">{exam.totalVacancy}</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Crucial Age Date</span>
            <strong className="text-slate-900 text-sm font-display">01 August 2026</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Application Deadline</span>
            <strong className="text-rose-600 text-sm font-bold">{formatDate(exam.applicationLastDate)}</strong>
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
            <span>Apply Online (OTR Portal)</span>
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

          <a
            href="https://ssc.gov.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-slate-50 text-slate-700 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-200"
          >
            <span>Candidate Login</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Topic-Specific Navigation Pills */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max text-xs font-bold">
          <span className="text-slate-400 uppercase tracking-wider px-2 text-[10px]">SSC CHSL 2026 Hub:</span>
          <a
            href={getPageUrl('ssc-chsl-2026', undefined, depth)}
            className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Main Overview
          </a>
          <a
            href={getPageUrl('ssc-chsl-eligibility-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'eligibility' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Eligibility
          </a>
          <a
            href={getPageUrl('ssc-chsl-age-limit-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'age-limit' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Age Limit
          </a>
          <a
            href={getPageUrl('ssc-chsl-vacancy-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'vacancy' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Vacancy
          </a>
          <a
            href={getPageUrl('ssc-chsl-exam-pattern-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'exam-pattern' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Exam Pattern
          </a>
          <a
            href={getPageUrl('ssc-chsl-syllabus-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'syllabus' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Syllabus
          </a>
          <a
            href={getPageUrl('ssc-chsl-salary-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'salary' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Salary
          </a>
          <a
            href={getPageUrl('ssc-chsl-important-links-2026', undefined, depth)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              topic === 'important-links' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Important Links
          </a>
          <a
            href={getPageUrl('ssc-chsl-apply-online-2026', undefined, depth)}
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
                  <span>SSC CHSL 10+2 Recruitment 2026: Vacancy Breakup & Post Classification</span>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  As per the official SSC notice (Para 3.1), there are approximately <strong>2536 tentative vacancies</strong>.
                  Final vacancies and category-wise/post-wise quotas are compiled after document scrutiny of requisitioning User Departments.
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-xl mb-4">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Post Group</th>
                        <th className="py-3 px-4">Cadre & Ministries</th>
                        <th className="py-3 px-4">Pay Level</th>
                        <th className="py-3 px-4">Tentative Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Lower Division Clerk (LDC) / JSA</td>
                        <td className="py-3 px-4 text-slate-600">Central Ministries, Attached & Subordinate Offices, Armed Forces HQs</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">Pay Level-2 (₹19,900 - ₹63,200)</td>
                        <td className="py-3 px-4 text-slate-700 font-semibold">Included in 2536 Posts</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Data Entry Operator (DEO)</td>
                        <td className="py-3 px-4 text-slate-600">Various Central Departments & Offices</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">Pay Level-4 (₹25,500 - ₹81,100) & Level-5 (₹29,200 - ₹92,300)</td>
                        <td className="py-3 px-4 text-slate-700 font-semibold">Included in 2536 Posts</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Data Entry Operator Grade 'A'</td>
                        <td className="py-3 px-4 text-slate-600">Consumer Affairs, SSC, Ministry of Culture, etc.</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">Pay Level-4 (₹25,500 - ₹81,100)</td>
                        <td className="py-3 px-4 text-slate-700 font-semibold">Included in 2536 Posts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Official Tentative Vacancy Update Notice</span>
                  </div>
                  <p>
                    Post-wise and category-wise vacancy tables are updated periodically by the Commission on the official portal at:{' '}
                    <strong>https://ssc.gov.in &gt; Candidate's Corner &gt; Tentative Vacancy</strong>. We strictly display factual information and do not invent speculative category breakups.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 2: EXAM PATTERN */}
          {/* ========================================================= */}
          {topic === 'exam-pattern' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <span>Tier-I Computer Based Examination Scheme (Para 13.7)</span>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tier-I consists of Objective Type, Multiple choice questions only. The questions will be set in English, Hindi and 13 regional languages.
                  There is a <strong>sectional timer of 15 minutes</strong> for each subject (total 60 minutes).
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-indigo-50/60 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Part</th>
                        <th className="py-3 px-4">Subject</th>
                        <th className="py-3 px-4">Questions</th>
                        <th className="py-3 px-4">Max Marks</th>
                        <th className="py-3 px-4">Time Allowed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Part I</td>
                        <td className="py-3 px-4 font-semibold text-slate-800">English Language (Basic Knowledge)</td>
                        <td className="py-3 px-4">25</td>
                        <td className="py-3 px-4 font-bold text-indigo-600">50</td>
                        <td className="py-3 px-4" rowSpan={4}>
                          <div className="font-bold text-slate-900">60 Minutes</div>
                          <div className="text-[11px] text-slate-500">(15 mins sectional timer per part; 80 mins for scribes)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Part II</td>
                        <td className="py-3 px-4 font-semibold text-slate-800">General Intelligence</td>
                        <td className="py-3 px-4">25</td>
                        <td className="py-3 px-4 font-bold text-indigo-600">50</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Part III</td>
                        <td className="py-3 px-4 font-semibold text-slate-800">Quantitative Aptitude (Basic Arithmetic Skill)</td>
                        <td className="py-3 px-4">25</td>
                        <td className="py-3 px-4 font-bold text-indigo-600">50</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Part IV</td>
                        <td className="py-3 px-4 font-semibold text-slate-800">General Awareness</td>
                        <td className="py-3 px-4">25</td>
                        <td className="py-3 px-4 font-bold text-indigo-600">50</td>
                      </tr>
                      <tr className="bg-indigo-50/40 font-bold">
                        <td className="py-3 px-4" colSpan={2}>Total Scheme</td>
                        <td className="py-3 px-4">100 Questions</td>
                        <td className="py-3 px-4 text-indigo-700">200 Marks</td>
                        <td className="py-3 px-4 text-rose-600">Negative: 0.50 per wrong</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-3">
                    Tier-II Examination Structure & Scheme (Para 13.8)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Tier-II is conducted in two sessions. Session-I includes Section-I, Section-II and Section-III. Session-II includes Section-IV (Skill/Typing Test).
                    It is mandatory for candidates to qualify in all sections.
                  </p>

                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4">Session</th>
                          <th className="py-3 px-4">Section & Module</th>
                          <th className="py-3 px-4">No. of Questions</th>
                          <th className="py-3 px-4">Marks</th>
                          <th className="py-3 px-4">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="py-3 px-4 font-bold text-slate-900" rowSpan={3}>Session-I</td>
                          <td className="py-3 px-4">
                            <strong>Section-I:</strong> Module-I (Math, 30 Q) + Module-II (Reasoning, 30 Q)
                          </td>
                          <td className="py-3 px-4 font-semibold">60 Q</td>
                          <td className="py-3 px-4 font-bold text-indigo-700">180 (3 marks each)</td>
                          <td className="py-3 px-4">1 Hour (30 min timer each)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">
                            <strong>Section-II:</strong> Module-I (English, 40 Q) + Module-II (General Awareness, 20 Q)
                          </td>
                          <td className="py-3 px-4 font-semibold">60 Q</td>
                          <td className="py-3 px-4 font-bold text-indigo-700">180 (3 marks each)</td>
                          <td className="py-3 px-4">1 Hour (40 min & 20 min timer)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">
                            <strong>Section-III:</strong> Computer Knowledge Module (Mandatory Qualifying)
                          </td>
                          <td className="py-3 px-4 font-semibold">15 Q</td>
                          <td className="py-3 px-4 font-bold text-amber-700">45 (Qualifying)</td>
                          <td className="py-3 px-4">15 Minutes</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Session-II</td>
                          <td className="py-3 px-4">
                            <strong>Section-IV:</strong> Skill Test for DEO (8,000 / 15,000 KDPH) or Typing Test for LDC/JSA (35 wpm Eng / 30 wpm Hindi)
                          </td>
                          <td className="py-3 px-4 font-semibold">Typing/Skill</td>
                          <td className="py-3 px-4 font-bold text-emerald-700">Qualifying Nature</td>
                          <td className="py-3 px-4">10 to 15 Minutes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[11px] text-slate-500 mt-2">
                    * Negative marking in Tier-II: 1 mark will be deducted for each wrong answer in Section-I, Section-II and Module-I of Section-III.
                    Merit list is prepared based on aggregate marks in Section-I & Section-II only (Total 360 Marks).
                  </p>
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
                  <span>SSC CHSL 10+2 Official Subject-Wise Syllabus (Para 13.10 & 13.11)</span>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extracted verbatim from the official SSC Combined Higher Secondary Level Notice F. No. HQ-C1102/5/2026-C-1:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* English Language */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-2 text-blue-700">1. English Language</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Spot the Error, Fill in the Blanks, Synonyms/Homonyms, Antonyms, Spellings/Detecting misspelt words,
                      Idioms & Phrases, One word substitution, Improvement of Sentences, Active/Passive Voice of Verbs,
                      Conversion into Direct/Indirect narration, Shuffling of Sentence parts, Shuffling of Sentences in a passage,
                      Cloze Passage, Comprehension Passage.
                    </p>
                  </div>

                  {/* General Intelligence */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-2 text-purple-700">2. General Intelligence</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Semantic Analogy, Symbolic/Number Analogy, Figural Analogy, Semantic Classification, Symbolic/Number Classification,
                      Figural Classification, Semantic Series, Number Series, Figural Series, Problem Solving, Word Building,
                      Coding & Decoding, Numerical Operations, Symbolic Operations, Space Orientation, Venn Diagrams, Punched hole/pattern-folding,
                      Embedded Figures, Critical thinking, Social Intelligence.
                    </p>
                  </div>

                  {/* Quantitative Aptitude */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-2 text-emerald-700">3. Quantitative Aptitude</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Number Systems:</strong> Computation of Whole Number, Decimal & Fractions.
                      <strong>Fundamental Arithmetical:</strong> Percentages, Ratio & Proportion, Square roots, Averages, Interest, Profit & Loss, Discount, Partnership, Mixture, Time & Distance, Time & Work.
                      <strong>Algebra:</strong> Basic algebraic identities & Elementary surds.
                      <strong>Geometry & Mensuration:</strong> Triangles, Circles, Tangents, Quadrilaterals, Cylinders, Spheres, Cones.
                      <strong>Trigonometry:</strong> Trigonometric ratios, Heights and Distances.
                      <strong>Statistical Charts:</strong> Histogram, Frequency polygon, Bar-diagram, Pie-chart.
                    </p>
                  </div>

                  {/* General Awareness */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-2 text-amber-700">4. General Awareness</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Current events of national & international importance, everyday observation and scientific aspect.
                      Questions relating to India and its neighbouring countries especially pertaining to History, Culture,
                      Geography, Economic Scene, General Policy and scientific research.
                    </p>
                  </div>

                  {/* Computer Knowledge (Tier-II) */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 md:col-span-2">
                    <h3 className="font-bold text-slate-900 text-sm mb-2 text-indigo-700">5. Computer Knowledge Module (Tier-II Section-III)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Computer Basics:</strong> Organization of CPU, input/output devices, memory organization, backup devices, Windows Explorer, keyboard shortcuts.
                      <strong>Software:</strong> Windows Operating System, MS Office (Word, Excel, PowerPoint).
                      <strong>Internet & Emails:</strong> Browsing, searching, downloading, uploading, managing email accounts, e-Banking.
                      <strong>Networking & Cyber Security:</strong> Networking devices, protocols, malware threats (viruses, worms, Trojans), and preventive measures.
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
                  <span>SSC CHSL 2026 Pay Scales & In-Hand Salary Breakdown (7th CPC)</span>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  As per official notification Para 3.1, the posts carry central pay levels governed by the 7th Central Pay Commission:
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Designation</th>
                        <th className="py-3 px-4">Pay Level</th>
                        <th className="py-3 px-4">Pay Scale (Basic)</th>
                        <th className="py-3 px-4">Approx In-Hand Salary (City X)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Lower Division Clerk (LDC) / JSA</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">Pay Level-2</td>
                        <td className="py-3 px-4">₹19,900 - ₹63,200</td>
                        <td className="py-3 px-4 font-bold text-emerald-700">₹32,500 - ₹36,000 / month</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Data Entry Operator (DEO)</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">Pay Level-4</td>
                        <td className="py-3 px-4">₹25,500 - ₹81,100</td>
                        <td className="py-3 px-4 font-bold text-emerald-700">₹40,000 - ₹45,500 / month</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Data Entry Operator Grade 'A'</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">Pay Level-4</td>
                        <td className="py-3 px-4">₹25,500 - ₹81,100</td>
                        <td className="py-3 px-4 font-bold text-emerald-700">₹40,000 - ₹45,500 / month</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">DEO (Higher Cadre / Level-5)</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">Pay Level-5</td>
                        <td className="py-3 px-4">₹29,200 - ₹92,300</td>
                        <td className="py-3 px-4 font-bold text-emerald-700">₹46,000 - ₹51,000 / month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1 text-slate-600">
                  <div className="font-bold text-slate-900">Allowances & Deductions:</div>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Dearness Allowance (DA): Currently 50%+ of Basic Pay.</li>
                    <li>House Rent Allowance (HRA): 30% (Class X Cities), 20% (Class Y Cities), 10% (Class Z Cities).</li>
                    <li>Transport Allowance (TA) with applicable DA on TA.</li>
                    <li>Mandatory deductions: National Pension System (NPS 10% of Basic+DA), CGHS medical contribution, and CGEGIS.</li>
                  </ul>
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
                  <span>Official SSC Verified Links & Regional Portals</span>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Always use official Staff Selection Commission portals to register, verify application status, or download notifications:
                </p>

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl gap-3">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Official Recruitment Notification PDF</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5 break-all">Notice_of_adv_chsl_2026.pdf (88 Pages)</div>
                    </div>
                    <a
                      href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl gap-3">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">One-Time Registration (OTR) Portal</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5 break-all">https://ssc.gov.in/candidate-portal/one-time-registration/home-page</div>
                    </div>
                    <a
                      href="https://ssc.gov.in/candidate-portal/one-time-registration/home-page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Register OTR</span>
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl gap-3">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Candidate Portal Login</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5 break-all">https://ssc.gov.in/login</div>
                    </div>
                    <a
                      href="https://ssc.gov.in/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Candidate Login</span>
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl gap-3">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">SSC Official Main Website</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">Staff Selection Commission Government of India Portal</div>
                    </div>
                    <a
                      href="https://ssc.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>Visit SSC Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-xl gap-3">
                    <div>
                      <div className="font-bold text-purple-950 text-sm flex items-center gap-1.5">
                        <PhoneCall className="w-4 h-4 text-purple-700" />
                        <span>SSC Official Toll-Free Helpline</span>
                      </div>
                      <div className="text-xs text-purple-800 mt-0.5">Toll-Free Assistance for OTR and Technical queries: <strong>18003093063</strong></div>
                    </div>
                    <a
                      href="tel:18003093063"
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>Call Helpline</span>
                    </a>
                  </div>
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
                  <span>How to Apply Online for SSC CHSL 10+2 Recruitment 2026</span>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applications must be submitted in online mode only through the official SSC website (https://ssc.gov.in). Follow this step-by-step procedure:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-slate-900 text-sm mb-1 text-blue-700">Step 1: One-Time Registration (OTR)</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Visit <strong>https://ssc.gov.in &gt; Candidate Portal &gt; One-Time Registration</strong>. Enter Aadhaar number (or other valid photo ID), personal details, matriculation board details, roll number, and valid mobile number & email ID. Submit to receive your Registration Number and Password.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-slate-900 text-sm mb-1 text-purple-700">Step 2: Login & Select Examination</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Login using Registration Number and Password. Navigate to <strong>Latest Notifications</strong> and click on <strong>Apply</strong> under "Combined Higher Secondary (10+2) Level Examination, 2026".
                    </p>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <h3 className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-700" />
                      <span>Step 3: Mandatory Live Photo Capture (Para 9.4)</span>
                    </h3>
                    <p className="text-amber-800 leading-relaxed">
                      Candidates must capture a <strong>live photograph</strong> using a webcam or the official <strong>'my SSC' mobile app</strong> (available on Google Play Store).
                      Pre-clicked photo uploads are not permitted. Ensure good lighting, a plain light/white background, look directly into the camera, and do NOT wear caps, masks, or spectacles/glasses.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-slate-900 text-sm mb-1 text-emerald-700">Step 4: Scanned Signature Upload</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Upload scanned signature in JPEG/JPG format with file size between <strong>10 KB to 20 KB</strong> (image dimensions approx 6.0 cm width x 2.0 cm height). Blurry or illegible signatures will lead to form rejection.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-slate-900 text-sm mb-1 text-slate-800">Step 5: Fee Payment & Final Printout</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Pay the fee of ₹100 online via BHIM UPI, Net Banking, or Debit Cards (Women, SC, ST, PwBD, ESM are exempt). Submit the application before <strong>07 October 2026 (23:00 Hrs)</strong> and download the final submitted application form for records.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950">
                  <span className="font-bold">Application Form Correction Window:</span> Candidates will be given a window from <strong>14.10.2026 to 16.10.2026 (23:00 Hours)</strong> to rectify any errors. Correction charges are ₹200 for the first resubmission and ₹500 for the second resubmission.
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
                  <span>SSC CHSL 10+2 Age Limit Criteria & Cut-Off Date 2026 (Para 6.1)</span>
                </h2>
                <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-xl text-xs text-cyan-950 leading-relaxed">
                  <strong>Crucial Date for Age Calculation:</strong> The age limit is determined as on <strong>01 August 2026</strong>.
                  Candidates must be between <strong>18 to 27 years</strong> of age (i.e. candidates born not before <strong>02-08-1999</strong> and not later than <strong>01-08-2008</strong>).
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Category Code</th>
                        <th className="py-3 px-4">Candidate Category</th>
                        <th className="py-3 px-4">Age Relaxation Permissible</th>
                        <th className="py-3 px-4">Effective Upper Age Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-3 px-4 font-mono font-bold text-slate-400">01</td>
                        <td className="py-3 px-4 font-bold text-slate-900">SC / ST</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">5 Years</td>
                        <td className="py-3 px-4 font-bold text-slate-900">32 Years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono font-bold text-slate-400">02</td>
                        <td className="py-3 px-4 font-bold text-slate-900">OBC (Non-Creamy Layer)</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">3 Years</td>
                        <td className="py-3 px-4 font-bold text-slate-900">30 Years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono font-bold text-slate-400">03</td>
                        <td className="py-3 px-4 font-bold text-slate-900">PwBD (Unreserved)</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">10 Years</td>
                        <td className="py-3 px-4 font-bold text-slate-900">37 Years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono font-bold text-slate-400">04</td>
                        <td className="py-3 px-4 font-bold text-slate-900">PwBD (OBC)</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">13 Years</td>
                        <td className="py-3 px-4 font-bold text-slate-900">40 Years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono font-bold text-slate-400">05</td>
                        <td className="py-3 px-4 font-bold text-slate-900">PwBD (SC/ST)</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">15 Years</td>
                        <td className="py-3 px-4 font-bold text-slate-900">42 Years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono font-bold text-slate-400">06</td>
                        <td className="py-3 px-4 font-bold text-slate-900">Ex-Servicemen (ESM)</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">3 Years after military service deduction</td>
                        <td className="py-3 px-4 font-bold text-slate-900">Per Rule</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono font-bold text-slate-400">07</td>
                        <td className="py-3 px-4 font-bold text-slate-900">Central Govt Civilian Employees</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Up to 40 Years (SC/ST: 45 Years)</td>
                        <td className="py-3 px-4 font-bold text-slate-900">40 / 45 Years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono font-bold text-slate-400">08</td>
                        <td className="py-3 px-4 font-bold text-slate-900">Widows / Divorced Women</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Up to 35 Years (SC/ST: 40 Years)</td>
                        <td className="py-3 px-4 font-bold text-slate-900">35 / 40 Years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-center pt-2">
                  <a
                    href={getPageUrl('ssc-chsl-eligibility-2026', undefined, depth)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs rounded-xl shadow-xs"
                  >
                    <span>Check Age & Eligibility Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TOPIC 8: ELIGIBILITY CRITERIA */}
          {/* ========================================================= */}
          {topic === 'eligibility' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-teal-600" />
                  <span>SSC CHSL 10+2 Educational Qualification & Conditions (Para 8.1 & 8.2)</span>
                </h2>
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-xs text-teal-950 leading-relaxed">
                  <strong>Crucial Cut-Off Date for Educational Qualification:</strong> The candidate must possess the essential qualification on or before <strong>07 October 2026</strong>.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm text-blue-700">
                      For LDC / JSA & DEO (General Ministries)
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Candidates must have passed <strong>12th Standard or equivalent examination</strong> from a recognized Board or University. Any stream (Arts, Science, Commerce, Vocational) is eligible.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm text-purple-700">
                      For DEO / DEO Grade 'A' (Specific Ministries)
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      For DEO in Ministry of Consumer Affairs, Food & Public Distribution, Staff Selection Commission and Ministry of Culture:
                      Candidate must have passed <strong>12th Standard in Science stream with Mathematics</strong> as a subject from a recognized Board or equivalent.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-2 text-slate-700">
                  <div className="font-bold text-slate-900">Appearing Candidates (Para 8.3):</div>
                  <p className="leading-relaxed">
                    Candidates who have appeared in their 12th Standard or equivalent examination can also apply. However, they must acquire the essential qualification on or before the cut-off date (<strong>07.10.2026</strong>).
                  </p>
                  <div className="font-bold text-slate-900 pt-1">Border Roads Organization (BRO) Special Criteria (Para 4.4):</div>
                  <p className="leading-relaxed">
                    Requirement for LDC post in BRO is restricted to <strong>male candidates only</strong>. Selected candidates must pass a mandatory 1-Mile Run in 10 minutes (Physical Efficiency Test) and region-specific physical standards (Western Himalayan: 158cm height, etc.) conducted at GREF Centre, Pune.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 50-SECTION FULL OFFICIAL ACCORDION */}
          <Accordion
            sections={exam.allInformation}
            title="Complete 50-Section Exam Information & Guidelines"
            defaultOpenFirst={false}
          />

          {/* FREQUENTLY ASKED QUESTIONS */}
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

        {/* Right Sidebar */}
        <div className="lg:col-span-4">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
