export type Language = 'uz' | 'ru' | 'en';

export type LocalizedText = {
  uz: string;
  ru: string;
  en: string;
};

export type LocalizedStringArray = {
  uz: string[];
  ru: string[];
  en: string[];
};

export type CalculatorId =
  | 'breakeven'
  | 'pricing'
  | 'credit'
  | 'roi'
  | 'pnl'
  | 'cashflow'
  | 'tamsamsom'
  | 'funnel';

export type DiagramType =
  | 'value-chain'
  | 'mvp-cycle'
  | 'credit-comparison'
  | 'legal-forms'
  | 'tax-regimes'
  | 'bmc-canvas'
  | 'tam-sam-som'
  | 'marketing-4p'
  | 'sales-funnel'
  | 'cost-structure'
  | 'cashflow-cycle'
  | 'profit-waterfall'
  | 'business-plan-blocks'
  | 'risk-matrix'
  | 'pitch-deck-10';

export interface TopicSection {
  id: string;
  title: LocalizedText;
  paragraphs: LocalizedStringArray;
  bulletPoints?: LocalizedStringArray;
  highlightTerms?: string[]; // Glossary IDs highlighted in this section
  comparisonTable?: {
    headers: LocalizedStringArray;
    rows: {
      uz: string[][];
      ru: string[][];
      en: string[][];
    };
  };
}

export interface StatMetric {
  value: LocalizedText;
  label: LocalizedText;
  subnote: LocalizedText;
  year: string;
  sourceName: LocalizedText;
  sourceUrl: string;
}

export interface TopicChartDataPoint {
  name: LocalizedText;
  value: number;
  secondaryValue?: number;
}

export interface TopicChart {
  id: string;
  type: 'bar' | 'line' | 'pie' | 'area';
  title: LocalizedText;
  unit: LocalizedText;
  year: string;
  sourceName: LocalizedText;
  sourceUrl: string;
  seriesLabel: LocalizedText;
  secondarySeriesLabel?: LocalizedText;
  data: TopicChartDataPoint[];
}

export interface LegalAct {
  id: string;
  docType: LocalizedText; // Qonun, Kodeks, Prezident Farmoni, VM Qarori
  title: LocalizedText;
  summary: LocalizedText;
  relevance: LocalizedText;
  keyClauses: LocalizedStringArray;
  yearNote: string;
  lexUrl: string;
}

export interface CaseStudy {
  title: LocalizedText;
  scenario: LocalizedText;
  analysis: LocalizedText;
  numbersBreakdown: LocalizedStringArray;
  challengeQuestion: LocalizedText;
  challengeOptions: LocalizedStringArray;
  correctOptionIndex: number;
  challengeExplanation: LocalizedText;
}

export interface QuizQuestion {
  id: string;
  topicId: string;
  question: LocalizedText;
  options: LocalizedStringArray; // 4 options
  correctIndex: number; // 0..3 before shuffling
  explanation: LocalizedText;
  hint: LocalizedText;
  isCalculation?: boolean;
}

export interface TopicData {
  id: string; // 'm1' .. 'm15'
  number: number; // 1 .. 15
  code: string; // 'M1' .. 'M15'
  hours: number; // 2
  readMinutes: number;
  iconName: string;
  roadmapStage: LocalizedText;
  title: LocalizedText;
  shortDesc: LocalizedText;
  summary: LocalizedText;
  learningObjectives: LocalizedStringArray;
  sections: TopicSection[];
  diagramType: DiagramType;
  diagramTitle: LocalizedText;
  diagramNote: LocalizedText;
  stats: StatMetric[];
  charts: TopicChart[];
  legalActs: LegalAct[];
  hasDynamicRateWarning?: boolean;
  caseStudy: CaseStudy;
  calculatorId?: CalculatorId;
  keyTakeaways: LocalizedStringArray;
}

export interface GlossaryTerm {
  id: string;
  term: LocalizedText;
  category: 'strategy' | 'finance' | 'legal' | 'marketing' | 'operations';
  definition: LocalizedText;
  example?: LocalizedText;
  relatedTopicId: string;
}

export interface TopicQuizAttempt {
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
}

export interface FinalExamAttempt {
  score: number;
  total: number;
  percentage: number;
  studentName: string;
  completedAt: string;
  topicBreakdown: Record<string, { correct: number; total: number }>;
}

export interface UserProgress {
  completedTopics: string[]; // ['m1', 'm2']
  quizScores: Record<string, TopicQuizAttempt>;
  finalExam?: FinalExamAttempt;
}
