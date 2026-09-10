import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { LifecycleNavbar } from '../components/LifecycleNavbar';
import { ShareButtons } from '../components/ShareButtons';
import { RightSidebar } from '../components/RightSidebar';
import { getCountdown, formatDate } from '../utils/dateUtils';
import {
  IdCard,
  Download,
  MapPin,
  ExternalLink,
  AlertCircle,
  FileText,
  Clock
} from 'lucide-react';

interface AdmitCardDetailPageProps {
  exam: ExamRecord;
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AdmitCardDetailPage: React.FC<AdmitCardDetailPageProps> = ({ exam, onNavigate, depth = 1 }) => {
  const countdown = getCountdown(exam.examDate, 'exam');

  const admitCardSections = [
    {
      id: 1,
      title: 'Latest Update & Regional Download Direct Links',
      content: `${exam.examName} Admit Card and City Intimation Slip can be downloaded directly from the official portal using your Registration Number and Date of Birth. Separate links are activated for Northern, Western, Eastern, Southern, and Central regions.`
    },
    {
      id: 2,
      title: 'Step-by-Step Instructions: How to Download Admit Card',
      content: '1. Visit the regional official web portal. 2. Click on the designated Admit Card download notice. 3. Enter your Registration ID / Roll Number and Password / Date of Birth (DD-MM-YYYY). 4. Click Submit to display the hall ticket. 5. Download and take 2 color printouts on clean A4 paper.'
    },
    {
      id: 3,
      title: 'Exam Date, Shift Timing & Reporting Instructions',
      content: `The computer-based examination is scheduled for ${formatDate(exam.examDate)}. Candidates must arrive strictly before the gate closure time mentioned on their individual admit card. No late entry is permitted under any circumstances.`
    },
    {
      id: 4,
      title: 'Exam City / Centre Intimation Information',
      content: 'Exam City intimation slip is published 10 days in advance to help candidates plan their travel arrangements. The exact venue address is specified on the final e-admit card.'
    },
    {
      id: 5,
      title: 'Mandatory Documents to Carry to the Examination Hall',
      content: '1. Printed Copy of E-Admit Card. 2. Two recent passport-size color photographs. 3. Original Valid Photo ID Proof with matching Date of Birth (Aadhaar Card, PAN Card, Voter ID, Passport, or Driving License). 4. Transparent ballpoint pen.'
    },
    {
      id: 6,
      title: 'Permissible ID Proofs & Date of Birth Certificate',
      content: 'If the photo identity card does not display the complete Date of Birth (including date, month, and year), the candidate must carry an additional original certificate (e.g. 10th marksheet) as proof of their Date of Birth.'
    },
    {
      id: 7,
      title: 'Examination Pattern & Sectional Timing',
      content: `Test format consists of objective multiple choice questions with ${exam.examPattern[0]?.negativeMarking || 'standard negative marking'}. Sectional timing and compensatory allowances strictly adhere to official notification guidelines.`
    },
    {
      id: 8,
      title: 'Items Strictly Prohibited in Examination Hall',
      content: 'Mobile phones, smartwatches, Bluetooth devices, earphones, calculators, bags, wallets, study notes, metallic accessories, and electronic items are strictly barred inside the testing premises.'
    },
    {
      id: 9,
      title: 'Discrepancy in Admit Card: How to Rectify',
      content: 'If there is any mismatch in the candidate’s name, category, photograph, or signature on the admit card, they should immediately contact the regional facilitation desk or email the recruitment helpdesk with their registration receipt.'
    },
    {
      id: 10,
      title: 'Next Stage: Answer Key & Response Sheet Timeline',
      content: `Tentative answer keys and response sheets are typically made available within 5 to 7 days following the conclusion of the computerized examination.`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Admit Card', page: 'admit-card' },
          { label: `${exam.examName} Admit Card` }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      <LifecycleNavbar exam={exam} currentSection="admit-card" onNavigate={onNavigate} depth={depth} />

      {/* Main Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl p-3 bg-purple-50 border border-purple-200 rounded-2xl shrink-0">
              {exam.logoIcon}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                  {exam.category}
                </span>
                <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  {exam.status === 'ADMIT_CARD_RELEASED' ? 'Admit Card Active' : 'Coming Soon'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {exam.examName} Admit Card 2026
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{exam.organization}</p>
            </div>
          </div>
        </div>

        {/* Quick Dates */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-purple-50/50 p-4 rounded-2xl border border-purple-100 my-5">
          <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Exam Date</span>
            <strong className="text-slate-900 text-sm font-display">{formatDate(exam.examDate)}</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Countdown</span>
            <strong className="text-purple-700 text-sm font-bold">{countdown.text}</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Admit Card Date</span>
            <strong className="text-slate-900 text-sm">
              {exam.admitCardDate ? formatDate(exam.admitCardDate) : 'Notify Soon'}
            </strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Total Vacancy</span>
            <strong className="text-emerald-700 text-sm font-bold">{exam.totalVacancy}</strong>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {exam.admitCardLink ? (
            <a
              href={exam.admitCardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-purple-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Admit Card</span>
            </a>
          ) : (
            <button
              disabled
              className="px-6 py-3 bg-slate-100 text-slate-400 font-bold text-xs sm:text-sm rounded-xl cursor-not-allowed"
            >
              Admit Card Link Notify Soon
            </button>
          )}

          {exam.examCityLink ? (
            <a
              href={exam.examCityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-blue-200"
            >
              <MapPin className="w-4 h-4" />
              <span>Check Exam City</span>
            </a>
          ) : (
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-slate-50 text-slate-700 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-200"
            >
              <span>Official Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <ShareButtons title={`${exam.examName} Admit Card 2026`} />

      {/* Main & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <Accordion
            sections={admitCardSections}
            title="Admit Card Guidelines, Download Steps & Hall Instructions"
            defaultOpenFirst={true}
          />

          {/* FAQs */}
          {exam.faq && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 font-display mb-4">
                Admit Card Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {exam.faq.slice(0, 3).map((f, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <strong className="text-slate-900 block mb-1">Q: {f.q}</strong>
                    <span className="text-slate-600">{f.a}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-4">
          <RightSidebar currentExam={exam} onNavigate={onNavigate} depth={depth} />
        </div>
      </div>
    </div>
  );
};
