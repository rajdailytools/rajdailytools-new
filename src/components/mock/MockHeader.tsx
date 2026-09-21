import React from 'react';
import { Clock, Maximize2, Minimize2, Languages, Shield, AlertTriangle } from 'lucide-react';

interface MockHeaderProps {
  examName: string;
  mockTitle: string;
  mockNumber?: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  remainingSeconds: number;
  language: 'English' | 'Hindi';
  onLanguageChange: (lang: 'English' | 'Hindi') => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onSubmitClick: () => void;
}

export const MockHeader: React.FC<MockHeaderProps> = ({
  examName,
  mockTitle,
  mockNumber,
  currentQuestionIndex,
  totalQuestions,
  remainingSeconds,
  language,
  onLanguageChange,
  isFullscreen,
  onToggleFullscreen,
  onSubmitClick
}) => {
  // Format time HH:MM:SS
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  const isTimeCritical = remainingSeconds <= 300 && remainingSeconds > 0; // Under 5 mins

  const displayMockNum = mockNumber
    ? `Mock ${mockNumber < 10 ? `0${mockNumber}` : mockNumber}`
    : mockTitle;

  return (
    <header id="cbt-mock-header" className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Brand & Exam Info */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xs">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black font-display tracking-tight text-white truncate">
              <span className="text-blue-400">RajDailyTools</span>
              <span className="text-slate-500">|</span>
              <span className="truncate">{examName}</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium truncate flex items-center gap-2">
              <span className="font-bold text-amber-400">{displayMockNum}</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-200 font-semibold">
                Question {currentQuestionIndex + 1} / {totalQuestions}
              </span>
            </div>
          </div>
        </div>

        {/* Right Action Bar: Timer, Controls, Submit */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {/* Language Selector */}
          <button
            type="button"
            id="btn-switch-cbt-language"
            onClick={() => onLanguageChange(language === 'English' ? 'Hindi' : 'English')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            title="Switch Question Language (हिन्दी / English)"
            aria-label="Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-blue-400" />
            <span>{language === 'English' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Fullscreen / Focus Mode */}
          <button
            type="button"
            id="btn-cbt-fullscreen"
            onClick={onToggleFullscreen}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            title="Focus Mode / Fullscreen"
            aria-label="Toggle Fullscreen Focus Mode"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px]">Exit Fullscreen</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px]">Focus Mode</span>
              </>
            )}
          </button>

          {/* Countdown Timer */}
          <div
            id="cbt-timer-display"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-all shadow-inner ${
              isTimeCritical
                ? 'bg-rose-950/90 text-rose-300 border-rose-700 animate-pulse'
                : 'bg-slate-800 text-emerald-300 border-slate-700'
            }`}
          >
            {isTimeCritical ? (
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            ) : (
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            )}
            <span>Time Left {formattedTime}</span>
          </div>

          {/* Submit Test Button */}
          <button
            type="button"
            id="btn-submit-cbt-test"
            onClick={onSubmitClick}
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/40 transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <span>Submit Test</span>
          </button>
        </div>
      </div>
    </header>
  );
};
