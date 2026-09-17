import { ExamRecord, ExamInfoSection } from '../types/exam';

export interface UkssscScalerVacancyCategory {
  category: string;
  code: string;
  totalPosts: number;
  women: number;
  dff: number;
  exServicemen: number;
  orphan: number;
  skilledSports: number;
  stateMovement: number;
  divyang: string;
}

export const UKSSSC_SCALER_VACANCIES: UkssscScalerVacancyCategory[] = [
  {
    category: 'Scheduled Caste (SC / अ०जा०)',
    code: 'SC',
    totalPosts: 39,
    women: 12,
    dff: 1,
    exServicemen: 2,
    orphan: 2,
    skilledSports: 2,
    stateMovement: 4,
    divyang: 'Included in Total'
  },
  {
    category: 'Scheduled Tribe (ST / अ०ज०जा०)',
    code: 'ST',
    totalPosts: 8,
    women: 2,
    dff: 0,
    exServicemen: 0,
    orphan: 0,
    skilledSports: 0,
    stateMovement: 1,
    divyang: 'Included in Total'
  },
  {
    category: 'Other Backward Classes (OBC / अ०पि०व०)',
    code: 'OBC',
    totalPosts: 27,
    women: 8,
    dff: 1,
    exServicemen: 2,
    orphan: 2,
    skilledSports: 1,
    stateMovement: 3,
    divyang: 'Included in Total'
  },
  {
    category: 'Economically Weaker Section (EWS / आ०क०व०)',
    code: 'EWS',
    totalPosts: 21,
    women: 6,
    dff: 0,
    exServicemen: 1,
    orphan: 1,
    skilledSports: 1,
    stateMovement: 2,
    divyang: 'Included in Total'
  },
  {
    category: 'Unreserved / General (UR / अनारक्षित)',
    code: 'UR',
    totalPosts: 105,
    women: 32,
    dff: 2,
    exServicemen: 5,
    orphan: 5,
    skilledSports: 4,
    stateMovement: 10,
    divyang: 'Included in Total'
  }
];

export const UKSSSC_SCALER_HORIZONTAL_TOTALS = {
  women: 60,
  dff: 4,
  exServicemen: 10,
  orphan: 10,
  skilledSports: 8,
  stateMovement: 20,
  divyangTotal: 8,
  divyangBreakdown: [
    { subCategory: 'Hard of Hearing / Partially Deaf (HH / PD)', posts: 4 },
    { subCategory: 'Acid Attack Victims / Autistic Spectrum (AAV / AV)', posts: 2 },
    { subCategory: 'Leprosy Cured (LC)', posts: 2 }
  ]
};

export const UKSSSC_SCALER_PST_STANDARDS = {
  maleGeneral: {
    gender: 'Male (General, OBC, SC)',
    height: '163 cm',
    chest: 'Minimum 5 cm expansion (सीना फुलाने पर 5 सेमी० विस्तार अनिवार्य)'
  },
  femaleGeneral: {
    gender: 'Female (General, OBC, SC)',
    height: '150 cm',
    chest: 'Not Applicable'
  },
  maleRelaxed: {
    gender: 'Male (ST, Gorkha, Nepali, Assamese, Ladakhi, Sikkimese, Bhutanese, Garhwali, Kumaoni, Naga, Arunachal, Lahaul & Spiti, Meghalaya)',
    height: '152 cm',
    chest: 'Minimum 5 cm expansion'
  },
  femaleRelaxed: {
    gender: 'Female (ST, Gorkha, Nepali, Assamese, Ladakhi, Sikkimese, Bhutanese, Garhwali, Kumaoni, Naga, Arunachal, Lahaul & Spiti, Meghalaya)',
    height: '145 cm',
    chest: 'Not Applicable'
  },
  visionStandard: 'Defect in normal vision must not exceed +/- 4.00 Diopters (सामान्य दृष्टि में +/- 4.00 डायोप्टर से अधिक दोष न हो)'
};

export const UKSSSC_SCALER_PET_STANDARDS = [
  {
    event: '1. Running / Race (दौड़)',
    maleCriteria: '25 km in maximum 04 Hours (25 किमी० दौड़)',
    femaleCriteria: '14 km in maximum 04 Hours (14 किमी० दौड़)',
    attempts: '1 Attempt only (Conducted first; qualifying mandatory to enter field events)',
    nature: 'Qualifying'
  },
  {
    event: '2. Shot Put / शॉट पुट (7.275 kg)',
    maleCriteria: '5.00 Meters',
    femaleCriteria: '3.50 Meters',
    attempts: 'Maximum 3 Attempts (अधिकतम 3 अवसर)',
    nature: 'Qualifying'
  },
  {
    event: '3. Long Jump / लम्बी कूद',
    maleCriteria: '4.00 Meters',
    femaleCriteria: '2.00 Meters',
    attempts: 'Maximum 3 Attempts (अधिकतम 3 अवसर)',
    nature: 'Qualifying'
  },
  {
    event: '4. High Jump / ऊँची कूद',
    maleCriteria: '1.10 Meters',
    femaleCriteria: '0.70 Meters',
    attempts: 'Maximum 3 Attempts (अधिकतम 3 अवसर)',
    nature: 'Qualifying'
  }
];

export function generateUkssscScaler50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: 'Section 01: Recruitment Overview & Commission Details',
      content:
        'The Uttarakhand Subordinate Service Selection Commission (UKSSSC), Raipur, Dehradun has published official Advertisement No. 82/उ०अ०से०च०आ०/2026 on 15 September 2026. This recruitment drive invites online applications for 200 vacant posts of Scaler (स्केलर - समूह \'ग\') under the Uttarakhand Forest Development Corporation (उत्तराखण्ड वन विकास निगम). The post carries Pay Matrix Level-02 (₹19,900 – ₹63,200) and is covered under EPF. Selection is made through a 2-stage process comprising Physical Tests (PST/PET - Qualifying) and a 100-mark Intermediate Science/Maths written examination.'
    },
    {
      id: 2,
      title: 'Section 02: Latest Official Updates & Notification Status',
      content:
        'Key updates confirmed in Advt 82/2026:\n• Notification Release: 15 September 2026\n• Online Application Portal Opens: 22 September 2026\n• Online Application Closing Date: 22 October 2026\n• Application Correction Window: 26 to 27 October 2026\n• Physical Standard & Efficiency Test (PST/PET): Commencing from 19 November 2026 onwards\n• Written Exam Date: Not Released / To Be Updated (to be announced on sssc.uk.gov.in).\n• Status: Application Open.'
    },
    {
      id: 3,
      title: 'Section 03: Important Dates Schedule',
      content:
        'Complete schedule for UKSSSC Scaler Recruitment 2026:\n• Official Advertisement Date: 15 September 2026\n• Online Application Start Date: 22 September 2026\n• Last Date to Submit Online Application: 22 October 2026 (23:59 hrs)\n• Last Date for Online Fee Payment: 22 October 2026\n• Application Correction Window: 26 October to 27 October 2026\n• PST / PET Start Date: From 19 November 2026 onwards\n• PST / PET Admit Card: Expected 1st/2nd week of November 2026\n• Written Examination Date: Not Released / To Be Updated\n• Answer Key & Result: To be updated following examination.'
    },
    {
      id: 4,
      title: 'Section 04: Vacancy Overview (200 Posts)',
      content:
        'Total Vacancy: 200 Posts.\nDepartment: Uttarakhand Forest Development Corporation (उत्तराखण्ड वन विकास निगम).\nCadre: Group C (समूह \'ग\').\nPost Code: 548/623/82/2026.\nAll 200 vacancies are open for direct recruitment across all administrative regions of Uttarakhand under standard reservation provisions.'
    },
    {
      id: 5,
      title: 'Section 05: Category-wise Vacancy Breakdown',
      content:
        'Vertical category quota officially notified in Advt 82/2026:\n• Unreserved / General (UR / अनारक्षित): 105 posts (52.5%)\n• Scheduled Caste (SC / अ०जा०): 39 posts (19.5%)\n• Other Backward Classes (OBC / अ०पि०व०): 27 posts (13.5%)\n• Economically Weaker Section (EWS / आ०क०व०): 21 posts (10.5%)\n• Scheduled Tribe (ST / अ०ज०जा०): 08 posts (4.0%)\nTotal: 200 posts.'
    },
    {
      id: 6,
      title: 'Section 06: Reservation Rules (Vertical Quota)',
      content:
        'Vertical reservation benefits (SC, ST, OBC, EWS) are strictly admissible to candidates holding a valid Domicile / Permanent Residence Certificate of Uttarakhand State. Candidates belonging to reserved categories of other states will be treated as Unreserved (General) category candidates and must pay the General application fee (₹300) without age relaxation benefits.'
    },
    {
      id: 7,
      title: 'Section 07: Horizontal Reservation Quotas (Women, DFF, Ex-SM, Orphan, Sports, Movement)',
      content:
        'Horizontal reservation quotas distributed across categories:\n• Uttarakhand Women (उत्तराखण्ड महिला - 30%): 60 posts (UR 32, SC 12, ST 02, OBC 08, EWS 06)\n• Dependents of Freedom Fighters (DFF - 2%): 04 posts (UR 02, SC 01, OBC 01)\n• Ex-Servicemen (भूतपूर्व सैनिक - 5%): 10 posts (UR 05, SC 02, OBC 02, EWS 01)\n• Orphan Children (अनाथ - 5%): 10 posts (UR 05, SC 02, OBC 02, EWS 01)\n• Skilled Sportspersons (कुशल खिलाड़ी - 4%): 08 posts (UR 04, SC 02, OBC 01, EWS 01)\n• Uttarakhand State Movement Activists / Dependents (राज्य आन्दोलनकारी - 10%): 20 posts (UR 10, SC 04, ST 01, OBC 03, EWS 02)\n• Persons with Benchmark Disabilities (PwBD / दिव्यांग): 08 posts (HH/PD 4, AAV/AV 2, LC 2).'
    },
    {
      id: 8,
      title: 'Section 08: Post Details & Cadre Classification',
      content:
        'Post Name: Scaler (स्केलर)\nPost Code: 548/623/82/2026\nNature of Post: Group C (समूह \'ग\'), Non-Gazetted (अराजपत्रित), Temporary (अस्थायी) with permanent prospects per Nigam service regulations, Covered under Employee Provident Fund (EPF).\nNature of Duties: Technical timber logging measurement and field forest depot management.'
    },
    {
      id: 9,
      title: 'Section 09: Department Details (Van Vikas Nigam)',
      content:
        'Uttarakhand Forest Development Corporation (उत्तराखण्ड वन विकास निगम) is a statutory corporate enterprise constituted by the Government of Uttarakhand under the UP Forest Corporation Act (as adapted in Uttarakhand). It handles commercial extraction, log grading, depot auctions, and transit of forest timber and minor forest produce across Kumaon and Garhwal divisions.'
    },
    {
      id: 10,
      title: 'Section 10: Job Profile & Field Responsibilities',
      content:
        'The Scaler plays a crucial technical role in timber management:\n• Scaling & Measurement: Accurate measurement of timber log girth and length using the Quarter Girth Formula.\n• Grading: Classifying logs into commercial wood grades according to grain, knot presence, and species.\n• Forest Depot Operations: Maintaining depot stock registers, inward timber challans, and auction lots.\n• Transit Verification: Verifying timber transit passes and preventing illicit timber smuggling.\n• Field Supervision: Supervising logging and transport laborers in mountain and foothill forest lots.'
    },
    {
      id: 11,
      title: 'Section 11: Pay Scale & Pay Matrix Level-02',
      content:
        'The post of Scaler carries Pay Matrix Level-02 (₹19,900 – ₹63,200) under the 7th Central Pay Commission framework as adopted by Uttarakhand Forest Development Corporation. Initial Basic Pay is ₹19,900 at Cell 1 of Level-02.'
    },
    {
      id: 12,
      title: 'Section 12: Salary Structure & Monthly Emoluments',
      content:
        'Estimated Monthly Salary on Appointment:\n• Basic Pay: ₹19,900\n• Dearness Allowance (DA at 50%): ₹9,950\n• House Rent Allowance (HRA - 9% to 27% by city): ₹1,800 to ₹3,600\n• Hill / Field Allowance: As applicable per posting station\n• EPF Contribution: As per statutory corporate norms\n• Estimated Gross Salary: ₹27,500 – ₹31,000 per month\n• Estimated Net In-Hand Salary: ₹24,000 – ₹27,000 per month.'
    },
    {
      id: 13,
      title: 'Section 13: Age Limit & Crucial Date (01 July 2026)',
      content:
        'Prescribed Age Limit:\n• Minimum Age: 18 Years\n• Maximum Age: 28 Years\nCrucial Determination Date: 01 July 2026.\nCandidate must have been born not earlier than 02 July 1998 and not later than 01 July 2008 (both dates inclusive).'
    },
    {
      id: 14,
      title: 'Section 14: Category-wise Age Relaxations',
      content:
        'Upper Age Relaxations (Admissible to Uttarakhand Domicile Candidates):\n• SC / ST / OBC Candidates: 05 Years relaxation (Up to 33 Years)\n• Dependents of Freedom Fighters (DFF): 05 Years relaxation (Up to 33 Years)\n• PwBD (Divyangjan) Candidates: 10 Years relaxation (Up to 38 Years)\n• Ex-Servicemen: Deduct military service duration + 3 years from actual age per state service rules\n• Skilled Sportspersons / State Movement Activists: Per applicable Government Orders.'
    },
    {
      id: 15,
      title: 'Section 15: Educational Qualification (Science or Mathematics Mandatory)',
      content:
        'Essential Educational Qualification (अनिवार्य शैक्षिक अर्हता):\nCandidate must have passed Intermediate (Class 12th / 10+2) examination with Science OR Mathematics (विज्ञान अथवा अंकगणित के साथ) from a recognized Board established by law in India or a recognized school/institution situated within Uttarakhand State.\nImportant: Candidates with Intermediate in Arts without Mathematics or Commerce without Mathematics are strictly NOT eligible.'
    },
    {
      id: 16,
      title: 'Section 16: Eligibility Criteria & Nationality',
      content:
        'To be eligible for UKSSSC Scaler Recruitment 2026, a candidate must:\n1. Be a citizen of India or Tibetan refugee settled before 01.01.1962.\n2. Meet the age criteria (18–28 years as of 01.07.2026 with applicable relaxations).\n3. Possess 10+2 Intermediate with Science or Mathematics on or before 22.10.2026.\n4. Satisfy Uttarakhand domicile or employment exchange registration criteria.\n5. Fulfill prescribed physical measurements and pass endurance running.\n6. Have good moral character with no criminal disqualifications.'
    },
    {
      id: 17,
      title: 'Section 17: Domicile Rules & Employment Exchange Regulations',
      content:
        'As per Section 09 of the official advertisement, candidates must meet at least ONE of the following conditions:\n(a) Valid registration in any Employment Exchange in Uttarakhand as of 22 October 2026, OR\n(b) Possess valid Permanent Residence / Domicile Certificate of Uttarakhand, OR\n(c) Passed both High School (Class 10) and Intermediate (Class 12) from institutions in Uttarakhand, OR\n(d) Wards/spouses of state/central/paramilitary personnel stationed in Uttarakhand whose services cannot be transferred out.'
    },
    {
      id: 18,
      title: 'Section 18: Preferential Qualification (अधिमानी अर्हता)',
      content:
        'In the event of a tie in written examination marks between two or more candidates, preference is given to:\n1. Candidates who have served in the Territorial Army (प्रादेशिक सेना) for a minimum period of 02 years, OR\n2. Candidates who have obtained "B" or "C" certificate of National Cadet Corps (NCC).'
    },
    {
      id: 19,
      title: 'Section 19: Physical Eligibility & Health Standards',
      content:
        'Physical fitness is mandatory for forestry field duties. Physical testing has two parts:\nPart 1: Physical Standard Test (PST) – Measurement of Height and Chest (Male only) + Eye vision limit.\nPart 2: Physical Efficiency Test (PET) – 4 athletic events including long-distance endurance running.\nPhysical tests are purely QUALIFYING (अहर्कारी). No marks are awarded, but clearing them is a prerequisite for written exam evaluation and merit shortlisting.'
    },
    {
      id: 20,
      title: 'Section 20: Physical Standards (Height & Chest Criteria)',
      content:
        'Official Height & Chest Specifications (Section 5.vi.a):\n• Male (General / OBC / SC): Height minimum 163 cm; Chest expansion minimum 5 cm (फुलाव न्यूनतम 5 सेमी).\n• Male (ST & Hill Area Candidates): Height relaxed to 152 cm; Chest expansion minimum 5 cm.\n• Female (General / OBC / SC): Height minimum 150 cm; Chest measurement not applicable.\n• Female (ST & Hill Area Candidates): Height relaxed to 145 cm.\nApproved Hill Communities: Garhwali, Kumaoni, Gorkha, Nepali, Assamese, Ladakhi, Sikkimese, Bhutanese, Naga, Arunachal Pradesh, Lahaul & Spiti, Meghalaya.'
    },
    {
      id: 21,
      title: 'Section 21: PST (Physical Standard Test Protocol & Vision)',
      content:
        'Vision Benchmark (Section 5.vi.b):\nNo candidate will be appointed whose defect in normal vision exceeds +/- 4.00 Diopters (सामान्य दृष्टि में +/- 4.00 डायोप्टर से अधिक दोष नहीं होना चाहिए).\nCandidates must be free from color blindness, squint, knock-knees, flat foot, and major physical deformities that impede outdoor trekking in forest depots.'
    },
    {
      id: 22,
      title: 'Section 22: PET (Physical Efficiency Test – 4 Mandatory Events)',
      content:
        'PET Events and Qualifying Standards:\n1. 25 km Run (Male in 4 hours) / 14 km Run (Female in 4 hours) – 1 attempt only.\n2. Shot Put (7.275 kg): Male 5.00 meters | Female 3.50 meters (Max 3 attempts).\n3. Long Jump: Male 4.00 meters | Female 2.00 meters (Max 3 attempts).\n4. High Jump: Male 1.10 meters | Female 0.70 meters (Max 3 attempts).\nCritical Rule: The Running event is conducted first. Failure in the run results in immediate elimination before field events.'
    },
    {
      id: 23,
      title: 'Section 23: Written Examination Overview & OMR Mode',
      content:
        'The written test is an Objective Type with Multiple Choice Questions (MCQs) offline test administered on OMR sheets (with candidate copy). Duration: 02 Hours (120 Minutes). Total Questions: 100. Total Marks: 100. The standard of the paper is of Intermediate (Science & Mathematics) level.'
    },
    {
      id: 24,
      title: 'Section 24: Exam Pattern & Structure',
      content:
        'Component-wise Marks Breakdown:\n1. Intermediate Science (Physics, Chemistry, Biology): 40 Questions, 40 Marks\n2. Intermediate Mathematics & Mensuration: 25 Questions, 25 Marks\n3. Uttarakhand State GK, Geography & Forest Resources: 20 Questions, 20 Marks\n4. General Hindi & Mental Ability / Reasoning: 15 Questions, 15 Marks\nTotal: 100 Questions, 100 Marks, 120 Minutes.'
    },
    {
      id: 25,
      title: 'Section 25: Detailed Syllabus Guidelines',
      content:
        'The written exam syllabus tests both scientific analytical aptitude and regional state awareness:\n• Science: Physics mechanics, optics, thermodynamics; Chemistry periodic table, atomic structure, organic bonds; Biology botany, plant physiology, forest ecosystems.\n• Mathematics: Algebra, arithmetic, mensuration (area, volume of timber logs, cylinders), trigonometry, statistics.\n• Uttarakhand GK: History, rivers, forests, Van Panchayats, Chipko movement, state geography.\n• Hindi & Reasoning: Grammar, vocabulary, idioms, coding-decoding, logical deductions.'
    },
    {
      id: 26,
      title: 'Section 26: Subject-wise Syllabus (Physics, Chemistry, Biology, Maths, GK, Hindi)',
      content:
        'Detailed Topic Guide:\n• Physics: Motion, Work & Energy, Laws of Gravitation, Reflection/Refraction, Lenses and Diopter calculations, Electricity.\n• Chemistry: Chemical reactions, Acids/Bases, Carbon and its compounds, Periodic classification.\n• Biology: Plant tissues, photosynthesis, ecology, forest biodiversity in Western Himalayas.\n• Mathematics: Polynomials, quadratic equations, arithmetic progressions, Quarter Girth timber calculations, circle/cylinder volumes.\n• Uttarakhand GK: 13 districts, flora & fauna, National Parks (Corbett, Rajaji), Van Vikas Nigam objectives.\n• General Hindi: Varn vichar, vartani shuddhi, sandhi, samas, vilom, paryayvachi.'
    },
    {
      id: 27,
      title: 'Section 27: Marking Scheme (+1.00 & Deductions)',
      content:
        'Marking Rules:\n• Each correct response is awarded +1.00 mark.\n• Each incorrect response incurs a deduction of 0.25 (1/4th) mark as negative marking.\n• Unattempted questions receive 0 marks (no penalty).\n• If more than one option is darkened for a single question on the OMR sheet, it is treated as a wrong answer and -0.25 marks will be deducted.'
    },
    {
      id: 28,
      title: 'Section 28: Negative Marking Rules & Calculation Formula',
      content:
        'Negative Marking Formula: Net Score = (Correct Answers × 1.00) - (Incorrect Answers × 0.25).\nCandidates are strongly advised not to indulge in blind guessing because every 4 wrong answers cancel out 1 correctly answered question.'
    },
    {
      id: 29,
      title: 'Section 29: Normalization Method & Minimum Qualifying Benchmarks',
      content:
        'Minimum Qualifying Benchmark (अनिवार्य न्यूनतम अहर्ता अंक):\n• General (UR), OBC, and EWS Candidates: Minimum 45% marks (45 out of 100).\n• Scheduled Caste (SC) and Scheduled Tribe (ST) Candidates: Minimum 35% marks (35 out of 100).\nCandidates scoring below these thresholds are summarily disqualified from the merit list.\nIf the exam is held in multiple shifts, percentile or equi-percentile normalization approved by UKSSSC will be adopted.'
    },
    {
      id: 30,
      title: 'Section 30: Selection Process (Stage-by-Stage Journey)',
      content:
        'Official Selection Journey:\nStage 1: PST & PET (Commencing 19 Nov 2026) – Physical Standard verification & 4-event endurance tests (Qualifying only).\nStage 2: Written Examination (100 Marks OMR) – Competitive test on Science & Maths.\nStage 3: Document Verification (DV) – Original certificates verification of top-ranked candidates.\nStage 4: Medical Fitness Examination – CMO fitness certificate before appointment order issue.'
    },
    {
      id: 31,
      title: 'Section 31: Merit List Preparation Rules & Principles',
      content:
        'The Final Selection Merit List is drafted strictly on the basis of marks scored in the 100-mark written competitive examination, subject to candidates having successfully qualified the PST and PET stages and verified their original credentials in Document Verification.'
    },
    {
      id: 32,
      title: 'Section 32: Tie Breaking Criteria & Priority Rules',
      content:
        'In case two or more candidates obtain identical aggregate written marks:\n1. Preferential Qualification: Candidate possessing NCC "B"/"C" or 2-year Territorial Army service ranks higher.\n2. Age Seniority: If still tied, candidate older in age is placed higher in merit.\n3. Alphabetical Order: If age is identical, alphabetical order of the candidate\'s English name as registered is considered.'
    },
    {
      id: 33,
      title: 'Section 33: Application Fee by Category',
      content:
        'Official Fee Structure (Section 17):\n• General / Unreserved (UR): ₹300.00\n• Uttarakhand Other Backward Classes (OBC): ₹300.00\n• Uttarakhand Scheduled Caste (SC): ₹150.00\n• Uttarakhand Scheduled Tribe (ST): ₹150.00\n• Uttarakhand Economically Weaker Section (EWS): ₹150.00\n• Uttarakhand Divyangjan (PwBD): ₹150.00\n• Uttarakhand Orphan Children (अनाथ): ₹0.00 (Exempted).\nFee is non-refundable.'
    },
    {
      id: 34,
      title: 'Section 34: Payment Method & Online Transaction Rules',
      content:
        'Application fee must be paid purely through online digital gateways:\n• Net Banking of major Indian banks\n• Debit Cards (RuPay, Visa, MasterCard)\n• Credit Cards\n• Unified Payments Interface (UPI - BHIM, Google Pay, PhonePe, Paytm).\nOffline bank challan or postal orders are NOT accepted. Keep the transaction reference ID safe.'
    },
    {
      id: 35,
      title: 'Section 35: Registration/OTR (One Time Registration) System',
      content:
        'Step-by-step OTR on sssc.uk.gov.in:\n1. Click on "OTR (One Time Registration)" on the UKSSSC portal.\n2. Register using an active Mobile Number and valid Email ID.\n3. Enter Aadhaar card number and basic demographic details.\n4. Save login credentials (User ID and Password).\n5. Fill permanent and communication addresses, qualification, and reservation claims.\n6. Upload photograph, signature, and left thumb impression.'
    },
    {
      id: 36,
      title: 'Section 36: How To Apply Online (Official Portal Walkthrough)',
      content:
        'Application Flow:\n1. Visit official website: https://sssc.uk.gov.in/.\n2. Login with OTR credentials.\n3. Select Advertisement No. 82/2026: Post of Scaler (Van Vikas Nigam).\n4. Verify pre-filled educational data and confirm study of Intermediate Science or Mathematics.\n5. Select exam city preferences.\n6. Pay application fee through online payment gateway.\n7. Review final application summary and submit.\n8. Download and print 2 copies of the completed application form.'
    },
    {
      id: 37,
      title: 'Section 37: Application Process Verification & Summary Review',
      content:
        'Before clicking Final Submit, verify:\n• Name and parent names match Class 10th marksheet exactly.\n• Date of birth matches matriculation certificate.\n• Class 12th stream clearly indicates Science or Maths.\n• Category certificate number and issue date are valid.\n• Uttarakhand Employment Exchange registration is active as of 22 Oct 2026.'
    },
    {
      id: 38,
      title: 'Section 38: Photo & Signature Upload Rules',
      content:
        'Digital Upload Parameters:\n• Passport Photo: Recent color photograph (white background), 20 KB to 50 KB in JPG/JPEG format.\n• Signature: Clear signature in black ink on white paper, 10 KB to 20 KB in JPG/JPEG format.\n• Left Thumb Impression (LTI): Clear impression in blue/black ink, 10 KB to 20 KB in JPG/JPEG format.\nDo not wear dark sunglasses or hats in the photograph.'
    },
    {
      id: 39,
      title: 'Section 39: Documents Required for Online Application',
      content:
        'Keep soft copies ready:\n1. Matriculation (Class 10) certificate showing Date of Birth.\n2. Intermediate (Class 12) marksheet and certificate with Science or Maths.\n3. Uttarakhand Domicile / Permanent Residence Certificate.\n4. Category Certificate (SC/ST/OBC/EWS) issued by competent authority.\n5. Uttarakhand Employment Exchange Registration card.\n6. DFF / Ex-SM / Orphan / Sports certificate if claiming horizontal quota.\n7. Valid Photo ID proof (Aadhaar Card, Voter ID, Passport, DL).'
    },
    {
      id: 40,
      title: 'Section 40: Correction Window (26–27 October 2026)',
      content:
        'Correction Policy:\nAn online correction facility will be open for 2 days from 26 October to 27 October 2026 on sssc.uk.gov.in.\nCandidates can modify allowable particulars in their submitted application. If category changes from reserved to unreserved, the fee difference must be remitted online during this window. No changes are permitted after 27 October 2026.'
    },
    {
      id: 41,
      title: 'Section 41: Exam Centre Allotment & Test Cities',
      content:
        'Written examination centers are organized across major district headquarters in Uttarakhand including Dehradun, Haridwar, Roorkee, Haldwani, Nainital, Almora, Pauri Garhwal, Tehri Garhwal, Srinagar, Rudraprayag, Uttarkashi, Chamoli (Gopeshwar), Pithoragarh, Bageshwar, Champawat, and Udham Singh Nagar (Rudrapur/Kashipur).'
    },
    {
      id: 42,
      title: 'Section 42: PST/PET Centre Grounds & Infrastructure',
      content:
        'Physical Standard & Efficiency Tests commencing 19 November 2026 will be conducted at designated sports stadiums, police line grounds, and forest training academy campuses (e.g., Maharana Pratap Sports College Raipur Dehradun, Indira Gandhi International Sports Stadium Haldwani) equipped with digital timing and height stadiometers.'
    },
    {
      id: 43,
      title: 'Section 43: Admit Card Release Status & Protocol',
      content:
        'Status: Not Released / To Be Updated. Admit cards for PST/PET will be issued online approximately 7 to 10 days before 19 November 2026 on sssc.uk.gov.in. No printed admit cards will be sent by post. Candidates must login with Application Number / OTR ID and Date of Birth to download their e-Admit Card.'
    },
    {
      id: 44,
      title: 'Section 44: Exam Day Instructions & Reporting Protocol',
      content:
        'Mandatory Test Day Protocol:\n• Reporting Time: Report at least 60 minutes prior to gate closing.\n• Mandatory Documents: Printed Admit Card, Original Government Photo ID (Aadhaar/Voter ID/DL), and 2 passport photos.\n• Stationary: Blue/Black ballpoint pen only.\n• Prohibited Items: Mobile phones, smartwatches, Bluetooth devices, calculators, whiteners, and electronic accessories are strictly banned inside exam venues.'
    },
    {
      id: 45,
      title: 'Section 45: Answer Key Release Procedure & Schedule',
      content:
        'Status: Notify Soon. Following written examination completion, UKSSSC will publish the Provisional Answer Key and Master Question Paper on sssc.uk.gov.in. Candidates can file online objections within the notified timeframe by submitting authentic academic source proofs and paying ₹50 per question challenged.'
    },
    {
      id: 46,
      title: 'Section 46: Response Sheet & Candidate OMR Copy',
      content:
        'During the offline written examination, candidates are provided a triplicate OMR sheet consisting of: (1) Original Commission Copy, (2) Duplicate Evaluation Copy, and (3) Triplicate Candidate Copy. Candidates are permitted to retain the candidate copy after the exam to cross-check answers with the official key.'
    },
    {
      id: 47,
      title: 'Section 47: Objection Process (₹50/Question Challenged)',
      content:
        'Objections submitted by candidates will be reviewed by an expert committee of subject academicians. Valid challenges will result in revised answer keys or question cancellation with proportionate grace marks per commission guidelines. The Final Answer Key is non-challengeable.'
    },
    {
      id: 48,
      title: 'Section 48: Result Declaration Status & Scorecard',
      content:
        'Status: Notify Soon. The written examination scorecards and category-wise merit shortlists will be declared on sssc.uk.gov.in. Candidates can view their marks by logging in with roll number and date of birth.'
    },
    {
      id: 49,
      title: 'Section 49: Cut-Off Marks & Category Minimums',
      content:
        'Status: Notify Soon. Official cut-off marks for UR, OBC, SC, ST, EWS, and horizontal sub-categories will be announced concurrently with the written test results. Minimum qualifying marks remain 45% for UR/OBC/EWS and 35% for SC/ST.'
    },
    {
      id: 50,
      title: 'Section 50: Final Merit List & Appointment Recommendation',
      content:
        'The Commission will prepare the final recommendation list based strictly on written exam rank among candidates who have cleared PST, PET, and DV. Selected candidates\' dossiers will be forwarded to the Managing Director, Uttarakhand Forest Development Corporation for formal appointment letters.'
    },
    {
      id: 51,
      title: 'Section 51: Document Verification (DV) Guidelines & Checklist',
      content:
        'Original Documents to be produced during DV:\n1. High School (10th) Certificate & Marksheet for DOB verification.\n2. Intermediate (12th) Certificate & Marksheet with Science or Mathematics.\n3. Uttarakhand Permanent Residence / Domicile Certificate.\n4. Category / Caste Certificate (SC/ST/OBC/EWS) in prescribed Uttarakhand state format.\n5. Active Employment Exchange Registration Card.\n6. Photo ID proof and 6 passport photographs.\n7. Character certificate from head of last attended institution.\n8. NOC from employer if currently in government service.'
    },
    {
      id: 52,
      title: 'Section 52: Medical Fitness Examination & CMO Certification',
      content:
        'Prior to joining duty, selected candidates must undergo a comprehensive medical examination conducted by a Chief Medical Officer (CMO) or Medical Board in Uttarakhand to certify physical fitness for forestry tasks, ensuring vision defect is within +/- 4.00 Diopters.'
    },
    {
      id: 53,
      title: 'Section 53: Important Instructions & Anti-Cheating Penalties',
      content:
        'Under the Uttarakhand Competitive Examination (Measures for Prevention and Redressal of Unfair Means in Recruitment) Act, 2023, impersonation, question paper leakage, using electronic cheating devices, or submitting forged documents will attract strict criminal action with non-bailable imprisonment up to lifetime and debarment from all recruitment examinations.'
    },
    {
      id: 54,
      title: 'Section 54: Frequently Asked Questions (FAQs)',
      content:
        'Frequently Asked Questions regarding UKSSSC Scaler Recruitment 2026:\nQ1: What is the last date to apply? A1: 22 October 2026.\nQ2: Are Arts candidates eligible? A2: Only if they studied Mathematics as an official subject.\nQ3: Are PET marks added to written score? A3: No, PET is purely qualifying.\nQ4: What is the age limit? A4: 18 to 28 years on 01 July 2026 (relaxations up to 33 for UK SC/ST/OBC).\nQ5: When does physical test begin? A5: Scheduled from 19 November 2026 onwards.'
    },
    {
      id: 55,
      title: 'Section 55: Important Official Links Directory',
      content:
        'Official Resources:\n• Apply Online: https://sssc.uk.gov.in/\n• Official Notification PDF: https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/09/202609151072597881.pdf\n• Commission Website: https://sssc.uk.gov.in/\n• Technical Helpline Email: chayanayog@gmail.com\n• UKSSSC Address: Thano Road, Near Maharana Pratap Sports College, Raipur, Dehradun – 248008.'
    },
    {
      id: 56,
      title: 'Section 56: Related UKSSSC Jobs',
      content:
        'Other active and upcoming UKSSSC Group C opportunities in Uttarakhand:\n• UKSSSC Forest Guard (वन आरक्षी) Recruitment\n• UKSSSC VDO / VPDO (ग्राम विकास अधिकारी) Recruitment\n• UKSSSC Junior Assistant (कनिष्ठ सहायक) Recruitment\n• Uttarakhand Police Constable & Sub Inspector Recruitment\n• UKSSSC Van Daroga (Forester) Recruitment.'
    },
    {
      id: 57,
      title: 'Section 57: Related Uttarakhand Exams & Preparation Tips',
      content:
        'Related Uttarakhand State Recruitments: UKPSC Upper PCS, UKPSC Lower PCS, UKPSC Forest Range Officer (FRO), UKPSC Assistant Conservator of Forests (ACF), and Uttarakhand Polytechnic Lecturer. Preparation Tip: Scaler candidates should prioritize NCERT Class 9th-12th Physics, Chemistry, and Mathematics alongside thorough revision of Uttarakhand local forestry geography and daily 5-10 km jogging practice.'
    }
  ];
}

export const UKSSSC_SCALER_2026_EXAM: ExamRecord = {
  id: 'uksssc-group-c-scaler-2026',
  slug: 'uksssc-group-c-scaler-recruitment-2026',
  examName: 'UKSSSC Group C Scaler Recruitment 2026',
  shortName: 'UKSSSC Scaler 2026',
  organization: 'Uttarakhand Subordinate Service Selection Commission (UKSSSC)',
  postName: 'Scaler (स्केलर – उत्तराखण्ड वन विकास निगम)',
  totalVacancy: '200 Posts',
  category: 'State Jobs',
  state: 'Uttarakhand',
  logoIcon: '🌲',
  logoBg: '#ecfdf5',
  applicationStartDate: '2026-09-22',
  applicationLastDate: '2026-10-22',
  admitCardDate: '2026-11-10',
  examDate: 'From 19 November 2026 (PST/PET) | Written Exam: To Be Updated',
  resultDate: 'To Be Announced',
  status: 'APPLICATION_OPEN',
  ageMin: 18,
  ageMax: 28,
  education: ['12th', 'Other'],
  minimumQualificationLevel:
    'Intermediate (10+2) with Science OR Mathematics from recognized Board or Uttarakhand School',
  acceptedQualificationLevels: ['12th (Science)', '12th (Mathematics)'],
  applyLink: 'https://sssc.uk.gov.in/',
  officialNotification:
    'https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/09/202609151072597881.pdf',
  officialWebsite: 'https://sssc.uk.gov.in/',
  shortSummary:
    'UKSSSC Advt 82/2026 Scaler Recruitment in Uttarakhand Forest Development Corporation. 200 Vacancies, Pay Level-02 (₹19,900–₹63,200), Intermediate with Science/Maths, PST/PET from 19 Nov 2026.',
  description:
    'Uttarakhand Subordinate Service Selection Commission (UKSSSC) has officially released Advertisement No. 82/2026 for 200 posts of Scaler (Group C) in Uttarakhand Van Vikas Nigam (Forest Development Corporation). Apply online from 22 September to 22 October 2026. Complete official eligibility, 25km run & physical standards, written syllabus, category reservation, and direct links.',
  salary: {
    payScale: 'Level-02 (₹19,900 – ₹63,200)',
    inHand: '₹27,500 to ₹31,000 per month (approx initial gross salary)',
    allowances: 'Dearness Allowance (DA), HRA, EPF, Hill Allowance as per Van Vikas Nigam rules'
  },
  importantDates: [
    { label: 'Notification Published', date: '15 September 2026' },
    { label: 'Online Application Start Date', date: '22 September 2026', isHighlight: true },
    { label: 'Last Date to Apply Online', date: '22 October 2026', isHighlight: true },
    { label: 'Online Correction Window', date: '26 to 27 October 2026' },
    { label: 'PST / PET Commencement Date', date: '19 November 2026 onwards', isHighlight: true },
    { label: 'Written Examination Date', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'Unreserved (UR) / Uttarakhand OBC', amount: '₹300.00' },
    { category: 'Uttarakhand SC / ST / EWS', amount: '₹150.00' },
    { category: 'Uttarakhand Divyang (PwBD)', amount: '₹150.00' },
    { category: 'Orphan (अनाथ) Candidates of UK', amount: '₹0.00 (Exempted)' }
  ],
  selectionProcess: [
    'Stage 1: Physical Standard Test (PST) – Height & Chest measurement (Qualifying)',
    'Stage 2: Physical Efficiency Test (PET) – 25km (M) / 14km (F) Run, Shot Put, Long Jump, High Jump (Qualifying)',
    'Stage 3: Objective Written Examination – 100 Questions, 100 Marks, 2 Hours (Science/Maths based)',
    'Stage 4: Document Verification (DV) of original academic and reservation certificates',
    'Stage 5: Final Medical Fitness Examination and Appointment by Van Vikas Nigam'
  ],
  examPattern: [
    {
      tier: 'Written Competitive Examination (Offline OMR)',
      mode: 'Offline OMR Based (Triplicate Sheet)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '0.25 Marks deducted per wrong answer (1/4th penalty)',
      subjects: [
        { name: 'Intermediate Science (Physics, Chemistry, Biology)', questions: 40, marks: 40 },
        { name: 'Intermediate Mathematics & Practical Mensuration', questions: 25, marks: 25 },
        { name: 'Uttarakhand State General Knowledge & Forestry', questions: 20, marks: 20 },
        { name: 'General Hindi & Mental Ability / Reasoning', questions: 15, marks: 15 }
      ]
    }
  ],
  allInformation: generateUkssscScaler50Sections(),
  faq: [
    {
      q: 'What is the total number of vacancies in UKSSSC Scaler Recruitment 2026?',
      a: 'A total of 200 vacancies have been officially announced under Uttarakhand Forest Development Corporation (Van Vikas Nigam) in Advt No. 82/उ०अ०से०च०आ०/2026.'
    },
    {
      q: 'What are the start and closing dates for online applications?',
      a: 'Online applications commence on 22 September 2026 and conclude on 22 October 2026. The application correction window is open on 26 and 27 October 2026.'
    },
    {
      q: 'What is the required educational qualification for Scaler?',
      a: 'Candidate must have passed Intermediate (Class 12th) with Science OR Mathematics from a recognized Board in India or institution located in Uttarakhand State.'
    },
    {
      q: 'What is the age limit and crucial date?',
      a: '18 to 28 years as on 01 July 2026. Relaxations: 5 years for Uttarakhand SC/ST/OBC/DFF and 10 years for Uttarakhand PwBD candidates.'
    },
    {
      q: 'What are the physical standards (PST) for Scaler?',
      a: 'Height: Male 163 cm (152 cm for ST and hill candidates) with minimum 5 cm chest expansion. Female 150 cm (145 cm for ST and hill candidates). Eye vision defect must not exceed +/- 4.00 Diopters.'
    },
    {
      q: 'What are the Physical Efficiency Test (PET) requirements?',
      a: 'Male candidates must run 25 km in max 4 hours; Female candidates must run 14 km in max 4 hours. Qualified runners then perform Shot Put (M: 5.0m, F: 3.5m), Long Jump (M: 4.0m, F: 2.0m), and High Jump (M: 1.10m, F: 0.70m) with up to 3 attempts. PET is purely qualifying.'
    },
    {
      q: 'When will the PST and PET take place?',
      a: 'As per the official notification, PST and PET are scheduled to commence from 19 November 2026 onwards.'
    },
    {
      q: 'What is the written examination pattern and negative marking?',
      a: '100 multiple choice questions for 100 marks, duration 2 hours. Negative marking of 0.25 (1/4th) marks for every wrong answer. Qualifying marks: 45% for UR/OBC/EWS and 35% for SC/ST.'
    },
    {
      q: 'Are candidates outside Uttarakhand eligible to apply?',
      a: 'As per Section 09 of the advertisement, applicants must be registered with an Employment Exchange in Uttarakhand, hold Uttarakhand Domicile, have passed 10th and 12th from schools within Uttarakhand, or be children of eligible state/central employees.'
    },
    {
      q: 'What is the application fee for UKSSSC Scaler?',
      a: 'General/UR and Uttarakhand OBC: ₹300; Uttarakhand SC/ST/EWS/PwBD: ₹150; Orphan candidates of Uttarakhand: ₹0 (Exempted).'
    }
  ]
};
