import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Scale, FileText } from 'lucide-react';
import { Language } from '../types';
import { ALL_TOPICS } from '../data/topics';
import { ALL_GLOSSARY_TERMS } from '../data/allGlossary';
import { tText, UI_TEXT } from '../data/i18n';

interface SearchModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onNavigate: (hash: string) => void;
}

const tr = (uz: string, ru: string, en: string, lang: Language) =>
  lang === 'uz' ? uz : lang === 'ru' ? ru : en;

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  lang,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      window.setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        topics: ALL_TOPICS.slice(0, 5),
        terms: ALL_GLOSSARY_TERMS.slice(0, 4),
        laws: [],
      };
    }

    const topics = ALL_TOPICS.filter(
      (t) =>
        t.code.toLowerCase().includes(q) ||
        tText(t.title, lang).toLowerCase().includes(q) ||
        tText(t.shortDesc, lang).toLowerCase().includes(q) ||
        tText(t.summary, lang).toLowerCase().includes(q)
    ).slice(0, 6);

    const terms = ALL_GLOSSARY_TERMS.filter(
      (g) =>
        g.term.uz.toLowerCase().includes(q) ||
        g.term.ru.toLowerCase().includes(q) ||
        g.term.en.toLowerCase().includes(q) ||
        tText(g.definition, lang).toLowerCase().includes(q)
    ).slice(0, 6);

    const laws = ALL_TOPICS.flatMap((t) =>
      t.legalActs.map((a) => ({ ...a, topicId: t.id, topicCode: t.code }))
    )
      .filter(
        (a) =>
          tText(a.title, lang).toLowerCase().includes(q) ||
          tText(a.summary, lang).toLowerCase().includes(q)
      )
      .slice(0, 4);

    return { topics, terms, laws };
  }, [query, lang]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tText(UI_TEXT.searchPlaceholder, lang)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-5">
          {results.topics.length === 0 &&
            results.terms.length === 0 &&
            results.laws.length === 0 && (
              <div className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                {tr(
                  'Hech narsa topilmadi. Boshqa kalit so‘zni kiriting.',
                  'Ничего не найдено. Попробуйте другой запрос.',
                  'No matching results found. Try another keyword.',
                  lang
                )}
              </div>
            )}

          {results.topics.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 px-1">
                {tText(UI_TEXT.navTopics, lang).toUpperCase()}
              </div>
              {results.topics.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    onNavigate(`#/topic/${t.id}`);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between gap-3 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {t.code}. {tText(t.title, lang)}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {tText(t.shortDesc, lang)}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                </button>
              ))}
            </div>
          )}

          {results.terms.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 px-1">
                {tText(UI_TEXT.navGlossary, lang).toUpperCase()}
              </div>
              {results.terms.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => {
                    onNavigate(`#/topic/${g.relatedTopicId}`);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-start gap-3 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {tText(g.term, lang)}{' '}
                      <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                        ({g.relatedTopicId.toUpperCase()})
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {tText(g.definition, lang)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {results.laws.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 px-1">
                {tText(UI_TEXT.tabLaws, lang).toUpperCase()}
              </div>
              {results.laws.map((law) => (
                <button
                  key={`${law.topicId}-${law.id}`}
                  type="button"
                  onClick={() => {
                    onNavigate(`#/topic/${law.topicId}`);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-start gap-3 transition-colors cursor-pointer"
                >
                  <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {tText(law.title, lang)} ({law.topicCode})
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {tText(law.summary, lang)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
