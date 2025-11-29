'use client';

import { Button } from '~/components/ui';
import type { Assessment } from './types';

interface ResultsScreenProps {
  assessment: Assessment;
  answers: Record<string, string>;
  onRetake: () => void;
}

export function ResultsScreen({ assessment, answers, onRetake }: ResultsScreenProps) {
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = assessment.questions.length;

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-12 bg-bg-primary">
      <div className="w-full max-w-2xl text-center">
        {/* Success checkmark */}
        <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-8 rounded-full bg-gradient-to-br from-success-500 to-success-700 flex items-center justify-center">
          <svg
            className="w-7 h-7 sm:w-10 sm:h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-display-xs sm:text-display-md font-semibold text-fg-primary mb-2 sm:mb-4 tracking-tight">
          Тестування завершено!
        </h1>

        <p className="text-base sm:text-lg text-fg-secondary mb-4 sm:mb-6">
          {assessment.resultsMessage}
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-bg-secondary text-fg-tertiary text-xs sm:text-sm mb-6 sm:mb-10">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Відповіді: {answeredCount} з {totalQuestions}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            size="lg"
            color="secondary"
            onClick={onRetake}
            className="w-full sm:w-auto"
          >
            Пройти знову
          </Button>

          <Button
            size="lg"
            color="primary"
            href="/asessments"
            className="w-full sm:w-auto"
          >
            До списку тестів
          </Button>
        </div>
      </div>
    </div>
  );
}
