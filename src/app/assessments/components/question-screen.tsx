'use client';

import { useState, useRef, useEffect } from 'react';
import { cx } from '~/utils/cx';
import type { Question } from './types';
import { ProgressIndicator } from './progress-indicator';
import { NavigationButtons } from './navigation-buttons';

interface QuestionScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer: string | undefined;
  onAnswerSelect: (value: string, shouldAutoAdvance: boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  isAtLeadingEdge: boolean;
  firstUnansweredIndex: number;
}

const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const SELECTION_ANIMATION_DELAY = 300; // ms

export function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onPrevious,
  onNext,
  canGoPrevious,
  isAtLeadingEdge,
  firstUnansweredIndex,
}: QuestionScreenProps) {
  const isLastQuestion = questionIndex === totalQuestions - 1;
  const canGoNext = selectedAnswer !== undefined;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount or question change
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [questionIndex]);

  // Hide the Next button if at the leading edge (first unanswered question)
  // Show it when reviewing previous questions
  // Also hide during transition (auto-advancing animation)
  const showNextButton = !isAtLeadingEdge && !isTransitioning;

  const handleAnswerClick = (value: string) => {
    // If already transitioning, ignore clicks
    if (isTransitioning) return;

    // First, select the answer (without auto-advancing)
    onAnswerSelect(value, false);

    // If at the leading edge, wait for animation then advance
    if (isAtLeadingEdge) {
      setIsTransitioning(true);
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        onNext();
      }, SELECTION_ANIMATION_DELAY);
    }
  };

  return (
    <div className="min-h-dvh flex flex-col px-4 py-4 sm:px-6 sm:py-8 bg-bg-primary">
      <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
        {/* Progress */}
        <ProgressIndicator 
          current={questionIndex} 
          total={totalQuestions}
          firstUnansweredIndex={firstUnansweredIndex + 1}
        />

        {/* Question */}
        <div className="flex-1 flex flex-col justify-center py-4 sm:py-8">
          <h2 className="text-lg sm:text-display-sm font-semibold text-fg-primary mb-4 sm:mb-8 text-center leading-snug sm:leading-tight">
            {question.text}
          </h2>

          {/* Answer Options */}
          <div className="space-y-2 sm:space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option.value;
              const label = optionLabels[index] || String(index + 1);

              const isJustSelected = isSelected && isTransitioning;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleAnswerClick(option.value)}
                  disabled={isTransitioning}
                  className={cx(
                    'w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer',
                    isSelected
                      ? 'border-fg-brand-primary bg-brand-50 shadow-md'
                      : 'border-border-secondary hover:border-border-primary hover:bg-bg-secondary',
                    isJustSelected && 'scale-[1.02] shadow-lg',
                    isTransitioning && !isSelected && 'opacity-60'
                  )}
                >
                  <span
                    className={cx(
                      'shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-semibold text-sm sm:text-base transition-all duration-200',
                      isSelected
                        ? 'bg-fg-brand-primary text-fg-white'
                        : 'bg-bg-tertiary text-fg-secondary'
                    )}
                  >
                    {label}
                  </span>
                  <span
                    className={cx(
                      'text-sm sm:text-base font-medium transition-colors duration-200',
                      isSelected ? 'text-fg-primary' : 'text-fg-secondary'
                    )}
                  >
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <NavigationButtons
          onPrevious={onPrevious}
          onNext={onNext}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          isLastQuestion={isLastQuestion}
          showNextButton={showNextButton}
        />
      </div>
    </div>
  );
}
