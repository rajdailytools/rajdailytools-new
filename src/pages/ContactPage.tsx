import React, { useState } from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { Send, Mail, MapPin, CheckCircle, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, depth = 0 }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setSubmitted(true);
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
          Have an inquiry about an exam guide, need to report a broken official link, or want to suggest a new recruitment notification? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-slate-900 font-display">Direct Channels</h3>

            <div className="flex items-start gap-3 text-xs">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-800">Telegram Channel</strong>
                <a
                  href="https://t.me/Educator4ll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  t.me/Educator4ll
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-800">Support &amp; Feedback Email</strong>
                <span className="text-slate-600 font-semibold">contact@rajdailytools.in</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-800">Location</strong>
                <span className="text-slate-600">Madhya Pradesh / Delhi NCR, India</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white rounded-3xl p-6 shadow-md">
            <h4 className="font-bold text-base font-display mb-1">Suggest a Recruitment Guide</h4>
            <p className="text-xs text-blue-100 leading-relaxed mb-3">
              If your state commission or department just released a notification not yet listed, drop us a line with the PDF link!
            </p>
            <span className="inline-block text-[11px] font-bold bg-white/20 px-3 py-1 rounded-full">
              ⚡ Typical response within 2 hours
            </span>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-3xl">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Message Received!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, {name}. Raj Bhai and our editorial team will review your query and update the portal accordingly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setSubject('');
                  setMessage('');
                }}
                className="mt-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-bold text-lg text-slate-900 font-display mb-2">Send Us a Message</h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 outline-none focus:bg-white focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="e.g. aspirant@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 outline-none focus:bg-white focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Topic / Exam Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SSC CGL 2026 Notification update / Broken link"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 outline-none focus:bg-white focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your suggestions, questions, or notification details here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 outline-none focus:bg-white focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message to Editorial Team</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
