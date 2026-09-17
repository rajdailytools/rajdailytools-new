import { ExamInfoSection } from '../types/exam';
import { CONCOR_SECTIONS_PART1 } from './concorSectionsPart1';
import { CONCOR_SECTIONS_PART2 } from './concorSectionsPart2';

export function generateConcor50Sections(): ExamInfoSection[] {
  const combined: ExamInfoSection[] = [
    ...CONCOR_SECTIONS_PART1,
    ...CONCOR_SECTIONS_PART2
  ];

  // Guarantee strictly 50 sections with 1-based sequential IDs
  return combined.map((sec, index) => ({
    ...sec,
    id: index + 1
  }));
}

export const CONCOR_50_SECTIONS: ExamInfoSection[] = generateConcor50Sections();
