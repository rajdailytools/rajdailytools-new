import { ExamRecord, ExamInfoSection } from '../types/exam';
import { generateUpPgtTeacher50Sections, UP_PGT_TEACHER_50_SECTIONS } from './upPgtTeacher50Sections';

export { generateUpPgtTeacher50Sections, UP_PGT_TEACHER_50_SECTIONS };

export interface PgtSubjectVacancyItem {
  sn: number;
  subjectHindi: string;
  subjectEnglish: string;
  boys: { ur: number; sc: number; st: number; obc: number; ews: number; total: number };
  girls: { ur: number; sc: number; st: number; obc: number; ews: number; total: number };
  combined: { ur: number; sc: number; st: number; obc: number; ews: number; total: number };
  qualification: string;
  bedMandatory: boolean;
  specialNote?: string;
}

// Complete 26-Subject Official Vacancy Table extracted from Table 01 (Page 13 of Advt 06/2026)
export const UP_PGT_SUBJECT_VACANCIES: PgtSubjectVacancyItem[] = [
  {
    sn: 1,
    subjectHindi: 'हिन्दी',
    subjectEnglish: 'Hindi',
    boys: { ur: 170, sc: 70, st: 0, obc: 71, ews: 25, total: 336 },
    girls: { ur: 20, sc: 8, st: 0, obc: 8, ews: 2, total: 38 },
    combined: { ur: 190, sc: 78, st: 0, obc: 79, ews: 27, total: 374 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से हिन्दी में स्नातकोत्तर उपाधि और संस्कृत विषय के साथ कला स्नातक (B.A. with Sanskrit) तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true,
    specialNote: 'संस्कृत विषय के साथ स्नातक (B.A. with Sanskrit) होना अनिवार्य है।'
  },
  {
    sn: 2,
    subjectHindi: 'अंग्रेजी',
    subjectEnglish: 'English',
    boys: { ur: 116, sc: 69, st: 0, obc: 55, ews: 16, total: 256 },
    girls: { ur: 19, sc: 8, st: 0, obc: 1, ews: 1, total: 29 },
    combined: { ur: 135, sc: 77, st: 0, obc: 56, ews: 17, total: 285 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से अंग्रेजी विषय में स्नातकोत्तर (M.A. English) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 3,
    subjectHindi: 'अर्थशास्त्र',
    subjectEnglish: 'Economics',
    boys: { ur: 63, sc: 62, st: 0, obc: 41, ews: 12, total: 178 },
    girls: { ur: 7, sc: 11, st: 0, obc: 6, ews: 0, total: 24 },
    combined: { ur: 70, sc: 73, st: 0, obc: 47, ews: 12, total: 202 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से अर्थशास्त्र विषय में स्नातकोत्तर (M.A./M.Sc. Economics) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 4,
    subjectHindi: 'समाजशास्त्र',
    subjectEnglish: 'Sociology',
    boys: { ur: 29, sc: 26, st: 0, obc: 17, ews: 3, total: 75 },
    girls: { ur: 3, sc: 2, st: 0, obc: 4, ews: 0, total: 9 },
    combined: { ur: 32, sc: 28, st: 0, obc: 21, ews: 3, total: 84 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से समाजशास्त्र विषय में स्नातकोत्तर (M.A. Sociology) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 5,
    subjectHindi: 'भौतिक विज्ञान',
    subjectEnglish: 'Physics',
    boys: { ur: 63, sc: 19, st: 0, obc: 29, ews: 11, total: 122 },
    girls: { ur: 5, sc: 3, st: 0, obc: 1, ews: 1, total: 10 },
    combined: { ur: 68, sc: 22, st: 0, obc: 30, ews: 12, total: 132 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से भौतिक विषय में स्नातकोत्तर (M.Sc. Physics) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 6,
    subjectHindi: 'रसायन विज्ञान',
    subjectEnglish: 'Chemistry',
    boys: { ur: 90, sc: 24, st: 0, obc: 39, ews: 20, total: 173 },
    girls: { ur: 6, sc: 4, st: 0, obc: 2, ews: 0, total: 12 },
    combined: { ur: 96, sc: 28, st: 0, obc: 41, ews: 20, total: 185 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से रसायन विषय में स्नातकोत्तर (M.Sc. Chemistry) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 7,
    subjectHindi: 'गणित',
    subjectEnglish: 'Mathematics',
    boys: { ur: 53, sc: 18, st: 0, obc: 23, ews: 11, total: 105 },
    girls: { ur: 4, sc: 0, st: 0, obc: 3, ews: 0, total: 7 },
    combined: { ur: 57, sc: 18, st: 0, obc: 26, ews: 11, total: 112 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से गणित विषय में स्नातकोत्तर (M.A./M.Sc. Mathematics) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 8,
    subjectHindi: 'वाणिज्य',
    subjectEnglish: 'Commerce',
    boys: { ur: 19, sc: 8, st: 0, obc: 23, ews: 12, total: 62 },
    girls: { ur: 1, sc: 0, st: 0, obc: 0, ews: 0, total: 1 },
    combined: { ur: 20, sc: 8, st: 0, obc: 23, ews: 12, total: 63 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से वाणिज्य विषय में स्नातकोत्तर (M.Com) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 9,
    subjectHindi: 'इतिहास',
    subjectEnglish: 'History',
    boys: { ur: 42, sc: 24, st: 0, obc: 22, ews: 6, total: 94 },
    girls: { ur: 7, sc: 4, st: 0, obc: 6, ews: 1, total: 18 },
    combined: { ur: 49, sc: 28, st: 0, obc: 28, ews: 7, total: 112 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से प्राचीन इतिहास / मध्यकालीन इतिहास / आधुनिक इतिहास के साथ स्नातकोत्तर उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 10,
    subjectHindi: 'चित्रकला',
    subjectEnglish: 'Drawing & Painting',
    boys: { ur: 22, sc: 14, st: 0, obc: 17, ews: 4, total: 57 },
    girls: { ur: 8, sc: 1, st: 0, obc: 2, ews: 1, total: 12 },
    combined: { ur: 30, sc: 15, st: 0, obc: 19, ews: 5, total: 69 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से रेखांकन और चित्रकला (Drawing & Painting) में स्नातकोत्तर उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 11,
    subjectHindi: 'मनोविज्ञान',
    subjectEnglish: 'Psychology',
    boys: { ur: 15, sc: 7, st: 0, obc: 14, ews: 4, total: 40 },
    girls: { ur: 6, sc: 2, st: 0, obc: 2, ews: 0, total: 10 },
    combined: { ur: 21, sc: 9, st: 0, obc: 16, ews: 4, total: 50 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से मनोविज्ञान विषय में स्नातकोत्तर (M.A./M.Sc. Psychology) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 12,
    subjectHindi: 'शिक्षाशास्त्र',
    subjectEnglish: 'Education',
    boys: { ur: 10, sc: 11, st: 0, obc: 4, ews: 3, total: 28 },
    girls: { ur: 8, sc: 2, st: 0, obc: 1, ews: 1, total: 12 },
    combined: { ur: 18, sc: 13, st: 0, obc: 5, ews: 4, total: 40 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से मनोविज्ञान या शिक्षाशास्त्र (M.A. Education / M.Ed.) में स्नातकोत्तर उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 13,
    subjectHindi: 'संगीत गायन',
    subjectEnglish: 'Music Vocal',
    boys: { ur: 0, sc: 0, st: 0, obc: 0, ews: 1, total: 1 },
    girls: { ur: 3, sc: 1, st: 0, obc: 1, ews: 0, total: 5 },
    combined: { ur: 3, sc: 1, st: 0, obc: 1, ews: 1, total: 6 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से संगीत में स्नातकोत्तर उपाधि या संगीत (गायन) के साथ स्नातक उपाधि और संगीत में विशेषज्ञता के साथ बी.एड. उपाधि।',
    bedMandatory: true
  },
  {
    sn: 14,
    subjectHindi: 'संस्कृत',
    subjectEnglish: 'Sanskrit',
    boys: { ur: 103, sc: 50, st: 0, obc: 67, ews: 21, total: 241 },
    girls: { ur: 7, sc: 6, st: 0, obc: 8, ews: 2, total: 23 },
    combined: { ur: 110, sc: 56, st: 0, obc: 75, ews: 23, total: 264 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से संस्कृत में स्नातकोत्तर (M.A. Sanskrit / Acharya) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 15,
    subjectHindi: 'उर्दू',
    subjectEnglish: 'Urdu',
    boys: { ur: 2, sc: 0, st: 0, obc: 4, ews: 3, total: 9 },
    girls: { ur: 3, sc: 0, st: 0, obc: 1, ews: 0, total: 4 },
    combined: { ur: 2, sc: 0, st: 0, obc: 5, ews: 3, total: 13 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से उर्दू में स्नातकोत्तर (M.A. Urdu) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 16,
    subjectHindi: 'गृह विज्ञान',
    subjectEnglish: 'Home Science',
    boys: { ur: 0, sc: 0, st: 0, obc: 0, ews: 0, total: 0 },
    girls: { ur: 4, sc: 3, st: 0, obc: 3, ews: 2, total: 12 },
    combined: { ur: 4, sc: 3, st: 0, obc: 3, ews: 2, total: 12 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से गृह विज्ञान में स्नातकोत्तर (M.Sc./M.A. Home Science) उपाधि, या बी.एस-सी. गृह विज्ञान से स्नातक तथा NCTE से मान्यता प्राप्त बी.एड. उपाधि।',
    bedMandatory: true,
    specialNote: 'केवल बालिका विद्यालयों हेतु पद विज्ञापित हैं।'
  },
  {
    sn: 17,
    subjectHindi: 'भूगोल',
    subjectEnglish: 'Geography',
    boys: { ur: 104, sc: 48, st: 0, obc: 73, ews: 14, total: 239 },
    girls: { ur: 4, sc: 2, st: 0, obc: 3, ews: 0, total: 9 },
    combined: { ur: 108, sc: 50, st: 0, obc: 76, ews: 14, total: 248 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से भूगोल विषय में स्नातकोत्तर (M.A./M.Sc. Geography) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 18,
    subjectHindi: 'शारीरिक शिक्षा',
    subjectEnglish: 'Physical Education',
    boys: { ur: 8, sc: 5, st: 0, obc: 4, ews: 2, total: 19 },
    girls: { ur: 0, sc: 0, st: 0, obc: 1, ews: 1, total: 2 },
    combined: { ur: 8, sc: 5, st: 0, obc: 5, ews: 3, total: 21 },
    qualification: '1. भारत में विधि द्वारा स्थापित किसी विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से स्नातक उपाधि।\n2. व्यायाम शिक्षा में एम.पी.एड. (M.P.Ed.) उपाधि।',
    bedMandatory: false,
    specialNote: 'व्यायाम शिक्षा में एम.पी.एड. (M.P.Ed.) अनिवार्य है।'
  },
  {
    sn: 19,
    subjectHindi: 'सैन्य विज्ञान',
    subjectEnglish: 'Military Science',
    boys: { ur: 5, sc: 1, st: 0, obc: 4, ews: 2, total: 12 },
    girls: { ur: 0, sc: 0, st: 0, obc: 0, ews: 0, total: 0 },
    combined: { ur: 5, sc: 1, st: 0, obc: 4, ews: 2, total: 12 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से सैन्य विज्ञान या रक्षा अध्ययन (Defence Studies) में स्नातकोत्तर उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 20,
    subjectHindi: 'रंजन कला',
    subjectEnglish: 'Ranjan Kala',
    boys: { ur: 0, sc: 0, st: 0, obc: 0, ews: 0, total: 0 },
    girls: { ur: 1, sc: 0, st: 0, obc: 1, ews: 0, total: 2 },
    combined: { ur: 1, sc: 0, st: 0, obc: 1, ews: 0, total: 2 },
    qualification: '1. हाईस्कूल तथा भारत सरकार से मान्यता प्राप्त किसी कला विद्यालय से चित्र लेखन सहित ललितकला में डिप्लोमा।\n2. NCTE द्वारा मान्यता प्राप्त पाठ्यक्रम में शिक्षा स्नातक (बी.एड.) की उपाधि।',
    bedMandatory: true,
    specialNote: 'केवल बालिका विद्यालयों हेतु पद विज्ञापित हैं।'
  },
  {
    sn: 21,
    subjectHindi: 'जीव विज्ञान',
    subjectEnglish: 'Biology',
    boys: { ur: 54, sc: 13, st: 0, obc: 32, ews: 18, total: 117 },
    girls: { ur: 6, sc: 2, st: 0, obc: 5, ews: 0, total: 13 },
    combined: { ur: 60, sc: 15, st: 0, obc: 37, ews: 18, total: 130 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से वनस्पति विज्ञान (Botany) या जन्तु विज्ञान (Zoology) में स्नातकोत्तर उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 22,
    subjectHindi: 'नागरिकशास्त्र',
    subjectEnglish: 'Civics / Political Science',
    boys: { ur: 43, sc: 36, st: 0, obc: 31, ews: 5, total: 115 },
    girls: { ur: 6, sc: 8, st: 0, obc: 3, ews: 0, total: 17 },
    combined: { ur: 49, sc: 44, st: 0, obc: 34, ews: 5, total: 132 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से राजनीति विज्ञान / राजनीति शास्त्र विषय में स्नातकोत्तर (M.A. Political Science) उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 23,
    subjectHindi: 'तर्कशास्त्र',
    subjectEnglish: 'Logic / Philosophy',
    boys: { ur: 6, sc: 2, st: 0, obc: 4, ews: 0, total: 12 },
    girls: { ur: 0, sc: 0, st: 0, obc: 0, ews: 0, total: 0 },
    combined: { ur: 6, sc: 2, st: 0, obc: 4, ews: 0, total: 12 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से दर्शन शास्त्र (Philosophy) में स्नातकोत्तर उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 24,
    subjectHindi: 'संगीत वादन',
    subjectEnglish: 'Music Instrumental',
    boys: { ur: 0, sc: 0, st: 0, obc: 2, ews: 0, total: 2 },
    girls: { ur: 4, sc: 0, st: 0, obc: 3, ews: 2, total: 9 },
    combined: { ur: 4, sc: 0, st: 0, obc: 5, ews: 2, total: 11 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी विश्वविद्यालय/डीम्ड विश्वविद्यालय अथवा संस्थान से संगीत में स्नातकोत्तर उपाधि या संगीत (वाद्य) के साथ स्नातक उपाधि और संगीत में विशेषज्ञता के साथ बी.एड. उपाधि।',
    bedMandatory: true
  },
  {
    sn: 25,
    subjectHindi: 'कृषि',
    subjectEnglish: 'Agriculture',
    boys: { ur: 7, sc: 8, st: 0, obc: 9, ews: 8, total: 32 },
    girls: { ur: 0, sc: 0, st: 0, obc: 0, ews: 0, total: 0 },
    combined: { ur: 7, sc: 8, st: 0, obc: 9, ews: 8, total: 32 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी मान्यता प्राप्त विश्वविद्यालय/डीम्ड विश्वविद्यालय से कृषि शास्त्र (M.Sc. Agriculture) में स्नातकोत्तर उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  },
  {
    sn: 26,
    subjectHindi: 'शस्य विज्ञान',
    subjectEnglish: 'Agronomy',
    boys: { ur: 3, sc: 1, st: 0, obc: 0, ews: 0, total: 4 },
    girls: { ur: 0, sc: 0, st: 0, obc: 0, ews: 0, total: 0 },
    combined: { ur: 3, sc: 1, st: 0, obc: 0, ews: 0, total: 4 },
    qualification: 'भारत में विधि द्वारा स्थापित किसी विश्वविद्यालय/डीम्ड विश्वविद्यालय से कृषि शास्त्र (शस्य विज्ञान / Agronomy) में स्नातकोत्तर उपाधि तथा NCTE से मान्यता प्राप्त बी.एड. (B.Ed.) उपाधि।',
    bedMandatory: true
  }
];

export const UP_PGT_TOTALS = {
  boys: { ur: 1027, sc: 516, st: 0, obc: 585, ews: 201, total: 2329 },
  girls: { ur: 132, sc: 67, st: 0, obc: 65, ews: 14, total: 278 },
  combined: { ur: 1156, sc: 583, st: 0, obc: 650, ews: 215, total: 2607 }
};

export const UP_PGT_TEACHER_2026_EXAM: ExamRecord = {
  id: 'up-pgt-teacher-2026',
  slug: 'up-pgt-teacher-recruitment-2026',
  examName: 'UP PGT Teacher Recruitment 2026',
  shortName: 'UP PGT Teacher',
  organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj',
  category: 'Teaching',
  postName: 'प्रवक्ता (PGT) चयन परीक्षा 2026 – Boys & Girls Schools (26 Subjects)',
  totalVacancy: '2,607',
  logoIcon: '🎓',
  logoBg: '#eff6ff',
  status: 'APPLICATION_OPEN',
  state: 'Uttar Pradesh',
  gender: 'All',
  ageMin: 21,
  ageMax: 62,
  ageRelaxationInfo: 'Minimum Age: 21 Years as on 01 July 2026. Maximum / Superannuation Age: 62 Years as per official UPESSC notification (Section 6-ख). Statutory category relaxations and guidelines as per UP Government Service Rules.',
  categoryEligibility: {
    'General / Unreserved': 'Minimum 21 Years as on 01.07.2026. Upper limit up to 62 Years superannuation.',
    'OBC / SC / ST (Uttar Pradesh)': 'Minimum 21 Years as on 01.07.2026. Upper limit up to 62 Years.',
    'EWS (Uttar Pradesh)': 'Minimum 21 Years as on 01.07.2026. 10% vertical reservation.',
    'Women Candidates': 'Eligible for both Boys and Girls institutions (Must choose one cadre).',
    'Male Candidates': 'Eligible for Boys institutions only (Cannot apply for Girls institutions, except visually impaired for Music).'
  },
  education: ['Post Graduation', 'Graduation', 'Other'],
  minimumQualificationLevel: 'Postgraduate Degree (Master\'s) in Concerned Subject from recognized University + NCTE recognized B.Ed. degree (or subject-specific qualification as per notification).',
  acceptedQualificationLevels: [
    'Postgraduate Degree in the concerned subject from a recognized University / Deemed University established by law in India',
    'Bachelor of Education (B.Ed.) from an NCTE recognized institution',
    'Subject-specific exceptions: For Physical Education: Graduation + M.P.Ed. (No B.Ed required); For Hindi: Master\'s in Hindi + B.A. with Sanskrit + B.Ed.'
  ],
  applicationStartDate: '2026-09-18',
  applicationLastDate: '2026-10-17',
  cityIntimationDate: undefined,
  cityIntimationStatus: 'Not Released',
  admitCardDate: undefined,
  examDate: '2026-12-15', // 15 & 16 December 2026
  answerKeyDate: undefined,
  resultDate: undefined,
  cutOffDate: undefined,
  applyLink: 'https://upessc.up.gov.in/',
  officialWebsite: 'https://upessc.up.gov.in/',
  officialNotification: 'https://www.upessc.up.gov.in/',
  salary: {
    payScale: 'Level-8 (₹47,600 – ₹1,51,100)',
    inHand: '₹62,000 – ₹78,000 Approx. monthly in-hand (based on HRA, DA, and city tier)',
    allowances: 'Dearness Allowance (DA), House Rent Allowance (HRA), City Compensatory Allowance (CCA), Medical Coverage, New Pension Scheme (NPS)'
  },
  importantDates: [
    { label: 'Official Detailed Advertisement Released (Advt 06/2026)', date: '15 September 2026' },
    { label: 'Online Registration (O.T.R.) / Application Start Date', date: '18 September 2026', isHighlight: true },
    { label: 'Online Application Fee Payment Last Date', date: '17 October 2026', isHighlight: true },
    { label: 'Online Application Correction Window Last Date', date: '21 October 2026' },
    { label: 'Written Examination Date (OMR Offline Mode)', date: '15 & 16 December 2026', isHighlight: true },
    { label: 'Exam Centre District Notification (10 Days Prior)', date: 'Not Released / To Be Updated' },
    { label: 'Admit Card Download Link Active (3 Days Prior)', date: 'Not Released / To Be Updated' },
    { label: 'Official Provisional Answer Key & Objection Portal', date: 'Not Released / To Be Updated' },
    { label: 'Written Examination Result & Interview Shortlist', date: 'Not Released / To Be Updated' },
    { label: 'Interview (40 Marks) & Document Verification', date: 'Not Released / To Be Updated' },
    { label: 'Final Merit List & School Allotment', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / Unreserved / Other Backward Classes (OBC) / EWS & Others', amount: '₹1,500.00' },
    { category: 'Scheduled Castes (SC) / Scheduled Tribes (ST) [UP Domicile]', amount: '₹750.00' },
    { category: 'Divyangjan / PwD Candidates', amount: '₹500.00' }
  ],
  selectionProcess: [
    'Stage 1: One Time Registration (OTR) & Online Application Form on upessc.up.gov.in',
    'Stage 2: Offline Objective Written Examination (120 MCQs, 360 Marks, 2 Hours, +3/-1 Marking)',
    'Stage 3: Interview (40 Marks) for shortlisted candidates',
    'Stage 4: Document Verification (Original documents + 2 self-attested sets + Affidavit in Appendix 6)',
    'Stage 5: Final Combined Merit List (360 Written + 40 Interview = 400 Total Selection Marks)',
    'Stage 6: School Allotment by Authorized Officer (Director Secondary Education, UP, Prayagraj)'
  ],
  examPattern: [
    {
      tier: 'Written Examination (Objective MCQs)',
      mode: 'Offline Pen & Paper (Black Ballpoint Pen on OMR Sheet)',
      duration: '2 Hours (120 Minutes) [PwD extra 20 min/hour with scribe]',
      negativeMarking: '01 Mark Deducted per wrong or multiple answer (-1 Mark)',
      subjects: [
        { name: 'General Knowledge (सामान्य ज्ञान)', questions: 30, marks: 90 },
        { name: 'Concerned Subject (सम्बन्धित विषय)', questions: 90, marks: 270 }
      ]
    },
    {
      tier: 'Interview (साक्षात्कार)',
      mode: 'Personal Interview at UPESSC Office, Prayagraj',
      duration: 'Per Candidate Viva-voce',
      negativeMarking: 'None',
      subjects: [
        { name: 'Subject Knowledge, Teaching Aptitude, Personality & Expression', questions: 0, marks: 40 }
      ]
    }
  ],
  faq: [
    {
      q: 'What is the total number of vacancies in UP PGT Recruitment 2026?',
      a: 'A total of 2,607 vacancies have been officially announced across 26 subjects under Advt No. 06/2026. This includes 2,329 vacancies in Boys Schools (बालक विद्यालय) and 278 vacancies in Girls Schools (बालिका विद्यालय).'
    },
    {
      q: 'What is the selection pattern and total marks for UP PGT 2026?',
      a: 'The selection is based on a total of 400 marks: Written Examination of 360 marks (120 MCQs: 30 GK + 90 Concerned Subject) and an Interview of 40 marks.'
    },
    {
      q: 'Is B.Ed mandatory for all UP PGT subjects?',
      a: 'B.Ed from an NCTE-recognized institution is mandatory for almost all academic subjects. For Physical Education, Bachelor\'s degree + M.P.Ed. is required. Please check subject-specific qualifications in Section 7 of the official notice.'
    },
    {
      q: 'What is the marking scheme in the UP PGT Written Exam?',
      a: 'Each correct answer carries +3 marks. There is negative marking of -1 mark (01 अंक घटा दिए जायेंगे) for each wrong or multiple answer.'
    },
    {
      q: 'What is the age limit for UP PGT 2026?',
      a: 'The minimum age is 21 years as on 01 July 2026. As per official Section 6(ख), the maximum/superannuation age is 62 years.'
    },
    {
      q: 'Can male candidates apply for Girls Schools?',
      a: 'No. As per Section 12.6 of the official notification, male candidates are not eligible to apply for Girls institutions (except visually impaired candidates for Music). Female candidates can apply for either Boys or Girls schools, but must choose only one.'
    },
    {
      q: 'What is the application fee for UP PGT 2026?',
      a: 'General / OBC / EWS: ₹1,500; SC / ST (UP Domicile): ₹750; Divyangjan (PwD): ₹500.'
    }
  ]
};

UP_PGT_TEACHER_2026_EXAM.allInformation = UP_PGT_TEACHER_50_SECTIONS;

// Comprehensive 50 Detailed Sections
export function generateUpPgtTeacher58Sections(): ExamInfoSection[] {
  return generateUpPgtTeacher50Sections();
}

function _legacySections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: '1. UP PGT Teacher Recruitment 2026 – Overview & Fast Facts',
      badge: 'Overview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The <strong>Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj</strong> (उत्तर प्रदेश शिक्षा सेवा चयन आयोग, प्रयागराज) has officially published Advertisement No. <strong>06/2026</strong> for the <strong>प्रवक्ता (PGT) चयन परीक्षा, 2026</strong>. A total of <strong>2,607 posts</strong> are notified across 26 subjects in government-aided secondary institutions (अशासकीय सहायता प्राप्त माध्यमिक विद्यालय) of Uttar Pradesh.</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Recruitment Metric</th>
                  <th class="p-2.5">Official Notification Specification (Advt 06/2026)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Recruitment Commission</td>
                  <td class="p-2.5 font-bold text-blue-900">UPESSC (Uttar Pradesh Education Service Selection Commission, Prayagraj)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Commission Address</td>
                  <td class="p-2.5">23 Allengunj, Prayagraj – 211002 (23 एलनगंज, प्रयागराज-211002)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Advertisement Number</td>
                  <td class="p-2.5 font-bold text-slate-900">विज्ञापन संख्या- 06/2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Designation / Cadre</td>
                  <td class="p-2.5 font-semibold text-slate-900">प्रवक्ता (Post Graduate Teacher - PGT)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Total Vacancies</td>
                  <td class="p-2.5 font-bold text-emerald-700">2,607 Posts (Boys Schools: 2,329 | Girls Schools: 278)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Pay Scale & Matrix</td>
                  <td class="p-2.5 font-mono font-bold text-blue-800">Level-8 (₹47,600.00 – ₹1,51,100.00)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Application Mode</td>
                  <td class="p-2.5 font-semibold text-slate-900">OTR Based Online Mode only (www.upessc.up.gov.in)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Application Window</td>
                  <td class="p-2.5 font-bold text-slate-900">18 September 2026 to 17 October 2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Correction Window</td>
                  <td class="p-2.5 font-bold text-purple-700">Up to 21 October 2026</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Written Exam Dates</td>
                  <td class="p-2.5 font-bold text-rose-700">15 व 16 दिसम्बर, 2026 (15–16 December 2026)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold bg-slate-50/50">Selection Process</td>
                  <td class="p-2.5 font-semibold text-slate-900">Written Test (360 Marks) + Interview (40 Marks) = 400 Marks Total</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: '2. Latest Official Updates & Notification Notice (Advt 06/2026)',
      badge: 'Updates',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
            <span class="text-xs font-bold text-blue-900 block mb-1">📢 Commission Notification Bulletin (15.09.2026):</span>
            <p class="text-blue-950">UPESSC has released the formal advertisement notice for 2,607 PGT posts. One Time Registration (OTR) has been made mandatory before candidate can apply online. Application portal opens from 18 September 2026.</p>
          </div>
          <p>Key procedural instructions announced by UPESSC:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Mandatory OTR:</strong> Candidates must register via OTR with Aadhaar / mobile OTP validation before filling the application form.</li>
            <li><strong>Single Application Rule:</strong> Candidates may submit only one application per subject and cadre. If multiple forms are submitted, only the final submitted form is valid.</li>
            <li><strong>Gender Cadre Option:</strong> Female candidates can opt for either Boys or Girls school cadre, but cannot apply in both cadres simultaneously. Male candidates can only apply for Boys schools.</li>
          </ul>
        </div>
      `
    },
    {
      id: 3,
      title: '3. Important Dates & Complete Recruitment Schedule',
      badge: 'Dates',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Event Milestone</th>
                  <th class="p-2.5">Official Date / Timeline</th>
                  <th class="p-2.5">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr class="bg-emerald-50/50">
                  <td class="p-2.5 font-semibold">Notification Published</td>
                  <td class="p-2.5 font-bold">15 September 2026</td>
                  <td class="p-2.5 text-emerald-800 font-bold">Released</td>
                </tr>
                <tr class="bg-emerald-50/50">
                  <td class="p-2.5 font-semibold">Online Application / OTR Start Date</td>
                  <td class="p-2.5 font-bold">18 September 2026</td>
                  <td class="p-2.5 text-emerald-800 font-bold">Active</td>
                </tr>
                <tr class="bg-amber-50/50">
                  <td class="p-2.5 font-semibold">Application Fee Payment Last Date</td>
                  <td class="p-2.5 font-bold text-amber-900">17 October 2026</td>
                  <td class="p-2.5 text-amber-800 font-bold">Upcoming Deadline</td>
                </tr>
                <tr class="bg-purple-50/50">
                  <td class="p-2.5 font-semibold">Application Online Correction Last Date</td>
                  <td class="p-2.5 font-bold text-purple-900">21 October 2026</td>
                  <td class="p-2.5 text-purple-800 font-bold">Window Closes</td>
                </tr>
                <tr class="bg-rose-50/50">
                  <td class="p-2.5 font-semibold">Written Examination (OMR Mode)</td>
                  <td class="p-2.5 font-bold text-rose-900">15 व 16 दिसम्बर, 2026 (15–16 Dec 2026)</td>
                  <td class="p-2.5 text-rose-800 font-bold">Confirmed Official Date</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Exam City Intimation Slip</td>
                  <td class="p-2.5">10 Days Prior to Exam (~05 Dec 2026)</td>
                  <td class="p-2.5 text-slate-500">To Be Updated</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Admit Card Download Link</td>
                  <td class="p-2.5">3 Days Prior to Exam (~12 Dec 2026)</td>
                  <td class="p-2.5 text-slate-500">Coming Soon</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Provisional Answer Key & Objections</td>
                  <td class="p-2.5">Post Examination</td>
                  <td class="p-2.5 text-slate-500">Notify Soon</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Written Exam Result & Interview Shortlist</td>
                  <td class="p-2.5">Post Evaluation</td>
                  <td class="p-2.5 text-slate-500">Notify Soon</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Interview (40 Marks) & DV</td>
                  <td class="p-2.5">To Be Notified</td>
                  <td class="p-2.5 text-slate-500">Notify Soon</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-semibold">Final Selection Merit List</td>
                  <td class="p-2.5">Post Interview</td>
                  <td class="p-2.5 text-slate-500">Notify Soon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: '4. Vacancy Overview – 2,607 Posts Breakdown',
      badge: 'Vacancies',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 5 of Advt 06/2026, the Directorate of Secondary Education (माध्यमिक शिक्षा निदेशालय, उ०प्र०, प्रयागराज) has notified a total of <strong>2,607 vacancies</strong> in government-aided secondary institutions across Uttar Pradesh:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
              <span class="text-xs font-bold text-blue-700 uppercase block">बालक विद्यालय (Boys Schools)</span>
              <span class="text-2xl font-black text-blue-950 mt-1 block">2,329</span>
              <span class="text-[11px] text-blue-800">89.3% of total vacancies</span>
            </div>
            <div class="p-4 bg-purple-50 border border-purple-200 rounded-xl text-center">
              <span class="text-xs font-bold text-purple-700 uppercase block">बालिका विद्यालय (Girls Schools)</span>
              <span class="text-2xl font-black text-purple-950 mt-1 block">278</span>
              <span class="text-[11px] text-purple-800">10.7% of total vacancies</span>
            </div>
            <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <span class="text-xs font-bold text-emerald-700 uppercase block">कुल सम्मिलित रिक्तियां (Total Combined)</span>
              <span class="text-2xl font-black text-emerald-950 mt-1 block">2,607</span>
              <span class="text-[11px] text-emerald-800">Level-8 Pay Matrix</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: '5. Complete Subject-wise Vacancy Table (All 26 Subjects)',
      badge: 'Table 01',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Official Table 01 (सारणी-1) from Page 13 of Advt No. 06/2026 contains the complete distribution across all 26 subjects. Check the detailed interactive table in the vacancy module above.</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Top Vacancies:</strong> Hindi (374), English (285), Sanskrit (264), Geography (248), Economics (202), Chemistry (185), Physics (132), Civics (132), Biology (130), History (112), Mathematics (112).</li>
            <li><strong>Specialized Subjects:</strong> Ranjan Kala (2), Logic/Philosophy (12), Music Vocal (6), Music Instrumental (11), Military Science (12), Agronomy (4).</li>
          </ul>
        </div>
      `
    },
    {
      id: 6,
      title: '6. Boys School Cadre Vacancy Distribution (2,329 Posts)',
      badge: 'Boys Cadre',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In the Boys Schools Cadre (बालक विद्यालय), a total of <strong>2,329 posts</strong> are requisitioned. Both male and female candidates can apply, but female candidates must select this cadre specifically during online application.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Boys School Posts</th>
                  <th class="p-2.5">Percentage Share</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2 font-semibold">General (UR)</td><td class="p-2 font-bold text-slate-900">1,027</td><td class="p-2">44.1%</td></tr>
                <tr><td class="p-2 font-semibold">Scheduled Castes (SC)</td><td class="p-2 font-bold text-slate-900">516</td><td class="p-2">22.2%</td></tr>
                <tr><td class="p-2 font-semibold">Scheduled Tribes (ST)</td><td class="p-2 font-bold text-slate-900">0</td><td class="p-2">0.0%</td></tr>
                <tr><td class="p-2 font-semibold">Other Backward Classes (OBC)</td><td class="p-2 font-bold text-slate-900">585</td><td class="p-2">25.1%</td></tr>
                <tr><td class="p-2 font-semibold">Economically Weaker Section (EWS)</td><td class="p-2 font-bold text-slate-900">201</td><td class="p-2">8.6%</td></tr>
                <tr class="bg-blue-50/70 font-bold"><td class="p-2.5">Total Boys Cadre</td><td class="p-2.5 text-blue-900">2,329</td><td class="p-2.5">100.0%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: '7. Girls School Cadre Vacancy Distribution (278 Posts)',
      badge: 'Girls Cadre',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In the Girls Schools Cadre (बालिका विद्यालय), a total of <strong>278 posts</strong> are available. As per Section 12.6 of the official notification, only female candidates are eligible to apply for these institutions (male candidates cannot apply, except visually impaired candidates for Music).</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category</th>
                  <th class="p-2.5">Girls School Posts</th>
                  <th class="p-2.5">Percentage Share</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2 font-semibold">General (UR)</td><td class="p-2 font-bold text-slate-900">132</td><td class="p-2">47.5%</td></tr>
                <tr><td class="p-2 font-semibold">Scheduled Castes (SC)</td><td class="p-2 font-bold text-slate-900">67</td><td class="p-2">24.1%</td></tr>
                <tr><td class="p-2 font-semibold">Scheduled Tribes (ST)</td><td class="p-2 font-bold text-slate-900">0</td><td class="p-2">0.0%</td></tr>
                <tr><td class="p-2 font-semibold">Other Backward Classes (OBC)</td><td class="p-2 font-bold text-slate-900">65</td><td class="p-2">23.4%</td></tr>
                <tr><td class="p-2 font-semibold">Economically Weaker Section (EWS)</td><td class="p-2 font-bold text-slate-900">14</td><td class="p-2">5.0%</td></tr>
                <tr class="bg-purple-50/70 font-bold"><td class="p-2.5">Total Girls Cadre</td><td class="p-2.5 text-purple-900">278</td><td class="p-2.5">100.0%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 8,
      title: '8. Category-wise Vacancy Distribution (Combined 2,607 Posts)',
      badge: 'Categories',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Combined vertical category reservation totals across all 26 subjects under Table 01:</p>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 my-3">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span class="text-[11px] font-bold text-slate-500 uppercase block">General (UR)</span>
              <span class="text-xl font-black text-slate-900 mt-1 block">1,156</span>
              <span class="text-[10px] text-slate-600">44.34%</span>
            </div>
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-center">
              <span class="text-[11px] font-bold text-blue-700 uppercase block">OBC (Non-Creamy)</span>
              <span class="text-xl font-black text-blue-900 mt-1 block">650</span>
              <span class="text-[10px] text-blue-700">24.93%</span>
            </div>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center">
              <span class="text-[11px] font-bold text-amber-800 uppercase block">Scheduled Castes</span>
              <span class="text-xl font-black text-amber-950 mt-1 block">583</span>
              <span class="text-[10px] text-amber-800">22.36%</span>
            </div>
            <div class="p-3 bg-purple-50 border border-purple-200 rounded-xl text-center">
              <span class="text-[11px] font-bold text-purple-700 uppercase block">EWS</span>
              <span class="text-xl font-black text-purple-900 mt-1 block">215</span>
              <span class="text-[10px] text-purple-700">8.25%</span>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span class="text-[11px] font-bold text-slate-500 uppercase block">Scheduled Tribes</span>
              <span class="text-xl font-black text-slate-900 mt-1 block">0</span>
              <span class="text-[10px] text-slate-600">Requisition 0</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 9,
      title: '9. Vertical & Horizontal Reservation Rules',
      badge: 'Reservation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 6(क) of the notification, reservation benefits are governed by Uttar Pradesh Public Services (Reservation for Scheduled Castes, Scheduled Tribes and Other Backward Classes) Act, 1994 and UP Public Services (Reservation for Economically Weaker Sections) Act, 2020:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Domicile Condition:</strong> Reservation benefits are admissible only to permanent residents (मूल निवासी) of Uttar Pradesh. Candidates of other States will be treated as General / Unreserved.</li>
            <li><strong>Women Caste Certificates:</strong> In case of married female candidates, caste certificate issued from father's side (पिता पक्ष से निर्गत) is mandatory. Husband's side certificate is invalid.</li>
            <li><strong>Horizontal Reservation:</strong> Applicable to Ex-Servicemen, Dependents of Freedom Fighters (DFF), and Persons with Benchmark Disabilities (PwD) as per UP State Government rules.</li>
          </ul>
        </div>
      `
    },
    {
      id: 10,
      title: '10. Horizontal Reservation & PwD Sub-Categories',
      badge: 'Horizontal',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The Directorate of Secondary Education has identified PGT posts suitable for Divyangjan (PwD) under the following sub-categories (Section 6-क Note 1):</p>
          <p class="font-mono text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl">O.A. / O.L. / B. / B.A. / L.V. / D. / H.H. / L.C. / D.W. / A.A.V. / A.S.D. / S.L.D. / I.D. / M.I. / B.L. / B.L.A. / B.H. / M.D.Y.</p>
          <p>Candidates with 40% or more disability are eligible for statutory relaxations and provisions, subject to producing Appendix-5 disability certificate issued by the competent medical board.</p>
        </div>
      `
    },
    {
      id: 11,
      title: '11. Official List of All 26 Notified Subjects',
      badge: 'Subjects',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The 26 subjects officially notified under Advt No. 06/2026 are:</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs font-semibold">
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">1. हिन्दी (Hindi)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">2. अंग्रेजी (English)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">3. अर्थशास्त्र (Economics)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">4. समाजशास्त्र (Sociology)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">5. भौतिक विज्ञान (Physics)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">6. रसायन विज्ञान (Chemistry)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">7. गणित (Mathematics)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">8. वाणिज्य (Commerce)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">9. इतिहास (History)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">10. चित्रकला (Drawing & Painting)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">11. मनोविज्ञान (Psychology)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">12. शिक्षाशास्त्र (Education)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">13. संगीत गायन (Music Vocal)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">14. संस्कृत (Sanskrit)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">15. उर्दू (Urdu)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">16. गृह विज्ञान (Home Science)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">17. भूगोल (Geography)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">18. शारीरिक शिक्षा (Physical Ed)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">19. सैन्य विज्ञान (Military Science)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">20. रंजन कला (Ranjan Kala)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">21. जीव विज्ञान (Biology)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">22. नागरिकशास्त्र (Civics/Pol Sci)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">23. तर्कशास्त्र (Logic/Philosophy)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">24. संगीत वादन (Music Instrumental)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">25. कृषि (Agriculture)</span>
            <span class="p-2 bg-slate-50 rounded-lg border border-slate-200">26. शस्य विज्ञान (Agronomy)</span>
          </div>
        </div>
      `
    },
    {
      id: 12,
      title: '12. Department & Commission Operational Details',
      badge: 'Department',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The Uttar Pradesh Education Service Selection Commission (UPESSC) was constituted under the Uttar Pradesh Education Service Selection Commission Act, 2023 to centralize teacher recruitments across Basic, Secondary, and Higher Education departments.</p>
          <p>Appointed PGT teachers will be posted in Non-Government Aided Secondary Schools (अशासकीय सहायता प्राप्त माध्यमिक विद्यालय) across all 75 districts of Uttar Pradesh under the administrative jurisdiction of the Director of Secondary Education, UP, Prayagraj.</p>
        </div>
      `
    },
    {
      id: 13,
      title: '13. Post Designation & Job Responsibilities',
      badge: 'Post Details',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p><strong>Post Title:</strong> प्रवक्ता (Post Graduate Teacher - PGT)</p>
          <p><strong>Cadre:</strong> State Secondary Education Service (Group 'B' Gazetted equivalent scale in aided colleges)</p>
          <p><strong>Duties:</strong> Teaching Classes 11 and 12 (Intermediate Section) in the specialized academic subject, curriculum delivery, continuous and comprehensive evaluation, student guidance, and examination conduct.</p>
        </div>
      `
    },
    {
      id: 14,
      title: '14. Pay Scale & In-Hand Monthly Salary Calculation',
      badge: 'Salary',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 6(ग) of the notification, the post carries <strong>Pay Level-8 (₹47,600.00 to ₹1,51,100.00)</strong> under the 7th Central Pay Commission matrix.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Salary Component</th>
                  <th class="p-2.5">Class 'X' City (Kanpur, Lucknow)</th>
                  <th class="p-2.5">Class 'Y' City (Varanasi, Agra, Prayagraj)</th>
                  <th class="p-2.5">Class 'Z' City (Rural / Small Towns)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2 font-semibold">Basic Pay (Entry Level-8)</td><td class="p-2 font-mono">₹47,600</td><td class="p-2 font-mono">₹47,600</td><td class="p-2 font-mono">₹47,600</td></tr>
                <tr><td class="p-2 font-semibold">Dearness Allowance (DA @ 50%)</td><td class="p-2 font-mono">₹23,800</td><td class="p-2 font-mono">₹23,800</td><td class="p-2 font-mono">₹23,800</td></tr>
                <tr><td class="p-2 font-semibold">House Rent Allowance (HRA)</td><td class="p-2 font-mono">₹11,424 (24%)</td><td class="p-2 font-mono">₹7,616 (16%)</td><td class="p-2 font-mono">₹3,808 (8%)</td></tr>
                <tr><td class="p-2 font-semibold">City Compensatory / Misc.</td><td class="p-2 font-mono">₹500</td><td class="p-2 font-mono">₹350</td><td class="p-2 font-mono">₹200</td></tr>
                <tr class="bg-emerald-50/70 font-bold"><td class="p-2.5">Gross Monthly Salary</td><td class="p-2.5 text-emerald-900 font-mono">₹83,324</td><td class="p-2.5 text-emerald-900 font-mono">₹79,366</td><td class="p-2.5 text-emerald-900 font-mono">₹75,408</td></tr>
                <tr><td class="p-2 font-semibold">Deductions (NPS 10% + GIS)</td><td class="p-2 font-mono">-₹7,200</td><td class="p-2 font-mono">-₹7,200</td><td class="p-2 font-mono">-₹7,200</td></tr>
                <tr class="bg-blue-50/80 font-bold"><td class="p-2.5">Approx. Net In-Hand Salary</td><td class="p-2.5 text-blue-900 font-mono">₹76,124</td><td class="p-2.5 text-blue-900 font-mono">₹72,166</td><td class="p-2.5 text-blue-900 font-mono">₹68,208</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 15,
      title: '15. Pay Level-8 Structure & Career Progression',
      badge: 'Pay Matrix',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Starting at Cell 1 of Level-8 (₹47,600), PGT teachers receive 3% annual increment. Career progression follows Senior Scale after 12 years (Level-10 / ₹56,100–₹1,77,500) and Selection Grade after 24 years (Level-11 / ₹67,700–₹2,08,700). Eligible PGT lecturers also qualify for promotion to Principal (Level-12).</p>
        </div>
      `
    },
    {
      id: 16,
      title: '16. Age Limit & Crucial Calculation Date (01 July 2026)',
      badge: 'Age Limit',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 6(ख) of Advt No. 06/2026:</p>
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <p><strong>Minimum Age:</strong> 21 Years as on 01 July 2026 (born on or before 01.07.2005).</p>
            <p><strong>Maximum / Superannuation Age:</strong> 62 Years (पद की अधिवर्षता आयु 62 वर्ष है। 01 जुलाई, 2026 को 62 वर्ष से अधिक आयु होने पर आवेदन स्वीकार नहीं किया जायेगा।)</p>
          </div>
        </div>
      `
    },
    {
      id: 17,
      title: '17. Age Relaxation & Category Conditions',
      badge: 'Relaxation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Since the superannuation retirement age for aided secondary institutions in Uttar Pradesh is 62 years, candidates within 21 to 62 years can apply subject to category eligibility and medical fitness. No relaxation extends beyond the statutory retirement age of 62 years.</p>
        </div>
      `
    },
    {
      id: 18,
      title: '18. General Eligibility Criteria & Nationality',
      badge: 'General Eligibility',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Nationality:</strong> Candidate must be a citizen of India (भारत का नागरिक).</li>
            <li><strong>Character & Conduct:</strong> Must possess sound moral character; candidates dismissed from government service or convicted of moral turpitude are ineligible.</li>
            <li><strong>Marital Status:</strong> Candidates having more than one living spouse are ineligible unless exempted by the Governor (Section 12.2).</li>
          </ul>
        </div>
      `
    },
    {
      id: 19,
      title: '19. Subject-wise Educational Qualifications (Section 7)',
      badge: 'Qualifications',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Section 7 of the official notification specifies exact qualifications for each of the 26 subjects. Candidates must possess the prescribed qualification on or before the application closing date (17 October 2026):</p>
          <div class="space-y-2 text-xs">
            <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Hindi (1):</strong> M.A. in Hindi + B.A. with Sanskrit (संस्कृत विषय के साथ कला स्नातक) + NCTE recognized B.Ed.
            </div>
            <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong>English (2):</strong> M.A. in English + NCTE recognized B.Ed.
            </div>
            <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Economics (3):</strong> M.A./M.Sc. in Economics + NCTE recognized B.Ed.
            </div>
            <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Physics (5) & Chemistry (6):</strong> M.Sc. in concerned subject + NCTE recognized B.Ed.
            </div>
            <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Mathematics (7):</strong> M.A./M.Sc. in Mathematics + NCTE recognized B.Ed.
            </div>
            <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong>History (9):</strong> M.A. in Ancient / Medieval / Modern History + NCTE recognized B.Ed.
            </div>
            <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Biology (21):</strong> M.Sc. in Botany (वनस्पति विज्ञान) or Zoology (जन्तु विज्ञान) + NCTE recognized B.Ed.
            </div>
            <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong>Physical Education (18):</strong> Graduation Degree + M.P.Ed. (व्यायाम शिक्षा में एम.पी.एड.).
            </div>
          </div>
        </div>
      `
    },
    {
      id: 20,
      title: '20. Postgraduate Degree Requirements & Equivalency',
      badge: 'Post Graduation',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The Master's degree must be from a University established by law in India or a Deemed University recognized by UGC. Candidates appearing in their final year/semester are NOT eligible unless their final result is declared on or before 17 October 2026.</p>
        </div>
      `
    },
    {
      id: 21,
      title: '21. B.Ed Degree Mandate & NCTE Recognition',
      badge: 'B.Ed Mandate',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>In accordance with updated Uttar Pradesh Secondary Education Service Rules, <strong>B.Ed. (शिक्षा स्नातक) recognized by NCTE is mandatory</strong> for general academic PGT posts. Only subjects with specialized professional diplomas (e.g. M.P.Ed. for Physical Education) have specific alternative provisions.</p>
        </div>
      `
    },
    {
      id: 22,
      title: '22. Application Fee Structure & Payment Guidelines',
      badge: 'Application Fee',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 4 of Advt No. 06/2026, the application fee must be deposited online via Credit Card, Debit Card, or Net Banking:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Category (श्रेणी)</th>
                  <th class="p-2.5">Total Application Fee (आवेदन शुल्क)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2 font-semibold">General / Unreserved (UR) / OBC / EWS & Other State Candidates</td><td class="p-2 font-bold text-slate-900 font-mono">₹1,500.00</td></tr>
                <tr><td class="p-2 font-semibold">Scheduled Castes (SC) / Scheduled Tribes (ST) [UP Domicile]</td><td class="p-2 font-bold text-slate-900 font-mono">₹750.00</td></tr>
                <tr><td class="p-2 font-semibold">Divyangjan / PwD Candidates</td><td class="p-2 font-bold text-slate-900 font-mono">₹500.00</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-[11px] text-slate-500">Note: Application fee once paid will not be refunded or adjusted under any circumstances.</p>
        </div>
      `
    },
    {
      id: 23,
      title: '23. One Time Registration (OTR) Mandate on UPESSC Portal',
      badge: 'OTR',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 2.2 of the notification, UPESSC operates an <strong>OTR Based Online Application System</strong> on www.upessc.up.gov.in. Every applicant must first complete One Time Registration (OTR). OTR generates a unique permanent Registration ID that auto-populates candidate bio-data, mobile number, email, and identity proof across all commission forms.</p>
        </div>
      `
    },
    {
      id: 24,
      title: '24. Step-by-Step Online Application Guide',
      badge: 'How to Apply',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ol class="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
            <li><strong>Step 1: OTR Registration:</strong> Visit upessc.up.gov.in, navigate to OTR portal, and register with email, mobile OTP, and Aadhaar card authentication.</li>
            <li><strong>Step 2: Candidate Login:</strong> Login using your OTR credentials and select Advt No. 06/2026 (प्रवक्ता चयन परीक्षा 2026).</li>
            <li><strong>Step 3: Subject & Cadre Selection:</strong> Choose your concerned subject from the 26 notified subjects. Female candidates select either Boys School or Girls School cadre.</li>
            <li><strong>Step 4: Academic Details Entry:</strong> Enter High School, Intermediate, Graduation, Master's degree, and B.Ed. marks and roll numbers.</li>
            <li><strong>Step 5: Photo & Signature Upload:</strong> Upload signature (10–200 KB, 140x110 px) and passport photograph (30–300 KB, 300–600 px).</li>
            <li><strong>Step 6: Document Upload:</strong> Upload required marksheets and certificates in PDF format (50–500 KB).</li>
            <li><strong>Step 7: Online Fee Payment:</strong> Complete online payment via Payment Gateway (Credit/Debit card or Net Banking).</li>
            <li><strong>Step 8: Final Submission & Print:</strong> Print at least 3 copies of the final submitted application form for future use and interview.</li>
          </ol>
        </div>
      `
    },
    {
      id: 25,
      title: '25. Online Application Process & Form Submission Rules',
      badge: 'Submission',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>All information must be filled in English. No paper applications are accepted. Once submitted, changes in basic profile details like Category, Sub-Category, DOB, and Gender are not permissible. Ensure all entries match your High School certificate exactly.</p>
        </div>
      `
    },
    {
      id: 26,
      title: '26. Photograph Specifications & Upload Guidelines',
      badge: 'Photo Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 2.13 of Advt 06/2026:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Format:</strong> JPG or JPEG format only.</li>
            <li><strong>File Size:</strong> Between <strong>30 KB and 300 KB</strong>.</li>
            <li><strong>Pixel Resolution:</strong> Between <strong>300 and 600 pixels</strong>.</li>
            <li><strong>Features:</strong> Clear front face, neutral expression, white or light background, both ears clearly visible, no spectacles with dark or tinted glasses.</li>
          </ul>
        </div>
      `
    },
    {
      id: 27,
      title: '27. Signature Specifications & Upload Guidelines',
      badge: 'Signature Specs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 2.13 of Advt 06/2026:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Format:</strong> JPG or JPEG format only.</li>
            <li><strong>File Size:</strong> Between <strong>10 KB and 200 KB</strong>.</li>
            <li><strong>Dimensions / Resolution:</strong> <strong>140 × 110 pixels</strong>.</li>
            <li><strong>Surface:</strong> Signature must be signed with black ink pen on white paper background. Capital letter signatures or blurry crops will be rejected.</li>
          </ul>
        </div>
      `
    },
    {
      id: 28,
      title: '28. Documents Upload Checklist & PDF Sizing (50–500 KB)',
      badge: 'Documents',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 2.14, all certificate and document uploads must be in <strong>PDF format between 50 KB and 500 KB</strong>:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>High School (Class 10) Marksheet & Certificate for Date of Birth verification</li>
            <li>Intermediate (Class 12) Marksheet & Certificate</li>
            <li>Graduation Marksheets (Years 1, 2, 3) & Degree Certificate</li>
            <li>Master\'s Degree Marksheets (Years 1, 2) & Degree Certificate in Concerned Subject</li>
            <li>B.Ed. Marksheet & Degree Certificate (or M.P.Ed for Physical Education)</li>
            <li>Category Certificate (OBC/SC/ST/EWS) on prescribed Uttar Pradesh Government format</li>
            <li>Divyangjan Disability Certificate (Appendix 5) / Ex-Servicemen Discharge / DFF Certificate</li>
          </ul>
        </div>
      `
    },
    {
      id: 29,
      title: '29. Application Form Correction Window (Up to 21 Oct 2026)',
      badge: 'Correction',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates can rectify errors in their submitted application form through the online correction window up to <strong>21 October 2026</strong>. No manual representations or post-deadline requests for correction will be entertained by the commission.</p>
        </div>
      `
    },
    {
      id: 30,
      title: '30. Detailed Exam Pattern & Marks Breakdown',
      badge: 'Exam Pattern',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 9(क) of the official notification, the selection process comprises <strong>400 Marks Total</strong>:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <span class="text-xs font-bold text-blue-700 uppercase block">लिखित परीक्षा (Written Examination)</span>
              <span class="text-2xl font-black text-blue-950 mt-1 block">360 Marks</span>
              <p class="text-xs text-blue-900 mt-1">120 Multiple Choice Questions (30 GK + 90 Subject). Duration: 2 Hours.</p>
            </div>
            <div class="p-4 bg-purple-50 border border-purple-200 rounded-xl">
              <span class="text-xs font-bold text-purple-700 uppercase block">साक्षात्कार (Interview)</span>
              <span class="text-2xl font-black text-purple-950 mt-1 block">40 Marks</span>
              <p class="text-xs text-purple-900 mt-1">Conducted by UPESSC Selection Board for shortlisted candidates.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 31,
      title: '31. Written Examination Scheme (120 Questions / 360 Marks)',
      badge: 'Written Exam',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The written examination will be held on <strong>15 and 16 December 2026</strong> in offline OMR mode across designated district headquarters of Uttar Pradesh:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Section</th>
                  <th class="p-2.5">Questions</th>
                  <th class="p-2.5">Marks Per Question</th>
                  <th class="p-2.5">Total Marks</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr><td class="p-2 font-semibold">सामान्य ज्ञान (General Knowledge)</td><td class="p-2 font-bold">30 Questions</td><td class="p-2">+3 Marks</td><td class="p-2 font-bold text-blue-900">90 Marks</td></tr>
                <tr><td class="p-2 font-semibold">सम्बन्धित विषय (Concerned Subject)</td><td class="p-2 font-bold">90 Questions</td><td class="p-2">+3 Marks</td><td class="p-2 font-bold text-blue-900">270 Marks</td></tr>
                <tr class="bg-blue-50/70 font-bold"><td class="p-2.5">Total Written Test</td><td class="p-2.5">120 Questions</td><td class="p-2.5">—</td><td class="p-2.5 text-blue-900">360 Marks</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 32,
      title: '32. General Knowledge Section Breakdown (30 Questions / 90 Marks)',
      badge: 'GK Section',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The 30 questions in General Knowledge test candidate awareness across Indian Polity, Current National and International Events, Indian History, Geography, Environment, and General Science, with dedicated weightage given to Uttar Pradesh specific culture, heritage, and development schemes.</p>
        </div>
      `
    },
    {
      id: 33,
      title: '33. Concerned Subject Section Breakdown (90 Questions / 270 Marks)',
      badge: 'Subject Section',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The 90 subject questions focus purely on the specialized academic discipline applied for (e.g. Mathematics, Hindi, English, Physics, Chemistry). Questions test postgraduate level depth, conceptual mastery, and analytical pedagogy.</p>
        </div>
      `
    },
    {
      id: 34,
      title: '34. Marking Scheme & Scoring Rules (+3 Marks Correct)',
      badge: 'Marking Scheme',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 9(क):</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Correct Response:</strong> +03 marks will be awarded for each correct answer.</li>
            <li><strong>Maximum Possible Written Score:</strong> 120 × 3 = 360 Marks.</li>
          </ul>
        </div>
      `
    },
    {
      id: 35,
      title: '35. Negative Marking Penalty Rules (-1 Mark Deduction)',
      badge: 'Negative Marking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 9(क) bullet 5:</p>
          <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-950 font-semibold">
            "गलत/एकाधिक उत्तर दिये जाने के लिए 01 अंक घटा (Minus Marking) दिये जायेंगे।"
          </div>
          <p>For every wrong answer or multiple darkened circles for a single question, <strong>1 mark will be deducted</strong> from the candidate's total aggregate score.</p>
        </div>
      `
    },
    {
      id: 36,
      title: '36. Official Syllabus Access & Download Portal',
      badge: 'Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 9(ख) of Advt 06/2026, the comprehensive topic-wise syllabus for each subject has been published on the official UPESSC website:</p>
          <p><a href="https://www.upessc.up.gov.in/Home/Syllabus_all" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold underline">https://www.upessc.up.gov.in/Home/Syllabus_all</a></p>
        </div>
      `
    },
    {
      id: 37,
      title: '37. Subject-wise Syllabus Overview for Notified Subjects',
      badge: 'Subject Syllabus',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates can access detailed postgraduate level syllabi directly from the commission portal covering all 26 disciplines from Literature (Hindi, English, Sanskrit, Urdu), Pure Sciences (Physics, Chemistry, Biology, Mathematics), Social Sciences (History, Geography, Civics, Economics, Sociology), and Professional Trades.</p>
        </div>
      `
    },
    {
      id: 38,
      title: '38. Examination Centre Allotment & City Intimation Rules',
      badge: 'Exam Centre',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 8 of Advt 06/2026:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>Exam centres will be established at district headquarters (जनपद मुख्यालयों पर) across Uttar Pradesh.</li>
            <li>District of the exam centre will be notified <strong>10 days prior to the exam</strong>.</li>
            <li>Exact exam centre information will be available on the admit card <strong>3 days prior to the exam</strong>.</li>
            <li>No request for centre change will be accepted under any circumstance.</li>
          </ul>
        </div>
      `
    },
    {
      id: 39,
      title: '39. UP PGT Admit Card 2026 – Download Procedure & Status',
      badge: 'Admit Card',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-slate-900">Admit Card Status:</span>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">Not Released / To Be Updated</span>
            </div>
            <p>Admit Cards will be downloadable from www.upessc.up.gov.in using Registration Number / Mobile Number and Date of Birth 3 days before exam commencement.</p>
          </div>
        </div>
      `
    },
    {
      id: 40,
      title: '40. Exam Day Guidelines & Reporting Instructions',
      badge: 'Exam Day',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must report to the exam venue at least 60 minutes before commencement. Entry gates will close 15 minutes prior to the examination start. Electronic devices, smartwatches, calculators, and bags are prohibited inside the hall.</p>
        </div>
      `
    },
    {
      id: 41,
      title: '41. OMR Answer Sheet Rules & Black Ballpoint Pen Mandate',
      badge: 'OMR Rules',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 10.5 of Advt 06/2026:</p>
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-semibold">
            "अभ्यर्थी परीक्षा कक्ष में काला बाल प्वाइंट पेन (Black Ballpoint Pen) अपने साथ अवश्य लाएंगे तथा ओ०एम०आर० शीट के आयताकार खानों व गोलों को काले बाल प्वाइंट पेन से ही भरेंगे।"
          </div>
          <p>Use of gel pens, fountain pens, pencils, erasers, blades, or whitener is strictly prohibited and will lead to rejection of the OMR sheet without evaluation.</p>
        </div>
      `
    },
    {
      id: 42,
      title: '42. Official Answer Key Release & Download Protocol',
      badge: 'Answer Key',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The provisional answer key will be published on www.upessc.up.gov.in after the exam. Question papers and master keys across all sets (A, B, C, D) will be made available for candidate inspection.</p>
        </div>
      `
    },
    {
      id: 43,
      title: '43. Candidate Carbon Copy & Response Verification',
      badge: 'Response Sheet',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates are permitted to take the carbon copy (candidate copy) of their OMR sheet after the exam to verify answers against the official provisional key.</p>
        </div>
      `
    },
    {
      id: 44,
      title: '44. Online Question Challenge & Objection Submission Process',
      badge: 'Objections',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates can file objections online against questions or answer keys within the stipulated window by submitting authenticated documentary evidence from standard university textbooks.</p>
        </div>
      `
    },
    {
      id: 45,
      title: '45. Subject Expert Review & Final Answer Key Finalization',
      badge: 'Final Key',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>All candidate representations will be scrutinized by subject matter expert committees. The Final Answer Key determined by experts will be binding and OMR evaluation will be executed on the revised master key.</p>
        </div>
      `
    },
    {
      id: 46,
      title: '46. Written Examination Result Declaration & Shortlisting',
      badge: 'Result',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Written examination scorecards and category-wise cut-off marks will be displayed on the UPESSC website after the entire selection cycle concludes. Shortlisted candidates will be invited for interview.</p>
        </div>
      `
    },
    {
      id: 47,
      title: '47. Cut Off Benchmarks & Category Qualifying Criteria',
      badge: 'Cut Off',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Cut-off scores are determined based on vacancies, question paper difficulty, and category competition. Official cut-offs will be released along with the result.</p>
        </div>
      `
    },
    {
      id: 48,
      title: '48. Merit List Preparation & Normalization Principles',
      badge: 'Merit List',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The state-wide merit list will be prepared based strictly on the combined aggregate score (Written Exam 360 + Interview 40 = 400 Marks Total).</p>
        </div>
      `
    },
    {
      id: 49,
      title: '49. Interview Stage Guidelines (40 Marks Evaluation)',
      badge: 'Interview',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>As per Section 14 of Advt 06/2026, shortlisted candidates will be notified at least 10 days in advance via SMS, email, and website. Candidates must download their Interview Letter and report to the UPESSC office, 23 Allengunj, Prayagraj.</p>
        </div>
      `
    },
    {
      id: 50,
      title: '50. Statutory Tie-Breaking Rules & Seniority Hierarchy',
      badge: 'Tie Breaking',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 9(क) bullet 2 of Advt 06/2026, if two or more candidates obtain equal aggregate merit marks, tie-breaking follows this strict sequence:</p>
          <ol class="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>1st Criterion:</strong> Marks scored in the Written Examination (लिखित परीक्षा के अंक).</li>
            <li><strong>2nd Criterion:</strong> Marks scored in the Interview (साक्षात्कार में प्राप्त अंक).</li>
            <li><strong>3rd Criterion:</strong> Maximum percentage in Postgraduate Degree (स्नातकोत्तर का अधिकतम प्रतिशत).</li>
            <li><strong>4th Criterion:</strong> Percentage in Training Qualification / B.Ed. (प्रशिक्षण अर्हता का प्रतिशत).</li>
            <li><strong>5th Criterion:</strong> Age Seniority: Candidate older in age (अधिक आयु) will be placed higher in the merit list.</li>
          </ol>
        </div>
      `
    },
    {
      id: 51,
      title: '51. Final Selection & Recommendation by UPESSC',
      badge: 'Final Selection',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>The final recommendation of selected candidates will be submitted by UPESSC to the Director of Secondary Education, UP, Prayagraj for school allotment and appointment orders.</p>
        </div>
      `
    },
    {
      id: 52,
      title: '52. Document Verification (DV) & Mandatory Checkpoints',
      badge: 'DV Checkpoints',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Candidates must present all original documents along with <strong>two self-attested sets</strong> and an Affidavit (शपथ-पत्र) on Appendix 6 format at the time of interview. Failure to produce originals will result in immediate disqualification.</p>
        </div>
      `
    },
    {
      id: 53,
      title: '53. School / Institution Allotment Authority (Directorate)',
      badge: 'Allotment',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 13 (अधिमानता), candidate school preferences and final institutional allotment will be conducted by the Authorized Officer (Director, Secondary Education, UP, Prayagraj).</p>
        </div>
      `
    },
    {
      id: 54,
      title: '54. Disciplinary Rules & Malpractice Penalties',
      badge: 'Discipline',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 10.4, cheating, impersonation, or misbehaviour in the examination hall will result in cancellation of candidature and debarment from all future UPESSC recruitments, alongside criminal prosecution under UP Public Examinations Act.</p>
        </div>
      `
    },
    {
      id: 55,
      title: '55. Official Helpdesk & Technical Contact Numbers',
      badge: 'Helpdesk',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Under Section 12.12 of Advt 06/2026, UPESSC has established dedicated candidate helpdesks:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Support Type</th>
                  <th class="p-2.5">Helpline Phone Number</th>
                  <th class="p-2.5">Working Hours & Email</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td class="p-2 font-semibold">Technical Support (Application Issue)</td>
                  <td class="p-2 font-mono">08448573939</td>
                  <td class="p-2">09:30 AM – 06:00 PM (Mon–Sat) | Support@upessc.org</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Bank Payment (ICICI Bank)</td>
                  <td class="p-2 font-mono">8879370946, 8657723283</td>
                  <td class="p-2">09:30 AM – 06:30 PM (Working Days)</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Bank Payment (Union Bank)</td>
                  <td class="p-2 font-mono">9137551970</td>
                  <td class="p-2">09:30 AM – 06:30 PM | pgsupport@billdesk.com</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">UPESSC Commission Support</td>
                  <td class="p-2 font-mono">0532-2466851</td>
                  <td class="p-2">10:00 AM – 05:00 PM (Mon–Sat) | upesscprayagraj@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 56,
      title: '56. Frequently Asked Questions (Official FAQs)',
      badge: 'FAQs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Refer to the FAQ schema and dedicated interactive answers provided in the FAQ section of this guide.</p>
        </div>
      `
    },
    {
      id: 57,
      title: '57. Official Website & Direct Action Links',
      badge: 'Links',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Always access authentic recruitment information directly from verified UPESSC official web gateways:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Official Portal:</strong> <a href="https://upessc.up.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://upessc.up.gov.in/</a></li>
            <li><strong>Syllabus & Exam Pattern:</strong> <a href="https://www.upessc.up.gov.in/Home/Syllabus_all" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://www.upessc.up.gov.in/Home/Syllabus_all</a></li>
          </ul>
        </div>
      `
    },
    {
      id: 58,
      title: '58. Related UPESSC & State Teaching Opportunities',
      badge: 'Related Jobs',
      content: `
        <div class="space-y-3 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <p>Explore other active and upcoming teaching recruitments conducted by UPESSC and other state education commissions:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>UPESSC PRT Assistant Teacher Recruitment 2026:</strong> 12,405 Primary Teacher vacancies.</li>
            <li><strong>UP TGT Teacher Recruitment 2026:</strong> Trained Graduate Teacher vacancies across UP secondary schools.</li>
            <li><strong>UP Special TET 2026:</strong> Special Teacher Eligibility Test online form.</li>
          </ul>
        </div>
      `
    }
  ];
}
