import { ExamMockConfig, MockQuestion, MockTestItem } from '../types/mockTest';
import { SSC_CHSL_QUESTIONS } from './questions/chslQuestions';
import { SSC_CGL_QUESTIONS } from './questions/cglQuestions';
import { SSC_GD_QUESTIONS } from './questions/gdQuestions';
import { SSC_JE_QUESTIONS } from './questions/jeQuestions';
import { HPSC_FSO_QUESTIONS } from './questions/fsoQuestions';

// ---------------------------------------------------------------------------
// 1. INITIAL 5 CORE EXAMS + EXTENSIBLE REPOSITORIES
// ---------------------------------------------------------------------------
export const EXAM_MOCK_CONFIGS: ExamMockConfig[] = [
  {
    examId: 'ssc-chsl-2026',
    examName: 'SSC CHSL Tier-I 2026',
    shortName: 'SSC CHSL',
    year: '2026',
    category: 'SSC',
    organization: 'Staff Selection Commission (SSC)',
    totalQuestions: 100,
    durationMinutes: 60,
    maximumMarks: 200,
    marksPerQuestion: 2,
    negativeMarks: 0.5,
    subjects: [
      { name: 'General Intelligence & Reasoning', questionCount: 25, marks: 50 },
      { name: 'General Awareness', questionCount: 25, marks: 50 },
      { name: 'Quantitative Aptitude', questionCount: 25, marks: 50 },
      { name: 'English Language', questionCount: 25, marks: 50 }
    ],
    sections: ['Reasoning', 'General Awareness', 'Quantitative Aptitude', 'English Language'],
    languages: ['English', 'Hindi'],
    difficulty: 'Moderate',
    examPattern: '100 MCQs | 60 Mins | +2.00 / -0.50 Mark Scheme',
    logoIcon: '🏛️',
    slug: 'ssc-chsl-recruitment-2026',
    description: 'Tier-I Computer Based Examination covering Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.',
    freeMocksCount: 3,
    paidMocksCount: 50,
    totalMocksCount: 53,
    price: 7,
    isAvailable: true
  },
  {
    examId: 'ssc-cgl-2026',
    examName: 'SSC CGL Tier-I 2026',
    shortName: 'SSC CGL',
    year: '2026',
    category: 'SSC',
    organization: 'Staff Selection Commission (SSC)',
    totalQuestions: 100,
    durationMinutes: 60,
    maximumMarks: 200,
    marksPerQuestion: 2,
    negativeMarks: 0.5,
    subjects: [
      { name: 'General Intelligence & Reasoning', questionCount: 25, marks: 50 },
      { name: 'General Awareness', questionCount: 25, marks: 50 },
      { name: 'Quantitative Aptitude', questionCount: 25, marks: 50 },
      { name: 'English Comprehension', questionCount: 25, marks: 50 }
    ],
    sections: ['General Intelligence', 'General Awareness', 'Quantitative Aptitude', 'English Comprehension'],
    languages: ['English', 'Hindi'],
    difficulty: 'Moderate',
    examPattern: '100 MCQs | 60 Mins | +2.00 / -0.50 Mark Scheme',
    logoIcon: '⚖️',
    slug: 'ssc-cgl-recruitment-2026',
    description: 'Combined Graduate Level Examination (Tier-I) standard CBT simulation with comprehensive subject distribution.',
    freeMocksCount: 3,
    paidMocksCount: 50,
    totalMocksCount: 53,
    price: 7,
    isAvailable: true
  },
  {
    examId: 'ssc-gd-2026',
    examName: 'SSC GD Constable 2026',
    shortName: 'SSC GD',
    year: '2026',
    category: 'Defense',
    organization: 'Staff Selection Commission (SSC)',
    totalQuestions: 80,
    durationMinutes: 60,
    maximumMarks: 160,
    marksPerQuestion: 2,
    negativeMarks: 0.25,
    subjects: [
      { name: 'General Intelligence & Reasoning', questionCount: 20, marks: 40 },
      { name: 'General Knowledge & Awareness', questionCount: 20, marks: 40 },
      { name: 'Elementary Mathematics', questionCount: 20, marks: 40 },
      { name: 'English / Hindi', questionCount: 20, marks: 40 }
    ],
    sections: ['Reasoning', 'GK & Awareness', 'Elementary Mathematics', 'Hindi/English'],
    languages: ['English', 'Hindi'],
    difficulty: 'Easy',
    examPattern: '80 MCQs | 60 Mins | +2.00 / -0.25 Mark Scheme',
    logoIcon: '🎖️',
    slug: 'ssc-gd-recruitment-2026',
    description: 'Central Armed Police Forces (CAPFs), SSF, and Rifleman (GD) recruitment 80-question official pattern mock series.',
    freeMocksCount: 3,
    paidMocksCount: 50,
    totalMocksCount: 53,
    price: 7,
    isAvailable: true
  },
  {
    examId: 'ssc-je-2026',
    examName: 'SSC JE Tier-I 2026',
    shortName: 'SSC JE',
    year: '2026',
    category: 'Other',
    organization: 'Staff Selection Commission (SSC)',
    totalQuestions: 200,
    durationMinutes: 120,
    maximumMarks: 200,
    marksPerQuestion: 1,
    negativeMarks: 0.25,
    subjects: [
      { name: 'General Intelligence & Reasoning', questionCount: 50, marks: 50 },
      { name: 'General Awareness', questionCount: 50, marks: 50 },
      { name: 'General Engineering', questionCount: 100, marks: 100 }
    ],
    sections: ['Reasoning', 'General Awareness', 'General Engineering'],
    languages: ['English', 'Hindi'],
    difficulty: 'Moderate',
    examPattern: '200 MCQs | 120 Mins | +1.00 / -0.25 Mark Scheme',
    logoIcon: '⚙️',
    slug: 'ssc-je-recruitment-2026',
    description: 'Junior Engineer (Civil, Mechanical & Electrical) Paper-I CBT with engineering fundamentals and non-tech sections.',
    freeMocksCount: 3,
    paidMocksCount: 50,
    totalMocksCount: 53,
    price: 7,
    isAvailable: true
  },
  {
    examId: 'hpsc-fso-2026',
    examName: 'HPSC Food Safety Officer (FSO) 2026',
    shortName: 'HPSC FSO',
    year: '2026',
    category: 'State Exams',
    organization: 'Haryana Public Service Commission (HPSC)',
    totalQuestions: 100,
    durationMinutes: 120,
    maximumMarks: 100,
    marksPerQuestion: 1,
    negativeMarks: 0.25,
    subjects: [
      { name: 'Food Safety, Chemistry & Microbiology', questionCount: 80, marks: 80 },
      { name: 'General Studies, Mental Ability & Haryana GK', questionCount: 20, marks: 20 }
    ],
    sections: ['Food Safety & Science', 'Haryana GK & General Studies'],
    languages: ['English', 'Hindi'],
    difficulty: 'Moderate',
    examPattern: '100 MCQs | 120 Mins | +1.00 / -0.25 Mark Scheme',
    logoIcon: '🥗',
    slug: 'hpsc-food-safety-officer-fso-recruitment-2026',
    description: 'Official HPSC Advt 25/2026 Food Safety Officer screening test pattern with food microbiology and Haryana state GK.',
    freeMocksCount: 3,
    paidMocksCount: 50,
    totalMocksCount: 53,
    price: 7,
    isAvailable: true
  }
];

// Helper to get raw question bank for an exam
export function getExamBaseQuestions(examId: string): MockQuestion[] {
  switch (examId) {
    case 'ssc-chsl-2026':
      return SSC_CHSL_QUESTIONS;
    case 'ssc-cgl-2026':
      return SSC_CGL_QUESTIONS;
    case 'ssc-gd-2026':
      return SSC_GD_QUESTIONS;
    case 'ssc-je-2026':
      return SSC_JE_QUESTIONS;
    case 'hpsc-fso-2026':
      return HPSC_FSO_QUESTIONS;
    default:
      return SSC_CHSL_QUESTIONS;
  }
}

// Helper to provide variations for Mock 1, 2, and 3
export function getVariantQuestions(base: MockQuestion[], mockNumber: number): MockQuestion[] {
  return base.map((q, idx) => ({
    ...q,
    id: `${q.id}_m${mockNumber}`,
    number: idx + 1
  }));
}

// Get specific questions for a mock
export function getQuestionsForMock(examId: string, mockNumber: number): MockQuestion[] {
  const base = getExamBaseQuestions(examId);
  return getVariantQuestions(base, mockNumber);
}

// Default export for quick access
export const SSC_CHSL_MOCK_01_QUESTIONS = getVariantQuestions(SSC_CHSL_QUESTIONS, 1);

// ---------------------------------------------------------------------------
// 2. MOCK TEST GENERATOR: 53 MOCKS (3 FREE, 50 LOCKED AT ₹7 ONE-TIME)
// ---------------------------------------------------------------------------
export function getExamMockList(input: ExamMockConfig | string): MockTestItem[] {
  const config =
    typeof input === 'string'
      ? EXAM_MOCK_CONFIGS.find((e) => e.examId === input) || EXAM_MOCK_CONFIGS[0]
      : input;

  const baseQuestions = getExamBaseQuestions(config.examId);
  const mocks: MockTestItem[] = [];

  // 3 Free + 50 Paid = 53 Full Mocks
  for (let i = 1; i <= 53; i++) {
    const isFree = i <= 3;
    const padNum = i < 10 ? `0${i}` : `${i}`;

    mocks.push({
      id: `${config.examId}-mock-${padNum}`,
      examId: config.examId,
      mockNumber: i,
      title: `${config.shortName} Full Mock Test ${padNum}`,
      isFree,
      price: isFree ? 0 : 7,
      totalQuestions: config.totalQuestions,
      durationMinutes: config.durationMinutes,
      maximumMarks: config.maximumMarks,
      isAvailable: isFree,
      questions: isFree ? getVariantQuestions(baseQuestions, i) : undefined
    });
  }

  return mocks;
}

// Export initial question sets for direct reference if needed
export { SSC_CHSL_QUESTIONS, SSC_CGL_QUESTIONS, SSC_GD_QUESTIONS, SSC_JE_QUESTIONS, HPSC_FSO_QUESTIONS };
