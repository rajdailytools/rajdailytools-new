import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Calculator, Percent, FileCheck, DollarSign, Award, AlertCircle, Sparkles, BookOpen } from 'lucide-react';

interface UpesscToolsModalProps {
  tool: string | null;
  onClose: () => void;
}

export const UpesscToolsModal: React.FC<UpesscToolsModalProps> = ({ tool, onClose }) => {
  // Eligibility State
  const [eligCadre, setEligCadre] = useState<'urban' | 'attached'>('urban');
  const [hasDegree, setHasDegree] = useState(true);
  const [trainingType, setTrainingType] = useState('D.El.Ed. / BTC (2-Year NCTE)');
  const [hasTet, setHasTet] = useState(true);

  // Age State
  const [ageCategory, setAgeCategory] = useState<'UR' | 'OBC' | 'SC' | 'ST' | 'PWBD' | 'SHIKSHA_MITRA' | 'ATTACHED'>('UR');
  const [birthDate, setBirthDate] = useState('1998-05-15');

  // Fee State
  const [feeCategory, setFeeCategory] = useState<'UR_OBC_EWS' | 'SC_ST' | 'PWBD'>('UR_OBC_EWS');

  // OMR Written Exam Score State
  const [omrCorrect, setOmrCorrect] = useState(85);
  const [omrWrong, setOmrWrong] = useState(20);

  // Negative Marking State
  const [negAttempts, setNegAttempts] = useState(30);

  // Document Verification Checklist State
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    'app_form': true,
    'high_school': true,
    'intermediate': true,
    'graduation': true,
    'deled_btc': true,
    'tet_paper1': true,
    'domicile': true,
    'caste_ews': false,
    'affidavit': false,
    'character': false
  });

  if (!tool) return null;

  // Calculate Age as of 01-07-2026 (Official Cut-Off Date)
  const getAgeOnCutoff = () => {
    if (!birthDate) return { years: 0, months: 0, days: 0, isEligible: false, maxAge: 40 };
    const bDate = new Date(birthDate);
    const cutOff = new Date(2026, 6, 1); // 01 July 2026 (Month is 0-indexed: 6 = July)

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

    let maxAge = 40;
    if (ageCategory === 'OBC' || ageCategory === 'SC' || ageCategory === 'ST') maxAge = 45;
    else if (ageCategory === 'PWBD') maxAge = 55;
    else if (ageCategory === 'SHIKSHA_MITRA') maxAge = 60;
    else if (ageCategory === 'ATTACHED') maxAge = 62;

    const minAge = 21;
    const isEligible = years >= minAge && (years < maxAge || (years === maxAge && months === 0 && days === 0));

    return { years, months, days, isEligible, maxAge, minAge };
  };

  const ageData = getAgeOnCutoff();

  // OMR Score Calculation (120 Questions, 360 Marks, +3 for correct, -1 for wrong)
  const omrTotalQuestions = 120;
  const omrMaxMarks = 360;
  const omrUnattempted = Math.max(0, omrTotalQuestions - (omrCorrect + omrWrong));
  const omrGrossMarks = omrCorrect * 3;
  const omrPenalty = omrWrong * 1;
  const omrNetScore = Math.max(0, omrGrossMarks - omrPenalty);
  const omrPercentage = ((omrNetScore / omrMaxMarks) * 100).toFixed(2);

  // Fee calculation
  const getFeeAmount = () => {
    if (feeCategory === 'UR_OBC_EWS') return '₹1,000.00';
    if (feeCategory === 'SC_ST') return '₹500.00';
    return '₹300.00';
  };

  // Eligibility evaluation
  const isCandidateEligible = hasDegree && trainingType !== 'none' && hasTet;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-400/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">UPESSC PRT Tool</span>
              <h3 className="text-base font-bold text-white font-display">
                {tool === 'eligibility' && 'UPESSC PRT Eligibility Checker'}
                {tool === 'age' && 'Age Cut-Off Calculator (As on 01.07.2026)'}
                {tool === 'fee' && 'Application Fee Calculator'}
                {tool === 'omr' && 'OMR Written Exam Score Calculator (360 Marks)'}
                {tool === 'negative' && 'Negative Marking Penalty Simulator (-1 Mark)'}
                {tool === 'resizer' && 'Photo & Signature Resizer Helper'}
                {tool === 'checklist' && 'Document Verification (DV) Checklist'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[80vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
          {/* TOOL 1: ELIGIBILITY CHECKER */}
          {tool === 'eligibility' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Official criteria as per Clause 7 of Advt 05/2026: Candidates must possess Graduation + Teacher Training (BTC/D.El.Ed./B.El.Ed.) + UPTET/CTET Paper-I passed.
              </p>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Select Applied Cadre</label>
                <select
                  value={eligCadre}
                  onChange={(e) => setEligCadre(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold"
                >
                  <option value="urban">Assistant Teacher Primary Urban (बेसिक शिक्षा विभाग - 11,508 Posts)</option>
                  <option value="attached">Assistant Teacher Attached Primary (माध्यमिक शिक्षा विभाग - 897 Posts)</option>
                </select>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasDegree}
                    onChange={(e) => setHasDegree(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-semibold text-slate-800 text-xs">
                    Possess Graduation Degree from a recognized Indian University (B.A./B.Sc./B.Com./B.Tech./etc.)
                  </span>
                </label>

                <div>
                  <label className="font-bold text-slate-800 block mb-1 text-xs">Teacher Training Qualification</label>
                  <select
                    value={trainingType}
                    onChange={(e) => setTrainingType(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                  >
                    <option value="D.El.Ed. / BTC (2-Year NCTE)">Basic Teacher Certificate (BTC) / 2-Year D.El.Ed.</option>
                    <option value="Special BTC / Urdu BTC">Special BTC / 2-Year BTC Urdu</option>
                    <option value="B.El.Ed. (4-Year)">4-Year Bachelor of Elementary Education (B.El.Ed.)</option>
                    <option value="Special Ed Diploma (RCI)">2-Year Diploma in Special Education approved by RCI</option>
                    <option value="none">No Teacher Training Certificate</option>
                  </select>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasTet}
                    onChange={(e) => setHasTet(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-semibold text-slate-800 text-xs">
                    Passed Teacher Eligibility Test (TET) Paper-I (Classes 1–5) by UP Govt (UPTET) or CBSE (CTET)
                  </span>
                </label>
              </div>

              {isCandidateEligible ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Eligible to Apply for UPESSC PRT Teacher 2026!</span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    You fulfill all statutory conditions (Graduation + {trainingType} + TET Paper-I). Ensure all certificates were acquired on or before 15 October 2026.
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-rose-50 border border-rose-300 rounded-xl text-rose-900 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>Ineligible / Missing Qualification</span>
                  </div>
                  <p className="text-xs text-rose-800">
                    All three conditions are strictly mandatory under Clause 7: (1) Graduation Degree, (2) Recognised Teacher Training (BTC/D.El.Ed./B.El.Ed./Special Ed), and (3) UPTET/CTET Paper-I passed.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TOOL 2: AGE CALCULATOR */}
          {tool === 'age' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Official Age Cut-off Date: <strong>01 July 2026</strong> (Notification Clause 6(ख)). Minimum age is 21 years across both school cadres.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-800 block mb-1 text-xs">Category / Reservation</label>
                  <select
                    value={ageCategory}
                    onChange={(e) => setAgeCategory(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold"
                  >
                    <option value="UR">General / Unreserved / EWS / Other States (21-40 Yrs)</option>
                    <option value="OBC">OBC of Uttar Pradesh (21-45 Yrs - 5 Yrs Rel.)</option>
                    <option value="SC">SC of Uttar Pradesh (21-45 Yrs - 5 Yrs Rel.)</option>
                    <option value="ST">ST of Uttar Pradesh (21-45 Yrs - 5 Yrs Rel.)</option>
                    <option value="PWBD">Divyangjan / PwD of UP (21-55 Yrs - 15 Yrs Rel.)</option>
                    <option value="SHIKSHA_MITRA">Shiksha Mitra (Urban Primary - Up to 60 Yrs)</option>
                    <option value="ATTACHED">Attached Primary (Aided Schools - Up to 62 Yrs)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1 text-xs">Date of Birth (As per 10th)</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Calculated Age as on 01.07.2026</span>
                <div className="text-xl font-black text-slate-900">
                  {ageData.years} Years, {ageData.months} Months, {ageData.days} Days
                </div>
                <div className="text-xs text-slate-600">
                  Permissible age bracket for selected category: <strong>{ageData.minAge} to {ageData.maxAge} Years</strong>.
                </div>
              </div>

              {ageData.isEligible ? (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold">Age is within the official permissible limit!</span>
                </div>
              ) : (
                <div className="p-3 bg-rose-50 border border-rose-300 rounded-xl text-rose-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="text-xs font-bold">
                    Age is outside the permissible bracket ({ageData.minAge} to {ageData.maxAge} years on 01.07.2026).
                  </span>
                </div>
              )}
            </div>
          )}

          {/* TOOL 3: FEE CALCULATOR */}
          {tool === 'fee' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Official Application Fee Structure as prescribed under Clause 4 of Advertisement No. 05/2026:
              </p>

              <div>
                <label className="font-bold text-slate-800 block mb-1 text-xs">Select Candidate Category</label>
                <select
                  value={feeCategory}
                  onChange={(e) => setFeeCategory(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold"
                >
                  <option value="UR_OBC_EWS">General / Unreserved / OBC / EWS / Out-of-State Candidates</option>
                  <option value="SC_ST">Scheduled Castes (SC) / Scheduled Tribes (ST) of Uttar Pradesh</option>
                  <option value="PWBD">Divyangjan / PwD Candidates of Uttar Pradesh</option>
                </select>
              </div>

              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-amber-800 font-bold uppercase text-[10px]">Net Fee Payable</span>
                  <div className="text-2xl font-black text-amber-950 mt-0.5">{getFeeAmount()}</div>
                  <span className="text-xs text-amber-700 block mt-1">Non-refundable online deposit</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-800">Official Payment Notice:</span>
                <p>Fee payment can be completed exclusively via integrated online gateway (Debit Card, Credit Card, Internet Banking) by 15 October 2026. Retain the bank transaction reference number.</p>
              </div>
            </div>
          )}

          {/* TOOL 4: OMR SCORE CALCULATOR */}
          {tool === 'omr' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Written examination consists of <strong>120 MCQs for 360 Marks</strong>. Correct Answer: <strong>+3 Marks</strong> | Incorrect/Multiple Answer: <strong>-1 Mark penalty</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-800 block mb-1 text-xs">Correct Answers (0-120)</label>
                  <input
                    type="number"
                    min="0"
                    max="120"
                    value={omrCorrect}
                    onChange={(e) => setOmrCorrect(Math.min(120, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1 text-xs">Wrong Answers (0-120)</label>
                  <input
                    type="number"
                    min="0"
                    max={120 - omrCorrect}
                    value={omrWrong}
                    onChange={(e) => setOmrWrong(Math.min(120 - omrCorrect, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2 bg-white rounded-lg border border-blue-100">
                    <span className="text-[10px] text-slate-400 font-bold block">Gross Marks</span>
                    <span className="text-base font-black text-blue-900">{omrGrossMarks}</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-rose-100">
                    <span className="text-[10px] text-rose-500 font-bold block">Deduction</span>
                    <span className="text-base font-black text-rose-700">-{omrPenalty}</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-emerald-100">
                    <span className="text-[10px] text-emerald-600 font-bold block">Net Marks</span>
                    <span className="text-base font-black text-emerald-800">{omrNetScore} / 360</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-indigo-100">
                    <span className="text-[10px] text-indigo-500 font-bold block">Percentage</span>
                    <span className="text-base font-black text-indigo-900">{omrPercentage}%</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 text-center">
                  Unattempted Questions: <strong>{omrUnattempted}</strong> (0 marks deducted).
                </div>
              </div>
            </div>
          )}

          {/* TOOL 5: NEGATIVE MARKING SIMULATOR */}
          {tool === 'negative' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Clause 9(क) Negative Marking Rule: For every incorrect answer or multiple blackened circles, <strong>1 mark is deducted</strong>.
              </p>

              <div>
                <label className="font-bold text-slate-800 block mb-1 text-xs">Simulate Incorrect Guesses (1 to 60)</label>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={negAttempts}
                  onChange={(e) => setNegAttempts(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-rose-600"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-1">
                  <span>1 Wrong</span>
                  <span className="font-bold text-rose-700">{negAttempts} Wrong Guesses</span>
                  <span>60 Wrong</span>
                </div>
              </div>

              <div className="p-4 bg-rose-50/80 border border-rose-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-900">Total Marks Lost to Negative Marking:</span>
                  <span className="text-lg font-black text-rose-700">-{negAttempts} Marks</span>
                </div>
                <p className="text-xs text-rose-800 leading-relaxed">
                  Every 3 wrong answers completely erase the reward of 1 correct answer (3 marks earned − 3 marks lost = 0). Avoid blind guesswork!
                </p>
              </div>
            </div>
          )}

          {/* TOOL 6: PHOTO & SIGNATURE RESIZER */}
          {tool === 'resizer' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Official Upload Specifications as per Clause 2.13 and 2.14 of Advertisement 05/2026:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Photograph</span>
                  <span className="text-sm font-bold text-slate-900 block">30 KB – 300 KB</span>
                  <span className="text-xs text-slate-500 block">Format: JPG / JPEG</span>
                  <span className="text-[11px] text-slate-600 block">Resolution: 300 to 600 pixels, recent colored photo on light background.</span>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Signature</span>
                  <span className="text-sm font-bold text-slate-900 block">10 KB – 200 KB</span>
                  <span className="text-xs text-slate-500 block">Format: JPG / JPEG</span>
                  <span className="text-[11px] text-slate-600 block">Resolution: 140 × 110 pixels, black ink on white paper only.</span>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Documents (PDF)</span>
                  <span className="text-sm font-bold text-slate-900 block">50 KB – 500 KB</span>
                  <span className="text-xs text-slate-500 block">Format: Clean PDF</span>
                  <span className="text-[11px] text-slate-600 block">High school, graduation, D.El.Ed., TET, and reservation certificates.</span>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                <strong>⚠️ Form Rejection Precaution:</strong> Signatures signed in capital block letters or in blue/red ink are rejected. Self-attestation must be clearly legible on all PDF uploads.
              </div>
            </div>
          )}

          {/* TOOL 7: DOCUMENT CHECKLIST */}
          {tool === 'checklist' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Document Verification (DV) Checklist under Clause 14: Candidates must present original documents + 2 sets of self-attested copies + 2 copies of online application form.
              </p>

              <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {[
                  { key: 'app_form', label: '2 Printed Copies of Online Application Form (Retained by Candidate)' },
                  { key: 'high_school', label: 'High School (10th) Marksheet & Certificate (Date of Birth Proof)' },
                  { key: 'intermediate', label: 'Intermediate (12th) Marksheet & Certificate' },
                  { key: 'graduation', label: 'Graduation Degree & All Year/Semester Marksheets' },
                  { key: 'deled_btc', label: 'BTC / D.El.Ed. / B.El.Ed. Training Marksheets & Pass Certificate' },
                  { key: 'tet_paper1', label: 'UPTET Paper-I or CTET Paper-I Qualifying Marksheet & Certificate' },
                  { key: 'domicile', label: 'Uttar Pradesh Domicile Certificate (Bona fide resident proof)' },
                  { key: 'caste_ews', label: 'Caste Certificate (Father’s side for women) / Valid EWS Certificate' },
                  { key: 'affidavit', label: 'Affidavit as prescribed in Notification Appendix-6' },
                  { key: 'character', label: 'Character Certificates (From last attended institution + 2 Gazetted officers)' }
                ].map((doc) => (
                  <label key={doc.key} className="flex items-center gap-2.5 cursor-pointer py-1 text-xs">
                    <input
                      type="checkbox"
                      checked={checkedDocs[doc.key] || false}
                      onChange={(e) => setCheckedDocs({ ...checkedDocs, [doc.key]: e.target.checked })}
                      className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className={checkedDocs[doc.key] ? 'text-slate-900 font-bold' : 'text-slate-600'}>
                      {doc.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Close Tool
          </button>
        </div>
      </div>
    </div>
  );
};
