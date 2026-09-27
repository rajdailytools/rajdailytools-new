import { ExamRecord, ExamInfoSection } from '../types/exam';
import { getBtscFisherySectionsPart1 } from './btscFisheryExtensionOfficerSectionsPart1';
import { getBtscFisherySectionsPart2 } from './btscFisheryExtensionOfficerSectionsPart2';

export function generateBtscFishery50Sections(): ExamInfoSection[] {
  const p1 = getBtscFisherySectionsPart1();
  const p2 = getBtscFisherySectionsPart2();
  return [...p1, ...p2];
}

export const BTSC_FISHERY_EXTENSION_OFFICER_2026_EXAM: ExamRecord = {
  id: 'btsc-fishery-extension-officer-2026',
  slug: 'btsc-fishery-extension-officer-recruitment-2026',
  examName: 'BTSC Fishery Extension Officer Recruitment 2026',
  shortName: 'BTSC Fishery Extension Officer 2026',
  organization: 'Bihar Technical Service Commission (BTSC) & Fisheries Directorate, Bihar',
  category: 'State Jobs',
  postName: 'Fishery Extension Officer (मत्स्य प्रसार पदाधिकारी)',
  totalVacancy: '231 Posts',
  logoIcon: '🐟',
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
  admitCardDate: 'Not Released / To Be Updated',
  examDate: 'Not Released / To Be Updated',
  answerKeyDate: 'Not Released / To Be Updated',
  resultDate: 'Not Released / To Be Updated',
  cutOffDate: 'Not Released / To Be Updated',
  status: 'APPLICATION_OPEN',
  education: ['Post Graduation', 'Other'],
  minimumQualificationLevel: '2-Year PG Degree in Fisheries Science (ICAR-Recognized Agricultural University)',
  acceptedQualificationLevels: ['Post Graduation', 'Other'],
  officialWebsite: 'https://btsc.bihar.gov.in/',
  officialNotification: 'https://btsc.bihar.gov.in/sites/default/files/Advertisement/28_2026.pdf',
  applyLink: 'https://btsc.pariksha.nic.in/Agencies.aspx?KZhCrm9B4QPkl0gO2rAMuw==',
  salary: {
    payScale: 'Pay Level-7 (PB ₹9,300 – ₹34,800, GP ₹4,600 / 7th CPC Level 7)',
    inHand: '₹55,000 – ₹70,000 per month (approx.)',
    allowances: 'DA, HRA, Medical Allowance & State Allowances'
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
    { category: 'SC / ST of Bihar State', amount: '₹100/- (Online Standard)' },
    { category: 'All Female Candidates (Bihar Domicile)', amount: '₹100/- (Online Standard)' },
    { category: 'Divyang (PwD 40% and above of Bihar)', amount: '₹100/- (Online Standard)' }
  ],
  vacancies: [
    { category: 'Unreserved (UR)', postCount: 96 },
    { category: 'Economically Weaker Section (EWS)', postCount: 23 },
    { category: 'Scheduled Caste (SC)', postCount: 35 },
    { category: 'Scheduled Tribe (ST)', postCount: 2 },
    { category: 'Extremely Backward Class (EBC)', postCount: 41 },
    { category: 'Backward Class (BC)', postCount: 27 },
    { category: 'Backward Classes Women (BCW)', postCount: 7 }
  ],
  selectionProcess: [
    'Stage 1: Computer Based Test (CBT) Written Examination (100 Questions, 100 Marks, 2 Hours, Negative Marking -0.25) – 75% Weightage (Max 75 Marks)',
    'Stage 2: Contractual Work Experience in Fisheries Directorate, Govt of Bihar (5 marks per completed year, Max 25 marks) – 25% Weightage',
    'Stage 3: Composite Merit List Compilation (CBT Score/100 × 75 + Experience Marks = Max 100 Marks)',
    'Stage 4: In-Person Document Verification (DV) at BTSC Patna',
    'Stage 5: Departmental Character & Medical Fitness Verification'
  ],
  examPattern: [
    {
      stageName: 'Stage 1: Written Examination (CBT Online)',
      mode: 'Computer Based Test (Bilingual: Hindi & English)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '-0.25 Mark per Wrong Answer (+1.00 for Correct)',
      subjects: [
        { name: 'Aquaculture & Hatchery Management', questions: 30, marks: 30 },
        { name: 'Fish Biology, Taxonomy & Physiology', questions: 20, marks: 20 },
        { name: 'Fish Pathology & Aquatic Health Management', questions: 20, marks: 20 },
        { name: 'Fisheries Resource Management & Oceanography', questions: 15, marks: 15 },
        { name: 'Fishery Extension, Economics & Processing', questions: 15, marks: 15 }
      ]
    },
    {
      stageName: 'Stage 2: Work Experience Evaluation (Bihar Govt Contractual Service)',
      mode: 'Service Record Scrutiny & Pro-Rata Marks Calculation',
      duration: 'Document Assessment',
      negativeMarking: 'N/A',
      subjects: [
        { name: 'Contractual Service in Fisheries Directorate, Bihar (5 marks/completed year, Max 25 marks)', questions: 1, marks: 25 }
      ]
    }
  ],
  faq: [
    {
      q: 'What is the last date to apply for BTSC Fishery Extension Officer Recruitment 2026?',
      a: 'The online application window closes on 23 October 2026 at 23:59:59 IST. The fee payment gateway also closes on 23 October 2026.'
    },
    {
      q: 'What is the total number of vacancies announced under Advt. No. 28/2026?',
      a: 'A total of 231 regular vacancies of Fishery Extension Officer have been notified across UR (96), EWS (23), SC (35), ST (02), EBC (41), BC (27), and BC Women (07).'
    },
    {
      q: 'What is the prescribed educational qualification for Fishery Extension Officer?',
      a: 'A Two-year Post Graduate Degree in Fisheries Science (M.F.Sc. or equivalent) from an institution under an Agricultural University recognised by the ICAR, New Delhi.'
    },
    {
      q: 'What is the salary and pay scale for Fishery Extension Officer in Bihar?',
      a: 'The post is in Pay Level-7 with basic pay of ₹44,900/- per month. Along with DA, HRA, and state allowances, the estimated gross salary is approximately ₹55,000 to ₹70,000 per month.'
    },
    {
      q: 'What is the selection process and merit formula for BTSC FEO 2026?',
      a: 'Selection is based on a 100-mark composite merit: 75% weightage of marks scored in the 100-mark Computer Based Test (CBT) + up to 25 marks for eligible contractual work experience in Bihar Government (5 marks per completed year).'
    },
    {
      q: 'Is there negative marking in the BTSC CBT written examination?',
      a: 'Yes. For each correct response, +1.00 mark is awarded, while -0.25 mark (1/4th penalty) is deducted for each incorrect answer.'
    },
    {
      q: 'What is the crucial date for age calculation for Advt. No. 28/2026?',
      a: 'The age will be calculated as on 01 August 2026 (01.08.2026). The minimum age is 21 years and maximum age is 37 years for UR Male, 40 years for UR Female/BC/EBC, and 42 years for SC/ST.'
    },
    {
      q: 'Can candidates from states outside Bihar apply for this post?',
      a: 'Yes, Indian citizens from any state holding the prescribed 2-year PG degree in Fisheries Science from an ICAR-recognized Agricultural University can apply under the Unreserved (UR) category.'
    }
  ],
  allInformation: generateBtscFishery50Sections()
};
