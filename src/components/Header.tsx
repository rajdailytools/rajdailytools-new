import React, { useState } from 'react';
import { ActivePage } from '../types/exam';
import { Search, Menu, X, Bell } from 'lucide-react';
import { performGlobalSearch, GlobalSearchResult } from '../utils/searchUtils';
import { getPageUrl } from '../utils/urlHelper';

interface HeaderProps {
  currentPage: ActivePage;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  onOpenMobileMenu?: () => void;
  depth?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenMobileMenu,
  depth = 0
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<GlobalSearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length >= 2) {
      setSearchResults(performGlobalSearch(val));
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const handleSelectResult = (result: GlobalSearchResult) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    if (onNavigate) {
      onNavigate(result.page, result.slug);
    } else {
      window.location.href = getPageUrl(result.page, result.slug, depth);
    }
  };

  const navItems: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Latest Jobs', page: 'latest-jobs' },
    { label: 'Admit Card', page: 'admit-card' },
    { label: 'Answer Key', page: 'answer-key' },
    { label: 'Result', page: 'result' },
    { label: 'Cut Off', page: 'cut-off' },
    { label: 'Admission Form', page: 'admission' },
    { label: 'Tools', page: 'tools' as ActivePage },
    { label: 'Mock Test', page: 'mock-test' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* LOGO */}
          <a
            href={getPageUrl('home', undefined, depth)}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('home');
              }
            }}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            aria-label="RajDailyTools Home"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 flex-shrink-0 group-hover:bg-blue-700 transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,1 22,5.2 12,9.4 2,5.2" fill="white" />
                <rect x="8.3" y="7.6" width="7.4" height="2.3" rx="0.6" fill="white" />
                <line x1="18.6" y1="5.6" x2="18.6" y2="9.3" stroke="white" strokeWidth="1" strokeLinecap="round" />
                <circle cx="18.6" cy="10.1" r="0.9" fill="white" />
                <path d="M3 11.3 L11.4 10.2 L11.4 20.6 L3 21.7 Z" fill="white" />
                <path d="M21 11.3 L12.6 10.2 L12.6 20.6 L21 21.7 Z" fill="white" />
                <circle cx="19.5" cy="18.8" r="2.7" fill="#0f172a" stroke="white" strokeWidth="0.6" />
                <circle cx="19.5" cy="18.8" r="0.9" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="font-extrabold text-xl tracking-tight text-slate-900 font-display leading-tight">
                Raj<span className="text-blue-600">Daily</span>Tools
              </div>
              <span className="text-[10.5px] font-medium text-slate-500 tracking-wider uppercase hidden sm:block">
                Exam Prep &amp; Career Resource
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
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
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(item.page);
                    }
                  }}
                  className={`px-3.5 py-2 text-[13.5px] font-semibold rounded-lg transition-all cursor-pointer relative ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 font-bold'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS: SEARCH & MOBILE TOGGLE */}
          <div className="flex items-center gap-2 relative">
            {/* SEARCH BOX DESKTOP */}
            <div className="relative hidden md:block w-48 xl:w-60">
              <div className="flex items-center bg-slate-100/90 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search exams, jobs..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    if (searchQuery.length >= 2) setIsSearchOpen(true);
                  }}
                  className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* SEARCH DROPDOWN POPUP */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-[380px] overflow-y-auto p-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Search Results ({searchResults.length})
                  </div>
                  {searchResults.length === 0 ? (
                    <div className="py-6 text-center text-xs text-slate-500">
                      No matching exams or jobs found.
                    </div>
                  ) : (
                    searchResults.map((res) => (
                      <button
                        key={res.id}
                        onClick={() => handleSelectResult(res)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-3 cursor-pointer border-b border-slate-50 last:border-none"
                      >
                        <span className="text-xl shrink-0 p-1.5 bg-slate-100 rounded-lg">{res.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-800 truncate">{res.title}</div>
                          <div className="text-[11px] text-slate-500 truncate">{res.subtitle}</div>
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 shrink-0">
                          {res.badge}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* NOTIFICATION CHIP */}
            <a
              href={getPageUrl('latest-jobs', undefined, depth)}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('latest-jobs');
                }
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold hover:bg-amber-100 transition-colors cursor-pointer"
              title="Latest Recruitment Updates"
            >
              <Bell className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
              <span>Jobs 2026</span>
            </a>

            {/* MOBILE SEARCH TOGGLE */}
            <button
              onClick={() => {
                const query = prompt('Enter exam or job to search:');
                if (query && query.trim().length >= 2) {
                  const matches = performGlobalSearch(query);
                  if (matches.length > 0) {
                    if (onNavigate) {
                      onNavigate(matches[0].page, matches[0].slug);
                    } else {
                      window.location.href = getPageUrl(matches[0].page, matches[0].slug, depth);
                    }
                  } else {
                    alert('No matching exam found for "' + query + '"');
                  }
                }
              }}
              className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              id="mobile-menu-btn"
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-xl cursor-pointer focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
