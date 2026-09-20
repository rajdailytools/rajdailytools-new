import React from 'react';
import { UserResponse } from '../../types/mockTest';
import { AlertTriangle, CheckCircle2, Bookmark, HelpCircle } from 'lucide-react';

interface MockSubmitConfirmModalProps {
  totalQuestions: number;
  userResponses: Record<string, UserResponse>;
  questionIds: string[];
  remainingSeconds: number;
  onConfirmSubmit: () => void;
  onResumeTest: () => void;
}

export const MockSubmitConfirmModal: React.FC<MockSubmitConfirmModalProps> = ({
  totalQuestions,
  userResponses,
  questionIds,
  remainingSeconds,
  onConfirmSubmit,
  onResumeTest
}) => {
  let answered = 0;
  let notAnswered = 0;
  let marked = 0;
  let notVisited = 0;

  questionIds.forEach((id) => {
    const status = userResponses[id]?.status || 'NOT_VISITED';
    if (status === 'ANSWERED') answered++;
    else if (status === 'NOT_ANSWERED') notAnswered++;
    else if (status === 'MARKED_FOR_REVIEW') marked++;
    else if (status === 'ANSWERED_AND_MARKED') {
      answered++;
      marked++;
    } else notVisited++;
  });

  const minutesLeft = Math.floor(remainingSeconds / 60);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div>
          <h3 className="text-xl font-black text-slate-900 font-display">
            Submit Mock Test?
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            You still have <strong className="text-blue-600 font-bold">{minutesLeft} minutes</strong> remaining on the clock.
          </p>
        </div>

        {/* Summary Table */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-left space-y-2.5">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Test Attempt Summary:
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100">
              <span className="text-slate-500">Total Questions:</span>
              <strong className="text-slate-900 font-mono font-bold">{totalQuestions}</strong>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
              <span className="text-emerald-700 font-medium">Answered:</span>
              <strong className="text-emerald-700 font-mono font-bold">{answered}</strong>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-50 border border-rose-100">
              <span className="text-rose-700 font-medium">Unattempted:</span>
              <strong className="text-rose-700 font-mono font-bold">{totalQuestions - answered}</strong>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-50 border border-purple-100">
              <span className="text-purple-700 font-medium">Marked for Review:</span>
              <strong className="text-purple-700 font-mono font-bold">{marked}</strong>
            </div>
          </div>
        </div>

        {totalQuestions - answered > 0 && (
          <p className="text-[11px] text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200 leading-snug">
            Notice: {totalQuestions - answered} questions are unattempted. Once submitted, you cannot change your answers.
          </p>
        )}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={onResumeTest}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs sm:text-sm transition-colors"
          >
            Resume Test
          </button>
          <button
            type="button"
            onClick={onConfirmSubmit}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
          >
            Confirm & Submit
          </button>
        </div>
      </div>
    </div>
  );
};
