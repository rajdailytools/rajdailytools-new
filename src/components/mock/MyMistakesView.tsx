import React from 'react';
import { StoredMistake, MockQuestion } from '../../types/mockTest';
import { XCircle, RotateCcw, Sparkles, BookOpen, AlertTriangle } from 'lucide-react';

interface MyMistakesViewProps {
  examId: string;
  examName: string;
  mistakes: StoredMistake[];
  onRetryMistakes: (questions: MockQuestion[]) => void;
  onClearMistakes: () => void;
}

export const MyMistakesView: React.FC<MyMistakesViewProps> = ({
  examId,
  examName,
  mistakes,
  onRetryMistakes,
  onClearMistakes
}) => {
  const filteredMistakes = mistakes.filter((m) => m.examId === examId);

  if (filteredMistakes.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center space-y-4 max-w-2xl mx-auto shadow-xs my-6">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-black text-slate-900 font-display">
          Zero Recorded Mistakes in {examName}!
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          Great work! Questions you answer incorrectly during mock tests are automatically saved here for targeted revision and retesting.
        </p>
      </div>
    );
  }

  const mistakeQuestions = filteredMistakes.map((m) => m.question);

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-rose-50/70 border border-rose-200 rounded-3xl shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
            <XCircle className="w-4 h-4" />
            <span>Mistakes Notebook • {examName}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            {filteredMistakes.length} Questions Saved for Revision
          </h2>
          <p className="text-xs text-slate-600">
            Reattempting questions you got wrong is proven to boost exam scores by up to 28%.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onClearMistakes}
            className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors"
          >
            Clear List
          </button>
          <button
            type="button"
            onClick={() => onRetryMistakes(mistakeQuestions)}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 active:scale-95 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry All Mistakes</span>
          </button>
        </div>
      </div>

      {/* Mistake Question Cards */}
      <div className="space-y-4">
        {filteredMistakes.map((item, idx) => {
          const q = item.question;
          return (
            <div
              key={item.id || idx}
              className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-400">#{idx + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">
                    {q.subject}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {q.topic}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Attempted on {item.attemptDate} (Mock {item.mockNumber})
                </span>
              </div>

              <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed select-text whitespace-pre-line">
                {q.question}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-800 flex items-center justify-between">
                  <span>Your Answer:</span>
                  <strong className="font-bold">{item.userAnswer || 'Left Blank'}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center justify-between">
                  <span>Correct Answer:</span>
                  <strong className="font-bold">Option {q.correctAnswer}</strong>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-xs text-slate-700 leading-relaxed">
                <strong className="text-blue-700 block mb-1">Explanation:</strong>
                {q.explanation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
