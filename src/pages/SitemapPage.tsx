import React, { useState, useMemo } from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { EXAMS_DATABASE } from '../data/exams';
import { ADMISSIONS_DATABASE } from '../data/admissions';
import { getPageUrl } from '../utils/urlHelper';
import {
  Map,
  Search,
  ExternalLink,
  Briefcase,
  IdCard,
  FileCheck,
  Trophy,
  BarChart2,
  Calculator,
  GraduationCap,
  Scale,
  Layers,
  ChevronRight,
  Globe
} from 'lucide-react';

interface SitemapPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

interface SitemapSection {
  title: string;
  icon: any;
  description: string;
  links: {
    label: string;
    url: string;
    page: ActivePage;
    slug?: string;
    badge?: string;
  }[];
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate, depth = 0 }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const sections: SitemapSection[] = useMemo(() => [
    {
      title: 'Main Navigation & Core Hubs',
      icon: Globe,
      description: 'Primary portal directories and main recruitment hubs across RajDailyTools.',
      links: [
        { label: 'Home Page – Live Recruitment Updates', url: getPageUrl('home', undefined, depth), page: 'home', badge: 'Main' },
        { label: 'Latest Government Jobs 2026 Directory', url: getPageUrl('latest-jobs', undefined, depth), page: 'latest-jobs', badge: 'Active' },
        { label: 'Admit Cards & Hall Tickets Hub', url: getPageUrl('admit-card', undefined, depth), page: 'admit-card' },
        { label: 'Answer Keys & Objection Windows', url: getPageUrl('answer-key', undefined, depth), page: 'answer-key' },
        { label: 'Exam Results & Selection Lists', url: getPageUrl('result', undefined, depth), page: 'result' },
        { label: 'Category Cut-Off Marks Archive', url: getPageUrl('cut-off', undefined, depth), page: 'cut-off' },
        { label: 'University & National Admissions 2026', url: getPageUrl('admission', undefined, depth), page: 'admission' },
        { label: 'Online Mock Tests & Practice Platform', url: getPageUrl('mock-test', undefined, depth), page: 'mock-test', badge: 'CBT' },
        { label: 'All Competitive Examinations Directory', url: getPageUrl('all-exams', undefined, depth), page: 'all-exams' },
        { label: 'Candidate Online Tools & Calculators Hub', url: getPageUrl('tools', undefined, depth), page: 'tools' }
      ]
    },
    {
      title: 'Top Ongoing Recruitment Posts (2026)',
      icon: Briefcase,
      description: 'Detailed official guides for currently active central & state recruitment drives.',
      links: EXAMS_DATABASE.slice(0, 14).map((exam) => ({
        label: `${exam.examName} (${exam.totalVacancy || 'Active'} Posts)`,
        url: getPageUrl('job-detail', exam.slug, depth),
        page: 'job-detail',
        slug: exam.slug,
        badge: exam.category
      }))
    },
    {
      title: 'Admit Cards & City Intimation Slips',
      icon: IdCard,
      description: 'Hall tickets, reporting times, and exam center allocation guides.',
      links: EXAMS_DATABASE.filter((e) => e.status === 'ADMIT_CARD_RELEASED' || e.admitCardDate).slice(0, 8).map((exam) => ({
        label: `${exam.examName} Admit Card`,
        url: getPageUrl('admit-card-detail', exam.slug, depth),
        page: 'admit-card-detail',
        slug: exam.slug,
        badge: 'Hall Ticket'
      }))
    },
    {
      title: 'Answer Keys, Response Sheets & Objections',
      icon: FileCheck,
      description: 'Official test papers, candidate answer response keys, and marks evaluators.',
      links: EXAMS_DATABASE.filter((e) => e.status === 'ANSWER_KEY_RELEASED' || e.answerKeyDate).slice(0, 8).map((exam) => ({
        label: `${exam.examName} Answer Key & Score Evaluator`,
        url: getPageUrl('answer-key-detail', exam.slug, depth),
        page: 'answer-key-detail',
        slug: exam.slug,
        badge: 'Response Sheet'
      }))
    },
    {
      title: 'Exam Results & Category Cut Offs',
      icon: Trophy,
      description: 'Official qualifying score marks, selection merit lists, and rank cards.',
      links: [
        ...EXAMS_DATABASE.filter((e) => e.status === 'RESULT_RELEASED' || e.resultDate).slice(0, 5).map((exam) => ({
          label: `${exam.examName} Final Result & Merit List`,
          url: getPageUrl('result-detail', exam.slug, depth),
          page: 'result-detail' as ActivePage,
          slug: exam.slug,
          badge: 'Result'
        })),
        ...EXAMS_DATABASE.filter((e) => e.cutOffData).slice(0, 5).map((exam) => ({
          label: `${exam.examName} Category-Wise Cut Off Marks`,
          url: getPageUrl('cut-off-detail', exam.slug, depth),
          page: 'cut-off-detail' as ActivePage,
          slug: exam.slug,
          badge: 'Cut Off'
        }))
      ]
    },
    {
      title: 'Candidate Online Utilities & Calculators',
      icon: Calculator,
      description: 'Free client-side tools to resize images, verify eligibility, and calculate age.',
      links: [
        { label: 'Photo Resizer for Online Application Forms', url: `${depth === 1 ? '../' : './'}tools/photo-resizer.html`, page: 'tool-detail', slug: 'photo-resizer', badge: 'Utility' },
        { label: 'Signature Resizer (Dimensions & KB Optimizer)', url: `${depth === 1 ? '../' : './'}tools/signature-resizer.html`, page: 'tool-detail', slug: 'signature-resizer', badge: 'Utility' },
        { label: 'Image Compressor for Government Portals', url: `${depth === 1 ? '../' : './'}tools/image-compressor.html`, page: 'tool-detail', slug: 'image-compressor', badge: 'Utility' },
        { label: 'Age Calculator on Official Cut-Off Date', url: `${depth === 1 ? '../' : './'}tools/age-calculator.html`, page: 'tool-detail', slug: 'age-calculator', badge: 'Calculator' },
        { label: 'Multi-Criteria Exam Eligibility Checker', url: `${depth === 1 ? '../' : './'}tools/eligibility-calculator.html`, page: 'tool-detail', slug: 'eligibility-calculator', badge: 'Eligibility' },
        { label: '7th Pay Commission In-Hand Salary Calculator', url: `${depth === 1 ? '../' : './'}tools/salary-calculator.html`, page: 'tool-detail', slug: 'salary-calculator', badge: 'Salary' },
        { label: 'Academic Percentage & CGPA Calculator', url: `${depth === 1 ? '../' : './'}tools/percentage-calculator.html`, page: 'tool-detail', slug: 'percentage-calculator', badge: 'Utility' },
        { label: 'Physical Standards & Height Eligibility Checker', url: `${depth === 1 ? '../' : './'}tools/physical-eligibility.html`, page: 'tool-detail', slug: 'physical-eligibility', badge: 'Physical' }
      ]
    },
    {
      title: 'National & University Admissions 2026',
      icon: GraduationCap,
      description: 'Central university entrance examinations, counseling notices, and forms.',
      links: ADMISSIONS_DATABASE.slice(0, 6).map((adm) => ({
        label: `${adm.university} – ${adm.course}`,
        url: getPageUrl('admission-detail', adm.slug, depth),
        page: 'admission-detail',
        slug: adm.slug,
        badge: adm.status
      }))
    },
    {
      title: 'Essential Legal, Editorial & Compliance Pages',
      icon: Scale,
      description: 'Official corporate, transparency, contact, and copyright statements.',
      links: [
        { label: 'About Us – Mission, Team & Editorial Standards', url: getPageUrl('about-us', undefined, depth), page: 'about-us', badge: 'Transparency' },
        { label: 'Contact Us – Editorial Inquiries & Error Reporting', url: getPageUrl('contact-us', undefined, depth), page: 'contact-us', badge: 'Support' },
        { label: 'Privacy Policy – Data Practices & AdSense Disclosures', url: getPageUrl('privacy-policy', undefined, depth), page: 'privacy-policy', badge: 'Policy' },
        { label: 'Disclaimer – Non-Government Affiliation & Advisories', url: getPageUrl('disclaimer', undefined, depth), page: 'disclaimer', badge: 'Advisory' },
        { label: 'Terms & Conditions – Website Usage & Permitted Access', url: getPageUrl('terms-and-conditions', undefined, depth), page: 'terms-and-conditions', badge: 'Legal' },
        { label: 'Copyright Policy – IP Protection & Grievance Mechanism', url: getPageUrl('copyright', undefined, depth), page: 'copyright', badge: 'IP' },
        { label: 'Frequently Asked Questions (FAQ) Help Desk', url: getPageUrl('faq', undefined, depth), page: 'faq', badge: 'Help' },
        { label: 'HTML Sitemap – Full Website Navigation Directory', url: getPageUrl('sitemap', undefined, depth), page: 'sitemap', badge: 'Index' }
      ]
    }
  ], [depth]);

  const filteredSections = useMemo(() => {
    if (!filterQuery.trim()) return sections;
    const q = filterQuery.toLowerCase().trim();
    return sections
      .map((sec) => ({
        ...sec,
        links: sec.links.filter(
          (l) => l.label.toLowerCase().includes(q) || (l.badge && l.badge.toLowerCase().includes(q))
        )
      }))
      .filter((sec) => sec.links.length > 0);
  }, [sections, filterQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'HTML Sitemap' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Complete Website Architecture
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
          HTML Sitemap Directory
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Easily navigate every verified exam guide, admit card portal, answer key evaluator, candidate utility, and legal policy published across RajDailyTools.
        </p>
      </div>

      {/* Instant Filter */}
      <div className="max-w-xl mx-auto">
        <div className="flex items-center bg-white border border-slate-200 rounded-2xl shadow-xs px-3.5 py-2.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Filter sitemap links (e.g. Police, BTSC, Age Calculator, Policy)..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full text-xs sm:text-sm bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {filterQuery && (
            <button
              onClick={() => setFilterQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 font-semibold px-2"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2 pb-2 border-b border-slate-100">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 font-display">{section.title}</h3>
                    <p className="text-[11px] text-slate-500">{section.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 pt-1 text-xs">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.url}
                        onClick={(e) => {
                          if (onNavigate && !link.url.startsWith('http') && !link.url.includes('/tools/')) {
                            e.preventDefault();
                            onNavigate(link.page, link.slug);
                          }
                        }}
                        className="group flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 hover:text-blue-600"
                      >
                        <span className="line-clamp-1 pr-2 font-medium">{link.label}</span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {link.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                              {link.badge}
                            </span>
                          )}
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Machine Readable XML Sitemap Notice */}
      <div className="p-5 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div className="space-y-1 text-center sm:text-left">
          <strong className="block text-slate-900 font-display">Need Machine-Readable XML Sitemap?</strong>
          <p>
            Search engine bots and indexers can access our auto-generated XML sitemap index directly at{' '}
            <code className="text-blue-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">https://rajdailytools.in/sitemap.xml</code>.
          </p>
        </div>
        <a
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Open sitemap.xml</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
