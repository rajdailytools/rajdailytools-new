import React, { useState } from 'react';
import { ActivePage, ExamRecord } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { getPageUrl } from '../utils/urlHelper';
import {
  Calculator,
  Image,
  FileText,
  RefreshCw,
  Clock,
  Activity,
  Percent,
  DollarSign,
  Calendar,
  Layers,
  ArrowRight,
  Search,
  Sparkles,
  CheckCircle2,
  Sliders
} from 'lucide-react';

interface ToolItem {
  id: string;
  name: string;
  category: 'document' | 'calculator' | 'eligibility' | 'practice';
  categoryLabel: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
}

interface ToolsPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onNavigate, depth = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tools: ToolItem[] = [
    {
      id: 'photo-resizer',
      name: 'Passport Photo Resizer',
      category: 'document',
      categoryLabel: 'Document Tools',
      description: 'Crop and resize candidate passport photographs to 200×230 px (20KB - 50KB) for IBPS, SSC, and UPSC online portals.',
      icon: <Image className="w-6 h-6 text-blue-600" />,
      badge: 'Portal Compliant'
    },
    {
      id: 'signature-resizer',
      name: 'Signature Resizer',
      category: 'document',
      categoryLabel: 'Document Tools',
      description: 'Resize candidate signature on white paper with black ink to 140×60 px (10KB - 20KB) matching official recruitment guidelines.',
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      badge: 'Portal Compliant'
    },
    {
      id: 'image-compressor',
      name: 'Image & Document Compressor',
      category: 'document',
      categoryLabel: 'Document Tools',
      description: 'Compress document scans, certificates, and ID proofs to under 20KB, 50KB, 100KB, or 500KB without quality loss.',
      icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
      badge: 'Client-Side Fast'
    },
    {
      id: 'age-calculator',
      name: 'Age Calculator & Cut-Off Checker',
      category: 'eligibility',
      categoryLabel: 'Eligibility & Age',
      description: 'Calculate exact candidate age in years, months, and days as on the official exam crucial cut-off date with category relaxations.',
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      badge: 'Official Cut-Offs'
    },
    {
      id: 'eligibility-calculator',
      name: 'Exam Eligibility Checker',
      category: 'eligibility',
      categoryLabel: 'Eligibility & Age',
      description: 'Verify if your educational qualification, stream, degree percentage, and age meet specific job notification standards.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      badge: 'Multi-Exam'
    },
    {
      id: 'salary-calculator',
      name: 'Salary & In-Hand Pay Calculator',
      category: 'calculator',
      categoryLabel: 'Academic & Financial',
      description: 'Compute 7th CPC & Bank Wage gross salary, Dearness Allowance (DA), HRA Tier X/Y/Z, and net monthly in-hand take-home pay.',
      icon: <DollarSign className="w-6 h-6 text-amber-600" />,
      badge: '7th CPC / Banking'
    },
    {
      id: 'percentage-calculator',
      name: 'Marks & CGPA to Percentage Calculator',
      category: 'calculator',
      categoryLabel: 'Academic & Financial',
      description: 'Convert 10th/12th/Degree marks to exact aggregate percentage or convert CGPA to percentage using AICTE / CBSE standard formula.',
      icon: <Percent className="w-6 h-6 text-rose-600" />,
      badge: 'Accurate'
    },
    {
      id: 'bmi-calculator',
      name: 'BMI (Body Mass Index) Calculator',
      category: 'eligibility',
      categoryLabel: 'Eligibility & Age',
      description: 'Determine Body Mass Index (BMI) to verify height-to-weight proportion required for Defense, Police, and Paramilitary PST/PET.',
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      badge: 'Medical Board Standard'
    },
    {
      id: 'date-calculator',
      name: 'Exam Date & Duration Calculator',
      category: 'calculator',
      categoryLabel: 'Academic & Financial',
      description: 'Calculate total calendar days, weeks, and time remaining between application opening and closing deadlines.',
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      badge: 'Timeline'
    },
    {
      id: 'loan-emi-calculator',
      name: 'Education Loan EMI Calculator',
      category: 'calculator',
      categoryLabel: 'Academic & Financial',
      description: 'Calculate monthly installment (EMI), total interest, and repayment schedules for student and coaching loans.',
      icon: <Calculator className="w-6 h-6 text-violet-600" />,
      badge: 'Financial'
    },
    {
      id: 'simple-interest-calculator',
      name: 'Simple Interest Calculator',
      category: 'calculator',
      categoryLabel: 'Academic & Financial',
      description: 'Quickly compute simple interest earned or payable on principal amounts for academic aptitude and personal finances.',
      icon: <Layers className="w-6 h-6 text-sky-600" />,
      badge: 'Aptitude & Math'
    },
    {
      id: 'physical-eligibility',
      name: 'Physical Standards (PST / PET) Checker',
      category: 'eligibility',
      categoryLabel: 'Eligibility & Age',
      description: 'Check candidate height, chest expansion, and running endurance against official BRO, Police, and Defense parameters.',
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
      badge: 'PST / PET Standards'
    },
    {
      id: 'mock-test',
      name: 'Online Practice & Mock Test Engine',
      category: 'practice',
      categoryLabel: 'Practice & Prep',
      description: 'Practice timed multi-subject computer-based mock tests with negative marking and instant performance scoring.',
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      badge: 'Interactive CBT'
    }
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[{ label: 'Online Utility & Candidate Tools' }]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>100% Free Candidate Utilities</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
            RajDailyTools – Exam Tools &amp; Calculators
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            All-in-one suite of official government exam tools. Resize passport photos and signatures to exact portal specifications, calculate precise cut-off age, compute in-hand salary, and verify physical eligibility.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools (e.g., photo resizer, age calculator, salary)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 placeholder-slate-400 rounded-xl text-xs sm:text-sm font-medium outline-none shadow-md"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Tools' },
              { id: 'document', label: 'Photo & Sign' },
              { id: 'eligibility', label: 'Age & Eligibility' },
              { id: 'calculator', label: 'Calculators' },
              { id: 'practice', label: 'Mock Tests' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-blue-900 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => {
          const toolUrl = getPageUrl('tool-detail', tool.id, depth);
          return (
            <div
              key={tool.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-blue-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                    {tool.badge}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {tool.categoryLabel}
                </span>
                <h2 className="text-lg font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h2>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Fully Functional
                </span>
                <a
                  href={toolUrl}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('tool-detail', tool.id);
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
