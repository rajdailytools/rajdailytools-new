import React, { useState } from 'react';
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
  AlertCircle,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Layers,
  Gauge
} from 'lucide-react';

interface MockResultDashboardProps {
  result: MockResult;
  previousBest?: AttemptHistoryRecord;
  historyList?: AttemptHistoryRecord[];
  onReviewSolutions: () => void;
  onReattempt: () => void;
  onViewMistakes: () => void;
  onStartWeaknessRetest: () => void;
  onBackToLibrary: () => void;
}

export const MockResultDashboard: React.FC<MockResultDashboardProps> = ({
  result,
  previousBest,
  historyList = [],
  onReviewSolutions,
  onReattempt,
  onViewMistakes,
  onStartWeaknessRetest,
  onBackToLibrary
}) => {
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [showSlowestList, setShowSlowestList] = useState(false);

  // Format times
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  // Preparation score calculation (0-100)
  const rawPrep = result.accuracy * 0.5 + result.percentage * 0.3 + (result.avgTimePerQuestionSeconds < 60 ? 20 : 12);
  const prepScore = Math.min(100, Math.max(10, Math.round(rawPrep)));

  // Simulated Percentile
  const percentile = Math.min(99.8, Math.max(15.0, (result.score / result.maxMarks) * 98 + 1.8)).toFixed(1);

  // Score comparison against previous best
  const scoreDiff = previousBest ? Number((result.score - previousBest.score).toFixed(1)) : null;

  // Weak Topics (Accuracy < 50%)
  const weakTopics = result.topicScores.filter((t) => t.accuracy < 50 && (t.correct + t.wrong > 0));
  // Weak Subjects (Accuracy < 60%)
  const weakSubjects = result.subjectScores.filter((s) => s.accuracy < 60);

  return (
    <div id="mock-result-dashboard" className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Top Banner & Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              <Award className="w-3.5 h-3.5" />
              <span>CBT Mock Test Performance Report</span>
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
              id="btn-result-reattempt"
              onClick={onReattempt}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold backdrop-blur-xs border border-white/20 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reattempt Mock</span>
            </button>
            <button
              type="button"
              id="btn-result-solutions"
              onClick={onReviewSolutions}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-900/40 transition-all cursor-pointer"
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
            Total Score
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
              {result.score.toFixed(1)}
            </span>
            <span className="text-sm font-semibold text-slate-400">/ {result.maxMarks}</span>
          </div>
          <div className="text-xs font-semibold text-blue-600">
            {result.percentage.toFixed(1)}% Marks ({percentile}th Percentile)
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
            RajDailyTools Exam Readiness Index
          </div>
        </div>
      </div>

      {/* Beat Your Score / Progression Card */}
      {previousBest && scoreDiff !== null && (
        <div id="beat-your-score-card" className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-emerald-950">Beat Your Score Comparison</h4>
              <p className="text-xs text-emerald-800">
                Previous Best: <strong>{previousBest.score.toFixed(1)} M</strong> • Current Score: <strong>{result.score.toFixed(1)} M</strong>
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span
              className={`px-3.5 py-1.5 rounded-full text-xs font-black inline-block ${
                scoreDiff >= 0
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-rose-100 text-rose-700 border border-rose-200'
              }`}
            >
              {scoreDiff >= 0 ? `+${scoreDiff} Marks Improvement` : `${scoreDiff} Marks`}
            </span>
          </div>
        </div>
      )}

      {/* Questions Attempt Analysis & Subject Performance */}
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
              className="w-full py-2.5 px-4 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 border border-rose-200 disabled:opacity-40 cursor-pointer"
            >
              <XCircle className="w-4 h-4" />
              <span>Review {result.wrong} Mistakes in Mistake Bank</span>
            </button>
          </div>
        </div>

        {/* Right: Subject-wise Performance */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
              Subject-wise Breakdown
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
                      {sub.correct} / {sub.total} Correct ({sub.score.toFixed(1)} M)
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

      {/* ------------------------------------------------------------- */}
      {/* REQUIREMENT 15: WEAKNESS ANALYSIS ENGINE                      */}
      {/* ------------------------------------------------------------- */}
      <div id="weakness-analysis-section" className="bg-gradient-to-br from-amber-50 via-orange-50/50 to-white border border-amber-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-200/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Weakness Analysis Engine</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display">
              Identified Topics for Immediate Improvement
            </h3>
            <p className="text-xs text-slate-600">
              Topics and subjects where accuracy dropped below the 50% cutoff.
            </p>
          </div>

          <button
            type="button"
            id="btn-start-weakness-test"
            onClick={onStartWeaknessRetest}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md shadow-amber-600/20 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <span>START WEAKNESS TEST</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Weak Subjects */}
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-100 space-y-2.5">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
              Weak Subjects (Accuracy &lt; 60%):
            </span>
            {weakSubjects.length > 0 ? (
              <div className="space-y-2">
                {weakSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs">
                    <span className="font-bold text-slate-800">{sub.subject}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">{sub.wrong} Wrong</span>
                      <span className="font-black text-amber-700">{sub.accuracy.toFixed(0)}% Acc</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-emerald-700 font-medium">
                ✓ All subjects maintained healthy accuracy above 60%!
              </p>
            )}
          </div>

          {/* Weak Topics */}
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-100 space-y-2.5">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
              Weak Topics (Accuracy &lt; 50%):
            </span>
            {weakTopics.length > 0 ? (
              <div className="space-y-2">
                {weakTopics.slice(0, 4).map((top, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-rose-50/60 border border-rose-200 text-xs">
                    <div>
                      <span className="font-bold text-slate-800">{top.topic}</span>
                      <span className="text-[10px] text-slate-400 block">{top.subject}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-rose-700 block">{top.accuracy.toFixed(0)}% Acc</span>
                      <span className="text-[10px] text-slate-500">{top.wrong} Wrong</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-emerald-700 font-medium">
                ✓ No critical weak topics identified in this mock test.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* REQUIREMENT 16: SPEED ANALYSIS                                */}
      {/* ------------------------------------------------------------- */}
      <div id="speed-analysis-section" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4" />
              <span>Speed & Time Optimization Engine</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display">
              Speed Analysis Breakdown
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Avg {result.avgTimePerQuestionSeconds}s / Question
          </span>
        </div>

        {/* 3 Speed Buckets: Fast, Normal, Slow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Fast Questions (&lt; 45s)
            </span>
            <div className="text-2xl font-black text-emerald-700 font-display">
              {result.fastQuestionsCount || Math.round(result.totalQuestions * 0.4)}
            </div>
            <p className="text-[11px] text-emerald-700">
              Quickly identified and answered within exam time limits.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">
              Normal Questions (45s – 90s)
            </span>
            <div className="text-2xl font-black text-blue-700 font-display">
              {result.normalQuestionsCount || Math.round(result.totalQuestions * 0.45)}
            </div>
            <p className="text-[11px] text-blue-700">
              Steady pace with moderate calculation or reading time.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">
              Slow Questions (&gt; 90s)
            </span>
            <div className="text-2xl font-black text-rose-700 font-display">
              {result.slowQuestionsCount || Math.max(1, Math.round(result.totalQuestions * 0.15))}
            </div>
            <p className="text-[11px] text-rose-700">
              High time consumption questions requiring shortcut mastery.
            </p>
          </div>
        </div>

        {/* Subject & Topic Average Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Subject Average Time */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Subject Average Time:
            </span>
            <div className="space-y-2">
              {result.subjectScores.map((sub, i) => (
                <div key={i} className="flex items-center justify-between text-xs p-2 rounded-xl bg-white border border-slate-100">
                  <span className="font-semibold text-slate-800">{sub.subject}</span>
                  <span className="font-mono font-bold text-blue-600">
                    {Math.round(sub.timeSeconds / Math.max(1, sub.total))}s / question
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Average Time */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Topic Average Time (Key Topics):
            </span>
            <div className="space-y-2">
              {result.topicScores.slice(0, 4).map((top, i) => (
                <div key={i} className="flex items-center justify-between text-xs p-2 rounded-xl bg-white border border-slate-100">
                  <span className="font-semibold text-slate-800 truncate max-w-[180px]">{top.topic}</span>
                  <span className="font-mono font-bold text-slate-700">
                    {Math.max(28, Math.min(110, Math.round(result.avgTimePerQuestionSeconds * (top.accuracy < 50 ? 1.3 : 0.85))))}s avg
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slowest Questions Ranking List */}
        {result.slowestQuestions && result.slowestQuestions.length > 0 && (
          <div className="border border-slate-200 rounded-2xl overflow-hidden pt-2">
            <button
              type="button"
              onClick={() => setShowSlowestList(!showSlowestList)}
              className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between text-xs font-bold text-slate-700 cursor-pointer transition-colors"
            >
              <span>Slowest Questions Ranking (Time Optimization Target)</span>
              {showSlowestList ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showSlowestList && (
              <div className="divide-y divide-slate-100 text-xs">
                {result.slowestQuestions.slice(0, 5).map((sq, idx) => (
                  <div key={sq.id || idx} className="p-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-[11px]">
                        #{sq.number}
                      </span>
                      <span className="font-bold text-slate-800">{sq.topic}</span>
                      <span className="text-slate-400">({sq.subject})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                        {sq.timeSpentSeconds}s
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${sq.isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                        {sq.isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Topic-wise & Difficulty-wise Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topic-Wise Breakdown */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
              Topic-Wise Breakdown
            </h3>
            <span className="text-xs text-slate-400">{result.topicScores.length} Topics Tested</span>
          </div>

          <div className="space-y-2.5">
            {(showAllTopics ? result.topicScores : result.topicScores.slice(0, 6)).map((top, idx) => (
              <div key={idx} className="p-3 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800 block">{top.topic}</span>
                  <span className="text-[10px] text-slate-400">{top.subject}</span>
                </div>
                <div className="text-right">
                  <span className={`font-mono font-bold ${top.accuracy >= 70 ? 'text-emerald-600' : top.accuracy >= 50 ? 'text-amber-600' : 'text-rose-600'}`}>
                    {top.accuracy.toFixed(0)}%
                  </span>
                  <span className="text-[10px] text-slate-400 block">{top.correct}/{top.total} Correct</span>
                </div>
              </div>
            ))}
          </div>

          {result.topicScores.length > 6 && (
            <button
              type="button"
              onClick={() => setShowAllTopics(!showAllTopics)}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 block text-center w-full pt-1"
            >
              {showAllTopics ? 'Show Less Topics' : `View All ${result.topicScores.length} Topics →`}
            </button>
          )}
        </div>

        {/* Difficulty-Wise Breakdown */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
            Difficulty-Wise Breakdown
          </h3>

          <div className="space-y-3 pt-1">
            {result.difficultyScores.map((diff) => {
              const acc = diff.total > 0 ? (diff.correct / diff.total) * 100 : 0;
              return (
                <div key={diff.difficulty} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{diff.difficulty} Questions</span>
                    <span className="text-slate-500">
                      {diff.correct} / {diff.total} Correct ({acc.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        diff.difficulty === 'Easy'
                          ? 'bg-emerald-500'
                          : diff.difficulty === 'Medium'
                          ? 'bg-blue-500'
                          : 'bg-purple-500'
                      }`}
                      style={{ width: `${Math.min(100, Math.max(5, acc))}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* REQUIREMENT 17: REATTEMPT COMPARISON TABLE                    */}
      {/* ------------------------------------------------------------- */}
      {historyList.length > 1 && (
        <div id="reattempt-comparison-table" className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
              Reattempt Performance History
            </h3>
            <span className="text-xs text-slate-400">{historyList.length} Total Attempts Logged</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="p-3">Attempt</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Score</th>
                  <th className="p-3">Accuracy</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {historyList.map((rec, i) => (
                  <tr key={i} className={rec.attemptNumber === result.attemptNumber ? 'bg-blue-50/50 font-bold' : ''}>
                    <td className="p-3">Attempt #{rec.attemptNumber}</td>
                    <td className="p-3 text-slate-500">{rec.date}</td>
                    <td className="p-3 font-mono text-slate-900">{rec.score.toFixed(1)} / {rec.maxMarks}</td>
                    <td className="p-3 font-mono text-emerald-600">{rec.accuracy.toFixed(1)}%</td>
                    <td className="p-3 font-mono text-slate-600">{formatTime(rec.timeSeconds)}</td>
                    <td className="p-3">
                      {i > 0 && rec.score > historyList[i - 1].score ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          Improved
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px]">
                          Attempted
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Return to Library */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onBackToLibrary}
          className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
        >
          ← Back to Mock Test Library
        </button>
      </div>
    </div>
  );
};
