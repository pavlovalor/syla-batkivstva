'use client';

import { Button } from '~/components/ui';
import type { Assessment } from './types';

interface WelcomeScreenProps {
  assessment: Assessment;
  onStart: () => void;
}

export function WelcomeScreen({ assessment, onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-12 bg-bg-primary">
      <div className="w-full max-w-2xl text-center">
        {/* Decorative element */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        <h1 className="text-display-xs sm:text-display-md font-semibold text-fg-primary mb-2 sm:mb-4 tracking-tight">
          {assessment.title}
        </h1>

        <p className="text-base sm:text-lg text-fg-secondary mb-3 sm:mb-6">
          {assessment.description}
        </p>

        <p className="text-sm sm:text-base text-fg-tertiary mb-6 sm:mb-10 max-w-lg mx-auto leading-relaxed">
          {assessment.welcomeMessage}
        </p>

        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <Button
            size="xl"
            color="primary"
            onClick={onStart}
            className="w-full sm:w-auto !px-6 sm:!px-8 !py-3 sm:!py-4 !rounded-xl !text-base sm:!text-lg shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
          >
            Почати тестування
          </Button>

          <span className="text-xs sm:text-sm text-fg-quaternary">
            {assessment.questions.length} питань • ~{Math.ceil(assessment.questions.length * 0.5)} хв
          </span>
        </div>
      </div>
    </div>
  );
}
