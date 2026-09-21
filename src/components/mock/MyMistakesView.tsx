import React, { useState } from 'react';
import { StoredMistake, MockQuestion } from '../../types/mockTest';
import { XCircle, RotateCcw, Sparkles, BookOpen, AlertTriangle, Filter, Trash2, ArrowRight } from 'lucide-react';

interface MyMistakesViewProps {
  examId: string;
  examName: string;
  mistakes: StoredMistake[];
  onRetryMistakes: (questions: MockQuestion[]) => void;
  onClearMistakes: () => void;
  onPracticeTopic?: (topic: string) => void;
}

export const MyMistakesView: React.FC<MyMistakesViewProps> = ({
  examId,
  examName,
  mistakes,
  onRetryMistakes,
  onClearMistakes,
  onPracticeTopic
}) => {
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>(examId || 'ALL');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('ALL');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('ALL');

  // Filter list
  const filteredMistakes = mistakes.filter((m) => {
    if (selectedExamFilter !== 'ALL' && m.examId !== selectedExamFilter) return false;
    if (selectedSubjectFilter !== 'ALL' && m.question.subject !== selectedSubjectFilter) return false;
    if (selectedTopicFilter !== 'ALL' && m.question.topic !== selectedTopicFilter) return false;
    return true;
  });

  const availableExams: string[] = Array.from(new Set(mistakes.map((m) => m.examId)));
  const availableSubjects: string[] = Array.from(new Set(filteredMistakes.map((m) => m.question.subject)));
  const availableTopics: string[] = Array.from(new Set(filteredMistakes.map((m) => m.question.topic)));

  if (mistakes.length === 0) {
    return (
      <div id="mistakes-empty-state" className="bg-white border border-slate-200 rounded-3xl p-10 sm:p-14 text-center space-y-4 max-w-xl mx-auto shadow-xs my-8">
        <div className="w-16 h-16 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
          <BookOpen className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
          Mistake Bank Empty
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          No mistakes yet. Complete a mock to start building your Mistake Bank.
        </p>
      </div>
    );
  }

  const mistakeQuestions = filteredMistakes.map((m) => m.question);

  return (
    <div id="my-mistakes-view" className="max-w-5xl mx-auto space-y-6 py-4">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-rose-50/80 border border-rose-200 rounded-3xl shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
            <XCircle className="w-4 h-4" />
            <span>Dedicated Mistake Bank</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            {filteredMistakes.length} Wrong Questions Identified
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Every question answered incorrectly in any mock is automatically saved here with full explanations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onClearMistakes}
            className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Bank</span>
          </button>
          <button
            type="button"
            onClick={() => onRetryMistakes(mistakeQuestions)}
            disabled={filteredMistakes.length === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 active:scale-95 transition-all cursor-pointer disabled:opacity-40"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry All ({filteredMistakes.length})</span>
          </button>
        </div>
      </div>

      {/* Filters Bar: By Exam, By Subject, By Topic */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span>Filters:</span>
        </div>

        {/* Exam Filter */}
        <select
          value={selectedExamFilter}
          onChange={(e) => {
            setSelectedExamFilter(e.target.value);
            setSelectedSubjectFilter('ALL');
            setSelectedTopicFilter('ALL');
          }}
          className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 text-slate-700 cursor-pointer"
        >
          <option value="ALL">All Exams ({mistakes.length})</option>
          {availableExams.map((ex) => (
            <option key={ex} value={ex}>
              {ex.toUpperCase().replace('-', ' ')}
            </option>
          ))}
        </select>

        {/* Subject Filter */}
        <select
          value={selectedSubjectFilter}
          onChange={(e) => {
            setSelectedSubjectFilter(e.target.value);
            setSelectedTopicFilter('ALL');
          }}
          className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 text-slate-700 cursor-pointer"
        >
          <option value="ALL">All Subjects</option>
          {availableSubjects.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        {/* Topic Filter */}
        <select
          value={selectedTopicFilter}
          onChange={(e) => setSelectedTopicFilter(e.target.value)}
          className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 text-slate-700 cursor-pointer"
        >
          <option value="ALL">All Topics</option>
          {availableTopics.map((top) => (
            <option key={top} value={top}>
              {top}
            </option>
          ))}
        </select>
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
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-slate-400">#{idx + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold uppercase text-[11px]">
                    {item.examId.toUpperCase().replace('-', ' ')}
                  </span>
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
                  <span>Your Wrong Answer:</span>
                  <strong className="font-bold">{item.userAnswer || 'Left Blank'}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center justify-between">
                  <span>Correct Answer:</span>
                  <strong className="font-bold">Option {q.correctAnswer}</strong>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                {q.options.map((opt) => (
                  <div
                    key={opt.id}
                    className={`p-2 rounded-xl border flex items-center gap-2 ${
                      opt.id === q.correctAnswer
                        ? 'border-emerald-500 bg-emerald-50/70 text-emerald-900 font-semibold'
                        : opt.id === item.userAnswer
                        ? 'border-rose-400 bg-rose-50/70 text-rose-900 line-through'
                        : 'border-slate-200 bg-slate-50/50 text-slate-600'
                    }`}
                  >
                    <span className="font-bold">{opt.id}.</span>
                    <span>{opt.text}</span>
                  </div>
                ))}
              </div>

              {/* Explanation */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-xs text-slate-700 leading-relaxed">
                <strong className="text-blue-700 block mb-1">Detailed Explanation:</strong>
                {q.explanation}
              </div>

              {/* Action Buttons for this Mistake */}
              <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-100">
                {onPracticeTopic && (
                  <button
                    type="button"
                    onClick={() => onPracticeTopic(q.topic)}
                    className="px-3 py-1.5 rounded-xl border border-blue-200 text-blue-700 hover:bg-blue-50 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Practice This Topic</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onRetryMistakes([q])}
                  className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry Mistake</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
