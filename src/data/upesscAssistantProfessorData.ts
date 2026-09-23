import { ExamRecord } from '../types/exam';
import { generateUpesscAssistantProfessor50Sections } from './upesscAssistantProfessor50Sections';

export { generateUpesscAssistantProfessor50Sections };

export const UPESSC_ASSISTANT_PROFESSOR_2026_EXAM: ExamRecord = {
  id: 'upessc-assistant-professor-2026',
  slug: 'upessc-assistant-professor-recruitment-2026',
  examName: 'UPESSC Assistant Professor Recruitment 2026',
  shortName: 'UPESSC Assistant Professor 2026',
  organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj',
  category: 'Teaching',
  postName: 'Assistant Professor (सहायक आचार्य) – Co-Ed & Women’s Colleges (Advt. No. 04/2026)',
  totalVacancy: '1,936',
  logoIcon: '🎓',
  state: 'Uttar Pradesh',
  ageMin: undefined, // Not specified in official notification
  ageMax: 62,
  gender: 'All',
  applicationStartDate: '2026-09-08',
  applicationLastDate: '2026-10-07',
  admitCardDate: undefined, // Not Released / To Be Updated
  examDate: '2026-11-19',
  answerKeyDate: undefined, // Not Released / To Be Updated
  resultDate: undefined, // Not Released / To Be Updated
  cutOffDate: undefined, // Not Released / To Be Updated
  status: 'APPLICATION_OPEN',
  education: ['Post Graduation', 'Other'],
  minimumQualificationLevel: 'Master\'s Degree (55% or 50% for reserved) + NET/SLET/SET or Ph.D.',
  acceptedQualificationLevels: ['Post Graduation', 'Ph.D.', 'M.Phil.', 'NET/JRF/SET'],
  officialWebsite: 'https://upessc.up.gov.in/',
  officialNotification: 'https://www.upessc.up.gov.in/Notice/51a0-7a2c-4bdd-884b-4ae7.pdf',
  applyLink: 'https://apply.upessc.org/',
  description: 'UPESSC Assistant Professor Recruitment 2026 (Advt. No. 04/2026) for 1,936 vacancies in aided co-education (1,564) and women’s (372) colleges across 42 subjects. Check eligibility, maximum age limit (62 years on 01.07.2026), Level-10 pay scale (₹57,700–₹1,82,400), exam pattern (120 MCQs, 360 marks, -1 negative penalty), viva-voce (40 marks), photo/signature resizers, and apply online details.',
  salary: {
    payScale: 'Academic Level-10 (₹57,700 – ₹1,82,400)',
    inHand: '₹82,000 – ₹94,000/- approx. per month (Entry Level with DA & HRA)',
    allowances: 'Dearness Allowance (DA 50%+), House Rent Allowance (HRA), Medical Allowance, Academic Allowances & NPS State Contribution'
  },
  importantDates: [
    { label: 'Advertisement Publication Date', date: '08 September 2026', isHighlight: true },
    { label: 'OTR / Online Application Start Date', date: '08 September 2026', isHighlight: true },
    { label: 'Last Date for Online Application Fee / Application', date: '07 October 2026', isHighlight: true },
    { label: 'Last Date for Online Form Correction', date: '11 October 2026' },
    { label: 'Written Examination Dates', date: '19 and 20 November 2026', isHighlight: true },
    { label: 'Admit Card Release', date: 'To Be Updated / Before Exam' },
    { label: 'Written Exam Result & Interview', date: 'To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / Unreserved / OBC / EWS & Others', amount: '₹2,000.00' },
    { category: 'Scheduled Caste (SC) / Scheduled Tribe (ST) of UP', amount: '₹1,500.00' },
    { category: 'Divyangjan (Persons with Disabilities)', amount: '₹1,000.00' }
  ],
  vacancies: [
    { category: 'Co-Education Aided Colleges (सह-शिक्षा महाविद्यालय)', postCount: 1564 },
    { category: 'Women’s Aided Colleges (महिला महाविद्यालय)', postCount: 372 }
  ],
  selectionProcess: [
    'Stage 1: Written Examination (120 Questions, 360 Marks, 2 Hours, OMR Mode, Negative Marking -1)',
    'Stage 2: Category-wise Merit Shortlisting for Personal Interview (10 Days Notice)',
    'Stage 3: Personal Interview & Viva-Voce (40 Marks) + Mandatory 18-Document Verification (2 Sets)',
    'Stage 4: Combined Final Merit List (400 Marks Total = 360 Written + 40 Interview)',
    'Stage 5: College Allotment & Appointment by Directorate of Higher Education, UP, Prayagraj'
  ],
  examPattern: [
    {
      stageName: 'Stage 1: Written Examination (OMR Mode)',
      mode: 'Offline OMR Multiple Choice Questions (Bilingual: Hindi & English)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '-1 Mark for each incorrect / multiple answer (+3 for correct answer)',
      subjects: [
        { name: 'Part I: General Knowledge (सामान्य ज्ञान - Higher Education, ICT, Research Aptitude, Current Affairs, Indian Constitution & Economy)', questions: 30, marks: 90 },
        { name: 'Part II: Concerned Subject (सम्बन्धित विषय - Specialized Domain Knowledge from 42 subjects)', questions: 90, marks: 270 }
      ]
    },
    {
      stageName: 'Stage 2: Personal Interview & Viva-Voce',
      mode: 'In-Person Board Interview at UPESSC Office, Prayagraj',
      duration: 'Standard Academic Board Evaluation',
      negativeMarking: 'N/A',
      subjects: [
        { name: 'Subject Knowledge, Pedagogical Aptitude, Research & Communication Skills', questions: 1, marks: 40 }
      ]
    }
  ],
  faq: [
    {
      q: 'What is UPESSC Assistant Professor Recruitment 2026?',
      a: 'It is a state-level direct recruitment drive conducted by Uttar Pradesh Education Service Selection Commission (UPESSC, Prayagraj) under Advertisement No. 04/2026 to recruit 1,936 Assistant Professors in aided degree and postgraduate colleges across UP.'
    },
    {
      q: 'How many total vacancies are announced in Advt 04/2026?',
      a: 'A total of 1,936 vacancies are available, comprising 1,564 posts in co-education colleges and 372 posts in women’s colleges across 42 disciplines.'
    },
    {
      q: 'What are the application start and closing dates?',
      a: 'Online registration started on 08 September 2026. The last date to deposit online application fees and submit is 07 October 2026, and the correction window closes on 11 October 2026.'
    },
    {
      q: 'When is the written examination scheduled?',
      a: 'The offline OMR written examination is scheduled for 19 and 20 November 2026 across designated test centers in Uttar Pradesh.'
    },
    {
      q: 'What is the maximum age limit to apply?',
      a: 'The upper age limit is 62 years, calculated as on 01 July 2026. Minimum age is not specified in the notification.'
    },
    {
      q: 'What is the written examination pattern and marking scheme?',
      a: 'The written exam consists of 120 MCQs carrying 360 marks (30 questions in General Knowledge and 90 questions in the Concerned Subject) with a 2-hour duration. Each correct answer carries +3 marks, while each incorrect or multiple-bubbled answer results in a deduction of 1 mark (-1 negative marking).'
    },
    {
      q: 'What is the weightage of the interview?',
      a: 'The interview carries 40 marks (10% weightage). The final merit list is computed out of 400 marks (360 Written + 40 Interview).'
    },
    {
      q: 'What are the essential educational qualifications?',
      a: 'A Master’s degree with at least 55% marks (50% for SC/ST/OBC non-creamy layer/PwD) in the concerned or allied subject, plus UGC/CSIR NET or SLET/SET clearance, OR a Ph.D. degree awarded in accordance with UGC Regulations 2009/2016 (or satisfying the 5 conditions for pre-2009 Ph.D.).'
    },
    {
      q: 'What are the photo and signature upload requirements?',
      a: 'Photograph: 30 KB to 300 KB in JPG/JPEG with 300–600 pixel resolution. Signature: 10 KB to 200 KB in JPG/JPEG with 140x110 pixel resolution on a white background. Candidates can use the free RajDailyTools interactive resizers to format files accurately.'
    },
    {
      q: 'What is the official application fee?',
      a: 'General, OBC, and EWS candidates pay ₹2,000/-; SC and ST candidates of UP pay ₹1,500/-; and Divyangjan candidates pay ₹1,000/- via online debit/credit card or net banking.'
    }
  ],
  allInformation: generateUpesscAssistantProfessor50Sections()
};
