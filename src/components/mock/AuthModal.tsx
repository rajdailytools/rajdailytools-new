import React, { useState } from 'react';
import { User, Mail, Shield, Sparkles, CheckCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: { name: string; email: string } | null;
  onLoginSuccess: (user: { name: string; email: string }) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onLogout
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm"
        >
          ✕
        </button>

        {currentUser ? (
          <div className="text-center space-y-4 pt-2">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto text-xl font-black">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 font-display">{currentUser.name}</h3>
              <p className="text-xs text-slate-500">{currentUser.email}</p>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100 text-xs text-left space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Local Candidate Session Active</span>
              </div>
              <p className="text-[11px] text-emerald-700">
                All test scores, attempts, mistakes, and progress data are persistently preserved in your browser.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-xs transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-y-5 pt-2">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 font-display">
                Candidate Account
              </h3>
              <p className="text-xs text-slate-500">
                Track attempts, sync mistake notebooks & access mock analytics
              </p>
            </div>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={() => {
                onLoginSuccess({
                  name: 'Candidate User',
                  email: 'candidate@rajdailytools.in'
                });
                onClose();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex-1 h-px bg-slate-200" />
              <span>OR EMAIL SIGN IN</span>
              <span className="flex-1 h-px bg-slate-200" />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (emailInput) {
                  onLoginSuccess({
                    name: nameInput || emailInput.split('@')[0],
                    email: emailInput
                  });
                  onClose();
                }
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
              >
                Sign In / Register
              </button>
            </form>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1 font-semibold text-slate-700">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                <span>Candidate Cloud Sync Architecture</span>
              </div>
              <p>
                Authentication backend hooks are prepared. In the current preview mode, all profile data and attempts are stored safely in local browser storage.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
