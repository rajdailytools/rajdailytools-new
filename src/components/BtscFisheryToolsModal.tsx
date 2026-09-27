import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Calculator,
  Award,
  FileCheck,
  Percent,
  Layers,
  ArrowRight
} from 'lucide-react';

interface BtscFisheryToolsModalProps {
  tool: string | null;
  onClose: () => void;
}

const normalizeTab = (t?: string | null): string => {
  if (!t) return 'eligibility';
  if (t === 'documents') return 'checklist';
  if (t === 'matrix') return 'vacancies';
  return t;
};

export const BtscFisheryToolsModal: React.FC<BtscFisheryToolsModalProps> = ({ tool, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>(normalizeTab(tool));

  useEffect(() => {
    if (tool) {
      setActiveTab(normalizeTab(tool));
    }
  }, [tool]);

  // ===================== 1. QUALIFICATION ELIGIBILITY STATE =====================
  const [hasPgDegree, setHasPgDegree] = useState<string>('yes_2yr_pg');
  const [isFisheriesDiscipline, setIsFisheriesDiscipline] = useState<string>('fisheries_science');
  const [isIcarRecognized, setIsIcarRecognized] = useState<boolean>(true);
  const [degreeCompletedDate, setDegreeCompletedDate] = useState<string>('before_cutoff');
  const [isIndianCitizen, setIsIndianCitizen] = useState<boolean>(true);

  // ===================== 2. AGE ELIGIBILITY STATE =====================
  const [dob, setDob] = useState<string>('1998-05-15');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [category, setCategory] = useState<string>('ur');
  const [isBiharDomicile, setIsBiharDomicile] = useState<boolean>(true);
  const [isPwbd, setIsPwbd] = useState<boolean>(false);
  const [isExServiceman, setIsExServiceman] = useState<boolean>(false);
  const [serviceYears, setServiceYears] = useState<number>(5);

  // ===================== 3. EXPERIENCE STATE =====================
  const [expCompletedYears, setExpCompletedYears] = useState<number>(3);
  const [isBiharGovtFisheries, setIsBiharGovtFisheries] = useState<boolean>(true);
  const [hasValidCertificate, setHasValidCertificate] = useState<boolean>(true);

  // ===================== 4. CBT MARKS STATE =====================
  const [correctCount, setCorrectCount] = useState<number>(75);
  const [wrongCount, setWrongCount] = useState<number>(16);
  const totalQuestions = 100;

  // ===================== 5. SELECTION COMPOSITE STATE =====================
  const [simCbtScore, setSimCbtScore] = useState<number>(70);
  const [simExpYears, setSimExpYears] = useState<number>(3);

  // ===================== 6. DOCUMENT CHECKLIST STATE =====================
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    doc_10th: true,
    doc_12th: true,
    doc_grad: true,
    doc_pg_degree: true,
    doc_icar_proof: true,
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

    if (cat === 'ur' && gender === 'male') {
      maxAge = 37;
    } else if (cat === 'ur' && gender === 'female') {
      maxAge = 40;
    } else if (cat === 'bc' || cat === 'ebc' || cat === 'bcw') {
      maxAge = 40;
    } else if (cat === 'sc' || cat === 'st') {
      maxAge = 42;
    } else if (cat === 'ews') {
      maxAge = gender === 'female' ? 40 : 37;
    }

    if (isPwbd) {
      maxAge += 10;
    }

    if (isExServiceman) {
      maxAge = Math.min(57, maxAge + serviceYears + 3);
    }

    const isMinEligible = years >= 21;
    const isMaxEligible = years < maxAge || (years === maxAge && months === 0 && days === 0);
    const isEligible = isMinEligible && isMaxEligible;

    return {
      years,
      months,
      days,
      maxAge,
      isMinEligible,
      isMaxEligible,
      isEligible
    };
  };

  const ageResult = calcAge();

  // Qualification Eligibility Calculation
  const isQualEligible =
    hasPgDegree === 'yes_2yr_pg' &&
    isFisheriesDiscipline === 'fisheries_science' &&
    isIcarRecognized &&
    degreeCompletedDate === 'before_cutoff' &&
    isIndianCitizen;

  // Experience Marks Calculation
  const calcExpMarks = () => {
    if (!isBiharGovtFisheries || !hasValidCertificate) return 0;
    const rawMarks = expCompletedYears * 5;
    return Math.min(25, Math.max(0, rawMarks));
  };
  const expMarks = calcExpMarks();

  // CBT Marks Calculation
  const safeCorrect = Math.max(0, Math.min(totalQuestions, Number(correctCount) || 0));
  const safeWrong = Math.max(0, Math.min(totalQuestions - safeCorrect, Number(wrongCount) || 0));
  const unattempted = totalQuestions - safeCorrect - safeWrong;
  const attempted = safeCorrect + safeWrong;
  const positiveMarks = safeCorrect * 1.0;
  const negativePenalty = safeWrong * 0.25;
  const rawCbtScore = positiveMarks - negativePenalty;
  const scaledCbtScore = (rawCbtScore / totalQuestions) * 75;
  const accuracyPct = attempted > 0 ? ((safeCorrect / attempted) * 100).toFixed(1) : '0.0';
  const qualifies30Pct = rawCbtScore >= 30.0;

  // Composite Selection Calculation
  const compCbtPart = (Math.max(0, Math.min(100, simCbtScore)) / 100) * 75;
  const compExpPart = Math.min(25, Math.max(0, simExpYears * 5));
  const totalCompositeScore = compCbtPart + compExpPart;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-blue-600/30 text-blue-400 rounded-xl border border-blue-500/30">
              <Calculator className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white font-display">
                BTSC Fishery Extension Officer 2026 – Candidate Utility Tools
              </h3>
              <p className="text-xs text-slate-300">
                Official Advt. 28/2026 • Fisheries Directorate, Bihar • 231 Posts
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-2 bg-slate-100 border-b border-slate-200 overflow-x-auto text-xs font-semibold">
          {[
            { id: 'eligibility', label: 'Qualification Check', icon: CheckCircle2 },
            { id: 'age', label: 'Age Calculator', icon: Calendar },
            { id: 'experience', label: 'Experience Marks', icon: Award },
            { id: 'cbt', label: 'CBT Marks Calculator', icon: Calculator },
            { id: 'selection', label: 'Composite Score', icon: Percent },
            { id: 'vacancies', label: '231 Vacancy Matrix', icon: Layers },
            { id: 'checklist', label: 'DV Checklist', icon: FileCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 py-2 px-3 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* TAB 1: QUALIFICATION ELIGIBILITY */}
          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl">
                <h4 className="font-bold text-sm text-blue-950 font-display mb-1">
                  Statutory Qualification Criteria (Advt. No. 28/2026)
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Two-year Post Graduate Degree in Fisheries Science from a university/institution under an Agricultural University recognised by the Indian Council of Agricultural Research (ICAR), New Delhi.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    1. Post Graduate Degree Status
                  </label>
                  <select
                    value={hasPgDegree}
                    onChange={(e) => setHasPgDegree(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all font-medium"
                  >
                    <option value="yes_2yr_pg">Yes, 2-Year Post Graduate Degree (M.F.Sc. / Equiv.)</option>
                    <option value="bfsc_only">Only 4-Year B.F.Sc. Bachelor Degree (No PG)</option>
                    <option value="pursuing">Currently Pursuing / Final Year Result Awaited</option>
                    <option value="no">Other Qualification / No Fisheries Degree</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    2. Discipline / Subject of Degree
                  </label>
                  <select
                    value={isFisheriesDiscipline}
                    onChange={(e) => setIsFisheriesDiscipline(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all font-medium"
                  >
                    <option value="fisheries_science">Fisheries Science (मत्स्य विज्ञान / M.F.Sc.)</option>
                    <option value="zoology">Zoology (General M.Sc.)</option>
                    <option value="agriculture">General Agriculture / Botany</option>
                    <option value="other">Other Unrelated Field</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="checkbox"
                    id="icar_check"
                    checked={isIcarRecognized}
                    onChange={(e) => setIsIcarRecognized(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 cursor-pointer"
                  />
                  <label htmlFor="icar_check" className="text-xs font-semibold text-slate-800 cursor-pointer">
                    Awarded by an ICAR-Recognized Agricultural University
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="checkbox"
                    id="citizen_check"
                    checked={isIndianCitizen}
                    onChange={(e) => setIsIndianCitizen(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 cursor-pointer"
                  />
                  <label htmlFor="citizen_check" className="text-xs font-semibold text-slate-800 cursor-pointer">
                    Citizen of India (भारतीय नागरिक)
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Degree Passing Date / Final Result Declaration
                </label>
                <select
                  value={degreeCompletedDate}
                  onChange={(e) => setDegreeCompletedDate(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all font-medium"
                >
                  <option value="before_cutoff">On or Before 23 October 2026 (Eligible)</option>
                  <option value="after_cutoff">After 23 October 2026 (Ineligible)</option>
                </select>
              </div>

              {/* Result Banner */}
              <div
                className={`p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 ${
                  isQualEligible
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-red-50 border-red-300 text-red-950'
                }`}
              >
                {isQualEligible ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <h5 className="font-bold text-sm">
                    {isQualEligible ? 'Provisionally Eligible (Educational Criteria Met)' : 'Not Eligible Under Prescribed Rules'}
                  </h5>
                  <p className="mt-1 leading-relaxed text-xs">
                    {isQualEligible
                      ? 'You hold the prescribed 2-year Post Graduate Degree in Fisheries Science from an ICAR-recognised Agricultural University completed on or before the crucial last date.'
                      : 'You do not fulfill the statutory requirement of a 2-year Post Graduate Degree in Fisheries Science from an ICAR-recognized Agricultural University completed on or before 23 October 2026.'}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-2 font-normal italic">
                    Note: Final eligibility is subject to the official notification and original document verification by BTSC Patna.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AGE CALCULATOR */}
          {activeTab === 'age' && (
            <div className="space-y-4">
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-xs text-purple-950">
                <strong>Crucial Age Calculation Date:</strong> Age is calculated precisely as on <strong>01 August 2026 (01.08.2026)</strong>.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Social Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="ur">Unreserved (UR)</option>
                    <option value="ews">EWS (Bihar)</option>
                    <option value="bc">BC (Backward Class)</option>
                    <option value="ebc">EBC (Extremely Backward Class)</option>
                    <option value="sc">SC (Scheduled Caste)</option>
                    <option value="st">ST (Scheduled Tribe)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="checkbox"
                    id="domicile_check"
                    checked={isBiharDomicile}
                    onChange={(e) => setIsBiharDomicile(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300"
                  />
                  <label htmlFor="domicile_check" className="text-xs font-semibold text-slate-800">
                    Bihar Domicile
                  </label>
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="checkbox"
                    id="pwbd_check"
                    checked={isPwbd}
                    onChange={(e) => setIsPwbd(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300"
                  />
                  <label htmlFor="pwbd_check" className="text-xs font-semibold text-slate-800">
                    Divyang (PwD 40%+)
                  </label>
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="checkbox"
                    id="ex_check"
                    checked={isExServiceman}
                    onChange={(e) => setIsExServiceman(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300"
                  />
                  <label htmlFor="ex_check" className="text-xs font-semibold text-slate-800">
                    Ex-Serviceman
                  </label>
                </div>
              </div>

              {isExServiceman && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Completed Armed Forces Service (in Years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="35"
                    value={serviceYears}
                    onChange={(e) => setServiceYears(Number(e.target.value) || 0)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              )}

              {/* Age Summary Card */}
              {ageResult && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-bold block">
                        Age as on 01.08.2026
                      </span>
                      <span className="text-lg font-bold font-mono text-slate-900">
                        {ageResult.years} Years, {ageResult.months} Months, {ageResult.days} Days
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-slate-500 uppercase font-bold block">
                        Category Max Age Limit
                      </span>
                      <span className="text-lg font-bold font-mono text-purple-900">
                        {ageResult.maxAge} Years
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-xl flex items-center gap-2 text-xs font-bold ${
                      ageResult.isEligible
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-red-100 text-red-900 border border-red-300'
                    }`}
                  >
                    {ageResult.isEligible ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
                    )}
                    <span>
                      {ageResult.isEligible
                        ? 'Eligible on Age: Within the permissible range (Min 21 Years to Max ' + ageResult.maxAge + ' Years)'
                        : !ageResult.isMinEligible
                        ? 'Underage: Must be at least 21 years old as on 01.08.2026.'
                        : 'Overage: Exceeds maximum age limit of ' + ageResult.maxAge + ' Years for this category.'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Final eligibility is subject to the official notification and document verification.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CONTRACTUAL EXPERIENCE MARKS */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950">
                <strong>Official Rule (Advt. 28/2026):</strong> 05 Marks per completed full year of contractual service in the Department of Animal &amp; Fisheries Resources, Government of Bihar. <strong>Maximum 25 Marks</strong>.
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="checkbox"
                    id="bihar_govt_fish"
                    checked={isBiharGovtFisheries}
                    onChange={(e) => setIsBiharGovtFisheries(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300"
                  />
                  <label htmlFor="bihar_govt_fish" className="text-xs font-semibold text-slate-800">
                    Contractual service in Fisheries Directorate, Bihar (मत्स्य निदेशालय, बिहार सरकार)
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <input
                    type="checkbox"
                    id="valid_cert_check"
                    checked={hasValidCertificate}
                    onChange={(e) => setHasValidCertificate(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300"
                  />
                  <label htmlFor="valid_cert_check" className="text-xs font-semibold text-slate-800">
                    Have experience certificate signed by competent authority (Director of Fisheries / DFO)
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Number of Completed Full Years of Service
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    step="1"
                    value={expCompletedYears}
                    onChange={(e) => setExpCompletedYears(Number(e.target.value) || 0)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Enter full completed years. (e.g., 3 years = 15 marks; 5+ years = 25 marks maximum).
                  </p>
                </div>
              </div>

              {/* Experience Result Box */}
              <div className="p-4 bg-emerald-50/70 border border-emerald-300 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-emerald-800 font-bold uppercase block">
                    Calculated Experience Weightage
                  </span>
                  <span className="text-2xl font-bold font-mono text-emerald-900">
                    {expMarks.toFixed(1)} / 25 Marks
                  </span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {expCompletedYears >= 5
                      ? 'Maximum cap of 25 marks reached.'
                      : `${expCompletedYears} year(s) × 5 marks = ${expMarks} marks.`}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                    Advt 28/2026 Rule
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                Notice: The calculator does not guarantee selection or award of marks. Marks are subject to official verification of service records by BTSC.
              </p>
            </div>
          )}

          {/* TAB 4: CBT MARKS CALCULATOR */}
          {activeTab === 'cbt' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950">
                <strong>Marking Scheme:</strong> Total 100 Questions. +1.00 for Correct Answer, <strong>-0.25 (1/4th)</strong> penalty for Incorrect Answer. 0 for Unattempted. Minimum Qualifying = 30%.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-emerald-800 mb-1">
                    Number of Correct Answers (+1 each)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max={totalQuestions}
                    value={correctCount}
                    onChange={(e) => setCorrectCount(Number(e.target.value) || 0)}
                    className="w-full text-xs p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl font-mono text-emerald-950 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-red-800 mb-1">
                    Number of Incorrect Answers (-0.25 each)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max={totalQuestions - safeCorrect}
                    value={wrongCount}
                    onChange={(e) => setWrongCount(Number(e.target.value) || 0)}
                    className="w-full text-xs p-2.5 bg-red-50/50 border border-red-200 rounded-xl font-mono text-red-950 font-bold"
                  />
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Attempted</span>
                  <span className="text-base font-bold font-mono text-slate-800">{attempted} / 100</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Unattempted</span>
                  <span className="text-base font-bold font-mono text-slate-800">{unattempted}</span>
                </div>
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                  <span className="text-[10px] text-emerald-700 font-bold uppercase block">Positive Marks</span>
                  <span className="text-base font-bold font-mono text-emerald-800">+{positiveMarks.toFixed(2)}</span>
                </div>
                <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-center">
                  <span className="text-[10px] text-red-700 font-bold uppercase block">Negative Penalty</span>
                  <span className="text-base font-bold font-mono text-red-800">-{negativePenalty.toFixed(2)}</span>
                </div>
              </div>

              {/* Final CBT Score Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                  <span className="text-[11px] text-blue-700 font-bold uppercase block">Raw CBT Written Score</span>
                  <span className="text-2xl font-bold font-mono text-blue-950">{rawCbtScore.toFixed(2)} / 100</span>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Accuracy: <strong>{accuracyPct}%</strong> &bull; Status:{' '}
                    <span className={qualifies30Pct ? 'text-emerald-700 font-bold' : 'text-red-700 font-bold'}>
                      {qualifies30Pct ? 'Meets 30% Qualifying Threshold' : 'Below 30% Qualifying'}
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl">
                  <span className="text-[11px] text-purple-700 font-bold uppercase block">Scaled CBT Score (75% Weight)</span>
                  <span className="text-2xl font-bold font-mono text-purple-950">{scaledCbtScore.toFixed(2)} / 75</span>
                  <p className="text-[11px] text-slate-600 mt-1">
                    This score is contributed toward the final 100-mark composite merit.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: COMPOSITE MERIT CALCULATOR */}
          {activeTab === 'selection' && (
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950">
                <strong>Composite Selection Formula (100 Marks):</strong><br />
                Final Composite Score = (CBT Score / 100 × 75) + Experience Marks (Max 25)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Expected / Simulated CBT Score (0–100)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={simCbtScore}
                    onChange={(e) => setSimCbtScore(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs font-mono font-bold mt-1">
                    <span>0</span>
                    <span className="text-blue-700 text-sm">{simCbtScore} Marks</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Eligible Contractual Service (in Years)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="6"
                    step="0.5"
                    value={simExpYears}
                    onChange={(e) => setSimExpYears(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs font-mono font-bold mt-1">
                    <span>0 Yrs</span>
                    <span className="text-emerald-700 text-sm">{simExpYears} Years</span>
                    <span>5+ Yrs</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-300 font-bold block">
                      Total Composite Merit Score
                    </span>
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-amber-400">
                      {totalCompositeScore.toFixed(2)}{' '}
                      <span className="text-lg font-normal text-white/70">/ 100 Marks</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-blue-600/40 text-blue-200 border border-blue-400/30 rounded-xl text-xs font-bold">
                      CBT: {compCbtPart.toFixed(2)}/75
                    </span>
                    <span className="px-3 py-1.5 bg-emerald-600/40 text-emerald-200 border border-emerald-400/30 rounded-xl text-xs font-bold">
                      Exp: {compExpPart.toFixed(1)}/25
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-white/60 block">CBT Contribution (75%)</span>
                    <span className="font-mono font-bold text-blue-300">
                      ({simCbtScore} / 100) × 75 = {compCbtPart.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/60 block">Experience Contribution (25%)</span>
                    <span className="font-mono font-bold text-emerald-300">
                      {simExpYears} yrs × 5 = {compExpPart.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: VACANCIES & RESERVATION MATRIX */}
          {activeTab === 'vacancies' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="font-bold text-sm text-slate-900 font-display">
                  Total 231 Posts Matrix (Advt. No. 28/2026)
                </h4>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Level-7 Cadre
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Category</th>
                      <th className="p-2.5 text-center">Total Posts</th>
                      <th className="p-2.5 text-center">35% Women Quota</th>
                      <th className="p-2.5">Distribution %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr>
                      <td className="p-2.5 font-bold">Unreserved (UR)</td>
                      <td className="p-2.5 font-bold text-center text-blue-900">96</td>
                      <td className="p-2.5 font-bold text-center text-emerald-700">34</td>
                      <td className="p-2.5 text-slate-600 font-mono">41.56%</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Extremely Backward Class (EBC)</td>
                      <td className="p-2.5 font-bold text-center text-blue-900">41</td>
                      <td className="p-2.5 font-bold text-center text-emerald-700">14</td>
                      <td className="p-2.5 text-slate-600 font-mono">17.75%</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Scheduled Caste (SC)</td>
                      <td className="p-2.5 font-bold text-center text-blue-900">35</td>
                      <td className="p-2.5 font-bold text-center text-emerald-700">12</td>
                      <td className="p-2.5 text-slate-600 font-mono">15.15%</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Backward Class (BC)</td>
                      <td className="p-2.5 font-bold text-center text-blue-900">27</td>
                      <td className="p-2.5 font-bold text-center text-emerald-700">09</td>
                      <td className="p-2.5 text-slate-600 font-mono">11.69%</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Economically Weaker Section (EWS)</td>
                      <td className="p-2.5 font-bold text-center text-blue-900">23</td>
                      <td className="p-2.5 font-bold text-center text-emerald-700">08</td>
                      <td className="p-2.5 text-slate-600 font-mono">9.96%</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Backward Classes Women (BCW)</td>
                      <td className="p-2.5 font-bold text-center text-blue-900">07</td>
                      <td className="p-2.5 font-bold text-center text-emerald-700">07</td>
                      <td className="p-2.5 text-slate-600 font-mono">3.03%</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Scheduled Tribe (ST)</td>
                      <td className="p-2.5 font-bold text-center text-blue-900">02</td>
                      <td className="p-2.5 font-bold text-center text-emerald-700">01</td>
                      <td className="p-2.5 text-slate-600 font-mono">0.86%</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold border-t-2 border-slate-300">
                      <td className="p-2.5 text-slate-900">TOTAL VACANCIES</td>
                      <td className="p-2.5 text-center text-emerald-800 text-sm">231</td>
                      <td className="p-2.5 text-center text-emerald-800 text-sm">85</td>
                      <td className="p-2.5 font-mono text-emerald-800">100.00%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 space-y-1">
                <p><strong>Horizontal Sub-Quotas:</strong> Divyang (PwD 4% = 09 Posts) &bull; Grandchildren of Freedom Fighters (2% = 05 Posts).</p>
                <p className="text-slate-500">Horizontal reservation posts are adjusted within the respective vertical category totals.</p>
              </div>
            </div>
          )}

          {/* TAB 7: DV CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950">
                <strong>Mandatory Verification Checklist:</strong> Tick off each document to ensure 100% readiness for BTSC Patna counseling and verification.
              </div>

              <div className="space-y-2">
                {[
                  { key: 'doc_10th', label: 'Matriculation (10th) Certificate & Marksheet (Proof of Date of Birth)' },
                  { key: 'doc_12th', label: 'Higher Secondary (10+2 / Intermediate) Marksheet & Certificate' },
                  { key: 'doc_grad', label: 'Graduation Degree (B.F.Sc. / B.Sc.) Certificate & All Semesters Marksheets' },
                  { key: 'doc_pg_degree', label: '2-Year PG Degree in Fisheries Science (M.F.Sc. / Equiv.) & Marksheets' },
                  { key: 'doc_icar_proof', label: 'Proof of Degree from an ICAR-Recognized Agricultural University' },
                  { key: 'doc_domicile', label: 'Permanent Resident / Domicile Certificate of Bihar' },
                  { key: 'doc_caste', label: 'Caste Certificate / Non-Creamy Layer (NCL) for BC/EBC (with Father’s Name)' },
                  { key: 'doc_ews', label: 'EWS Income & Asset Certificate for Current Financial Year' },
                  { key: 'doc_exp_cert', label: 'Contractual Experience Certificate (Fisheries Directorate, Bihar)' },
                  { key: 'doc_pwbd', label: 'Disability Certificate (UDID / 40%+ by Competent Medical Board)' },
                  { key: 'doc_photo', label: 'Printed Application Form & 6-8 Passport Photographs (same as uploaded)' },
                  { key: 'doc_sign', label: 'Photo Identity Proof (Aadhaar Card / Voter ID / Passport)' }
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() =>
                      setCheckedDocs((prev) => ({
                        ...prev,
                        [item.key]: !prev[item.key]
                      }))
                    }
                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      checkedDocs[item.key]
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedDocs[item.key]}
                      readOnly
                      className="w-4 h-4 text-emerald-600 rounded border-slate-300 cursor-pointer"
                    />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            BTSC Advt. No. 28/2026 • Fishery Extension Officer
          </span>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            Close Tool
          </button>
        </div>
      </div>
    </div>
  );
};
