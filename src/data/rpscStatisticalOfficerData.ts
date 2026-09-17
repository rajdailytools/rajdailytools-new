import { ExamRecord, ExamInfoSection } from '../types/exam';

export const RPSC_STATISTICAL_OFFICER_2026_EXAM: ExamRecord = {
  id: 'rpsc-statistical-officer-2026',
  slug: 'rpsc-statistical-officer-answer-key-2026',
  examName: 'RPSC Statistical Officer Answer Key 2026',
  shortName: 'RPSC SO Answer Key',
  organization: 'Rajasthan Public Service Commission (RPSC) / Statistics Department, GoR',
  category: 'RPSC',
  postName: 'Statistical Officer (सांख्यिकी अधिकारी) – Planning / Statistics Department',
  totalVacancy: '113',
  logoIcon: '📊',
  logoBg: '#fef3c7',
  status: 'ANSWER_KEY_RELEASED',
  state: 'Rajasthan',
  gender: 'All',
  ageMin: 21,
  ageMax: 40,
  ageRelaxationInfo: 'Male (SC/ST/OBC/MBC/EWS of Rajasthan): 5 Years | Female (SC/ST/OBC/MBC/EWS): 10 Years | General Female: 5 Years | Widows & Divorcee: No Upper Age Limit | PwBD: 5 Years.',
  categoryEligibility: {
    'General (UR)': '21 to 40 years as on 01.01.2026 (Born between 02.01.1986 and 01.01.2005)',
    'SC / ST / OBC / MBC / EWS (Male of Rajasthan)': '21 to 45 years (5 years upper age relaxation)',
    'SC / ST / OBC / MBC / EWS (Female of Rajasthan)': '21 to 50 years (10 years upper age relaxation)',
    'General Category Female': '21 to 45 years (5 years upper age relaxation)',
    'Widow & Divorced Women': 'No upper age limit (Subject to retirement age of 60 years)',
    'Persons with Benchmark Disabilities (PwBD)': '5 years relaxation above category upper limit'
  },
  education: ['Post Graduation', 'Other'],
  minimumQualificationLevel: "Second Class Master's Degree in Economics, Statistics, Mathematics with Statistics, Commerce with Statistics, or M.Sc (Agri) Statistics + RS-CIT + 1 Year Experience",
  acceptedQualificationLevels: [
    "At least Second Class Master's Degree in Economics",
    "At least Second Class Master's Degree in Statistics",
    "At least Second Class Master's Degree in Mathematics with paper in Statistics",
    "At least Second Class Master's Degree in Commerce with Statistics",
    "At least Second Class M.Sc (Agriculture) Statistics",
    'RS-CIT Certificate conducted by RKCL (VMOU Kota) or equivalent DoIT&C certified qualification'
  ],
  applicationStartDate: '2025-10-28',
  applicationLastDate: '2025-11-26',
  admitCardDate: '2026-08-24',
  cityIntimationDate: '2026-08-20',
  cityIntimationStatus: 'Released',
  examDate: '2026-08-30',
  answerKeyDate: '2026-09-07',
  resultDate: undefined, // Strictly "Not Released / To Be Updated"
  cutOffDate: undefined,
  admitCardLink: 'https://sso.rajasthan.gov.in/signin',
  answerKeyLink: 'https://rpsc.rajasthan.gov.in/Static/AnswerKeys/FE782986-A958-4799-BE59-A0868F5653FB.pdf',
  responseSheetLink: 'https://sso.rajasthan.gov.in/signin',
  officialNotification: 'https://rpsc.rajasthan.gov.in/Static/RecruitmentAdvertisements/BE73BA4C8E8042CAB7D57CD3660C025E.pdf',
  officialWebsite: 'https://rpsc.rajasthan.gov.in/news',
  applyLink: 'https://sso.rajasthan.gov.in/signin',
  salary: {
    payScale: 'Pay Matrix Level L-12 (Grade Pay ₹4,800/-)',
    inHand: '₹48,000 – ₹58,000 Approx. after probation (Fixed remuneration during probation period as per GoR rules)',
    allowances: 'Dearness Allowance (DA), House Rent Allowance (HRA), City Compensatory Allowance, Rajasthan Government Health Scheme (RGHS), Defined Pension/GPF Rules'
  },
  importantDates: [
    { label: 'Official Detailed Notification Released (Advt 11/2025-26)', date: '14 October 2025' },
    { label: 'Online Application Start Date (RPSC SSO Portal)', date: '28 October 2025' },
    { label: 'Online Application Last Date', date: '26 November 2025 (12:00 Midnight)' },
    { label: 'Application Correction Window (Fee ₹500/-)', date: '27 November 2025 to 06 December 2025' },
    { label: 'Exam District / City Information Press Note', date: 'Released (Check Official Notice)', isHighlight: true },
    { label: 'RPSC SO Admit Card / Hall Ticket on SSO Portal', date: 'Available on SSO Portal', isHighlight: true },
    { label: 'Written Examination Date (Offline OMR)', date: '30 August 2026 (11:00 AM to 01:30 PM)', isHighlight: true },
    { label: 'Official Model Answer Key Released (Part A & B)', date: '07 September 2026 (Available Now)', isHighlight: true },
    { label: 'Official Answer Key Press Note Released', date: '07 September 2026', isHighlight: true },
    { label: 'Online Objection Window on SSO Portal (₹100/Question)', date: 'Active as per Press Note Schedule', isHighlight: true },
    { label: 'Final Answer Key & Scrutiny Committee Report', date: 'Not Released / To Be Updated' },
    { label: 'Written Exam Result & Merit List for DV', date: 'Not Released / To Be Updated' },
    { label: 'Document Verification (Eligibility Checking)', date: 'To Be Announced' }
  ],
  applicationFee: [
    { category: 'General (UR) / Creamy Layer OBC & MBC Candidates', amount: '₹600/- (One Time Registration OTR)' },
    { category: 'SC / ST / OBC-NCL / MBC-NCL / EWS / Sahariya of Rajasthan', amount: '₹400/- (One Time Registration OTR)' },
    { category: 'Persons with Benchmark Disabilities (Divyangjan)', amount: '₹400/- (One Time Registration OTR)' }
  ],
  vacancies: [
    { category: 'General / Unreserved (UR)', postCount: 30 },
    { category: 'Scheduled Caste (SC)', postCount: 12 },
    { category: 'Scheduled Tribe (ST)', postCount: 9 },
    { category: 'Other Backward Classes (OBC-NCL)', postCount: 16 },
    { category: 'More Backward Classes (MBC-NCL)', postCount: 3 },
    { category: 'Economically Weaker Sections (EWS)', postCount: 7 }
  ],
  selectionProcess: [
    'Stage 1: Written Competitive Examination (150 MCQs, 150 Marks, 2 Hours 30 Minutes, 1/3rd Negative Marking)',
    'Stage 2: Model Answer Key Publication & Online Objection Redressal (07 September 2026)',
    'Stage 3: Evaluation of Objections by Subject Expert Committee & Final Answer Key Publication',
    'Stage 4: Written Examination Result Declaration & Preparation of Category-wise Merit List',
    'Stage 5: Document Verification (DV) & Scrutiny of Academic Degrees, RS-CIT & Experience Certificates',
    'Stage 6: Final Recommendation to Statistics Department, Government of Rajasthan for Appointment'
  ],
  examPattern: [
    {
      stageName: 'Written Competitive Examination (Offline OMR Sheet)',
      mode: 'Offline OMR Based Multiple Choice Questions (5-Option Format)',
      duration: '2 Hours 30 Minutes (150 Minutes) + 10 Minutes extra for darkening 5th circle',
      negativeMarking: '1/3rd mark deducted for each wrong answer or unattempted question without darkening 5th circle',
      subjects: [
        { name: 'Part A: General Knowledge of Rajasthan', questions: 40, marks: 40 },
        { name: 'Part B: Concerned Subject (Economics, Statistics, Mathematics, Commerce, Agriculture Statistics)', questions: 110, marks: 110 }
      ]
    }
  ],
  description: 'Rajasthan Public Service Commission (RPSC) has officially published the Model Answer Key for the Statistical Officer (सांख्यिकी अधिकारी) Competitive Examination 2026 (Advt No. 11/Exam/S.O./2025-26). The written examination was successfully conducted on 30 August 2026 across designated centers. Candidates can download the official Model Answer Key PDF, view the official press note, check question-wise keys for Part-A (General Knowledge of Rajasthan) and Part-B (Concerned Subject), calculate tentative marks, and submit online objections through SSO Rajasthan portal.',
  shortSummary: 'RPSC Statistical Officer (Advt 11/2025-26) Model Answer Key officially released on 07 September 2026. Download official Master Key PDF, check exam scheme (150 marks, 1/3 negative), calculate marks, and submit online challenges.',
  faq: [
    {
      q: 'When was the RPSC Statistical Officer Answer Key 2026 officially released?',
      a: 'The official Model Answer Key for RPSC Statistical Officer (Advt No. 11/2025-26) was released on 07 September 2026 on the official RPSC portal (rpsc.rajasthan.gov.in).'
    },
    {
      q: 'What is the direct link to download RPSC Statistical Officer 2026 Model Answer Key PDF?',
      a: 'Candidates can directly download the official Model Answer Key PDF from: https://rpsc.rajasthan.gov.in/Static/AnswerKeys/FE782986-A958-4799-BE59-A0868F5653FB.pdf.'
    },
    {
      q: 'What was the date and time of the RPSC Statistical Officer Written Examination?',
      a: 'The written examination was conducted on 30 August 2026 in a single shift from 11:00 AM to 01:30 PM (2 Hours & 30 Minutes duration).'
    },
    {
      q: 'What is the marking scheme and negative marking for RPSC Statistical Officer Exam?',
      a: 'The exam contains 150 questions for 150 marks. Each correct answer awards 1 mark. For each wrong answer, 1/3rd (one-third) of the mark is deducted. Darkening multiple options also counts as a wrong answer.'
    },
    {
      q: 'What is the 5th option rule in the RPSC Statistical Officer OMR Sheet?',
      a: 'Each question has five options (1, 2, 3, 4, 5). If a candidate does not wish to attempt a question, they must darken circle "5". If none of the five circles is darkened, 1/3rd mark is deducted. Candidates who fail to darken any circle in more than 10% of questions are disqualified.'
    },
    {
      q: 'How many marks and questions are assigned to Part A and Part B?',
      a: 'Part A (General Knowledge of Rajasthan) carries 40 Questions for 40 Marks. Part B (Concerned Subject) carries 110 Questions for 110 Marks. Total: 150 Questions, 150 Marks.'
    },
    {
      q: 'What is the fee for submitting an online objection against the RPSC Statistical Officer Answer Key?',
      a: 'Candidates must pay a non-refundable fee of ₹100/- per question challenged through the SSO Rajasthan portal (Recruitment Portal → Question Objection) using Net Banking, Debit/Credit Card, or UPI.'
    },
    {
      q: 'How many total vacancies are announced for RPSC Statistical Officer under Advt 11/2025-26?',
      a: 'A total of 113 vacancies are notified in the Statistics Department (आर्थिक एवं सांख्यिकी विभाग), Government of Rajasthan.'
    },
    {
      q: 'What is the educational qualification required for RPSC Statistical Officer?',
      a: "At least Second Class Master's Degree in Economics, Statistics, Mathematics with Statistics, Commerce with Statistics, or M.Sc (Agriculture) Statistics from a recognized University, along with an RS-CIT computer certificate and 1 year experience of handling official statistics (with specific exemptions for first-class holders, Ph.D, and SC/ST)."
    },
    {
      q: 'When will the RPSC Statistical Officer Final Answer Key and Result be declared?',
      a: 'The official Final Answer Key and Result dates are currently Not Released / To Be Updated. They will be published on rpsc.rajasthan.gov.in after the scrutiny of candidate objections.'
    }
  ],
  allInformation: []
};

export function generateRpscSo50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Overview of RPSC Statistical Officer Recruitment 2026',
      content: 'Rajasthan Public Service Commission (RPSC), Ajmer has published the official Model Answer Key for the Statistical Officer (सांख्यिकी अधिकारी) Examination 2026 under Advertisement No. 11/Exam/S.O.(Statistics Deptt.)/RPSC/EP-I/2025-26. This recruitment is being conducted to fill 113 vacancies in the Statistics Department (आर्थिक एवं सांख्यिकी विभाग), Government of Rajasthan under the Rajasthan Economic and Statistical Service Rules, 1958.'
    },
    {
      id: 2,
      title: '2. Official Answer Key Release Status (07 September 2026)',
      content: 'The Model Answer Key for the Statistical Officer Competitive Exam 2026 was officially released on 07 September 2026. The key provides official answers for all 150 questions encompassing Part-A (General Knowledge of Rajasthan) and Part-B (Concerned Subject). Direct PDF download: https://rpsc.rajasthan.gov.in/Static/AnswerKeys/FE782986-A958-4799-BE59-A0868F5653FB.pdf.'
    },
    {
      id: 3,
      title: '3. Important Dates & Recruitment Schedule Table',
      content: 'Detailed Advertisement Published: 14.10.2025 | Online Applications Commenced: 28.10.2025 | Application Last Date: 26.11.2025 (12:00 Midnight) | Correction Window: 27.11.2025 to 06.12.2025 | Exam City Press Note: August 2026 | Written Examination: 30.08.2026 (11:00 AM to 01:30 PM) | Model Answer Key Released: 07.09.2026 | Online Objection Window: As per official Press Note | Final Answer Key & Result: Not Released / To Be Updated.'
    },
    {
      id: 4,
      title: '4. Advertisement No. 11/Exam/S.O./2025-26 Details',
      content: 'The recruitment is officially governed by Advertisement No. 11/Exam/S.O.(Statistics Deptt.)/RPSC/EP-I/2025-26 dated 14.10.2025 issued by the Secretary, RPSC Ajmer. Eligible Indian citizens holding relevant postgraduate degrees in Economics, Statistics, Mathematics, or Commerce applied through the SSO Rajasthan recruitment portal.'
    },
    {
      id: 5,
      title: '5. Total Vacancies Breakdown (113 Posts)',
      content: 'Total Notified Posts: 113. Category-wise vertical distribution: General (UR): 30 (Gen: 8, WE: 3, WD: 1, DV: 1); Scheduled Caste (SC): 12 (Gen: 4, WE: 1, WD: 1, DV: 0); Scheduled Tribe (ST): 9 (Gen: 3, WE: 1, WD: 1, DV: 0); Other Backward Classes (OBC-NCL): 16 (Gen: 5, WE: 3, WD: 0, DV: 0); More Backward Classes (MBC-NCL): 3 (Gen: 1, WE: 1, WD: 0, DV: 0); Economically Weaker Sections (EWS): 7 (Gen: 3, WE: 0, WD: 0, DV: 0).'
    },
    {
      id: 6,
      title: '6. Horizontal Reservation Distribution',
      content: 'Horizontal Reservation across 113 posts: Ex-Servicemen: 4 posts (Gen/UR: 2, SC: 1, ST: 1, OBC: 1, MBC: 0, EWS: 0). Persons with Benchmark Disabilities (PwBD): B/LV: 1, D/HH: 1, LD/CP: 1, Autism/SLD/MI: 2 (including 01 backlog vacancy from year 2023-24).'
    },
    {
      id: 7,
      title: '7. Educational Qualification – Prescribed Degree Requirements',
      content: "As per official notification Para 1: Candidates must possess At least Second Class Master's Degree in Economics; OR At least Second Class Master's Degree in Statistics; OR At least Second Class Master's Degree in Mathematics with paper in Statistics; OR At least Second Class Master's Degree in Commerce with Statistics; OR At least Second Class M.Sc (Agriculture) Statistics from a University established by law in India or recognized equivalent."
    },
    {
      id: 8,
      title: '8. Computer Certificate Requirement (RS-CIT or Equivalent)',
      content: 'In addition to the postgraduate degree, candidates must possess a Certificate (RS-CIT course conducted by Rajasthan Knowledge Corporation Limited) awarded by Vardhaman Mahaveer Open University (VMOU), Kota, OR any other computer qualification certificate declared equivalent by the Department of Information Technology and Communication (DoIT&C), Government of Rajasthan.'
    },
    {
      id: 9,
      title: '9. Experience Criteria in Handling Official Statistics',
      content: 'Experience requirement: Experience of handling official statistics at least for one (1) year in a Government Department or reputed commercial concern or University. Experience certificate must be in the prescribed proforma given on page 7 of the notification.'
    },
    {
      id: 10,
      title: '10. Mandatory Conditions for Experience Exemption',
      content: "Experience is NOT mandatory for candidates who: (a) hold a First Class Master's degree or Doctorate in any of the specified subjects; OR (b) have undergone successfully two years' training in Statistics at a recognized Statistical Institute or University; OR (c) have passed one year's Diploma Course from recognized University/Institution with Statistics and Economics as optional papers; OR (d) belong to Scheduled Castes (SC) or Scheduled Tribes (ST)."
    },
    {
      id: 11,
      title: '11. Working Knowledge of Hindi & Rajasthani Culture',
      content: 'Candidates must possess working knowledge of Hindi written in Devnagri Script and familiarity with Rajasthani culture, traditions, dialects, and socio-economic landscape as tested in Part-A of the competitive exam.'
    },
    {
      id: 12,
      title: '12. Pay Scale & Remuneration (Level L-12, Grade Pay ₹4,800/-)',
      content: 'Pay Matrix: Level L-12 (Grade Pay ₹4,800/-). During the two-year probation training period, candidates receive a fixed monthly remuneration as per Rajasthan State Government rules. On successful completion of probation, regular basic pay, DA, HRA, and state allowances are admissible.'
    },
    {
      id: 13,
      title: '13. Age Limit (21 to 40 Years as on 01.01.2026)',
      content: 'Age of candidate was reckoned as on 01.01.2026: Minimum 21 years and Maximum less than 40 years. (As the recruitment was not advertised in previous year, 1 year extra relaxation is granted as per state rules).'
    },
    {
      id: 14,
      title: '14. Age Relaxation for Reserved Categories of Rajasthan',
      content: 'Upper age relaxations: Male candidates of SC, ST, OBC, MBC, EWS of Rajasthan: 5 Years (up to 45 years); Female candidates of SC, ST, OBC, MBC, EWS of Rajasthan: 10 Years (up to 50 years); General Category Female candidates: 5 Years (up to 45 years); Widows and Divorcee Women: No upper age limit (subject to service retirement age of 60 years); PwBD: 5 Years.'
    },
    {
      id: 15,
      title: '15. Application Fee & One Time Registration (OTR) Scheme',
      content: 'As per DoP Rajasthan circular dated 19.04.2023, examination fee is integrated with One Time Registration (OTR): General (UR) and Creamy Layer OBC/MBC: ₹600/-. Reserved categories (SC/ST/OBC-NCL/MBC-NCL/EWS/Sahariya): ₹400/-. Divyangjan (PwBD): ₹400/-.'
    },
    {
      id: 16,
      title: '16. Online Application Process & SSO Portal Guidelines',
      content: 'Applications were invited online via Rajasthan Single Sign-On (SSO) portal: https://sso.rajasthan.gov.in/signin under Citizen Apps (G2C) → Recruitment Portal. Candidates linked their Jan Aadhaar / Aadhaar card, completed OTR profile verification, and generated an application number.'
    },
    {
      id: 17,
      title: '17. Written Examination Date & Timing (30 August 2026)',
      content: 'The competitive examination was conducted in a single morning session on Sunday, 30 August 2026 from 11:00 AM to 01:30 PM (total duration of 2 hours 30 minutes) at designated examination centers across Rajasthan.'
    },
    {
      id: 18,
      title: '18. Complete Exam Pattern & Marks Scheme (150 Marks)',
      content: 'The examination consists of one objective-type question paper carrying 150 marks with 150 Multiple Choice Questions (MCQs). Total duration is 2 Hours 30 Minutes (150 Minutes). Part A contains 40 Questions (40 Marks) and Part B contains 110 Questions (110 Marks).'
    },
    {
      id: 19,
      title: '19. Part-A: General Knowledge of Rajasthan (40 Questions / 40 Marks)',
      content: 'Part-A evaluates comprehensive knowledge of Rajasthan: History, Art, Culture, Literature, Monuments, Heritage, Geography, Natural Resources, Major Industries, Mineral Wealth, Agriculture, Administrative Setup, Panchayati Raj, and Current Affairs of Rajasthan.'
    },
    {
      id: 20,
      title: '20. Part-B: Concerned Subject (110 Questions / 110 Marks)',
      content: 'Part-B evaluates advanced concepts from postgraduate syllabus: Probability Theory, Statistical Inference, Sampling Methods, Design of Experiments, Time Series Analysis, Index Numbers, Econometrics, Micro and Macro Economics, Indian Economy, National Income Accounting, Mathematical Methods, and Computer Application in Data Analysis.'
    },
    {
      id: 21,
      title: '21. Negative Marking Scheme (1/3rd Deduction)',
      content: 'There is negative marking in the evaluation of answers. For every wrong answer, one-third (1/3rd) of the marks prescribed for that question is deducted. A wrong answer includes an incorrect option chosen or darkening more than one circle for a single question.'
    },
    {
      id: 22,
      title: '22. Mandatory 5th Option OMR Rule & Guidelines',
      content: 'Each question has 5 options (1, 2, 3, 4, 5). Candidates must darken the appropriate circle with a blue ball-point pen. If a candidate decides not to attempt a question, they must compulsorily darken circle "5". If none of the circles is darkened, 1/3rd marks are deducted.'
    },
    {
      id: 23,
      title: '23. Extra 10 Minutes for Darkening 5th Circle',
      content: 'After completing the question paper, an extra time of 10 minutes beyond the scheduled 2 hours 30 minutes is granted to candidates to verify and ensure that one circle has been darkened for each of the 150 questions.'
    },
    {
      id: 24,
      title: '24. Disqualification Rule for Leaving Circles Blank (>10%)',
      content: 'As per RPSC strict examination instructions: Any candidate who leaves more than 10% of questions (i.e. more than 15 questions out of 150) completely blank without darkening any of the 5 circles shall be automatically DISQUALIFIED from the recruitment process.'
    },
    {
      id: 25,
      title: '25. Official Model Answer Key Details (Part A & B)',
      content: 'The official Model Answer Key published on 07 September 2026 contains correct options for all 150 questions corresponding to the Master Question Paper. Part-A covers Questions 1 to 40; Part-B covers Questions 41 to 150.'
    },
    {
      id: 26,
      title: '26. Download Link for Official Model Answer Key PDF',
      content: 'Candidates can download the verified official Model Answer Key PDF directly from the RPSC website: https://rpsc.rajasthan.gov.in/Static/AnswerKeys/FE782986-A958-4799-BE59-A0868F5653FB.pdf.'
    },
    {
      id: 27,
      title: '27. Official Answer Key Press Note PDF (C578123D)',
      content: 'RPSC issued a press note on 07 September 2026 notifying the release of Model Answer Keys and announcing the schedule and guidelines for raising objections. Direct link: https://rpsc.rajasthan.gov.in/Static/PressNotes/C578123D-2427-4E41-A08C-F88E266E48CF.pdf.'
    },
    {
      id: 28,
      title: '28. Master Question Paper Alignment Rule',
      content: 'Crucial Instruction: Candidates must match their responses ONLY with the Master Question Paper uploaded on the RPSC portal, NOT their individual exam booklet question order. The question numbers and option orders in the Model Key correspond strictly to the Master Question Paper.'
    },
    {
      id: 29,
      title: '29. Step-by-Step: How to Download RPSC SO Answer Key',
      content: 'Step 1: Visit official website https://rpsc.rajasthan.gov.in/news. Step 2: Under Candidate Information, click on Answer Keys. Step 3: Select "Model Answer Key for Statistical Officer 2026". Step 4: Open and save the PDF file. Step 5: Also download the corresponding Master Question Paper from the Question Papers section.'
    },
    {
      id: 30,
      title: '30. How to Check Response Sheet & Calculate Tentative Marks',
      content: '1. Take your candidate copy of the OMR sheet (carbon copy). 2. Map your question booklet questions to the Master Question Paper questions. 3. Cross-check your marked option against the official Model Key. 4. Count total correct answers and total incorrect answers. 5. Apply the official formula: Raw Score = (Correct x 1) - (Incorrect x 0.3333).'
    },
    {
      id: 31,
      title: '31. Formula for Calculating Marks in RPSC Statistical Officer',
      content: 'Mark Calculation Formula: Total Marks = [Number of Correct Answers × 1] – [Number of Wrong Answers × 0.3333]. Example: If a candidate has 115 correct answers and 24 incorrect answers: Score = (115 × 1) – (24 × 0.3333) = 115 – 8 = 107.00 Marks out of 150.'
    },
    {
      id: 32,
      title: '32. Online Objection / Challenge Window Overview',
      content: 'Candidates who find any discrepancies or errors in the provisional answers or questions in the Master Question Paper can file online representations through the SSO Rajasthan recruitment portal within the specified objection window announced in the official press note.'
    },
    {
      id: 33,
      title: '33. Objection Fee & Payment Mode (₹100/- Per Question)',
      content: 'As per RPSC instructions, a non-refundable fee of ₹100/- (Rupees One Hundred Only) plus applicable service charges must be paid for each question challenged. Payment must be completed online via the e-Mitra payment gateway integrated in the SSO Recruitment Portal.'
    },
    {
      id: 34,
      title: '34. Documentary Proof & Authentic Evidence Guidelines',
      content: 'Candidates must upload scanned copies of authentic textual proofs (standard reference textbooks, government publications, statistical reports, official manuals) supporting their challenge. Objections without authoritative reference proof or book citations are summarily rejected.'
    },
    {
      id: 35,
      title: '35. Step-by-Step Process to Raise Objection on SSO Portal',
      content: 'Step 1: Log in to https://sso.rajasthan.gov.in/signin using your SSO ID and password. Step 2: Open Recruitment Portal. Step 3: Click on "Question Objection" link for Statistical Officer Exam 2026. Step 4: Select question number as per Master Question Paper. Step 5: Choose objection category, upload proof PDF, and pay ₹100/- fee. Step 6: Submit and download acknowledgment receipt.'
    },
    {
      id: 36,
      title: '36. Scrutiny of Objections by Subject Expert Committee',
      content: 'All representations received within the prescribed timeframe are placed before an independent panel of subject matter experts. The committee examines the questions and reference proofs. If an objection is found valid, the official answer key is corrected or the disputed question is deleted.'
    },
    {
      id: 37,
      title: '37. Question Deletion & Pro-Rata Marks Formula',
      content: 'If any question is deleted by RPSC after expert evaluation, its marks are distributed proportionately among the remaining questions in that section using the standard RPSC scaling formula: Effective Marks = (Marks of Section / Remaining Questions) × Correct Answers.'
    },
    {
      id: 38,
      title: '38. Publication of Final Answer Key',
      content: 'Status: Not Released / To Be Updated. Following expert committee review, RPSC publishes the decisive Final Answer Key on rpsc.rajasthan.gov.in. No further representations or objections are entertained against the Final Answer Key.'
    },
    {
      id: 39,
      title: '39. Written Exam Result & Candidate Merit List',
      content: 'Status: Not Released / To Be Updated. The result of the written examination will be compiled based on the Final Answer Key. Candidates qualifying with prescribed cutoff marks will be shortlisted for Document Verification.'
    },
    {
      id: 40,
      title: '40. Category-wise Cut-off Marks Estimation',
      content: 'Status: Not Released / To Be Updated. Official cutoff marks will be published along with the result. Expected cutoff depends on exam difficulty, total candidates appeared, and category-wise reservation roster for 113 posts.'
    },
    {
      id: 41,
      title: '41. Document Verification (DV) & Scrutiny Process',
      content: 'Candidates shortlisted in the written examination must appear for Document Verification before the RPSC Scrutiny Committee with original certificates, two self-attested sets of photocopies, and the detailed application-cum-scrutiny form downloaded from SSO.'
    },
    {
      id: 42,
      title: '42. Mandatory Documents for Document Verification',
      content: 'Essential Documents: 1. 10th Board Certificate & Marksheet (DoB proof). 2. Post-graduation Marksheets & Degree Certificate (in Economics/Stats/Maths/Commerce). 3. RS-CIT / Approved Computer Certificate. 4. Experience Certificate in Prescribed Format (Page 7). 5. Caste Certificate (SC/ST/OBC-NCL/MBC-NCL). 6. EWS Certificate for valid financial year. 7. Domicile / Bonafide Resident Certificate. 8. Photo ID Proof (Aadhaar / Voter ID).'
    },
    {
      id: 43,
      title: '43. Experience Certificate Verification & Proforma (Page 7)',
      content: 'Candidates claiming experience must produce an official experience certificate in the exact proforma given on page 7 of the notification signed by the Competent Authority with office seal, specifying token/registration number, period of service, designation, salary, and nature of statistical work performed.'
    },
    {
      id: 44,
      title: '44. Admit Card & Hall Ticket Direct Link',
      content: 'Admit Card / Hall Ticket was hosted on Rajasthan SSO portal: https://sso.rajasthan.gov.in/signin. Candidates can log in with their credentials to access exam center details and instructions.'
    },
    {
      id: 45,
      title: '45. Exam City / Admit Card Press Note (BC0C0054)',
      content: 'RPSC published an official press note regarding examination district and admit card release prior to the 30 August 2026 exam. Official notice link: https://rpsc.rajasthan.gov.in/Static/PressNotes/BC0C0054-874B-4843-B8A6-769FF4A6FF4E.pdf.'
    },
    {
      id: 46,
      title: '46. Important Exam Day Guidelines & Bio-Metric Security',
      content: 'Candidates were required to enter the examination center at least 60 minutes prior to exam commencement. Mandatory requirements included original Aadhaar Card / Photo ID, colored passport photograph, and blue transparent ballpoint pen. Electronic items and calculators were strictly prohibited.'
    },
    {
      id: 47,
      title: '47. Warning Against Malpractices & Debarment Rules',
      content: 'Under the Rajasthan Public Examination (Measures for Prevention of Unfair Means in Recruitment) Act, 2022, resorting to any unfair means, impersonation, or possession of banned devices results in lifetime debarment from RPSC and competitive examinations, along with stringent criminal prosecution.'
    },
    {
      id: 48,
      title: '48. Official RPSC Helpdesk & Contact Information',
      content: 'Commission Address: Rajasthan Public Service Commission, Ghoogra Ghati, Jaipur Road, Ajmer – 305001. Telephone Inquiry: 0145-2635212 / 0145-2635200. Official Recruitment Portal: https://rpsc.rajasthan.gov.in/.'
    },
    {
      id: 49,
      title: '49. Related RPSC Competitive Examinations',
      content: 'Candidates appearing for RPSC Statistical Officer can also explore other relevant Rajasthan recruitment exams: RPSC Assistant Statistical Officer (ASO), RPSC RAS / RTS Combined Competitive Exam, RPSC Assistant Professor, and RSMSSB Sanganak (Computor) Exam.'
    },
    {
      id: 50,
      title: '50. Official Links Summary & Direct Download Table',
      content: 'All official URLs: Download Answer Key: https://rpsc.rajasthan.gov.in/Static/AnswerKeys/FE782986-A958-4799-BE59-A0868F5653FB.pdf | Answer Key Press Note: https://rpsc.rajasthan.gov.in/Static/PressNotes/C578123D-2427-4E41-A08C-F88E266E48CF.pdf | Admit Card / SSO Login: https://sso.rajasthan.gov.in/signin | Exam City Press Note: https://rpsc.rajasthan.gov.in/Static/PressNotes/BC0C0054-874B-4843-B8A6-769FF4A6FF4E.pdf | Official Notification: https://rpsc.rajasthan.gov.in/Static/RecruitmentAdvertisements/BE73BA4C8E8042CAB7D57CD3660C025E.pdf | Official Website: https://rpsc.rajasthan.gov.in/news.'
    }
  ];
}

RPSC_STATISTICAL_OFFICER_2026_EXAM.allInformation = generateRpscSo50Sections();

