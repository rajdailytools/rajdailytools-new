import React from 'react';
import { TopicScore, MockQuestion } from '../../types/mockTest';
import { AlertCircle, Zap, Target, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

interface WeaknessRetestViewProps {
  examName: string;
  topicScores: TopicScore[];
  availableQuestions: MockQuestion[];
  onStartRetest: (questions: MockQuestion[]) => void;
}

export const WeaknessRetestView: React.FC<WeaknessRetestViewProps> = ({
  examName,
  topicScores,
  availableQuestions,
  onStartRetest
}) => {
  // Topics with accuracy below 60%
  const weakTopics = topicScores.filter((t) => t.accuracy < 60 || t.wrong > 0);

  // Collect questions belonging to these weak topics
  const weakTopicNames = new Set(weakTopics.map((t) => t.topic));
  const candidateQuestions = availableQuestions.filter((q) => weakTopicNames.has(q.topic));
  const testQuestions = candidateQuestions.length > 0 ? candidateQuestions : availableQuestions.slice(0, 10);

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4">
      <div className="bg-gradient-to-r from-amber-950 via-orange-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-800/40 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>RajDailyTools Weakness Detection Engine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
          Weakness Analysis & Retest System
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          The algorithm maps your incorrect answers and slow-response topics to formulate a targeted retest. Retesting immediately closes learning gaps and boosts retention.
        </p>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => onStartRetest(testQuestions)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-950/40 active:scale-95 transition-all"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Targeted Weakness Retest ({testQuestions.length} Qs)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Identified Topics List */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 font-display">
          Identified Topics Requiring Practice ({weakTopics.length > 0 ? weakTopics.length : 'All Covered Topics'})
        </h3>

        {weakTopics.length === 0 ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>All practiced topics currently maintain high accuracy! You can take a standard revision retest.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {weakTopics.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-600 block uppercase tracking-wider">
                    {t.subject}
                  </span>
                  <strong className="text-slate-900 text-sm font-display">{t.topic}</strong>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    {t.wrong} incorrect / {t.total} questions
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      t.accuracy < 40
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {t.accuracy.toFixed(0)}% Accuracy
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
