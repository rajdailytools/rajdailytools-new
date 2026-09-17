import { ExamRecord, ExamInfoSection } from '../types/exam';

export const RRB_GROUP_D_2026_EXAM: ExamRecord = {
  id: 'rrb-group-d-2026',
  slug: 'rrb-group-d-answer-key-2026',
  examName: 'Railway RRB Group D Answer Key 2026 (CEN 09/2025)',
  organization: 'Railway Recruitment Boards (RRB) / Railway Recruitment Cells (RRC)',
  category: 'Railway',
  postName: 'Various Posts in Level 1 of 7th CPC Pay Matrix (Track Maintainer Gr-IV, Pointsman B, Assistant S&T, Assistant TL & AC, Assistant Bridge, Assistant C&W, Assistant TRD, Assistant Loco Shed, Assistant Workshop, etc.)',
  totalVacancy: '22,195 Posts (As per Official CEN 09/2025 & Corrigendum)',
  applicationStartDate: '2026-01-31',
  applicationLastDate: '2026-03-02',
  admitCardDate: 'To Be Updated (4 Days Before CBT Exam)',
  cityIntimationDate: 'To Be Updated (10 Days In Advance)',
  cityIntimationStatus: 'Expected Soon',
  examDate: 'As per Latest Revised Tentative CBT Schedule (CEN 09/2025)',
  answerKeyDate: 'Not Released / To Be Updated',
  resultDate: 'Not Released / To Be Updated',
  cutOffDate: 'Not Released / To Be Updated',
  status: 'EXAM_COMPLETED',
  education: ['10th', 'ITI', 'Other'],
  ageMin: 18,
  ageMax: 33,
  ageRelaxationInfo: 'OBC (NCL): 3 Years, SC/ST: 5 Years, PwBD: 10-15 Years, Ex-Servicemen: Service + 3 to 8 Years, CCAA: As per Apprentice Act (Max 3-8 Yrs)',
  categoryEligibility: {
    'UR & EWS': '18 to 33 years (Born between 02-01-1993 and 01-01-2008)',
    'OBC (Non-Creamy Layer)': '18 to 36 years (Born between 02-01-1990 and 01-01-2008)',
    'SC / ST': '18 to 38 years (Born between 02-01-1988 and 01-01-2008)',
    'PwBD': 'Up to 43-48 years (UR: 10 yrs, OBC: 13 yrs, SC/ST: 15 yrs)',
    'CCAA (Railway Establishments)': 'Apprentice training duration relaxed (Max 3 yrs for UR/EWS, 6 yrs for OBC, 8 yrs for SC/ST)'
  },
  gender: 'All',
  state: 'All India',
  officialWebsite: 'https://indianrailways.gov.in/',
  officialNotification: 'https://rrbahmedabad.gov.in/wp-content/uploads/2026/01/Corrigendum-4-CEN-09-2025-02.03.2026.pdf',
  applyLink: 'https://www.rrbapply.gov.in/#/auth/landing',
  applicationStatusLink: 'https://www.rrbapply.gov.in/#/auth/home',
  admitCardLink: 'https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html',
  examCityLink: 'https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html',
  answerKeyLink: 'https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html',
  revisedSchedulePdf: 'https://rrb.indianrailways.gov.in/-/image/1785395249352REVISED_TENTATIVE_CBT_SCHEDULE_FOR_CEN_09_2025.pdf/examsDocuments',
  revisedVacancyPdf: 'https://www.rrbjammu.nic.in/09-2025/Corrigendum-2%2009%202025.pdf',
  dateExtensionPdf: 'https://rrbahmedabad.gov.in/wp-content/uploads/2026/01/Corrigendum-4-CEN-09-2025-02.03.2026.pdf',
  logoIcon: '🚆',
  logoBg: '#eff6ff',
  description: 'Railway Recruitment Boards (RRBs) CEN No. 09/2025 for Recruitment of Various Posts in Level-1 of 7th CPC Pay Matrix across 16 Zonal Railways and Production Units. Total 22,195 Vacancies. Answer Key, candidate response sheet, exam city intimation slip, and candidate login links are available.',
  shortSummary: 'Railway RRB Group D Level-1 (CEN 09/2025) Answer Key, Response Sheet, CBT Score Card, Question Paper PDF & Candidate Login Links for 22,195 Vacancies.',
  importantDates: [
    { label: 'Date of Indicative Notice in Employment News', date: '27 December 2025' },
    { label: 'Opening Date & Time of Online Applications', date: '31 January 2026 (00:00 Hrs)' },
    { label: 'Closing Date & Time of Online Submission', date: '02 March 2026 (23:59 Hrs)' },
    { label: 'Last Date for Application Fee Payment', date: '04 March 2026 (23:59 Hrs)' },
    { label: 'Modification Window with Payment of Fee (₹250)', date: '05 March 2026 to 14 March 2026' },
    { label: 'Window for Scribe Candidates to Submit Scribe Details', date: '15 March 2026 to 19 March 2026' },
    { label: 'Application Status Link Active', date: 'Active on rrbapply.gov.in' },
    { label: 'Exam City & Date Intimation Slip', date: '10 Days before CBT Exam' },
    { label: 'e-Call Letter (Admit Card) Download', date: '4 Days before CBT Exam Date' },
    { label: 'Single Stage Computer Based Test (CBT)', date: 'As per Latest Revised Schedule (CEN 09/2025)', isHighlight: true },
    { label: 'RRB Group D Answer Key & Response Sheet', date: 'Not Released / To Be Updated (Candidate Login Active)', isHighlight: true },
    { label: 'Objection Tracker Window', date: 'Not Released / To Be Updated' },
    { label: 'Final Answer Key & Normalized CBT Score', date: 'Not Released / To Be Updated' },
    { label: 'Physical Efficiency Test (PET - 3X Shortlist)', date: 'Not Released / To Be Updated' },
    { label: 'Document Verification (DV 1:1) & Medical Exam', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / OBC / EWS Male Candidates', amount: '₹500 (₹400 refunded duly deducting bank charges upon appearing in CBT)' },
    { category: 'SC / ST / Ex-Servicemen / PwBD / Female / Transgender / Minorities / EBC', amount: '₹250 (Full ₹250 refunded duly deducting bank charges upon appearing in CBT)' }
  ],
  selectionProcess: [
    'Stage 1: Single Stage Computer Based Test (CBT) - 100 MCQs, 90 Minutes, 1/3 Negative Marking',
    'Stage 2: CBT Merit & Normalisation of Marks (Multi-shift CBT formula)',
    'Stage 3: Physical Efficiency Test (PET) - Qualifying in nature (Called @ 3 times total community-wise vacancies)',
    'Stage 4: Document Verification (DV) - Railway/RRC-wise 1:1 ratio strictly on merit in CBT and qualifying PET',
    'Stage 5: Pre-Appointment Medical Examination (A2, A3, B1, C1 as per post parameters)',
    'Stage 6: Final Empanelment & Appointment Offer by Zonal Railway Administration'
  ],
  examPattern: [
    {
      tier: 'Computer Based Test (CBT) - Single Stage (CEN 09/2025)',
      mode: 'Online CBT (English, Hindi and 13 Regional Languages)',
      duration: '90 Minutes (120 Minutes for PwBD with Scribe)',
      negativeMarking: '1/3rd (0.33) marks deducted for each wrong answer',
      subjects: [
        { name: 'General Science (Physics, Chemistry & Life Sciences 10th CBSE Level)', questions: 25, marks: 25 },
        { name: 'Mathematics', questions: 25, marks: 25 },
        { name: 'General Intelligence and Reasoning', questions: 30, marks: 30 },
        { name: 'General Awareness and Current Affairs', questions: 20, marks: 20 }
      ]
    }
  ],
  salary: {
    payScale: 'Level-1 of 7th CPC Pay Matrix (Initial Pay ₹18,000)',
    inHand: '₹24,000 - ₹30,000 per month (depending on City Class X, Y, Z)',
    allowances: 'Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance (TA), Night Duty Allowance, Kilometer Allowance / Running / Risk Allowance (for Trackmaintainer & field staff), Medical Facility in Railway Hospitals, Free Railway Travel Pass/PTO'
  },
  cutOffData: {
    stage: 'CBT Minimum Qualifying Marks & Expected Cutoff Range',
    year: 'CEN 09/2025',
    categories: [
      { category: 'Unreserved (UR)', marks: 40.0, candidates: 'Minimum Qualifying: 40%' },
      { category: 'Economically Weaker Section (EWS)', marks: 40.0, candidates: 'Minimum Qualifying: 40%' },
      { category: 'Other Backward Classes (OBC-NCL)', marks: 30.0, candidates: 'Minimum Qualifying: 30%' },
      { category: 'Scheduled Caste (SC)', marks: 30.0, candidates: 'Minimum Qualifying: 30%' },
      { category: 'Scheduled Tribe (ST)', marks: 30.0, candidates: 'Minimum Qualifying: 30%' },
      { category: 'PwBD Candidates', marks: 28.0, candidates: 'Relaxation of 2% in case of shortage' }
    ]
  },
  faq: [
    {
      q: 'What is the official candidate login link for RRB Group D Answer Key 2026?',
      a: 'The official candidate login link hosted on TCS iON DigiALM is https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html. Candidates must enter their Registration Number and User Password / Date of Birth (DDMMYYYY) to access their response sheet.'
    },
    {
      q: 'What is the negative marking in RRB Group D CBT Exam?',
      a: 'There is a negative marking of 1/3rd (one-third) mark for every wrong answer in the Computer Based Test (CBT) under CEN 09/2025.'
    },
    {
      q: 'How many vacancies are notified under Railway RRB Group D CEN 09/2025?',
      a: 'A total of 22,195 vacancies are notified across 16 Zonal Railways and Production Units under CEN 09/2025.'
    },
    {
      q: 'What is the initial basic pay for Railway Group D Level-1 posts?',
      a: 'The initial basic pay is ₹18,000 per month under Level-1 of the 7th CPC Pay Matrix, plus Dearness Allowance (DA), HRA, and other applicable Railway allowances.'
    },
    {
      q: 'What is the physical efficiency test (PET) standard for Male candidates in RRB Group D?',
      a: 'Male candidates must be able to lift and carry 35 kg of weight for 100 meters in 2 minutes in one chance without putting the weight down; and run 1000 meters in 4 minutes 15 seconds in one chance.'
    },
    {
      q: 'What is the PET standard for Female candidates in RRB Group D?',
      a: 'Female candidates must be able to lift and carry 20 kg of weight for 100 meters in 2 minutes in one chance without putting the weight down; and run 1000 meters in 5 minutes 40 seconds in one chance.'
    },
    {
      q: 'How many candidates are shortlisted for the Physical Efficiency Test (PET)?',
      a: 'Based on merit in CBT, candidates are shortlisted Railway/RRC-wise at the rate of three (3) times the total community-wise vacancies.'
    },
    {
      q: 'What is the shortlisting ratio for Document Verification (DV) and Medical Exam?',
      a: 'Shortlisting of candidates for Document Verification and Medical Examination is done Railway/RRC-wise strictly at 1:1 ratio of the vacancies, based on CBT merit and qualification in PET.'
    },
    {
      q: 'Are Course Completed Act Apprentices (CCAA) exempted from PET?',
      a: 'Yes, CCAA candidates trained in Railway Establishments are exempted from the Physical Efficiency Test (PET) and receive 1/3rd weightage for their NCVT marks in final merit.'
    }
  ]
};

export function generateRrbGroupD50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Overview of Railway RRB Group D Recruitment 2026 (CEN 09/2025)',
      content: 'Railway Recruitment Boards (RRBs) on behalf of Railway Recruitment Cells (RRCs) have released Centralised Employment Notification (CEN) No. 09/2025 for recruitment to 22,195 vacancies across various technical and operational posts in Level-1 of the 7th Central Pay Commission (CPC) Pay Matrix. This recruitment covers essential track, workshop, locomotive, signalling, telecommunication, and traffic handling positions across Indian Railways.'
    },
    {
      id: 2,
      title: '2. Centralised Employment Notification (CEN) No. 09/2025 Details',
      content: 'Notification Number: CEN No. 09/2025. Recruiting Authorities: Railway Recruitment Boards (RRBs) on behalf of Railway Recruitment Cells (RRCs) across 16 Zonal Railways (WR, NWR, NCR, SWR, WCR, ECoR, SECR, NR, SR, NER, NFR, ER, CR, ECR, SER, SCR) and Metro Railway Kolkata. Notification released in Employment News on 27.12.2025 with online registrations from 31.01.2026 to 02.03.2026.'
    },
    {
      id: 3,
      title: '3. Important Dates & Lifecycle Calendar',
      content: 'Indicative Notice: 27.12.2025 | Online Applications Started: 31.01.2026 (00:00 Hrs) | Application Closing Date: 02.03.2026 (23:59 Hrs) | Fee Payment Deadline: 04.03.2026 (23:59 Hrs) | Modification Window: 05.03.2026 to 14.03.2026 | Scribe Entry Window: 15.03.2026 to 19.03.2026 | Exam City Slip: 10 Days Before CBT | e-Call Letter: 4 Days Prior to CBT.'
    },
    {
      id: 4,
      title: '4. Latest Revised Tentative CBT Schedule Notice',
      content: 'As per the official revised tentative CBT schedule published by the Ministry of Railways (CEN 09/2025), Computer Based Tests are scheduled in multiple phases across designated computerized test centers nationwide. Candidates must verify their shift, city, and exam date through the official link: https://rrb.indianrailways.gov.in/-/image/1785395249352REVISED_TENTATIVE_CBT_SCHEDULE_FOR_CEN_09_2025.pdf/examsDocuments.'
    },
    {
      id: 5,
      title: '5. Total Vacancies Breakdown (22,195 Posts)',
      content: 'Total Notified Vacancies: 22,195 posts across all participating Zonal Railways. Community-wise vertical reservation: Unreserved (UR), Scheduled Caste (SC - 15%), Scheduled Tribe (ST - 7.5%), Other Backward Classes (OBC-NCL - 27%), Economically Weaker Sections (EWS - 10%). Horizontal reservations for Ex-Servicemen (ExSM), Course Completed Act Apprentices (CCAA), and Persons with Benchmark Disabilities (PwBD).'
    },
    {
      id: 6,
      title: '6. Revised Vacancy Corrigendum Notice (CEN 09/2025)',
      content: 'Railway Recruitment Boards published Corrigendum notices (including Corrigendum-2 on rrbjammu.nic.in) detailing adjustments in sub-cadres and unit distributions while maintaining 22,195 total vacancies. Candidates can download the official revised vacancy PDF from: https://www.rrbjammu.nic.in/09-2025/Corrigendum-2%2009%202025.pdf.'
    },
    {
      id: 7,
      title: '7. Post-wise Vacancy Distribution (Annexure-A & B)',
      content: 'Major posts notified include: Trackmaintainer Grade-IV (Engineering P.Way), Pointsman B (Traffic Department), Assistant S&T (Signal & Telecommunication), Assistant Bridge (Engineering), Assistant Carriage & Wagon (Mechanical), Assistant TRD (Traction Distribution - Electrical), Assistant Loco Shed (Electrical & Diesel), Assistant TL & AC (Train Lighting & Air Conditioning), Assistant Operations (Electrical), Assistant Workshop, and Assistant Track Machine.'
    },
    {
      id: 8,
      title: '8. RRB-wise & Zone-wise Vacancy Distribution Table',
      content: 'Representative Zone Vacancies: Northern Railway (NR New Delhi): 1,764 Trackmaintainer + other cadres = 3,000+ total; Western Railway (WR Mumbai): 1,599 Trackmaintainer + other posts; Central Railway (CR Mumbai): 681 Trackmaintainer; South Central Railway (SCR Secunderabad): 653 Trackmaintainer; North Central Railway (NCR Allahabad): 600 Trackmaintainer; North Western Railway (NWR Jaipur): 600 Trackmaintainer; South Eastern Railway (SER Kolkata): 533 Trackmaintainer; East Central Railway (ECR Hajipur): 500 Trackmaintainer; Northeast Frontier Railway (NFR Guwahati): 884 Trackmaintainer.'
    },
    {
      id: 9,
      title: '9. Age Limit & Crucial Date (01.01.2026)',
      content: 'The lower and upper age limits are 18 to 33 years reckoned as on 01.01.2026. Date of birth for UR & EWS candidates must be between 02.01.1993 and 01.01.2008. For OBC-NCL candidates: 02.01.1990 to 01.01.2008. For SC/ST candidates: 02.01.1988 to 01.01.2008.'
    },
    {
      id: 10,
      title: '10. Age Relaxation Rules & Entitlements',
      content: 'Upper age relaxation: OBC (Non-Creamy Layer) - 3 Years (up to 36 years); SC / ST - 5 Years (up to 38 years); Ex-Servicemen - Period of military service + 3 years (UR/EWS), + 6 years (OBC-NCL), + 8 years (SC/ST); PwBD - 10 Years (UR/EWS), 13 Years (OBC-NCL), 15 Years (SC/ST); CCAA - Relaxed to the extent of apprentice training under Apprentice Act 1961 (Max 3 yrs for UR/EWS, 6 yrs for OBC-NCL, 8 yrs for SC/ST); Group C & D Railway staff with 3 years service - up to 40 yrs (UR), 43 yrs (OBC), 45 yrs (SC/ST).'
    },
    {
      id: 11,
      title: '11. Educational & Technical Qualifications (Annexure-A)',
      content: 'Minimum benchmark qualification as per official CEN 09/2025 Post Parameters: 10th pass OR ITI from institutions recognized by NCVT/SCVT or equivalent OR National Apprenticeship Certificate (NAC) granted by NCVT. Diploma / Degree in Engineering is NOT accepted in lieu of Course Completed Act Apprenticeship (CCAA) / ITI for Level-1 posts unless otherwise explicitly specified.'
    },
    {
      id: 12,
      title: '12. Medical Standards for Railway Level-1 Posts (A2, A3, B1, C1)',
      content: 'Candidates must pass visual acuity standards: A-2: Distant Vision 6/9, 6/9 without glasses (no fogging), Near Vision Sn 0.6, 0.6 without glasses, pass Color, Binocular, Night & Mesopic vision. (Pointsman B); A-3: Distant 6/9, 6/9 with or without glasses (power max 2D), Near 0.6, 0.6; B-1: Distant 6/9, 6/12 with/without glasses (power max 4D), Near 0.6, 0.6 with/without glasses, pass Color & Night vision (Trackmaintainer IV, Assistant C&W, Bridge, S&T); C-1: Distant 6/12, 6/18 with/without glasses (Assistant Workshop).'
    },
    {
      id: 13,
      title: '13. LASIK Surgery Disqualification Warning',
      content: 'As per Para 3.0 Note B of CEN 09/2025: Candidates who have undergone LASIK surgery or any other corrective surgical procedure to correct refractory error are STRICTLY INELIGIBLE for posts requiring Medical Standards A-2 and A-3. A self-declaration in Annexure-VII must be submitted during Document Verification.'
    },
    {
      id: 14,
      title: '14. Application Fee Structure & Payment Modes',
      content: 'For UR, OBC & EWS Male candidates: ₹500/-. Out of this fee, ₹400/- is refunded on appearing in the Computer Based Test (CBT), duly deducting bank charges. For SC, ST, Ex-Servicemen, PwBD, Female, Transgender, Minorities, and Economically Backward Class (EBC): ₹250/- (Entire ₹250/- refunded upon appearing in CBT). Fee payable online via Net Banking, Debit/Credit Card, or UPI.'
    },
    {
      id: 15,
      title: '15. Bank Account Fee Refund via Aadhaar-Seeded Account',
      content: 'Refund of examination fee for candidates who attend CBT is credited directly to the bank account seeded with the candidate’s Aadhaar number. The system verifies Aadhaar-bank account linking during application submission via the NPCI portal. Candidates who do not appear for CBT are strictly non-refundable.'
    },
    {
      id: 16,
      title: '16. Application Status Verification Link',
      content: 'Candidates can check their application status (Provisionally Accepted / Rejected with reason) by logging in to the official RRB recruitment portal: https://www.rrbapply.gov.in/#/auth/home using their registered Mobile Number / Email ID and Password.'
    },
    {
      id: 17,
      title: '17. Online Application Process & Account Creation',
      content: 'Applications were submitted online through the centralized portal rrbapply.gov.in. Candidates created an account with verified mobile number and email ID, authenticated via DigiLocker / Aadhaar verification, filled educational details, selected their chosen RRB Zone and post preferences, captured a live photograph, and uploaded their signature.'
    },
    {
      id: 18,
      title: '18. Live Photograph & Signature Specifications',
      content: 'Live webcam photograph was captured directly on the application module with neutral facial expression, dark non-white clothing, and no cap or glasses. Signature required black ink on white paper in running cursive handwriting (140x60 pixels, 30-49 KB, JPG/JPEG). Signatures in BLOCK or CAPITAL letters are subject to immediate rejection.'
    },
    {
      id: 19,
      title: '19. Exam City & Date Intimation Slip Link',
      content: 'City Intimation Slip is released approximately 10 days prior to the CBT date. The slip informs candidates of the exam city, test date, and shift timing, and provides free Sleeper Class travel pass authority for eligible SC/ST candidates. Direct login: https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html.'
    },
    {
      id: 20,
      title: '20. e-Call Letter (Admit Card) Download Rules',
      content: 'Admit Card / e-Call Letter is made available 4 days before the candidate’s scheduled CBT date via the official candidate login link. Candidates must download and take a clear printout. No call letter is dispatched by post. Candidates must carry original Photo ID and passport photo.'
    },
    {
      id: 21,
      title: '21. Computer Based Test (CBT) Exam Pattern',
      content: 'Single Stage CBT consists of 100 Multiple Choice Questions (1 mark each) for a duration of 90 Minutes (120 Minutes for eligible PwBD candidates using a scribe). Section-wise indicative distribution: General Science: 25 Questions (25 Marks); Mathematics: 25 Questions (25 Marks); General Intelligence and Reasoning: 30 Questions (30 Marks); General Awareness and Current Affairs: 20 Questions (20 Marks).'
    },
    {
      id: 22,
      title: '22. Detailed Mathematics Syllabus',
      content: 'Number System, BODMAS, Decimals, Fractions, LCM, HCF, Ratio and Proportion, Percentages, Mensuration, Time and Work, Time and Distance, Simple and Compound Interest, Profit and Loss, Algebra, Geometry and Trigonometry, Elementary Statistics, Square Root, Age Calculations, Calendar & Clock, Pipes & Cistern.'
    },
    {
      id: 23,
      title: '23. Detailed General Intelligence & Reasoning Syllabus',
      content: 'Analogies, Alphabetical and Number Series, Coding and Decoding, Mathematical Operations, Relationships, Syllogism, Jumbling, Venn Diagrams, Data Interpretation and Sufficiency, Conclusions and Decision Making, Similarities and Differences, Analytical Reasoning, Classification, Directions, Statement - Arguments and Assumptions.'
    },
    {
      id: 24,
      title: '24. Detailed General Science Syllabus (10th CBSE Standard)',
      content: 'As per official CEN 09/2025: General Science syllabus strictly covers Physics, Chemistry, and Life Sciences of 10th standard level (CBSE curriculum), focusing on fundamentals, units, laws of motion, gravitation, periodic table, chemical reactions, human anatomy, genetics, and ecology.'
    },
    {
      id: 25,
      title: '25. Detailed General Awareness & Current Affairs Syllabus',
      content: 'Current Affairs in Science & Technology, Sports, Culture, Personalities, Economics, Politics, National Policies, Railway Innovations, and Other Subjects of national and international importance.'
    },
    {
      id: 26,
      title: '26. Negative Marking Scheme (1/3rd Deduction)',
      content: 'There is strict negative marking in the CBT. For every correct answer, +1 mark is awarded. For every incorrect response, 1/3rd (0.33) marks are deducted. Unattempted questions incur no penalty. Candidates must exercise accuracy.'
    },
    {
      id: 27,
      title: '27. Normalisation of Marks Methodology',
      content: 'Because CBT is conducted across multiple shifts and sessions with varying question sets, marks obtained by candidates are normalized using the standard percentile-based mathematical normalization formula adopted by Railway Recruitment Boards to ensure inter-session parity.'
    },
    {
      id: 28,
      title: '28. Minimum Qualifying Percentage Marks',
      content: 'Minimum qualifying cut-off percentage in CBT for eligibility: Unreserved (UR): 40%, Economically Weaker Section (EWS): 40%, Other Backward Classes (OBC-NCL): 30%, Scheduled Caste (SC): 30%, Scheduled Tribe (ST): 30%. A relaxation of up to 2 marks in minimum qualifying marks is permitted for PwBD candidates in case of vacancy shortage.'
    },
    {
      id: 29,
      title: '29. Full Selection Process Flowchart',
      content: 'Selection Workflow: Step 1: Single Stage Computer Based Test (CBT) → Step 2: Normalization & Merit List Calculation → Step 3: Physical Efficiency Test (PET - 3:1 ratio) → Step 4: Document Verification (DV - 1:1 ratio) → Step 5: Pre-Appointment Medical Fitness Examination → Step 6: Final Zonal Empanelment.'
    },
    {
      id: 30,
      title: '30. Physical Efficiency Test (PET) Rules & Exemptions',
      content: 'Shortlisting for PET is done Railway/RRC-wise at 3 times the community-wise vacancies. Passing PET is mandatory and strictly qualifying in nature. Ex-Servicemen (ExSM) and Course Completed Act Apprentices (CCAA) are completely exempted from PET. PwBD candidates are also exempted from PET upon producing disability proof.'
    },
    {
      id: 31,
      title: '31. PET Physical Standards for Male Candidates',
      content: 'Two Stage Test: 1. Weight Carrying Test: Lift and carry 35 kg of weight (sandbag without handle) for a distance of 100 meters in 2 minutes in one single chance without putting the weight down on the ground. 2. Running Test: Run a distance of 1000 meters in 4 minutes and 15 seconds in one single chance.'
    },
    {
      id: 32,
      title: '32. PET Physical Standards for Female & Transgender Candidates',
      content: 'Two Stage Test: 1. Weight Carrying Test: Lift and carry 20 kg of weight for a distance of 100 meters in 2 minutes in one single chance without putting the weight down on the ground. 2. Running Test: Run a distance of 1000 meters in 5 minutes and 40 seconds in one single chance. Transgender candidates are evaluated under Female standards.'
    },
    {
      id: 33,
      title: '33. Document Verification (DV) 1:1 Shortlisting Ratio',
      content: 'Shortlisting of candidates for Document Verification and Medical Examination is done Railway/RRC-wise strictly at 1:1 of the notified vacancies based on merit in CBT and qualifying PET. Candidates must bring original documents along with two sets of self-attested photocopies and upload scanned color copies on https://oirms-ir.gov.in/rrbdv.'
    },
    {
      id: 34,
      title: '34. Pre-Appointment Medical Examination (ME)',
      content: 'Conducted by Railway Medical Authorities in Railway Hospitals to ascertain visual fitness and general physical capability required for railway operations. Candidates failing the prescribed medical fitness for their opted post will NOT be given alternative appointments.'
    },
    {
      id: 35,
      title: '35. Official Answer Key & Response Sheet Overview',
      content: 'Railway Recruitment Boards release the provisional Answer Key, candidate Master Question Paper, and evaluated Response Sheet on the official TCS iON DigiALM portal. Candidates can cross-examine their marked responses with the provisional official keys.'
    },
    {
      id: 36,
      title: '36. Candidate Response Sheet & Question Paper PDF',
      content: 'The response sheet displays: Question ID, Question Text, Option IDs, Option Chosen by Candidate, and Correct Official Option indicated by a green checkmark. Candidates can save or print the response sheet for offline score calculation and reference.'
    },
    {
      id: 37,
      title: '37. Step-by-Step Guide: How to Download RRB Group D Answer Key',
      content: 'Step 1: Open the official login portal (https://rrb.digialm.com/EForms/configuredHtml/33128/101714/login.html). Step 2: Enter Registration Number and Password / Date of Birth (DDMMYYYY). Step 3: Enter the security Captcha and click Login. Step 4: Click on Candidate Response tab. Step 5: Click on "To download your question paper for Level 1 CBT Exam, Click here". Step 6: Save the response sheet as PDF.'
    },
    {
      id: 38,
      title: '38. How to Calculate Expected CBT Raw Score',
      content: 'Formula: Raw Score = (Total Correct Answers x 1) - (Total Wrong Answers x 0.3333). Unattempted or marked-for-review questions carry zero marks. Example: If you attempted 85 questions, with 70 correct and 15 incorrect: Raw Score = (70 x 1) - (15 x 0.3333) = 70 - 5 = 65.00 Marks out of 100.'
    },
    {
      id: 39,
      title: '39. Online Objection / Challenge Window Guidelines',
      content: 'If a candidate detects any ambiguity in question framing, translation error, incorrect official answer key, or multiple correct options, they can submit an objection via the official Objection Tracker module. Objections submitted through any other medium (letter/email) are summarily rejected.'
    },
    {
      id: 40,
      title: '40. Objection Fee, Refund Rules & Payment Modes',
      content: 'As per standard Railway guidelines: The prescribed objection fee (typically ₹50/- plus applicable bank charges per question challenged) must be paid online via Net Banking, Debit/Credit Card, or UPI. If the candidate’s objection is sustained and accepted by subject experts, the objection fee is refunded back to the originating bank account.'
    },
    {
      id: 41,
      title: '41. Final Answer Key Publication & Resolution Process',
      content: 'Subject matter expert committees thoroughly review all candidate representations. If an objection is found valid, the official key is updated or the question is cancelled for all candidates (pro-rata marks calculated). The Final Answer Key is decisive and no further queries are entertained.'
    },
    {
      id: 42,
      title: '42. CBT Result & Score Card Publication',
      content: 'Official CBT results and scorecards will be published on participating RRB websites (Ahmedabad, Ajmer, Allahabad, Bangalore, Bhopal, Bhubaneswar, Bilaspur, Chandigarh, Chennai, Gorakhpur, Guwahati, Kolkata, Mumbai, Patna, Ranchi, Secunderabad). Candidates log in to view their Raw Marks, Normalized Marks, and Qualifying Status for PET.'
    },
    {
      id: 43,
      title: '43. Expected & Previous Year Zone-wise Cutoff Analysis',
      content: 'Cutoff marks vary by zone based on number of applicants, vacancies, and session difficulty. Historically, normalized cutoffs for Unreserved (UR) ranged from 62 to 74 marks across different zones, while reserved category cutoffs ranged from 48 to 65 marks.'
    },
    {
      id: 44,
      title: '44. Merit List & Tie-Breaking Criteria',
      content: 'In case two or more candidates secure the same normalized marks in CBT, tie-breaking criteria is applied: (i) The older person is placed higher in merit. (ii) If age is identical, alphabetical order (A to Z) of the candidate’s first name is taken into account.'
    },
    {
      id: 45,
      title: '45. Course Completed Act Apprentices (CCAA) 1/3rd Weightage Benefit',
      content: 'As per Para 12.0 of CEN 09/2025: CCAAs trained in Railway establishments and possessing National Apprenticeship Certificate (NAC) granted by NCVT receive 1/3rd weightage for marks obtained in NCVT examination in the preparation of the final merit list after CBT, and are exempted from PET.'
    },
    {
      id: 46,
      title: '46. Important Instructions & Prohibited Exam Items',
      content: 'Banned items inside the exam venue: Mobile phones, smart watches, Bluetooth devices, earphones, calculators, books, pens, paper, bags, belts, and jewelry. Pens are provided at the center. Candidates must not apply henna/mehendi on fingers/feet as it obstructs biometric capture.'
    },
    {
      id: 47,
      title: '47. Mandatory Documents Required for Document Verification (DV)',
      content: 'Original documents required: Matriculation / 10th Certificate (Date of Birth proof), ITI / NAC Certificate from NCVT/SCVT, SC/ST Caste Certificate (Annexure-I), OBC-NCL Certificate (Annexure-II & IIA), EWS Certificate (Annexure-III for FY 2024-25), EBC Certificate (Annexure-IIIA), Discharge Certificate for ExSM, Disability Certificate for PwBD, NOC from employer for serving staff.'
    },
    {
      id: 48,
      title: '48. Official RRB Contact Directory & Helplines',
      content: 'Helpdesk Email: rrb.help@csc.gov.in | Phone: 9592001188 / 01725653333 (10:00 AM to 5:00 PM on working days). Official Indian Railways recruitment portal: https://indianrailways.gov.in/ and application portal: https://www.rrbapply.gov.in/.'
    },
    {
      id: 49,
      title: '49. Warning Against Touts & Job Racketeers',
      content: 'Railway Recruitment Boards never appoint any agents, coaching centers, or touts. Candidates are selected purely on merit through transparent Computer Based Tests. Beware of fraudulent promises of recruitment through money or backdoor influence.'
    },
    {
      id: 50,
      title: '50. Related Railway Recruitment Examinations',
      content: 'Candidates preparing for RRB Group D should also monitor other major railway notifications: RRB NTPC (CEN 05/2026 & 06/2026 for 11,558 posts), RRB ALP (Assistant Loco Pilot), RRB Technician Grade 1 & 3, and RRB Junior Engineer (JE).'
    }
  ];
}
