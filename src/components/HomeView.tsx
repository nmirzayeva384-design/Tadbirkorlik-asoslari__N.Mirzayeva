import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Award,
  LayoutGrid,
  List,
  GitBranch,
} from 'lucide-react';
import { Language, TopicData, UserProgress } from '../types';
import { tText, UI_TEXT } from '../data/i18n';
import { TopicIcon } from '../utils/formatters';

interface HomeViewProps {
  topics: TopicData[];
  lang: Language;
  progress: UserProgress;
  onSelectTopic: (topicId: string) => void;
  onOpenCalculators: () => void;
  onOpenFinalExam: () => void;
}

const tr = (uz: string, ru: string, en: string, lang: Language) =>
  lang === 'uz' ? uz : lang === 'ru' ? ru : en;

function CountUpNumber({ target, duration = 900 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVal(target);
      return;
    }
    let start: number | null = null;
    let rafId = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(p * target));
      if (p < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };
    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [target, duration]);

  return <>{val}</>;
}

export const HomeView: React.FC<HomeViewProps> = ({
  topics,
  lang,
  progress,
  onSelectTopic,
  onOpenCalculators,
  onOpenFinalExam,
}) => {
  const [catalogView, setCatalogView] = useState<'grid' | 'list' | 'roadmap'>('grid');

  const completedCount = progress.completedTopics.length;
  const quizKeys = Object.keys(progress.quizScores);
  const quizzesPassedCount = quizKeys.length;
  const avgQuizPct =
    quizzesPassedCount > 0
      ? Math.round(
          quizKeys.reduce((acc, k) => acc + (progress.quizScores[k]?.percentage || 0), 0) /
            quizzesPassedCount
        )
      : 0;
  const hasPerfectQuiz = quizKeys.some((k) => progress.quizScores[k]?.percentage === 100);

  // Overall mastery ring (50% weight topics read + 50% weight quizzes taken)
  const overallCompletionPct = Math.round(
    ((completedCount / 15) * 0.5 + (quizzesPassedCount / 15) * 0.5) * 100
  );
  const circleCircumference = 2 * Math.PI * 42;
  const strokeDashoffset =
    circleCircumference - (overallCompletionPct / 100) * circleCircumference;

  const scrollToCatalog = () => {
    document.getElementById('topics-catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-12">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        {/* Subtle floating geometric shapes (compositor-only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-10 w-72 h-72 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-400">
                {tText(UI_TEXT.heroKicker, lang)}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                {tText(UI_TEXT.heroTitle, lang)}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {tText(UI_TEXT.heroSubtitle, lang)}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={scrollToCatalog}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>{tText(UI_TEXT.exploreTopicsBtn, lang)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onOpenCalculators}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 text-slate-800 dark:text-slate-100 text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{tText(UI_TEXT.openCalculatorsBtn, lang)}</span>
                </button>
              </div>
            </motion.div>

            {/* Progress Ring Summary Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative w-24 h-24 shrink-0">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-slate-100 dark:text-slate-800"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circleCircumference}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-mono font-extrabold text-lg tabular-nums text-slate-900 dark:text-white">
                    {overallCompletionPct}%
                  </div>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-slate-100">
                    {tText(UI_TEXT.progressDashboardTitle, lang)}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono tabular-nums">
                    {tText(UI_TEXT.topicsReadCount, lang)}: {completedCount}/15
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono tabular-nums">
                    {tText(UI_TEXT.quizzesPassedCount, lang)}: {quizzesPassedCount}/15
                  </div>
                  {quizzesPassedCount > 0 && (
                    <div className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold tabular-nums">
                      {tText(UI_TEXT.averageScoreLabel, lang)}: {avgQuizPct}%
                    </div>
                  )}
                </div>
              </div>

              {/* Achievement Milestones */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                {[
                  { unlocked: quizzesPassedCount >= 1, label: tText(UI_TEXT.badgeFirstQuiz, lang) },
                  { unlocked: completedCount >= 5, label: tText(UI_TEXT.badgeFiveTopics, lang) },
                  { unlocked: completedCount >= 15, label: tText(UI_TEXT.badgeAllTopics, lang) },
                  { unlocked: hasPerfectQuiz, label: tText(UI_TEXT.badgePerfectScore, lang) },
                ].map((b) => (
                  <div
                    key={b.label}
                    className={`flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg border ${
                      b.unlocked
                        ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-semibold'
                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{b.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Full-Width 4-Column Quantitative KPI Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              { num: 15, suffix: '', label: tText(UI_TEXT.statTopicsLabel, lang) },
              { num: 150, suffix: '+', label: tText(UI_TEXT.statQuestionsLabel, lang) },
              { num: 6, suffix: '', label: tText(UI_TEXT.statCalculatorsLabel, lang) },
              { num: 64, suffix: '', label: tr('Biznes terminlar (UZ · RU · EN)', 'Бизнес-терминов (UZ · RU · EN)', 'Glossary Terms (UZ · RU · EN)', lang) },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-indigo-600 dark:text-indigo-400 mb-1">
                  <CountUpNumber target={stat.num} />
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTREPRENEUR'S 15-STAGE ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {tText(UI_TEXT.roadmapTitle, lang)}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {tText(UI_TEXT.roadmapSubtitle, lang)}
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {topics.map((t) => {
              const done = progress.completedTopics.includes(t.id);
              const quizPct = progress.quizScores[t.id]?.percentage;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onSelectTopic(t.id)}
                  className={`group text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    done
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 hover:border-emerald-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {t.code}
                    </span>
                    {done ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : quizPct !== undefined ? (
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 tabular-nums">
                        {quizPct}%
                      </span>
                    ) : null}
                  </div>
                  <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {tText(t.roadmapStage, lang)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOPICS CATALOG (M1–M15) */}
      <section id="topics-catalog" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {tText(UI_TEXT.topicsCatalogTitle, lang)}
          </h2>

          {/* Segmented View Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start">
            <button
              type="button"
              onClick={() => setCatalogView('grid')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                catalogView === 'grid'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{tText(UI_TEXT.viewGrid, lang)}</span>
            </button>
            <button
              type="button"
              onClick={() => setCatalogView('list')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                catalogView === 'list'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>{tText(UI_TEXT.viewList, lang)}</span>
            </button>
            <button
              type="button"
              onClick={() => setCatalogView('roadmap')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                catalogView === 'roadmap'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>{tText(UI_TEXT.viewRoadmap, lang)}</span>
            </button>
          </div>
        </div>

        {catalogView === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => {
              const isDone = progress.completedTopics.includes(topic.id);
              const quizScore = progress.quizScores[topic.id];
              const statusText = isDone
                ? tText(UI_TEXT.statusCompleted, lang)
                : quizScore
                ? `${tText(UI_TEXT.statusInProgress, lang)} (${quizScore.percentage}%)`
                : tText(UI_TEXT.statusNotStarted, lang);

              return (
                <motion.div
                  key={topic.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.16 }}
                  onClick={() => onSelectTopic(topic.id)}
                  className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors flex flex-col justify-between gap-5 cursor-pointer"
                >
                  <div className="space-y-3">
                    {/* Unboxed clean metadata line */}
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                      <div>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">
                          {topic.code}
                        </span>
                        <span className="mx-1.5" aria-hidden="true">·</span>
                        <span>
                          {topic.readMinutes} {tText(UI_TEXT.readTimeUnit, lang)}
                        </span>
                      </div>
                      <span
                        className={
                          isDone
                            ? 'text-emerald-600 dark:text-emerald-400 font-sans font-semibold'
                            : ''
                        }
                      >
                        {statusText}
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                        <TopicIcon
                          iconName={topic.iconName}
                          topicNumber={topic.number}
                          className="w-5 h-5"
                        />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {tText(topic.title, lang)}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {tText(topic.shortDesc, lang)}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <span>{tText(UI_TEXT.openTopicBtn, lang)}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {catalogView === 'list' && (
          <div className="divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
            {topics.map((topic) => {
              const isDone = progress.completedTopics.includes(topic.id);
              const quizScore = progress.quizScores[topic.id];
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => onSelectTopic(topic.id)}
                  className="w-full text-left p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <TopicIcon iconName={topic.iconName} topicNumber={topic.number} className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                        {topic.code} · {tText(topic.roadmapStage, lang)} · {topic.readMinutes}{' '}
                        {tText(UI_TEXT.readTimeUnit, lang)}
                      </div>
                      <div className="font-bold text-base text-slate-900 dark:text-slate-100">
                        {tText(topic.title, lang)}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {tText(topic.shortDesc, lang)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center text-xs font-semibold">
                    {quizScore && (
                      <span className="font-mono tabular-nums text-slate-600 dark:text-slate-300">
                        Test: {quizScore.percentage}%
                      </span>
                    )}
                    <span className="text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1">
                      {isDone ? '✓ ' : ''}
                      {tText(UI_TEXT.openTopicBtn, lang)}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {catalogView === 'roadmap' && (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900 space-y-6 max-w-4xl">
            {topics.map((topic) => {
              const isDone = progress.completedTopics.includes(topic.id);
              return (
                <div key={topic.id} className="relative">
                  <div
                    className={`absolute -left-[33px] sm:-left-[41px] top-5 w-4 h-4 rounded-full border-2 ${
                      isDone
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'bg-white dark:bg-slate-950 border-indigo-500'
                    }`}
                  />
                  <div
                    onClick={() => onSelectTopic(topic.id)}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors cursor-pointer space-y-2"
                  >
                    <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                      {topic.code} · {tText(topic.roadmapStage, lang)}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                      {tText(topic.title, lang)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {tText(topic.shortDesc, lang)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* FINAL EXAM CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono text-emerald-400">
              30 {tr('SAVOL · SERTIFIKAT · KOMPETENSIYA TAHLILI', 'ВОПРОСОВ · ИМЕННОЙ СЕРТИФИКАТ', 'QUESTIONS · PRINTABLE CERTIFICATE', lang)}
            </div>
            <h2 className="text-2xl font-extrabold">{tText(UI_TEXT.finalExamTitle, lang)}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {tText(UI_TEXT.finalExamSubtitle, lang)}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenFinalExam}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition-colors shrink-0 self-start md:self-center cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>{tText(UI_TEXT.navFinalExam, lang)}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
