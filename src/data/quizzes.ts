import { QuizQuestion } from '../types';
import { QUIZ_M1_M5 } from './quizzesM1to5';
import { QUIZ_M6_M8 } from './quizzesM6to8';
import { QUIZ_M9_M11 } from './quizzesM9to11';
import { QUIZ_M12_M13 } from './quizzesM12to13';
import { QUIZ_M14_M15 } from './quizzesM14to15';

export const ALL_QUIZZES: QuizQuestion[] = [
  ...QUIZ_M1_M5,
  ...QUIZ_M6_M8,
  ...QUIZ_M9_M11,
  ...QUIZ_M12_M13,
  ...QUIZ_M14_M15,
];

export interface ShuffledQuizQuestion {
  original: QuizQuestion;
  optionOrder: number[]; // permutation of [0, 1, 2, 3]
  shuffledCorrectIndex: number;
}

export function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getQuizzesByTopic(topicId: string): QuizQuestion[] {
  return ALL_QUIZZES.filter((q) => q.topicId.toLowerCase() === topicId.toLowerCase());
}

export function prepareShuffledQuiz(questions: QuizQuestion[]): ShuffledQuizQuestion[] {
  const shuffledQuestions = shuffleArray(questions);
  return shuffledQuestions.map((q) => {
    const optionOrder = shuffleArray([0, 1, 2, 3]);
    const shuffledCorrectIndex = optionOrder.indexOf(q.correctIndex);
    return {
      original: q,
      optionOrder,
      shuffledCorrectIndex,
    };
  });
}

export function generateFinalExamQuestions(): ShuffledQuizQuestion[] {
  const topicIds = Array.from({ length: 15 }, (_, idx) => `m${idx + 1}`);
  const selected: QuizQuestion[] = [];

  for (const tid of topicIds) {
    const pool = getQuizzesByTopic(tid);
    const picked = shuffleArray(pool).slice(0, 2);
    selected.push(...picked);
  }

  return prepareShuffledQuiz(selected);
}
