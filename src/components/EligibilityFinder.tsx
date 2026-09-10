import React, { useState } from 'react';
import { EducationLevel, ExamRecord, ActivePage } from '../types/exam';
import { EXAMS_DATABASE } from '../data/exams';
import {
  evaluateCandidateEligibility,
  EligibilityEvaluationResult,
  getDaysDifference
} from '../utils/centralQueries';
import {
  UserCheck,
  Sparkles,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Calendar,
  GraduationCap
} from 'lucide-react';
import { formatDate } from '../utils/dateUtils';
import { getPageUrl } from '../utils/urlHelper';

interface EligibilityFinderProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const EligibilityFinder: React.FC<EligibilityFinderProps> = ({ onNavigate, depth = 0 }) => {
  const [selectedEducation, setSelectedEducation] = useState<EducationLevel | 'All'>('Graduation');
  const [candidateAge, setCandidateAge] = useState<number>(24);
  const [selectedCategory, setSelectedCategory] = useState<string>('General');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  // Results storage
  const [eligibleJobs, setEligibleJobs] = useState<{ exam: ExamRecord; result: EligibilityEvaluationResult }[]>([]);
  const [ineligibleJobs, setIneligibleJobs] = useState<{ exam: ExamRecord; result: EligibilityEvaluationResult }[]>([]);
  const [showIneligible, setShowIneligible] = useState<boolean>(false);

  const handleFindJobs = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    const eligible: { exam: ExamRecord; result: EligibilityEvaluationResult }[] = [];
    const ineligible: { exam: ExamRecord; result: EligibilityEvaluationResult }[] = [];

    EXAMS_DATABASE.forEach((exam) => {
      const result = evaluateCandidateEligibility(exam, {
        education: selectedEducation,
        age: candidateAge,
        category: selectedCategory,
        gender: selectedGender
      });

      if (result.isEligible) {
        eligible.push({ exam, result });
      } else {
        ineligible.push({ exam, result });
      }
    });

    setEligibleJobs(eligible);
    setIneligibleJobs(ineligible);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-2 border-blue-200/80 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200/80">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-100/80 px-2.5 py-0.5 rounded-full mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Central Eligibility Engine
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              Find Government Jobs You Are Eligible For
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select qualification, age, category &amp; gender to discover all matching recruitment vacancies with live status.
            </p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleFindJobs} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {/* Education Level */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Highest Qualification</span>
          </label>
          <select
            value={selectedEducation}
            onChange={(e) => setSelectedEducation(e.target.value as EducationLevel | 'All')}
            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer"
          >
            <option value="All">All Qualifications</option>
            <option value="10th">10th Pass (Matriculation)</option>
            <option value="12th">12th Pass (Intermediate / 10+2)</option>
            <option value="Graduation">Graduation / Bachelor's Degree</option>
            <option value="Post Graduation">Post Graduation / Master's Degree</option>
            <option value="Diploma">Polytechnic Diploma</option>
            <option value="ITI">ITI Technical Trade Certificate</option>
            <option value="Other">Other Specialized Qualifications</option>
          </select>
        </div>

        {/* Candidate Age */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Candidate Age (Years)
          </label>
          <input
            type="number"
            min={16}
            max={55}
            value={candidateAge}
            onChange={(e) => setCandidateAge(parseInt(e.target.value) || 18)}
            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Reservation Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer"
          >
            <option value="General">General / Unreserved (UR)</option>
            <option value="OBC">Other Backward Class (OBC +3 Yrs Relaxation)</option>
            <option value="EWS">Economically Weaker Section (EWS)</option>
            <option value="SC">Scheduled Caste (SC +5 Yrs Relaxation)</option>
            <option value="ST">Scheduled Tribe (ST +5 Yrs Relaxation)</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Candidate Gender
          </label>
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer"
          >
            <option value="All">All Candidates (Any)</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 lg:col-span-4 flex items-center justify-end pt-1">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Check My Eligible Vacancies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Mandatory Notification Disclaimer */}
      <div className="flex items-start gap-2.5 text-xs text-amber-900 bg-amber-50/90 border border-amber-200/80 rounded-xl p-3 mb-6">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>Official Rule Notice:</strong> Eligibility is calculated strictly using official recruitment notifications in the central database, applying category age relaxation (OBC: +3 yrs, SC/ST: +5 yrs). Post-wise exceptions may apply.
        </div>
      </div>

      {/* Search Results Display */}
      {hasSearched && (
        <div className="pt-2 space-y-6">
          {/* Header Summary */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Matching Vacancies Found ({eligibleJobs.length})</span>
            </h3>
            <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 font-medium">
              Filter: {selectedEducation} • Age: {candidateAge} yrs • Category: {selectedCategory} • Gender: {selectedGender}
            </span>
          </div>

          {eligibleJobs.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500">
              <p className="text-base font-bold text-slate-700">No vacancies directly match this specific combination.</p>
              <p className="text-xs text-slate-500 mt-1">
                Try selecting "All Qualifications" or check why you may be ineligible for other exams below.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eligibleJobs.map(({ exam, result }) => {
                const isApplicationOpen = exam.status === 'APPLICATION_OPEN';
                const daysLeft = getDaysDifference(exam.applicationLastDate);

                return (
                  <div
                    key={exam.id}
                    className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl p-2 bg-slate-50 rounded-xl border border-slate-100">{exam.logoIcon}</span>
                          <div>
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3" /> Eligible
                            </span>
                            <span className="text-[11px] font-bold text-slate-500 ml-2">
                              {exam.category}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                          {exam.totalVacancy}
                        </span>
                      </div>

                      {/* Title & Post */}
                      <a
                        href={getPageUrl('job-detail', exam.slug, depth)}
                        onClick={(e) => {
                          if (onNavigate && !window.location.pathname.endsWith('.html')) {
                            e.preventDefault();
                            onNavigate('job-detail', exam.slug);
                          }
                        }}
                        className="font-bold text-slate-900 text-base font-display hover:text-blue-600 transition-colors cursor-pointer block"
                      >
                        {exam.examName}
                      </a>
                      <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">{exam.postName}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{exam.organization}</p>

                      {/* Criteria Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-600 my-4 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Qualification</span>
                          <strong className="text-slate-800 text-[11px] line-clamp-1">{exam.education.join(', ')}</strong>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Age Limit</span>
                          <strong className="text-slate-800 text-[11px]">{exam.ageMin} - {exam.ageMax} Yrs</strong>
                          {result.maxAllowedAge > exam.ageMax && (
                            <span className="text-[10px] text-emerald-600 font-semibold block">Max: {result.maxAllowedAge} yrs</span>
                          )}
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Apply Starts</span>
                          <strong className="text-slate-800 text-[11px]">{formatDate(exam.applicationStartDate)}</strong>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Last Date</span>
                          <strong className="text-red-600 text-[11px]">{formatDate(exam.applicationLastDate)}</strong>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Status</span>
                          <span className={`text-[11px] font-bold ${isApplicationOpen ? 'text-emerald-700' : 'text-slate-600'}`}>
                            {isApplicationOpen ? 'Active / Open' : 'Upcoming / Stage In-Progress'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Deadline</span>
                          <span className="text-[11px] font-bold text-blue-700">
                            {daysLeft !== null && daysLeft >= 0 ? `${daysLeft} days left` : 'Completed'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={getPageUrl('job-detail', exam.slug, depth)}
                        onClick={(e) => {
                          if (onNavigate && !window.location.pathname.endsWith('.html')) {
                            e.preventDefault();
                            onNavigate('job-detail', exam.slug);
                          }
                        }}
                        className="flex-1 py-2.5 px-3 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 border border-blue-200 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                      {exam.applyLink && isApplicationOpen && (
                        <a
                          href={exam.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer shrink-0"
                        >
                          <span>Apply</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Ineligible Jobs Breakdown Toggle */}
          {ineligibleJobs.length > 0 && (
            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setShowIneligible(!showIneligible)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 text-left">
                  <XCircle className="w-5 h-5 text-slate-400" />
                  <div>
                    <span className="text-sm font-bold text-slate-800">
                      View Ineligible Vacancies &amp; Specific Reasons ({ineligibleJobs.length})
                    </span>
                    <p className="text-xs text-slate-500">
                      Understand why your profile does not match other active notifications
                    </p>
                  </div>
                </div>
                {showIneligible ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {showIneligible && (
                <div className="mt-3 space-y-3">
                  {ineligibleJobs.map(({ exam, result }) => (
                    <div
                      key={exam.id}
                      className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-slate-900 text-sm">{exam.examName}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700">{exam.category}</span>
                        </div>
                        <ul className="space-y-1 text-slate-600">
                          {result.reasons.map((r, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-red-600 font-medium">
                              <span className="text-red-500 font-bold">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={getPageUrl('job-detail', exam.slug, depth)}
                        onClick={(e) => {
                          if (onNavigate && !window.location.pathname.endsWith('.html')) {
                            e.preventDefault();
                            onNavigate('job-detail', exam.slug);
                          }
                        }}
                        className="self-start sm:self-center px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-slate-700 font-bold text-xs shrink-0 cursor-pointer text-center"
                      >
                        Check Full Notification
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
