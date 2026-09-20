import { ExamInfoSection } from '../types/exam';
import { HPSC_FSO_SECTIONS_PART1 } from './hpscFsoSectionsPart1';
import { HPSC_FSO_SECTIONS_PART2 } from './hpscFsoSectionsPart2';

export function generateHpscFso50Sections(): ExamInfoSection[] {
  const combined: ExamInfoSection[] = [
    ...HPSC_FSO_SECTIONS_PART1,
    ...HPSC_FSO_SECTIONS_PART2
  ];

  // Guarantee strictly 50 sections with 1-based sequential IDs
  return combined.map((sec, index) => ({
    ...sec,
    id: index + 1
  }));
}

export const HPSC_FSO_50_SECTIONS: ExamInfoSection[] = generateHpscFso50Sections();
