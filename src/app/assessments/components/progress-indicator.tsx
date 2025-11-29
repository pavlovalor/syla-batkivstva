'use client';

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
        <span className="text-xs sm:text-sm font-medium text-fg-secondary">
          Питання {current + 1} з {total}
        </span>
        <span className="text-xs sm:text-sm font-medium text-fg-tertiary">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="h-1.5 sm:h-2 bg-bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-fg-brand-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
