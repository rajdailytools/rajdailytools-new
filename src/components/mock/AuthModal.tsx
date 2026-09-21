import React, { useState } from 'react';
import { User, Mail, Shield, CheckCircle, AlertCircle, Sparkles, BookOpen, BarChart2, Award, History, LogOut } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: { name: string; email: string } | null;
  onLoginSuccess: (user: { name: string; email: string }) => void;
  onLogout: () => void;
  onNavigateSection?: (section: 'my-exams' | 'mistakes' | 'progress' | 'performance') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onLogout,
  onNavigateSection
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [googleAuthPending, setGoogleAuthPending] = useState(false);

  if (!isOpen) return null;

  return (
    <div id="auth-modal" className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-5 animate-in fade-in zoom-in duration-150">
        <button
          type="button"
          id="btn-close-auth-modal"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {currentUser ? (
          <div className="space-y-5 pt-1">
            {/* User Profile Header */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto text-2xl font-black shadow-md shadow-blue-500/20">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 font-display">{currentUser.name}</h3>
                <p className="text-xs text-slate-500">{currentUser.email}</p>
              </div>
            </div>

            {/* Session Status Banner */}
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 text-xs space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Candidate Profile Active</span>
              </div>
              <p className="text-[11px] text-emerald-700">
                Your attempts, mistakes notebook, and preparation metrics are securely synced to your browser session.
              </p>
            </div>

            {/* Quick Candidate Hub Navigation */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Candidate Dashboard</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateSection?.('my-exams');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-left font-semibold text-slate-700 flex items-center gap-2 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>My Exams</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateSection?.('mistakes');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-left font-semibold text-slate-700 flex items-center gap-2 transition-colors"
                >
                  <AlertCircle className="w-4 h-4 text-rose-500" />
                  <span>My Mistakes</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateSection?.('progress');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-left font-semibold text-slate-700 flex items-center gap-2 transition-colors"
                >
                  <History className="w-4 h-4 text-amber-500" />
                  <span>My Progress</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateSection?.('performance');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-left font-semibold text-slate-700 flex items-center gap-2 transition-colors"
                >
                  <BarChart2 className="w-4 h-4 text-indigo-600" />
                  <span>Preparation Score</span>
                </button>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              type="button"
              id="btn-auth-logout"
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4 pt-1">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 font-display">
                Candidate Account
              </h3>
              <p className="text-xs text-slate-500">
                Sync mock tests, track mistake notebooks & measure preparation score
              </p>
            </div>

            {/* Tab switch */}
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  activeTab === 'login' ? 'bg-white text-blue-700 shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  activeTab === 'signup' ? 'bg-white text-blue-700 shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Google Login Button */}
            <button
              type="button"
              id="btn-google-login"
              onClick={() => {
                setGoogleAuthPending(true);
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-xs cursor-pointer"
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

            {googleAuthPending && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 space-y-2 animate-in fade-in duration-150">
                <div className="flex items-center gap-1.5 font-bold text-amber-950">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Google OAuth Integration Pending</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Production Google Client ID credentials are in pending deployment state. You can continue instantly with your candidate name or email to test all mock test features.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onLoginSuccess({
                      name: 'Candidate User',
                      email: 'candidate@rajdailytools.in'
                    });
                    onClose();
                  }}
                  className="w-full py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px]"
                >
                  Continue with Candidate Demo Profile
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="flex-1 h-px bg-slate-200" />
              <span>OR WITH EMAIL</span>
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
              {activeTab === 'signup' && (
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
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
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                id="btn-auth-submit"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
              >
                {activeTab === 'signup' ? 'Create Candidate Account' : 'Sign In to Account'}
              </button>
            </form>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1 font-semibold text-slate-700">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                <span>Candidate Data Architecture</span>
              </div>
              <p>
                Session hooks are fully implemented. When cloud backend is active, data syncs across devices; in preview mode, all test scores and mistake tracking persist in local browser storage.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
