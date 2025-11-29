'use client';

import Link from 'next/link';
import { Button } from '~/components/ui';

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" data-icon="leading">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" data-icon="trailing">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

export default function NotFound() {
  return (
    <section className="min-h-screen bg-bg-primary flex items-center justify-center py-16 md:py-24">
      <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:gap-24 md:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center md:gap-12">
          {/* Error badge */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-fg-brand-primary text-md font-semibold">
                Помилка 404
              </span>

              <h1 className="text-display-md font-semibold text-fg-primary md:text-display-lg lg:text-display-xl tracking-tight">
                Сторінку не знайдено
              </h1>
            </div>
            <p className="text-lg text-fg-tertiary md:text-xl max-w-lg mx-auto">
              На жаль, ми не змогли знайти сторінку, яку ви шукаєте. 
              Можливо, вона була переміщена або видалена.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:justify-center sm:self-auto">
            <Button
              color="secondary"
              size="xl"
              onClick={() => window.history.back()}
              iconLeading={ArrowLeftIcon}
            >
              Повернутись назад
            </Button>
            <Button 
              size="xl" 
              href="/"
              iconTrailing={HomeIcon}
            >
              На головну
            </Button>
          </div>
        </div>

        {/* Quick links */}
        <div className="mx-auto w-full max-w-3xl">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <li className="flex flex-col gap-6 bg-bg-secondary rounded-2xl p-5 text-left md:p-6 border border-border-secondary">
              <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-fg-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-fg-primary">Тести та опитування</h3>
                  <p className="text-md text-fg-tertiary">Пройдіть тестування для батьків</p>
                </div>
                <Link 
                  href="/assessments" 
                  className="text-fg-brand-primary font-medium text-md flex items-center gap-1 hover:underline"
                >
                  Перейти до тестів
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </li>

            <li className="flex flex-col gap-6 bg-bg-secondary rounded-2xl p-5 text-left md:p-6 border border-border-secondary">
              <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-fg-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-fg-primary">Головна сторінка</h3>
                  <p className="text-md text-fg-tertiary">Повернутись на головну</p>
                </div>
                <Link 
                  href="/" 
                  className="text-fg-brand-primary font-medium text-md flex items-center gap-1 hover:underline"
                >
                  На головну
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

