'use client';

interface CommunicationStyleResultsProps {
  answers: Record<string, string>;
}

export default function CommunicationStyleResults({ answers }: CommunicationStyleResultsProps) {
  // Calculate communication score
  // 'a' answers are best (4 points), 'b' is good (3 points), 'c' is fair (2 points), 'd' is poor (1 point)
  const scores: Record<string, number> = { a: 4, b: 3, c: 2, d: 1 };
  
  let totalScore = 0;
  let maxScore = 0;
  
  Object.values(answers).forEach((answer) => {
    if (answer in scores) {
      totalScore += scores[answer];
      maxScore += 4; // Maximum possible score per question
    }
  });

  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  const getLevel = (percent: number) => {
    if (percent >= 80) return { level: 'Відмінно', color: 'text-success-600', description: 'Ваша комунікація з дитиною на високому рівні. Ви уважно слухаєте, підтримуєте емоційний зв\'язок та активно беріть участь у житті дитини.' };
    if (percent >= 60) return { level: 'Добре', color: 'text-primary-600', description: 'У вас гарна комунікація з дитиною. Є простір для покращення - спробуйте більше часу приділяти активному слуханню та обговоренню почуттів.' };
    if (percent >= 40) return { level: 'Потребує покращення', color: 'text-warning-600', description: 'Ваша комунікація потребує уваги. Спробуйте більше часу проводити з дитиною, вислуховувати її та проявляти інтерес до її життя.' };
    return { level: 'Потребує серйозної уваги', color: 'text-error-600', description: 'Рекомендується звернутись до спеціаліста або знайти способи покращити комунікацію з дитиною. Емоційний зв\'язок дуже важливий для розвитку дитини.' };
  };

  const result = getLevel(percentage);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-fg-primary">
          Оцінка комунікації
        </h2>
        <div className={`text-3xl font-bold ${result.color}`}>
          {percentage}%
        </div>
      </div>
      
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-secondary text-sm font-medium ${result.color}`}>
        {result.level}
      </div>

      <p className="text-base sm:text-lg text-fg-secondary">
        {result.description}
      </p>

      {/* Show score breakdown */}
      <div className="mt-6 p-4 rounded-lg bg-bg-secondary">
        <p className="text-sm text-fg-tertiary mb-3">Детальна оцінка:</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-fg-secondary">Загальний бал:</span>
            <span className="font-semibold text-fg-primary">{totalScore} / {maxScore}</span>
          </div>
          <div className="w-full bg-bg-primary rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full ${
                percentage >= 80 ? 'bg-success-500' :
                percentage >= 60 ? 'bg-primary-500' :
                percentage >= 40 ? 'bg-warning-500' : 'bg-error-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

