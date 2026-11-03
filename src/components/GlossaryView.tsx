import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  RotateCw,
  ArrowLeft,
  ArrowRight,
  Shuffle,
  ArrowUpRight,
  ExternalLink,
  Scale,
} from 'lucide-react';
import { GlossaryTerm, Language } from '../types';
import { ALL_GLOSSARY_TERMS } from '../data/allGlossary';
import { ALL_TOPICS } from '../data/topics';
import { tText, UI_TEXT } from '../data/i18n';
import { shuffleArray } from '../data/quizzes';

interface GlossaryViewProps {
  lang: Language;
  onOpenTopic: (topicId: string) => void;
}

const tr = (uz: string, ru: string, en: string, lang: Language) =>
  lang === 'uz' ? uz : lang === 'ru' ? ru : en;

export const GlossaryView: React.FC<GlossaryViewProps> = ({ lang, onOpenTopic }) => {
  const [viewMode, setViewMode] = useState<'dictionary' | 'flashcards' | 'laws'>('dictionary');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | GlossaryTerm['category']>('all');

  // Flashcard state
  const [deck, setDeck] = useState<GlossaryTerm[]>(ALL_GLOSSARY_TERMS);
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const categories: { id: 'all' | GlossaryTerm['category']; label: string }[] = [
    { id: 'all', label: tr('Barchasi', 'Все', 'All Terms', lang) },
    { id: 'strategy', label: tr('Strategiya va Startap', 'Стратегия и Стартап', 'Strategy & Startup', lang) },
    { id: 'finance', label: tr('Moliya va Hisob', 'Финансы и Учет', 'Finance & Accounting', lang) },
    { id: 'legal', label: tr('Huquq va Soliq', 'Право и Налоги', 'Legal & Taxation', lang) },
    { id: 'marketing', label: tr('Marketing va Savdo', 'Маркетинг и Продажи', 'Marketing & Sales', lang) },
    { id: 'operations', label: tr('Boshqaruv va Operatsiya', 'Управление и Операции', 'Management & Ops', lang) },
  ];

  const filteredTerms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_GLOSSARY_TERMS.filter((item) => {
      if (category !== 'all' && item.category !== category) return false;
      if (!q) return true;
      return (
        item.term.uz.toLowerCase().includes(q) ||
        item.term.ru.toLowerCase().includes(q) ||
        item.term.en.toLowerCase().includes(q) ||
        tText(item.definition, lang).toLowerCase().includes(q)
      );
    });
  }, [query, category, lang]);

  useEffect(() => {
    setDeck(filteredTerms.length > 0 ? filteredTerms : ALL_GLOSSARY_TERMS);
    setCardIdx(0);
    setFlipped(false);
  }, [filteredTerms]);

  const currentCard = deck[cardIdx] || ALL_GLOSSARY_TERMS[0];

  const allLegalActs = useMemo(() => {
    return ALL_TOPICS.flatMap((topic) =>
      topic.legalActs.map((act) => ({
        ...act,
        topicCode: topic.code,
        topicId: topic.id,
        topicTitle: topic.title,
      }))
    ).filter((act) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (
        tText(act.title, lang).toLowerCase().includes(q) ||
        tText(act.summary, lang).toLowerCase().includes(q) ||
        act.topicCode.toLowerCase().includes(q)
      );
    });
  }, [query, lang]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-2">
            {ALL_GLOSSARY_TERMS.length} {tr('TA TERMIN · 3 TILDA · FLESH-KARTALAR VA QONUNCHILIK', 'ТЕРМИНА · НА 3 ЯЗЫКАХ · КАРТОЧКИ И ЗАКОНЫ', 'TERMS · TRILINGUAL · FLASHCARDS & LAWS', lang)}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
            {tText(UI_TEXT.glossaryTitle, lang)}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {tText(UI_TEXT.glossarySubtitle, lang)}
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0">
          <button
            type="button"
            onClick={() => setViewMode('dictionary')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              viewMode === 'dictionary'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {tText(UI_TEXT.modeDictionary, lang)}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('flashcards')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              viewMode === 'flashcards'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {tText(UI_TEXT.modeFlashcards, lang)}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('laws')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              viewMode === 'laws'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {tText(UI_TEXT.tabLaws, lang)}
          </button>
        </div>
      </div>

      {/* Search & Category Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        <div className="relative flex-1 max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tr(
              'Termin yoki me’yoriy hujjat nomini yozing...',
              'Введите термин или название закона...',
              'Filter terms, definitions, or legal acts...',
              lang
            )}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {viewMode !== 'laws' && (
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                  category === cat.id
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MODE 1: DICTIONARY */}
      {viewMode === 'dictionary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTerms.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{item.category.toUpperCase()}</span>
                  <span>{item.relatedTopicId.toUpperCase()}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  {tText(item.term, lang)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tText(item.definition, lang)}
                </p>
                {item.example && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    {tText(item.example, lang)}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 truncate max-w-[180px]">
                  EN: {item.term.en}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenTopic(item.relatedTopicId)}
                  className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer shrink-0"
                >
                  <span>{item.relatedTopicId.toUpperCase()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODE 2: 3D FLASHCARDS */}
      {viewMode === 'flashcards' && currentCard && (
        <div className="max-w-2xl mx-auto py-4 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
            <span>
              {tr('Karta', 'Карточка', 'Card', lang)} {cardIdx + 1} / {deck.length}
            </span>
            <button
              type="button"
              onClick={() => {
                setDeck(shuffleArray(deck));
                setCardIdx(0);
                setFlipped(false);
              }}
              className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{tr('Aralashtirish', 'Перемешать', 'Shuffle Deck', lang)}</span>
            </button>
          </div>

          <div
            onClick={() => setFlipped((f) => !f)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setFlipped((f) => !f);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Flip flashcard"
            className="perspective-1000 h-72 w-full cursor-pointer focus:outline-none"
          >
            <div
              className={`relative w-full h-full transition-transform duration-300 preserve-3d ${
                flipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center text-center shadow-xs">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
                  {currentCard.category.toUpperCase()} · {currentCard.relatedTopicId.toUpperCase()}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                  {tText(currentCard.term, lang)}
                </h2>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>
                    {tr(
                      'Ta’rifni ko‘rish uchun bosing',
                      'Нажмите, чтобы перевернуть карточку',
                      'Click card to reveal definition',
                      lang
                    )}
                  </span>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-indigo-600 text-white p-8 flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-indigo-200">
                    {tText(currentCard.term, lang)}
                  </div>
                  <p className="text-base sm:text-lg font-medium leading-relaxed">
                    {tText(currentCard.definition, lang)}
                  </p>
                  {currentCard.example && (
                    <p className="text-xs sm:text-sm text-indigo-100 italic">
                      {tText(currentCard.example, lang)}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between text-xs text-indigo-200 pt-2 border-t border-indigo-500">
                  <span>UZ / RU / EN</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenTopic(currentCard.relatedTopicId);
                    }}
                    className="underline font-semibold text-white cursor-pointer"
                  >
                    {tr('Mavzuni ochish', 'Открыть тему', 'Open Module', lang)} ({currentCard.relatedTopicId.toUpperCase()})
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                setFlipped(false);
                setCardIdx((i) => (i - 1 + deck.length) % deck.length);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{tr('Oldingi', 'Назад', 'Previous', lang)}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setFlipped(false);
                setCardIdx((i) => (i + 1) % deck.length);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 cursor-pointer"
            >
              <span>{tr('Keyingi karta', 'Следующая', 'Next Card', lang)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* MODE 3: CONSOLIDATED LEGISLATION DIRECTORY */}
      {viewMode === 'laws' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allLegalActs.map((act) => (
            <div
              key={`${act.topicId}-${act.id}`}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                    <Scale className="w-3.5 h-3.5" />
                    <span>{tText(act.docType, lang)}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenTopic(act.topicId)}
                    className="hover:underline font-semibold cursor-pointer"
                  >
                    {act.topicCode}
                  </button>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  {tText(act.title, lang)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tText(act.summary, lang)}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">{act.yearNote}</span>
                <a
                  href={act.lexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  <span>{tText(UI_TEXT.openLexUz, lang)}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
