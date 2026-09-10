import { ExamRecord, EducationLevel } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';

// Reference date for current time (matches system environment 2026-09-03)
export const TODAY_DATE = '2026-09-03';

/**
 * Parses date string (YYYY-MM-DD) into Date object normalized to midnight UTC
 */
function parseDate(dateStr?: string): Date | null {
  if (!dateStr) return null;
  const parts = dateStr.split('-');
  if (parts.length < 3) return null;
  return new Date(Date.UTC(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])));
}

/**
 * Returns difference in calendar days between targetDate and reference today
 */
export function getDaysDifference(targetDateStr?: string, refDateStr = TODAY_DATE): number | null {
  const target = parseDate(targetDateStr);
  const ref = parseDate(refDateStr);
  if (!target || !ref) return null;
  const diffTime = target.getTime() - ref.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Calculates human readable exam countdown status:
 * - "Today"
 * - "Tomorrow"
 * - "X Days Left"
 * - "Exam Completed"
 * NEVER shows a negative countdown!
 */
export function getExamCountdownStatus(examDateStr?: string): {
  text: string;
  isToday: boolean;
  isTomorrow: boolean;
  isFuture: boolean;
  isCompleted: boolean;
  daysRemaining: number;
} {
  const diffDays = getDaysDifference(examDateStr);

  if (diffDays === null) {
    return { text: 'To Be Announced', isToday: false, isTomorrow: false, isFuture: false, isCompleted: false, daysRemaining: 0 };
  }

  if (diffDays < 0) {
    return { text: 'Exam Completed', isToday: false, isTomorrow: false, isFuture: false, isCompleted: true, daysRemaining: 0 };
  }

  if (diffDays === 0) {
    return { text: 'Today', isToday: true, isTomorrow: false, isFuture: false, isCompleted: false, daysRemaining: 0 };
  }

  if (diffDays === 1) {
    return { text: 'Tomorrow', isToday: false, isTomorrow: true, isFuture: true, isCompleted: false, daysRemaining: 1 };
  }

  return { text: `${diffDays} Days Left`, isToday: false, isTomorrow: false, isFuture: true, isCompleted: false, daysRemaining: diffDays };
}

/**
 * Returns Active Jobs whose applications are currently open today:
 * applicationStartDate <= today and applicationLastDate >= today.
 * Sorted by closest deadline first so users see urgent jobs first.
 */
export function getTodayActiveJobs(): ExamRecord[] {
  const activeJobs = EXAMS_DATABASE.filter((exam) => {
    // Check if application has started and last date hasn't expired
    if (!exam.applicationStartDate || !exam.applicationLastDate) return false;
    const startDiff = getDaysDifference(exam.applicationStartDate);
    const lastDiff = getDaysDifference(exam.applicationLastDate);

    // startDiff <= 0 means start date is today or in the past
    // lastDiff >= 0 means last date is today or in the future
    return startDiff !== null && startDiff <= 0 && lastDiff !== null && lastDiff >= 0;
  });

  // Sort by closest last date ascending (urgent first)
  return activeJobs.sort((a, b) => {
    const diffA = getDaysDifference(a.applicationLastDate) ?? 999;
    const diffB = getDaysDifference(b.applicationLastDate) ?? 999;
    return diffA - diffB;
  });
}

/**
 * Returns latest 20 Jobs from central data, sorted by application start / date
 */
export function getLatestJobs(limit = 20): ExamRecord[] {
  const list = [...EXAMS_DATABASE];
  return list
    .sort((a, b) => {
      // Prioritize currently open jobs, then newest start date
      const aIsOpen = a.status === 'APPLICATION_OPEN' ? 1 : 0;
      const bIsOpen = b.status === 'APPLICATION_OPEN' ? 1 : 0;
      if (aIsOpen !== bIsOpen) return bIsOpen - aIsOpen;
      return (b.applicationStartDate || '').localeCompare(a.applicationStartDate || '');
    })
    .slice(0, limit);
}

/**
 * Returns latest 20 Admit Cards from central data.
 * Sorted by admit card date / upcoming exam date.
 */
export function getLatestAdmitCards(limit = 20): ExamRecord[] {
  const list = [...EXAMS_DATABASE];
  return list
    .sort((a, b) => {
      // Prioritize released admit cards or nearest exam
      const aReleased = a.status === 'ADMIT_CARD_RELEASED' || Boolean(a.admitCardDate && (getDaysDifference(a.admitCardDate) ?? 1) <= 0);
      const bReleased = b.status === 'ADMIT_CARD_RELEASED' || Boolean(b.admitCardDate && (getDaysDifference(b.admitCardDate) ?? 1) <= 0);
      if (aReleased !== bReleased) return aReleased ? -1 : 1;
      return (b.admitCardDate || b.examDate || '').localeCompare(a.admitCardDate || a.examDate || '');
    })
    .slice(0, limit);
}

/**
 * Returns latest 20 City Intimation items from central data.
 * Works independently from Admit Cards!
 */
export function getLatestCityIntimations(limit = 20): ExamRecord[] {
  const list = [...EXAMS_DATABASE];
  return list
    .sort((a, b) => {
      // Sort newest city intimation first
      const dateA = a.cityIntimationDate || a.admitCardDate || a.examDate;
      const dateB = b.cityIntimationDate || b.admitCardDate || b.examDate;
      return dateB.localeCompare(dateA);
    })
    .slice(0, limit);
}

/**
 * Returns latest 20 Results from central data, sorted newest results first.
 */
export function getLatestResults(limit = 20): ExamRecord[] {
  const list = [...EXAMS_DATABASE];
  return list
    .sort((a, b) => {
      // Released results first, sorted by resultDate descending
      const aReleased = a.status === 'RESULT_RELEASED' || a.status === 'CUT_OFF_RELEASED';
      const bReleased = b.status === 'RESULT_RELEASED' || b.status === 'CUT_OFF_RELEASED';
      if (aReleased !== bReleased) return bReleased ? 1 : -1;
      return (b.resultDate || '').localeCompare(a.resultDate || '');
    })
    .slice(0, limit);
}

/**
 * Returns latest 20 Answer Keys from central data, sorted newest releases first.
 */
export function getLatestAnswerKeys(limit = 20): ExamRecord[] {
  const list = [...EXAMS_DATABASE];
  return list
    .sort((a, b) => {
      const aReleased = a.status === 'ANSWER_KEY_RELEASED';
      const bReleased = b.status === 'ANSWER_KEY_RELEASED';
      if (aReleased !== bReleased) return bReleased ? 1 : -1;
      return (b.answerKeyDate || '').localeCompare(a.answerKeyDate || '');
    })
    .slice(0, limit);
}

export interface EligibilityEvaluationResult {
  isEligible: boolean;
  reasons: string[];
  effectiveAge: number;
  maxAllowedAge: number;
  minAllowedAge: number;
}

/**
 * Calculates whether candidate is eligible for this specific exam from actual central data.
 * Never invents information; strictly checks education, age + category relaxation, and gender.
 */
export function evaluateCandidateEligibility(
  exam: ExamRecord,
  criteria: {
    education: EducationLevel | 'All';
    age: number;
    category: string; // 'General' | 'OBC' | 'EWS' | 'SC' | 'ST'
    gender?: string;  // 'All' | 'Male' | 'Female'
  }
): EligibilityEvaluationResult {
  const reasons: string[] = [];

  // 1. Calculate age relaxation
  let ageRelaxation = 0;
  if (criteria.category === 'OBC') ageRelaxation = 3;
  if (criteria.category === 'SC' || criteria.category === 'ST') ageRelaxation = 5;

  const minAllowedAge = exam.ageMin;
  const maxAllowedAge = exam.ageMax + ageRelaxation;
  const effectiveAge = criteria.age;

  // 2. Age Check
  if (effectiveAge < minAllowedAge) {
    reasons.push(`Under minimum age requirement (Candidate: ${effectiveAge} yrs vs Required: Min ${minAllowedAge} yrs)`);
  } else if (effectiveAge > maxAllowedAge) {
    const relaxText = ageRelaxation > 0 ? ` [includes +${ageRelaxation} yrs for ${criteria.category}]` : '';
    reasons.push(`Exceeds maximum age limit (Candidate: ${effectiveAge} yrs vs Max: ${maxAllowedAge} yrs${relaxText})`);
  }

  // 3. Education Check
  if (criteria.education !== 'All' && !exam.education.includes(criteria.education)) {
    reasons.push(`Educational qualification requires: ${exam.education.join(' OR ')} (Selected: ${criteria.education})`);
  }

  // 4. Gender Check
  if (criteria.gender && criteria.gender !== 'All' && exam.gender && exam.gender !== 'All' && exam.gender !== criteria.gender) {
    reasons.push(`Restricted to ${exam.gender} candidates only (Selected: ${criteria.gender})`);
  }

  return {
    isEligible: reasons.length === 0,
    reasons,
    effectiveAge,
    maxAllowedAge,
    minAllowedAge
  };
}
