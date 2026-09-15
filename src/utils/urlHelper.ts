import { ActivePage } from '../types/exam';

/**
 * Returns the relative or absolute HTML URL for any page or exam in RajDailyTools.
 * depth: 0 for root level (index.html, latest-jobs.html, ssc-cgl-2026.html)
 * depth: 1 for 1-level subdirectories (latest-jobs/..., admit-card/..., etc.)
 */
export function getPageUrl(page: ActivePage | string, slug?: string, depth: number = 0): string {
  const prefix = depth === 1 ? '../' : './';

  // Map dedicated root MP Police Constable 2026 page
  if (page === 'mpesb-mp-police-constable-recruitment-2026' || page === 'mp-police-constable-2026' || page === 'mp-police-constable-recruitment-2026') return `${prefix}mpesb-mp-police-constable-recruitment-2026.html`;

  // Map dedicated root NIC Scientific/Technical Assistant-A 2026 page
  if (page === 'nic-scientific-technical-assistant-recruitment-2026' || page === 'nic-sta-recruitment-2026' || page === 'nic-sta-2026') return `${prefix}nic-scientific-technical-assistant-recruitment-2026.html`;

  // Map dedicated root Bank of India SO 2026 page
  if (page === 'bank-of-india-so-recruitment-2026' || page === 'bank-of-india-so-2026') return `${prefix}bank-of-india-so-recruitment-2026.html`;

  // Map dedicated root Delhi High Court SPA PA 2026 page
  if (page === 'delhi-high-court-spa-pa-recruitment-2026' || page === 'delhi-high-court-spa-pa-2026') return `${prefix}delhi-high-court-spa-pa-recruitment-2026.html`;

  // Map dedicated root UPSC 11/2026 Various Posts Recruitment 2026 page
  if (page === 'upsc-11-2026-various-posts-recruitment-2026' || page === 'upsc-11-2026-various-posts-2026') return `${prefix}upsc-11-2026-various-posts-recruitment-2026.html`;

  // Map dedicated root BPSSC Company Commander 2026 page
  if (page === 'bpssc-bihar-police-company-commander-recruitment-2026' || page === 'bpssc-company-commander-2026') return `${prefix}bpssc-bihar-police-company-commander-recruitment-2026.html`;

  // Map dedicated root AIBE 22nd Online Form 2026 page
  if (page === 'aibe-22nd-online-form-2026' || page === 'aibe-22nd-2026' || page === 'aibe-xxii-2026') return `${prefix}aibe-22nd-online-form-2026.html`;

  // Map dedicated root NVS Class 9 Admission 2027 page
  if (page === 'nvs-class-9-admission-2027' || page === 'nvs-class-9-admission') return `${prefix}nvs-class-9-admission-2027.html`;

  // Map dedicated root NVS Class 11 Admission 2027 page
  if (page === 'nvs-class-11-admission-2027' || page === 'nvs-class-11-admission') return `${prefix}nvs-class-11-admission-2027.html`;

  // Map dedicated root Allahabad University PhD Admission 2026 page
  if (page === 'allahabad-university-phd-admission-2026' || page === 'allahabad-university-phd-2026') return `${prefix}allahabad-university-phd-admission-2026.html`;

  // Map dedicated root UPSSSC Veterinary Pharmacist 2026 page
  if (page === 'upsssc-veterinary-pharmacist-recruitment-2026' || page === 'upsssc-veterinary-pharmacist-2026') return `${prefix}upsssc-veterinary-pharmacist-recruitment-2026.html`;

  // Map dedicated root MPESB Krishi Vistar Adhikari 2026 Admit Card page
  if (page === 'mpesb-krishi-vistar-adhikari-admit-card-2026' || page === 'mpesb-krishi-vistar-adhikari-2026') return `${prefix}mpesb-krishi-vistar-adhikari-admit-card-2026.html`;

  // Map dedicated root Rajasthan Safai Karmchari 2026 page
  if (page === 'rajasthan-safai-karmchari-recruitment-2026' || page === 'rajasthan-safai-karmchari-2026') return `${prefix}rajasthan-safai-karmchari-recruitment-2026.html`;

  // Map dedicated root Patna High Court Assistant 2026 Admit Card page
  if (page === 'patna-high-court-assistant-admit-card-2026' || page === 'patna-high-court-assistant-2026') return `${prefix}patna-high-court-assistant-admit-card-2026.html`;

  // Map dedicated root NBEMS Group A B C 2026 Admit Card page
  if (page === 'nbems-group-a-b-c-admit-card-2026' || page === 'nbems-admit-card-2026') return `${prefix}nbems-group-a-b-c-admit-card-2026.html`;

  // Map dedicated root SSC JE 2026 page
  if (page === 'ssc-je-recruitment-2026' || page === 'ssc-je-2026') return `${prefix}ssc-je-recruitment-2026.html`;

  // Map dedicated root UPSSSC Senior Instructor 2026 page
  if (page === 'upsssc-senior-instructor-recruitment-2026' || page === 'upsssc-senior-instructor-2026') return `${prefix}upsssc-senior-instructor-recruitment-2026.html`;

  // Map dedicated root UP Special TET 2026 page
  if (page === 'up-special-tet-online-form-2026' || page === 'up-special-tet-2026') return `${prefix}up-special-tet-online-form-2026.html`;

  // Map dedicated root UKPSC Upper PCS 2026 page
  if (page === 'ukpsc-upper-pcs-recruitment-2026' || page === 'ukpsc-upper-pcs-2026') return `${prefix}ukpsc-upper-pcs-recruitment-2026.html`;

  // Map dedicated root SSC CPO 2026 page
  if (page === 'ssc-cpo-si-capf-recruitment-2026' || page === 'ssc-cpo-2026') return `${prefix}ssc-cpo-si-capf-recruitment-2026.html`;

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
      if (slug === 'mpesb-mp-police-constable-recruitment-2026' || slug === 'mp-police-constable-2026' || slug === 'mp-police-constable-recruitment-2026') {
        return `${prefix}mpesb-mp-police-constable-recruitment-2026.html`;
      }
      if (slug === 'nic-scientific-technical-assistant-recruitment-2026' || slug === 'nic-sta-recruitment-2026' || slug === 'nic-sta-2026') {
        return `${prefix}nic-scientific-technical-assistant-recruitment-2026.html`;
      }
      if (slug === 'bank-of-india-so-recruitment-2026' || slug === 'bank-of-india-so-2026') {
        return `${prefix}bank-of-india-so-recruitment-2026.html`;
      }
      if (slug === 'delhi-high-court-spa-pa-recruitment-2026' || slug === 'delhi-high-court-spa-pa-2026') {
        return `${prefix}delhi-high-court-spa-pa-recruitment-2026.html`;
      }
      if (slug === 'upsc-11-2026-various-posts-recruitment-2026' || slug === 'upsc-11-2026-various-posts-2026') {
        return `${prefix}upsc-11-2026-various-posts-recruitment-2026.html`;
      }
      if (slug === 'bpssc-bihar-police-company-commander-recruitment-2026' || slug === 'bpssc-company-commander-2026') {
        return `${prefix}bpssc-bihar-police-company-commander-recruitment-2026.html`;
      }
      if (slug === 'upsssc-veterinary-pharmacist-recruitment-2026' || slug === 'upsssc-veterinary-pharmacist-2026') {
        return `${prefix}upsssc-veterinary-pharmacist-recruitment-2026.html`;
      }
      if (slug === 'rajasthan-safai-karmchari-recruitment-2026' || slug === 'rajasthan-safai-karmchari-2026') {
        return `${prefix}rajasthan-safai-karmchari-recruitment-2026.html`;
      }
      if (slug === 'mpesb-krishi-vistar-adhikari-admit-card-2026' || slug === 'mpesb-krishi-vistar-adhikari-2026') {
        return `${prefix}mpesb-krishi-vistar-adhikari-admit-card-2026.html`;
      }
      if (slug === 'patna-high-court-assistant-admit-card-2026' || slug === 'patna-high-court-assistant-2026') {
        return `${prefix}patna-high-court-assistant-admit-card-2026.html`;
      }
      if (slug === 'nbems-group-a-b-c-admit-card-2026' || slug === 'nbems-admit-card-2026' || slug === 'nbems-group-abc-2026') {
        return `${prefix}nbems-group-a-b-c-admit-card-2026.html`;
      }
      if (slug === 'ssc-je-recruitment-2026' || slug === 'ssc-je-2026') {
        return `${prefix}ssc-je-recruitment-2026.html`;
      }
      if (slug === 'upsssc-senior-instructor-recruitment-2026' || slug === 'upsssc-senior-instructor-2026') {
        return `${prefix}upsssc-senior-instructor-recruitment-2026.html`;
      }
      if (slug === 'up-special-tet-online-form-2026' || slug === 'up-special-tet-2026') {
        return `${prefix}up-special-tet-online-form-2026.html`;
      }
      if (slug === 'ukpsc-upper-pcs-recruitment-2026' || slug === 'ukpsc-upper-pcs-2026') {
        return `${prefix}ukpsc-upper-pcs-recruitment-2026.html`;
      }
      if (slug === 'ssc-cpo-si-capf-recruitment-2026' || slug === 'ssc-cpo-2026') {
        return `${prefix}ssc-cpo-si-capf-recruitment-2026.html`;
      }
      return slug ? `${prefix}latest-jobs/${slug}.html` : `${prefix}latest-jobs.html`;
    case 'admit-card-detail':
      if (slug === 'mpesb-krishi-vistar-adhikari-admit-card-2026' || slug === 'mpesb-krishi-vistar-adhikari-2026') {
        return `${prefix}mpesb-krishi-vistar-adhikari-admit-card-2026.html`;
      }
      if (slug === 'patna-high-court-assistant-admit-card-2026' || slug === 'patna-high-court-assistant-2026') {
        return `${prefix}patna-high-court-assistant-admit-card-2026.html`;
      }
      if (slug === 'nbems-group-a-b-c-admit-card-2026' || slug === 'nbems-admit-card-2026' || slug === 'nbems-group-abc-2026') {
        return `${prefix}nbems-group-a-b-c-admit-card-2026.html`;
      }
      return slug ? `${prefix}admit-card/${slug}.html` : `${prefix}admit-card.html`;
    case 'result-detail':
      return slug ? `${prefix}result/${slug}.html` : `${prefix}result.html`;
    case 'answer-key-detail':
      return slug ? `${prefix}answer-key/${slug}.html` : `${prefix}answer-key.html`;
    case 'cut-off-detail':
      return slug ? `${prefix}cut-off/${slug}.html` : `${prefix}cut-off.html`;
    case 'admission-detail':
      if (slug === 'aibe-22nd-online-form-2026' || slug === 'aibe-22nd-2026' || slug === 'aibe-xxii-2026') {
        return `${prefix}aibe-22nd-online-form-2026.html`;
      }
      if (slug === 'nvs-class-9-admission-2027' || slug === 'nvs-class-9-admission') {
        return `${prefix}nvs-class-9-admission-2027.html`;
      }
      if (slug === 'nvs-class-11-admission-2027' || slug === 'nvs-class-11-admission') {
        return `${prefix}nvs-class-11-admission-2027.html`;
      }
      if (slug === 'allahabad-university-phd-admission-2026' || slug === 'allahabad-university-phd-2026') {
        return `${prefix}allahabad-university-phd-admission-2026.html`;
      }
      return slug ? `${prefix}admission/${slug}.html` : `${prefix}admission.html`;
    case 'tool-detail':
      return slug ? `${prefix}tools/${slug}.html` : `${prefix}tools.html`;

    default:
      if (slug === 'aibe-22nd-online-form-2026' || slug === 'aibe-22nd-2026' || slug === 'aibe-xxii-2026') {
        return `${prefix}aibe-22nd-online-form-2026.html`;
      }
      if (slug === 'nvs-class-9-admission-2027' || slug === 'nvs-class-9-admission') {
        return `${prefix}nvs-class-9-admission-2027.html`;
      }
      if (slug === 'nvs-class-11-admission-2027' || slug === 'nvs-class-11-admission') {
        return `${prefix}nvs-class-11-admission-2027.html`;
      }
      if (slug === 'allahabad-university-phd-admission-2026' || slug === 'allahabad-university-phd-2026') {
        return `${prefix}allahabad-university-phd-admission-2026.html`;
      }
      if (slug === 'mpesb-krishi-vistar-adhikari-admit-card-2026' || slug === 'mpesb-krishi-vistar-adhikari-2026') {
        return `${prefix}mpesb-krishi-vistar-adhikari-admit-card-2026.html`;
      }
      if (slug === 'patna-high-court-assistant-admit-card-2026' || slug === 'patna-high-court-assistant-2026') {
        return `${prefix}patna-high-court-assistant-admit-card-2026.html`;
      }
      if (slug === 'nbems-group-a-b-c-admit-card-2026' || slug === 'nbems-admit-card-2026' || slug === 'nbems-group-abc-2026') {
        return `${prefix}nbems-group-a-b-c-admit-card-2026.html`;
      }
      if (slug === 'ssc-je-recruitment-2026' || slug === 'ssc-je-2026') {
        return `${prefix}ssc-je-recruitment-2026.html`;
      }
      if (slug === 'upsssc-senior-instructor-recruitment-2026' || slug === 'upsssc-senior-instructor-2026') {
        return `${prefix}upsssc-senior-instructor-recruitment-2026.html`;
      }
      if (slug === 'up-special-tet-online-form-2026' || slug === 'up-special-tet-2026') {
        return `${prefix}up-special-tet-online-form-2026.html`;
      }
      if (slug === 'ukpsc-upper-pcs-recruitment-2026' || slug === 'ukpsc-upper-pcs-2026') {
        return `${prefix}ukpsc-upper-pcs-recruitment-2026.html`;
      }
      if (slug === 'rajasthan-safai-karmchari-recruitment-2026' || slug === 'rajasthan-safai-karmchari-2026') {
        return `${prefix}rajasthan-safai-karmchari-recruitment-2026.html`;
      }
      if (slug === 'mpesb-mp-police-constable-recruitment-2026' || slug === 'mp-police-constable-2026' || slug === 'mp-police-constable-recruitment-2026') {
        return `${prefix}mpesb-mp-police-constable-recruitment-2026.html`;
      }
      if (slug === 'nic-scientific-technical-assistant-recruitment-2026' || slug === 'nic-sta-recruitment-2026' || slug === 'nic-sta-2026') {
        return `${prefix}nic-scientific-technical-assistant-recruitment-2026.html`;
      }
      if (slug === 'bank-of-india-so-recruitment-2026' || slug === 'bank-of-india-so-2026') {
        return `${prefix}bank-of-india-so-recruitment-2026.html`;
      }
      if (slug === 'delhi-high-court-spa-pa-recruitment-2026' || slug === 'delhi-high-court-spa-pa-2026') {
        return `${prefix}delhi-high-court-spa-pa-recruitment-2026.html`;
      }
      if (slug === 'upsc-11-2026-various-posts-recruitment-2026' || slug === 'upsc-11-2026-various-posts-2026') {
        return `${prefix}upsc-11-2026-various-posts-recruitment-2026.html`;
      }
      if (slug === 'bpssc-bihar-police-company-commander-recruitment-2026' || slug === 'bpssc-company-commander-2026') {
        return `${prefix}bpssc-bihar-police-company-commander-recruitment-2026.html`;
      }
      if (slug === 'upsssc-veterinary-pharmacist-recruitment-2026' || slug === 'upsssc-veterinary-pharmacist-2026') {
        return `${prefix}upsssc-veterinary-pharmacist-recruitment-2026.html`;
      }
      if (slug === 'ssc-cpo-si-capf-recruitment-2026' || slug === 'ssc-cpo-2026') {
        return `${prefix}ssc-cpo-si-capf-recruitment-2026.html`;
      }
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
