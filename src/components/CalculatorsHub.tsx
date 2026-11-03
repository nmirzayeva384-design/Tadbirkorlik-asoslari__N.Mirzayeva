import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';
import {
  Calculator,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
} from 'lucide-react';
import { CalculatorId, Language } from '../types';
import { tText, UI_TEXT } from '../data/i18n';
import { formatCompactUZS, formatNumber, formatUZS } from '../utils/formatters';

const tr = (uz: string, ru: string, en: string, lang: Language) =>
  lang === 'uz' ? uz : lang === 'ru' ? ru : en;

interface LabeledInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (val: number) => void;
}

const LabeledSliderInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
        <label className="font-medium text-slate-700 dark:text-slate-200">{label}</label>
        <span className="font-mono font-semibold text-indigo-600 dark:text-indigo-400 tabular-nums shrink-0">
          {formatNumber(value, step < 1 ? 1 : 0)} {unit}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={Math.min(Math.max(value, min), max)}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
        />
        <input
          type="number"
          min={0}
          step={step}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          aria-label={`${label} numeric`}
          className="w-28 px-2.5 py-1.5 text-xs font-mono tabular-nums rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};

interface SingleCalculatorProps {
  calculatorId: CalculatorId;
  lang: Language;
  isDark: boolean;
  onOpenTopic?: (topicId: string) => void;
}

export const SingleCalculatorWidget: React.FC<SingleCalculatorProps> = ({
  calculatorId,
  lang,
  isDark,
}) => {
  const axisColor = isDark ? '#94a3b8' : '#64748b';
  const gridColor = isDark ? '#1e293b' : '#e2e8f0';
  const tooltipStyle = {
    backgroundColor: isDark ? '#0f172a' : '#ffffff',
    borderColor: isDark ? '#334155' : '#cbd5e1',
    color: isDark ? '#f8fafc' : '#0f172a',
    borderRadius: '0.75rem',
    fontSize: '12px',
  };

  // 1) Break-even & Pricing state (M10)
  const [fixedCostMln, setFixedCostMln] = useState(24); // 24 mln UZS/month
  const [unitPriceThs, setUnitPriceThs] = useState(45); // 45,000 UZS
  const [unitVarCostThs, setUnitVarCostThs] = useState(25); // 25,000 UZS
  const [plannedUnits, setPlannedUnits] = useState(1800);
  const [discountPct, setDiscountPct] = useState(0);

  // 2) Credit calculator state (M3)
  const [loanAmountMln, setLoanAmountMln] = useState(300); // 300 mln UZS
  const [annualRate, setAnnualRate] = useState(22); // 22% UZS commercial rate
  const [loanMonths, setLoanMonths] = useState(36); // 3 years
  const [repaymentType, setRepaymentType] = useState<'annuity' | 'differential'>('annuity');
  const [monthlyOperatingCashMln, setMonthlyOperatingCashMln] = useState(18); // for DSCR check

  // 3) TAM / SAM / SOM state (M7)
  const [totalCustomersThs, setTotalCustomersThs] = useState(1200); // 1,200k = 1.2M target households/firms
  const [annualSpendThs, setAnnualSpendThs] = useState(600); // 600k UZS/year
  const [samSharePct, setSamSharePct] = useState(18); // 18% reachable segment
  const [somSharePct, setSomSharePct] = useState(4); // 4% realistic capture of SAM
  const [monthlyCapacityClients, setMonthlyCapacityClients] = useState(450);

  // 4) Sales Funnel & CAC/LTV state (M9)
  const [adBudgetMln, setAdBudgetMln] = useState(12); // 12 mln UZS
  const [trafficClicks, setTrafficClicks] = useState(8000);
  const [clickToLeadPct, setClickToLeadPct] = useState(7.5);
  const [leadToSalePct, setLeadToSalePct] = useState(20);
  const [avgCheckThs, setAvgCheckThs] = useState(350); // 350k UZS
  const [grossMarginPct, setGrossMarginPct] = useState(45);
  const [repeatPurchases, setRepeatPurchases] = useState(3.2);

  // 5) 6-Month Cash Flow state (M11)
  const [openingCashMln, setOpeningCashMln] = useState(40);
  const [mInflows, setMInflows] = useState<number[]>([45, 55, 70, 85, 110, 125]);
  const [mOutflows, setMOutflows] = useState<number[]>([65, 65, 68, 72, 82, 88]);

  // 6) P&L + ROI state (M12)
  const [pnlRevenueMln, setPnlRevenueMln] = useState(220);
  const [pnlCogsPct, setPnlCogsPct] = useState(52);
  const [pnlOpexMln, setPnlOpexMln] = useState(54);
  const [pnlDeprMln, setPnlDeprMln] = useState(5);
  const [pnlInterestMln, setPnlInterestMln] = useState(6);
  const [taxMode, setTaxMode] = useState<'cit15' | 'turnover4'>('cit15');
  const [investedCapitalMln, setInvestedCapitalMln] = useState(900);

  // Normalize 'pricing' -> breakeven+pricing, 'roi' -> pnl+roi
  const mode =
    calculatorId === 'pricing'
      ? 'breakeven'
      : calculatorId === 'roi'
      ? 'pnl'
      : calculatorId;

  // --- Computations ---
  const bepResults = useMemo(() => {
    const fc = fixedCostMln * 1_000_000;
    const effectivePrice = unitPriceThs * 1_000 * (1 - discountPct / 100);
    const vc = unitVarCostThs * 1_000;
    const cm = effectivePrice - vc;
    const markupPct = vc > 0 ? ((effectivePrice - vc) / vc) * 100 : 0;
    const marginPct = effectivePrice > 0 ? (cm / effectivePrice) * 100 : 0;
    const bepUnits = cm > 0 ? Math.ceil(fc / cm) : Infinity;
    const bepRevenue = Number.isFinite(bepUnits) ? bepUnits * effectivePrice : 0;
    const actualRevenue = plannedUnits * effectivePrice;
    const actualProfit = plannedUnits * cm - fc;
    const safetyPct =
      actualRevenue > 0 && Number.isFinite(bepUnits)
        ? ((actualRevenue - bepRevenue) / actualRevenue) * 100
        : -100;

    const maxX = Math.max(plannedUnits * 1.4, Number.isFinite(bepUnits) ? bepUnits * 1.5 : 2000, 500);
    const stepX = Math.round(maxX / 6);
    const chartData = Array.from({ length: 7 }, (_, i) => {
      const q = i * stepX;
      return {
        units: q,
        revenue: Math.round((q * effectivePrice) / 1_000_000),
        totalCost: Math.round((fc + q * vc) / 1_000_000),
      };
    });

    return {
      effectivePrice,
      cm,
      markupPct,
      marginPct,
      bepUnits,
      bepRevenue,
      actualRevenue,
      actualProfit,
      safetyPct,
      chartData,
    };
  }, [fixedCostMln, unitPriceThs, unitVarCostThs, plannedUnits, discountPct]);

  const creditResults = useMemo(() => {
    const principal = loanAmountMln * 1_000_000;
    const r = annualRate / 100 / 12;
    const n = Math.max(1, loanMonths);

    let firstPayment = 0;
    let lastPayment = 0;
    let totalPaid = 0;
    const scheduleChart: { period: string; principalPart: number; interestPart: number }[] = [];

    if (repaymentType === 'annuity') {
      const pmt =
        r > 0 ? (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1) : principal / n;
      firstPayment = pmt;
      lastPayment = pmt;
      totalPaid = pmt * n;

      let balance = principal;
      const sampleStep = Math.max(1, Math.floor(n / 8));
      for (let m = 1; m <= n; m++) {
        const interest = balance * r;
        const princ = pmt - interest;
        balance = Math.max(0, balance - princ);
        if (m === 1 || m % sampleStep === 0 || m === n) {
          scheduleChart.push({
            period: `${m}-${tr('oy', 'мес', 'mo', lang)}`,
            principalPart: Math.round(princ / 1_000_000 * 10) / 10,
            interestPart: Math.round(interest / 1_000_000 * 10) / 10,
          });
        }
      }
    } else {
      const fixedPrincipal = principal / n;
      let balance = principal;
      const sampleStep = Math.max(1, Math.floor(n / 8));
      for (let m = 1; m <= n; m++) {
        const interest = balance * r;
        const pmt = fixedPrincipal + interest;
        if (m === 1) firstPayment = pmt;
        if (m === n) lastPayment = pmt;
        totalPaid += pmt;
        balance = Math.max(0, balance - fixedPrincipal);
        if (m === 1 || m % sampleStep === 0 || m === n) {
          scheduleChart.push({
            period: `${m}-${tr('oy', 'мес', 'mo', lang)}`,
            principalPart: Math.round(fixedPrincipal / 1_000_000 * 10) / 10,
            interestPart: Math.round(interest / 1_000_000 * 10) / 10,
          });
        }
      }
    }

    const totalInterest = totalPaid - principal;
    const requiredCollateral = principal * 1.25;
    const dscr = firstPayment > 0 ? (monthlyOperatingCashMln * 1_000_000) / firstPayment : 0;

    return {
      firstPayment,
      lastPayment,
      totalPaid,
      totalInterest,
      requiredCollateral,
      dscr,
      scheduleChart,
    };
  }, [loanAmountMln, annualRate, loanMonths, repaymentType, monthlyOperatingCashMln, lang]);

  const marketResults = useMemo(() => {
    const tam = totalCustomersThs * 1_000 * (annualSpendThs * 1_000);
    const sam = tam * (samSharePct / 100);
    const somTopDown = sam * (somSharePct / 100);
    const somBottomUp = monthlyCapacityClients * 12 * (annualSpendThs * 1_000);
    const chartData = [
      { name: 'TAM', mlrd: Math.round((tam / 1_000_000_000) * 10) / 10 },
      { name: 'SAM', mlrd: Math.round((sam / 1_000_000_000) * 10) / 10 },
      { name: 'SOM (Top-Down)', mlrd: Math.round((somTopDown / 1_000_000_000) * 100) / 100 },
      { name: 'SOM (Quvvat)', mlrd: Math.round((somBottomUp / 1_000_000_000) * 100) / 100 },
    ];
    return { tam, sam, somTopDown, somBottomUp, chartData };
  }, [totalCustomersThs, annualSpendThs, samSharePct, somSharePct, monthlyCapacityClients]);

  const funnelResults = useMemo(() => {
    const leads = Math.round(trafficClicks * (clickToLeadPct / 100));
    const buyers = Math.round(leads * (leadToSalePct / 100));
    const budgetUZS = adBudgetMln * 1_000_000;
    const cpl = leads > 0 ? budgetUZS / leads : 0;
    const cac = buyers > 0 ? budgetUZS / buyers : 0;
    const revenue = buyers * avgCheckThs * 1_000;
    const grossProfitFirstOrder = revenue * (grossMarginPct / 100);
    const ltv = avgCheckThs * 1_000 * repeatPurchases * (grossMarginPct / 100);
    const ltvCacRatio = cac > 0 ? ltv / cac : 0;
    const romi = budgetUZS > 0 ? ((grossProfitFirstOrder * repeatPurchases - budgetUZS) / budgetUZS) * 100 : 0;

    const chartData = [
      { stage: tr('Kliklar', 'Клики', 'Clicks', lang), count: trafficClicks },
      { stage: tr('Lidlar', 'Лиды', 'Leads', lang), count: leads },
      { stage: tr('Xaridorlar', 'Покупатели', 'Buyers', lang), count: buyers },
    ];
    return { leads, buyers, cpl, cac, revenue, ltv, ltvCacRatio, romi, chartData };
  }, [adBudgetMln, trafficClicks, clickToLeadPct, leadToSalePct, avgCheckThs, grossMarginPct, repeatPurchases, lang]);

  const cashflowResults = useMemo(() => {
    let running = openingCashMln;
    let minBalance = openingCashMln;
    let deficitMonths = 0;

    const rows = mInflows.map((inf, idx) => {
      const out = mOutflows[idx] ?? 0;
      const net = inf - out;
      running = Math.round((running + net) * 10) / 10;
      if (running < minBalance) minBalance = running;
      if (running < 0) deficitMonths += 1;
      return {
        month: `${idx + 1}-${tr('oy', 'мес', 'mo', lang)}`,
        inflow: inf,
        outflow: out,
        net,
        closing: running,
      };
    });

    return { rows, endingBalance: running, minBalance, deficitMonths };
  }, [openingCashMln, mInflows, mOutflows, lang]);

  const pnlResults = useMemo(() => {
    const rev = pnlRevenueMln;
    const cogs = Math.round(rev * (pnlCogsPct / 100) * 10) / 10;
    const gross = Math.round((rev - cogs) * 10) / 10;
    const ebitda = Math.round((gross - pnlOpexMln) * 10) / 10;
    const ebit = Math.round((ebitda - pnlDeprMln) * 10) / 10;
    const ebt = Math.round((ebit - pnlInterestMln) * 10) / 10;
    const tax =
      taxMode === 'turnover4'
        ? Math.round(rev * 0.04 * 10) / 10
        : ebt > 0
        ? Math.round(ebt * 0.15 * 10) / 10
        : 0;
    const netProfit = Math.round((ebt - tax) * 10) / 10;
    const rosPct = rev > 0 ? (netProfit / rev) * 100 : 0;
    const annualNetMln = netProfit * 12;
    const annualRoiPct = investedCapitalMln > 0 ? (annualNetMln / investedCapitalMln) * 100 : 0;
    const paybackYears = annualNetMln > 0 ? investedCapitalMln / annualNetMln : Infinity;

    const waterfall = [
      { step: tr('Tushum', 'Выручка', 'Revenue', lang), val: rev },
      { step: tr('Yalpi foyda', 'Валовая', 'Gross Profit', lang), val: gross },
      { step: 'EBITDA', val: ebitda },
      { step: 'EBT', val: ebt },
      { step: tr('Sof foyda', 'Чистая', 'Net Profit', lang), val: netProfit },
    ];
    return { cogs, gross, ebitda, ebt, tax, netProfit, rosPct, annualRoiPct, paybackYears, waterfall };
  }, [pnlRevenueMln, pnlCogsPct, pnlOpexMln, pnlDeprMln, pnlInterestMln, taxMode, investedCapitalMln, lang]);

  // --- Renderers per calculator mode ---
  if (mode === 'breakeven') {
    const unitCur = tr("ming so'm", 'тыс. сум', 'k UZS', lang);
    const mlnCur = tr("mln so'm", 'млн сум', 'M UZS', lang);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {tr('Kirish parametrlari', 'Входные параметры', 'Model Inputs', lang)}
            </h4>
            <button
              type="button"
              onClick={() => {
                setFixedCostMln(24);
                setUnitPriceThs(45);
                setUnitVarCostThs(25);
                setPlannedUnits(1800);
                setDiscountPct(0);
              }}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{tr('Tiklash', 'Сброс', 'Reset', lang)}</span>
            </button>
          </div>

          <LabeledSliderInput
            label={tr('Oylik doimiy xarajatlar (FC)', 'Постоянные расходы в месяц (FC)', 'Monthly Fixed Costs (FC)', lang)}
            value={fixedCostMln}
            min={2}
            max={200}
            step={1}
            unit={mlnCur}
            onChange={setFixedCostMln}
          />
          <LabeledSliderInput
            label={tr('1 dona sotuv narxi (P)', 'Цена продажи единицы (P)', 'Selling Price per Unit (P)', lang)}
            value={unitPriceThs}
            min={5}
            max={500}
            step={1}
            unit={unitCur}
            onChange={setUnitPriceThs}
          />
          <LabeledSliderInput
            label={tr('1 dona o‘zgaruvchan tannarx (VC)', 'Переменная себестоимость (VC)', 'Variable Cost per Unit (VC)', lang)}
            value={unitVarCostThs}
            min={1}
            max={400}
            step={1}
            unit={unitCur}
            onChange={setUnitVarCostThs}
          />
          <LabeledSliderInput
            label={tr('Chegirma (Skidka %)', 'Скидка (%)', 'Price Discount (%)', lang)}
            value={discountPct}
            min={0}
            max={40}
            step={1}
            unit="%"
            onChange={setDiscountPct}
          />
          <LabeledSliderInput
            label={tr('Rejadagi oylik sotuv hajmi', 'Плановый объем продаж (шт.)', 'Planned Monthly Volume (units)', lang)}
            value={plannedUnits}
            min={100}
            max={6000}
            step={50}
            unit={tr('dona', 'шт.', 'units', lang)}
            onChange={setPlannedUnits}
          />
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('BEP (donada)', 'BEP (в штуках)', 'BEP (Units)', lang)}
              </div>
              <div className="text-lg font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                {Number.isFinite(bepResults.bepUnits)
                  ? `${formatNumber(bepResults.bepUnits)} ${tr('dona', 'шт.', 'u.', lang)}`
                  : '∞'}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('BEP (pulda)', 'BEP (в сумах)', 'BEP Revenue', lang)}
              </div>
              <div className="text-lg font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                {Number.isFinite(bepResults.bepUnits)
                  ? formatCompactUZS(bepResults.bepRevenue, lang)
                  : '—'}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('Ustama / Marja', 'Наценка / Маржа', 'Markup / Margin', lang)}
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                {formatNumber(bepResults.markupPct, 1)}% / {formatNumber(bepResults.marginPct, 1)}%
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('Oylik foyda / zarar', 'Прибыль / убыток', 'Operating Profit', lang)}
              </div>
              <div
                className={`text-lg font-bold font-mono tabular-nums ${
                  bepResults.actualProfit >= 0
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {formatCompactUZS(bepResults.actualProfit, lang)}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
              {tr(
                'Tushum va Jami xarajatlar kesishuvi (mln so‘mda)',
                'График точки безубыточности (млн сум)',
                'Break-Even Revenue vs Total Cost (M UZS)',
                lang
              )}
            </div>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bepResults.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="units" stroke={axisColor} fontSize={11} />
                  <YAxis stroke={axisColor} fontSize={11} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    name={tr('Jami tushum (TR)', 'Выручка (TR)', 'Total Revenue', lang)}
                    stroke="#10b981"
                    strokeWidth={2.5}
                  />
                  <Line
                    type="monotone"
                    dataKey="totalCost"
                    name={tr('Jami xarajat (TC)', 'Затраты (TC)', 'Total Cost', lang)}
                    stroke="#ef4444"
                    strokeWidth={2.5}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
              bepResults.cm <= 0 || bepResults.actualProfit < 0
                ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
            }`}
          >
            {bepResults.cm <= 0 || bepResults.actualProfit < 0 ? (
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <div>
              {bepResults.cm <= 0 ? (
                <span>
                  {tr(
                    'Diqqat: Chegirmadan keyingi sotuv narxi o‘zgaruvchan tannarxdan past! Har bir sotilgan dona zararni kattalashtiradi.',
                    'Внимание: Цена со скидкой ниже переменной себестоимости! Каждая продажа генерирует прямой убыток.',
                    'Warning: Effective unit price is at or below variable cost — every unit sold increases losses.',
                    lang
                  )}
                </span>
              ) : bepResults.actualProfit < 0 ? (
                <span>
                  {tr(
                    `Rejadagi sotuv (${formatNumber(plannedUnits)} dona) zararsizlik nuqtasidan (${formatNumber(bepResults.bepUnits)} dona) past. Zarardan chiqish uchun yana kamida ${formatNumber(bepResults.bepUnits - plannedUnits)} dona ko‘proq sotish zarur.`,
                    `Плановый объем (${formatNumber(plannedUnits)} шт.) ниже точки безубыточности (${formatNumber(bepResults.bepUnits)} шт.). Не хватает ${formatNumber(bepResults.bepUnits - plannedUnits)} продаж.`,
                    `Planned volume (${formatNumber(plannedUnits)}) falls short of BEP (${formatNumber(bepResults.bepUnits)} units).`,
                    lang
                  )}
                </span>
              ) : (
                <span>
                  {tr(
                    `Moliyaviy mustahkamlik zaxirasi (Margin of Safety): ${formatNumber(bepResults.safetyPct, 1)}%. Sotuv hajmi ${formatNumber(bepResults.safetyPct, 1)}% gacha pasaysa ham biznes zararga kirmaydi.`,
                    `Запас финансовой прочности: ${formatNumber(bepResults.safetyPct, 1)}%. Бизнес остается безубыточным даже при спаде продаж на ${formatNumber(bepResults.safetyPct, 1)}%.`,
                    `Margin of Safety: ${formatNumber(bepResults.safetyPct, 1)}% cushion above break-even volume.`,
                    lang
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'credit') {
    const mlnCur = tr("mln so'm", 'млн сум', 'M UZS', lang);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {tr('Kredit shartlari', 'Параметры кредита', 'Loan Terms', lang)}
            </h4>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setRepaymentType('annuity')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md cursor-pointer transition-colors ${
                  repaymentType === 'annuity'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {tr('Annuitet', 'Аннуитет', 'Annuity', lang)}
              </button>
              <button
                type="button"
                onClick={() => setRepaymentType('differential')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md cursor-pointer transition-colors ${
                  repaymentType === 'differential'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {tr('Differensial', 'Дифференц.', 'Differential', lang)}
              </button>
            </div>
          </div>

          <LabeledSliderInput
            label={tr('Kredit summasi', 'Сумма кредита', 'Loan Principal', lang)}
            value={loanAmountMln}
            min={20}
            max={2000}
            step={10}
            unit={mlnCur}
            onChange={setLoanAmountMln}
          />
          <LabeledSliderInput
            label={tr('Yillik foiz stavkasi (UZS)', 'Годовая ставка (%)', 'Annual Interest Rate (%)', lang)}
            value={annualRate}
            min={10}
            max={34}
            step={0.5}
            unit="%"
            onChange={setAnnualRate}
          />
          <LabeledSliderInput
            label={tr('Kredit muddati (oy)', 'Срок кредита (мес.)', 'Loan Term (months)', lang)}
            value={loanMonths}
            min={6}
            max={84}
            step={6}
            unit={tr('oy', 'мес.', 'mo', lang)}
            onChange={setLoanMonths}
          />
          <LabeledSliderInput
            label={tr('Kutilayotgan oylik sof operatsion oqim (DSCR uchun)', 'Операционный поток в месяц (для DSCR)', 'Monthly Operating Cash Flow (for DSCR)', lang)}
            value={monthlyOperatingCashMln}
            min={2}
            max={120}
            step={1}
            unit={mlnCur}
            onChange={setMonthlyOperatingCashMln}
          />
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('1-oylik to‘lov', '1-й ежемесячный платеж', '1st Month Payment', lang)}
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                {formatCompactUZS(creditResults.firstPayment, lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('Jami foiz xarajati', 'Переплата по процентам', 'Total Interest Cost', lang)}
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-amber-600 dark:text-amber-400">
                {formatCompactUZS(creditResults.totalInterest, lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('Talab etiladigan garov (125%)', 'Требуемый залог (125%)', 'Collateral Needed (125%)', lang)}
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                {formatCompactUZS(creditResults.requiredCollateral, lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                DSCR ({tr('Me’yor ≥ 1.3x', 'Норма ≥ 1.3x', 'Safe ≥ 1.3x', lang)})
              </div>
              <div
                className={`text-lg font-bold font-mono tabular-nums ${
                  creditResults.dscr >= 1.3
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {formatNumber(creditResults.dscr, 2)}x
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
              {tr(
                'Asosiy qarz va Foiz to‘lovlari tarkibi (mln so‘mda)',
                'Структура платежей: основной долг и проценты (млн сум)',
                'Principal vs Interest Payment Breakdown (M UZS)',
                lang
              )}
            </div>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={creditResults.scheduleChart}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="period" stroke={axisColor} fontSize={11} />
                  <YAxis stroke={axisColor} fontSize={11} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar
                    dataKey="principalPart"
                    stackId="a"
                    name={tr('Asosiy qarz', 'Основной долг', 'Principal', lang)}
                    fill="#4f46e5"
                  />
                  <Bar
                    dataKey="interestPart"
                    stackId="a"
                    name={tr('Foiz to‘lovi', 'Проценты', 'Interest', lang)}
                    fill="#f59e0b"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
              creditResults.dscr < 1.25
                ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
            }`}
          >
            {creditResults.dscr < 1.25 ? (
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <span>
              {creditResults.dscr < 1.25
                ? tr(
                    `Diqqat: DSCR = ${formatNumber(creditResults.dscr, 2)}x. Oylik operatsion pul oqimingiz kredit yuki uchun xavfli darajada tor (banklar odatda DSCR ≥ 1.3x talab qiladi). Muddatni uzaytiring yoki kredit summasini kamaytiring.`,
                    `Риск ликвидности: DSCR = ${formatNumber(creditResults.dscr, 2)}x (банки требуют минимум 1.3x). Снизьте сумму кредита или увеличьте срок.`,
                    `Debt-service warning: DSCR = ${formatNumber(creditResults.dscr, 2)}x is below the safe 1.3x commercial lending threshold.`,
                    lang
                  )
                : tr(
                    `DSCR = ${formatNumber(creditResults.dscr, 2)}x — qarzga xizmat ko‘rsatish koeffitsiyenti sog‘lom darajada. Jami qaytariladigan summa: ${formatCompactUZS(creditResults.totalPaid, lang)}.`,
                    `DSCR = ${formatNumber(creditResults.dscr, 2)}x — комфортный запас покрытия кредита. Полная сумма выплат: ${formatCompactUZS(creditResults.totalPaid, lang)}.`,
                    `Healthy DSCR (${formatNumber(creditResults.dscr, 2)}x). Total cumulative repayment: ${formatCompactUZS(creditResults.totalPaid, lang)}.`,
                    lang
                  )}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'tamsamsom') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
            {tr('Bozor sig‘imi parametrlari', 'Параметры оценки рынка', 'Market Sizing Inputs', lang)}
          </h4>
          <LabeledSliderInput
            label={tr('Mamlakatdagi jami potensial mijozlar (ming)', 'Всего потенциальных клиентов в стране (тыс.)', 'Total Potential Buyers Nationwide (k)', lang)}
            value={totalCustomersThs}
            min={10}
            max={8000}
            step={10}
            unit={tr('ming', 'тыс.', 'k', lang)}
            onChange={setTotalCustomersThs}
          />
          <LabeledSliderInput
            label={tr('1 mijozning yillik o‘rtacha xarajati (ming so‘m)', 'Средний годовой чек на 1 клиента (тыс. сум)', 'Average Annual Spend per Buyer (k UZS)', lang)}
            value={annualSpendThs}
            min={50}
            max={10000}
            step={50}
            unit={tr("ming so'm", 'тыс. сум', 'k UZS', lang)}
            onChange={setAnnualSpendThs}
          />
          <LabeledSliderInput
            label={tr('SAM ulushi (geografiya va formatga mos %)', 'Доля доступного сегмента SAM (%)', 'Reachable SAM Segment Share (%)', lang)}
            value={samSharePct}
            min={2}
            max={70}
            step={1}
            unit="%"
            onChange={setSamSharePct}
          />
          <LabeledSliderInput
            label={tr('Maqsadli SOM ulushi (SAM dan %)', 'Целевая доля SOM от SAM (%)', 'Target SOM Share of SAM (%)', lang)}
            value={somSharePct}
            min={0.5}
            max={25}
            step={0.5}
            unit="%"
            onChange={setSomSharePct}
          />
          <LabeledSliderInput
            label={tr('Kompaniyangiz oylik real xizmat quvvati (mijoz/oy)', 'Реальная мощность обслуживания (клиентов/мес)', 'Monthly Operational Capacity (clients/mo)', lang)}
            value={monthlyCapacityClients}
            min={20}
            max={5000}
            step={20}
            unit={tr('mijoz', 'кл.', 'clients', lang)}
            onChange={setMonthlyCapacityClients}
          />
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">TAM ({tr('Yillik', 'Годовой', 'Annual', lang)})</div>
              <div className="text-lg font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                {formatCompactUZS(marketResults.tam, lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">SAM ({samSharePct}%)</div>
              <div className="text-lg font-bold font-mono tabular-nums text-sky-600 dark:text-sky-400">
                {formatCompactUZS(marketResults.sam, lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">SOM ({tr('Real reja', 'План продаж', 'Obtainable', lang)})</div>
              <div className="text-lg font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
                {formatCompactUZS(Math.min(marketResults.somTopDown, marketResults.somBottomUp), lang)}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketResults.chartData} layout="vertical" margin={{ left: 24 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis type="number" stroke={axisColor} fontSize={11} />
                  <YAxis type="category" dataKey="name" stroke={axisColor} fontSize={11} width={100} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar
                    dataKey="mlrd"
                    name={tr('Hajm (mlrd so‘m)', 'Объем (млрд сум)', 'Volume (B UZS)', lang)}
                    fill="#4f46e5"
                    radius={[0, 6, 6, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            {marketResults.somTopDown > marketResults.somBottomUp ? (
              <span>
                {tr(
                  `Pastdan-yuqoriga (Bottom-Up) tekshiruvi: Yuqoridan hisoblangan SOM (${formatCompactUZS(marketResults.somTopDown, lang)}) joriy operatsion quvvatingizdan (${formatCompactUZS(marketResults.somBottomUp, lang)}) katta. Haqiqiy sotuv rejasini quvvatingizga mos ravishda belgilang yoki jamoani kengaytiring.`,
                  `Проверка Bottom-Up: Теоретический SOM сверху вниз (${formatCompactUZS(marketResults.somTopDown, lang)}) превышает вашу операционную мощность (${formatCompactUZS(marketResults.somBottomUp, lang)}). Ориентируйтесь на реальную пропускную способность.`,
                  `Bottom-Up Reality Check: Top-down SOM (${formatCompactUZS(marketResults.somTopDown, lang)}) exceeds your operational capacity (${formatCompactUZS(marketResults.somBottomUp, lang)}). Anchor your forecast on capacity or expand headcount.`,
                  lang
                )}
              </span>
            ) : (
              <span>
                {tr(
                  `Mutanosib reja: Operatsion quvvatingiz (${formatCompactUZS(marketResults.somBottomUp, lang)}/yil) maqsadli SOM ulushingizni (${formatCompactUZS(marketResults.somTopDown, lang)}) to‘liq bajarishga yetarli.`,
                  `Отличный баланс: Ваша операционная мощность полностью покрывает целевой объем продаж SOM (${formatCompactUZS(marketResults.somTopDown, lang)}).`,
                  `Balanced forecast: Your operational capacity comfortably supports your target SOM revenue (${formatCompactUZS(marketResults.somTopDown, lang)}).`,
                  lang
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'funnel') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
            {tr('Voronka va Yunit-iqtisodiyot', 'Воронка и Юнит-экономика', 'Funnel & Unit Economics', lang)}
          </h4>
          <LabeledSliderInput
            label={tr('Oylik reklama byudjeti', 'Рекламный бюджет в месяц', 'Monthly Ad Spend', lang)}
            value={adBudgetMln}
            min={1}
            max={150}
            step={1}
            unit={tr("mln so'm", 'млн сум', 'M UZS', lang)}
            onChange={setAdBudgetMln}
          />
          <LabeledSliderInput
            label={tr('Reklamadan o‘tishlar (Kliklar)', 'Переходы / Клики по рекламе', 'Ad Clicks / Visitors', lang)}
            value={trafficClicks}
            min={500}
            max={50000}
            step={500}
            unit={tr('klik', 'кликов', 'clicks', lang)}
            onChange={setTrafficClicks}
          />
          <LabeledSliderInput
            label={tr('Klikdan Lidga konversiya (CR1)', 'Конверсия в заявку (CR1)', 'Visitor-to-Lead CR1 (%)', lang)}
            value={clickToLeadPct}
            min={1}
            max={30}
            step={0.5}
            unit="%"
            onChange={setClickToLeadPct}
          />
          <LabeledSliderInput
            label={tr('Liddan Sotuvga konversiya (CR2)', 'Конверсия отдела продаж (CR2)', 'Lead-to-Sale CR2 (%)', lang)}
            value={leadToSalePct}
            min={2}
            max={60}
            step={1}
            unit="%"
            onChange={setLeadToSalePct}
          />
          <LabeledSliderInput
            label={tr('O‘rtacha xarid cheki (AOV)', 'Средний чек (AOV)', 'Average Order Value (AOV)', lang)}
            value={avgCheckThs}
            min={30}
            max={5000}
            step={10}
            unit={tr("ming so'm", 'тыс. сум', 'k UZS', lang)}
            onChange={setAvgCheckThs}
          />
          <LabeledSliderInput
            label={tr('Mijoz o‘rtacha xaridlar soni (Umr davomida)', 'Среднее число покупок клиента', 'Repeat Purchases per Customer', lang)}
            value={repeatPurchases}
            min={1}
            max={12}
            step={0.2}
            unit="x"
            onChange={setRepeatPurchases}
          />
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('Lidlar / Xaridorlar', 'Лиды / Покупки', 'Leads / Buyers', lang)}
              </div>
              <div className="text-base font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                {formatNumber(funnelResults.leads)} / {formatNumber(funnelResults.buyers)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">CAC ({tr('1 mijoz narxi', 'Стоимость клиента', 'Acquisition Cost', lang)})</div>
              <div className="text-base font-bold font-mono tabular-nums text-amber-600 dark:text-amber-400">
                {formatUZS(funnelResults.cac, lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">LTV ({tr('Yalpi marjada', 'Валовый LTV', 'Gross Profit LTV', lang)})</div>
              <div className="text-base font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
                {formatUZS(funnelResults.ltv, lang)}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">LTV / CAC ({tr('Me’yor ≥ 3x', 'Норма ≥ 3x', 'Target ≥ 3x', lang)})</div>
              <div
                className={`text-lg font-bold font-mono tabular-nums ${
                  funnelResults.ltvCacRatio >= 3
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {formatNumber(funnelResults.ltvCacRatio, 1)}x
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnelResults.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="stage" stroke={axisColor} fontSize={12} />
                  <YAxis stroke={axisColor} fontSize={11} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar
                    dataKey="count"
                    name={tr('Soni', 'Количество', 'Count', lang)}
                    fill="#4f46e5"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
              funnelResults.ltvCacRatio >= 3
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
            }`}
          >
            {funnelResults.ltvCacRatio >= 3 ? (
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <span>
              {funnelResults.ltvCacRatio >= 3
                ? tr(
                    `Yunit-iqtisodiyot sog‘lom (LTV/CAC = ${formatNumber(funnelResults.ltvCacRatio, 1)}x ≥ 3x, ROMI = +${formatNumber(funnelResults.romi, 0)}%). Reklama byudjetini qo‘rqmasdan masshtablash mumkin!`,
                    `Юнит-экономика сходится (LTV/CAC = ${formatNumber(funnelResults.ltvCacRatio, 1)}x ≥ 3x, ROMI = +${formatNumber(funnelResults.romi, 0)}%). Канал готов к масштабированию!`,
                    `Healthy unit economics (LTV/CAC = ${formatNumber(funnelResults.ltvCacRatio, 1)}x ≥ 3x, ROMI = +${formatNumber(funnelResults.romi, 0)}%). Ready to scale acquisition.`,
                    lang
                  )
                : tr(
                    `LTV/CAC = ${formatNumber(funnelResults.ltvCacRatio, 1)}x (me’yor ≥ 3.0x). Mijoz jalb qilish qimmatga tushmoqda: CRM skriptlari orqali CR2 konversiyani yoki qayta xaridlar (Retention) sonini oshiring.`,
                    `LTV/CAC = ${formatNumber(funnelResults.ltvCacRatio, 1)}x (норма ≥ 3.0x). Повысьте конверсию отдела продаж (CR2), средний чек или повторные продажи.`,
                    `LTV/CAC is ${formatNumber(funnelResults.ltvCacRatio, 1)}x (below the 3.0x benchmark). Improve sales conversion CR2, average order value, or repeat retention.`,
                    lang
                  )}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'cashflow') {
    const mlnCur = tr("mln so'm", 'млн сум', 'M UZS', lang);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {tr('6 oylik Pul oqimi rejasi', 'План ДДС на 6 месяцев', '6-Month Cash Flow Plan', lang)}
            </h4>
            <button
              type="button"
              onClick={() => {
                setOpeningCashMln(40);
                setMInflows([45, 55, 70, 85, 110, 125]);
                setMOutflows([65, 65, 68, 72, 82, 88]);
              }}
              className="text-xs text-slate-500 hover:text-indigo-600 inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{tr('Tiklash', 'Сброс', 'Reset', lang)}</span>
            </button>
          </div>

          <LabeledSliderInput
            label={tr('1-oy boshidagi pul qoldig‘i', 'Начальный остаток на счете', 'Opening Cash Balance', lang)}
            value={openingCashMln}
            min={0}
            max={250}
            step={5}
            unit={mlnCur}
            onChange={setOpeningCashMln}
          />

          <div className="space-y-2 pt-1">
            <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>{tr('Oy', 'Месяц', 'Month', lang)}</span>
              <span>{tr('Kirim (mln)', 'Приток (млн)', 'Inflow (M)', lang)}</span>
              <span>{tr('Chiqim (mln)', 'Отток (млн)', 'Outflow (M)', lang)}</span>
            </div>
            {mInflows.map((inf, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-2 items-center">
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
                  {idx + 1}-{tr('oy', 'мес', 'mo', lang)}
                </span>
                <input
                  type="number"
                  min={0}
                  value={inf}
                  onChange={(e) => {
                    const next = [...mInflows];
                    next[idx] = Math.max(0, Number(e.target.value) || 0);
                    setMInflows(next);
                  }}
                  aria-label={`Month ${idx + 1} inflow`}
                  className="px-2.5 py-1.5 text-xs font-mono tabular-nums rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-700 dark:text-emerald-400"
                />
                <input
                  type="number"
                  min={0}
                  value={mOutflows[idx]}
                  onChange={(e) => {
                    const next = [...mOutflows];
                    next[idx] = Math.max(0, Number(e.target.value) || 0);
                    setMOutflows(next);
                  }}
                  aria-label={`Month ${idx + 1} outflow`}
                  className="px-2.5 py-1.5 text-xs font-mono tabular-nums rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-rose-700 dark:text-rose-400"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('6-oy yakuniy qoldiq', 'Остаток на конец 6 мес.', 'Month 6 Closing Cash', lang)}
              </div>
              <div className="text-lg font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                {formatNumber(cashflowResults.endingBalance, 1)} {mlnCur}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('Eng past nuqta (Min balans)', 'Минимальный баланс', 'Lowest Cash Trough', lang)}
              </div>
              <div
                className={`text-lg font-bold font-mono tabular-nums ${
                  cashflowResults.minBalance < 0
                    ? 'text-rose-600 dark:text-rose-400'
                    : 'text-emerald-600 dark:text-emerald-400'
                }`}
              >
                {formatNumber(cashflowResults.minBalance, 1)} {mlnCur}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {tr('Kassa uzilishi oylari', 'Месяцев с кассовым разрывом', 'Cash Gap Months', lang)}
              </div>
              <div
                className={`text-lg font-bold font-mono tabular-nums ${
                  cashflowResults.deficitMonths > 0
                    ? 'text-rose-600 dark:text-rose-400'
                    : 'text-emerald-600 dark:text-emerald-400'
                }`}
              >
                {cashflowResults.deficitMonths} / 6
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cashflowResults.rows}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="month" stroke={axisColor} fontSize={11} />
                  <YAxis stroke={axisColor} fontSize={11} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <ReferenceLine y={0} stroke="#ef4444" strokeDasharray="4 4" />
                  <Line
                    type="monotone"
                    dataKey="closing"
                    name={tr('Hisobraqam qoldig‘i (mln)', 'Остаток денег (млн)', 'Closing Cash (M UZS)', lang)}
                    stroke="#4f46e5"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="net"
                    name={tr('Oylik sof oqim', 'Чистый поток месяца', 'Monthly Net CF', lang)}
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
              cashflowResults.deficitMonths > 0
                ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
            }`}
          >
            {cashflowResults.deficitMonths > 0 ? (
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <span>
              {cashflowResults.deficitMonths > 0
                ? tr(
                    `Kassa uzilishi aniqlandi! Hisobraqam kamida ${formatNumber(Math.abs(cashflowResults.minBalance), 1)} mln so‘mga minusga tushmoqda. Oldindan aylanma zaxirani oshiring, mijozlardan avans so‘rang yoki faktoring / overdraft liniyasi oching.`,
                    `Обнаружен кассовый разрыв на ${formatNumber(Math.abs(cashflowResults.minBalance), 1)} млн сум! Пополните стартовый резерв, ускорьте возврат дебиторки или согласуйте отсрочку поставщиков.`,
                    `Cash Gap Alert! Balance dips to ${formatNumber(cashflowResults.minBalance, 1)}M UZS. Increase opening reserve, collect customer advances, or arrange working-capital financing.`,
                    lang
                  )
                : tr(
                    'Barcha 6 oyda kassa qoldig‘i musbat saqlanmoqda — to‘lov qobiliyati barqaror.',
                    'На протяжении всех 6 месяцев остаток денежных средств положителен — кассовых разрывов нет.',
                    'Closing cash remains positive across all 6 months — zero liquidity gaps detected.',
                    lang
                  )}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default: 'pnl' / 'roi'
  const mlnCur = tr("mln so'm", 'млн сум', 'M UZS', lang);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-5 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
            {tr('Oylik P&L va Investitsiya', 'Месячный P&L и Инвестиции', 'Monthly P&L & Capital', lang)}
          </h4>
          <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
            <button
              type="button"
              onClick={() => setTaxMode('cit15')}
              className={`px-2 py-1 text-xs font-medium rounded-md cursor-pointer ${
                taxMode === 'cit15'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {tr('Foyda 15%', 'Прибыль 15%', 'CIT 15%', lang)}
            </button>
            <button
              type="button"
              onClick={() => setTaxMode('turnover4')}
              className={`px-2 py-1 text-xs font-medium rounded-md cursor-pointer ${
                taxMode === 'turnover4'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {tr('Aylanma 4%', 'Оборот 4%', 'Turn. 4%', lang)}
            </button>
          </div>
        </div>

        <LabeledSliderInput
          label={tr('Oylik sof tushum (QQSsiz)', 'Чистая выручка в месяц', 'Monthly Net Revenue', lang)}
          value={pnlRevenueMln}
          min={20}
          max={1000}
          step={10}
          unit={mlnCur}
          onChange={setPnlRevenueMln}
        />
        <LabeledSliderInput
          label={tr('Tovar tannarxi ulushi (COGS %)', 'Доля прямой себестоимости (COGS %)', 'COGS Share of Revenue (%)', lang)}
          value={pnlCogsPct}
          min={10}
          max={85}
          step={1}
          unit="%"
          onChange={setPnlCogsPct}
        />
        <LabeledSliderInput
          label={tr('Operatsion xarajatlar (OPEX)', 'Операционные расходы (OPEX)', 'Operating Expenses (OPEX)', lang)}
          value={pnlOpexMln}
          min={5}
          max={400}
          step={2}
          unit={mlnCur}
          onChange={setPnlOpexMln}
        />
        <LabeledSliderInput
          label={tr('Amortizatsiya + Kredit foizi', 'Амортизация + Проценты', 'Depreciation + Interest', lang)}
          value={pnlDeprMln + pnlInterestMln}
          min={0}
          max={100}
          step={1}
          unit={mlnCur}
          onChange={(val) => {
            setPnlDeprMln(Math.round(val / 2));
            setPnlInterestMln(val - Math.round(val / 2));
          }}
        />
        <LabeledSliderInput
          label={tr('Jami kiritilgan sarmoya (ROI uchun)', 'Вложенный капитал (для ROI)', 'Total Invested Capital (for ROI)', lang)}
          value={investedCapitalMln}
          min={50}
          max={5000}
          step={50}
          unit={mlnCur}
          onChange={setInvestedCapitalMln}
        />
      </div>

      <div className="lg:col-span-7 space-y-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">EBITDA</div>
            <div className="text-base font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
              {formatNumber(pnlResults.ebitda, 1)} {mlnCur}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
              {tr('Oylik Sof Foyda', 'Чистая прибыль/мес', 'Monthly Net Profit', lang)}
            </div>
            <div
              className={`text-base font-bold font-mono tabular-nums ${
                pnlResults.netProfit >= 0
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-rose-600 dark:text-rose-400'
              }`}
            >
              {formatNumber(pnlResults.netProfit, 1)} {mlnCur}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">ROS ({tr('Sof marja', 'Рентаб. продаж', 'Net Margin', lang)})</div>
            <div className="text-base font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
              {formatNumber(pnlResults.rosPct, 1)}%
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
              {tr('Yillik ROI / Qoplash', 'Годовой ROI / Окуп.', 'Annual ROI / Payback', lang)}
            </div>
            <div className="text-base font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
              {formatNumber(pnlResults.annualRoiPct, 1)}% ·{' '}
              {Number.isFinite(pnlResults.paybackYears)
                ? `${formatNumber(pnlResults.paybackYears, 1)}${tr('y', 'г', 'y', lang)}`
                : '—'}
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pnlResults.waterfall}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="step" stroke={axisColor} fontSize={11} />
                <YAxis stroke={axisColor} fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <ReferenceLine y={0} stroke="#ef4444" />
                <Bar
                  dataKey="val"
                  name={mlnCur}
                  fill="#4f46e5"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
            pnlResults.annualRoiPct >= 22
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
              : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
          }`}
        >
          {pnlResults.annualRoiPct >= 22 ? (
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
          )}
          <span>
            {pnlResults.annualRoiPct >= 22
              ? tr(
                  `Yillik ROI (${formatNumber(pnlResults.annualRoiPct, 1)}%) O‘zbekistondagi so‘m bank depozitlari stavkasidan (~20%) yuqori — loyiha tadbirkorlik riskini oqlaydi!`,
                  `Годовой ROI (${formatNumber(pnlResults.annualRoiPct, 1)}%) превышает ставку безрискового банковского депозита в сумах (~20%) — проект экономически привлекателен!`,
                  `Annual ROI (${formatNumber(pnlResults.annualRoiPct, 1)}%) beats passive UZS deposit yields (~20%), justifying entrepreneurial risk.`,
                  lang
                )
              : tr(
                  `Muqobil xarajat tahlili: Yillik ROI (${formatNumber(pnlResults.annualRoiPct, 1)}%) xavfsiz bank omonati stavkasidan (~20%) past. Tannarxni kamaytirish yoki aylanuvchanlikni oshirish ustida ishlang.`,
                  `Альтернативная оценка: Годовой ROI (${formatNumber(pnlResults.annualRoiPct, 1)}%) ниже доходности сумового депозита (~20%). Оптимизируйте COGS или OPEX.`,
                  `Opportunity Cost Alert: Projected ROI (${formatNumber(pnlResults.annualRoiPct, 1)}%) trails passive UZS bank deposit rates (~20%). Optimize COGS or OPEX.`,
                  lang
                )}
          </span>
        </div>
      </div>
    </div>
  );
};

interface CalculatorsHubViewProps {
  lang: Language;
  isDark: boolean;
  onOpenTopic: (topicId: string) => void;
}

export const CalculatorsHubView: React.FC<CalculatorsHubViewProps> = ({
  lang,
  isDark,
  onOpenTopic,
}) => {
  const [selectedCalc, setSelectedCalc] = useState<CalculatorId>('breakeven');

  const tabs: { id: CalculatorId; topicId: string; label: string }[] = [
    {
      id: 'breakeven',
      topicId: 'm10',
      label: tr('BEP va Narxlash (M10)', 'BEP и Цена (M10)', 'Break-Even & Pricing (M10)', lang),
    },
    {
      id: 'credit',
      topicId: 'm3',
      label: tr('Bank krediti va DSCR (M3)', 'Банковский кредит (M3)', 'Business Loan & DSCR (M3)', lang),
    },
    {
      id: 'tamsamsom',
      topicId: 'm7',
      label: tr('Bozor hajmi TAM/SAM/SOM (M7)', 'Рынок TAM/SAM/SOM (M7)', 'TAM/SAM/SOM Sizing (M7)', lang),
    },
    {
      id: 'funnel',
      topicId: 'm9',
      label: tr('Savdo voronkasi va LTV/CAC (M9)', 'Воронка и LTV/CAC (M9)', 'Sales Funnel & LTV/CAC (M9)', lang),
    },
    {
      id: 'cashflow',
      topicId: 'm11',
      label: tr('Pul oqimi va Kassa uzilishi (M11)', 'Денежный поток ДДС (M11)', '6-Month Cash Flow (M11)', lang),
    },
    {
      id: 'pnl',
      topicId: 'm12',
      label: tr('P&L va ROI rentabellik (M12)', 'Отчет P&L и ROI (M12)', 'P&L Waterfall & ROI (M12)', lang),
    },
  ];

  const activeMeta = tabs.find((t) => t.id === selectedCalc) || tabs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-2">
            {tr(
              'AMALIY MOLIYA LABORATORIYASI · 6 TA INTERAKTIV MODEL',
              'ФИНАНСОВАЯ ЛАБОРАТОРИЯ · 6 ИНТЕРАКТИВНЫХ МОДЕЛЕЙ',
              'PRACTICAL FINANCIAL SANDBOX · 6 LIVE SIMULATORS',
              lang
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
            {tText(UI_TEXT.calculatorsHubTitle, lang)}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {tText(UI_TEXT.calculatorsHubSubtitle, lang)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenTopic(activeMeta.topicId)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
        >
          <Calculator className="w-4 h-4" />
          <span>
            {tr(
              `Nazariy mavzuga o‘tish (${activeMeta.topicId.toUpperCase()})`,
              `Перейти к теме (${activeMeta.topicId.toUpperCase()})`,
              `Open Linked Module (${activeMeta.topicId.toUpperCase()})`,
              lang
            )}
          </span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Segmented Calculator Selector */}
      <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        {tabs.map((tab) => {
          const active = tab.id === selectedCalc;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCalc(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                active
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <SingleCalculatorWidget
        calculatorId={selectedCalc}
        lang={lang}
        isDark={isDark}
        onOpenTopic={onOpenTopic}
      />
    </div>
  );
};
