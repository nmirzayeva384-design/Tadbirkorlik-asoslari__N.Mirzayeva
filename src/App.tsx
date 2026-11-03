import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { FinalExamAttempt, Language, UserProgress } from './types';
import { ALL_TOPICS, getTopicById } from './data/topics';
import { tText, UI_TEXT } from './data/i18n';
import { Navbar, ActiveRoute } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { TopicDetailView } from './components/TopicDetailView';
import { CalculatorsHubView } from './components/CalculatorsHub';
import { GlossaryView } from './components/GlossaryView';
import { FinalExamView } from './components/FinalExamView';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

const STORAGE_LANG_KEY = 'ta_edu_lang_v1';
const STORAGE_THEME_KEY = 'ta_edu_theme_v1';
const STORAGE_PROGRESS_KEY = 'ta_edu_progress_v1';

function parseHashRoute(hash: string): ActiveRoute {
  const cleaned = hash.replace(/^#/, '').trim();
  if (!cleaned || cleaned === '/') return { page: 'home' };
  if (cleaned.startsWith('/topic/')) {
    const id = cleaned.replace('/topic/', '').split('?')[0].toLowerCase();
    if (getTopicById(id)) {
      return { page: 'topic', topicId: id };
    }
    return { page: 'home' };
  }
  if (cleaned.startsWith('/calculators')) return { page: 'calculators' };
  if (cleaned.startsWith('/glossary')) return { page: 'glossary' };
  if (cleaned.startsWith('/final-exam')) return { page: 'final-exam' };
  return { page: 'home' };
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY);
      if (saved === 'uz' || saved === 'ru' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'uz';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_THEME_KEY);
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch {
      // ignore
    }
    return false;
  });

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_PROGRESS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as UserProgress;
        if (parsed && Array.isArray(parsed.completedTopics) && parsed.quizScores) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return { completedTopics: [], quizScores: {} };
  });

  const [route, setRoute] = useState<ActiveRoute>(() =>
    parseHashRoute(window.location.hash)
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  // Sync theme class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem(STORAGE_THEME_KEY, isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [isDark]);

  // Sync language on <html> and localStorage
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  // Persist progress
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  // Listen to hash changes
  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Global Ctrl+K / Cmd+K search shortcut & Back-to-Top visibility
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    const onScroll = () => {
      setShowBackTop(window.scrollY > 500);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const navigate = useCallback((hash: string) => {
    if (window.location.hash === hash) {
      setRoute(parseHashRoute(hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = hash;
    }
  }, []);

  const handleToggleComplete = useCallback((topicId: string) => {
    setProgress((prev) => {
      const exists = prev.completedTopics.includes(topicId);
      const completedTopics = exists
        ? prev.completedTopics.filter((id) => id !== topicId)
        : [...prev.completedTopics, topicId];
      return { ...prev, completedTopics };
    });
  }, []);

  const handleSaveQuizScore = useCallback(
    (topicId: string, score: number, total: number) => {
      const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
      setProgress((prev) => {
        const existing = prev.quizScores[topicId];
        const bestScore = existing && existing.score > score ? existing.score : score;
        const bestPct =
          existing && existing.percentage > percentage ? existing.percentage : percentage;
        return {
          ...prev,
          quizScores: {
            ...prev.quizScores,
            [topicId]: {
              score: bestScore,
              total,
              percentage: bestPct,
              completedAt: new Date().toISOString(),
            },
          },
        };
      });
    },
    []
  );

  const handleSaveFinalExam = useCallback((attempt: FinalExamAttempt) => {
    setProgress((prev) => ({
      ...prev,
      finalExam: attempt,
    }));
  }, []);

  const renderMainContent = () => {
    if (route.page === 'topic') {
      const idx = ALL_TOPICS.findIndex((t) => t.id === route.topicId);
      const currentTopic = idx >= 0 ? ALL_TOPICS[idx] : ALL_TOPICS[0];
      const prevTopic = idx > 0 ? ALL_TOPICS[idx - 1] : undefined;
      const nextTopic = idx >= 0 && idx + 1 < ALL_TOPICS.length ? ALL_TOPICS[idx + 1] : undefined;

      return (
        <TopicDetailView
          topic={currentTopic}
          prevTopic={prevTopic}
          nextTopic={nextTopic}
          lang={lang}
          isDark={isDark}
          isCompleted={progress.completedTopics.includes(currentTopic.id)}
          quizAttempt={progress.quizScores[currentTopic.id]}
          onToggleComplete={handleToggleComplete}
          onSaveQuizScore={handleSaveQuizScore}
          onSelectTopic={(tid) => navigate(`#/topic/${tid}`)}
          onBackHome={() => navigate('#/')}
        />
      );
    }

    if (route.page === 'calculators') {
      return (
        <CalculatorsHubView
          lang={lang}
          isDark={isDark}
          onOpenTopic={(tid) => navigate(`#/topic/${tid}`)}
        />
      );
    }

    if (route.page === 'glossary') {
      return (
        <GlossaryView
          lang={lang}
          onOpenTopic={(tid) => navigate(`#/topic/${tid}`)}
        />
      );
    }

    if (route.page === 'final-exam') {
      return (
        <FinalExamView
          lang={lang}
          isDark={isDark}
          savedAttempt={progress.finalExam}
          onSaveAttempt={handleSaveFinalExam}
          onOpenTopic={(tid) => navigate(`#/topic/${tid}`)}
        />
      );
    }

    return (
      <HomeView
        topics={ALL_TOPICS}
        lang={lang}
        progress={progress}
        onSelectTopic={(tid) => navigate(`#/topic/${tid}`)}
        onOpenCalculators={() => navigate('#/calculators')}
        onOpenFinalExam={() => navigate('#/final-exam')}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        route={route}
        lang={lang}
        isDark={isDark}
        onChangeLang={setLang}
        onToggleTheme={() => setIsDark((d) => !d)}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main className="flex-1">{renderMainContent()}</main>

      <Footer
        lang={lang}
        isDark={isDark}
        onChangeLang={setLang}
        onToggleTheme={() => setIsDark((d) => !d)}
        onNavigate={navigate}
      />

      <SearchModal
        isOpen={searchOpen}
        lang={lang}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />

      {showBackTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={tText(UI_TEXT.backToTop, lang)}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md hover:opacity-90 transition-opacity cursor-pointer no-print"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
