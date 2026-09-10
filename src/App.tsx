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

export default function App() {
  const [currentPage, setCurrentPage] = useState<ActivePage>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('ssc-cgl-recruitment-2026');
  const [currentTool, setCurrentTool] = useState<ToolType>('eligibility-calculator');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Synchronize with URL hash for browser history / back button
  useEffect(() => {
    const handleHashChange = () => {
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
  const isChslPage = typeof currentPage === 'string' && currentPage.startsWith('ssc-chsl');
  const chslRecord = EXAMS_DATABASE.find((e) => e.id === 'ssc-chsl-2026' || e.slug === 'ssc-chsl-recruitment-2026');

  const isIbpsPage = typeof currentPage === 'string' && currentPage.startsWith('ibps-rrb');
  const ibpsRecord = EXAMS_DATABASE.find((e) => e.id === 'ibps-rrb-xv-2026' || e.slug === 'ibps-rrb-recruitment-2026');

  const isAiimsPage = typeof currentPage === 'string' && currentPage.startsWith('aiims-norcet');
  const aiimsRecord = EXAMS_DATABASE.find((e) => e.id === 'aiims-norcet-11-2026' || e.slug === 'aiims-norcet-11th-admit-card-2026');

  const currentExam: ExamRecord =
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
