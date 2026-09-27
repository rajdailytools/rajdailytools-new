import { ExamInfoSection } from '../types/exam';

export function getBtscFisherySectionsPart2(): ExamInfoSection[] {
  return [
    {
      id: 26,
      title: '26. CBT Exam Pattern & Test Architecture',
      badge: 'Exam Pattern',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Advertisement No. 28/2026, the selection of Fishery Extension Officers is primarily based on an objective Computer Based Test (CBT) followed by experience weightage:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Exam Component</th>
                  <th class="p-2.5">Official Specification</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Test Mode</td>
                  <td class="p-2.5 font-bold text-blue-900">Computer Based Test (CBT - Online Objective MCQ)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Questions</td>
                  <td class="p-2.5 font-bold text-slate-900">100 Multiple Choice Questions (MCQs)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Marks</td>
                  <td class="p-2.5 font-bold text-slate-900">100 Marks (1 mark per question)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Test Duration</td>
                  <td class="p-2.5 font-mono font-bold text-purple-900">2 Hours (120 Minutes)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Language / Medium</td>
                  <td class="p-2.5 font-semibold text-slate-800">Bilingual (Hindi &amp; English)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Marking Scheme</td>
                  <td class="p-2.5 font-bold text-emerald-800">+1.00 Mark for each Correct Answer</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Negative Marking Penalty</td>
                  <td class="p-2.5 font-bold text-red-600">-0.25 Mark (1/4th penalty) for each Incorrect Answer</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Weightage in Final Merit</td>
                  <td class="p-2.5 font-bold text-indigo-700">75% Weightage (Max 75 Marks in Composite Score)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Question Paper Details & Subject Distribution',
      badge: 'Question Paper',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The 100 questions in the CBT will test the candidate's core domain proficiency across essential disciplines of Fisheries Science:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Domain Subject Area</th>
                  <th class="p-2.5 text-center">Questions</th>
                  <th class="p-2.5 text-center">Marks</th>
                  <th class="p-2.5">Primary Focus Topics</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Aquaculture &amp; Hatchery Management</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">30</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">30</td>
                  <td class="p-2.5 text-slate-600">Pond ecology, breeding of Indian Major Carps, seed production, feed &amp; nutrition</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Fish Biology, Taxonomy &amp; Physiology</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">20</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">20</td>
                  <td class="p-2.5 text-slate-600">Freshwater &amp; marine species identification, reproduction, digestive &amp; respiratory systems</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Fish Pathology &amp; Aquatic Health Management</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">20</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">20</td>
                  <td class="p-2.5 text-slate-600">Bacterial, viral, fungal &amp; parasitic diseases, prophylaxis, water quality parameters</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Fisheries Resource Management &amp; Oceanography</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">15</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">15</td>
                  <td class="p-2.5 text-slate-600">Inland fisheries of Bihar, riverine ecology, conservation &amp; sustainable harvesting</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Fishery Extension, Economics &amp; Processing</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">15</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">15</td>
                  <td class="p-2.5 text-slate-600">Extension methodologies, post-harvest preservation, cold chain, marketing &amp; PMMSY</td>
                </tr>
                <tr class="bg-slate-50 font-bold border-t-2 border-slate-300">
                  <td class="p-2.5 text-slate-900">TOTAL CBT QUESTIONS</td>
                  <td class="p-2.5 text-center text-emerald-800 text-sm">100</td>
                  <td class="p-2.5 text-center text-emerald-800 text-sm">100</td>
                  <td class="p-2.5 text-emerald-700">Scaled to 75 Marks in Final Merit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Negative Marking Rules & Penalty Calculation',
      badge: 'Negative Marking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Advt. 28/2026, negative marking is enforced in the CBT examination to ensure strict accuracy standards:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <span class="text-xs text-emerald-700 font-semibold block uppercase">Correct Response</span>
              <span class="text-xl font-bold text-emerald-900">+1.00 Mark</span>
              <span class="text-[11px] text-slate-500 block mt-0.5">Awarded per question</span>
            </div>
            <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-center">
              <span class="text-xs text-red-700 font-semibold block uppercase">Incorrect Response</span>
              <span class="text-xl font-bold text-red-900">-0.25 Mark</span>
              <span class="text-[11px] text-slate-500 block mt-0.5">Deducted (1/4th penalty)</span>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span class="text-xs text-slate-700 font-semibold block uppercase">Unattempted Response</span>
              <span class="text-xl font-bold text-slate-800">0.00 Marks</span>
              <span class="text-[11px] text-slate-500 block mt-0.5">No penalty / deduction</span>
            </div>
          </div>
          <div class="p-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 text-xs font-mono">
            <strong>Official Scoring Formula:</strong><br />
            Raw CBT Score = (Correct Answers × 1) - (Incorrect Answers × 0.25)<br />
            Scaled CBT Merit Score (out of 75) = (Raw CBT Score / 100) × 75
          </div>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Minimum Qualifying Marks (30% Baseline Threshold)',
      badge: 'Qualifying Marks',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The official notification specifies that candidates must obtain the <strong>minimum qualifying marks of 30%</strong> in the written examination to be considered for merit compilation:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5 text-center">Minimum Qualifying %</th>
                  <th class="p-2.5 text-center">Minimum Cut-Off Marks (out of 100)</th>
                  <th class="p-2.5">Qualifying Significance</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Baseline Notification Threshold</td>
                  <td class="p-2.5 font-mono font-bold text-center text-blue-900">30.00%</td>
                  <td class="p-2.5 font-mono font-bold text-center text-blue-900">30.00 Marks</td>
                  <td class="p-2.5 text-slate-600">Specified in Advt. No. 28/2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">General / Unreserved (UR)</td>
                  <td class="p-2.5 font-mono text-center">40.00%</td>
                  <td class="p-2.5 font-mono text-center">40.00 Marks</td>
                  <td class="p-2.5 text-slate-600">Standard Bihar GAD threshold</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Backward Class (BC)</td>
                  <td class="p-2.5 font-mono text-center">36.50%</td>
                  <td class="p-2.5 font-mono text-center">36.50 Marks</td>
                  <td class="p-2.5 text-slate-600">Standard Bihar GAD threshold</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Extremely Backward Class (EBC)</td>
                  <td class="p-2.5 font-mono text-center">34.00%</td>
                  <td class="p-2.5 font-mono text-center">34.00 Marks</td>
                  <td class="p-2.5 text-slate-600">Standard Bihar GAD threshold</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">SC / ST / Women / Divyang (PwD)</td>
                  <td class="p-2.5 font-mono text-center">32.00%</td>
                  <td class="p-2.5 font-mono text-center">32.00 Marks</td>
                  <td class="p-2.5 text-slate-600">Standard Bihar GAD threshold</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-xs">
            <strong>Crucial Clarification:</strong> Securing the minimum qualifying mark does NOT guarantee selection; it merely qualifies the candidate to be considered in the competitive merit pool based on composite marks (CBT + Experience).
          </div>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Normalization Procedure (Multi-Shift CBT Formula)',
      badge: 'Normalization',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>If the Computer Based Test is conducted in multiple shifts, BTSC will implement an Equi-Percentile / Standard Normalization methodology to balance difficulty disparities across question papers:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Normalization ensures that candidates appearing in a comparatively tougher shift are evaluated equitably against those in an easier shift.</li>
            <li>Raw marks scored by the candidate in each shift will be converted into a normalized score before calculating the 75% CBT weightage.</li>
            <li>The normalized score is computed using the percentile-distribution method approved by BTSC and the Department of Personnel and Administrative Reforms.</li>
            <li>In single-shift examinations, the raw score itself constitutes the final CBT score without requiring normalization.</li>
          </ul>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Prescribed Syllabus – Core Fisheries Science',
      badge: 'Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The syllabus for the Fishery Extension Officer CBT is aligned with the ICAR Post Graduate syllabus for Fisheries Science disciplines:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div class="p-3.5 bg-blue-50/50 border border-blue-200 rounded-xl">
              <span class="text-xs font-bold text-blue-900 block mb-1">Module 1: Aquaculture &amp; Hatchery Management</span>
              <p class="text-xs text-slate-600 leading-relaxed">Breeding biology of cultivable finfishes &amp; shellfishes, induced breeding techniques, hatchery design &amp; operation, composite fish culture, integrated fish farming, RAS &amp; biofloc systems.</p>
            </div>
            <div class="p-3.5 bg-indigo-50/50 border border-indigo-200 rounded-xl">
              <span class="text-xs font-bold text-indigo-900 block mb-1">Module 2: Fish Pathology &amp; Aquatic Health</span>
              <p class="text-xs text-slate-600 leading-relaxed">Etiology, clinical signs, diagnosis, prophylaxis and treatment of bacterial, viral, fungal, and parasitic diseases. Water and soil chemistry, DO, pH, alkalinity, and ammonia management.</p>
            </div>
            <div class="p-3.5 bg-emerald-50/50 border border-emerald-200 rounded-xl">
              <span class="text-xs font-bold text-emerald-900 block mb-1">Module 3: Inland &amp; Riverine Fisheries</span>
              <p class="text-xs text-slate-600 leading-relaxed">Riverine, reservoir, wetland (chaurs and mauns of Bihar), and floodplain fisheries. Fish stock assessment, fishing gear and craft technology, conservation of endangered species.</p>
            </div>
            <div class="p-3.5 bg-purple-50/50 border border-purple-200 rounded-xl">
              <span class="text-xs font-bold text-purple-900 block mb-1">Module 4: Extension &amp; Government Schemes</span>
              <p class="text-xs text-slate-600 leading-relaxed">Fisheries extension techniques, training methodology, cooperatives, Pradhan Mantri Matsya Sampada Yojana (PMMSY), state fisheries schemes, post-harvest processing and marketing.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Subject-Wise Topic Breakdown & Weightage Table',
      badge: 'Topic Breakdown',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Detailed sub-topic distribution for comprehensive preparation:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Domain</th>
                  <th class="p-2.5">Detailed Sub-Topics</th>
                  <th class="p-2.5 text-center">Estimated Weightage</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Aquaculture Production</td>
                  <td class="p-2.5 text-slate-600">IMC, Exotic Carps, Catfishes (Pangasius, Magur), Tilapia, Nursery, Rearing &amp; Grow-out ponds, Feed formulation</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">30%</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Fish Health &amp; Environment</td>
                  <td class="p-2.5 text-slate-600">Water quality standards, BOD, COD, Aeration, EUS, Columnaris, Dropsy, Trichodina, Argulus, Biosecurity protocols</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">20%</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Fish Biology &amp; Genetics</td>
                  <td class="p-2.5 text-slate-600">Taxonomic classification of Indian fishes, reproductive endocrinology, cryopreservation, selective breeding, hybridization</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">20%</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Inland Resource Ecology</td>
                  <td class="p-2.5 text-slate-600">Ecology of Ganga basin, oxbow lakes, reservoirs, river ranching, indigenous ornamental fishes of Bihar</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">15%</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Extension &amp; Economics</td>
                  <td class="p-2.5 text-slate-600">Diffusion of innovations, participatory rural appraisal (PRA), PMMSY subsidies, cold chain infrastructure, fish value addition</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Complete Selection Process – Stage-by-Stage Flow',
      badge: 'Selection Process',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Advt. No. 28/2026, the selection process comprises three well-defined stages:</p>
          <div class="space-y-3 my-3">
            <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
              <span class="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Stage 1: Computer Based Test (CBT Written Exam)</span>
              <p class="text-xs text-slate-700">100 objective MCQs on Fisheries Science. 100 Marks scaled down to <strong>75 Marks maximum weightage</strong>.</p>
            </div>
            <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
              <span class="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-1">Stage 2: Contractual Experience Evaluation</span>
              <p class="text-xs text-slate-700">Service record scrutiny for candidates with contractual service in Fisheries Directorate, Bihar. 5 marks/year, up to <strong>25 Marks maximum</strong>.</p>
            </div>
            <div class="p-3.5 bg-purple-50 border border-purple-200 rounded-xl">
              <span class="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-1">Stage 3: Document Verification (DV) &amp; Final Merit List</span>
              <p class="text-xs text-slate-700">Shortlisted candidates are summoned for in-person document verification at BTSC Patna to authenticate degrees, domicile, caste, and service certificates before final cadre recommendation.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 34,
      title: '34. CBT + Experience Weightage Breakdown (75 : 25 Formula)',
      badge: 'Weightage',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The total selection evaluation is conducted on a 100-mark composite scale as detailed in Advertisement 28/2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Evaluation Component</th>
                  <th class="p-2.5 text-center">Maximum Marks</th>
                  <th class="p-2.5 text-center">Weightage %</th>
                  <th class="p-2.5">Formula / Calculation Basis</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Computer Based Test (CBT) Score</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">75 Marks</td>
                  <td class="p-2.5 font-bold text-center text-blue-900">75%</td>
                  <td class="p-2.5 text-slate-600">(Marks obtained in 100-mark CBT / 100) × 75</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Contractual Work Experience in Bihar Govt</td>
                  <td class="p-2.5 font-bold text-center text-emerald-800">25 Marks</td>
                  <td class="p-2.5 font-bold text-center text-emerald-800">25%</td>
                  <td class="p-2.5 text-slate-600">05 marks per completed full year of service (Max 25)</td>
                </tr>
                <tr class="bg-slate-50 font-bold border-t-2 border-slate-300">
                  <td class="p-2.5 text-slate-900">TOTAL COMPOSITE MERIT SCORE</td>
                  <td class="p-2.5 text-center text-purple-900 text-sm">100 Marks</td>
                  <td class="p-2.5 text-center text-purple-900 text-sm">100%</td>
                  <td class="p-2.5 text-purple-800">Used for Category-Wise Rank List</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Final Merit Calculation & Tie-Breaking Rules',
      badge: 'Merit Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Guidelines for resolving equal composite scores between multiple candidates during final merit compilation:</p>
          <ol class="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
            <li><strong>Higher CBT Marks:</strong> The candidate with higher marks in the Computer Based Test (CBT) will be placed higher in the merit order.</li>
            <li><strong>Higher Age:</strong> If CBT marks are also equal, the candidate older in age (earlier Date of Birth) will be ranked higher.</li>
            <li><strong>Alphabetical Order:</strong> If DOB is identical, the alphabetical order of candidate names as per English Devanagari/matriculation certificate will resolve the tie.</li>
          </ol>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Document Verification (DV) Protocols & Venue',
      badge: 'Verification',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Shortlisted candidates based on composite merit will be called for document verification at the Commission's headquarters:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl my-3">
            <span class="text-xs font-bold text-slate-900 block mb-1">Venue:</span>
            <p class="text-xs text-slate-700">Bihar Technical Service Commission (BTSC), 19, Harding Road, Patna – 800001.</p>
          </div>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Candidates must present all original documents along with 2 self-attested sets of photocopies.</li>
            <li>Failure to attend DV on the assigned date and time will result in forfeiture of candidature.</li>
            <li>No TA/DA is admissible for attending document verification.</li>
          </ul>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Complete Recruitment Flowchart & Operational Milestones',
      badge: 'Flowchart',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Visual overview of the progression from notification to final departmental posting:</p>
          <div class="space-y-2 my-3">
            <div class="p-2.5 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg text-xs font-semibold text-slate-800">
              1. Advertisement Release (Advt. 28/2026 on 24.09.2026)
            </div>
            <div class="p-2.5 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg text-xs font-semibold text-slate-800">
              2. Online Registration &amp; Fee Remittance (24.09.2026 to 23.10.2026)
            </div>
            <div class="p-2.5 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg text-xs font-semibold text-slate-800">
              3. Admit Card Download &amp; City Intimation Slip
            </div>
            <div class="p-2.5 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg text-xs font-semibold text-slate-800">
              4. Computer Based Test (CBT Online - 100 Qs / 100 Marks / 2 Hours)
            </div>
            <div class="p-2.5 bg-purple-50 border-l-4 border-purple-600 rounded-r-lg text-xs font-semibold text-slate-800">
              5. Provisional Answer Key &amp; Objection Management
            </div>
            <div class="p-2.5 bg-purple-50 border-l-4 border-purple-600 rounded-r-lg text-xs font-semibold text-slate-800">
              6. Experience Marks Evaluation &amp; Composite Merit Ranking
            </div>
            <div class="p-2.5 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg text-xs font-semibold text-slate-800">
              7. Document Verification (DV) at BTSC Patna
            </div>
            <div class="p-2.5 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg text-xs font-semibold text-slate-800">
              8. Final Recommendation to Fisheries Directorate &amp; Appointment Order
            </div>
          </div>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Selection Timeline & Project Milestones',
      badge: 'Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Estimated schedule of upcoming phases under Advertisement No. 28/2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruitment Milestone</th>
                  <th class="p-2.5">Projected Timeline</th>
                  <th class="p-2.5">Official Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Online Application Window</td>
                  <td class="p-2.5">24 Sept 2026 to 23 Oct 2026</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">Live Now</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">CBT Examination Date</td>
                  <td class="p-2.5">Not Released / To Be Updated</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 bg-slate-100 text-slate-700 font-bold rounded">Awaited</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Answer Key &amp; Objections</td>
                  <td class="p-2.5">Not Released / To Be Updated</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 bg-slate-100 text-slate-700 font-bold rounded">Awaited</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">DV Call Letter &amp; Counseling</td>
                  <td class="p-2.5">Not Released / To Be Updated</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 bg-slate-100 text-slate-700 font-bold rounded">Awaited</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Vacancy Distribution Chart & Representation',
      badge: 'Chart',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Distribution analysis of the 231 total posts across categories:</p>
          <div class="space-y-2 my-3">
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span>Unreserved (UR) – 96 Posts</span>
                <span>41.56%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 41.56%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span>Extremely Backward Class (EBC) – 41 Posts</span>
                <span>17.75%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2.5">
                <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 17.75%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span>Scheduled Caste (SC) – 35 Posts</span>
                <span>15.15%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2.5">
                <div class="bg-purple-600 h-2.5 rounded-full" style="width: 15.15%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span>Backward Class (BC) – 27 Posts</span>
                <span>11.69%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2.5">
                <div class="bg-emerald-600 h-2.5 rounded-full" style="width: 11.69%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span>Economically Weaker Section (EWS) – 23 Posts</span>
                <span>9.96%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2.5">
                <div class="bg-amber-600 h-2.5 rounded-full" style="width: 9.96%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span>BC Women (BCW) – 07 Posts</span>
                <span>3.03%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2.5">
                <div class="bg-pink-600 h-2.5 rounded-full" style="width: 3.03%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span>Scheduled Tribe (ST) – 02 Posts</span>
                <span>0.86%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2.5">
                <div class="bg-red-600 h-2.5 rounded-full" style="width: 0.86%"></div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Reservation Matrix Comparison & Category Quota Rules',
      badge: 'Comparison',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key reservation principles governing Advt. No. 28/2026:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Domicile Prerequisite:</strong> Only permanent residents (डोमिसाइल) of Bihar are entitled to vertical reservation benefits. Candidates belonging to reserved categories of other states will be considered under the Unreserved (UR) category.</li>
            <li><strong>Creamy Layer Condition:</strong> Backward Class (BC) and Extremely Backward Class (EBC) applicants must produce a valid Non-Creamy Layer (NCL) certificate issued within the prescribed validity year.</li>
            <li><strong>Married Female Applicants:</strong> Caste / NCL certificate must strictly bear the father's name and address. Certificates bearing the husband's name will NOT be accepted for claiming reservation benefits.</li>
          </ul>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Eligibility Decision Flow & Candidate Self-Audit',
      badge: 'Decision Flow',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidate self-evaluation flowchart before starting the online application:</p>
          <div class="space-y-2 my-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Question 1: Are you at least 21 years old as on 01.08.2026?</span>
              <p class="text-xs text-slate-600">If No → Ineligible. If Yes → Proceed to Question 2.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Question 2: Are you within the upper age limit (37/40/42 yrs) as on 01.08.2026?</span>
              <p class="text-xs text-slate-600">If No (and not entitled to relaxation) → Ineligible. If Yes → Proceed to Question 3.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Question 3: Do you have a 2-year PG Degree in Fisheries Science from an ICAR-recognized Agricultural University?</span>
              <p class="text-xs text-slate-600">If No → Ineligible. If Yes → You are fully eligible to apply online.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Application Mistakes to Avoid (Top Rejection Causes)',
      badge: 'Mistakes to Avoid',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Review the most common errors resulting in candidature rejection during previous BTSC recruitment cycles:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div class="p-3.5 bg-red-50/70 border border-red-200 rounded-xl">
              <span class="text-xs font-bold text-red-900 block mb-1">1. Father's Name Mismatch</span>
              <p class="text-xs text-slate-600">Ensure the spelling of your name and father's name matches your 10th certificate down to every letter.</p>
            </div>
            <div class="p-3.5 bg-red-50/70 border border-red-200 rounded-xl">
              <span class="text-xs font-bold text-red-900 block mb-1">2. Ineligible Fisheries Degree</span>
              <p class="text-xs text-slate-600">Applying with B.F.Sc. only or with an unaccredited private degree will lead to instant disqualification at DV.</p>
            </div>
            <div class="p-3.5 bg-red-50/70 border border-red-200 rounded-xl">
              <span class="text-xs font-bold text-red-900 block mb-1">3. Husband's Name on Caste Cert</span>
              <p class="text-xs text-slate-600">Female applicants must have caste/NCL issued with father's address; husband's certificate will not be accepted.</p>
            </div>
            <div class="p-3.5 bg-red-50/70 border border-red-200 rounded-xl">
              <span class="text-xs font-bold text-red-900 block mb-1">4. Blur Scanned Uploads</span>
              <p class="text-xs text-slate-600">Unreadable marksheet or blurred photo uploads make identity verification impossible.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Important Candidate Instructions & General Conditions',
      badge: 'Instructions',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>General conditions stipulated by the Commission for all applicants:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>The appointment is purely provisional subject to verification of character, antecedents, and original academic credentials.</li>
            <li>Canvassing in any form will disqualify the candidate immediately.</li>
            <li>Mobile phones, bluetooth devices, smartwatches, and electronic gadgets are strictly banned inside examination centers.</li>
            <li>Candidates must retain multiple printed copies of the application form and fee payment receipt for production during DV.</li>
          </ul>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Documents to Preserve Safely After Application',
      badge: 'Post-Apply',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Preserve these essential records in a secure folder after completing online application:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Document</th>
                  <th class="p-2.5">Copies Required</th>
                  <th class="p-2.5">When Required</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold">Final Submitted Application Form Printout</td>
                  <td class="p-2.5 font-mono text-center">3 Copies</td>
                  <td class="p-2.5 text-slate-600">Mandatory at Document Verification stage</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Online Fee Payment E-Receipt with Transaction ID</td>
                  <td class="p-2.5 font-mono text-center">2 Copies</td>
                  <td class="p-2.5 text-slate-600">Proof of fee clearance if status dispute occurs</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Identical Passport Photographs (same as uploaded)</td>
                  <td class="p-2.5 font-mono text-center">8–10 Copies</td>
                  <td class="p-2.5 text-slate-600">Required on Exam Admit Card and DV attendance sheet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 45,
      title: '45. What Happens After Application Submission?',
      badge: 'Post-Submission',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>After the closing of the application window on 23 October 2026, the following administrative actions will be undertaken by BTSC:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Application Scrutiny &amp; Data Validation:</strong> Validation of completed applications and fee reconciliation.</li>
            <li><strong>Rejection List Publication:</strong> List of invalid applications (unpaid/incomplete/duplicate) published on BTSC website.</li>
            <li><strong>CBT Center Allocation &amp; Schedule:</strong> Notice for exam date and online test centers across Bihar.</li>
            <li><strong>Admit Card Release:</strong> E-Admit cards uploaded for download 7 to 10 days before the CBT date.</li>
          </ul>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Official Links & Direct Portals (Advt 28/2026)',
      badge: 'Official Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Access authenticated portals and official links directly for Advertisement 28/2026:</p>
          <div class="space-y-2.5 my-3">
            <a
              href="https://btsc.pariksha.nic.in/Agencies.aspx?KZhCrm9B4QPkl0gO2rAMuw=="
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-3.5 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-all font-semibold text-blue-900 text-xs sm:text-sm"
            >
              <span>🔗 Direct Apply Online Portal (BTSC Pariksha)</span>
              <span class="text-xs bg-blue-600 text-white px-2 py-0.5 rounded">Open Link</span>
            </a>
            <a
              href="https://btsc.bihar.gov.in/sites/default/files/Advertisement/28_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-3.5 bg-purple-50 border border-purple-200 rounded-xl hover:bg-purple-100 transition-all font-semibold text-purple-900 text-xs sm:text-sm"
            >
              <span>📄 Official Notification PDF (Advt. No. 28/2026)</span>
              <span class="text-xs bg-purple-600 text-white px-2 py-0.5 rounded">Download PDF</span>
            </a>
            <a
              href="https://btsc.bihar.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-all font-semibold text-slate-900 text-xs sm:text-sm"
            >
              <span>🌐 BTSC Bihar Official Website (btsc.bihar.gov.in)</span>
              <span class="text-xs bg-slate-700 text-white px-2 py-0.5 rounded">Visit Portal</span>
            </a>
          </div>
        </div>
      `
    },
    {
      id: 47,
      title: '47. RajDailyTools Useful Tools & Calculators',
      badge: 'Tools',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Explore free candidate preparation utilities engineered specifically for the BTSC Fishery Extension Officer recruitment:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Age Eligibility Checker</span>
              <p class="text-xs text-slate-600 mt-0.5">Calculates exact age as on 01.08.2026 and checks eligibility against category max limits.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Fisheries Science Qualification Checker</span>
              <p class="text-xs text-slate-600 mt-0.5">Validates ICAR recognition, university accreditation, and 2-year PG qualification criteria.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Experience Marks Calculator</span>
              <p class="text-xs text-slate-600 mt-0.5">Calculates weightage marks (5 marks per year, up to 25 marks) for Bihar Govt service.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">CBT Score &amp; Composite Merit Calculator</span>
              <p class="text-xs text-slate-600 mt-0.5">Computes negative penalties, scaled 75-mark CBT score, and final 100-mark composite ranking.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Related Bihar Government Recruitments',
      badge: 'Related Jobs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Explore other active and upcoming state recruitment notifications in Bihar:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruitment Name</th>
                  <th class="p-2.5">Vacancies</th>
                  <th class="p-2.5">Key Qualification</th>
                  <th class="p-2.5">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">BTSC Touring Veterinary Officer 2026</td>
                  <td class="p-2.5 font-mono">787 Posts</td>
                  <td class="p-2.5 text-slate-600">B.V.Sc. &amp; Bihar Veterinary Council Reg.</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">Active</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">BPSSC Company Commander Recruitment 2026</td>
                  <td class="p-2.5 font-mono">150+ Posts</td>
                  <td class="p-2.5 text-slate-600">Graduation Degree in any stream</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">Active</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-blue-900">Patna High Court Assistant Recruitment 2026</td>
                  <td class="p-2.5 font-mono">550 Posts</td>
                  <td class="p-2.5 text-slate-600">Graduation + Computer Proficiency</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">Ongoing</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Frequently Asked Questions (FAQ) – Advt 28/2026',
      badge: 'FAQ',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="space-y-2.5 my-3">
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Q1: What is the last date to apply for BTSC Fishery Extension Officer Recruitment 2026?</span>
              <p class="text-xs text-slate-600 mt-1">The online application window closes on <strong>23 October 2026 at 23:59:59 IST</strong>. The fee payment gateway also shuts on 23 October 2026.</p>
            </div>
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Q2: What is the prescribed qualification for Fishery Extension Officer under Advt. 28/2026?</span>
              <p class="text-xs text-slate-600 mt-1">Candidates must hold a 2-year Post Graduate Degree in Fisheries Science (M.F.Sc. or equivalent) from an institution under an Agricultural University recognised by the ICAR, New Delhi.</p>
            </div>
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Q3: How many total vacancies are announced in Advertisement 28/2026?</span>
              <p class="text-xs text-slate-600 mt-1">A total of <strong>231 regular vacancies</strong> are notified: UR (96), EWS (23), SC (35), ST (02), EBC (41), BC (27), and BC Women (07).</p>
            </div>
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Q4: What is the selection process and merit formula?</span>
              <p class="text-xs text-slate-600 mt-1">Composite selection on a 100-mark scale: 75% weightage for CBT written examination marks + up to 25 marks for eligible contractual work experience in Bihar Government Fisheries Directorate.</p>
            </div>
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Q5: Is there negative marking in the CBT examination?</span>
              <p class="text-xs text-slate-600 mt-1">Yes. Each correct question awards +1.00 mark, while an incorrect response attracts a penalty deduction of -0.25 mark (1/4th negative marking).</p>
            </div>
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="font-bold text-xs text-slate-900 block">Q6: What is the pay scale for Fishery Extension Officer in Bihar?</span>
              <p class="text-xs text-slate-600 mt-1">The post is in <strong>Pay Level-7</strong> with starting Basic Pay of ₹44,900/- per month plus applicable DA, HRA, Medical, and state allowances.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Final Candidate Checklist & Official Next Steps',
      badge: 'Final Checklist',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Before closing your application session, verify that you have completed all mandatory formalities:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Final Action Item</th>
                  <th class="p-2.5">Requirement</th>
                  <th class="p-2.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Online Application Form Submitted</td>
                  <td class="p-2.5 text-slate-600">Final submission completed before 23.10.2026 (23:59:59 IST)</td>
                  <td class="p-2.5 text-center"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">Done</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Application Fee Success Status</td>
                  <td class="p-2.5 text-slate-600">Transaction ID recorded &amp; e-receipt downloaded</td>
                  <td class="p-2.5 text-center"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">Done</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">Application Summary Downloaded</td>
                  <td class="p-2.5 text-slate-600">Saved as PDF and printed 2 physical sets for DV preservation</td>
                  <td class="p-2.5 text-center"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">Done</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-slate-900">CBT Exam Preparation Commenced</td>
                  <td class="p-2.5 text-slate-600">Studying Fisheries Science syllabus and solving mock practice tests</td>
                  <td class="p-2.5 text-center"><span class="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 text-xs">
            <strong>Wishing you success:</strong> Regularly visit <code>btsc.bihar.gov.in</code> and RajDailyTools for immediate alerts on CBT examination dates, admit cards, and merit list releases.
          </div>
        </div>
      `
    }
  ];
}
