import { ExamRecord, ExamInfoSection } from '../types/exam';
import { getBtscSectionsPart1 } from './btscSectionsPart1';
import { getBtscSectionsPart2 } from './btscSectionsPart2';

export function generateBtsc50Sections(): ExamInfoSection[] {
  const p1 = getBtscSectionsPart1();
  const p2 = getBtscSectionsPart2();
  return [...p1, ...p2];
}

export const BTSC_TOURING_VETERINARY_OFFICER_2026_EXAM: ExamRecord = {
  id: 'btsc-touring-veterinary-officer-2026',
  slug: 'btsc-touring-veterinary-officer-recruitment-2026',
  examName: 'BTSC Touring Veterinary Officer Recruitment 2026',
  shortName: 'BTSC Veterinary Officer 2026',
  organization: 'Bihar Technical Service Commission (BTSC) & Animal & Fisheries Resources Dept',
  category: 'State Jobs',
  postName: 'Touring Veterinary Officer and Equivalent (भ्रमणशील पशु चिकित्सा पदाधिकारी)',
  totalVacancy: '787 Posts',
  logoIcon: '🐄',
  state: 'Bihar',
  ageMin: 21,
  ageMax: 37,
  ageRelaxationInfo: 'UR Female / BC / EBC: 40 Years; SC / ST: 42 Years; PwBD: +10 Years; Ex-Servicemen: Max 57 Years',
  categoryEligibility: {
    'UR (Male)': '21 to 37 Years',
    'UR (Female)': '21 to 40 Years',
    'BC / EBC (Male & Female)': '21 to 40 Years',
    'SC / ST (Male & Female)': '21 to 42 Years'
  },
  gender: 'All',
  applicationStartDate: '2026-09-24',
  applicationLastDate: '2026-10-23',
  admitCardDate: '',
  examDate: '',
  answerKeyDate: '',
  resultDate: '',
  cutOffDate: '',
  status: 'APPLICATION_OPEN',
  education: ['Graduation', 'Other'],
  minimumQualificationLevel: 'B.V.Sc. / B.V.Sc. & A.H. + Permanent Bihar Veterinary Council Registration',
  acceptedQualificationLevels: ['Graduation', 'Other'],
  officialWebsite: 'https://btsc.bihar.gov.in/',
  officialNotification: 'https://btsc.bihar.gov.in/sites/default/files/Advertisement/27_2026_0.pdf',
  applyLink: 'https://btsc.pariksha.nic.in/Agencies.aspx?KZhCrm9B4QPkl0gO2rAMuw==',
  salary: {
    payScale: 'Pay Level 9 (₹53,100 – ₹1,67,800)',
    inHand: '₹75,000 – ₹95,000 per month (approx.)',
    allowances: '20% Non-Practicing Allowance (NPA), DA, HRA, Medical & Pension'
  },
  importantDates: [
    { label: 'Notification / Advertisement Date', date: '24 September 2026', isHighlight: true },
    { label: 'Online Application Start Date', date: '24 September 2026', isHighlight: true },
    { label: 'Online Application Last Date', date: '23 October 2026', isHighlight: true },
    { label: 'Fee Payment Last Date', date: '23 October 2026 (23:59:59 IST)', isHighlight: true },
    { label: 'Computer Based Test (CBT) Date', date: 'Not Released / To Be Updated' },
    { label: 'Admit Card Release Date', date: 'Not Released / To Be Updated' },
    { label: 'Result & Merit Declaration', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / UR Male / BC / EBC / EWS / Other States', amount: '₹100/-' },
    { category: 'SC / ST of Bihar State', amount: '₹100/- (Concessional)' },
    { category: 'All Female Candidates (Bihar Domicile)', amount: '₹100/- (Concessional)' },
    { category: 'Divyang (PwBD 40% and above of Bihar)', amount: '₹100/- (Concessional)' }
  ],
  vacancies: [
    { category: 'Unreserved (UR)', postCount: 228 },
    { category: 'Economically Weaker Section (EWS)', postCount: 55 },
    { category: 'Scheduled Caste (SC)', postCount: 207 },
    { category: 'Scheduled Tribe (ST)', postCount: 13 },
    { category: 'Extremely Backward Class (EBC)', postCount: 195 },
    { category: 'Backward Class (BC)', postCount: 89 }
  ],
  selectionProcess: [
    'Stage 1: Computer Based Test (CBT) Written Examination (100 Questions, 100 Marks, 2 Hours, Negative Marking -0.25) – 75% Weightage',
    'Stage 2: Contractual Work Experience in Animal & Fisheries Resources Dept, Govt of Bihar (5 marks per year, Max 25 marks) – 25% Weightage',
    'Stage 3: Composite Merit List Compilation (CBT Score/100 × 75 + Experience Marks = Max 100 Marks)',
    'Stage 4: In-Person Document Verification (DV) at BTSC Patna',
    'Stage 5: State Medical Board Examination & Departmental Character Verification'
  ],
  examPattern: [
    {
      stageName: 'Stage 1: Written Examination (CBT Online)',
      mode: 'Computer Based Test (Bilingual: Hindi & English)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '-0.25 Mark per Wrong Answer (+1.00 for Correct)',
      subjects: [
        { name: 'Veterinary Clinical Sciences (Medicine, Surgery, Gynaecology, Radiology)', questions: 35, marks: 35 },
        { name: 'Veterinary Paraclinical Sciences (Pathology, Microbiology, Parasitology, Pharmacology)', questions: 30, marks: 30 },
        { name: 'Veterinary Pre-Clinical Sciences (Anatomy & Histology, Physiology & Biochemistry)', questions: 15, marks: 15 },
        { name: 'Animal Production & Management (LPM, Nutrition, Genetics & Breeding, LPT, VPE)', questions: 20, marks: 20 }
      ]
    },
    {
      stageName: 'Stage 2: Work Experience Evaluation (Bihar Govt Contractual Service)',
      mode: 'Document Scrutiny & Pro-Rata Marks Calculation',
      duration: 'Service Record Assessment',
      negativeMarking: 'N/A',
      subjects: [
        { name: 'Contractual Service as Veterinary Doctor in Bihar Govt (5 marks/completed year, Max 25 marks)', questions: 1, marks: 25 }
      ]
    }
  ],
  description:
    'Bihar Technical Service Commission (BTSC, Patna) Advt. No. 27/2026 invites online applications for 787 regular posts of Touring Veterinary Officer and Equivalent in Animal & Fisheries Resources Department. Pay Level 9 (₹53,100–₹1,67,800). Mandatory B.V.Sc. / B.V.Sc. & A.H. degree recognized by VCI and permanent Bihar Veterinary Council registration.',
  shortSummary:
    'BTSC Advt. 27/2026: Apply online for 787 Touring Veterinary Officer posts in Bihar. Pay Level 9, CBT exam + experience weightage selection.',
  faq: [
    {
      q: 'What is the last date to apply for BTSC Touring Veterinary Officer Recruitment 2026?',
      a: 'The online application window closes on 23 October 2026 at 23:59:59 IST. The fee payment gateway also closes on 23 October 2026.'
    },
    {
      q: 'What is the total number of vacancies announced under Advt. No. 27/2026?',
      a: 'A total of 787 regular vacancies of Touring Veterinary Officer have been notified across UR (228), EWS (55), SC (207), ST (13), EBC (195), and BC (89), including 35% horizontal reservation for Bihar women (261 posts).'
    },
    {
      q: 'Is registration with the Bihar Veterinary Council mandatory to apply?',
      a: 'Yes, permanent registration with the Bihar Veterinary Council is a mandatory statutory qualification prerequisite. Candidates registered outside Bihar must transfer/register permanently with the Bihar Veterinary Council.'
    },
    {
      q: 'What is the salary and pay scale for Touring Veterinary Officer in Bihar?',
      a: 'The post is in Pay Level 9 with basic pay ranging from ₹53,100 to ₹1,67,800. Along with 20% Non-Practicing Allowance (NPA), DA, HRA, and state allowances, the estimated gross salary is approximately ₹75,000 to ₹95,000 per month.'
    },
    {
      q: 'What is the selection process and merit formula for BTSC TVO 2026?',
      a: 'Selection is based on a 100-mark composite merit: 75% weightage of marks scored in the 100-mark Computer Based Test (CBT) + up to 25 marks for contractual experience in Bihar Government (5 marks per completed year).'
    },
    {
      q: 'Is there negative marking in the BTSC CBT written examination?',
      a: 'Yes. For each correct response, +1.00 mark is awarded, while -0.25 mark (1/4th penalty) is deducted for each incorrect answer.'
    },
    {
      q: 'What is the crucial date for age calculation for Advt. No. 27/2026?',
      a: 'The age will be calculated as on 01 August 2026 (01.08.2026). The minimum age is 21 years and maximum age is 37 years for UR Male, 40 years for UR Female/BC/EBC, and 42 years for SC/ST.'
    },
    {
      q: 'Can candidates from states outside Bihar apply for this post?',
      a: 'Yes, Indian citizens from any state holding a recognized B.V.Sc. degree and permanent Bihar Veterinary Council registration can apply. However, they will be treated under the Unreserved (UR) category.'
    }
  ],
  allInformation: generateBtsc50Sections()
};
