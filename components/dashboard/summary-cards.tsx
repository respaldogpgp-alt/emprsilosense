import { AlertTriangle, Clock, Database, Scale } from 'lucide-react'
import { cn } from '@/lib/utils'

const cards = [
  { label: 'Silos monitoreados', value: '6', icon: Database, tone: 'default' },
  { label: 'Alertas activas', value: '2', icon: AlertTriangle, tone: 'warning' },
  { label: 'Diferencia total detectada hoy', value: '260 kg', icon: Scale, tone: 'danger' },
  { label: 'Última actualización', value: 'Hoy, 08:30', icon: Clock, tone: 'default' },
] as const

export function SummaryCards() {
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ label, value, icon: Icon, tone }) => (
        <div
          key={label}
          className={cn(
            'flex flex-col gap-3 rounded-xl border bg-card p-5',
            tone === 'warning' && 'border-warning/40 bg-warning/5',
            tone === 'danger' && 'border-destructive/30 bg-destructive/5',
          )}
        >
          <div className="flex items-center justify-between">
            <dt className="text-sm text-muted-foreground">{label}</dt>
            <Icon
              className={cn(
                'size-4',
                tone === 'warning' ? 'text-warning' : tone === 'danger' ? 'text-destructive' : 'text-primary',
              )}
              aria-hidden="true"
            />
          </div>
          <dd
            className={cn(
              'text-2xl font-semibold tracking-tight text-primary',
              tone === 'danger' && 'text-destructive',
            )}
          >
            {value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
