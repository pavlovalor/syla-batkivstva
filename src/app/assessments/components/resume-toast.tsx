'use client';

import { useEffect, useState } from 'react';
import { cx } from '~/utils/cx';
import { Button } from '~/components/ui';

interface ResumeToastProps {
  questionNumber: number;
  onResume: () => void;
  onDismiss: () => void;
}

export function ResumeToast({ questionNumber, onResume, onDismiss }: ResumeToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onDismiss();
    }, 300);
  };

  const handleResume = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onResume();
    }, 300);
  };

  return (
    <div
      className={cx(
        'fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-max w-max-[90%]',
        isVisible && !isLeaving
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 bg-bg-primary border border-border-primary rounded-2xl shadow-xl">
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-100 flex items-center justify-center">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-brand-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="flex-1">
            <p className="text-xs sm:text-sm font-medium text-fg-primary">
              Знайдено незавершене тестування
            </p>
            <p className="text-xs sm:text-sm text-fg-tertiary">
              Продовжити з питання {questionNumber}?
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Button
            size="sm"
            color="tertiary"
            onClick={handleDismiss}
          >
            Спочатку
          </Button>
          <Button
            size="sm"
            color="primary"
            onClick={handleResume}
          >
            Продовжити
          </Button>
        </div>
      </div>
    </div>
  );
}
