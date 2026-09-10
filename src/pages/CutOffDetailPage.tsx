import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { BarChart2, TrendingUp, AlertCircle } from 'lucide-react';

interface CutOffDetailPageProps {
  exam: ExamRecord;
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const CutOffDetailPage: React.FC<CutOffDetailPageProps> = ({ exam, onNavigate, depth = 1 }) => {
  const cutOffSections = [
    {
      id: 1,
      title: 'Decisive Factors Determining the Qualifying Cut Off',
      content: '1. Total number of applicants appearing in the examination. 2. Aggregate category-wise vacancy count. 3. Normalized difficulty levels across different shifts. 4. Normalization percentile formulas applied.'
    },
    {
      id: 2,
      title: 'Normalization Formula & Shift Equalization Details',
      content: 'Since computer-based examinations are conducted across multiple shifts with varying question sets, raw scores are normalized using standard multi-shift percentile or standard deviation formulas to ensure fair comparison.'
    },
    {
      id: 3,
      title: 'Previous Year Cut Off Trend Analysis & Safe Target Score',
      content: 'Cut off thresholds generally fluctuate within a 4% to 8% margin depending on whether total recruitment vacancies increase or decrease compared to previous cycles.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Cut Off', page: 'cut-off' },
          { label: `${exam.examName} Cut Off` }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      <LifecycleNavbar exam={exam} currentSection="cut-off" onNavigate={onNavigate} depth={depth} />

      {/* Main Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-blue-50 border border-blue-200 rounded-2xl shrink-0">
              {exam.logoIcon}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  {exam.category}
                </span>
                <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {exam.cutOffData ? 'Official Cut Off Available' : 'Expected Cut Off'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {exam.examName} Cut Off Marks
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{exam.organization}</p>
            </div>
          </div>
        </div>

        {/* Category-Wise Table */}
        {exam.cutOffData ? (
          <div className="mt-6">
            <h3 className="text-base font-bold text-slate-900 font-display mb-3 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-blue-600" />
              <span>Official Category-Wise Qualifying Cut Off ({exam.cutOffData.year})</span>
            </h3>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 text-xs">
                  <tr>
                    <th className="py-3 px-4">Category Code</th>
                    <th className="py-3 px-4">Category Name</th>
                    <th className="py-3 px-4">Qualifying Cut Off Marks</th>
                    <th className="py-3 px-4">Shortlisted Candidates</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {exam.cutOffData.categories.map((cat, i) => (
                    <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">0{i + 1}</td>
                      <td className="py-3 px-4 font-bold text-slate-800">{cat.category}</td>
                      <td className="py-3 px-4">
                        <span className="font-extrabold text-blue-700 text-sm px-2.5 py-0.5 bg-blue-50 rounded-lg">
                          {cat.marks}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600 font-semibold">
                        {cat.candidates || 'N/A'} Candidates
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="mt-6 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center">
            <BarChart2 className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-700">Official Category Cut Off Not Released Yet</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Category-wise qualifying marks for {exam.examName} are announced upon result publication. Please refer to past trends or check back once the evaluation phase concludes.
            </p>
          </div>
        )}
      </div>

      <ShareButtons title={`${exam.examName} Cut Off Marks`} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <Accordion
            sections={cutOffSections}
            title="Cut Off Calculation Guidelines & Normalization"
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
