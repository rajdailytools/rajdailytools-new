import React from 'react';
import { ActivePage } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { getPageUrl } from '../utils/urlHelper';

interface FooterProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a
              href={getPageUrl('home', undefined, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home');
                }
              }}
              className="flex items-center gap-3 mb-4 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12,1 22,5.2 12,9.4 2,5.2" fill="white" />
                  <rect x="8.3" y="7.6" width="7.4" height="2.3" rx="0.6" fill="white" />
                  <line x1="18.6" y1="5.6" x2="18.6" y2="9.3" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="18.6" cy="10.1" r="0.9" fill="white" />
                  <path d="M3 11.3 L11.4 10.2 L11.4 20.6 L3 21.7 Z" fill="white" />
                  <path d="M21 11.3 L12.6 10.2 L12.6 20.6 L21 21.7 Z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-white font-display">
                  Raj<span className="text-blue-500">Daily</span>Tools
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Exam Prep &amp; Career Resource
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              RajDailyTools provides trusted exam preparation guides, recruitment resources, educational articles, and smart calculators to help students across India prepare with confidence.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/rajdailytools"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="https://x.com/Educator4ll"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Twitter / X"
              >
                ✖️
              </a>
              <a
                href="https://www.youtube.com/@rajdailytools"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="YouTube"
              >
                ▶️
              </a>
              <a
                href="https://www.instagram.com/rajdailytools"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Instagram"
              >
                📸
              </a>
            </div>
          </div>

          {/* Quick Portals */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Recruitment
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={getPageUrl('latest-jobs', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('latest-jobs');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Latest Jobs 2026
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('admit-card', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('admit-card');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Admit Cards
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('answer-key', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('answer-key');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Answer Keys
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('result', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('result');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Results &amp; Merit Lists
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('cut-off', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('cut-off');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Category Cut Off
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('all-exams', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('all-exams');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  All Exams Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Exams Covered */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Exams
            </h4>
            <ul className="space-y-2.5 text-sm">
              {EXAMS_DATABASE.slice(0, 6).map((exam) => (
                <li key={exam.id}>
                  <a
                    href={getPageUrl('job-detail', exam.slug, depth)}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('job-detail', exam.slug);
                      }
                    }}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left line-clamp-1 block"
                  >
                    {exam.examName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Hub */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={getPageUrl('admission', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('admission');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Admission Forms
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('mock-test', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('mock-test');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Mock Tests Hub
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('about', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('about');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Portal
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('contact', undefined, depth)}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('contact');
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact &amp; Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Trust */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Official Notice
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              RajDailyTools is an educational and career portal. Always verify final recruitment details with official notifications from recruitment authorities.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/40">
              <span>🛡️ Verified Notifications</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <strong className="text-white">RajDailyTools</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={getPageUrl('about', undefined, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('about');
                }
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </a>
            <span>•</span>
            <a
              href={getPageUrl('contact', undefined, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('contact');
                }
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>
            <span>•</span>
            <a
              href={getPageUrl('privacy-policy', undefined, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('privacy');
                }
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href={getPageUrl('terms', undefined, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('terms');
                }
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </a>
            <span>•</span>
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
