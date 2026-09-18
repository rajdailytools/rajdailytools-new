import { ExamRecord, ExamInfoSection } from '../types/exam';

export interface DistrictVacancyItem {
  sn: number;
  district: string;
  total: number;
  ur: number;
  ews: number;
  obc: number;
  sc: number;
  st: number;
  handicap: number;
  vi: number;
  li: number;
  hi: number;
  thalassemia: number;
  meritPwD: number;
  freedomFighter: number;
  exArmy: number;
}

export const UPESSC_DISTRICT_VACANCIES: DistrictVacancyItem[] = [
  { sn: 1, district: 'AGRA', total: 315, ur: 127, ews: 31, obc: 85, sc: 66, st: 6, handicap: 12, vi: 3, li: 3, hi: 3, thalassemia: 3, meritPwD: 0, freedomFighter: 6, exArmy: 15 },
  { sn: 2, district: 'ALIGARH', total: 492, ur: 199, ews: 49, obc: 132, sc: 103, st: 9, handicap: 19, vi: 4, li: 4, hi: 4, thalassemia: 4, meritPwD: 3, freedomFighter: 9, exArmy: 24 },
  { sn: 3, district: 'AMBEDKAR NAGAR', total: 29, ur: 14, ews: 2, obc: 7, sc: 6, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 1 },
  { sn: 4, district: 'AMETHI (C.S.M. NAGAR)', total: 28, ur: 14, ews: 2, obc: 7, sc: 5, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 1 },
  { sn: 5, district: 'AMROHA', total: 230, ur: 93, ews: 23, obc: 62, sc: 48, st: 4, handicap: 9, vi: 2, li: 2, hi: 2, thalassemia: 2, meritPwD: 1, freedomFighter: 4, exArmy: 11 },
  { sn: 6, district: 'AURRAIYA', total: 39, ur: 18, ews: 3, obc: 10, sc: 8, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 1 },
  { sn: 7, district: 'AYODHYA (FAIZABAD)', total: 52, ur: 22, ews: 5, obc: 14, sc: 10, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 2 },
  { sn: 8, district: 'AZAMGARH', total: 122, ur: 51, ews: 12, obc: 32, sc: 25, st: 2, handicap: 4, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 0, freedomFighter: 2, exArmy: 6 },
  { sn: 9, district: 'BADAUN', total: 196, ur: 81, ews: 19, obc: 52, sc: 41, st: 3, handicap: 7, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 3, freedomFighter: 3, exArmy: 9 },
  { sn: 10, district: 'BAGHPAT', total: 35, ur: 16, ews: 3, obc: 9, sc: 7, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 1 },
  { sn: 11, district: 'BAHRAICH', total: 140, ur: 58, ews: 14, obc: 37, sc: 29, st: 2, handicap: 5, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 1, freedomFighter: 2, exArmy: 7 },
  { sn: 12, district: 'BALLIA', total: 121, ur: 50, ews: 12, obc: 32, sc: 25, st: 2, handicap: 4, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 0, freedomFighter: 2, exArmy: 6 },
  { sn: 13, district: 'BALRAMPUR', total: 52, ur: 22, ews: 5, obc: 14, sc: 10, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 2 },
  { sn: 14, district: 'BANDA', total: 52, ur: 22, ews: 5, obc: 14, sc: 10, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 2 },
  { sn: 15, district: 'BARABANKI', total: 44, ur: 20, ews: 4, obc: 11, sc: 9, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 2 },
  { sn: 16, district: 'BAREILLY', total: 888, ur: 358, ews: 88, obc: 239, sc: 186, st: 17, handicap: 35, vi: 8, li: 8, hi: 8, thalassemia: 8, meritPwD: 3, freedomFighter: 17, exArmy: 44 },
  { sn: 17, district: 'BASTI', total: 131, ur: 54, ews: 13, obc: 35, sc: 27, st: 2, handicap: 5, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 1, freedomFighter: 2, exArmy: 6 },
  { sn: 18, district: 'BIJNOR', total: 59, ur: 26, ews: 5, obc: 15, sc: 12, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 2 },
  { sn: 19, district: 'BULAND SHAHAR', total: 245, ur: 100, ews: 24, obc: 66, sc: 51, st: 4, handicap: 9, vi: 2, li: 2, hi: 2, thalassemia: 2, meritPwD: 1, freedomFighter: 4, exArmy: 12 },
  { sn: 20, district: 'CHANDAULI', total: 15, ur: 7, ews: 1, obc: 4, sc: 3, st: 0, handicap: 0, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 0, freedomFighter: 0, exArmy: 0 },
  { sn: 21, district: 'CHITRAKUT', total: 3, ur: 3, ews: 0, obc: 0, sc: 0, st: 0, handicap: 0, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 0, freedomFighter: 0, exArmy: 0 },
  { sn: 22, district: 'DEORIA', total: 131, ur: 54, ews: 13, obc: 35, sc: 27, st: 2, handicap: 5, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 1, freedomFighter: 2, exArmy: 6 },
  { sn: 23, district: 'ETAH', total: 151, ur: 62, ews: 15, obc: 40, sc: 31, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 7 },
  { sn: 24, district: 'ETAWAH', total: 125, ur: 52, ews: 12, obc: 33, sc: 26, st: 2, handicap: 5, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 1, freedomFighter: 2, exArmy: 6 },
  { sn: 25, district: 'FATEHGARH (FARRUKHABAD)', total: 315, ur: 127, ews: 31, obc: 85, sc: 66, st: 6, handicap: 12, vi: 3, li: 3, hi: 3, thalassemia: 3, meritPwD: 0, freedomFighter: 6, exArmy: 15 },
  { sn: 26, district: 'FATEHPUR', total: 95, ur: 41, ews: 9, obc: 25, sc: 19, st: 1, handicap: 3, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 3, freedomFighter: 1, exArmy: 4 },
  { sn: 27, district: 'FIROZABAD', total: 245, ur: 100, ews: 24, obc: 66, sc: 51, st: 4, handicap: 9, vi: 2, li: 2, hi: 2, thalassemia: 2, meritPwD: 1, freedomFighter: 4, exArmy: 12 },
  { sn: 28, district: 'GAUTAM BUDDH NAGAR', total: 6, ur: 4, ews: 0, obc: 1, sc: 1, st: 0, handicap: 0, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 0, freedomFighter: 0, exArmy: 0 },
  { sn: 29, district: 'GHAZIABAD', total: 405, ur: 163, ews: 40, obc: 109, sc: 85, st: 8, handicap: 16, vi: 4, li: 4, hi: 4, thalassemia: 4, meritPwD: 0, freedomFighter: 8, exArmy: 20 },
  { sn: 30, district: 'GHAZIPUR', total: 54, ur: 23, ews: 5, obc: 14, sc: 11, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 2 },
  { sn: 31, district: 'GONDA', total: 66, ur: 29, ews: 6, obc: 17, sc: 13, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 3 },
  { sn: 32, district: 'GORAKHPUR', total: 166, ur: 69, ews: 16, obc: 44, sc: 34, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 8 },
  { sn: 33, district: 'HAMIRPUR', total: 105, ur: 43, ews: 10, obc: 28, sc: 22, st: 2, handicap: 4, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 0, freedomFighter: 2, exArmy: 5 },
  { sn: 34, district: 'HAPUR (PANCHSHEEL NAGAR)', total: 108, ur: 45, ews: 10, obc: 29, sc: 22, st: 2, handicap: 4, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 0, freedomFighter: 2, exArmy: 5 },
  { sn: 35, district: 'HARDOI', total: 166, ur: 69, ews: 16, obc: 44, sc: 34, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 8 },
  { sn: 36, district: 'HATHRAS', total: 113, ur: 47, ews: 11, obc: 30, sc: 23, st: 2, handicap: 4, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 0, freedomFighter: 2, exArmy: 5 },
  { sn: 37, district: 'JALAUN', total: 232, ur: 95, ews: 23, obc: 62, sc: 48, st: 4, handicap: 9, vi: 2, li: 2, hi: 2, thalassemia: 2, meritPwD: 1, freedomFighter: 4, exArmy: 11 },
  { sn: 38, district: 'JAUNPUR', total: 151, ur: 62, ews: 15, obc: 40, sc: 31, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 7 },
  { sn: 39, district: 'JHANSI', total: 30, ur: 13, ews: 3, obc: 8, sc: 6, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 1 },
  { sn: 40, district: 'KANNAUJ', total: 48, ur: 22, ews: 4, obc: 12, sc: 10, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 2 },
  { sn: 41, district: 'KANPUR DEHAT', total: 12, ur: 6, ews: 1, obc: 3, sc: 2, st: 0, handicap: 0, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 0, freedomFighter: 0, exArmy: 0 },
  { sn: 42, district: 'KANPUR NAGAR', total: 758, ur: 305, ews: 75, obc: 204, sc: 159, st: 15, handicap: 30, vi: 7, li: 7, hi: 7, thalassemia: 7, meritPwD: 2, freedomFighter: 15, exArmy: 37 },
  { sn: 43, district: 'KASGANJ (KANSHIRAM NAGAR)', total: 128, ur: 54, ews: 12, obc: 34, sc: 26, st: 2, handicap: 5, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 1, freedomFighter: 2, exArmy: 6 },
  { sn: 44, district: 'KAUSHAMBI', total: 75, ur: 32, ews: 7, obc: 20, sc: 15, st: 1, handicap: 3, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 3, freedomFighter: 1, exArmy: 3 },
  { sn: 45, district: 'KUSHINAGAR', total: 8, ur: 5, ews: 0, obc: 2, sc: 1, st: 0, handicap: 0, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 0, freedomFighter: 0, exArmy: 0 },
  { sn: 46, district: 'LAKHIMPUR KHIRI', total: 154, ur: 63, ews: 15, obc: 41, sc: 32, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 7 },
  { sn: 47, district: 'LALITPUR', total: 68, ur: 29, ews: 6, obc: 18, sc: 14, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 3 },
  { sn: 48, district: 'LUCKNOW', total: 444, ur: 180, ews: 44, obc: 119, sc: 93, st: 8, handicap: 17, vi: 4, li: 4, hi: 4, thalassemia: 4, meritPwD: 1, freedomFighter: 8, exArmy: 22 },
  { sn: 49, district: 'MAHARAJGANJ', total: 19, ur: 10, ews: 1, obc: 5, sc: 3, st: 0, handicap: 0, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 0, freedomFighter: 0, exArmy: 0 },
  { sn: 50, district: 'MAHOBA', total: 56, ur: 24, ews: 5, obc: 15, sc: 11, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 2 },
  { sn: 51, district: 'MAINPURI', total: 64, ur: 27, ews: 6, obc: 17, sc: 13, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 3 },
  { sn: 52, district: 'MATHURA', total: 255, ur: 104, ews: 25, obc: 68, sc: 53, st: 5, handicap: 10, vi: 2, li: 2, hi: 2, thalassemia: 2, meritPwD: 2, freedomFighter: 5, exArmy: 12 },
  { sn: 53, district: 'MAU', total: 54, ur: 23, ews: 5, obc: 14, sc: 11, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 2 },
  { sn: 54, district: 'MEERUT', total: 635, ur: 256, ews: 63, obc: 171, sc: 133, st: 12, handicap: 25, vi: 6, li: 6, hi: 6, thalassemia: 6, meritPwD: 1, freedomFighter: 12, exArmy: 31 },
  { sn: 55, district: 'MIRZAPUR', total: 168, ur: 69, ews: 16, obc: 45, sc: 35, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 8 },
  { sn: 56, district: 'MORADABAD', total: 127, ur: 53, ews: 12, obc: 34, sc: 26, st: 2, handicap: 5, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 1, freedomFighter: 2, exArmy: 6 },
  { sn: 57, district: 'MUZAFFAR NAGAR', total: 186, ur: 76, ews: 18, obc: 50, sc: 39, st: 3, handicap: 7, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 3, freedomFighter: 3, exArmy: 9 },
  { sn: 58, district: 'PILIBHIT', total: 166, ur: 69, ews: 16, obc: 44, sc: 34, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 8 },
  { sn: 59, district: 'PRATAPGARH', total: 107, ur: 45, ews: 10, obc: 28, sc: 22, st: 2, handicap: 4, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 0, freedomFighter: 2, exArmy: 5 },
  { sn: 60, district: 'PRAYAGRAJ', total: 32, ur: 15, ews: 3, obc: 8, sc: 6, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 1 },
  { sn: 61, district: 'RAEBARELI', total: 91, ur: 38, ews: 9, obc: 24, sc: 19, st: 1, handicap: 3, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 3, freedomFighter: 1, exArmy: 4 },
  { sn: 62, district: 'RAMPUR', total: 129, ur: 54, ews: 12, obc: 34, sc: 27, st: 2, handicap: 5, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 1, freedomFighter: 2, exArmy: 6 },
  { sn: 63, district: 'SAHARANPUR', total: 448, ur: 182, ews: 44, obc: 120, sc: 94, st: 8, handicap: 17, vi: 4, li: 4, hi: 4, thalassemia: 4, meritPwD: 1, freedomFighter: 8, exArmy: 22 },
  { sn: 64, district: 'SAMBHAL (BHEEM NAGAR)', total: 66, ur: 29, ews: 6, obc: 17, sc: 13, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 3 },
  { sn: 65, district: 'SANT KABIR NAGAR', total: 62, ur: 27, ews: 6, obc: 16, sc: 12, st: 1, handicap: 2, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 2, freedomFighter: 1, exArmy: 3 },
  { sn: 66, district: 'SANT RAVIDAS NAGAR', total: 79, ur: 34, ews: 7, obc: 21, sc: 16, st: 1, handicap: 3, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 3, freedomFighter: 1, exArmy: 3 },
  { sn: 67, district: 'SHAHJAHANPUR', total: 123, ur: 51, ews: 12, obc: 33, sc: 25, st: 2, handicap: 4, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 0, freedomFighter: 2, exArmy: 6 },
  { sn: 68, district: 'SHAMLI (PRABUDHHA NAGAR)', total: 161, ur: 66, ews: 16, obc: 43, sc: 33, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 8 },
  { sn: 69, district: 'SHRAVASTI', total: 2, ur: 2, ews: 0, obc: 0, sc: 0, st: 0, handicap: 0, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 0, freedomFighter: 0, exArmy: 0 },
  { sn: 70, district: 'SIDHARTH NAGAR', total: 152, ur: 62, ews: 15, obc: 41, sc: 31, st: 3, handicap: 6, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 2, freedomFighter: 3, exArmy: 7 },
  { sn: 71, district: 'SITAPUR', total: 111, ur: 46, ews: 11, obc: 29, sc: 23, st: 2, handicap: 4, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 0, freedomFighter: 2, exArmy: 5 },
  { sn: 72, district: 'SONBHADRA', total: 20, ur: 9, ews: 2, obc: 5, sc: 4, st: 0, handicap: 0, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 0, freedomFighter: 0, exArmy: 1 },
  { sn: 73, district: 'SULTANPUR', total: 42, ur: 19, ews: 4, obc: 11, sc: 8, st: 0, handicap: 1, vi: 0, li: 0, hi: 0, thalassemia: 0, meritPwD: 1, freedomFighter: 0, exArmy: 2 },
  { sn: 74, district: 'UNNAO', total: 128, ur: 54, ews: 12, obc: 34, sc: 26, st: 2, handicap: 5, vi: 1, li: 1, hi: 1, thalassemia: 1, meritPwD: 1, freedomFighter: 2, exArmy: 6 },
  { sn: 75, district: 'VARANASI', total: 378, ur: 153, ews: 37, obc: 102, sc: 79, st: 7, handicap: 15, vi: 3, li: 3, hi: 3, thalassemia: 3, meritPwD: 3, freedomFighter: 7, exArmy: 18 }
];

export const UPESSC_PRT_TEACHER_2026_EXAM: ExamRecord = {
  id: 'upessc-prt-assistant-teacher-2026',
  slug: 'upessc-prt-assistant-teacher-recruitment-2026',
  examName: 'UPESSC PRT Assistant Teacher Recruitment 2026',
  shortName: 'UPESSC PRT Teacher',
  organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj',
  category: 'Teaching',
  postName: 'Assistant Teacher Primary Urban & Attached Primary (सहायक अध्यापक प्राथमिक एवं सम्बद्ध प्राइमरी)',
  totalVacancy: '12,405',
  logoIcon: '📚',
  logoBg: '#fef3c7',
  status: 'APPLICATION_OPEN',
  state: 'Uttar Pradesh',
  gender: 'All',
  ageMin: 21,
  ageMax: 40,
  ageRelaxationInfo: 'Urban Primary: 21 to 40 Years (Relaxations: UP SC/ST/OBC: 5 Years | UP Divyangjan PwD: 15 Years | Ex-Servicemen: Army Service + 3 Years | Shiksha Mitra: Up to 60 Years) | Attached Primary (Aided): Minimum 21 Years, Retirement age: 62 Years.',
  categoryEligibility: {
    'General / Unreserved (Urban Primary)': '21 to 40 years as on 01.07.2026',
    'SC / ST / OBC (Uttar Pradesh Domicile)': '21 to 45 years (5 years upper age relaxation)',
    'Divyangjan / PwD (Uttar Pradesh Domicile)': '21 to 55 years (15 years upper age relaxation)',
    'Ex-Servicemen': 'Army Service tenure + 3 years relaxation above age limit',
    'Shiksha Mitra (Urban Primary)': 'Upper age limit up to 60 years',
    'Attached Primary (Boys & Girls Schools)': 'Minimum 21 years, Upper limit up to retirement age (62 years)'
  },
  education: ['Graduation', 'Diploma', 'Other'],
  minimumQualificationLevel: 'Graduation Degree from recognized University + Teacher Training (BTC / D.El.Ed. / B.El.Ed. / Special Education Diploma) + TET (Classes 1-5) passed',
  acceptedQualificationLevels: [
    'Graduation Degree from a University established by law in India or recognized equivalent',
    'Teacher Training Qualification: Basic Teacher Certificate (BTC) / 2-Year BTC Urdu / Special BTC / 2-Year Diploma in Special Education approved by RCI / 4-Year B.El.Ed. / 2-Year D.El.Ed. under NCTE Regulations 2002',
    'Official Note: BTC course is currently conducted under the D.El.Ed. denomination',
    'Teacher Eligibility Test (TET) for Classes 1–5 conducted by Government of Uttar Pradesh (UPTET Paper-I) or Government of India (CTET Paper-I)'
  ],
  applicationStartDate: '2026-09-16',
  applicationLastDate: '2026-10-15',
  cityIntimationDate: undefined, // "Not Released / To Be Updated"
  cityIntimationStatus: 'Not Released',
  admitCardDate: undefined, // "Not Released / To Be Updated"
  examDate: '2026-12-03', // 03 & 04 December 2026
  answerKeyDate: undefined, // "Not Released / To Be Updated"
  resultDate: undefined, // "Not Released / To Be Updated"
  cutOffDate: undefined,
  applyLink: 'https://apply.upessc.org/',
  officialWebsite: 'https://upessc.up.gov.in/',
  officialNotification: 'https://www.upessc.up.gov.in/Notice/a429-726e-4862-f3dc-8a6f.pdf',
  salary: {
    payScale: 'Pay Level-6 (₹35,400 – ₹1,12,400)',
    inHand: '₹45,000 – ₹55,000 Approx. monthly in-hand depending on city/HRA classification',
    allowances: 'Dearness Allowance (DA), House Rent Allowance (HRA), City Compensatory Allowance (CCA), Medical Facility, Contributory Pension Scheme'
  },
  importantDates: [
    { label: 'Official Detailed Notification Released (Advt 05/2026)', date: '15 September 2026' },
    { label: 'Online OTR Registration & Application Form Start Date', date: '16 September 2026', isHighlight: true },
    { label: 'Online Application Fee Payment Last Date', date: '15 October 2026', isHighlight: true },
    { label: 'Online Application Correction Window Last Date', date: '19 October 2026' },
    { label: 'Written Examination Date (OMR Based)', date: '03 & 04 December 2026', isHighlight: true },
    { label: 'Exam Centre District Information Release', date: 'Not Released / To Be Updated (10 Days Before Exam)' },
    { label: 'Admit Card Download Link Active', date: 'Not Released / To Be Updated (3 Days Before Exam)' },
    { label: 'Official Provisional Answer Key Release', date: 'Not Released / To Be Updated' },
    { label: 'Online Objection Submission Window', date: 'Not Released / To Be Updated' },
    { label: 'Written Examination Result & Normalized Score', date: 'Not Released / To Be Updated' },
    { label: 'Document Verification (DV) / Record Verification Schedule', date: 'Not Released / To Be Updated' }
  ],
  applicationFee: [
    { category: 'General / Unreserved / OBC / EWS / Other States', amount: '₹1,000.00' },
    { category: 'SC / ST (Uttar Pradesh Domicile)', amount: '₹500.00' },
    { category: 'Divyangjan / PwD (Uttar Pradesh Domicile)', amount: '₹300.00' }
  ],
  selectionProcess: [
    'Stage 1: OTR & Online Application Form Submission with School Preference Choice',
    'Stage 2: Eligibility Verification & Scrutiny of Qualifications',
    'Stage 3: Written Examination (120 MCQs, 360 Marks, 2 Hours, OMR Based)',
    'Stage 4: Score Normalization (Applicable if conducted in multiple shifts as per UP GO 19 June 2024)',
    'Stage 5: State-wide Merit List Preparation (Based purely on Written Examination marks, with statutory tie-breaking rules)',
    'Stage 6: Document Verification (DV) & Original Record Verification (2 sets self-attested documents + Affidavit in Appendix 6)',
    'Stage 7: Medical Examination & Final Appointment by Secretary Basic Shiksha Parishad / Director Secondary Education'
  ],
  examPattern: [
    {
      tier: 'Written Examination (Objective OMR)',
      mode: 'Offline Pen & Paper (Black Ballpoint Pen only)',
      duration: '2 Hours (120 Minutes)',
      negativeMarking: '+3 Marks for Correct Answer | -1 Mark Deduction for Wrong/Multiple Answer',
      subjects: [
        { name: 'Language (Hindi, English, Sanskrit) - Grammar, Comprehension & Literature', questions: 25, marks: 75 },
        { name: 'Mathematics - Numerical Ability, Arithmetic, Algebra, Geometry & Mensuration', questions: 20, marks: 60 },
        { name: 'Science - Everyday Science, Living Organisms, Human Body, Physics & Chemistry basics', questions: 10, marks: 30 },
        { name: 'Environment & Social Studies - Geography, Freedom Movement, Constitution & Civics', questions: 15, marks: 45 },
        { name: 'Teaching Methodology (शिक्षण पद्धति) & Learning Principles', questions: 12, marks: 36 },
        { name: 'Child Psychology & Pedagogy (बाल मनोविज्ञान) & Inclusive Education', questions: 12, marks: 36 },
        { name: 'Life Skill, Management & Professional Aptitude (जीवन कौशल एवं प्रबंधन)', questions: 10, marks: 30 },
        { name: 'General Knowledge & Current Affairs (राष्ट्रीय एवं अंतर्राष्ट्रीय समसामयिकी व उप्र विशेष)', questions: 10, marks: 30 },
        { name: 'Logical Knowledge & Reasoning Ability (तार्किक क्षमता)', questions: 3, marks: 9 },
        { name: 'Information Technology & Educational Digital Tools (सूचना तकनीकी)', questions: 3, marks: 9 }
      ]
    }
  ],
  vacancies: [
    { category: 'Assistant Teacher Primary Urban - Basic Education Department', postCount: 11508 },
    { category: 'Assistant Teacher Attached Primary - Boys Schools (Aided)', postCount: 473 },
    { category: 'Assistant Teacher Attached Primary - Girls Schools (Aided)', postCount: 424 }
  ],
  faq: [
    {
      q: 'What is the total number of vacancies announced in UPESSC Advt 05/2026?',
      a: 'A total of 12,405 vacancies have been officially announced: 11,508 posts for Assistant Teacher Primary Urban under Basic Education Department, and 897 posts for Assistant Teacher Attached Primary (473 in Boys Schools, 424 in Girls Schools) under Secondary Education Department.'
    },
    {
      q: 'What are the start and closing dates for UPESSC PRT Teacher online applications?',
      a: 'Online OTR registration and application forms started on 16 September 2026. The last date to submit the application fee is 15 October 2026, and the application correction window closes on 19 October 2026.'
    },
    {
      q: 'What is the examination date for UPESSC PRT Teacher Recruitment 2026?',
      a: 'As per official Advertisement 05/2026, the written examination will be held on 03 and 04 December 2026.'
    },
    {
      q: 'What is the official application fee structure?',
      a: 'For General, Unreserved, OBC, and EWS candidates, the fee is ₹1,000. For SC and ST candidates of UP, the fee is ₹500. For Divyangjan (PwD) candidates of UP, the fee is ₹300. Payment is accepted online via Debit/Credit Card and Net Banking.'
    },
    {
      q: 'Is One Time Registration (OTR) mandatory for UPESSC Teacher Application?',
      a: 'Yes, OTR is 100% mandatory. Candidates must complete One Time Registration on the UPESSC portal before filling out the online application form.'
    },
    {
      q: 'What is the age limit and crucial date for calculating age?',
      a: 'For Assistant Teacher Primary Urban, the age limit is 21 to 40 years as on 01 July 2026 (relaxations: 5 yrs for UP SC/ST/OBC, 15 yrs for PwD, and up to 60 yrs for Shiksha Mitra). For Attached Primary posts, the minimum age is 21 years and the upper age extends up to the retirement age of 62 years.'
    },
    {
      q: 'What is the exact exam pattern, number of questions, and marking scheme?',
      a: 'The examination consists of 120 objective multiple choice questions for a total of 360 marks, with a duration of 2 hours (120 minutes). Each question carries 4 options. Correct answer awards +3 marks, while wrong or multiple answers deduct -1 mark (negative marking).'
    },
    {
      q: 'Is there any interview or PET in the selection process?',
      a: 'No. Selection is based purely on the merit of the 360 marks written examination, followed by document verification. There is no interview, skill test, or physical test.'
    },
    {
      q: 'What are the statutory tie-breaking rules if two or more candidates score equal marks?',
      a: 'If written marks are equal: 1st priority: candidate with higher Graduation percentage; 2nd priority: candidate with higher Teacher Training qualification percentage; 3rd priority: older candidate in age gets the higher rank.'
    },
    {
      q: 'Can candidates choose between Urban Primary and Attached Primary posts?',
      a: 'Yes. Candidates must fill their preference choice between the two school types at the time of online application. No changes in preference will be permitted after the last date.'
    }
  ]
};

import { generateUpesscPrt50Sections } from "./upesscPrt50SectionsData";
export { generateUpesscPrt50Sections };

UPESSC_PRT_TEACHER_2026_EXAM.allInformation = generateUpesscPrt50Sections();
