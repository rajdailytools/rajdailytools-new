import React, { useState, useMemo } from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import { DAILY_EXAM_UPDATES, DailyUpdateRecord } from '../data/dailyUpdates';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ExternalLink,
  Search,
  Filter,
  Plus,
  RefreshCw,
  Lock,
  Download,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

interface ContentManagementPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const ContentManagementPage: React.FC<ContentManagementPageProps> = ({ onNavigate, depth = 0 }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');

  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [updatesList, setUpdatesList] = useState<DailyUpdateRecord[]>(DAILY_EXAM_UPDATES);

  // Administrative session check (Editor PIN: '2026' for verification demo)
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === '2026' || pinInput.trim() === 'admin2026') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Invalid editorial PIN. Default demo access: 2026');
    }
  };

  const todayStr = '2026-10-20';

  const filteredUpdates = useMemo(() => {
    return updatesList.filter((upd) => {
      const matchStatus = selectedStatus === 'ALL' || upd.status === selectedStatus;
      const matchCategory = selectedCategory === 'ALL' || upd.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        upd.examName.toLowerCase().includes(q) ||
        upd.title.toLowerCase().includes(q) ||
        upd.organization.toLowerCase().includes(q);
      return matchStatus && matchCategory && matchQuery;
    });
  }, [updatesList, selectedStatus, selectedCategory, searchQuery]);

  const stats = useMemo(() => {
    const published = updatesList.filter((u) => u.status === 'PUBLISHED').length;
    const drafts = updatesList.filter((u) => u.status === 'DRAFT').length;
    const expiredDeadlines = updatesList.filter(
      (u) => u.deadlineDate && u.deadlineDate < todayStr
    ).length;
    return { published, drafts, expiredDeadlines, total: updatesList.length };
  }, [updatesList]);

  const handleExportJson = () => {
    const jsonStr = JSON.stringify(updatesList, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rajdailytools-exam-updates-${todayStr}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Content & Updates Manager' }]} onNavigate={onNavigate} depth={depth} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Editorial &amp; Verification Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
          Daily Exam Updates Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Review, authenticate, and maintain live government recruitment announcements with source attribution, deadline tracking, and editorial verification.
        </p>
      </div>

      {!isAuthenticated ? (
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6 text-center">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-slate-900 font-display">Editorial Authentication</h3>
            <p className="text-xs text-slate-500">
              Enter your editorial verification PIN to access the daily update workflow and manage recruitment records.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4 text-left">
            <div>
              <label htmlFor="editor_pin" className="block text-xs font-bold text-slate-700 mb-1">
                Editorial Access PIN
              </label>
              <input
                id="editor_pin"
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter PIN (Demo: 2026)"
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-none"
              />
              {pinError && <p className="text-[11px] text-rose-600 mt-1">{pinError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center"
            >
              Verify &amp; Open Editorial Desk
            </button>
          </form>

          <p className="text-[11px] text-slate-400">
            Confidential editorial interface • Official RajDailyTools Content Team
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs">
              <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Total Records</span>
              <strong className="text-2xl font-black text-slate-900 font-display">{stats.total}</strong>
            </div>
            <div className="bg-white border border-emerald-100 rounded-2xl p-4 shadow-2xs">
              <span className="text-[11px] font-bold text-emerald-600 block uppercase tracking-wider">Live Published</span>
              <strong className="text-2xl font-black text-emerald-700 font-display">{stats.published}</strong>
            </div>
            <div className="bg-white border border-amber-100 rounded-2xl p-4 shadow-2xs">
              <span className="text-[11px] font-bold text-amber-600 block uppercase tracking-wider">Under Review / Draft</span>
              <strong className="text-2xl font-black text-amber-700 font-display">{stats.drafts}</strong>
            </div>
            <div className="bg-white border border-rose-100 rounded-2xl p-4 shadow-2xs">
              <span className="text-[11px] font-bold text-rose-600 block uppercase tracking-wider">Expired Deadlines</span>
              <strong className="text-2xl font-black text-rose-700 font-display">{stats.expiredDeadlines}</strong>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Search */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by exam title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="text-xs py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
              >
                <option value="ALL">All Statuses</option>
                <option value="PUBLISHED">Published</option>
                <option value="DRAFT">Draft</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                onClick={handleExportJson}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-3.5 py-2 bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Lock Session
              </button>
            </div>
          </div>

          {/* Updates Table / Card List */}
          <div className="space-y-4">
            {filteredUpdates.map((item) => {
              const isExpired = item.deadlineDate && item.deadlineDate < todayStr;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        {item.updateType}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          item.status === 'PUBLISHED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {item.status}
                      </span>
                      {isExpired && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Deadline Expired</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>Notified: <strong>{item.notificationDate}</strong></span>
                      <span>Verified: <strong className="text-emerald-700">{item.lastVerifiedDate}</strong></span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {item.title}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {item.examName} • {item.organization}
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 truncate">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">Source: {item.sourceAttribution}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={item.officialSourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-colors"
                      >
                        <span>Check Official Source</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
