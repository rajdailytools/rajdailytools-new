import React from 'react';
import { Lock, Shield, CheckCircle, Sparkles } from 'lucide-react';

interface UnlockMockModalProps {
  examName: string;
  onClose: () => void;
}

export const UnlockMockModal: React.FC<UnlockMockModalProps> = ({ examName, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="w-14 h-14 rounded-3xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200 shadow-xs">
            <Lock className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
            Premium Exam Series
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            🔒 Unlock 25 More Mocks — ₹7
          </h3>
          <p className="text-xs text-slate-500">
            For <strong>{examName}</strong> • Full Access to Mocks 04 through 28
          </p>
        </div>

        {/* Pricing & Terms */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 p-5 rounded-3xl border border-blue-100 text-center space-y-1">
          <div className="text-xs text-slate-500 font-medium">One-Time Lifetime Exam Fee</div>
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="text-4xl font-black text-blue-900 font-display">₹7</span>
            <span className="text-xs font-bold text-slate-500">ONE-TIME ONLY</span>
          </div>
          <p className="text-[11px] text-blue-700 font-medium pt-1">
            No recurring subscription. No hidden renewal charges.
          </p>
        </div>

        {/* Features Included */}
        <div className="space-y-2.5 text-xs text-slate-700">
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>25 Full-Length CBT Practice Tests modeled on 2026 syllabus</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Detailed step-by-step Hindi & English bilingual solutions</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Weakness Analysis Engine and customized Retest generation</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Mistakes revision notebook and score progression tracker</span>
          </div>
        </div>

        {/* Transparent Notice about Payment Gateway */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Payment Gateway Integration Pending</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Direct UPI & Net-Banking gateway is currently being integrated into the cloud payment backend. No funds are charged at this moment. You can enjoy <strong>Free Mocks 01, 02, and 03</strong> immediately with complete CBT features!
          </p>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={() => {
              alert(
                'Direct UPI / Net-Banking payment gateway integration is currently in setup mode. Locked mocks will be automatically unlockable upon cloud deployment. Please practice Free Mocks 01, 02 & 03 in the meantime!'
              );
            }}
            className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span>Unlock for ₹7</span>
          </button>
        </div>
      </div>
    </div>
  );
};
