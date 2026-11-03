import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Menu, X } from 'lucide-react';
import { Language } from '../types';
import { tText, UI_TEXT } from '../data/i18n';

export type ActiveRoute =
  | { page: 'home' }
  | { page: 'topic'; topicId: string }
  | { page: 'calculators' }
  | { page: 'glossary' }
  | { page: 'final-exam' };

interface NavbarProps {
  route: ActiveRoute;
  lang: Language;
  isDark: boolean;
  onChangeLang: (lang: Language) => void;
  onToggleTheme: () => void;
  onNavigate: (hash: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  route,
  lang,
  isDark,
  onChangeLang,
  onToggleTheme,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, y / docHeight)));
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    {
      label: tText(UI_TEXT.navTopics, lang),
      hash: '#/',
      isActive: route.page === 'home' || route.page === 'topic',
    },
    {
      label: tText(UI_TEXT.navCalculators, lang),
      hash: '#/calculators',
      isActive: route.page === 'calculators',
    },
    {
      label: tText(UI_TEXT.navGlossary, lang),
      hash: '#/glossary',
      isActive: route.page === 'glossary',
    },
    {
      label: tText(UI_TEXT.navFinalExam, lang),
      hash: '#/final-exam',
      isActive: route.page === 'final-exam',
    },
  ];

  const langs: Language[] = ['uz', 'ru', 'en'];

  return (
    <header
      className={`sticky top-0 z-40 transition-colors no-print ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'
          : 'bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800'
      }`}
    >
      {/* Top Scroll Progress Line */}
      <div className="h-0.5 w-full bg-transparent overflow-hidden">
        <div
          className="h-full bg-indigo-600 dark:bg-indigo-400 origin-left transition-transform duration-75"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#/');
            setMobileOpen(false);
          }}
          className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0"
        >
          {tText(UI_TEXT.brandTitle, lang)}
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.hash);
              }}
              className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                item.isActive
                  ? 'text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Search, Language Switcher (UZ | RU | EN), Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label={tText(UI_TEXT.searchButton, lang)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-indigo-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{tText(UI_TEXT.searchButton, lang)}</span>
            <kbd className="hidden md:inline font-mono text-[10px] text-slate-400">⌘K</kbd>
          </button>

          <div
            role="group"
            aria-label="Language selector"
            className="flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            {langs.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onChangeLang(l)}
                className={`px-2 py-1 rounded-md text-xs font-mono font-semibold uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  lang === l
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors cursor-pointer shrink-0"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer shrink-0"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.hash}
              type="button"
              onClick={() => {
                onNavigate(item.hash);
                setMobileOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                item.isActive
                  ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
