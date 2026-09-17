import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Calculator, Percent, FileCheck, DollarSign, Award, AlertCircle } from 'lucide-react';

interface ConcorToolsModalProps {
  tool: string | null;
  onClose: () => void;
}

export const ConcorToolsModal: React.FC<ConcorToolsModalProps> = ({ tool, onClose }) => {
  // Eligibility State
  const [eligPost, setEligPost] = useState('MT/CO');
  const [eligQual, setEligQual] = useState('MBA (Marketing/Logistics/IB/Supply Chain)');
  const [eligMarks, setEligMarks] = useState('62');

  // Age State
  const [ageCadre, setAgeCadre] = useState<'MT' | 'AO'>('MT');
  const [ageCategory, setAgeCategory] = useState<'UR' | 'OBC' | 'SC' | 'ST' | 'PWBD' | 'ESM'>('UR');
  const [birthDate, setBirthDate] = useState('1999-05-15');

  // Experience State
  const [expPost, setExpPost] = useState('AO/CO');
  const [expQual, setExpQual] = useState('Degree');
  const [expYears, setExpYears] = useState('2');

  // Fee State
  const [feeCadre, setFeeCadre] = useState<'MT' | 'AO'>('MT');
  const [feeCategory, setFeeCategory] = useState<'UR' | 'OBC' | 'EWS' | 'SC' | 'ST' | 'PWBD' | 'ESM'>('UR');

  // CBT Score State
  const [cbtCorrect, setCbtCorrect] = useState(72);
  const [cbtWrong, setCbtWrong] = useState(16);

  // Negative Marking State
  const [negQuestions, setNegQuestions] = useState(20);

  // Document Checklist State
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    '10th': true,
    'degree': true,
    'caste': false,
    'experience': false,
    'photo': true,
    'noc': false
  });

  if (!tool) return null;

  // Calculate Age as of 31-08-2026
  const getAgeOnCutoff = () => {
    if (!birthDate) return { years: 0, months: 0, days: 0, totalYears: 0, isEligible: false, maxAge: 28 };
    const bDate = new Date(birthDate);
    const cutOff = new Date(2026, 7, 31); // 31 Aug 2026

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

    const baseMax = ageCadre === 'MT' ? 28 : 32;
    let relaxation = 0;
    if (ageCategory === 'OBC') relaxation = 3;
    else if (ageCategory === 'SC' || ageCategory === 'ST') relaxation = 5;
    else if (ageCategory === 'PWBD') relaxation = 10;
    else if (ageCategory === 'ESM') relaxation = 3;

    const maxAge = Math.min(50, baseMax + relaxation);
    const totalYears = years + months / 12 + days / 365;
    const isEligible = totalYears >= 18 && totalYears <= maxAge;

    return { years, months, days, totalYears, isEligible, maxAge };
  };

  // Calculate CBT Score
  const cbtUnattempted = Math.max(0, 100 - (cbtCorrect + cbtWrong));
  const cbtGrossMarks = cbtCorrect * 1;
  const cbtDeduction = cbtWrong * 0.25;
  const cbtNetScore = Math.max(0, cbtGrossMarks - cbtDeduction);

  const toggleDoc = (key: string) => {
    setCheckedDocs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalVerified = Object.values(checkedDocs).filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
              {tool === 'eligibility' && <CheckCircle2 className="w-4 h-4" />}
              {tool === 'age' && <Clock className="w-4 h-4" />}
              {tool === 'experience' && <Award className="w-4 h-4" />}
              {tool === 'fee' && <DollarSign className="w-4 h-4" />}
              {tool === 'cbt' && <Calculator className="w-4 h-4" />}
              {tool === 'negative' && <Percent className="w-4 h-4" />}
              {tool === 'documents' && <FileCheck className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                {tool === 'eligibility' && 'CONCOR Eligibility Checker'}
                {tool === 'age' && 'CONCOR Age Eligibility Calculator'}
                {tool === 'experience' && 'CONCOR Experience Checker'}
                {tool === 'fee' && 'Application Fee Calculator'}
                {tool === 'cbt' && 'CBT Score & Marks Calculator'}
                {tool === 'negative' && 'CBT Negative Marking Calculator'}
                {tool === 'documents' && 'Document Verification Checklist'}
              </h3>
              <p className="text-xs text-slate-500">Official CONCOR Employment Notification No. 05/2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 text-xs sm:text-sm">
          {/* 1. ELIGIBILITY CHECKER */}
          {tool === 'eligibility' && (
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-slate-800 text-xs mb-1">Select CONCOR Post</label>
                <select
                  value={eligPost}
                  onChange={(e) => setEligPost(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden focus:border-blue-500"
                >
                  <option value="MT/CO">MT/CO - Management Trainee (Commercial & Operations)</option>
                  <option value="MT/FA">MT/FA - Management Trainee (Accounts - CA)</option>
                  <option value="MT/FA/CS">MT/FA/CS - Management Trainee (Compliance - CS)</option>
                  <option value="MT/TH">MT/TH - Management Trainee (Technical - Mechanical Engg)</option>
                  <option value="MT/MIS">MT/MIS - Management Trainee (MIS - MCA/B.Tech CS/IT)</option>
                  <option value="MT/CE">MT/CE - Management Trainee (Civil Engineering)</option>
                  <option value="MT/P&A">MT/P&A - Management Trainee (Personnel & Administration - MBA HR)</option>
                  <option value="AO/CO">AO/CO - Assistant Officer (Commercial & Operations)</option>
                  <option value="AO/FA">AO/FA - Assistant Officer (Accounts & Finance)</option>
                  <option value="AO/TH">AO/TH - Assistant Officer (Technical)</option>
                  <option value="AO/MIS">AO/MIS - Assistant Officer (MIS/IT)</option>
                  <option value="AO/CE">AO/CE - Assistant Officer (Civil Engineering)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-800 text-xs mb-1">Your Degree Marks (%)</label>
                <input
                  type="number"
                  value={eligMarks}
                  onChange={(e) => setEligMarks(e.target.value)}
                  min="35"
                  max="100"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden focus:border-blue-500"
                  placeholder="e.g. 60"
                />
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Rule Verification for {eligPost}:</span>
                </div>
                <p className="text-xs text-blue-800">
                  {eligPost.startsWith('MT')
                    ? Number(eligMarks) >= 60
                      ? '✅ You meet the minimum 60% aggregate qualification criterion for Management Trainee cadre.'
                      : '⚠️ Warning: Management Trainee posts require a minimum of 60% in PG/MBA (or CA/CS qualified).'
                    : Number(eligMarks) >= 50
                    ? '✅ You meet the minimum 50% qualifying score for Assistant Officer cadre.'
                    : '⚠️ Minimum 50% aggregate required for Assistant Officer positions.'}
                </p>
                <p className="text-[11px] text-blue-700">Crucial Cut-off date for qualifications is 31 August 2026.</p>
              </div>
            </div>
          )}

          {/* 2. AGE CALCULATOR */}
          {tool === 'age' && (() => {
            const res = getAgeOnCutoff();
            return (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-800 text-xs mb-1">Cadre</label>
                    <select
                      value={ageCadre}
                      onChange={(e) => setAgeCadre(e.target.value as 'MT' | 'AO')}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                    >
                      <option value="MT">Management Trainee (18-28 Yrs)</option>
                      <option value="AO">Assistant Officer (18-32 Yrs)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-800 text-xs mb-1">Category</label>
                    <select
                      value={ageCategory}
                      onChange={(e) => setAgeCategory(e.target.value as any)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                    >
                      <option value="UR">UR / General</option>
                      <option value="OBC">OBC-NCL (+3 Yrs)</option>
                      <option value="SC">SC (+5 Yrs)</option>
                      <option value="ST">ST (+5 Yrs)</option>
                      <option value="PWBD">PwBD (+10 Yrs)</option>
                      <option value="ESM">Ex-Servicemen (+3 Yrs + Service)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 text-xs mb-1">Date of Birth</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                  />
                </div>

                <div className={`p-4 rounded-xl border ${res.isEligible ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-red-50 border-red-200 text-red-950'} space-y-2`}>
                  <div className="flex items-center justify-between font-bold text-xs">
                    <span>Age as of 31-08-2026:</span>
                    <span className="text-sm font-black">{res.years} Yrs, {res.months} Mos, {res.days} Days</span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/40">
                    <span>Max Allowed Upper Age:</span>
                    <span className="font-bold">{res.maxAge} Years (Max Cap: 50 Yrs)</span>
                  </div>
                  <div className="font-bold text-xs pt-1">
                    {res.isEligible ? '✅ ELIGIBLE: Your age is strictly within the prescribed limit.' : '❌ INELIGIBLE: Age exceeds permitted limits or is under 18.'}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 3. EXPERIENCE CHECKER */}
          {tool === 'experience' && (
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-slate-800 text-xs mb-1">Select Post</label>
                <select
                  value={expPost}
                  onChange={(e) => setExpPost(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                >
                  <option value="MT">Management Trainee (Any Discipline) - 0 Yrs Exp</option>
                  <option value="AO/CO">AO/CO - Assistant Officer (Commercial & Operations)</option>
                  <option value="AO/FA">AO/FA - Assistant Officer (Accounts)</option>
                  <option value="AO/TH">AO/TH - Assistant Officer (Technical)</option>
                  <option value="AO/MIS">AO/MIS - Assistant Officer (MIS/IT)</option>
                  <option value="AO/CE">AO/CE - Assistant Officer (Civil)</option>
                </select>
              </div>

              {expPost.startsWith('AO') && (
                <div>
                  <label className="block font-bold text-slate-800 text-xs mb-1">Qualification Held</label>
                  <select
                    value={expQual}
                    onChange={(e) => setExpQual(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                  >
                    <option value="Degree">B.Tech / B.E. / Graduation Degree (1 Year Exp Needed)</option>
                    <option value="Diploma">Diploma in Engineering / Commercial (3 Years Exp Needed)</option>
                    <option value="BCom">B.Com (4 Years Exp Needed for AO/FA)</option>
                    <option value="CAInter">CA / CMA Inter (2 Years Exp Needed for AO/FA)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block font-bold text-slate-800 text-xs mb-1">Post-Qualification Experience (Years)</label>
                <input
                  type="number"
                  value={expYears}
                  onChange={(e) => setExpYears(e.target.value)}
                  min="0"
                  max="20"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                />
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs text-slate-700">
                <p className="font-bold text-slate-900">Experience Evaluation:</p>
                {expPost.startsWith('MT') ? (
                  <p className="text-emerald-700 font-bold">✅ Freshers are 100% eligible for Management Trainee posts! No prior experience required.</p>
                ) : (
                  <p>
                    Required Experience: <strong>{expQual === 'Degree' ? '1 Year' : expQual === 'Diploma' ? '3 Years' : expQual === 'BCom' ? '4 Years' : '2 Years'}</strong>.<br />
                    Candidate Experience: <strong>{expYears} Year(s)</strong>.<br />
                    Status: {Number(expYears) >= (expQual === 'Degree' ? 1 : expQual === 'Diploma' ? 3 : expQual === 'BCom' ? 4 : 2) ? (
                      <span className="text-emerald-700 font-bold">✅ Meets minimum experience criteria.</span>
                    ) : (
                      <span className="text-red-700 font-bold">❌ Short of minimum required experience as on 31-08-2026.</span>
                    )}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* 4. FEE CALCULATOR */}
          {tool === 'fee' && (() => {
            const isExempt = ['SC', 'ST', 'PWBD', 'ESM'].includes(feeCategory);
            const baseAmount = isExempt ? 0 : (feeCadre === 'MT' ? 750 : 500);
            const gst = isExempt ? 0 : Math.round(baseAmount * 0.18);
            const total = baseAmount + gst;

            return (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-800 text-xs mb-1">Post Cadre</label>
                    <select
                      value={feeCadre}
                      onChange={(e) => setFeeCadre(e.target.value as 'MT' | 'AO')}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                    >
                      <option value="MT">Management Trainee (₹750 Base)</option>
                      <option value="AO">Assistant Officer (₹500 Base)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-800 text-xs mb-1">Social Category</label>
                    <select
                      value={feeCategory}
                      onChange={(e) => setFeeCategory(e.target.value as any)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                    >
                      <option value="UR">UR / General</option>
                      <option value="OBC">OBC-NCL</option>
                      <option value="EWS">EWS</option>
                      <option value="SC">SC (Exempted)</option>
                      <option value="ST">ST (Exempted)</option>
                      <option value="PWBD">PwBD (Exempted)</option>
                      <option value="ESM">Ex-Servicemen (Exempted)</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Base Application Fee:</span>
                    <span className="font-bold text-slate-900">{isExempt ? '₹0.00 (Exempted)' : `₹${baseAmount}.00`}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated 18% GST / Bank Gateway:</span>
                    <span className="font-bold text-slate-900">{isExempt ? '₹0.00' : `₹${gst}.00`}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total Fee Payable:</span>
                    <span className={isExempt ? 'text-emerald-700' : 'text-blue-700'}>
                      {isExempt ? 'NIL (₹0 Exempted)' : `₹${total}.00 approx.`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 5. CBT SCORE CALCULATOR */}
          {tool === 'cbt' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 text-xs mb-1">Correct Answers (+1.0)</label>
                  <input
                    type="number"
                    value={cbtCorrect}
                    onChange={(e) => setCbtCorrect(Math.min(100, Math.max(0, Number(e.target.value))))}
                    min="0"
                    max="100"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 text-xs mb-1">Wrong Answers (-0.25)</label>
                  <input
                    type="number"
                    value={cbtWrong}
                    onChange={(e) => setCbtWrong(Math.min(100 - cbtCorrect, Math.max(0, Number(e.target.value))))}
                    min="0"
                    max="100"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Questions Attempted:</span>
                  <span className="font-bold">{cbtCorrect + cbtWrong} / 100</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Unattempted Questions:</span>
                  <span className="font-bold">{cbtUnattempted}</span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Gross Score (Correct x 1.0):</span>
                  <span className="font-bold">+{cbtGrossMarks} Marks</span>
                </div>
                <div className="flex justify-between text-red-700">
                  <span>Negative Penalty (Wrong x 0.25):</span>
                  <span className="font-bold">-{cbtDeduction.toFixed(2)} Marks</span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>Net CBT Score:</span>
                  <span className="text-blue-700 font-black">{cbtNetScore.toFixed(2)} / 100.00 ({cbtNetScore.toFixed(1)}%)</span>
                </div>
              </div>
            </div>
          )}

          {/* 6. NEGATIVE MARKING CALCULATOR */}
          {tool === 'negative' && (
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-slate-800 text-xs mb-1">Simulate Number of Incorrect Questions</label>
                <input
                  type="number"
                  value={negQuestions}
                  onChange={(e) => setNegQuestions(Math.min(100, Math.max(0, Number(e.target.value))))}
                  min="0"
                  max="100"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                />
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2 text-xs text-red-950">
                <p className="font-bold">Negative Marking Penalty Calculation:</p>
                <p>Every incorrect choice deducts <strong>0.25 Marks (1/4th)</strong>.</p>
                <div className="p-2.5 bg-white/80 rounded-lg border border-red-200 font-mono text-center text-sm font-bold text-red-700">
                  {negQuestions} wrong × 0.25 = -{(negQuestions * 0.25).toFixed(2)} Marks Lost
                </div>
                <p className="text-[11px] text-red-800">Note: Questions feature 5 options. Random guessing has only 20% accuracy probability.</p>
              </div>
            </div>
          )}

          {/* 7. DOCUMENT CHECKLIST */}
          {tool === 'documents' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-800">Verification Progress</span>
                <span className="font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">{totalVerified} / 6 Verified</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { id: '10th', title: '10th Class Marksheet / Passing Certificate', desc: 'Proof of Date of Birth & Candidate Name' },
                  { id: 'degree', title: 'Degree / Diploma Certificate & All Sem Marksheets', desc: 'Min 50-60% marks compliance' },
                  { id: 'caste', title: 'Caste / Category Certificate (SC/ST/OBC-NCL/EWS)', desc: 'Central Govt format issued for FY 2026-27' },
                  { id: 'experience', title: 'Experience Certificate (for Assistant Officer posts)', desc: 'Proof of post-qualification service duration' },
                  { id: 'photo', title: 'Recent Passport Photo & Clear Signature', desc: 'Photo 20-50 KB, Signature 10-20 KB' },
                  { id: 'noc', title: 'No Objection Certificate (NOC)', desc: 'Mandatory if currently employed in Central/State Govt or PSUs' }
                ].map((item) => (
                  <label
                    key={item.id}
                    onClick={() => toggleDoc(item.id)}
                    className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                      checkedDocs[item.id] ? 'bg-blue-50/40 border-blue-200 text-blue-950' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checkedDocs[item.id] || false}
                      onChange={() => {}}
                      className="mt-0.5 rounded-sm text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <h5 className="font-bold text-xs">{item.title}</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl cursor-pointer transition-colors"
          >
            Close Tool
          </button>
        </div>
      </div>
    </div>
  );
};
