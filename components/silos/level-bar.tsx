import { cn } from '@/lib/utils'

export function LevelBar({
  current,
  capacity,
  alert,
  className,
}: {
  current: number
  capacity: number
  alert?: boolean
  className?: string
}) {
  const percent = Math.round((current / capacity) * 100)
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-muted"
        role="meter"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label="Nivel de llenado"
      >
        <div
          className={cn('h-full rounded-full', alert ? 'bg-warning' : 'bg-accent')}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="w-9 text-right font-mono text-xs text-muted-foreground tabular-nums">{percent}%</span>
    </div>
  )
}
