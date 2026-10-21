import React, { useState, useMemo } from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { getPageUrl } from '../utils/urlHelper';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Briefcase,
  IdCard,
  FileCheck,
  Trophy,
  Calculator,
  ShieldCheck,
  Mail,
  ExternalLink
} from 'lucide-react';

interface FaqPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  relatedLink?: { label: string; page: ActivePage };
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Latest Jobs',
    question: 'How do I find the latest government job notifications on RajDailyTools?',
    answer: 'You can browse the "Latest Jobs" tab on the main navigation or visit the Latest Jobs directory. Each recruitment entry provides key dates, total vacancies, category breakdown, minimum educational criteria, pay scale, official advertisement PDF link, and the direct online application portal.',
    relatedLink: { label: 'Explore Latest Jobs', page: 'latest-jobs' }
  },
  {
    id: 'faq-2',
    category: 'Latest Jobs',
    question: 'Are application links on RajDailyTools direct to official government portals?',
    answer: 'Yes. Every "Apply Online" or "Official Notification" button directly points to the official commission portal (such as btsc.bihar.gov.in, ssc.gov.in, esb.mp.gov.in, or upsc.gov.in). We do not host intermediate form-filling pages or collect examination fees.',
    relatedLink: { label: 'Browse Verified Notifications', page: 'latest-jobs' }
  },
  {
    id: 'faq-3',
    category: 'Admit Cards',
    question: 'How do I download my admit card or exam city intimation slip?',
    answer: 'Visit the "Admit Card" section. Locate your exam and click "Download Hall Ticket" or "Check Exam City". We provide step-by-step instructions on what credentials (e.g., Registration ID, Date of Birth, Password) are needed on the official commission login page.',
    relatedLink: { label: 'Check Admit Cards', page: 'admit-card' }
  },
  {
    id: 'faq-4',
    category: 'Admit Cards',
    question: 'What should I do if my admit card displays incorrect personal details?',
    answer: 'If your hall ticket contains spelling mistakes in your name, incorrect category, or blurred photograph, contact the recruitment board’s official helpline or grievance cell immediately before the examination date. Official helpline contacts are listed in the official notification link on our guide.',
    relatedLink: { label: 'Admit Card Guidance', page: 'admit-card' }
  },
  {
    id: 'faq-5',
    category: 'Results',
    question: 'How and when can I check my exam results on RajDailyTools?',
    answer: 'As soon as an examination authority publishes the merit list, selection result, or scorecards, our team cross-verifies and posts direct download links in the "Result" section. You can check both roll-number wise merit list PDFs and individual scorecard login links.',
    relatedLink: { label: 'View Latest Results', page: 'result' }
  },
  {
    id: 'faq-6',
    category: 'Answer Keys',
    question: 'How do answer keys, response sheets, and objection windows work?',
    answer: 'After a Computer Based Test (CBT) or offline exam concludes, recruitment boards release provisional answer keys with candidate response sheets. Our "Answer Key" section provides the direct objection portal link, key challenge deadlines, and instructions for calculating your tentative raw score with negative marking.',
    relatedLink: { label: 'Browse Answer Keys', page: 'answer-key' }
  },
  {
    id: 'faq-7',
    category: 'Cut Off',
    question: 'What is the difference between Expected Cut Off and Official Cut Off?',
    answer: 'Official Cut Off is the authentic minimum qualifying score officially announced by the recruitment board in the result notification. Expected Cut Off is an analytical estimate based on exam difficulty, total applicants, negative marking, and previous year trends. We clearly distinguish between official cut-offs and analytical estimates.',
    relatedLink: { label: 'View Category Cut Offs', page: 'cut-off' }
  },
  {
    id: 'faq-8',
    category: 'Mock Tests',
    question: 'How do I access and practice full-length online mock tests?',
    answer: 'Visit the "Mock Test" section from our top menu. Our mock tests simulate real online CBT environments with countdown timers, subject-wise sections, question palettes, and automatic scoring with negative marking penalties to help you benchmark your preparation.',
    relatedLink: { label: 'Start Mock Test', page: 'mock-test' }
  },
  {
    id: 'faq-9',
    category: 'Candidate Tools',
    question: 'How do the candidate utilities like the Age Calculator and Photo Resizer work?',
    answer: 'All RajDailyTools calculators run 100% client-side in your web browser. When you use the Age Calculator on Cut-Off Dates, Photo Resizer, or Eligibility Checker, your inputs and uploaded images are processed locally on your device and are never sent to or stored on our servers.',
    relatedLink: { label: 'Open Candidate Tools', page: 'tools' }
  },
  {
    id: 'faq-10',
    category: 'Verification',
    question: 'How can I verify the information published on RajDailyTools?',
    answer: 'We provide direct official notification PDFs and commission website links on every exam guide. You can verify every date, vacancy count, and eligibility rule directly against the official government notification cited in the "Official Links" section of the guide.',
    relatedLink: { label: 'Read Our Disclaimer', page: 'disclaimer' }
  },
  {
    id: 'faq-11',
    category: 'Corrections',
    question: 'How can I report an incorrect date, broken link, or official corrigendum?',
    answer: 'If you spot a revised deadline or broken link, please email us directly at rajdailytools@gmail.com with the exam name and official notice link, or submit a message through our Contact Us page. Our editorial team reviews reports promptly.',
    relatedLink: { label: 'Contact Us Page', page: 'contact-us' }
  },
  {
    id: 'faq-12',
    category: 'Contact',
    question: 'Is RajDailyTools an official government website?',
    answer: 'No. RajDailyTools is an independent educational and career portal. We are NOT affiliated with, sponsored by, or endorsed by any government department, public service commission, or examination authority. All official circulars and trademarks remain the property of their respective owners.',
    relatedLink: { label: 'Learn About Us', page: 'about-us' }
  }
];

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, depth = 0 }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'Latest Jobs', 'Admit Cards', 'Results', 'Answer Keys', 'Cut Off', 'Mock Tests', 'Candidate Tools', 'Verification'];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_DATA.map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb items={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Knowledge Base &amp; Help Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Find instant answers on finding job alerts, downloading admit cards, verifying official notifications, and using RajDailyTools free exam utilities.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-3.5 py-2.5 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. admit card, cut off, tools)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 font-semibold px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center space-y-2">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-800 text-base">No Matching Questions Found</h3>
            <p className="text-xs text-slate-500">
              Try searching with different keywords, or check our categories above.
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border transition-all rounded-2xl overflow-hidden ${
                  isOpen ? 'border-blue-300 shadow-md ring-1 ring-blue-100' : 'border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-start justify-between gap-3 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 bg-slate-50/50 space-y-3">
                    <p>{faq.answer}</p>
                    {faq.relatedLink && (
                      <div className="pt-1">
                        <a
                          href={getPageUrl(faq.relatedLink.page, undefined, depth)}
                          onClick={(e) => {
                            if (onNavigate) {
                              e.preventDefault();
                              onNavigate(faq.relatedLink!.page);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                        >
                          <span>{faq.relatedLink.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="font-bold text-lg font-display text-white">Have a Specific Question or Discrepancy?</h3>
          <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
            Our editorial desk is available to assist with date extensions, corrigenda, or broken links across any central or state recruitment notice.
          </p>
        </div>
        <a
          href={getPageUrl('contact-us', undefined, depth)}
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate('contact-us');
            }
          }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Our Team</span>
        </a>
      </div>
    </div>
  );
};
