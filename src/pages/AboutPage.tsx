import React from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ShieldCheck,
  Target,
  Sparkles,
  Heart,
  Send,
  Mail,
  GraduationCap,
  Award
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      <Breadcrumb items={[{ label: 'About Us' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Our Story &amp; Purpose
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-display">
          About RajDailyTools
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          RajDailyTools is India's dedicated government exam preparation and recruitment resource, built to bring clarity, transparency, and authentic information to students and aspirants across India.
        </p>
      </div>

      {/* Founder Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-3xl p-8 text-center shadow-lg">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-5xl mx-auto mb-4 border-2 border-white/30">
              👨‍💻
            </div>
            <h2 className="text-2xl font-black font-display text-white">Raj Singh Sengar</h2>
            <p className="text-xs text-blue-200 mt-0.5">Known as "Raj Bhai" to Aspirants</p>
            <div className="mt-6 space-y-2 text-xs font-semibold text-blue-100">
              <div className="p-2.5 bg-white/10 rounded-xl flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-300 shrink-0" />
                <span>BSc Physics Graduate</span>
              </div>
              <div className="p-2.5 bg-white/10 rounded-xl flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>COPA ITI Certified Professional</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              A Message from the Founder
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When I was preparing for competitive exams and pursuing my BSc in Physics alongside my Computer Operator and Programming Assistant (COPA) ITI training, I faced the exact frustration thousands of Indian candidates face daily: confusing notifications, fake date rumors, hidden PDF links, and spam-ridden websites.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              I founded RajDailyTools with a singular mission: to make government recruitment and exam preparation genuinely accessible, accurate, and completely free. We do not place login walls between you and the official syllabus or admit card links. Every single guide is cross-verified directly against official government gazettes.
            </p>
            <div className="pt-2">
              <a
                href="https://t.me/Educator4ll"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Join Raj Bhai on Telegram (@Educator4ll)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Promise */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display mb-2">Our Mission</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To provide every Indian student with reliable, timely, and easy-to-understand recruitment updates, hall tickets, response sheets, and qualifying cut-offs.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display mb-2">Our Vision</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To become India's most trusted, non-commercial educational guidance portal empowering youth from rural and urban centers alike to achieve their career aspirations.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display mb-2">Our Promise</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            100% authentic citations, direct official PDF links, zero fake clickbait timers, and free accessibility for every single candidate.
          </p>
        </div>
      </div>
    </div>
  );
};
