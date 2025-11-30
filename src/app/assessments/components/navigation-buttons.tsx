'use client';

import { Button } from '~/components/ui';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  showNextButton: boolean;
}

export function NavigationButtons({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
  showNextButton,
}: NavigationButtonsProps) {
  return (
    <div className="flex items-center justify-between gap-3 sm:gap-4 w-full max-w-2xl mx-auto mt-4 sm:mt-8 pb-2">
      <Button
        size="lg"
        color="secondary"
        onClick={onPrevious}
        isDisabled={!canGoPrevious}
      >
        ← Назад
      </Button>

      {showNextButton && (
        <Button
          size="lg"
          color="primary"
          onClick={onNext}
          isDisabled={!canGoNext}
        >
          {isLastQuestion ? 'Завершити →' : 'Вперед →'}
        </Button>
      )}
    </div>
  );
}
