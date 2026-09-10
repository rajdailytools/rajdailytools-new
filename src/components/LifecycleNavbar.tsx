import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Briefcase, IdCard, FileCheck, Trophy, BarChart2, Layers } from 'lucide-react';
import { getPageUrl } from '../utils/urlHelper';

interface LifecycleNavbarProps {
  exam: ExamRecord;
  currentSection: 'job' | 'admit-card' | 'answer-key' | 'result' | 'cut-off';
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const LifecycleNavbar: React.FC<LifecycleNavbarProps> = ({
  exam,
  currentSection,
  onNavigate,
  depth = 0
}) => {
  const stages = [
    {
      id: 'job',
      label: 'Latest Job',
      icon: Briefcase,
      page: 'job-detail' as ActivePage,
      statusText: exam.status === 'APPLICATION_OPEN' ? 'Apply Open' : 'Form Closed',
      isAvailable: true,
      active: currentSection === 'job'
    },
    {
      id: 'admit-card',
      label: 'Admit Card',
      icon: IdCard,
      page: 'admit-card-detail' as ActivePage,
      statusText:
        exam.status === 'ADMIT_CARD_RELEASED'
          ? 'Released'
          : exam.status === 'EXAM_COMPLETED' || exam.status === 'ANSWER_KEY_RELEASED' || exam.status === 'RESULT_RELEASED'
          ? 'Completed'
          : 'Coming Soon',
      isAvailable: true,
      active: currentSection === 'admit-card'
    },
    {
      id: 'answer-key',
      label: 'Answer Key',
      icon: FileCheck,
      page: 'answer-key-detail' as ActivePage,
      statusText:
        exam.status === 'ANSWER_KEY_RELEASED' || exam.status === 'RESULT_RELEASED'
          ? 'Released'
          : 'Notify Soon',
      isAvailable: Boolean(exam.answerKeyDate || exam.status === 'ANSWER_KEY_RELEASED'),
      active: currentSection === 'answer-key'
    },
    {
      id: 'result',
      label: 'Result',
      icon: Trophy,
      page: 'result-detail' as ActivePage,
      statusText: exam.status === 'RESULT_RELEASED' ? 'Declared' : 'Notify Soon',
      isAvailable: Boolean(exam.resultDate || exam.status === 'RESULT_RELEASED'),
      active: currentSection === 'result'
    },
    {
      id: 'cut-off',
      label: 'Cut Off',
      icon: BarChart2,
      page: 'cut-off-detail' as ActivePage,
      statusText: exam.cutOffData ? 'Available' : 'Notify Soon',
      isAvailable: Boolean(exam.cutOffData),
      active: currentSection === 'cut-off'
    },
    {
      id: 'mock-test',
      label: 'Mock Test',
      icon: Layers,
      page: 'mock-test' as ActivePage,
      statusText: exam.mockTestLink ? 'Start Test' : 'Available',
      isAvailable: true,
      active: false
    }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-2.5 sm:p-3 mb-6 shadow-xs overflow-x-auto">
      <div className="flex items-center justify-between min-w-[650px] gap-2">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const href =
            stage.id === 'mock-test' && exam.mockTestLink
              ? exam.mockTestLink
              : getPageUrl(stage.page, exam.slug, depth);

          return (
            <a
              key={stage.id}
              href={href}
              target={stage.id === 'mock-test' && exam.mockTestLink ? '_blank' : undefined}
              rel={stage.id === 'mock-test' && exam.mockTestLink ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (stage.id === 'mock-test' && exam.mockTestLink) {
                  return;
                }
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(stage.page, exam.slug);
                }
              }}
              className={`flex-1 flex flex-col items-center py-2 px-2.5 rounded-xl transition-all cursor-pointer text-center relative ${
                stage.active
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Icon className={`w-4 h-4 ${stage.active ? 'text-white' : 'text-blue-600'}`} />
                <span className="text-xs font-bold whitespace-nowrap">{stage.label}</span>
              </div>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${
                  stage.active
                    ? 'bg-white/20 text-white'
                    : stage.statusText === 'Released' || stage.statusText === 'Apply Open' || stage.statusText === 'Declared'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {stage.statusText}
              </span>

              {/* Progress Connector arrow */}
              {idx < stages.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-slate-300 text-xs pointer-events-none">
                  →
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};
