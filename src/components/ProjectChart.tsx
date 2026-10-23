import React from 'react';
import { ProjectChartData } from '../types';

const COLORS = ['#2563eb', '#a1a1aa', '#10b981', '#f59e0b'];

const W = 420;
const H = 230;
const M = { top: 18, right: 14, bottom: 38, left: 40 };

const niceMax = (v: number) => {
  if (v <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
};

const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

const Legend: React.FC<{ names: string[] }> = ({ names }) => (
  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
    {names.map((n, i) => (
      <div key={n} className="flex items-center gap-1.5 text-[11px] text-zinc-600 dark:text-zinc-300">
        <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
        {n}
      </div>
    ))}
  </div>
);

const Axes: React.FC<{ max: number; unit?: string }> = ({ max, unit }) => {
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  const plotH = H - M.top - M.bottom;
  return (
    <>
      {ticks.map((t) => {
        const y = M.top + plotH - t * plotH;
        return (
          <g key={t}>
            <line x1={M.left} x2={W - M.right} y1={y} y2={y} className="stroke-zinc-200 dark:stroke-zinc-700/70" strokeWidth={1} />
            <text x={M.left - 6} y={y + 3} textAnchor="end" fontSize={10} className="fill-zinc-500 dark:fill-zinc-400">
              {fmt(max * t)}
            </text>
          </g>
        );
      })}
      {unit && (
        <text x={M.left} y={10} fontSize={10} className="fill-zinc-500 dark:fill-zinc-400">
          {unit}
        </text>
      )}
    </>
  );
};

const BarChart: React.FC<{ chart: ProjectChartData }> = ({ chart }) => {
  const all = chart.series.flatMap((s) => s.values);
  const max = niceMax(Math.max(...all));
  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;
  const n = chart.labels.length;
  const groupW = plotW / n;
  const sCount = chart.series.length;
  const barW = Math.min(34, (groupW * 0.7) / sCount);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={chart.title}>
      <Axes max={max} unit={chart.unit} />
      {chart.labels.map((label, i) => {
        const gx = M.left + i * groupW + groupW / 2;
        return (
          <g key={label}>
            {chart.series.map((s, si) => {
              const v = s.values[i];
              const h = (v / max) * plotH;
              const x = gx - (barW * sCount) / 2 + si * barW;
              return (
                <g key={s.name}>
                  <rect x={x + 1} y={M.top + plotH - h} width={barW - 2} height={h} rx={3} fill={COLORS[si % COLORS.length]} />
                  {sCount === 1 && (
                    <text x={x + barW / 2} y={M.top + plotH - h - 4} textAnchor="middle" fontSize={10} className="fill-zinc-700 dark:fill-zinc-200">
                      {fmt(v)}
                    </text>
                  )}
                </g>
              );
            })}
            <text x={gx} y={H - 18} textAnchor="middle" fontSize={10} className="fill-zinc-500 dark:fill-zinc-400">
              {label.length > 14 ? label.slice(0, 13) + '…' : label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const LineChart: React.FC<{ chart: ProjectChartData }> = ({ chart }) => {
  const all = chart.series.flatMap((s) => s.values);
  const max = niceMax(Math.max(...all));
  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;
  const n = chart.labels.length;
  const x = (i: number) => M.left + (n === 1 ? plotW / 2 : (i * plotW) / (n - 1));
  const y = (v: number) => M.top + plotH - (v / max) * plotH;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={chart.title}>
      <Axes max={max} unit={chart.unit} />
      {chart.series.map((s, si) => (
        <g key={s.name}>
          <polyline
            fill="none"
            stroke={COLORS[si % COLORS.length]}
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={si > 0 ? '5 4' : undefined}
            points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(' ')}
          />
          {s.values.map((v, i) => (
            <circle key={i} cx={x(i)} cy={y(v)} r={3} fill={COLORS[si % COLORS.length]} />
          ))}
        </g>
      ))}
      {chart.labels.map((label, i) => (
        <text key={label + i} x={x(i)} y={H - 18} textAnchor="middle" fontSize={10} className="fill-zinc-500 dark:fill-zinc-400">
          {label}
        </text>
      ))}
    </svg>
  );
};

const DonutChart: React.FC<{ chart: ProjectChartData }> = ({ chart }) => {
  const values = chart.series[0].values;
  const total = values.reduce((a, b) => a + b, 0);
  const r = 52;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <svg viewBox="0 0 140 140" className="w-32 h-32 shrink-0" role="img" aria-label={chart.title}>
        <g transform="rotate(-90 70 70)">
          {values.map((v, i) => {
            const len = (v / total) * c;
            const seg = (
              <circle
                key={chart.labels[i]}
                cx={70}
                cy={70}
                r={r}
                fill="none"
                stroke={COLORS[i % COLORS.length]}
                strokeWidth={20}
                strokeDasharray={`${len} ${c - len}`}
                strokeDashoffset={-offset}
              />
            );
            offset += len;
            return seg;
          })}
        </g>
        <text x={70} y={74} textAnchor="middle" fontSize={16} fontWeight={700} className="fill-zinc-900 dark:fill-white">
          {total}
        </text>
      </svg>
      <ul className="space-y-1.5 text-xs">
        {values.map((v, i) => (
          <li key={chart.labels[i]} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
            <span>{chart.labels[i]}</span>
            <span className="font-mono-code font-semibold text-zinc-900 dark:text-white">{Math.round((v / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ProjectChart: React.FC<{ chart: ProjectChartData }> = ({ chart }) => {
  const multi = chart.type !== 'donut' && chart.series.length > 1;
  return (
    <div className="p-4 rounded-2xl bg-zinc-50/70 dark:bg-[#131726]/70 border border-zinc-200/80 dark:border-zinc-700/80">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">{chart.title}</div>
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 px-2 py-0.5 rounded-full">
          {chart.tag ?? 'Illustrative'}
        </span>
      </div>
      {multi && <Legend names={chart.series.map((s) => s.name)} />}
      {chart.type === 'bar' && <BarChart chart={chart} />}
      {chart.type === 'line' && <LineChart chart={chart} />}
      {chart.type === 'donut' && <DonutChart chart={chart} />}
    </div>
  );
};
