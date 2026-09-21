import React, { useState } from 'react';
import { MockQuestion, UserResponse } from '../../types/mockTest';
import {
  Check,
  X,
  Bookmark,
  ChevronLeft,
  Sparkles,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  Flag,
  BookOpen,
  CheckCheck
} from 'lucide-react';

interface MockSolutionsReviewProps {
  questions: MockQuestion[];
  userResponses: Record<string, UserResponse>;
  mockTitle: string;
  onBackToResult: () => void;
  onPracticeTopic?: (topic: string) => void;
  onSaveToNotebook?: (question: MockQuestion) => void;
}

export const MockSolutionsReview: React.FC<MockSolutionsReviewProps> = ({
  questions,
  userResponses,
  mockTitle,
  onBackToResult,
  onPracticeTopic,
  onSaveToNotebook
}) => {
  const [filter, setFilter] = useState<'ALL' | 'CORRECT' | 'INCORRECT' | 'UNATTEMPTED'>('ALL');
  const [selectedLang, setSelectedLang] = useState<'English' | 'Hindi'>('English');
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});
  const [reportedIds, setReportedIds] = useState<Record<string, boolean>>({});
  const [savedToNotebookIds, setSavedToNotebookIds] = useState<Record<string, boolean>>({});

  const toggleBookmark = (qId: string) => {
    setBookmarkedIds((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleReport = (qId: string) => {
    setReportedIds((prev) => ({ ...prev, [qId]: true }));
  };

  const handleAddToNotebook = (q: MockQuestion) => {
    setSavedToNotebookIds((prev) => ({ ...prev, [q.id]: true }));
    onSaveToNotebook?.(q);
  };

  const filteredQuestions = questions.filter((q) => {
    const res = userResponses[q.id];
    const isAttempted = res && res.selectedOption;
    const isCorrect = isAttempted && res.selectedOption === q.correctAnswer;

    if (filter === 'CORRECT') return isCorrect;
    if (filter === 'INCORRECT') return isAttempted && !isCorrect;
    if (filter === 'UNATTEMPTED') return !isAttempted;
    return true;
  });

  return (
    <div id="mock-solutions-review" className="max-w-4xl mx-auto space-y-6 py-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-white border border-slate-200 rounded-3xl shadow-xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToResult}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            title="Back to Result"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
              Detailed Answer Key & Step-by-Step Solutions
            </span>
            <h2 className="text-lg font-black text-slate-900 font-display">
              {mockTitle}
            </h2>
          </div>
        </div>

        {/* Language switch */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Language:</span>
          <button
            type="button"
            onClick={() => setSelectedLang(selectedLang === 'English' ? 'Hindi' : 'English')}
            className="px-3.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
          >
            {selectedLang === 'English' ? 'हिन्दी में देखें' : 'View in English'}
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter('ALL')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            filter === 'ALL'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          All Questions ({questions.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter('CORRECT')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            filter === 'CORRECT'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50'
          }`}
        >
          ✓ Correct
        </button>
        <button
          type="button"
          onClick={() => setFilter('INCORRECT')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            filter === 'INCORRECT'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-white border border-rose-200 text-rose-700 hover:bg-rose-50'
          }`}
        >
          ✕ Incorrect
        </button>
        <button
          type="button"
          onClick={() => setFilter('UNATTEMPTED')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            filter === 'UNATTEMPTED'
              ? 'bg-slate-600 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          Unattempted
        </button>
      </div>

      {/* Question Solutions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const res = userResponses[q.id];
          const userAns = res?.selectedOption;
          const isCorrect = userAns === q.correctAnswer;
          const isUnattempted = !userAns;
          const timeSpent = res?.timeSpentSeconds || 0;

          const questionText =
            selectedLang === 'Hindi' && q.questionHindi ? q.questionHindi : q.question;
          const explanationText =
            selectedLang === 'Hindi' && q.explanationHindi ? q.explanationHindi : q.explanation;

          const isBookmarked = !!bookmarkedIds[q.id];
          const isReported = !!reportedIds[q.id];
          const isSavedToNotebook = !!savedToNotebookIds[q.id];

          return (
            <div
              key={q.id}
              className={`bg-white rounded-3xl p-6 border shadow-xs space-y-4 ${
                isCorrect
                  ? 'border-emerald-200'
                  : isUnattempted
                  ? 'border-slate-200'
                  : 'border-rose-200'
              }`}
            >
              {/* Question Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-xs text-slate-400">Q{q.number}.</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                    {q.subject}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">
                    {q.topic}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      q.difficulty === 'Easy'
                        ? 'bg-emerald-50 text-emerald-700'
                        : q.difficulty === 'Medium'
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-purple-50 text-purple-700'
                    }`}
                  >
                    {q.difficulty}
                  </span>
                  {timeSpent > 0 && (
                    <span className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{timeSpent}s spent</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {isCorrect && (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Correct (+{q.marks}.00)</span>
                    </span>
                  )}
                  {!isCorrect && !isUnattempted && (
                    <span className="flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Incorrect (-{q.negativeMarks})</span>
                    </span>
                  )}
                  {isUnattempted && (
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      Not Attempted (0.00)
                    </span>
                  )}
                </div>
              </div>

              {/* Question Statement */}
              <div className="text-base font-semibold text-slate-900 leading-relaxed select-text whitespace-pre-line">
                {questionText}
              </div>

              {/* Options Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt) => {
                  const isUserChosen = userAns === opt.id;
                  const isRightAnswer = q.correctAnswer === opt.id;
                  const optText =
                    selectedLang === 'Hindi' && opt.textHindi ? opt.textHindi : opt.text;

                  let borderStyle = 'border-slate-200 bg-slate-50/50';
                  let badgeStyle = 'bg-slate-200 text-slate-700';

                  if (isRightAnswer) {
                    borderStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-900 font-semibold';
                    badgeStyle = 'bg-emerald-600 text-white';
                  } else if (isUserChosen && !isCorrect) {
                    borderStyle = 'border-rose-400 bg-rose-50/70 text-rose-900 line-through';
                    badgeStyle = 'bg-rose-500 text-white';
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`p-3 rounded-2xl border text-xs flex items-center justify-between gap-2 ${borderStyle}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-[11px] shrink-0 ${badgeStyle}`}>
                          {opt.id}
                        </span>
                        <span>{optText}</span>
                      </div>
                      {isRightAnswer && (
                        <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider">
                          Correct
                        </span>
                      )}
                      {isUserChosen && !isRightAnswer && (
                        <span className="text-[10px] font-black uppercase text-rose-600 tracking-wider">
                          Your Answer
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Detailed Explanation Box */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-900 font-bold">
                  <span className="flex items-center gap-1.5 text-blue-700">
                    <Sparkles className="w-4 h-4" />
                    <span>Detailed Step-by-Step Explanation:</span>
                  </span>
                  {onPracticeTopic && (
                    <button
                      type="button"
                      onClick={() => onPracticeTopic(q.topic)}
                      className="text-[11px] font-bold text-blue-600 hover:text-blue-800 underline cursor-pointer"
                    >
                      Practice Topic: {q.topic} →
                    </button>
                  )}
                </div>
                <div className="text-slate-700 leading-relaxed whitespace-pre-line select-text">
                  {explanationText}
                </div>
              </div>

              {/* Option to Bookmark, Report, Add to Revision Notebook */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleBookmark(q.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-colors cursor-pointer ${
                      isBookmarked
                        ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                    <span>{isBookmarked ? 'Bookmarked' : 'Bookmark Question'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAddToNotebook(q)}
                    disabled={isSavedToNotebook}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-colors cursor-pointer ${
                      isSavedToNotebook
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {isSavedToNotebook ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Saved to Notebook</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Add to Revision Notebook</span>
                      </>
                    )}
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => handleReport(q.id)}
                    disabled={isReported}
                    className={`inline-flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer text-[11px] ${
                      isReported ? 'text-emerald-600 font-bold' : ''
                    }`}
                  >
                    <Flag className="w-3 h-3" />
                    <span>{isReported ? 'Reported ✓' : 'Report Question'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
