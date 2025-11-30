import type React from 'react';

export interface AnswerOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  text: string;
  options: AnswerOption[];
}

export interface Assessment {
  id: string;
  slug: string;
  title: string;
  description: string;
  questions: Question[];
  introComponent?: React.ComponentType;
  resultsComponent?: React.ComponentType<{ answers: Record<string, string> }>;
}

export interface AssessmentProgress {
  assessmentId: string;
  answers: Record<string, string>;
  currentQuestionIndex: number;
  lastUpdated: number;
}

export interface Showcase {
  title: string;
  description: React.ReactNode;
}

export type AssessmentScreen = 'welcome' | 'question' | 'results';

