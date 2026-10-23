import { ChevronRight } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'
import { LevelBar } from '@/components/silos/level-bar'
import { DiffValue, StatusBadge } from '@/components/silos/status-badge'
import { difference, formatKg, silos } from '@/lib/silos'
import { cn } from '@/lib/utils'

export function SiloTable() {
  return (
    <section aria-labelledby="silos-title" className="rounded-xl border bg-card">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <h2 id="silos-title" className="font-semibold text-primary">
          Inventario por silo
        </h2>
        <p className="text-xs text-muted-foreground">Ordenado por número de silo</p>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-sm">
          <thead className="bg-muted/60 text-left text-xs text-muted-foreground">
            <tr>
              <th scope="col" className="px-5 py-3 font-medium">Silo</th>
              <th scope="col" className="px-5 py-3 text-right font-medium">Capacidad</th>
              <th scope="col" className="px-5 py-3 font-medium">Alimento actual</th>
              <th scope="col" className="px-5 py-3 text-right font-medium">Esperado</th>
              <th scope="col" className="px-5 py-3 text-right font-medium">Diferencia</th>
              <th scope="col" className="px-5 py-3 font-medium">Estado</th>
              <th scope="col" className="px-5 py-3">
                <span className="sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {silos.map((silo) => {
              const isAlert = silo.status === 'Alerta'
              return (
                <tr
                  key={silo.id}
                  className={cn('border-t', isAlert && 'bg-warning/5 shadow-[inset_3px_0_0_var(--warning)]')}
                >
                  <th scope="row" className="px-5 py-4 text-left font-semibold text-foreground">
                    {silo.name}
                  </th>
                  <td className="px-5 py-4 text-right font-mono tabular-nums text-muted-foreground">
                    {formatKg(silo.capacity)}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex min-w-48 flex-col gap-1.5">
                      <span className="font-mono font-semibold tabular-nums">{formatKg(silo.current)}</span>
                      <LevelBar current={silo.current} capacity={silo.capacity} alert={isAlert} />
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right font-mono tabular-nums text-muted-foreground">
                    {formatKg(silo.expected)}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <DiffValue value={difference(silo)} />
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={silo.status} />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <CtaLink
                      href={`/demo/silos/${silo.id}`}
                      variant={isAlert ? 'primary' : 'outline'}
                      size="sm"
                      aria-label={`Ver detalle del ${silo.name}`}
                    >
                      Ver detalle
                      <ChevronRight aria-hidden="true" />
                    </CtaLink>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <ul className="flex flex-col divide-y md:hidden">
        {silos.map((silo) => {
          const isAlert = silo.status === 'Alerta'
          return (
            <li key={silo.id} className={cn('flex flex-col gap-4 p-5', isAlert && 'bg-warning/5')}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{silo.name}</h3>
                <StatusBadge status={silo.status} />
              </div>
              <LevelBar current={silo.current} capacity={silo.capacity} alert={isAlert} />
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-xs text-muted-foreground">Capacidad</dt>
                  <dd className="font-mono tabular-nums">{formatKg(silo.capacity)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Actual</dt>
                  <dd className="font-mono font-semibold tabular-nums">{formatKg(silo.current)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Esperado</dt>
                  <dd className="font-mono tabular-nums">{formatKg(silo.expected)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Diferencia</dt>
                  <dd>
                    <DiffValue value={difference(silo)} />
                  </dd>
                </div>
              </dl>
              <CtaLink
                href={`/demo/silos/${silo.id}`}
                variant={isAlert ? 'primary' : 'outline'}
                className="w-full"
                aria-label={`Ver detalle del ${silo.name}`}
              >
                Ver detalle
                <ChevronRight aria-hidden="true" />
              </CtaLink>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
