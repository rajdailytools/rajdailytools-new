import React from 'react';
import { ActivePage } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { getPageUrl } from '../utils/urlHelper';

interface TickerProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const Ticker: React.FC<TickerProps> = ({ onNavigate, depth = 0 }) => {
  // Dynamically generate ticker updates from central exam records
  const tickerItems = EXAMS_DATABASE.slice(0, 10).map((exam) => {
    if (exam.status === 'RESULT_RELEASED') {
      return {
        text: `🏆 ${exam.examName} Result Declared – Download Merit List & Scorecard`,
        page: 'result-detail' as ActivePage,
        slug: exam.slug
      };
    }
    if (exam.status === 'ANSWER_KEY_RELEASED') {
      return {
        text: `✍️ ${exam.examName} Answer Key & Response Sheet Released – Calculate Score`,
        page: 'answer-key-detail' as ActivePage,
        slug: exam.slug
      };
    }
    if (exam.status === 'ADMIT_CARD_RELEASED') {
      return {
        text: `📋 ${exam.examName} Admit Card Out – Download Official Hall Ticket`,
        page: 'admit-card-detail' as ActivePage,
        slug: exam.slug
      };
    }
    return {
      text: `${exam.logoIcon || '📘'} ${exam.examName} – Apply Online for ${exam.totalVacancy}`,
      page: 'job-detail' as ActivePage,
      slug: exam.slug
    };
  });

  return (
    <div className="bg-blue-600 text-white py-2.5 overflow-hidden shadow-inner border-y border-blue-700/50">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <span className="hidden sm:inline-flex items-center gap-1.5 bg-blue-800 text-blue-100 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shrink-0 mr-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Live Updates
        </span>

        <div className="overflow-hidden relative w-full">
          <div className="animate-ticker flex items-center space-x-8">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <a
                key={idx}
                href={getPageUrl(item.page, item.slug, depth)}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate(item.page, item.slug);
                  }
                }}
                className="text-xs md:text-[13px] font-semibold text-blue-50 hover:text-white hover:underline transition-colors shrink-0 cursor-pointer flex items-center gap-2"
              >
                <span>{item.text}</span>
                <span className="text-blue-300 font-normal">•</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
