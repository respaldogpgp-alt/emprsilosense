import Image from 'next/image'
import { Clock, Eye, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: Eye,
    title: 'Control visual o manual',
    text: 'El nivel del silo se estima a simple vista o con revisiones manuales, sin un valor numérico confiable.',
  },
  {
    icon: TrendingDown,
    title: 'Pérdidas que se descubren tarde',
    text: 'Las diferencias se acumulan durante semanas y recién aparecen al cerrar la campaña.',
  },
  {
    icon: Clock,
    title: 'Tiempo y esfuerzo del personal',
    text: 'Subir, revisar y anotar cada silo toma tiempo que podría dedicarse a la producción.',
  },
]

export function Problem() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image
            src="/images/granja-silos.png"
            alt="Silos de alimento junto a galpones de una granja avícola"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">El problema</p>
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-primary">
            Hoy no sabes con exactitud cuánto alimento queda en cada silo
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            En muchas granjas el inventario de alimento todavía se controla de forma visual o manual. Sin un dato diario
            por silo, es difícil saber si el consumo coincide con lo esperado.
          </p>
          <ul className="flex flex-col gap-4">
            {problems.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 rounded-xl bg-background p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
