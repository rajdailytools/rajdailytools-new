import React, { useState } from 'react';
import { Lock, Shield, CheckCircle, AlertCircle, ArrowRight, Zap, RefreshCw } from 'lucide-react';

interface UnlockMockModalProps {
  examName: string;
  onClose: () => void;
}

export const UnlockMockModal: React.FC<UnlockMockModalProps> = ({ examName, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'cards' | 'netbanking'>('upi');
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
            🔒 Premium Mock Series
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            Unlock 50 More Mocks
          </h3>
          <p className="text-xs text-slate-500">
            For <strong>{examName}</strong> • Full Access to Mocks 04 through 53
          </p>
        </div>

        {/* Pricing & Terms */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50/60 to-purple-50/30 p-5 rounded-3xl border border-blue-100 text-center space-y-1">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Price</div>
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="text-4xl sm:text-5xl font-black text-blue-900 font-display">₹7</span>
            <span className="text-xs font-bold text-slate-500 uppercase">ONE-TIME PER EXAM</span>
          </div>
          <p className="text-xs text-blue-800 font-semibold pt-1">
            No Subscription. No monthly plan. No yearly plan.
          </p>
        </div>

        {/* Payment Methods Selection */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Payment Methods:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <button
              type="button"
              onClick={() => setSelectedMethod('upi')}
              className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-1 transition-all ${
                selectedMethod === 'upi'
                  ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-500 text-blue-900'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                <span>UPI</span>
                {selectedMethod === 'upi' && <CheckCircle className="w-3.5 h-3.5 text-blue-600" />}
              </div>
              <span className="text-[10px] text-slate-500">GPay / PhonePe / Paytm / BHIM</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMethod('cards')}
              className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-1 transition-all ${
                selectedMethod === 'cards'
                  ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-500 text-blue-900'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                <span>Cards</span>
                {selectedMethod === 'cards' && <CheckCircle className="w-3.5 h-3.5 text-blue-600" />}
              </div>
              <span className="text-[10px] text-slate-500">Visa / Mastercard / RuPay</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMethod('netbanking')}
              className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-1 transition-all ${
                selectedMethod === 'netbanking'
                  ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-500 text-blue-900'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                <span>Net Banking</span>
                {selectedMethod === 'netbanking' && <CheckCircle className="w-3.5 h-3.5 text-blue-600" />}
              </div>
              <span className="text-[10px] text-slate-500">All Major Indian Banks</span>
            </button>
          </div>
        </div>

        {/* Features Included */}
        <div className="space-y-2 text-xs text-slate-700 bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>50 Full-Length CBT Practice Tests</strong> matching 2026 exam pattern</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Detailed bilingual step-by-step solutions</strong> with shortcuts & reasoning</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Weakness Analysis Engine</strong> & speed optimization tracking</span>
          </div>
        </div>

        {/* Honest Architecture Message when Clicked */}
        {paymentState === 'pending' ? (
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-xs text-amber-900 space-y-2 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Payment Gateway Integration Notice</span>
            </div>
            <p className="text-xs font-semibold text-amber-900 leading-relaxed">
              Payment gateway integration pending live merchant credentials. No amount has been deducted.
            </p>
            <p className="text-[11px] text-amber-800">
              Mocks 01, 02, and 03 are completely free and 100% functional with timer, palette, solutions, and analytics.
            </p>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-600 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-[11px] text-slate-600">
                Safe Payment Integration Architecture • Direct 1-Click ₹7 Unlock
              </span>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div>
          <button
            type="button"
            id="btn-unlock-mock-pay"
            onClick={handleUnlockClick}
            className="w-full py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span>Pay ₹7</span>
          </button>
        </div>
      </div>
    </div>
  );
};
