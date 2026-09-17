import { ExamInfoSection } from '../types/exam';

export const CONCOR_SECTIONS_PART2: ExamInfoSection[] = [
  {
    id: 26,
    title: '26. Assistant Officer Selection',
    badge: 'Direct CBT Merit',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>The recruitment of <strong>Assistant Officer (AO)</strong> positions is characterized by an expedited single-stage examination merit structure:</p>
        <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 text-xs text-emerald-950 font-medium">
          <p class="font-bold text-sm text-emerald-900">Direct Merit on Computer Based Test (CBT)</p>
          <p>Unlike Management Trainee posts, there is <strong>NO Group Discussion (GD) or Personal Interview</strong> for Assistant Officer posts. Selection is strictly determined by candidate rank in the online CBT, subject to satisfying eligibility, document verification, and medical fitness.</p>
        </div>
      </div>
    `
  },
  {
    id: 27,
    title: '27. CBT Exam Pattern',
    badge: '100 Qs / 100 Marks',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Official Computer Based Test (CBT) examination pattern for CONCOR Employment Notification No. 05/2026:</p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-center border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-800 text-white font-bold">
              <tr>
                <th class="p-2.5 text-left">Test Component</th>
                <th class="p-2.5">Number of Questions</th>
                <th class="p-2.5">Maximum Marks</th>
                <th class="p-2.5">Section Weightage</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800 font-medium">
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 text-left font-bold text-blue-900">Part A: Professional Knowledge / Domain Subject</td>
                <td class="p-2.5 font-bold">50 Questions</td>
                <td class="p-2.5 font-bold">50 Marks</td>
                <td class="p-2.5 font-bold text-blue-700">50%</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 text-left">Part B1: Quantitative Aptitude</td>
                <td class="p-2.5">15 Questions</td>
                <td class="p-2.5">15 Marks</td>
                <td class="p-2.5">15%</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 text-left">Part B2: General Awareness / Current Affairs</td>
                <td class="p-2.5">15 Questions</td>
                <td class="p-2.5">15 Marks</td>
                <td class="p-2.5">15%</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 text-left">Part B3: English Language &amp; Comprehension</td>
                <td class="p-2.5">10 Questions</td>
                <td class="p-2.5">10 Marks</td>
                <td class="p-2.5">10%</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 text-left">Part B4: Reasoning Ability</td>
                <td class="p-2.5">10 Questions</td>
                <td class="p-2.5">10 Marks</td>
                <td class="p-2.5">10%</td>
              </tr>
              <tr class="bg-slate-900 text-white font-black">
                <td class="p-2.5 text-left font-black">Grand Total (CBT Paper)</td>
                <td class="p-2.5 font-bold text-amber-300">100 Questions</td>
                <td class="p-2.5 font-bold text-amber-300">100 Marks</td>
                <td class="p-2.5 font-bold text-amber-300">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 28,
    title: '28. CBT Marking Scheme',
    badge: 'Negative Marking 0.25',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Marking rules and penalty guidelines governing the Computer Based Test:</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
            <span class="text-xs text-emerald-800 font-bold block">Correct Response</span>
            <span class="text-xl font-black text-emerald-700 mt-1 block">+1.00 Mark</span>
            <span class="text-[11px] text-emerald-600 mt-0.5 block">Full mark awarded</span>
          </div>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-center">
            <span class="text-xs text-red-800 font-bold block">Incorrect Response</span>
            <span class="text-xl font-black text-red-700 mt-1 block">-0.25 Mark</span>
            <span class="text-[11px] text-red-600 mt-0.5 block">1/4th penalty deducted</span>
          </div>
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
            <span class="text-xs text-slate-700 font-bold block">Unattempted Question</span>
            <span class="text-xl font-black text-slate-700 mt-1 block">0.00 Mark</span>
            <span class="text-[11px] text-slate-500 mt-0.5 block">No penalty or deduction</span>
          </div>
        </div>
        <p class="text-xs text-slate-600">Candidates must note that each multiple choice question will feature <strong>five (5) answer options</strong>.</p>
      </div>
    `
  },
  {
    id: 29,
    title: '29. CBT Exam Duration & Shifts',
    badge: '90 Minutes',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Duration and shift organization for the online examination:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li><strong>Total Duration:</strong> <strong>90 Minutes (1.5 Hours)</strong> for 100 questions.</li>
          <li><strong>Compensatory Time:</strong> PwBD candidates eligible for scribe facility receive 20 minutes compensatory time per hour (total 30 minutes extra).</li>
          <li><strong>Shift Arrangement:</strong> The CBT for MT and AO will be held on the <strong>same day in two separate shifts</strong> (e.g. Shift 1 for MT, Shift 2 for AO).</li>
        </ul>
      </div>
    `
  },
  {
    id: 30,
    title: '30. Subject-Wise Marks Distribution',
    badge: 'Domain (50) + Aptitude (50)',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>The CBT paper provides a balanced 50:50 distribution between professional domain expertise and general cognitive aptitude:</p>
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
          <div class="flex items-center justify-between font-bold text-slate-800">
            <span>Professional Domain Knowledge</span>
            <span class="text-blue-700">50 Marks (50 Questions)</span>
          </div>
          <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 50%"></div>
          </div>
          <div class="flex items-center justify-between font-bold text-slate-800 pt-2">
            <span>General Aptitude (QA 15 + GK 15 + English 10 + Reasoning 10)</span>
            <span class="text-emerald-700">50 Marks (50 Questions)</span>
          </div>
          <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div class="bg-emerald-600 h-2.5 rounded-full" style="width: 50%"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 31,
    title: '31. Commercial & Operations Syllabus',
    badge: 'MT/CO & AO/CO',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Core professional syllabus for Commercial &amp; Operations posts (50 Marks Domain):</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li><strong>Multimodal Logistics &amp; Supply Chain Management:</strong> Containerization principles, TEU/FEU dynamics, inland container depots (ICD), CFS operations, and dry port management.</li>
          <li><strong>Railway Freight &amp; Tariffs:</strong> Indian Railways Goods Tariff, container train operations, siding agreements, demurrage/wharfage rules.</li>
          <li><strong>International Trade &amp; EXIM:</strong> Incoterms 2020, customs procedures, EDI documentation, Bill of Lading, shipping lines coordination.</li>
          <li><strong>Marketing &amp; Business Development:</strong> Logistics marketing, client relationship management, cold chain logistics, warehousing solutions.</li>
        </ul>
      </div>
    `
  },
  {
    id: 32,
    title: '32. Accounts & Finance Syllabus',
    badge: 'MT/FA, MT/FA/CS & AO/FA',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Core syllabus for Accounts and Financial Management positions:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li><strong>Corporate Accounting:</strong> Indian Accounting Standards (Ind AS), preparation of financial statements, balance sheet scrutiny, auditing.</li>
          <li><strong>Direct &amp; Indirect Taxation:</strong> Income Tax Act 1961, TDS/TCS provisions, Corporate Tax, GST framework, input tax credit (ITC) reconciliation.</li>
          <li><strong>Financial Management &amp; Costing:</strong> Working capital management, capital budgeting, standard costing, budgetary control in PSUs.</li>
          <li><strong>Compliance &amp; Secretarial (for CS post):</strong> Companies Act 2013, SEBI LODR regulations, Board meetings, corporate governance.</li>
        </ul>
      </div>
    `
  },
  {
    id: 33,
    title: '33. Technical Syllabus',
    badge: 'MT/TH & AO/TH',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Technical discipline syllabus covering mechanical, electrical, and electronic engineering fundamentals:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li><strong>Heavy Equipment Maintenance:</strong> Rail-Mounted Gantry (RMG) cranes, Rubber-Tyred Gantry (RTG) cranes, Reach Stackers, and terminal trailers.</li>
          <li><strong>Thermodynamics &amp; IC Engines:</strong> Diesel generator sets, hydraulics, pneumatics, and transmission systems.</li>
          <li><strong>Electrical Drives &amp; Control:</strong> High voltage substations, PLCs, motor control centres, industrial safety standards.</li>
          <li><strong>Maintenance Management:</strong> Preventive maintenance schedules, spare parts inventory control, breakdown repair.</li>
        </ul>
      </div>
    `
  },
  {
    id: 34,
    title: '34. MIS / IT Syllabus',
    badge: 'MT/MIS & AO/MIS',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Professional syllabus for Management Information Systems (MIS) / IT posts:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li><strong>Database Management:</strong> Relational Database Management Systems (Oracle / PostgreSQL / SQL Server), complex queries, indexing.</li>
          <li><strong>Logistics Software Architecture:</strong> ERP logistics systems, Electronic Data Interchange (EDI), API integrations, web development.</li>
          <li><strong>Networking &amp; Cybersecurity:</strong> LAN/WAN terminal networks, firewalls, VPNs, data protection and ISO 27001 compliance.</li>
          <li><strong>Operating Systems &amp; Hardware:</strong> Windows Server, Linux RedHat administration, server virtualization and cloud computing.</li>
        </ul>
      </div>
    `
  },
  {
    id: 35,
    title: '35. Civil Engineering Syllabus',
    badge: 'MT/CE & AO/CE',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Civil engineering domain topics relevant to logistics parks and container terminals:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li><strong>Pavement &amp; Yard Engineering:</strong> Heavy-duty rigid/flexible pavements, paver block design for container stack yards, soil mechanics.</li>
          <li><strong>Railway Permanent Way:</strong> Track alignment, rail ballast, points &amp; crossings, railway siding design guidelines.</li>
          <li><strong>Structural Design &amp; RCC:</strong> Steel warehouse trusses, PEB structures, foundations, IS codes compliance.</li>
          <li><strong>Estimation &amp; Contracts:</strong> CPWD / Railway specifications, tender preparation, measurement books, billing.</li>
        </ul>
      </div>
    `
  },
  {
    id: 36,
    title: '36. Personnel & Administration Syllabus',
    badge: 'MT/P&A',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Human resource and industrial relations domain syllabus for MT (P&amp;A):</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li><strong>Industrial Relations &amp; Labour Laws:</strong> Industrial Disputes Act, Trade Unions Act, Factories Act, Contract Labour (R&amp;A) Act, Payment of Wages, New Labour Codes.</li>
          <li><strong>Human Resource Management:</strong> Talent acquisition, performance appraisal (PMS/PRP), training &amp; organizational development.</li>
          <li><strong>Establishment &amp; Disciplinary Proceedings:</strong> DPE guidelines for CPSEs, conduct, discipline and appeal (CDA) rules, vigilance procedures.</li>
        </ul>
      </div>
    `
  },
  {
    id: 37,
    title: '37. General Aptitude Syllabus',
    badge: 'Common Aptitude (50 Marks)',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Common General Aptitude syllabus across all 12 post codes (50 Marks):</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h5 class="font-bold text-slate-900 text-xs mb-1">Quantitative Aptitude (15 Marks)</h5>
            <p class="text-[11px] text-slate-600 leading-relaxed">Number systems, percentages, profit &amp; loss, simple &amp; compound interest, time &amp; work, time speed &amp; distance, ratio &amp; proportion, data interpretation (charts, graphs, tables).</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h5 class="font-bold text-slate-900 text-xs mb-1">General Awareness (15 Marks)</h5>
            <p class="text-[11px] text-slate-600 leading-relaxed">National &amp; international current events, Indian economy &amp; budget, Ministry of Railways developments, Indian transport &amp; logistics policy, basic general science.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h5 class="font-bold text-slate-900 text-xs mb-1">English Language (10 Marks)</h5>
            <p class="text-[11px] text-slate-600 leading-relaxed">Reading comprehension, grammar &amp; error detection, sentence improvement, synonyms &amp; antonyms, vocabulary, idioms &amp; phrases.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h5 class="font-bold text-slate-900 text-xs mb-1">Reasoning Ability (10 Marks)</h5>
            <p class="text-[11px] text-slate-600 leading-relaxed">Syllogisms, blood relations, seating arrangement, coding-decoding, series completion, analytical puzzles, direction sense.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 38,
    title: '38. Exam Language & Medium',
    badge: 'Bilingual (Hindi & English)',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Language medium specifications for the Computer Based Test:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li>The question paper will be set <strong>bilingually in English and Hindi</strong>, except for the English Language section which will be in English only.</li>
          <li>In case of any discrepancy or ambiguity in question translation between Hindi and English, the <strong>English version shall prevail</strong> as the official standard.</li>
        </ul>
      </div>
    `
  },
  {
    id: 39,
    title: '39. Five-Option Question Structure',
    badge: '5 Options Format',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Unlike standard 4-option examinations, CONCOR's online examination features a <strong>5-option structure</strong>:</p>
        <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-1 text-xs text-blue-900 font-medium">
          <p>Each multiple-choice question contains 5 options: (A), (B), (C), (D), and (E). Only one option is correct. The presence of five choices reduces random guessing probability from 25% down to 20%.</p>
        </div>
      </div>
    `
  },
  {
    id: 40,
    title: '40. Exam Centres & Test Cities',
    badge: 'Pan-India CBT Cities',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>The CBT will be conducted at designated test centres across major Indian metropolitan cities:</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3 text-xs font-semibold text-slate-800">
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">Delhi-NCR</div>
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">Mumbai / Navi Mumbai</div>
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">Kolkata</div>
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">Chennai</div>
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">Bengaluru</div>
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">Hyderabad</div>
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">Ahmedabad</div>
          <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center">Lucknow</div>
        </div>
        <p class="text-xs text-slate-500">Candidates must indicate their test city preferences during online application. CONCOR reserves the right to allocate or change exam centres based on administrative feasibility.</p>
      </div>
    `
  },
  {
    id: 41,
    title: '41. Hall Ticket / Admit Card',
    badge: 'e-Admit Card Portal',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Admit card issuance and verification protocol for CONCOR CBT 2026:</p>
        <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
          <li><strong>No Postal Dispatch:</strong> e-Admit Cards will NOT be sent by post. Candidates must download it from <strong>concorindia.co.in</strong> using their User ID and Password.</li>
          <li><strong>Mandatory Photo ID:</strong> Candidates must bring printed e-Admit Card along with one original government photo identity proof (Aadhaar Card, PAN Card, Passport, Voter ID, or Driving License).</li>
          <li><strong>Biometric Capture:</strong> Digital photo capture and biometric fingerprint verification will be conducted at the test venue.</li>
        </ul>
      </div>
    `
  },
  {
    id: 42,
    title: '42. Group Discussion & Interview (MT Only)',
    badge: 'MT Stage 2',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Protocol for Stage 2 of Management Trainee recruitment:</p>
        <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
          <li><strong>Shortlisting:</strong> Candidates are shortlisted on the basis of CBT marks in the prescribed ratio decided by CONCOR management.</li>
          <li><strong>Evaluation Parameters:</strong> Group Discussion assesses communication, leadership, and team collaboration. Personal Interview evaluates domain expertise, logical clarity, problem-solving, and adaptability.</li>
          <li><strong>Assistant Officer Exemption:</strong> There is NO Group Discussion or Interview for AO candidates.</li>
        </ul>
      </div>
    `
  },
  {
    id: 43,
    title: '43. Tie-Breaking Criteria',
    badge: 'Merit Resolution',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>In case two or more candidates obtain equal composite scores in the merit list:</p>
        <ol class="list-decimal pl-5 space-y-1 text-xs text-slate-700">
          <li>Candidate having <strong>higher marks in Domain Subject (Part A)</strong> in CBT is ranked higher.</li>
          <li>If still tied, candidate <strong>senior in age (older date of birth)</strong> is placed higher in merit.</li>
          <li>If tie persists, alphabetical order of first name will be considered.</li>
        </ol>
      </div>
    `
  },
  {
    id: 44,
    title: '44. Pre-Employment Medical Examination',
    badge: 'Medical Standards',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Candidates provisionally shortlisted must undergo a comprehensive pre-employment medical examination:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700">
          <li>Conducted by CONCOR nominated Medical Officers / Empanelled Hospitals.</li>
          <li>Medical standards correspond to executive service in transport and logistics CPSEs.</li>
          <li>Appointment is strictly subject to being certified as medically fit.</li>
        </ul>
      </div>
    `
  },
  {
    id: 45,
    title: '45. Document Verification',
    badge: 'DV Checklist Table',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Original certificates required during Document Verification (DV):</p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-800 text-white font-bold">
              <tr>
                <th class="p-2.5">Document / Certificate</th>
                <th class="p-2.5">Mandatory Criteria &amp; Format</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800 font-medium">
              <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-900">10th Class Certificate</td><td class="p-2">Official proof of Date of Birth and candidate name.</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-900">Graduation / PG Marksheets</td><td class="p-2">All semester marksheets and original degree certificate.</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-900">Professional Qualifications</td><td class="p-2">CA / CS membership/pass certificate (for Accounts posts).</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-900">Caste Certificate (SC/ST/OBC)</td><td class="p-2">Central Government prescribed format; OBC-NCL issued in FY 2026-27.</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-900">EWS Certificate</td><td class="p-2">Income &amp; Asset certificate from competent Revenue Authority.</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-900">Experience Certificates (AO)</td><td class="p-2">Formal experience letter stating duration, role, and organization.</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-2 font-bold text-slate-900">No Objection Certificate (NOC)</td><td class="p-2">Mandatory for candidates employed in Govt / PSUs / Autonomous Bodies.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 46,
    title: '46. End-to-End Selection Flowcharts',
    badge: 'Visual Roadmaps',
    content: `
      <div class="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <div>
          <h5 class="font-bold text-slate-900 text-xs mb-2">1. Online Application Journey Flowchart:</h5>
          <div class="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center">
            <div class="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs"><span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold inline-flex items-center justify-center mb-1">1</span><span class="block text-xs font-bold text-slate-800">Notification</span></div>
            <div class="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs"><span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold inline-flex items-center justify-center mb-1">2</span><span class="block text-xs font-bold text-slate-800">Eligibility</span></div>
            <div class="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs"><span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold inline-flex items-center justify-center mb-1">3</span><span class="block text-xs font-bold text-slate-800">Registration</span></div>
            <div class="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs"><span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold inline-flex items-center justify-center mb-1">4</span><span class="block text-xs font-bold text-slate-800">Application</span></div>
            <div class="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs"><span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold inline-flex items-center justify-center mb-1">5</span><span class="block text-xs font-bold text-slate-800">Fee Payment</span></div>
            <div class="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs"><span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold inline-flex items-center justify-center mb-1">6</span><span class="block text-xs font-bold text-slate-800">Final Submit</span></div>
          </div>
        </div>
        <div>
          <h5 class="font-bold text-slate-900 text-xs mb-2">2. Management Trainee (MT) Selection Journey:</h5>
          <div class="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center">
            <div class="p-2.5 bg-blue-50/60 border border-blue-200 rounded-xl"><span class="block text-xs font-bold text-blue-900">Application</span><span class="text-[10px] text-blue-600">DigiALM</span></div>
            <div class="p-2.5 bg-blue-50/60 border border-blue-200 rounded-xl"><span class="block text-xs font-bold text-blue-900">Online CBT</span><span class="text-[10px] text-blue-600">100 Marks</span></div>
            <div class="p-2.5 bg-blue-50/60 border border-blue-200 rounded-xl"><span class="block text-xs font-bold text-blue-900">GD / Interview</span><span class="text-[10px] text-blue-600">Corporate HQ</span></div>
            <div class="p-2.5 bg-blue-50/60 border border-blue-200 rounded-xl"><span class="block text-xs font-bold text-blue-900">Document Ver.</span><span class="text-[10px] text-blue-600">Originals</span></div>
            <div class="p-2.5 bg-blue-50/60 border border-blue-200 rounded-xl"><span class="block text-xs font-bold text-blue-900">Pre-Med Exam</span><span class="text-[10px] text-blue-600">Fitness</span></div>
            <div class="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl"><span class="block text-xs font-bold text-emerald-900">Appointment</span><span class="text-[10px] text-emerald-700">1-Yr Training</span></div>
          </div>
        </div>
        <div>
          <h5 class="font-bold text-slate-900 text-xs mb-2">3. Assistant Officer (AO) Selection Journey:</h5>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            <div class="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-xl"><span class="block text-xs font-bold text-emerald-900">Application</span><span class="text-[10px] text-emerald-600">DigiALM</span></div>
            <div class="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-xl"><span class="block text-xs font-bold text-emerald-900">Online CBT</span><span class="text-[10px] text-emerald-600">Pure Merit</span></div>
            <div class="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-xl"><span class="block text-xs font-bold text-emerald-900">Document Ver.</span><span class="text-[10px] text-emerald-600">Experience Check</span></div>
            <div class="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-xl"><span class="block text-xs font-bold text-emerald-900">Pre-Med Exam</span><span class="text-[10px] text-emerald-600">Fitness</span></div>
            <div class="p-2.5 bg-emerald-100/70 border border-emerald-300 rounded-xl"><span class="block text-xs font-bold text-emerald-950">Appointment</span><span class="text-[10px] text-emerald-800">Direct Cadre</span></div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 47,
    title: '47. Service Agreement Bond & Training',
    badge: '₹2 Lakhs Bond',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Specific service bond obligations governing Management Trainee candidates:</p>
        <div class="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2 text-xs text-amber-950 font-medium">
          <p class="font-bold text-sm text-amber-900">Service Agreement Bond Conditions</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Management Trainees must execute a bond of <strong>₹2,00,000/- (Rupees Two Lakhs)</strong> plus 12% interest per annum.</li>
            <li>The bond binds the candidate to serve CONCOR for a minimum period of <strong>three (3) years</strong> following the successful completion of the 1-year training period.</li>
            <li>If the trainee resigns or leaves the corporation before completing 3 years post-training, the bond amount with interest becomes immediately recoverable.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 48,
    title: '48. Terms of Probation & Absorption',
    badge: 'Probation & Career',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Career progression from induction to executive confirmation:</p>
        <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
          <li><strong>Management Trainees:</strong> Placed on one year training. Subject to satisfactory appraisal and performance ratings, absorbed as <strong>Assistant Manager in E-1 Grade</strong> in IDA scale ₹50,000–₹1,60,000.</li>
          <li><strong>Assistant Officers:</strong> Appointed directly in IDA scale ₹40,000–₹1,36,000 and placed on probation as per CONCOR service rules.</li>
          <li><strong>Pan-India Mobility:</strong> Executive employees are liable to be posted and transferred to any container depot, CFS, multi-modal terminal, or corporate office across India.</li>
        </ul>
      </div>
    `
  },
  {
    id: 49,
    title: '49. Frequently Asked Questions (FAQs)',
    badge: '10 Candidate FAQs',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Official answers to 10 frequently asked candidate questions:</p>
        <div class="space-y-2.5">
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q1. Can final-year students apply for Management Trainee posts?</h6>
            <p class="text-xs text-slate-600 mt-1">Yes. Candidates appearing in the final year/semester of the qualifying degree may apply provisionally, provided they fulfill all criteria and produce the final mark sheet/degree during Document Verification.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q2. Is there any interview for Assistant Officer (AO) posts?</h6>
            <p class="text-xs text-slate-600 mt-1">No. Selection for Assistant Officer posts is based purely on the CBT score. There is no Group Discussion or Interview.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q3. What is the crucial cut-off date for age and qualification?</h6>
            <p class="text-xs text-slate-600 mt-1">The crucial reckoning date for determining age, qualification, and experience is strictly 31 August 2026.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q4. Is there negative marking in the CONCOR CBT examination?</h6>
            <p class="text-xs text-slate-600 mt-1">Yes. There is a negative marking of 0.25 marks (1/4th) for every incorrect answer.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q5. How many options will each question have?</h6>
            <p class="text-xs text-slate-600 mt-1">Each question will have five (5) options.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q6. Can a candidate apply for both MT and AO posts?</h6>
            <p class="text-xs text-slate-600 mt-1">Yes, if eligible. However, separate applications and fees must be submitted. The CBT will be conducted on the same day in two shifts.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q7. What is the application fee for SC/ST/PwBD candidates?</h6>
            <p class="text-xs text-slate-600 mt-1">Candidates belonging to SC, ST, PwBD, and Ex-Servicemen categories are 100% exempted from paying the application fee.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q8. What is the Service Agreement Bond for MTs?</h6>
            <p class="text-xs text-slate-600 mt-1">Selected Management Trainees must execute a bond of ₹2,00,000/- plus 12% interest per annum to serve CONCOR for at least 3 years after the 1-year training period.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q9. What is the maximum age limit including relaxations?</h6>
            <p class="text-xs text-slate-600 mt-1">The maximum upper age after all admissible relaxations cannot exceed 50 years as on 31 August 2026.</p>
          </div>
          <div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h6 class="font-bold text-slate-900 text-xs">Q10. Where will the selected candidates be posted?</h6>
            <p class="text-xs text-slate-600 mt-1">Pan-India anywhere across CONCOR's nationwide container terminals, ICDs, CFSs, MMLPs, or Corporate Office.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 50,
    title: '50. Official Links & Helpdesk Directory',
    badge: 'Direct Official URLs',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Verified official links and contact helpdesk for CONCOR Recruitment 2026:</p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-800 text-white font-bold">
              <tr>
                <th class="p-2.5">Official Resource</th>
                <th class="p-2.5">Direct Official Link / Contact</th>
                <th class="p-2.5">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800 font-medium">
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 font-bold text-slate-900">Apply Online Portal</td>
                <td class="p-2.5 font-mono text-blue-700 break-all text-[11px]">https://rrb.digialm.com/EForms/configuredHtml/1181/101565/Index.html</td>
                <td class="p-2.5"><a href="https://rrb.digialm.com/EForms/configuredHtml/1181/101565/Index.html" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 bg-blue-600 text-white font-bold rounded-lg text-xs hover:bg-blue-700 inline-block">Apply Online</a></td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 font-bold text-slate-900">Official Notification (PDF)</td>
                <td class="p-2.5 font-mono text-blue-700 break-all text-[11px]">cms.concorindia.co.in:8000/uploads/cms/pdf/Asf6Xc3Mnw5BWdp_FinalAdvertisement-18thAug2026(Published).pdf</td>
                <td class="p-2.5"><a href="https://cms.concorindia.co.in:8000/uploads/cms/pdf/Asf6Xc3Mnw5BWdp_FinalAdvertisement-18thAug2026(Published).pdf" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 bg-slate-800 text-white font-bold rounded-lg text-xs hover:bg-slate-900 inline-block">Download PDF</a></td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 font-bold text-slate-900">CONCOR Official Website</td>
                <td class="p-2.5 font-mono text-blue-700 break-all text-[11px]">https://www.concorindia.co.in/recruitment</td>
                <td class="p-2.5"><a href="https://www.concorindia.co.in/recruitment" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 bg-slate-100 text-slate-800 font-bold rounded-lg text-xs hover:bg-slate-200 inline-block border border-slate-200">Visit Portal</a></td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2.5 font-bold text-slate-900">Corporate Headquarters</td>
                <td class="p-2.5 text-slate-700">CONCOR Bhawan, C-3, Mathura Road, Opp. Apollo Hospital, New Delhi - 110076</td>
                <td class="p-2.5 font-semibold text-slate-500">Corporate HQ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  }
];
