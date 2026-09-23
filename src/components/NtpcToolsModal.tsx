import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  Calculator,
  FileCheck,
  DollarSign,
  Award,
  AlertCircle,
  HelpCircle,
  Percent
} from 'lucide-react';

interface NtpcToolsModalProps {
  tool: string | null;
  onClose: () => void;
}

export const NtpcToolsModal: React.FC<NtpcToolsModalProps> = ({ tool, onClose }) => {
  // 1. Age Calculator State
  const [birthDate, setBirthDate] = useState('1999-05-15');
  const [category, setCategory] = useState<'UR' | 'EWS' | 'OBC' | 'SC' | 'ST' | 'PWBD' | 'ESM'>('UR');
  const [esmServiceYears, setEsmServiceYears] = useState(5);

  // 2. Deadline Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // 3. Percentage / CGPA Calculator State
  const [calcMode, setCalcMode] = useState<'marks' | 'cgpa'>('marks');
  const [gradObtained, setGradObtained] = useState('720');
  const [gradTotal, setGradTotal] = useState('1000');
  const [pgObtained, setPgObtained] = useState('850');
  const [pgTotal, setPgTotal] = useState('1200');
  const [cgpaValue, setCgpaValue] = useState('7.8');
  const [cgpaScale, setCgpaScale] = useState('10');
  const [conversionFactor, setConversionFactor] = useState('9.5');

  // 4. Qualification Checker State
  const [bachelorType, setBachelorType] = useState('Full-Time Degree');
  const [bachelorMarks, setBachelorMarks] = useState('65');
  const [pgDiscipline, setPgDiscipline] = useState('Mass Communication');
  const [pgType, setPgType] = useState('Full-time 2-Year PG Degree/Diploma');
  const [pgMarks, setPgMarks] = useState('68');
  const [userCategory, setUserCategory] = useState<'UR_EWS_OBC' | 'SC_ST_PWBD'>('UR_EWS_OBC');

  // 5. Document Checklist State
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    class10: true,
    panAadhar: true,
    bachelorDegree: true,
    pgDegree: true,
    gradConsolidated: true,
    pgConsolidated: true,
    conversionFormula: true,
    casteEws: false,
    disabilityUdid: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // 05 October 2026, 23:59:59
      const target = new Date('2026-10-05T23:59:59').getTime();
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

  // Age calculation as on crucial date 05.10.2026
  const getAgeOnCutoff = () => {
    if (!birthDate) return { years: 0, months: 0, days: 0, isEligible: false, maxAllowed: 29 };
    const bDate = new Date(birthDate);
    const cutOff = new Date(2026, 9, 5); // 05 October 2026 (Month 9 = Oct)

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

    let maxAllowed = 29;
    if (category === 'OBC') {
      maxAllowed = 32; // 29 + 3
    } else if (category === 'SC' || category === 'ST') {
      maxAllowed = 34; // 29 + 5
    } else if (category === 'PWBD') {
      maxAllowed = 39; // 29 + 10
    } else if (category === 'ESM') {
      const netAge = years - esmServiceYears - 3;
      const isEligible = netAge <= 29 && years >= 18;
      return { years, months, days, isEligible, maxAllowed: 29 + esmServiceYears + 3, esmNetAge: netAge };
    }

    const isEligible = years >= 18 && (years < maxAllowed || (years === maxAllowed && months === 0 && days === 0));
    return { years, months, days, isEligible, maxAllowed };
  };

  const ageData = getAgeOnCutoff();

  // Percentage Calculations
  const gradPerc =
    parseFloat(gradTotal) > 0 ? ((parseFloat(gradObtained) / parseFloat(gradTotal)) * 100).toFixed(2) : '0.00';
  const pgPerc =
    parseFloat(pgTotal) > 0 ? ((parseFloat(pgObtained) / parseFloat(pgTotal)) * 100).toFixed(2) : '0.00';
  const cgpaPerc = (parseFloat(cgpaValue || '0') * parseFloat(conversionFactor || '9.5')).toFixed(2);

  // Qualification Eligibility Logic
  const minRequiredMarks = userCategory === 'SC_ST_PWBD' ? 55 : 60;
  const isBachelorValid = parseFloat(bachelorMarks || '0') >= minRequiredMarks;
  const isPgValid =
    parseFloat(pgMarks || '0') >= minRequiredMarks &&
    pgType === 'Full-time 2-Year PG Degree/Diploma' &&
    [
      'Mass Communication',
      'Journalism',
      'Advertising & Communication',
      'Public Relations',
      'Combination of Above'
    ].includes(pgDiscipline);
  const isOverallQualified = isBachelorValid && isPgValid;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white/10 rounded-xl">
              {tool === 'age' && <Clock className="w-5 h-5 text-amber-300" />}
              {tool === 'countdown' && <Clock className="w-5 h-5 text-emerald-300" />}
              {tool === 'calculator' && <Calculator className="w-5 h-5 text-sky-300" />}
              {tool === 'eligibility' && <CheckCircle2 className="w-5 h-5 text-emerald-300" />}
              {tool === 'documents' && <FileCheck className="w-5 h-5 text-purple-300" />}
              {tool === 'salary' && <DollarSign className="w-5 h-5 text-amber-300" />}
              {tool === 'selection' && <Award className="w-5 h-5 text-indigo-300" />}
            </span>
            <div>
              <h3 className="text-base font-black font-display">
                {tool === 'age' && 'NTPC Age Eligibility Checker'}
                {tool === 'countdown' && 'NTPC Application Deadline Timer'}
                {tool === 'calculator' && 'Marks & CGPA Percentage Calculator'}
                {tool === 'eligibility' && 'Educational Qualification Checker'}
                {tool === 'documents' && 'Mandatory Document Verification Checklist'}
                {tool === 'salary' && 'E0 Grade Pay Scale & Salary Structure'}
                {tool === 'selection' && 'Selection Process & CBT Weightage Roadmap'}
              </h3>
              <p className="text-[11px] text-blue-200">
                Official Advt. No. 12/26 &bull; Assistant Officer (Corporate Communication)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[78vh] overflow-y-auto space-y-5 text-xs text-slate-700">
          {/* TOOL 1: AGE CHECKER */}
          {tool === 'age' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div className="text-blue-900 leading-relaxed">
                  <strong>Official Rulebook Age Norm:</strong> Maximum age is <strong>29 Years</strong> calculated as on the closing date <strong>05 October 2026</strong> (05.10.2026). SC/ST get +5 years, OBC get +3 years, PwBD get +10 years relaxation where vacancy is identified.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Date of Birth (DOB)
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Category (as per Central Format)
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option value="UR">Unreserved (UR / General) - Max 29 Yrs</option>
                    <option value="EWS">EWS (Economically Weaker Section) - Max 29 Yrs</option>
                    <option value="OBC">OBC (Non-Creamy Layer) - Max 32 Yrs (+3)</option>
                    <option value="SC">SC (Scheduled Caste) - Max 34 Yrs (+5)</option>
                    <option value="ST">ST (Scheduled Tribe) - Max 34 Yrs (+5)</option>
                    <option value="PWBD">PwBD (Benchmark Disabilities) - Max 39 Yrs (+10)</option>
                    <option value="ESM">Ex-Servicemen (Govt of India Guidelines)</option>
                  </select>
                </div>
              </div>

              {category === 'ESM' && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <label className="block text-[11px] font-bold text-amber-900 mb-1">
                    Completed Military Service (Years):
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={esmServiceYears}
                    onChange={(e) => setEsmServiceYears(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-bold"
                  />
                  <p className="text-[10px] text-amber-700 mt-1">
                    Ex-Servicemen formula: Actual Age minus (Armed Forces Service + 3 Years) must not exceed 29 years.
                  </p>
                </div>
              )}

              {/* Result Card */}
              <div
                className={`p-4 rounded-2xl border ${
                  ageData.isEligible
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50/80 border-rose-300 text-rose-950'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xs uppercase tracking-wider">
                    Calculated Official Age (as on 05.10.2026)
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase ${
                      ageData.isEligible ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}
                  >
                    {ageData.isEligible ? '✓ Eligible for NTPC AO' : '✕ Over Age / Ineligible'}
                  </span>
                </div>

                <div className="text-xl font-black font-display mt-1">
                  {ageData.years} Years, {ageData.months} Months, {ageData.days} Days
                </div>

                <div className="text-xs mt-2 text-slate-600 flex flex-wrap items-center gap-3">
                  <span>
                    Maximum Upper Age Allowed for {category}: <strong>{ageData.maxAllowed} Years</strong>
                  </span>
                  <span>Minimum Age: <strong>18 Years</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 2: APPLICATION DEADLINE COUNTDOWN */}
          {tool === 'countdown' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 leading-relaxed">
                <strong>Online Application Window:</strong> Commenced on <strong>21 September 2026</strong> and closes on <strong>05 October 2026</strong>. Candidates must complete both online registration and document upload before the deadline.
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                <div className="p-3 sm:p-4 bg-slate-900 text-white rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">
                    {timeLeft.days}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mt-1">
                    Days
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-slate-900 text-white rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                    {timeLeft.hours}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mt-1">
                    Hours
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-slate-900 text-white rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-sky-400">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mt-1">
                    Minutes
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-slate-900 text-white rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-rose-400">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mt-1">
                    Seconds
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <div className="font-bold text-slate-900 text-xs">Crucial Advice for Applicants:</div>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Keep scanned copies of Degree certificates, consolidated marksheets, and conversion formula ready.</li>
                  <li>In offline SBI pay-in-slip mode, bank branch processing requires banking hours on working days. Apply early to avoid payment delays.</li>
                  <li>Download and preserve the final system-generated Registration Slip with unique application number.</li>
                </ul>
              </div>

              <div className="text-center pt-2">
                <a
                  href="https://careers.ntpc.co.in/recruitment/login.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Open Official Application Portal</span>
                  <Award className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* TOOL 3: MARKS & CGPA PERCENTAGE CALCULATOR */}
          {tool === 'calculator' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-2xl text-sky-950 leading-relaxed">
                <strong>Mandatory Conversion Formula Upload:</strong> NTPC Advt. 12/26 clause 6(iv) requires candidates to upload the official conversion formula issued by their University/Institute for converting CGPA/DGPA/OGPA/CPI into aggregate percentage (%).
              </div>

              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <button
                  type="button"
                  onClick={() => setCalcMode('marks')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs cursor-pointer ${
                    calcMode === 'marks'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Marks to Percentage
                </button>
                <button
                  type="button"
                  onClick={() => setCalcMode('cgpa')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs cursor-pointer ${
                    calcMode === 'cgpa'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  CGPA / Grade Conversion
                </button>
              </div>

              {calcMode === 'marks' ? (
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                    <span className="font-bold text-slate-900 block text-xs">
                      1. Bachelor's Graduation Degree Marks
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 mb-1">
                          Marks Obtained
                        </label>
                        <input
                          type="number"
                          value={gradObtained}
                          onChange={(e) => setGradObtained(e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 mb-1">
                          Maximum Marks
                        </label>
                        <input
                          type="number"
                          value={gradTotal}
                          onChange={(e) => setGradTotal(e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold pt-1">
                      <span>Graduation Aggregate Percentage:</span>
                      <span className="text-blue-700 text-sm font-mono">{gradPerc}%</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                    <span className="font-bold text-slate-900 block text-xs">
                      2. Post Graduate Degree / PG Diploma Marks
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 mb-1">
                          Marks Obtained
                        </label>
                        <input
                          type="number"
                          value={pgObtained}
                          onChange={(e) => setPgObtained(e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 mb-1">
                          Maximum Marks
                        </label>
                        <input
                          type="number"
                          value={pgTotal}
                          onChange={(e) => setPgTotal(e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold pt-1">
                      <span>Post Graduation Aggregate Percentage:</span>
                      <span className="text-blue-700 text-sm font-mono">{pgPerc}%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                    <span className="font-bold text-slate-900 block text-xs">
                      CGPA / CPI Conversion Formula Calculator
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 mb-1">
                          Obtained CGPA
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={cgpaValue}
                          onChange={(e) => setCgpaValue(e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 mb-1">
                          Total Grade Scale
                        </label>
                        <input
                          type="number"
                          value={cgpaScale}
                          onChange={(e) => setCgpaScale(e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 mb-1">
                          Multiplier Factor
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={conversionFactor}
                          onChange={(e) => setConversionFactor(e.target.value)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">
                        Equated Aggregate Percentage (%):
                      </span>
                      <span className="text-base font-black text-emerald-700 font-mono">
                        {cgpaPerc}%
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Standard AICTE / UGC factor is typically 9.5 (or CGPA × 10 - 7.5 depending on your university's explicit conversion guidelines).
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TOOL 4: EDUCATIONAL QUALIFICATION CHECKER */}
          {tool === 'eligibility' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-2xl text-indigo-950 leading-relaxed">
                <strong>Mandatory 2-Tier Education:</strong> Full-time Bachelor's Degree in ANY discipline (min 60% / 55% SC/ST/PwBD) <strong>AND</strong> Full-time 2-Year PG Degree or PG Diploma in Mass Comm / Journalism / Advertising &amp; PR (min 60% / 55% SC/ST/PwBD).
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Your Social Category (Determines Percentage Benchmark):
                  </label>
                  <select
                    value={userCategory}
                    onChange={(e) => setUserCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold"
                  >
                    <option value="UR_EWS_OBC">General / UR / EWS / OBC-NCL (Minimum 60% Required)</option>
                    <option value="SC_ST_PWBD">SC / ST / PwBD (Minimum 55% Benchmark Relaxed)</option>
                  </select>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="font-bold text-slate-900 block text-xs">
                    Stage 1: Bachelor's Graduation Degree
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1">Mode / Program</label>
                      <select
                        value={bachelorType}
                        onChange={(e) => setBachelorType(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                      >
                        <option value="Full-Time Degree">Full-Time Degree from recognized University</option>
                        <option value="Distance / Part-time">Distance / Part-time (Not Accepted)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1">
                        Aggregate Marks (%)
                      </label>
                      <input
                        type="number"
                        value={bachelorMarks}
                        onChange={(e) => setBachelorMarks(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="font-bold text-slate-900 block text-xs">
                    Stage 2: Post Graduate Degree / PG Diploma
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1">Discipline</label>
                      <select
                        value={pgDiscipline}
                        onChange={(e) => setPgDiscipline(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                      >
                        <option value="Mass Communication">Mass Communication</option>
                        <option value="Journalism">Journalism</option>
                        <option value="Advertising & Communication">Advertising & Communication</option>
                        <option value="Public Relations">Public Relations</option>
                        <option value="Combination of Above">Combination of Above</option>
                        <option value="Other">Other Non-Media Discipline</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1">Program Type</label>
                      <select
                        value={pgType}
                        onChange={(e) => setPgType(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                      >
                        <option value="Full-time 2-Year PG Degree/Diploma">Full-time 2-Year PG Degree / Diploma</option>
                        <option value="1-Year / Part-Time / Distance">1-Year / Part-Time / Distance (Ineligible)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1">
                        Aggregate Marks (%)
                      </label>
                      <input
                        type="number"
                        value={pgMarks}
                        onChange={(e) => setPgMarks(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Overall Verification Banner */}
                <div
                  className={`p-4 rounded-2xl border ${
                    isOverallQualified
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-rose-50 border-rose-300 text-rose-950'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase">Overall Educational Verification:</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase ${
                        isOverallQualified ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                      }`}
                    >
                      {isOverallQualified ? '✓ Fully Qualified for Post' : '✕ Qualifications Do Not Meet Norms'}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-[11px]">
                    <li className="flex items-center gap-1.5">
                      <span className={isBachelorValid ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                        {isBachelorValid ? '✓' : '✕'}
                      </span>
                      <span>Graduation Marks: {bachelorMarks}% (Min required: {minRequiredMarks}%)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className={isPgValid ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                        {isPgValid ? '✓' : '✕'}
                      </span>
                      <span>
                        PG Degree/Diploma in {pgDiscipline}: {pgMarks}% (Min required: {minRequiredMarks}%, full-time 2-year mandatory)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 5: DOCUMENT CHECKLIST */}
          {tool === 'documents' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-purple-50 border border-purple-200 rounded-2xl text-purple-950 leading-relaxed">
                <strong>Mandatory Upload List:</strong> As per clause 6 of Advt. 12/26, applications with incomplete or insufficient documents will be summarily rejected without further process.
              </div>

              <div className="space-y-2">
                {[
                  {
                    key: 'class10',
                    title: 'Class X Certificate / Marksheet',
                    desc: 'Proof of Date of Birth and Candidate Name.'
                  },
                  {
                    key: 'panAadhar',
                    title: 'PAN Card & Aadhaar Card',
                    desc: 'Name & DOB must match exactly across all identity proofs.'
                  },
                  {
                    key: 'bachelorDegree',
                    title: "Bachelor's Graduation Degree Certificate",
                    desc: 'Final or Provisional Degree from UGC recognized institution.'
                  },
                  {
                    key: 'pgDegree',
                    title: '2-Year PG Degree / PG Diploma Certificate',
                    desc: 'Certificate in Mass Comm, Journalism, Advertising or Public Relations.'
                  },
                  {
                    key: 'gradConsolidated',
                    title: 'Graduation Consolidated Marksheet / Transcript',
                    desc: 'Must clearly indicate aggregate % of marks across all semesters.'
                  },
                  {
                    key: 'pgConsolidated',
                    title: 'Post Graduation Consolidated Marksheet / Transcript',
                    desc: 'All semester marksheets with aggregate percentage calculation.'
                  },
                  {
                    key: 'conversionFormula',
                    title: 'Official CGPA to Percentage Conversion Formula',
                    desc: 'Issued by University/Institute for both Graduation and Post Graduation.'
                  },
                  {
                    key: 'casteEws',
                    title: 'Caste Certificate / EWS Asset Certificate (if applicable)',
                    desc: 'OBC-NCL central format for FY 2026-27; EWS valid for FY 2026-27 based on FY 2025-26 income.'
                  },
                  {
                    key: 'disabilityUdid',
                    title: 'UDID Swavalamban Disability Certificate (PwBD only)',
                    desc: 'Online certificate indicating disability type and percentage in identified categories.'
                  }
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50/30 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedDocs[item.key]}
                      onChange={(e) =>
                        setCheckedDocs((prev) => ({ ...prev, [item.key]: e.target.checked }))
                      }
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">{item.title}</span>
                      <span className="text-[11px] text-slate-500 block">{item.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* TOOL 6: SELECTION PROCESS & WEIGHTAGE ROADMAP */}
          {tool === 'selection' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl text-blue-950 leading-relaxed">
                <strong>Official Selection Framework (Clause 7):</strong> Selection will be conducted via an Online Written CBT and Personal Interview with an official weightage ratio of <strong>85% to 15%</strong>. Candidates must qualify separately in both stages.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border-2 border-blue-500 rounded-2xl shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      Primary Stage
                    </span>
                    <span className="text-xl font-black text-blue-700 font-display">85% Weightage</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Online Written CBT</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 mt-2">
                    <li>
                      <strong>Part 1:</strong> Subject Knowledge Test (SKT) in Mass Comm &amp; Corporate Communication.
                    </li>
                    <li>
                      <strong>Part 2:</strong> Executive Aptitude Test (EAT) testing General Aptitude &amp; Reasoning.
                    </li>
                    <li>
                      <span className="text-red-600 font-bold">Mandatory:</span> Candidates must qualify in both SKT &amp; EAT sections separately.
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-white border-2 border-indigo-500 rounded-2xl shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                      Final Stage
                    </span>
                    <span className="text-xl font-black text-indigo-700 font-display">15% Weightage</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Personal Interview</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 mt-2">
                    <li>Assessment of communication skills, crisis PR management, leadership, and NTPC brand stewardship.</li>
                    <li>Separate qualifying threshold required in Interview.</li>
                    <li>Final Merit List = (CBT Score × 0.85) + (Interview Score × 0.15).</li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-xs">
                <strong>Exam Pattern &amp; Syllabus Note:</strong> Official question count, marking scheme, duration, and cut-offs have not been released in Advt 12/26. They are marked strictly as <em>“Not Released / To Be Updated”</em> until announced by NTPC management.
              </div>
            </div>
          )}

          {/* TOOL 7: SALARY & PAY SCALE EXPLORER */}
          {tool === 'salary' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950 leading-relaxed">
                <strong>Official Pay Scale:</strong> Grade E0 on Industrial Dearness Allowance (IDA) pattern with basic pay scale of <strong>₹30,000 – ₹1,20,000/-</strong>.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase block text-[10px]">Cadre &amp; Grade</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">Executive (E0 Grade)</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase block text-[10px]">Pay Matrix Pattern</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">IDA (Industrial Dearness Allowance)</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase block text-[10px]">Basic Pay Range</span>
                  <span className="font-bold text-blue-700 text-sm mt-0.5 block font-mono">₹30,000 – ₹1,20,000</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-400 font-bold uppercase block text-[10px]">Standard PSU Allowances</span>
                  <span className="font-bold text-slate-800 text-xs mt-0.5 block">
                    IDA, HRA/Company Leased Accommodation, Cafeteria Perks, Medical &amp; PRPS
                  </span>
                </div>
              </div>

              <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-[11px] text-slate-600">
                <strong>Disclaimer on Exact In-Hand Salary:</strong> Exact monthly in-hand compensation depends on city tier (X, Y, Z for HRA/quarters), prevailing IDA rate, and voluntary PF/pension contributions. Exact breakdown will be communicated in the official offer of appointment.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">
            RajDailyTools Verified Recruitment Utility
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl transition-colors cursor-pointer"
          >
            Close Tool
          </button>
        </div>
      </div>
    </div>
  );
};
