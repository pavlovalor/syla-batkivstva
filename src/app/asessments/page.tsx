import Link from 'next/link';
import { assessment as sample1 } from './sample1/data';
import { assessment as sample2 } from './sample2/data';

// Force static generation to ensure this route takes priority over catch-all
export const dynamic = 'force-static';

const allAssessments = [sample1, sample2];

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen bg-bg-primary px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-display-md sm:text-display-lg font-semibold text-fg-primary mb-3 sm:mb-4 tracking-tight">
            Тести та опитування
          </h1>
          <p className="text-base sm:text-lg text-fg-secondary max-w-2xl mx-auto">
            Пройдіть тестування, щоб краще зрозуміти свій стиль батьківства та отримати персоналізовані рекомендації
          </p>
        </div>

        {/* Assessment Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {allAssessments.map((assessment) => (
            <Link
              key={assessment.id}
              href={`/asessments/${assessment.slug}`}
              className="group block p-5 sm:p-6 bg-bg-primary border border-border-secondary rounded-2xl hover:border-border-brand hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>

              {/* Content */}
              <h2 className="text-lg sm:text-xl font-semibold text-fg-primary mb-1.5 sm:mb-2 group-hover:text-fg-brand-primary transition-colors">
                {assessment.title}
              </h2>
              <p className="text-sm sm:text-base text-fg-secondary mb-3 sm:mb-4">
                {assessment.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-fg-tertiary">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {assessment.questions.length} питань
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  ~{Math.ceil(assessment.questions.length * 0.5)} хв
                </span>
              </div>

              {/* Arrow */}
              <div className="mt-3 sm:mt-4 flex items-center text-fg-brand-primary font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Почати тест
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
