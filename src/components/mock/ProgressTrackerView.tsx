import React from 'react';
import { AttemptHistoryRecord } from '../../types/mockTest';
import { TrendingUp, Award, Clock, Target, Calendar, CheckCircle, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface ProgressTrackerViewProps {
  examName: string;
  history: AttemptHistoryRecord[];
  strongestSubject?: string;
  weakestSubject?: string;
  onStartFullMock: () => void;
}

export const ProgressTrackerView: React.FC<ProgressTrackerViewProps> = ({
  examName,
  history,
  strongestSubject = 'General Intelligence & Reasoning',
  weakestSubject = 'Quantitative Aptitude',
  onStartFullMock
}) => {
  const attemptsCount = history.length;
  const bestScore = attemptsCount > 0 ? Math.max(...history.map((h) => h.score)) : 0;
  const avgScore = attemptsCount > 0 ? (history.reduce((a, b) => a + b.score, 0) / attemptsCount).toFixed(1) : '0';
  const bestAccuracy = attemptsCount > 0 ? Math.max(...history.map((h) => h.accuracy)) : 0;
  const avgAccuracy = attemptsCount > 0 ? (history.reduce((a, b) => a + b.accuracy, 0) / attemptsCount).toFixed(0) : '0';

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Performance Progression & 7-Day Plan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
              My Progress: {examName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Continuous mock test performance analytics and adaptive 7-day preparation schedule.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartFullMock}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-900/40 transition-all shrink-0"
          >
            <span>Take Next Mock Test</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Mocks Taken</span>
          <strong className="text-3xl font-black text-slate-900 font-display">{attemptsCount}</strong>
          <span className="text-xs text-slate-500 block">Total attempts</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Best Score</span>
          <strong className="text-3xl font-black text-emerald-600 font-display">{bestScore.toFixed(1)}</strong>
          <span className="text-xs text-slate-500 block">Avg: {avgScore}</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Best Accuracy</span>
          <strong className="text-3xl font-black text-blue-600 font-display">{bestAccuracy.toFixed(0)}%</strong>
          <span className="text-xs text-slate-500 block">Avg: {avgAccuracy}%</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Focus Needed</span>
          <strong className="text-sm font-black text-amber-700 block truncate">{weakestSubject}</strong>
          <span className="text-xs text-emerald-600 block">Top: {strongestSubject}</span>
        </div>
      </div>

      {/* Score Progression Trend */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
          Score Progression Trend
        </h3>

        {history.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-400">
            No mock test attempts recorded yet. Take your first free full mock to generate progression metrics.
          </div>
        ) : (
          <div className="space-y-3">
            <div className="h-44 w-full flex items-end gap-3 sm:gap-6 pt-4 pb-2 px-2 border-b border-slate-200">
              {history.map((h, i) => {
                const maxCap = 200;
                const heightPercent = Math.min(100, Math.max(15, (h.score / maxCap) * 100));

                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <span className="text-[11px] font-bold text-blue-700 font-mono">
                      {h.score.toFixed(0)}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[36px] bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-xl transition-all hover:brightness-110"
                      title={`Attempt ${h.attemptNumber}: ${h.score} Marks (${h.accuracy}% Acc)`}
                    />
                    <span className="text-[10px] text-slate-400 font-semibold truncate">
                      Att {h.attemptNumber}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-xs text-slate-400 px-2">
              <span>First Attempt</span>
              <span>Latest Attempt</span>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic 7-Day Improvement Plan */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Personalized 7-Day Improvement Plan
            </h3>
            <p className="text-xs text-slate-500">
              Formulated based on your accuracy profile and topic weak spots.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 pt-2">
          {[
            { day: 'Day 1', title: 'Weak Topic Drill', desc: `Targeted practice in ${weakestSubject}`, icon: '🎯' },
            { day: 'Day 2', title: 'Accuracy Focus', desc: 'Attempt 20 Qs with zero negative marking', icon: '⚖️' },
            { day: 'Day 3', title: 'Speed Drill', desc: 'Reasoning & GA section within 25 mins', icon: '⚡' },
            { day: 'Day 4', title: 'Mistakes Revision', desc: 'Reattempt all saved wrong questions', icon: '📝' },
            { day: 'Day 5', title: 'Weakness Retest', desc: 'Take focused weakness test session', icon: '🔬' },
            { day: 'Day 6', title: 'Full Mock Test', desc: 'Simulate complete 60-minute test', icon: '🏆' },
            { day: 'Day 7', title: 'Analysis & Retest', desc: 'Compare scores and cement formulas', icon: '🚀' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors flex flex-col justify-between space-y-2 text-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-blue-700 text-[11px]">{item.day}</span>
                  <span className="text-base">{item.icon}</span>
                </div>
                <strong className="text-slate-900 block font-bold text-xs">{item.title}</strong>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
