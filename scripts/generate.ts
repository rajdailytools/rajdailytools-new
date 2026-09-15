import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// Data
import { EXAMS_DATABASE } from '../src/data/exams';
import { ADMISSIONS_DATABASE } from '../src/data/admissions';
import { ActivePage, ExamRecord, AdmissionRecord } from '../src/types/exam';

// Global Layout Components
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { Ticker } from '../src/components/Ticker';
import { MobileDrawer } from '../src/components/MobileDrawer';

// Pages
import { HomePage } from '../src/pages/HomePage';
import { LatestJobsPage } from '../src/pages/LatestJobsPage';
import { JobDetailPage } from '../src/pages/JobDetailPage';
import { AdmitCardPage } from '../src/pages/AdmitCardPage';
import { AdmitCardDetailPage } from '../src/pages/AdmitCardDetailPage';
import { AnswerKeyPage } from '../src/pages/AnswerKeyPage';
import { AnswerKeyDetailPage } from '../src/pages/AnswerKeyDetailPage';
import { ResultPage } from '../src/pages/ResultPage';
import { ResultDetailPage } from '../src/pages/ResultDetailPage';
import { CutOffPage } from '../src/pages/CutOffPage';
import { CutOffDetailPage } from '../src/pages/CutOffDetailPage';
import { AdmissionPage } from '../src/pages/AdmissionPage';
import { AdmissionDetailPage } from '../src/pages/AdmissionDetailPage';
import { MockTestPage } from '../src/pages/MockTestPage';
import { AboutPage } from '../src/pages/AboutPage';
import { ContactPage } from '../src/pages/ContactPage';
import { PrivacyPolicyPage } from '../src/pages/PrivacyPolicyPage';
import { TermsPage } from '../src/pages/TermsPage';
import { ToolDetailPage, ToolType } from '../src/pages/ToolDetailPage';
import { ExamTopicPage } from '../src/pages/ExamTopicPage';
import { ToolsPage } from '../src/pages/ToolsPage';
import { IbpsRrbTopicPage } from '../src/pages/IbpsRrbTopicPage';
import { AIIMS_NORCET_11_EXAM } from '../src/data/aiimsNorcetData';
import { AiimsNorcetAdmitCardPage } from '../src/pages/AiimsNorcetAdmitCardPage';
import { AiimsNorcetTopicPage } from '../src/pages/AiimsNorcetTopicPage';
import { SSC_CPO_2026_EXAM } from '../src/data/sscCpoData';
import { SSC_JE_2026_EXAM } from '../src/data/sscJeData';
import { UKPSC_UPPER_PCS_2026_EXAM } from '../src/data/ukpscData';
import { UP_SPECIAL_TET_2026_EXAM } from '../src/data/upSpecialTetData';
import { UPSSSC_SENIOR_INSTRUCTOR_2026_EXAM } from '../src/data/upssscSeniorInstructorData';
import { UPSSSC_VETERINARY_PHARMACIST_2026_EXAM } from '../src/data/upssscVeterinaryPharmacistData';
import { BPSSC_COMPANY_COMMANDER_2026_EXAM } from '../src/data/bpsscCompanyCommanderData';
import { UPSC_11_2026_VARIOUS_POSTS_EXAM } from '../src/data/upsc112026VariousPostsData';
import { DELHI_HIGH_COURT_SPA_PA_2026_EXAM } from '../src/data/delhiHighCourtSpaPaData';
import { BANK_OF_INDIA_SO_2026_EXAM } from '../src/data/bankOfIndiaSoData';
import { NIC_STA_2026_EXAM } from '../src/data/nicStaData';
import { MP_POLICE_CONSTABLE_2026_EXAM } from '../src/data/mpPoliceConstableData';
import { RAJASTHAN_SAFAI_KARMCHARI_2026_EXAM } from '../src/data/rajasthanSafaiKarmchariData';
import { NBEMS_GROUP_ABC_2026_EXAM } from '../src/data/nbemsData';
import { NbemsAdmitCardPage } from '../src/pages/NbemsAdmitCardPage';
import { PATNA_HIGH_COURT_ASSISTANT_2026_EXAM } from '../src/data/patnaHighCourtData';
import { PatnaHighCourtAdmitCardPage } from '../src/pages/PatnaHighCourtAdmitCardPage';
import { MPESB_KRISHI_VISTAR_ADHIKARI_2026_EXAM } from '../src/data/mpesbData';
import { MpesbAdmitCardPage } from '../src/pages/MpesbAdmitCardPage';
import { ALLAHABAD_UNIVERSITY_PHD_2026_EXAM } from '../src/data/allahabadUniversityPhdData';
import { AllahabadUniversityPhdPage } from '../src/pages/AllahabadUniversityPhdPage';
import { NVS_CLASS_11_2027_ADMISSION } from '../src/data/nvsClass11Data';
import { NvsClass11AdmissionPage } from '../src/pages/NvsClass11AdmissionPage';
import { NVS_CLASS_9_2027_ADMISSION } from '../src/data/nvsClass9Data';
import { NvsClass9AdmissionPage } from '../src/pages/NvsClass9AdmissionPage';
import { AIBE_XXII_2026_ADMISSION } from '../src/data/aibeData';
import { AibeAdmissionPage } from '../src/pages/AibeAdmissionPage';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const generatedFiles: string[] = [];

// Helper to escape HTML attributes
function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Build Search Index for client-side search across all static pages
const searchIndex = [
  ...EXAMS_DATABASE.map((exam) => ({
    name: exam.examName,
    org: exam.organization || 'Government of India',
    category: exam.category,
    vac: exam.totalVacancy,
    url:
      exam.slug === 'allahabad-university-phd-admission-2026'
        ? 'allahabad-university-phd-admission-2026.html'
        : exam.slug === 'mpesb-krishi-vistar-adhikari-admit-card-2026'
        ? 'mpesb-krishi-vistar-adhikari-admit-card-2026.html'
        : exam.slug === 'patna-high-court-assistant-admit-card-2026'
        ? 'patna-high-court-assistant-admit-card-2026.html'
        : exam.slug === 'nbems-group-a-b-c-admit-card-2026'
        ? 'nbems-group-a-b-c-admit-card-2026.html'
        : exam.slug === 'ssc-je-recruitment-2026'
        ? 'ssc-je-recruitment-2026.html'
        : exam.slug === 'up-special-tet-online-form-2026'
        ? 'up-special-tet-online-form-2026.html'
        : exam.slug === 'ukpsc-upper-pcs-recruitment-2026'
        ? 'ukpsc-upper-pcs-recruitment-2026.html'
        : exam.slug === 'ssc-cpo-si-capf-recruitment-2026'
        ? 'ssc-cpo-si-capf-recruitment-2026.html'
        : `latest-jobs/${exam.slug}.html`,
    icon: exam.logoIcon || '📋',
    keywords: [
      exam.examName,
      exam.shortName || '',
      exam.organization || '',
      exam.category,
      ...(exam.slug === 'up-special-tet-online-form-2026'
        ? [
            'UP Special TET',
            'UP Special TET 2026',
            'UP Special TET Online Form',
            'UP Special TET Apply Online',
            'UP Special TET Syllabus',
            'UP Special TET Exam Pattern',
            'UP TET',
            'UPESSC Special TET',
            'Special Educator',
            'CWSN'
          ]
        : [])
    ]
  })),
  ...ADMISSIONS_DATABASE.map((adm) => ({
    name: adm.course,
    org: adm.university,
    category: 'Admission',
    vac: adm.status === 'Open' ? 'Application Open' : 'Closed',
    url:
      adm.slug === 'nvs-class-9-admission-2027'
        ? 'nvs-class-9-admission-2027.html'
        : adm.slug === 'nvs-class-11-admission-2027'
        ? 'nvs-class-11-admission-2027.html'
        : adm.slug === 'allahabad-university-phd-admission-2026'
        ? 'allahabad-university-phd-admission-2026.html'
        : `admission/${adm.slug}.html`,
    icon: '🎓'
  }))
];

interface PageTemplateOptions {
  title: string;
  description: string;
  content: string;
  pageKey: ActivePage | string;
  depth: number;
  canonicalPath?: string;
}

function wrapWithHtmlLayout({
  title,
  description,
  content,
  pageKey,
  depth,
  canonicalPath
}: PageTemplateOptions): string {
  const relPrefix = depth === 1 ? '../' : './';
  const cleanCanonical =
    canonicalPath !== undefined
      ? canonicalPath.replace(/^\//, '')
      : pageKey === 'home'
      ? ''
      : `${pageKey}.html`;
  const canonicalUrl = `https://rajdailytools.in/${cleanCanonical}`;

  // Static shell elements
  const tickerHtml = renderToStaticMarkup(
    React.createElement(Ticker, { depth })
  );
  const headerHtml = renderToStaticMarkup(
    React.createElement(Header, { currentPage: pageKey as ActivePage, depth })
  );
  const footerHtml = renderToStaticMarkup(
    React.createElement(Footer, { depth })
  );
  const drawerHtml = renderToStaticMarkup(
    React.createElement(MobileDrawer, {
      isOpen: false,
      onClose: () => {},
      currentPage: pageKey as ActivePage,
      depth,
      staticMode: true
    })
  );

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Sora:wght@100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${relPrefix}assets/site.css" />
  <script>
    window.RAJ_REL_PREFIX = '${relPrefix}';
    window.RAJ_EXAMS_SEARCH_INDEX = ${JSON.stringify(searchIndex)};
  </script>
</head>
<body class="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
  ${tickerHtml}
  ${headerHtml}
  <main class="flex-1">
    ${content}
  </main>
  ${footerHtml}
  ${drawerHtml}
  <script src="${relPrefix}assets/site.js"></script>
</body>
</html>`;
}

function writePage(relativeFilePath: string, htmlContent: string) {
  const fullPath = path.join(DIST_DIR, relativeFilePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, htmlContent, 'utf-8');
  generatedFiles.push(relativeFilePath);
  console.log(`✓ Generated: ${relativeFilePath}`);
}

function copyAssets() {
  const distAssetsDir = path.join(DIST_DIR, 'assets');
  if (!fs.existsSync(distAssetsDir)) {
    fs.mkdirSync(distAssetsDir, { recursive: true });
  }

  // 1. Copy site.css from assets/ or public/assets/
  const cssSources = [
    path.resolve(process.cwd(), 'assets', 'site.css'),
    path.resolve(process.cwd(), 'public', 'assets', 'site.css')
  ];
  for (const src of cssSources) {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(distAssetsDir, 'site.css'));
      console.log(`✓ Copied: assets/site.css from ${src}`);
      break;
    }
  }

  // 2. Copy site.js from public/assets/ or src/scripts/
  const jsSources = [
    path.resolve(process.cwd(), 'public', 'assets', 'site.js'),
    path.resolve(process.cwd(), 'src', 'scripts', 'site.js')
  ];
  for (const src of jsSources) {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(distAssetsDir, 'site.js'));
      console.log(`✓ Copied: assets/site.js from ${src}`);
      break;
    }
  }
}

async function generateAllPages() {
  console.log('\n🚀 Starting RajDailyTools Static HTML Generation...\n');

  // Ensure output directory exists
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  copyAssets();

  // Find SSC CGL record for dedicated top-level pages
  const sscCglExam =
    EXAMS_DATABASE.find((e) => e.slug === 'ssc-cgl-recruitment-2026') ||
    EXAMS_DATABASE[0];

  // Find SSC CHSL record for dedicated top-level pages
  const sscChslExam =
    EXAMS_DATABASE.find((e) => e.id === 'ssc-chsl-2026' || e.slug === 'ssc-chsl-recruitment-2026') ||
    EXAMS_DATABASE[0];

  // Find IBPS RRB record for dedicated top-level pages
  const ibpsRrbExam =
    EXAMS_DATABASE.find((e) => e.id === 'ibps-rrb-xv-2026' || e.slug === 'ibps-rrb-recruitment-2026') ||
    EXAMS_DATABASE[0];

  // --------------------------------------------------------------------------
  // 1. ROOT LEVEL MAIN PAGES (depth = 0)
  // --------------------------------------------------------------------------

  // Home Page
  const homeContent = renderToStaticMarkup(
    React.createElement(HomePage, { depth: 0 })
  );
  writePage(
    'index.html',
    wrapWithHtmlLayout({
      title: 'RajDailyTools – Government Exam Updates, Latest Jobs & Admit Cards',
      description:
        "India's Exam Preparation & Recruitment Resource. Live updates for Latest Jobs, Admit Card, Answer Key, Result, Cut Off, and Eligibility Checkers.",
      content: homeContent,
      pageKey: 'home',
      depth: 0
    })
  );

  // Latest Jobs Page
  const latestJobsContent = renderToStaticMarkup(
    React.createElement(LatestJobsPage, { depth: 0 })
  );
  writePage(
    'latest-jobs.html',
    wrapWithHtmlLayout({
      title: 'Latest Government Jobs 2026 – Apply Online for SSC, Railway, Banking, Police & UPSC',
      description:
        'Explore active central and state government recruitment notifications with direct apply links, category eligibility, application deadlines, and exam dates.',
      content: latestJobsContent,
      pageKey: 'latest-jobs',
      depth: 0
    })
  );

  // All Exams Page (alias directory)
  writePage(
    'all-exams.html',
    wrapWithHtmlLayout({
      title: 'All Government Recruitment & Competitive Examinations 2026 – RajDailyTools',
      description:
        'Browse all ongoing competitive recruitment examinations across SSC, Railways, State Police, Defense, and Public Service Commissions.',
      content: latestJobsContent,
      pageKey: 'latest-jobs',
      depth: 0
    })
  );

  // Admit Card Page
  const admitCardContent = renderToStaticMarkup(
    React.createElement(AdmitCardPage, { depth: 0 })
  );
  writePage(
    'admit-card.html',
    wrapWithHtmlLayout({
      title: 'Admit Card 2026 – Download Hall Ticket & Exam City Intimation Slip',
      description:
        'Download latest government exam admit cards, hall tickets, call letters, and check exam shift timings with direct official download links.',
      content: admitCardContent,
      pageKey: 'admit-card',
      depth: 0
    })
  );

  // Answer Key Page
  const answerKeyContent = renderToStaticMarkup(
    React.createElement(AnswerKeyPage, { depth: 0 })
  );
  writePage(
    'answer-key.html',
    wrapWithHtmlLayout({
      title: 'Answer Key 2026 – Provisional Keys, Response Sheets & Objection Window',
      description:
        'Check official examination answer keys, candidate response sheets, question challenge portals, and calculate expected scores accurately.',
      content: answerKeyContent,
      pageKey: 'answer-key',
      depth: 0
    })
  );

  // Result Page
  const resultContent = renderToStaticMarkup(
    React.createElement(ResultPage, { depth: 0 })
  );
  writePage(
    'result.html',
    wrapWithHtmlLayout({
      title: 'Exam Results 2026 – Sarkari Result, Merit Lists & Scorecards',
      description:
        'Check latest examination results, download PDF merit lists, scorecards, and roll number lists for all national and state recruitments.',
      content: resultContent,
      pageKey: 'result',
      depth: 0
    })
  );

  // Cut Off Page
  const cutOffContent = renderToStaticMarkup(
    React.createElement(CutOffPage, { depth: 0 })
  );
  writePage(
    'cut-off.html',
    wrapWithHtmlLayout({
      title: 'Cut Off Marks 2026 – Category Wise Qualifying Marks & Merit Analysis',
      description:
        'Official and expected category-wise cut off marks for UR, OBC, EWS, SC, ST candidates with previous year trends and safe score guides.',
      content: cutOffContent,
      pageKey: 'cut-off',
      depth: 0
    })
  );

  // Admission Page
  const admissionContent = renderToStaticMarkup(
    React.createElement(AdmissionPage, { depth: 0 })
  );
  writePage(
    'admission.html',
    wrapWithHtmlLayout({
      title: 'Admission 2026 – University Entrance Forms, Counseling & Seat Matrix',
      description:
        'Latest notifications for national entrance examinations, central university admissions, counseling schedules, and eligibility details.',
      content: admissionContent,
      pageKey: 'admission',
      depth: 0
    })
  );

  // Mock Test Page
  const mockTestContent = renderToStaticMarkup(
    React.createElement(MockTestPage, { depth: 0 })
  );
  writePage(
    'mock-test.html',
    wrapWithHtmlLayout({
      title: 'Mock Tests & Free Practice Papers 2026 – RajDailyTools',
      description:
        'Free online mock test series and practice question papers for SSC CGL, RRB NTPC, State Police, Banking, and Defense examinations.',
      content: mockTestContent,
      pageKey: 'mock-test',
      depth: 0
    })
  );

  // Tools Hub Page
  const toolsHubContent = renderToStaticMarkup(
    React.createElement(ToolsPage, { depth: 0 })
  );
  writePage(
    'tools.html',
    wrapWithHtmlLayout({
      title: 'Government Exam Tools & Calculators – RajDailyTools',
      description:
        'Official online tools for candidates: Photo and signature resizer, age calculator on cut-off date, in-hand salary calculator, and physical standards checker.',
      content: toolsHubContent,
      pageKey: 'tools',
      depth: 0
    })
  );

  // About Page
  const aboutContent = renderToStaticMarkup(
    React.createElement(AboutPage, { depth: 0 })
  );
  writePage(
    'about.html',
    wrapWithHtmlLayout({
      title: 'About RajDailyTools – India’s Dedicated Exam Preparation Portal',
      description:
        'Learn about the mission, editorial standards, and tools built by RajDailyTools to help aspirants navigate government exams with clarity.',
      content: aboutContent,
      pageKey: 'about',
      depth: 0
    })
  );

  // Contact Page
  const contactContent = renderToStaticMarkup(
    React.createElement(ContactPage, { depth: 0 })
  );
  writePage(
    'contact.html',
    wrapWithHtmlLayout({
      title: 'Contact RajDailyTools – Support & Editorial Feedback',
      description:
        'Get in touch with the RajDailyTools team for feedback, correction requests, exam updates, and partnership inquiries.',
      content: contactContent,
      pageKey: 'contact',
      depth: 0
    })
  );

  // Privacy Policy Page
  const privacyContent = renderToStaticMarkup(
    React.createElement(PrivacyPolicyPage, { depth: 0 })
  );
  writePage(
    'privacy-policy.html',
    wrapWithHtmlLayout({
      title: 'Privacy Policy – RajDailyTools',
      description:
        'Read the privacy policy of RajDailyTools regarding user data, non-tracking practices, and client-side calculators.',
      content: privacyContent,
      pageKey: 'privacy',
      depth: 0
    })
  );

  // Terms Page
  const termsContent = renderToStaticMarkup(
    React.createElement(TermsPage, { depth: 0 })
  );
  writePage(
    'terms.html',
    wrapWithHtmlLayout({
      title: 'Terms & Conditions – RajDailyTools',
      description:
        'Terms of service, educational disclaimer, and usage conditions for RajDailyTools portal visitors.',
      content: termsContent,
      pageKey: 'terms',
      depth: 0
    })
  );

  // --------------------------------------------------------------------------
  // 2. DEDICATED SSC CGL 2026 ROOT PAGES (depth = 0)
  // --------------------------------------------------------------------------

  // SSC CGL Recruitment 2026
  writePage(
    'ssc-cgl-2026.html',
    wrapWithHtmlLayout({
      title: `${sscCglExam.examName} – Notification, Vacancies, Exam Date & Apply Online`,
      description: sscCglExam.description || sscCglExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: sscCglExam, depth: 0 })
      ),
      pageKey: 'job-detail',
      depth: 0
    })
  );

  // SSC CGL Eligibility & Age Calculator 2026
  writePage(
    'ssc-cgl-eligibility-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CGL 2026 Eligibility Criteria & Age Calculator – RajDailyTools`,
      description: `Check detailed age limit, educational qualification, category relaxations, and physical standards for SSC CGL 2026.`,
      content: renderToStaticMarkup(
        React.createElement(ToolDetailPage, {
          toolId: 'eligibility-calculator',
          exam: sscCglExam,
          depth: 0
        })
      ),
      pageKey: 'tool-detail',
      depth: 0
    })
  );

  // SSC CGL Syllabus & Pattern 2026
  writePage(
    'ssc-cgl-syllabus-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CGL 2026 Syllabus & Exam Pattern (Tier 1 & Tier 2) – RajDailyTools`,
      description: `Complete subject-wise syllabus, tier 1 & tier 2 marking scheme, negative marking, and preparation strategy for SSC CGL 2026.`,
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: sscCglExam, depth: 0 })
      ),
      pageKey: 'job-detail',
      depth: 0
    })
  );

  // SSC CGL Admit Card 2026
  writePage(
    'ssc-cgl-admit-card-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CGL Admit Card 2026 – Download Tier 1 Hall Ticket & City Intimation Slip`,
      description: `Direct regional links to download SSC CGL 2026 Tier 1 admit card and check application status.`,
      content: renderToStaticMarkup(
        React.createElement(AdmitCardDetailPage, { exam: sscCglExam, depth: 0 })
      ),
      pageKey: 'admit-card-detail',
      depth: 0
    })
  );

  // SSC CGL Answer Key 2026
  writePage(
    'ssc-cgl-answer-key-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CGL Answer Key 2026 – Download Tier 1 Response Sheet & Score Calculator`,
      description: `Check tentative answer key, candidate response sheet, and submit question representations for SSC CGL 2026.`,
      content: renderToStaticMarkup(
        React.createElement(AnswerKeyDetailPage, { exam: sscCglExam, depth: 0 })
      ),
      pageKey: 'answer-key-detail',
      depth: 0
    })
  );

  // SSC CGL Result 2026
  writePage(
    'ssc-cgl-result-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CGL Result 2026 – Tier 1 Merit List PDF & Qualified Candidates`,
      description: `Check SSC CGL 2026 Tier 1 result, download official PDF merit list and scorecard details.`,
      content: renderToStaticMarkup(
        React.createElement(ResultDetailPage, { exam: sscCglExam, depth: 0 })
      ),
      pageKey: 'result-detail',
      depth: 0
    })
  );

  // SSC CGL Cut Off 2026
  writePage(
    'ssc-cgl-cut-off-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CGL Cut Off 2026 – Tier 1 Category-Wise Qualifying Marks`,
      description: `Official and expected cut off marks for UR, OBC, EWS, SC, ST candidates with previous year trends.`,
      content: renderToStaticMarkup(
        React.createElement(CutOffDetailPage, { exam: sscCglExam, depth: 0 })
      ),
      pageKey: 'cut-off-detail',
      depth: 0
    })
  );

  // --------------------------------------------------------------------------
  // 2b. DEDICATED SSC CHSL 2026 ROOT PAGES (depth = 0)
  // --------------------------------------------------------------------------

  // SSC CHSL 2026 Main Recruitment Page
  writePage(
    'ssc-chsl-2026.html',
    wrapWithHtmlLayout({
      title: `${sscChslExam.examName} – Notification, 2536 Vacancies, Dates & Apply Online`,
      description: sscChslExam.description || sscChslExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: sscChslExam, depth: 0 })
      ),
      pageKey: 'ssc-chsl-2026',
      depth: 0
    })
  );

  // SSC CHSL Eligibility 2026
  writePage(
    'ssc-chsl-eligibility-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Eligibility Criteria 2026 – 12th Pass Qualification & Rules`,
      description: `Complete educational eligibility criteria, 12th standard passing conditions, DEO Science with Math requirements, and BRO physical norms.`,
      content: renderToStaticMarkup(
        React.createElement(ExamTopicPage, { exam: sscChslExam, topic: 'eligibility', depth: 0 })
      ),
      pageKey: 'ssc-chsl-eligibility-2026',
      depth: 0
    })
  );

  // SSC CHSL Age Limit 2026
  writePage(
    'ssc-chsl-age-limit-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Age Limit 2026 – Cut-Off Date 01-08-2026 & Category Relaxations`,
      description: `Official age limit criteria (18-27 years), crucial cut-off date (01-08-2026), and category-wise age relaxations for SC, ST, OBC, PwBD, and ESM.`,
      content: renderToStaticMarkup(
        React.createElement(ExamTopicPage, { exam: sscChslExam, topic: 'age-limit', depth: 0 })
      ),
      pageKey: 'ssc-chsl-age-limit-2026',
      depth: 0
    })
  );

  // SSC CHSL Vacancy 2026
  writePage(
    'ssc-chsl-vacancy-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Vacancy Details 2026 – 2536 Posts for LDC, JSA & DEO`,
      description: `Post-wise and department-wise vacancy details for SSC CHSL 10+2 Examination 2026. Total 2536 tentative vacancies announced by Staff Selection Commission.`,
      content: renderToStaticMarkup(
        React.createElement(ExamTopicPage, { exam: sscChslExam, topic: 'vacancy', depth: 0 })
      ),
      pageKey: 'ssc-chsl-vacancy-2026',
      depth: 0
    })
  );

  // SSC CHSL Exam Pattern 2026
  writePage(
    'ssc-chsl-exam-pattern-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Exam Pattern 2026 – Tier 1 & Tier 2 Marking Scheme`,
      description: `Detailed examination pattern for Tier-I and Tier-II Computer Based Examination, sectional timings (15 mins), negative marking (0.50 / 1 mark), and skill test criteria.`,
      content: renderToStaticMarkup(
        React.createElement(ExamTopicPage, { exam: sscChslExam, topic: 'exam-pattern', depth: 0 })
      ),
      pageKey: 'ssc-chsl-exam-pattern-2026',
      depth: 0
    })
  );

  // SSC CHSL Syllabus 2026
  writePage(
    'ssc-chsl-syllabus-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Syllabus 2026 (Tier 1 & Tier 2) – Subject-Wise Topics PDF`,
      description: `Official subject-wise syllabus for English Language, General Intelligence, Quantitative Aptitude, General Awareness, and Computer Knowledge Module.`,
      content: renderToStaticMarkup(
        React.createElement(ExamTopicPage, { exam: sscChslExam, topic: 'syllabus', depth: 0 })
      ),
      pageKey: 'ssc-chsl-syllabus-2026',
      depth: 0
    })
  );

  // SSC CHSL Salary 2026
  writePage(
    'ssc-chsl-salary-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Salary Structure 2026 – 7th CPC Pay Scale & In-Hand Pay`,
      description: `Pay Level-2 (₹19,900 - ₹63,200), Level-4 (₹25,500 - ₹81,100), Level-5 matrix, DA (50%+), HRA, allowances, and monthly in-hand salary calculation.`,
      content: renderToStaticMarkup(
        React.createElement(ExamTopicPage, { exam: sscChslExam, topic: 'salary', depth: 0 })
      ),
      pageKey: 'ssc-chsl-salary-2026',
      depth: 0
    })
  );

  // SSC CHSL Admit Card 2026
  writePage(
    'ssc-chsl-admit-card-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Admit Card 2026 – Tier 1 Hall Ticket & City Intimation Status`,
      description: `Download SSC CHSL 10+2 Tier 1 Admit Card, check application status and regional city intimation slips on official SSC portals.`,
      content: renderToStaticMarkup(
        React.createElement(AdmitCardDetailPage, { exam: sscChslExam, depth: 0 })
      ),
      pageKey: 'ssc-chsl-admit-card-2026',
      depth: 0
    })
  );

  // SSC CHSL Answer Key 2026
  writePage(
    'ssc-chsl-answer-key-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Answer Key 2026 – Tier 1 Response Sheet & Score Calculator`,
      description: `Check tentative answer key, candidate response sheet, objection submission window, and calculate expected scores for SSC CHSL 2026.`,
      content: renderToStaticMarkup(
        React.createElement(AnswerKeyDetailPage, { exam: sscChslExam, depth: 0 })
      ),
      pageKey: 'ssc-chsl-answer-key-2026',
      depth: 0
    })
  );

  // SSC CHSL Result 2026
  writePage(
    'ssc-chsl-result-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Result 2026 – Tier 1 Merit List PDF & Selection Status`,
      description: `Check SSC CHSL 2026 Tier 1 result, download official PDF merit list and cutoff marks on ssc.gov.in.`,
      content: renderToStaticMarkup(
        React.createElement(ResultDetailPage, { exam: sscChslExam, depth: 0 })
      ),
      pageKey: 'ssc-chsl-result-2026',
      depth: 0
    })
  );

  // SSC CHSL Cut Off 2026
  writePage(
    'ssc-chsl-cut-off-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Cut Off 2026 – Expected & Category-Wise Qualifying Marks`,
      description: `Category-wise qualifying cut off marks for UR, OBC, EWS, SC, ST candidates with normalization methodology.`,
      content: renderToStaticMarkup(
        React.createElement(CutOffDetailPage, { exam: sscChslExam, depth: 0 })
      ),
      pageKey: 'ssc-chsl-cut-off-2026',
      depth: 0
    })
  );

  // SSC CHSL Important Links 2026
  writePage(
    'ssc-chsl-important-links-2026.html',
    wrapWithHtmlLayout({
      title: `SSC CHSL Important Links 2026 – Notification PDF, OTR & Official Portal`,
      description: `Direct official links to SSC CHSL 2026 Notification PDF, One-Time Registration (OTR), candidate login, and commission helpline.`,
      content: renderToStaticMarkup(
        React.createElement(ExamTopicPage, { exam: sscChslExam, topic: 'important-links', depth: 0 })
      ),
      pageKey: 'ssc-chsl-important-links-2026',
      depth: 0
    })
  );

  // SSC CHSL Apply Online 2026
  writePage(
    'ssc-chsl-apply-online-2026.html',
    wrapWithHtmlLayout({
      title: `How to Apply Online for SSC CHSL 2026 – OTR & Live Photo Guidelines`,
      description: `Step-by-step guide to register on the SSC OTR candidate portal, mandatory live photo capture with webcam/my SSC app, and fee payment.`,
      content: renderToStaticMarkup(
        React.createElement(ExamTopicPage, { exam: sscChslExam, topic: 'apply-online', depth: 0 })
      ),
      pageKey: 'ssc-chsl-apply-online-2026',
      depth: 0
    })
  );

  // --------------------------------------------------------------------------
  // 2c. DEDICATED IBPS RRB XV 2026 ROOT PAGES (depth = 0)
  // --------------------------------------------------------------------------

  // IBPS RRB XV 2026 Main Recruitment Page (50 Detailed Sections)
  writePage(
    'ibps-rrb-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: `${ibpsRrbExam.examName} – Notification, 13706 Vacancies, Dates & Apply Online`,
      description: ibpsRrbExam.description || ibpsRrbExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: ibpsRrbExam, depth: 0 })
      ),
      pageKey: 'ibps-rrb-recruitment-2026',
      depth: 0
    })
  );

  // IBPS RRB Eligibility 2026
  writePage(
    'ibps-rrb-eligibility-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Eligibility Criteria 2026 – Educational Qualification & Local Language Rules`,
      description: `Educational qualifications, degree requirements, local state language proficiency norms, and work experience criteria for CRP RRBs XV.`,
      content: renderToStaticMarkup(
        React.createElement(IbpsRrbTopicPage, { exam: ibpsRrbExam, topic: 'eligibility', depth: 0 })
      ),
      pageKey: 'ibps-rrb-eligibility-2026',
      depth: 0
    })
  );

  // IBPS RRB Age Limit 2026
  writePage(
    'ibps-rrb-age-limit-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Age Limit 2026 – Cut-Off Date 01.09.2026 & Category Relaxations`,
      description: `Official post-wise age criteria (18-28 for Office Assistant, 18-30 for Scale-I, 21-32 for Scale-II, 21-40 for Scale-III) with category relaxations.`,
      content: renderToStaticMarkup(
        React.createElement(IbpsRrbTopicPage, { exam: ibpsRrbExam, topic: 'age-limit', depth: 0 })
      ),
      pageKey: 'ibps-rrb-age-limit-2026',
      depth: 0
    })
  );

  // IBPS RRB Vacancy 2026
  writePage(
    'ibps-rrb-vacancy-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Vacancy 2026 – 13,706 Posts Across 28 Regional Rural Banks`,
      description: `Bank-wise and post-wise breakdown: Office Assistant (8,183), Officer Scale-I (4,256), Scale-II (1,047), and Scale-III (220) posts.`,
      content: renderToStaticMarkup(
        React.createElement(IbpsRrbTopicPage, { exam: ibpsRrbExam, topic: 'vacancy', depth: 0 })
      ),
      pageKey: 'ibps-rrb-vacancy-2026',
      depth: 0
    })
  );

  // IBPS RRB Exam Pattern 2026
  writePage(
    'ibps-rrb-exam-pattern-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Exam Pattern 2026 – Prelims & Mains Marking Scheme`,
      description: `Scheme of Preliminary Exam (80 Qs, 80 Marks, 45 Min), Mains Exam (200 Qs, 200 Marks, 120 Min), single exam for Scale II & III, and negative marking.`,
      content: renderToStaticMarkup(
        React.createElement(IbpsRrbTopicPage, { exam: ibpsRrbExam, topic: 'exam-pattern', depth: 0 })
      ),
      pageKey: 'ibps-rrb-exam-pattern-2026',
      depth: 0
    })
  );

  // IBPS RRB Syllabus 2026
  writePage(
    'ibps-rrb-syllabus-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Syllabus 2026 (Prelims & Mains) – Subject-Wise Topics PDF`,
      description: `Subject-wise topics for Reasoning, Quantitative Aptitude, Computer Knowledge, General/Financial Awareness, and English/Hindi Language.`,
      content: renderToStaticMarkup(
        React.createElement(IbpsRrbTopicPage, { exam: ibpsRrbExam, topic: 'syllabus', depth: 0 })
      ),
      pageKey: 'ibps-rrb-syllabus-2026',
      depth: 0
    })
  );

  // IBPS RRB Salary 2026
  writePage(
    'ibps-rrb-salary-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Salary 2026 – Clerk & Officer Scale 1, 2, 3 In-Hand Pay Scales`,
      description: `Pay scale, basic pay (₹19,900 for Clerk, ₹36,000 for PO), DA, HRA, special allowances, and net monthly in-hand salary.`,
      content: renderToStaticMarkup(
        React.createElement(IbpsRrbTopicPage, { exam: ibpsRrbExam, topic: 'salary', depth: 0 })
      ),
      pageKey: 'ibps-rrb-salary-2026',
      depth: 0
    })
  );

  // IBPS RRB Admit Card 2026
  writePage(
    'ibps-rrb-admit-card-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Admit Card 2026 – Prelims & Mains Call Letter Download Link`,
      description: `Download IBPS RRB XV 2026 Online Exam Call Letter, check examination venue, shift timings, and reporting instructions.`,
      content: renderToStaticMarkup(
        React.createElement(AdmitCardDetailPage, { exam: ibpsRrbExam, depth: 0 })
      ),
      pageKey: 'ibps-rrb-admit-card-2026',
      depth: 0
    })
  );

  // IBPS RRB Answer Key 2026
  writePage(
    'ibps-rrb-answer-key-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Answer Key 2026 – Response Sheet & Score Estimator`,
      description: `Check candidate answer key, expected raw score calculation, and cut-off marks for IBPS RRB XV recruitment.`,
      content: renderToStaticMarkup(
        React.createElement(AnswerKeyDetailPage, { exam: ibpsRrbExam, depth: 0 })
      ),
      pageKey: 'ibps-rrb-answer-key-2026',
      depth: 0
    })
  );

  // IBPS RRB Result 2026
  writePage(
    'ibps-rrb-result-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Result 2026 – Prelims / Mains Merit List & Scorecard Link`,
      description: `Check IBPS RRB XV 2026 qualifying status, provisional allotment list, and download scorecard on ibps.in.`,
      content: renderToStaticMarkup(
        React.createElement(ResultDetailPage, { exam: ibpsRrbExam, depth: 0 })
      ),
      pageKey: 'ibps-rrb-result-2026',
      depth: 0
    })
  );

  // IBPS RRB Cut Off 2026
  writePage(
    'ibps-rrb-cut-off-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Cut Off 2026 – State-Wise & Category-Wise Qualifying Marks`,
      description: `State-wise and bank-wise cut-off scores for Office Assistant and Officer Scale-I, Scale-II, and Scale-III.`,
      content: renderToStaticMarkup(
        React.createElement(CutOffDetailPage, { exam: ibpsRrbExam, depth: 0 })
      ),
      pageKey: 'ibps-rrb-cut-off-2026',
      depth: 0
    })
  );

  // IBPS RRB Important Links 2026
  writePage(
    'ibps-rrb-important-links-2026.html',
    wrapWithHtmlLayout({
      title: `IBPS RRB Important Links 2026 – Notification PDF, Registration & Official Portal`,
      description: `Verified official direct links to CRP RRBs XV Notification PDF (88 pages), online apply portal, and candidate login.`,
      content: renderToStaticMarkup(
        React.createElement(IbpsRrbTopicPage, { exam: ibpsRrbExam, topic: 'important-links', depth: 0 })
      ),
      pageKey: 'ibps-rrb-important-links-2026',
      depth: 0
    })
  );

  // IBPS RRB Apply Online 2026
  writePage(
    'ibps-rrb-apply-online-2026.html',
    wrapWithHtmlLayout({
      title: `How to Apply Online for IBPS RRB 2026 – Registration & Photo Specs Guide`,
      description: `Step-by-step registration instructions, Live Photo capture rules, left thumb impression, signature, and handwritten declaration text.`,
      content: renderToStaticMarkup(
        React.createElement(IbpsRrbTopicPage, { exam: ibpsRrbExam, topic: 'apply-online', depth: 0 })
      ),
      pageKey: 'ibps-rrb-apply-online-2026',
      depth: 0
    })
  );

  // --------------------------------------------------------------------------
  // 2d. DEDICATED AIIMS NORCET 11TH PHASE ADMIT CARD 2026 PAGES (depth = 0)
  // --------------------------------------------------------------------------
  const aiimsNorcetExam =
    EXAMS_DATABASE.find((e) => e.id === 'aiims-norcet-11-2026' || e.slug === 'aiims-norcet-11th-admit-card-2026') ||
    AIIMS_NORCET_11_EXAM;

  // AIIMS NORCET 11th Phase Master Admit Card Page
  writePage(
    'aiims-norcet-11th-admit-card-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Admit Card 2026 – Download Hall Ticket at aiimsexams.ac.in`,
      description: `AIIMS NORCET 11th Phase Nursing Officer Admit Card 2026 officially released on 09 September 2026. Download hall ticket for CBT Stage-I on 12 September 2026.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetAdmitCardPage, { exam: aiimsNorcetExam, depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-admit-card-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-admit-card-2026.html'
    })
  );

  // AIIMS NORCET Exam Date 2026
  writePage(
    'aiims-norcet-11th-exam-date-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Exam Date 2026 – Stage-I & Stage-II Schedule Announced`,
      description: `Official AIIMS NORCET-11 Examination Dates: Stage-I CBT on 12 September 2026 and Stage-II Mains CBT on 30 September 2026.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'exam-date', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-exam-date-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-exam-date-2026.html'
    })
  );

  // AIIMS NORCET Eligibility 2026
  writePage(
    'aiims-norcet-11th-eligibility-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Eligibility Criteria 2026 – Qualifications & Council Registration`,
      description: `Educational qualifications for Nursing Officer: B.Sc Nursing / Post-Basic (no experience) or GNM Diploma + 2 years hospital experience.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'eligibility', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-eligibility-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-eligibility-2026.html'
    })
  );

  // AIIMS NORCET Age Limit 2026
  writePage(
    'aiims-norcet-11th-age-limit-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Age Limit 2026 – 18 to 30 Years & Category Relaxations`,
      description: `Age criteria as on 13 August 2026: 18 - 30 years. Age relaxations for OBC (3 yrs), SC/ST (5 yrs), and PwBD (10-15 yrs).`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'age-limit', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-age-limit-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-age-limit-2026.html'
    })
  );

  // AIIMS NORCET Vacancy 2026
  writePage(
    'aiims-norcet-11th-vacancy-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Vacancy 2026 – 2,218 Nursing Officer Posts`,
      description: `Official vacancy details for 2,218 Nursing Officer vacancies across AIIMS New Delhi and regional institutes nationwide.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'vacancy', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-vacancy-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-vacancy-2026.html'
    })
  );

  // AIIMS NORCET Exam Pattern 2026
  writePage(
    'aiims-norcet-11th-exam-pattern-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Exam Pattern 2026 – Stage-I & Stage-II Marking Scheme`,
      description: `Computer Based Test pattern: 100 MCQs, 90 minutes (5 sections of 18 mins), negative marking of 1/3rd mark.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'exam-pattern', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-exam-pattern-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-exam-pattern-2026.html'
    })
  );

  // AIIMS NORCET Syllabus 2026
  writePage(
    'aiims-norcet-11th-syllabus-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Syllabus 2026 – Nursing Subjects & General Aptitude`,
      description: `Complete subject breakdown: Anatomy, Physiology, Med-Surg, Pharmacology, Pediatrics, OBG, Community Health & GK.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'syllabus', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-syllabus-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-syllabus-2026.html'
    })
  );

  // AIIMS NORCET Salary 2026
  writePage(
    'aiims-norcet-11th-salary-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET Nursing Officer Salary 2026 – Pay Level-7 In-Hand Pay & Allowances`,
      description: `Pay Level-7 structure under 7th CPC (PB-2 ₹9,300 - ₹34,800 + GP ₹4,600). In-hand salary ₹75,000 - ₹85,000 per month.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'salary', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-salary-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-salary-2026.html'
    })
  );

  // AIIMS NORCET Important Links 2026
  writePage(
    'aiims-norcet-11th-important-links-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Important Links 2026 – Direct Official Links`,
      description: `Direct links to AIIMS Official Website (aiimsexams.ac.in), Admit Card download portal, and candidate notifications.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'important-links', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-important-links-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-important-links-2026.html'
    })
  );

  // AIIMS NORCET Result 2026
  writePage(
    'aiims-norcet-11th-result-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Result 2026 – Merit List & Scorecard Link`,
      description: `Check AIIMS NORCET-11 CBT Stage-I & Stage-II Result, merit lists, and institute allotment status on aiimsexams.ac.in.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'result', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-result-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-result-2026.html'
    })
  );

  // AIIMS NORCET Answer Key 2026
  writePage(
    'aiims-norcet-11th-answer-key-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Answer Key 2026 – Response Sheet & Objections`,
      description: `Status: Not Released / To Be Updated. Check candidate answer keys and question paper objection window on aiimsexams.ac.in.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'answer-key', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-answer-key-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-answer-key-2026.html'
    })
  );

  // AIIMS NORCET Cut Off 2026
  writePage(
    'aiims-norcet-11th-cut-off-2026.html',
    wrapWithHtmlLayout({
      title: `AIIMS NORCET 11th Phase Cut Off 2026 – Qualifying Percentiles & Category Marks`,
      description: `Official qualifying percentiles: UR/EWS 50%, OBC 45%, SC/ST 40%, and PwBD relaxation per AIIMS regulations.`,
      content: renderToStaticMarkup(
        React.createElement(AiimsNorcetTopicPage, { exam: aiimsNorcetExam, topic: 'cut-off', depth: 0 })
      ),
      pageKey: 'aiims-norcet-11th-cut-off-2026',
      depth: 0,
      canonicalPath: 'aiims-norcet-11th-cut-off-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2e. DEDICATED SSC CPO SI CAPF 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const sscCpoExam =
    EXAMS_DATABASE.find((e) => e.id === 'ssc-cpo-2026' || e.slug === 'ssc-cpo-si-capf-recruitment-2026') ||
    SSC_CPO_2026_EXAM;

  writePage(
    'ssc-cpo-si-capf-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: `${sscCpoExam.examName} – Notification, 1871 Vacancies, Physical Standards & Apply Online`,
      description: sscCpoExam.description || sscCpoExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: sscCpoExam, depth: 0 })
      ),
      pageKey: 'ssc-cpo-si-capf-recruitment-2026',
      depth: 0,
      canonicalPath: 'ssc-cpo-si-capf-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2f. DEDICATED UKPSC UPPER PCS 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const ukpscExam =
    EXAMS_DATABASE.find((e) => e.id === 'ukpsc-upper-pcs-2026' || e.slug === 'ukpsc-upper-pcs-recruitment-2026') ||
    UKPSC_UPPER_PCS_2026_EXAM;

  writePage(
    'ukpsc-upper-pcs-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: `${ukpscExam.examName} – Notification, 67 Posts, Eligibility & Apply Online`,
      description: ukpscExam.description || ukpscExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: ukpscExam, depth: 0 })
      ),
      pageKey: 'ukpsc-upper-pcs-recruitment-2026',
      depth: 0,
      canonicalPath: 'ukpsc-upper-pcs-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g. DEDICATED UP SPECIAL TET 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const upTetExam =
    EXAMS_DATABASE.find((e) => e.id === 'up-special-tet-2026' || e.slug === 'up-special-tet-online-form-2026') ||
    UP_SPECIAL_TET_2026_EXAM;

  writePage(
    'up-special-tet-online-form-2026.html',
    wrapWithHtmlLayout({
      title: 'UP Special TET Online Form 2026 – Apply Online, Eligibility, Exam Pattern, Syllabus',
      description:
        'UP Special TET Online Form 2026, apply online, important dates, eligibility, age limit, application fee, exam pattern, syllabus, selection process, admit card, result and official links.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: upTetExam, depth: 0 })
      ),
      pageKey: 'up-special-tet-online-form-2026',
      depth: 0,
      canonicalPath: 'up-special-tet-online-form-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-2. DEDICATED UPSSSC SENIOR INSTRUCTOR 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const upssscExam =
    EXAMS_DATABASE.find((e) => e.id === 'upsssc-senior-instructor-2026' || e.slug === 'upsssc-senior-instructor-recruitment-2026') ||
    UPSSSC_SENIOR_INSTRUCTOR_2026_EXAM;

  writePage(
    'upsssc-senior-instructor-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'UPSSSC Senior Instructor Recruitment 2026 – 132 Posts, Notification, Eligibility, Apply Online',
      description:
        'UPSSSC Senior Instructor (ज्येष्ठ अनुदेशक) Recruitment 2026 online form under State Rural Development Institute (Advt. 21-Exam/2026). Check 132 vacancies, PET-2025 cutoff, eligibility, salary, exam pattern, syllabus, and official link.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: upssscExam, depth: 0 })
      ),
      pageKey: 'upsssc-senior-instructor-recruitment-2026',
      depth: 0,
      canonicalPath: 'upsssc-senior-instructor-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-3. DEDICATED RAJASTHAN SAFAI KARMCHARI 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const safaiKarmchariExam =
    EXAMS_DATABASE.find((e) => e.id === 'rajasthan-safai-karmchari-2026' || e.slug === 'rajasthan-safai-karmchari-recruitment-2026') ||
    RAJASTHAN_SAFAI_KARMCHARI_2026_EXAM;

  writePage(
    'rajasthan-safai-karmchari-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'Rajasthan Safai Karmchari Recruitment 2026 – 24,752 Posts, Notification, Eligibility, Apply Online',
      description:
        'Rajasthan Safai Karmchari Bharti 2026 online form under Local Self Government Department (DLB Rajasthan). Check 24,752 vacancies, lottery & practical test selection, eligibility, age limit, SSO portal direct link, and dates.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: safaiKarmchariExam, depth: 0 })
      ),
      pageKey: 'rajasthan-safai-karmchari-recruitment-2026',
      depth: 0,
      canonicalPath: 'rajasthan-safai-karmchari-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-4. DEDICATED UPSSSC VETERINARY PHARMACIST 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const vetPharmacistExam =
    EXAMS_DATABASE.find((e) => e.id === 'upsssc-veterinary-pharmacist-2026' || e.slug === 'upsssc-veterinary-pharmacist-recruitment-2026') ||
    UPSSSC_VETERINARY_PHARMACIST_2026_EXAM;

  writePage(
    'upsssc-veterinary-pharmacist-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'UPSSSC Veterinary Pharmacist Recruitment 2026 – Apply Online, 1308 Vacancy, Eligibility',
      description:
        'UPSSSC Veterinary Pharmacist Recruitment 2026 – check 1308 vacancies, important dates, PET 2025, eligibility, age limit, fee, exam pattern, syllabus, selection process and official links.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: vetPharmacistExam, depth: 0 })
      ),
      pageKey: 'upsssc-veterinary-pharmacist-recruitment-2026',
      depth: 0,
      canonicalPath: 'upsssc-veterinary-pharmacist-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-5. DEDICATED BPSSC BIHAR POLICE COMPANY COMMANDER 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const bpsscCommanderExam =
    EXAMS_DATABASE.find((e) => e.id === 'bpssc-company-commander-2026' || e.slug === 'bpssc-bihar-police-company-commander-recruitment-2026') ||
    BPSSC_COMPANY_COMMANDER_2026_EXAM;

  writePage(
    'bpssc-bihar-police-company-commander-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'BPSSC Bihar Police Home Guard Company Commander Recruitment 2026 – Apply Online, 65 Posts, Eligibility',
      description:
        'BPSSC Bihar Police Home Guard Company Commander Recruitment 2026 (Advt 11/2026) – check 65 vacancies, 5-year service criteria, age 24-50, PET standards, exam pattern, syllabus, selection process & official apply link.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: bpsscCommanderExam, depth: 0 })
      ),
      pageKey: 'bpssc-bihar-police-company-commander-recruitment-2026',
      depth: 0,
      canonicalPath: 'bpssc-bihar-police-company-commander-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-6. DEDICATED UPSC 11/2026 VARIOUS POSTS 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const upsc112026Exam =
    EXAMS_DATABASE.find((e) => e.id === 'upsc-11-2026-various-posts-2026' || e.slug === 'upsc-11-2026-various-posts-recruitment-2026') ||
    UPSC_11_2026_VARIOUS_POSTS_EXAM;

  writePage(
    'upsc-11-2026-various-posts-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'UPSC 11/2026 Various Posts Recruitment 2026 – Apply Online, 212 Vacancies, Eligibility, Notification',
      description:
        'UPSC Advertisement No. 11/2026 recruitment for 212 vacancies across 7 posts: Specialist Grade III, Assistant Editor, Specialist Grade II, Assistant Public Prosecutor, Public Law Officer. Check eligibility, age limits, syllabus, selection process and direct apply online links.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: upsc112026Exam, depth: 0 })
      ),
      pageKey: 'upsc-11-2026-various-posts-recruitment-2026',
      depth: 0,
      canonicalPath: 'upsc-11-2026-various-posts-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-7. DEDICATED DELHI HIGH COURT SPA & PA 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const delhiHcSpaPaExam =
    EXAMS_DATABASE.find((e) => e.id === 'delhi-high-court-spa-pa-2026' || e.slug === 'delhi-high-court-spa-pa-recruitment-2026') ||
    DELHI_HIGH_COURT_SPA_PA_2026_EXAM;

  writePage(
    'delhi-high-court-spa-pa-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'Delhi High Court SPA & PA Recruitment 2026 – Apply Online, 150 Posts, Eligibility, Notification',
      description:
        'Delhi High Court Senior Personal Assistant (SPA) and Personal Assistant (PA) Examination 2026 – Apply online for 150 vacancies (SPA 117, PA 33). Check eligibility, 110/100 WPM shorthand, pay levels 8 & 7, syllabus, selection stages & official notice.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: delhiHcSpaPaExam, depth: 0 })
      ),
      pageKey: 'delhi-high-court-spa-pa-recruitment-2026',
      depth: 0,
      canonicalPath: 'delhi-high-court-spa-pa-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-8. DEDICATED BANK OF INDIA SO 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const boiSoExam =
    EXAMS_DATABASE.find((e) => e.id === 'bank-of-india-so-2026' || e.slug === 'bank-of-india-so-recruitment-2026') ||
    BANK_OF_INDIA_SO_2026_EXAM;

  writePage(
    'bank-of-india-so-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'Bank of India Specialist Officer Recruitment 2026 – Apply Online, 205 Vacancies, Scale I-IV Eligibility',
      description:
        'Bank of India Specialist Officer (SO) Recruitment 2026 (Project No. 2026-27/02) – Apply online for 205 vacancies across Scales I to IV (Credit Officers, Law, IT, Risk, Treasury, Economist, Technical). Check eligibility, pay scale, exam pattern, syllabus & official notice.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: boiSoExam, depth: 0 })
      ),
      pageKey: 'bank-of-india-so-recruitment-2026',
      depth: 0,
      canonicalPath: 'bank-of-india-so-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-9. DEDICATED NIC SCIENTIFIC TECHNICAL ASSISTANT-A 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const nicStaExam =
    EXAMS_DATABASE.find((e) => e.id === 'nic-sta-2026' || e.slug === 'nic-scientific-technical-assistant-recruitment-2026') ||
    NIC_STA_2026_EXAM;

  writePage(
    'nic-scientific-technical-assistant-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'NIC Scientific/Technical Assistant-A Recruitment 2026 – Apply Online, 376 Posts, GATE Score Selection, Notification',
      description:
        'NIC Scientific/Technical Assistant-A Recruitment 2026 (Advt No: NIC/STA/2026/2) – Apply online for 376 vacancies across CSIT (300), ECE (26), and Data Science & AI (50). Level 6 Pay Matrix (₹35,400–₹1,12,400). Selection based strictly on valid GATE 2024/2025/2026 score + Document Verification.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: nicStaExam, depth: 0 })
      ),
      pageKey: 'nic-scientific-technical-assistant-recruitment-2026',
      depth: 0,
      canonicalPath: 'nic-scientific-technical-assistant-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2g-10. DEDICATED MP POLICE CONSTABLE GD 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const mpPoliceConstableExam =
    EXAMS_DATABASE.find((e) => e.id === 'mp-police-constable-2026' || e.slug === 'mpesb-mp-police-constable-recruitment-2026') ||
    MP_POLICE_CONSTABLE_2026_EXAM;

  writePage(
    'mpesb-mp-police-constable-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: 'MPESB MP Police Constable GD Recruitment 2026 – Apply Online, 7500 Posts, Rulebook, Physical Standards, Syllabus',
      description:
        'MPESB MP Police Constable GD Recruitment 2026 – Apply online for 7,500 Constable (GD) posts across SAF (700 male posts) and DEF (6,800 male/female posts). Pay Scale ₹19,500–₹62,000. Complete official rulebook breakdown, 100 marks written exam, PET scoring, physical criteria, and dates.',
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: mpPoliceConstableExam, depth: 0 })
      ),
      pageKey: 'mpesb-mp-police-constable-recruitment-2026',
      depth: 0,
      canonicalPath: 'mpesb-mp-police-constable-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2h. DEDICATED SSC JE 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const sscJeExam =
    EXAMS_DATABASE.find((e) => e.id === 'ssc-je-2026' || e.slug === 'ssc-je-recruitment-2026') ||
    SSC_JE_2026_EXAM;

  writePage(
    'ssc-je-recruitment-2026.html',
    wrapWithHtmlLayout({
      title: `${sscJeExam.examName} – Notification, 1,748 Vacancies, Eligibility, Exam Pattern & Apply Online`,
      description: sscJeExam.description || sscJeExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(JobDetailPage, { exam: sscJeExam, depth: 0 })
      ),
      pageKey: 'ssc-je-recruitment-2026',
      depth: 0,
      canonicalPath: 'ssc-je-recruitment-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2i. DEDICATED NBEMS GROUP A, B & C ADMIT CARD 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const nbemsExam =
    EXAMS_DATABASE.find((e) => e.id === 'nbems-group-abc-2026' || e.slug === 'nbems-group-a-b-c-admit-card-2026') ||
    NBEMS_GROUP_ABC_2026_EXAM;

  writePage(
    'nbems-group-a-b-c-admit-card-2026.html',
    wrapWithHtmlLayout({
      title: `${nbemsExam.examName} – Download Hall Ticket, Exam Date, Pattern & Direct Link`,
      description: nbemsExam.description || nbemsExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(NbemsAdmitCardPage, { exam: nbemsExam, depth: 0 })
      ),
      pageKey: 'nbems-group-a-b-c-admit-card-2026',
      depth: 0,
      canonicalPath: 'nbems-group-a-b-c-admit-card-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2j. DEDICATED PATNA HIGH COURT ASSISTANT ADMIT CARD 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const patnaHcExam =
    EXAMS_DATABASE.find((e) => e.id === 'patna-high-court-assistant-2026' || e.slug === 'patna-high-court-assistant-admit-card-2026') ||
    PATNA_HIGH_COURT_ASSISTANT_2026_EXAM;

  writePage(
    'patna-high-court-assistant-admit-card-2026.html',
    wrapWithHtmlLayout({
      title: `${patnaHcExam.examName} – Download Hall Ticket, Exam Date (18 Sept 2026), Written Exam & Direct Link`,
      description: patnaHcExam.description || patnaHcExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(PatnaHighCourtAdmitCardPage, { exam: patnaHcExam, depth: 0 })
      ),
      pageKey: 'patna-high-court-assistant-admit-card-2026',
      depth: 0,
      canonicalPath: 'patna-high-court-assistant-admit-card-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2k. DEDICATED MPESB KRISHI VISTAR ADHIKARI ADMIT CARD 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const mpesbExam =
    EXAMS_DATABASE.find((e) => e.id === 'mpesb-krishi-vistar-adhikari-2026' || e.slug === 'mpesb-krishi-vistar-adhikari-admit-card-2026') ||
    MPESB_KRISHI_VISTAR_ADHIKARI_2026_EXAM;

  writePage(
    'mpesb-krishi-vistar-adhikari-admit-card-2026.html',
    wrapWithHtmlLayout({
      title: `${mpesbExam.examName} – Download Hall Ticket (TAC), Exam Date (17 Sept 2026), 2784 Posts & Direct Link`,
      description: mpesbExam.description || mpesbExam.shortSummary,
      content: renderToStaticMarkup(
        React.createElement(MpesbAdmitCardPage, { exam: mpesbExam, depth: 0 })
      ),
      pageKey: 'mpesb-krishi-vistar-adhikari-admit-card-2026',
      depth: 0,
      canonicalPath: 'mpesb-krishi-vistar-adhikari-admit-card-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2l. DEDICATED ALLAHABAD UNIVERSITY PHD ADMISSION 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const auPhdExam =
    EXAMS_DATABASE.find((e) => e.id === 'allahabad-university-phd-2026' || e.slug === 'allahabad-university-phd-admission-2026') ||
    ALLAHABAD_UNIVERSITY_PHD_2026_EXAM;

  writePage(
    'allahabad-university-phd-admission-2026.html',
    wrapWithHtmlLayout({
      title: `Allahabad University PhD Admission 2026-27 – Apply Online, 959 Seats in 49 Subjects & Brochure PDF`,
      description: `University of Allahabad Ph.D. Admission 2026-27 online application form active from 02 to 25 September 2026. Check 959 seats across 49 departments, eligibility, fee, RAT exam and apply online at aupravesh2026.cbtexam.in.`,
      content: renderToStaticMarkup(
        React.createElement(AllahabadUniversityPhdPage, { exam: auPhdExam, depth: 0 })
      ),
      pageKey: 'allahabad-university-phd-admission-2026',
      depth: 0,
      canonicalPath: 'allahabad-university-phd-admission-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2m. DEDICATED NVS CLASS 11 ADMISSION 2027-28 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const nvsAdmission =
    ADMISSIONS_DATABASE.find(
      (a) => a.id === 'nvs-class-11-2027' || a.slug === 'nvs-class-11-admission-2027'
    ) || NVS_CLASS_11_2027_ADMISSION;

  writePage(
    'nvs-class-11-admission-2027.html',
    wrapWithHtmlLayout({
      title: `NVS Class 11 Admission 2027-28 – Apply Online (cbseitms.nic.in), Prospectus PDF & Dates`,
      description: `Navodaya Vidyalaya Samiti Class XI Lateral Entry Selection Test (LEST 2027) online form open till 30 Sept 2026 for 665 JNVs. Check eligibility, exam pattern, stream criteria and apply online free at cbseitms.nic.in.`,
      content: renderToStaticMarkup(
        React.createElement(NvsClass11AdmissionPage, { admission: nvsAdmission, depth: 0 })
      ),
      pageKey: 'nvs-class-11-admission-2027',
      depth: 0,
      canonicalPath: 'nvs-class-11-admission-2027.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2n. DEDICATED NVS CLASS 9 ADMISSION 2027-28 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const nvs9Admission =
    ADMISSIONS_DATABASE.find(
      (a) => a.id === 'nvs-class-9-admission-2027' || a.slug === 'nvs-class-9-admission-2027'
    ) || NVS_CLASS_9_2027_ADMISSION;

  writePage(
    'nvs-class-9-admission-2027.html',
    wrapWithHtmlLayout({
      title: `NVS Class 9 Admission 2027-28 – Apply Online (cbseitms.nic.in), Prospectus PDF & Dates`,
      description: `Navodaya Vidyalaya Samiti Class IX Lateral Entry Selection Test (LEST 2027) online form open till 30 Sept 2026 for 665 JNVs. Check eligibility, age limit (01 May 2012 to 31 July 2014), exam pattern and apply online free at cbseitms.nic.in.`,
      content: renderToStaticMarkup(
        React.createElement(NvsClass9AdmissionPage, { admission: nvs9Admission, depth: 0 })
      ),
      pageKey: 'nvs-class-9-admission-2027',
      depth: 0,
      canonicalPath: 'nvs-class-9-admission-2027.html'
    })
  );

  // --------------------------------------------------------------------------
  // 2o. DEDICATED AIBE 22nd ONLINE FORM 2026 ROOT PAGE (depth = 0)
  // --------------------------------------------------------------------------
  const aibeAdmission =
    ADMISSIONS_DATABASE.find(
      (a) => a.id === 'aibe-xxii-2026' || a.slug === 'aibe-22nd-online-form-2026'
    ) || AIBE_XXII_2026_ADMISSION;

  writePage(
    'aibe-22nd-online-form-2026.html',
    wrapWithHtmlLayout({
      title: `AIBE 22nd Online Form 2026 – Registration, BCI Eligibility, Exam Date & COP Guide`,
      description: `All India Bar Examination XXII (AIBE 22) 2026 online registration form details, Bar Council of India (BCI) eligibility, LL.B criteria, syllabus, passing marks, and Certificate of Practice (COP).`,
      content: renderToStaticMarkup(
        React.createElement(AibeAdmissionPage, { admission: aibeAdmission, depth: 0 })
      ),
      pageKey: 'aibe-22nd-online-form-2026',
      depth: 0,
      canonicalPath: 'aibe-22nd-online-form-2026.html'
    })
  );

  // --------------------------------------------------------------------------
  // 3. SUBDIRECTORIES (depth = 1)
  // --------------------------------------------------------------------------

  // All Exam Details across all stages
  console.log(`\n📄 Generating individual recruitment lifecycle pages...`);

  for (const exam of EXAMS_DATABASE) {
    // 3a. Job Detail: latest-jobs/[slug].html
    const jobDetailContent = renderToStaticMarkup(
      React.createElement(JobDetailPage, { exam, depth: 1 })
    );
    writePage(
      `latest-jobs/${exam.slug}.html`,
      wrapWithHtmlLayout({
        title: `${exam.examName} – Notification, Vacancies, Eligibility & Apply Online`,
        description: exam.description || exam.shortSummary,
        content: jobDetailContent,
        pageKey: 'job-detail',
        depth: 1
      })
    );

    // 3b. Admit Card Detail: admit-card/[slug].html
    const admitCardDetailContent = renderToStaticMarkup(
      React.createElement(AdmitCardDetailPage, { exam, depth: 1 })
    );
    writePage(
      `admit-card/${exam.slug}.html`,
      wrapWithHtmlLayout({
        title: `${exam.examName} Admit Card 2026 – Hall Ticket Download Link`,
        description: `Download ${exam.examName} hall ticket, admit card, check exam center and shift timing instructions.`,
        content: admitCardDetailContent,
        pageKey: 'admit-card-detail',
        depth: 1
      })
    );

    // 3c. Answer Key Detail: answer-key/[slug].html
    const answerKeyDetailContent = renderToStaticMarkup(
      React.createElement(AnswerKeyDetailPage, { exam, depth: 1 })
    );
    writePage(
      `answer-key/${exam.slug}.html`,
      wrapWithHtmlLayout({
        title: `${exam.examName} Answer Key 2026 – Response Sheet & Objections`,
        description: `Download official ${exam.examName} provisional answer key, calculate marks, and submit objection challenges.`,
        content: answerKeyDetailContent,
        pageKey: 'answer-key-detail',
        depth: 1
      })
    );

    // 3d. Result Detail: result/[slug].html
    const resultDetailContent = renderToStaticMarkup(
      React.createElement(ResultDetailPage, { exam, depth: 1 })
    );
    writePage(
      `result/${exam.slug}.html`,
      wrapWithHtmlLayout({
        title: `${exam.examName} Result 2026 – Merit List PDF & Scorecard`,
        description: `Check ${exam.examName} declared result, qualified candidates roll number merit list, and score cutoff.`,
        content: resultDetailContent,
        pageKey: 'result-detail',
        depth: 1
      })
    );

    // 3e. Cut Off Detail: cut-off/[slug].html
    const cutOffDetailContent = renderToStaticMarkup(
      React.createElement(CutOffDetailPage, { exam, depth: 1 })
    );
    writePage(
      `cut-off/${exam.slug}.html`,
      wrapWithHtmlLayout({
        title: `${exam.examName} Cut Off Marks 2026 – Category Wise Analysis`,
        description: `Category-wise qualifying cut off marks and safe target score analysis for ${exam.examName}.`,
        content: cutOffDetailContent,
        pageKey: 'cut-off-detail',
        depth: 1
      })
    );
  }

  // 3f. Admission Details: admission/[slug].html
  for (const admission of ADMISSIONS_DATABASE) {
    let admissionDetailContent;
    if (admission.slug === 'aibe-22nd-online-form-2026') {
      admissionDetailContent = renderToStaticMarkup(
        React.createElement(AibeAdmissionPage, { admission, depth: 1 })
      );
    } else if (admission.slug === 'nvs-class-9-admission-2027') {
      admissionDetailContent = renderToStaticMarkup(
        React.createElement(NvsClass9AdmissionPage, { admission, depth: 1 })
      );
    } else if (admission.slug === 'nvs-class-11-admission-2027') {
      admissionDetailContent = renderToStaticMarkup(
        React.createElement(NvsClass11AdmissionPage, { admission, depth: 1 })
      );
    } else {
      admissionDetailContent = renderToStaticMarkup(
        React.createElement(AdmissionDetailPage, { admission, depth: 1 })
      );
    }
    writePage(
      `admission/${admission.slug}.html`,
      wrapWithHtmlLayout({
        title: `${admission.course} – ${admission.university} Admission 2026`,
        description: admission.description,
        content: admissionDetailContent,
        pageKey: 'admission-detail',
        depth: 1
      })
    );
  }

  // 3g. Tool Detail Pages: tools/[toolId].html
  const toolsList: { id: ToolType; title: string; desc: string }[] = [
    {
      id: 'photo-resizer',
      title: 'Online Photo Resizer for Govt Job Applications (SSC, IBPS, UPSC)',
      desc: 'Resize, crop, and compress examination application photos client-side to exact KB (20-50KB) and pixel dimensions without server upload.'
    },
    {
      id: 'signature-resizer',
      title: 'Online Signature Resizer for Govt Exams – IBPS & SSC 10-20 KB',
      desc: 'Fast client-side signature resizing and compression to official 10-20KB guidelines for IBPS RRB, SSC, and Railway forms.'
    },
    {
      id: 'image-compressor',
      title: 'Image Compressor & Document Resizer – Exact KB Target Converter',
      desc: 'Compress JPG, PNG, and WebP candidate documents to target file sizes (50KB, 100KB, 200KB) with live preview and quality tuning.'
    },
    {
      id: 'age-calculator',
      title: 'Government Exam Age Calculator – Exact Age on Notification Cut-off Date',
      desc: 'Calculate exact years, months, and days on prescribed notification cut-off dates with category age relaxation for OBC, SC, ST, and EWS.'
    },
    {
      id: 'eligibility-calculator',
      title: 'Online Exam Eligibility Calculator 2026 – Check Category & Qualification',
      desc: 'Instant client-side eligibility checker for SSC, Railway, State Police, and Banking examinations based on official recruitment criteria.'
    },
    {
      id: 'salary-calculator',
      title: 'Govt Employee Salary Calculator – 7th CPC In-Hand Pay & Allowances',
      desc: 'Calculate gross and net monthly in-hand salary for Central and State government posts with 50%+ DA, HRA (X, Y, Z cities), NPS, and standard deductions.'
    },
    {
      id: 'percentage-calculator',
      title: 'Percentage & CGPA to Percentage Calculator for Exam Applications',
      desc: 'Convert CBSE/University 10-point and 4-point CGPA into exact percentages, calculate marks obtained, and determine first/second division.'
    },
    {
      id: 'bmi-calculator',
      title: 'BMI Calculator for Police, Defense & Paramilitary PST/PET Standards',
      desc: 'Calculate Body Mass Index (BMI) and check medical fitness categories for CAPF, SSC GD, Police Constable, and Army recruitments.'
    },
    {
      id: 'date-calculator',
      title: 'Date & Duration Calculator – Count Exact Days, Months & Working Days',
      desc: 'Accurately determine work experience durations, days remaining until exam dates, and interval counts between two calendar dates.'
    },
    {
      id: 'loan-emi-calculator',
      title: 'Education Loan & Personal Loan EMI Calculator for Students & Aspirants',
      desc: 'Estimate monthly EMI, total interest payable, and repayment schedules for student education loans and coaching fees.'
    },
    {
      id: 'simple-interest-calculator',
      title: 'Simple & Compound Interest Calculator – Quick Formula Solver',
      desc: 'Compute simple and compound interest for competitive exam preparation practice and personal financial planning.'
    },
    {
      id: 'physical-eligibility',
      title: 'Physical Standard (PST / PET) Eligibility Checker',
      desc: 'Verify height, chest, running endurance, and physical parameters for Police, Defense, and Paramilitary exams.'
    },
    {
      id: 'mock-test',
      title: 'Free Online Mock Test & Practice Portal 2026',
      desc: 'Access curated mock tests and speed practice tests for all major government competitive exams.'
    }
  ];

  for (const tool of toolsList) {
    const toolContent = renderToStaticMarkup(
      React.createElement(ToolDetailPage, {
        toolId: tool.id,
        exam: sscCglExam,
        depth: 1
      })
    );
    writePage(
      `tools/${tool.id}.html`,
      wrapWithHtmlLayout({
        title: `${tool.title} – RajDailyTools`,
        description: tool.desc,
        content: toolContent,
        pageKey: 'tool-detail',
        depth: 1
      })
    );
  }

  // Generate sitemap.xml with canonical base domain https://rajdailytools.in/
  const sitemapUrls = generatedFiles
    .filter((f) => f.endsWith('.html'))
    .map((f) => {
      const pathPart = f === 'index.html' ? '' : f;
      return `  <url>\n    <loc>https://rajdailytools.in/${pathPart}</loc>\n    <lastmod>2026-09-12</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>${f === 'index.html' ? '1.0' : f.includes('/') ? '0.7' : '0.9'}</priority>\n  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`✓ Generated: sitemap.xml with ${generatedFiles.filter((f) => f.endsWith('.html')).length} URLs`);

  console.log('\n✨ All static HTML pages generated successfully in dist/!\n');
}

generateAllPages().catch((err) => {
  console.error('Error during static HTML generation:', err);
  process.exit(1);
});
