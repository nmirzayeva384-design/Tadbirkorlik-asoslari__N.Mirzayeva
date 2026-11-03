import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Printer,
  Share2,
  Check,
  ChevronDown,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  XCircle,
  BookOpen,
} from 'lucide-react';
import { Language, TopicData, TopicQuizAttempt } from '../types';
import { tArray, tText, UI_TEXT } from '../data/i18n';
import { ALL_GLOSSARY_TERMS } from '../data/allGlossary';
import { TopicIcon } from '../utils/formatters';
import { TopicDiagram } from './TopicDiagram';
import { TopicCharts } from './TopicCharts';
import { SingleCalculatorWidget } from './CalculatorsHub';
import { TopicQuiz } from './TopicQuiz';

interface TopicDetailViewProps {
  topic: TopicData;
  prevTopic?: TopicData;
  nextTopic?: TopicData;
  lang: Language;
  isDark: boolean;
  isCompleted: boolean;
  quizAttempt?: TopicQuizAttempt;
  onToggleComplete: (topicId: string) => void;
  onSaveQuizScore: (topicId: string, score: number, total: number) => void;
  onSelectTopic: (topicId: string) => void;
  onBackHome: () => void;
}

const tr = (uz: string, ru: string, en: string, lang: Language) =>
  lang === 'uz' ? uz : lang === 'ru' ? ru : en;

export const TopicDetailView: React.FC<TopicDetailViewProps> = ({
  topic,
  prevTopic,
  nextTopic,
  lang,
  isDark,
  isCompleted,
  quizAttempt,
  onToggleComplete,
  onSaveQuizScore,
  onSelectTopic,
  onBackHome,
}) => {
  const [copied, setCopied] = useState(false);
  const [openLawIds, setOpenLawIds] = useState<Record<string, boolean>>(() => {
    const first = topic.legalActs[0]?.id;
    return first ? { [first]: true } : {};
  });
  const [selectedGlossaryId, setSelectedGlossaryId] = useState<string | null>(null);
  const [caseAnswer, setCaseAnswer] = useState<number | null>(null);

  useEffect(() => {
    const first = topic.legalActs[0]?.id;
    setOpenLawIds(first ? { [first]: true } : {});
    setSelectedGlossaryId(null);
    setCaseAnswer(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topic.id, topic.legalActs]);

  const handleCopyLink = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const anchorTabs = [
    { id: 'sec-overview', label: tText(UI_TEXT.tabOverview, lang) },
    { id: 'sec-theory', label: tText(UI_TEXT.tabTheory, lang) },
    { id: 'sec-diagram', label: tText(UI_TEXT.tabDiagram, lang) },
    { id: 'sec-stats', label: tText(UI_TEXT.tabStats, lang) },
    { id: 'sec-laws', label: tText(UI_TEXT.tabLaws, lang) },
    { id: 'sec-case', label: tText(UI_TEXT.tabCase, lang) },
    ...(topic.calculatorId
      ? [{ id: 'sec-calculator', label: tText(UI_TEXT.tabCalculator, lang) }]
      : []),
    { id: 'sec-quiz', label: tText(UI_TEXT.tabQuiz, lang) },
    { id: 'sec-summary', label: tText(UI_TEXT.tabSummary, lang) },
  ];

  const activeGlossaryTerm = selectedGlossaryId
    ? ALL_GLOSSARY_TERMS.find((g) => g.id === selectedGlossaryId)
    : undefined;

  return (
    <motion.article
      key={topic.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10"
    >
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 no-print">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{tText(UI_TEXT.backToHome, lang)}</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {prevTopic && (
            <button
              type="button"
              onClick={() => onSelectTopic(prevTopic.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{prevTopic.code}</span>
            </button>
          )}
          {nextTopic && (
            <button
              type="button"
              onClick={() => onSelectTopic(nextTopic.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors cursor-pointer"
            >
              <span>{nextTopic.code}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? tText(UI_TEXT.linkCopied, lang) : tText(UI_TEXT.shareTopic, lang)}</span>
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{tText(UI_TEXT.printTopic, lang)}</span>
          </button>
        </div>
      </div>

      {/* Module Header */}
      <header id="sec-overview" className="scroll-mt-28 space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
          <span className="font-bold text-indigo-600 dark:text-indigo-400">{topic.code}</span>
          <span aria-hidden="true">·</span>
          <span>{tText(topic.roadmapStage, lang)}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">
            {topic.hours} {tText(UI_TEXT.hoursUnit, lang)}
          </span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">
            {topic.readMinutes} {tText(UI_TEXT.readTimeUnit, lang)}
          </span>
          {isCompleted && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-sans font-semibold">
                ✓ {tText(UI_TEXT.statusCompleted, lang)}
              </span>
            </>
          )}
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <TopicIcon iconName={topic.iconName} topicNumber={topic.number} className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {topic.code}. {tText(topic.title, lang)}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              {tText(topic.summary, lang)}
            </p>
          </div>
        </div>

        {/* Sticky Section Jump Menu */}
        <nav
          aria-label="Module sections"
          className="sticky top-16 z-20 -mx-4 px-4 py-2.5 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-y border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-print"
        >
          {anchorTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => scrollToSection(tab.id)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Learning Objectives */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 print-card">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
            {tText(UI_TEXT.learningObjectivesHeading, lang)}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tArray(topic.learningObjectives, lang).map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Core Theory Sections */}
      <section id="sec-theory" className="scroll-mt-28 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          {tText(UI_TEXT.tabTheory, lang)}
        </h2>

        {/* Active Glossary Popover Card when user clicks a term */}
        {activeGlossaryTerm && (
          <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                <BookOpen className="w-3.5 h-3.5" />
                <span>GLOSSARIY · {activeGlossaryTerm.category.toUpperCase()}</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {tText(activeGlossaryTerm.term, lang)}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {tText(activeGlossaryTerm.definition, lang)}
              </p>
              {activeGlossaryTerm.example && (
                <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-0.5">
                  {tText(activeGlossaryTerm.example, lang)}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setSelectedGlossaryId(null)}
              className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white shrink-0 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        <div className="space-y-6">
          {topic.sections.map((sec, sIdx) => {
            const matchedTerms = (sec.highlightTerms || [])
              .map((tid) => ALL_GLOSSARY_TERMS.find((g) => g.id === tid))
              .filter(Boolean);

            return (
              <div
                key={sec.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 print-card"
              >
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                  {topic.number}.{sIdx + 1}. {tText(sec.title, lang)}
                </h3>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {tArray(sec.paragraphs, lang).map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.bulletPoints && (
                  <ul className="space-y-2 pt-1">
                    {tArray(sec.bulletPoints, lang).map((bp, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
                          •
                        </span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.comparisonTable && (
                  <div className="overflow-x-auto pt-2">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70">
                          {tArray(sec.comparisonTable.headers, lang).map((th, i) => (
                            <th
                              key={i}
                              className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100"
                            >
                              {th}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {(sec.comparisonTable.rows[lang] || sec.comparisonTable.rows.uz).map(
                          (row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`py-3 px-4 text-slate-700 dark:text-slate-300 ${
                                    cIdx === 0 ? 'font-semibold text-slate-900 dark:text-slate-100' : ''
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {matchedTerms.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 no-print">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {tText(UI_TEXT.keyTermsInSection, lang)}
                    </span>
                    {matchedTerms.map((termObj) => {
                      if (!termObj) return null;
                      const isOpen = selectedGlossaryId === termObj.id;
                      return (
                        <button
                          key={termObj.id}
                          type="button"
                          onClick={() =>
                            setSelectedGlossaryId(isOpen ? null : termObj.id)
                          }
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                            isOpen
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-slate-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                          }`}
                        >
                          {tText(termObj.term, lang)}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Diagram */}
      <section id="sec-diagram" className="scroll-mt-28">
        <TopicDiagram
          type={topic.diagramType}
          title={topic.diagramTitle}
          note={topic.diagramNote}
          lang={lang}
        />
      </section>

      {/* Statistics & Charts */}
      <section id="sec-stats" className="scroll-mt-28 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          {tText(UI_TEXT.statsHeading, lang)}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topic.stats.map((st, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3 print-card"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-indigo-600 dark:text-indigo-400 mb-1.5">
                  {tText(st.value, lang)}
                </div>
                <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">
                  {tText(st.label, lang)}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {tText(st.subnote, lang)}
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{st.year}</span>
                <a
                  href={st.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline truncate font-medium"
                >
                  <span className="truncate">{tText(st.sourceName, lang)}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <TopicCharts charts={topic.charts} lang={lang} isDark={isDark} />
      </section>

      {/* Legal Acts Accordion */}
      <section id="sec-laws" className="scroll-mt-28 space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          {tText(UI_TEXT.lawsHeading, lang)}
        </h2>

        {topic.hasDynamicRateWarning && (
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p>{tText(UI_TEXT.dynamicRateWarning, lang)}</p>
          </div>
        )}

        <div className="space-y-3">
          {topic.legalActs.map((act) => {
            const isOpen = !!openLawIds[act.id];
            return (
              <div
                key={act.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden print-card"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenLawIds((prev) => ({ ...prev, [act.id]: !prev[act.id] }))
                  }
                  className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {tText(act.docType, lang)}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{act.yearNote}</span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                      {tText(act.title, lang)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {tText(act.summary, lang)}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4 text-xs sm:text-sm">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100 mr-1.5">
                        {tText(UI_TEXT.relevanceLabel, lang)}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">
                        {tText(act.relevance, lang)}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {tText(UI_TEXT.keyClausesLabel, lang)}
                      </div>
                      <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                        {tArray(act.keyClauses, lang).map((cl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                            <span>{cl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <a
                        href={act.lexUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <span>{tText(UI_TEXT.openLexUz, lang)}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Practical Case Study */}
      <section id="sec-case" className="scroll-mt-28 space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          {tText(UI_TEXT.caseStudyHeading, lang)}
        </h2>

        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 print-card">
          <div className="space-y-2">
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
              REAL CASE · UZBEKISTAN PRACTICE
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {tText(topic.caseStudy.title, lang)}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {tText(topic.caseStudy.scenario, lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                {tr('HISOB-KITOB VA FAKTLAR', 'РАСЧЕТЫ И ПОКАЗАТЕЛИ', 'NUMBERS BREAKDOWN', lang)}
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm font-mono tabular-nums text-slate-800 dark:text-slate-200">
                {tArray(topic.caseStudy.numbersBreakdown, lang).map((line, idx) => (
                  <li key={idx}>• {line}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                {tr('EKSPERT TAHLILI', 'ЭКСПЕРТНЫЙ РАЗБОР', 'ANALYTICAL VERDICT', lang)}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {tText(topic.caseStudy.analysis, lang)}
              </p>
            </div>
          </div>

          {/* Mini Decision Challenge */}
          <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-3 no-print">
            <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
              {tText(UI_TEXT.testYourselfTitle, lang)}
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {tText(topic.caseStudy.challengeQuestion, lang)}
            </p>
            <div className="space-y-2">
              {tArray(topic.caseStudy.challengeOptions, lang).map((opt, idx) => {
                const isSelected = caseAnswer === idx;
                const isCorrect = idx === topic.caseStudy.correctOptionIndex;
                let style =
                  'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-indigo-400 text-slate-800 dark:text-slate-200';
                if (caseAnswer !== null) {
                  if (isCorrect) {
                    style =
                      'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-100';
                  } else if (isSelected) {
                    style =
                      'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-100';
                  }
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCaseAnswer(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-colors flex items-center justify-between gap-3 cursor-pointer ${style}`}
                  >
                    <span>{opt}</span>
                    {caseAnswer !== null && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {caseAnswer !== null && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
            {caseAnswer !== null && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                {tText(topic.caseStudy.challengeExplanation, lang)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Calculator (if present for module) */}
      {topic.calculatorId && (
        <section id="sec-calculator" className="scroll-mt-28 space-y-5 no-print">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {tText(UI_TEXT.interactiveToolHeading, lang)}
          </h2>
          <SingleCalculatorWidget
            calculatorId={topic.calculatorId}
            lang={lang}
            isDark={isDark}
          />
        </section>
      )}

      {/* 10-Question Mastery Quiz */}
      <section id="sec-quiz" className="scroll-mt-28 space-y-5 no-print">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          {tText(UI_TEXT.quizHeading, lang)}
        </h2>
        <TopicQuiz
          topicId={topic.id}
          lang={lang}
          previousBest={quizAttempt}
          onSaveScore={onSaveQuizScore}
          onNextTopic={nextTopic ? () => onSelectTopic(nextTopic.id) : undefined}
        />
      </section>

      {/* Executive Summary & Mark Completed */}
      <section id="sec-summary" className="scroll-mt-28 space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 print-card">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {tText(UI_TEXT.summaryHeading, lang)}
          </h2>
          <ul className="space-y-3">
            {tArray(topic.keyTakeaways, lang).map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-1 shrink-0">
                  0{idx + 1}.
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 no-print">
            <button
              type="button"
              onClick={() => onToggleComplete(topic.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isCompleted
                  ? tText(UI_TEXT.markedCompleted, lang)
                  : tText(UI_TEXT.markAsCompleted, lang)}
              </span>
            </button>

            <div className="flex items-center gap-3">
              {prevTopic && (
                <button
                  type="button"
                  onClick={() => onSelectTopic(prevTopic.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{tText(UI_TEXT.prevTopic, lang)}</span>
                </button>
              )}
              {nextTopic && (
                <button
                  type="button"
                  onClick={() => onSelectTopic(nextTopic.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span>
                    {tText(UI_TEXT.nextTopic, lang)} ({nextTopic.code})
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.article>
  );
};
