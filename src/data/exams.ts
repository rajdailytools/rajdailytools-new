import { ExamRecord, ExamInfoSection } from '../types/exam';
import { ADDITIONAL_EXAMS } from './moreExams';
import { IBPS_RRB_XV_EXAM, generateIbpsRrbXv50Sections } from './ibpsRrbData';
import { AIIMS_NORCET_11_EXAM, generateAiimsNorcet50Sections } from './aiimsNorcetData';

export { generateIbpsRrbXv50Sections, generateAiimsNorcet50Sections, AIIMS_NORCET_11_EXAM };

const BASE_EXAMS: ExamRecord[] = [
  AIIMS_NORCET_11_EXAM,
  IBPS_RRB_XV_EXAM,
  {
    id: 'ssc-cgl-2026',
    slug: 'ssc-cgl-recruitment-2026',
    examName: 'SSC CGL Recruitment 2026',
    organization: 'Staff Selection Commission (SSC)',
    category: 'SSC',
    postName: 'Combined Graduate Level (Inspector, ASO, Tax Assistant, Auditor)',
    totalVacancy: '17,727 Posts',
    applicationStartDate: '2026-06-24',
    applicationLastDate: '2026-09-28',
    admitCardDate: '2026-10-15',
    examDate: '2026-10-25',
    answerKeyDate: '2026-11-05',
    resultDate: '2026-12-10',
    cutOffDate: '2026-12-10',
    status: 'APPLICATION_OPEN',
    education: ['Graduation'],
    ageMin: 18,
    ageMax: 32,
    ageRelaxationInfo: 'OBC: +3 Years, SC/ST: +5 Years, PwD: +10 Years',
    categoryEligibility: {
      'General': '18 to 30/32 years (post-wise)',
      'EWS': '18 to 30/32 years',
      'OBC': 'Up to 35 years',
      'SC/ST': 'Up to 37 years'
    },
    gender: 'All',
    state: 'All India',
    officialWebsite: 'https://ssc.gov.in',
    officialNotification: 'https://ssc.gov.in/api/announcement',
    applyLink: 'https://ssc.gov.in/portal/login',
    admitCardLink: 'https://ssc.gov.in/portal/admit-card',
    examCityLink: 'https://ssc.gov.in/portal/exam-city-intimation',
    answerKeyLink: 'https://ssc.gov.in/portal/answer-keys',
    responseSheetLink: 'https://ssc.gov.in/portal/candidate-response',
    objectionLastDate: '2026-11-10',
    resultLink: 'https://ssc.gov.in/portal/results',
    resultPdfLink: 'https://ssc.gov.in/api/result-writeup-cgl.pdf',
    cutOffLink: 'https://ssc.gov.in/api/cgl-cutoff.pdf',
    mockTestLink: '', // intentionally empty to trigger the custom 404 Mock Test Placeholder!
    logoIcon: '📘',
    logoBg: '#eff6ff',
    description: 'SSC CGL 2026 Notification has been officially announced for 17,727 group B and C executive vacancies across ministries and central departments.',
    shortSummary: 'SSC Combined Graduate Level Exam 2026 for Assistants, Inspectors, Sub-Inspectors, and Auditors across Central Government ministries.',
    importantDates: [
      { label: 'Notification Released', date: '24 June 2026' },
      { label: 'Online Application Starts', date: '24 June 2026' },
      { label: 'Last Date to Apply Online', date: '28 September 2026', isHighlight: true },
      { label: 'Application Correction Window', date: '01 - 03 October 2026' },
      { label: 'Tier-1 Admit Card Release', date: '15 October 2026' },
      { label: 'Tier-1 CBT Exam Date', date: '25 October - 05 November 2026', isHighlight: true },
      { label: 'Provisional Answer Key Release', date: '05 November 2026' },
      { label: 'Tier-1 Result & Cut Off', date: '10 December 2026' }
    ],
    applicationFee: [
      { category: 'General / OBC / EWS (Male)', amount: '₹100' },
      { category: 'SC / ST / PwD / Ex-Servicemen', amount: '₹0 (Exempted)' },
      { category: 'All Female Candidates', amount: '₹0 (Exempted)' }
    ],
    selectionProcess: [
      'Tier 1: Computer Based Objective Examination (Qualifying in nature)',
      'Tier 2: Computer Based Objective & Data Entry Skill Test (DEST)',
      'Document Verification (DV) conducted by User Departments',
      'Medical Fitness Examination as per post requirements'
    ],
    examPattern: [
      {
        tier: 'Tier-1 (Objective Multiple Choice)',
        mode: 'Online (Computer Based Test)',
        duration: '60 Minutes (80 minutes for scribes)',
        negativeMarking: '0.50 marks deducted per wrong answer',
        subjects: [
          { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        tier: 'Tier-2 (Paper-I Compulsory for All)',
        mode: 'Online CBT + DEST',
        duration: '2 Hours 15 Minutes',
        negativeMarking: '1 mark deducted per wrong answer',
        subjects: [
          { name: 'Mathematical Abilities', questions: 30, marks: 90 },
          { name: 'Reasoning and General Intelligence', questions: 30, marks: 90 },
          { name: 'English Language and Comprehension', questions: 45, marks: 135 },
          { name: 'General Awareness', questions: 25, marks: 75 },
          { name: 'Computer Knowledge Module (Qualifying)', questions: 20, marks: 60 }
        ]
      }
    ],
    salary: {
      payScale: 'Pay Level 4 (₹25,500 - ₹81,100) to Pay Level 8 (₹47,600 - ₹1,51,100)',
      inHand: '₹42,000 to ₹85,000 per month (depending on City X, Y, Z category)',
      allowances: 'HRA (9-27%), DA (50%+), Transport Allowance, CGHS Medical Facility, LTC'
    },
    cutOffData: {
      stage: 'Tier-1 Expected & Past Trend',
      year: '2026 / 2025 Trend',
      categories: [
        { category: 'UR (General)', marks: 148.5, candidates: '15,400' },
        { category: 'OBC', marks: 144.0, candidates: '24,200' },
        { category: 'EWS', marks: 140.2, candidates: '11,800' },
        { category: 'SC', marks: 124.6, candidates: '14,100' },
        { category: 'ST', marks: 114.8, candidates: '6,900' }
      ],
      previousYears: [
        {
          year: '2025',
          stage: 'Tier-1',
          categories: [
            { category: 'UR', marks: 145.2 },
            { category: 'OBC', marks: 141.6 },
            { category: 'EWS', marks: 138.5 },
            { category: 'SC', marks: 122.0 },
            { category: 'ST', marks: 112.5 }
          ]
        },
        {
          year: '2024',
          stage: 'Tier-1',
          categories: [
            { category: 'UR', marks: 150.04 },
            { category: 'OBC', marks: 145.93 },
            { category: 'EWS', marks: 143.44 },
            { category: 'SC', marks: 126.68 },
            { category: 'ST', marks: 118.16 }
          ]
        }
      ]
    },
    sampleCandidatesResult: [
      { rollNo: '2201004521', name: 'Aman Sharma', category: 'General', score: 168.5, status: 'Qualified', rank: 142 },
      { rollNo: '2201005892', name: 'Pooja Verma', category: 'OBC', score: 154.2, status: 'Qualified', rank: 820 },
      { rollNo: '2201008129', name: 'Vikram Singh', category: 'EWS', score: 149.0, status: 'Qualified', rank: 1240 },
      { rollNo: '2201009941', name: 'Sunil Kumar Meena', category: 'ST', score: 128.5, status: 'Qualified', rank: 3100 },
      { rollNo: '2201011470', name: 'Ravi Prakash', category: 'SC', score: 135.0, status: 'Qualified', rank: 2400 }
    ],
    faq: [
      { q: 'Can final year graduation students apply for SSC CGL 2026?', a: 'Yes, candidates appearing in the final year of their Bachelor’s degree can apply provided they acquire educational qualification on or before the crucial cutoff date specified in the official notification.' },
      { q: 'Is there any negative marking in SSC CGL Tier 1 exam?', a: 'Yes, there is negative marking of 0.50 marks for each incorrect response in Tier 1. In Tier 2, 1 mark is deducted per wrong answer.' },
      { q: 'Is Tier 1 marks counted in final merit list?', a: 'No, SSC CGL Tier 1 is qualifying in nature. Final merit is prepared solely on the basis of marks scored in Tier 2 Examination (Paper-I Section I and Section II).' },
      { q: 'What is the minimum age to apply for SSC CGL 2026?', a: 'The minimum age is 18 years, and maximum age varies from 27 to 32 years depending upon the specific post applied for, with applicable category age relaxations.' }
    ],
    allInformation: generate50Sections('SSC CGL Recruitment 2026', 'Staff Selection Commission (SSC)', '17,727 Posts', 'Graduation')
  },
  {
    id: 'ssc-mts-2026',
    slug: 'ssc-mts-admit-card-2026',
    examName: 'SSC MTS & Havaldar Examination 2026',
    organization: 'Staff Selection Commission (SSC)',
    category: 'SSC',
    postName: 'Multi Tasking Staff (Non-Technical) & Havaldar (CBIC/CBN)',
    totalVacancy: '9,583 Posts',
    applicationStartDate: '2026-05-07',
    applicationLastDate: '2026-06-15',
    admitCardDate: '2026-09-18',
    examDate: '2026-09-30',
    answerKeyDate: '2026-10-12',
    resultDate: '2026-11-20',
    cutOffDate: '2026-11-20',
    status: 'ADMIT_CARD_RELEASED',
    education: ['10th'],
    ageMin: 18,
    ageMax: 27,
    ageRelaxationInfo: 'OBC: +3 Years, SC/ST: +5 Years',
    categoryEligibility: {
      'General': '18 to 25 / 27 years',
      'OBC': 'Up to 28 / 30 years',
      'SC/ST': 'Up to 30 / 32 years'
    },
    gender: 'All',
    state: 'All India',
    officialWebsite: 'https://ssc.gov.in',
    officialNotification: 'https://ssc.gov.in/api/announcement-mts',
    applyLink: 'https://ssc.gov.in/portal/login',
    admitCardLink: 'https://ssc.gov.in/portal/admit-card',
    examCityLink: 'https://ssc.gov.in/portal/exam-city-intimation',
    answerKeyLink: 'https://ssc.gov.in/portal/answer-keys',
    resultLink: 'https://ssc.gov.in/portal/results',
    mockTestLink: '',
    logoIcon: '📋',
    logoBg: '#eff6ff',
    description: 'SSC MTS Admit Card 2026 has been officially released for regions. Candidates can download their hall ticket and check exam city status.',
    shortSummary: 'Multi Tasking Staff (Non-Technical) and Havaldar recruitment exam for 10th pass candidates across India.',
    importantDates: [
      { label: 'Application Started', date: '07 May 2026' },
      { label: 'Application Closed', date: '15 June 2026' },
      { label: 'Application Status Out', date: '10 September 2026' },
      { label: 'Admit Card Released', date: '18 September 2026', isHighlight: true },
      { label: 'CBT Examination Date', date: '30 September - 14 November 2026', isHighlight: true },
      { label: 'Answer Key Expected', date: '12 October 2026' }
    ],
    applicationFee: [
      { category: 'UR / OBC / EWS (Male)', amount: '₹100' },
      { category: 'SC / ST / PwD / Women', amount: '₹0' }
    ],
    selectionProcess: [
      'Session-I & Session-II Computer Based Examination',
      'Physical Efficiency Test (PET) / Physical Standard Test (PST) (Only for Havaldar posts)',
      'Document Verification'
    ],
    examPattern: [
      {
        tier: 'CBT Examination (Session I & II)',
        mode: 'Online Computer Based Test',
        duration: '90 Minutes total (45 min each session)',
        negativeMarking: 'No negative marking in Session I; 1 mark negative per wrong question in Session II',
        subjects: [
          { name: 'Session I: Numerical and Mathematical Ability', questions: 20, marks: 60 },
          { name: 'Session I: Reasoning Ability and Problem Solving', questions: 20, marks: 60 },
          { name: 'Session II: General Awareness', questions: 25, marks: 75 },
          { name: 'Session II: English Language and Comprehension', questions: 25, marks: 75 }
        ]
      }
    ],
    salary: {
      payScale: 'Pay Level 1 (₹18,000 - ₹56,900)',
      inHand: '₹28,000 to ₹34,000 per month',
      allowances: 'DA, HRA, Transport Allowance, Ration Allowance for Havaldar'
    },
    cutOffData: {
      stage: 'Final State-wise Expected Cut-off',
      year: '2026',
      categories: [
        { category: 'UR', marks: 132.5 },
        { category: 'OBC', marks: 129.8 },
        { category: 'EWS', marks: 127.4 },
        { category: 'SC', marks: 121.0 },
        { category: 'ST', marks: 114.2 }
      ]
    },
    faq: [
      { q: 'How can I download the SSC MTS Admit Card 2026?', a: 'Visit ssc.gov.in, navigate to Admit Card tab, select your region, enter Registration ID/Roll No and Date of Birth to download your hall ticket.' },
      { q: 'What documents are required to carry to the exam hall?', a: 'Printed copy of Admit Card, 2 recent passport photographs, original valid Photo ID (Aadhaar/PAN/Voter ID/Driving License).' }
    ],
    allInformation: generate50Sections('SSC MTS & Havaldar Examination 2026', 'Staff Selection Commission (SSC)', '9,583 Posts', '10th (Matriculation)')
  },
  {
    id: 'ssc-chsl-2026',
    slug: 'ssc-chsl-recruitment-2026',
    examName: 'SSC CHSL 10+2 Recruitment 2026',
    organization: 'Staff Selection Commission (SSC)',
    category: 'SSC',
    postName: 'Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO / DEO Grade A)',
    totalVacancy: '2,536 Posts',
    applicationStartDate: '2026-09-07',
    applicationLastDate: '2026-10-07',
    admitCardDate: '',
    examDate: '',
    answerKeyDate: '',
    resultDate: '',
    cutOffDate: '',
    status: 'APPLICATION_OPEN',
    education: ['12th'],
    ageMin: 18,
    ageMax: 27,
    categoryEligibility: {
      'General / EWS': '18 to 27 years as on 01-08-2026',
      'OBC (NCL)': '18 to 30 years (3 years relaxation)',
      'SC / ST': '18 to 32 years (5 years relaxation)',
      'PwBD': 'Up to 37 - 42 years per category'
    },
    gender: 'All',
    state: 'All India',
    officialWebsite: 'https://ssc.gov.in/',
    officialNotification: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2026.pdf',
    applyLink: 'https://ssc.gov.in/candidate-portal/one-time-registration/home-page',
    admitCardLink: '',
    answerKeyLink: '',
    resultLink: '',
    mockTestLink: '',
    logoIcon: '✍️',
    logoBg: '#eff6ff',
    description: 'Staff Selection Commission (SSC) has officially released the notification for Combined Higher Secondary (10+2) Level Examination 2026 for 2536 tentative vacancies. Online applications are accepted from 07 September to 07 October 2026.',
    shortSummary: 'SSC CHSL 10+2 Recruitment 2026 notification released for 2536 vacancies of LDC, JSA, and DEO. 12th Pass candidates can apply online until 07 October 2026.',
    importantDates: [
      { label: 'Official Notification Released', date: '07 September 2026' },
      { label: 'Online Application Started', date: '07 September 2026' },
      { label: 'Last Date to Apply Online', date: '07 October 2026 (23:00 Hrs)', isHighlight: true },
      { label: 'Last Date for Online Fee Payment', date: '08 October 2026 (23:00 Hrs)' },
      { label: 'Correction Window Opens', date: '14 October 2026' },
      { label: 'Correction Window Closes', date: '16 October 2026 (23:00 Hrs)' },
      { label: 'Tier-I Computer Based Exam (CBE)', date: 'To Be Announced' },
      { label: 'Tier-II Computer Based Exam', date: 'To Be Announced' }
    ],
    applicationFee: [
      { category: 'General / OBC / EWS (Male)', amount: '₹100' },
      { category: 'Women / SC / ST / PwBD / ESM', amount: '₹0 (Exempted)' }
    ],
    selectionProcess: [
      'Stage 1: Tier-I Computer Based Examination (CBE) - Objective Multiple Choice',
      'Stage 2: Tier-II Computer Based Examination (Session-I CBT + Session-II Skill/Typing Test)',
      'Stage 3: Online Post Preference Submission on ssc.gov.in',
      'Stage 4: Document Verification (DV) conducted by User Ministries/Departments',
      'Stage 5: Pre-Appointment Medical Examination'
    ],
    examPattern: [
      {
        tier: 'Tier-I Computer Based Examination (CBE)',
        mode: 'Online (CBT)',
        duration: '60 Minutes (80 Minutes for Scribe Candidates)',
        negativeMarking: '0.50 marks deducted per wrong answer',
        subjects: [
          { name: 'English Language (Basic Knowledge)', questions: 25, marks: 50 },
          { name: 'General Intelligence', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude (Basic Arithmetic Skill)', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 }
        ]
      },
      {
        tier: 'Tier-II Computer Based Examination',
        mode: 'Online (CBT) + Typing/Skill Test',
        duration: 'Session-I: 2 Hours 15 Minutes; Session-II: 10-15 Minutes',
        negativeMarking: '1 mark deducted per wrong answer in Sections I, II & III',
        subjects: [
          { name: 'Section-I: Module-I Math (30 Q) + Module-II Reasoning (30 Q)', questions: 60, marks: 180 },
          { name: 'Section-II: Module-I English (40 Q) + Module-II GA (20 Q)', questions: 60, marks: 180 },
          { name: 'Section-III: Module-I Computer Knowledge Test (Mandatory Qualifying)', questions: 15, marks: 45 },
          { name: 'Section-IV: Module-II Skill Test for DEO / Typing Test for LDC (Qualifying)', questions: 0, marks: 0 }
        ]
      }
    ],
    salary: {
      payScale: 'Level-2 (₹19,900 - ₹63,200) & Level-4 (₹25,500 - ₹81,100) & Level-5 (₹29,200 - ₹92,300)',
      inHand: '₹32,500 to ₹48,000 per month (approx, depending on city tier and cadre)',
      allowances: 'DA (50%+), HRA (10% to 30%), Transport Allowance (TA), CGHS & Pension under NPS'
    },
    faq: [
      {
        q: 'What is the last date to apply online for SSC CHSL 2026?',
        a: 'The online application window closes on 07 October 2026 at 23:00 Hours. The online fee payment deadline is 08 October 2026 at 23:00 Hours.'
      },
      {
        q: 'How many total vacancies are announced for SSC CHSL 10+2 Recruitment 2026?',
        a: 'There are approximately 2536 tentative vacancies announced by Staff Selection Commission across Ministries and Departments of the Government of India.'
      },
      {
        q: 'What is the age limit and crucial date for SSC CHSL 2026?',
        a: 'Candidates must be 18 to 27 years of age as on 01 August 2026 (born not before 02-08-1999 and not later than 01-08-2008). Upper age relaxation applies for reserved categories.'
      },
      {
        q: 'What is the educational qualification required for SSC CHSL 2026?',
        a: 'Candidates must have passed 12th Standard or equivalent examination from a recognized Board or University as on 07 October 2026. For DEO in Consumer Affairs, SSC, and Culture, 12th standard pass in Science stream with Mathematics is required.'
      },
      {
        q: 'How to capture photograph for SSC CHSL 2026 application?',
        a: 'Candidates must capture a live photograph using a webcam or the official "my SSC" mobile app. Ensure good lighting, a plain light background, and do not wear caps, masks, or glasses.'
      },
      {
        q: 'When will SSC CHSL 2026 Admit Card and Tier-I Exam Dates be released?',
        a: 'Tier-I examination dates will be announced by SSC on ssc.gov.in in due course. Admit cards are released 2 to 3 days prior to the examination with city intimation 10 days before.'
      }
    ],
    allInformation: generateSscChsl50Sections()
  },
  {
    id: 'ssc-gd-2026',
    slug: 'ssc-gd-recruitment-2026',
    examName: 'SSC GD Constable Recruitment 2026',
    organization: 'Staff Selection Commission (SSC)',
    category: 'SSC',
    postName: 'Constable (General Duty) in CAPFs (BSF, CISF, CRPF, SSB, ITBP, AR, SSF)',
    totalVacancy: '39,481 Posts',
    applicationStartDate: '2026-09-05',
    applicationLastDate: '2026-10-14',
    admitCardDate: '2027-01-15',
    examDate: '2027-02-05',
    status: 'APPLICATION_OPEN',
    education: ['10th'],
    ageMin: 18,
    ageMax: 23,
    ageRelaxationInfo: 'OBC: +3 Years, SC/ST: +5 Years',
    categoryEligibility: {
      'General': '18 to 23 years',
      'OBC': 'Up to 26 years',
      'SC/ST': 'Up to 28 years'
    },
    gender: 'All',
    state: 'All India',
    officialWebsite: 'https://ssc.gov.in',
    officialNotification: 'https://ssc.gov.in/api/ssc-gd-notification',
    applyLink: 'https://ssc.gov.in/portal/login',
    admitCardLink: 'https://ssc.gov.in/portal/admit-card',
    resultLink: 'https://ssc.gov.in/portal/results',
    mockTestLink: '',
    logoIcon: '🚔',
    logoBg: '#eff6ff',
    description: 'SSC GD Constable 2026 Notification out for 39,481 posts across BSF, CISF, CRPF, SSB, ITBP, Assam Rifles, and SSF. 10th pass eligible.',
    shortSummary: 'Paramilitary Constable recruitment for male and female 10th pass youth of India.',
    importantDates: [
      { label: 'Notification Released', date: '05 September 2026' },
      { label: 'Online Application Starts', date: '05 September 2026' },
      { label: 'Last Date to Apply', date: '14 October 2026', isHighlight: true },
      { label: 'Admit Card Expected', date: '15 January 2027' },
      { label: 'CBT Exam Window', date: 'February - March 2027', isHighlight: true }
    ],
    applicationFee: [
      { category: 'UR / OBC / EWS (Male)', amount: '₹100' },
      { category: 'SC / ST / Ex-S / Women', amount: '₹0' }
    ],
    selectionProcess: [
      'Computer Based Examination (CBE)',
      'Physical Efficiency Test (PET)',
      'Physical Standard Test (PST)',
      'Detailed Medical Examination (DME) / Review Medical Examination (RME)',
      'Document Verification'
    ],
    examPattern: [
      {
        tier: 'Computer Based Examination (CBE)',
        mode: 'Online (13 Regional Languages + Hindi & English)',
        duration: '60 Minutes',
        negativeMarking: '0.25 marks for each wrong response (or 1/8th of question marks)',
        subjects: [
          { name: 'Part-A: General Intelligence and Reasoning', questions: 20, marks: 40 },
          { name: 'Part-B: General Knowledge and General Awareness', questions: 20, marks: 40 },
          { name: 'Part-C: Elementary Mathematics', questions: 20, marks: 40 },
          { name: 'Part-D: English / Hindi', questions: 20, marks: 40 }
        ]
      }
    ],
    salary: {
      payScale: 'Pay Level 3 (₹21,700 - ₹69,100)',
      inHand: '₹34,000 to ₹40,000 per month + Ration Money Allowance',
      allowances: 'DA, HRA, Risk & Hardship Allowance (where posted), Medical allowance'
    },
    cutOffData: {
      stage: 'State-wise Constable Cut Off Trend',
      year: '2025/2026',
      categories: [
        { category: 'UR (Male - General Area)', marks: 138.4 },
        { category: 'OBC', marks: 135.2 },
        { category: 'EWS', marks: 133.6 },
        { category: 'SC', marks: 126.5 },
        { category: 'ST', marks: 120.0 }
      ]
    },
    faq: [
      { q: 'What is the minimum height required for SSC GD Constable male candidates?', a: 'For General, SC, and OBC male candidates, minimum height is 170 cm. For ST male candidates, it is 162.5 cm. For female candidates, 157 cm (General/OBC/SC) and 150 cm (ST).' },
      { q: 'What is the PET running criteria for male candidates in SSC GD?', a: 'Male candidates must complete 5 km running in 24 minutes. Female candidates must complete 1.6 km in 8.5 minutes.' }
    ],
    allInformation: generate50Sections('SSC GD Constable Recruitment 2026', 'Staff Selection Commission (SSC)', '39,481 Posts', '10th (Matriculation)')
  },
  {
    id: 'army-agniveer-2026',
    slug: 'army-agniveer-rally-2026',
    examName: 'Indian Army Agniveer Recruitment Rally 2026',
    organization: 'Join Indian Army',
    category: 'Army',
    postName: 'Agniveer (General Duty, Technical, Clerk/Store Keeper, Tradesmen 10th & 8th)',
    totalVacancy: '25,000+ Posts (Estimated All ZROs)',
    applicationStartDate: '2026-07-10',
    applicationLastDate: '2026-08-20',
    admitCardDate: '2026-09-05',
    examDate: '2026-09-20',
    answerKeyDate: '2026-10-01',
    resultDate: '2026-10-18',
    cutOffDate: '2026-10-18',
    status: 'EXAM_COMPLETED',
    education: ['10th', '12th', 'ITI'],
    ageMin: 17.5,
    ageMax: 21,
    gender: 'All',
    state: 'All India',
    officialWebsite: 'https://joinindianarmy.nic.in',
    officialNotification: 'https://joinindianarmy.nic.in/announcements.htm',
    applyLink: 'https://joinindianarmy.nic.in/Authentication.aspx',
    admitCardLink: 'https://joinindianarmy.nic.in/admit-card.htm',
    answerKeyLink: 'https://joinindianarmy.nic.in/answer-key.htm',
    resultLink: 'https://joinindianarmy.nic.in/results.htm',
    resultPdfLink: 'https://joinindianarmy.nic.in/results/agniveer-selected-list.pdf',
    mockTestLink: '',
    logoIcon: '🪖',
    logoBg: '#eef2ff',
    description: 'Indian Army Agniveer Common Entrance Exam (CEE) completed. Physical Rally testing scheduled across designated Regimental centres.',
    shortSummary: 'Join Indian Army under the Agnipath Scheme as Agniveer General Duty, Technical, and Tradesmen.',
    importantDates: [
      { label: 'Online CEE Registration Starts', date: '10 July 2026' },
      { label: 'Registration Deadline', date: '20 August 2026' },
      { label: 'Admit Card for CEE', date: '05 September 2026' },
      { label: 'Online CEE Conducted', date: '20 - 28 September 2026', isHighlight: true },
      { label: 'CEE Result & Rally Schedule', date: '18 October 2026', isHighlight: true }
    ],
    applicationFee: [
      { category: 'All Candidates', amount: '₹250 (Exam Fee)' }
    ],
    selectionProcess: [
      'Phase-I: Online Common Entrance Exam (CEE)',
      'Phase-II: Recruitment Rally (1.6 km Run, Beam, 9 Feet Ditch, Zig-Zag Balance)',
      'Physical Measurement Test (PMT)',
      'Medical Examination at Rally Site & Military Hospital'
    ],
    examPattern: [
      {
        tier: 'CEE General Duty Pattern',
        mode: 'Online Computer Based Test',
        duration: '60 Minutes',
        negativeMarking: '0.5 marks per wrong answer',
        subjects: [
          { name: 'General Knowledge', questions: 15, marks: 30 },
          { name: 'General Science', questions: 15, marks: 30 },
          { name: 'Mathematics', questions: 15, marks: 30 },
          { name: 'Logical Reasoning', questions: 5, marks: 10 }
        ]
      }
    ],
    salary: {
      payScale: 'Agniveer Package Year 1: ₹30,000 to Year 4: ₹40,000 per month',
      inHand: '₹21,000 - ₹28,000 + ₹11.71 Lakh Seva Nidhi Package on completion of 4 years',
      allowances: 'Free rations, clothing, accommodation, medical, insurance cover of ₹48 Lakh'
    },
    cutOffData: {
      stage: 'CEE Qualifying Marks',
      year: '2026',
      categories: [
        { category: 'General Duty (Passing)', marks: 35, candidates: '45,000+' },
        { category: 'Technical (Passing)', marks: 80, candidates: '12,000+' },
        { category: 'Clerk/SKT (Passing)', marks: 80, candidates: '8,000+' }
      ]
    },
    sampleCandidatesResult: [
      { rollNo: 'JIA-2026-89012', name: 'Kuldeep Singh', category: 'General', score: 76.0, status: 'Qualified', rank: 110 },
      { rollNo: 'JIA-2026-89045', name: 'Rahul Yadav', category: 'OBC', score: 82.5, status: 'Qualified', rank: 45 },
      { rollNo: 'JIA-2026-89112', name: 'Deepak Jat', category: 'General', score: 68.0, status: 'Qualified', rank: 320 }
    ],
    faq: [
      { q: 'What is the 1600m running time required for Indian Army Agniveer?', a: 'Group I (60 Marks): Up to 5 Minutes 30 Seconds. Group II (48 Marks): From 5 Minutes 31 Seconds to 5 Minutes 45 Seconds.' },
      { q: 'How many pull-ups are required for maximum marks?', a: '10 pull-ups award full 40 marks in the Agniveer Physical Fitness Test.' }
    ],
    allInformation: generate50Sections('Indian Army Agniveer Recruitment Rally 2026', 'Join Indian Army', '25,000+ Posts', '10th / 12th / ITI')
  },
  {
    id: 'mp-police-2026',
    slug: 'mp-police-constable-2026',
    examName: 'MP Police Constable Recruitment 2026',
    organization: 'Madhya Pradesh Employees Selection Board (MPESB)',
    category: 'Police',
    postName: 'Constable (GD) & Constable (Radio Operator)',
    totalVacancy: '7,500 Posts',
    applicationStartDate: '2026-08-01',
    applicationLastDate: '2026-09-15',
    admitCardDate: '2026-10-20',
    examDate: '2026-11-05',
    status: 'APPLICATION_OPEN',
    education: ['10th', '12th', 'ITI', 'Diploma'],
    ageMin: 18,
    ageMax: 36,
    ageRelaxationInfo: 'Female/SC/ST/OBC of MP: Up to 41 years',
    categoryEligibility: {
      'UR (Male MP & Other States)': '18 to 36 years',
      'MP Reserve Categories & Females': '18 to 41 years'
    },
    gender: 'All',
    state: 'Madhya Pradesh',
    officialWebsite: 'https://esb.mp.gov.in',
    officialNotification: 'https://esb.mp.gov.in/rulebooks/police2026.pdf',
    applyLink: 'https://esb.mponline.gov.in',
    admitCardLink: 'https://esb.mp.gov.in/admitcard.htm',
    resultLink: 'https://esb.mp.gov.in/results.htm',
    mockTestLink: '',
    logoIcon: '👮',
    logoBg: '#fffbeb',
    description: 'MP Police Constable 2026 application form is open. 7,500 vacancies announced across General Duty and Radio technical units.',
    shortSummary: 'Madhya Pradesh Police Constable GD and Radio recruitment with written examination and physical proficiency tests.',
    importantDates: [
      { label: 'Application Started', date: '01 August 2026' },
      { label: 'Last Date to Submit Application', date: '15 September 2026', isHighlight: true },
      { label: 'Last Date for Fee Payment', date: '17 September 2026' },
      { label: 'Admit Card Download', date: '20 October 2026' },
      { label: 'Written Exam Starts', date: '05 November 2026', isHighlight: true }
    ],
    applicationFee: [
      { category: 'General / Other State Candidates', amount: '₹500' },
      { category: 'SC / ST / OBC / EWS of MP', amount: '₹250' }
    ],
    selectionProcess: [
      'Stage 1: Written Examination (100 Marks)',
      'Stage 2: Physical Proficiency Test (PPT) (100 Marks with graded scoring)',
      'Document Verification',
      'Medical Test'
    ],
    examPattern: [
      {
        tier: 'Written Examination',
        mode: 'Online CBT',
        duration: '120 Minutes',
        negativeMarking: 'No negative marking',
        subjects: [
          { name: 'General Knowledge & Reasoning', questions: 40, marks: 40 },
          { name: 'Intellectual Ability & Mental Aptitude', questions: 30, marks: 30 },
          { name: 'Science & Simple Arithmetic', questions: 30, marks: 30 }
        ]
      }
    ],
    salary: {
      payScale: '₹19,500 - ₹62,000 (Pay Level 4)',
      inHand: '₹26,000 - ₹32,000 per month',
      allowances: 'Uniform allowance, Risk allowance, Medical, DA, HRA'
    },
    cutOffData: {
      stage: 'Previous Year Cut Off Trend',
      year: '2024 / 2025',
      categories: [
        { category: 'UR Male', marks: 80.68 },
        { category: 'UR Female', marks: 67.56 },
        { category: 'OBC Male', marks: 77.28 },
        { category: 'SC Male', marks: 72.42 },
        { category: 'ST Male', marks: 66.14 }
      ]
    },
    faq: [
      { q: 'Can candidates from other states apply for MP Police Constable?', a: 'Yes, candidates from all Indian states can apply under General/Unreserved category.' },
      { q: 'Is physical test graded for marks in MP Police?', a: 'Yes, in the latest pattern, the Physical Proficiency Test holds 100 marks contributing to the final merit list.' }
    ],
    allInformation: generate50Sections('MP Police Constable Recruitment 2026', 'MPESB', '7,500 Posts', '10th / 12th Pass')
  },
  {
    id: 'rrb-ntpc-2026',
    slug: 'rrb-ntpc-recruitment-2026',
    examName: 'RRB NTPC Recruitment 2026',
    organization: 'Railway Recruitment Boards (RRB)',
    category: 'Railway',
    postName: 'Non-Technical Popular Categories (Station Master, Goods Train Manager, Senior Clerk, Junior Clerk)',
    totalVacancy: '11,558 Posts',
    applicationStartDate: '2026-09-14',
    applicationLastDate: '2026-10-20',
    admitCardDate: '2026-12-10',
    examDate: '2026-12-20',
    status: 'APPLICATION_OPEN',
    education: ['12th', 'Graduation'],
    ageMin: 18,
    ageMax: 33,
    ageRelaxationInfo: 'OBC: +3 Years, SC/ST: +5 Years, PwBD: +10 Years',
    categoryEligibility: {
      'General (Graduate posts)': '18 to 33 years',
      'General (Undergraduate posts)': '18 to 30 years',
      'OBC': 'Up to 36 years',
      'SC/ST': 'Up to 38 years'
    },
    gender: 'All',
    state: 'All India',
    officialWebsite: 'https://indianrailways.gov.in',
    officialNotification: 'https://indianrailways.gov.in/railwayboard/ntpc2026.pdf',
    applyLink: 'https://www.rrbapply.gov.in',
    admitCardLink: 'https://www.rrbapply.gov.in',
    resultLink: 'https://www.rrbapply.gov.in',
    mockTestLink: '',
    logoIcon: '🚆',
    logoBg: '#f0fdf4',
    description: 'Indian Railways RRB NTPC CEN 05/2026 & CEN 06/2026 Notification out for 11,558 vacancies. Apply online through official RRB portal.',
    shortSummary: 'Railway Non-Technical Popular Categories recruitment across all 21 RRB regional boards.',
    importantDates: [
      { label: 'Notification Issued', date: '14 September 2026' },
      { label: 'Online Application Window Opens', date: '14 September 2026' },
      { label: 'Last Date to Apply Online', date: '20 October 2026', isHighlight: true },
      { label: 'CBT-1 Admit Card', date: '10 December 2026' },
      { label: 'CBT-1 Exam Window', date: '20 December 2026 - January 2027', isHighlight: true }
    ],
    applicationFee: [
      { category: 'UR / OBC / EWS Male', amount: '₹500 (₹400 refunded on CBT-1 attendance)' },
      { category: 'SC / ST / Ex-S / Female / Transgender / Minorities', amount: '₹250 (Full ₹250 refunded on CBT-1 attendance)' }
    ],
    selectionProcess: [
      '1st Stage Computer Based Test (CBT-1)',
      '2nd Stage Computer Based Test (CBT-2)',
      'Computer Based Aptitude Test (CBAT) (For Station Master) / Typing Skill Test (TST) (For Clerks)',
      'Document Verification & Medical Examination'
    ],
    examPattern: [
      {
        tier: 'CBT-1 (Common Screening Test)',
        mode: 'Online (15 languages)',
        duration: '90 Minutes',
        negativeMarking: '1/3rd mark deducted per wrong response',
        subjects: [
          { name: 'General Awareness', questions: 40, marks: 40 },
          { name: 'Mathematics', questions: 30, marks: 30 },
          { name: 'General Intelligence and Reasoning', questions: 30, marks: 30 }
        ]
      }
    ],
    salary: {
      payScale: 'Level 2 (₹19,900) to Level 6 (₹35,400)',
      inHand: '₹30,000 to ₹62,000 per month',
      allowances: 'DA, HRA, Night Duty Allowance, Running Allowance, Railway Pass'
    },
    cutOffData: {
      stage: 'CBT-1 Normalized Cut-Off (Past Zone Average)',
      year: 'Past Trend',
      categories: [
        { category: 'UR', marks: 74.5 },
        { category: 'OBC', marks: 70.2 },
        { category: 'EWS', marks: 66.8 },
        { category: 'SC', marks: 62.1 },
        { category: 'ST', marks: 56.4 }
      ]
    },
    faq: [
      { q: 'Is refund available for RRB NTPC application fee?', a: 'Yes, ₹400 for General/OBC and full ₹250 for SC/ST/Women is refunded into candidate bank account upon attending CBT-1.' },
      { q: 'Can a candidate apply to multiple RRB zones?', a: 'No, candidates can apply to only ONE RRB zone.' }
    ],
    allInformation: generate50Sections('RRB NTPC Recruitment 2026', 'Railway Recruitment Boards (RRB)', '11,558 Posts', '12th / Graduation')
  },
  {
    id: 'nda-2026',
    slug: 'nda-admit-card-2026',
    examName: 'UPSC NDA & NA (II) Examination 2026',
    organization: 'Union Public Service Commission (UPSC)',
    category: 'Defence',
    postName: 'National Defence Academy & Naval Academy Cadet',
    totalVacancy: '404 Posts',
    applicationStartDate: '2026-05-15',
    applicationLastDate: '2026-06-04',
    admitCardDate: '2026-08-10',
    examDate: '2026-09-01',
    answerKeyDate: '2026-09-12',
    resultDate: '2026-10-05',
    cutOffDate: '2026-10-05',
    status: 'EXAM_COMPLETED',
    education: ['12th'],
    ageMin: 16.5,
    ageMax: 19.5,
    gender: 'All',
    state: 'All India',
    officialWebsite: 'https://upsc.gov.in',
    officialNotification: 'https://upsc.gov.in/exams/nda-2026.pdf',
    applyLink: 'https://upsconline.nic.in',
    admitCardLink: 'https://upsconline.nic.in/eadmitcard',
    answerKeyLink: 'https://upsc.gov.in/answer-keys',
    resultLink: 'https://upsc.gov.in/written-results',
    resultPdfLink: 'https://upsc.gov.in/sites/default/files/nda-ii-result-roll.pdf',
    mockTestLink: '',
    logoIcon: '✈️',
    logoBg: '#eff6ff',
    description: 'UPSC NDA (II) 2026 Written Examination completed. Result and SSB interview schedule will be announced on upsc.gov.in.',
    shortSummary: 'Officer entry into Army, Navy and Air Force wings of the NDA and 10+2 Cadet Entry Scheme of INA.',
    importantDates: [
      { label: 'Notification Released', date: '15 May 2026' },
      { label: 'Application Closed', date: '04 June 2026' },
      { label: 'Admit Card Issued', date: '10 August 2026' },
      { label: 'Written Exam Date', date: '01 September 2026', isHighlight: true },
      { label: 'Result Expected', date: '05 October 2026', isHighlight: true }
    ],
    applicationFee: [
      { category: 'General / OBC Male', amount: '₹100' },
      { category: 'SC / ST / All Female Candidates', amount: '₹0 (Exempted)' }
    ],
    selectionProcess: [
      'Stage 1: Written Examination (Mathematics 300 marks + GAT 600 marks = 900 Marks)',
      'Stage 2: SSB Interview (5-Day Testing = 900 Marks)',
      'Medical Examination'
    ],
    examPattern: [
      {
        tier: 'Written Examination',
        mode: 'Offline Pen and Paper (OMR)',
        duration: '5 Hours total (2.5 hrs Math + 2.5 hrs GAT)',
        negativeMarking: '0.33% marks deducted per wrong answer',
        subjects: [
          { name: 'Paper-I: Mathematics', questions: 120, marks: 300 },
          { name: 'Paper-II: General Ability Test (GAT)', questions: 150, marks: 600 }
        ]
      }
    ],
    salary: {
      payScale: 'Stipend during training: ₹56,100 per month (Lieutenant level 10)',
      inHand: '₹75,000 - ₹95,000 after commissioning',
      allowances: 'Military Service Pay (MSP ₹15,500), Flying Allowance, High Altitude, CSD Canteen'
    },
    cutOffData: {
      stage: 'Written Exam Cut Off Out of 900',
      year: 'Past Trend',
      categories: [
        { category: 'All Categories (With at least 25% in each subject)', marks: 315 }
      ]
    },
    faq: [
      { q: 'Can female candidates appear for UPSC NDA exam?', a: 'Yes, female candidates are fully eligible to appear for the NDA examination for Army, Navy, and Air Force wings.' },
      { q: 'Is 12th appearing candidate eligible for NDA?', a: 'Yes, students currently studying in Class 12th can apply.' }
    ],
    allInformation: generate50Sections('UPSC NDA & NA (II) Examination 2026', 'UPSC', '404 Posts', '12th Pass / Appearing')
  }
];

// Comprehensive 50-Section Exam Information Template Generator
export function generate50Sections(examName: string, org: string, vacancy: string, edu: string): { id: number; title: string; content: string; badge?: string }[] {
  const sections = [
    { id: 1, title: '1. Short Summary', content: `${examName} is officially conducted by ${org} for recruitment across ${vacancy}. This comprehensive guide covers eligibility criteria, exam patterns, step-by-step application guidelines, syllabus, and career prospects.` },
    { id: 2, title: '2. Organization Details', content: `Conducted by ${org}, an autonomous constitutional recruitment body of the Government of India dedicated to transparent, merit-based selection.` },
    { id: 3, title: '3. Post Name', content: `Designated Central and State government executive and operational posts under official notification standards.` },
    { id: 4, title: '4. Total Vacancy', content: `Total confirmed vacancies: ${vacancy}. Post-wise and category-wise distributions are outlined below.` },
    { id: 5, title: '5. Post-wise Vacancy', content: `Vacancies are distributed among various technical, non-technical, administrative, and ministerial cadre departments.` },
    { id: 6, title: '6. State/Zone/Category-wise Vacancy', content: `Reservation quotas for SC (15%), ST (7.5%), OBC (27%), EWS (10%), and PwD/Ex-Servicemen quotas are strictly enforced per DoPT guidelines.` },
    { id: 7, title: '7. Important Dates', content: `Candidates are advised to note application start, closing, correction, exam, and result release timelines.` },
    { id: 8, title: '8. Application Fee', content: `Payment mode via Net Banking, UPI, Visa/MasterCard, or SBI Challan. Concession/exemption for reserved categories and women as per norms.` },
    { id: 9, title: '9. Age Limit', content: `Crucial age calculation date is as specified in the recruitment advertisement. Minimum and maximum age ranges strictly adhere to service rules.` },
    { id: 10, title: '10. Age Relaxation', content: `Upper age relaxation: OBC (Non-Creamy Layer) 3 years, SC/ST 5 years, PwBD 10 to 15 years, Ex-Servicemen as per military service rules.` },
    { id: 11, title: '11. Educational Qualification', content: `Required benchmark qualification: ${edu} from a recognized university/board in India before the crucial cutoff date.` },
    { id: 12, title: '12. Experience / Other Eligibility', content: `Freshers can apply for the majority of entry-level positions unless specific technical experience is mandated in post annexure.` },
    { id: 13, title: '13. Nationality / Domicile', content: `Must be a Citizen of India, subject of Nepal/Bhutan, or Tibetan refugee who came to India before January 1, 1962.` },
    { id: 14, title: '14. Physical / Medical Eligibility', content: `Candidates for uniform/field posts must satisfy height, chest expansion, visual acuity (6/6, 6/9), and color vision requirements.` },
    { id: 15, title: '15. How to Apply Online', content: `Step 1: Complete One Time Registration (OTR). Step 2: Fill application form with personal and educational details. Step 3: Upload live photo & signature. Step 4: Pay fee & download confirmation receipt.` },
    { id: 16, title: '16. Required Documents', content: `Aadhaar Card, 10th Board Certificate (Date of Birth proof), 12th / Degree marksheet, Caste Certificate, Domicile certificate.` },
    { id: 17, title: '17. Photo & Signature Requirements', content: `Live web camera capture / Recent passport photo with plain light background. Scanned signature 10 to 20 KB in JPG/JPEG format.` },
    { id: 18, title: '18. Selection Process', content: `Multi-stage selection comprising Computer-Based Test (CBT), Skill / Physical efficiency test where applicable, followed by Document Verification.` },
    { id: 19, title: '19. Exam Pattern', content: `Objective Multiple Choice Questions covering Reasoning, Quantitative Aptitude, General Awareness, and Language Comprehension.` },
    { id: 20, title: '20. Detailed Syllabus', content: `Comprehensive topic-wise coverage strictly aligned with official guidelines published in the recruitment brochure.` },
    { id: 21, title: '21. Subject-wise Syllabus', content: `General Intelligence, Numerical Ability, Current Affairs, Science, History, Polity, Geography, and Language Grammar.` },
    { id: 22, title: '22. Prelims / Tier-1 Exam', content: `Screening test conducted in multiple shifts across computerized centers nationwide with formula-based normalization.` },
    { id: 23, title: '23. Mains / Tier-2 Exam', content: `In-depth evaluation assessing conceptual understanding, higher analytical capability, and post-specific knowledge.` },
    { id: 24, title: '24. Skill / Typing / Physical Test', content: `Qualifying data entry speed / typing speed (30-35 wpm) or physical running/jumping standards for uniformed cadres.` },
    { id: 25, title: '25. Interview Details', content: `Group B non-gazetted and Group C posts do not have interviews per central government policy. Group A positions may involve personality assessments.` },
    { id: 26, title: '26. Negative Marking & Exam Duration', content: `Specific fractional penalty per incorrect attempt. Duration ranges from 60 to 120 minutes with compensatory time for PwBD scribes.` },
    { id: 27, title: '27. Exam Language & Mode', content: `Conducted online in Computer Based Test (CBT) format in 13 regional languages plus Hindi and English.` },
    { id: 28, title: '28. Salary / Pay Scale', content: `Governed by 7th Central Pay Commission with standard Basic Pay, Dearness Allowance (DA), and House Rent Allowance (HRA).` },
    { id: 29, title: '29. In-Hand Salary', content: `Monthly net credited salary factoring in provident fund (NPS) deductions, professional tax, and city tier categorization (X, Y, Z).` },
    { id: 30, title: '30. Allowances & Benefits', content: `Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance (TA), CGHS Medical Cover, Children Education Allowance (CEA).` },
    { id: 31, title: '31. Job Profile & Duties', content: `Responsible desk, field, or investigative functions supporting government administration, policy execution, and public service.` },
    { id: 32, title: '32. Posting / Job Location', content: `All India service liability with initial posting assigned based on merit rank, category vacancy, and candidate preference.` },
    { id: 33, title: '33. Transfer Policy', content: `Periodic rotational transfer policy within zone, inter-commissioner transfer guidelines, and spouse ground provisions.` },
    { id: 34, title: '34. Promotion & Career Growth', content: `Structured time-scale promotion and departmental examinations opening avenues to senior gazetted executive ranks.` },
    { id: 35, title: '35. Probation / Training', content: `Mandatory initial probation period of 2 years including foundational administrative and departmental training.` },
    { id: 36, title: '36. Previous Year Cut Off', content: `Historic category-wise cutoff marks provide a clear reference for target score planning.` },
    { id: 37, title: '37. Previous Year Question Papers', content: `Practicing official shift-wise question papers aids in time management and pattern comprehension.` },
    { id: 38, title: '38. Preparation Strategy', content: `Balanced daily timetable allocating 2 hours to concepts, 2 hours to revision, and regular timed mock tests.` },
    { id: 39, title: '39. Best Books & Study Material', content: `Standard NCERT textbooks, quantitative aptitude guides, standard reasoning manuals, and official previous-year digests.` },
    { id: 40, title: '40. Mock Tests / Practice Sets', content: `Attempting simulated online CBT mock tests builds speed and precision while reducing exam day anxiety.` },
    { id: 41, title: '41. Admit Card Details', content: `Released 7-10 days prior to the examination date containing venue, reporting time, roll number, and essential instructions.` },
    { id: 42, title: '42. Exam City / Centre Intimation', content: `City intimation slips are published 10-14 days prior to enable candidates to plan travel and accommodation.` },
    { id: 43, title: '43. Answer Key / Response Sheet', content: `Provisional answer keys and candidate response sheets are published within a week after exam completion with an objection window.` },
    { id: 44, title: '44. Result Publication', content: `Declared on the official portal along with normalized cutoff lists and merit write-ups.` },
    { id: 45, title: '45. Merit List / Final Selection', content: `Prepared strictly based on marks secured in competitive stages subject to qualifying verification.` },
    { id: 46, title: '46. Document Verification (DV)', content: `Verification of original certificates, degrees, caste authenticity, and non-creamy layer declarations.` },
    { id: 47, title: '47. Medical Test & Joining', content: `Medical examination at designated district or central civil hospitals before formal appointment letter issuance.` },
    { id: 48, title: '48. Official Notification & Important Links', content: `Always consult the official recruitment portal for authentic notifications, corrigenda, and updates.` },
    { id: 49, title: '49. Latest Updates', content: `Live notices, exam schedule changes, and application extension circulars are updated in real-time.` },
    { id: 50, title: '50. Frequently Asked Questions (FAQ)', content: `Curated solutions for candidate inquiries regarding eligibility, corrections, age limits, and examination guidelines.` }
  ];
  return sections;
}

/**
 * Generates the official 50-section data for SSC CHSL 10+2 Recruitment 2026
 * strictly aligned with the official SSC notification F. No. HQ-C1102/5/2026-C-1.
 */
export function generateSscChsl50Sections(): ExamInfoSection[] {
  return [
    { id: 1, title: '1. Recruitment Name', content: 'SSC CHSL 10+2 Recruitment 2026 (Combined Higher Secondary Level Examination 2026) conducted by Staff Selection Commission.' },
    { id: 2, title: '2. Organization', content: 'Staff Selection Commission (SSC), Department of Personnel and Training (DoPT), Government of India.' },
    { id: 3, title: '3. Examination Name', content: 'Combined Higher Secondary (10+2) Level Examination, 2026 (SSC CHSL 2026).' },
    { id: 4, title: '4. Advertisement / Notification Details', content: 'Official Notice published on 07-09-2026 under File Number: F. No. HQ-C1102/5/2026-C-1 on the official commission portal https://ssc.gov.in (88 Pages).' },
    { id: 5, title: '5. Total Vacancies', content: 'There are approximately 2536 tentative vacancies across Ministries, Departments, and Constitutional Bodies of the Government of India.' },
    { id: 6, title: '6. Post Names', content: 'Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO), and Data Entry Operator Grade "A".' },
    { id: 7, title: '7. Post-Wise Vacancies', content: 'Approx 2536 tentative vacancies distributed across LDC/JSA, DEO, and DEO Grade A. Detailed post-wise and category-wise vacancy matrices are uploaded on ssc.gov.in > Candidate Corner > Tentative Vacancy in due course.' },
    { id: 8, title: '8. Important Dates', content: 'Online Application: 07-09-2026 to 07-10-2026 (23:00 Hrs); Online Fee Payment Last Date: 08-10-2026 (23:00 Hrs); Correction Window: 14-10-2026 to 16-10-2026 (23:00 Hrs); Tier-I CBE: To be notified later; Tier-II CBE: To be notified later.' },
    { id: 9, title: '9. Application Start Date', content: '07 September 2026 on the official candidate portal https://ssc.gov.in.' },
    { id: 10, title: '10. Application Last Date', content: '07 October 2026 up to 23:00 Hours IST. Candidates are advised to submit well before the deadline to avoid server overload.' },
    { id: 11, title: '11. Fee Payment Last Date', content: '08 October 2026 up to 23:00 Hours IST through online payment gateways (BHIM UPI, Net Banking, Debit Cards).' },
    { id: 12, title: '12. Correction Dates & Charges', content: 'Correction window opens from 14-10-2026 to 16-10-2026 (23:00 Hours). Fee is ₹200 for the first modification and ₹500 for the second modification.' },
    { id: 13, title: '13. Exam Dates', content: 'Schedule of Tier-I (Computer Based Examination) and Tier-II (CBE) will be notified later by the Commission on ssc.gov.in.' },
    { id: 14, title: '14. Admit Card Information', content: 'Tier-I e-Admit Cards will be available for download 2 to 3 days prior to the examination date. City intimation slips will be published 10 days before the exam on regional SSC websites.' },
    { id: 15, title: '15. Result Information', content: 'Tier-I result will shortlist candidates for Tier-II based on normalized scores. Final result and merit allocation are prepared based on aggregate marks in Section-I & Section-II of Tier-II Examination.' },
    { id: 16, title: '16. Answer Key Information', content: 'Tentative Answer Keys and candidate response sheets will be placed on ssc.gov.in after the computer based test. Representations can be submitted online at ₹50 per question challenged.' },
    { id: 17, title: '17. Age Limit', content: '18 to 27 years as on the crucial cut-off date 01 August 2026 (Candidates born not before 02-08-1999 and not later than 01-08-2008).' },
    { id: 18, title: '18. Age Relaxation', content: 'Upper age relaxation: SC/ST: 5 years (up to 32), OBC: 3 years (up to 30), PwBD (UR): 10 years, PwBD (OBC): 13 years, PwBD (SC/ST): 15 years, Ex-Servicemen: 3 years after deduction of military service, Central Govt Civilian Employees: up to 40/45 years.' },
    { id: 19, title: '19. Educational Qualification', content: 'Must have passed 12th Standard or equivalent examination from a recognized Board or University as on the crucial cut-off date 07 October 2026. Appearing candidates are eligible provided qualification is acquired on/before 07-10-2026.' },
    { id: 20, title: '20. Post-Wise Qualification', content: 'For DEO / DEO Grade A in Ministry of Consumer Affairs, Food & Public Distribution, SSC, and Ministry of Culture: 12th Standard pass in Science stream with Mathematics. For LDC/JSA and DEOs in all other departments: 12th pass in any stream.' },
    { id: 21, title: '21. Nationality / Citizenship', content: 'Candidate must be a Citizen of India, a subject of Nepal/Bhutan, a Tibetan refugee who came to India before 01-01-1962, or a Person of Indian Origin with an eligibility certificate issued by the Government of India.' },
    { id: 22, title: '22. Application Fee', content: '₹100/- (Rupees one hundred only). Women candidates of all categories and candidates belonging to SC, ST, PwBD, and ESM eligible for reservation are completely exempted from payment of fee (Nil).' },
    { id: 23, title: '23. Payment Methods', content: 'Fee can be paid online through BHIM UPI, Net Banking, or Visa, MasterCard, Maestro, RuPay Debit cards up to 08-10-2026 (23:00 Hours).' },
    { id: 24, title: '24. Selection Process', content: 'Multi-stage selection: Stage 1: Tier-I CBE (Objective MCQ qualifying/screening); Stage 2: Tier-II CBE (Session-I CBT + Session-II Skill/Typing Test); Stage 3: Online Post Preference; Stage 4: Document Verification (DV) by User Depts; Stage 5: Pre-appointment Medical Examination.' },
    { id: 25, title: '25. Tier-I Examination', content: '100 Multiple Choice Questions, 200 Total Marks, 60 minutes duration (80 minutes for scribes). Sectional timer of 15 minutes for each subject. Negative marking of 0.50 marks per wrong answer.' },
    { id: 26, title: '26. Tier-II Examination', content: 'Conducted in two sessions: Session-I (2 Hours 15 Minutes) covering Section-I (Math + Reasoning), Section-II (English + GA), and Section-III (Computer Knowledge Test). Session-II: Section-IV (Skill Test / Typing Test).' },
    { id: 27, title: '27. Exam Pattern', content: 'Tier-I tests English (25 Q), GI (25 Q), Quant (25 Q), GA (25 Q). Tier-II Session-I tests Math (30 Q, 90 M), Reasoning (30 Q, 90 M), English (40 Q, 120 M), GA (20 Q, 60 M), and Computer Knowledge (15 Q, 45 M).' },
    { id: 28, title: '28. Subject-Wise Questions', content: 'Tier-I: English (25), Reasoning (25), Math (25), GA (25). Tier-II: Math (30), Reasoning (30), English (40), GA (20), Computer Knowledge (15).' },
    { id: 29, title: '29. Marks', content: 'Tier-I: 50 marks per subject (200 marks total). Tier-II: 3 marks per question in Sections I, II, III. Merit list is prepared strictly based on aggregate marks in Section-I & Section-II (Total 360 Marks).' },
    { id: 30, title: '30. Duration', content: 'Tier-I: 60 minutes (15 mins sectional timer each part). Tier-II: Session-I is 2 Hours 15 Minutes (Sec-I: 1 Hr, Sec-II: 1 Hr, Sec-III: 15 Mins). Session-II (Skill/Typing): 10 to 15 minutes.' },
    { id: 31, title: '31. Negative Marking', content: 'Tier-I: 0.50 marks deducted per incorrect attempt. Tier-II: 1 mark deducted per incorrect answer in Section-I, Section-II, and Section-III.' },
    { id: 32, title: '32. Tier-II Details', content: 'Candidates must appear and qualify in all sections. Computer module (45 marks) and Skill/Typing Test are qualifying in nature but mandatory.' },
    { id: 33, title: '33. Skill Test / Typing Test', content: 'DEO (Science/Math): 15,000 Key Depressions Per Hour (KDPH); other DEO: 8,000 KDPH. LDC/JSA: English Typing @ 35 wpm (10,500 KDPH) or Hindi Typing @ 30 wpm in Mangal font (9,000 KDPH) for 10 minutes.' },
    { id: 34, title: '34. Post Preference', content: 'Candidates must submit their preferences for posts and user departments online on ssc.gov.in prior to the declaration of the final result. Post preference cannot be revised once submitted.' },
    { id: 35, title: '35. Salary / Pay Level', content: 'LDC / JSA: Pay Level-2 (₹19,900 - ₹63,200). DEO: Pay Level-4 (₹25,500 - ₹81,100) & Level-5 (₹29,200 - ₹92,300). DEO Grade "A": Pay Level-4 (₹25,500 - ₹81,100).' },
    { id: 36, title: '36. Pay Scale', content: 'Governed by 7th Central Pay Commission with basic pay plus DA (50%+), HRA (10% to 30%), Transport Allowance (TA), and CGHS medical facilities.' },
    { id: 37, title: '37. Job Responsibilities', content: 'Clerical operations, file management, dispatch, correspondence drafting, data entry, digital record-keeping, and administrative assistance in Central Ministries.' },
    { id: 38, title: '38. Document Requirements', content: '10th Standard Certificate (DOB proof), 12th Standard Passing Certificate & Marksheet, Category Certificate (SC/ST/OBC-NCL/EWS), PwBD Certificate, Valid Photo ID (Aadhaar/Voter ID/PAN/DL).' },
    { id: 39, title: '39. How to Apply', content: 'Exclusively online through the official portal https://ssc.gov.in. Complete One-Time Registration (OTR), login, fill application details, capture live photograph, upload signature, and pay fee.' },
    { id: 40, title: '40. Registration Process', content: 'Visit https://ssc.gov.in > Candidate Portal > One-Time Registration (OTR). Enter Aadhaar number or other photo ID, personal details, contact info, and generate Registration Number and Password.' },
    { id: 41, title: '41. Important Instructions', content: 'Live photo capture is mandatory via webcam or the official "my SSC" mobile app. No pre-clicked photo upload is accepted. Must have plain light background, no cap/mask/spectacles. Signature must be 10-20 KB in JPG format (6.0 x 2.0 cm).' },
    { id: 42, title: '42. Official Notification Link', content: 'Official PDF available at: https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2026.pdf' },
    { id: 43, title: '43. Registration Link', content: 'Candidate OTR link: https://ssc.gov.in/candidate-portal/one-time-registration/home-page' },
    { id: 44, title: '44. Official SSC Website', content: 'Official Commission portal: https://ssc.gov.in/' },
    { id: 45, title: '45. Other Official Links', content: 'Candidate Login: https://ssc.gov.in/login | Official Toll-Free Helpline: 18003093063.' },
    { id: 46, title: '46. Frequently Asked Questions (FAQ)', content: 'Official answers addressing application dates (07 Sept - 07 Oct 2026), 2536 tentative vacancies, age 18-27 as on 01-08-2026, 12th passing conditions, fee exemptions, and live photo capture rules.' },
    { id: 47, title: '47. Important Points', content: 'Strict deadline adherence (07-10-2026 23:00 Hrs), correction window (14 to 16 October 2026), live photo validation, and typing speed qualifying requirements.' },
    { id: 48, title: '48. Selection Stages', content: 'Stage 1: Tier-I CBE -> Stage 2: Tier-II CBT & Skill/Typing Test -> Stage 3: Online Post Preference -> Stage 4: Document Verification by User Depts -> Stage 5: Medical Examination.' },
    { id: 49, title: '49. Examination Scheme', content: 'Conducted in Computer Based Test (CBT) format in English, Hindi, and 13 regional languages (Assamese, Bengali, Gujarati, Kannada, Konkani, Malayalam, Manipuri, Marathi, Odiya, Punjabi, Tamil, Telugu, Urdu).' },
    { id: 50, title: '50. Any Other Relevant Information', content: 'For LDC in Border Roads Organization (BRO), only male candidates are eligible with a mandatory Physical Efficiency Test (1-Mile Run in 10 minutes) and specific physical standard requirements (Western Himalayan height 158cm, etc.) at GREF Centre, Pune.' }
  ];
}

/**
 * Normalizes an ExamRecord to ensure all dates, dynamic lifecycles,
 * accordions, and default fields are fully populated without requiring
 * repetitive boilerplate when adding new exams to central data.
 */
export function normalizeExamRecord(raw: ExamRecord): ExamRecord {
  const today = '2026-09-09';

  // 1. Automatically calculate lifecycle status from official dates if applicable
  let autoStatus = raw.status;
  if (raw.resultDate && raw.resultDate <= today) {
    autoStatus = 'RESULT_RELEASED';
  } else if (raw.answerKeyDate && raw.answerKeyDate <= today) {
    autoStatus = 'ANSWER_KEY_RELEASED';
  } else if (raw.admitCardDate && raw.admitCardDate <= today) {
    autoStatus = 'ADMIT_CARD_RELEASED';
  } else if (raw.cityIntimationDate && raw.cityIntimationDate <= today) {
    autoStatus = 'EXAM_CITY_OUT' as any;
  } else if (raw.applicationLastDate && raw.applicationLastDate < today) {
    if (!raw.status || raw.status === 'APPLICATION_OPEN') {
      autoStatus = 'APPLICATION_CLOSED';
    }
  } else if (
    raw.applicationStartDate &&
    raw.applicationStartDate <= today &&
    raw.applicationLastDate &&
    raw.applicationLastDate >= today
  ) {
    autoStatus = 'APPLICATION_OPEN';
  }

  if (!autoStatus) {
    autoStatus = 'APPLICATION_OPEN';
  }

  // 2. Ensure comprehensive 50-section information exists
  const allInformation =
    raw.allInformation && raw.allInformation.length > 0
      ? raw.allInformation
      : generate50Sections(raw.examName, raw.organization, raw.totalVacancy, (raw.education || []).join(', '));

  // 3. Ensure important dates are organized
  const importantDates =
    raw.importantDates && raw.importantDates.length > 0
      ? raw.importantDates
      : [
          ...(raw.applicationStartDate
            ? [{ label: 'Online Application Start Date', date: raw.applicationStartDate }]
            : []),
          ...(raw.applicationLastDate
            ? [{ label: 'Last Date to Submit Online Form', date: raw.applicationLastDate, isHighlight: true }]
            : []),
          ...(raw.admitCardDate
            ? [{ label: 'Admit Card Release Date', date: raw.admitCardDate }]
            : []),
          ...(raw.examDate
            ? [{ label: 'Official Examination Date', date: raw.examDate, isHighlight: true }]
            : []),
          ...(raw.answerKeyDate
            ? [{ label: 'Provisional Answer Key Release', date: raw.answerKeyDate }]
            : []),
          ...(raw.resultDate
            ? [{ label: 'Result Declaration Date', date: raw.resultDate }]
            : [])
        ];

  // 4. Ensure salary details exist
  const salary = raw.salary || {
    payScale: 'Level as per 7th Central Pay Commission',
    inHand: '₹35,000 - ₹55,000 / month (approx)',
    allowances: 'DA, HRA, TA and Medical Facilities per Central/State norms'
  };

  // 5. Ensure exam pattern exists
  const examPattern =
    raw.examPattern && raw.examPattern.length > 0
      ? raw.examPattern
      : [
          {
            tier: 'Tier-I',
            mode: 'Computer Based Test (CBT)',
            duration: '60 Minutes',
            negativeMarking: '0.50 Marks per incorrect response',
            subjects: [
              { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
              { name: 'General Awareness & Current Events', questions: 25, marks: 50 },
              { name: 'Quantitative Aptitude / Math', questions: 25, marks: 50 },
              { name: 'English / Hindi Language', questions: 25, marks: 50 }
            ]
          }
        ];

  // 6. Ensure application fee details exist
  const applicationFee =
    raw.applicationFee && raw.applicationFee.length > 0
      ? raw.applicationFee
      : [
          { category: 'General / OBC / EWS (Male)', amount: '₹100' },
          { category: 'SC / ST / PwD / Women (All Categories)', amount: 'Nil (Exempted)' }
        ];

  // 7. Ensure selection process exists
  const selectionProcess =
    raw.selectionProcess && raw.selectionProcess.length > 0
      ? raw.selectionProcess
      : [
          'Computer Based Online Test (CBT)',
          'Skill Test / Physical Test (where applicable)',
          'Document Verification (DV)',
          'Pre-joining Medical Examination'
        ];

  // 8. Ensure FAQ exists
  const faq =
    raw.faq && raw.faq.length > 0
      ? raw.faq
      : [
          {
            q: `What is the age limit for ${raw.examName}?`,
            a: `Candidates must be between ${raw.ageMin} and ${raw.ageMax} years. Applicable relaxations exist for reserved categories.`
          },
          {
            q: `What is the minimum qualification required?`,
            a: `Candidate must possess ${(raw.education || []).join(' or ')} from a recognized institution.`
          },
          {
            q: `How can I apply for this vacancy?`,
            a: `Eligible applicants must submit their online application before ${raw.applicationLastDate} through the official authority portal.`
          }
        ];

  return {
    ...raw,
    status: autoStatus,
    allInformation,
    importantDates,
    salary,
    examPattern,
    applicationFee,
    selectionProcess,
    faq,
    officialWebsite: raw.officialWebsite || 'https://www.india.gov.in',
    logoIcon: raw.logoIcon || '📋',
    logoBg: raw.logoBg || '#eff6ff',
    description:
      raw.description ||
      `${raw.examName} Notification officially released by ${raw.organization} for ${raw.totalVacancy}. Check complete eligibility, dates, and application details.`,
    shortSummary:
      raw.shortSummary ||
      `${raw.examName} recruitment drive conducted by ${raw.organization} inviting applications across ${raw.totalVacancy}.`
  };
}

// Master central exams database – single source of truth for the entire website
export const EXAMS_DATABASE: ExamRecord[] = [...BASE_EXAMS, ...ADDITIONAL_EXAMS].map(normalizeExamRecord);

