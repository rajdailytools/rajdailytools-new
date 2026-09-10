export type ExamCategory = 
  | 'SSC' 
  | 'Army' 
  | 'Police' 
  | 'Railway' 
  | 'Defence' 
  | 'Teaching' 
  | 'Banking'
  | 'Bank'
  | 'UPSC'
  | 'Govt Exam' 
  | 'Admission';

export type LifecycleStage =
  | 'APPLICATION_OPEN'
  | 'APPLICATION_CLOSED'
  | 'ADMIT_CARD_SOON'
  | 'ADMIT_CARD_RELEASED'
  | 'EXAM_COMPLETED'
  | 'ANSWER_KEY_RELEASED'
  | 'RESULT_RELEASED'
  | 'CUT_OFF_RELEASED';

export type EducationLevel = '10th' | '12th' | 'Graduation' | 'Post Graduation' | 'ITI' | 'Diploma' | 'Other';

export interface ExamInfoSection {
  id: number;
  title: string;
  content: string;
  badge?: string;
}

export interface ExamRecord {
  id: string;
  slug: string;
  examName: string;
  organization: string;
  category: ExamCategory;
  postName: string;
  totalVacancy: string;
  applicationStartDate: string; // ISO date 'YYYY-MM-DD'
  applicationLastDate: string;  // ISO date 'YYYY-MM-DD'
  admitCardDate?: string;       // ISO date 'YYYY-MM-DD' or status string
  cityIntimationDate?: string;  // ISO date 'YYYY-MM-DD'
  cityIntimationStatus?: 'Released' | 'Expected Soon' | 'Not Released';
  examDate: string;             // ISO date 'YYYY-MM-DD'
  answerKeyDate?: string;       // ISO date 'YYYY-MM-DD'
  resultDate?: string;          // ISO date 'YYYY-MM-DD'
  cutOffDate?: string;          // ISO date 'YYYY-MM-DD'
  status?: LifecycleStage;
  education: EducationLevel[];
  ageMin: number;
  ageMax: number;
  ageRelaxationInfo?: string;
  categoryEligibility?: { [cat: string]: string };
  gender?: 'All' | 'Male' | 'Female';
  state?: string;
  physicalRequirements?: {
    hasPhysical: boolean;
    maleHeightCm?: number;
    femaleHeightCm?: number;
    maleChestCm?: string;
    runningDistanceMale?: string;
    runningTimeMale?: string;
    runningDistanceFemale?: string;
    runningTimeFemale?: string;
    medicalCriteria?: string;
  };
  officialWebsite?: string;
  officialNotification?: string;
  applyLink?: string;
  admitCardLink?: string;
  examCityLink?: string;
  answerKeyLink?: string;
  responseSheetLink?: string;
  objectionLastDate?: string;
  resultLink?: string;
  resultPdfLink?: string;
  cutOffLink?: string;
  nextStage?: string;
  mockTestLink?: string;
  relatedExamIds?: string[];
  logoIcon?: string;
  logoBg?: string;
  description?: string;
  shortSummary?: string;
  importantDates?: { label: string; date: string; isHighlight?: boolean }[];
  applicationFee?: { category: string; amount: string }[];
  selectionProcess?: string[];
  examPattern?: {
    tier?: string;
    mode?: string;
    stageName?: string;
    duration: string;
    negativeMarking: string;
    subjects: { name: string; questions: number; marks: number }[];
  }[];
  salary?: {
    payScale: string;
    inHand: string;
    allowances: string;
  };
  cutOffData?: {
    stage: string;
    year: string;
    categories: { category: string; marks: number | string; candidates?: string }[];
    previousYears?: {
      year: string;
      stage: string;
      categories: { category: string; marks: number | string }[];
    }[];
  };
  sampleCandidatesResult?: {
    rollNo: string;
    name: string;
    category: string;
    score: number;
    status: 'Qualified' | 'Not Qualified';
    rank?: number;
  }[];
  faq?: { q: string; a: string }[];
  allInformation?: ExamInfoSection[];
}

export interface AdmissionRecord {
  id: string;
  slug: string;
  university: string;
  course: string;
  category: string;
  education: EducationLevel[];
  state: string;
  applicationStartDate: string;
  applicationLastDate: string;
  status: 'Open' | 'Closed' | 'Upcoming';
  eligibility: string;
  officialLink: string;
  applyLink?: string;
  officialNotification?: string;
  feeDetails?: string;
  counsellingDetails?: string;
  description: string;
  entranceExamDate?: string;
  meritListDate?: string;
  counsellingDate?: string;
  faq: { q: string; a: string }[];
}

export type ActivePage = 
  | 'home'
  | 'latest-jobs'
  | 'admit-card'
  | 'answer-key'
  | 'result'
  | 'cut-off'
  | 'admission'
  | 'mock-test'
  | 'about'
  | 'contact'
  | 'mock-test-not-found'
  | 'job-detail'
  | 'admit-card-detail'
  | 'answer-key-detail'
  | 'result-detail'
  | 'cut-off-detail'
  | 'admission-detail'
  | 'tool-detail'
  | '404'
  | (string & {});

export interface RouteState {
  page: ActivePage;
  slug?: string;
  toolId?: string;
  category?: string;
}
