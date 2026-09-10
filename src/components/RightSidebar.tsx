import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { ExternalLink, Calendar, Send, Layers, ArrowRight } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';
import { getPageUrl } from '../utils/urlHelper';

interface RightSidebarProps {
  currentExam: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ currentExam, onNavigate, depth = 0 }) => {
  // Dynamically resolve related exams: first check relatedExamIds, then same category, then general
  const relatedFromIds = currentExam.relatedExamIds && currentExam.relatedExamIds.length > 0
    ? EXAMS_DATABASE.filter((e) => currentExam.relatedExamIds?.includes(e.id))
    : [];

  const relatedFromCategory = EXAMS_DATABASE.filter(
    (e) => e.category === currentExam.category && e.id !== currentExam.id
  );

  const otherJobs = (
    relatedFromIds.length > 0
      ? relatedFromIds
      : relatedFromCategory.length > 0
      ? relatedFromCategory
      : EXAMS_DATABASE.filter((e) => e.id !== currentExam.id)
  ).slice(0, 4);

  return (
    <div className="space-y-5">
      {/* CARD 1: Quick Important Dates */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-100">
          <Calendar className="w-4 h-4 text-blue-600" />
          <span>Important Dates Timeline</span>
        </h4>
        <div className="space-y-2.5">
          {currentExam.importantDates.slice(0, 5).map((d, i) => (
            <div key={i} className="flex items-start justify-between text-xs gap-2">
              <span className="text-slate-500">{d.label}</span>
              <strong className={`shrink-0 ${d.isHighlight ? 'text-blue-600 font-bold' : 'text-slate-800'}`}>
                {d.date}
              </strong>
            </div>
          ))}
        </div>
      </div>

      {/* CARD 2: Official Direct Links */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-100">
          <ExternalLink className="w-4 h-4 text-emerald-600" />
          <span>Official Portals &amp; Links</span>
        </h4>
        <div className="space-y-2">
          {currentExam.applyLink && (
            <a
              href={currentExam.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors"
            >
              <span>Apply Online Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {currentExam.officialNotification && (
            <a
              href={currentExam.officialNotification}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors"
            >
              <span>Official Notification PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {currentExam.officialWebsite && (
            <a
              href={currentExam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors"
            >
              <span>Authority Official Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* CARD 3: Mock Test Banner */}
      <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-2xl p-5 shadow-md">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
          <Layers className="w-4 h-4" />
          <span>Exam Prep Series</span>
        </div>
        <h4 className="font-extrabold text-base text-white font-display mb-1.5">
          {currentExam.examName} Mock Test
        </h4>
        <p className="text-xs text-blue-100 leading-relaxed mb-4">
          Attempt simulated online CBT tests with negative marking and instant accuracy report.
        </p>
        <a
          href={currentExam.mockTestLink || getPageUrl('mock-test', undefined, depth)}
          target={currentExam.mockTestLink ? '_blank' : undefined}
          rel={currentExam.mockTestLink ? 'noopener noreferrer' : undefined}
          onClick={(e) => {
            if (!currentExam.mockTestLink && onNavigate) {
              e.preventDefault();
              onNavigate('mock-test');
            }
          }}
          className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
        >
          <span>Start Online Mock Test</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* CARD 4: Join Telegram & Community */}
      <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-5 text-sky-950">
        <div className="flex items-center gap-2 mb-2">
          <Send className="w-4 h-4 text-sky-600" />
          <h4 className="text-sm font-bold font-display">Join Aspirant Community</h4>
        </div>
        <p className="text-xs text-sky-800 leading-relaxed mb-3.5">
          Receive instantaneous job notifications, admit card alerts, and study PDF notes directly on Telegram.
        </p>
        <a
          href="https://t.me/Educator4ll"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
        >
          <span>Join Telegram Channel</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* CARD 5: Related Vacancies */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <h4 className="text-sm font-bold text-slate-900 font-display mb-3 pb-2 border-b border-slate-100">
          Other Trending Recruitments
        </h4>
        <div className="space-y-3">
          {otherJobs.map((item) => (
            <a
              key={item.id}
              href={getPageUrl('job-detail', item.slug, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('job-detail', item.slug);
                }
              }}
              className="w-full text-left group block cursor-pointer"
            >
              <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                {item.examName}
              </div>
              <div className="text-[11px] text-slate-500 flex items-center justify-between mt-0.5">
                <span>{item.totalVacancy}</span>
                <span className="text-blue-600 font-medium group-hover:underline">View →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
