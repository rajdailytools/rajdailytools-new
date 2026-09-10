import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title }) => {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://rajdailytools.in';

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`Check out ${title} on RajDailyTools: ${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const shareTelegram = () => {
    const text = encodeURIComponent(`${title} - RajDailyTools`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
        <Share2 className="w-4 h-4 text-blue-600" />
        <span>Share With Friends &amp; Groups:</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {/* WhatsApp */}
        <button
          onClick={shareWhatsApp}
          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          title="Share to WhatsApp"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </button>

        {/* Telegram */}
        <button
          onClick={shareTelegram}
          className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          title="Share to Telegram"
        >
          <span>✈️</span>
          <span>Telegram</span>
        </button>

        {/* Facebook */}
        <button
          onClick={shareFacebook}
          className="px-3 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          title="Share to Facebook"
        >
          <span>📘</span>
          <span>Facebook</span>
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer border ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`}
          title="Copy direct link"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
};
