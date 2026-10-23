import type { Silo } from '@/lib/silos'

const WIDTH = 640
const HEIGHT = 260
const PAD = { top: 16, right: 16, bottom: 32, left: 56 }

export function TrendChart({ trend }: { trend: Silo['trend'] }) {
  const values = trend.flatMap((point) => [point.actual, point.expected])
  const rawMax = Math.max(...values)
  const rawMin = Math.min(...values)
  const step = 500
  const max = Math.ceil(rawMax / step) * step
  const min = Math.max(0, Math.floor(rawMin / step) * step - step)
  const ticks = Array.from({ length: (max - min) / step + 1 }, (_, i) => min + i * step)
  const visibleTicks = ticks.length > 6 ? ticks.filter((_, i) => i % 2 === 0) : ticks

  const innerW = WIDTH - PAD.left - PAD.right
  const innerH = HEIGHT - PAD.top - PAD.bottom
  const x = (i: number) => PAD.left + (i / (trend.length - 1)) * innerW
  const y = (v: number) => PAD.top + innerH - ((v - min) / (max - min)) * innerH

  const line = (key: 'actual' | 'expected') =>
    trend.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(p[key]).toFixed(1)}`).join(' ')
  const area = `${line('actual')} L${x(trend.length - 1)},${PAD.top + innerH} L${x(0)},${PAD.top + innerH} Z`

  const summary = trend.map((p) => `${p.day}: actual ${p.actual} kg, esperado ${p.expected} kg`).join('; ')

  return (
    <figure className="flex flex-col gap-3">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-auto w-full" role="img" aria-label={`Tendencia de 7 días. ${summary}`}>
        {visibleTicks.map((tick) => (
          <g key={tick}>
            <line x1={PAD.left} x2={WIDTH - PAD.right} y1={y(tick)} y2={y(tick)} stroke="var(--border)" />
            <text x={PAD.left - 8} y={y(tick)} textAnchor="end" dominantBaseline="middle" fontSize="11" fill="var(--muted-foreground)">
              {tick.toLocaleString('es-PE')}
            </text>
          </g>
        ))}
        {trend.map((p, i) => (
          <text key={p.day} x={x(i)} y={HEIGHT - 10} textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">
            {p.day}
          </text>
        ))}
        <path d={area} fill="var(--primary)" opacity="0.06" />
        <path d={line('expected')} fill="none" stroke="var(--muted-foreground)" strokeWidth="2" strokeDasharray="6 5" />
        <path d={line('actual')} fill="none" stroke="var(--primary)" strokeWidth="2.5" />
        {trend.map((p, i) => {
          const gap = p.actual - p.expected
          return (
            <circle
              key={p.day}
              cx={x(i)}
              cy={y(p.actual)}
              r={4}
              fill={gap <= -100 ? 'var(--warning)' : 'var(--primary)'}
              stroke="var(--background)"
              strokeWidth="2"
            />
          )
        })}
      </svg>
      <figcaption className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-5 bg-primary" aria-hidden="true" />
          Alimento actual
        </span>
        <span className="flex items-center gap-2">
          <span className="h-0 w-5 border-t-2 border-dashed border-muted-foreground" aria-hidden="true" />
          Inventario esperado
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-warning" aria-hidden="true" />
          Diferencia mayor a 100 kg
        </span>
      </figcaption>
    </figure>
  )
}
