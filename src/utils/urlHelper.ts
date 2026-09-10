import { ActivePage } from '../types/exam';

/**
 * Returns the relative or absolute HTML URL for any page or exam in RajDailyTools.
 * depth: 0 for root level (index.html, latest-jobs.html, ssc-cgl-2026.html)
 * depth: 1 for 1-level subdirectories (latest-jobs/..., admit-card/..., etc.)
 */
export function getPageUrl(page: ActivePage | string, slug?: string, depth: number = 0): string {
  const prefix = depth === 1 ? '../' : './';

  // Map dedicated root exams
  if (page === 'ssc-cgl-2026') return `${prefix}ssc-cgl-2026.html`;
  if (page === 'ssc-cgl-eligibility-2026') return `${prefix}ssc-cgl-eligibility-2026.html`;
  if (page === 'ssc-cgl-syllabus-2026') return `${prefix}ssc-cgl-syllabus-2026.html`;
  if (page === 'ssc-cgl-admit-card-2026') return `${prefix}ssc-cgl-admit-card-2026.html`;
  if (page === 'ssc-cgl-answer-key-2026') return `${prefix}ssc-cgl-answer-key-2026.html`;
  if (page === 'ssc-cgl-result-2026') return `${prefix}ssc-cgl-result-2026.html`;
  if (page === 'ssc-cgl-cut-off-2026') return `${prefix}ssc-cgl-cut-off-2026.html`;

  // Map dedicated root SSC CHSL 2026 pages
  if (page === 'ssc-chsl-2026') return `${prefix}ssc-chsl-2026.html`;
  if (page === 'ssc-chsl-eligibility-2026') return `${prefix}ssc-chsl-eligibility-2026.html`;
  if (page === 'ssc-chsl-age-limit-2026') return `${prefix}ssc-chsl-age-limit-2026.html`;
  if (page === 'ssc-chsl-vacancy-2026') return `${prefix}ssc-chsl-vacancy-2026.html`;
  if (page === 'ssc-chsl-exam-pattern-2026') return `${prefix}ssc-chsl-exam-pattern-2026.html`;
  if (page === 'ssc-chsl-syllabus-2026') return `${prefix}ssc-chsl-syllabus-2026.html`;
  if (page === 'ssc-chsl-salary-2026') return `${prefix}ssc-chsl-salary-2026.html`;
  if (page === 'ssc-chsl-admit-card-2026') return `${prefix}ssc-chsl-admit-card-2026.html`;
  if (page === 'ssc-chsl-answer-key-2026') return `${prefix}ssc-chsl-answer-key-2026.html`;
  if (page === 'ssc-chsl-result-2026') return `${prefix}ssc-chsl-result-2026.html`;
  if (page === 'ssc-chsl-cut-off-2026') return `${prefix}ssc-chsl-cut-off-2026.html`;
  if (page === 'ssc-chsl-important-links-2026') return `${prefix}ssc-chsl-important-links-2026.html`;
  if (page === 'ssc-chsl-apply-online-2026') return `${prefix}ssc-chsl-apply-online-2026.html`;

  // Map dedicated root IBPS RRB XV 2026 pages
  if (page === 'ibps-rrb-xv-2026' || page === 'ibps-rrb-2026') return `${prefix}ibps-rrb-xv-2026.html`;
  if (page === 'ibps-rrb-eligibility-2026') return `${prefix}ibps-rrb-eligibility-2026.html`;
  if (page === 'ibps-rrb-age-limit-2026') return `${prefix}ibps-rrb-age-limit-2026.html`;
  if (page === 'ibps-rrb-vacancy-2026') return `${prefix}ibps-rrb-vacancy-2026.html`;
  if (page === 'ibps-rrb-exam-pattern-2026') return `${prefix}ibps-rrb-exam-pattern-2026.html`;
  if (page === 'ibps-rrb-syllabus-2026') return `${prefix}ibps-rrb-syllabus-2026.html`;
  if (page === 'ibps-rrb-salary-2026') return `${prefix}ibps-rrb-salary-2026.html`;
  if (page === 'ibps-rrb-admit-card-2026') return `${prefix}ibps-rrb-admit-card-2026.html`;
  if (page === 'ibps-rrb-apply-online-2026') return `${prefix}ibps-rrb-apply-online-2026.html`;
  if (page === 'ibps-rrb-important-links-2026') return `${prefix}ibps-rrb-important-links-2026.html`;

  switch (page) {
    case 'home':
      return `${prefix}index.html`;
    case 'latest-jobs':
      return `${prefix}latest-jobs.html`;
    case 'admit-card':
      return `${prefix}admit-card.html`;
    case 'answer-key':
      return `${prefix}answer-key.html`;
    case 'result':
      return `${prefix}result.html`;
    case 'cut-off':
      return `${prefix}cut-off.html`;
    case 'admission':
      return `${prefix}admission.html`;
    case 'all-exams':
      return `${prefix}all-exams.html`;
    case 'mock-test':
      return `${prefix}mock-test.html`;
    case 'tools':
      return `${prefix}tools.html`;
    case 'about':
      return `${prefix}about.html`;
    case 'contact':
      return `${prefix}contact.html`;
    case 'privacy':
    case 'privacy-policy':
      return `${prefix}privacy-policy.html`;
    case 'terms':
      return `${prefix}terms.html`;

    // Dynamic details
    case 'job-detail':
      return slug ? `${prefix}latest-jobs/${slug}.html` : `${prefix}latest-jobs.html`;
    case 'admit-card-detail':
      return slug ? `${prefix}admit-card/${slug}.html` : `${prefix}admit-card.html`;
    case 'result-detail':
      return slug ? `${prefix}result/${slug}.html` : `${prefix}result.html`;
    case 'answer-key-detail':
      return slug ? `${prefix}answer-key/${slug}.html` : `${prefix}answer-key.html`;
    case 'cut-off-detail':
      return slug ? `${prefix}cut-off/${slug}.html` : `${prefix}cut-off.html`;
    case 'admission-detail':
      return slug ? `${prefix}admission/${slug}.html` : `${prefix}admission.html`;
    case 'tool-detail':
      return slug ? `${prefix}tools/${slug}.html` : `${prefix}tools.html`;

    default:
      if (slug) {
        return `${prefix}latest-jobs/${slug}.html`;
      }
      return `${prefix}index.html`;
  }
}

/**
 * Returns canonical full URL for SEO using official domain rajdailytools.in
 */
export function getCanonicalUrl(page: string, slug?: string): string {
  const siteUrl = 'https://rajdailytools.in';
  const rel = getPageUrl(page, slug, 0).replace(/^\.\//, '');
  return `${siteUrl}/${rel}`;
}
