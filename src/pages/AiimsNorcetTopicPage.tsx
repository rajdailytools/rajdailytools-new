import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { getPageUrl } from '../utils/urlHelper';
import { formatDate, getCountdown } from '../utils/dateUtils';
import {
  ExternalLink,
  Download,
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
  Award,
  IdCard,
  Sparkles
} from 'lucide-react';

export type AiimsTopic =
  | 'vacancy'
  | 'exam-pattern'
  | 'syllabus'
  | 'salary'
  | 'important-links'
  | 'age-limit'
  | 'eligibility'
  | 'exam-date'
  | 'result'
  | 'answer-key'
  | 'cut-off';

interface AiimsNorcetTopicPageProps {
  exam: ExamRecord;
  topic: AiimsTopic;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AiimsNorcetTopicPage: React.FC<AiimsNorcetTopicPageProps> = ({
  exam,
  topic,
  onNavigate,
  depth = 0
}) => {
  const countdown = getCountdown(exam.examDate, 'exam');

  const topicConfig: Record<
    AiimsTopic,
    { title: string; subtitle: string; icon: React.ReactNode; breadcrumbLabel: string }
  > = {
    vacancy: {
      title: `${exam.examName} Vacancy 2026 (2,218 Posts)`,
      subtitle: `Complete vacancy distribution for Nursing Officer across AIIMS Institutes and Central Hospitals nationwide.`,
      icon: <Users className="w-5 h-5" />,
      breadcrumbLabel: 'Vacancies'
    },
    'exam-pattern': {
      title: `${exam.examName} Exam Pattern 2026 (Stage-I & Stage-II CBT)`,
      subtitle: `Detailed marking scheme, sectional timing (5 x 18 mins), negative marking (1/3rd) and test structure.`,
      icon: <Layers className="w-5 h-5" />,
      breadcrumbLabel: 'Exam Pattern'
    },
    syllabus: {
      title: `${exam.examName} Syllabus 2026 (INC Core Curriculum & General Knowledge)`,
      subtitle: `Subject-wise clinical concepts, medical-surgical nursing, pharmacology, and scenario competencies.`,
      icon: <BookOpen className="w-5 h-5" />,
      breadcrumbLabel: 'Syllabus'
    },
    salary: {
      title: `${exam.examName} Salary 2026 – Pay Level-7 & Allowances`,
      subtitle: `Basic pay of ₹44,900, 50% DA, Nursing Allowance (₹7,200), and monthly in-hand breakdown.`,
      icon: <DollarSign className="w-5 h-5" />,
      breadcrumbLabel: 'Salary & Pay Scale'
    },
    'important-links': {
      title: `${exam.examName} Important Links 2026 – Direct Official Portal & Admit Card`,
      subtitle: `Authentic links for Admit Card download, AIIMS portal login, and official recruitment circulars.`,
      icon: <FileText className="w-5 h-5" />,
      breadcrumbLabel: 'Important Links'
    },
    'age-limit': {
      title: `${exam.examName} Age Limit 2026 (18 to 30 Years)`,
      subtitle: `Crucial cut-off date (13 August 2026) and category-wise age relaxations (OBC 3 yrs, SC/ST 5 yrs, PwBD 10-15 yrs).`,
      icon: <Clock className="w-5 h-5" />,
      breadcrumbLabel: 'Age Limit'
    },
    eligibility: {
      title: `${exam.examName} Eligibility Criteria 2026 (B.Sc Nursing & GNM Diploma)`,
      subtitle: `Degrees, State/INC Nursing Council registration norms, and 50-bed hospital experience conditions.`,
      icon: <GraduationCap className="w-5 h-5" />,
      breadcrumbLabel: 'Eligibility'
    },
    'exam-date': {
      title: `${exam.examName} Exam Date 2026 (Stage-I & Stage-II Schedule)`,
      subtitle: `Stage-I Preliminary CBT on 12 September 2026 and Stage-II Mains CBT on 30 September 2026.`,
      icon: <Calendar className="w-5 h-5" />,
      breadcrumbLabel: 'Exam Date'
    },
    result: {
      title: `${exam.examName} Result 2026 – Merit List & Selection Status`,
      subtitle: `Status: Not Released / To Be Updated. Shortlisting criteria and merit allocation details.`,
      icon: <Award className="w-5 h-5" />,
      breadcrumbLabel: 'Result'
    },
    'answer-key': {
      title: `${exam.examName} Answer Key 2026 – Response Sheet & Objections`,
      subtitle: `Status: Not Released / To Be Updated. Response sheet publication and challenge window details.`,
      icon: <ShieldCheck className="w-5 h-5" />,
      breadcrumbLabel: 'Answer Key'
    },
    'cut-off': {
      title: `${exam.examName} Cut Off 2026 – Category-Wise Percentiles`,
      subtitle: `Status: Not Released / To Be Updated. Minimum qualifying standards: UR/EWS 50%, OBC 45%, SC/ST 40%.`,
      icon: <Award className="w-5 h-5" />,
      breadcrumbLabel: 'Cut Off'
    }
  };

  const config = topicConfig[topic] || topicConfig['vacancy'];

  // Map topic to relevant 50-section IDs
  const topicSectionIds: Record<AiimsTopic, number[]> = {
    vacancy: [5, 6, 7],
    'exam-pattern': [24, 25, 26, 27, 28],
    syllabus: [29, 30, 31],
    salary: [33, 34, 35, 36],
    'important-links': [49, 4, 38],
    'age-limit': [17, 18],
    eligibility: [19, 20, 21, 22, 23],
    'exam-date': [8, 11, 12, 13, 14],
    result: [47, 32],
    'answer-key': [46],
    'cut-off': [48, 28]
  };

  const relevantSections = (exam.allInformation || []).filter((sec) =>
    (topicSectionIds[topic] || []).includes(sec.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Admit Card', page: 'admit-card' },
          {
            label: 'AIIMS NORCET 11th Phase Admit Card 2026',
            url: depth === 1 ? '../aiims-norcet-11th-admit-card-2026.html' : './aiims-norcet-11th-admit-card-2026.html'
          },
          { label: config.breadcrumbLabel }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Lifecycle Navigation Bar */}
      <LifecycleNavbar
        exam={exam}
        currentSection={
          topic === 'exam-date'
            ? 'admit-card'
            : topic === 'result'
            ? 'result'
            : topic === 'answer-key'
            ? 'answer-key'
            : topic === 'cut-off'
            ? 'cut-off'
            : 'notification'
        }
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Hero Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-purple-50 border border-purple-200 rounded-2xl shrink-0">
              {exam.logoIcon || '🏥'}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                  {exam.category}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Admit Card Released
                </span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  AIIMS NORCET-11
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {config.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{exam.organization}</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed my-5">
          {config.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={exam.admitCardLink || 'https://aiimsexams.ac.in/advertisement/6a6350f7e5a81c4267f4ff04'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-purple-600/20 flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Admit Card</span>
          </a>

          <a
            href={exam.officialWebsite || 'https://www.aiimsexams.ac.in/'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-300"
          >
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>AIIMS Official Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="https://t.me/Educator4ll"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Join Telegram</span>
          </a>
        </div>
      </div>

      {/* Share Buttons */}
      <ShareButtons title={config.title} />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Render Deep-Dive Expandable Tables for this topic */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">{config.icon}</span>
              <span>Official Structured Tables &amp; Information</span>
            </h3>

            {relevantSections.length > 0 ? (
              <div className="space-y-4">
                {relevantSections.map((sec) => (
                  <div
                    key={sec.id}
                    className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3"
                  >
                    <h4 className="text-base font-bold text-slate-900 font-display pb-2 border-b border-slate-100 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                        {sec.id}
                      </span>
                      <span>{sec.title}</span>
                    </h4>
                    <div
                      className="accordion-html-body prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: sec.content }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center text-slate-500 text-sm">
                Status: Not Released / To Be Updated. Official notice will be published on aiimsexams.ac.in.
              </div>
            )}
          </div>

          {/* Quick Return to Main Admit Card Page */}
          <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-2xl flex items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-purple-950 font-display">
                Looking for Complete 50-Section AIIMS NORCET Details?
              </h4>
              <p className="text-xs text-purple-800 mt-0.5">
                Visit the master AIIMS NORCET 11th Phase Admit Card 2026 page with all expandable tables.
              </p>
            </div>
            <a
              href={depth === 1 ? '../aiims-norcet-11th-admit-card-2026.html' : './aiims-norcet-11th-admit-card-2026.html'}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold rounded-xl shrink-0 transition-colors"
            >
              View Admit Card Page
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
