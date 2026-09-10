import React, { useEffect } from 'react';
import { ActivePage } from '../types/exam';
import {
  Home,
  Briefcase,
  IdCard,
  FileCheck,
  Trophy,
  BarChart2,
  GraduationCap,
  Layers,
  Calculator,
  Info,
  Mail,
  X
} from 'lucide-react';
import { getPageUrl } from '../utils/urlHelper';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: ActivePage;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
  staticMode?: boolean;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
  depth = 0,
  staticMode = false
}) => {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (staticMode) return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, staticMode]);

  // Escape key listener
  useEffect(() => {
    if (staticMode) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, staticMode]);

  if (!isOpen && !staticMode) return null;

  const menuItems = [
    { label: 'Home', page: 'home' as ActivePage, icon: Home },
    { label: 'Latest Jobs', page: 'latest-jobs' as ActivePage, icon: Briefcase },
    { label: 'Admit Card', page: 'admit-card' as ActivePage, icon: IdCard },
    { label: 'Answer Key', page: 'answer-key' as ActivePage, icon: FileCheck },
    { label: 'Result', page: 'result' as ActivePage, icon: Trophy },
    { label: 'Cut Off', page: 'cut-off' as ActivePage, icon: BarChart2 },
    { label: 'Admission Form', page: 'admission' as ActivePage, icon: GraduationCap },
    { label: 'Candidate Tools', page: 'tools' as ActivePage, icon: Calculator },
    { label: 'Mock Test', page: 'mock-test' as ActivePage, icon: Layers }
  ];

  const secondaryItems = [
    { label: 'About RajDailyTools', page: 'about' as ActivePage, icon: Info },
    { label: 'Contact & Support', page: 'contact' as ActivePage, icon: Mail }
  ];

  const handleItemClick = (e: React.MouseEvent, page: ActivePage) => {
    if (onNavigate && (!window.location.pathname.endsWith('.html'))) {
      e.preventDefault();
      onNavigate(page);
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        id="mobile-drawer-backdrop"
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity z-50 ${
          staticMode ? 'hidden' : 'animate-in fade-in'
        }`}
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[340px] bg-white h-full shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          staticMode
            ? 'translate-x-full'
            : 'animate-in slide-in-from-right'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,1 22,5.2 12,9.4 2,5.2" fill="white" />
                <rect x="8.3" y="7.6" width="7.4" height="2.3" rx="0.6" fill="white" />
                <line x1="18.6" y1="5.6" x2="18.6" y2="9.3" stroke="white" strokeWidth="1" strokeLinecap="round" />
                <circle cx="18.6" cy="10.1" r="0.9" fill="white" />
                <path d="M3 11.3 L11.4 10.2 L11.4 20.6 L3 21.7 Z" fill="white" />
                <path d="M21 11.3 L12.6 10.2 L12.6 20.6 L21 21.7 Z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-lg text-slate-900 font-display leading-tight">
                Raj<span className="text-blue-600">Daily</span>Tools
              </div>
              <div className="text-[10px] text-slate-500 font-medium tracking-tight">
                Exam Prep &amp; Career Resource
              </div>
            </div>
          </div>
          <button
            id="close-mobile-drawer"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-200/80 hover:bg-red-100 hover:text-red-600 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Main Portal
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              currentPage === item.page ||
              (item.page === 'latest-jobs' && currentPage === 'job-detail') ||
              (item.page === 'admit-card' && currentPage === 'admit-card-detail') ||
              (item.page === 'answer-key' && currentPage === 'answer-key-detail') ||
              (item.page === 'result' && currentPage === 'result-detail') ||
              (item.page === 'cut-off' && currentPage === 'cut-off-detail') ||
              (item.page === 'admission' && currentPage === 'admission-detail');

            return (
              <a
                key={item.page}
                href={getPageUrl(item.page, undefined, depth)}
                onClick={(e) => handleItemClick(e, item.page)}
                className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-bold border border-blue-100'
                    : 'text-slate-700 hover:bg-slate-100/80'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{item.label}</span>
              </a>
            );
          })}

          <div className="pt-5 pb-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Help &amp; Information
            </div>
            {secondaryItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.page}
                  href={getPageUrl(item.page, undefined, depth)}
                  onClick={(e) => handleItemClick(e, item.page)}
                  className="w-full flex items-center gap-3.5 px-3.5 py-2 rounded-xl text-left text-sm font-medium text-slate-600 hover:bg-slate-100/80 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
          <p className="text-xs text-slate-500 font-medium">
            © 2026 RajDailyTools • 100% Free Resources
          </p>
          <div className="text-[11px] text-slate-400 mt-1">
            Made with ❤️ for Indian Aspirants
          </div>
        </div>
      </div>
    </>
  );
};
