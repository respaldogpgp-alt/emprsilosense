import { AlertTriangle } from 'lucide-react'
import { difference, type Silo } from '@/lib/silos'

export function Recommendation({ silo }: { silo: Silo }) {
  const gap = Math.abs(difference(silo)).toLocaleString('es-PE')
  return (
    <aside
      role="alert"
      className="flex flex-col gap-4 rounded-xl border border-warning/50 bg-warning/10 p-5 sm:flex-row sm:items-start"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-warning text-warning-foreground">
        <AlertTriangle className="size-5" aria-hidden="true" />
      </span>
      <div>
        <h2 className="font-semibold text-foreground">Recomendación</h2>
        <p className="mt-1 leading-relaxed text-foreground/80">
          Se detectó una diferencia de {gap} kg frente al valor esperado. Se recomienda revisar el silo y contrastar con
          el registro de consumo o despacho.
        </p>
      </div>
    </aside>
  )
}
