import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { ExternalLink } from 'lucide-react';
import { Language, TopicChart } from '../types';
import { tText, UI_TEXT } from '../data/i18n';
import { formatNumber } from '../utils/formatters';

interface TopicChartsProps {
  charts: TopicChart[];
  lang: Language;
  isDark: boolean;
}

const PIE_COLORS = ['#4f46e5', '#10b981', '#0284c7', '#f59e0b', '#ec4899', '#8b5cf6'];

export const TopicCharts: React.FC<TopicChartsProps> = ({ charts, lang, isDark }) => {
  const axisColor = isDark ? '#94a3b8' : '#64748b';
  const gridColor = isDark ? '#1e293b' : '#e2e8f0';
  const tooltipBg = isDark ? '#0f172a' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#cbd5e1';
  const tooltipText = isDark ? '#f8fafc' : '#0f172a';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {charts.map((chart) => {
        const unitStr = tText(chart.unit, lang);
        const primaryLabel = tText(chart.seriesLabel, lang);
        const secondaryLabel = chart.secondarySeriesLabel
          ? tText(chart.secondarySeriesLabel, lang)
          : undefined;

        const mappedData = chart.data.map((d) => ({
          name: tText(d.name, lang),
          value: d.value,
          secondaryValue: d.secondaryValue,
        }));

        const hasSecondary = mappedData.some((d) => typeof d.secondaryValue === 'number');

        return (
          <div
            key={chart.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between print-card"
          >
            <div className="mb-4">
              <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-1">
                {tText(chart.title, lang)}
              </h4>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span>{unitStr}</span>
                <span aria-hidden="true">·</span>
                <span>
                  {tText(UI_TEXT.yearLabel, lang)}: {chart.year}
                </span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                {chart.type === 'pie' ? (
                  <PieChart>
                    <Pie
                      data={mappedData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={52}
                      outerRadius={82}
                      paddingAngle={3}
                      isAnimationActive={true}
                    >
                      {mappedData.map((entry, idx) => (
                        <Cell key={entry.name} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: tooltipBg,
                        borderColor: tooltipBorder,
                        color: tooltipText,
                        borderRadius: '0.75rem',
                        fontSize: '12px',
                      }}
                      formatter={(val: unknown) => [`${formatNumber(Number(val), 1)} ${unitStr}`, primaryLabel]}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                  </PieChart>
                ) : chart.type === 'line' ? (
                  <LineChart data={mappedData} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="name" stroke={axisColor} fontSize={11} tickLine={false} />
                    <YAxis stroke={axisColor} fontSize={11} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: tooltipBg,
                        borderColor: tooltipBorder,
                        color: tooltipText,
                        borderRadius: '0.75rem',
                        fontSize: '12px',
                      }}
                      formatter={(val: unknown, name: unknown) => [
                        `${formatNumber(Number(val), 1)} ${unitStr}`,
                        String(name),
                      ]}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      name={primaryLabel}
                      stroke="#4f46e5"
                      strokeWidth={2.5}
                      dot={{ r: 4, fill: '#4f46e5' }}
                      activeDot={{ r: 6 }}
                    />
                    {hasSecondary && (
                      <Line
                        type="monotone"
                        dataKey="secondaryValue"
                        name={secondaryLabel || '2'}
                        stroke="#10b981"
                        strokeWidth={2.5}
                        dot={{ r: 4, fill: '#10b981' }}
                      />
                    )}
                  </LineChart>
                ) : chart.type === 'area' ? (
                  <AreaChart data={mappedData} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
                    <defs>
                      <linearGradient id={`grad-${chart.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="name" stroke={axisColor} fontSize={11} tickLine={false} />
                    <YAxis stroke={axisColor} fontSize={11} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: tooltipBg,
                        borderColor: tooltipBorder,
                        color: tooltipText,
                        borderRadius: '0.75rem',
                        fontSize: '12px',
                      }}
                      formatter={(val: unknown, name: unknown) => [
                        `${formatNumber(Number(val), 1)} ${unitStr}`,
                        String(name),
                      ]}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      name={primaryLabel}
                      stroke="#4f46e5"
                      strokeWidth={2.5}
                      fill={`url(#grad-${chart.id})`}
                    />
                    {hasSecondary && (
                      <Area
                        type="monotone"
                        dataKey="secondaryValue"
                        name={secondaryLabel || '2'}
                        stroke="#10b981"
                        strokeWidth={2}
                        fillOpacity={0.12}
                        fill="#10b981"
                      />
                    )}
                  </AreaChart>
                ) : (
                  <BarChart data={mappedData} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="name" stroke={axisColor} fontSize={11} tickLine={false} />
                    <YAxis stroke={axisColor} fontSize={11} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: tooltipBg,
                        borderColor: tooltipBorder,
                        color: tooltipText,
                        borderRadius: '0.75rem',
                        fontSize: '12px',
                      }}
                      formatter={(val: unknown, name: unknown) => [
                        `${formatNumber(Number(val), 1)} ${unitStr}`,
                        String(name),
                      ]}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Bar dataKey="value" name={primaryLabel} fill="#4f46e5" radius={[6, 6, 0, 0]} />
                    {hasSecondary && (
                      <Bar
                        dataKey="secondaryValue"
                        name={secondaryLabel || '2'}
                        fill="#10b981"
                        radius={[6, 6, 0, 0]}
                      />
                    )}
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="truncate">
                {tText(UI_TEXT.sourceLabel, lang)}: {tText(chart.sourceName, lang)}
              </span>
              <a
                href={chart.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline shrink-0 font-medium"
              >
                <span>{new URL(chart.sourceUrl).hostname.replace('www.', '')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
