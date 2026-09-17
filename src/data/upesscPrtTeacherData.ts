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

export function generateUpesscPrt50Sections(): ExamInfoSection[] {
  return [
    {
      id: 1,
      title: 'Section 01: Official Recruitment Overview & Commission Authority',
      content:
        'The Uttar Pradesh Education Service Selection Commission (UPESSC), located at 23 Allengunj, Prayagraj – 211002, has released Advertisement No. 05/2026 for the Assistant Teacher Selection Examination 2026 (सहायक अध्यापक चयन परीक्षा, 2026). This historic recruitment drive invites online applications from eligible Indian citizens for a grand total of 12,405 vacancies across two distinct cadres: Assistant Teacher Primary Urban under Basic Education Department (11,508 posts) and Assistant Teacher Attached Primary in Non-Government Aided Institutions under Secondary Education Department (897 posts).'
    },
    {
      id: 2,
      title: 'Section 02: Latest Official Updates & Notification Release Summary',
      content:
        'The official advertisement was formally published on 15 September 2026 on the UPESSC portal www.upessc.up.gov.in. The online OTR-based application gateway at https://apply.upessc.org/ commenced operations on 16 September 2026. The examination is scheduled to be conducted on 03 and 04 December 2026 across district headquarters in Uttar Pradesh.'
    },
    {
      id: 3,
      title: 'Section 03: Comprehensive Important Dates & Timeline Directory',
      content:
        'Key official recruitment milestones: Notification Date: 15-09-2026 | OTR Registration & Online Application Start: 16-09-2026 | Online Application Fee Payment Last Date: 15-10-2026 | Online Application Correction Last Date: 19-10-2026 | Written Examination Date: 03 & 04 December 2026 | Exam Centre District Intimation: 10 days before exam date | Admit Card Download Link: 3 days before exam date | Answer Key & Result: Not Released / To Be Updated.'
    },
    {
      id: 4,
      title: 'Section 04: Total Vacancy Overview & Cadre-wise Allocation',
      content:
        'Total Notified Vacancies: 12,405 Posts. Cadre 1: Assistant Teacher Primary, Urban (बेसिक शिक्षा विभाग) – 11,508 Posts (Table 01). Cadre 2: Assistant Teacher Attached Primary (अशासकीय सहायता प्राप्त विद्यालय, माध्यमिक शिक्षा विभाग) – 897 Posts (Table 02), comprising 473 posts in Boys Schools and 424 posts in Girls Schools. Vacancy count is subject to revision as per departmental requisitions.'
    },
    {
      id: 5,
      title: 'Section 05: Urban Primary Teacher Vacancies – Basic Education Department (11,508 Posts)',
      content:
        'Under Table 01 of the notification, the 11,508 posts of Assistant Teacher Primary Urban are distributed vertically as: Unreserved (UR): 4,746 posts | Economically Weaker Sections (EWS): 1,116 posts | Other Backward Classes (OBC): 3,069 posts | Scheduled Castes (SC): 2,379 posts | Scheduled Tribes (ST): 198 posts.'
    },
    {
      id: 6,
      title: 'Section 06: Comprehensive 75 District-wise Vacancy Distribution (Table 01 Details)',
      content:
        'All 75 districts of Uttar Pradesh have specific urban primary vacancies allotted in Table 01. Highest vacancy districts include Bareilly (888 posts), Kanpur Nagar (758 posts), Meerut (635 posts), Aligarh (492 posts), Saharanpur (448 posts), Lucknow (444 posts), Ghaziabad (405 posts), Varanasi (378 posts), Agra (315 posts), and Fatehgarh (315 posts). See the detailed district-wise data table on this page.'
    },
    {
      id: 7,
      title: 'Section 07: Attached Primary Teacher Vacancies – Aided Institutions (897 Posts)',
      content:
        'Under Table 02, Assistant Teacher Attached Primary posts are sanctioned in Government-aided private secondary schools across Uttar Pradesh. These posts total 897, divided into Boys Schools (बालक विद्यालय: 473 posts) and Girls Schools (बालिका विद्यालय: 424 posts).'
    },
    {
      id: 8,
      title: 'Section 08: Boys School Vacancy Distribution (473 Posts – Table 02)',
      content:
        'In Boys Schools (अशासकीय सहायता प्राप्त बालक विद्यालय): General (UR): 196 posts | Scheduled Castes (SC): 189 posts | Scheduled Tribes (ST): 0 posts | Other Backward Classes (OBC): 84 posts | Economically Weaker Sections (EWS): 4 posts. Total Boys School Vacancies: 473 Posts.'
    },
    {
      id: 9,
      title: 'Section 09: Girls School Vacancy Distribution (424 Posts – Table 02)',
      content:
        'In Girls Schools (अशासकीय सहायता प्राप्त बालिका विद्यालय): General (UR): 182 posts | Scheduled Castes (SC): 159 posts | Scheduled Tribes (ST): 0 posts | Other Backward Classes (OBC): 80 posts | Economically Weaker Sections (EWS): 3 posts. Total Girls School Vacancies: 424 Posts.'
    },
    {
      id: 10,
      title: 'Section 10: Category-wise Combined Vacancy Breakup & Aggregates',
      content:
        'Combined totals for Attached Primary (897 posts): General (UR): 378 | SC: 348 | ST: 0 | OBC: 164 | EWS: 7. Grand total across both cadres (12,405 posts): General/UR: 5,124 | EWS: 1,123 | OBC: 3,233 | SC: 2,727 | ST: 198.'
    },
    {
      id: 11,
      title: 'Section 11: Vertical Reservation Provisions & UP Domicile Rules',
      content:
        'Vertical reservations are applicable strictly to candidates holding a permanent domicile of Uttar Pradesh. Female candidates claiming reserved category status must submit a caste certificate issued from their father’s side. Domiciled candidates of other states are treated as General / Unreserved.'
    },
    {
      id: 12,
      title: 'Section 12: Horizontal Reservation (PwD, Ex-Servicemen & Freedom Fighters)',
      content:
        'For Urban Primary (11,508 posts), horizontal reservations are: Persons with Disabilities (Divyangjan): 429 posts (VI: 83, LI: 83, HI: 83, Thalassemia: 83, and 97 as per subcategory merit) | Dependents of Freedom Fighters: 198 posts | Ex-Servicemen (HkwriwoZ lSfud): 540 posts. For Attached Primary, horizontal reservations apply as per governing state rules.'
    },
    {
      id: 13,
      title: 'Section 13: Eligibility Framework Overview – Cadre-wise Bifurcation',
      content:
        'The notification prescribes separate and distinct statutory eligibility requirements for Assistant Teacher Primary Urban (Basic Education Department) and Assistant Teacher Attached Primary (Secondary Education Department). Candidates must fulfill all criteria before the application deadline (15 October 2026).'
    },
    {
      id: 14,
      title: 'Section 14: Assistant Teacher Primary Urban Eligibility Criteria (Detailed)',
      content:
        'Candidates must hold: (1) Graduation degree from a recognized University established by law in India or recognized equivalent qualification; AND (2) Prescribed Teacher Training qualification: Basic Teacher Certificate (BTC) / 2-Year BTC Urdu / Special BTC / 2-Year Diploma in Special Education approved by Rehabilitation Council of India (RCI) / 4-Year B.El.Ed. / 2-Year Diploma in Elementary Education under NCTE Regulations 2002; AND (3) Teacher Eligibility Test (TET) for Classes 1–5 passed, conducted by UP Government (UPTET Paper-I) or Government of India (CTET Paper-I).'
    },
    {
      id: 15,
      title: 'Section 15: Assistant Teacher Attached Primary Eligibility Criteria (Detailed)',
      content:
        'Candidates must hold: (1) Graduation degree from a University established by law in India or deemed university/institution recognized by the Government; AND (2) Basic Teacher Certificate (BTC) or D.El.Ed. qualification from an NCTE recognized course; AND (3) Teacher Eligibility Test (TET) for Classes 1–5 passed, conducted by the Uttar Pradesh Government or Government of India.'
    },
    {
      id: 16,
      title: 'Section 16: Essential Educational Qualification (Graduation Degree Equivalence)',
      content:
        'A Bachelor’s degree (B.A., B.Sc., B.Com., B.Tech., etc.) from any recognized University established by law in India or equivalent degree recognized by the State/Central Government is mandatory. Final year appearing candidates were required to acquire all necessary qualifications prior to the online application closing date.'
    },
    {
      id: 17,
      title: 'Section 17: Teacher Training Qualifications & Statutory Note on D.El.Ed. / BTC',
      content:
        'Official Note in Notification Clause 7: The Basic Teacher Certificate (BTC) course is currently known and operated under the D.El.Ed. (Diploma in Elementary Education) denomination. Degrees/diplomas obtained from institutions not recognized by NCTE or RCI will not be accepted.'
    },
    {
      id: 18,
      title: 'Section 18: Teacher Eligibility Test (TET) Paper-I (Classes 1–5) Requirement',
      content:
        'Passing TET for Primary Stage (Classes 1 to 5) is mandatory. Both UPTET Paper-I (conducted by Uttar Pradesh Government) and CTET Paper-I (conducted by CBSE on behalf of Government of India) are equally recognized. Candidates must possess the valid certificate/marksheet at the time of document verification.'
    },
    {
      id: 19,
      title: 'Section 19: Age Limits & Crucial Date for Age Calculation',
      content:
        'Crucial calculation date: 01 July 2026. For Assistant Teacher Primary Urban: Minimum 21 years and Maximum 40 years as on 01.07.2026 (Candidates must be born between 02.07.1986 and 01.07.2005). For Attached Primary posts: Minimum 21 years, with the maximum age limit extending up to the retirement age of 62 years.'
    },
    {
      id: 20,
      title: 'Section 20: Official Age Relaxations for Reserved Categories & Shiksha Mitra',
      content:
        'For Urban Primary: Scheduled Castes (SC), Scheduled Tribes (ST), and Other Backward Classes (OBC) of UP receive 5 years relaxation (up to 45 years) | UP Divyangjan candidates receive 15 years relaxation (up to 55 years) | Ex-Servicemen receive period of military service + 3 years | Shiksha Mitra candidates receive upper age relaxation up to 60 years.'
    },
    {
      id: 21,
      title: 'Section 21: Salary Structure, Pay Band & Gross Remuneration',
      content:
        'Both Assistant Teacher Primary Urban and Assistant Teacher Attached Primary posts carry Pay Matrix Level-6 with basic pay ranging from ₹35,400 to ₹1,12,400. In addition to basic pay, employees receive Dearness Allowance (DA at current state rate), House Rent Allowance (HRA depending on Urban/Class of city), and medical/pension benefits. Approximate starting gross emoluments range from ₹52,000 to ₹58,000 per month.'
    },
    {
      id: 22,
      title: 'Section 22: Pay Level-6 Allowance Breakdown & In-Hand Estimates',
      content:
        'Estimated Monthly Salary breakdown: Basic Pay: ₹35,400 | DA (50% approx): ₹17,700 | HRA (Urban/Class X/Y/Z): ₹2,400 to ₹5,400 | Gross Salary: ₹55,500 to ₹58,500 | Deductions (NPS 10%, GIS): ₹5,500 | Net In-Hand Salary: ₹50,000 to ₹53,000 per month.'
    },
    {
      id: 23,
      title: 'Section 23: Application Fee Structure by Category',
      content:
        'As per Clause 4 of the notification: General (UR) / Other Backward Classes (OBC) / Economically Weaker Sections (EWS) / Out-of-State Candidates: ₹1,000.00 | Scheduled Castes (SC) / Scheduled Tribes (ST) of UP: ₹500.00 | Divyangjan (Persons with Benchmark Disabilities): ₹300.00. Fee is strictly non-refundable.'
    },
    {
      id: 24,
      title: 'Section 24: Permissible Online Payment Methods & Receipt Preservation',
      content:
        'Application fees must be deposited through the integrated online payment gateway on the portal using Credit Cards, Debit Cards, or Internet Banking. Candidates must retain the official e-payment transaction receipt. Applications will not be treated as complete until the bank confirmation of fee payment is generated.'
    },
    {
      id: 25,
      title: 'Section 25: Mandatory One Time Registration (OTR) Protocol',
      content:
        'One Time Registration (OTR) is compulsory for all candidates applying under Advt 05/2026. Applicants must complete OTR by entering basic profile, contact information, Aadhaar verification, and educational details. Once an OTR number is generated, candidates proceed to form submission.'
    },
    {
      id: 26,
      title: 'Section 26: Step-by-Step Guide: How to Apply Online at apply.upessc.org',
      content:
        'Step 1: Visit https://apply.upessc.org/ or www.upessc.up.gov.in. Step 2: Register for OTR or log in with existing OTR credentials. Step 3: Select Advertisement No. 05/2026 Assistant Teacher Selection Examination. Step 4: Fill educational qualifications and select school preference (Urban Primary vs Attached Primary). Step 5: Upload photo, signature, and prescribed documents. Step 6: Verify preview details thoroughly. Step 7: Pay the application fee and take 3 printouts.'
    },
    {
      id: 27,
      title: 'Section 27: Online Application Workflow, Correction Window & Multiple Submissions',
      content:
        'Candidates can rectify permitted data errors in the online form until 19 October 2026. However, fundamental identity details (Category, Sub-category, Date of Birth, Gender) cannot be altered once finally submitted. If a candidate submits multiple applications, only the final submitted application will be entertained, and fees deposited for earlier forms will not be refunded.'
    },
    {
      id: 28,
      title: 'Section 28: Prescribed Specifications for Photo & Signature Upload',
      content:
        'Signature Specifications: Must be signed on white paper with black ink, scanned in JPG/JPEG format, file size between 10 KB and 200 KB, resolution 140x110 pixels. Passport Photograph: Recent color photograph, scanned in JPG/JPEG format, file size between 30 KB and 300 KB, pixel resolution between 300 and 600 pixels. Blur or incorrect files lead to rejection.'
    },
    {
      id: 29,
      title: 'Section 29: Required Document Uploads & File Formats (PDF 50–500 KB)',
      content:
        'All supporting certificates and educational records must be scanned and uploaded in clean PDF format with file size between 50 KB and 500 KB. This includes High School Marksheet/Certificate for DOB, Graduation degree/marksheets, Training qualification (BTC/D.El.Ed.), TET scorecard, Caste/EWS/Domicile/PwD certificates.'
    },
    {
      id: 30,
      title: 'Section 30: Scheme of Written Examination – 120 Questions & 360 Marks',
      content:
        'The selection examination comprises a single offline OMR-based written test. Total Questions: 120 Objective Multiple Choice Questions (MCQs). Total Marks: 360 Marks. Duration: 2 Hours (120 Minutes). Each question offers four answer alternatives (A, B, C, D). Question paper is bilingual (English and Hindi).'
    },
    {
      id: 31,
      title: 'Section 31: Detailed Official Syllabus Breakdown (Notification & Syllabus PDF)',
      content:
        'The official syllabus encompasses 10 core subjects: Language (Hindi, English, Sanskrit), Mathematics, Science, Environmental & Social Studies, Teaching Methodology, Child Psychology & Pedagogy, General Knowledge & Current Affairs, Logical Knowledge / Reasoning, Information Technology / Computer, and Life Skill / Management & Aptitude.'
    },
    {
      id: 32,
      title: 'Section 32: Subject-wise Core Topics & Competencies',
      content:
        'Mathematics covers arithmetic, fractions, percentages, geometry, mensuration; Science covers kinematics, energy, human anatomy, matter; Languages cover grammar, reading comprehension, vocabulary; Teaching Methodology & Child Psychology cover stages of child growth, learning principles, RTE Act, inclusive schooling; Life Skills covers professional ethics, constitutional values, and classroom leadership.'
    },
    {
      id: 33,
      title: 'Section 33: Marking Scheme: +3 Marks for Correct Answers',
      content:
        'For each question answered correctly by darkening the corresponding circle on the OMR sheet with a black ballpoint pen, the candidate is awarded three (03) marks. With 120 questions, the maximum attainable score is 360 marks.'
    },
    {
      id: 34,
      title: 'Section 34: Negative Marking Rules: -1 Mark Deduction for Wrong / Multiple Answers',
      content:
        'A negative marking scheme applies: for each incorrect answer or if more than one circle is darkened for a question, one (01) mark will be deducted from the total score. Unattempted questions without any darkening receive zero marks (no deduction).'
    },
    {
      id: 35,
      title: 'Section 35: Official OMR Sheet Instructions & Black Ballpoint Pen Mandate',
      content:
        'Candidates must bring their own black ballpoint pen. Only black ballpoint pens are permitted to darken circles and fill rectangular boxes on the OMR answer sheet. Use of blue, gel, fountain pens, pencils, erasers, blades, or whitener is strictly prohibited and results in immediate rejection of the OMR sheet.'
    },
    {
      id: 36,
      title: 'Section 36: Official Normalization Formula & Multi-Shift Score Equating',
      content:
        'If the examination is conducted across multiple shifts or days due to large candidate turnout, raw marks will be equated using the Commission’s normalization methodology notified under Government Order No. 6/2024/148/General/47/Ka-4-2024 dated 19 June 2024 and notice dated 26.02.2026. Only normalized scores will be considered for merit preparation.'
    },
    {
      id: 37,
      title: 'Section 37: Examination Centres & District Headquarters Allocation Policy',
      content:
        'Examination centres will be established at district headquarters across Uttar Pradesh. The allotted district will be intimated via SMS, email, and portal 10 days prior to the exam. Centre name and address will be revealed on the Admit Card 3 days prior to the exam. Candidates must appear only at the designated centre; no centre changes are permitted.'
    },
    {
      id: 38,
      title: 'Section 38: Admit Card Release Timeline & Secure Download Procedures',
      content:
        'Admit Cards will be available for download 3 days before the examination date on www.upessc.up.gov.in. Candidates must click on the "Admit Card Download" button, authenticate using their Registration Number / Mobile Number and Date of Birth, and download/print their hall ticket.'
    },
    {
      id: 39,
      title: 'Section 39: Exam Day Protocols, Reporting Timings & Barred Items',
      content:
        'Candidates must report to the examination hall at least 60 minutes prior to test commencement. Mandatory items to carry: Printed Admit Card, Original Government Photo ID (Aadhaar, Voter ID, Driving License, Passport), 2 passport photos, and a black ballpoint pen. Prohibited items: Mobile phones, smartwatches, calculators, electronic gadgets, notes, or bags.'
    },
    {
      id: 40,
      title: 'Section 40: Selection Process Flow: From Written Exam to Appointment',
      content:
        'Selection Flow: Application Submission -> Scrutiny -> Written Examination (360 Marks) -> Normalization (if multiple shifts) -> State Merit List -> Document Verification (2 sets of attested records + Affidavit) -> Medical Fitness Examination -> Final School Allotment and Appointment Letter.'
    },
    {
      id: 41,
      title: 'Section 41: State-wide Merit List Compilation & Category Rank Lists',
      content:
        'The Commission will draw up a comprehensive merit list strictly according to candidate performance in the 360-mark written test (or normalized scores). Selection is made purely on merit; there is no personal interview or subjective assessment round.'
    },
    {
      id: 42,
      title: 'Section 42: Statutory Tie-Breaking Rules in Case of Equal Marks',
      content:
        'Under Clause 9(ka) of the notification, if two or more candidates achieve equal aggregate marks: Criterion 1: Higher percentage in Graduation. Criterion 2: If Graduation percentage is identical, higher percentage in Teacher Training Qualification (BTC / D.El.Ed. / B.El.Ed.). Criterion 3: If still tied, candidate older in age gets higher rank.'
    },
    {
      id: 43,
      title: 'Section 43: Document Verification (DV) Protocols & Required Record Checklist',
      content:
        'Shortlisted candidates must appear for DV with: (1) 2 copies of online application form; (2) High School certificate & marksheet; (3) Intermediate certificate & marksheet; (4) Graduation degree & all yearly/semester marksheets; (5) BTC/D.El.Ed. certificate & marksheet; (6) TET certificate; (7) NOC for serving employees; (8) Domicile/Caste/EWS/PwD certificates; (9) Character certificates (1 institutional + 2 gazetted); (10) Sworn affidavit in Appendix 6.'
    },
    {
      id: 44,
      title: 'Section 44: Final Selection, Medical Examination & School Allotment',
      content:
        'Following successful document verification, the final select list is forwarded to the Secretary, UP Basic Shiksha Parishad (for Urban Primary posts) and the Director, Secondary Education UP (for Attached Primary posts) for formal school allocation and appointment issuance.'
    },
    {
      id: 45,
      title: 'Section 45: Official Result Declaration & Scorecard Access Protocol',
      content:
        'Status: Not Released / To Be Updated. Following completion of the examination and final answer key resolution, the Commission will publish individual scorecards and category-wise cut-off marks on www.upessc.up.gov.in.'
    },
    {
      id: 46,
      title: 'Section 46: Category-wise Cut-off Marks & Qualifying Criteria',
      content:
        'Status: Not Released / To Be Updated. Minimum qualifying marks and cut-offs for UR, EWS, OBC, SC, ST, and PwD categories will be announced concurrently with the written examination results on the official website.'
    },
    {
      id: 47,
      title: 'Section 47: Answer Key Publication, Master Question Paper & Online Objections',
      content:
        'Status: Not Released / To Be Updated. Provisional answer keys will be uploaded along with the Master Question Paper on the UPESSC portal after exam conclusion. Candidates will be provided an online objection window to challenge discrepancies with authentic standard textbook evidence.'
    },
    {
      id: 48,
      title: 'Section 48: Essential Instructions, Disciplinary Rules & Debarment Clauses',
      content:
        'Furnishing false declarations, fabricated credentials, impersonation, or adopting unfair means in the examination hall will result in immediate disqualification, criminal prosecution under UP Anti-Cheating Acts, and permanent debarment from all future UPESSC recruitments.'
    },
    {
      id: 49,
      title: 'Section 49: Frequently Asked Questions (FAQs) – UPESSC PRT Teacher 2026',
      content:
        'Detailed answers covering total vacancies (12,405), registration start (16-09-2026), fee payment deadline (15-10-2026), exam dates (03-04 December 2026), syllabus, negative marking (-1 mark), age criteria, and document verification rules.'
    },
    {
      id: 50,
      title: 'Section 50: Official Contact Directory & Technical / Payment Support Helplines',
      content:
        'Technical Application Support: 08448573939 (09:30 AM - 06:00 PM, Mon-Sat) | Email: Support@upessc.org. Bank Payment Support: ICICI Bank: 8879370946, 8657723283 | Union Bank: 9137551970 | Email: pgsupport@billdesk.com. Commission Office: 0532-2466851 (10:00 AM - 05:00 PM) | Email: upesscprayagraj@gmail.com.'
    },
    {
      id: 51,
      title: 'Section 51: Related UPESSC & UP Education Department Recruitments',
      content:
        'Explore allied teaching examinations including UP TGT / PGT Teacher Recruitment, UP Higher Education Assistant Professor Recruitment, UP B.Ed. Entrance Exam, and UP Junior High School Assistant Teacher Examinations.'
    },
    {
      id: 52,
      title: 'Section 52: Related National Teaching Examinations & State Teacher Eligibility Tests',
      content:
        'Compare syllabus and eligibility with CTET (Central Teacher Eligibility Test), Rajasthan REET Primary Teacher, Bihar BPSC TRE 4.0 Teacher Recruitment, DSSSB PRT Teacher, and KVS / NVS Primary Teacher Recruitments.'
    }
  ];
}
