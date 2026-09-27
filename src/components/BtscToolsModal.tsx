import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Clock,
  Calculator,
  Award,
  FileCheck,
  Percent,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface BtscToolsModalProps {
  tool: string | null;
  onClose: () => void;
}

export const BtscToolsModal: React.FC<BtscToolsModalProps> = ({ tool, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>(tool || 'eligibility');

  useEffect(() => {
    if (tool) {
      setActiveTab(tool);
    }
  }, [tool]);

  // ===================== 1. ELIGIBILITY STATE =====================
  const [degree, setDegree] = useState<string>('bvsc_ah');
  const [isVciRecognized, setIsVciRecognized] = useState<boolean>(true);
  const [hasBiharCouncilReg, setHasBiharCouncilReg] = useState<boolean>(true);
  const [isIndianCitizen, setIsIndianCitizen] = useState<boolean>(true);

  // ===================== 2. AGE STATE =====================
  const [dob, setDob] = useState<string>('1998-05-15');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [category, setCategory] = useState<string>('ur');
  const [isBiharDomicile, setIsBiharDomicile] = useState<boolean>(true);
  const [isPwbd, setIsPwbd] = useState<boolean>(false);
  const [isExServiceman, setIsExServiceman] = useState<boolean>(false);
  const [serviceYears, setServiceYears] = useState<number>(5);

  // ===================== 3. EXPERIENCE STATE =====================
  const [expStartDate, setExpStartDate] = useState<string>('2023-01-01');
  const [expEndDate, setExpEndDate] = useState<string>('2026-08-01');
  const [isInBiharGovt, setIsInBiharGovt] = useState<boolean>(true);

  // ===================== 4. CBT MARKS STATE =====================
  const [correctCount, setCorrectCount] = useState<number>(72);
  const [wrongCount, setWrongCount] = useState<number>(16);
  const totalQuestions = 100;

  // ===================== 5. SELECTION COMPOSITE STATE =====================
  const [simCbtScore, setSimCbtScore] = useState<number>(68);
  const [simExpYears, setSimExpYears] = useState<number>(2.5);

  // ===================== 6. DOCUMENT CHECKLIST STATE =====================
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    doc_10th: true,
    doc_bvsc_degree: true,
    doc_bvsc_marks: true,
    doc_bihar_council: true,
    doc_photo: true,
    doc_sign: true,
    doc_domicile: true,
    doc_caste: false,
    doc_ews: false,
    doc_exp_cert: false,
    doc_pwbd: false
  });

  if (!tool) return null;

  // ----------------- CALCULATIONS -----------------
  // Age Calculation as on 01 August 2026
  const calcAge = () => {
    const birth = new Date(dob);
    const cutOff = new Date('2026-08-01');
    if (isNaN(birth.getTime())) return null;

    let years = cutOff.getFullYear() - birth.getFullYear();
    let months = cutOff.getMonth() - birth.getMonth();
    let days = cutOff.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(cutOff.getFullYear(), cutOff.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Determine Max Age
    let maxAge = 37;
    const cat = isBiharDomicile ? category : 'ur';
    if (cat === 'ur' && gender === 'female') maxAge = 40;
    if (cat === 'bc' || cat === 'ebc') maxAge = 40;
    if (cat === 'sc' || cat === 'st') maxAge = 42;
    if (cat === 'ews') maxAge = gender === 'female' ? 40 : 37;

    if (isPwbd && isBiharDomicile) {
      maxAge += 10;
    }
    if (isExServiceman) {
      maxAge = Math.min(57, maxAge + serviceYears + 3);
    }

    const isEligible = years >= 21 && years <= maxAge;
    return { years, months, days, maxAge, isEligible };
  };

  const ageData = calcAge();

  // Experience Calculation
  const calcExperience = () => {
    const start = new Date(expStartDate);
    const end = new Date(expEndDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
      return { years: 0, months: 0, days: 0, marks: 0 };
    }
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalYears = totalDays / 365.25;

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const marks = isInBiharGovt ? Math.min(25, +(totalYears * 5).toFixed(2)) : 0;
    return { years, months, days, totalDays, marks };
  };

  const expData = calcExperience();

  // CBT Calculation
  const unattempted = Math.max(0, totalQuestions - (correctCount + wrongCount));
  const cbtNegative = +(wrongCount * 0.25).toFixed(2);
  const cbtNetScore = +(correctCount * 1.0 - cbtNegative).toFixed(2);
  const attempted = correctCount + wrongCount;
  const accuracy = attempted > 0 ? +((correctCount / attempted) * 100).toFixed(1) : 0;

  // Composite Selection Calculation
  const cbtWeightageMarks = +((simCbtScore / 100) * 75).toFixed(2);
  const expWeightageMarks = Math.min(25, +(simExpYears * 5).toFixed(2));
  const finalCompositeScore = +(cbtWeightageMarks + expWeightageMarks).toFixed(2);

  // Eligibility evaluation
  const isDegreeEligible = (degree === 'bvsc' || degree === 'bvsc_ah') && isVciRecognized;
  const isOverallEligible = isDegreeEligible && hasBiharCouncilReg && isIndianCitizen;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full my-6 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 bg-slate-800 rounded-xl">🐄</span>
            <div>
              <h3 className="text-base sm:text-lg font-black font-display text-white">
                BTSC Touring Veterinary Officer Tools (Advt 27/2026)
              </h3>
              <p className="text-xs text-slate-400">
                Official Calculators, Eligibility Verifiers &amp; Marks Evaluators
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50 p-2 gap-1.5 scrollbar-thin">
          {[
            { id: 'eligibility', label: 'Eligibility Checker', icon: CheckCircle2 },
            { id: 'age', label: 'Age Calculator', icon: Calendar },
            { id: 'experience', label: 'Experience Tool', icon: Award },
            { id: 'cbt', label: 'CBT Marks Calculator', icon: Calculator },
            { id: 'selection', label: 'Composite Merit (100M)', icon: Percent },
            { id: 'vacancies', label: '787 Vacancies Chart', icon: Layers },
            { id: 'checklist', label: 'DV Checklist', icon: FileCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-xs sm:text-sm">
          {/* TAB 1: ELIGIBILITY CHECKER */}
          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl">
                <h4 className="font-bold text-blue-950 text-sm mb-1">
                  Educational &amp; Council Registration Checker
                </h4>
                <p className="text-xs text-slate-600">
                  Verify whether your veterinary qualifications satisfy the statutory rules of Advt. No. 27/2026.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Degree Held</label>
                  <select
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-semibold"
                  >
                    <option value="bvsc_ah">B.V.Sc. &amp; A.H. (Bachelor of Veterinary Science &amp; A.H.)</option>
                    <option value="bvsc">B.V.Sc. (Bachelor of Veterinary Science)</option>
                    <option value="other_science">Other Science / Agriculture Degree</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">VCI Recognized University?</label>
                  <select
                    value={isVciRecognized ? 'yes' : 'no'}
                    onChange={(e) => setIsVciRecognized(e.target.value === 'yes')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-semibold"
                  >
                    <option value="yes">Yes – University recognized by VCI</option>
                    <option value="no">No / Unrecognized</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Permanent Bihar Council Registration?</label>
                  <select
                    value={hasBiharCouncilReg ? 'yes' : 'no'}
                    onChange={(e) => setHasBiharCouncilReg(e.target.value === 'yes')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-semibold"
                  >
                    <option value="yes">Yes – Permanently registered with Bihar Veterinary Council</option>
                    <option value="no">No / Other State / Pending</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nationality</label>
                  <select
                    value={isIndianCitizen ? 'yes' : 'no'}
                    onChange={(e) => setIsIndianCitizen(e.target.value === 'yes')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-semibold"
                  >
                    <option value="yes">Citizen of India</option>
                    <option value="no">Other</option>
                  </select>
                </div>
              </div>

              {/* Status Outcome */}
              <div
                className={`p-4 rounded-2xl border ${
                  isOverallEligible
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-red-50 border-red-300 text-red-900'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  {isOverallEligible ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Provisionally Eligible for BTSC Touring Veterinary Officer</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span>Ineligible under Advt. No. 27/2026 Conditions</span>
                    </>
                  )}
                </div>
                <p className="text-xs mt-1.5 leading-relaxed">
                  {isOverallEligible
                    ? 'You fulfill the essential educational qualifications and council registration requirements. Ensure your certificates are valid on 23 October 2026.'
                    : !isDegreeEligible
                    ? 'Official rule requires B.V.Sc. or B.V.Sc. & A.H. from a Veterinary Council of India (VCI) recognized institution.'
                    : !hasBiharCouncilReg
                    ? 'Permanent registration with Bihar Veterinary Council is mandatory. Without this registration, candidature is disqualified.'
                    : 'Must be an Indian Citizen.'}
                </p>
                <p className="text-[11px] text-slate-500 mt-2 italic">
                  Notice: Final eligibility is subject to the official notification and document verification.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: AGE CUT-OFF CALCULATOR */}
          {activeTab === 'age' && (
            <div className="space-y-4">
              <div className="p-4 bg-purple-50/80 border border-purple-200 rounded-2xl">
                <h4 className="font-bold text-purple-950 text-sm mb-1">
                  Age Cut-Off Calculator (Cut-Off: 01 August 2026)
                </h4>
                <p className="text-xs text-slate-600">
                  Calculates your exact age as on 01.08.2026 and verifies statutory relaxation limits under Bihar Government rules.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Date of Birth</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white font-semibold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold"
                  >
                    <option value="ur">Unreserved (UR)</option>
                    <option value="ews">Economically Weaker Section (EWS)</option>
                    <option value="bc">Backward Class (BC)</option>
                    <option value="ebc">Extremely Backward Class (EBC)</option>
                    <option value="sc">Scheduled Caste (SC)</option>
                    <option value="st">Scheduled Tribe (ST)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <label className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isBiharDomicile}
                    onChange={(e) => setIsBiharDomicile(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span className="font-bold text-xs text-slate-700">Bihar Domicile?</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPwbd}
                    onChange={(e) => setIsPwbd(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span className="font-bold text-xs text-slate-700">PwBD Divyang (+10 Yrs)?</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isExServiceman}
                    onChange={(e) => setIsExServiceman(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span className="font-bold text-xs text-slate-700">Ex-Servicemen (Max 57)?</span>
                </label>
              </div>

              {ageData && (
                <div
                  className={`p-4 rounded-2xl border ${
                    ageData.isEligible
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-red-50 border-red-300 text-red-950'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-slate-500">Calculated Age on 01.08.2026:</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-black bg-white border border-slate-200">
                      Applicable Limit: 21 to {ageData.maxAge} Years
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-mono mt-1">
                    {ageData.years} Years, {ageData.months} Months, {ageData.days} Days
                  </div>
                  <div className="mt-2 text-xs font-semibold">
                    {ageData.isEligible ? (
                      <span className="text-emerald-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Eligible by Age for BTSC Touring Veterinary Officer 2026</span>
                      </span>
                    ) : (
                      <span className="text-red-700 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" />
                        <span>
                          {ageData.years < 21
                            ? 'Below minimum age requirement of 21 years on 01.08.2026.'
                            : `Exceeds maximum permitted limit of ${ageData.maxAge} years.`}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: WORK EXPERIENCE CALCULATOR */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl">
                <h4 className="font-bold text-emerald-950 text-sm mb-1">
                  Contractual Experience Marks Calculator (Max 25 Marks)
                </h4>
                <p className="text-xs text-slate-600">
                  Awarded for contractual veterinary service in Animal &amp; Fisheries Resources Dept, Govt. of Bihar at 5 marks per completed year.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Service Start Date</label>
                  <input
                    type="date"
                    value={expStartDate}
                    onChange={(e) => setExpStartDate(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white font-semibold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Service End Date (or 01.08.2026)</label>
                  <input
                    type="date"
                    value={expEndDate}
                    onChange={(e) => setExpEndDate(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-white font-semibold"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isInBiharGovt}
                  onChange={(e) => setIsInBiharGovt(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600"
                />
                <span className="font-bold text-xs text-slate-700">
                  Rendered in Bihar Govt Animal &amp; Fisheries Resources Department with Competent Certificate?
                </span>
              </label>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">Calculated Service Duration:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {expData.years} Yrs, {expData.months} Mos, {expData.days} Days ({expData.totalDays || 0} Days)
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-800">Experience Weightage Marks Awarded:</span>
                  <span className="text-xl font-black font-mono text-emerald-700">
                    {expData.marks} / 25.00 Marks
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 italic mt-1">
                  Formula: 5 Marks per completed year + pro-rata days. Maximum ceiling is strictly 25 Marks.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: CBT MARKS CALCULATOR */}
          {activeTab === 'cbt' && (
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50/80 border border-indigo-200 rounded-2xl">
                <h4 className="font-bold text-indigo-950 text-sm mb-1">
                  CBT Examination Marks &amp; Accuracy Calculator (100 Questions)
                </h4>
                <p className="text-xs text-slate-600">
                  Evaluate your test score with +1.00 for correct answers and -0.25 penalty for incorrect answers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-bold text-emerald-700 block mb-1">Correct Answers (+1)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={correctCount}
                    onChange={(e) => setCorrectCount(Math.min(100, Math.max(0, +e.target.value)))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold text-emerald-700"
                  />
                </div>
                <div>
                  <label className="font-bold text-red-600 block mb-1">Wrong Answers (-0.25)</label>
                  <input
                    type="number"
                    min="0"
                    max={100 - correctCount}
                    value={wrongCount}
                    onChange={(e) => setWrongCount(Math.min(100 - correctCount, Math.max(0, +e.target.value)))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold text-red-600"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-500 block mb-1">Unattempted (0)</label>
                  <input
                    type="number"
                    readOnly
                    value={unattempted}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-100 font-mono font-bold text-slate-600 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Attempted</span>
                  <span className="text-base font-black text-slate-800">{attempted} / 100</span>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-center">
                  <span className="text-[10px] uppercase font-bold text-red-600 block">Penalty Deducted</span>
                  <span className="text-base font-black text-red-700">-{cbtNegative} Marks</span>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-center">
                  <span className="text-[10px] uppercase font-bold text-blue-600 block">Accuracy %</span>
                  <span className="text-base font-black text-blue-700">{accuracy}%</span>
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block">Net CBT Score</span>
                  <span className="text-base font-black text-emerald-800">{cbtNetScore} / 100</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: COMPOSITE SELECTION SCORE (100 MARKS) */}
          {activeTab === 'selection' && (
            <div className="space-y-4">
              <div className="p-4 bg-purple-50/80 border border-purple-200 rounded-2xl">
                <h4 className="font-bold text-purple-950 text-sm mb-1">
                  Selection Composite Merit Calculator (Max 100 Marks)
                </h4>
                <p className="text-xs text-slate-600">
                  BTSC Formula: CBT Weightage (75%) + Contractual Experience (up to 25 Marks).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">CBT Score (out of 100)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.5"
                    value={simCbtScore}
                    onChange={(e) => setSimCbtScore(Math.min(100, Math.max(0, +e.target.value)))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    75% Weightage = {cbtWeightageMarks} / 75.00 Marks
                  </span>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Years of Bihar Govt Service</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={simExpYears}
                    onChange={(e) => setSimExpYears(Math.max(0, +e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Experience Points = {expWeightageMarks} / 25.00 Marks
                  </span>
                </div>
              </div>

              <div className="p-5 bg-slate-900 text-white rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Component A: CBT Score (75% Weightage)</span>
                  <span className="font-mono font-bold text-white">{cbtWeightageMarks} Marks</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Component B: Experience Weightage (Max 25)</span>
                  <span className="font-mono font-bold text-white">{expWeightageMarks} Marks</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <span className="text-sm font-bold text-yellow-400">Total Composite Merit Score:</span>
                  <span className="text-2xl font-black font-mono text-emerald-400">
                    {finalCompositeScore} / 100.00
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: 787 VACANCIES VISUALIZER */}
          {activeTab === 'vacancies' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  787 Total Posts – Category &amp; Women Reservation Matrix
                </h4>
                <p className="text-xs text-slate-600">
                  Official distribution of vacancies under Advt. No. 27/2026 including 35% horizontal reservation for women.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { cat: 'Unreserved (UR)', code: '01', total: 228, women: 75, color: 'border-blue-400 bg-blue-50/60' },
                  { cat: 'Scheduled Caste (SC)', code: '02', total: 207, women: 68, color: 'border-indigo-400 bg-indigo-50/60' },
                  { cat: 'Extremely Backward (EBC)', code: '04', total: 195, women: 64, color: 'border-purple-400 bg-purple-50/60' },
                  { cat: 'Backward Class (BC)', code: '05', total: 89, women: 31, color: 'border-amber-400 bg-amber-50/60' },
                  { cat: 'EWS (Economically Weaker)', code: '07', total: 55, women: 19, color: 'border-emerald-400 bg-emerald-50/60' },
                  { cat: 'Scheduled Tribe (ST)', code: '03', total: 13, women: 4, color: 'border-rose-400 bg-rose-50/60' }
                ].map((item, idx) => (
                  <div key={idx} className={`p-3.5 rounded-xl border ${item.color}`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase text-slate-500">Code {item.code}</span>
                      <span className="text-xs font-black px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                        {item.total} Posts
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 text-xs mt-1">{item.cat}</div>
                    <div className="text-[11px] text-pink-700 font-semibold mt-1">
                      ♀ 35% Women: {item.women} Posts
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: DV CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="p-4 bg-teal-50/80 border border-teal-200 rounded-2xl">
                <h4 className="font-bold text-teal-950 text-sm mb-1">
                  Document Verification (DV) Pre-Flight Checklist
                </h4>
                <p className="text-xs text-slate-600">
                  Ensure all mandatory original certificates and self-attested photocopies are organized for verification.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { key: 'doc_10th', label: 'Class 10th Matric Certificate / Marksheet (Proof of DOB)' },
                  { key: 'doc_bvsc_degree', label: 'B.V.Sc. / B.V.Sc. & A.H. Degree Certificate (Original / Provisional)' },
                  { key: 'doc_bvsc_marks', label: 'All Semester / Year Marksheets of B.V.Sc. Degree' },
                  { key: 'doc_bihar_council', label: 'Permanent Registration Certificate of Bihar Veterinary Council (Mandatory)' },
                  { key: 'doc_photo', label: '5 Passport Photographs identical to uploaded photo' },
                  { key: 'doc_sign', label: 'Photo Identity Proof (Aadhaar Card / Voter ID / PAN Card)' },
                  { key: 'doc_domicile', label: 'Bihar Domicile / Residence Certificate (for reservation & fee concession)' },
                  { key: 'doc_caste', label: 'Caste Certificate & Non-Creamy Layer (NCL) for BC / EBC' },
                  { key: 'doc_ews', label: 'EWS Income & Asset Certificate (issued for 2026-27)' },
                  { key: 'doc_exp_cert', label: 'Bihar Govt Contractual Veterinary Service Certificate in prescribed format' },
                  { key: 'doc_pwbd', label: 'Divyang / PwBD Disability Certificate (40% or above from Medical Board)' }
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-100 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checkedDocs[item.key] || false}
                      onChange={(e) =>
                        setCheckedDocs((prev) => ({ ...prev, [item.key]: e.target.checked }))
                      }
                      className="w-4 h-4 rounded text-blue-600"
                    />
                    <span className="text-xs font-semibold text-slate-800">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Bihar Technical Service Commission (BTSC) – Advt 27/2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg cursor-pointer transition-colors"
          >
            Close Tools
          </button>
        </div>
      </div>
    </div>
  );
};
