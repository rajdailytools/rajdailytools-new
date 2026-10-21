import React from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { getPageUrl } from '../utils/urlHelper';
import { Copyright, ShieldCheck, FileText, Mail, AlertCircle, CheckCircle2, Scale } from 'lucide-react';

interface CopyrightPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const CopyrightPage: React.FC<CopyrightPageProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Copyright Policy' }]} onNavigate={onNavigate} depth={depth} />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Copyright className="w-3.5 h-3.5" />
            <span>Intellectual Property &amp; Fair Use Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
            Copyright Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: October 2026 • RajDailyTools (rajdailytools.in)
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">1. Ownership of Original Content</h2>
            <p>
              All original content created and published on <strong>RajDailyTools</strong>—including our custom editorial explanations, website design, UI components, custom styling, structured date tables, and interactive calculator algorithms (such as the Age Cut-Off Calculator, Photo &amp; Signature Resizers, Eligibility Checkers, and CBT Score Simulators)—is the exclusive intellectual property of RajDailyTools and protected under Indian and international copyright laws.
            </p>
            <p>
              Unauthorized copying, bulk scraping, commercial redistribution, or reproduction of our original guides, calculator algorithms, or branding elements without explicit prior written authorization is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">2. Official Government Notices &amp; Third-Party Materials</h2>
            <p>
              RajDailyTools frequently cites, summarizes, and provides direct links to public government notices, gazettes, circulars, syllabi, press releases, and recruitment advertisements issued by central and state authorities (such as UPSC, SSC, MPESB, BTSC, UPSSSC, RPSC, RRBs, and IBPS):
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Public Information Doctrine:</strong> Government notifications, recruitment circulars, and official syllabi published in the public domain are referenced on our portal under the principles of fair dealing and public interest reporting for the educational guidance of exam aspirants.
              </li>
              <li>
                <strong>Third-Party Trademarks &amp; Logos:</strong> All official logos, insignia, seals, and trademarks of government departments and recruitment boards referenced on this site belong exclusively to their respective statutory owners. Citing them on RajDailyTools is purely descriptive and does not imply official government affiliation, sponsorship, or endorsement.
              </li>
              <li>
                <strong>No Exclusive Rights Claimed:</strong> RajDailyTools does not claim copyright ownership over any official government notification, gazette rulebook, or statutory circular.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">3. Permitted Personal &amp; Educational Use</h2>
            <p>
              Students, candidates, and educational mentors are warmly permitted to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>View, read, and share links to our exam guides and articles on social media, Telegram groups, and study channels with proper attribution.</li>
              <li>Use our online tools and calculators for personal examination preparation and form-filling verification.</li>
              <li>Quote short snippets (up to 100 words) from our guides in study notes or educational forums, provided a live hyperlink to the original source page on <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">https://rajdailytools.in</code> is prominently cited.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">4. Copyright Grievance &amp; Takedown Procedure</h2>
            <p>
              RajDailyTools respects the intellectual property rights of all copyright holders. If you believe that any material on our website infringes upon your copyright, you may submit a formal notification to our designated Grievance / Copyright Officer.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs">
              <strong className="block text-slate-900 font-display">Required Details for a Valid Copyright Complaint:</strong>
              <ol className="list-decimal pl-5 space-y-1 text-slate-700">
                <li>Specific URL(s) on RajDailyTools where the allegedly infringing material is located.</li>
                <li>Clear description of the copyrighted work claimed to have been infringed, along with proof of copyright ownership or authorized agency representation.</li>
                <li>Full contact details: Full Legal Name, Organization (if applicable), Physical Address, Telephone Number, and Email Address.</li>
                <li>A statement affirming your good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A declaration made under penalty of perjury that the information in your notification is accurate and that you are the copyright owner or authorized to act on behalf of the owner.</li>
                <li>Physical or verifiable electronic signature of the complainant.</li>
              </ol>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">5. Investigation &amp; Resolution Process</h2>
            <p>
              Upon receiving a complete and verifiable notice of claimed infringement:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Our team will acknowledge receipt of the grievance within <strong>48 business hours</strong>.</li>
              <li>We will review the claim against source materials and fair use principles. If infringement is established, we will promptly disable access to or remove the disputed content.</li>
              <li>We will notify the author or editor who posted the material and provide an opportunity for a counter-notice where permissible under Indian law (Information Technology Act, 2000 and Indian Copyright Act, 1957).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">6. Designated Copyright &amp; Grievance Contact</h2>
            <p>
              All copyright-related notices and inquiries should be sent directly to our designated contact:
            </p>
            <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-2xl text-xs space-y-1.5">
              <strong className="block text-slate-900 font-display">Designated Copyright Officer:</strong>
              <p>Email: <a href="mailto:rajdailytools@gmail.com" className="text-blue-600 font-semibold hover:underline">rajdailytools@gmail.com</a></p>
              <p>Subject Line: <em>&ldquo;Attention: Copyright Infringement Notice – [Exam / Guide Name]&rdquo;</em></p>
              <p>Website: <a href="https://rajdailytools.in" className="text-blue-600 font-semibold hover:underline">https://rajdailytools.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
