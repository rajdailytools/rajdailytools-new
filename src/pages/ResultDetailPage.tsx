import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { formatDate } from '../utils/dateUtils';
import {
  Trophy,
  Download,
  ExternalLink,
  CheckCircle,
  FileText,
  BarChart2
} from 'lucide-react';

interface ResultDetailPageProps {
  exam: ExamRecord;
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const ResultDetailPage: React.FC<ResultDetailPageProps> = ({ exam, onNavigate, depth = 1 }) => {
  const resultSections = [
    {
      id: 1,
      title: 'Result Declaration Notice & Merit List Download Links',
      content: `Official result for ${exam.examName} has been declared. Candidates can download the official PDF merit list containing roll numbers and names of candidates qualified for ${exam.nextStage || 'the next recruitment phase'}.`
    },
    {
      id: 2,
      title: 'Step-by-Step Instructions: How to Check Your Result',
      content: '1. Click on the Result PDF download button above. 2. Open the downloaded PDF in any PDF reader. 3. Press Ctrl + F (or the search icon on mobile). 4. Type your Roll Number or Full Name. 5. If highlighted, you have successfully cleared the stage.'
    },
    {
      id: 3,
      title: 'Scorecard & Normalized Marks Release Details',
      content: 'Individual marks and scorecards for both qualified and non-qualified candidates are uploaded within 7 to 10 days of result announcement on the candidate login dashboard.'
    },
    {
      id: 4,
      title: 'Tie-Breaking Principles & Resolution Criteria',
      content: 'In the event of tie in total marks, merit is determined by applying one after another till the tie is resolved: 1. Marks in specialized domain sections. 2. Date of birth (older candidate placed higher). 3. Alphabetical order of first names.'
    },
    {
      id: 5,
      title: 'Next Stage Preparation & Document Verification',
      content: `Candidates shortlisted in this result must prepare for ${exam.nextStage || 'Document Verification / Physical Endurance Test'}. Ensure all original matriculation, caste, category, and ID certificates are in order.`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Result', page: 'result' },
          { label: `${exam.examName} Result` }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      <LifecycleNavbar exam={exam} currentSection="result" onNavigate={onNavigate} depth={depth} />

      {/* Hero Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-emerald-50 border border-emerald-200 rounded-2xl shrink-0">
              {exam.logoIcon}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  {exam.category}
                </span>
                <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {exam.status === 'RESULT_RELEASED' ? 'Result Declared' : 'Notify Soon'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {exam.examName} Result 2026
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{exam.organization}</p>
            </div>
          </div>
        </div>

        {/* Quick Dates & Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 my-5">
          <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Declaration Date</span>
            <strong className="text-slate-900 text-sm font-display">
              {exam.resultDate ? formatDate(exam.resultDate) : 'Notify Soon'}
            </strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Total Vacancy</span>
            <strong className="text-emerald-700 text-sm font-bold">{exam.totalVacancy}</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Status</span>
            <strong className="text-slate-900 text-sm">
              {exam.status === 'RESULT_RELEASED' ? 'Merit List Out' : 'Evaluation Active'}
            </strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Next Phase</span>
            <strong className="text-blue-700 text-sm font-bold">{exam.nextStage || 'Document Verification'}</strong>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {exam.resultLink ? (
            <a
              href={exam.resultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Result PDF</span>
            </a>
          ) : (
            <button
              disabled
              className="px-6 py-3 bg-slate-100 text-slate-400 font-bold text-xs sm:text-sm rounded-xl cursor-not-allowed"
            >
              Result PDF Link Notify Soon
            </button>
          )}

          {exam.cutOffData && (
            <button
              onClick={() => onNavigate('cut-off-detail', exam.slug)}
              className="px-5 py-3 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-blue-200"
            >
              <BarChart2 className="w-4 h-4" />
              <span>View Official Cut Off</span>
            </button>
          )}

          {exam.officialWebsite && (
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-slate-50 text-slate-700 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-200"
            >
              <span>Official Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <ShareButtons title={`${exam.examName} Result 2026`} />

      {/* Main and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <Accordion
            sections={resultSections}
            title="Result Verification Steps, Normalization & Next Stages"
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
