import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  RotateCcw,
  ArrowRight,
  Calculator,
} from 'lucide-react';
import { Language, TopicQuizAttempt } from '../types';
import { tArray, tText, UI_TEXT } from '../data/i18n';
import {
  getQuizzesByTopic,
  prepareShuffledQuiz,
  ShuffledQuizQuestion,
} from '../data/quizzes';
import { triggerSuccessConfetti } from '../utils/formatters';

interface TopicQuizProps {
  topicId: string;
  lang: Language;
  previousBest?: TopicQuizAttempt;
  onSaveScore: (topicId: string, score: number, total: number) => void;
  onNextTopic?: () => void;
}

const tr = (uz: string, ru: string, en: string, lang: Language) =>
  lang === 'uz' ? uz : lang === 'ru' ? ru : en;

export const TopicQuiz: React.FC<TopicQuizProps> = ({
  topicId,
  lang,
  previousBest,
  onSaveScore,
  onNextTopic,
}) => {
  const [questions, setQuestions] = useState<ShuffledQuizQuestion[]>(() =>
    prepareShuffledQuiz(getQuizzesByTopic(topicId))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(600); // 10 min

  const resetQuiz = useCallback(() => {
    setQuestions(prepareShuffledQuiz(getQuizzesByTopic(topicId)));
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowHint(false);
    setIsFinished(false);
    setSecondsLeft(600);
  }, [topicId]);

  useEffect(() => {
    resetQuiz();
  }, [resetQuiz]);

  const finishAndSave = useCallback(
    (answersMap: Record<number, number>) => {
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (answersMap[idx] === q.shuffledCorrectIndex) {
          correctCount += 1;
        }
      });
      setIsFinished(true);
      onSaveScore(topicId, correctCount, questions.length);
      if (questions.length > 0 && correctCount / questions.length >= 0.8) {
        triggerSuccessConfetti();
      }
    },
    [onSaveScore, questions, topicId]
  );

  useEffect(() => {
    if (!timerEnabled || isFinished) return;
    if (secondsLeft <= 0) {
      finishAndSave(selectedAnswers);
      return;
    }
    const id = window.setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerEnabled, isFinished, secondsLeft, finishAndSave, selectedAnswers]);

  if (questions.length === 0) return null;

  const currentItem = questions[currentIndex];
  const rawOptions = tArray(currentItem.original.options, lang);
  const hasAnsweredCurrent = selectedAnswers[currentIndex] !== undefined;
  const userChoice = selectedAnswers[currentIndex];

  const handleSelectOption = (optIdx: number) => {
    if (hasAnsweredCurrent || isFinished) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optIdx }));
  };

  const handleNext = () => {
    setShowHint(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      finishAndSave(selectedAnswers);
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  if (isFinished) {
    const score = questions.reduce(
      (acc, q, idx) => acc + (selectedAnswers[idx] === q.shuffledCorrectIndex ? 1 : 0),
      0
    );
    const pct = Math.round((score / questions.length) * 100);
    const gradeText =
      pct >= 90
        ? tText(UI_TEXT.gradeExcellent, lang)
        : pct >= 75
        ? tText(UI_TEXT.gradeGood, lang)
        : pct >= 60
        ? tText(UI_TEXT.gradeSatisfactory, lang)
        : tText(UI_TEXT.gradeNeedsReview, lang);

    const wrongItems = questions
      .map((q, idx) => ({ q, idx, chosen: selectedAnswers[idx] }))
      .filter((item) => item.chosen !== item.q.shuffledCorrectIndex);

    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">
              {topicId.toUpperCase()} · {tr('TEST NATIJASI', 'РЕЗУЛЬТАТ ТЕСТА', 'QUIZ RESULT', lang)}
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              {score} / {questions.length} ({pct}%)
            </h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">{gradeText}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={resetQuiz}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{tText(UI_TEXT.retakeQuiz, lang)}</span>
            </button>
            {onNextTopic && (
              <button
                type="button"
                onClick={onNextTopic}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                <span>{tText(UI_TEXT.nextTopic, lang)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {wrongItems.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {tText(UI_TEXT.wrongAnswersReview, lang)} ({wrongItems.length})
            </h4>
            <div className="space-y-3">
              {wrongItems.map(({ q, idx, chosen }) => {
                const opts = tArray(q.original.options, lang);
                const correctText = opts[q.optionOrder[q.shuffledCorrectIndex]];
                const chosenText =
                  chosen !== undefined ? opts[q.optionOrder[chosen]] : tr('Belgilanmagan', 'Без ответа', 'Unanswered', lang);
                return (
                  <div
                    key={q.original.id}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs sm:text-sm"
                  >
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {idx + 1}. {tText(q.original.question, lang)}
                    </div>
                    <div className="text-rose-600 dark:text-rose-400">
                      ✗ {tr('Sizning javobingiz:', 'Ваш ответ:', 'Your answer:', lang)} {chosenText}
                    </div>
                    <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                      ✓ {tr('To‘g‘ri javob:', 'Правильный ответ:', 'Correct answer:', lang)} {correctText}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 pt-1">
                      {tText(q.original.explanation, lang)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 no-print">
      {/* Top Quiz Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono tabular-nums">
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {tr('Savol', 'Вопрос', 'Question', lang)} {currentIndex + 1} / {questions.length}
          </span>
          {previousBest && (
            <>
              <span aria-hidden="true">·</span>
              <span>
                {tr('Eng yaxshi natija:', 'Лучший результат:', 'Best score:', lang)}{' '}
                {previousBest.percentage}%
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setTimerEnabled((v) => !v);
              setSecondsLeft(600);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
              timerEnabled
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span className="font-mono tabular-nums">
              {timerEnabled ? formatTimer(secondsLeft) : tText(UI_TEXT.enableTimer, lang)}
            </span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-transform duration-200 origin-left"
          style={{ transform: `scaleX(${(currentIndex + 1) / questions.length})` }}
        />
      </div>

      {/* Question Prompt */}
      <div className="space-y-2">
        {currentItem.original.isCalculation && (
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>{tr('Hisob-kitob masalasi', 'Расчетная задача', 'Calculation Problem', lang)}</span>
          </div>
        )}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
          {tText(currentItem.original.question, lang)}
        </h4>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {currentItem.optionOrder.map((origOptIdx, displayIdx) => {
          const optionLabel = rawOptions[origOptIdx];
          const isCorrectOption = displayIdx === currentItem.shuffledCorrectIndex;
          const isChosen = userChoice === displayIdx;

          let cardStyle =
            'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-indigo-400 text-slate-800 dark:text-slate-100';
          if (hasAnsweredCurrent) {
            if (isCorrectOption) {
              cardStyle =
                'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-100';
            } else if (isChosen && !isCorrectOption) {
              cardStyle =
                'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-100';
            } else {
              cardStyle =
                'bg-slate-50/50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500 opacity-75';
            }
          }

          return (
            <motion.button
              key={origOptIdx}
              type="button"
              whileTap={!hasAnsweredCurrent ? { scale: 0.99 } : undefined}
              disabled={hasAnsweredCurrent}
              onClick={() => handleSelectOption(displayIdx)}
              className={`w-full text-left p-4 rounded-xl border transition-colors flex items-start justify-between gap-3 ${
                hasAnsweredCurrent ? 'cursor-default' : 'cursor-pointer'
              } ${cardStyle}`}
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold mt-0.5 shrink-0 opacity-70">
                  {String.fromCharCode(65 + displayIdx)}.
                </span>
                <span className="text-sm font-medium leading-relaxed">{optionLabel}</span>
              </div>
              {hasAnsweredCurrent && isCorrectOption && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              )}
              {hasAnsweredCurrent && isChosen && !isCorrectOption && (
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Hint or Explanation Footer */}
      {!hasAnsweredCurrent ? (
        <div className="space-y-3 pt-1">
          <button
            type="button"
            onClick={() => setShowHint((h) => !h)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{tText(UI_TEXT.showHint, lang)}</span>
          </button>
          {showHint && (
            <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              {tText(currentItem.original.hint, lang)}
            </div>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 pt-2"
        >
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white mr-1.5">
              {tr('Izoh:', 'Пояснение:', 'Explanation:', lang)}
            </span>
            {tText(currentItem.original.explanation, lang)}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>
                {currentIndex + 1 < questions.length
                  ? tText(UI_TEXT.nextQuestion, lang)
                  : tText(UI_TEXT.finishQuiz, lang)}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
