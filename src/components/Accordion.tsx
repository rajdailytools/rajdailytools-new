import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ExamInfoSection } from '../types/exam';
import { LiveCountdownWidget } from './LiveCountdownWidget';

interface AccordionProps {
  sections?: ExamInfoSection[];
  items?: ExamInfoSection[];
  title?: string;
  defaultOpenFirst?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  sections,
  items,
  title = 'All Information & Guidelines',
  defaultOpenFirst = false
}) => {
  const activeSections = sections || items || [];
  const [openIds, setOpenIds] = useState<Set<number>>(
    new Set(defaultOpenFirst && activeSections.length > 0 ? [activeSections[0].id] : [])
  );

  const toggleSection = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(activeSections.map((s) => s.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <div className="accordion-container bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
      {/* Accordion Controls Bar */}
      <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              {title}
            </h3>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              ({activeSections.length} sections)
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Click any topic below to expand details ({activeSections.length} sections)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            data-accordion-action="expand-all"
            onClick={expandAll}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200/60"
          >
            Expand All
          </button>
          <button
            type="button"
            data-accordion-action="collapse-all"
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 bg-white hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Items */}
      <div className="divide-y divide-slate-100">
        {activeSections.map((section) => {
          const isOpen = openIds.has(section.id);
          const contentId = `accordion-content-${section.id}`;
          const headerId = `accordion-header-${section.id}`;

          return (
            <div key={section.id} className="transition-colors">
              <button
                id={headerId}
                type="button"
                data-accordion-toggle={contentId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleSection(section.id)}
                className={`w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                  isOpen ? 'bg-blue-50/40 text-blue-800' : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {section.id}
                  </span>
                  <span className="text-sm font-semibold sm:text-[15px]">
                    {section.title}
                  </span>
                </div>
                <div
                  data-accordion-icon="true"
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-blue-100 text-blue-700 rotate-180' : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Animated/Collapsible Content Area */}
              <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[12000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="p-4 sm:p-5 pt-1 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100/80">
                  {/* Dynamic Countdown Embed for UPESSC Countdown sections */}
                  {section.title.toLowerCase().includes('application deadline countdown') && (
                    <div className="mb-4">
                      <LiveCountdownWidget
                        targetDate="2026-10-07T23:59:59+05:30"
                        title="Application Deadline"
                        subtitle="07 October 2026 (23:59:59 IST)"
                        badgeLabel="Fee &amp; Form Close"
                        variant="red"
                        passedText="Application Closed"
                      />
                    </div>
                  )}
                  {section.title.toLowerCase().includes('correction deadline countdown') && (
                    <div className="mb-4">
                      <LiveCountdownWidget
                        targetDate="2026-10-11T23:59:59+05:30"
                        title="Correction Deadline"
                        subtitle="11 October 2026 (23:59:59 IST)"
                        badgeLabel="Correction Window Closes"
                        variant="purple"
                        passedText="Correction Window Closed"
                      />
                    </div>
                  )}
                  {section.title.toLowerCase().includes('exam countdown') && (
                    <div className="mb-4">
                      <LiveCountdownWidget
                        targetDate="2026-11-19T00:00:00+05:30"
                        title="Exam Starts On 19 November 2026"
                        subtitle="19 November 2026 (Official Date Boundary IST)"
                        badgeLabel="Written Exam Date"
                        variant="emerald"
                        passedText="Exam Started / Ongoing"
                      />
                    </div>
                  )}

                  <div className="p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200/60 font-medium overflow-x-auto text-slate-700">
                    {typeof section.content === 'string' && section.content.includes('<') ? (
                      <div
                        className="accordion-html-body prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    ) : typeof section.content === 'string' ? (
                      <p className="whitespace-pre-line leading-relaxed">{section.content}</p>
                    ) : (
                      section.content
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
