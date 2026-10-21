import React, { useState } from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  ShieldCheck,
  MessageSquare,
  FileQuestion
} from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, depth = 0 }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('correction');
  const [message, setMessage] = useState('');
  const [mathAnswer, setMathAnswer] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam honeypot
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Math challenge for anti-spam: 7 + 5 = 12
  const expectedAnswer = '12';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!message.trim() || message.trim().length < 15) {
      errs.message = 'Please provide a message with at least 15 characters.';
    }
    if (mathAnswer.trim() !== expectedAnswer) {
      errs.math = 'Incorrect math verification answer. Please solve 7 + 5.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If honeypot is filled, silent discard (bot detected)
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const randomId = 'RDT-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomId);
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setMathAnswer('');
    setSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Contact Us' }]} onNavigate={onNavigate} depth={depth} />

      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
          Contact RajDailyTools
        </h1>
        <p className="text-sm text-slate-600">
          Have an inquiry about an exam guide, need to report an official date revision or broken link, or have a suggestion? Our editorial team is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-slate-900 font-display">Direct Channels</h3>

            <div className="flex items-start gap-3 text-xs">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-800">Telegram Community</strong>
                <a
                  href="https://t.me/Educator4ll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  t.me/Educator4ll
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">Instant alerts for daily exam notifications</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-800">Official Editorial Email</strong>
                <a
                  href="mailto:rajdailytools@gmail.com"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  rajdailytools@gmail.com
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">Primary channel for correction &amp; business notices</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-800">Operating Hours</strong>
                <span className="text-slate-600">Monday – Saturday: 09:00 AM – 07:00 PM IST</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Critical exam date corrections reviewed 7 days a week</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white rounded-3xl p-6 shadow-md space-y-2">
            <h4 className="font-bold text-base font-display flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-300" />
              <span>Correction &amp; Inquiry Guidelines</span>
            </h4>
            <p className="text-xs text-blue-100 leading-relaxed">
              When reporting a revised exam date or corrigendum, please include the relevant page URL on RajDailyTools and the official recruitment board notice link or PDF.
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-3xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Message Received Successfully!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. Your inquiry has been registered under Reference ID{' '}
                <strong className="text-blue-600 font-mono">{ticketId}</strong>. Our editorial team will review your message and reply to <strong>{email}</strong> if required.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <h3 className="font-bold text-base text-slate-900 font-display flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Submit Your Inquiry or Correction</span>
              </h3>

              {/* Honeypot field (hidden from genuine users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">Leave this field blank</label>
                <input
                  id="website_hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact_name" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact_name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full text-xs p-3 rounded-xl border ${
                      errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact_email" className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact_email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full text-xs p-3 rounded-xl border ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact_category" className="block text-xs font-bold text-slate-700 mb-1">
                    Inquiry Category
                  </label>
                  <select
                    id="contact_category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-none bg-white transition-colors"
                  >
                    <option value="correction">Date Correction or Corrigendum</option>
                    <option value="broken_link">Report Broken Official Link</option>
                    <option value="suggestion">Suggest a New Recruitment Guide</option>
                    <option value="technical">Technical Issue or Calculator Bug</option>
                    <option value="business">Business, Partnership or General</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact_subject" className="block text-xs font-bold text-slate-700 mb-1">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact_subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Date extension in BTSC 28/2026"
                    className={`w-full text-xs p-3 rounded-xl border ${
                      errors.subject ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact_message" className="block text-xs font-bold text-slate-700 mb-1">
                  Message Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact_message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry, report, or suggestion with any official links..."
                  className={`w-full text-xs p-3 rounded-xl border ${
                    errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                  } focus:border-blue-500 focus:outline-none transition-colors`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Anti-Spam Security Question */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                <label htmlFor="contact_math" className="block text-xs font-bold text-slate-800 mb-1">
                  Human Verification: What is 7 + 5? <span className="text-rose-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="contact_math"
                    type="text"
                    value={mathAnswer}
                    onChange={(e) => setMathAnswer(e.target.value)}
                    placeholder="Enter answer (e.g. 12)"
                    className={`max-w-[160px] text-xs p-2.5 rounded-xl border ${
                      errors.math ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white'
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                  />
                  <span className="text-[11px] text-slate-500">Helps protect our portal from automated spam.</span>
                </div>
                {errors.math && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.math}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to RajDailyTools</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                By submitting this form, you acknowledge that RajDailyTools processes your name and email solely to address your query.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
