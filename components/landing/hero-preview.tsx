import { AlertTriangle } from 'lucide-react'
import { silos } from '@/lib/silos'
import { cn } from '@/lib/utils'

export function HeroPreview() {
  return (
    <div className="relative" aria-label="Vista previa del panel de silos" role="img">
      <div className="rounded-2xl border bg-card p-5 shadow-xl shadow-primary/5">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <p className="text-sm font-semibold text-primary">Resumen de silos</p>
            <p className="text-xs text-muted-foreground">Hoy, 08:30</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-warning/15 px-2.5 py-1 text-xs font-semibold text-[oklch(0.5_0.15_45)]">
            <AlertTriangle className="size-3.5" aria-hidden="true" />2 alertas
          </span>
        </div>
        <div className="grid grid-cols-6 items-end gap-3 pt-6">
          {silos.map((silo) => {
            const percent = (silo.current / silo.capacity) * 100
            const isAlert = silo.status === 'Alerta'
            return (
              <div key={silo.id} className="flex flex-col items-center gap-2">
                <div className="relative flex h-40 w-full flex-col justify-end overflow-hidden rounded-t-full rounded-b-md border-2 border-border bg-muted">
                  <div
                    className={cn('w-full', isAlert ? 'bg-warning/80' : 'bg-accent/80')}
                    style={{ height: `${percent}%` }}
                  />
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">S{silo.id}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="absolute -bottom-6 -left-2 hidden w-64 rounded-xl border border-warning/40 bg-card p-4 shadow-lg sm:block md:-left-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <AlertTriangle className="size-4 text-warning" aria-hidden="true" />
          Silo 1: diferencia detectada
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {'Actual 2 900 kg · Esperado 3 100 kg'}
        </p>
        <p className="mt-2 font-mono text-lg font-semibold text-destructive">{'−200 kg'}</p>
      </div>
    </div>
  )
}
