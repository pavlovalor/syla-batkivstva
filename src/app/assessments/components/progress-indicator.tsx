'use client';

interface ProgressIndicatorProps {
  current: number;
  total: number;
  firstUnansweredIndex: number; // Index of the first unanswered question (0-based), equals total if all answered
}

export function ProgressIndicator({ current, total, firstUnansweredIndex }: ProgressIndicatorProps) {
  // Calculate percentages
  const currentPercentage = ((current + 1) / total) * 100;
  
  // Calculate answered percentage from firstUnansweredIndex
  // If firstUnansweredIndex is 0, no questions answered (0%)
  // If firstUnansweredIndex is 3, questions 0,1,2 are answered (3/total * 100%)
  // If firstUnansweredIndex equals total, all questions answered (100%)
  const answeredPercentage = firstUnansweredIndex > 0 ? (firstUnansweredIndex / total) * 100 : 0;

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="h-2 bg-gray-200 rounded-full flex-1 mr-4 overflow-hidden relative">
          {/* Gray bar - shows last answered question position */}
          <div
            className="h-full bg-brand-200 rounded-full transition-all duration-500 ease-out absolute inset-0 z-10"
            style={{ width: `${answeredPercentage}%` }}
          />
          {/* Orange bar - shows current question position (on top) */}
          <div
            className="h-full bg-brand-500 rounded-full transition-all duration-500 ease-out absolute inset-0 z-20"
            style={{ width: `${currentPercentage}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
          {current + 1}/{total}
        </span>
      </div>
    </div>
  );
}
