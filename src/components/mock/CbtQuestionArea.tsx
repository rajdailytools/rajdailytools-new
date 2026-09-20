import React from 'react';
import { MockQuestion } from '../../types/mockTest';
import { Bookmark, ChevronLeft, ChevronRight, RotateCcw, Check, Sparkles, LayoutGrid } from 'lucide-react';

interface CbtQuestionAreaProps {
  question: MockQuestion;
  currentIndex: number;
  totalQuestions: number;
  selectedOption?: 'A' | 'B' | 'C' | 'D';
  isMarkedForReview: boolean;
  language: 'English' | 'Hindi';
  onSelectOption: (optionId: 'A' | 'B' | 'C' | 'D') => void;
  onClearResponse: () => void;
  onMarkForReview: () => void;
  onSaveAndNext: () => void;
  onPrevious: () => void;
  onOpenPaletteMobile: () => void;
}

export const CbtQuestionArea: React.FC<CbtQuestionAreaProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isMarkedForReview,
  language,
  onSelectOption,
  onClearResponse,
  onMarkForReview,
  onSaveAndNext,
  onPrevious,
  onOpenPaletteMobile
}) => {
  const displayQuestion =
    language === 'Hindi' && question.questionHindi ? question.questionHindi : question.question;

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Hard':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <div className="flex-1 flex flex-col space-y-4">
      {/* Mobile-Only Top Action to Open Palette */}
      <div className="lg:hidden flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="text-xs font-bold text-slate-800">
          Question <span className="text-blue-600 font-black">{currentIndex + 1}</span> of {totalQuestions}
        </div>
        <button
          type="button"
          onClick={onOpenPaletteMobile}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Question Palette</span>
        </button>
      </div>

      {/* Main Question Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-xs space-y-6">
        {/* Meta Bar: Subject, Topic, Difficulty, Marks */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
              {question.subject}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
              {question.topic}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(question.difficulty)}`}>
              {question.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
              +{question.marks}.00
            </span>
            <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
              -{question.negativeMarks}
            </span>
          </div>
        </div>

        {/* Question Text */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Question {currentIndex + 1}
          </div>
          <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed whitespace-pre-line select-text">
            {displayQuestion}
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Select Your Option:
          </div>
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const optionText = language === 'Hindi' && option.textHindi ? option.textHindi : option.text;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onSelectOption(option.id)}
                  className={`group relative flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-500'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? <Check className="w-4 h-4" /> : option.id}
                  </span>
                  <div className="flex-1 text-sm sm:text-base text-slate-800 pt-0.5 leading-snug">
                    {optionText}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Buttons Row */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        {/* Left Side: Previous & Clear Response */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400 bg-slate-50'
                : 'border-slate-300 text-slate-700 bg-white hover:bg-slate-100 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={onClearResponse}
            disabled={!selectedOption}
            className={`flex items-center gap-1 px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
              !selectedOption
                ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                : 'border-rose-200 text-rose-600 hover:bg-rose-50 active:scale-95'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>

        {/* Right Side: Mark for Review & Save and Next */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={onMarkForReview}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all active:scale-95 ${
              isMarkedForReview
                ? 'bg-purple-600 text-white border-purple-700 shadow-xs'
                : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>{isMarkedForReview ? 'Marked' : 'Mark for Review'}</span>
          </button>

          <button
            type="button"
            onClick={onSaveAndNext}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <span>{currentIndex === totalQuestions - 1 ? 'Save & Review' : 'Save & Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
