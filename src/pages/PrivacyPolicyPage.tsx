import React from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} onNavigate={onNavigate} depth={depth} />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Transparency &amp; Trust</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 2026 • RajDailyTools Educational Resource
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">1. Introduction</h2>
            <p>
              Welcome to <strong>RajDailyTools</strong> (accessible at rajdailytools.com). We value your privacy and are committed to protecting any information you share while using our exam preparation guides, recruitment notifications, syllabus overviews, and online calculators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">2. Information We Collect</h2>
            <p>
              RajDailyTools does not require mandatory account registration to access our government exam notifications, cut-off tables, or admit card guidance. We may collect non-personal analytics information such as browser type, referring URLs, device type, and visit timestamps to enhance site performance and accessibility.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">3. Client-Side Calculators &amp; Data Privacy</h2>
            <p>
              All interactive tools on our portal, including the Age Calculator, Photo Resizer, Eligibility Checker, and Score Calculator, operate 100% client-side inside your browser. Your dates of birth, uploaded photographs, and score inputs are never uploaded to or stored on any remote server.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">4. Third-Party Links &amp; Official Citations</h2>
            <p>
              Our guides provide direct outbound hyperlinks to official government recruitment portals (e.g., ssc.gov.in, rrbcdg.gov.in, upsc.gov.in). We are not responsible for the privacy policies or content of external websites. Aspirants are advised to review the respective privacy terms of external authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">5. Contact Us</h2>
            <p>
              If you have any questions or feedback regarding this privacy statement, please reach out through our official <a href="./contact.html" className="text-blue-600 font-semibold hover:underline">Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
