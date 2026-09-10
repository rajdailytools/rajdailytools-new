export interface CountdownResult {
  text: string;
  isClosed: boolean;
  isUrgent: boolean;
  days: number;
  hours: number;
  minutes: number;
}

export function getCountdown(dateStr: string, type: 'deadline' | 'exam'): CountdownResult {
  if (!dateStr || isNaN(Date.parse(dateStr))) {
    return { text: 'To Be Announced', isClosed: false, isUrgent: false, days: 0, hours: 0, minutes: 0 };
  }

  const targetDate = new Date(dateStr + 'T23:59:59');
  const now = new Date();
  const diffMs = targetDate.getTime() - now.getTime();

  if (diffMs <= 0) {
    if (type === 'deadline') {
      return { text: 'Application Closed', isClosed: true, isUrgent: false, days: 0, hours: 0, minutes: 0 };
    } else {
      return { text: 'Exam Completed', isClosed: true, isUrgent: false, days: 0, hours: 0, minutes: 0 };
    }
  }

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  const isUrgent = diffDays <= 3;

  if (type === 'deadline') {
    if (diffDays === 0) {
      return {
        text: `Ends Today (${diffHours}h ${diffMinutes}m left)`,
        isClosed: false,
        isUrgent: true,
        days: 0,
        hours: diffHours,
        minutes: diffMinutes
      };
    }
    return {
      text: `${diffDays} Days Left`,
      isClosed: false,
      isUrgent,
      days: diffDays,
      hours: diffHours,
      minutes: diffMinutes
    };
  } else {
    if (diffDays === 0) {
      return {
        text: `Exam Today!`,
        isClosed: false,
        isUrgent: true,
        days: 0,
        hours: diffHours,
        minutes: diffMinutes
      };
    }
    return {
      text: `Starts in ${diffDays} Days`,
      isClosed: false,
      isUrgent,
      days: diffDays,
      hours: diffHours,
      minutes: diffMinutes
    };
  }
}

export function formatDate(dateStr?: string): string {
  if (!dateStr) return 'Notify Soon';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${day} ${months[monthIndex]} ${year}`;
  }
  return dateStr;
}
