import React from 'react';
import { AdmissionRecord, ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Accordion } from '../components/Accordion';
import { ShareButtons } from '../components/ShareButtons';
import { getCountdown, formatDate } from '../utils/dateUtils';
import {
  GraduationCap,
  ExternalLink,
  Calendar,
  CheckCircle,
  FileText
} from 'lucide-react';

interface AdmissionDetailPageProps {
  admission: AdmissionRecord;
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AdmissionDetailPage: React.FC<AdmissionDetailPageProps> = ({
  admission,
  onNavigate,
  depth = 1
}) => {
  const countdown = getCountdown(admission.applicationLastDate, 'deadline');

  const admissionSections = [
    {
      id: 1,
      title: 'Course Overview, Seat Matrix & Specializations',
      content: admission.description
    },
    {
      id: 2,
      title: 'Detailed Eligibility Criteria & Minimum Marks Requirement',
      content: admission.eligibility
    },
    {
      id: 3,
      title: 'Application Process & Step-by-Step Registration',
      content: '1. Register with valid Mobile and Email. 2. Fill basic academic information. 3. Upload scanned photograph and signature in JPG format. 4. Pay required application fee via Net Banking / UPI / Debit Card. 5. Print final confirmation page.'
    },
    {
      id: 4,
      title: 'Counselling & Seat Allotment Guidelines',
      content: admission.counsellingDetails || 'Counselling will be conducted based on merit ranks declared in the entrance test.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Admissions', page: 'admission' },
          { label: admission.course }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Main Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                {admission.category}
              </span>
              <span
                className={`text-xs font-bold px-3 py-0.5 rounded-full ${
                  countdown.isClosed
                    ? 'bg-slate-100 text-slate-600'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {countdown.text}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              {admission.course}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">{admission.university}</p>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 my-5">
          <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Apply Start</span>
            <strong className="text-slate-900 text-sm">{formatDate(admission.applicationStartDate)}</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Last Date</span>
            <strong className="text-red-600 text-sm font-bold">{formatDate(admission.applicationLastDate)}</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Category</span>
            <strong className="text-slate-900 text-sm">{admission.category}</strong>
          </div>
          <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-xs">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">Application Fee</span>
            <strong className="text-emerald-700 text-sm font-bold">{admission.feeDetails}</strong>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          {admission.applyLink && (
            <a
              href={admission.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Apply Online Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {admission.officialNotification && (
            <a
              href={admission.officialNotification}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer border border-slate-200"
            >
              <span>Official Brochure PDF</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <ShareButtons title={`${admission.course} Admission 2026`} />

      {/* Accordions */}
      <div className="space-y-6">
        <Accordion
          sections={admissionSections}
          title="Admission Rules, Eligibility & Registration Steps"
          defaultOpenFirst={true}
        />
      </div>
    </div>
  );
};
