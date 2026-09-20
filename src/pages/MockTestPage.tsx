import React, { useState, useEffect, useRef } from 'react';
import { ActivePage } from '../types/exam';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ExamMockConfig,
  MockQuestion,
  MockTestItem,
  UserResponse,
  MockResult,
  StoredMistake,
  AttemptHistoryRecord,
  TopicScore,
  SubjectScore,
  DifficultyScore
} from '../types/mockTest';
import {
  EXAM_MOCK_CONFIGS,
  getExamMockList,
  SSC_CHSL_MOCK_01_QUESTIONS
} from '../data/mockTestData';
import { MockHeader } from '../components/mock/MockHeader';
import { CbtQuestionArea } from '../components/mock/CbtQuestionArea';
import { CbtQuestionPalette } from '../components/mock/CbtQuestionPalette';
import { MockInstructionsModal } from '../components/mock/MockInstructionsModal';
import { MockSubmitConfirmModal } from '../components/mock/MockSubmitConfirmModal';
import { MockResultDashboard } from '../components/mock/MockResultDashboard';
import { MockSolutionsReview } from '../components/mock/MockSolutionsReview';
import { MyMistakesView } from '../components/mock/MyMistakesView';
import { WeaknessRetestView } from '../components/mock/WeaknessRetestView';
import { ProgressTrackerView } from '../components/mock/ProgressTrackerView';
import { UnlockMockModal } from '../components/mock/UnlockMockModal';
import { AuthModal } from '../components/mock/AuthModal';
import {
  Search,
  Filter,
  Layers,
  Award,
  Lock,
  Unlock,
  Clock,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  XCircle,
  Zap,
  User,
  Shield,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface MockTestPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const MockTestPage: React.FC<MockTestPageProps> = ({ onNavigate, depth = 0 }) => {
  // Navigation & Category States
  const [activeTab, setActiveTab] = useState<'library' | 'my-exams' | 'my-progress' | 'my-mistakes'>('library');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExamId, setSelectedExamId] = useState<string>('ssc-chsl-2026');

  // Test Execution States
  const [testMode, setTestMode] = useState<'IDLE' | 'INSTRUCTIONS' | 'ACTIVE_TEST' | 'RESULT' | 'SOLUTIONS' | 'WEAKNESS_RETEST'>('IDLE');
  const [currentMockItem, setCurrentMockItem] = useState<MockTestItem | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<MockQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<Record<string, UserResponse>>({});
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [testLanguage, setTestLanguage] = useState<'English' | 'Hindi'>('English');
  const [isPaletteOpenMobile, setIsPaletteOpenMobile] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Result & History States
  const [currentResult, setCurrentResult] = useState<MockResult | null>(null);
  const [attemptHistories, setAttemptHistories] = useState<Record<string, AttemptHistoryRecord[]>>({});
  const [mistakesList, setMistakesList] = useState<StoredMistake[]>([]);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);

  // Modals
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [unlockTargetExamName, setUnlockTargetExamName] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Timer Ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load persistence from localStorage on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // Load user session
        const savedUser = localStorage.getItem('rajdailytools_mock_user');
        if (savedUser) setCurrentUser(JSON.parse(savedUser));

        // Load attempts history
        const savedHistories = localStorage.getItem('rajdailytools_mock_histories');
        if (savedHistories) setAttemptHistories(JSON.parse(savedHistories));

        // Load mistakes
        const savedMistakes = localStorage.getItem('rajdailytools_mistakes');
        if (savedMistakes) setMistakesList(JSON.parse(savedMistakes));

        // Check if query params specify an exam
        const params = new URLSearchParams(window.location.search);
        const examParam = params.get('exam');
        if (examParam) {
          const matched = EXAM_MOCK_CONFIGS.find((e) => e.slug === examParam || e.examId === examParam);
          if (matched) setSelectedExamId(matched.examId);
        }
      }
    } catch (e) {
      console.warn('Storage init warning:', e);
    }
  }, []);

  // Timer interval handling
  useEffect(() => {
    if (testMode === 'ACTIVE_TEST' && remainingSeconds > 0) {
      timerRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinalSubmit(); // Auto-submit when time reaches zero
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testMode, remainingSeconds]);

  // Fullscreen listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    }
  };

  // Selected Exam Configuration
  const currentExamConfig =
    EXAM_MOCK_CONFIGS.find((e) => e.examId === selectedExamId) || EXAM_MOCK_CONFIGS[0];

  // Mocks list for the current exam
  const currentExamMocks = getExamMockList(currentExamConfig.examId);

  // Filtered exams for library
  const filteredExams = EXAM_MOCK_CONFIGS.filter((e) => {
    const matchesCat = selectedCategory === 'All' || e.category === selectedCategory;
    const matchesSearch =
      e.examName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Handler: Click a mock test item
  const handleSelectMock = (mockItem: MockTestItem) => {
    if (!mockItem.isFree) {
      setUnlockTargetExamName(currentExamConfig.examName);
      setShowUnlockModal(true);
      return;
    }

    // Prepare questions for Mock 1 & 2, or fallback to default
    const questionsToLoad = mockItem.questions || SSC_CHSL_MOCK_01_QUESTIONS;
    setCurrentMockItem(mockItem);
    setActiveQuestions(questionsToLoad);
    setTestMode('INSTRUCTIONS');
  };

  // Handler: Start Mock Test from Instructions
  const handleStartMockTest = (lang: 'English' | 'Hindi') => {
    if (!currentMockItem) return;

    setTestLanguage(lang);
    setCurrentQuestionIndex(0);

    // Initialize blank responses
    const initialResponses: Record<string, UserResponse> = {};
    activeQuestions.forEach((q) => {
      initialResponses[q.id] = {
        questionId: q.id,
        status: 'NOT_VISITED',
        timeSpentSeconds: 0
      };
    });

    // First question is Visited
    if (activeQuestions.length > 0) {
      initialResponses[activeQuestions[0].id].status = 'NOT_ANSWERED';
    }

    setUserResponses(initialResponses);
    setRemainingSeconds(currentMockItem.durationMinutes * 60);
    setTestMode('ACTIVE_TEST');
  };

  // CBT Question Interactions
  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!currentQ) return;

    setUserResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedOption: optionId,
        status: prev[currentQ.id]?.status === 'MARKED_FOR_REVIEW' ? 'ANSWERED_AND_MARKED' : 'ANSWERED'
      }
    }));
  };

  const handleClearResponse = () => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!currentQ) return;

    setUserResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedOption: undefined,
        status: 'NOT_ANSWERED'
      }
    }));
  };

  const handleMarkForReview = () => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!currentQ) return;

    const hasSelection = !!userResponses[currentQ.id]?.selectedOption;
    setUserResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        status: hasSelection ? 'ANSWERED_AND_MARKED' : 'MARKED_FOR_REVIEW'
      }
    }));

    // Advance to next question if available
    if (currentQuestionIndex < activeQuestions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      const nextQ = activeQuestions[nextIndex];
      setCurrentQuestionIndex(nextIndex);
      if (userResponses[nextQ.id]?.status === 'NOT_VISITED') {
        setUserResponses((prev) => ({
          ...prev,
          [nextQ.id]: { ...prev[nextQ.id], status: 'NOT_ANSWERED' }
        }));
      }
    }
  };

  const handleSaveAndNext = () => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!currentQ) return;

    // Advance to next
    if (currentQuestionIndex < activeQuestions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      const nextQ = activeQuestions[nextIndex];
      setCurrentQuestionIndex(nextIndex);

      if (userResponses[nextQ.id]?.status === 'NOT_VISITED') {
        setUserResponses((prev) => ({
          ...prev,
          [nextQ.id]: { ...prev[nextQ.id], status: 'NOT_ANSWERED' }
        }));
      }
    } else {
      // Last question reached: open confirm submit
      setShowSubmitConfirm(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    if (index >= 0 && index < activeQuestions.length) {
      const targetQ = activeQuestions[index];
      setCurrentQuestionIndex(index);
      if (userResponses[targetQ.id]?.status === 'NOT_VISITED') {
        setUserResponses((prev) => ({
          ...prev,
          [targetQ.id]: { ...prev[targetQ.id], status: 'NOT_ANSWERED' }
        }));
      }
    }
  };

  // Final Test Submission & Result Evaluation
  const handleFinalSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setShowSubmitConfirm(false);

    const totalTimeAllowed = (currentMockItem?.durationMinutes || 60) * 60;
    const timeUsed = Math.max(1, totalTimeAllowed - remainingSeconds);

    let attempted = 0;
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;
    let netScore = 0;

    const newMistakes: StoredMistake[] = [];
    const subjectsMap: Record<string, { total: number; attempted: number; correct: number; wrong: number; score: number; maxScore: number }> = {};
    const topicsMap: Record<string, { topic: string; subject: string; total: number; correct: number; wrong: number }> = {};
    const diffMap: Record<'Easy' | 'Medium' | 'Hard', { total: number; correct: number; wrong: number }> = {
      Easy: { total: 0, correct: 0, wrong: 0 },
      Medium: { total: 0, correct: 0, wrong: 0 },
      Hard: { total: 0, correct: 0, wrong: 0 }
    };

    activeQuestions.forEach((q) => {
      // Init subject stats
      if (!subjectsMap[q.subject]) {
        subjectsMap[q.subject] = { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0, maxScore: 0 };
      }
      subjectsMap[q.subject].total++;
      subjectsMap[q.subject].maxScore += q.marks;

      // Init topic stats
      if (!topicsMap[q.topic]) {
        topicsMap[q.topic] = { topic: q.topic, subject: q.subject, total: 0, correct: 0, wrong: 0 };
      }
      topicsMap[q.topic].total++;

      // Init difficulty stats
      diffMap[q.difficulty].total++;

      const res = userResponses[q.id];
      const selected = res?.selectedOption;

      if (selected) {
        attempted++;
        subjectsMap[q.subject].attempted++;

        if (selected === q.correctAnswer) {
          correct++;
          netScore += q.marks;
          subjectsMap[q.subject].correct++;
          subjectsMap[q.subject].score += q.marks;
          topicsMap[q.topic].correct++;
          diffMap[q.difficulty].correct++;
        } else {
          wrong++;
          netScore -= q.negativeMarks;
          subjectsMap[q.subject].wrong++;
          subjectsMap[q.subject].score -= q.negativeMarks;
          topicsMap[q.topic].wrong++;
          diffMap[q.difficulty].wrong++;

          // Record mistake
          newMistakes.push({
            id: `${currentMockItem?.id}_${q.id}_${Date.now()}`,
            examId: currentExamConfig.examId,
            mockId: currentMockItem?.id || 'mock_1',
            mockNumber: currentMockItem?.mockNumber || 1,
            question: q,
            userAnswer: selected,
            attemptDate: new Date().toLocaleDateString('en-IN')
          });
        }
      } else {
        unattempted++;
      }
    });

    // Floor negative score at 0
    netScore = Math.max(0, netScore);
    const maxMarks = currentMockItem?.maximumMarks || 200;
    const percentage = (netScore / maxMarks) * 100;
    const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
    const avgTimePerQ = Math.round(timeUsed / activeQuestions.length);

    // Transform subject scores
    const subjectScores: SubjectScore[] = Object.keys(subjectsMap).map((subName) => {
      const s = subjectsMap[subName];
      return {
        subject: subName,
        total: s.total,
        attempted: s.attempted,
        correct: s.correct,
        wrong: s.wrong,
        score: Math.max(0, s.score),
        maxScore: s.maxScore,
        accuracy: s.attempted > 0 ? (s.correct / s.attempted) * 100 : 0,
        timeSeconds: Math.round(timeUsed / Object.keys(subjectsMap).length)
      };
    });

    // Transform topic scores
    const topicScores: TopicScore[] = Object.values(topicsMap).map((t) => ({
      ...t,
      accuracy: t.correct + t.wrong > 0 ? (t.correct / (t.correct + t.wrong)) * 100 : 100
    }));

    // Transform difficulty scores
    const difficultyScores: DifficultyScore[] = (['Easy', 'Medium', 'Hard'] as const).map((d) => ({
      difficulty: d,
      total: diffMap[d].total,
      correct: diffMap[d].correct,
      wrong: diffMap[d].wrong
    }));

    // Check previous attempts for this exam
    const previousExamHistory = attemptHistories[currentExamConfig.examId] || [];
    const attemptNumber = previousExamHistory.length + 1;

    const resultObj: MockResult = {
      mockId: currentMockItem?.id || 'mock',
      examId: currentExamConfig.examId,
      mockNumber: currentMockItem?.mockNumber || 1,
      mockTitle: currentMockItem?.title || 'Mock Test',
      timestamp: Date.now(),
      attemptNumber,
      totalQuestions: activeQuestions.length,
      attempted,
      correct,
      wrong,
      unattempted,
      score: netScore,
      maxMarks,
      percentage,
      accuracy,
      totalTimeSeconds: timeUsed,
      avgTimePerQuestionSeconds: avgTimePerQ,
      subjectScores,
      topicScores,
      difficultyScores,
      userResponses
    };

    setCurrentResult(resultObj);

    // Save history record
    const newRecord: AttemptHistoryRecord = {
      attemptNumber,
      score: netScore,
      maxMarks,
      accuracy,
      timeSeconds: timeUsed,
      timestamp: Date.now(),
      date: new Date().toLocaleDateString('en-IN')
    };

    const updatedHistories = {
      ...attemptHistories,
      [currentExamConfig.examId]: [...previousExamHistory, newRecord]
    };
    setAttemptHistories(updatedHistories);

    // Update Mistakes list
    const updatedMistakes = [...newMistakes, ...mistakesList];
    setMistakesList(updatedMistakes);

    // Persist to localStorage
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('rajdailytools_mock_histories', JSON.stringify(updatedHistories));
        localStorage.setItem('rajdailytools_mistakes', JSON.stringify(updatedMistakes));
      }
    } catch (e) {
      console.warn('Persistence save error:', e);
    }

    setTestMode('RESULT');
  };

  // Reattempt handler
  const handleReattempt = () => {
    if (currentMockItem) {
      setTestMode('INSTRUCTIONS');
    }
  };

  // Retry mistakes as a focused practice session
  const handleRetryMistakes = (mistakeQuestions: MockQuestion[]) => {
    if (mistakeQuestions.length === 0) return;
    setActiveQuestions(mistakeQuestions);
    setCurrentMockItem({
      id: `mistake_retest_${Date.now()}`,
      examId: currentExamConfig.examId,
      mockNumber: 0,
      title: `${currentExamConfig.shortName} Mistakes Revision Test`,
      isFree: true,
      price: 0,
      totalQuestions: mistakeQuestions.length,
      durationMinutes: Math.max(10, Math.round((mistakeQuestions.length * 72) / 60)),
      maximumMarks: mistakeQuestions.length * 2
    });
    setTestMode('INSTRUCTIONS');
  };

  // Weakness retest handler
  const handleStartWeaknessRetest = (questions: MockQuestion[]) => {
    setActiveQuestions(questions);
    setCurrentMockItem({
      id: `weakness_retest_${Date.now()}`,
      examId: currentExamConfig.examId,
      mockNumber: 0,
      title: `${currentExamConfig.shortName} Weakness Drill Retest`,
      isFree: true,
      price: 0,
      totalQuestions: questions.length,
      durationMinutes: Math.max(10, Math.round((questions.length * 72) / 60)),
      maximumMarks: questions.length * 2
    });
    setTestMode('INSTRUCTIONS');
  };

  // -------------------------------------------------------------------------
  // RENDER: ACTIVE COMPUTER-BASED TEST (CBT) INTERFACE
  // -------------------------------------------------------------------------
  if (testMode === 'ACTIVE_TEST' && currentMockItem) {
    const currentQ = activeQuestions[currentQuestionIndex];
    const userRes = userResponses[currentQ?.id];
    const isMarked =
      userRes?.status === 'MARKED_FOR_REVIEW' || userRes?.status === 'ANSWERED_AND_MARKED';

    return (
      <div className="min-h-screen bg-slate-100 flex flex-col antialiased select-none">
        {/* Sticky CBT Header */}
        <MockHeader
          examName={currentExamConfig.examName}
          mockTitle={currentMockItem.title}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={activeQuestions.length}
          remainingSeconds={remainingSeconds}
          language={testLanguage}
          onLanguageChange={setTestLanguage}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onSubmitClick={() => setShowSubmitConfirm(true)}
        />

        {/* CBT Body: Main Question Card & Question Palette */}
        <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex flex-col lg:flex-row items-start gap-6">
          {currentQ && (
            <CbtQuestionArea
              question={currentQ}
              currentIndex={currentQuestionIndex}
              totalQuestions={activeQuestions.length}
              selectedOption={userRes?.selectedOption}
              isMarkedForReview={isMarked}
              language={testLanguage}
              onSelectOption={handleSelectOption}
              onClearResponse={handleClearResponse}
              onMarkForReview={handleMarkForReview}
              onSaveAndNext={handleSaveAndNext}
              onPrevious={handlePrevious}
              onOpenPaletteMobile={() => setIsPaletteOpenMobile(true)}
            />
          )}

          <CbtQuestionPalette
            totalQuestions={activeQuestions.length}
            currentIndex={currentQuestionIndex}
            userResponses={userResponses}
            questionIds={activeQuestions.map((q) => q.id)}
            onSelectQuestion={handleJumpToQuestion}
            isOpenMobile={isPaletteOpenMobile}
            onCloseMobile={() => setIsPaletteOpenMobile(false)}
          />
        </main>

        {/* Submit Confirmation Modal */}
        {showSubmitConfirm && (
          <MockSubmitConfirmModal
            totalQuestions={activeQuestions.length}
            userResponses={userResponses}
            questionIds={activeQuestions.map((q) => q.id)}
            remainingSeconds={remainingSeconds}
            onConfirmSubmit={handleFinalSubmit}
            onResumeTest={() => setShowSubmitConfirm(false)}
          />
        )}
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // RENDER: RESULT DASHBOARD
  // -------------------------------------------------------------------------
  if (testMode === 'RESULT' && currentResult) {
    const historyList = attemptHistories[currentExamConfig.examId] || [];
    const previousBest =
      historyList.length > 1
        ? historyList
            .slice(0, -1)
            .reduce((max, h) => (h.score > max.score ? h : max), historyList[0])
        : undefined;

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb
          items={[
            { label: 'Mock Test Series', onClick: () => setTestMode('IDLE') },
            { label: currentResult.mockTitle, onClick: () => setTestMode('RESULT') },
            { label: 'Result & Performance Report' }
          ]}
          onNavigate={onNavigate}
          depth={depth}
        />

        <MockResultDashboard
          result={currentResult}
          previousBest={previousBest}
          onReviewSolutions={() => setTestMode('SOLUTIONS')}
          onReattempt={handleReattempt}
          onViewMistakes={() => {
            setActiveTab('my-mistakes');
            setTestMode('IDLE');
          }}
          onStartWeaknessRetest={() => setTestMode('WEAKNESS_RETEST')}
          onBackToLibrary={() => setTestMode('IDLE')}
        />
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // RENDER: DETAILED SOLUTIONS REVIEW
  // -------------------------------------------------------------------------
  if (testMode === 'SOLUTIONS' && currentResult) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb
          items={[
            { label: 'Mock Test Series', onClick: () => setTestMode('IDLE') },
            { label: currentResult.mockTitle, onClick: () => setTestMode('RESULT') },
            { label: 'Solutions Key' }
          ]}
          onNavigate={onNavigate}
          depth={depth}
        />

        <MockSolutionsReview
          questions={activeQuestions}
          userResponses={currentResult.userResponses}
          mockTitle={currentResult.mockTitle}
          onBackToResult={() => setTestMode('RESULT')}
          onPracticeTopic={(topic) => {
            const matchedQs = activeQuestions.filter((q) => q.topic === topic);
            if (matchedQs.length > 0) {
              handleStartWeaknessRetest(matchedQs);
            }
          }}
        />
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // RENDER: WEAKNESS ANALYSIS & RETEST
  // -------------------------------------------------------------------------
  if (testMode === 'WEAKNESS_RETEST') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb
          items={[
            { label: 'Mock Test Series', onClick: () => setTestMode('IDLE') },
            { label: currentExamConfig.examName },
            { label: 'Weakness Analysis & Retest' }
          ]}
          onNavigate={onNavigate}
          depth={depth}
        />

        <div className="mb-4">
          <button
            type="button"
            onClick={() => setTestMode(currentResult ? 'RESULT' : 'IDLE')}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            ← Back to Performance Overview
          </button>
        </div>

        <WeaknessRetestView
          examName={currentExamConfig.examName}
          topicScores={currentResult?.topicScores || []}
          availableQuestions={activeQuestions.length > 0 ? activeQuestions : SSC_CHSL_MOCK_01_QUESTIONS}
          onStartRetest={handleStartWeaknessRetest}
        />
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // RENDER: DEFAULT LANDING / EXPLORE / MY EXAMS / MY PROGRESS / MY MISTAKES
  // -------------------------------------------------------------------------
  const examMistakes = mistakesList.filter((m) => m.examId === currentExamConfig.examId);
  const currentExamHistory = attemptHistories[currentExamConfig.examId] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'Mock Test Series' }]} onNavigate={onNavigate} depth={depth} />

      {/* Top Hero Banner & Candidate Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-blue-400/30">
              <Layers className="w-3.5 h-3.5" />
              <span>CBT Exam Simulation • 2026 Updated</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
              RajDailyTools Online Mock Test Platform
            </h1>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Real computer-based exam testing with official countdown timers, live question palettes, negative marking, instant score analysis, mistakes revision notebooks, and speed tracking.
            </p>
          </div>

          {/* User Account / Auth Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 sm:p-5 flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-base shadow-xs">
                {currentUser ? currentUser.name.charAt(0).toUpperCase() : <User className="w-5 h-5" />}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">Candidate Session</div>
                <div className="text-sm font-black text-white truncate max-w-[160px]">
                  {currentUser ? currentUser.name : 'Candidate Portal'}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAuthModal(true)}
              className="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow-xs"
            >
              {currentUser ? 'Profile' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('library')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'library'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Mock Test Library</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('my-exams')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'my-exams'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>My Exams ({EXAM_MOCK_CONFIGS.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('my-progress')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'my-progress'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>My Progress & 7-Day Plan</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('my-mistakes')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'my-mistakes'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <XCircle className="w-4 h-4" />
          <span>My Mistakes ({examMistakes.length})</span>
        </button>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* TAB 1: MOCK TEST LIBRARY */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'library' && (
        <div className="space-y-8">
          {/* Exam Selection Workspace Header */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Active Selected Exam
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                  <span>{currentExamConfig.logoIcon}</span>
                  <span>{currentExamConfig.examName}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentExamConfig.organization} • 28 Full Mocks (3 Free + 25 Locked)
                </p>
              </div>

              {/* Exam Switcher Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">Change Exam:</span>
                <select
                  value={selectedExamId}
                  onChange={(e) => setSelectedExamId(e.target.value)}
                  className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {EXAM_MOCK_CONFIGS.map((e) => (
                    <option key={e.examId} value={e.examId}>
                      {e.examName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Exam Pattern Specs Badge Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <span className="text-slate-400 text-[11px] block">Questions</span>
                <strong className="text-slate-900 font-bold">{currentExamConfig.totalQuestions} Questions</strong>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <span className="text-slate-400 text-[11px] block">Duration</span>
                <strong className="text-blue-700 font-bold">{currentExamConfig.durationMinutes} Minutes</strong>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <span className="text-slate-400 text-[11px] block">Max Marks</span>
                <strong className="text-emerald-700 font-bold">{currentExamConfig.maximumMarks} Marks</strong>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <span className="text-slate-400 text-[11px] block">Negative Penalty</span>
                <strong className="text-rose-600 font-bold">-{currentExamConfig.negativeMarks} Marks</strong>
              </div>
            </div>
          </div>

          {/* Mocks Grid (28 Total: 3 Free + 25 Locked) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-lg font-black text-slate-900 font-display">
                Mock Tests for {currentExamConfig.shortName} (28 Full Mocks)
              </h3>
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  3 Free Mocks
                </span>
                <span className="flex items-center gap-1.5 text-amber-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  25 Premium (₹7 One-Time)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentExamMocks.map((mock) => {
                const isFree = mock.isFree;

                return (
                  <div
                    key={mock.id}
                    className={`bg-white rounded-3xl p-5 border transition-all flex flex-col justify-between space-y-4 ${
                      isFree
                        ? 'border-emerald-200 shadow-xs hover:border-emerald-400 hover:shadow-md'
                        : 'border-slate-200 opacity-95 hover:border-amber-300'
                    }`}
                  >
                    <div>
                      {/* Top Tag */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            isFree
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1'
                          }`}
                        >
                          {isFree ? 'FREE MOCK' : <>🔒 ₹7 LOCKED</>}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono font-semibold">
                          Test #{mock.mockNumber < 10 ? `0${mock.mockNumber}` : mock.mockNumber}
                        </span>
                      </div>

                      <h4 className="font-bold text-sm text-slate-900 font-display leading-snug">
                        {mock.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {mock.totalQuestions} Qs • {mock.durationMinutes} Mins • {mock.maximumMarks} Marks
                      </p>
                    </div>

                    {/* Action Button */}
                    <div>
                      {isFree ? (
                        <button
                          type="button"
                          onClick={() => handleSelectMock(mock)}
                          className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                        >
                          <span>Start Free Mock</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleSelectMock(mock)}
                          className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs border border-amber-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Unlock for ₹7</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 2: MY EXAMS */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'my-exams' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 font-display">
                All Government Exam Series
              </h2>
              <p className="text-xs text-slate-500">
                Every exam has its own independent question sets, mistake notebook, and score tracking.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {['All', 'SSC', 'Railway', 'Police', 'Defense'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam) => (
              <div
                key={exam.examId}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-3xl p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                      {exam.logoIcon}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                      {exam.category}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 font-display mb-1">
                    {exam.examName}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{exam.organization}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{exam.description}</p>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Mock Tests:</span>
                      <strong className="text-slate-800">28 Mocks (3 Free)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <strong className="text-slate-800">{exam.durationMinutes} Minutes</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Marking Penalty:</span>
                      <strong className="text-rose-600">-{exam.negativeMarks} Marks</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedExamId(exam.examId);
                      setActiveTab('library');
                    }}
                    className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs text-center flex items-center justify-center gap-1.5"
                  >
                    <span>View 28 Mocks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUnlockTargetExamName(exam.examName);
                      setShowUnlockModal(true);
                    }}
                    className="py-2.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs rounded-xl border border-amber-300 transition-all flex items-center gap-1"
                    title="Unlock 25 Mocks for ₹7"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>₹7</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 3: MY PROGRESS */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'my-progress' && (
        <ProgressTrackerView
          examName={currentExamConfig.examName}
          history={currentExamHistory}
          strongestSubject="General Intelligence & Reasoning"
          weakestSubject="Quantitative Aptitude"
          onStartFullMock={() => {
            setActiveTab('library');
          }}
        />
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 4: MY MISTAKES */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'my-mistakes' && (
        <MyMistakesView
          examId={currentExamConfig.examId}
          examName={currentExamConfig.examName}
          mistakes={mistakesList}
          onRetryMistakes={handleRetryMistakes}
          onClearMistakes={() => {
            const remaining = mistakesList.filter((m) => m.examId !== currentExamConfig.examId);
            setMistakesList(remaining);
            if (typeof window !== 'undefined') {
              localStorage.setItem('rajdailytools_mistakes', JSON.stringify(remaining));
            }
          }}
        />
      )}

      {/* Pre-Exam Instructions Modal */}
      {testMode === 'INSTRUCTIONS' && currentMockItem && (
        <MockInstructionsModal
          config={currentExamConfig}
          mockItem={currentMockItem}
          onStart={handleStartMockTest}
          onCancel={() => setTestMode('IDLE')}
        />
      )}

      {/* ₹7 Unlock Modal */}
      {showUnlockModal && (
        <UnlockMockModal
          examName={unlockTargetExamName}
          onClose={() => setShowUnlockModal(false)}
        />
      )}

      {/* Authentication Modal */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          currentUser={currentUser}
          onLoginSuccess={(user) => {
            setCurrentUser(user);
            if (typeof window !== 'undefined') {
              localStorage.setItem('rajdailytools_mock_user', JSON.stringify(user));
            }
          }}
          onLogout={() => {
            setCurrentUser(null);
            if (typeof window !== 'undefined') {
              localStorage.removeItem('rajdailytools_mock_user');
            }
          }}
        />
      )}
    </div>
  );
};
