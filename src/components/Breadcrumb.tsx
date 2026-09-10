import React from 'react';
import { ActivePage } from '../types/exam';
import { ChevronRight, Home } from 'lucide-react';
import { getPageUrl } from '../utils/urlHelper';

interface BreadcrumbProps {
  items: {
    label: string;
    page?: ActivePage;
    slug?: string;
  }[];
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate, depth = 0 }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-500 py-3 mb-4 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
      <a
        href={getPageUrl('home', undefined, depth)}
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate('home');
          }
        }}
        className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer"
      >
        <Home className="w-3.5 h-3.5 text-slate-400" />
        <span>Home</span>
      </a>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            {isLast || !item.page ? (
              <span className="font-bold text-slate-800 truncate max-w-[240px] sm:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a
                href={getPageUrl(item.page, item.slug, depth)}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate(item.page!, item.slug);
                  }
                }}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
