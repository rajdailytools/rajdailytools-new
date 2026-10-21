import React from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { getPageUrl } from '../utils/urlHelper';
import { AlertTriangle, ShieldAlert, CheckCircle2, ExternalLink, HelpCircle, FileText } from 'lucide-react';

interface DisclaimerPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onNavigate, depth = 0 }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Disclaimer' }]} onNavigate={onNavigate} depth={depth} />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Official Advisory &amp; Legal Disclaimers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
            Disclaimer
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: October 2026 • RajDailyTools (rajdailytools.in)
          </p>
        </div>

        {/* Primary Non-Government Affiliation Banner */}
        <div className="p-5 bg-amber-50/70 border-2 border-amber-300 rounded-2xl text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Important Notice: RajDailyTools is NOT an Official Government Website</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
            RajDailyTools (accessible at <code>https://rajdailytools.in</code>) is an <strong>independent educational, career guidance, and informational resource</strong>. We are <strong>NOT affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with any government department, ministry, recruitment board, public service commission (such as UPSC, SSC, MPESB, BTSC, UPSSSC, RPSC, UKPSC, BPSC), railway recruitment board (RRB/RRC), banking agency (IBPS, SBI), or statutory examination authority.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">1. Information for Educational Purposes Only</h2>
            <p>
              The content published on RajDailyTools—including recruitment notices, exam schedules, vacancy breakdowns, eligibility requirements, age limit criteria, application fee structures, admit card alerts, answer keys, results, and cut-off marks—is compiled solely for the convenience, preliminary awareness, and education of competitive exam aspirants across India.
            </p>
            <p>
              While our editorial staff makes earnest efforts to verify notifications directly against official government gazettes, press releases, and authorized commission portals before publishing, <strong>information in competitive exams is dynamic and subject to frequent amendments</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">2. Mandatory Official Verification Requirement</h2>
            <p>
              Users, aspirants, and candidates are strictly advised and required to <strong>verify every recruitment detail, eligibility criteria, crucial cut-off date, caste/reservation certificates, educational qualification, and application deadline with the official notification released by the respective conducting authority</strong> before submitting online applications or remitting examination fees.
            </p>
            <p>
              We provide direct official hyperlinks to the primary portals and official PDFs on every exam guide. In the event of any conflict or discrepancy between information presented on RajDailyTools and the official recruitment advertisement, the official gazette shall always prevail.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">3. Candidate Responsibility</h2>
            <p>
              Candidates are solely responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Verifying their own educational eligibility, age limit, nationality, and category certificates prior to applying.</li>
              <li>Monitoring and meeting official application deadlines, fee payment cut-off times, and document upload requirements.</li>
              <li>Ensuring the authenticity and validity of any fee payments submitted to external official government portals.</li>
              <li>Reading official brochures, corrigenda, and notifications released by the respective examination authority.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">4. No Guarantee of Employment, Selection, or Exam Success</h2>
            <p>
              RajDailyTools makes no warranty, express or implied, regarding job placements, selection in any recruitment drive, passing examination marks, or career outcomes. Utilizing our guides, practice tests, or utility calculators does not guarantee success or selection by any commission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">5. Mock Tests, Calculators &amp; Cut-Off Predictions Disclaimer</h2>
            <p>
              All online calculators (such as the Age Cut-Off Calculator, In-Hand Salary Calculator, Photo &amp; Signature Resizers, and CBT Score Evaluator) and mock tests provided on RajDailyTools are created strictly for practice, self-assessment, and convenience:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Cut-Off Marks:</strong> Any &ldquo;Expected Cut-Off&rdquo; figures or trend analyses represent historical estimates and exam analysis, not official qualifying scores. Official qualifying cut-offs are solely determined by the respective examination board.
              </li>
              <li>
                <strong>Calculators:</strong> Mathematical outputs produced by our client-side calculators should be treated as indicative aids. Candidates must verify precise calculations against official formula guidelines.
              </li>
              <li>
                <strong>Mock Tests:</strong> Practice questions and simulated CBT mock tests are illustrative educational materials designed to build familiarity with test formats, not leaked or official test papers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">6. External Hyperlinks &amp; Third-Party Portals</h2>
            <p>
              Our guides contain direct hyperlinks to external websites operated by central and state governments, statutory examination boards, and third-party services. These links are provided solely for reference. RajDailyTools does not control, endorse, or assume responsibility for the availability, server uptime, accuracy, security, or contents of any third-party portal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">7. Advertising &amp; Monetization Disclosure</h2>
            <p>
              RajDailyTools may display advertisements through third-party advertising networks, such as Google AdSense, to support site maintenance, server hosting, and research costs. These third-party networks may use cookies to serve ads based on prior visits. Advertisements do not constitute an endorsement of any product or service by RajDailyTools.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">8. Reasonable Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, RajDailyTools, its founder, contributors, and team members shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, this website or reliance on any material, date, link, or calculator output contained herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">9. Reporting Errors &amp; Corrections</h2>
            <p>
              If you identify any discrepancy, expired link, or typographical error, please inform us immediately via email at <a href="mailto:rajdailytools@gmail.com" className="text-blue-600 font-semibold hover:underline">rajdailytools@gmail.com</a> or through our <a href={getPageUrl('contact-us', undefined, depth)} className="text-blue-600 font-semibold hover:underline">Contact Us page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
