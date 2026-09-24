import { ExamRecord, ExamInfoSection } from '../types/exam';

export const IBPS_HINDI_OFFICER_2026_EXAM: ExamRecord = {
  id: 'ibps-hindi-officer-2026',
  slug: 'ibps-hindi-officer-recruitment-2026',
  examName: 'IBPS Hindi Officer Recruitment 2026',
  shortName: 'IBPS Hindi Officer',
  organization: 'Institute of Banking Personnel Selection (IBPS)',
  category: 'Latest Exam',
  postName: 'Hindi Officer – Grade E',
  totalVacancy: '1 Confirmed Post (+ 6-Month Waitlist)',
  applicationStartDate: '2026-09-23',
  applicationLastDate: '2026-10-06',
  admitCardDate: 'To Be Updated',
  cityIntimationDate: 'To Be Updated',
  examDate: 'Not Released / To Be Updated',
  answerKeyDate: 'To Be Updated',
  resultDate: 'To Be Updated',
  cutOffDate: 'To Be Updated',
  status: 'APPLICATION_OPEN',
  education: ['Post Graduation', 'Graduation'],
  minimumQualificationLevel: "Master's Degree (Hindi/English/Allied) with Graduation Subjects",
  higherQualificationAccepted: true,
  ageMin: 23,
  ageMax: 30,
  ageRelaxationInfo:
    'Age calculated as on 01.09.2026 (born not earlier than 02.09.1996 and not later than 01.09.2003, both dates inclusive). Institute reserves right to relax/modify criteria for deserving and suitable candidates.',
  gender: 'All',
  state: 'Maharashtra',
  officialWebsite: 'https://www.ibps.in/',
  officialNotification: 'https://www.ibps.in/wp-content/uploads/Advertisement-for-Hindi-Officer-Grade-E-Sept-2026.pdf',
  applyLink: 'https://ibpsreg.ibps.in/ibpsvpspt26/',
  logoIcon: '🏦',
  logoBg: 'bg-blue-700 text-white',
  description:
    'IBPS Hindi Officer Recruitment 2026 for Grade E (Advt No: IBPS/2026-27/04). Regular appointment at IBPS Mumbai. Check eligibility, age limit (23-30 yrs), 1 existing vacancy + waitlist, salary (CTC ~₹17.39 Lakhs), exam pattern (200 MCQs, 200 marks, 140 mins), and direct apply online link.',
  shortSummary:
    'IBPS invites online applications for Hindi Officer (Grade E) on regular basis at IBPS Mumbai. Application window: 23.09.2026 to 06.10.2026. Fee: ₹1,000.',
  importantDates: [
    { label: 'Official Advertisement Released', date: '23 September 2026', isHighlight: false },
    { label: 'Online Application Start Date', date: '23 September 2026', isHighlight: false },
    { label: 'Online Application Last Date', date: '06 October 2026', isHighlight: true },
    { label: 'Online Fee Payment Last Date', date: '06 October 2026', isHighlight: true },
    { label: 'Online Examination Window', date: 'October 2026 (Tentative / Notified Later)', isHighlight: false },
    { label: 'Admit Card / Call Letter', date: 'To Be Updated', isHighlight: false },
    { label: 'Personal Interview & Skill Test', date: 'To Be Updated', isHighlight: false },
    { label: 'Final Result & Merit List', date: 'To Be Updated', isHighlight: false }
  ],
  applicationFee: [
    { category: 'All Candidates (UR / EWS / OBC / SC / ST / PwBD)', amount: '₹1,000/- (Bank transaction charges extra)' }
  ],
  selectionProcess: [
    'Stage 1: Online Examination (200 Questions, 200 Marks, 140 Minutes)',
    'Stage 2: Skill Test & Item Writing Exercise',
    'Stage 3: Group Exercises',
    'Stage 4: Personal Interview',
    'Stage 5: Final Merit List & Document Verification (Service Bond of ₹2 Lakhs for 3 Years)'
  ],
  examPattern: [
    {
      tier: 'Online Written Examination',
      mode: 'Computer Based Test (CBT)',
      duration: '140 minutes (2 Hours 20 Minutes)',
      negativeMarking: '0.25 (one-fourth) marks deducted for every incorrect response',
      subjects: [
        { name: 'Reasoning', questions: 50, marks: 25 },
        { name: 'English Language', questions: 50, marks: 50 },
        { name: 'General Awareness', questions: 50, marks: 50 },
        { name: 'Hindi Language', questions: 50, marks: 75 }
      ]
    }
  ],
  salary: {
    payScale: 'Grade E (Basic Pay: ₹44,900.00 as on September 2026)',
    inHand: '₹91,070.00 approx. per month (including DA, HRA and TA at beginning of scale)',
    allowances:
      'Annual CTC approx. ₹17.39 Lakhs including PF Employer Contribution, Medical Benefits, Medi-Claim, Newspaper & Telephone Reimbursement, Canteen Subsidy, Performance Linked Incentive, Gratuity, Superannuation, LTC/HTC, Children Education Subsidy, Housing Loan Interest Subsidy, etc.'
  },
  vacancies: [
    { category: 'Existing Vacancy (Regular Appointment)', postCount: 1 },
    { category: 'Wait List (Maintained for 6 Months for Need-Based Requirements)', postCount: 0 }
  ],
  faq: [
    {
      q: 'What is the post and grade for IBPS Hindi Officer Recruitment 2026?',
      a: 'The recruitment is for the post of Hindi Officer in Grade E on a Regular basis under Advertisement Number IBPS/2026-27/04.'
    },
    {
      q: 'How many vacancies are officially announced in the notification?',
      a: 'As per Section A of the official notification, successful candidates will be appointed against 1 existing vacancy. Additionally, a wait list will be maintained for need-based requirements valid for six months.'
    },
    {
      q: 'What is the age limit and cut-off date for IBPS Hindi Officer 2026?',
      a: 'Minimum age is 23 years and maximum age is 30 years calculated as on 01 September 2026. A candidate must have been born not earlier than 02.09.1996 and not later than 01.09.2003 (both dates inclusive).'
    },
    {
      q: 'What are the educational qualification combinations for Hindi Officer?',
      a: "Candidates must hold a recognized Master's Degree in Hindi with English as a major/elective subject at Graduation; OR Master's Degree in English with Hindi as major/elective at Graduation; OR Master's Degree in any other subject with Hindi as major/elective and English medium of examination at degree level; OR Master's in any other subject with English as major/elective and Hindi medium of examination at degree level. Distance/open university degrees are NOT acceptable."
    },
    {
      q: 'Is work experience mandatory for IBPS Hindi Officer 2026?',
      a: 'One year experience of translation work from English to Hindi and vice-versa of reports/documents/letters in a bank or financial institution is Desirable (not mandatory). However, computer competency in MS Word and Excel in Hindi & English is MUST (mandatory).'
    },
    {
      q: 'What is the application fee for IBPS Hindi Officer 2026?',
      a: 'The application fee is ₹1,000/- for each candidate, payable exclusively through online payment mode (Debit Card, Credit Card, Internet Banking, IMPS, Cash Cards, Mobile Wallets, UPI).'
    },
    {
      q: 'Where will the selected candidate be posted?',
      a: 'The place of posting is strictly IBPS, Mumbai. The selected candidate must make his/her own arrangement of accommodation in Mumbai.'
    },
    {
      q: 'Is there a service agreement bond for IBPS Hindi Officer?',
      a: 'Yes. The selected candidate joining as Hindi Officer in Grade E is required to execute a Service Bond of ₹2 Lakhs (Rupees Two Lakhs only) to serve IBPS for a minimum period of 3 years from joining date.'
    },
    {
      q: 'What is the structure of the online examination?',
      a: 'The online exam consists of 200 questions carrying 200 marks for 140 minutes: Reasoning (50 Qs, 25 marks, 35 mins), English Language (50 Qs, 50 marks, 35 mins), General Awareness (50 Qs, 50 marks, 20 mins), and Hindi Language (50 Qs, 75 marks, 50 mins). Penalty for wrong answers is 0.25 marks.'
    },
    {
      q: 'What is the deadline for online registration and fee payment?',
      a: 'The online registration and fee payment window opened on 23 September 2026 and closes on 06 October 2026.'
    }
  ]
};

export function generateIbpsHindiOfficer50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Overview',
      badge: 'Overview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The <strong>Institute of Banking Personnel Selection (IBPS)</strong>, an autonomous body set up by the Reserve Bank of India, Central Financial Institutions, and Public Sector Banks, has issued official notification <strong>IBPS/2026-27/04</strong> inviting online applications for direct recruitment by selection to the post of <strong>Hindi Officer (Grade E)</strong> on a <strong>Regular Basis</strong>.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruitment Feature</th>
                  <th class="p-2.5">Official Specification (Advt. IBPS/2026-27/04)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Recruiting Organization</td>
                  <td class="p-2.5 font-bold text-blue-900">Institute of Banking Personnel Selection (IBPS)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Post Name & Grade</td>
                  <td class="p-2.5 font-bold text-slate-900">Hindi Officer – Grade E</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Nature of Employment</td>
                  <td class="p-2.5 font-semibold text-emerald-800">On Regular Basis (Probation: 1 Year)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Place of Posting</td>
                  <td class="p-2.5 font-bold text-indigo-900">IBPS, Mumbai (Candidate must arrange accommodation)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Advertisement Number</td>
                  <td class="p-2.5 font-mono font-bold text-purple-800">IBPS/2026-27/04</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Confirmed Vacancy</td>
                  <td class="p-2.5 font-bold text-emerald-700">1 Existing Vacancy + 6-Month Waitlist</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Gross Emoluments (Monthly)</td>
                  <td class="p-2.5 font-mono font-bold text-blue-800">₹91,070.00 approx. (Basic: ₹44,900.00)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Annual CTC (approx.)</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">₹17.39 Lakhs (as per extant policies)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Application Window</td>
                  <td class="p-2.5 font-bold text-slate-900">23 September 2026 to 06 October 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Important Dates',
      badge: 'Schedule',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official tentative schedule of events as announced in Section B (Page 1) of Advertisement Number IBPS/2026-27/04:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruitment Event</th>
                  <th class="p-2.5">Official Date / Timeline</th>
                  <th class="p-2.5">Official Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Opening Date for Online Registration & Fee Payment</td>
                  <td class="p-2.5 font-mono font-bold text-slate-900">23.09.2026 (23 September 2026)</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Active</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Last Date for Online Submission of Applications with Fee</td>
                  <td class="p-2.5 font-mono font-bold text-red-700">06.10.2026 (06 October 2026)</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800">Closing Soon</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Online Fee Payment Deadline</td>
                  <td class="p-2.5 font-mono font-bold text-red-700">06.10.2026 (06 October 2026)</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900">Strict Cutoff</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Selection Process (Online Exam, Group Exercises, Interview)</td>
                  <td class="p-2.5 font-bold text-indigo-900">October 2026 (Tentative Window)</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">Schedule in Oct 2026</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Exact Exam Date & Shift Timings</td>
                  <td class="p-2.5 font-semibold text-slate-600">Notified Later / To Be Updated</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">Pending</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Call Letter / Admit Card Release</td>
                  <td class="p-2.5 font-semibold text-slate-600">To Be Updated on www.ibps.in</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">Pending</span></td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Declaration of Final Result</td>
                  <td class="p-2.5 font-semibold text-slate-600">To Be Updated</td>
                  <td class="p-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '3. LIVE Application Deadline Countdown',
      badge: 'Live Timer',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Online applications for IBPS Hindi Officer Grade E close strictly on <strong>06 October 2026 at 23:59:59 IST</strong>. Below is the live countdown dynamically synchronized with official IST timestamp:</p>
          <div class="p-4 bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 rounded-2xl">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-red-700 uppercase tracking-wider">Application Closure Timer</span>
              <span class="text-[10px] font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded-full" data-countdown-badge="true" data-target-date="2026-10-06T23:59:59+05:30" data-badge-type="deadline">Calculating...</span>
            </div>
            <div data-live-countdown="true" data-target-date="2026-10-06T23:59:59+05:30" class="mt-2">
              <div data-countdown-live="true" class="grid grid-cols-4 gap-2 text-center">
                <div class="bg-white p-2.5 rounded-xl border border-red-100 shadow-2xs">
                  <div class="text-xl sm:text-2xl font-black text-red-700 font-mono" data-countdown-days="true">--</div>
                  <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Days</div>
                </div>
                <div class="bg-white p-2.5 rounded-xl border border-red-100 shadow-2xs">
                  <div class="text-xl sm:text-2xl font-black text-red-700 font-mono" data-countdown-hours="true">--</div>
                  <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Hours</div>
                </div>
                <div class="bg-white p-2.5 rounded-xl border border-red-100 shadow-2xs">
                  <div class="text-xl sm:text-2xl font-black text-red-700 font-mono" data-countdown-minutes="true">--</div>
                  <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Minutes</div>
                </div>
                <div class="bg-white p-2.5 rounded-xl border border-red-100 shadow-2xs">
                  <div class="text-xl sm:text-2xl font-black text-red-700 font-mono" data-countdown-seconds="true">--</div>
                  <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Seconds</div>
                </div>
              </div>
              <div data-countdown-passed="true" class="hidden p-3 bg-red-100 text-red-800 rounded-xl text-center font-bold">
                Application Closed
              </div>
            </div>
          </div>
          <p class="text-[11px] text-slate-500 italic">Notice: Candidates are strongly advised to complete registration and payment well in advance of 06.10.2026 to avoid server load bottlenecks.</p>
        </div>
      `
    },
    {
      id: 4,
      title: '4. LIVE Fee Payment Deadline Countdown',
      badge: 'Live Timer',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Online payment of the application fee of ₹1,000/- must be successfully transacted on or before <strong>06 October 2026</strong>. No offline challan, demand draft, or post-dated remittances are accepted.</p>
          <div class="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-amber-800 uppercase tracking-wider">Fee Payment Window Timer</span>
              <span class="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full" data-countdown-badge="true" data-target-date="2026-10-06T23:59:59+05:30" data-badge-type="deadline">Calculating...</span>
            </div>
            <div data-live-countdown="true" data-target-date="2026-10-06T23:59:59+05:30" class="mt-2">
              <div data-countdown-live="true" class="grid grid-cols-4 gap-2 text-center">
                <div class="bg-white p-2.5 rounded-xl border border-amber-100 shadow-2xs">
                  <div class="text-xl sm:text-2xl font-black text-amber-800 font-mono" data-countdown-days="true">--</div>
                  <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Days</div>
                </div>
                <div class="bg-white p-2.5 rounded-xl border border-amber-100 shadow-2xs">
                  <div class="text-xl sm:text-2xl font-black text-amber-800 font-mono" data-countdown-hours="true">--</div>
                  <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Hours</div>
                </div>
                <div class="bg-white p-2.5 rounded-xl border border-amber-100 shadow-2xs">
                  <div class="text-xl sm:text-2xl font-black text-amber-800 font-mono" data-countdown-minutes="true">--</div>
                  <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Minutes</div>
                </div>
                <div class="bg-white p-2.5 rounded-xl border border-amber-100 shadow-2xs">
                  <div class="text-xl sm:text-2xl font-black text-amber-800 font-mono" data-countdown-seconds="true">--</div>
                  <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Seconds</div>
                </div>
              </div>
              <div data-countdown-passed="true" class="hidden p-3 bg-amber-100 text-amber-900 rounded-xl text-center font-bold">
                Fee Payment Closed
              </div>
            </div>
          </div>
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-xs">
            <strong>Important:</strong> On successful payment, ensure that an e-receipt is generated and save the printed copy along with the registration form printout.
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. LIVE Exam Status / Countdown',
      badge: 'Exam Status',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section B of the official notification, the Selection Process (Online Examination, Group Exercises and Personal Interview) is tentatively scheduled for <strong>October 2026</strong>.</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
              📅
            </div>
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-blue-800">Official Exam Status</div>
              <div class="text-lg font-bold text-slate-900 mt-0.5">Exam Date: Notified Later / To Be Updated</div>
              <p class="text-xs text-slate-600 mt-1">
                The exact date, shift timing, and examination venue will be intimated by IBPS through authorized call letters downloaded from <a href="https://www.ibps.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">www.ibps.in</a>. In accordance with strict guidelines, no synthetic or speculative exam countdown is created until the exact date is announced.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Vacancy Details',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official notification text regarding vacancies under Section A (Page 1):</p>
          <blockquote class="p-3.5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl text-blue-950 font-medium text-xs sm:text-sm">
            "Successful candidates will be appointed against the existing vacancy. However, a wait list would also be maintained to fill up need-based requirements, which will remain valid for a period of six months."
          </blockquote>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category / Element</th>
                  <th class="p-2.5">Confirmed Status</th>
                  <th class="p-2.5">Validity / Notes</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold bg-slate-50/50 text-slate-900">Existing Confirmed Vacancy</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-700">1 Post</td>
                  <td class="p-2.5">Direct appointment upon successful completion of selection process.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold bg-slate-50/50 text-slate-900">Waitlist Panel</td>
                  <td class="p-2.5 font-bold text-amber-800">Maintained as per Merit</td>
                  <td class="p-2.5 font-semibold text-amber-900">Valid for 6 months for need-based requirements.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-600 font-medium">Notice: As per official guidelines, the waitlist is not counted as additional confirmed vacancies.</p>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Post & Employment Details',
      badge: 'Post Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Detailed parameters of the post and terms of engagement under Advertisement Number IBPS/2026-27/04:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Post Name:</strong> Hindi Officer (Grade E)</li>
            <li><strong>Employment Type:</strong> On Regular Basis</li>
            <li><strong>Department / Nature:</strong> Core administration & examination division of IBPS</li>
            <li><strong>Probation Period:</strong> Initial appointment carries a probation period of 1 year from the date of joining (which can be extended at the discretion of the Institute) and confirmation is subject to satisfactory completion of probation.</li>
            <li><strong>Commitment:</strong> All positions require full 24x7 commitment to the Institute. Candidates willing to dedicate themselves fully to the Institute are expected to apply.</li>
            <li><strong>Internal Eligibility:</strong> This position is <em>not open to internal candidates</em>, either regular or contractual.</li>
          </ul>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Place of Posting',
      badge: 'Posting',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-xs sm:text-sm">
            <h4 class="font-bold text-amber-900 text-sm mb-1">Official Place of Posting Notice (Page 15)</h4>
            <p><strong>"The posting of the selected candidate will be in MUMBAI Only. He/She will have to make his/her own arrangement of accommodation in MUMBAI."</strong></p>
          </div>
          <p class="text-xs text-slate-600">The Institute of Banking Personnel Selection headquarters is situated at IBPS House, 90 Feet D.P. Road, Near Thakur Polytechnic, Off. Western Express Highway, Kandivali (East), Mumbai 400101. The officer will receive House Rent Allowance (HRA) and related subsidies as part of the monthly pay package.</p>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Advertisement Details',
      badge: 'Advt Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key identifiers and authority details of the official notification:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Advertisement Number:</strong> IBPS/2026-27/04</li>
            <li><strong>Date of Release:</strong> 23.09.2026 (23 September 2026)</li>
            <li><strong>Issuing Authority:</strong> Division Head (Administration), IBPS, Mumbai</li>
            <li><strong>Official Document Name:</strong> Advertisement for Hindi Officer Grade E Sept 2026 (20 Pages)</li>
            <li><strong>Official Portal:</strong> <a href="https://www.ibps.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">www.ibps.in</a></li>
          </ul>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Age Limit',
      badge: 'Age Limit',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As specified under Section C.II (Page 2) of the official notification:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">Minimum Age</span>
              <span class="text-2xl font-black text-blue-950 font-display">23 Years</span>
              <span class="text-xs text-slate-600 mt-1 block">Completed as on 01.09.2026</span>
            </div>
            <div class="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl">
              <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-700 block">Maximum Age</span>
              <span class="text-2xl font-black text-indigo-950 font-display">30 Years</span>
              <span class="text-xs text-slate-600 mt-1 block">Upper limit as on 01.09.2026</span>
            </div>
          </div>
          <p class="text-xs text-slate-600">Candidates must note that the Date of Birth recorded in Matriculation / Secondary Examination Certificate or equivalent certificate available on the date of submission of application will only be accepted for determining age eligibility.</p>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Age Calculation Date',
      badge: 'Cut-off Date',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The official cut-off date for reckoning candidate age is:</p>
          <div class="p-4 bg-purple-50 border border-purple-200 rounded-xl text-center">
            <span class="text-xs font-bold text-purple-700 uppercase tracking-wider block">Official Age Reckoning Date</span>
            <span class="text-xl sm:text-2xl font-black text-purple-950 font-display mt-1 block">01 September 2026 (01.09.2026)</span>
          </div>
          <p class="text-xs text-slate-600">The age bracket is calculated exactly between the candidate's date of birth and 01 September 2026.</p>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Birth Date Eligibility',
      badge: 'DOB Window',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The official notification explicitly defines the valid birth date range as follows:</p>
          <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 text-xs sm:text-sm">
            <p class="font-bold text-base text-emerald-900 mb-1">Official Birth Date Range (Both Dates Inclusive):</p>
            <p class="font-mono text-sm sm:text-base font-bold text-emerald-900">Not earlier than 02.09.1996 and not later than 01.09.2003</p>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li>Born on or after <strong>02 September 1996</strong></li>
            <li>Born on or before <strong>01 September 2003</strong></li>
          </ul>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Age Relaxation',
      badge: 'Relaxation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The official notification states the following clause regarding relaxation:</p>
          <blockquote class="p-3.5 bg-slate-100 border-l-4 border-slate-500 rounded-r-xl text-slate-800 text-xs sm:text-sm">
            "Important: The Institute reserves the right to relax/modify the eligibility criteria in educational qualification and minimum work experience for the deserving and suitable candidate and also to raise/ modify the eligibility criteria to restrict the number of candidates to be called for further selection process, commensurate with the number of post."
          </blockquote>
          <p class="text-xs text-slate-600">The notification does not specify statutory caste-based category age relaxation tables for this direct recruitment selection. The prescribed age remains 23 to 30 years as on 01.09.2026 unless explicitly relaxed by the Institute for deserving candidates.</p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Educational Qualification',
      badge: 'Qualifications',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section C.II (Page 2) of the official notification, candidates must possess one of the following recognized Master's Degree combinations:</p>
          <div class="space-y-2.5 my-3">
            <div class="p-3 bg-blue-50/70 border border-blue-200 rounded-xl">
              <span class="text-xs font-bold text-blue-900 block">Combination 1:</span>
              <p class="text-xs text-slate-700 mt-1">Master’s degree from a recognized university in <strong>Hindi</strong> with <strong>English as a major or elective subject at Graduation</strong>.</p>
            </div>
            <div class="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl">
              <span class="text-xs font-bold text-indigo-900 block">Combination 2 (OR):</span>
              <p class="text-xs text-slate-700 mt-1">Master’s degree from a recognized university in <strong>English</strong> with <strong>Hindi as major or elective subject at Graduation</strong>.</p>
            </div>
            <div class="p-3 bg-purple-50/70 border border-purple-200 rounded-xl">
              <span class="text-xs font-bold text-purple-900 block">Combination 3 (OR):</span>
              <p class="text-xs text-slate-700 mt-1">Master’s degree from a recognized university in <strong>any subject other than Hindi or English</strong>, with <strong>Hindi as a major or elective subject AND English as medium of examination</strong> at degree level.</p>
            </div>
            <div class="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span class="text-xs font-bold text-emerald-900 block">Combination 4 (OR):</span>
              <p class="text-xs text-slate-700 mt-1">Master’s degree from a recognized University in <strong>any subject other than Hindi or English</strong> with <strong>English as a major or elective subject AND Hindi as medium of examination</strong> at degree level.</p>
            </div>
          </div>
          <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs">
            <strong>⚠️ Distance Education Warning:</strong> The notification explicitly states: <em>"The degrees obtained through correspondence/distance education/open university system are not acceptable."</em> Results must have been declared on or before 06.10.2026.
          </div>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Hindi / English Qualification Conditions',
      badge: 'Subject Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key conditions governing language study across Bachelor's and Master's levels:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Where Hindi is the Master's subject, English must have been studied as a major or elective subject during Bachelor's degree.</li>
            <li>Where English is the Master's subject, Hindi must have been studied as a major or elective subject during Bachelor's degree.</li>
            <li>Where the Master's is in an allied/other discipline, the dual combination of major/elective language and opposite medium of examination at Bachelor's degree is mandatory.</li>
            <li>Proper proof/mark-sheets showing subjects and medium of instruction/examination must be submitted at the time of the selection process.</li>
          </ul>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Experience Requirements',
      badge: 'Experience',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official classification of work experience requirements (Page 2):</p>
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-800 block">Desirable Experience (Not Mandatory):</span>
            <p class="text-xs sm:text-sm text-slate-800 mt-1 font-medium">
              "One year experience of translation work from English to Hindi and vice-versa of various reports/ Documents/ Letters in a bank/financial institution is Desirable."
            </p>
          </div>
          <p class="text-xs text-slate-600">Fresh postgraduates fulfilling the educational criteria may apply, but candidates with one year of translation experience in banking/financial institutions will be given desirable consideration.</p>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Computer Skills',
      badge: 'Mandatory Skill',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-950">
            <span class="text-xs font-bold uppercase tracking-wider text-red-700 block">Mandatory Requirement (Page 2 & 3):</span>
            <p class="text-xs sm:text-sm font-semibold mt-1">
              "Competency in operating computer is must. Candidate will be required to type /create the translated text documents on his / her own in MS word & Excel in Hindi & English."
            </p>
          </div>
          <p class="text-xs text-slate-600">Candidate must possess practical typing competency in both Hindi (Unicode/Devanagari scripts) and English in Word processors and spreadsheets.</p>
        </div>
      `
    },
    {
      id: 18,
      title: '18. AI Translation Tool Experience',
      badge: 'Added Qualification',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-purple-50 border border-purple-200 rounded-xl text-purple-950">
            <span class="text-xs font-bold uppercase tracking-wider text-purple-700 block">Added Qualification (Page 2):</span>
            <p class="text-xs sm:text-sm font-semibold mt-1">
              "Exposure/ experience related to development of AI based tools for translation would be an added qualifications."
            </p>
          </div>
          <p class="text-xs text-slate-600">Candidates with knowledge of neural machine translation, computer-assisted translation (CAT) workflows, and AI language models applied to Hindi/English translation will receive added merit consideration.</p>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Salary / Grade E Compensation',
      badge: 'Salary & CTC',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official compensation breakdown under Section E (Page 3) as on September 2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Salary Component</th>
                  <th class="p-2.5">Official Amount</th>
                  <th class="p-2.5">Details</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold bg-slate-50/50">Grade</td>
                  <td class="p-2.5 font-bold text-slate-900">Grade E</td>
                  <td class="p-2.5">Officer Cadre</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold bg-slate-50/50">Basic Pay</td>
                  <td class="p-2.5 font-mono font-bold text-blue-900">₹44,900.00</td>
                  <td class="p-2.5">Initial basic pay at beginning of the scale</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold bg-slate-50/50">Total Emoluments (Monthly)</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">₹91,070.00 (approx.)</td>
                  <td class="p-2.5">Includes Dearness Allowance (DA), House Rent Allowance (HRA), and Transport Allowance (TA)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold bg-slate-50/50">Annual CTC (approx.)</td>
                  <td class="p-2.5 font-mono font-bold text-purple-900">₹17.39 Lakhs</td>
                  <td class="p-2.5">As per extant policies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-600">The Annual CTC also includes PF Employer's Contribution, Medical Benefits, Medi-Claim, Telephone & Newspaper Reimbursement, Canteen Subsidy, Performance Linked Incentive, Gratuity, Superannuation, LTC/HTC, Children Education Subsidy, Interest Subsidy on Housing Loan, House Rent Reimbursement Scheme, Group Personal Accident Insurance, House Furnishing Loan Scheme, Conveyance & Computer Loan Schemes, etc.</p>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Service Conditions / Bond',
      badge: 'Service Bond',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official Service Agreement Bond conditions under Section F (Page 4):</p>
          <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-xs sm:text-sm space-y-2">
            <p><strong>Bond Amount:</strong> ₹2 Lakhs (Rupees Two Lakhs only)</p>
            <p><strong>Minimum Service Period:</strong> 3 Years in IBPS w.e.f. date of joining</p>
            <p><strong>Penalty Clause:</strong> If the candidate leaves before 3 years, he/she shall pay ₹2 Lakhs to IBPS towards the Service Bond.</p>
            <p><strong>Extension:</strong> This service bond period may get extended by the number of loss of pay (LOP) days.</p>
          </div>
        </div>
      `
    },
    {
      id: 21,
      title: '21. Application Fee',
      badge: 'Fee Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Application Fees / Intimation Charges under Section M (Page 9):</p>
          <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
            <span class="text-xs font-bold text-blue-700 uppercase tracking-wider block">Prescribed Application Fee</span>
            <span class="text-2xl sm:text-3xl font-black text-blue-950 font-display mt-1 block">₹1,000/- for each candidate</span>
            <span class="text-xs text-slate-600 mt-1 block">Payable from 23.09.2026 to 06.10.2026 (both dates inclusive)</span>
          </div>
          <p class="text-xs text-slate-600">The notification confirms ₹1,000/- for each candidate. Bank transaction charges for online payment will have to be borne by the candidate.</p>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Payment Method',
      badge: 'Payment Mode',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Permitted modes of online fee payment (Section N.5, Page 11):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Debit Cards:</strong> RuPay, Visa, MasterCard, Maestro</li>
            <li><strong>Credit Cards:</strong> All major credit card networks</li>
            <li><strong>Internet Banking:</strong> Supported scheduled commercial banks</li>
            <li><strong>IMPS, Cash Cards / Mobile Wallets</strong></li>
            <li><strong>Unified Payments Interface (UPI)</strong></li>
          </ul>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
            <strong>Payment Caution:</strong> After submitting payment details, do NOT press Back or Refresh. Wait for the transaction confirmation and download the e-receipt.
          </div>
        </div>
      `
    },
    {
      id: 23,
      title: '23. Documents Required',
      badge: 'Document List',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Comprehensive list of documents to be uploaded online and produced during verification (Section L, Page 8-9 & Annexure II):</p>
          <ol class="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Recent passport style colour photograph (20-50 KB JPG)</li>
            <li>Scanned Signature in black ink (10-20 KB JPG)</li>
            <li>Left Thumb Impression in blue/black ink (20-50 KB JPG)</li>
            <li>Handwritten declaration in English written by candidate (50-100 KB JPG)</li>
            <li>Brief Resume in PDF format (A4 size, max 500 KB)</li>
            <li>10th Standard / SSC / SSLC Certificate as proof of Date of Birth (PDF, max 500 KB)</li>
            <li>Degree certificates and mark-sheets for Graduation and Post-Graduation (PDF, max 500 KB)</li>
            <li>Experience certificate(s) on official letterhead (if claiming experience)</li>
            <li>Valid Photo ID Proof (PAN, Aadhaar, Passport, DL, Voter ID)</li>
            <li>No Objection Certificate (NOC) from current employer (if serving in Govt/PSU/Banks)</li>
          </ol>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Photo Upload Requirements',
      badge: 'Photo Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official specifications for candidate photograph (Annexure II, Page 17):</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Parameter</th>
                  <th class="p-2.5">Official Specification</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Physical Dimensions</td>
                  <td class="p-2.5 font-bold">4.5 cm × 3.5 cm</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Pixel Dimensions</td>
                  <td class="p-2.5 font-mono font-bold text-blue-900">200 × 230 pixels (preferred)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">File Format</td>
                  <td class="p-2.5 font-bold">JPG / JPEG</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">File Size</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">20 KB – 50 KB</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Background</td>
                  <td class="p-2.5">Light-coloured, preferably white background</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Live Capture</td>
                  <td class="p-2.5 text-purple-900 font-semibold">Webcam or mobile phone QR scan capture also required during registration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Signature Upload Requirements',
      badge: 'Signature Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official specifications for candidate signature (Annexure II, Page 18):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Ink & Paper:</strong> Sign on white paper with <strong>Black Ink pen</strong>.</li>
            <li><strong>Preferred Dimensions:</strong> <strong>140 × 60 pixels</strong>.</li>
            <li><strong>File Size:</strong> <strong>10 KB – 20 KB</strong>.</li>
            <li><strong>File Format:</strong> JPG / JPEG.</li>
            <li><strong>Crucial Rule:</strong> Signatures in <strong>CAPITAL LETTERS</strong> will NOT be accepted.</li>
          </ul>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Left Thumb Impression Requirements',
      badge: 'Thumb Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official specifications for Left Thumb Impression (Annexure II, Page 18):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Put left thumb impression on white paper with black or blue ink.</li>
            <li><strong>Dimensions:</strong> 240 × 240 pixels in 200 DPI (3 cm × 3 cm width × height).</li>
            <li><strong>File Size:</strong> <strong>20 KB – 50 KB</strong>.</li>
            <li><strong>Format:</strong> JPG / JPEG.</li>
            <li><strong>Alternative:</strong> If left thumb is missing, candidate may use right thumb or other designated fingers as stated in notification.</li>
          </ul>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Handwritten Declaration Requirements',
      badge: 'Declaration',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official specifications for Hand-written Declaration (Annexure II, Page 18):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Must be in candidate's own handwriting in <strong>English only</strong> and should <strong>NOT BE IN CAPITAL LETTERS</strong>.</li>
            <li>Write clearly on white paper with black ink.</li>
            <li><strong>Dimensions:</strong> 800 × 400 pixels in 200 DPI (10 cm × 5 cm).</li>
            <li><strong>File Size:</strong> <strong>50 KB – 100 KB</strong> (JPG/JPEG).</li>
          </ul>
          <div class="p-3 bg-slate-100 border border-slate-300 rounded-xl text-xs font-mono text-slate-900 leading-relaxed">
            “I, _______ (Name of the candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.”
          </div>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Resume / Other Document Requirements',
      badge: 'PDF Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official specifications for supporting documents & brief resume (Annexure II, Page 19):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Format:</strong> Strictly <strong>PDF format</strong>.</li>
            <li><strong>Page Size:</strong> A4 size.</li>
            <li><strong>File Size Limit:</strong> Should not exceed <strong>500 KB</strong> per document.</li>
            <li><strong>Scanning Quality:</strong> Minimum 200 DPI resolution, True Colour. Ensure text is crystal clear and readable.</li>
            <li><strong>Mandatory Uploads:</strong> Brief Resume (PDF), SSC/10th Certificate (DOB proof), Educational Marksheets/Degrees, Experience certificates (if applicable).</li>
          </ul>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Working Photo Resizer / Compressor',
      badge: 'Photo Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Use the built-in RajDailyTools interactive image utility below to crop, resize, and compress your photo strictly to official IBPS specs (200×230 px, 20–50 KB, JPEG):</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <div class="flex items-center justify-between mb-3">
              <span class="font-bold text-slate-900 text-sm">IBPS Hindi Officer Photo Resizer &amp; Compressor</span>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">20 KB – 50 KB</span>
            </div>
            <p class="text-xs text-slate-600 mb-3">Upload your passport photo to instantly format it to 200×230 pixels and compress under 50 KB.</p>
            <div class="space-y-3">
              <input type="file" id="inline-photo-input" accept="image/*" class="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer" />
              <div id="inline-photo-preview-wrap" class="hidden flex flex-col sm:flex-row items-center gap-4 p-3 bg-white border border-slate-200 rounded-xl">
                <canvas id="inline-photo-canvas" width="200" height="230" class="border border-slate-300 rounded shadow-xs w-[100px] h-[115px]"></canvas>
                <div class="space-y-1 text-xs">
                  <div>Dimensions: <strong class="text-slate-800">200 × 230 px</strong></div>
                  <div>Estimated Size: <strong id="inline-photo-size" class="text-emerald-700">-- KB</strong></div>
                  <div class="text-[11px] text-slate-500">Validation: <span id="inline-photo-status" class="font-bold text-emerald-600">Valid</span></div>
                  <a id="inline-photo-download" href="#" download="ibps_hindi_officer_photo.jpg" class="inline-flex items-center gap-1 mt-2 px-3 py-1.5 bg-emerald-600 text-white font-bold rounded-lg text-xs hover:bg-emerald-700">Download Formatted Photo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Working Signature Resizer / Compressor',
      badge: 'Signature Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Format your scanned black-ink signature directly to official IBPS standards (140×60 px, 10–20 KB, JPEG):</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <div class="flex items-center justify-between mb-3">
              <span class="font-bold text-slate-900 text-sm">IBPS Hindi Officer Signature Resizer</span>
              <span class="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">10 KB – 20 KB</span>
            </div>
            <p class="text-xs text-slate-600 mb-3">Upload signature on white background with black ink. (Do NOT use capital letters).</p>
            <div class="space-y-3">
              <input type="file" id="inline-sign-input" accept="image/*" class="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer" />
              <div id="inline-sign-preview-wrap" class="hidden flex flex-col sm:flex-row items-center gap-4 p-3 bg-white border border-slate-200 rounded-xl">
                <canvas id="inline-sign-canvas" width="140" height="60" class="border border-slate-300 rounded shadow-xs w-[140px] h-[60px] bg-white"></canvas>
                <div class="space-y-1 text-xs">
                  <div>Dimensions: <strong class="text-slate-800">140 × 60 px</strong></div>
                  <div>Estimated Size: <strong id="inline-sign-size" class="text-purple-700">-- KB</strong></div>
                  <div class="text-[11px] text-slate-500">Validation: <span id="inline-sign-status" class="font-bold text-emerald-600">Valid</span></div>
                  <a id="inline-sign-download" href="#" download="ibps_hindi_officer_signature.jpg" class="inline-flex items-center gap-1 mt-2 px-3 py-1.5 bg-purple-600 text-white font-bold rounded-lg text-xs hover:bg-purple-700">Download Formatted Signature</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Document / PDF Utility',
      badge: 'PDF Helper',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official guideline for candidate certificates, marksheets, and resume requires A4 PDF format under 500 KB each:</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <h4 class="font-bold text-slate-900 text-sm">IBPS PDF Document Pre-Flight Validator</h4>
            <p class="text-xs text-slate-600">Select any PDF document to verify that its size complies with the official &le; 500 KB limit:</p>
            <input type="file" id="inline-doc-input" accept=".pdf,application/pdf" class="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-slate-800 file:text-white hover:file:bg-slate-900 cursor-pointer" />
            <div id="inline-doc-result" class="hidden p-3 rounded-xl border text-xs"></div>
          </div>
        </div>
      `
    },
    {
      id: 32,
      title: '32. Application Mistake Checklist',
      badge: 'Checklist',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Avoid common rejection reasons by verifying each item before clicking "COMPLETE REGISTRATION":</p>
          <div class="space-y-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" class="mt-0.5 rounded text-blue-600" /> <span>Name spelling matches Matriculation / Secondary Certificate exactly</span></label>
            <label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" class="mt-0.5 rounded text-blue-600" /> <span>Date of Birth falls between 02.09.1996 and 01.09.2003 (both inclusive)</span></label>
            <label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" class="mt-0.5 rounded text-blue-600" /> <span>Postgraduate Degree is regular (not correspondence or open university)</span></label>
            <label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" class="mt-0.5 rounded text-blue-600" /> <span>Hindi/English combination at Bachelor's level strictly satisfied</span></label>
            <label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" class="mt-0.5 rounded text-blue-600" /> <span>Signature is NOT in capital letters</span></label>
            <label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" class="mt-0.5 rounded text-blue-600" /> <span>Handwritten declaration written in English in candidate's own handwriting</span></label>
            <label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" class="mt-0.5 rounded text-blue-600" /> <span>Brief Resume and certificates scanned as A4 PDF under 500 KB</span></label>
            <label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" class="mt-0.5 rounded text-blue-600" /> <span>Online payment of ₹1,000 completed and e-receipt saved</span></label>
          </div>
        </div>
      `
    },
    {
      id: 33,
      title: '33. How to Apply Online',
      badge: 'Application Guide',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Step-by-step procedure to submit application online under Section N (Page 10):</p>
          <ol class="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
            <li>Visit official IBPS website: <a href="https://www.ibps.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold underline">www.ibps.in</a>.</li>
            <li>Click on the link for recruitment of <strong>Hindi Officer (Grade E) Advt. IBPS/2026-27/04</strong>.</li>
            <li>Click on <strong>"CLICK HERE TO APPLY ONLINE"</strong> to open the registration portal.</li>
            <li>Click on <strong>"CLICK HERE FOR NEW REGISTRATION"</strong> and enter basic details (name, mobile, email).</li>
            <li>A provisional registration number and password will be generated and displayed on screen, and sent via SMS/Email.</li>
            <li>Fill educational qualifications, graduation subjects, medium of examination, and computer proficiency.</li>
            <li>Upload Photograph, Signature, Left Thumb Impression, Handwritten Declaration, Resume (PDF), and Documents.</li>
            <li>Use the <strong>"SAVE AND NEXT"</strong> facility to review each section.</li>
            <li>Verify all fields carefully before clicking <strong>"COMPLETE REGISTRATION"</strong> (no edits allowed after submission).</li>
            <li>Make online payment of ₹1,000/- through integrated gateway and take printout of e-receipt and application form.</li>
          </ol>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Online Registration / Login Process',
      badge: 'Portal Login',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Direct candidate registration and login portal credentials:</p>
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl space-y-2 text-xs">
            <p><strong>Official Registration Portal:</strong> <a href="https://ibpsreg.ibps.in/ibpsvpspt26/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold break-all">https://ibpsreg.ibps.in/ibpsvpspt26/</a></p>
            <p><strong>Login Requirement:</strong> Provisional Registration Number and Password received via SMS/Email.</p>
            <p><strong>Session Timeout:</strong> Ensure stable internet connectivity during payment and form filling.</p>
          </div>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Written Examination',
      badge: 'Exam Mode',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Key guidelines on the conduct of online written examination (Section G, Page 4):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>The online examination may be conducted online only at IBPS, Mumbai, or in multiple venues across 18 centres in India depending upon response.</li>
            <li>If conducted only at IBPS Mumbai, efforts will be made to complete the selection process on the same day or extending to the next day.</li>
            <li>Biometric thumb verification and photo capture are mandatory at the examination venue.</li>
            <li>Candidates must bring valid Call Letter, original Photo ID proof, and photocopy of photo ID proof.</li>
          </ul>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Official Exam Pattern / Syllabus',
      badge: 'Exam Pattern',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official test structure as prescribed under Section H (Page 4) of Advertisement IBPS/2026-27/04:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Sr. No.</th>
                  <th class="p-2.5">Name of the Test</th>
                  <th class="p-2.5">No. of Qs.</th>
                  <th class="p-2.5">Max. Marks</th>
                  <th class="p-2.5">Duration</th>
                  <th class="p-2.5">Version</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">1</td>
                  <td class="p-2.5 font-semibold">Reasoning</td>
                  <td class="p-2.5 font-mono">50</td>
                  <td class="p-2.5 font-mono font-bold text-blue-900">25</td>
                  <td class="p-2.5 font-mono">35 minutes</td>
                  <td class="p-2.5">English</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">2</td>
                  <td class="p-2.5 font-semibold">English Language</td>
                  <td class="p-2.5 font-mono">50</td>
                  <td class="p-2.5 font-mono font-bold text-blue-900">50</td>
                  <td class="p-2.5 font-mono">35 minutes</td>
                  <td class="p-2.5">English</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">3</td>
                  <td class="p-2.5 font-semibold">General Awareness</td>
                  <td class="p-2.5 font-mono">50</td>
                  <td class="p-2.5 font-mono font-bold text-blue-900">50</td>
                  <td class="p-2.5 font-mono">20 minutes</td>
                  <td class="p-2.5">English</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">4</td>
                  <td class="p-2.5 font-semibold">Hindi Language</td>
                  <td class="p-2.5 font-mono">50</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-800">75</td>
                  <td class="p-2.5 font-mono">50 minutes</td>
                  <td class="p-2.5 font-bold text-emerald-800">Hindi</td>
                </tr>
                <tr class="bg-slate-50 font-bold">
                  <td class="p-2.5" colspan="2">Total</td>
                  <td class="p-2.5 font-mono text-slate-900">200</td>
                  <td class="p-2.5 font-mono text-blue-900">200</td>
                  <td class="p-2.5 font-mono text-slate-900">140 minutes</td>
                  <td class="p-2.5">--</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-600"><strong>Penalty for Wrong Answers:</strong> There will be a penalty for wrong answers marked in the Objective Tests. One fourth or 0.25 of the marks assigned to that question will be deducted as penalty. Unanswered questions attract no penalty.</p>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Skill Test & Item Writing Exercise',
      badge: 'Skill Test',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates shortlisted from the online examination will appear for the <strong>Skill Test &amp; Item Writing Exercise</strong> at IBPS, Mumbai (Section A &amp; D, Page 1 &amp; 3):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Practical assessment of translation capabilities from English to Hindi and Hindi to English involving technical, financial, and banking texts.</li>
            <li>Item writing exercise: Drafting and developing objective/descriptive questions testing Hindi language proficiency.</li>
            <li>Computer-based drafting in MS Word and MS Excel.</li>
          </ul>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Group Exercise',
      badge: 'Group Task',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Shortlisted candidates will participate in <strong>Group Exercises</strong> conducted at IBPS, Mumbai. The group exercise evaluates interpersonal communication, teamwork, analytical capability, and official problem-solving acumen in bilingual contexts.</p>
        </div>
      `
    },
    {
      id: 39,
      title: '39. Personal Interview',
      badge: 'Interview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The <strong>Personal Interview</strong> will be conducted by a high-level selection committee at IBPS, Mumbai:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Evaluates depth of Hindi and English linguistic proficiency, official language implementation rules (Rajbhasha guidelines), and banking awareness.</li>
            <li>Original documents and photocopies supporting age, educational qualifications, and experience will be verified at this stage.</li>
            <li>Selection will be made by a committee and such selection will be Final.</li>
          </ul>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Selection Process',
      badge: 'Selection Stages',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Complete 5-stage selection workflow officially announced by IBPS:</p>
          <div class="space-y-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm">
            <div class="flex items-center gap-2 font-bold text-blue-900">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
              <span>Online Objective Examination (200 Qs, 200 Marks, 140 Mins)</span>
            </div>
            <div class="flex items-center gap-2 font-bold text-indigo-900">
              <span class="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">2</span>
              <span>Skill Test &amp; Item Writing Exercise</span>
            </div>
            <div class="flex items-center gap-2 font-bold text-purple-900">
              <span class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">3</span>
              <span>Group Exercises</span>
            </div>
            <div class="flex items-center gap-2 font-bold text-amber-900">
              <span class="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs">4</span>
              <span>Personal Interview</span>
            </div>
            <div class="flex items-center gap-2 font-bold text-emerald-900">
              <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">5</span>
              <span>Final Merit &amp; Document Verification (Execution of ₹2 Lakhs Bond)</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 41,
      title: '41. Final Merit / Selection',
      badge: 'Merit List',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Principles governing final merit list preparation under Section K &amp; L (Page 7-8):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Final merit will be prepared based on composite performance across the entire selection process (Online Examination, Skill Test, Group Exercises, and Personal Interview).</li>
            <li>Appointment is made strictly against the 1 confirmed vacancy, with a 6-month waitlist for subsequent requirements.</li>
            <li>Scores of candidates failing to secure minimum qualifying marks will not be disclosed.</li>
            <li>Selection will be made by a committee and such selection will be Final and binding.</li>
          </ul>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Recruitment Timeline',
      badge: 'Timeline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Chronological milestones for IBPS Hindi Officer Grade E Recruitment 2026:</p>
          <div class="relative pl-6 space-y-4 border-l-2 border-blue-200 text-xs">
            <div>
              <span class="font-bold text-blue-900">23 September 2026:</span>
              <p class="text-slate-600">Official notification released; Online registration and fee payment opens.</p>
            </div>
            <div>
              <span class="font-bold text-red-700">06 October 2026:</span>
              <p class="text-slate-600">Online registration and payment window strictly closes.</p>
            </div>
            <div>
              <span class="font-bold text-indigo-900">October 2026 (Tentative):</span>
              <p class="text-slate-600">Online Examination, Group Exercises, and Personal Interview scheduled.</p>
            </div>
            <div>
              <span class="font-bold text-emerald-800">Post-Selection:</span>
              <p class="text-slate-600">Provisional appointment letter issued, police verification, medical fitness, and service bond execution.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Recruitment Process Flowchart',
      badge: 'Flowchart',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Visual selection flowchart representing all official stages:</p>
          <div class="flex flex-col items-center gap-2 text-center text-xs font-bold my-3">
            <div class="w-full max-w-md p-2.5 bg-blue-50 border border-blue-300 rounded-xl text-blue-900">Online Objective Examination (200 Marks)</div>
            <div class="text-blue-500 font-black text-sm">&darr;</div>
            <div class="w-full max-w-md p-2.5 bg-indigo-50 border border-indigo-300 rounded-xl text-indigo-900">Skill Test &amp; Item Writing Exercise</div>
            <div class="text-indigo-500 font-black text-sm">&darr;</div>
            <div class="w-full max-w-md p-2.5 bg-purple-50 border border-purple-300 rounded-xl text-purple-900">Group Exercises</div>
            <div class="text-purple-500 font-black text-sm">&darr;</div>
            <div class="w-full max-w-md p-2.5 bg-amber-50 border border-amber-300 rounded-xl text-amber-900">Personal Interview</div>
            <div class="text-amber-500 font-black text-sm">&darr;</div>
            <div class="w-full max-w-md p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900">Final Merit List &amp; Appointment (IBPS, Mumbai)</div>
          </div>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Application Process Flowchart',
      badge: 'App Flow',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Application submission workflow from portal entry to acknowledgement:</p>
          <div class="flex flex-col items-center gap-2 text-center text-xs font-bold my-3">
            <div class="w-full max-w-md p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800">Visit www.ibps.in &rarr; Click Apply Online</div>
            <div class="text-slate-400 font-black text-sm">&darr;</div>
            <div class="w-full max-w-md p-2.5 bg-blue-50 border border-blue-300 rounded-xl text-blue-900">New Registration &rarr; Generate Reg. No. &amp; Password</div>
            <div class="text-blue-500 font-black text-sm">&darr;</div>
            <div class="w-full max-w-md p-2.5 bg-indigo-50 border border-indigo-300 rounded-xl text-indigo-900">Enter Personal, Qualification &amp; Typing Details</div>
            <div class="text-indigo-500 font-black text-sm">&darr;</div>
            <div class="w-full max-w-md p-2.5 bg-purple-50 border border-purple-300 rounded-xl text-purple-900">Upload Photo, Sign, Thumb, Declaration, Resume (PDF)</div>
            <div class="text-purple-500 font-black text-sm">&darr;</div>
            <div class="w-full max-w-md p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900">Pay ₹1,000 Online &rarr; Download Application &amp; E-Receipt</div>
          </div>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Eligibility Checker',
      badge: 'Checker Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Interactive eligibility verification tool based on the 4 official education combinations:</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-xs">
            <div>
              <label class="block font-bold text-slate-800 mb-1">Select Your Master's Degree Subject:</label>
              <select id="checker-master" class="w-full p-2 border border-slate-300 rounded-lg bg-white">
                <option value="hindi">Master's Degree in Hindi</option>
                <option value="english">Master's Degree in English</option>
                <option value="other">Master's Degree in Any Other Subject</option>
                <option value="none">No Master's Degree</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-800 mb-1">Bachelor's Degree Language Subject:</label>
              <select id="checker-bachelor" class="w-full p-2 border border-slate-300 rounded-lg bg-white">
                <option value="english_major">English as Major / Elective Subject</option>
                <option value="hindi_major">Hindi as Major / Elective Subject</option>
                <option value="both">Both Hindi and English studied</option>
                <option value="neither">Neither Hindi nor English</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-800 mb-1">Medium of Examination at Degree Level:</label>
              <select id="checker-medium" class="w-full p-2 border border-slate-300 rounded-lg bg-white">
                <option value="english">English Medium</option>
                <option value="hindi">Hindi Medium</option>
                <option value="other">Other Regional Language Medium</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-800 mb-1">Computer Typing Competency (MS Word & Excel):</label>
              <select id="checker-computer" class="w-full p-2 border border-slate-300 rounded-lg bg-white">
                <option value="yes">Yes - Competent in typing Hindi & English in Word and Excel</option>
                <option value="no">No - Not competent</option>
              </select>
            </div>
            <button type="button" id="btn-check-eligibility" class="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl cursor-pointer">Verify Eligibility</button>
            <div id="checker-result" class="hidden p-3 rounded-xl border font-medium"></div>
          </div>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Age Eligibility Checker',
      badge: 'Age Tool',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Calculate your exact age as on the official cut-off date of <strong>01 September 2026</strong>:</p>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-xs">
            <div>
              <label class="block font-bold text-slate-800 mb-1">Your Date of Birth (as per 10th Certificate):</label>
              <input type="date" id="ibps-age-dob" class="w-full p-2 border border-slate-300 rounded-lg bg-white font-mono" value="1999-05-15" />
            </div>
            <div>
              <label class="block font-bold text-slate-800 mb-1">Official Cut-Off Date:</label>
              <input type="text" readonly value="2026-09-01 (01 September 2026)" class="w-full p-2 border border-slate-200 rounded-lg bg-slate-100 font-mono text-slate-700" />
            </div>
            <button type="button" id="btn-calc-ibps-age" class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl cursor-pointer">Calculate Official Age</button>
            <div id="ibps-age-result" class="hidden p-3 rounded-xl border"></div>
          </div>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Important Candidate Instructions',
      badge: 'Instructions',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Crucial candidate guidelines from Section O (Page 12-14):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Biometric Verification:</strong> At different stages of selection, biometric photograph and right thumb data or IRIS scan will be captured and matched.</li>
            <li><strong>Provisional Status:</strong> Issuance of call letters does not imply final clearance. Eligibility is scrutinized thoroughly at original document verification.</li>
            <li><strong>NOC Requirement:</strong> Candidates currently employed in Government / quasi-govt / PSUs / Nationalised Banks must produce a 'No Objection Certificate' in original.</li>
            <li><strong>Loan Default Clause:</strong> Candidates who have defaulted under lending arrangements with Banks/NBFCs or credit cards without regularizing are not eligible.</li>
            <li><strong>Banned Items:</strong> Mobile phones, smartwatches, Bluetooth devices, geometry boxes, calculators, and eatables are strictly prohibited inside exam halls.</li>
          </ul>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Frequently Asked Questions',
      badge: 'FAQ',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Answers to frequent queries from applicants for IBPS Hindi Officer Grade E:</p>
          <div class="space-y-2.5">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <h5 class="font-bold text-slate-900 text-xs">Q. Is distance education / correspondence degree eligible?</h5>
              <p class="text-xs text-slate-600 mt-1">No. The official notification explicitly states: "The degrees obtained through correspondence/distance education/open university system are not acceptable."</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <h5 class="font-bold text-slate-900 text-xs">Q. Where will the examination take place?</h5>
              <p class="text-xs text-slate-600 mt-1">The online exam may be conducted at IBPS Mumbai or across 18 tentative test centres across India (Annexure I) depending on candidate response.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <h5 class="font-bold text-slate-900 text-xs">Q. What is the Service Bond penalty?</h5>
              <p class="text-xs text-slate-600 mt-1">₹2 Lakhs for a minimum service period of 3 years from joining date.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Official Important Links',
      badge: 'Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official verified URLs for IBPS Hindi Officer Grade E Recruitment 2026:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Portal / Document</th>
                  <th class="p-2.5">Direct Action</th>
                  <th class="p-2.5">Official Destination</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">Apply Online Portal</td>
                  <td class="p-2.5">
                    <a href="https://ibpsreg.ibps.in/ibpsvpspt26/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700">
                      Apply Online &rarr;
                    </a>
                  </td>
                  <td class="p-2.5 font-mono text-[11px] text-slate-500">ibpsreg.ibps.in</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Official Notification PDF</td>
                  <td class="p-2.5">
                    <a href="https://www.ibps.in/wp-content/uploads/Advertisement-for-Hindi-Officer-Grade-E-Sept-2026.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-bold text-xs hover:bg-emerald-700">
                      Download PDF &darr;
                    </a>
                  </td>
                  <td class="p-2.5 font-mono text-[11px] text-slate-500">ibps.in (20 Pages)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">IBPS Official Website</td>
                  <td class="p-2.5">
                    <a href="https://www.ibps.in/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-800 text-white rounded-lg font-bold text-xs hover:bg-slate-900">
                      Visit Website &rarr;
                    </a>
                  </td>
                  <td class="p-2.5 font-mono text-[11px] text-slate-500">www.ibps.in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Final Quick Summary',
      badge: 'Summary',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Quick reference recap of IBPS Hindi Officer Recruitment 2026 (Advt. IBPS/2026-27/04):</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-medium my-2">
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-slate-500 block text-[10px] uppercase">Post</span>
              <span class="font-bold text-slate-900 mt-0.5 block">Hindi Officer</span>
              <span class="text-[10px] text-blue-700">Grade E</span>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-slate-500 block text-[10px] uppercase">Vacancy</span>
              <span class="font-bold text-emerald-800 mt-0.5 block">1 + Waitlist</span>
              <span class="text-[10px] text-slate-600">6 Months</span>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-slate-500 block text-[10px] uppercase">Last Date</span>
              <span class="font-bold text-red-700 mt-0.5 block">06.10.2026</span>
              <span class="text-[10px] text-slate-600">Online Fee</span>
            </div>
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-slate-500 block text-[10px] uppercase">Posting</span>
              <span class="font-bold text-purple-900 mt-0.5 block">IBPS, Mumbai</span>
              <span class="text-[10px] text-slate-600">Regular</span>
            </div>
          </div>
          <p class="text-xs text-slate-600 text-center font-medium">Verify all eligibility criteria from the official notification on <a href="https://www.ibps.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">www.ibps.in</a> before final form submission.</p>
        </div>
      `
    }
  ];
}

IBPS_HINDI_OFFICER_2026_EXAM.allInformation = generateIbpsHindiOfficer50Sections();
