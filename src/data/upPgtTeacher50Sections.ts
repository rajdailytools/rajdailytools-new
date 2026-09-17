import { ExamInfoSection } from '../types/exam';
import { UP_PGT_SECTIONS_PART1 } from './upPgtSectionsPart1';
import { UP_PGT_SECTIONS_PART2 } from './upPgtSectionsPart2';

export function generateUpPgtTeacher50Sections(): ExamInfoSection[] {
  const sections: ExamInfoSection[] = [
    ...UP_PGT_SECTIONS_PART1,
    ...UP_PGT_SECTIONS_PART2
  ];

  // Guarantee exactly 50 sections with 1-based sequential IDs
  return sections.map((sec, index) => ({
    ...sec,
    id: index + 1
  }));
}

export const UP_PGT_TEACHER_50_SECTIONS: ExamInfoSection[] = generateUpPgtTeacher50Sections();
