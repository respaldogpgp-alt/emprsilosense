import { ArrowRight } from 'lucide-react'
import { CtaLink } from './cta-link'

export function PilotCta({
  title = '¿Quieres probar SiloSense en tu granja?',
  text = 'Coordinamos una prueba piloto con tus silos para que veas el control diario con tus propios datos.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="rounded-2xl border border-accent/30 bg-accent/10 p-8 md:p-10">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-primary">{title}</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
        </div>
        <CtaLink href="/solicitar-prueba" size="lg">
          Solicitar prueba piloto
          <ArrowRight aria-hidden="true" />
        </CtaLink>
      </div>
    </section>
  )
}
