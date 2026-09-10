import React, { useState } from 'react';
import { Calculator, RotateCcw, Award, CheckCircle, XCircle } from 'lucide-react';

interface ScoreCalculatorProps {
  defaultTotal?: number;
  defaultMarksPerCorrect?: number;
  defaultNegativeMarks?: number;
  examTitle?: string;
}

export const ScoreCalculator: React.FC<ScoreCalculatorProps> = ({
  defaultTotal = 100,
  defaultMarksPerCorrect = 2,
  defaultNegativeMarks = 0.5,
  examTitle = 'Exam'
}) => {
  const [totalQuestions, setTotalQuestions] = useState<number>(defaultTotal);
  const [correctAnswers, setCorrectAnswers] = useState<number>(68);
  const [wrongAnswers, setWrongAnswers] = useState<number>(14);
  const [marksPerCorrect, setMarksPerCorrect] = useState<number>(defaultMarksPerCorrect);
  const [negativeMarks, setNegativeMarks] = useState<number>(defaultNegativeMarks);

  // Auto-calculated variables
  const attempted = Math.min(totalQuestions, correctAnswers + wrongAnswers);
  const unattempted = Math.max(0, totalQuestions - attempted);

  const correctMarks = correctAnswers * marksPerCorrect;
  const deductedMarks = wrongAnswers * negativeMarks;
  const finalScore = parseFloat((correctMarks - deductedMarks).toFixed(2));
  const maxScore = totalQuestions * marksPerCorrect;
  const accuracy = attempted > 0 ? ((correctAnswers / attempted) * 100).toFixed(1) : '0';
  const percentage = maxScore > 0 ? ((finalScore / maxScore) * 100).toFixed(1) : '0';

  const handleReset = () => {
    setTotalQuestions(defaultTotal);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setMarksPerCorrect(defaultMarksPerCorrect);
    setNegativeMarks(defaultNegativeMarks);
  };

  return (
    <div className="bg-white border-2 border-blue-100 rounded-2xl shadow-md p-5 sm:p-7 overflow-hidden relative">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 font-display">
            Official Answer Key Score Calculator
          </h3>
          <p className="text-xs text-slate-500">
            Instant negative marking evaluation for {examTitle}
          </p>
        </div>
      </div>

      {/* Input Form Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Total Questions
          </label>
          <input
            type="number"
            min={1}
            value={totalQuestions || ''}
            onChange={(e) => setTotalQuestions(Math.max(1, parseInt(e.target.value) || 0))}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-emerald-700 mb-1.5 uppercase tracking-wider flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> Correct Answers
          </label>
          <input
            type="number"
            min={0}
            max={totalQuestions}
            value={correctAnswers}
            onChange={(e) => {
              const val = Math.max(0, parseInt(e.target.value) || 0);
              setCorrectAnswers(Math.min(totalQuestions, val));
            }}
            className="w-full bg-emerald-50/50 border border-emerald-300 rounded-xl px-3.5 py-2 text-sm font-semibold text-emerald-900 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-red-700 mb-1.5 uppercase tracking-wider flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5" /> Wrong Answers
          </label>
          <input
            type="number"
            min={0}
            max={Math.max(0, totalQuestions - correctAnswers)}
            value={wrongAnswers}
            onChange={(e) => {
              const val = Math.max(0, parseInt(e.target.value) || 0);
              setWrongAnswers(Math.min(Math.max(0, totalQuestions - correctAnswers), val));
            }}
            className="w-full bg-red-50/50 border border-red-300 rounded-xl px-3.5 py-2 text-sm font-semibold text-red-900 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Marks Per Correct Answer (+)
          </label>
          <input
            type="number"
            step="0.25"
            min={0}
            value={marksPerCorrect}
            onChange={(e) => setMarksPerCorrect(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Negative Marks Per Wrong (-)
          </label>
          <input
            type="number"
            step="0.05"
            min={0}
            value={negativeMarks}
            onChange={(e) => setNegativeMarks(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={handleReset}
            type="button"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer border border-slate-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Values</span>
          </button>
        </div>
      </div>

      {/* Result Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/80 rounded-2xl p-4 border border-slate-200/80 mb-5">
        <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Attempted</div>
          <div className="text-lg font-extrabold text-slate-900 mt-0.5 font-display">
            {attempted} / {totalQuestions}
          </div>
          <div className="text-[10.5px] text-slate-500 mt-0.5">{unattempted} skipped</div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
          <div className="text-[11px] font-bold text-emerald-600 uppercase">Positive Marks</div>
          <div className="text-lg font-extrabold text-emerald-700 mt-0.5 font-display">
            +{correctMarks.toFixed(2)}
          </div>
          <div className="text-[10.5px] text-emerald-600/80 mt-0.5">{correctAnswers} correct</div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
          <div className="text-[11px] font-bold text-red-500 uppercase">Penalty Marks</div>
          <div className="text-lg font-extrabold text-red-600 mt-0.5 font-display">
            -{deductedMarks.toFixed(2)}
          </div>
          <div className="text-[10.5px] text-red-500/80 mt-0.5">{wrongAnswers} wrong</div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
          <div className="text-[11px] font-bold text-purple-600 uppercase">Accuracy Rate</div>
          <div className="text-lg font-extrabold text-purple-700 mt-0.5 font-display">
            {accuracy}%
          </div>
          <div className="text-[10.5px] text-purple-600/80 mt-0.5">{percentage}% of max</div>
        </div>
      </div>

      {/* Grand Final Score Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/20">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
            <Award className="w-7 h-7 text-amber-300" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-100">
              Estimated Raw Score
            </div>
            <div className="text-xs text-blue-200">
              Formula: ({correctAnswers} × {marksPerCorrect}) - ({wrongAnswers} × {negativeMarks})
            </div>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <div className="text-3xl sm:text-4xl font-black tracking-tight font-display text-white">
            {finalScore}{' '}
            <span className="text-base font-normal text-blue-200">/ {maxScore}</span>
          </div>
          <div className="text-[11px] font-medium text-emerald-300 mt-0.5">
            Normalized marks may vary based on shift difficulty
          </div>
        </div>
      </div>
    </div>
  );
};
