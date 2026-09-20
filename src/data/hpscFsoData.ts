import { ExamRecord } from '../types/exam';
import { generateHpscFso50Sections } from './hpscFso50Sections';

export const HPSC_FSO_2026_EXAM: ExamRecord = {
  id: 'hpsc-food-safety-officer-fso-2026',
  slug: 'hpsc-food-safety-officer-fso-recruitment-2026',
  examName: 'HPSC Food Safety Officer (FSO) Recruitment 2026',
  shortName: 'HPSC FSO 2026',
  organization: 'Haryana Public Service Commission (HPSC) – Food & Drugs Administration Dept',
  category: 'Govt Exam',
  postName: 'Food Safety Officer (Group-B)',
  totalVacancy: '45',
  logoIcon: '🔬',
  logoBg: '#eff6ff',
  state: 'Haryana',
  ageMin: 18,
  ageMax: 42,
  gender: 'All',
  applicationStartDate: '2026-09-28',
  applicationLastDate: '2026-10-19',
  admitCardDate: 'Not Released / To Be Updated',
  examDate: 'Not Released / To Be Updated',
  answerKeyDate: 'Not Released / To Be Updated',
  resultDate: 'Not Released / To Be Updated',
  cutOffDate: 'Not Released / To Be Updated',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Post Graduation', 'Other'],
  minimumQualificationLevel: 'Graduation / Post Graduation / Doctorate in Prescribed Science, Tech, Agriculture or Medical Disciplines',
  officialWebsite: 'https://hpsc.gov.in/en-us/',
  officialNotification: 'https://hpsc.gov.in/Portals/0/Advt_25_2026_FSO_18_09_2026.pdf',
  applyLink: 'https://hpsc.gov.in/en-us/',
  description:
    'Haryana Public Service Commission (HPSC) Advt. No. 25/2026 Food Safety Officer (Group-B) Recruitment 2026 in Food & Drugs Administration Department, Haryana. Apply online for 45 vacancies across UR (22), DSC (5), OSC (5), BC-A (5), BC-B (3), and EWS (5). Pay Scale FPL-6 ₹35,400/-. Complete 50-section official guide with eligibility, fee, age relaxation, and workflow.',
  shortSummary:
    'HPSC Food Safety Officer (FSO) Recruitment 2026 notification published for 45 Group-B posts in FDA Dept Haryana. Pay Scale ₹9,300–34,800 + ₹4,200 GP (FPL-6 ₹35,400). Online application opens 28.09.2026 and closes 19.10.2026.',
  salary: {
    payScale: '₹9,300 – ₹34,800 + ₹4,200 Grade Pay',
    inHand: 'FPL-6 (Cell-1) ₹35,400 Basic Pay + DA, HRA & allowances (~₹54,000–₹60,000 gross per month)',
    allowances: 'Dearness Allowance (DA 50%+), House Rent Allowance (HRA 8%/16%/24%), Medical Allowance, Conveyance Allowance as per Haryana Govt rules'
  },
  importantDates: [
    { label: 'Date of Publication of Advt', date: '19 September 2026', isHighlight: false },
    { label: 'Online Application Opening Date', date: '28 September 2026', isHighlight: true },
    { label: 'Closing Date for Online Applications', date: '19 October 2026 (05:00 PM)', isHighlight: true },
    { label: 'Closing Date for Deposit of Fee', date: '19 October 2026 (05:00 PM)', isHighlight: true },
    { label: 'Crucial Date for Age & Eligibility', date: '19 October 2026', isHighlight: false },
    { label: 'Screening Test / Written Exam Date', date: 'Not Released / To Be Updated', isHighlight: false },
    { label: 'e-Admit Card Download Date', date: 'Not Released / To Be Updated', isHighlight: false },
    { label: 'Answer Key Release Date', date: 'Not Released / To Be Updated', isHighlight: false },
    { label: 'Result & Final Recommendation', date: 'Not Released / To Be Updated', isHighlight: false }
  ],
  applicationFee: [
    { category: 'PwBD of Haryana (min 40% disability)', amount: '₹0 (Exempted)' },
    { category: 'OSC, DSC, BC-A (NCL), BC-B (NCL), ESM, EWS & Women Candidates of Haryana', amount: '₹250' },
    { category: 'DESM Candidates of Haryana belonging to Vertical Reserved Categories', amount: '₹250' },
    { category: 'DESM Candidates of Haryana belonging to UR Category', amount: '₹1,000' },
    { category: 'All Remaining Candidates (UR Male of Haryana & All Other State Applicants)', amount: '₹1,000' }
  ],
  vacancies: [
    { category: 'Un-reserved (UR / General)', postCount: 22 },
    { category: 'DSC (Deprived Scheduled Castes of Haryana)', postCount: 5 },
    { category: 'OSC (Other Scheduled Castes of Haryana)', postCount: 5 },
    { category: 'BC-A (Backward Classes Block-A of Haryana)', postCount: 5 },
    { category: 'BC-B (Backward Classes Block-B of Haryana)', postCount: 3 },
    { category: 'EWS (Economically Weaker Section of Haryana)', postCount: 5 }
  ],
  selectionProcess: [
    'Stage 1: Screening Test (Objective MCQs for shortlisting if applications are large)',
    'Stage 2: Subject Knowledge Test (SKT in Food Safety & Allied Sciences)',
    'Stage 3: Interview / Viva-Voce & Scrutiny of Original Credentials',
    'Stage 4: Post-Appointment Mandatory Food Authority Training & Final Gazetted Notification'
  ],
  examPattern: [
    {
      tier: 'Screening & Subject Knowledge Test',
      mode: 'Offline OMR / CBT',
      stageName: 'Screening / SKT & Interview',
      duration: 'To Be Notified',
      negativeMarking: '0.25 (One-Fourth Negative Marking) & 5th Option rule',
      subjects: [
        { name: 'Core Subject (Food Tech, Dairy, Bio-Chem, Micro-Bio, Medicine)', questions: 80, marks: 80 },
        { name: 'General Awareness, Haryana GK, Reasoning & Numerical Aptitude', questions: 20, marks: 20 }
      ]
    }
  ],
  faq: [
    {
      q: 'What is the total number of vacancies in HPSC Food Safety Officer Recruitment 2026?',
      a: 'A total of 45 vacancies of Food Safety Officer (Group-B) in the Food & Drugs Administration Department, Haryana are advertised under Advt. No. 25/2026. The category break-up is UR: 22, DSC: 05, OSC: 05, BC-A: 05, BC-B: 03, and EWS: 05, along with horizontal reservation for ESM General (02) and PwD (02).'
    },
    {
      q: 'What are the opening and closing dates for HPSC FSO online applications?',
      a: 'Online applications open on 28 September 2026. The last date to submit online applications and deposit the examination fee is 19 October 2026 strictly up to 05:00 PM.'
    },
    {
      q: 'What is the application fee for HPSC Food Safety Officer?',
      a: 'The application fee is ₹0 (NIL) for PwBD candidates of Haryana (min 40% disability); ₹250 for OSC, DSC, BC-A, BC-B, ESM, EWS, and Women candidates of Haryana; ₹250 for DESM of reserved categories; and ₹1000 for UR male candidates of Haryana, DESM belonging to UR, and all candidates from other states.'
    },
    {
      q: 'What is the age limit for HPSC FSO 2026 and what is the crucial date?',
      a: 'Candidates must be between 18 and 42 years of age as on the closing date, 19 October 2026. SC, BC, PwBD, Widowed/Divorced women, Unmarried women, and Haryana contractual employees receive age relaxations up to a maximum upper ceiling of 52 years. Ex-Servicemen receive military service plus 3 years relaxation.'
    },
    {
      q: 'Do I need to complete Food Authority training before applying for HPSC FSO?',
      a: 'No. Note (1) on Page 4 of the official notification explicitly clarifies that the Food Authority training will be given AFTER appointment. Candidates who successfully complete the training after appointment shall be officially notified as Food Safety Officer.'
    },
    {
      q: 'What is the mandatory condition regarding financial interest in food businesses?',
      a: 'As per Note (2) on Page 5 and Food Safety & Standards Rules 2011, no person who has any financial interest in the manufacture, import, or sale of any article of food can be appointed as a Food Safety Officer.'
    },
    {
      q: 'What is the compulsory language qualification for HPSC FSO?',
      a: 'Candidates must have studied Hindi or Sanskrit as one of the subjects in Matriculation (Class 10th) OR Hindi in Higher Education.'
    },
    {
      q: 'Is uploading the signed application form mandatory for HPSC FSO?',
      a: 'Yes. Under Clause 13 & 14, after submitting the form and fee, candidates must download the application form printout, sign every page where indicated, scan it, and upload the signed printout back onto the portal before 05:00 PM on 19.10.2026. Applications without the uploaded signed form will be summarily rejected.'
    },
    {
      q: 'What is the official website for HPSC FSO 2026 application and updates?',
      a: 'The official website of the Haryana Public Service Commission is https://hpsc.gov.in/en-us/.'
    }
  ],
  allInformation: generateHpscFso50Sections()
};

export { generateHpscFso50Sections };
