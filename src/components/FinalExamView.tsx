import React, { useState, useEffect, useCallback } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import {
  Award,
  Clock,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Printer,
  Download,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { FinalExamAttempt, Language } from '../types';
import { tArray, tText, UI_TEXT } from '../data/i18n';
import { ALL_TOPICS } from '../data/topics';
import { generateFinalExamQuestions, ShuffledQuizQuestion } from '../data/quizzes';
import { triggerSuccessConfetti } from '../utils/formatters';

interface FinalExamViewProps {
  lang: Language;
  isDark: boolean;
  savedAttempt?: FinalExamAttempt;
  onSaveAttempt: (attempt: FinalExamAttempt) => void;
  onOpenTopic: (topicId: string) => void;
}

const tr = (uz: string, ru: string, en: string, lang: Language) =>
  lang === 'uz' ? uz : lang === 'ru' ? ru : en;

export const FinalExamView: React.FC<FinalExamViewProps> = ({
  lang,
  isDark,
  savedAttempt,
  onSaveAttempt,
  onOpenTopic,
}) => {
  const [stage, setStage] = useState<'intro' | 'running' | 'result'>(
    savedAttempt ? 'result' : 'intro'
  );
  const [studentName, setStudentName] = useState(savedAttempt?.studentName || '');
  const [questions, setQuestions] = useState<ShuffledQuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(2400); // 40 minutes
  const [latestResult, setLatestResult] = useState<FinalExamAttempt | undefined>(savedAttempt);

  const startExam = () => {
    const generated = generateFinalExamQuestions();
    setQuestions(generated);
    setCurrentIdx(0);
    setAnswers({});
    setSecondsLeft(2400);
    setStage('running');
  };

  const submitExam = useCallback(
    (finalAnswers: Record<number, number>) => {
      const breakdown: Record<string, { correct: number; total: number }> = {};
      let correctCount = 0;

      questions.forEach((q, idx) => {
        const tid = q.original.topicId;
        if (!breakdown[tid]) {
          breakdown[tid] = { correct: 0, total: 0 };
        }
        breakdown[tid].total += 1;
        if (finalAnswers[idx] === q.shuffledCorrectIndex) {
          breakdown[tid].correct += 1;
          correctCount += 1;
        }
      });

      const pct = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
      const attempt: FinalExamAttempt = {
        score: correctCount,
        total: questions.length,
        percentage: pct,
        studentName:
          studentName.trim() ||
          tr('Bakalavriat talabasi', 'Студент бакалавриата', 'Undergraduate Student', lang),
        completedAt: new Date().toISOString().slice(0, 10),
        topicBreakdown: breakdown,
      };

      setLatestResult(attempt);
      onSaveAttempt(attempt);
      setStage('result');

      if (pct >= 70) {
        triggerSuccessConfetti();
      }
    },
    [lang, onSaveAttempt, questions, studentName]
  );

  useEffect(() => {
    if (stage !== 'running') return;
    if (secondsLeft <= 0) {
      submitExam(answers);
      return;
    }
    const id = window.setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => window.clearInterval(id);
  }, [stage, secondsLeft, answers, submitExam]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const downloadCertificateSvg = (res: FinalExamAttempt) => {
    const safeName = (res.studentName || 'Student')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const courseTitle = tText(UI_TEXT.brandTitle, lang);
    const certHeading = tr('SERTIFIKAT', 'СЕРТИФИКАТ', 'CERTIFICATE OF MASTERY', lang);
    const subtitle = tr(
      '30 soatlik (15 modul) "Tadbirkorlik asoslari" o‘quv kursining yakuniy kompleks imtihonini muvaffaqiyatli topshirganligi uchun berildi',
      'Подтверждает успешную сдачу итогового комплексного экзамена по курсу «Основы предпринимательства» (15 модулей, 30 часов)',
      'Awarded for completing the 15-module (30 academic hours) Comprehensive Examination in Entrepreneurship Fundamentals',
      lang
    );

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="680" viewBox="0 0 1000 680">
      <rect width="1000" height="680" fill="#f8fafc"/>
      <rect x="28" y="28" width="944" height="624" rx="20" fill="#ffffff" stroke="#4f46e5" stroke-width="4"/>
      <rect x="44" y="44" width="912" height="592" rx="14" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="500" y="125" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#4f46e5" letter-spacing="4">${courseTitle.toUpperCase()}</text>
      <text x="500" y="195" text-anchor="middle" font-family="sans-serif" font-size="44" font-weight="800" fill="#0f172a">${certHeading}</text>
      <line x1="320" y1="225" x2="680" y2="225" stroke="#10b981" stroke-width="3"/>
      <text x="500" y="315" text-anchor="middle" font-family="sans-serif" font-size="38" font-weight="700" fill="#1e1b4b">${safeName}</text>
      <text x="500" y="375" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#475569">${subtitle}</text>
      <rect x="330" y="430" width="340" height="86" rx="14" fill="#eef2ff" stroke="#c7d2fe"/>
      <text x="500" y="468" text-anchor="middle" font-family="monospace" font-size="24" font-weight="700" fill="#312e81">${res.score} / ${res.total} (${res.percentage}%)</text>
      <text x="500" y="498" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#4f46e5">Date: ${res.completedAt} · ID: TA-${res.completedAt.replace(/-/g, '')}-${res.percentage}</text>
      <text x="500" y="590" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#64748b">O‘zbekiston Respublikasi Oliy Ta’lim O‘quv Dasturi Standarti · UZ / RU / EN</text>
    </svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `certificate-${res.completedAt}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (stage === 'intro') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {tText(UI_TEXT.finalExamTitle, lang)}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {tText(UI_TEXT.finalExamSubtitle, lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="font-mono font-bold text-lg text-indigo-600 dark:text-indigo-400">30</div>
              <div className="text-slate-600 dark:text-slate-300">
                {tr('Savollar (har mavzudan 2 tadan)', 'Вопросов (по 2 из 15 тем)', 'Questions (2 per module)', lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="font-mono font-bold text-lg text-emerald-600 dark:text-emerald-400">40:00</div>
              <div className="text-slate-600 dark:text-slate-300">
                {tr('Ajratilgan vaqt (daqiqa)', 'Лимит времени (минут)', 'Exam Duration (minutes)', lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="font-mono font-bold text-lg text-amber-600 dark:text-amber-400">≥ 60%</div>
              <div className="text-slate-600 dark:text-slate-300">
                {tr('Sertifikat o‘tish bali', 'Проходной балл сертификата', 'Passing Score for Certificate', lang)}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
              {tText(UI_TEXT.enterStudentName, lang)}
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder={tr('Masalan: Azizbek Karimov', 'Например: Азизбек Каримов', 'e.g., Azizbek Karimov', lang)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="button"
            onClick={startExam}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>{tText(UI_TEXT.startExamBtn, lang)}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'running' && questions.length > 0) {
    const qItem = questions[currentIdx];
    const opts = tArray(qItem.original.options, lang);
    const chosen = answers[currentIdx];
    const answeredCount = Object.keys(answers).length;

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs sm:text-sm font-mono tabular-nums text-slate-600 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white">
              {currentIdx + 1} / {questions.length}
            </span>{' '}
            · {qItem.original.topicId.toUpperCase()} ·{' '}
            {tr('Belgilandi:', 'Отвечено:', 'Answered:', lang)} {answeredCount}/{questions.length}
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-mono font-bold tabular-nums">
            <Clock className="w-4 h-4" />
            <span>{formatTime(secondsLeft)}</span>
          </div>
        </div>

        {/* Question Navigator Grid */}
        <div className="flex flex-wrap gap-1.5">
          {questions.map((_, idx) => {
            const done = answers[idx] !== undefined;
            const active = idx === currentIdx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  active
                    ? 'bg-indigo-600 text-white'
                    : done
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Active Question */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
            {currentIdx + 1}. {tText(qItem.original.question, lang)}
          </h2>

          <div className="space-y-2.5">
            {qItem.optionOrder.map((origIdx, dispIdx) => {
              const selected = chosen === dispIdx;
              return (
                <button
                  key={origIdx}
                  type="button"
                  onClick={() => setAnswers((prev) => ({ ...prev, [currentIdx]: dispIdx }))}
                  className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-colors flex items-start gap-3 cursor-pointer ${
                    selected
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-600 text-indigo-950 dark:text-indigo-100'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-indigo-400 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <span className="font-mono text-xs font-bold mt-0.5 shrink-0">
                    {String.fromCharCode(65 + dispIdx)}.
                  </span>
                  <span>{opts[origIdx]}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 disabled:opacity-40 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{tr('Oldingi', 'Назад', 'Previous', lang)}</span>
            </button>

            {currentIdx + 1 < questions.length ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => i + 1)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 cursor-pointer"
              >
                <span>{tText(UI_TEXT.nextQuestion, lang)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => submitExam(answers)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{tText(UI_TEXT.finishQuiz, lang)}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Stage === 'result'
  if (!latestResult) return null;

  const chartRows = ALL_TOPICS.map((t) => {
    const stat = latestResult.topicBreakdown[t.id] || { correct: 0, total: 2 };
    const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
    return {
      code: t.code,
      topicId: t.id,
      title: tText(t.title, lang),
      pct,
    };
  });

  const weakModules = chartRows.filter((r) => r.pct < 100);
  const passed = latestResult.percentage >= 60;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Summary Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 no-print">
        <div className="space-y-1.5">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
            {tr('YAKUNIY IMTIHON NATIJASI', 'ИТОГОВЫЙ РЕЗУЛЬТАТ', 'FINAL EXAM REPORT', lang)}
          </div>
          <h1 className="text-3xl font-extrabold font-mono tabular-nums text-slate-900 dark:text-white">
            {latestResult.score} / {latestResult.total} ({latestResult.percentage}%)
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {passed
              ? tr(
                  'Tabriklaymiz! Siz kurs bo‘yicha yakuniy sinovdan muvaffaqiyatli o‘tdingiz.',
                  'Поздравляем! Вы успешно сдали итоговый экзамен по курсу.',
                  'Congratulations! You passed the comprehensive course examination.',
                  lang
                )
              : tr(
                  'Sertifikat olish uchun kamida 60% natija talab etiladi. Pastdagi mavzularni takrorlab qayta topshiring.',
                  'Для получения сертификата требуется минимум 60%. Повторите слабые темы и пересдайте.',
                  'A minimum score of 60% is required to unlock the certificate. Review weak modules below and retake.',
                  lang
                )}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setStage('intro')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{tText(UI_TEXT.retakeQuiz, lang)}</span>
          </button>
          {passed && (
            <>
              <button
                type="button"
                onClick={() => downloadCertificateSvg(latestResult)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>SVG</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>{tText(UI_TEXT.printCertificate, lang)}</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Printable Certificate */}
      {passed && (
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-600 text-center space-y-5 print-card">
          <div className="text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
            {tText(UI_TEXT.brandTitle, lang).toUpperCase()}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {tr('O‘QUV KURSI SERTIFIKATI', 'СЕРТИФИКАТ ОБ ОСВОЕНИИ КУРСА', 'CERTIFICATE OF MASTERY', lang)}
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
          <div className="space-y-2 py-2">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {tr('Ushbu sertifikat egasi:', 'Настоящим подтверждается, что:', 'Proudly presented to:', lang)}
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                value={latestResult.studentName}
                onChange={(e) => {
                  const updated = { ...latestResult, studentName: e.target.value };
                  setLatestResult(updated);
                  onSaveAttempt(updated);
                }}
                aria-label="Certificate Student Name"
                className="text-center text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white bg-transparent border-b border-dashed border-slate-300 dark:border-slate-700 focus:outline-none focus:border-indigo-500 px-3 py-1"
              />
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {tr(
              '15 ta mavzu (30 akademik soat) dan iborat "Tadbirkorlik asoslari" elektron o‘quv dasturi bo‘yicha yakuniy kompleks imtihonni muvaffaqiyatli topshirdi.',
              'успешно завершил(а) изучение 15 модулей (30 академических часов) и сдал(а) итоговый экзамен по дисциплине «Основы предпринимательства».',
              'has successfully demonstrated mastery across all 15 modules (30 academic hours) of the Entrepreneurship Fundamentals curriculum.',
              lang
            )}
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-mono tabular-nums text-slate-800 dark:text-slate-200">
            <span>
              {tr('Natija:', 'Балл:', 'Score:', lang)} {latestResult.score}/{latestResult.total} ({latestResult.percentage}%)
            </span>
            <span>·</span>
            <span>
              {tr('Sana:', 'Дата:', 'Date:', lang)} {latestResult.completedAt}
            </span>
          </div>
        </div>
      )}

      {/* Competency Chart across M1-M15 */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 no-print">
        <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100">
          {tr(
            '15 ta mavzu kesimida o‘zlashtirish tahlili (%)',
            'Освоение компетенций по 15 модулям (%)',
            'Mastery Breakdown Across All 15 Modules (%)',
            lang
          )}
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartRows}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#e2e8f0'} />
              <XAxis dataKey="code" stroke={isDark ? '#94a3b8' : '#64748b'} fontSize={11} />
              <YAxis domain={[0, 100]} stroke={isDark ? '#94a3b8' : '#64748b'} fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#0f172a' : '#ffffff',
                  borderColor: isDark ? '#334155' : '#cbd5e1',
                  borderRadius: '0.75rem',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="pct" name="%" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {weakModules.length > 0 && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>
                {tr(
                  'Takrorlash tavsiya etiladigan mavzular:',
                  'Темы, рекомендуемые к повторению:',
                  'Recommended Modules for Review:',
                  lang
                )}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {weakModules.map((wm) => (
                <button
                  key={wm.topicId}
                  type="button"
                  onClick={() => onOpenTopic(wm.topicId)}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-indigo-400 cursor-pointer"
                >
                  {wm.code}: {wm.title} ({wm.pct}%)
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
