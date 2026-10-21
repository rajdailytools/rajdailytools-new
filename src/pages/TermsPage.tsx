import React from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { getPageUrl } from '../utils/urlHelper';
import { FileText, Shield, AlertCircle, CheckCircle2, Lock, Scale } from 'lucide-react';

interface TermsPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Terms & Conditions' }]} onNavigate={onNavigate} depth={depth} />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Scale className="w-3.5 h-3.5" />
            <span>Website Usage Terms &amp; Policies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: October 2026 • RajDailyTools (rajdailytools.in)
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing <strong>RajDailyTools</strong> (accessible at <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">https://rajdailytools.in</code>), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, together with our{' '}
              <a href={getPageUrl('privacy-policy', undefined, depth)} className="text-blue-600 font-semibold hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href={getPageUrl('disclaimer', undefined, depth)} className="text-blue-600 font-semibold hover:underline">
                Disclaimer
              </a>. If you disagree with any part of these terms, you must refrain from using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">2. Permitted Use &amp; Educational Purpose</h2>
            <p>
              RajDailyTools is provided solely for personal, non-commercial, educational, and informational purposes. You are granted a limited, revocable, non-exclusive license to view recruitment summaries, download official links, utilize browser-based calculators, and take self-evaluation mock tests in accordance with these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">3. Prohibited Activities &amp; Misuse</h2>
            <p>While using RajDailyTools, you agree NOT to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Deploy automated bots, spiders, scrapers, or scripts to extract content, articles, or data without express written authorization.</li>
              <li>Attempt to disrupt, overload, or compromise the integrity, security, or bandwidth of our web servers or hosting infrastructure.</li>
              <li>Impersonate any recruitment authority, staff member, or other user.</li>
              <li>Reproduce, redistribute, republish, or syndicate our original editorial articles, calculations, or layout designs on other commercial websites without prior written permission.</li>
              <li>Inject malicious code, viruses, or harmful scripts via any contact or interactive tool form.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">4. User Responsibilities &amp; Verification Requirement</h2>
            <p>
              Candidates are solely responsible for independently confirming all recruitment guidelines, crucial cut-off dates, category reservation eligibility, age calculations, and fee requirements directly with the conducting authority's official notification before submitting applications or financial payments. RajDailyTools does not collect recruitment fees on behalf of any commission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">5. Intellectual Property &amp; Content Ownership</h2>
            <p>
              The original text, branding, logos, graphics, user interface design, website source code, and custom calculator algorithms of RajDailyTools are protected under copyright, trademark, and other applicable intellectual property laws.
            </p>
            <p>
              Official government gazettes, press releases, circulars, and third-party trademarks/logos (e.g., SSC, UPSC, RRB) referenced on our portal remain the property of their respective government departments and are cited under fair dealing for educational awareness.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">6. Mock Tests &amp; Practice Materials</h2>
            <p>
              Mock tests, practice question papers, and scoring modules available on RajDailyTools are illustrative self-assessment aids. Scoring on mock tests does not guarantee identical results on actual examinations conducted by recruitment boards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">7. External Links &amp; Third-Party Portals</h2>
            <p>
              Our website contains links to external government websites (e.g., <code>ssc.gov.in</code>, <code>upsc.gov.in</code>). We have no control over the content, uptime, or privacy policies of external sites. Inclusion of external links does not imply endorsement by RajDailyTools.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">8. Advertising Disclosures</h2>
            <p>
              RajDailyTools may display advertisements through third-party advertising partners, including Google AdSense. Advertising content is clearly distinguishable from editorial content. We do not endorse any product or service advertised through third-party ad networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">9. Limitation of Liability</h2>
            <p>
              In no event shall RajDailyTools, its founder, or contributors be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of, or inability to use, this website, or reliance on any date, syllabus guide, or calculator output provided herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">10. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the competent courts of <strong>New Delhi / Madhya Pradesh, India</strong> [business jurisdiction placeholder].
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">11. Modifications &amp; Contact</h2>
            <p>
              We reserve the right to revise these Terms at any time without prior notice. Continued use of the website following any changes signifies your acceptance of the updated Terms.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1">
              <strong className="block text-slate-900">Questions or Legal Inquiries:</strong>
              <p>Email: <a href="mailto:rajdailytools@gmail.com" className="text-blue-600 font-semibold hover:underline">rajdailytools@gmail.com</a></p>
              <p>Postal / Operating Jurisdiction: India [Official legal inquiries can be addressed via our verified email channel]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
