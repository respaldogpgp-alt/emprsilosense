import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import type { SiloStatus } from '@/lib/silos'
import { cn } from '@/lib/utils'

export function StatusBadge({ status, className }: { status: SiloStatus; className?: string }) {
  const isAlert = status === 'Alerta'
  const Icon = isAlert ? AlertTriangle : CheckCircle2
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold',
        isAlert ? 'bg-warning/15 text-[oklch(0.5_0.15_45)]' : 'bg-success/15 text-[oklch(0.42_0.11_152)]',
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {status}
    </span>
  )
}

export function DiffValue({ value, className }: { value: number; className?: string }) {
  const text = value === 0 ? '0 kg' : `${value > 0 ? '+' : '−'}${Math.abs(value).toLocaleString('es-PE')} kg`
  return (
    <span
      className={cn(
        'font-mono font-semibold tabular-nums',
        value <= -100 ? 'text-destructive' : value === 0 ? 'text-muted-foreground' : 'text-foreground',
        className,
      )}
    >
      {text}
    </span>
  )
}
