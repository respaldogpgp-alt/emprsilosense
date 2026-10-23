import { LevelBar } from '@/components/silos/level-bar'
import { DiffValue, StatusBadge } from '@/components/silos/status-badge'
import { difference, formatKg, type Silo } from '@/lib/silos'
import { cn } from '@/lib/utils'

export function MetricsGrid({ silo }: { silo: Silo }) {
  const isAlert = silo.status === 'Alerta'
  const diff = difference(silo)
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <Metric label="Capacidad">
        <span className="font-mono tabular-nums">{formatKg(silo.capacity)}</span>
      </Metric>
      <Metric label="Actual">
        <span className="font-mono tabular-nums">{formatKg(silo.current)}</span>
        <LevelBar current={silo.current} capacity={silo.capacity} alert={isAlert} className="mt-3" />
      </Metric>
      <Metric label="Esperado">
        <span className="font-mono tabular-nums">{formatKg(silo.expected)}</span>
      </Metric>
      <Metric label="Diferencia" highlight={diff <= -100}>
        <DiffValue value={diff} />
      </Metric>
      <Metric label="Estado" highlight={isAlert}>
        <StatusBadge status={silo.status} className="text-sm" />
      </Metric>
    </dl>
  )
}

function Metric({ label, highlight, children }: { label: string; highlight?: boolean; children: React.ReactNode }) {
  return (
    <div className={cn('rounded-xl border bg-card p-5', highlight && 'border-warning/40 bg-warning/5')}>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-2xl font-semibold tracking-tight text-primary">{children}</dd>
    </div>
  )
}
