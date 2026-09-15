import React, { useState, useEffect } from 'react';
import { ActivePage, ExamRecord, AdmissionRecord } from './types/exam';
import { EXAMS_DATABASE } from './data/exams';
import { ADMISSIONS_DATABASE } from './data/admissions';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { Footer } from './components/Footer';
import { Ticker } from './components/Ticker';
import { MockTestPlaceholder } from './components/MockTestPlaceholder';

// Page Views
import { HomePage } from './pages/HomePage';
import { LatestJobsPage } from './pages/LatestJobsPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { AdmitCardPage } from './pages/AdmitCardPage';
import { AdmitCardDetailPage } from './pages/AdmitCardDetailPage';
import { AnswerKeyPage } from './pages/AnswerKeyPage';
import { AnswerKeyDetailPage } from './pages/AnswerKeyDetailPage';
import { ResultPage } from './pages/ResultPage';
import { ResultDetailPage } from './pages/ResultDetailPage';
import { CutOffPage } from './pages/CutOffPage';
import { CutOffDetailPage } from './pages/CutOffDetailPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { AdmissionDetailPage } from './pages/AdmissionDetailPage';
import { MockTestPage } from './pages/MockTestPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ToolDetailPage, ToolType } from './pages/ToolDetailPage';
import { ExamTopicPage } from './pages/ExamTopicPage';
import { ToolsPage } from './pages/ToolsPage';
import { IbpsRrbTopicPage } from './pages/IbpsRrbTopicPage';
import { AiimsNorcetAdmitCardPage } from './pages/AiimsNorcetAdmitCardPage';
import { AiimsNorcetTopicPage } from './pages/AiimsNorcetTopicPage';
import { NbemsAdmitCardPage } from './pages/NbemsAdmitCardPage';
import { PatnaHighCourtAdmitCardPage } from './pages/PatnaHighCourtAdmitCardPage';
import { MpesbAdmitCardPage } from './pages/MpesbAdmitCardPage';
import { AllahabadUniversityPhdPage } from './pages/AllahabadUniversityPhdPage';
import { NvsClass11AdmissionPage } from './pages/NvsClass11AdmissionPage';
import { NvsClass9AdmissionPage } from './pages/NvsClass9AdmissionPage';
import { AibeAdmissionPage } from './pages/AibeAdmissionPage';
import { ALLAHABAD_UNIVERSITY_PHD_2026_EXAM } from './data/allahabadUniversityPhdData';
import { NVS_CLASS_11_2027_ADMISSION } from './data/nvsClass11Data';
import { NVS_CLASS_9_2027_ADMISSION } from './data/nvsClass9Data';
import { AIBE_XXII_2026_ADMISSION } from './data/aibeData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<ActivePage>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('ssc-cgl-recruitment-2026');
  const [currentTool, setCurrentTool] = useState<ToolType>('eligibility-calculator');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Synchronize with URL hash for browser history / back button
  useEffect(() => {
    const handleHashChange = () => {
      setIsMobileDrawerOpen(false);
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      // Route /tools to ToolsPage if no specific tool
      if (hash === 'tools') {
        setCurrentPage('tools' as ActivePage);
        return;
      }

      // Support /tools/:toolId?exam=:examSlug or tool-detail/:toolId?exam=:examSlug
      if (hash.startsWith('tools/') || hash.startsWith('tool-detail/')) {
        const clean = hash.replace('tools/', '').replace('tool-detail/', '');
        let toolId = clean;
        let examParam = '';
        if (clean.includes('?exam=')) {
          const split = clean.split('?exam=');
          toolId = split[0];
          examParam = split[1];
        }
        setCurrentPage('tool-detail');
        setCurrentTool(toolId as ToolType);
        if (examParam) {
          setCurrentSlug(examParam);
        }
        return;
      }

      const parts = hash.split('/');
      const pageKey = parts[0] as ActivePage;
      const slugKey = parts[1];

      if (pageKey) {
        setCurrentPage(pageKey);
      }
      if (slugKey) {
        setCurrentSlug(slugKey);
      }
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: ActivePage, slug?: string) => {
    if (page === 'tool-detail' && slug) {
      let toolId = slug;
      let examParam = '';
      if (slug.includes('?exam=')) {
        const split = slug.split('?exam=');
        toolId = split[0];
        examParam = split[1];
      }
      setCurrentTool(toolId as ToolType);
      if (examParam) {
        setCurrentSlug(examParam);
        window.location.hash = `#/tools/${toolId}?exam=${examParam}`;
      } else {
        window.location.hash = `#/tools/${toolId}`;
      }
      setCurrentPage('tool-detail');
    } else {
      setCurrentPage(page);
      if (slug) {
        setCurrentSlug(slug);
        window.location.hash = `#/${page}/${slug}`;
      } else {
        window.location.hash = `#/${page}`;
      }
    }
    setIsMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resolve Exam Record
  const isAuPhdPage = typeof currentPage === 'string' && (currentPage.startsWith('allahabad-university-phd') || currentPage === 'allahabad-university-phd-admission-2026');
  const auPhdRecord = ALLAHABAD_UNIVERSITY_PHD_2026_EXAM;
  const aibeAdmissionRecord = AIBE_XXII_2026_ADMISSION;
  const nvsAdmissionRecord = NVS_CLASS_11_2027_ADMISSION;
  const nvs9AdmissionRecord = NVS_CLASS_9_2027_ADMISSION;

  const isMpesbPage = typeof currentPage === 'string' && (currentPage.startsWith('mpesb') || currentPage === 'mpesb-krishi-vistar-adhikari-admit-card-2026');
  const mpesbRecord = EXAMS_DATABASE.find((e) => e.id === 'mpesb-krishi-vistar-adhikari-2026' || e.slug === 'mpesb-krishi-vistar-adhikari-admit-card-2026');

  const isPatnaHcPage = typeof currentPage === 'string' && (currentPage.startsWith('patna-high-court') || currentPage === 'patna-high-court-assistant-admit-card-2026');
  const patnaHcRecord = EXAMS_DATABASE.find((e) => e.id === 'patna-high-court-assistant-2026' || e.slug === 'patna-high-court-assistant-admit-card-2026');

  const isNbemsPage = typeof currentPage === 'string' && (currentPage.startsWith('nbems') || currentPage === 'nbems-group-a-b-c-admit-card-2026');
  const nbemsRecord = EXAMS_DATABASE.find((e) => e.id === 'nbems-group-abc-2026' || e.slug === 'nbems-group-a-b-c-admit-card-2026');

  const isSscJePage = typeof currentPage === 'string' && (currentPage.startsWith('ssc-je') || currentPage === 'ssc-je-recruitment-2026');
  const sscJeRecord = EXAMS_DATABASE.find((e) => e.id === 'ssc-je-2026' || e.slug === 'ssc-je-recruitment-2026');

  const isBoiSoPage = typeof currentPage === 'string' && (currentPage.startsWith('bank-of-india-so') || currentPage.startsWith('bank-of-india'));
  const boiSoRecord = EXAMS_DATABASE.find((e) => e.id === 'bank-of-india-so-2026' || e.slug === 'bank-of-india-so-recruitment-2026');

  const isUpTetPage = typeof currentPage === 'string' && (currentPage.startsWith('up-special-tet') || currentPage.startsWith('up-tet'));
  const upTetRecord = EXAMS_DATABASE.find((e) => e.id === 'up-special-tet-2026' || e.slug === 'up-special-tet-online-form-2026');

  const isDelhiHcPage = typeof currentPage === 'string' && (currentPage.startsWith('delhi-high-court-spa-pa') || currentPage.startsWith('delhi-high-court'));
  const delhiHcRecord = EXAMS_DATABASE.find((e) => e.id === 'delhi-high-court-spa-pa-2026' || e.slug === 'delhi-high-court-spa-pa-recruitment-2026');

  const isUpscPage = typeof currentPage === 'string' && (currentPage.startsWith('upsc-11-2026-various-posts') || currentPage.startsWith('upsc-11-2026'));
  const upscRecord = EXAMS_DATABASE.find((e) => e.id === 'upsc-11-2026-various-posts-2026' || e.slug === 'upsc-11-2026-various-posts-recruitment-2026');

  const isBpsscCommanderPage = typeof currentPage === 'string' && (currentPage.startsWith('bpssc-bihar-police-company-commander') || currentPage.startsWith('bpssc-company-commander'));
  const bpsscCommanderRecord = EXAMS_DATABASE.find((e) => e.id === 'bpssc-company-commander-2026' || e.slug === 'bpssc-bihar-police-company-commander-recruitment-2026');

  const isVetPharmacistPage = typeof currentPage === 'string' && (currentPage.startsWith('upsssc-veterinary-pharmacist') || currentPage.startsWith('veterinary-pharmacist'));
  const vetPharmacistRecord = EXAMS_DATABASE.find((e) => e.id === 'upsssc-veterinary-pharmacist-2026' || e.slug === 'upsssc-veterinary-pharmacist-recruitment-2026');

  const isUpssscPage = typeof currentPage === 'string' && (currentPage.startsWith('upsssc-senior-instructor') || currentPage === 'upsssc');
  const upssscRecord = EXAMS_DATABASE.find((e) => e.id === 'upsssc-senior-instructor-2026' || e.slug === 'upsssc-senior-instructor-recruitment-2026');

  const isSafaiKarmchariPage = typeof currentPage === 'string' && (currentPage.startsWith('rajasthan-safai-karmchari') || currentPage.startsWith('safai-karmchari'));
  const safaiKarmchariRecord = EXAMS_DATABASE.find((e) => e.id === 'rajasthan-safai-karmchari-2026' || e.slug === 'rajasthan-safai-karmchari-recruitment-2026');

  const isUkpscPage = typeof currentPage === 'string' && currentPage.startsWith('ukpsc');
  const ukpscRecord = EXAMS_DATABASE.find((e) => e.id === 'ukpsc-upper-pcs-2026' || e.slug === 'ukpsc-upper-pcs-recruitment-2026');

  const isChslPage = typeof currentPage === 'string' && currentPage.startsWith('ssc-chsl');
  const chslRecord = EXAMS_DATABASE.find((e) => e.id === 'ssc-chsl-2026' || e.slug === 'ssc-chsl-recruitment-2026');

  const isIbpsPage = typeof currentPage === 'string' && currentPage.startsWith('ibps-rrb');
  const ibpsRecord = EXAMS_DATABASE.find((e) => e.id === 'ibps-rrb-xv-2026' || e.slug === 'ibps-rrb-recruitment-2026');

  const isAiimsPage = typeof currentPage === 'string' && currentPage.startsWith('aiims-norcet');
  const aiimsRecord = EXAMS_DATABASE.find((e) => e.id === 'aiims-norcet-11-2026' || e.slug === 'aiims-norcet-11th-admit-card-2026');

  const currentExam: ExamRecord =
    (isBoiSoPage && boiSoRecord) ? boiSoRecord :
    (isDelhiHcPage && delhiHcRecord) ? delhiHcRecord :
    (isUpscPage && upscRecord) ? upscRecord :
    (isAuPhdPage && auPhdRecord) ? auPhdRecord :
    (isMpesbPage && mpesbRecord) ? mpesbRecord :
    (isPatnaHcPage && patnaHcRecord) ? patnaHcRecord :
    (isNbemsPage && nbemsRecord) ? nbemsRecord :
    (isSscJePage && sscJeRecord) ? sscJeRecord :
    (isBpsscCommanderPage && bpsscCommanderRecord) ? bpsscCommanderRecord :
    (isVetPharmacistPage && vetPharmacistRecord) ? vetPharmacistRecord :
    (isSafaiKarmchariPage && safaiKarmchariRecord) ? safaiKarmchariRecord :
    (isUpssscPage && upssscRecord) ? upssscRecord :
    (isUpTetPage && upTetRecord) ? upTetRecord :
    (isUkpscPage && ukpscRecord) ? ukpscRecord :
    (isChslPage && chslRecord) ? chslRecord :
    (isIbpsPage && ibpsRecord) ? ibpsRecord :
    (isAiimsPage && aiimsRecord) ? aiimsRecord :
    (EXAMS_DATABASE.find((e) => e.slug === currentSlug) ||
    EXAMS_DATABASE.find((e) => e.id === currentSlug) ||
    EXAMS_DATABASE[0]);

  // Resolve Admission Record
  const currentAdmission: AdmissionRecord =
    ADMISSIONS_DATABASE.find((a) => a.slug === currentSlug) ||
    ADMISSIONS_DATABASE[0];

  // Render Page Switcher
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;

      case 'latest-jobs':
        return <LatestJobsPage onNavigate={handleNavigate} />;

      case 'job-detail':
        return <JobDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'admit-card':
        return <AdmitCardPage onNavigate={handleNavigate} />;

      case 'admit-card-detail':
        return <AdmitCardDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'answer-key':
        return <AnswerKeyPage onNavigate={handleNavigate} />;

      case 'answer-key-detail':
        return <AnswerKeyDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'result':
        return <ResultPage onNavigate={handleNavigate} />;

      case 'result-detail':
        return <ResultDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'cut-off':
        return <CutOffPage onNavigate={handleNavigate} />;

      case 'cut-off-detail':
        return <CutOffDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'admission':
        return <AdmissionPage onNavigate={handleNavigate} />;

      case 'admission-detail':
        if (currentSlug === 'aibe-22nd-online-form-2026' || currentSlug === 'aibe-22nd-2026' || currentSlug === 'aibe-xxii-2026') {
          return <AibeAdmissionPage admission={aibeAdmissionRecord} onNavigate={handleNavigate} />;
        }
        if (currentSlug === 'nvs-class-9-admission-2027' || currentSlug === 'nvs-class-9-admission') {
          return <NvsClass9AdmissionPage admission={nvs9AdmissionRecord} onNavigate={handleNavigate} />;
        }
        if (currentSlug === 'nvs-class-11-admission-2027' || currentSlug === 'nvs-class-11-admission') {
          return <NvsClass11AdmissionPage admission={nvsAdmissionRecord} onNavigate={handleNavigate} />;
        }
        if (currentSlug === 'allahabad-university-phd-admission-2026' || currentSlug === 'allahabad-university-phd-2026') {
          return <AllahabadUniversityPhdPage exam={auPhdRecord} onNavigate={handleNavigate} />;
        }
        return (
          <AdmissionDetailPage
            admission={currentAdmission}
            onNavigate={handleNavigate}
          />
        );

      case 'mock-test':
        return <MockTestPage onNavigate={handleNavigate} />;

      case 'mock-test-not-found':
        return (
          <MockTestPlaceholder exam={currentExam} onNavigate={handleNavigate} />
        );

      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;

      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;

      case 'privacy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;

      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;

      case 'tool-detail':
        return (
          <ToolDetailPage
            toolId={currentTool}
            exam={currentExam}
            onNavigate={handleNavigate}
            onSelectExam={(newSlug) => setCurrentSlug(newSlug)}
          />
        );

      case 'ssc-chsl-2026':
        return <JobDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ssc-chsl-eligibility-2026':
        return <ExamTopicPage exam={currentExam} topic="eligibility" onNavigate={handleNavigate} />;

      case 'ssc-chsl-age-limit-2026':
        return <ExamTopicPage exam={currentExam} topic="age-limit" onNavigate={handleNavigate} />;

      case 'ssc-chsl-vacancy-2026':
        return <ExamTopicPage exam={currentExam} topic="vacancy" onNavigate={handleNavigate} />;

      case 'ssc-chsl-exam-pattern-2026':
        return <ExamTopicPage exam={currentExam} topic="exam-pattern" onNavigate={handleNavigate} />;

      case 'ssc-chsl-syllabus-2026':
        return <ExamTopicPage exam={currentExam} topic="syllabus" onNavigate={handleNavigate} />;

      case 'ssc-chsl-salary-2026':
        return <ExamTopicPage exam={currentExam} topic="salary" onNavigate={handleNavigate} />;

      case 'ssc-chsl-admit-card-2026':
        return <AdmitCardDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ssc-chsl-answer-key-2026':
        return <AnswerKeyDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ssc-chsl-result-2026':
        return <ResultDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ssc-chsl-cut-off-2026':
        return <CutOffDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ssc-chsl-important-links-2026':
        return <ExamTopicPage exam={currentExam} topic="important-links" onNavigate={handleNavigate} />;

      case 'ssc-chsl-apply-online-2026':
        return <ExamTopicPage exam={currentExam} topic="apply-online" onNavigate={handleNavigate} />;

      case 'tools':
        return <ToolsPage onNavigate={handleNavigate} />;

      case 'ibps-rrb-recruitment-2026':
        return <JobDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ibps-rrb-eligibility-2026':
        return <IbpsRrbTopicPage exam={currentExam} topic="eligibility" onNavigate={handleNavigate} />;

      case 'ibps-rrb-age-limit-2026':
        return <IbpsRrbTopicPage exam={currentExam} topic="age-limit" onNavigate={handleNavigate} />;

      case 'ibps-rrb-vacancy-2026':
        return <IbpsRrbTopicPage exam={currentExam} topic="vacancy" onNavigate={handleNavigate} />;

      case 'ibps-rrb-exam-pattern-2026':
        return <IbpsRrbTopicPage exam={currentExam} topic="exam-pattern" onNavigate={handleNavigate} />;

      case 'ibps-rrb-syllabus-2026':
        return <IbpsRrbTopicPage exam={currentExam} topic="syllabus" onNavigate={handleNavigate} />;

      case 'ibps-rrb-salary-2026':
        return <IbpsRrbTopicPage exam={currentExam} topic="salary" onNavigate={handleNavigate} />;

      case 'ibps-rrb-important-links-2026':
        return <IbpsRrbTopicPage exam={currentExam} topic="important-links" onNavigate={handleNavigate} />;

      case 'ibps-rrb-apply-online-2026':
        return <IbpsRrbTopicPage exam={currentExam} topic="apply-online" onNavigate={handleNavigate} />;

      case 'ibps-rrb-admit-card-2026':
        return <AdmitCardDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ibps-rrb-answer-key-2026':
        return <AnswerKeyDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ibps-rrb-result-2026':
        return <ResultDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'ibps-rrb-cut-off-2026':
        return <CutOffDetailPage exam={currentExam} onNavigate={handleNavigate} />;

      // AIIMS NORCET 11th Phase Routes
      case 'aiims-norcet-11th-admit-card-2026':
        return <AiimsNorcetAdmitCardPage exam={currentExam} onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-exam-date-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="exam-date" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-eligibility-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="eligibility" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-age-limit-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="age-limit" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-vacancy-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="vacancy" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-exam-pattern-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="exam-pattern" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-syllabus-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="syllabus" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-salary-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="salary" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-important-links-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="important-links" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-result-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="result" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-answer-key-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="answer-key" onNavigate={handleNavigate} />;

      case 'aiims-norcet-11th-cut-off-2026':
        return <AiimsNorcetTopicPage exam={currentExam} topic="cut-off" onNavigate={handleNavigate} />;

      case 'aibe-22nd-online-form-2026':
      case 'aibe-22nd-2026':
      case 'aibe-xxii-2026':
        return <AibeAdmissionPage admission={aibeAdmissionRecord} onNavigate={handleNavigate} />;

      case 'nvs-class-9-admission-2027':
      case 'nvs-class-9-admission':
        return <NvsClass9AdmissionPage admission={nvs9AdmissionRecord} onNavigate={handleNavigate} />;

      case 'nvs-class-11-admission-2027':
      case 'nvs-class-11-admission':
        return <NvsClass11AdmissionPage admission={nvsAdmissionRecord} onNavigate={handleNavigate} />;

      case 'allahabad-university-phd-admission-2026':
      case 'allahabad-university-phd-2026':
        return <AllahabadUniversityPhdPage exam={auPhdRecord || currentExam} onNavigate={handleNavigate} />;

      case 'mpesb-krishi-vistar-adhikari-admit-card-2026':
      case 'mpesb-krishi-vistar-adhikari-2026':
        return <MpesbAdmitCardPage exam={mpesbRecord || currentExam} onNavigate={handleNavigate} />;

      case 'patna-high-court-assistant-admit-card-2026':
      case 'patna-high-court-assistant-2026':
        return <PatnaHighCourtAdmitCardPage exam={patnaHcRecord || currentExam} onNavigate={handleNavigate} />;

      case 'nbems-group-a-b-c-admit-card-2026':
      case 'nbems-admit-card-2026':
      case 'nbems-group-abc-2026':
        return <NbemsAdmitCardPage exam={nbemsRecord || currentExam} onNavigate={handleNavigate} />;

      case 'ssc-je-recruitment-2026':
      case 'ssc-je-2026':
        return <JobDetailPage exam={sscJeRecord || currentExam} onNavigate={handleNavigate} />;

      case 'ukpsc-upper-pcs-recruitment-2026':
      case 'ukpsc-upper-pcs-2026':
        return <JobDetailPage exam={ukpscRecord || currentExam} onNavigate={handleNavigate} />;

      case 'up-special-tet-online-form-2026':
      case 'up-special-tet-2026':
        return <JobDetailPage exam={upTetRecord || currentExam} onNavigate={handleNavigate} />;

      case 'upsssc-senior-instructor-recruitment-2026':
      case 'upsssc-senior-instructor-2026':
        return <JobDetailPage exam={upssscRecord || currentExam} onNavigate={handleNavigate} />;

      case 'bank-of-india-so-recruitment-2026':
      case 'bank-of-india-so-2026':
        return <JobDetailPage exam={boiSoRecord || currentExam} onNavigate={handleNavigate} />;

      case 'delhi-high-court-spa-pa-recruitment-2026':
      case 'delhi-high-court-spa-pa-2026':
        return <JobDetailPage exam={delhiHcRecord || currentExam} onNavigate={handleNavigate} />;

      case 'upsc-11-2026-various-posts-recruitment-2026':
      case 'upsc-11-2026-various-posts-2026':
        return <JobDetailPage exam={upscRecord || currentExam} onNavigate={handleNavigate} />;

      case 'bpssc-bihar-police-company-commander-recruitment-2026':
      case 'bpssc-company-commander-2026':
        return <JobDetailPage exam={bpsscCommanderRecord || currentExam} onNavigate={handleNavigate} />;

      case 'upsssc-veterinary-pharmacist-recruitment-2026':
      case 'upsssc-veterinary-pharmacist-2026':
        return <JobDetailPage exam={vetPharmacistRecord || currentExam} onNavigate={handleNavigate} />;

      case 'rajasthan-safai-karmchari-recruitment-2026':
      case 'rajasthan-safai-karmchari-2026':
        return <JobDetailPage exam={safaiKarmchariRecord || currentExam} onNavigate={handleNavigate} />;

      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Live Updates Notification Ticker */}
      <Ticker onNavigate={handleNavigate} />

      {/* Main Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileDrawerOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Responsive Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
