import { AdmissionRecord } from '../types/exam';

export const ADMISSIONS_DATABASE: AdmissionRecord[] = [
  {
    id: 'cuet-ug-2026',
    slug: 'cuet-ug-admission-2026',
    university: 'National Testing Agency (NTA)',
    course: 'Common University Entrance Test (CUET UG 2026 for DU, BHU, JNU, AU & 250+ Universities)',
    category: 'Central Universities',
    education: ['12th'],
    state: 'All India',
    applicationStartDate: '2026-03-01',
    applicationLastDate: '2026-04-10',
    status: 'Closed',
    eligibility: 'Class 12th passed or appearing from any recognized Central / State Education Board.',
    officialLink: 'https://exams.nta.ac.in/CUET-UG/',
    description: 'CUET (UG) provides a single window opportunity to students seeking admission in any of the Central Universities (CUs) or other participating organizations across India.',
    entranceExamDate: '15 - 24 May 2026',
    meritListDate: 'July 2026',
    counsellingDate: 'July - August 2026',
    faq: [
      { q: 'What is the age limit for CUET UG?', a: 'There is no upper age limit for candidates appearing in CUET (UG).' },
      { q: 'Can a candidate choose multiple domain subjects?', a: 'Yes, candidates can choose up to 6 test papers (subjects) as per participating university mapping.' }
    ]
  },
  {
    id: 'iti-delhi-2026',
    slug: 'delhi-iti-admission-2026',
    university: 'Department of Training and Technical Education (DTTE Delhi)',
    course: 'Delhi ITI Craftsmen Training Scheme (Electrician, Fitter, COPA, Welder, Machinist)',
    category: 'Vocational / Technical',
    education: ['10th', 'ITI'],
    state: 'Delhi',
    applicationStartDate: '2026-06-01',
    applicationLastDate: '2026-09-30',
    status: 'Open',
    eligibility: '10th Class pass under 10+2 system with Mathematics & Science or equivalent.',
    officialLink: 'https://itidelhi.admissions.nic.in',
    description: 'Online registration open for admission to Engineering and Non-Engineering trades in Government and Private ITIs across Delhi NCR.',
    entranceExamDate: 'Merit-Based (No Entrance Exam)',
    meritListDate: '05 October 2026',
    counsellingDate: '10 October - 15 November 2026',
    faq: [
      { q: 'Is there an entrance exam for Delhi ITI?', a: 'No, admission is strictly merit-based on the percentage obtained in the 10th standard.' },
      { q: 'What is the minimum age for ITI admission?', a: 'Candidate must have completed 14 years of age as on 01 August.' }
    ]
  },
  {
    id: 'kv-admission-2026',
    slug: 'kendriya-vidyalaya-admission-2026',
    university: 'Kendriya Vidyalaya Sangathan (KVS)',
    course: 'KVS Online Admission for Class 1 & Special Registrations',
    category: 'School Education',
    education: ['10th'],
    state: 'All India',
    applicationStartDate: '2026-04-01',
    applicationLastDate: '2026-04-20',
    status: 'Closed',
    eligibility: 'Minimum age for Class 1 is 6 years as per NEP 2020 guidelines.',
    officialLink: 'https://kvsangathan.nic.in',
    description: 'Kendriya Vidyalaya Sangathan online admissions portal for Class 1 and higher classes based on priority service categories and RTE provisions.',
    meritListDate: 'April 2026',
    counsellingDate: 'May 2026',
    faq: [
      { q: 'What is the minimum age for Class 1 in KV?', a: 'Child must be 6 years old as on 31st March of the admission academic year.' }
    ]
  },
  {
    id: 'polytechnic-jeecup-2026',
    slug: 'up-polytechnic-jeecup-2026',
    university: 'Joint Entrance Examination Council (JEECUP Uttar Pradesh)',
    course: 'UP Polytechnic Diploma Admission (Civil, Mechanical, Electrical, Computer Science)',
    category: 'Diploma / Technical',
    education: ['10th', '12th', 'Diploma'],
    state: 'Uttar Pradesh',
    applicationStartDate: '2026-07-15',
    applicationLastDate: '2026-10-15',
    status: 'Open',
    eligibility: '10th pass with minimum 35% marks for Group A Engineering Diploma courses.',
    officialLink: 'https://jeecup.admissions.nic.in',
    description: 'UP Joint Entrance Examination (Polytechnic) 2026 for admission to diploma courses in government, aided, and private polytechnic colleges across Uttar Pradesh.',
    entranceExamDate: '15 - 20 November 2026',
    meritListDate: 'December 2026',
    counsellingDate: 'December 2026 - January 2027',
    faq: [
      { q: 'Can 12th pass students get direct second-year lateral entry?', a: 'Yes, 12th PCM / ITI candidates can apply under Group K for direct lateral entry into 2nd year.' }
    ]
  }
];
