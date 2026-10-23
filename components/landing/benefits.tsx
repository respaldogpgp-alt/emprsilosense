import { BarChart3, BellRing, ClipboardCheck } from 'lucide-react'

const benefits = [
  {
    icon: BarChart3,
    title: 'Control diario por silo',
    text: 'Consulta cada mañana cuántos kilos de alimento hay en cada silo, sin subir a revisarlo.',
  },
  {
    icon: BellRing,
    title: 'Detección temprana de diferencias',
    text: 'Compara el alimento actual con el esperado y recibe una alerta el mismo día en que aparece la diferencia.',
  },
  {
    icon: ClipboardCheck,
    title: 'Menos revisión manual',
    text: 'Reduce las visitas de control y deja registro de cada lectura, descarga y consumo.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Beneficios</p>
          <h2 className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-primary">
            Información diaria para tomar decisiones a tiempo
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex flex-col gap-4 rounded-2xl border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent/15 text-[oklch(0.42_0.11_152)]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
