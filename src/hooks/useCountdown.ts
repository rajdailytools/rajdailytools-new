import { useState, useEffect } from 'react';
import { TimeRemaining, calculateTimeRemaining } from '../utils/countdownEngine';

/**
 * React hook for live ticking countdown.
 * Continuously recalculates (targetTimestamp - Date.now()) every 1000ms.
 * Safely handles tab suspension, screen sleep, and browser throttling.
 */
export function useCountdown(targetDate: string | number, intervalMs: number = 1000): TimeRemaining {
  const [time, setTime] = useState<TimeRemaining>(() => calculateTimeRemaining(targetDate));

  useEffect(() => {
    // Initial sync
    setTime(calculateTimeRemaining(targetDate));

    // Running interval
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining(targetDate));
    }, intervalMs);

    // Refresh instantly on tab focus / wake from lock
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTime(calculateTimeRemaining(targetDate));
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleVisibilityChange);

    return () => {
      clearInterval(timer);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleVisibilityChange);
    };
  }, [targetDate, intervalMs]);

  return time;
}
