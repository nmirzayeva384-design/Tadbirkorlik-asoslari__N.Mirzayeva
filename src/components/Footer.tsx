import React from 'react';
import { ExternalLink, Sun, Moon } from 'lucide-react';
import { Language } from '../types';
import { tText, UI_TEXT } from '../data/i18n';

interface FooterProps {
  lang: Language;
  isDark: boolean;
  onChangeLang: (lang: Language) => void;
  onToggleTheme: () => void;
  onNavigate: (hash: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  isDark,
  onChangeLang,
  onToggleTheme,
  onNavigate,
}) => {
  const portals = [
    { name: 'Lex.uz — Qonunchilik bazasi', url: 'https://lex.uz' },
    { name: 'My.soliq.uz — Elektron soliq xizmatlari', url: 'https://my.soliq.uz' },
    { name: 'Stat.uz — Milliy statistika qo‘mitasi', url: 'https://stat.uz' },
    { name: 'My.gov.uz — Yagona interaktiv davlat xizmatlari', url: 'https://my.gov.uz' },
    { name: 'Cbu.uz — O‘zbekiston Markaziy banki', url: 'https://cbu.uz' },
    { name: 'Fo.birdarcha.uz — Biznesni ro‘yxatdan o‘tkazish', url: 'https://fo.birdarcha.uz' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-16 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-3">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#/');
              }}
              className="text-lg font-extrabold text-slate-900 dark:text-white inline-block"
            >
              {tText(UI_TEXT.brandTitle, lang)}
            </a>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              {tText(UI_TEXT.footerAbout, lang)}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {(['uz', 'ru', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => onChangeLang(l)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold uppercase border cursor-pointer ${
                    lang === l
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {l}
                </button>
              ))}
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className="p-1.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 uppercase">
              {tText(UI_TEXT.navTopics, lang)}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('#/')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                >
                  {tText(UI_TEXT.topicsCatalogTitle, lang)}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('#/calculators')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                >
                  {tText(UI_TEXT.navCalculators, lang)}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('#/glossary')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                >
                  {tText(UI_TEXT.navGlossary, lang)}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('#/final-exam')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                >
                  {tText(UI_TEXT.navFinalExam, lang)}
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 uppercase">
              {tText(UI_TEXT.officialPortals, lang)}
            </div>
            <ul className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm">
              {portals.map((p) => (
                <li key={p.url}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span>{p.name}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>{tText(UI_TEXT.footerDisclaimer, lang)}</p>
          <span className="shrink-0 font-mono">© {new Date().getFullYear()} · UZ · RU · EN</span>
        </div>
      </div>
    </footer>
  );
};
