import { ExamInfoSection } from '../types/exam';

export function getBtscSectionsPart2(): ExamInfoSection[] {
  return [
    {
      id: 26,
      title: '26. Question Paper Structure & Subject Distribution',
      badge: 'Paper Structure',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The 100-question CBT paper is formulated based on the standard undergraduate curriculum of Bachelor of Veterinary Science & Animal Husbandry (B.V.Sc. & A.H.) as approved by the Veterinary Council of India (VCI):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Domain / Subject Group</th>
                  <th class="p-2.5">Core Topics</th>
                  <th class="p-2.5">Approx Questions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50/50">Veterinary Clinical Sciences</td>
                  <td class="p-2.5">Medicine, Surgery, Gynaecology & Obstetrics, Radiology</td>
                  <td class="p-2.5 font-bold text-blue-900">35 Questions</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50/50">Veterinary Paraclinical Sciences</td>
                  <td class="p-2.5">Pathology, Microbiology, Parasitology, Pharmacology & Toxicology</td>
                  <td class="p-2.5 font-bold text-blue-900">30 Questions</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50/50">Veterinary Pre-Clinical Sciences</td>
                  <td class="p-2.5">Anatomy & Histology, Physiology & Biochemistry</td>
                  <td class="p-2.5 font-bold text-blue-900">15 Questions</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900 bg-slate-50/50">Animal Production & Management</td>
                  <td class="p-2.5">Livestock Production Management, Nutrition, Genetics & Breeding, LPT, VPE</td>
                  <td class="p-2.5 font-bold text-blue-900">20 Questions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Negative Marking Rules & Penalty Calculation',
      badge: 'Negative Marking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Advt. No. 27/2026 incorporates a strict <strong>negative marking</strong> mechanism to evaluate candidate precision:</p>
          <div class="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2 text-xs text-red-950">
            <div class="font-bold text-sm">Negative Marking Formula:</div>
            <ul class="list-disc pl-5 space-y-1">
              <li>Each correct answer earns <strong>+1.00 mark</strong>.</li>
              <li>Each incorrect answer results in deduction of <strong>-0.25 mark</strong> (1/4th mark).</li>
              <li>Unattempted questions receive <strong>0.00 mark</strong> (neither added nor deducted).</li>
              <li><strong>Net CBT Score = (Correct Answers × 1) − (Incorrect Answers × 0.25)</strong></li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Minimum Qualifying Marks by Category',
      badge: 'Cut-Off %',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must achieve the minimum category-wise qualifying percentage in the CBT examination to be considered in the merit selection pool:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Candidate Category</th>
                  <th class="p-2.5">Minimum Qualifying Percentage</th>
                  <th class="p-2.5">Min Marks (out of 100)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">General / Unreserved (UR)</td>
                  <td class="p-2.5 font-bold text-blue-900">40.0%</td>
                  <td class="p-2.5 font-mono font-bold">40 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Backward Class (BC)</td>
                  <td class="p-2.5 font-bold text-purple-900">36.5%</td>
                  <td class="p-2.5 font-mono font-bold">36.5 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Extremely Backward Class (EBC)</td>
                  <td class="p-2.5 font-bold text-indigo-900">34.0%</td>
                  <td class="p-2.5 font-mono font-bold">34 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Scheduled Caste (SC) & ST</td>
                  <td class="p-2.5 font-bold text-emerald-900">32.0%</td>
                  <td class="p-2.5 font-mono font-bold">32 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">All Female Candidates (Bihar Domicile)</td>
                  <td class="p-2.5 font-bold text-pink-700">32.0%</td>
                  <td class="p-2.5 font-mono font-bold">32 Marks</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Divyang (PwBD) Candidates</td>
                  <td class="p-2.5 font-bold text-emerald-900">32.0%</td>
                  <td class="p-2.5 font-mono font-bold">32 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500">Note: Scoring above the minimum qualifying mark does not guarantee selection; final appointment depends on the composite merit list.</p>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Normalization Formula (Multi-Shift CBT Exams)',
      badge: 'Normalization',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>If the Computer Based Test is conducted in multiple shifts, BTSC applies the standardized equi-percentile or percentile normalization method across shifts to balance variations in question difficulty.</p>
          <p class="text-xs text-slate-600">The normalized score calculated by the commission will be treated as the final written examination score for computing selection weightage marks.</p>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Detailed Syllabus Overview (Veterinary Science & A.H.)',
      badge: 'Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The CBT syllabus aligns with the Minimum Standards of Veterinary Education (MSVE) regulations prescribed by the Veterinary Council of India for B.V.Sc. & A.H. degree courses.</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
            <div><strong>Syllabus Scope:</strong> Complete Veterinary Science curriculum covering basic, paraclinical, and clinical subjects, disease diagnosis, animal surgery, obstetrics, pharmacology, and farm animal management.</div>
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Subject/Topic Breakdown for CBT Exam',
      badge: 'Topics',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key topics covered in the 100-question objective paper:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li><strong>Veterinary Medicine:</strong> Infectious diseases of cattle, buffalo, sheep, goat, pig, canine; metabolic disorders; deficiency diseases; zoonoses.</li>
            <li><strong>Veterinary Gynaecology & Obstetrics:</strong> Infertility, artificial insemination, synchronization of estrus, dystocia, pregnancy diagnosis.</li>
            <li><strong>Veterinary Surgery & Radiology:</strong> Pre-operative and post-operative care, fractures, abdominal surgery, local and general anesthesia.</li>
            <li><strong>Veterinary Pathology & Microbiology:</strong> Bacteriology, virology, immunology, gross pathology, post-mortem techniques.</li>
            <li><strong>Veterinary Pharmacology:</strong> Antibiotics, anthelmintics, dosage calculation, drug toxicity, pharmacokinetics.</li>
            <li><strong>Livestock Production & Management:</strong> Dairy farming, housing, breeding systems, feed formulation, fodder conservation.</li>
          </ul>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Selection Process & Evaluation Framework',
      badge: 'Selection',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Selection of Touring Veterinary Officers is based on a composite evaluation framework totaling <strong>100 Marks</strong>:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <span class="text-xs font-bold text-blue-700 uppercase">Component A (75%)</span>
              <span class="text-2xl font-black text-blue-950 block mt-1">75 Marks</span>
              <span class="text-xs font-bold text-slate-800 mt-1 block">Written Exam (CBT) Weightage</span>
              <p class="text-xs text-slate-600 mt-1">75% weightage of marks obtained in 100-marks CBT test.</p>
            </div>
            <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
              <span class="text-xs font-bold text-emerald-700 uppercase">Component B (25%)</span>
              <span class="text-2xl font-black text-emerald-950 block mt-1">25 Marks</span>
              <span class="text-xs font-bold text-slate-800 mt-1 block">Work Experience Weightage</span>
              <p class="text-xs text-slate-600 mt-1">Contractual service in Bihar Govt Animal Resources Dept (5 marks/yr, max 25).</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Written Exam (75%) + Work Experience (25%) Weightage Formula',
      badge: 'Weightage',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The statutory merit compilation formula used by BTSC:</p>
          <div class="p-4 bg-purple-50 border border-purple-200 rounded-xl text-xs text-purple-950 space-y-2">
            <div class="font-bold text-sm font-mono">Composite Merit Score = (CBT Score / 100 × 75) + Experience Marks (Max 25)</div>
            <p><strong>Example 1:</strong> Candidate scoring 80/100 in CBT with 2 years Bihar Govt experience:</p>
            <p class="font-mono bg-white p-2 rounded border border-purple-200">CBT Weightage = (80 / 100) × 75 = 60 Marks<br/>Experience Marks = 2 × 5 = 10 Marks<br/>Final Score = 60 + 10 = <strong>70.00 Marks (out of 100)</strong></p>
          </div>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Interactive Selection & Marks Calculator Tool',
      badge: 'Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Use our dedicated Selection Score Calculator to compute your composite score out of 100:</p>
          <div class="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div class="font-bold text-emerald-900 text-sm">Composite Merit Score Calculator</div>
              <p class="text-xs text-slate-600 mt-0.5">Enter your CBT correct/wrong answers and service dates to compute exact merit points.</p>
            </div>
            <button onclick="window.__openBtscTool && window.__openBtscTool('selection')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs cursor-pointer">
              Open Selection Tool
            </button>
          </div>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Final Merit Process & Tie-Breaking Criteria',
      badge: 'Merit Process',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Final merit order is arranged in descending order of the 100-mark composite score. In the event of equal aggregate marks:</p>
          <ol class="list-decimal pl-5 space-y-1 text-xs text-slate-700">
            <li>Higher marks obtained in the Computer Based Written Examination.</li>
            <li>Higher marks in B.V.Sc. / B.V.Sc. & A.H. degree examination.</li>
            <li>Candidate senior in age (earlier Date of Birth).</li>
            <li>Alphabetical order of candidate name as per English dictionary.</li>
          </ol>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Document Verification (DV) Guidelines',
      badge: 'DV Stage',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Shortlisted candidates will be summoned to the BTSC office in Patna for in-person Document Verification.</p>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
            <div>Candidates must produce original certificates along with two sets of self-attested photocopies. Failure to present the Bihar Veterinary Council permanent registration or original degree certificate will result in immediate disqualification.</div>
          </div>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Medical Examination & Final Appointment Information',
      badge: 'Appointment',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Selected candidates recommended by BTSC will undergo a medical examination conducted by the State Medical Board.</p>
          <p class="text-xs text-slate-600">Upon medical fitness clearance and satisfactory character verification by district authorities, formal appointment orders as Touring Veterinary Officer will be issued by the Animal & Fisheries Resources Department, Government of Bihar.</p>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Recruitment Flowchart & Selection Journey',
      badge: 'Flowchart',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The recruitment follows a systematic 5-stage selection workflow:</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs font-semibold text-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold">1</span>
              <span>Online Application Submission & Fee Payment (24 Sept to 23 Oct 2026)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold">2</span>
              <span>Admit Card Issue & Computer Based Test (CBT - 100 MCQs, 2 Hours)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold">3</span>
              <span>CBT Evaluation (75% Weightage) + Experience Verification (25% Weightage)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold">4</span>
              <span>In-Person Document Verification (DV) at BTSC Patna</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold">5</span>
              <span>Final Category-wise Merit Recommendation & Departmental Posting</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Selection Timeline & Milestone Roadmap',
      badge: 'Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Expected progress timeline for BTSC Advt. No. 27/2026:</p>
          <div class="border-l-2 border-blue-500 pl-4 space-y-3 text-xs my-2">
            <div>
              <span class="font-bold text-blue-900 block">Sept - Oct 2026</span>
              <span class="text-slate-600">Online registration and payment window.</span>
            </div>
            <div>
              <span class="font-bold text-blue-900 block">Expected Nov/Dec 2026</span>
              <span class="text-slate-600">Scrutiny of applications & examination center allotment.</span>
            </div>
            <div>
              <span class="font-bold text-blue-900 block">Exam Date (To Be Announced)</span>
              <span class="text-slate-600">Conduct of Computer Based Online Examination across Bihar test centers.</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Vacancy Visualization & Category Chart',
      badge: 'Chart',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Visual overview of the 787 vacancies across categories:</p>
          <div class="space-y-2 my-3 text-xs">
            <div>
              <div class="flex justify-between font-bold mb-1">
                <span>UR (Unreserved)</span>
                <span>228 Posts (29.0%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-3">
                <div class="bg-blue-600 h-3 rounded-full" style="width: 29%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between font-bold mb-1">
                <span>SC (Scheduled Caste)</span>
                <span>207 Posts (26.3%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-3">
                <div class="bg-indigo-600 h-3 rounded-full" style="width: 26.3%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between font-bold mb-1">
                <span>EBC (Extremely Backward Class)</span>
                <span>195 Posts (24.8%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-3">
                <div class="bg-purple-600 h-3 rounded-full" style="width: 24.8%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between font-bold mb-1">
                <span>BC (Backward Class)</span>
                <span>89 Posts (11.3%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-3">
                <div class="bg-amber-600 h-3 rounded-full" style="width: 11.3%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between font-bold mb-1">
                <span>EWS (Economically Weaker Section)</span>
                <span>55 Posts (7.0%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-3">
                <div class="bg-emerald-600 h-3 rounded-full" style="width: 7.0%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between font-bold mb-1">
                <span>ST (Scheduled Tribe)</span>
                <span>13 Posts (1.6%)</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-3">
                <div class="bg-rose-600 h-3 rounded-full" style="width: 1.6%"></div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Eligibility Comparison (Fresh Graduates vs Experienced In-Service)',
      badge: 'Comparison',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Comparison between fresh applicants and contractual in-service veterinary doctors:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Feature</th>
                  <th class="p-2.5">Fresh B.V.Sc. Graduate</th>
                  <th class="p-2.5">In-Service Contractual Doctor</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Educational Degree</td>
                  <td class="p-2.5">B.V.Sc. / B.V.Sc. & A.H. (Mandatory)</td>
                  <td class="p-2.5">B.V.Sc. / B.V.Sc. & A.H. (Mandatory)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Council Registration</td>
                  <td class="p-2.5">Bihar Veterinary Council (Mandatory)</td>
                  <td class="p-2.5">Bihar Veterinary Council (Mandatory)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Experience Marks</td>
                  <td class="p-2.5 font-mono text-slate-500">0 Marks</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-700">Up to 25 Marks (5 marks/year)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Age Relaxation</td>
                  <td class="p-2.5">Standard category limits</td>
                  <td class="p-2.5 font-semibold text-purple-700">Service period relaxation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Important Instructions for Applicants',
      badge: 'Instructions',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key directives issued by BTSC for Advt. No. 27/2026:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>Candidates must possess all requisite qualification and council registration certificates on or before the last date of application (23.10.2026).</li>
            <li>Only Indian citizens are eligible to apply.</li>
            <li>Canvassing in any form will disqualify the candidate immediately.</li>
          </ul>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Common Application Mistakes to Avoid',
      badge: 'Avoid Mistakes',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Avoid these frequently encountered errors when applying:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Wrong Council Registration:</strong> Entering a provisional or other-state veterinary council number without permanent Bihar Veterinary Council registration.</li>
            <li><strong>Incomplete Fee Payment:</strong> Failing to verify whether the bank transaction status reflects "Success".</li>
            <li><strong>Category Misrepresentation:</strong> Candidates from outside Bihar selecting reserved categories instead of General/UR.</li>
          </ul>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Documents to Retain After Application Submission',
      badge: 'Keep Safe',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must safely keep the following items until appointment:</p>
          <ol class="list-decimal pl-5 space-y-1 text-xs text-slate-700">
            <li>Printed copy of the Final Application Form Confirmation Page (at least 3 copies).</li>
            <li>Online Payment Fee Receipt with Transaction ID.</li>
            <li>Identical copies of the photograph uploaded during application.</li>
            <li>Original Bihar Veterinary Council Permanent Registration Certificate.</li>
          </ol>
        </div>
      `
    },
    {
      id: 45,
      title: '45. What Happens After Applying – Next Steps',
      badge: 'Next Steps',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Post-application roadmap for candidates:</p>
          <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Application Scrutiny:</strong> BTSC examines application validity and eligibility parameters.</li>
            <li><strong>Exam City Intimation & Admit Card:</strong> Hall tickets will be issued online on <code>btsc.bihar.gov.in</code>.</li>
            <li><strong>CBT Examination:</strong> Objective CBT examination will be conducted across selected centers.</li>
            <li><strong>Provisional Answer Key:</strong> Objection submission window opens on the commission portal.</li>
            <li><strong>DV Call List:</strong> Qualified candidates invited for Document Verification at Patna.</li>
          </ol>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Official Links & Direct Portals',
      badge: 'Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official verified links for Advt. No. 27/2026:</p>
          <div class="flex flex-col gap-2 my-2">
            <a href="https://btsc.pariksha.nic.in/Agencies.aspx?KZhCrm9B4QPkl0gO2rAMuw==" target="_blank" rel="noopener noreferrer" class="p-3 bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold rounded-xl border border-blue-200 flex items-center justify-between text-xs">
              <span>Apply Online Portal (Direct Link)</span>
              <span>Open ↗</span>
            </a>
            <a href="https://btsc.bihar.gov.in/sites/default/files/Advertisement/27_2026_0.pdf" target="_blank" rel="noopener noreferrer" class="p-3 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <span>Download Official Notification PDF (Advt. 27/2026)</span>
              <span>PDF ↗</span>
            </a>
            <a href="https://btsc.bihar.gov.in/" target="_blank" rel="noopener noreferrer" class="p-3 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <span>BTSC Official Website (btsc.bihar.gov.in)</span>
              <span>Open ↗</span>
            </a>
          </div>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Useful RajDailyTools for BTSC Candidates',
      badge: 'Tools',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>RajDailyTools provides dedicated recruitment calculators and utilities configured for BTSC Advt. 27/2026:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li><strong>Age Cut-Off Calculator:</strong> Test exact eligibility as on 01 August 2026.</li>
            <li><strong>Work Experience Calculator:</strong> Compute exact service credit points up to 25 marks.</li>
            <li><strong>CBT Marks & Penalty Calculator:</strong> Simulate net CBT score with -0.25 negative deductions.</li>
            <li><strong>Composite Merit Calculator:</strong> Combine written (75%) and experience (25%) scores.</li>
          </ul>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Related Bihar Government Jobs & Examinations',
      badge: 'Related Jobs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Explore other ongoing and upcoming government recruitments in Bihar:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
            <li>BTSC Fisheries Extension Officer Recruitment 2026 (Advt. 28/2026)</li>
            <li>BTSC Food Safety Officer (FSO) Recruitment 2026 (Advt. 29/2026)</li>
            <li>BPSSC Bihar Police Company Commander Recruitment 2026</li>
            <li>Patna High Court Assistant Recruitment 2026</li>
          </ul>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Frequently Asked Questions (FAQ)',
      badge: 'FAQ',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <h4 class="font-bold text-slate-900 text-xs">Q1. What is the total number of posts in BTSC TVO 2026?</h4>
            <p class="text-xs text-slate-600 mt-1">A total of 787 regular posts have been notified under Advt. No. 27/2026.</p>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <h4 class="font-bold text-slate-900 text-xs">Q2. Is registration with Bihar Veterinary Council mandatory?</h4>
            <p class="text-xs text-slate-600 mt-1">Yes, permanent registration with the Bihar Veterinary Council is an essential eligibility prerequisite.</p>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <h4 class="font-bold text-slate-900 text-xs">Q3. What is the selection criteria formula?</h4>
            <p class="text-xs text-slate-600 mt-1">Selection is based on 75% weightage for CBT written examination marks + up to 25 marks for contractual experience in Bihar Govt.</p>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Final Important Notice & Candidate Checklist',
      badge: 'Final Notice',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
            <div class="font-bold text-blue-950 text-sm">Final Submission Checklist for BTSC Advt. 27/2026:</div>
            <ul class="list-disc pl-5 space-y-1 text-xs text-blue-900">
              <li>Ensure B.V.Sc. degree certificate and Bihar Veterinary Council registration are in hand.</li>
              <li>Verify that date of birth complies with the 01.08.2026 cut-off.</li>
              <li>Complete fee payment of ₹100 before 23 October 2026, 23:59:59 IST.</li>
              <li>Print and safely archive your final confirmation slip.</li>
            </ul>
          </div>
        </div>
      `
    }
  ];
}
