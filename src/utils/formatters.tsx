import React from 'react';
import confetti from 'canvas-confetti';
import {
  Lightbulb,
  FlaskConical,
  Landmark,
  FileCheck2,
  Receipt,
  LayoutGrid,
  Users,
  Megaphone,
  Handshake,
  Calculator,
  ArrowLeftRight,
  TrendingUp,
  FileSpreadsheet,
  ShieldCheck,
  Presentation,
  Briefcase,
} from 'lucide-react';
import { Language } from '../types';

export function formatNumber(value: number, decimals = 0): string {
  if (!Number.isFinite(value)) return '0';
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatUZS(value: number, lang: Language): string {
  const suffix = lang === 'uz' ? "so'm" : lang === 'ru' ? 'сум' : 'UZS';
  return `${formatNumber(Math.round(value))} ${suffix}`;
}

export function formatCompactUZS(value: number, lang: Language): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? '−' : '';
  if (abs >= 1_000_000_000) {
    const unit = lang === 'uz' ? "mlrd so'm" : lang === 'ru' ? 'млрд сум' : 'B UZS';
    return `${sign}${formatNumber(abs / 1_000_000_000, 2)} ${unit}`;
  }
  if (abs >= 1_000_000) {
    const unit = lang === 'uz' ? "mln so'm" : lang === 'ru' ? 'млн сум' : 'M UZS';
    return `${sign}${formatNumber(abs / 1_000_000, 1)} ${unit}`;
  }
  return formatUZS(value, lang);
}

export function triggerSuccessConfetti(): void {
  if (typeof window === 'undefined') return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;
  try {
    confetti({
      particleCount: 70,
      spread: 65,
      origin: { y: 0.65 },
      colors: ['#4f46e5', '#10b981', '#f59e0b'],
    });
  } catch {
    // Ignore confetti canvas errors in restricted environments
  }
}

export function TopicIcon({
  iconName,
  topicNumber,
  className = 'w-5 h-5',
}: {
  iconName?: string;
  topicNumber?: number;
  className?: string;
}): React.ReactElement {
  const key = (iconName || '').toLowerCase();
  if (key.includes('light') || topicNumber === 1) return <Lightbulb className={className} />;
  if (key.includes('flask') || key.includes('rocket') || key.includes('target') || topicNumber === 2)
    return <FlaskConical className={className} />;
  if (key.includes('landmark') || key.includes('wallet') || key.includes('bank') || topicNumber === 3)
    return <Landmark className={className} />;
  if (key.includes('file-check') || key.includes('building') || key.includes('scale') || topicNumber === 4)
    return <FileCheck2 className={className} />;
  if (key.includes('receipt') || key.includes('percent') || topicNumber === 5)
    return <Receipt className={className} />;
  if (key.includes('layout') || key.includes('layers') || key.includes('grid') || topicNumber === 6)
    return <LayoutGrid className={className} />;
  if (key.includes('users') || key.includes('compass') || topicNumber === 7)
    return <Users className={className} />;
  if (key.includes('megaphone') || topicNumber === 8) return <Megaphone className={className} />;
  if (key.includes('handshake') || key.includes('funnel') || topicNumber === 9)
    return <Handshake className={className} />;
  if (key.includes('calculator') || key.includes('tag') || topicNumber === 10)
    return <Calculator className={className} />;
  if (key.includes('arrow') || key.includes('activity') || topicNumber === 11)
    return <ArrowLeftRight className={className} />;
  if (key.includes('trending') || key.includes('pie') || key.includes('bar') || topicNumber === 12)
    return <TrendingUp className={className} />;
  if (key.includes('spreadsheet') || key.includes('clipboard') || key.includes('book') || topicNumber === 13)
    return <FileSpreadsheet className={className} />;
  if (key.includes('shield') || topicNumber === 14) return <ShieldCheck className={className} />;
  if (key.includes('presentation') || key.includes('mic') || key.includes('award') || topicNumber === 15)
    return <Presentation className={className} />;

  return <Briefcase className={className} />;
}
