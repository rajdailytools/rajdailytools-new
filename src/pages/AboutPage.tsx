import React from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { getPageUrl } from '../utils/urlHelper';
import {
  ShieldCheck,
  Target,
  Sparkles,
  Send,
  Mail,
  GraduationCap,
  Award,
  CheckCircle2,
  FileCheck,
  IdCard,
  Briefcase,
  Layers,
  HelpCircle,
  FileText,
  AlertCircle
} from 'lucide-react';

interface AboutPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      <Breadcrumb items={[{ label: 'About Us' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          Our Purpose &amp; Editorial Standards
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-display tracking-tight">
          About RajDailyTools
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          RajDailyTools is India's dedicated independent government exam preparation, recruitment resource, and student utility portal. We empower millions of candidates nationwide with authenticated examination information, verified circulars, syllabus breakdowns, and free client-side preparation tools.
        </p>
      </div>

      {/* Founder & Background Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-3xl p-8 text-center shadow-lg">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-5xl mx-auto mb-4 border-2 border-white/30">
              👨‍💻
            </div>
            <h2 className="text-2xl font-black font-display text-white">Raj Singh Sengar</h2>
            <p className="text-xs text-blue-200 mt-0.5">Known as &ldquo;Raj Bhai&rdquo; to Aspirants</p>
            <div className="mt-6 space-y-2 text-xs font-semibold text-blue-100">
              <div className="p-2.5 bg-white/10 rounded-xl flex items-center gap-2 text-left">
                <GraduationCap className="w-4 h-4 text-amber-300 shrink-0" />
                <span>BSc Physics Graduate</span>
              </div>
              <div className="p-2.5 bg-white/10 rounded-xl flex items-center gap-2 text-left">
                <Award className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>COPA ITI Certified Professional</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founder’s Vision</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              A Message from the Founder
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When I was preparing for competitive exams while pursuing my Bachelor of Science in Physics alongside Computer Operator and Programming Assistant (COPA) ITI training, I faced the exact frustration thousands of Indian candidates face daily: confusing notifications, fake date rumors, hidden PDF links, and spam-ridden websites.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              I founded RajDailyTools with a singular mission: to make government recruitment and exam preparation genuinely accessible, authentic, and completely free. We do not place login walls between you and the official syllabus or admit card links. Every single guide is cross-verified directly against official government gazettes and authority portals.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://t.me/Educator4ll"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Join Raj Bhai on Telegram (@Educator4ll)</span>
              </a>
              <a
                href={getPageUrl('contact-us', undefined, depth)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Editorial Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Mission & Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display">Our Mission</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To provide every Indian student with reliable, timely, and easy-to-understand recruitment updates, hall tickets, response sheets, and qualifying cut-offs without subscription barriers.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display">Authenticity First</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All notifications, eligibility standards, application dates, and exam patterns are published only after cross-verification against primary official gazettes and commission circulars.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display">Student-First Utilities</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We engineer practical tools such as the Age Calculator on Cut-Off Dates, Photo &amp; Signature Resizers, and Eligibility Checkers that run securely in your browser.
          </p>
        </div>
      </div>

      {/* What We Cover On RajDailyTools */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Comprehensive Coverage</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-1">
            What You Find on RajDailyTools
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Our daily editorial curation spans central ministries, public service commissions, state selection boards, railways, banking bodies, and defense forces:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Latest Government Jobs</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Verified advertisements, post-wise vacancy matrix, horizontal reservation details, educational criteria, and active apply links.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
              <IdCard className="w-4 h-4 text-purple-600" />
              <span>Admit Cards &amp; City Slips</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Step-by-step instructions to download hall tickets, roll number lookup, exam center intimation slips, and reporting guidelines.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
              <FileCheck className="w-4 h-4 text-amber-600" />
              <span>Answer Keys &amp; Response Sheets</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provisional &amp; final answer keys, official question paper sets, response sheets, score calculators, and objection filing deadlines.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Exam Results &amp; Merit Lists</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct official result PDFs, qualifying status lookup, scorecards, document verification schedules, and final merit rankings.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <FileText className="w-4 h-4 text-rose-600" />
              <span>Cut-Off Marks &amp; Analysis</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official category-wise cut-off marks (UR, EWS, OBC, SC, ST, PwBD) and historical year-by-year qualifying trend comparisons.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Mock Tests &amp; Practice Questions</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full-length simulated computer-based tests (CBT) featuring real countdown timers, negative marking calculations, and performance metrics.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Standards & Error Reporting */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Verification &amp; Editorial Standards
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every notification published on RajDailyTools undergoes rigorous primary-source verification. Our editorial workflow references:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>Central Gazette and State Public Service Commission notifications (UPSC, SSC, State PSCs, MPESB, BTSC, UPSSSC, RPSC).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>Direct circulars from Railway Recruitment Boards (RRBs) and Institute of Banking Personnel Selection (IBPS).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>Official recruitment brochures, syllabus bulletins, and corrigenda published by statutory recruitment boards.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Corrections &amp; Error Reporting
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            We strive for 100% accuracy, but recruitment boards frequently issue last-minute date extensions, corrigenda, and vacancy revisions. If you notice an outdated date, a broken official link, or a typographic discrepancy, we warmly invite your correction.
          </p>
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2">
            <p className="font-semibold text-slate-900">How to report an error or suggest an update:</p>
            <p>
              Send an email to <strong className="text-blue-600">rajdailytools@gmail.com</strong> with the exam name and official notice link, or submit through our{' '}
              <a href={getPageUrl('contact-us', undefined, depth)} className="text-blue-600 font-bold hover:underline">
                Contact Page
              </a>. Most verified corrections are updated on the portal within hours.
            </p>
          </div>
        </div>
      </div>

      {/* Independent Educational Status Notice */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-xs text-slate-600 space-y-2">
        <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
          <span>⚖️ Independent Portal Declaration</span>
        </h4>
        <p className="leading-relaxed">
          RajDailyTools is an independent educational and examination information portal operated for the benefit of Indian students. <strong>RajDailyTools is NOT an official government website and is NOT affiliated, associated, authorized, or endorsed by any government ministry, commission, board, or examination authority.</strong> All official trademarks, department logos, and gazette notices remain the intellectual property of their respective statutory owners. Candidates are always urged to check official board websites for authoritative confirmations.
        </p>
      </div>
    </div>
  );
};
