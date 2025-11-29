'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AssessmentProgress } from './types';

interface AssessmentStore {
  progress: Record<string, AssessmentProgress>;
  
  // Actions
  getProgress: (assessmentId: string) => AssessmentProgress | undefined;
  saveProgress: (assessmentId: string, answers: Record<string, string>, currentQuestionIndex: number) => void;
  clearProgress: (assessmentId: string) => void;
  clearAllProgress: () => void;
}

export const useAssessmentStore = create<AssessmentStore>()(
  persist(
    (set, get) => ({
      progress: {},

      getProgress: (assessmentId: string) => {
        return get().progress[assessmentId];
      },

      saveProgress: (assessmentId: string, answers: Record<string, string>, currentQuestionIndex: number) => {
        set((state) => ({
          progress: {
            ...state.progress,
            [assessmentId]: {
              assessmentId,
              answers,
              currentQuestionIndex,
              lastUpdated: Date.now(),
            },
          },
        }));
      },

      clearProgress: (assessmentId: string) => {
        set((state) => {
          const { [assessmentId]: _, ...rest } = state.progress;
          return { progress: rest };
        });
      },

      clearAllProgress: () => {
        set({ progress: {} });
      },
    }),
    {
      name: 'assessment-progress',
    }
  )
);

