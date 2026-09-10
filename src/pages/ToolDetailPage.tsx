import React, { useState, useRef, useEffect } from 'react';
import { ActivePage, ExamRecord, EducationLevel } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { formatDate } from '../utils/dateUtils';
import {
  evaluateCandidateEligibility,
  getDaysDifference
} from '../utils/centralQueries';
import {
  Calculator,
  Calendar,
  Image,
  Activity,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Download,
  Upload,
  RefreshCw,
  Clock,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Sliders,
  Check,
  Award
} from 'lucide-react';

import {
  SignatureResizerTool,
  ImageCompressorTool,
  BmiCalculatorTool,
  PercentageCalculatorTool,
  SalaryCalculatorTool,
  DateCalculatorTool,
  LoanEmiCalculatorTool,
  SimpleInterestCalculatorTool
} from '../components/calculators/ExtraTools';

export type ToolType =
  | 'eligibility-calculator'
  | 'age-calculator'
  | 'photo-resizer'
  | 'signature-resizer'
  | 'image-compressor'
  | 'bmi-calculator'
  | 'percentage-calculator'
  | 'salary-calculator'
  | 'date-calculator'
  | 'loan-emi-calculator'
  | 'simple-interest-calculator'
  | 'physical-eligibility'
  | 'mock-test';

interface ToolDetailPageProps {
  toolId: ToolType;
  exam: ExamRecord;
  onNavigate: (page: ActivePage, slug?: string) => void;
  onSelectExam?: (slug: string) => void;
  depth?: number;
}

export const ToolDetailPage: React.FC<ToolDetailPageProps> = ({
  toolId,
  exam,
  onNavigate,
  onSelectExam,
  depth = 0
}) => {
  const [selectedExamSlug, setSelectedExamSlug] = useState<string>(exam.slug);

  // Active exam resolution
  const activeExam =
    EXAMS_DATABASE.find((e) => e.slug === selectedExamSlug) || exam;

  const handleExamChange = (newSlug: string) => {
    setSelectedExamSlug(newSlug);
    if (onSelectExam) {
      onSelectExam(newSlug);
    }
  };

  // Breadcrumb tool name mapping
  const toolNames: Record<ToolType, string> = {
    'eligibility-calculator': 'Exam Eligibility Calculator',
    'age-calculator': 'Age Calculator & Cut-Off Checker',
    'photo-resizer': 'Photo Resizer',
    'signature-resizer': 'Signature Resizer',
    'image-compressor': 'Image & Document Compressor',
    'bmi-calculator': 'BMI (Body Mass Index) Calculator',
    'percentage-calculator': 'Percentage & CGPA Calculator',
    'salary-calculator': 'Salary & In-Hand Pay Calculator',
    'date-calculator': 'Exam Date & Duration Calculator',
    'loan-emi-calculator': 'Loan EMI Calculator',
    'simple-interest-calculator': 'Simple Interest Calculator',
    'physical-eligibility': 'Physical Standards (PST / PET) Checker',
    'mock-test': 'Online Practice & Mock Test'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: activeExam.examName, page: 'job-detail', slug: activeExam.slug },
          { label: toolNames[toolId] || 'Exam Tool' }
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Tool Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Official Exam Utility Suite</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
              {toolNames[toolId]}
            </h1>
            <p className="text-xs sm:text-sm text-blue-100">
              Configured specifically for <strong>{activeExam.examName}</strong> ({activeExam.organization}).
            </p>
          </div>

          {/* Exam Switcher Dropdown */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 text-xs text-white shrink-0 min-w-[260px]">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-blue-200 mb-1">
              Switch Exam Target:
            </label>
            <select
              value={activeExam.slug}
              onChange={(e) => handleExamChange(e.target.value)}
              className="w-full bg-slate-900/80 text-white border border-white/30 rounded-xl px-3 py-2 text-xs font-semibold outline-none cursor-pointer"
            >
              {EXAMS_DATABASE.map((item) => (
                <option key={item.id} value={item.slug} className="bg-slate-900 text-white">
                  {item.examName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Tool Navigation Pills */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/15 text-xs">
          <span className="text-blue-200 font-bold self-center mr-1">Other Tools:</span>
          {(
            [
              ['photo-resizer', 'Photo Resizer'],
              ['signature-resizer', 'Signature Resizer'],
              ['image-compressor', 'Image Compressor'],
              ['age-calculator', 'Age Calculator'],
              ['eligibility-calculator', 'Eligibility'],
              ['salary-calculator', 'Salary Calculator'],
              ['percentage-calculator', 'Percentage'],
              ['bmi-calculator', 'BMI Calculator'],
              ['date-calculator', 'Date Calculator'],
              ['loan-emi-calculator', 'Loan EMI'],
              ['simple-interest-calculator', 'Simple Interest'],
              ['physical-eligibility', 'Physical Standards'],
              ['mock-test', 'Practice Test']
            ] as const
          ).map(([id, label]) => {
            const isActive = toolId === id;
            return (
              <button
                key={id}
                onClick={() => {
                  window.location.hash = `#/tools/${id}?exam=${activeExam.slug}`;
                  onNavigate('tool-detail', `${id}?exam=${activeExam.slug}`);
                }}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Specific Tool Engine */}
      {toolId === 'eligibility-calculator' && <EligibilityCalculatorTool exam={activeExam} onNavigate={onNavigate} />}
      {toolId === 'age-calculator' && <AgeCalculatorTool exam={activeExam} onNavigate={onNavigate} />}
      {toolId === 'photo-resizer' && <PhotoResizerTool exam={activeExam} onNavigate={onNavigate} />}
      {toolId === 'signature-resizer' && <SignatureResizerTool exam={activeExam} onNavigate={onNavigate} />}
      {toolId === 'image-compressor' && <ImageCompressorTool exam={activeExam} />}
      {toolId === 'bmi-calculator' && <BmiCalculatorTool />}
      {toolId === 'percentage-calculator' && <PercentageCalculatorTool />}
      {toolId === 'salary-calculator' && <SalaryCalculatorTool />}
      {toolId === 'date-calculator' && <DateCalculatorTool />}
      {toolId === 'loan-emi-calculator' && <LoanEmiCalculatorTool />}
      {toolId === 'simple-interest-calculator' && <SimpleInterestCalculatorTool />}
      {toolId === 'physical-eligibility' && <PhysicalEligibilityTool exam={activeExam} onNavigate={onNavigate} />}
      {toolId === 'mock-test' && <MockTestTool exam={activeExam} onNavigate={onNavigate} />}
    </div>
  );
};

/* =========================================================================
   TOOL 1: ELIGIBILITY CALCULATOR FOR THIS EXAM
   ========================================================================= */
const EligibilityCalculatorTool: React.FC<{ exam: ExamRecord; onNavigate: (page: ActivePage, slug?: string) => void }> = ({
  exam,
  onNavigate
}) => {
  const [education, setEducation] = useState<EducationLevel | 'All'>(exam.education[0] || 'Graduation');
  const [candidateAge, setCandidateAge] = useState<number>(23);
  const [category, setCategory] = useState<string>('General');
  const [gender, setGender] = useState<string>('All');
  const [evaluated, setEvaluated] = useState<boolean>(true);

  const evaluation = evaluateCandidateEligibility(exam, {
    education,
    age: candidateAge,
    category,
    gender
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Form */}
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <h2 className="text-xl font-black text-slate-900 font-display">
            Verify Your Candidature for {exam.examName}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Pre-loaded with official rules from recruitment notification.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Candidate Highest Qualification
            </label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value as EducationLevel | 'All')}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
            >
              <option value="10th">10th Pass (Matriculation)</option>
              <option value="12th">12th Pass (Higher Secondary / 10+2)</option>
              <option value="Graduation">Graduation / Bachelor's Degree</option>
              <option value="Post Graduation">Post Graduation / Master's</option>
              <option value="ITI">ITI Technical Certificate</option>
              <option value="Diploma">Polytechnic Engineering Diploma</option>
              <option value="Other">Other Qualifications</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Age (Years)
              </label>
              <input
                type="number"
                min={16}
                max={55}
                value={candidateAge}
                onChange={(e) => setCandidateAge(parseInt(e.target.value) || 18)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
              >
                <option value="General">General / UR</option>
                <option value="OBC">OBC (+3 Yrs)</option>
                <option value="EWS">EWS</option>
                <option value="SC">SC (+5 Yrs)</option>
                <option value="ST">ST (+5 Yrs)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Candidate Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
            >
              <option value="All">All / Unspecified</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* Official Benchmark Box */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2">
          <div className="font-bold text-slate-700">Official Exam Requirement Benchmarks:</div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Mandatory Qualification:</span>
            <strong className="text-slate-900">{exam.education.join(' OR ')}</strong>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Prescribed Age Limit:</span>
            <strong className="text-slate-900">{exam.ageMin} - {exam.ageMax} Years</strong>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Upper Age for {category}:</span>
            <strong className="text-blue-700">{evaluation.maxAllowedAge} Years</strong>
          </div>
        </div>
      </div>

      {/* Right Result Verdict */}
      <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Automated Eligibility Verdict
          </span>

          <div
            className={`p-6 rounded-2xl border-2 flex items-start gap-4 ${
              evaluation.isEligible
                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                : 'bg-red-50/80 border-red-300 text-red-950'
            }`}
          >
            {evaluation.isEligible ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-8 h-8 text-red-600 shrink-0 mt-0.5" />
            )}

            <div>
              <h3 className="text-xl font-black font-display">
                {evaluation.isEligible ? 'You Are Eligible to Apply!' : 'Eligibility Criteria Not Met'}
              </h3>
              <p className="text-xs mt-1 leading-relaxed">
                {evaluation.isEligible
                  ? `Your profile satisfies all prescribed qualification (${education}) and age criteria (${candidateAge} years) under ${category} category.`
                  : 'Your profile does not satisfy one or more criteria specified in the official notification.'}
              </p>

              {!evaluation.isEligible && (
                <ul className="mt-3 space-y-1 text-xs text-red-700 font-semibold list-disc list-inside">
                  {evaluation.reasons.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recruitment Details:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Total Posts</span>
                <strong className="text-slate-900 text-sm">{exam.totalVacancy}</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Application Last Date</span>
                <strong className="text-red-600 text-sm">{formatDate(exam.applicationLastDate)}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100 mt-6">
          <button
            onClick={() => onNavigate('job-detail', exam.slug)}
            className="w-full sm:flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all cursor-pointer text-center"
          >
            View Full Notification (50 Sections)
          </button>

          {exam.applyLink && exam.status === 'APPLICATION_OPEN' && (
            <a
              href={exam.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Apply Online Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 2: AGE CALCULATOR WITH EXACT CUT-OFF DATE OF THAT EXAM
   ========================================================================= */
const AgeCalculatorTool: React.FC<{ exam: ExamRecord; onNavigate: (page: ActivePage, slug?: string) => void }> = ({
  exam,
  onNavigate
}) => {
  // Pre-set the exam's official age calculation cut-off date (e.g. 2026-08-01 or applicationLastDate)
  const officialCutoffDate = exam.applicationLastDate || '2026-08-01';

  const [dob, setDob] = useState<string>('2001-05-15');
  const [category, setCategory] = useState<string>('General');

  // Calculate exact age in Years, Months, Days as on officialCutoffDate
  const calculateExactAge = (birthDateStr: string, asOfDateStr: string) => {
    const b = new Date(birthDateStr);
    const a = new Date(asOfDateStr);

    let years = a.getFullYear() - b.getFullYear();
    let months = a.getMonth() - b.getMonth();
    let days = a.getDate() - b.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(a.getFullYear(), a.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalDays = Math.floor((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
    return { years, months, days, totalDays };
  };

  const ageData = calculateExactAge(dob, officialCutoffDate);

  // Category relaxation
  let ageRelax = 0;
  if (category === 'OBC') ageRelax = 3;
  if (category === 'SC' || category === 'ST') ageRelax = 5;

  const minAge = exam.ageMin;
  const maxAge = exam.ageMax + ageRelax;

  const isEligibleAge = ageData.years >= minAge && (ageData.years < maxAge || (ageData.years === maxAge && ageData.months === 0 && ageData.days === 0));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Input Box */}
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Official Exam Cut-Off Date Synchronized</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">
            Calculate Exact Age for {exam.examName}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            As per the advertisement, age must be calculated as on the crucial cut-off date: <strong>{formatDate(officialCutoffDate)}</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Candidate Date of Birth (DOB)
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-purple-500 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Exam Official Cut-Off Calculation Date
            </label>
            <input
              type="text"
              readOnly
              value={`${formatDate(officialCutoffDate)} (Prescribed in Notification)`}
              className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-700 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Reservation Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-purple-500 cursor-pointer"
            >
              <option value="General">General / UR (No Relaxation)</option>
              <option value="OBC">OBC (+3 Years Relaxation)</option>
              <option value="EWS">EWS (No Relaxation)</option>
              <option value="SC">SC (+5 Years Relaxation)</option>
              <option value="ST">ST (+5 Years Relaxation)</option>
            </select>
          </div>
        </div>

        <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 text-xs space-y-1.5 text-purple-900">
          <div className="font-bold">Official Age Parameters for this Post:</div>
          <div>• Minimum Age: <strong>{exam.ageMin} Years</strong></div>
          <div>• Maximum Age (UR): <strong>{exam.ageMax} Years</strong></div>
          {ageRelax > 0 && (
            <div>• Maximum Age for {category}: <strong>{maxAge} Years</strong> (+{ageRelax} yrs relaxation applied)</div>
          )}
        </div>
      </div>

      {/* Output Display */}
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Calculated Age Results
          </span>

          {/* Age Counter Cards */}
          <div className="grid grid-cols-3 gap-3 my-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display block">
                {ageData.years}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Years</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display block">
                {ageData.months}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Months</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display block">
                {ageData.days}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">Days</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 text-center mb-6">
            Exact Age as on {formatDate(officialCutoffDate)}: <strong>{ageData.years} Years, {ageData.months} Months, {ageData.days} Days</strong> ({ageData.totalDays} Total Days)
          </div>

          {/* Verdict Banner */}
          <div
            className={`p-5 rounded-2xl border-2 flex items-start gap-3.5 ${
              isEligibleAge
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-red-50 border-red-300 text-red-950'
            }`}
          >
            {isEligibleAge ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            )}

            <div>
              <div className="font-bold text-sm">
                {isEligibleAge ? 'Eligible Under Age Limits' : 'Not Eligible (Age Outside Prescribed Limits)'}
              </div>
              <p className="text-xs mt-0.5">
                {isEligibleAge
                  ? `Candidate meets the required age range of ${exam.ageMin} to ${maxAge} years as on ${formatDate(officialCutoffDate)}.`
                  : ageData.years < exam.ageMin
                  ? `Candidate is under the minimum age of ${exam.ageMin} years.`
                  : `Candidate exceeds the upper age limit of ${maxAge} years for ${category}.`}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
          <button
            onClick={() => onNavigate('job-detail', exam.slug)}
            className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Back to Exam Page
          </button>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 3: PHOTO / SIGNATURE RESIZER (EXACT EXAM SPECIFICATIONS)
   ========================================================================= */
const PhotoResizerTool: React.FC<{ exam: ExamRecord; onNavigate: (page: ActivePage, slug?: string) => void }> = ({
  exam
}) => {
  const [docType, setDocType] = useState<'photo' | 'signature'>('photo');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  const [resizedSizeKb, setResizedSizeKb] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Specifications pre-set per exam standard
  const specs =
    docType === 'photo'
      ? {
          title: 'Candidate Passport Photograph',
          widthCm: '3.5 cm',
          heightCm: '4.5 cm',
          targetWidthPx: 200,
          targetHeightPx: 230,
          minKb: 20,
          maxKb: 50,
          bgColor: 'Plain white or light off-white background',
          aspect: '3.5 : 4.5'
        }
      : {
          title: 'Candidate Signature',
          widthCm: '4.0 cm',
          heightCm: '2.0 cm',
          targetWidthPx: 140,
          targetHeightPx: 60,
          minKb: 10,
          maxKb: 20,
          bgColor: 'Black or dark blue ink on clear white paper',
          aspect: '2 : 1'
        };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      processImage(url, specs.targetWidthPx, specs.targetHeightPx, specs.maxKb);
    }
  };

  const processImage = (srcUrl: string, targetW: number, targetH: number, maxKb: number) => {
    setIsProcessing(true);
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = srcUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Fill background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, targetW, targetH);

      // Draw image to fill bounds
      ctx.drawImage(img, 0, 0, targetW, targetH);

      // Quality iteration to match file size
      let quality = 0.92;
      let dataUrl = canvas.toDataURL('image/jpeg', quality);

      // Approx KB calculation from base64
      let sizeInBytes = Math.round((dataUrl.length * 3) / 4);
      let sizeKb = Math.round(sizeInBytes / 1024);

      if (sizeKb > maxKb) {
        quality = 0.75;
        dataUrl = canvas.toDataURL('image/jpeg', quality);
        sizeInBytes = Math.round((dataUrl.length * 3) / 4);
        sizeKb = Math.round(sizeInBytes / 1024);
      }

      setResizedUrl(dataUrl);
      setResizedSizeKb(sizeKb);
      setIsProcessing(false);
    };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Settings & Specs */}
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
            <Image className="w-3.5 h-3.5" />
            <span>Preset to {exam.examName} Guidelines</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">
            Official Document Resizer
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Pre-configured dimensions, DPI and KB file size limits required by government application portals.
          </p>
        </div>

        {/* Toggle Photo or Signature */}
        <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl">
          <button
            type="button"
            onClick={() => {
              setDocType('photo');
              if (previewUrl) processImage(previewUrl, 200, 230, 50);
            }}
            className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              docType === 'photo' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Passport Photo
          </button>
          <button
            type="button"
            onClick={() => {
              setDocType('signature');
              if (previewUrl) processImage(previewUrl, 140, 60, 20);
            }}
            className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              docType === 'signature' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Signature Spec
          </button>
        </div>

        {/* Official Pre-set Specifications Table */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2.5">
          <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
            Target Specifications:
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Dimensions:</span>
            <strong className="text-slate-900">{specs.widthCm} × {specs.heightCm} ({specs.targetWidthPx}×{specs.targetHeightPx} px)</strong>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Allowed File Size:</span>
            <strong className="text-emerald-700 font-bold">{specs.minKb} KB to {specs.maxKb} KB</strong>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>File Format:</span>
            <strong className="text-slate-900">JPEG / JPG (Standard)</strong>
          </div>
          <div className="pt-2 border-t border-slate-200 text-slate-500 text-[11px]">
            <strong>Background Requirement:</strong> {specs.bgColor}
          </div>
        </div>

        {/* File Upload Button */}
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-4 px-6 border-2 border-dashed border-blue-400 hover:border-blue-600 bg-blue-50/50 hover:bg-blue-50 rounded-2xl transition-all flex flex-col items-center justify-center gap-2 cursor-pointer"
          >
            <Upload className="w-6 h-6 text-blue-600" />
            <span className="text-xs font-bold text-blue-900">
              {selectedFile ? 'Choose a Different Image' : `Upload ${specs.title}`}
            </span>
            <span className="text-[10px] text-slate-400">Supports PNG, JPG, JPEG, WebP</span>
          </button>
        </div>
      </div>

      {/* Resized Output & Download */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Real-Time Dimension &amp; Compression Preview
          </span>

          {resizedUrl ? (
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="bg-white p-2 border-2 border-slate-300 rounded-xl shadow-xs mb-4">
                <img
                  src={resizedUrl}
                  alt="Resized output"
                  className="max-h-56 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full font-bold text-slate-700">
                  {specs.targetWidthPx} × {specs.targetHeightPx} px
                </span>
                <span className="px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-full font-bold">
                  File Size: ~{resizedSizeKb} KB ({specs.minKb}-{specs.maxKb} KB target)
                </span>
                <span className="px-3 py-1 bg-blue-100 border border-blue-300 text-blue-800 rounded-full font-bold">
                  Format: JPG
                </span>
              </div>
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center text-slate-400 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <Image className="w-12 h-12 mb-2 text-slate-300" />
              <p className="text-xs font-semibold">Upload an image on the left to resize immediately.</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Auto-crops to {specs.targetWidthPx}×{specs.targetHeightPx}px with compliant KB sizing.</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {resizedSizeKb && resizedSizeKb <= specs.maxKb && resizedSizeKb >= specs.minKb ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Ready for upload to {exam.organization} Portal
              </span>
            ) : null}
          </div>

          {resizedUrl && (
            <a
              href={resizedUrl}
              download={`${exam.slug}-${docType}.jpg`}
              className="w-full sm:w-auto py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resized {docType === 'photo' ? 'Photo' : 'Signature'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 4: PHYSICAL ELIGIBILITY CHECKER (FOR POLICE/DEFENCE/RAILWAY)
   ========================================================================= */
const PhysicalEligibilityTool: React.FC<{ exam: ExamRecord; onNavigate: (page: ActivePage, slug?: string) => void }> = ({
  exam,
  onNavigate
}) => {
  const [candidateGender, setCandidateGender] = useState<'Male' | 'Female'>('Male');
  const [heightCm, setHeightCm] = useState<number>(172);
  const [chestCm, setChestCm] = useState<number>(82);
  const [chestExpandedCm, setChestExpandedCm] = useState<number>(87);
  const [runningMinutes, setRunningMinutes] = useState<number>(22);

  // Defaults per exam category
  const isUniformCadre =
    exam.category === 'Police' ||
    exam.category === 'Army' ||
    exam.category === 'Defence' ||
    exam.examName.toLowerCase().includes('police') ||
    exam.examName.toLowerCase().includes('army') ||
    exam.examName.toLowerCase().includes('gd') ||
    exam.examName.toLowerCase().includes('constable') ||
    exam.examName.toLowerCase().includes('nda');

  // Benchmark criteria
  const reqMaleHeight = exam.physicalRequirements?.maleHeightCm || 170;
  const reqFemaleHeight = exam.physicalRequirements?.femaleHeightCm || 157;
  const targetHeight = candidateGender === 'Male' ? reqMaleHeight : reqFemaleHeight;

  const heightPassed = heightCm >= targetHeight;
  const chestExpansion = chestExpandedCm - chestCm;
  const chestPassed = candidateGender === 'Female' ? true : chestCm >= 80 && chestExpansion >= 5;
  const runningPassed = candidateGender === 'Male' ? runningMinutes <= 24 : runningMinutes <= 8.5;

  const allPassed = heightPassed && chestPassed && runningPassed;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>PST / PET Physical Measurement Standards</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 font-display">
            Physical Measurement &amp; Endurance Test for {exam.examName}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isUniformCadre
              ? 'This exam involves mandatory Physical Standard Tests (PST) and Physical Endurance Tests (PET).'
              : 'Civil / Desk posts in this exam do not require physical tests, but uniformed posts (Excise Inspector, SI, etc.) require standard fitness.'}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Candidate Gender
            </label>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <button
                type="button"
                onClick={() => setCandidateGender('Male')}
                className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  candidateGender === 'Male' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                Male Candidate
              </button>
              <button
                type="button"
                onClick={() => setCandidateGender('Female')}
                className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  candidateGender === 'Female' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                Female Candidate
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Candidate Height in Centimeters (cm)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={130}
                max={220}
                value={heightCm}
                onChange={(e) => setHeightCm(parseInt(e.target.value) || 160)}
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
              />
              <span className="text-xs text-slate-500 font-semibold">
                ≈ {Math.floor(heightCm / 30.48)}' {Math.round((heightCm % 30.48) / 2.54)}"
              </span>
            </div>
          </div>

          {candidateGender === 'Male' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Normal Chest (cm)
                </label>
                <input
                  type="number"
                  min={60}
                  max={130}
                  value={chestCm}
                  onChange={(e) => setChestCm(parseInt(e.target.value) || 80)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Expanded Chest (cm)
                </label>
                <input
                  type="number"
                  min={65}
                  max={140}
                  value={chestExpandedCm}
                  onChange={(e) => setChestExpandedCm(parseInt(e.target.value) || 85)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Running Performance Time ({candidateGender === 'Male' ? '5 KM Race' : '1.6 KM Race'})
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={5}
                max={45}
                value={runningMinutes}
                onChange={(e) => setRunningMinutes(parseFloat(e.target.value) || 20)}
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
              />
              <span className="text-xs text-slate-500 font-semibold">Minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Result Verification Panel */}
      <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            PST / PET Physical Evaluation Check
          </span>

          <div className="space-y-3">
            {/* Height Check */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-700">Height Requirement</div>
                <div className="text-[11px] text-slate-500">
                  Required: Min {targetHeight} cm • Candidate: {heightCm} cm
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  heightPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {heightPassed ? 'PASS' : 'FAIL'}
              </span>
            </div>

            {/* Chest Check */}
            {candidateGender === 'Male' ? (
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-700">Chest Measurement &amp; Expansion</div>
                  <div className="text-[11px] text-slate-500">
                    Min 80 cm (Expansion +5 cm) • Candidate: {chestCm}cm (Exp: +{chestExpansion}cm)
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    chestPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {chestPassed ? 'PASS' : 'FAIL'}
                </span>
              </div>
            ) : (
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-700">Chest Measurement</div>
                  <div className="text-[11px] text-slate-500">Not applicable for female candidates per rules</div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700">
                  EXEMPTED
                </span>
              </div>
            )}

            {/* Running Check */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-700">Running / Endurance Test</div>
                <div className="text-[11px] text-slate-500">
                  Required: {candidateGender === 'Male' ? '5 KM in 24 Mins' : '1.6 KM in 8.5 Mins'} • Candidate: {runningMinutes} Mins
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  runningPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {runningPassed ? 'PASS' : 'FAIL'}
              </span>
            </div>
          </div>

          {/* Verdict Banner */}
          <div
            className={`mt-6 p-5 rounded-2xl border-2 flex items-center gap-3.5 ${
              allPassed
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}
          >
            {allPassed ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
            )}
            <div>
              <div className="font-bold text-sm">
                {allPassed ? 'Fit for Uniformed Cadre Examination' : 'One or More Physical Standards Require Training'}
              </div>
              <div className="text-xs mt-0.5">
                {allPassed
                  ? 'Candidate fulfills height, chest expansion, and running test time.'
                  : 'Check height or running endurance standards before attempting physical screening.'}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
          <button
            onClick={() => onNavigate('job-detail', exam.slug)}
            className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Back to Exam Details
          </button>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 5: ONLINE MOCK TEST / PRACTICE TEST
   ========================================================================= */
const MockTestTool: React.FC<{ exam: ExamRecord; onNavigate: (page: ActivePage, slug?: string) => void }> = ({
  exam
}) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(900); // 15 minutes

  // Tailored questions matching exam pattern
  const questions = [
    {
      id: 1,
      section: 'General Awareness',
      q: `Under which Article of the Constitution of India is the recruitment conducted by ${exam.organization.includes('SSC') ? 'Staff Selection bodies' : 'Public Service Commissions'} governed?`,
      options: ['Article 315 to 323', 'Article 280', 'Article 324', 'Article 148'],
      correct: 0,
      explanation: 'Articles 315-323 of the Constitution provide for Public Service Commissions for the Union and for the States.'
    },
    {
      id: 2,
      section: 'Quantitative Aptitude',
      q: 'A train 180 meters long running at 54 km/h takes how many seconds to cross a telegraph post?',
      options: ['10 Seconds', '12 Seconds', '15 Seconds', '18 Seconds'],
      correct: 1,
      explanation: 'Speed = 54 × (5/18) = 15 m/s. Time = Distance / Speed = 180 / 15 = 12 seconds.'
    },
    {
      id: 3,
      section: 'General Intelligence & Reasoning',
      q: 'Select the related word from the given alternatives: Court : Judge :: Examination : ?',
      options: ['Student', 'Invigilator', 'Degree', 'Paper'],
      correct: 1,
      explanation: 'A Judge presides over a Court; an Invigilator presides over and oversees an Examination.'
    },
    {
      id: 4,
      section: 'English Comprehension',
      q: 'Choose the correct synonym of the word "CANDID":',
      options: ['Deceptive', 'Frank / Outspoken', 'Cruel', 'Secretive'],
      correct: 1,
      explanation: 'Candid means truthful, straightforward, and frank.'
    },
    {
      id: 5,
      section: 'Current Affairs & Policy',
      q: `What is the educational qualification benchmark for ${exam.examName}?`,
      options: [
        exam.education.join(' / '),
        'PhD Only',
        '8th Pass Only',
        'Foreign Diploma'
      ],
      correct: 0,
      explanation: `The official benchmark prescribed in the notification is ${exam.education.join(' / ')}.`
    }
  ];

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeftSeconds]);

  const handleSelectOption = (qIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };

  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;

  // Score Calculation
  const totalQuestions = questions.length;
  let correctCount = 0;
  let wrongCount = 0;

  questions.forEach((q, idx) => {
    if (selectedAnswers[idx] !== undefined) {
      if (selectedAnswers[idx] === q.correct) {
        correctCount += 1;
      } else {
        wrongCount += 1;
      }
    }
  });

  const rawScore = correctCount * 2 - wrongCount * 0.5;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Test Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
            CBT Online Simulation Mode
          </span>
          <h2 className="text-xl font-black text-slate-900 font-display mt-1">
            {exam.examName} Mock Test
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-mono font-bold shadow-xs">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>

          {!isSubmitted && (
            <button
              onClick={() => setIsSubmitted(true)}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
            >
              Submit Test
            </button>
          )}
        </div>
      </div>

      {isSubmitted ? (
        /* Result Scorecard */
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-6 text-center">
            <Award className="w-12 h-12 mx-auto mb-2 text-amber-300" />
            <h3 className="text-2xl font-black font-display">Mock Test Completed</h3>
            <p className="text-xs text-emerald-100 mt-1">
              Your test has been scored with 0.5 negative marking per incorrect answer.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 max-w-2xl mx-auto text-slate-900">
              <div className="bg-white rounded-xl p-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Questions</span>
                <strong className="text-xl font-black text-slate-900">{totalQuestions}</strong>
              </div>
              <div className="bg-white rounded-xl p-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Correct (+2)</span>
                <strong className="text-xl font-black text-emerald-600">{correctCount}</strong>
              </div>
              <div className="bg-white rounded-xl p-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Wrong (-0.5)</span>
                <strong className="text-xl font-black text-red-600">{wrongCount}</strong>
              </div>
              <div className="bg-white rounded-xl p-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Net Score</span>
                <strong className="text-xl font-black text-blue-700">{rawScore} / 10</strong>
              </div>
            </div>
          </div>

          {/* Explanations & Review */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 font-display">
              Detailed Question Analysis &amp; Answer Key
            </h4>

            {questions.map((q, idx) => {
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns === q.correct;
              const isSkipped = userAns === undefined;

              return (
                <div key={q.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-700">Q{idx + 1}. {q.section}</span>
                    <span
                      className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : isSkipped
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {isCorrect ? 'Correct (+2)' : isSkipped ? 'Skipped (0)' : 'Wrong (-0.5)'}
                    </span>
                  </div>

                  <p className="text-slate-900 font-semibold text-sm">{q.q}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correct;
                      const isOptionSelected = optIdx === userAns;

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                            isOptionCorrect
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                              : isOptionSelected
                              ? 'bg-red-50 border-red-300 text-red-900'
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          <span>{opt}</span>
                          {isOptionCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2 text-slate-500 text-[11px] bg-white p-2.5 rounded-xl border border-slate-200">
                    <strong>Explanation:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setSelectedAnswers({});
                setTimeLeftSeconds(900);
                setActiveQuestion(0);
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
            >
              Re-take Practice Test
            </button>
          </div>
        </div>
      ) : (
        /* Active Test Question Flow */
        <div className="space-y-6">
          {/* Question Navigation Bubbles */}
          <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-100">
            {questions.map((_, idx) => {
              const isCurrent = activeQuestion === idx;
              const isAnswered = selectedAnswers[idx] !== undefined;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveQuestion(idx)}
                  className={`w-9 h-9 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                      : isAnswered
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Current Question */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Question {activeQuestion + 1} of {totalQuestions} • {questions[activeQuestion].section}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              {questions[activeQuestion].q}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {questions[activeQuestion].options.map((option, idx) => {
                const isSelected = selectedAnswers[activeQuestion] === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(activeQuestion, idx)}
                    className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    <span>{option}</span>
                    {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              disabled={activeQuestion === 0}
              onClick={() => setActiveQuestion((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Previous
            </button>

            {activeQuestion < totalQuestions - 1 ? (
              <button
                onClick={() => setActiveQuestion((prev) => Math.min(totalQuestions - 1, prev + 1))}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={() => setIsSubmitted(true)}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Finish &amp; Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
