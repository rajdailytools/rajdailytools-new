import React from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { getPageUrl } from '../utils/urlHelper';
import { Shield, Lock, Eye, CheckCircle2, Cookie, ExternalLink, Mail, AlertCircle } from 'lucide-react';

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy &amp; Data Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Effective Date: October 2026 • RajDailyTools (rajdailytools.in)
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">1. Introduction &amp; Scope</h2>
            <p>
              Welcome to <strong>RajDailyTools</strong> (accessible at <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">https://rajdailytools.in</code>). We respect the privacy of every candidate, student, and visitor who uses our portal to check government exam notifications, cut-off marks, syllabus breakdowns, answer keys, admit card alerts, and client-side calculators.
            </p>
            <p>
              This Privacy Policy details the types of information we collect or process, how we utilize and safeguard it, and your choices regarding personal information. By using our website, you consent to the practices described in this document.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">2. Information We Collect</h2>
            <p>We classify information into voluntarily provided data and automatically gathered technical logs:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Voluntarily Provided Information:</strong> When you communicate with our editorial team via our Contact form or email (<code className="text-slate-800">rajdailytools@gmail.com</code>), you may submit your name, email address, subject, and message content. This information is utilized solely to address your query, correction, or support request.
              </li>
              <li>
                <strong>Technical Information &amp; Server Logs:</strong> Like standard web platforms, our hosting servers automatically record routine non-personal technical logs including Internet Protocol (IP) addresses, browser type, operating system, referring/exit URLs, requested pages, and date/time stamps. This aggregate data helps us monitor uptime, prevent malicious denial-of-service attempts, and optimize mobile responsiveness.
              </li>
              <li>
                <strong>No Mandatory Account Registration:</strong> RajDailyTools does not require you to create an account, register a password, or submit payment card information to browse any public exam notification, syllabus overview, or cut-off table.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">3. 100% Client-Side Calculators &amp; Zero Remote Photo Storage</h2>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Your Photographs &amp; Private Inputs Never Leave Your Device</span>
              </div>
              <p className="text-xs leading-relaxed text-emerald-900">
                All interactive candidate utilities on RajDailyTools—including the <strong>Photo Resizer, Signature Resizer, Age Calculator on Cut-Off Dates, Eligibility Checker, and CBT Marks Calculator</strong>—operate strictly inside your web browser via client-side JavaScript.
              </p>
              <p className="text-xs leading-relaxed text-emerald-900">
                Uploaded images and dates of birth are processed locally in your device's memory and are <strong>never uploaded, transmitted, stored, or processed on any remote server or database</strong>. Closing or refreshing your browser immediately clears all tool inputs.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">4. Cookies, Local Storage &amp; Web Beacons</h2>
            <p>
              RajDailyTools uses cookies and HTML5 local storage for functional, non-intrusive purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Essential Local Storage:</strong> We use browser localStorage solely to remember your cookie consent choice (<code className="text-slate-800">rajdailytools_cookie_consent</code>) and any in-progress mock test responses during an active practice session so you do not lose progress if the page reloads.
              </li>
              <li>
                <strong>Analytics &amp; Performance Cookies:</strong> We may use privacy-respecting analytics tools to evaluate aggregate visitor trends, popular job categories, and mobile bandwidth performance.
              </li>
              <li>
                <strong>Browser Cookie Controls:</strong> You can manage, disable, or delete cookies at any time via your browser settings (Chrome, Firefox, Safari, Edge). Please note that disabling essential cookies may impact specific client-side features like mock test saving.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">5. Third-Party Advertising Partners &amp; Google AdSense</h2>
            <p>
              To keep our exam guides, preparation resources, and candidate calculators 100% free for all students, RajDailyTools may display advertisements served by third-party advertising partners, including <strong>Google AdSense</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites across the Internet.
              </li>
              <li>
                Google's use of advertising cookies (including the DoubleClick DART cookie) enables it and its partners to serve personalized and non-personalized advertisements based on visits to RajDailyTools and other sites.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting Google's official Ads Settings at{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>adssettings.google.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>.
              </li>
              <li>
                Alternatively, you can opt out of a third-party vendor's use of cookies for interest-based advertising by visiting{' '}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>aboutads.info</span>
                  <ExternalLink className="w-3 h-3" />
                </a>.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">6. Third-Party Links to Official Government Portals</h2>
            <p>
              RajDailyTools frequently provides direct outbound hyperlinks to authoritative government portals (such as <code>ssc.gov.in</code>, <code>upsc.gov.in</code>, <code>rrbcdg.gov.in</code>, <code>esb.mp.gov.in</code>, and state public service commissions) so aspirants can verify official advertisements and submit job applications.
            </p>
            <p>
              We have no control over the privacy practices, cookie configurations, or terms of these external sites. When following external hyperlinks, we encourage candidates to review the privacy statements of those respective authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">7. Data Retention &amp; Security Measures</h2>
            <p>
              Any contact inquiries received via email are retained only as long as necessary to address the correspondence, resolve reported date corrections, or comply with legal requirements. We employ reasonable technical safeguards including HTTPS SSL/TLS encryption, secure DNS, and access controls to protect information transmitted across our portal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">8. Children's Privacy (Under 13 / 18)</h2>
            <p>
              RajDailyTools is designed for general audiences preparing for higher education entrance exams and adult employment recruitment. We do not knowingly solicit, collect, or store personal identifiable information from children under the age of 13. If a parent or guardian believes their child has submitted personal details through our contact channels, please contact us immediately for prompt deletion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">9. Your Privacy Rights</h2>
            <p>
              Under applicable Indian Information Technology laws and global privacy principles, you have the right to request access to any personal data you have voluntarily submitted to us, request its correction or deletion, or ask questions regarding our privacy practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-display">10. Policy Updates &amp; Contact Information</h2>
            <p>
              We may update this Privacy Policy periodically to reflect technological adjustments, new candidate tools, or updated advertising standards. Any revisions will be published on this page with an updated Effective Date.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1.5">
              <strong className="block text-slate-900">Privacy Officer / Editorial Contact:</strong>
              <p>Email: <a href="mailto:rajdailytools@gmail.com" className="text-blue-600 font-semibold hover:underline">rajdailytools@gmail.com</a></p>
              <p>Website: <a href="https://rajdailytools.in" className="text-blue-600 font-semibold hover:underline">https://rajdailytools.in</a></p>
              <p>Operating Region: India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
