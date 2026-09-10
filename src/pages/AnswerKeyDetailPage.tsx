import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { ScoreCalculator } from '../components/ScoreCalculator';
import { formatDate } from '../utils/dateUtils';
import {
  FileCheck,
  Download,
  ExternalLink,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface AnswerKeyDetailPageProps {
  exam: ExamRecord;
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AnswerKeyDetailPage: React.FC<AnswerKeyDetailPageProps> = ({ exam, onNavigate, depth = 1 }) => {
  const answerKeySections = [
    {
      id: 1,
      title: 'Provisional Answer Key Release Notice & Direct Download Links',
      content: `The provisional answer keys along with candidate response sheets for ${exam.examName} have been uploaded on the official examination portal. Candidates can login using their credentials to view their attempted responses and official master keys.`
    },
    {
      id: 2,
      title: 'Step-by-Step Procedure to Check Candidate Response Sheet',
      content: '1. Click on the Official Response Sheet link. 2. Enter your Examination Roll Number and Password (as mentioned on your hall ticket). 3. Click Login. 4. Navigate to "Question Paper & Response Sheet" tab. 5. Download the PDF containing question-wise marked options.'
    },
    {
      id: 3,
      title: 'How to Submit Representation / Challenge Questions Online',
      content: `Candidates not satisfied with any tentative answer key can submit representations through online mode within the designated objection window${
        exam.objectionLastDate ? ` (up to ${formatDate(exam.objectionLastDate)})` : ''
      }. A prescribed fee of ₹100 per question challenged must be paid online. Objections received without fee or through any other mode will not be entertained.`
    },
    {
      id: 4,
      title: 'Marking Scheme & Formula Applied',
      content: `For each correct response, candidates are awarded marks as per scheme (${exam.examPattern[0]?.subjects[0]?.marks / exam.examPattern[0]?.subjects[0]?.questions || 2} marks). Penalty for wrong answers is deducted as per the official notification (${exam.examPattern[0]?.negativeMarking || '0.50 marks per wrong answer'}).`
    },
    {
      id: 5,
      title: 'Final Answer Key & Normalization Process',
      content: 'Representations submitted by candidates will be verified by a panel of subject experts. If found genuine, the answer key will be revised uniformly for all candidates. The final answer key used for evaluation and result declaration is published shortly after.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Answer Key', page: 'answer-key' },
          { label: `${exam.examName} Answer Key` }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      <LifecycleNavbar exam={exam} currentSection="answer-key" onNavigate={onNavigate} depth={depth} />

      {/* Main Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-amber-50 border border-amber-200 rounded-2xl shrink-0">
              {exam.logoIcon}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  {exam.category}
                </span>
                <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  {exam.status === 'ANSWER_KEY_RELEASED' ? 'Answer Key Released' : 'Notify Soon'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {exam.examName} Answer Key 2026
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{exam.organization}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-5">
          {exam.answerKeyLink ? (
            <a
              href={exam.answerKeyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Answer Key</span>
            </a>
          ) : (
            <button
              disabled
              className="px-6 py-3 bg-slate-100 text-slate-400 font-bold text-xs sm:text-sm rounded-xl cursor-not-allowed"
            >
              Answer Key Notify Soon
            </button>
          )}

          {exam.responseSheetLink && (
            <a
              href={exam.responseSheetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-blue-200"
            >
              <FileCheck className="w-4 h-4" />
              <span>Candidate Response Sheet</span>
            </a>
          )}

          {exam.officialWebsite && (
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-slate-50 text-slate-700 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-200"
            >
              <span>Raise Objection Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <ShareButtons title={`${exam.examName} Answer Key & Score Calculator`} />

      {/* EMBEDDED ANSWER KEY SCORE CALCULATOR */}
      <ScoreCalculator
        defaultTotal={100}
        defaultMarksPerCorrect={2}
        defaultNegativeMarks={0.5}
        examTitle={exam.examName}
      />

      {/* Accordions & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <Accordion
            sections={answerKeySections}
            title="Answer Key & Objection Guidelines"
            defaultOpenFirst={true}
          />
        </div>
        <div className="lg:col-span-4">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
