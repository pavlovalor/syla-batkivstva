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
  welcomeMessage: string;
  questions: Question[];
  resultsMessage: string;
}

export interface AssessmentProgress {
  assessmentId: string;
  answers: Record<string, string>;
  currentQuestionIndex: number;
  lastUpdated: number;
}

export type AssessmentScreen = 'welcome' | 'question' | 'results';

