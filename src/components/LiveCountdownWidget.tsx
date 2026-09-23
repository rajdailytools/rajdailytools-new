import React from 'react';
import { Clock, AlertCircle, Calendar } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

export interface LiveCountdownProps {
  targetDate: string; // ISO string e.g. '2026-10-07T23:59:59+05:30'
  title: string;
  subtitle?: string;
  badgeLabel?: string;
  passedText?: string;
  variant?: 'blue' | 'purple' | 'amber' | 'emerald' | 'red';
  showSeconds?: boolean;
}

export const LiveCountdownWidget: React.FC<LiveCountdownProps> = ({
  targetDate,
  title,
  subtitle,
  badgeLabel,
  passedText = 'Deadline Passed',
  variant = 'blue',
  showSeconds = true
}) => {
  const time = useCountdown(targetDate, 1000);

  const colorStyles = {
    blue: {
      bg: 'bg-blue-50/70 border-blue-200',
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      numBg: 'bg-white border-blue-100 text-blue-950',
      label: 'text-blue-700',
      accent: 'text-blue-600',
      secText: 'text-blue-600'
    },
    purple: {
      bg: 'bg-purple-50/70 border-purple-200',
      badge: 'bg-purple-100 text-purple-800 border-purple-200',
      numBg: 'bg-white border-purple-100 text-purple-950',
      label: 'text-purple-700',
      accent: 'text-purple-600',
      secText: 'text-purple-600'
    },
    amber: {
      bg: 'bg-amber-50/70 border-amber-200',
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      numBg: 'bg-white border-amber-100 text-amber-950',
      label: 'text-amber-700',
      accent: 'text-amber-600',
      secText: 'text-amber-600'
    },
    emerald: {
      bg: 'bg-emerald-50/70 border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      numBg: 'bg-white border-emerald-100 text-emerald-950',
      label: 'text-emerald-700',
      accent: 'text-emerald-600',
      secText: 'text-emerald-600'
    },
    red: {
      bg: 'bg-red-50/70 border-red-200',
      badge: 'bg-red-100 text-red-800 border-red-200',
      numBg: 'bg-white border-red-100 text-red-950',
      label: 'text-red-700',
      accent: 'text-red-600',
      secText: 'text-red-600'
    }
  }[variant];

  return (
    <div
      data-live-countdown="true"
      data-target-date={targetDate}
      data-passed-text={passedText}
      className={`p-4 rounded-2xl border ${colorStyles.bg} transition-all shadow-2xs`}
    >
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <Clock className={`w-4 h-4 ${colorStyles.accent}`} />
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">{title}</h4>
        </div>
        {badgeLabel && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colorStyles.badge}`}>
            {badgeLabel}
          </span>
        )}
      </div>

      {subtitle && (
        <div className="text-[11px] text-slate-500 mb-3 flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-slate-400" />
          <span>{subtitle}</span>
        </div>
      )}

      {/* Passed State Box */}
      <div
        data-countdown-passed="true"
        className={`p-3 bg-white/90 border border-slate-200 rounded-xl text-center ${
          time.isPassed ? 'block' : 'hidden'
        }`}
      >
        <div className="flex items-center justify-center gap-1.5 text-slate-600 font-bold text-xs sm:text-sm">
          <AlertCircle className="w-4 h-4 text-slate-400" />
          <span data-passed-text-label="true">{passedText}</span>
        </div>
        <p className="text-[10px] text-slate-400 mt-0.5">The official target date/time has concluded.</p>
      </div>

      {/* Active Ticking Timer Grid */}
      <div
        data-countdown-live="true"
        className={`grid grid-cols-4 gap-2 text-center ${time.isPassed ? 'hidden' : 'grid'}`}
      >
        <div className={`p-2 rounded-xl border ${colorStyles.numBg} shadow-2xs`}>
          <span
            data-countdown-days="true"
            className="block text-base sm:text-lg font-black font-display text-slate-900"
          >
            {time.days}
          </span>
          <span className={`block text-[9px] uppercase font-bold tracking-wider ${colorStyles.label}`}>Days</span>
        </div>
        <div className={`p-2 rounded-xl border ${colorStyles.numBg} shadow-2xs`}>
          <span
            data-countdown-hours="true"
            className="block text-base sm:text-lg font-black font-display text-slate-900"
          >
            {time.hours.toString().padStart(2, '0')}
          </span>
          <span className={`block text-[9px] uppercase font-bold tracking-wider ${colorStyles.label}`}>Hours</span>
        </div>
        <div className={`p-2 rounded-xl border ${colorStyles.numBg} shadow-2xs`}>
          <span
            data-countdown-minutes="true"
            className="block text-base sm:text-lg font-black font-display text-slate-900"
          >
            {time.minutes.toString().padStart(2, '0')}
          </span>
          <span className={`block text-[9px] uppercase font-bold tracking-wider ${colorStyles.label}`}>Mins</span>
        </div>
        {showSeconds ? (
          <div className={`p-2 rounded-xl border ${colorStyles.numBg} shadow-2xs`}>
            <span
              data-countdown-seconds="true"
              className={`block text-base sm:text-lg font-black font-display ${colorStyles.secText}`}
            >
              {time.seconds.toString().padStart(2, '0')}
            </span>
            <span className={`block text-[9px] uppercase font-bold tracking-wider ${colorStyles.label}`}>Secs</span>
          </div>
        ) : (
          <div className={`p-2 rounded-xl border ${colorStyles.numBg} shadow-2xs`}>
            <span className="block text-base sm:text-lg font-black font-display text-emerald-600">LIVE</span>
            <span className={`block text-[9px] uppercase font-bold tracking-wider ${colorStyles.label}`}>Tick</span>
          </div>
        )}
      </div>
    </div>
  );
};
