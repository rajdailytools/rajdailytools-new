/**
 * Reusable Live Countdown Engine for RajDailyTools
 * Accurately computes remaining time using real-world UTC/IST timestamps and Date.now().
 * Tab/background throttling safe (always calculates target - Date.now()).
 */

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
  totalMs: number;
}

export interface LiveBadgeResult {
  text: string;
  isClosed: boolean;
  isUrgent: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Normalizes any date string into an exact target timestamp (epoch ms).
 * Strictly handles Indian Standard Time (+05:30) for deadlines and exam dates.
 */
export function parseTargetTimestamp(target: string | number): number {
  if (typeof target === 'number') return target;
  if (!target || typeof target !== 'string') return NaN;

  const trimmed = target.trim();

  // If already has timezone offset (e.g. +05:30 or Z), use standard Date parse
  if (trimmed.includes('+') || trimmed.endsWith('Z') || /T\d{2}:\d{2}:\d{2}[-+]\d{2}/.test(trimmed)) {
    const parsed = new Date(trimmed).getTime();
    if (!isNaN(parsed)) return parsed;
  }

  // If date-only string like "YYYY-MM-DD"
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    // End of day in IST (23:59:59+05:30)
    return new Date(`${trimmed}T23:59:59+05:30`).getTime();
  }

  // If datetime without offset like "YYYY-MM-DDTHH:mm:ss"
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/.test(trimmed)) {
    const full = trimmed.length === 16 ? `${trimmed}:00` : trimmed;
    return new Date(`${full}+05:30`).getTime();
  }

  return new Date(trimmed).getTime();
}

/**
 * Computes exact time remaining between target date and Date.now().
 * Guaranteed non-negative values.
 */
export function calculateTimeRemaining(targetInput: string | number): TimeRemaining {
  const targetMs = parseTargetTimestamp(targetInput);
  const now = Date.now();

  if (isNaN(targetMs) || targetMs <= now) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true, totalMs: 0 };
  }

  const totalMs = targetMs - now;
  const seconds = Math.floor((totalMs / 1000) % 60);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));

  return {
    days: Math.max(0, days),
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    seconds: Math.max(0, seconds),
    isPassed: false,
    totalMs
  };
}

/**
 * Dynamic Top Badge computation based on real-time Date.now().
 * Automatically transitions e.g. "14 Days Left" -> "13 Days Left" -> "Ends Today (Xh Ym left)" -> "Application Closed".
 */
export function getLiveBadgeStatus(
  targetInput?: string,
  type: 'deadline' | 'exam' = 'deadline'
): LiveBadgeResult {
  if (!targetInput) {
    return { text: 'To Be Announced', isClosed: false, isUrgent: false, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const remaining = calculateTimeRemaining(targetInput);

  if (remaining.isPassed) {
    if (type === 'deadline') {
      return { text: 'Application Closed', isClosed: true, isUrgent: false, days: 0, hours: 0, minutes: 0, seconds: 0 };
    } else {
      return { text: 'Exam Commenced / Completed', isClosed: true, isUrgent: false, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  const isUrgent = remaining.days <= 3;

  if (type === 'deadline') {
    if (remaining.days === 0) {
      return {
        text: `Ends Today (${remaining.hours}h ${remaining.minutes}m ${remaining.seconds}s left)`,
        isClosed: false,
        isUrgent: true,
        days: remaining.days,
        hours: remaining.hours,
        minutes: remaining.minutes,
        seconds: remaining.seconds
      };
    }
    return {
      text: `${remaining.days} Days Left`,
      isClosed: false,
      isUrgent,
      days: remaining.days,
      hours: remaining.hours,
      minutes: remaining.minutes,
      seconds: remaining.seconds
    };
  } else {
    if (remaining.days === 0) {
      return {
        text: `Exam Today (${remaining.hours}h ${remaining.minutes}m left)`,
        isClosed: false,
        isUrgent: true,
        days: remaining.days,
        hours: remaining.hours,
        minutes: remaining.minutes,
        seconds: remaining.seconds
      };
    }
    return {
      text: `Starts in ${remaining.days} Days`,
      isClosed: false,
      isUrgent,
      days: remaining.days,
      hours: remaining.hours,
      minutes: remaining.minutes,
      seconds: remaining.seconds
    };
  }
}
