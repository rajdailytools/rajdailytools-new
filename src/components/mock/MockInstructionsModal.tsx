import React, { useState } from 'react';
import { ExamMockConfig, MockTestItem } from '../../types/mockTest';
import { Clock, Award, AlertCircle, CheckCircle2, Shield, ArrowRight, BookOpen } from 'lucide-react';

interface MockInstructionsModalProps {
  config: ExamMockConfig;
  mockItem: MockTestItem;
  onStart: (preferredLang: 'English' | 'Hindi') => void;
  onCancel: () => void;
}

export const MockInstructionsModal: React.FC<MockInstructionsModalProps> = ({
  config,
  mockItem,
  onStart,
  onCancel
}) => {
  const [preferredLang, setPreferredLang] = useState<'English' | 'Hindi'>('English');
  const [hasAgreed, setHasAgreed] = useState(true);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
              {config.logoIcon}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Official CBT Simulation
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 font-display">
                {mockItem.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm"
          >
            ✕
          </button>
        </div>

        {/* Exam Specifications */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <span className="text-[11px] font-bold text-slate-400 block uppercase">Questions</span>
            <strong className="text-base text-slate-900 font-black">{mockItem.totalQuestions} Qs</strong>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <span className="text-[11px] font-bold text-slate-400 block uppercase">Time Allowed</span>
            <strong className="text-base text-blue-700 font-black">{mockItem.durationMinutes} Mins</strong>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <span className="text-[11px] font-bold text-slate-400 block uppercase">Max Marks</span>
            <strong className="text-base text-emerald-700 font-black">{mockItem.maximumMarks} Marks</strong>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <span className="text-[11px] font-bold text-slate-400 block uppercase">Negative Marking</span>
            <strong className="text-base text-rose-600 font-black">-{config.negativeMarks} Marks</strong>
          </div>
        </div>

        {/* Subjects in this Mock */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 mb-5">
          <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            Sectional Breakdown ({config.subjects.length} Subjects):
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {config.subjects.map((sub, i) => (
              <div key={i} className="flex justify-between bg-white p-2 rounded-xl border border-blue-50">
                <span className="font-semibold">{sub.name}</span>
                <span className="text-slate-500">{sub.questionCount} Qs ({sub.marks} M)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Examination Rules */}
        <div className="space-y-3 text-xs text-slate-600 leading-relaxed mb-6">
          <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Important Instructions for Candidates</span>
          </h4>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>The clock will be set at the server. The countdown timer at the top shows remaining time.</li>
            <li>When timer reaches zero, the mock test will automatically submit.</li>
            <li>Click <strong>Save & Next</strong> after choosing an option to save your answer.</li>
            <li>Use <strong>Mark for Review</strong> to flag questions you want to review before final submission.</li>
            <li>You can switch the question display language (English / Hindi) anytime during the exam without losing your selected answers.</li>
          </ul>
        </div>

        {/* Language Selection Preference */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
          <div>
            <span className="text-xs font-bold text-slate-900 block">Default Question Language:</span>
            <span className="text-[11px] text-slate-500">You can toggle anytime during the test</span>
          </div>
          <div className="flex gap-2">
            {(['English', 'Hindi'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setPreferredLang(lang)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  preferredLang === lang
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {lang === 'Hindi' ? 'हिन्दी (Hindi)' : 'English'}
              </button>
            ))}
          </div>
        </div>

        {/* Declaration Checkbox */}
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 mb-6 select-none">
          <input
            type="checkbox"
            checked={hasAgreed}
            onChange={(e) => setHasAgreed(e.target.checked)}
            className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
          />
          <span>
            I have read and understood all the instructions above. I understand that the test timer will start immediately when I click below.
          </span>
        </label>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm font-bold transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!hasAgreed}
            onClick={() => onStart(preferredLang)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <span>Start Mock Test</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
