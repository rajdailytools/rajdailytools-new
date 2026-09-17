import { ExamRecord, ExamInfoSection } from '../types/exam';
import { CONCOR_50_SECTIONS, generateConcor50Sections } from './concor50Sections';

export { CONCOR_50_SECTIONS, generateConcor50Sections };

export interface ConcorVacancyItem {
  sn: number;
  postCode: string;
  name: string;
  category: 'MT' | 'AO';
  payScale: string;
  ctc: string;
  ageLimit: string;
  sc: number;
  st: number;
  obc: number;
  ews: number;
  ur: number;
  total: number;
  pwbd: number;
  esm: number;
  qualification: string;
  experience: string;
  note?: string;
}

export const CONCOR_VACANCIES: ConcorVacancyItem[] = [
  {
    sn: 1,
    postCode: 'MT/CO',
    name: 'Management Trainee (Commercial & Operations)',
    category: 'MT',
    payScale: '₹50,000-3%-₹1,60,000',
    ctc: '₹20.11 Lakhs Per Annum approx.',
    ageLimit: '18-28 Years',
    sc: 4,
    st: 3,
    obc: 4,
    ews: 2,
    ur: 12,
    total: 25,
    pwbd: 2,
    esm: 0,
    qualification: 'Graduate with min 55% marks + 2 years MBA or Equivalent PG Degree/Diploma with specialization in Marketing/International Business/Operations/Logistics/Supply Chain Management with min 60% marks from Govt/AICTE/UGC recognized institute.',
    experience: 'Nil (Fresher eligible; final year/semester candidates provisionally allowed)'
  },
  {
    sn: 2,
    postCode: 'MT/FA',
    name: 'Management Trainee (Accounts)',
    category: 'MT',
    payScale: '₹50,000-3%-₹1,60,000',
    ctc: '₹20.11 Lakhs Per Annum approx.',
    ageLimit: '18-28 Years',
    sc: 1,
    st: 1, // backlog
    obc: 3,
    ews: 0,
    ur: 4,
    total: 9,
    pwbd: 0,
    esm: 0,
    qualification: 'Graduate with 55% marks and qualified Chartered Accountant (CA).',
    experience: 'Nil (Fresher eligible)',
    note: 'Includes 1 post for Management Trainee (Accounts)/Compliance (MT/FA/CS).'
  },
  {
    sn: 3,
    postCode: 'MT/FA/CS',
    name: 'Management Trainee (Accounts)/Compliance',
    category: 'MT',
    payScale: '₹50,000-3%-₹1,60,000',
    ctc: '₹20.11 Lakhs Per Annum approx.',
    ageLimit: '18-28 Years',
    sc: 0,
    st: 0,
    obc: 0,
    ews: 0,
    ur: 0,
    total: 0, // Included inside MT/FA
    pwbd: 0,
    esm: 0,
    qualification: 'Graduate with 55% marks and qualified Company Secretary (CS).',
    experience: 'Nil (Fresher eligible)',
    note: 'The 1 vacancy is officially included within MT/FA vacancy structure (Total 9 posts).'
  },
  {
    sn: 4,
    postCode: 'MT/TH',
    name: 'Management Trainee (Technical)',
    category: 'MT',
    payScale: '₹50,000-3%-₹1,60,000',
    ctc: '₹20.11 Lakhs Per Annum approx.',
    ageLimit: '18-28 Years',
    sc: 1,
    st: 0,
    obc: 1,
    ews: 0,
    ur: 2,
    total: 4,
    pwbd: 0,
    esm: 0,
    qualification: "Bachelor's Degree in Engineering in Mechanical / Electrical / Electronics with min 60% marks from Govt/AICTE/UGC recognized institute/university.",
    experience: 'Nil (Fresher eligible)'
  },
  {
    sn: 5,
    postCode: 'MT/MIS',
    name: 'Management Trainee (MIS)',
    category: 'MT',
    payScale: '₹50,000-3%-₹1,60,000',
    ctc: '₹20.11 Lakhs Per Annum approx.',
    ageLimit: '18-28 Years',
    sc: 1,
    st: 0,
    obc: 1, // backlog
    ews: 0,
    ur: 1,
    total: 3,
    pwbd: 0,
    esm: 0,
    qualification: 'B.Tech / BE (Computer Engg./Computer Science) / MCA / M.Sc (IT) / M.Sc (Computer Science) / DOEACC B Level with min 60% marks.',
    experience: 'Nil (Fresher eligible)'
  },
  {
    sn: 6,
    postCode: 'MT/CE',
    name: 'Management Trainee (Civil)',
    category: 'MT',
    payScale: '₹50,000-3%-₹1,60,000',
    ctc: '₹20.11 Lakhs Per Annum approx.',
    ageLimit: '18-28 Years',
    sc: 0,
    st: 0,
    obc: 1,
    ews: 0,
    ur: 1,
    total: 2,
    pwbd: 0,
    esm: 0,
    qualification: "Bachelor's Degree in Civil Engineering with min 60% marks in aggregate from Govt/AICTE/UGC recognized university/institute.",
    experience: 'Nil (Fresher eligible)'
  },
  {
    sn: 7,
    postCode: 'MT/P&A',
    name: 'Management Trainee (Personnel & Administration)',
    category: 'MT',
    payScale: '₹50,000-3%-₹1,60,000',
    ctc: '₹20.11 Lakhs Per Annum approx.',
    ageLimit: '18-28 Years',
    sc: 0,
    st: 0,
    obc: 0,
    ews: 0,
    ur: 2,
    total: 2,
    pwbd: 0,
    esm: 0,
    qualification: 'Graduate with min 55% marks + 2 Years MBA/MSW or Equivalent PG Degree/Diploma with specialization in HRM/Personnel Management/Industrial Relations with min 60% marks.',
    experience: 'Nil (Fresher eligible)'
  },
  {
    sn: 8,
    postCode: 'AO/CO',
    name: 'Assistant Officer (Commercial & Operations)',
    category: 'AO',
    payScale: '₹40,000-3%-₹1,36,000',
    ctc: '₹16.09 Lakhs Per Annum approx.',
    ageLimit: '18-32 Years',
    sc: 3,
    st: 2,
    obc: 5,
    ews: 1,
    ur: 9,
    total: 20,
    pwbd: 2,
    esm: 2,
    qualification: 'Graduate with min 50% marks.',
    experience: '4 Years, OR 2 Years for candidates having Institute of Rail Transport (IRT) Diploma in multimodal transport or any other special course of min 1 year in shipping/logistics/trade.'
  },
  {
    sn: 9,
    postCode: 'AO/FA',
    name: 'Assistant Officer (Accounts)',
    category: 'AO',
    payScale: '₹40,000-3%-₹1,36,000',
    ctc: '₹16.09 Lakhs Per Annum approx.',
    ageLimit: '18-32 Years',
    sc: 0,
    st: 0,
    obc: 1,
    ews: 0,
    ur: 1,
    total: 2,
    pwbd: 0,
    esm: 0,
    qualification: 'B.Com with min 50% marks.',
    experience: '4 Years, OR 2 Years for candidates qualified in CA(Inter) / CMA(Inter) along with B.Com min 50%.'
  },
  {
    sn: 10,
    postCode: 'AO/TH',
    name: 'Assistant Officer (Technical)',
    category: 'AO',
    payScale: '₹40,000-3%-₹1,36,000',
    ctc: '₹16.09 Lakhs Per Annum approx.',
    ageLimit: '18-32 Years',
    sc: 1,
    st: 0,
    obc: 1,
    ews: 0,
    ur: 2,
    total: 4,
    pwbd: 0,
    esm: 0,
    qualification: "Diploma or Bachelor's Degree in Mechanical / Electrical / Electronics with min 50% marks.",
    experience: "3 Years for Diploma holders, OR 1 Year for Bachelor's Degree in Engineering in Mechanical/Electrical/Civil/Electronics holders with min 50% marks."
  },
  {
    sn: 11,
    postCode: 'AO/MIS',
    name: 'Assistant Officer (MIS)',
    category: 'AO',
    payScale: '₹40,000-3%-₹1,36,000',
    ctc: '₹16.09 Lakhs Per Annum approx.',
    ageLimit: '18-32 Years',
    sc: 0,
    st: 0,
    obc: 1,
    ews: 0,
    ur: 1,
    total: 2,
    pwbd: 0,
    esm: 0,
    qualification: "Graduate with PGDCA or BCA or B.Sc (Hons) in Computer Science or DOEACC 'A' Level with min 50% marks.",
    experience: '3 Years (in IT support/software applications in reputed company), OR 1 Year for MCA / B.Tech / BE (CS/CE) / M.Sc (IT/CS) / DOEACC B Level with min 50%.'
  },
  {
    sn: 12,
    postCode: 'AO/CE',
    name: 'Assistant Officer (Civil)',
    category: 'AO',
    payScale: '₹40,000-3%-₹1,36,000',
    ctc: '₹16.09 Lakhs Per Annum approx.',
    ageLimit: '18-32 Years',
    sc: 1,
    st: 0,
    obc: 1,
    ews: 0,
    ur: 2,
    total: 4,
    pwbd: 0,
    esm: 0,
    qualification: "Bachelor's Degree in Civil Engineering or Diploma in Civil Engineering with min 50% marks.",
    experience: "1 Year for Bachelor's Degree in Civil Engineering candidates, OR 3 Years for Diploma in Civil Engineering candidates."
  }
];

export const CONCOR_TOTALS = {
  mtTotal: 45,
  aoTotal: 32,
  grandTotal: 77,
  mtSc: 7,
  mtSt: 4,
  mtObc: 10,
  mtEws: 2,
  mtUr: 22,
  mtPwbd: 2,
  mtEsm: 0,
  aoSc: 5,
  aoSt: 2,
  aoObc: 9,
  aoEws: 1,
  aoUr: 15,
  aoPwbd: 2,
  aoEsm: 2,
  grandSc: 12,
  grandSt: 6,
  grandObc: 19,
  grandEws: 3,
  grandUr: 37,
  grandPwbd: 4,
  grandEsm: 2
};

export const CONCOR_RECRUITMENT_2026_EXAM: ExamRecord = {
  id: 'concor-mt-ao-2026',
  slug: 'concor-management-trainee-assistant-officer-recruitment-2026',
  examName: 'CONCOR Management Trainee & Assistant Officer Recruitment 2026',
  shortName: 'CONCOR MT & AO 2026',
  organization: 'Container Corporation of India Limited (CONCOR)',
  category: 'Govt Exam',
  postName: 'Management Trainee (MT) & Assistant Officer (AO)',
  totalVacancy: '77 Posts',
  applicationStartDate: '2026-08-31',
  applicationLastDate: '2026-09-30',
  admitCardDate: 'To Be Updated',
  cityIntimationDate: 'To Be Updated',
  cityIntimationStatus: 'Not Released',
  examDate: 'To Be Updated',
  answerKeyDate: 'To Be Updated',
  resultDate: 'To Be Updated',
  cutOffDate: 'To Be Updated',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Post Graduation', 'Diploma'],
  minimumQualificationLevel: 'Graduate / Engineering Degree / CA / CS / MBA / Diploma depending on post',
  acceptedQualificationLevels: ['Graduation', 'Post Graduation', 'Diploma', 'CA', 'CS', 'ICWA/CMA', 'B.Tech/BE', 'MCA'],
  ageMin: 18,
  ageMax: 32, // 28 for MT, 32 for AO
  ageRelaxationInfo: 'SC/ST: 5 years, OBC-NCL: 3 years, PwBD: 10 years, Ex-Servicemen: 3 years + military service, Departmental: 5 years. Max upper age after relaxations: 50 Years.',
  officialWebsite: 'https://www.concorindia.co.in/',
  officialNotification: 'https://cms.concorindia.co.in:8000/uploads/cms/pdf/Asf6Xc3Mnw5BWdp_FinalAdvertisement-18thAug2026(Published).pdf',
  applyLink: 'https://rrb.digialm.com/EForms/configuredHtml/1181/101565/Index.html',
  description: 'Container Corporation of India Limited (CONCOR), a Navratna CPSE under Ministry of Railways, invites online applications for recruitment of 77 Management Trainee (MT) and Assistant Officer (AO) across Commercial & Operations, Accounts, Technical, MIS, Civil, and Personnel & Administration streams under Employment Notification No. 05/2026.',
  shortSummary: 'CONCOR Recruitment 2026 for 77 MT & AO posts. Apply online from 31 August 2026 to 30 September 2026 at concorindia.co.in.',
  importantDates: [
    { label: 'Notification Issued', date: 'August 2026' },
    { label: 'Online Application Commences', date: '31-08-2026 (10:00 AM)', isHighlight: true },
    { label: 'Last Date for Online Submission', date: '30-09-2026 (11:55 PM)', isHighlight: true },
    { label: 'Last Date for Online Fee Payment', date: '30-09-2026 (11:55 PM)' },
    { label: 'CBT Exam Date', date: 'Not Released / To Be Updated' },
    { label: 'Admit Card Release Date', date: 'To Be Updated' },
    { label: 'GD & Interview Schedule (MT)', date: 'To Be Updated' },
    { label: 'Document Verification', date: 'To Be Updated' },
    { label: 'Medical Fitness Examination', date: 'To Be Updated' }
  ],
  applicationFee: [
    { category: 'Management Trainee (General/UR, OBC-NCL, OBC-Creamy, EWS)', amount: '₹750 + applicable GST' },
    { category: 'Assistant Officer (General/UR, OBC-NCL, OBC-Creamy, EWS)', amount: '₹500 + applicable GST' },
    { category: 'SC / ST / PwBD / Ex-Servicemen', amount: 'NIL (Exempted from fee)' },
    { category: 'Payment Mode', amount: 'Online Only (Net Banking, Debit Card, Credit Card, UPI)' }
  ],
  selectionProcess: [
    'Stage 1: Computer Based Test (CBT) - 100 Questions, 100 Marks, 90 Minutes (Common for MT & AO)',
    'Stage 2 for MT: Group Discussion (GD) and/or Personal Interview as decided by CONCOR',
    'Stage 2 for AO: Direct Merit based purely on CBT performance (No GD/Interview for AO)',
    'Stage 3: Document Verification (DV) with original credentials and NOC (if applicable)',
    'Stage 4: Pre-Employment Medical Fitness Examination by CONCOR medical authorities',
    'Stage 5: Service Agreement Execution (MT Bond of ₹2 Lakh + 12% interest for 3 years) & Appointment'
  ],
  examPattern: [
    {
      tier: 'Computer Based Test (CBT)',
      mode: 'Online Objective MCQ',
      duration: '90 Minutes (120 Minutes for eligible PwBD candidates with Scribe)',
      negativeMarking: '0.25 Mark penalty per incorrect response (5 options per question)',
      subjects: [
        { name: 'Professional Knowledge (Domain/Discipline Specific)', questions: 50, marks: 50 },
        { name: 'Quantitative Aptitude', questions: 15, marks: 15 },
        { name: 'General Knowledge', questions: 15, marks: 15 },
        { name: 'English Language', questions: 10, marks: 10 },
        { name: 'Reasoning Ability', questions: 10, marks: 10 }
      ]
    }
  ],
  salary: {
    payScale: 'MT: ₹50,000-3%-₹1,60,000 (E-1 grade after 1-yr training) | AO: ₹40,000-3%-₹1,36,000',
    inHand: 'MT: ~₹95,000–₹1,15,000/month approx. | AO: ~₹75,000–₹90,000/month approx.',
    allowances: 'DA, HRA, Perks (under cafeteria approach), Medical, PF, Gratuity, Performance Related Pay (PRP), Superannuation benefits. Annual CTC: MT ~₹20.11 Lakhs; AO ~₹16.09 Lakhs.'
  }
};

CONCOR_RECRUITMENT_2026_EXAM.allInformation = CONCOR_50_SECTIONS;

