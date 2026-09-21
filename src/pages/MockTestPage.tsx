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
  getQuestionsForMock,
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
  ArrowRight,
  Sparkles,
  BarChart2,
  Flame,
  Calendar,
  Compass,
  ArrowLeft
} from 'lucide-react';

interface MockTestPageProps {
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

export const MockTestPage: React.FC<MockTestPageProps> = ({ onNavigate, depth = 0 }) => {
  // Navigation & Category States
  // 'home' displays the rich homepage with Latest, Popular, All Exams
  // 'exam-detail' displays the single exam with all 53 mocks
  // 'my-exams', 'my-progress', 'my-mistakes' are user tabs
  const [activeTab, setActiveTab] = useState<'home' | 'exam-detail' | 'my-exams' | 'my-progress' | 'my-mistakes'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [mockFilterType, setMockFilterType] = useState<'all' | 'free' | 'locked'>('all');
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
        const savedUser = localStorage.getItem('rajdailytools_mock_user');
        if (savedUser) setCurrentUser(JSON.parse(savedUser));

        const savedHistories = localStorage.getItem('rajdailytools_mock_histories');
        if (savedHistories) setAttemptHistories(JSON.parse(savedHistories));

        const savedMistakes = localStorage.getItem('rajdailytools_mistakes');
        if (savedMistakes) setMistakesList(JSON.parse(savedMistakes));

        const params = new URLSearchParams(window.location.search);
        const examParam = params.get('exam');
        if (examParam) {
          const matched = EXAM_MOCK_CONFIGS.find((e) => e.slug === examParam || e.examId === examParam);
          if (matched) {
            setSelectedExamId(matched.examId);
            setActiveTab('exam-detail');
          }
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

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (typeof document === 'undefined') return;
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
        setIsFullscreen(true);
      } else {
        document.exitFullscreen?.().catch(() => {});
        setIsFullscreen(false);
      }
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
    }
  };

  // Find currently active exam configuration
  const currentExamConfig: ExamMockConfig =
    EXAM_MOCK_CONFIGS.find((e) => e.examId === selectedExamId) || EXAM_MOCK_CONFIGS[0];

  // Dynamically generate all 53 mocks for this exam
  const currentExamMocks: MockTestItem[] = getExamMockList(currentExamConfig);

  // Filter exams for directory / search
  const filteredExams = EXAM_MOCK_CONFIGS.filter((exam) => {
    const matchesCat =
      selectedCategory === 'All' ||
      (selectedCategory === 'SSC' && exam.category.toLowerCase().includes('ssc')) ||
      (selectedCategory === 'State' && exam.category.toLowerCase().includes('state')) ||
      exam.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      exam.examName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.shortName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  // Popular & Latest exam slices
  const popularExams = EXAM_MOCK_CONFIGS.slice(0, 3);
  const latestMockExams = EXAM_MOCK_CONFIGS.slice(0, 4);

  // Click on a mock card
  const handleSelectMock = (mock: MockTestItem) => {
    if (!mock.isFree) {
      setUnlockTargetExamName(currentExamConfig.examName);
      setShowUnlockModal(true);
      return;
    }

    // Load actual or targeted practice questions for this exam
    const qList = getQuestionsForMock(currentExamConfig.examId, mock.mockNumber);
    setActiveQuestions(qList);
    setCurrentMockItem(mock);
    setTestMode('INSTRUCTIONS');
  };

  // Start direct Free Mock 01 from an Exam Card
  const handleStartExamFreeMock = (exam: ExamMockConfig) => {
    setSelectedExamId(exam.examId);
    const mocks = getExamMockList(exam);
    const freeMock1 = mocks[0];
    const qList = getQuestionsForMock(exam.examId, 1);
    setActiveQuestions(qList);
    setCurrentMockItem(freeMock1);
    setTestMode('INSTRUCTIONS');
  };

  // Start test from Instructions Modal
  const handleStartMockTest = (preferredLang: 'English' | 'Hindi') => {
    if (!currentMockItem) return;

    setTestLanguage(preferredLang);
    setCurrentQuestionIndex(0);

    const initialResponses: Record<string, UserResponse> = {};
    activeQuestions.forEach((q) => {
      initialResponses[q.id] = {
        questionId: q.id,
        status: 'NOT_VISITED',
        timeSpentSeconds: 0
      };
    });

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
      if (!subjectsMap[q.subject]) {
        subjectsMap[q.subject] = { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0, maxScore: 0 };
      }
      subjectsMap[q.subject].total++;
      subjectsMap[q.subject].maxScore += q.marks;

      if (!topicsMap[q.topic]) {
        topicsMap[q.topic] = { topic: q.topic, subject: q.subject, total: 0, correct: 0, wrong: 0 };
      }
      topicsMap[q.topic].total++;

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

    netScore = Math.max(0, netScore);
    const maxMarks = currentMockItem?.maximumMarks || 200;
    const percentage = (netScore / maxMarks) * 100;
    const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
    const avgTimePerQ = Math.round(timeUsed / activeQuestions.length);

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
        timeSeconds: Math.round(timeUsed / Math.max(1, Object.keys(subjectsMap).length))
      };
    });

    const topicScores: TopicScore[] = Object.values(topicsMap).map((t) => ({
      ...t,
      accuracy: t.correct + t.wrong > 0 ? (t.correct / (t.correct + t.wrong)) * 100 : 100
    }));

    const difficultyScores: DifficultyScore[] = (['Easy', 'Medium', 'Hard'] as const).map((d) => ({
      difficulty: d,
      total: diffMap[d].total,
      correct: diffMap[d].correct,
      wrong: diffMap[d].wrong
    }));

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

    const updatedMistakes = [...newMistakes, ...mistakesList];
    setMistakesList(updatedMistakes);

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

  const handleReattempt = () => {
    if (currentMockItem) {
      setTestMode('INSTRUCTIONS');
    }
  };

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
      <div id="cbt-screen-container" className="min-h-screen bg-slate-100 flex flex-col antialiased select-none">
        <MockHeader
          examName={currentExamConfig.examName}
          mockTitle={currentMockItem.title}
          mockNumber={currentMockItem.mockNumber}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={activeQuestions.length}
          remainingSeconds={remainingSeconds}
          language={testLanguage}
          onLanguageChange={setTestLanguage}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onSubmitClick={() => setShowSubmitConfirm(true)}
        />

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
      <div id="cbt-result-screen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
      <div id="cbt-solutions-screen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
      <div id="cbt-weakness-screen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
            id="btn-back-from-weakness"
            onClick={() => setTestMode(currentResult ? 'RESULT' : 'IDLE')}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Performance Overview</span>
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

  // Common Exam Data Variables
  const examMistakes = mistakesList.filter((m) => m.examId === currentExamConfig.examId);
  const currentExamHistory = attemptHistories[currentExamConfig.examId] || [];

  return (
    <div id="mock-test-main-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Home', onClick: () => onNavigate?.('home') },
          { label: 'Mock Test Series', onClick: () => setActiveTab('home') },
          ...(activeTab === 'exam-detail' ? [{ label: currentExamConfig.shortName }] : [])
        ]}
        onNavigate={onNavigate}
        depth={depth}
      />

      {/* Top Hero Banner & Candidate Bar */}
      <div id="mock-hero-banner" className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CBT Exam Simulation • 2026 Updated</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
              RajDailyTools Online Mock Test Platform
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Real computer-based exam testing with official countdown timers, live question palettes, negative marking, instant score analysis, mistakes revision notebooks, and speed tracking.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                ✓ 3 Free Mocks Per Exam
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                🔒 50 Premium Mocks (₹7 One-Time)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
                53 Total Mocks / Exam
              </span>
            </div>
          </div>

          {/* User Account / Auth Card */}
          <div id="candidate-session-card" className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 sm:p-5 flex items-center justify-between gap-4 shrink-0 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/30">
                {currentUser ? currentUser.name.charAt(0).toUpperCase() : <User className="w-5 h-5" />}
              </div>
              <div>
                <div className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">Candidate Account</div>
                <div className="text-sm font-black text-white truncate max-w-[160px]">
                  {currentUser ? currentUser.name : 'Candidate Portal'}
                </div>
                <div className="text-[11px] text-slate-300">
                  {currentUser ? 'Session active' : 'Click to sign in'}
                </div>
              </div>
            </div>

            <button
              type="button"
              id="btn-open-candidate-auth"
              onClick={() => setShowAuthModal(true)}
              className="px-4 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow-xs cursor-pointer active:scale-95"
            >
              {currentUser ? 'Profile' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div id="mock-navigation-tabs" className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        <button
          type="button"
          id="tab-home-library"
          onClick={() => setActiveTab('home')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'home'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Explore Exams</span>
        </button>

        <button
          type="button"
          id="tab-exam-detail"
          onClick={() => setActiveTab('exam-detail')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'exam-detail'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{currentExamConfig.shortName} (53 Mocks)</span>
        </button>

        <button
          type="button"
          id="tab-my-exams"
          onClick={() => setActiveTab('my-exams')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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
          id="tab-my-progress"
          onClick={() => setActiveTab('my-progress')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'my-progress'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Progress & Study Plan</span>
        </button>

        <button
          type="button"
          id="tab-my-mistakes"
          onClick={() => setActiveTab('my-mistakes')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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
      {/* VIEW 1: HOME PAGE / MOCK LIBRARY WITH SECTIONS                      */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'home' && (
        <div id="mock-library-homepage" className="space-y-10">
          {/* Search & Category Filter Header */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search exam, commission, or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {['All', 'SSC', 'State', 'Central'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 1: Latest Mock Tests */}
          <section id="section-latest-mocks" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                  Latest Mock Tests
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                2026 Examination Patterns
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestMockExams.map((exam) => (
                <div
                  key={exam.examId}
                  className="bg-white rounded-3xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl p-2 rounded-xl bg-slate-50 border border-slate-100">
                        {exam.logoIcon}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-100">
                        3 Free Mocks
                      </span>
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900 font-display">
                      {exam.examName}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      {exam.organization} • 2026
                    </p>
                    <div className="text-xs text-slate-600 space-y-1 pt-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Total Series:</span>
                        <strong className="text-slate-800 font-bold">53 Mocks (3 Free + 50 Paid)</strong>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Pattern:</span>
                        <span className="text-slate-700 font-medium">{exam.totalQuestions} Qs • {exam.durationMinutes} Min</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => handleStartExamFreeMock(exam)}
                      className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Start Free Mock</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedExamId(exam.examId);
                        setActiveTab('exam-detail');
                      }}
                      className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                    >
                      View All 53 Mocks
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Popular Exams */}
          <section id="section-popular-exams" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                  Popular Government Exams
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Most Attempted by Aspirants
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {popularExams.map((exam) => (
                <div
                  key={exam.examId}
                  className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 relative overflow-hidden"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl p-2.5 rounded-2xl bg-white shadow-xs border border-slate-100">
                        {exam.logoIcon}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                        ₹7 Unlock
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-black text-slate-900 font-display">
                        {exam.examName}
                      </h3>
                      <p className="text-xs text-slate-500">{exam.organization}</p>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-100 text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Mock Tests:</span>
                        <strong className="text-blue-700 font-bold">53 Mocks</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Free Practice:</span>
                        <strong className="text-emerald-600 font-bold">3 Full Mocks (No Pay)</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Language:</span>
                        <span className="text-slate-700 font-medium">Bilingual (English / Hindi)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => handleStartExamFreeMock(exam)}
                      className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Start Free Mock</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedExamId(exam.examId);
                        setActiveTab('exam-detail');
                      }}
                      className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      53 Mocks
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: All Exams Directory */}
          <section id="section-all-exams" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                All Available Exams ({filteredExams.length})
              </h2>
              <span className="text-xs text-slate-500">
                Full 53 Mock Series for each examination
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExams.map((exam) => (
                <div
                  key={exam.examId}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-3xl p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                        {exam.logoIcon}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                        {exam.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-black text-base text-slate-900 font-display">
                        {exam.examName}
                      </h3>
                      <p className="text-xs text-slate-500">{exam.organization} • 2026</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {exam.description}
                    </p>

                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Mock Tests:</span>
                        <strong className="text-slate-800 font-bold">53 Mocks (3 Free + 50 Paid)</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Duration:</span>
                        <strong className="text-slate-800 font-bold">{exam.durationMinutes} Minutes</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Marking:</span>
                        <strong className="text-rose-600 font-bold">+{exam.subjects[0]?.marks || 2} / -{exam.negativeMarks}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Language:</span>
                        <span className="text-slate-700 font-medium">Bilingual (हिन्दी / Eng)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleStartExamFreeMock(exam)}
                      className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Start Free Mock</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedExamId(exam.examId);
                        setActiveTab('exam-detail');
                      }}
                      className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* VIEW 2: EXAM DETAIL WITH ALL 53 MOCKS                               */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'exam-detail' && (
        <div id="exam-detail-view" className="space-y-8">
          {/* Exam Header Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Exam Mock Series
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs font-semibold text-slate-500">
                    53 Full Length Tests
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display flex items-center gap-3">
                  <span>{currentExamConfig.logoIcon}</span>
                  <span>{currentExamConfig.examName}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {currentExamConfig.organization} • 3 Free Full Mocks + 50 Premium Mocks (₹7 One-Time Unlock)
                </p>
              </div>

              {/* Exam Switcher Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">Switch Exam:</span>
                <select
                  value={selectedExamId}
                  onChange={(e) => setSelectedExamId(e.target.value)}
                  className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {EXAM_MOCK_CONFIGS.map((e) => (
                    <option key={e.examId} value={e.examId}>
                      {e.examName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Unlock Banner for this Exam */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-xs font-black">
                    SPECIAL OFFER
                  </span>
                  <h4 className="font-extrabold text-sm sm:text-base text-amber-950 font-display">
                    Unlock 50 More Mocks for {currentExamConfig.shortName}
                  </h4>
                </div>
                <p className="text-xs text-amber-800">
                  One-time payment of ₹7. No recurring subscriptions. Full solutions and unlimited attempts included.
                </p>
              </div>

              <button
                type="button"
                id="btn-exam-unlock-banner"
                onClick={() => {
                  setUnlockTargetExamName(currentExamConfig.examName);
                  setShowUnlockModal(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Lock className="w-4 h-4" />
                <span>Unlock 50 Mocks — ₹7</span>
              </button>
            </div>

            {/* Pattern Specs */}
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

          {/* Mock Test Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-lg font-black text-slate-900 font-display">
              All 53 Full-Length Tests ({currentExamConfig.shortName})
            </h3>

            <div className="flex items-center gap-2 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMockFilterType('all')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  mockFilterType === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                All 53
              </button>
              <button
                type="button"
                onClick={() => setMockFilterType('free')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  mockFilterType === 'free'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Free Only (3)
              </button>
              <button
                type="button"
                onClick={() => setMockFilterType('locked')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  mockFilterType === 'locked'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                Premium (50)
              </button>
            </div>
          </div>

          {/* 53 Mocks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentExamMocks
              .filter((mock) => {
                if (mockFilterType === 'free') return mock.isFree;
                if (mockFilterType === 'locked') return !mock.isFree;
                return true;
              })
              .map((mock) => {
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
                          Mock #{mock.mockNumber < 10 ? `0${mock.mockNumber}` : mock.mockNumber}
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
      )}

      {/* ------------------------------------------------------------------- */}
      {/* VIEW 3: MY EXAMS (Independent per exam)                             */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'my-exams' && (
        <div id="my-exams-view" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 font-display">
                All Government Exam Series
              </h2>
              <p className="text-xs text-slate-500">
                Every exam has its own independent question sets, mistake notebook, and score tracking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAM_MOCK_CONFIGS.map((exam) => {
              const examAttempts = attemptHistories[exam.examId] || [];
              const bestScore = examAttempts.reduce((max, a) => (a.score > max ? a.score : max), 0);

              return (
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
                        <strong className="text-slate-800">53 Mocks (3 Free)</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Attempts Taken:</span>
                        <strong className="text-blue-700">{examAttempts.length} Tests</strong>
                      </div>
                      {examAttempts.length > 0 && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Highest Score:</span>
                          <strong className="text-emerald-700">{bestScore} Marks</strong>
                        </div>
                      )}
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
                        setActiveTab('exam-detail');
                      }}
                      className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs text-center flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View 53 Mocks</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setUnlockTargetExamName(exam.examName);
                        setShowUnlockModal(true);
                      }}
                      className="py-2.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs rounded-xl border border-amber-300 transition-all flex items-center gap-1 cursor-pointer"
                      title="Unlock 50 Mocks for ₹7"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>₹7</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* VIEW 4: PROGRESS & 7-DAY STUDY PLAN                                 */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'my-progress' && (
        <ProgressTrackerView
          examName={currentExamConfig.examName}
          history={currentExamHistory}
          strongestSubject={currentExamConfig.subjects[0]?.name || 'General Intelligence'}
          weakestSubject={currentExamConfig.subjects[1]?.name || 'Quantitative Aptitude'}
          onStartFullMock={() => {
            setActiveTab('exam-detail');
          }}
        />
      )}

      {/* ------------------------------------------------------------------- */}
      {/* VIEW 5: MY MISTAKES NOTEBOOK                                        */}
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
          onNavigateSection={(section) => {
            if (section === 'my-exams') setActiveTab('my-exams');
            else if (section === 'mistakes') setActiveTab('my-mistakes');
            else if (section === 'progress') setActiveTab('my-progress');
            else if (section === 'performance') setActiveTab('my-progress');
          }}
        />
      )}
    </div>
  );
};
