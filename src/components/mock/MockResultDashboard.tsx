import React from 'react';
import { MockResult, AttemptHistoryRecord } from '../../types/mockTest';
import {
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Zap,
  RotateCcw,
  TrendingUp,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface MockResultDashboardProps {
  result: MockResult;
  previousBest?: AttemptHistoryRecord;
  onReviewSolutions: () => void;
  onReattempt: () => void;
  onViewMistakes: () => void;
  onStartWeaknessRetest: () => void;
  onBackToLibrary: () => void;
}

export const MockResultDashboard: React.FC<MockResultDashboardProps> = ({
  result,
  previousBest,
  onReviewSolutions,
  onReattempt,
  onViewMistakes,
  onStartWeaknessRetest,
  onBackToLibrary
}) => {
  // Format times
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  // Preparation score calculation (RajDailyTools Performance Metric: 0-100)
  // Combines accuracy (50%), percentage score (30%), speed/time factor (20%)
  const rawPrep = result.accuracy * 0.5 + result.percentage * 0.3 + (result.avgTimePerQuestionSeconds < 60 ? 20 : 12);
  const prepScore = Math.min(100, Math.max(10, Math.round(rawPrep)));

  // Score comparison against previous best
  const scoreDiff = previousBest ? Number((result.score - previousBest.score).toFixed(1)) : null;

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Top Banner & Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              <Award className="w-3.5 h-3.5" />
              <span>Official Mock Test Result</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
              {result.mockTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Attempt #{result.attemptNumber} • Submitted on {new Date(result.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onReattempt}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-xs border border-white/20 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reattempt Mock</span>
            </button>
            <button
              type="button"
              onClick={onReviewSolutions}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-900/40 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Detailed Solutions</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary KPI Score Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Score Card */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Your Score
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
              {result.score.toFixed(1)}
            </span>
            <span className="text-sm font-semibold text-slate-400">/ {result.maxMarks}</span>
          </div>
          <div className="text-xs font-semibold text-blue-600">
            {result.percentage.toFixed(1)}% Marks Scored
          </div>
        </div>

        {/* Accuracy Card */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Accuracy Rate
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-display">
              {result.accuracy.toFixed(1)}%
            </span>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            {result.correct} correct out of {result.attempted} attempted
          </div>
        </div>

        {/* Time Used Card */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Time Taken
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-slate-800 font-display">
              {formatTime(result.totalTimeSeconds)}
            </span>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Avg {result.avgTimePerQuestionSeconds}s / question
          </div>
        </div>

        {/* Preparation Score Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-3xl border border-blue-100 shadow-xs space-y-2">
          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">
            Prep Score (RPM)
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-black text-blue-700 font-display">
              {prepScore}
            </span>
            <span className="text-xs font-bold text-blue-400">/ 100</span>
          </div>
          <div className="text-[11px] text-blue-600 font-medium leading-tight">
            RajDailyTools Performance Metric
          </div>
        </div>
      </div>

      {/* Beat Your Score / Progression Card */}
      {previousBest && scoreDiff !== null && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-900">Beat Your Score Comparison</h4>
              <p className="text-xs text-emerald-700">
                Previous Best: <strong>{previousBest.score.toFixed(1)}</strong> • Current Score: <strong>{result.score.toFixed(1)}</strong>
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span
              className={`px-3 py-1 rounded-full text-xs font-black ${
                scoreDiff >= 0
                  ? 'bg-emerald-600 text-white'
                  : 'bg-rose-100 text-rose-700 border border-rose-200'
              }`}
            >
              {scoreDiff >= 0 ? `+${scoreDiff} Marks Improvement` : `${scoreDiff} Marks`}
            </span>
          </div>
        </div>
      )}

      {/* Visual Chart Breakdown: Attempt Distribution & Subject Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Attempt Breakdown */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
            Questions Attempt Analysis
          </h3>

          <div className="space-y-3">
            {/* Visual Bar */}
            <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden flex">
              <div
                style={{ width: `${(result.correct / result.totalQuestions) * 100}%` }}
                className="bg-emerald-500 h-full"
                title={`Correct: ${result.correct}`}
              />
              <div
                style={{ width: `${(result.wrong / result.totalQuestions) * 100}%` }}
                className="bg-rose-500 h-full"
                title={`Wrong: ${result.wrong}`}
              />
              <div
                style={{ width: `${(result.unattempted / result.totalQuestions) * 100}%` }}
                className="bg-slate-300 h-full"
                title={`Unattempted: ${result.unattempted}`}
              />
            </div>

            {/* Legend Stats */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
              <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-100">
                <span className="text-emerald-700 font-bold block text-base">{result.correct}</span>
                <span className="text-slate-500 text-[11px]">Correct</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-rose-50 border border-rose-100">
                <span className="text-rose-700 font-bold block text-base">{result.wrong}</span>
                <span className="text-slate-500 text-[11px]">Wrong</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-700 font-bold block text-base">{result.unattempted}</span>
                <span className="text-slate-500 text-[11px]">Left</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onViewMistakes}
              disabled={result.wrong === 0}
              className="w-full py-2.5 px-4 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 border border-rose-200 disabled:opacity-40"
            >
              <XCircle className="w-4 h-4" />
              <span>Review {result.wrong} Wrong Answers in My Mistakes</span>
            </button>
          </div>
        </div>

        {/* Right: Subject-wise Performance */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
              Subject-wise Performance
            </h3>
            <span className="text-xs text-slate-400">Score & Accuracy</span>
          </div>

          <div className="space-y-3.5">
            {result.subjectScores.map((sub, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{sub.subject}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">
                      {sub.correct} / {sub.total} Qs ({sub.score.toFixed(1)} M)
                    </span>
                    <span className="font-bold text-emerald-600 font-mono">
                      {sub.accuracy.toFixed(0)}% Acc
                    </span>
                  </div>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${Math.min(100, Math.max(5, sub.accuracy))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weakness & Speed Analysis Action Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weakness Retest Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Weakness Analysis Engine</span>
            </div>
            <h4 className="text-base font-black text-slate-900 font-display">
              Identified Topics for Immediate Improvement
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Target low-accuracy questions from this test to turn your weak spots into high-scoring strengths.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartWeaknessRetest}
            className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>Start Weakness Retest</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Speed Analysis Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Speed & Time Optimization</span>
            </div>
            <h4 className="text-base font-black text-slate-900 font-display">
              Average {result.avgTimePerQuestionSeconds}s Per Question
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Recommended target time for SSC Tier-I is 36 seconds per question to ensure sufficient time for complex Quant and Reasoning sets.
            </p>
          </div>
          <button
            type="button"
            onClick={onReviewSolutions}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Review Question Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Return to Library */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onBackToLibrary}
          className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
        >
          ← Back to Mock Test Library
        </button>
      </div>
    </div>
  );
};
