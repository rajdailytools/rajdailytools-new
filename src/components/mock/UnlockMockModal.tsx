import React, { useState } from 'react';
import { Lock, Shield, CheckCircle, AlertCircle, ArrowRight, Zap, RefreshCw } from 'lucide-react';

interface UnlockMockModalProps {
  examName: string;
  onClose: () => void;
}

export const UnlockMockModal: React.FC<UnlockMockModalProps> = ({ examName, onClose }) => {
  const [showArchitectureInfo, setShowArchitectureInfo] = useState(false);
  const [paymentState, setPaymentState] = useState<'idle' | 'pending'>('idle');

  const handleUnlockClick = () => {
    setPaymentState('pending');
  };

  return (
    <div id="unlock-mock-modal" className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-6 animate-in fade-in zoom-in duration-200">
        <button
          type="button"
          id="btn-close-unlock-modal"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm transition-colors"
          aria-label="Close"
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
            Unlock 50 Full Mocks
          </h3>
          <p className="text-xs text-slate-500">
            For <strong>{examName}</strong> • Full Access to Mocks 04 through 53
          </p>
        </div>

        {/* Pricing & Terms */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50/60 to-purple-50/30 p-5 rounded-3xl border border-blue-100 text-center space-y-1">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">One-Time Lifetime Exam Fee</div>
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="text-4xl sm:text-5xl font-black text-blue-900 font-display">₹7</span>
            <span className="text-xs font-bold text-slate-500 uppercase">ONE-TIME PAYMENT</span>
          </div>
          <p className="text-xs text-blue-800 font-semibold pt-1">
            No Subscription. No recurring charges.
          </p>
        </div>

        {/* Features Included */}
        <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>50 Full-Length CBT Practice Tests</strong> matching the latest 2026 exam pattern</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Detailed step-by-step bilingual solutions</strong> (Hindi & English) with shortcuts</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Weakness Analysis Engine</strong> with customized retests for weak topics</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Exam-isolated "My Mistakes" notebook</strong> & Progress Tracker</span>
          </div>
        </div>

        {/* Integration Status Box */}
        {paymentState === 'pending' ? (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 space-y-2 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Payment Gateway Integration Pending</span>
            </div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Production UPI/Net-Banking gateway (Razorpay/Cashfree) webhook connection is pending. To protect candidate trust, mock tests are never falsely marked unlocked from frontend variables without verified server-side receipt.
            </p>
            <p className="text-[11px] text-amber-700 font-medium">
              You can practice <strong>Free Mocks 01, 02, and 03</strong> right now with full CBT timer, solutions, and analytics!
            </p>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Payment Gateway Integration Pending</span>
              </div>
              <button
                type="button"
                onClick={() => setShowArchitectureInfo(!showArchitectureInfo)}
                className="text-[10px] text-blue-600 hover:underline font-semibold"
              >
                {showArchitectureInfo ? 'Hide specs' : 'View flow'}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Production gateway is in configuration phase. No money is deducted during this phase. <strong>Free Mocks 01, 02, and 03</strong> are 100% active and free to practice.
            </p>

            {showArchitectureInfo && (
              <div className="pt-2 text-[10px] text-slate-600 border-t border-slate-200 space-y-1 font-mono">
                <div className="font-bold text-slate-700">Planned Cloud Flow:</div>
                <div className="flex items-center gap-1 text-slate-500">
                  <span>Gateway</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Server Webhook</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>DB Purchase</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Entitlement Granted</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <div>
          <button
            type="button"
            id="btn-unlock-mock-pay"
            onClick={handleUnlockClick}
            className="w-full py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span>Unlock for ₹7</span>
          </button>
        </div>
      </div>
    </div>
  );
};
