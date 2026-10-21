import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { getPageUrl } from '../utils/urlHelper';

interface CookieConsentProps {
  depth?: number;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ depth = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('rajdailytools_cookie_consent');
      if (!consent) {
        // Show after a brief delay so page loads smoothly
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access restricted (e.g. strict sandbox)
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    try {
      localStorage.setItem(
        'rajdailytools_cookie_consent',
        JSON.stringify({
          choice: type,
          timestamp: new Date().toISOString()
        })
      );
    } catch {
      // ignore storage errors
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-blue-50 text-blue-600 rounded-xl">
            <ShieldCheck className="w-5 h-5" />
          </span>
          <h3 className="font-bold text-sm text-slate-900 font-display">
            Privacy &amp; Cookie Settings
          </h3>
        </div>
        <button
          onClick={() => handleAccept('essential')}
          className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed mb-4">
        RajDailyTools uses essential local storage for calculator preferences and optional cookies for traffic analytics and relevant educational advertisements. We never sell your personal information.{' '}
        <a
          href={getPageUrl('privacy-policy', undefined, depth)}
          className="text-blue-600 font-semibold hover:underline"
        >
          Read our Privacy Policy
        </a>
        .
      </p>

      <div className="flex items-center gap-2.5">
        <button
          onClick={() => handleAccept('all')}
          className="flex-1 py-2 px-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center"
        >
          Accept All
        </button>
        <button
          onClick={() => handleAccept('essential')}
          className="py-2 px-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
};
