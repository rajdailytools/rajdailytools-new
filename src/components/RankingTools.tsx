import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Calculator,
  RotateCcw,
  Activity,
  Award,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  CheckSquare,
  Square,
  Printer
} from 'lucide-react';
import { ExamRecord } from '../types/exam';

interface RankingToolProps {
  exam: ExamRecord;
}

/* =========================================================================
   TOOL 1: AGNIVEER AGE CALCULATOR
   ========================================================================= */
export const AgniveerAgeCalculator: React.FC<RankingToolProps> = () => {
  const [trade, setTrade] = useState('GD');
  const [dob, setDob] = useState('2006-05-15');
  const cutOffDate = new Date('2026-10-01');

  const calculateAge = () => {
    if (!dob) return null;
    const birthDate = new Date(dob);
    if (isNaN(birthDate.getTime())) return null;

    let years = cutOffDate.getFullYear() - birthDate.getFullYear();
    let months = cutOffDate.getMonth() - birthDate.getMonth();
    let days = cutOffDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonthLastDay = new Date(cutOffDate.getFullYear(), cutOffDate.getMonth(), 0).getDate();
      days += prevMonthLastDay;
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const decimalAge = years + months / 12 + days / 365.25;
    const isEligible = decimalAge >= 17.5 && decimalAge <= 21.0;
    const isUnderAge = decimalAge < 17.5;

    return { years, months, days, decimalAge, isEligible, isUnderAge };
  };

  const res = calculateAge();

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-1.5">
            <Calculator className="w-3.5 h-3.5" />
            Official Agnipath 2026 Cut-Off
          </span>
          <h3 className="text-xl font-black text-slate-900 font-display">
            Agniveer Exact Age & Eligibility Calculator 2026
          </h3>
        </div>
        <div className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 font-mono text-slate-700">
          Target Date: <strong>01 October 2026</strong>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Agniveer Trade
          </label>
          <select
            value={trade}
            onChange={(e) => setTrade(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:bg-white focus:border-blue-600"
          >
            <option value="GD">Agniveer General Duty (All Arms)</option>
            <option value="TECH">Agniveer Technical (Aviation/Ammunition)</option>
            <option value="CLERK">Agniveer Clerk / Store Keeper Tech</option>
            <option value="TDN10">Agniveer Tradesman (10th Pass)</option>
            <option value="TDN8">Agniveer Tradesman (8th Pass)</option>
            <option value="WOMEN">Agniveer Women (Corps of Military Police)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Your Date of Birth (DOB)
          </label>
          <input
            type="date"
            value={dob}
            min="1995-01-01"
            max="2015-12-31"
            onChange={(e) => setDob(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:bg-white focus:border-blue-600"
          />
        </div>
      </div>

      {res && (
        <div className={`p-5 rounded-2xl border ${res.isEligible ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/70 border-rose-300'} space-y-3`}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              {res.isEligible ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-600" />
              )}
              <span className={`text-base font-black ${res.isEligible ? 'text-emerald-900' : 'text-rose-900'}`}>
                {res.isEligible
                  ? 'QUALIFIED: You meet the official Agniveer 2026 age criteria!'
                  : res.isUnderAge
                  ? 'NOT ELIGIBLE: You are Under-Age (Below 17.5 Years)'
                  : 'NOT ELIGIBLE: You are Over-Age (Exceeds 21 Years)'}
              </span>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${res.isEligible ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'}`}>
              {res.isEligible ? 'Eligible to Apply' : 'Age Ineligible'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center bg-white/80 p-3 rounded-xl border border-slate-200/80">
            <div>
              <span className="block text-[11px] text-slate-500 font-bold uppercase">Years</span>
              <strong className="text-xl font-black text-slate-900">{res.years}</strong>
            </div>
            <div>
              <span className="block text-[11px] text-slate-500 font-bold uppercase">Months</span>
              <strong className="text-xl font-black text-slate-900">{res.months}</strong>
            </div>
            <div>
              <span className="block text-[11px] text-slate-500 font-bold uppercase">Days</span>
              <strong className="text-xl font-black text-slate-900">{res.days}</strong>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Official Born-Between Window: Candidates must be born between <strong>01 October 2005</strong> and <strong>01 April 2009</strong> (both dates inclusive).
          </p>
        </div>
      )}
    </div>
  );
};

/* =========================================================================
   TOOL 2: IOB LLO EXAM PATTERN & CBT SCORE CALCULATOR
   ========================================================================= */
export const IobLloExamCalculator: React.FC<RankingToolProps> = () => {
  const [reasoningCorrect, setReasoningCorrect] = useState(24);
  const [reasoningWrong, setReasoningWrong] = useState(4);
  const [gaCorrect, setGaCorrect] = useState(30);
  const [gaWrong, setGaWrong] = useState(6);
  const [diCorrect, setDiCorrect] = useState(20);
  const [diWrong, setDiWrong] = useState(5);
  const [engCorrect, setEngCorrect] = useState(32);
  const [engWrong, setEngWrong] = useState(5);

  // Marks weights: Reasoning (30 Qs / 60 M = 2 marks each, -0.50 penalty)
  // GA (40 Qs / 40 M = 1 mark each, -0.25 penalty)
  // DI (30 Qs / 60 M = 2 marks each, -0.50 penalty)
  // English (40 Qs / 40 M = 1 mark each, -0.25 penalty)
  const reasoningScore = Math.max(0, reasoningCorrect * 2 - reasoningWrong * 0.5);
  const gaScore = Math.max(0, gaCorrect * 1 - gaWrong * 0.25);
  const diScore = Math.max(0, diCorrect * 2 - diWrong * 0.5);
  const engScore = Math.max(0, engCorrect * 1 - engWrong * 0.25);

  const totalQuestionsAttempted =
    reasoningCorrect + reasoningWrong + gaCorrect + gaWrong + diCorrect + diWrong + engCorrect + engWrong;
  const netScore = reasoningScore + gaScore + diScore + engScore;
  const percentage = ((netScore / 200) * 100).toFixed(1);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-1.5">
            <Calculator className="w-3.5 h-3.5" />
            140 Questions / 200 Marks Simulator
          </span>
          <h3 className="text-xl font-black text-slate-900 font-display">
            IOB LLO CBT Score & Negative Penalty Calculator
          </h3>
        </div>
        <div className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 font-bold text-slate-700">
          Penalty: -¼th Sectional Deductions
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
          <div className="font-bold text-xs text-slate-900">Reasoning (60 Marks)</div>
          <div className="text-[11px] text-slate-500">30 Qs × 2 Marks each (-0.50)</div>
          <div className="space-y-1.5">
            <input
              type="number"
              min="0"
              max="30"
              value={reasoningCorrect}
              onChange={(e) => setReasoningCorrect(Math.min(30, parseInt(e.target.value) || 0))}
              className="w-full text-xs font-bold p-2 bg-white border border-slate-300 rounded-lg text-emerald-700"
              placeholder="Correct"
            />
            <input
              type="number"
              min="0"
              max="30"
              value={reasoningWrong}
              onChange={(e) => setReasoningWrong(Math.min(30, parseInt(e.target.value) || 0))}
              className="w-full text-xs font-bold p-2 bg-white border border-slate-300 rounded-lg text-rose-700"
              placeholder="Wrong"
            />
          </div>
          <div className="text-right text-xs font-bold text-blue-900">Score: {reasoningScore.toFixed(2)}/60</div>
        </div>

        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
          <div className="font-bold text-xs text-slate-900">General Awareness (40 M)</div>
          <div className="text-[11px] text-slate-500">40 Qs × 1 Mark each (-0.25)</div>
          <div className="space-y-1.5">
            <input
              type="number"
              min="0"
              max="40"
              value={gaCorrect}
              onChange={(e) => setGaCorrect(Math.min(40, parseInt(e.target.value) || 0))}
              className="w-full text-xs font-bold p-2 bg-white border border-slate-300 rounded-lg text-emerald-700"
              placeholder="Correct"
            />
            <input
              type="number"
              min="0"
              max="40"
              value={gaWrong}
              onChange={(e) => setGaWrong(Math.min(40, parseInt(e.target.value) || 0))}
              className="w-full text-xs font-bold p-2 bg-white border border-slate-300 rounded-lg text-rose-700"
              placeholder="Wrong"
            />
          </div>
          <div className="text-right text-xs font-bold text-blue-900">Score: {gaScore.toFixed(2)}/40</div>
        </div>

        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
          <div className="font-bold text-xs text-slate-900">Data Analysis (60 Marks)</div>
          <div className="text-[11px] text-slate-500">30 Qs × 2 Marks each (-0.50)</div>
          <div className="space-y-1.5">
            <input
              type="number"
              min="0"
              max="30"
              value={diCorrect}
              onChange={(e) => setDiCorrect(Math.min(30, parseInt(e.target.value) || 0))}
              className="w-full text-xs font-bold p-2 bg-white border border-slate-300 rounded-lg text-emerald-700"
              placeholder="Correct"
            />
            <input
              type="number"
              min="0"
              max="30"
              value={diWrong}
              onChange={(e) => setDiWrong(Math.min(30, parseInt(e.target.value) || 0))}
              className="w-full text-xs font-bold p-2 bg-white border border-slate-300 rounded-lg text-rose-700"
              placeholder="Wrong"
            />
          </div>
          <div className="text-right text-xs font-bold text-blue-900">Score: {diScore.toFixed(2)}/60</div>
        </div>

        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
          <div className="font-bold text-xs text-slate-900">English Language (40 M)</div>
          <div className="text-[11px] text-slate-500">40 Qs × 1 Mark each (-0.25)</div>
          <div className="space-y-1.5">
            <input
              type="number"
              min="0"
              max="40"
              value={engCorrect}
              onChange={(e) => setEngCorrect(Math.min(40, parseInt(e.target.value) || 0))}
              className="w-full text-xs font-bold p-2 bg-white border border-slate-300 rounded-lg text-emerald-700"
              placeholder="Correct"
            />
            <input
              type="number"
              min="0"
              max="40"
              value={engWrong}
              onChange={(e) => setEngWrong(Math.min(40, parseInt(e.target.value) || 0))}
              className="w-full text-xs font-bold p-2 bg-white border border-slate-300 rounded-lg text-rose-700"
              placeholder="Wrong"
            />
          </div>
          <div className="text-right text-xs font-bold text-blue-900">Score: {engScore.toFixed(2)}/40</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">
            Aggregated Online Test Result
          </span>
          <div className="text-2xl font-black text-slate-900">
            {netScore.toFixed(2)} <span className="text-base font-normal text-slate-500">/ 200 Total Marks</span>
          </div>
          <span className="text-xs text-slate-600">
            Accuracy: {percentage}% across {totalQuestionsAttempted} attempted questions
          </span>
        </div>
        <div className="text-right">
          <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${netScore >= 110 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
            {netScore >= 110 ? 'Likely Interview Shortlist (UR)' : 'Borderline / Needs Revision'}
          </span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 3: MP POLICE ELIGIBILITY CHECKER
   ========================================================================= */
export const MpPoliceEligibilityChecker: React.FC<RankingToolProps> = () => {
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  const [isMpDomicile, setIsMpDomicile] = useState(true);
  const [cadre, setCadre] = useState('DEF');
  const [dob, setDob] = useState('2001-08-10');
  const [heightCm, setHeightCm] = useState(170);
  const [chestCm, setChestCm] = useState(82);

  // Target date: 06.10.2026
  const cutOffDate = new Date('2026-10-06');
  const birthDate = new Date(dob);
  let age = cutOffDate.getFullYear() - birthDate.getFullYear();
  if (cutOffDate.getMonth() < birthDate.getMonth() || (cutOffDate.getMonth() === birthDate.getMonth() && cutOffDate.getDate() < birthDate.getDate())) {
    age--;
  }

  // Age eligibility
  // UR MP Male or other state: 18-33
  // MP Female or SC/ST/OBC MP: 18-38
  const maxAge = (!isMpDomicile || (category === 'UR' && gender === 'Male')) ? 33 : 38;
  const ageEligible = age >= 18 && age <= maxAge;

  // Height eligibility
  // Male: 168 cm (General/OBC/SC), 160 cm (ST)
  // Female: 155 cm
  const reqHeight = gender === 'Female' ? 155 : category === 'ST' ? 160 : 168;
  const heightEligible = heightCm >= reqHeight;

  // Chest eligibility (Male only: min 81 cm)
  const chestEligible = gender === 'Female' || chestCm >= 81;

  const allEligible = ageEligible && heightEligible && chestEligible;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            MPESB Official Rulebook 2026
          </span>
          <h3 className="text-xl font-black text-slate-900 font-display">
            MP Police Constable Candidature & PST Checker
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900"
          >
            <option value="UR">Unreserved (UR / General)</option>
            <option value="OBC">OBC (Non-Creamy Layer)</option>
            <option value="SC">Scheduled Caste (SC)</option>
            <option value="ST">Scheduled Tribe (ST)</option>
            <option value="EWS">Economically Weaker Section (EWS)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Gender</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGender('Male')}
              className={`py-2 text-xs font-bold rounded-xl ${gender === 'Male' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender('Female')}
              className={`py-2 text-xs font-bold rounded-xl ${gender === 'Female' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Female
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">MP Domicile</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setIsMpDomicile(true)}
              className={`py-2 text-xs font-bold rounded-xl ${isMpDomicile ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              MP Resident
            </button>
            <button
              type="button"
              onClick={() => setIsMpDomicile(false)}
              className={`py-2 text-xs font-bold rounded-xl ${!isMpDomicile ? 'bg-amber-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Other State
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Candidate Height (cm)</label>
          <input
            type="number"
            value={heightCm}
            onChange={(e) => setHeightCm(parseInt(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </div>

        {gender === 'Male' && (
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Chest Unexpanded (cm)</label>
            <input
              type="number"
              value={chestCm}
              onChange={(e) => setChestCm(parseInt(e.target.value) || 0)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900"
            />
          </div>
        )}
      </div>

      <div className={`p-4 rounded-2xl border ${allEligible ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'} space-y-2`}>
        <div className="flex items-center gap-2">
          {allEligible ? <CheckCircle2 className="w-5 h-5 text-emerald-700" /> : <XCircle className="w-5 h-5 text-rose-700" />}
          <span className={`font-black text-sm ${allEligible ? 'text-emerald-900' : 'text-rose-900'}`}>
            {allEligible ? 'ELIGIBLE FOR MP POLICE CONSTABLE GD 2026' : 'INELIGIBLE ON CURRENT PARAMETERS'}
          </span>
        </div>
        <div className="text-xs text-slate-700 space-y-1">
          <div>• Computed Age: <strong>{age} Years</strong> (Permissible bracket: 18 to {maxAge} years) — {ageEligible ? 'Passed' : 'Failed'}</div>
          <div>• Height Status: <strong>{heightCm} cm</strong> (Mandatory: {reqHeight} cm) — {heightEligible ? 'Passed' : 'Failed'}</div>
          {gender === 'Male' && <div>• Chest Status: <strong>{chestCm} cm</strong> (Mandatory min: 81 cm unexpanded) — {chestEligible ? 'Passed' : 'Failed'}</div>}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 4: SSC GD HEIGHT ELIGIBILITY CHECKER
   ========================================================================= */
export const SscGdHeightChecker: React.FC<RankingToolProps> = () => {
  const [gender, setGender] = useState('Male');
  const [category, setCategory] = useState('UR');
  const [region, setRegion] = useState('Standard');
  const [heightCm, setHeightCm] = useState(171);

  // Standard: Male 170, Female 157
  // ST: Male 162.5, Female 150
  // Hill (Garhwalis/Kumaonis/Dogras/Marathas): Male 165, Female 155
  // North East: Male 162.5, Female 152.5
  let reqHeight = 170;
  if (gender === 'Female') {
    if (category === 'ST') reqHeight = 150;
    else if (region === 'Hill') reqHeight = 155;
    else if (region === 'NE') reqHeight = 152.5;
    else reqHeight = 157;
  } else {
    if (category === 'ST') reqHeight = 162.5;
    else if (region === 'Hill') reqHeight = 165;
    else if (region === 'NE') reqHeight = 162.5;
    else reqHeight = 170;
  }

  const passed = heightCm >= reqHeight;
  const diff = heightCm - reqHeight;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-1.5">
          <Activity className="w-3.5 h-3.5" />
          Clause 11.2 Height & Chest Standards
        </span>
        <h3 className="text-xl font-black text-slate-900 font-display">
          SSC GD Physical Standards (PST) Height Verifier
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900"
          >
            <option value="Male">Male Candidate</option>
            <option value="Female">Female Candidate</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Social Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900"
          >
            <option value="UR">General / UR</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST (Scheduled Tribe)</option>
            <option value="EWS">EWS</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Region / Tribe</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900"
          >
            <option value="Standard">Standard All-India</option>
            <option value="Hill">Garhwalis, Kumaonis, Dogras, Marathas</option>
            <option value="NE">North-Eastern States</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Height (cm)</label>
          <input
            type="number"
            step="0.5"
            value={heightCm}
            onChange={(e) => setHeightCm(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </div>
      </div>

      <div className={`p-4 rounded-2xl border ${passed ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'} flex items-center justify-between flex-wrap gap-4`}>
        <div className="flex items-center gap-3">
          {passed ? <CheckCircle2 className="w-6 h-6 text-emerald-600" /> : <XCircle className="w-6 h-6 text-rose-600" />}
          <div>
            <div className={`font-black text-sm ${passed ? 'text-emerald-900' : 'text-rose-900'}`}>
              {passed ? 'QUALIFIED FOR SSC GD PHYSICAL STANDARD TEST' : 'DISQUALIFIED: HEIGHT BELOW REQUIRED STANDARD'}
            </div>
            <div className="text-xs text-slate-600">
              Required Minimum: <strong>{reqHeight} cm</strong> | Candidate Measurement: <strong>{heightCm} cm</strong> ({diff >= 0 ? `+${diff.toFixed(1)} cm surplus` : `${diff.toFixed(1)} cm deficit`})
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-xl text-xs font-bold ${passed ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'}`}>
          {passed ? 'PST Fit' : 'PST Unfit'}
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 5: ARMY 1600M RUNNING TIME & MARKS CALCULATOR
   ========================================================================= */
export const ArmyRunningTimeCalculator: React.FC<RankingToolProps> = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(25);
  const [pullUps, setPullUps] = useState(10);
  const [ditchPassed, setDitchPassed] = useState(true);
  const [balancePassed, setBalancePassed] = useState(true);

  // Total seconds
  const totalSec = minutes * 60 + seconds;
  let runMarks = 0;
  let group = 'Failed';

  if (totalSec <= 330) {
    // 5 min 30 sec
    runMarks = 60;
    group = 'Group I';
  } else if (totalSec <= 345) {
    // 5 min 45 sec
    runMarks = 48;
    group = 'Group II';
  } else {
    runMarks = 0;
    group = 'Failed';
  }

  const pullUpMarksTable: Record<number, number> = {
    10: 40,
    9: 33,
    8: 27,
    7: 21,
    6: 16
  };
  const pullUpMarks = pullUps >= 6 ? pullUpMarksTable[Math.min(10, pullUps)] || 40 : 0;
  const isPullUpPass = pullUps >= 6;

  const totalPftMarks = runMarks + pullUpMarks;
  const overallPass = group !== 'Failed' && isPullUpPass && ditchPassed && balancePassed;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-1.5">
          <Award className="w-3.5 h-3.5" />
          Agniveer 100-Marks PFT Score Engine
        </span>
        <h3 className="text-xl font-black text-slate-900 font-display">
          Indian Army 1.6 Km Running & Physical Marks Calculator
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            1600m Run Time (Minutes : Seconds)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              min="4"
              max="8"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
              className="w-1/2 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
              placeholder="Min"
            />
            <input
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
              className="w-1/2 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
              placeholder="Sec"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Beam (Pull-Ups Completed)
          </label>
          <select
            value={pullUps}
            onChange={(e) => setPullUps(parseInt(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
          >
            <option value="10">10 Pull-ups (40 Marks - Full)</option>
            <option value="9">9 Pull-ups (33 Marks)</option>
            <option value="8">8 Pull-ups (27 Marks)</option>
            <option value="7">7 Pull-ups (21 Marks)</option>
            <option value="6">6 Pull-ups (16 Marks - Minimum)</option>
            <option value="5">Less than 6 (0 Marks - Fail)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            9-Feet Ditch & Zig-Zag Balance
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setDitchPassed(!ditchPassed)}
              className={`py-2 text-xs font-bold rounded-xl ${ditchPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}
            >
              9ft Ditch: {ditchPassed ? 'Clear' : 'Fail'}
            </button>
            <button
              type="button"
              onClick={() => setBalancePassed(!balancePassed)}
              className={`py-2 text-xs font-bold rounded-xl ${balancePassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}
            >
              Zig-Zag: {balancePassed ? 'Clear' : 'Fail'}
            </button>
          </div>
        </div>
      </div>

      <div className={`p-4 rounded-2xl border ${overallPass ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'} flex items-center justify-between flex-wrap gap-4`}>
        <div>
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Physical Fitness Test (PFT) Result</span>
          <div className="text-2xl font-black text-slate-900">
            {totalPftMarks} <span className="text-sm font-normal text-slate-500">/ 100 Marks</span>
          </div>
          <div className="text-xs text-slate-600 mt-1">
            Running: <strong>{runMarks} M ({group})</strong> + Pull-ups: <strong>{pullUpMarks} M</strong>
          </div>
        </div>
        <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${overallPass ? 'bg-emerald-700 text-white' : 'bg-rose-700 text-white'}`}>
          {overallPass ? `${group} Qualified` : 'PFT Disqualified'}
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 6: ARMY PROMOTION TIMELINE TOOL
   ========================================================================= */
export const ArmyPromotionTimelineTool: React.FC<RankingToolProps> = () => {
  const [currentRank, setCurrentRank] = useState('Sepoy');
  const [yearsServed, setYearsServed] = useState(3);
  const [cadresDone, setCadresDone] = useState(true);

  const ranksInfo: Record<string, { next: string; reqYears: number; level: string; basicPay: string; retirement: string }> = {
    Sepoy: { next: 'Lance Naik', reqYears: 3, level: 'Level 3', basicPay: '₹21,700', retirement: '15-17 Years' },
    'Lance Naik': { next: 'Naik', reqYears: 5, level: 'Level 3/4', basicPay: '₹25,500', retirement: '17 Years' },
    Naik: { next: 'Havildar', reqYears: 8, level: 'Level 4/5', basicPay: '₹29,200', retirement: '22 Years' },
    Havildar: { next: 'Naib Subedar (JCO)', reqYears: 14, level: 'Level 6', basicPay: '₹35,400', retirement: '24-26 Years' },
    'Naib Subedar': { next: 'Subedar', reqYears: 18, level: 'Level 7', basicPay: '₹44,900', retirement: '28 Years' },
    Subedar: { next: 'Subedar Major', reqYears: 24, level: 'Level 8', basicPay: '₹47,600', retirement: '32 Years' }
  };

  const curr = ranksInfo[currentRank] || ranksInfo.Sepoy;
  const isPromotable = yearsServed >= curr.reqYears && cadresDone;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-1.5">
          <TrendingUp className="w-3.5 h-3.5" />
          JCO / OR Career Hierarchy
        </span>
        <h3 className="text-xl font-black text-slate-900 font-display">
          Indian Army Rank Promotion & Career Progression Tool
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Current Rank</label>
          <select
            value={currentRank}
            onChange={(e) => setCurrentRank(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
          >
            <option value="Sepoy">Sepoy / Rifleman / Gunner</option>
            <option value="Lance Naik">Lance Naik (L/Nk)</option>
            <option value="Naik">Naik (Nk)</option>
            <option value="Havildar">Havildar (Hav)</option>
            <option value="Naib Subedar">Naib Subedar (Nb Sub)</option>
            <option value="Subedar">Subedar (Sub)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Completed Service (Years): {yearsServed}
          </label>
          <input
            type="range"
            min="1"
            max="30"
            value={yearsServed}
            onChange={(e) => setYearsServed(parseInt(e.target.value) || 1)}
            className="w-full accent-blue-700"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Mandatory Cadres</label>
          <button
            type="button"
            onClick={() => setCadresDone(!cadresDone)}
            className={`w-full py-2.5 text-xs font-bold rounded-xl border ${cadresDone ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-slate-100 border-slate-300 text-slate-700'}`}
          >
            Promotion Cadre: {cadresDone ? 'Passed' : 'Pending'}
          </button>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <span className="block text-[11px] text-slate-500 uppercase font-bold">Next Rank</span>
          <strong className="text-sm font-black text-blue-900">{curr.next}</strong>
        </div>
        <div>
          <span className="block text-[11px] text-slate-500 uppercase font-bold">Min Service Needed</span>
          <strong className="text-sm font-black text-slate-900">{curr.reqYears} Years</strong>
        </div>
        <div>
          <span className="block text-[11px] text-slate-500 uppercase font-bold">7th CPC Pay Level</span>
          <strong className="text-sm font-black text-emerald-800">{curr.level}</strong>
        </div>
        <div>
          <span className="block text-[11px] text-slate-500 uppercase font-bold">Promotion Status</span>
          <strong className={`text-sm font-black ${isPromotable ? 'text-emerald-700' : 'text-amber-700'}`}>
            {isPromotable ? 'Eligible for DPC' : 'In Progress'}
          </strong>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 7: SSC CGL AGE LIMIT 2026 CALCULATOR
   ========================================================================= */
export const SscCglAgeCalculator: React.FC<RankingToolProps> = () => {
  const [dob, setDob] = useState('1998-04-12');
  const [category, setCategory] = useState('UR');
  const cutOffDate = new Date('2026-08-01');

  const birthDate = new Date(dob);
  let age = cutOffDate.getFullYear() - birthDate.getFullYear();
  if (cutOffDate.getMonth() < birthDate.getMonth() || (cutOffDate.getMonth() === birthDate.getMonth() && cutOffDate.getDate() < birthDate.getDate())) {
    age--;
  }

  const relaxation = category === 'SC' || category === 'ST' ? 5 : category === 'OBC' ? 3 : 0;
  const eligible18_27 = age >= 18 && age <= 27 + relaxation;
  const eligible18_30 = age >= 18 && age <= 30 + relaxation;
  const eligible20_30 = age >= 20 && age <= 30 + relaxation;
  const eligible18_32 = age >= 18 && age <= 32 + relaxation;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-1.5">
          <Calendar className="w-3.5 h-3.5" />
          Crucial Date: 01 August 2026
        </span>
        <h3 className="text-xl font-black text-slate-900 font-display">
          SSC CGL Post-Wise Age Eligibility Checker
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
          >
            <option value="UR">UR / General (No relaxation)</option>
            <option value="OBC">OBC (+3 Years)</option>
            <option value="SC">SC / ST (+5 Years)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
          />
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
        <div className="text-xs font-bold text-slate-700">
          Age on 01-08-2026: <strong className="text-sm font-black text-slate-900">{age} Years</strong> (Relaxation: +{relaxation} yrs)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className={`p-2.5 rounded-xl border ${eligible18_27 ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
            <span className="block text-[11px] font-bold">18–27 Bracket</span>
            <span className="text-xs font-black">{eligible18_27 ? 'Eligible' : 'Ineligible'}</span>
          </div>
          <div className={`p-2.5 rounded-xl border ${eligible18_30 ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
            <span className="block text-[11px] font-bold">18–30 Bracket</span>
            <span className="text-xs font-black">{eligible18_30 ? 'Eligible' : 'Ineligible'}</span>
          </div>
          <div className={`p-2.5 rounded-xl border ${eligible20_30 ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
            <span className="block text-[11px] font-bold">20–30 Bracket</span>
            <span className="text-xs font-black">{eligible20_30 ? 'Eligible' : 'Ineligible'}</span>
          </div>
          <div className={`p-2.5 rounded-xl border ${eligible18_32 ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
            <span className="block text-[11px] font-bold">18–32 Bracket (JSO)</span>
            <span className="text-xs font-black">{eligible18_32 ? 'Eligible' : 'Ineligible'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 8: GOVT EXAM HEIGHT CHECKER INDIA
   ========================================================================= */
export const GovtHeightChecker: React.FC<RankingToolProps> = () => {
  const [gender, setGender] = useState('Male');
  const [heightCm, setHeightCm] = useState(169);

  const examsList = [
    { name: 'SSC GD Constable', reqM: 170, reqF: 157 },
    { name: 'Delhi Police Constable', reqM: 170, reqF: 157 },
    { name: 'UP Police Constable', reqM: 168, reqF: 152 },
    { name: 'MP Police Constable', reqM: 168, reqF: 155 },
    { name: 'Bihar Police Constable', reqM: 165, reqF: 155 },
    { name: 'RPF SI / Constable', reqM: 165, reqF: 157 },
    { name: 'Indian Army Agniveer GD', reqM: 169, reqF: 162 }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-1.5">
          <Activity className="w-3.5 h-3.5" />
          Unified 20+ Force Height Checker
        </span>
        <h3 className="text-xl font-black text-slate-900 font-display">
          All-India Government Uniform Exams Height Comparator
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Gender</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGender('Male')}
              className={`py-2 text-xs font-bold rounded-xl ${gender === 'Male' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender('Female')}
              className={`py-2 text-xs font-bold rounded-xl ${gender === 'Female' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Female
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Your Height: {heightCm} cm
          </label>
          <input
            type="range"
            min="145"
            max="195"
            value={heightCm}
            onChange={(e) => setHeightCm(parseInt(e.target.value) || 160)}
            className="w-full accent-blue-700"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-100 text-slate-700 font-bold">
            <tr>
              <th className="p-2.5">Recruitment Examination</th>
              <th className="p-2.5">Required Standard</th>
              <th className="p-2.5">Your Measurement</th>
              <th className="p-2.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {examsList.map((item, idx) => {
              const req = gender === 'Male' ? item.reqM : item.reqF;
              const ok = heightCm >= req;
              return (
                <tr key={idx}>
                  <td className="p-2.5 font-bold text-slate-900">{item.name}</td>
                  <td className="p-2.5 font-mono text-slate-600">{req} cm</td>
                  <td className="p-2.5 font-mono font-bold text-slate-900">{heightCm} cm</td>
                  <td className="p-2.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${ok ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                      {ok ? 'Eligible' : 'Below Height'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 9: SSC GD RUNNING MARKS & PACE CALCULATOR
   ========================================================================= */
export const SscGdRunningCalculator: React.FC<RankingToolProps> = () => {
  const [gender, setGender] = useState('Male');
  const [minutes, setMinutes] = useState(22);
  const [seconds, setSeconds] = useState(30);

  const totalTimeSec = minutes * 60 + seconds;
  const targetSec = gender === 'Male' ? 24 * 60 : 8.5 * 60;
  const isQualified = totalTimeSec <= targetSec;
  const bufferSec = targetSec - totalTimeSec;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-1.5">
          <Activity className="w-3.5 h-3.5" />
          5km / 1.6km PET Standards
        </span>
        <h3 className="text-xl font-black text-slate-900 font-display">
          SSC GD Physical Efficiency Test (PET) Pace & Result Evaluator
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Gender</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGender('Male')}
              className={`py-2 text-xs font-bold rounded-xl ${gender === 'Male' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Male (5.0 Km)
            </button>
            <button
              type="button"
              onClick={() => setGender('Female')}
              className={`py-2 text-xs font-bold rounded-xl ${gender === 'Female' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              Female (1.6 Km)
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Trial Time (Min : Sec)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
              className="w-1/2 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
            />
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
              className="w-1/2 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
            />
          </div>
        </div>
      </div>

      <div className={`p-4 rounded-2xl border ${isQualified ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'} flex items-center justify-between flex-wrap gap-4`}>
        <div>
          <div className={`font-black text-base ${isQualified ? 'text-emerald-900' : 'text-rose-900'}`}>
            {isQualified ? 'QUALIFIED FOR PHYSICAL EFFICIENCY TEST' : 'DISQUALIFIED: TIME EXCEEDS PERMISSIBLE LIMIT'}
          </div>
          <div className="text-xs text-slate-600 mt-1">
            Target Cut-Off: {gender === 'Male' ? '24 Minutes (5000m)' : '8 Minutes 30 Seconds (1600m)'} | Status: {bufferSec >= 0 ? `${Math.floor(bufferSec / 60)}m ${bufferSec % 60}s buffer saved` : 'Over cutoff'}
          </div>
        </div>
        <span className={`px-4 py-1.5 rounded-xl text-xs font-bold ${isQualified ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'}`}>
          {isQualified ? 'PET Pass' : 'PET Fail'}
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 10: ARMY DOCUMENT CHECKLIST GENERATOR
   ========================================================================= */
export const ArmyDocChecklistGenerator: React.FC<RankingToolProps> = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    admitCard: true,
    photo20: true,
    matricCert: true,
    domicileCert: true
  });

  const docs = [
    { id: 'admitCard', label: 'Laser Printed Admit Card (Original Quality)' },
    { id: 'photo20', label: '20 Copies of Passport Size Photograph (White Background)' },
    { id: 'matricCert', label: '10th Class / Matriculation Certificate & Marksheet' },
    { id: 'interCert', label: '10+2 / Intermediate Certificate (For Tech/Clerk)' },
    { id: 'domicileCert', label: 'Domicile / Nativity Certificate with Photograph from Tehsildar' },
    { id: 'casteCert', label: 'Caste Certificate with Candidate Photograph' },
    { id: 'religionCert', label: 'Religion Certificate (If not noted in Caste Cert)' },
    { id: 'schoolCharCert', label: 'School Character Certificate from Principal' },
    { id: 'charCertSarpanch', label: 'Character Certificate with Photo from Village Sarpanch' },
    { id: 'unmarriedCert', label: 'Unmarried Certificate for Under-21 candidates' },
    { id: 'affidavitStamp', label: 'Affidavit on ₹10 Non-Judicial Stamp Paper attested by Notary' },
    { id: 'panAadhaar', label: 'PAN Card & Aadhaar Card in Original' }
  ];

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-1.5">
            <FileCheck className="w-3.5 h-3.5" />
            Phase-II Rally Document Verification
          </span>
          <h3 className="text-xl font-black text-slate-900 font-display">
            Indian Army Recruitment Rally Document Checklist
          </h3>
        </div>
        <div className="text-xs bg-slate-100 px-3 py-1.5 rounded-xl font-bold text-slate-800">
          Ready: {totalChecked} / {docs.length} Documents
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {docs.map((d) => {
          const isChecked = !!checkedItems[d.id];
          return (
            <div
              key={d.id}
              onClick={() => toggleCheck(d.id)}
              className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${isChecked ? 'bg-emerald-50/60 border-emerald-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-600'}`}
            >
              {isChecked ? (
                <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-slate-400 shrink-0" />
              )}
              <span className="text-xs font-semibold select-none">{d.label}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <p className="text-xs text-slate-600">
          Carry original certificates plus <strong>2 sets of self-attested photocopies</strong>.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
        >
          <Printer className="w-4 h-4" />
          Print Checklist
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 11: NDA AGE LIMIT CALCULATOR
   ========================================================================= */
export const NdaAgeLimitCalculator: React.FC<RankingToolProps> = () => {
  const [edition, setEdition] = useState<'NDA1' | 'NDA2'>('NDA1');
  const [dob, setDob] = useState('2008-03-15');

  // NDA 1 2026: 02 July 2007 to 01 July 2010
  // NDA 2 2026: 02 Jan 2008 to 01 Jan 2011
  const birthDate = new Date(dob);
  const minDate = edition === 'NDA1' ? new Date('2007-07-02') : new Date('2008-01-02');
  const maxDate = edition === 'NDA1' ? new Date('2010-07-01') : new Date('2011-01-01');

  const isEligible = birthDate >= minDate && birthDate <= maxDate;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-1.5">
          <Calendar className="w-3.5 h-3.5" />
          UPSC Official NDA 1 & NDA 2 Window
        </span>
        <h3 className="text-xl font-black text-slate-900 font-display">
          UPSC NDA & NA Exact DOB Eligibility Verifier
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Exam Edition</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setEdition('NDA1')}
              className={`py-2 text-xs font-bold rounded-xl ${edition === 'NDA1' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              NDA-1 (April 2026)
            </button>
            <button
              type="button"
              onClick={() => setEdition('NDA2')}
              className={`py-2 text-xs font-bold rounded-xl ${edition === 'NDA2' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              NDA-2 (Sept 2026)
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
          />
        </div>
      </div>

      <div className={`p-4 rounded-2xl border ${isEligible ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'} flex items-center justify-between flex-wrap gap-4`}>
        <div>
          <div className={`font-black text-base ${isEligible ? 'text-emerald-900' : 'text-rose-900'}`}>
            {isEligible ? 'ELIGIBLE FOR UPSC NDA EXAMINATION' : 'OUTSIDE PRESCRIBED AGE WINDOW'}
          </div>
          <div className="text-xs text-slate-600 mt-1">
            Mandatory Birth Window: <strong>{minDate.toLocaleDateString()}</strong> to <strong>{maxDate.toLocaleDateString()}</strong>
          </div>
        </div>
        <span className={`px-4 py-1.5 rounded-xl text-xs font-bold ${isEligible ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'}`}>
          {isEligible ? 'Age Eligible' : 'Ineligible'}
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   TOOL 12: SSC GD MEDICAL FITNESS CHECKER
   ========================================================================= */
export const SscGdMedicalFitnessChecker: React.FC<RankingToolProps> = () => {
  const [visionBetter, setVisionBetter] = useState('6/6');
  const [hasKnockKnees, setHasKnockKnees] = useState(false);
  const [hasFlatFoot, setHasFlatFoot] = useState(false);
  const [hasVaricose, setHasVaricose] = useState(false);
  const [colorBlind, setColorBlind] = useState(false);

  const isMedicalFit = !hasKnockKnees && !hasFlatFoot && !hasVaricose && !colorBlind;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold mb-1.5">
          <Activity className="w-3.5 h-3.5" />
          DME / RME Medical Standards Self-Check
        </span>
        <h3 className="text-xl font-black text-slate-900 font-display">
          SSC GD Detailed Medical Examination (DME) Self-Assessment
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Distant Vision (Better Eye)</label>
          <select
            value={visionBetter}
            onChange={(e) => setVisionBetter(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold"
          >
            <option value="6/6">6/6 (Standard Perfect)</option>
            <option value="6/9">6/9 (Worse Eye Allowed)</option>
            <option value="6/12">6/12 or worse (Unfit)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Knock Knees / Bow Legs</label>
          <button
            type="button"
            onClick={() => setHasKnockKnees(!hasKnockKnees)}
            className={`w-full py-2 text-xs font-bold rounded-xl ${!hasKnockKnees ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}
          >
            Knock Knees: {!hasKnockKnees ? 'Normal (Clear)' : 'Present (Disqualified)'}
          </button>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Flat Foot Condition</label>
          <button
            type="button"
            onClick={() => setHasFlatFoot(!hasFlatFoot)}
            className={`w-full py-2 text-xs font-bold rounded-xl ${!hasFlatFoot ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}
          >
            Flat Foot: {!hasFlatFoot ? 'Clear' : 'Detected (Disqualified)'}
          </button>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Varicose Veins</label>
          <button
            type="button"
            onClick={() => setHasVaricose(!hasVaricose)}
            className={`w-full py-2 text-xs font-bold rounded-xl ${!hasVaricose ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}
          >
            Varicose Veins: {!hasVaricose ? 'None' : 'Detected (Disqualified)'}
          </button>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Color Vision (CP-III)</label>
          <button
            type="button"
            onClick={() => setColorBlind(!colorBlind)}
            className={`w-full py-2 text-xs font-bold rounded-xl ${!colorBlind ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}
          >
            Color Vision: {!colorBlind ? 'Normal (Pass)' : 'Defective (Disqualified)'}
          </button>
        </div>
      </div>

      <div className={`p-4 rounded-2xl border ${isMedicalFit ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'} flex items-center justify-between flex-wrap gap-4`}>
        <div>
          <div className={`font-black text-base ${isMedicalFit ? 'text-emerald-900' : 'text-rose-900'}`}>
            {isMedicalFit ? 'PRELIMINARY ASSESSMENT: FIT FOR CAPF MEDICAL' : 'POTENTIAL MEDICAL REJECTION POINTS FOUND'}
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Note: Laser eye surgery (LASIK) and permanent tattoos on saluting hands are strictly prohibited.
          </p>
        </div>
        <span className={`px-4 py-1.5 rounded-xl text-xs font-bold ${isMedicalFit ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'}`}>
          {isMedicalFit ? 'Medical Fit' : 'Review Needed'}
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   MASTER DISPATCHER COMPONENT
   ========================================================================= */
export const RankingToolEngine: React.FC<RankingToolProps> = ({ exam }) => {
  const slug = exam.slug;

  if (slug === 'agniveer-age-calculator-2026') {
    return <AgniveerAgeCalculator exam={exam} />;
  }
  if (slug === 'iob-llo-exam-pattern-selection-process-2026') {
    return <IobLloExamCalculator exam={exam} />;
  }
  if (slug === 'mp-police-eligibility-2026') {
    return <MpPoliceEligibilityChecker exam={exam} />;
  }
  if (slug === 'ssc-gd-height-eligibility-checker-2026' || slug === 'ssc-gd-female-eligibility-checker-2026') {
    return <SscGdHeightChecker exam={exam} />;
  }
  if (slug === 'army-running-time-calculator-1600m-2026') {
    return <ArmyRunningTimeCalculator exam={exam} />;
  }
  if (slug === 'army-promotion-timeline-tool-1') {
    return <ArmyPromotionTimelineTool exam={exam} />;
  }
  if (slug === 'ssc-cgl-age-limit-2026-calculator') {
    return <SscCglAgeCalculator exam={exam} />;
  }
  if (slug === 'government-exam-height-eligibility-checker-india' || slug === 'army-height-checker-region-wise-2026') {
    return <GovtHeightChecker exam={exam} />;
  }
  if (slug === 'ssc-gd-eligibility-2026') {
    return <MpPoliceEligibilityChecker exam={exam} />;
  }
  if (slug === 'ssc-gd-running-marks-calculator-2026') {
    return <SscGdRunningCalculator exam={exam} />;
  }
  if (slug === 'army-document-checklist-generator-1') {
    return <ArmyDocChecklistGenerator exam={exam} />;
  }
  if (slug === 'nda-age-limit-calculator-2026') {
    return <NdaAgeLimitCalculator exam={exam} />;
  }
  if (slug === 'ssc-gd-medical-fitness-checker-2026') {
    return <SscGdMedicalFitnessChecker exam={exam} />;
  }

  return null;
};
