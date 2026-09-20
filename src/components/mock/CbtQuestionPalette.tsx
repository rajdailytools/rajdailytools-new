import React from 'react';
import { QuestionStatus, UserResponse } from '../../types/mockTest';
import { Check, Bookmark, HelpCircle } from 'lucide-react';

interface CbtQuestionPaletteProps {
  totalQuestions: number;
  currentIndex: number;
  userResponses: Record<string, UserResponse>;
  questionIds: string[];
  onSelectQuestion: (index: number) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const CbtQuestionPalette: React.FC<CbtQuestionPaletteProps> = ({
  totalQuestions,
  currentIndex,
  userResponses,
  questionIds,
  onSelectQuestion,
  isOpenMobile = false,
  onCloseMobile
}) => {
  // Count live stats
  let answeredCount = 0;
  let notAnsweredCount = 0;
  let markedCount = 0;
  let answeredMarkedCount = 0;
  let notVisitedCount = 0;

  questionIds.forEach((id) => {
    const res = userResponses[id];
    const status = res?.status || 'NOT_VISITED';
    if (status === 'ANSWERED') answeredCount++;
    else if (status === 'NOT_ANSWERED') notAnsweredCount++;
    else if (status === 'MARKED_FOR_REVIEW') markedCount++;
    else if (status === 'ANSWERED_AND_MARKED') answeredMarkedCount++;
    else notVisitedCount++;
  });

  const getStatusBadge = (status: QuestionStatus, isCurrent: boolean) => {
    let bg = 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200';
    let icon = null;

    if (status === 'ANSWERED') {
      bg = 'bg-emerald-600 text-white border-emerald-700 shadow-xs';
    } else if (status === 'NOT_ANSWERED') {
      bg = 'bg-rose-500 text-white border-rose-600';
    } else if (status === 'MARKED_FOR_REVIEW') {
      bg = 'bg-purple-600 text-white border-purple-700';
    } else if (status === 'ANSWERED_AND_MARKED') {
      bg = 'bg-purple-700 text-white border-purple-800 ring-2 ring-emerald-400';
      icon = <Check className="w-2 h-2 text-emerald-300 absolute top-0.5 right-0.5" />;
    } else if (status === 'NOT_VISITED') {
      bg = 'bg-slate-100 text-slate-600 border-slate-300';
    }

    const currentRing = isCurrent ? 'ring-2 ring-blue-600 ring-offset-2 scale-105 font-black z-10' : '';

    return { classes: `${bg} ${currentRing}`, icon };
  };

  const paletteContent = (
    <div className="flex flex-col h-full space-y-4">
      {/* Live Status Counters */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-xs border border-slate-800">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
          <span>Question Status Overview</span>
          <span className="text-blue-400 font-mono font-black">{totalQuestions} Total</span>
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              Answered:
            </span>
            <strong className="font-mono text-emerald-400 font-bold">{answeredCount}</strong>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              Not Answered:
            </span>
            <strong className="font-mono text-rose-400 font-bold">{notAnsweredCount}</strong>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
              Marked:
            </span>
            <strong className="font-mono text-purple-300 font-bold">{markedCount + answeredMarkedCount}</strong>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block" />
              Not Visited:
            </span>
            <strong className="font-mono text-slate-400 font-bold">{notVisitedCount}</strong>
          </div>
        </div>
      </div>

      {/* CBT Legend */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-[11px] text-slate-600 space-y-1.5">
        <div className="font-bold text-slate-800 text-xs mb-1">Color Palette Guide:</div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-emerald-600 text-white inline-flex items-center justify-center text-[9px] font-bold">✓</span>
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-rose-500 text-white inline-flex items-center justify-center text-[9px] font-bold">✕</span>
          <span>Not Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-purple-600 text-white inline-flex items-center justify-center text-[9px] font-bold">★</span>
          <span>Marked for Review</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-purple-700 ring-1 ring-emerald-400 text-white inline-flex items-center justify-center text-[9px] font-bold">★✓</span>
          <span>Answered & Marked for Review</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-md bg-slate-200 border border-slate-300 inline-block" />
          <span>Not Visited</span>
        </div>
      </div>

      {/* Question Number Matrix */}
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-xs flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Choose Question:
          </h4>
          <span className="text-[11px] text-slate-500">Tap to Jump</span>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-2 overflow-y-auto max-h-[340px] pr-1 py-1">
          {questionIds.map((id, idx) => {
            const status = userResponses[id]?.status || 'NOT_VISITED';
            const isCurrent = idx === currentIndex;
            const { classes, icon } = getStatusBadge(status, isCurrent);

            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  onSelectQuestion(idx);
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`relative w-full aspect-square flex items-center justify-center rounded-xl border text-xs font-bold transition-all cursor-pointer ${classes}`}
                title={`Question ${idx + 1} (${status.replace(/_/g, ' ')})`}
                aria-label={`Jump to Question ${idx + 1}`}
              >
                <span>{idx + 1}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Side Panel */}
      <div className="hidden lg:block w-80 shrink-0 sticky top-20">
        {paletteContent}
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative ml-auto w-80 max-w-[85vw] h-full bg-white p-4 shadow-2xl overflow-y-auto z-10 flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200">
              <span className="font-bold text-slate-900 font-display">Question Palette</span>
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold"
              >
                Close ✕
              </button>
            </div>
            {paletteContent}
          </div>
        </div>
      )}
    </>
  );
};
