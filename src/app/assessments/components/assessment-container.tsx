'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import type { Assessment, AssessmentScreen } from './types';
import { useAssessmentStore } from './assessment-store';
import { WelcomeScreen } from './welcome-screen';
import { QuestionScreen } from './question-screen';
import { ResultsScreen } from './results-screen';
import { ResumeToast } from './resume-toast';

interface AssessmentContainerProps {
  assessment: Assessment;
}

export function AssessmentContainer({ assessment }: AssessmentContainerProps) {
  const [screen, setScreen] = useState<AssessmentScreen>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResumeToast, setShowResumeToast] = useState(false);
  const [savedProgress, setSavedProgress] = useState<{
    questionIndex: number;
    answers: Record<string, string>;
  } | null>(null);

  const { getProgress, saveProgress, clearProgress } = useAssessmentStore();

  // Find the first unanswered question index (the "leading edge")
  const firstUnansweredIndex = useMemo(() => {
    for (let i = 0; i < assessment.questions.length; i++) {
      const question = assessment.questions[i];
      if (!(question.id in answers)) {
        return i;
      }
    }
    // All questions answered - return length (past the last question)
    return assessment.questions.length;
  }, [assessment.questions, answers]);

  // User is at the leading edge if they're at the first unanswered question
  const isAtLeadingEdge = currentQuestionIndex === firstUnansweredIndex;

  // Check for saved progress on mount
  useEffect(() => {
    const progress = getProgress(assessment.id);
    if (progress && Object.keys(progress.answers).length > 0) {
      setSavedProgress({
        questionIndex: progress.currentQuestionIndex,
        answers: progress.answers,
      });
      setShowResumeToast(true);
    }
  }, [assessment.id, getProgress]);

  // Save progress whenever answers or question index changes
  useEffect(() => {
    if (screen === 'question') {
      saveProgress(assessment.id, answers, currentQuestionIndex);
    }
  }, [assessment.id, answers, currentQuestionIndex, screen, saveProgress]);

  const handleStart = useCallback(() => {
    setScreen('question');
    setCurrentQuestionIndex(0);
  }, []);

  const handleResume = useCallback(() => {
    if (savedProgress) {
      setAnswers(savedProgress.answers);
      setCurrentQuestionIndex(savedProgress.questionIndex);
      setScreen('question');
    }
    setShowResumeToast(false);
  }, [savedProgress]);

  const handleDismissResume = useCallback(() => {
    setShowResumeToast(false);
    clearProgress(assessment.id);
  }, [assessment.id, clearProgress]);

  const handleAnswerSelect = useCallback((value: string, shouldAutoAdvance: boolean) => {
    const currentQuestion = assessment.questions[currentQuestionIndex];
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    // Auto-advance if at the leading edge
    if (shouldAutoAdvance) {
      if (currentQuestionIndex < assessment.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        // Last question - go to results
        setScreen('results');
        clearProgress(assessment.id);
      }
    }
  }, [assessment.questions, assessment.id, currentQuestionIndex, clearProgress]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Last question - go to results
      setScreen('results');
      clearProgress(assessment.id);
    }
  }, [assessment.id, assessment.questions.length, currentQuestionIndex, clearProgress]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      // First question - go back to welcome
      setScreen('welcome');
    }
  }, [currentQuestionIndex]);

  const handleRetake = useCallback(() => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setScreen('welcome');
    clearProgress(assessment.id);
  }, [assessment.id, clearProgress]);

  const currentQuestion = assessment.questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  return (
    <>
      {screen === 'welcome' && (
        <WelcomeScreen assessment={assessment} onStart={handleStart} />
      )}

      {screen === 'question' && currentQuestion && (
        <QuestionScreen
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={assessment.questions.length}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={true}
          isAtLeadingEdge={isAtLeadingEdge}
        />
      )}

      {screen === 'results' && (
        <ResultsScreen
          assessment={assessment}
          answers={answers}
          onRetake={handleRetake}
        />
      )}

      {showResumeToast && savedProgress && (
        <ResumeToast
          questionNumber={savedProgress.questionIndex + 1}
          onResume={handleResume}
          onDismiss={handleDismissResume}
        />
      )}
    </>
  );
}

