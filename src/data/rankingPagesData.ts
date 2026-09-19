import { ExamRecord, ExamInfoSection } from '../types/exam';

// ---------------------------------------------------------------------------
// 1. AGNIVEER AGE CALCULATOR 2026 DATA
// ---------------------------------------------------------------------------
const agniveerAgeSections: ExamInfoSection[] = [
  {
    id: 1,
    title: '1. Indian Army Agniveer Age Limit 2026 – Official Guidelines',
    badge: 'Age Rules',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Under the Agnipath Scheme 2026, the Ministry of Defence and Join Indian Army prescribe a strict age window of <strong>17.5 years to 21 years</strong> as on the official recruitment cut-off date (01 October 2026). Candidates born between <strong>01 October 2005 and 01 April 2009</strong> (both days inclusive) are eligible to register across Army, Navy, and Air Force rallies.</p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Agniveer Trade Category</th>
                <th class="p-2.5">Prescribed Age Bracket</th>
                <th class="p-2.5">Eligible Birth Date Range</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Agniveer (General Duty - All Arms)</td>
                <td class="p-2.5 font-bold text-slate-800">17½ – 21 Years</td>
                <td class="p-2.5 font-mono text-emerald-700">01 Oct 2005 to 01 Apr 2009</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Agniveer (Technical - Aviation/Ammunition)</td>
                <td class="p-2.5 font-bold text-slate-800">17½ – 21 Years</td>
                <td class="p-2.5 font-mono text-emerald-700">01 Oct 2005 to 01 Apr 2009</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Agniveer (Clerk / Store Keeper Technical)</td>
                <td class="p-2.5 font-bold text-slate-800">17½ – 21 Years</td>
                <td class="p-2.5 font-mono text-emerald-700">01 Oct 2005 to 01 Apr 2009</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Agniveer (Tradesman 10th Pass & 8th Pass)</td>
                <td class="p-2.5 font-bold text-slate-800">17½ – 21 Years</td>
                <td class="p-2.5 font-mono text-emerald-700">01 Oct 2005 to 01 Apr 2009</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Agniveer Women (Corps of Military Police)</td>
                <td class="p-2.5 font-bold text-slate-800">17½ – 21 Years</td>
                <td class="p-2.5 font-mono text-emerald-700">01 Oct 2005 to 01 Apr 2009</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: '2. Trade-Wise Educational Qualification Criteria',
    badge: 'Education',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>In addition to age eligibility, candidates must fulfill the mandatory academic thresholds specified in the official rally notifications:</p>
        <ul class="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
          <li><strong>Agniveer GD:</strong> Class 10th/Matric with 45% marks in aggregate and 33% in each subject.</li>
          <li><strong>Agniveer Technical:</strong> 10+2/Intermediate Exam pass in Science with Physics, Chemistry, Maths and English with min 50% marks in aggregate and 40% in each subject.</li>
          <li><strong>Agniveer Clerk/SKT:</strong> 10+2/Intermediate Exam pass in any stream (Arts, Commerce, Science) with 60% marks in aggregate and minimum 50% in each subject. Mandatory English and Maths/Accounts/Book Keeping.</li>
          <li><strong>Agniveer Tradesman (10th Pass):</strong> Class 10th simple pass. No aggregate percentage requirement, but 33% in each subject.</li>
          <li><strong>Agniveer Tradesman (8th Pass):</strong> Class 8th simple pass with minimum 33% in each subject.</li>
        </ul>
      </div>
    `
  },
  {
    id: 3,
    title: '3. Selection Stages & CEE Computer-Based Examination',
    badge: 'Selection',
    content: `
      <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p><strong>Stage I:</strong> Online Common Entrance Examination (CEE) conducted across nationwide centers.</p>
        <p><strong>Stage II:</strong> Recruitment Rally (Physical Fitness Test PFT 1600m Run, Beam Pull-ups, 9ft Ditch, Zig-zag Balance & Physical Measurement Test PMT).</p>
        <p><strong>Stage III:</strong> Comprehensive Medical Examination at Base/Military Hospital.</p>
      </div>
    `
  }
];

export const AGNIVEER_AGE_CALCULATOR_EXAM: ExamRecord = {
  id: 'agniveer-age-calculator-2026',
  slug: 'agniveer-age-calculator-2026',
  examName: 'Indian Army Agniveer Age Calculator 2026',
  shortName: 'Agniveer Age Calculator',
  organization: 'Join Indian Army & Ministry of Defence',
  category: 'Defence',
  postName: 'Agniveer (General Duty, Technical, Clerk/SKT, Tradesman)',
  totalVacancy: '25,000+ Posts Annually',
  logoIcon: '🎖️',
  state: 'All India',
  ageMin: 17.5,
  ageMax: 21,
  gender: 'All',
  applicationStartDate: '2026-02-15',
  applicationLastDate: '2026-03-31',
  admitCardDate: '2026-04-15',
  examDate: '2026-05-01',
  status: 'APPLICATION_OPEN',
  education: ['10th', '12th', '8th'],
  officialWebsite: 'https://joinindianarmy.nic.in',
  officialNotification: 'https://joinindianarmy.nic.in/writereaddata/Portal/Notification/agniveer_2026.pdf',
  applyLink: 'https://joinindianarmy.nic.in/Authentication.aspx',
  salary: {
    payScale: 'Year 1: ₹30,000 | Year 2: ₹33,000 | Year 3: ₹36,500 | Year 4: ₹40,000',
    inHand: '₹21,000 (Year 1) to ₹28,000 (Year 4) + ₹10.04 Lakh Seva Nidhi Package',
    allowances: 'Hardship & Risk Allowance, Ration Allowance, Uniform & Travel Allowances'
  },
  importantDates: [
    { label: 'Rally Notification Released', date: 'February 2026', isHighlight: true },
    { label: 'Online Application Window', date: '15 Feb to 31 Mar 2026', isHighlight: true },
    { label: 'Online CEE Exam Date', date: 'May 2026 onwards' },
    { label: 'Official Age Cut-Off Date', date: '01 October 2026', isHighlight: true }
  ],
  applicationFee: [
    { category: 'All Candidates (Examination Fee)', amount: '₹250/- + 50% GST & Bank Charges' }
  ],
  vacancies: [
    { category: 'Agniveer General Duty (GD)', postCount: 15000 },
    { category: 'Agniveer Technical', postCount: 4000 },
    { category: 'Agniveer Clerk / Store Keeper Technical', postCount: 3000 },
    { category: 'Agniveer Tradesmen (10th & 8th Pass)', postCount: 3000 }
  ],
  selectionProcess: [
    'Stage 1: Phase-I Online Common Entrance Examination (CEE)',
    'Stage 2: Phase-II Recruitment Rally (PFT 1600m Run, Beam & PMT Height/Chest)',
    'Stage 3: Phase-III Adaptability Test & Detailed Medical Examination (DME)',
    'Stage 4: Final Merit List & Dispatch to Regimental Training Centres (RTCs)'
  ],
  examPattern: [
    {
      stageName: 'Phase 1: Online CEE (General Duty & Tradesmen)',
      mode: 'Computer Based Test (CBT - Bilingual)',
      duration: '60 Minutes',
      negativeMarking: '0.50 Mark per incorrect response',
      subjects: [
        { name: 'General Knowledge (15 Qs)', questions: 15, marks: 30 },
        { name: 'General Science (15 Qs)', questions: 15, marks: 30 },
        { name: 'Mathematics (15 Qs)', questions: 15, marks: 30 },
        { name: 'Logical Reasoning (5 Qs)', questions: 5, marks: 10 }
      ]
    }
  ],
  allInformation: agniveerAgeSections,
  faq: [
    {
      q: 'What is the exact age limit for Agniveer Army Recruitment 2026?',
      a: 'The prescribed age limit is 17.5 to 21 years as of 01 October 2026. Candidates must be born between 01 Oct 2005 and 01 Apr 2009.'
    },
    {
      q: 'Is there any category age relaxation for SC/ST/OBC in Agniveer recruitment?',
      a: 'No. The Agnipath Scheme enforces a uniform age bracket of 17.5 to 21 years across all categories without relaxation.'
    },
    {
      q: 'Can 12th appearing students apply for Agniveer Clerk or Technical?',
      a: 'Candidates must possess the requisite passing certificate and marksheet at the time of online application or rally document verification.'
    }
  ]
};

// ---------------------------------------------------------------------------
// 2. IOB LLO EXAM PATTERN & SELECTION PROCESS 2026 DATA
// ---------------------------------------------------------------------------
const iobLloSections: ExamInfoSection[] = [
  {
    id: 1,
    title: '1. IOB Local Language Officer (LLO/LBO) 2026 – Overview & Fast Facts',
    badge: 'Overview',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Indian Overseas Bank (IOB), a leading Public Sector Bank headquartered in Chennai, conducts direct recruitment for <strong>Local Bank Officers / Local Language Officers (LLO/LBO)</strong>. The selection structure comprises an Online Written Examination (140 Questions, 200 Marks), a Language Proficiency Test (LPT), and a Personal Interview (100 Marks) with an 80:20 final composite weightage.</p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Recruitment Parameter</th>
                <th class="p-2.5">Official Specification</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Conducting Authority</td>
                <td class="p-2.5 font-bold text-slate-800">Indian Overseas Bank (IOB, Central Office, Chennai)</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Post Designation</td>
                <td class="p-2.5 font-bold text-slate-800">Local Bank Officer / Local Language Officer (JMGS-I)</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Total Questions & Marks</td>
                <td class="p-2.5 font-mono text-emerald-700 font-bold">140 Questions | 200 Total Marks</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Test Duration</td>
                <td class="p-2.5 font-bold text-slate-800">180 Minutes (3 Hours with Sectional Timings)</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Negative Marking</td>
                <td class="p-2.5 font-bold text-red-600">0.25 Marks (¼th penalty) per wrong answer</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Weightage Structure</td>
                <td class="p-2.5 font-bold text-indigo-700">80% Online Exam + 20% Personal Interview</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: '2. Detailed 4-Section Exam Pattern & Sectional Timing',
    badge: 'Exam Pattern',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>The online examination is divided into 4 specific sections with strict sectional time cut-offs:</p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-800 text-white font-bold">
              <tr>
                <th class="p-2.5">Section Name</th>
                <th class="p-2.5">No. of Questions</th>
                <th class="p-2.5">Maximum Marks</th>
                <th class="p-2.5">Allotted Time</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800 bg-white">
              <tr>
                <td class="p-2.5 font-semibold">Reasoning & Computer Aptitude</td>
                <td class="p-2.5 font-bold text-center">30</td>
                <td class="p-2.5 font-bold text-center text-blue-700">60</td>
                <td class="p-2.5 text-center">60 Minutes</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold">General / Economy / Banking Awareness</td>
                <td class="p-2.5 font-bold text-center">40</td>
                <td class="p-2.5 font-bold text-center text-blue-700">40</td>
                <td class="p-2.5 text-center">30 Minutes</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold">Data Analysis & Interpretation</td>
                <td class="p-2.5 font-bold text-center">30</td>
                <td class="p-2.5 font-bold text-center text-blue-700">60</td>
                <td class="p-2.5 text-center">60 Minutes</td>
              </tr>
              <tr>
                <td class="p-2.5 font-semibold">English Language</td>
                <td class="p-2.5 font-bold text-center">40</td>
                <td class="p-2.5 font-bold text-center text-blue-700">40</td>
                <td class="p-2.5 text-center">30 Minutes</td>
              </tr>
              <tr class="bg-slate-50 font-bold border-t-2 border-slate-300">
                <td class="p-2.5 text-slate-900">Total Consolidated Test</td>
                <td class="p-2.5 text-center text-blue-900">140 Qs</td>
                <td class="p-2.5 text-center text-emerald-800">200 Marks</td>
                <td class="p-2.5 text-center text-purple-900">180 Mins (3 Hrs)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: '3. Language Proficiency Test (LPT) & Interview Criteria',
    badge: 'LPT Rules',
    content: `
      <div class="space-y-2 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p><strong>LPT Exemption:</strong> Candidates who have studied the official state local language in 10th or 12th standard and can produce the original marksheet are exempted from LPT.</p>
        <p><strong>LPT Conduct:</strong> Other candidates must qualify in reading, writing, and speaking the local language before the interview. Failing LPT leads to immediate cancellation of candidature.</p>
        <p><strong>Interview Qualifying Marks:</strong> 50% for Unreserved candidates and 45% for SC/ST/OBC/PwD candidates out of 100 marks.</p>
      </div>
    `
  }
];

export const IOB_LLO_EXAM: ExamRecord = {
  id: 'iob-llo-exam-pattern-selection-process-2026',
  slug: 'iob-llo-exam-pattern-selection-process-2026',
  examName: 'IOB LLO / Local Bank Officer Recruitment 2026',
  shortName: 'IOB LLO Exam Pattern',
  organization: 'Indian Overseas Bank (IOB Central Office, Chennai)',
  category: 'Banking',
  postName: 'Local Bank Officer / Local Language Officer (Scale-I)',
  totalVacancy: '550+ Scale-I Posts',
  logoIcon: '🏦',
  state: 'All India',
  ageMin: 20,
  ageMax: 30,
  gender: 'All',
  applicationStartDate: '2026-03-01',
  applicationLastDate: '2026-03-25',
  admitCardDate: '2026-04-10',
  examDate: '2026-04-28',
  status: 'APPLICATION_OPEN',
  education: ['Graduation'],
  officialWebsite: 'https://www.iob.in',
  officialNotification: 'https://www.iob.in/Careers_LBO_2026.pdf',
  applyLink: 'https://ibpsonline.ibps.in/iobaug26/',
  salary: {
    payScale: '₹48,480 – ₹85,920 (JMGS-I Scale)',
    inHand: '₹62,000 – ₹68,000 Per Month (Approx. CTC ₹11.5 Lakhs)',
    allowances: 'DA, HRA / Leased Accommodation, CCA, Medical Aid, LFC & Newspaper Allowance'
  },
  importantDates: [
    { label: 'Notification Release', date: 'March 2026', isHighlight: true },
    { label: 'Online Application Window', date: '01 Mar to 25 Mar 2026', isHighlight: true },
    { label: 'Online CBT Examination', date: '28 April 2026', isHighlight: true },
    { label: 'Personal Interview Schedule', date: 'June 2026' }
  ],
  applicationFee: [
    { category: 'General / EWS / OBC Candidates', amount: '₹850/- (Inclusive of GST)' },
    { category: 'SC / ST / PwD Candidates', amount: '₹175/- (Intimation Charges Only)' }
  ],
  vacancies: [
    { category: 'Local Bank Officer (Scale-I JMGS)', postCount: 550 }
  ],
  selectionProcess: [
    'Stage 1: Online Objective Written Examination (140 Questions, 200 Marks, 3 Hours)',
    'Stage 2: Language Proficiency Test (LPT - Qualifying for non-10th/12th language holders)',
    'Stage 3: Personal Interview (100 Marks - 50% UR / 45% Reserved Qualifying)',
    'Stage 4: Final State-wise Merit List (80:20 Online Exam & Interview Weightage)'
  ],
  examPattern: [
    {
      stageName: 'Online Written Test',
      mode: 'Online Computer Based Test',
      duration: '180 Minutes',
      negativeMarking: '0.25 mark per wrong answer',
      subjects: [
        { name: 'Reasoning & Computer Aptitude (30 Qs)', questions: 30, marks: 60 },
        { name: 'General / Economy / Banking Awareness (40 Qs)', questions: 40, marks: 40 },
        { name: 'Data Analysis & Interpretation (30 Qs)', questions: 30, marks: 60 },
        { name: 'English Language (40 Qs)', questions: 40, marks: 40 }
      ]
    }
  ],
  allInformation: iobLloSections,
  faq: [
    {
      q: 'Is there negative marking in the IOB LLO examination?',
      a: 'Yes, 0.25 marks (¼th penalty) is deducted for each incorrect objective response.'
    },
    {
      q: 'Who is exempted from the Language Proficiency Test (LPT)?',
      a: 'Candidates who studied the local language of the applied state in 10th or 12th standard are exempted upon submitting original certificates.'
    },
    {
      q: 'What is the final merit score calculation ratio for IOB LLO?',
      a: 'The final merit list is computed by giving 80% weightage to the Online Written Exam and 20% weightage to the Personal Interview.'
    }
  ]
};

// ---------------------------------------------------------------------------
// 3. MP POLICE ELIGIBILITY 2026 DATA
// ---------------------------------------------------------------------------
const mpPoliceEligibilitySections: ExamInfoSection[] = [
  {
    id: 1,
    title: '1. MP Police Constable GD 2026 – Complete Eligibility Breakdown',
    badge: 'Eligibility',
    content: `
      <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <p>Madhya Pradesh Employees Selection Board (MPESB Bhopal) mandates strict nationality, age, education, and physical measurement parameters for 7,500 Constable (GD) positions across Special Armed Force (SAF) and District Executive Force (DEF).</p>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-2.5">Criteria</th>
                <th class="p-2.5">Rulebook Mandate</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Minimum Educational Qualification</td>
                <td class="p-2.5 font-bold text-slate-800">Class 10th Pass / Higher Secondary (UR/OBC/SC); Class 8th Pass for ST</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Age Limit (as on 06.10.2026)</td>
                <td class="p-2.5">18 to 33 Years (UR Male MP & Other State); 38 Years (Women & Reserved MP)</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Male Height Requirement</td>
                <td class="p-2.5 font-bold text-emerald-700">168 cm (General/OBC/SC); 160 cm (ST)</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Female Height Requirement</td>
                <td class="p-2.5 font-bold text-emerald-700">155 cm (All Categories across DEF posts)</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Male Chest Measurement</td>
                <td class="p-2.5 font-bold text-slate-800">81 cm unexpanded, 86 cm expanded (min 5 cm expansion)</td>
              </tr>
              <tr>
                <td class="p-2.5 font-bold text-blue-900">Employment Registration</td>
                <td class="p-2.5 font-semibold text-purple-800">Active MP Rojgar Panjiyan (mpemployment.gov.in) mandatory</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  }
];

export const MP_POLICE_ELIGIBILITY_EXAM: ExamRecord = {
  id: 'mp-police-eligibility-2026',
  slug: 'mp-police-eligibility-2026',
  examName: 'MP Police Constable Eligibility Criteria 2026',
  shortName: 'MP Police Eligibility',
  organization: 'MPESB Bhopal & MP Police Headquarters',
  category: 'Police',
  postName: 'Constable (GD) – SAF (700 Posts) & DEF (6,800 Posts)',
  totalVacancy: '7,500 Posts',
  logoIcon: '👮',
  state: 'Madhya Pradesh',
  ageMin: 18,
  ageMax: 33,
  gender: 'All',
  applicationStartDate: '2026-09-22',
  applicationLastDate: '2026-10-06',
  admitCardDate: '2026-11-10',
  examDate: '2026-11-19',
  status: 'APPLICATION_OPEN',
  education: ['10th', '8th'],
  officialWebsite: 'https://esb.mp.gov.in',
  officialNotification: 'https://esb.mp.gov.in/Rulebooks/RB_2026/PCRT_GD_2026_RuleBook_09092026.pdf',
  applyLink: 'https://esb.mponline.gov.in',
  salary: {
    payScale: '₹19,500 – ₹62,000 (Level 4)',
    inHand: '₹13,650 to ₹17,550 + DA, HRA, Uniform Allowance & NPS',
    allowances: 'DA, HRA, Uniform Allowance, Kit Allowance & Ration Money'
  },
  importantDates: [
    { label: 'Application Start', date: '22 September 2026', isHighlight: true },
    { label: 'Application Last Date', date: '06 October 2026', isHighlight: true },
    { label: 'Written Exam Date', date: '19 November 2026 onwards', isHighlight: true }
  ],
  applicationFee: [
    { category: 'UR / Non-MP Candidates', amount: '₹700/- + Portal Fee' },
    { category: 'MP Domicile SC/ST/OBC/EWS', amount: '₹350/- + Portal Fee' }
  ],
  vacancies: [
    { category: 'Constable GD - Special Armed Force (Male)', postCount: 700 },
    { category: 'Constable GD - District Executive Force (Male & Female)', postCount: 6800 }
  ],
  selectionProcess: [
    'Stage 1: CBT Written Test (100 Questions, 100 Marks, No Negative Marking)',
    'Stage 2: Physical Proficiency Test (PET - 100 Marks competitive)',
    'Stage 3: Physical Measurement Test (PMT) & Document Verification',
    'Stage 4: Final Merit List (Written + PET Marks Combined)'
  ],
  examPattern: [
    {
      stageName: 'Written CBT Exam',
      mode: 'Computer Based Test',
      duration: '120 Minutes',
      negativeMarking: 'No Negative Marking',
      subjects: [
        { name: 'General Knowledge & Reasoning (40 Qs)', questions: 40, marks: 40 },
        { name: 'Mental Ability & Mental Aptitude (30 Qs)', questions: 30, marks: 30 },
        { name: 'Science & Simple Arithmetic (30 Qs)', questions: 30, marks: 30 }
      ]
    }
  ],
  allInformation: mpPoliceEligibilitySections,
  faq: [
    {
      q: 'Can other state candidates apply for MP Police Constable?',
      a: 'Yes, candidates from other states can apply under Unreserved (UR) category with age 18 to 33 years.'
    },
    {
      q: 'What is the minimum height required for MP Police Constable male candidates?',
      a: '168 cm for UR, OBC, and SC male candidates; 160 cm for Scheduled Tribe (ST) male candidates.'
    }
  ]
};

// ---------------------------------------------------------------------------
// 4. SSC GD HEIGHT ELIGIBILITY CHECKER 2026 DATA
// ---------------------------------------------------------------------------
export const SSC_GD_HEIGHT_EXAM: ExamRecord = {
  id: 'ssc-gd-height-eligibility-checker-2026',
  slug: 'ssc-gd-height-eligibility-checker-2026',
  examName: 'SSC GD Height Eligibility Checker 2026',
  shortName: 'SSC GD Height Checker',
  organization: 'Staff Selection Commission (SSC) & MHA',
  category: 'SSC',
  postName: 'Constable (GD) in CAPFs, SSF, Rifleman (GD) in Assam Rifles',
  totalVacancy: '39,481+ Posts',
  logoIcon: '📏',
  state: 'All India',
  ageMin: 18,
  ageMax: 23,
  gender: 'All',
  applicationStartDate: '2026-09-05',
  applicationLastDate: '2026-10-14',
  admitCardDate: '2026-12-20',
  examDate: '2027-01-15',
  status: 'APPLICATION_OPEN',
  education: ['10th'],
  officialWebsite: 'https://ssc.gov.in',
  officialNotification: 'https://ssc.gov.in/api/ssc-gd-notification.pdf',
  applyLink: 'https://ssc.gov.in',
  salary: {
    payScale: '₹21,700 – ₹69,100 (Pay Level 3)',
    inHand: '₹28,500 – ₹32,000 Per Month',
    allowances: 'DA, HRA, Transport Allowance, Risk & Hardship Allowance, Ration Money'
  },
  importantDates: [
    { label: 'SSC GD Notification', date: 'September 2026', isHighlight: true },
    { label: 'Online Application Last Date', date: '14 October 2026', isHighlight: true },
    { label: 'Computer Based Exam (CBE)', date: 'January – February 2027', isHighlight: true }
  ],
  applicationFee: [
    { category: 'UR / OBC / EWS Male', amount: '₹100/-' },
    { category: 'Women / SC / ST / ESM', amount: 'Exempted (₹0)' }
  ],
  vacancies: [
    { category: 'Constable GD (Male & Female Across BSF, CISF, CRPF, SSB, ITBP, AR)', postCount: 39481 }
  ],
  selectionProcess: [
    'Stage 1: Computer Based Examination (CBE - 80 Qs, 160 Marks, 60 Mins)',
    'Stage 2: Physical Standard Test (PST - Height & Chest Measurement)',
    'Stage 3: Physical Efficiency Test (PET - 5km/1.6km Running)',
    'Stage 4: Detailed Medical Examination (DME) & Document Verification'
  ],
  examPattern: [
    {
      stageName: 'Phase 1: Computer Based Examination',
      mode: 'CBT (13 Regional Languages + Hindi + English)',
      duration: '60 Minutes',
      negativeMarking: '0.25 mark per wrong answer',
      subjects: [
        { name: 'General Intelligence & Reasoning', questions: 20, marks: 40 },
        { name: 'General Knowledge & General Awareness', questions: 20, marks: 40 },
        { name: 'Elementary Mathematics', questions: 20, marks: 40 },
        { name: 'English / Hindi', questions: 20, marks: 40 }
      ]
    }
  ],
  allInformation: [
    {
      id: 1,
      title: '1. Official SSC GD Height & Chest Standards (Rulebook Clause 11.2)',
      badge: 'PST Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The Physical Standard Test (PST) is strictly qualifying in nature. Height and chest measurements are carried out using electronic digital stadiometers:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Candidate Category</th>
                  <th class="p-2.5">Male Height</th>
                  <th class="p-2.5">Female Height</th>
                  <th class="p-2.5">Male Chest (Unexpanded/Exp)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">General, OBC, SC (Standard)</td>
                  <td class="p-2.5 font-bold text-blue-900">170 cm</td>
                  <td class="p-2.5 font-bold text-purple-900">157 cm</td>
                  <td class="p-2.5">80 cm (5 cm expansion)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">All Scheduled Tribe (ST) Candidates</td>
                  <td class="p-2.5 font-bold text-emerald-700">162.5 cm</td>
                  <td class="p-2.5 font-bold text-emerald-700">150 cm</td>
                  <td class="p-2.5">76 cm (5 cm expansion)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">ST Candidates of North Eastern States</td>
                  <td class="p-2.5 font-bold text-emerald-700">157 cm</td>
                  <td class="p-2.5 font-bold text-emerald-700">147.5 cm</td>
                  <td class="p-2.5">76 cm (5 cm expansion)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Garhwalis, Kumaonis, Dogras, Marathas & Hill States</td>
                  <td class="p-2.5 font-bold text-blue-800">165 cm</td>
                  <td class="p-2.5 font-bold text-purple-800">155 cm</td>
                  <td class="p-2.5">78 cm (5 cm expansion)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">North Eastern States (Arunachal, Manipur, Meghalaya, etc.)</td>
                  <td class="p-2.5 font-bold text-blue-800">162.5 cm</td>
                  <td class="p-2.5 font-bold text-purple-800">152.5 cm</td>
                  <td class="p-2.5">77 cm (5 cm expansion)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ],
  faq: [
    {
      q: 'What is the standard height for SSC GD Constable Male candidates?',
      a: 'The standard minimum height for Male candidates (General/OBC/SC) is 170 cm, and 162.5 cm for ST candidates.'
    },
    {
      q: 'Is chest measurement required for female candidates in SSC GD?',
      a: 'No, chest measurement is not applicable for female candidates under official CAPF recruitment rules.'
    }
  ]
};

// ---------------------------------------------------------------------------
// 5. ARMY 1600M RUNNING TIME CALCULATOR DATA
// ---------------------------------------------------------------------------
export const ARMY_RUNNING_TIME_EXAM: ExamRecord = {
  id: 'army-running-time-calculator-1600m-2026',
  slug: 'army-running-time-calculator-1600m-2026',
  examName: 'Indian Army 1600m Running Time & Marks Calculator 2026',
  shortName: 'Army 1600m Run Calculator',
  organization: 'Indian Army Recruitment Directorate',
  category: 'Defence',
  postName: 'Physical Fitness Test (PFT) – 1.6 Km Running & Pull-ups',
  totalVacancy: 'Rally Across All AROs/ZROs',
  logoIcon: '🏃',
  state: 'All India',
  ageMin: 17.5,
  ageMax: 21,
  gender: 'Male',
  applicationStartDate: '2026-02-01',
  applicationLastDate: '2026-03-31',
  admitCardDate: '2026-04-10',
  examDate: '2026-05-15',
  status: 'APPLICATION_OPEN',
  education: ['10th', '12th', '8th'],
  officialWebsite: 'https://joinindianarmy.nic.in',
  officialNotification: 'https://joinindianarmy.nic.in',
  applyLink: 'https://joinindianarmy.nic.in',
  salary: {
    payScale: '₹30,000 – ₹40,000 Per Month',
    inHand: '₹21,000 (Year 1) to ₹28,000 (Year 4)',
    allowances: 'Hardship, Ration, Uniform Allowances & Seva Nidhi'
  },
  importantDates: [
    { label: 'Phase-I Online CEE Result', date: 'June 2026', isHighlight: true },
    { label: 'Phase-II Physical Rally Schedule', date: 'July – November 2026', isHighlight: true }
  ],
  applicationFee: [{ category: 'Examination Fee', amount: '₹250/-' }],
  vacancies: [{ category: 'Agniveer Rally Posts', postCount: 25000 }],
  selectionProcess: [
    'Stage 1: Common Entrance Examination (CEE Online)',
    'Stage 2: 1.6 Km Run (Group I: 60 Marks, Group II: 48 Marks)',
    'Stage 3: Beam Pull-ups (10 Pull-ups = 40 Marks, min 6 required)',
    'Stage 4: 9 Feet Ditch (Qualifying) & Zig-Zag Balance (Qualifying)',
    'Stage 5: Physical Measurement Test (PMT) & Medical'
  ],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. Indian Army PFT 100-Marks Scoring Matrix',
      badge: 'Scoring Table',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>For Agniveer General Duty and Tradesmen, Physical Fitness Test marks are added directly to the final merit list:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold">
                <tr>
                  <th class="p-2.5">PFT Event</th>
                  <th class="p-2.5">Standard Achieved</th>
                  <th class="p-2.5">Awarded Marks</th>
                  <th class="p-2.5">Grade</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold" rowspan="3">1.6 Km (1600m) Run</td>
                  <td class="p-2.5 font-mono text-emerald-700 font-bold">Up to 5 Min 30 Sec</td>
                  <td class="p-2.5 font-bold text-emerald-700">60 Marks</td>
                  <td class="p-2.5 font-bold text-emerald-700">Group I</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-mono text-blue-700 font-bold">5 Min 31 Sec to 5 Min 45 Sec</td>
                  <td class="p-2.5 font-bold text-blue-700">48 Marks</td>
                  <td class="p-2.5 font-bold text-blue-700">Group II</td>
                </tr>
                <tr class="bg-red-50 text-red-700">
                  <td class="p-2.5 font-mono">Above 5 Min 45 Sec</td>
                  <td class="p-2.5">0 Marks</td>
                  <td class="p-2.5">Failed (Disqualified)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold" rowspan="6">Beam (Pull-Ups)</td>
                  <td class="p-2.5 font-bold">10 Pull-ups</td>
                  <td class="p-2.5 font-bold text-emerald-700">40 Marks</td>
                  <td class="p-2.5">Maximum</td>
                </tr>
                <tr>
                  <td class="p-2.5">9 Pull-ups</td>
                  <td class="p-2.5 font-bold">33 Marks</td>
                  <td class="p-2.5">Passed</td>
                </tr>
                <tr>
                  <td class="p-2.5">8 Pull-ups</td>
                  <td class="p-2.5 font-bold">27 Marks</td>
                  <td class="p-2.5">Passed</td>
                </tr>
                <tr>
                  <td class="p-2.5">7 Pull-ups</td>
                  <td class="p-2.5 font-bold">21 Marks</td>
                  <td class="p-2.5">Passed</td>
                </tr>
                <tr>
                  <td class="p-2.5">6 Pull-ups</td>
                  <td class="p-2.5 font-bold text-amber-700">16 Marks</td>
                  <td class="p-2.5">Minimum Pass</td>
                </tr>
                <tr class="bg-red-50 text-red-700">
                  <td class="p-2.5">Less than 6 Pull-ups</td>
                  <td class="p-2.5">0 Marks</td>
                  <td class="p-2.5">Failed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ],
  faq: [
    {
      q: 'How many marks are awarded for 5:25 minutes in 1600m run?',
      a: 'Any timing up to 5 minutes 30 seconds earns the maximum 60 Marks (Group I).'
    },
    {
      q: 'What is the minimum number of pull-ups required to pass in Indian Army rally?',
      a: 'A minimum of 6 pull-ups (16 Marks) is strictly required to qualify the beam event.'
    }
  ]
};

// ---------------------------------------------------------------------------
// 6. ARMY PROMOTION TIMELINE TOOL DATA
// ---------------------------------------------------------------------------
export const ARMY_PROMOTION_EXAM: ExamRecord = {
  id: 'army-promotion-timeline-tool-1',
  slug: 'army-promotion-timeline-tool-1',
  examName: 'Indian Army Promotion Timeline & Rank Hierarchy Tool',
  shortName: 'Army Promotion Tool',
  organization: 'Indian Army (Personnel Branch / Adjutant General Branch)',
  category: 'Defence',
  postName: 'Junior Commissioned Officers (JCO) & Other Ranks (OR) Cadre',
  totalVacancy: 'Career Progression Structure',
  logoIcon: '⭐',
  state: 'All India',
  ageMin: 17.5,
  ageMax: 54,
  gender: 'All',
  applicationStartDate: '2026-01-01',
  applicationLastDate: '2026-12-31',
  examDate: '2026-04-15',
  status: 'APPLICATION_OPEN',
  education: ['10th', '12th', 'Graduation'],
  officialWebsite: 'https://indianarmy.nic.in',
  officialNotification: 'https://indianarmy.nic.in',
  applyLink: 'https://joinindianarmy.nic.in',
  salary: {
    payScale: 'Level 3 (₹21,700) to Level 10B (₹1,77,500)',
    inHand: '₹35,000 to ₹1,45,000 + MSP ₹5,200',
    allowances: 'Military Service Pay (MSP), DA, Field Allowance, Siachen Allowance, Ration & Medical'
  },
  importantDates: [
    { label: 'DPC Promotion Board Meetings', date: 'Biannual (April & October)', isHighlight: true }
  ],
  applicationFee: [],
  vacancies: [{ category: 'Indian Army Regular Cadre', postCount: 1200000 }],
  selectionProcess: [
    'Sepoy to Lance Naik: Minimum 2-3 Years of active satisfactory service',
    'Lance Naik to Naik: 5 Years active service + Mandatory Map Reading Standard Course',
    'Naik to Havildar: 8 Years service + Section Commander Course & Medical Shape-1',
    'Havildar to Naib Subedar (JCO): 12-14 Years service + JCO Cadre + Clean Discipline',
    'Naib Subedar to Subedar: 3 Years as Nb Sub + Platoon Commander Course',
    'Subedar to Subedar Major: Seniority-cum-Merit board selection'
  ],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. Indian Army Rank Hierarchy, Minimum Service & Pay Matrix',
      badge: 'Pay Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The progression through Other Ranks (OR) and Junior Commissioned Officers (JCO) follows the 7th Central Pay Commission matrix:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold">
                <tr>
                  <th class="p-2.5">Rank Title</th>
                  <th class="p-2.5">Insignia / Badges</th>
                  <th class="p-2.5">7th CPC Pay Level</th>
                  <th class="p-2.5">Min. Service to Attain</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">Sepoy / Rifleman / Gunner</td>
                  <td class="p-2.5">Plain Shoulder Title</td>
                  <td class="p-2.5 font-mono text-blue-700">Level 3 (₹21,700 - ₹69,100)</td>
                  <td class="p-2.5">Entry Level</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Lance Naik (L/Nk)</td>
                  <td class="p-2.5">Single Chevron stripe</td>
                  <td class="p-2.5 font-mono text-blue-700">Level 3 (Appointment)</td>
                  <td class="p-2.5">2–3 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Naik (Nk)</td>
                  <td class="p-2.5">Two Chevrons</td>
                  <td class="p-2.5 font-mono text-blue-700">Level 4 (₹25,500 - ₹81,100)</td>
                  <td class="p-2.5">5–7 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Havildar (Hav)</td>
                  <td class="p-2.5">Three Chevrons</td>
                  <td class="p-2.5 font-mono text-blue-700">Level 5 (₹29,200 - ₹92,300)</td>
                  <td class="p-2.5">8–12 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-amber-900">Naib Subedar (Nb Sub)</td>
                  <td class="p-2.5 font-bold">One Gold Star with Red-Yellow Stripe</td>
                  <td class="p-2.5 font-mono text-emerald-700 font-bold">Level 6 (₹35,400 - ₹1,12,400)</td>
                  <td class="p-2.5 font-bold">12–16 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-amber-900">Subedar (Sub)</td>
                  <td class="p-2.5 font-bold">Two Gold Stars with Stripe</td>
                  <td class="p-2.5 font-mono text-emerald-700 font-bold">Level 7 (₹44,900 - ₹1,42,400)</td>
                  <td class="p-2.5 font-bold">16–22 Years</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-amber-900">Subedar Major (SM)</td>
                  <td class="p-2.5 font-bold">Ashoka National Emblem with Stripe</td>
                  <td class="p-2.5 font-mono text-emerald-700 font-bold">Level 8 (₹47,600 - ₹1,51,100)</td>
                  <td class="p-2.5 font-bold">24–28 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ],
  faq: [
    {
      q: 'How many years of service are required to become a Naib Subedar?',
      a: 'Typically 12 to 16 years of active unblemished service along with passing the mandatory promotion cadre and fitness tests.'
    }
  ]
};

// ---------------------------------------------------------------------------
// 7. SSC CGL AGE LIMIT 2026 CALCULATOR DATA
// ---------------------------------------------------------------------------
export const SSC_CGL_AGE_EXAM: ExamRecord = {
  id: 'ssc-cgl-age-limit-2026-calculator',
  slug: 'ssc-cgl-age-limit-2026-calculator',
  examName: 'SSC CGL Age Limit Calculator 2026',
  shortName: 'SSC CGL Age Calculator',
  organization: 'Staff Selection Commission (SSC)',
  category: 'SSC',
  postName: 'Combined Graduate Level (CGL) Group B & C Posts',
  totalVacancy: '17,727+ Posts',
  logoIcon: '📊',
  state: 'All India',
  ageMin: 18,
  ageMax: 32,
  gender: 'All',
  applicationStartDate: '2026-06-24',
  applicationLastDate: '2026-07-27',
  admitCardDate: '2026-08-30',
  examDate: '2026-09-15',
  status: 'APPLICATION_OPEN',
  education: ['Graduation'],
  officialWebsite: 'https://ssc.gov.in',
  officialNotification: 'https://ssc.gov.in',
  applyLink: 'https://ssc.gov.in',
  salary: {
    payScale: 'Pay Level 4 (₹25,500) to Pay Level 8 (₹1,51,100)',
    inHand: '₹38,000 – ₹88,000 Per Month',
    allowances: 'DA 50%+, HRA (27%/18%/9%), Transport Allowance, CGHS'
  },
  importantDates: [
    { label: 'Crucial Age Cut-Off Date', date: '01 August 2026', isHighlight: true },
    { label: 'Tier-I Exam Date', date: 'September – October 2026', isHighlight: true }
  ],
  applicationFee: [{ category: 'UR / OBC / EWS Male', amount: '₹100/-' }, { category: 'Women / SC / ST / PwD', amount: 'Exempted (₹0)' }],
  vacancies: [{ category: 'Group B & Group C Officers', postCount: 17727 }],
  selectionProcess: [
    'Tier-1: Computer Based Examination (100 Qs, 200 Marks, Negative Marking 0.50)',
    'Tier-2: Paper-1 (Mathematical Abilities, Reasoning, English, General Awareness, Computer & DEST)',
    'Document Verification & Final Allocation'
  ],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. SSC CGL 2026 Post-Wise Age Brackets (Cut-Off: 01-08-2026)',
      badge: 'Age Limits',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>SSC CGL posts are categorized into four distinctive age groups. The crucial cut-off date is strictly <strong>01-08-2026</strong>:</p>
          <ul class="list-disc list-inside space-y-1 text-xs">
            <li><strong>18 to 27 Years:</strong> Auditor, Accountant, Postal Assistant, Sorting Assistant, Senior Administrative Assistant, Tax Assistant (CBDT/CBIC).</li>
            <li><strong>18 to 30 Years:</strong> Inspector (Central Excise), Inspector (Preventive Officer), Inspector (Examiner), Assistant (Central Vigilance Commission).</li>
            <li><strong>20 to 30 Years:</strong> Assistant Section Officer (CSS, MEA, IB, Ministry of Railway), Sub Inspector (CBI).</li>
            <li><strong>18 to 32 Years:</strong> Junior Statistical Officer (JSO), Statistical Investigator Grade-II.</li>
          </ul>
        </div>
      `
    }
  ],
  faq: [
    {
      q: 'What is the crucial cut-off date for SSC CGL 2026 age calculation?',
      a: 'The official cut-off date is 01 August 2026. Candidate age is computed strictly as on this date.'
    }
  ]
};

// ---------------------------------------------------------------------------
// 8. ALL INDIA GOVT EXAM HEIGHT CHECKER DATA
// ---------------------------------------------------------------------------
export const GOVT_HEIGHT_CHECKER_EXAM: ExamRecord = {
  id: 'government-exam-height-eligibility-checker-india',
  slug: 'government-exam-height-eligibility-checker-india',
  examName: 'Government Exam Height Eligibility Checker India 2026',
  shortName: 'Govt Exam Height Checker',
  organization: 'Central & State Police / Defence Examination Directory',
  category: 'Police',
  postName: 'Physical Standards across 20+ Uniform Services in India',
  totalVacancy: '1,50,000+ Uniform Posts',
  logoIcon: '📐',
  state: 'All India',
  ageMin: 18,
  ageMax: 30,
  gender: 'All',
  applicationStartDate: '2026-01-01',
  applicationLastDate: '2026-12-31',
  examDate: '2026-06-01',
  status: 'APPLICATION_OPEN',
  education: ['10th', '12th', 'Graduation'],
  officialWebsite: 'https://rajdailytools.in',
  officialNotification: 'https://rajdailytools.in',
  applyLink: 'https://rajdailytools.in',
  salary: { payScale: 'Level 3 to Level 7', inHand: '₹28,000 to ₹75,000', allowances: 'DA, HRA, Uniform Allowances' },
  importantDates: [{ label: 'Updated Rules Matrix', date: 'Recruitment Year 2026', isHighlight: true }],
  applicationFee: [],
  vacancies: [{ category: 'Police & Paramilitary Cadres', postCount: 150000 }],
  selectionProcess: ['Physical Measurement Test (PST) across Indian Uniform Forces'],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. All India Height Requirement Comparison Table',
      badge: 'Comparison',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Quick reference matrix for minimum required heights across major government examinations:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold">
                <tr>
                  <th class="p-2.5">Exam / Service Name</th>
                  <th class="p-2.5">Male Height (General/OBC/SC)</th>
                  <th class="p-2.5">Male Height (ST)</th>
                  <th class="p-2.5">Female Height (General/OBC)</th>
                  <th class="p-2.5">Female Height (ST)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">SSC GD Constable (CAPFs)</td>
                  <td class="p-2.5 font-bold text-blue-700">170 cm</td>
                  <td class="p-2.5">162.5 cm</td>
                  <td class="p-2.5 font-bold text-purple-700">157 cm</td>
                  <td class="p-2.5">150 cm</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Delhi Police Constable</td>
                  <td class="p-2.5 font-bold text-blue-700">170 cm</td>
                  <td class="p-2.5">165 cm</td>
                  <td class="p-2.5 font-bold text-purple-700">157 cm</td>
                  <td class="p-2.5">155 cm</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">UP Police Constable</td>
                  <td class="p-2.5 font-bold text-blue-700">168 cm</td>
                  <td class="p-2.5">160 cm</td>
                  <td class="p-2.5 font-bold text-purple-700">152 cm</td>
                  <td class="p-2.5">147 cm</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">MP Police Constable</td>
                  <td class="p-2.5 font-bold text-blue-700">168 cm</td>
                  <td class="p-2.5">160 cm</td>
                  <td class="p-2.5 font-bold text-purple-700">155 cm</td>
                  <td class="p-2.5">155 cm</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">RPF Sub-Inspector & Constable</td>
                  <td class="p-2.5 font-bold text-blue-700">165 cm</td>
                  <td class="p-2.5">160 cm</td>
                  <td class="p-2.5 font-bold text-purple-700">157 cm</td>
                  <td class="p-2.5">152 cm</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Indian Army Agniveer GD</td>
                  <td class="p-2.5 font-bold text-blue-700">169–170 cm (Region based)</td>
                  <td class="p-2.5">162–165 cm</td>
                  <td class="p-2.5 font-bold text-purple-700">162 cm (CMP)</td>
                  <td class="p-2.5">158 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ],
  faq: [
    {
      q: 'Which police recruitment has the lowest female height requirement in India?',
      a: 'UP Police Constable has one of the lowest height requirements for female candidates at 152 cm for General/OBC and 147 cm for ST.'
    }
  ]
};

// ---------------------------------------------------------------------------
// 9. SSC GD ELIGIBILITY 2026 DATA
// ---------------------------------------------------------------------------
export const SSC_GD_ELIGIBILITY_EXAM: ExamRecord = {
  id: 'ssc-gd-eligibility-2026',
  slug: 'ssc-gd-eligibility-2026',
  examName: 'SSC GD Constable Eligibility Criteria 2026',
  shortName: 'SSC GD Eligibility',
  organization: 'Staff Selection Commission (SSC) & MHA',
  category: 'SSC',
  postName: 'Constable (GD) in BSF, CISF, CRPF, SSB, ITBP, AR, SSF',
  totalVacancy: '39,481 Posts',
  logoIcon: '🛡️',
  state: 'All India',
  ageMin: 18,
  ageMax: 23,
  gender: 'All',
  applicationStartDate: '2026-09-05',
  applicationLastDate: '2026-10-14',
  examDate: '2026-02-15',
  status: 'APPLICATION_OPEN',
  education: ['10th'],
  officialWebsite: 'https://ssc.gov.in',
  officialNotification: 'https://ssc.gov.in',
  applyLink: 'https://ssc.gov.in',
  salary: { payScale: '₹21,700 – ₹69,100 (Level 3)', inHand: '₹28,500 – ₹32,000', allowances: 'DA, HRA, Ration Money' },
  importantDates: [
    { label: 'Notification Issued', date: '05 September 2026', isHighlight: true },
    { label: 'Last Date to Apply', date: '14 October 2026', isHighlight: true },
    { label: 'Crucial Age Cut-Off Date', date: '01 January 2026', isHighlight: true }
  ],
  applicationFee: [{ category: 'General/OBC/EWS Male', amount: '₹100/-' }, { category: 'Women / SC / ST / ESM', amount: '₹0/-' }],
  vacancies: [{ category: 'Constable GD Combined', postCount: 39481 }],
  selectionProcess: ['Computer Based Test (CBT)', 'Physical Standard Test (PST)', 'Physical Efficiency Test (PET)', 'Medical & DV'],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. SSC GD 2026 Age, Educational & Nationality Rules',
      badge: 'Criteria',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Nationality:</strong> Candidate must be a citizen of India.</p>
          <p><strong>Education:</strong> Matriculation or 10th Class Examination pass from a recognized Board/University as on crucial date.</p>
          <p><strong>Age Limit:</strong> 18 to 23 years. Upper age relaxations: OBC (+3 yrs to 26), SC/ST (+5 yrs to 28), Ex-Servicemen (+3 yrs after deduction of military service).</p>
        </div>
      `
    }
  ],
  faq: [{ q: 'Can Class 10th appearing students apply for SSC GD 2026?', a: 'No, candidate must have passed Class 10th on or before the closing date of application.' }]
};

// ---------------------------------------------------------------------------
// 10. ARMY HEIGHT CHECKER REGION-WISE DATA
// ---------------------------------------------------------------------------
export const ARMY_HEIGHT_REGION_EXAM: ExamRecord = {
  id: 'army-height-checker-region-wise-2026',
  slug: 'army-height-checker-region-wise-2026',
  examName: 'Indian Army Region-Wise Height Checker 2026',
  shortName: 'Army Region Height Checker',
  organization: 'Indian Army Recruiting Directorate',
  category: 'Defence',
  postName: 'Agniveer Physical Standards across 6 Official Recruitment Zones',
  totalVacancy: 'All India Rallies',
  logoIcon: '🗺️',
  state: 'All India',
  ageMin: 17.5,
  ageMax: 21,
  gender: 'Male',
  applicationStartDate: '2026-02-01',
  applicationLastDate: '2026-12-31',
  examDate: '2026-05-15',
  status: 'APPLICATION_OPEN',
  education: ['10th', '12th', '8th'],
  officialWebsite: 'https://joinindianarmy.nic.in',
  officialNotification: 'https://joinindianarmy.nic.in',
  applyLink: 'https://joinindianarmy.nic.in',
  salary: { payScale: '₹30,000 – ₹40,000', inHand: '₹21,000 – ₹28,000', allowances: 'Hardship & Seva Nidhi' },
  importantDates: [{ label: 'Recruitment Calendar 2026', date: 'Continuous Rallies', isHighlight: true }],
  applicationFee: [{ category: 'CEE Fee', amount: '₹250/-' }],
  vacancies: [{ category: 'All Ranks', postCount: 25000 }],
  selectionProcess: ['CEE Exam', 'PFT & PMT at Rally Ground', 'Medical Examination'],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. Official 6 Geographic Regions Physical Standards Matrix',
      badge: 'Zone Standards',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Indian Army categorizes India into 6 physical recruitment regions with tailored minimum height standards:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold">
                <tr>
                  <th class="p-2.5">Region Name & States</th>
                  <th class="p-2.5">GD (cm)</th>
                  <th class="p-2.5">Tech (cm)</th>
                  <th class="p-2.5">Clerk/SKT (cm)</th>
                  <th class="p-2.5">Tradesman (cm)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">Western Himalayan (J&K, HP, Hill Districts of Punjab & UK)</td>
                  <td class="p-2.5 font-bold text-blue-700">163</td>
                  <td class="p-2.5">163</td>
                  <td class="p-2.5 font-bold text-emerald-700">162</td>
                  <td class="p-2.5">163</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Eastern Himalayan (Sikkim, Nagaland, Arunachal, Manipur, Tripura, Assam, Meghalaya, Gorkhas)</td>
                  <td class="p-2.5 font-bold text-blue-700">160</td>
                  <td class="p-2.5">157</td>
                  <td class="p-2.5 font-bold text-emerald-700">160</td>
                  <td class="p-2.5">160</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Western Plains (Punjab, Haryana, Chandigarh, Rajasthan, Western UP)</td>
                  <td class="p-2.5 font-bold text-blue-700">170</td>
                  <td class="p-2.5">170</td>
                  <td class="p-2.5 font-bold text-emerald-700">162</td>
                  <td class="p-2.5">170</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Eastern Plains (Eastern UP, Bihar, West Bengal, Jharkhand, Odisha)</td>
                  <td class="p-2.5 font-bold text-blue-700">169</td>
                  <td class="p-2.5">169</td>
                  <td class="p-2.5 font-bold text-emerald-700">162</td>
                  <td class="p-2.5">169</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Central Region (MP, Chhattisgarh, Gujarat, Maharashtra, Dadra & Nagar Haveli)</td>
                  <td class="p-2.5 font-bold text-blue-700">168</td>
                  <td class="p-2.5">167</td>
                  <td class="p-2.5 font-bold text-emerald-700">162</td>
                  <td class="p-2.5">168</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Southern Region (AP, Telangana, Karnataka, Tamil Nadu, Kerala, Goa, Puducherry)</td>
                  <td class="p-2.5 font-bold text-blue-700">166</td>
                  <td class="p-2.5">165</td>
                  <td class="p-2.5 font-bold text-emerald-700">162</td>
                  <td class="p-2.5">166</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ],
  faq: [{ q: 'Why is the height requirement for Clerk/SKT uniform at 162 cm across India?', a: 'Indian Army maintains a uniform pan-India height of 162 cm for Clerk/SKT to ensure broader technical candidature.' }]
};

// ---------------------------------------------------------------------------
// 11. SSC GD RUNNING MARKS CALCULATOR DATA
// ---------------------------------------------------------------------------
export const SSC_GD_RUNNING_EXAM: ExamRecord = {
  id: 'ssc-gd-running-marks-calculator-2026',
  slug: 'ssc-gd-running-marks-calculator-2026',
  examName: 'SSC GD Running & PET Marks Calculator 2026',
  shortName: 'SSC GD Running Calculator',
  organization: 'Staff Selection Commission & CAPF Nodal Agency',
  category: 'SSC',
  postName: 'Physical Efficiency Test (PET) 5km & 1.6km Running Standards',
  totalVacancy: '39,481 Candidates Qualifying Pool',
  logoIcon: '⏱️',
  state: 'All India',
  ageMin: 18,
  ageMax: 23,
  gender: 'All',
  applicationStartDate: '2026-09-05',
  applicationLastDate: '2026-10-14',
  examDate: '2026-04-01',
  status: 'APPLICATION_OPEN',
  education: ['10th'],
  officialWebsite: 'https://ssc.gov.in',
  officialNotification: 'https://ssc.gov.in',
  applyLink: 'https://ssc.gov.in',
  salary: { payScale: 'Level 3', inHand: '₹28,500 – ₹32,000', allowances: 'Standard Allowances' },
  importantDates: [{ label: 'PET Trials Schedule', date: 'Expected April – May 2027', isHighlight: true }],
  applicationFee: [],
  vacancies: [{ category: 'PET Qualified Candidates', postCount: 39481 }],
  selectionProcess: ['CBE Exam', 'PST Height/Chest', 'PET Running (5km in 24 min / 1.6km in 8.5 min)', 'Medical'],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. Official PET Running Standards (Clause 11.4 of Rulebook)',
      badge: 'Running Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The Physical Efficiency Test (PET) consists of a timed running race with RFID chip timing tags:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-800 text-white font-bold">
                <tr>
                  <th class="p-2.5">Candidate Category</th>
                  <th class="p-2.5">Race Distance</th>
                  <th class="p-2.5">Maximum Time Limit</th>
                  <th class="p-2.5">Nature of Event</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white text-slate-800">
                <tr>
                  <td class="p-2.5 font-bold">Male (Other than Ladakh Region)</td>
                  <td class="p-2.5 font-bold text-blue-700">5.0 Kilometres (5000m)</td>
                  <td class="p-2.5 font-mono text-emerald-700 font-bold">24 Minutes (04:48 min/km)</td>
                  <td class="p-2.5 font-semibold text-slate-700">Qualifying (No marks awarded)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Female (Other than Ladakh Region)</td>
                  <td class="p-2.5 font-bold text-purple-700">1.6 Kilometres (1600m)</td>
                  <td class="p-2.5 font-mono text-emerald-700 font-bold">8 Minutes 30 Seconds</td>
                  <td class="p-2.5 font-semibold text-slate-700">Qualifying</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Male (Ladakh Region)</td>
                  <td class="p-2.5 font-bold text-blue-700">1.6 Kilometres (1600m)</td>
                  <td class="p-2.5 font-mono text-emerald-700 font-bold">7 Minutes</td>
                  <td class="p-2.5 font-semibold text-slate-700">Qualifying</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">Female (Ladakh Region)</td>
                  <td class="p-2.5 font-bold text-purple-700">800 Metres</td>
                  <td class="p-2.5 font-mono text-emerald-700 font-bold">5 Minutes</td>
                  <td class="p-2.5 font-semibold text-slate-700">Qualifying</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ],
  faq: [{ q: 'Are PET marks added to the final merit list in SSC GD?', a: 'No, PET is strictly qualifying in nature. Final merit is prepared purely based on CBT written examination scores.' }]
};

// ---------------------------------------------------------------------------
// 12. ARMY DOCUMENT CHECKLIST GENERATOR DATA
// ---------------------------------------------------------------------------
export const ARMY_DOC_CHECKLIST_EXAM: ExamRecord = {
  id: 'army-document-checklist-generator-1',
  slug: 'army-document-checklist-generator-1',
  examName: 'Indian Army Rally Document Checklist Generator 2026',
  shortName: 'Army Document Checklist',
  organization: 'Indian Army Recruiting Directorate',
  category: 'Defence',
  postName: 'Phase-II Rally Document Verification & Affidavit Verification',
  totalVacancy: 'All Rally Aspirants',
  logoIcon: '📁',
  state: 'All India',
  ageMin: 17.5,
  ageMax: 21,
  gender: 'All',
  applicationStartDate: '2026-01-01',
  applicationLastDate: '2026-12-31',
  examDate: '2026-05-20',
  status: 'APPLICATION_OPEN',
  education: ['10th', '12th', '8th'],
  officialWebsite: 'https://joinindianarmy.nic.in',
  officialNotification: 'https://joinindianarmy.nic.in',
  applyLink: 'https://joinindianarmy.nic.in',
  salary: { payScale: 'Agniveer Pay Package', inHand: 'Standard Pay', allowances: 'Rally Entitlements' },
  importantDates: [{ label: 'Document Verification Stage', date: 'During Rally Trials', isHighlight: true }],
  applicationFee: [],
  vacancies: [{ category: 'Agniveer Recruits', postCount: 25000 }],
  selectionProcess: ['16 Mandatory Original Certificates + 2 Sets Self-Attested Photocopies'],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. Mandatory Documents Required at Indian Army Rally Ground',
      badge: 'Checklist',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must carry original certificates with two self-attested photocopies of each:</p>
          <ul class="list-disc list-inside space-y-1.5 text-xs">
            <li><strong>Admit Card:</strong> Printed on laser printer on good quality paper (Do not shrink).</li>
            <li><strong>Photograph:</strong> 20 copies of unattested passport size color photos (white background, not older than 3 months).</li>
            <li><strong>Educational Certificates:</strong> Original Matric / 10th / 12th marksheets & transfer certificate.</li>
            <li><strong>Domicile / Nativity Certificate:</strong> Issued by Tehsildar / District Magistrate with photograph.</li>
            <li><strong>Caste Certificate:</strong> Affixed with photograph, issued by Tehsildar/SDM.</li>
            <li><strong>Religion Certificate:</strong> Issued by Tehsildar/SDM (if religion not stated in caste cert).</li>
            <li><strong>School Character Certificate:</strong> Issued by School/College Principal where last studied.</li>
            <li><strong>Character Certificate:</strong> With photo issued by Village Sarpanch/Ward Member within last 6 months.</li>
            <li><strong>Unmarried Certificate:</strong> For candidates under 21 with photograph, issued by Sarpanch within 6 months.</li>
            <li><strong>Affidavit:</strong> Duly signed by candidate on ₹10/- Non-Judicial Stamp Paper attested by Notary.</li>
          </ul>
        </div>
      `
    }
  ],
  faq: [{ q: 'Is affidavit on ₹10 stamp paper mandatory for Army Rally?', a: 'Yes, an affidavit in the official format as per Appendix of notification on ₹10 Non-Judicial Stamp Paper is strictly mandatory.' }]
};

// ---------------------------------------------------------------------------
// 13. SSC GD FEMALE ELIGIBILITY CHECKER DATA
// ---------------------------------------------------------------------------
export const SSC_GD_FEMALE_EXAM: ExamRecord = {
  id: 'ssc-gd-female-eligibility-checker-2026',
  slug: 'ssc-gd-female-eligibility-checker-2026',
  examName: 'SSC GD Female Eligibility Checker 2026',
  shortName: 'SSC GD Female Checker',
  organization: 'Staff Selection Commission (SSC)',
  category: 'SSC',
  postName: 'Constable (GD) Female in BSF, CISF, CRPF, SSB, ITBP, AR',
  totalVacancy: '5,150+ Female Vacancies',
  logoIcon: '👩',
  state: 'All India',
  ageMin: 18,
  ageMax: 23,
  gender: 'Female',
  applicationStartDate: '2026-09-05',
  applicationLastDate: '2026-10-14',
  examDate: '2026-02-15',
  status: 'APPLICATION_OPEN',
  education: ['10th'],
  officialWebsite: 'https://ssc.gov.in',
  officialNotification: 'https://ssc.gov.in',
  applyLink: 'https://ssc.gov.in',
  salary: { payScale: '₹21,700 – ₹69,100 (Level 3)', inHand: '₹28,500 – ₹32,000', allowances: 'Standard Central Govt Allowances' },
  importantDates: [{ label: 'Online Application Last Date', date: '14 October 2026', isHighlight: true }],
  applicationFee: [{ category: 'All Female Candidates', amount: 'Exempted (₹0 Fee)' }],
  vacancies: [{ category: 'Female Constable GD Posts', postCount: 5150 }],
  selectionProcess: ['CBE Examination (80 Qs, 160 Marks)', 'PST Height (157cm / 150cm ST)', 'PET Running (1.6km in 8.5 min)', 'Medical DME'],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. Female Specific Standards & Pregnancy Clause',
      badge: 'Female Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Height:</strong> 157 cm for General/OBC/SC, 150 cm for ST, 155 cm for Garhwalis/Kumaonis/Dogras/Marathas.</p>
          <p><strong>Running:</strong> 1.6 Kilometers in 8 minutes 30 seconds.</p>
          <p><strong>Pregnancy Clause:</strong> At the time of PET, a self-declaration is taken. If found pregnant of 12 weeks or more, candidate is temporarily declared unfit and post is kept vacant till confinement.</p>
        </div>
      `
    }
  ],
  faq: [{ q: 'Do female candidates pay any application fee for SSC GD?', a: 'No, all female candidates irrespective of category are 100% exempted from application fees.' }]
};

// ---------------------------------------------------------------------------
// 14. NDA AGE LIMIT CALCULATOR DATA
// ---------------------------------------------------------------------------
export const NDA_AGE_CALCULATOR_EXAM: ExamRecord = {
  id: 'nda-age-limit-calculator-2026',
  slug: 'nda-age-limit-calculator-2026',
  examName: 'UPSC NDA Age Limit Calculator 2026',
  shortName: 'NDA Age Calculator',
  organization: 'Union Public Service Commission (UPSC)',
  category: 'Defence',
  postName: 'National Defence Academy & Naval Academy Examination (I & II)',
  totalVacancy: '400+ Cadet Vacancies per Batch',
  logoIcon: '🎖️',
  state: 'All India',
  ageMin: 16.5,
  ageMax: 19.5,
  gender: 'All',
  applicationStartDate: '2026-01-01',
  applicationLastDate: '2026-01-20',
  admitCardDate: '2026-03-25',
  examDate: '2026-04-12',
  status: 'APPLICATION_OPEN',
  education: ['12th'],
  officialWebsite: 'https://upsc.gov.in',
  officialNotification: 'https://upsc.gov.in',
  applyLink: 'https://upsconline.nic.in',
  salary: {
    payScale: 'Stipend ₹56,100 Per Month during Academy; Lieutenant Pay Level 10 (₹56,100 - ₹1,77,500)',
    inHand: '₹56,100 Cadre Stipend + MSP ₹15,500 upon Commissioning',
    allowances: 'Flying Allowance, High Altitude, Uniform, DA & Free Ration'
  },
  importantDates: [
    { label: 'NDA-1 2026 Written Exam', date: '12 April 2026', isHighlight: true },
    { label: 'NDA-2 2026 Written Exam', date: '06 September 2026', isHighlight: true }
  ],
  applicationFee: [{ category: 'UR / OBC Male', amount: '₹100/-' }, { category: 'Female / SC / ST / JCO/NCO Sons', amount: 'Exempted (₹0)' }],
  vacancies: [{ category: 'Army (208), Navy (42), Air Force (120), Naval Academy (30)', postCount: 400 }],
  selectionProcess: [
    'Stage 1: UPSC Written Examination (Mathematics 300 Marks + GAT 600 Marks = 900 Marks)',
    'Stage 2: SSB Interview & Psychological Evaluation (900 Marks across 5 Days)',
    'Stage 3: Medical Examination at Military Hospital (Special Medical Board for Air Force)'
  ],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. Official UPSC NDA Born Between Date Criteria',
      badge: 'DOB Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>UPSC mandates that candidate must be unmarried and born strictly within the specified window (16.5 to 19.5 years):</p>
          <ul class="list-disc list-inside space-y-1 text-xs">
            <li><strong>NDA-1 2026:</strong> Born not earlier than <strong>02 July 2007</strong> and not later than <strong>01 July 2010</strong>.</li>
            <li><strong>NDA-2 2026:</strong> Born not earlier than <strong>02 January 2008</strong> and not later than <strong>01 January 2011</strong>.</li>
          </ul>
        </div>
      `
    }
  ],
  faq: [{ q: 'Can 12th Commerce or Arts students join Air Force Wing through NDA?', a: 'No. For Air Force and Naval Wings, candidate must pass Class 12th with Physics, Chemistry and Mathematics. Arts/Commerce students can only apply for the Army Wing.' }]
};

// ---------------------------------------------------------------------------
// 15. SSC GD MEDICAL FITNESS CHECKER DATA
// ---------------------------------------------------------------------------
export const SSC_GD_MEDICAL_EXAM: ExamRecord = {
  id: 'ssc-gd-medical-fitness-checker-2026',
  slug: 'ssc-gd-medical-fitness-checker-2026',
  examName: 'SSC GD Medical Fitness & DME Standards Checker 2026',
  shortName: 'SSC GD Medical Checker',
  organization: 'CAPF Medical Board & Ministry of Home Affairs',
  category: 'SSC',
  postName: 'Detailed Medical Examination (DME) & Review Medical (RME)',
  totalVacancy: 'Medical Shortlisted Candidates',
  logoIcon: '🩺',
  state: 'All India',
  ageMin: 18,
  ageMax: 23,
  gender: 'All',
  applicationStartDate: '2026-09-05',
  applicationLastDate: '2026-10-14',
  examDate: '2026-06-15',
  status: 'APPLICATION_OPEN',
  education: ['10th'],
  officialWebsite: 'https://ssc.gov.in',
  officialNotification: 'https://ssc.gov.in',
  applyLink: 'https://ssc.gov.in',
  salary: { payScale: 'Level 3', inHand: '₹28,500 – ₹32,000', allowances: 'Medical Fitness Entitlement' },
  importantDates: [{ label: 'DME / RME Stage', date: 'Expected June – July 2027', isHighlight: true }],
  applicationFee: [],
  vacancies: [{ category: 'Medical Clearance Candidates', postCount: 39481 }],
  selectionProcess: ['Detailed Medical Examination (DME) by 3-Doctor Board', 'Review Medical Examination (RME) within 24-48 Hours if appealed'],
  examPattern: [],
  allInformation: [
    {
      id: 1,
      title: '1. Key Parameters Evaluated during SSC GD DME',
      badge: 'Medical Guidelines',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official medical criteria governed by Ministry of Home Affairs Uniform Medical Guidelines:</p>
          <ul class="list-disc list-inside space-y-1.5 text-xs">
            <li><strong>Visual Standards:</strong> Better Eye (N6 near, 6/6 distant); Worse Eye (N9 near, 6/9 distant). LASIK surgery or refractive surgery is NOT accepted.</li>
            <li><strong>Color Vision:</strong> Minimum CP-III standard on Ishihara book.</li>
            <li><strong>Orthopedic:</strong> Must not have Knock Knees, Flat Foot, Bow Legs, or Hammer Toes.</li>
            <li><strong>Vascular:</strong> Varicose veins in legs constitute permanent disqualification.</li>
            <li><strong>Hearing:</strong> Able to hear forced whisper at distance of 610 cm (6 meters) by each ear.</li>
            <li><strong>Tattoo Policy:</strong> Religious symbol/figures allowed only on inner aspect of forearm (less than 1/4th of forearm size) and saluting hand must be completely free of tattoos.</li>
          </ul>
        </div>
      `
    }
  ],
  faq: [{ q: 'Is LASIK surgery allowed for SSC GD Constable medical?', a: 'No, LASIK or refractive eye surgery is explicitly disqualified under CAPF medical guidelines for GD posts.' }]
};

// Array of all 15 ranking pages
export const ALL_15_RANKING_EXAMS: ExamRecord[] = [
  AGNIVEER_AGE_CALCULATOR_EXAM,
  IOB_LLO_EXAM,
  MP_POLICE_ELIGIBILITY_EXAM,
  SSC_GD_HEIGHT_EXAM,
  ARMY_RUNNING_TIME_EXAM,
  ARMY_PROMOTION_EXAM,
  SSC_CGL_AGE_EXAM,
  GOVT_HEIGHT_CHECKER_EXAM,
  SSC_GD_ELIGIBILITY_EXAM,
  ARMY_HEIGHT_REGION_EXAM,
  SSC_GD_RUNNING_EXAM,
  ARMY_DOC_CHECKLIST_EXAM,
  SSC_GD_FEMALE_EXAM,
  NDA_AGE_CALCULATOR_EXAM,
  SSC_GD_MEDICAL_EXAM
];
