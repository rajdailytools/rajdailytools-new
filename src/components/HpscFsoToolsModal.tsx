import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, Calculator, FileCheck, DollarSign, Award, AlertCircle, ShieldAlert } from 'lucide-react';

interface HpscFsoToolsModalProps {
  tool: string | null;
  onClose: () => void;
}

export const HpscFsoToolsModal: React.FC<HpscFsoToolsModalProps> = ({ tool, onClose }) => {
  // 1. Age Calculator State
  const [birthDate, setBirthDate] = useState('1996-05-15');
  const [category, setCategory] = useState<'UR' | 'SC_HARYANA' | 'BC_HARYANA' | 'PWBD' | 'PWBD_RESERVED' | 'WIDOW_DIVORCED' | 'UNMARRIED_WOMAN' | 'ESM' | 'CONTRACT_WORKER'>('UR');
  const [contractYears, setContractYears] = useState(3);
  const [esmServiceYears, setEsmServiceYears] = useState(8);

  // 2. Fee Calculator State
  const [feeCategory, setFeeCategory] = useState<'PWBD' | 'RESERVED_WOMEN' | 'DESM_RESERVED' | 'DESM_UR' | 'UR_MALE_OTHER'>('UR_MALE_OTHER');

  // 3. Qualification Checklist State
  const [selectedDegree, setSelectedDegree] = useState('bachelor');
  const [selectedDiscipline, setSelectedDiscipline] = useState('food_tech');
  const [hasLanguageRequirement, setHasLanguageRequirement] = useState(true);
  const [hasNoFinancialInterest, setHasNoFinancialInterest] = useState(true);

  // 4. Document Verification Checklist State
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    photo_sig: true,
    matric: true,
    degree_marksheet: true,
    domicile: true,
    caste_ews: false,
    signed_form: false,
    annexure_i: false
  });

  // 5. Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // 19 October 2026, 17:00:00 (05:00 PM)
      const target = new Date('2026-10-19T17:00:00').getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!tool) return null;

  // Age calculation as on 19.10.2026
  const getAgeOnCutoff = () => {
    if (!birthDate) return { years: 0, months: 0, days: 0, isEligible: false, maxAge: 42 };
    const bDate = new Date(birthDate);
    const cutOff = new Date(2026, 9, 19); // 19 October 2026 (Month 9 = Oct)

    let years = cutOff.getFullYear() - bDate.getFullYear();
    let months = cutOff.getMonth() - bDate.getMonth();
    let days = cutOff.getDate() - bDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(cutOff.getFullYear(), cutOff.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    let maxAge = 42;
    if (category === 'SC_HARYANA' || category === 'BC_HARYANA' || category === 'WIDOW_DIVORCED' || category === 'UNMARRIED_WOMAN') {
      maxAge = 47; // 42 + 5
    } else if (category === 'PWBD') {
      maxAge = 47; // 42 + 5
    } else if (category === 'PWBD_RESERVED') {
      maxAge = 52; // 42 + 10 (max ceiling)
    } else if (category === 'CONTRACT_WORKER') {
      maxAge = Math.min(52, 42 + contractYears);
    } else if (category === 'ESM') {
      // For ESM: actual age minus military service minus 3 years must be <= 42
      const netAge = years - esmServiceYears - 3;
      const isEligible = netAge <= 42 && years >= 18;
      return { years, months, days, isEligible, maxAge: 42 + esmServiceYears + 3, esmNetAge: netAge };
    }

    // Upper age limit ceiling cap = 52 years
    maxAge = Math.min(52, maxAge);
    const isEligible = years >= 18 && (years < maxAge || (years === maxAge && months === 0 && days === 0));

    return { years, months, days, isEligible, maxAge };
  };

  const ageData = getAgeOnCutoff();

  // Fee calculation
  const getFeeAmount = () => {
    switch (feeCategory) {
      case 'PWBD':
        return { fee: 0, text: 'Exempted (NIL / ₹0)', desc: 'Persons with Benchmark Disabilities (PwBD) of Haryana with min 40% disability' };
      case 'RESERVED_WOMEN':
        return { fee: 250, text: '₹250/-', desc: 'OSC, DSC, BC-A (NCL), BC-B (NCL), ESM, EWS and Women candidates of Haryana' };
      case 'DESM_RESERVED':
        return { fee: 250, text: '₹250/-', desc: 'DESM Candidates of Haryana belonging to their vertical reserved category' };
      case 'DESM_UR':
        return { fee: 1000, text: '₹1000/-', desc: 'DESM Candidates of Haryana belonging to Unreserved (UR) category' };
      case 'UR_MALE_OTHER':
      default:
        return { fee: 1000, text: '₹1000/-', desc: 'UR Male candidates of Haryana and all male/female candidates from other states' };
    }
  };

  const feeData = getFeeAmount();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
              {tool === 'age' && <Calculator className="w-4 h-4" />}
              {tool === 'countdown' && <Clock className="w-4 h-4" />}
              {tool === 'fee' && <DollarSign className="w-4 h-4" />}
              {tool === 'checklist' && <CheckCircle2 className="w-4 h-4" />}
              {tool === 'selection' && <Award className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                {tool === 'age' && 'HPSC FSO Age Eligibility Checker'}
                {tool === 'countdown' && 'Application Deadline Countdown'}
                {tool === 'fee' && 'HPSC FSO Application Fee Checker'}
                {tool === 'checklist' && 'FSO Degree & Qualification Checker'}
                {tool === 'selection' && 'Selection Process & Career Guide'}
              </h3>
              <p className="text-[11px] text-slate-500">Official Advt. No. 25/2026 Criteria</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700">
          {/* TOOL 1: AGE CALCULATOR */}
          {tool === 'age' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed">
                <strong>Official Rule (Page 7 & 8):</strong> Candidates must be between <strong>18 and 42 years</strong> of age as on the closing date <strong>19.10.2026</strong>. Relaxations apply for reserved categories up to the strict upper age ceiling of 52 years.
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1 text-xs">Date of Birth (As per Matriculation Certificate):</label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1 text-xs">Category for Age Relaxation:</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full p-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  <option value="UR">Unreserved / General (18–42 Years)</option>
                  <option value="SC_HARYANA">SC of Haryana (DSC / OSC) (+5 Years, Max 47)</option>
                  <option value="BC_HARYANA">Backward Classes (BC-A / BC-B) (+5 Years, Max 47)</option>
                  <option value="PWBD">PwBD General (+5 Years, Max 47)</option>
                  <option value="PWBD_RESERVED">PwBD belonging to SC/BC/EWS (+10 Years, Max 52)</option>
                  <option value="WIDOW_DIVORCED">Widowed / Legally Divorced Women (+5 Years, Max 47)</option>
                  <option value="UNMARRIED_WOMAN">Unmarried Women of Haryana (+5 Years, Max 47)</option>
                  <option value="ESM">Ex-Servicemen (Military Service + 3 Years)</option>
                  <option value="CONTRACT_WORKER">Haryana Govt Contractual / Adhoc Worker (Max 52)</option>
                </select>
              </div>

              {category === 'CONTRACT_WORKER' && (
                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Completed Years of Service on Equivalent Post:</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={contractYears}
                    onChange={(e) => setContractYears(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-xl text-xs"
                  />
                </div>
              )}

              {category === 'ESM' && (
                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Completed Years of Military Service:</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={esmServiceYears}
                    onChange={(e) => setEsmServiceYears(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-xl text-xs"
                  />
                </div>
              )}

              {/* Age Output Card */}
              <div className={`p-4 rounded-xl border ${ageData.isEligible ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-red-50 border-red-300 text-red-950'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xs uppercase tracking-wider">Calculated Age on 19.10.2026:</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${ageData.isEligible ? 'bg-emerald-200 text-emerald-800' : 'bg-red-200 text-red-800'}`}>
                    {ageData.isEligible ? 'Eligible for FSO' : 'Not Eligible (Age Limit Exceeded)'}
                  </span>
                </div>
                <div className="text-xl font-black font-display">
                  {ageData.years} Years, {ageData.months} Months, {ageData.days} Days
                </div>
                <p className="text-xs mt-1 opacity-90">
                  Applicable Upper Age Limit: <strong>{ageData.maxAge} Years</strong> (Min: 18 Years)
                  {category === 'ESM' && (
                    <span className="block mt-0.5">Net Adjusted Age: <strong>{(ageData as any).esmNetAge} Years</strong> (Allowed max 42)</span>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* TOOL 2: COUNTDOWN */}
          {tool === 'countdown' && (
            <div className="space-y-4 text-center">
              <p className="text-xs text-slate-600">
                Official Last Date & Time for Submission of Online Application & Fee:
              </p>
              <div className="font-black text-slate-900 text-base">
                19 October 2026 at 05:00 PM (17:00 IST)
              </div>

              <div className="grid grid-cols-4 gap-2.5 my-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <span className="text-2xl font-black text-blue-900 font-display block">{timeLeft.days}</span>
                  <span className="text-[10px] font-bold text-blue-700 uppercase">Days</span>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <span className="text-2xl font-black text-blue-900 font-display block">{timeLeft.hours}</span>
                  <span className="text-[10px] font-bold text-blue-700 uppercase">Hours</span>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <span className="text-2xl font-black text-blue-900 font-display block">{timeLeft.minutes}</span>
                  <span className="text-[10px] font-bold text-blue-700 uppercase">Minutes</span>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <span className="text-2xl font-black text-blue-900 font-display block">{timeLeft.seconds}</span>
                  <span className="text-[10px] font-bold text-blue-700 uppercase">Seconds</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-left text-xs text-amber-900 space-y-1">
                <strong>Important Portal Advisory:</strong>
                <p>
                  Avoid last-minute submissions. Remember that after paying the fee, you must download the application form, physically sign it, and upload the scanned signed copy before the 05:00 PM cut-off.
                </p>
              </div>
            </div>
          )}

          {/* TOOL 3: FEE CHECKER */}
          {tool === 'fee' && (
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-slate-900 mb-1.5 text-xs">Select Your Category & Domicile Status:</label>
                <select
                  value={feeCategory}
                  onChange={(e) => setFeeCategory(e.target.value as any)}
                  className="w-full p-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  <option value="PWBD">PwBD of Haryana (min 40% disability) – Fee ₹0</option>
                  <option value="RESERVED_WOMEN">OSC, DSC, BC-A, BC-B, ESM, EWS & Women of Haryana – Fee ₹250</option>
                  <option value="DESM_RESERVED">DESM Candidates belonging to Reserved Category – Fee ₹250</option>
                  <option value="DESM_UR">DESM Candidates belonging to UR Category – Fee ₹1000</option>
                  <option value="UR_MALE_OTHER">UR Male Candidates of Haryana & All Other State Candidates – Fee ₹1000</option>
                </select>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Applicable Official Fee</span>
                  <span className="text-2xl font-black text-blue-900 font-display">{feeData.text}</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">{feeData.desc}</p>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 space-y-0.5">
                  <p>• Mode: Online only (Net Banking, Debit Card, Credit Card)</p>
                  <p>• Payment Cut-Off: 19.10.2026 up to 05:00 PM</p>
                  <p>• Fees once paid are strictly non-refundable</p>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 4: QUALIFICATION CHECKLIST */}
          {tool === 'checklist' && (
            <div className="space-y-3.5">
              <div>
                <label className="block font-bold text-slate-900 mb-1 text-xs">1. Degree Level Held:</label>
                <select
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-xl text-xs"
                >
                  <option value="bachelor">Bachelor's Degree (Graduation)</option>
                  <option value="master">Master's Degree (Post Graduation)</option>
                  <option value="doctorate">Doctorate Degree (Ph.D.)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1 text-xs">2. Qualifying Discipline / Subject:</label>
                <select
                  value={selectedDiscipline}
                  onChange={(e) => setSelectedDiscipline(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-xl text-xs"
                >
                  <option value="food_tech">Food Technology / Food Engineering / Food Processing</option>
                  <option value="agri">Agriculture / Agricultural Engineering</option>
                  <option value="biotech_dairy">Dairy Technology / Biotechnology / Oil Technology</option>
                  <option value="vet_science">Veterinary Sciences (B.V.Sc. / M.V.Sc.)</option>
                  <option value="chemistry_micro">Bio-Chemistry / Microbiology / Chemistry</option>
                  <option value="medicine">Medicine (MBBS / BDS / BAMS / BHMS / BUMS / BSMS / Sowa Rigpa)</option>
                  <option value="other">Other Discipline not mentioned in Advt. (Ineligible)</option>
                </select>
              </div>

              <div className="space-y-2 pt-1 border-t border-slate-100">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasLanguageRequirement}
                    onChange={(e) => setHasLanguageRequirement(e.target.checked)}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-700">
                    I have studied <strong>Hindi or Sanskrit</strong> in Matriculation (10th) OR <strong>Hindi</strong> in Higher Education.
                  </span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasNoFinancialInterest}
                    onChange={(e) => setHasNoFinancialInterest(e.target.checked)}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-700">
                    I have <strong>NO financial interest</strong> in the manufacture, import, or sale of any article of food (FSSR 2011 rule).
                  </span>
                </label>
              </div>

              {/* Eligibility Verdict */}
              <div
                className={`p-3 rounded-xl border text-xs font-semibold ${
                  selectedDiscipline !== 'other' && hasLanguageRequirement && hasNoFinancialInterest
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-red-50 border-red-300 text-red-900'
                }`}
              >
                {selectedDiscipline !== 'other' && hasLanguageRequirement && hasNoFinancialInterest ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>You satisfy all educational, language, and statutory eligibility criteria for HPSC FSO (Group-B)!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Ineligible: You must satisfy the prescribed discipline, language condition, and declare no food business interest.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TOOL 5: SELECTION PROCESS GUIDE */}
          {tool === 'selection' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-600">
                Official Selection Architecture for Food Safety Officer (Group-B) under Advt. No. 25/2026:
              </p>

              <div className="space-y-2">
                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl">
                  <span className="font-bold text-blue-950 text-xs block">Stage 1: Screening Test</span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Objective MCQ paper conducted if application numbers are large to shortlist candidates for Stage 2.
                  </p>
                </div>
                <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl">
                  <span className="font-bold text-purple-950 text-xs block">Stage 2: Subject Knowledge Test (SKT)</span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Comprehensive technical evaluation in Food Technology, Food Chemistry, Food Microbiology, and Food Laws.
                  </p>
                </div>
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                  <span className="font-bold text-emerald-950 text-xs block">Stage 3: Interview / Viva-Voce</span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Personality and practical acumen assessment before the HPSC Board in Panchkula.
                  </p>
                </div>
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl">
                  <span className="font-bold text-amber-950 text-xs block">Stage 4: Mandatory Training after Appointment</span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Note 1 (Page 4): Official training specified by Food Authority given <strong>AFTER</strong> appointment before gazetted notification.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>HPSC Advt. No. 25/2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
