import React from 'react';
import { ActivePage } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { getPageUrl } from '../utils/urlHelper';

interface FooterProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, depth = 0 }) => {
  const currentYear = new Date().getFullYear();

  // Helper for clicking navigation links
  const createNavHandler = (page: ActivePage, slug?: string) => (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, slug);
    }
  };

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={getPageUrl('home', undefined, depth)}
              onClick={createNavHandler('home')}
              className="flex items-center gap-3 group cursor-pointer"
              aria-label="RajDailyTools Homepage"
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
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              RajDailyTools is an independent educational portal providing Indian students with authenticated examination notifications, admit cards, answer keys, results, expected cut-offs, syllabus outlines, and free client-side candidate tools.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://t.me/Educator4ll"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Telegram Channel"
                title="Join Telegram (@Educator4ll)"
              >
                ✈️
              </a>
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
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/40">
                🛡️ Verified With Official Gazettes
              </span>
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
                  onClick={createNavHandler('latest-jobs')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Latest Jobs 2026
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('admit-card', undefined, depth)}
                  onClick={createNavHandler('admit-card')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Admit Cards
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('answer-key', undefined, depth)}
                  onClick={createNavHandler('answer-key')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Answer Keys
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('result', undefined, depth)}
                  onClick={createNavHandler('result')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Results &amp; Merit Lists
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('cut-off', undefined, depth)}
                  onClick={createNavHandler('cut-off')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Category Cut Off
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('all-exams', undefined, depth)}
                  onClick={createNavHandler('all-exams')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  All Exams Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Student Hub & Tools */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={getPageUrl('admission', undefined, depth)}
                  onClick={createNavHandler('admission')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Admission Forms
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('mock-test', undefined, depth)}
                  onClick={createNavHandler('mock-test')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Mock Tests Platform
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('tools', undefined, depth)}
                  onClick={createNavHandler('tools')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Candidate Tools Hub
                </a>
              </li>
              {EXAMS_DATABASE.slice(0, 3).map((exam) => (
                <li key={exam.id}>
                  <a
                    href={getPageUrl('job-detail', exam.slug, depth)}
                    onClick={createNavHandler('job-detail', exam.slug)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left line-clamp-1 block"
                  >
                    {exam.shortName || exam.examName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Essential Info & Help (Required Links 1, 2, 7, 8) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Company &amp; Help
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={getPageUrl('about-us', undefined, depth)}
                  onClick={createNavHandler('about-us')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('contact-us', undefined, depth)}
                  onClick={createNavHandler('contact-us')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('faq', undefined, depth)}
                  onClick={createNavHandler('faq')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('sitemap', undefined, depth)}
                  onClick={createNavHandler('sitemap')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  HTML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance (Required Links 3, 4, 5, 6) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={getPageUrl('privacy-policy', undefined, depth)}
                  onClick={createNavHandler('privacy-policy')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('disclaimer', undefined, depth)}
                  onClick={createNavHandler('disclaimer')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('terms-and-conditions', undefined, depth)}
                  onClick={createNavHandler('terms-and-conditions')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href={getPageUrl('copyright', undefined, depth)}
                  onClick={createNavHandler('copyright')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Copyright Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dedicated "Important Links" Row — Prominently Showcasing All Eight Required Links Directly */}
        <div className="py-6 px-5 sm:px-8 bg-slate-900/90 border border-slate-800 rounded-2xl mb-8 shadow-inner">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200 font-display">
                Important Links:
              </span>
            </div>
            <nav
              className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-slate-300"
              aria-label="Important Footer Links"
            >
              <a
                href={getPageUrl('about-us', undefined, depth)}
                onClick={createNavHandler('about-us')}
                className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                About Us
              </a>
              <span className="text-slate-700 select-none">•</span>
              <a
                href={getPageUrl('contact-us', undefined, depth)}
                onClick={createNavHandler('contact-us')}
                className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                Contact Us
              </a>
              <span className="text-slate-700 select-none">•</span>
              <a
                href={getPageUrl('privacy-policy', undefined, depth)}
                onClick={createNavHandler('privacy-policy')}
                className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                Privacy Policy
              </a>
              <span className="text-slate-700 select-none">•</span>
              <a
                href={getPageUrl('disclaimer', undefined, depth)}
                onClick={createNavHandler('disclaimer')}
                className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                Disclaimer
              </a>
              <span className="text-slate-700 select-none">•</span>
              <a
                href={getPageUrl('terms-and-conditions', undefined, depth)}
                onClick={createNavHandler('terms-and-conditions')}
                className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                Terms and Conditions
              </a>
              <span className="text-slate-700 select-none">•</span>
              <a
                href={getPageUrl('copyright', undefined, depth)}
                onClick={createNavHandler('copyright')}
                className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                Copyright Policy
              </a>
              <span className="text-slate-700 select-none">•</span>
              <a
                href={getPageUrl('faq', undefined, depth)}
                onClick={createNavHandler('faq')}
                className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                FAQ
              </a>
              <span className="text-slate-700 select-none">•</span>
              <a
                href={getPageUrl('sitemap', undefined, depth)}
                onClick={createNavHandler('sitemap')}
                className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                HTML Sitemap
              </a>
            </nav>
          </div>
        </div>

        {/* Disclaimer Notice Text */}
        <div className="pb-6 text-[11.5px] text-slate-400 leading-relaxed border-b border-slate-800/80">
          <p>
            <strong className="text-slate-300">Disclaimer:</strong> RajDailyTools is an independent educational and exam information portal. We are not an official government entity and have no direct affiliation with any government department, recruitment board, or statutory commission. All recruitment notices, dates, eligibility criteria, and results published on this website must be verified by candidates through the respective official authority before applying.
          </p>
        </div>

        {/* Bottom Bar With Dynamic Copyright Year */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong className="text-white">RajDailyTools</strong>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs">
            <span className="text-slate-400">Independent Educational &amp; Career Resource</span>
            <span className="text-slate-700">•</span>
            <span>Made with ❤️ for Indian Aspirants</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
