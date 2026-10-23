import { ArrowRight, PlayCircle } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'
import { HeroPreview } from './hero-preview'

export function Hero() {
  return (
    <section className="border-b bg-gradient-to-b from-secondary to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            Para granjas avícolas
          </p>
          <h1 className="text-pretty text-4xl font-semibold leading-tight tracking-tight text-primary md:text-5xl">
            Monitorea cada día cuánto alimento queda en tus silos
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            SiloSense ayuda a granjas avícolas a conocer cuánto alimento queda en cada silo y a detectar diferencias
            el mismo día, para evitar pérdidas y mejorar el control.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/solicitar-prueba" size="lg">
              Solicitar prueba piloto
              <ArrowRight aria-hidden="true" />
            </CtaLink>
            <CtaLink href="/demo" variant="outline" size="lg">
              <PlayCircle aria-hidden="true" />
              Ver demo
            </CtaLink>
          </div>
          <dl className="mt-2 grid max-w-md grid-cols-3 gap-4 border-t pt-6">
            <div>
              <dt className="text-xs text-muted-foreground">Lectura</dt>
              <dd className="text-lg font-semibold text-primary">Diaria</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Vista</dt>
              <dd className="text-lg font-semibold text-primary">Por silo</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Alertas</dt>
              <dd className="text-lg font-semibold text-primary">Mismo día</dd>
            </div>
          </dl>
        </div>
        <HeroPreview />
      </div>
    </section>
  )
}
