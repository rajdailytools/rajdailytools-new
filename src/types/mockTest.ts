export type QuestionStatus =
  | 'NOT_VISITED'
  | 'NOT_ANSWERED'
  | 'ANSWERED'
  | 'MARKED_FOR_REVIEW'
  | 'ANSWERED_AND_MARKED';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  textHindi?: string;
}

export interface MockQuestion {
  id: string;
  number: number;
  question: string;
  questionHindi?: string;
  questionEnglish?: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  explanationHindi?: string;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  marks: number;
  negativeMarks: number;
  sourceLabel?: string; // e.g. "RajDailyTools Practice Question"
}

export interface ExamMockConfig {
  examId: string;
  examName: string;
  shortName: string;
  year: string;
  category: 'SSC' | 'Railway' | 'Police' | 'Banking' | 'Teaching' | 'Defense' | 'State Exams' | 'Other';
  organization: string;
  totalQuestions: number;
  durationMinutes: number;
  maximumMarks: number;
  marksPerQuestion: number;
  negativeMarks: number;
  subjects: { name: string; questionCount: number; marks: number }[];
  sections?: string[];
  languages: ('English' | 'Hindi')[];
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  examPattern: string;
  logoIcon: string;
  slug: string;
  description: string;
  freeMocksCount: number;
  paidMocksCount: number;
  totalMocksCount: number;
  price: number;
  isAvailable: boolean;
}

export interface MockTestItem {
  id: string;
  examId: string;
  mockNumber: number;
  title: string;
  isFree: boolean;
  price: number; // ₹7 for locked
  totalQuestions: number;
  durationMinutes: number;
  maximumMarks: number;
  isAvailable: boolean;
  questions?: MockQuestion[];
}

export interface UserResponse {
  questionId: string;
  selectedOption?: 'A' | 'B' | 'C' | 'D';
  status: QuestionStatus;
  timeSpentSeconds: number;
}

export interface SubjectScore {
  subject: string;
  total: number;
  attempted: number;
  correct: number;
  wrong: number;
  score: number;
  maxScore: number;
  accuracy: number;
  timeSeconds: number;
}

export interface TopicScore {
  topic: string;
  subject: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
}

export interface DifficultyScore {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  total: number;
  correct: number;
  wrong: number;
}

export interface MockResult {
  mockId: string;
  examId: string;
  mockNumber: number;
  mockTitle: string;
  timestamp: number;
  attemptNumber: number;
  totalQuestions: number;
  attempted: number;
  correct: number;
  wrong: number;
  unattempted: number;
  score: number;
  maxMarks: number;
  percentage: number;
  accuracy: number;
  totalTimeSeconds: number;
  avgTimePerQuestionSeconds: number;
  subjectScores: SubjectScore[];
  topicScores: TopicScore[];
  difficultyScores: DifficultyScore[];
  userResponses: Record<string, UserResponse>;
}

export interface StoredMistake {
  id: string;
  examId: string;
  mockId: string;
  mockNumber: number;
  question: MockQuestion;
  userAnswer?: 'A' | 'B' | 'C' | 'D';
  attemptDate: string;
}

export interface AttemptHistoryRecord {
  attemptNumber: number;
  score: number;
  maxMarks: number;
  accuracy: number;
  timeSeconds: number;
  timestamp: number;
  date: string;
}
