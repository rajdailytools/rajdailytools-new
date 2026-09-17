import { ExamRecord, ExamInfoSection } from '../types/exam';

export const RPSC_APO_2026_EXAM: ExamRecord = {
  id: 'rpsc-apo-2026',
  slug: 'rpsc-apo-answer-key-2026',
  examName: 'RPSC APO Answer Key 2026',
  shortName: 'RPSC APO Answer Key',
  organization: 'Rajasthan Public Service Commission (RPSC) / Home (Prosecution) Department',
  category: 'RPSC',
  postName: 'Assistant Prosecution Officer (सहायक अभियोजन अधिकारी) – Home (Prosecution) Department',
  totalVacancy: '371',
  logoIcon: '⚖️',
  logoBg: '#eff6ff',
  status: 'ANSWER_KEY_RELEASED',
  state: 'Rajasthan',
  gender: 'All',
  ageMin: 21,
  ageMax: 40,
  ageRelaxationInfo: 'Male (SC/ST/OBC/MBC/EWS of Rajasthan): 5 Years | Female (SC/ST/OBC/MBC/EWS of Rajasthan): 10 Years | General Category Female: 5 Years | Widows & Divorced Women: No Upper Age Limit | PwBD: 5 Years.',
  categoryEligibility: {
    'General (UR)': '21 to 40 years as on 01.01.2027 (Born between 02.01.1987 and 01.01.2006)',
    'SC / ST / OBC / MBC / EWS (Male of Rajasthan)': '21 to 45 years (5 years upper age relaxation)',
    'SC / ST / OBC / MBC / EWS (Female of Rajasthan)': '21 to 50 years (10 years upper age relaxation)',
    'General Category Female': '21 to 45 years (5 years upper age relaxation)',
    'Widow & Divorced Women': 'No upper age limit (Subject to retirement age of 60 years)',
    'Persons with Benchmark Disabilities (PwBD)': '5 years relaxation above category upper limit'
  },
  education: ['Graduation', 'Other'],
  minimumQualificationLevel: 'Degree in Law (Professional) or Integrated Law Course from a recognized University + Working knowledge of Hindi (Devnagri) & Rajasthani dialects and social customs',
  acceptedQualificationLevels: [
    'Degree in Law (LL.B. Professional - 3 Years) from a University established by law in India',
    'Integrated Law Course (B.A. LL.B. / B.B.A. LL.B. / B.Com. LL.B. - 5 Years) from a University established by law in India',
    'Working Knowledge of Hindi written in Devnagri Script',
    'Knowledge of Rajasthani dialects and social customs of Rajasthan'
  ],
  applicationStartDate: '2026-06-08',
  applicationLastDate: '2026-07-07',
  cityIntimationDate: '2026-08-26',
  cityIntimationStatus: 'Released',
  admitCardDate: '2026-08-30',
  examDate: '2026-09-02',
  answerKeyDate: '2026-09-07',
  resultDate: undefined, // Strictly "Not Released / To Be Updated"
  cutOffDate: undefined,
  admitCardLink: 'https://recruitment.rajasthan.gov.in/rectlogingetadmitcard',
  examCityLink: 'https://sso.rajasthan.gov.in/',
  answerKeyLink: 'https://rpsc.rajasthan.gov.in/Static/AnswerKeys/2A391A07-19AD-4A3D-8E8F-33C0B79C48E1.pdf',
  responseSheetLink: 'https://sso.rajasthan.gov.in/',
  officialNotification: 'https://rpsc.rajasthan.gov.in/Static/RecruitmentAdvertisements/3ABD11DA80374279A39F1BF78AAB0950.pdf',
  officialWebsite: 'https://rpsc.rajasthan.gov.in/home',
  applyLink: 'https://sso.rajasthan.gov.in/',
  salary: {
    payScale: 'Pay Matrix Level L-11 (Grade Pay ₹4,200/-)',
    inHand: '₹42,000 – ₹52,000 Approx. after probation (Fixed remuneration during probation period as per GoR rules)',
    allowances: 'Dearness Allowance (DA), House Rent Allowance (HRA), Special Prosecution Allowance, Rajasthan Government Health Scheme (RGHS), Defined Contributory Pension'
  },
  importantDates: [
    { label: 'Official Detailed Notification Released (Advt 03/2026-27)', date: '27 May 2026' },
    { label: 'Online Application Start Date (RPSC SSO Portal)', date: '08 June 2026' },
    { label: 'Online Application Last Date', date: '07 July 2026 (12:00 Midnight)' },
    { label: 'Application Correction Window', date: 'After Last Date (Fee ₹500/- as per rules)' },
    { label: 'Exam City Details Press Note Released', date: '26 August 2026', isHighlight: true },
    { label: 'Preliminary Exam Admit Card Released', date: '30 August 2026', isHighlight: true },
    { label: 'Preliminary Examination Date (Objective OMR)', date: '02 September 2026', isHighlight: true },
    { label: 'Official Model Answer Key Released', date: '07 September 2026 (Available Now)', isHighlight: true },
    { label: 'Online Objection Window on SSO Portal (₹100/Question)', date: 'Active as per Press Note Schedule', isHighlight: true },
    { label: 'Main Examination Date (Written Descriptive)', date: '27 December 2026', isHighlight: true },
    { label: 'Final Answer Key & Prelims Result', date: 'Not Released / To Be Updated' },
    { label: 'Document Verification (DV) Schedule', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General (UR) / Creamy Layer OBC & MBC Candidates', amount: '₹600/- (One Time Registration OTR)' },
    { category: 'SC / ST / OBC-NCL / MBC-NCL / EWS / Sahariya of Rajasthan', amount: '₹400/- (One Time Registration OTR)' },
    { category: 'Persons with Benchmark Disabilities (Divyangjan)', amount: '₹400/- (One Time Registration OTR)' }
  ],
  vacancies: [
    { category: 'Non-Scheduled Area (Non-TSP Area)', postCount: 355 },
    { category: 'Scheduled Area (TSP Area)', postCount: 15 },
    { category: 'Sahariya Area (Baran District)', postCount: 1 }
  ],
  selectionProcess: [
    'Stage 1: Preliminary Examination (Objective Screening Test – 70% Law + 30% Language Proficiency, 1/3rd Negative Marking)',
    'Stage 2: Model Answer Key Publication & Online Objection Submission on SSO Portal (07 September 2026)',
    'Stage 3: Scrutiny of Objections by Subject Expert Committee & Final Answer Key Publication',
    'Stage 4: Preliminary Result Declaration & Shortlisting of Candidates for Mains (Category-wise 15 times vacancies)',
    'Stage 5: Main Written Examination (Paper-I: Law 300 Marks, 3 Hours + Paper-II: Language 100 Marks, 2 Hours = Total 400 Marks)',
    'Stage 6: Document Verification (DV) & Scrutiny of Original Law Degrees & Category Certificates strictly based on Mains Merit (No Interview)'
  ],
  examPattern: [
    {
      stageName: 'Preliminary Examination (Objective Type Screening)',
      mode: 'Offline OMR Based Multiple Choice Questions (5-Option Format)',
      duration: '2 Hours + 10 Minutes extra for darkening 5th circle',
      negativeMarking: '1/3rd mark deducted for each wrong answer or unattempted question without darkening 5th circle',
      subjects: [
        { name: 'Law Subjects prescribed in Syllabus', questions: 70, marks: 70 },
        { name: 'Language Proficiency (General Hindi & General English)', questions: 30, marks: 30 }
      ]
    },
    {
      stageName: 'Main Written Examination (Descriptive Scheme)',
      mode: 'Offline Descriptive Written Examination (Subjective Paper)',
      duration: 'Paper-I: 3 Hours (300 Marks) | Paper-II: 2 Hours (100 Marks)',
      negativeMarking: 'No negative marking in descriptive written examination',
      subjects: [
        { name: 'Paper I: Law (Criminal Major & Minor Acts, BNS, BNSS, BSA)', questions: 0, marks: 300 },
        { name: 'Paper II: Language (General Hindi: 50 Marks, General English: 50 Marks)', questions: 0, marks: 100 }
      ]
    }
  ],
  description: 'Rajasthan Public Service Commission (RPSC), Ajmer has officially released the Model Answer Key for the Assistant Prosecution Officer (APO) Competitive Examination 2026 (Advt No. 03/EXAM/APO/EP-I/2026-27). The Preliminary written examination was conducted on 02 September 2026 across Rajasthan for 371 vacancies in the Home (Prosecution) Department. Candidates can download the official Model Answer Key PDF, review the question paper with Master Question Paper, compute tentative marks with 1/3rd negative marking, and submit online objections through SSO Rajasthan portal.',
  shortSummary: 'RPSC APO (Advt 03/2026-27) Model Answer Key officially released on 07 September 2026 for 371 posts. Download official Answer Key PDF, verify against Master Paper, check Mains date (27 December 2026), and submit objections.',
  faq: [
    {
      q: 'When was the RPSC APO Answer Key 2026 officially released?',
      a: 'The official Model Answer Key for RPSC Assistant Prosecution Officer (Advt No. 03/EXAM/APO/EP-I/2026-27) was officially released on 07 September 2026 on the official RPSC website (rpsc.rajasthan.gov.in).'
    },
    {
      q: 'What is the direct link to download the official RPSC APO Model Answer Key PDF?',
      a: 'Candidates can directly download the official Model Answer Key PDF from: https://rpsc.rajasthan.gov.in/Static/AnswerKeys/2A391A07-19AD-4A3D-8E8F-33C0B79C48E1.pdf.'
    },
    {
      q: 'When was the RPSC APO Preliminary Examination held?',
      a: 'The RPSC APO Preliminary Examination was successfully conducted on 02 September 2026 at designated examination centers across Rajasthan.'
    },
    {
      q: 'When was the Exam City and Admit Card issued for RPSC APO 2026?',
      a: 'Exam City details were officially published on 26 August 2026, and the Preliminary Admit Cards were released on 30 August 2026 on the SSO Rajasthan Recruitment Portal.'
    },
    {
      q: 'When is the RPSC APO Mains Examination scheduled?',
      a: 'As per the official RPSC Mains Exam Date Notice (Press Note D431D6FF-37AD-426C-B91C-0CB97216E45F.pdf), the RPSC APO Main Examination is scheduled for 27 December 2026.'
    },
    {
      q: 'How many total vacancies are notified under RPSC APO Recruitment 2026?',
      a: 'A total of 371 vacancies are notified: 355 posts for Non-Scheduled Area (Non-TSP), 15 posts for Scheduled Area (TSP), and 01 post for Sahariya category (Baran district).'
    },
    {
      q: 'What is the marking scheme and negative marking in RPSC APO Preliminary Examination?',
      a: 'In the Preliminary Examination, 70% weightage is given to Law subjects and 30% weightage to Hindi and English Language proficiency. Each correct answer carries marks, and 1/3rd (one-third) of the marks is deducted for each wrong answer or for questions left unattempted without darkening the 5th circle.'
    },
    {
      q: 'What is the 5th circle rule in RPSC APO OMR sheet?',
      a: 'Every question on the OMR sheet has five circles (1, 2, 3, 4, 5). If a candidate does not wish to attempt a question, darkening circle "5" is mandatory. If none of the 5 circles is darkened, 1/3rd mark is deducted. Candidates leaving more than 10% questions with no circle darkened are disqualified.'
    },
    {
      q: 'Do Preliminary Exam marks count towards final selection in RPSC APO?',
      a: 'No. As per the official notification, the marks obtained in the Preliminary Examination are for screening/shortlisting purposes only and shall NOT be counted towards the final selection. Final selection is based solely on the aggregate marks of the Main Written Examination (400 Marks).'
    },
    {
      q: 'Is there an interview or personality test for RPSC APO?',
      a: 'No. As per official service rules and the examination scheme in the notification, final merit is prepared strictly on the basis of marks obtained in the Main Written Examination (Paper-I Law: 300 Marks + Paper-II Language: 100 Marks = Total 400 Marks).'
    },
    {
      q: 'What is the fee and procedure for filing an objection against RPSC APO Answer Key?',
      a: 'Candidates can file online objections through the SSO Rajasthan portal (Recruitment Portal → Question Objection) by paying a prescribed fee of ₹100/- per challenged question along with standard textbook reference proof.'
    },
    {
      q: 'What are the minimum qualifying marks in RPSC APO Mains Examination?',
      a: 'Candidates must obtain a minimum of 40% marks in each paper (Paper-I and Paper-II) of the Main Examination. A relaxation of 5% is admissible to SC and ST candidates (i.e. minimum 35% marks).'
    }
  ],
  allInformation: []
};

export function generateRpscApo50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. Overview of RPSC Assistant Prosecution Officer Recruitment 2026',
      content: 'Rajasthan Public Service Commission (RPSC), Ajmer has published the official Model Answer Key for the Assistant Prosecution Officer (APO / सहायक अभियोजन अधिकारी) Competitive Examination 2026 under Advertisement No. 03/EXAM/APO/EP-I/2026-27 dated 27.05.2026. This recruitment is being conducted to fill 371 permanent vacancies in the Home (Prosecution) Department, Government of Rajasthan (गृह (अभियोजन) विभाग) under the Rajasthan Prosecution Subordinate Service Rules, 1978.'
    },
    {
      id: 2,
      title: '2. Official Answer Key Release Status (07 September 2026)',
      content: 'The Model Answer Key for the RPSC APO Preliminary Competitive Examination was officially released on 07 September 2026. Candidates can download the official Model Answer Key PDF directly from: https://rpsc.rajasthan.gov.in/Static/AnswerKeys/2A391A07-19AD-4A3D-8E8F-33C0B79C48E1.pdf. The key corresponds strictly to the official Master Question Paper released by the Commission.'
    },
    {
      id: 3,
      title: '3. Important Dates & Complete Recruitment Schedule',
      content: 'Notification Published: 27 May 2026 | Online Application Start: 08 June 2026 | Application Last Date: 07 July 2026 (Midnight) | Exam City Notice Released: 26 August 2026 | Admit Card Issued: 30 August 2026 | Preliminary Examination: 02 September 2026 | Model Answer Key Released: 07 September 2026 (Active Now) | Online Objections on SSO: Active as per schedule | Mains Examination Date: 27 December 2026 | Final Result & Cut-off: Not Released / To Be Updated.'
    },
    {
      id: 4,
      title: '4. Detailed Advertisement No. 03/EXAM/APO/EP-I/2026-27 Details',
      content: 'The recruitment process is officially governed by Advertisement No. 03/EXAM/APO/EP-I/2026-27 issued by the Secretary, Rajasthan Public Service Commission, Ajmer on 27.05.2026. The advertisement was issued in accordance with requisition letter F.8-A(04)EXAM/APO/EP-I/2026-27 from the Director, Prosecution Department, Rajasthan, Jaipur.'
    },
    {
      id: 5,
      title: '5. Total Vacancies Breakdown (371 Posts: Non-TSP, TSP & Sahariya)',
      content: 'Total Notified Vacancies: 371 posts across three operational zones: (1) Non-Scheduled Area (Non-TSP Area): 355 posts; (2) Scheduled Area (TSP Area): 15 posts; (3) Sahariya Primitive Tribe Area (Baran District): 01 post. Candidates belonging to TSP areas could opt for Non-TSP posts by indicating preference during online application.'
    },
    {
      id: 6,
      title: '6. Non-Scheduled Area (Non-TSP) Vacancy Distribution (355 Posts)',
      content: 'Vertical category breakdown for Non-TSP 355 posts: General (UR): 110 posts (General Male: 31, WE: 12, WD: 3, DV: 29, including backlog); Scheduled Caste (SC): 69 posts; Scheduled Tribe (ST): 53 posts; Other Backward Classes (OBC-NCL): 53 posts; More Backward Classes (MBC-NCL): 12 posts; Economically Weaker Sections (EWS): 25 posts. Category-wise reservations adhere strictly to Government of Rajasthan service norms.'
    },
    {
      id: 7,
      title: '7. Scheduled Area (TSP) & Sahariya Category Vacancies',
      content: 'Scheduled Area (TSP) contains 15 posts: General (UR): 8 posts (Gen: 3, WE: 0, WD: 0, DV: 1); Scheduled Caste (SC): 0 posts; Scheduled Tribe (ST): 7 posts (Gen: 2, WE: 1, WD: 0, DV: 0). Sahariya Primitive Tribe Area of Baran District contains 01 post (General category). Candidates from other states are treated under Unreserved / General category.'
    },
    {
      id: 8,
      title: '8. Horizontal Reservation Distribution (Ex-Servicemen & PwBD)',
      content: 'Horizontal reservation within 371 posts: Ex-Servicemen: Non-TSP: 17 posts (Gen/UR: 17, SC: 7, ST: 5, OBC: 9, MBC: 2, EWS: 4); TSP: 1 post. Persons with Benchmark Disabilities (PwBD): Non-TSP: B/LV: 5 posts, D/HH: 5 posts, Locomotor Disability / CP / LC / Dw / AAV / SD/SI: 4 posts, SLD / Mul.Dis: 4 posts (including backlog vacancies as per GoR circulars).'
    },
    {
      id: 9,
      title: '9. Educational Qualification – Prescribed Degree in Law',
      content: 'As per Page 1 of the official advertisement: (1) Degree in Law (Professional - 3 Years) OR Integrated Law Course (5 Years) from a University established by law in India. (2) Candidates appearing in the final year/semester of the qualifying law examination were eligible to apply, provided they submit proof of acquiring the final degree before the date of the competitive examination.'
    },
    {
      id: 10,
      title: '10. Compulsory Knowledge of Hindi & Rajasthani Culture',
      content: 'Candidates must possess working knowledge of Hindi written in Devnagri Script and thorough familiarity with Rajasthani dialects and social customs of Rajasthan. Proficiency is directly tested in Paper-II of the Main Examination as well as language components of the Preliminary Examination.'
    },
    {
      id: 11,
      title: '11. Pay Matrix Level L-11 (Grade Pay ₹4,200/-) & Emoluments',
      content: 'The Assistant Prosecution Officer post falls under Pay Matrix Level L-11 with Grade Pay of ₹4,200/- under the Rajasthan Civil Services (Revised Pay) Rules. During the mandatory two-year probation period, candidates receive a fixed monthly remuneration as determined by the Government of Rajasthan without allowances. On confirmation, regular pay, DA, HRA, and state allowances apply.'
    },
    {
      id: 12,
      title: '12. Age Limit (21 to 40 Years as on 01.01.2027)',
      content: 'As per Notification Page 2: Minimum Age: 21 years and Maximum Age: Less than 40 years as on 01.01.2027. Note from Commission: Since the recruitment for the post was not advertised in the previous year, candidates eligible as on 01.01.2026 receive 1 year relaxation in upper age limit as per Rajasthan State service rules.'
    },
    {
      id: 13,
      title: '13. Category-Wise Age Relaxations for Rajasthan Candidates',
      content: 'Relaxation in upper age limit: (a) Male candidates of SC, ST, OBC, MBC, EWS of Rajasthan: 5 Years (up to 45 years); (b) General Category Female: 5 Years (up to 45 years); (c) Female candidates of SC, ST, OBC, MBC, EWS of Rajasthan: 10 Years (up to 50 years); (d) Widows and Divorced Women: No Upper Age Limit (subject to retirement age 60 years); (e) PwBD: 5 Years.'
    },
    {
      id: 14,
      title: '14. Age Concessions for Ex-Servicemen & Service Personnel',
      content: 'In accordance with Rajasthan Civil Services (Absorption of Ex-Servicemen) Rules, 1988, relaxation in upper age limit for Ex-Servicemen is 15 years, provided that the candidate does not exceed 50 years of age (55 years where direct recruitment experience is an essential qualification). Released Emergency Commissioned and Short Service Commissioned Officers receive equivalent relaxation.'
    },
    {
      id: 15,
      title: '15. Application Fee & One Time Registration (OTR) Scheme',
      content: 'Examination fees under the One Time Registration (OTR) scheme (DoP circular dated 19.04.2023): General (UR) and Creamy Layer OBC/MBC: ₹600/-. Reserved categories (SC/ST/OBC-NCL/MBC-NCL/EWS/Sahariya): ₹400/-. Divyangjan (PwBD): ₹400/-. Candidates who have already paid OTR fee earlier on the SSO portal did not have to pay exam fee again.'
    },
    {
      id: 16,
      title: '16. Online Application Submission via SSO Rajasthan Portal',
      content: 'Applications were invited online from 08 June 2026 to 07 July 2026 (12:00 Midnight) through Rajasthan Single Sign-On (SSO) portal: https://sso.rajasthan.gov.in/ via Citizen Apps (G2C) → Recruitment Portal using One Time Registration (OTR). Candidates confirmed application details with Jan Aadhaar / Aadhaar OTP verification.'
    },
    {
      id: 17,
      title: '17. Two-Tier Examination Scheme (Preliminary & Main Examination)',
      content: 'As per Schedule-II of the Service Rules outlined on Page 4 of the notification, the competitive examination consists of two stages: (1) An objective type Preliminary Examination, and (2) A written Main Examination. Preliminary examination acts as a preliminary screening filter to shortlist candidates for the Main examination.'
    },
    {
      id: 18,
      title: '18. Preliminary Examination Structure & Objective Format',
      content: 'The Preliminary Examination is an objective-type OMR-based multiple choice test. It tests candidates in Law subjects as well as language proficiency in Hindi and English. Standard of the language component corresponds to Senior Secondary (Class 12th) level.'
    },
    {
      id: 19,
      title: '19. Weightage in Preliminary Exam (70% Law + 30% Language)',
      content: 'As per notification Para 2 (Page 4): In the Preliminary Examination, 70% weightage is allocated to the subjects prescribed in the syllabus for the Law Paper, and 30% weightage is assigned to test proficiency in Hindi and English language.'
    },
    {
      id: 20,
      title: '20. Screening Nature of Preliminary Examination Marks',
      content: 'Marks obtained in the Preliminary Examination are purely screening/qualifying in nature and shall NOT be counted towards the final merit list or final selection. Candidates obtaining the prescribed cut-off in Prelims are admitted to the Main Examination.'
    },
    {
      id: 21,
      title: '21. Shortlisting Ratio for Main Examination (15 Times Vacancies)',
      content: 'Candidates are admitted to the Main Examination up to approximately 15 times the total number of notified category-wise vacancies, including all candidates who secure the same cut-off marks as determined for the lowest shortlisted candidate in each respective category.'
    },
    {
      id: 22,
      title: '22. Main Written Examination Structure (Paper-I & Paper-II)',
      content: 'The Main Examination consists of two descriptive written papers: Paper-I: Law (300 Marks, Duration: 3 Hours) and Paper-II: Language (100 Marks, Duration: 2 Hours). Aggregate total marks for the Main Examination is 400 Marks. Both papers are compulsory.'
    },
    {
      id: 23,
      title: '23. Paper-I: Law (300 Marks / 3 Hours) Comprehensive Scope',
      content: 'Paper-I is designed to test practical knowledge of candidates in criminal law and criminal court procedure, as well as their competence in framing charges and evaluating evidence in criminal cases. It carries 300 marks for a duration of 3 hours.'
    },
    {
      id: 24,
      title: '24. Paper-I Law Syllabus: Major Criminal Enactments',
      content: 'Syllabus topics 1 to 3: (1) The Indian Penal Code, 1860; (2) The Indian Evidence Act, 1872; (3) The Code of Criminal Procedure, 1973 (CrPC). Candidates must demonstrate comprehensive command over substantive offenses, procedural stages from FIR to trial, and evidentiary principles.'
    },
    {
      id: 25,
      title: '25. Paper-I Law Syllabus: New Criminal Laws (BNS, BSA, BNSS 2023)',
      content: 'Syllabus topics 4 to 6: (4) The Bharatiya Nyaya Sanhita, 2023 (BNS); (5) The Bharatiya Sakshya Adhiniyam, 2023 (BSA); (6) The Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS). Incorporating newly enacted criminal statutes reflects modern procedural and substantive criminal justice in India.'
    },
    {
      id: 26,
      title: '26. Paper-I Law Syllabus: Special Acts (SC/ST, POCSO & JJ Act)',
      content: 'Syllabus topics 7 to 9: (7) The Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989; (8) The Protection of Children from Sexual Offences (POCSO) Act, 2012; (9) The Juvenile Justice (Care and Protection of Children) Act, 2015.'
    },
    {
      id: 27,
      title: '27. Paper-I Law Syllabus: Probation, Arms & Rajasthan Excise Acts',
      content: 'Syllabus topics 10 to 12: (10) The Probation of Offenders Act, 1958; (11) The Arms Act, 1959; (12) The Rajasthan Excise Act, 1950. These statutes form the operational core of daily prosecution work in subordinate and sessions courts of Rajasthan.'
    },
    {
      id: 28,
      title: '28. Paper-I Law Syllabus: Rajasthan Unfair Means Acts (1992 & 2022)',
      content: 'Syllabus topics 13 & 14: (13) The Rajasthan Public Examination (Prevention of Unfair Means) Act, 1992; (14) The Rajasthan Public Examination (Measures for Prevention of Unfair Means in Recruitment) Act, 2022. Covers legal procedures, investigations, attachment of properties, and penal consequences.'
    },
    {
      id: 29,
      title: '29. Paper-II: Language (100 Marks / 2 Hours) Detailed Structure',
      content: 'Paper-II evaluates language skills and proficiency: Part 1: General Hindi (50 Marks) and Part 2: General English (50 Marks). The standard of Paper-II is that of Senior Secondary level. Total duration: 2 Hours.'
    },
    {
      id: 30,
      title: '30. Minimum Qualifying Marks in Mains (40% Standard / 35% SC/ST)',
      content: 'As per notification Para 4 (Page 4): Minimum qualifying marks for each paper in the Main Examination shall be 40%. Provided that the percentage fixed above shall be relaxed by 5% (to 35%) for candidates belonging to the Scheduled Castes and Scheduled Tribes.'
    },
    {
      id: 31,
      title: '31. Mandatory Five-Option OMR Rule in Preliminary Examination',
      content: 'In the Preliminary Examination, each question has five options marked as 1, 2, 3, 4, 5. Candidates must darken only one circle indicating the correct answer using a BLUE BALL POINT PEN. Darkening multiple circles for a single question is treated as an incorrect response.'
    },
    {
      id: 32,
      title: '32. Mandatory Darkening of 5th Circle for Unattempted Questions',
      content: 'If a candidate does not wish to attempt a question, they MUST darken circle "5". If none of the five circles is darkened, one-third (1/3rd) part of the marks assigned to that question shall be deducted as a penalty.'
    },
    {
      id: 33,
      title: '33. Extra 10 Minutes Window for Darkening 5th Circle',
      content: 'After solving the question paper, candidates must ascertain that they have darkened one of the circles for each question. An extra time of 10 minutes beyond the scheduled examination duration is provided exclusively for this purpose.'
    },
    {
      id: 34,
      title: '34. Strict 10% Disqualification Rule for Blank Circles',
      content: 'As per Instruction No. 5 (Page 5): A candidate who has not darkened any of the five circles in MORE THAN 10% of total questions (e.g. 11+ questions in a 100-question paper) shall be permanently disqualified from the examination.'
    },
    {
      id: 35,
      title: '35. Exam City Intimation Details Released on 26 August 2026',
      content: 'RPSC released the official Exam City / District Intimation Press Note on 26 August 2026 (Notice: 3D38E43A-CCB7-4415-B543-61D93575E0E1.pdf). Candidates logged into their SSO Rajasthan portal (sso.rajasthan.gov.in) to verify their assigned test city.'
    },
    {
      id: 36,
      title: '36. Preliminary Admit Card Released on 30 August 2026',
      content: 'The official Preliminary Examination Admit Cards were made available on 30 August 2026 on the Rajasthan Recruitment Portal: https://recruitment.rajasthan.gov.in/rectlogingetadmitcard. Candidates downloaded hall tickets using Application Number and Date of Birth.'
    },
    {
      id: 37,
      title: '37. Preliminary Examination Conducted on 02 September 2026',
      content: 'The RPSC Assistant Prosecution Officer Preliminary Examination was successfully conducted on Wednesday, 02 September 2026 across district headquarters in Rajasthan under strict biometric and live videography surveillance.'
    },
    {
      id: 38,
      title: '38. Official Model Answer Key Released on 07 September 2026',
      content: 'RPSC released the provisional Model Answer Key on 07 September 2026. The key contains official answers verified by the Commission for all questions in the Master Question Paper. Direct link: https://rpsc.rajasthan.gov.in/Static/AnswerKeys/2A391A07-19AD-4A3D-8E8F-33C0B79C48E1.pdf.'
    },
    {
      id: 39,
      title: '39. Matching Answers Strictly with RPSC Master Question Paper',
      content: 'Candidates must download the official Master Question Paper from the RPSC website before matching answers. The Model Answer Key numbers correspond to the question sequence in the Master Question Paper, NOT to individual candidate test booklets (Series A, B, C, D).'
    },
    {
      id: 40,
      title: '40. Online Objection Portal on SSO Rajasthan (₹100/Question Fee)',
      content: 'Candidates who detect discrepancies in the Model Answer Key can lodge online objections via SSO Rajasthan (sso.rajasthan.gov.in → Recruitment Portal → Question Objection). A non-refundable fee of ₹100/- per challenged question is payable via e-Mitra or online payment gateway.'
    },
    {
      id: 41,
      title: '41. Standard Documentary Proof Requirement for Objections',
      content: 'Objections must be backed by authenticated proofs from standard reference textbooks, law reports, or authentic government statutory gazette publications. Candidates must upload clear PDF copies indicating the book name, author name, publisher, and page number.'
    },
    {
      id: 42,
      title: '42. Scrutiny of Objections by Subject Expert Committee',
      content: 'All submitted objections are referred to an independent Subject Expert Committee appointed by RPSC. The expert committee reviews all candidate representations and standard references to formulate the Final Answer Key recommendations.'
    },
    {
      id: 43,
      title: '43. Final Answer Key Determination & Question Deletion Formula',
      content: 'If questions are found incorrect or have multiple correct answers, RPSC deletes them. The weightage of deleted questions is distributed proportionally among the remaining valid questions using the official RPSC scaling formula: Effective Marks = (Total Marks / Remaining Valid Questions) × Valid Correct Answers.'
    },
    {
      id: 44,
      title: '44. Preliminary Result Declaration & Shortlisting for Mains',
      content: 'The Preliminary Examination Result along with category-wise cut-off marks will be published on the RPSC website (rpsc.rajasthan.gov.in) in PDF format listing the Roll Numbers of shortlisted candidates admitted to the Main Examination.'
    },
    {
      id: 45,
      title: '45. Mains Examination Date (27 December 2026 Officially Notified)',
      content: 'As per the official RPSC Press Note dated 27 May 2026 (Notice: D431D6FF-37AD-426C-B91C-0CB97216E45F.pdf), the RPSC APO Main Written Examination is officially scheduled to take place on 27 December 2026.'
    },
    {
      id: 46,
      title: '46. Document Verification (DV) & Scrutiny Protocol',
      content: 'Shortlisted candidates based on Main Examination performance will be required to submit a Detailed Application Form (DAF) and appear for Document Verification at RPSC Headquarters, Ajmer. All original law degrees, mark sheets, category certificates, and RS-CIT/character certificates are verified.'
    },
    {
      id: 47,
      title: '47. Final Merit List Based Solely on Mains Written Marks (400 Marks)',
      content: 'There is NO interview or personality test for RPSC APO recruitment. Final merit and selection recommendations are based strictly on aggregate marks scored in Paper-I (300 Marks) and Paper-II (100 Marks) of the Main Examination (Total: 400 Marks).'
    },
    {
      id: 48,
      title: '48. Character Verification & Medical Fitness Rules',
      content: 'Candidates selected in the final merit list must produce a character certificate from the institution last attended, police verification clearance, and medical fitness certificate issued by the competent Chief Medical and Health Officer (CMHO).'
    },
    {
      id: 49,
      title: '49. Official RPSC Contact Directory & Candidate Helpdesk',
      content: 'Rajasthan Public Service Commission, Ghughra Ghati, Jaipur Road, Ajmer - 305001. Reception Contact: 0145-2635212 / 2635200 | SSO / Recruitment Portal Helpdesk: 0141-2850000 | Official Website: https://rpsc.rajasthan.gov.in/home.'
    },
    {
      id: 50,
      title: '50. Essential Advisory & Warning Regarding Fraudulent Elements',
      content: 'Candidates are cautioned against fraudulent elements and touts promising appointments. RPSC selections are conducted strictly on merit through competitive examination. Any use of unfair means invites criminal prosecution under the Rajasthan Public Examination Acts of 1992 and 2022 and debarment.'
    }
  ];
}
