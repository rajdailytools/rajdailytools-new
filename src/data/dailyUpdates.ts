export interface DailyUpdateRecord {
  id: string;
  examId: string;
  examName: string;
  organization: string;
  category: string;
  updateType: 'NOTIFICATION' | 'ADMIT_CARD' | 'ANSWER_KEY' | 'RESULT' | 'CUT_OFF' | 'DATE_EXTENSION' | 'CORRIGENDUM';
  title: string;
  summary: string;
  officialSourceUrl: string;
  sourceAttribution: string;
  notificationDate: string; // YYYY-MM-DD
  lastVerifiedDate: string;  // YYYY-MM-DD
  deadlineDate?: string;     // YYYY-MM-DD
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';
  isImportantAlert?: boolean;
}

export const DAILY_EXAM_UPDATES: DailyUpdateRecord[] = [
  {
    id: 'upd-btsc-feo-2026-10',
    examId: 'btsc-fishery-extension-officer-2026',
    examName: 'BTSC Fishery Extension Officer Recruitment 2026',
    organization: 'Bihar Technical Service Commission (BTSC) & Fisheries Directorate',
    category: 'State Jobs',
    updateType: 'NOTIFICATION',
    title: 'Advt. 28/2026 Online Application Window Active for 231 Posts',
    summary: 'Online registration for 231 Fishery Extension Officer (Pay Level-7) posts in Bihar Fisheries Directorate is actively open. Candidates with 2-Year PG Degree in Fisheries Science can apply till 23 October 2026.',
    officialSourceUrl: 'https://btsc.bihar.gov.in/sites/default/files/Advertisement/28_2026.pdf',
    sourceAttribution: 'Bihar Technical Service Commission (BTSC) Official Gazette',
    notificationDate: '2026-09-24',
    lastVerifiedDate: '2026-10-20',
    deadlineDate: '2026-10-23',
    status: 'PUBLISHED',
    isImportantAlert: true
  },
  {
    id: 'upd-btsc-tvo-2026-10',
    examId: 'btsc-touring-veterinary-officer-2026',
    examName: 'BTSC Touring Veterinary Officer Recruitment 2026',
    organization: 'Bihar Technical Service Commission (BTSC)',
    category: 'State Jobs',
    updateType: 'NOTIFICATION',
    title: 'Advt. 27/2026 Online Application for 787 TVO Posts',
    summary: 'BTSC Bihar accepts online applications for 787 Touring Veterinary Officer vacancies in Animal & Fisheries Resources Dept. B.V.Sc. qualification and Bihar Veterinary Council registration required.',
    officialSourceUrl: 'https://btsc.bihar.gov.in/',
    sourceAttribution: 'BTSC Official Portal',
    notificationDate: '2026-09-24',
    lastVerifiedDate: '2026-10-20',
    deadlineDate: '2026-10-23',
    status: 'PUBLISHED',
    isImportantAlert: true
  },
  {
    id: 'upd-mp-police-2026-10',
    examId: 'mp-police-constable-2026',
    examName: 'MPESB MP Police Constable GD Recruitment 2026',
    organization: 'Madhya Pradesh Employees Selection Board (MPESB), Bhopal',
    category: 'Police',
    updateType: 'NOTIFICATION',
    title: '7,500 Constable (GD) Posts Rulebook & Schedule Released',
    summary: 'MPESB Bhopal notifies 7,500 Constable vacancies across SAF (700 male posts) and DEF (6,800 posts). Pay scale ₹19,500–₹62,000 with 100-mark written test and physical PET scoring.',
    officialSourceUrl: 'https://esb.mp.gov.in/',
    sourceAttribution: 'MPESB Bhopal Official Rulebook',
    notificationDate: '2026-09-15',
    lastVerifiedDate: '2026-10-20',
    deadlineDate: '2026-11-15',
    status: 'PUBLISHED',
    isImportantAlert: true
  },
  {
    id: 'upd-ibps-hindi-2026-10',
    examId: 'ibps-hindi-officer-2026',
    examName: 'IBPS Hindi Officer Recruitment 2026',
    organization: 'Institute of Banking Personnel Selection (IBPS)',
    category: 'Banking',
    updateType: 'NOTIFICATION',
    title: 'Official Notification for Hindi Officer Scale-I on Contract',
    summary: 'IBPS Mumbai invites applications for Hindi Officer position with Master’s degree in Hindi/English. Application window open till 14 October 2026 with CBT test pattern.',
    officialSourceUrl: 'https://www.ibps.in/',
    sourceAttribution: 'IBPS Official Recruitment Notice',
    notificationDate: '2026-09-22',
    lastVerifiedDate: '2026-10-20',
    deadlineDate: '2026-10-14',
    status: 'PUBLISHED',
    isImportantAlert: false
  },
  {
    id: 'upd-upessc-ap-2026-10',
    examId: 'upessc-assistant-professor-2026',
    examName: 'UPESSC UP Assistant Professor Recruitment 2026',
    organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC)',
    category: 'Teaching',
    updateType: 'NOTIFICATION',
    title: '1,936 Assistant Professor Vacancies Across 42 Subjects',
    summary: 'UPESSC Prayagraj notifies 1,936 teaching positions in non-government aided colleges across UP. Master’s degree with 55% and UGC NET / SLET / PhD required.',
    officialSourceUrl: 'https://upessc.up.gov.in/',
    sourceAttribution: 'UPESSC Press Communique',
    notificationDate: '2026-09-18',
    lastVerifiedDate: '2026-10-20',
    deadlineDate: '2026-10-31',
    status: 'PUBLISHED',
    isImportantAlert: true
  },
  {
    id: 'upd-rrb-group-d-2026-10',
    examId: 'rrb-group-d-2026',
    examName: 'Railway RRB Group D Level-1 CEN 09/2025',
    organization: 'Railway Recruitment Boards (RRB) / Railway Recruitment Cells',
    category: 'Railway',
    updateType: 'ANSWER_KEY',
    title: 'Official Answer Key & Response Sheets Objection Window',
    summary: 'RRB has made available the Computer Based Test (CBT) question paper, response sheet, and tentative answer keys for CEN 09/2025 with ₹50 per question challenge fee.',
    officialSourceUrl: 'https://www.rrbcdg.gov.in/',
    sourceAttribution: 'RRB Centralised Employment Notice Corrigendum',
    notificationDate: '2026-09-10',
    lastVerifiedDate: '2026-10-20',
    status: 'PUBLISHED',
    isImportantAlert: false
  },
  {
    id: 'upd-ssc-cgl-2026-10',
    examId: 'ssc-cgl-2026',
    examName: 'SSC CGL Combined Graduate Level Examination 2026',
    organization: 'Staff Selection Commission (SSC)',
    category: 'SSC',
    updateType: 'NOTIFICATION',
    title: '17,727 Vacancies Tier-I Exam Schedule & City Intimation',
    summary: 'SSC has published the exam city slip and shift timings for Tier-I CBT examination across all northern, western, eastern, and southern regions.',
    officialSourceUrl: 'https://ssc.gov.in/',
    sourceAttribution: 'SSC Official Examination Calendar',
    notificationDate: '2026-09-05',
    lastVerifiedDate: '2026-10-20',
    status: 'PUBLISHED',
    isImportantAlert: true
  }
];

export function getDailyUpdates(filter?: { status?: string; category?: string; query?: string }) {
  return DAILY_EXAM_UPDATES.filter((upd) => {
    if (filter?.status && upd.status !== filter.status) return false;
    if (filter?.category && filter.category !== 'All' && upd.category !== filter.category) return false;
    if (filter?.query) {
      const q = filter.query.toLowerCase();
      const match =
        upd.examName.toLowerCase().includes(q) ||
        upd.title.toLowerCase().includes(q) ||
        upd.summary.toLowerCase().includes(q) ||
        upd.organization.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });
}
