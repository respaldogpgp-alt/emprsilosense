import { CalendarCheck, Gauge, Handshake } from 'lucide-react'
import type { Metadata } from 'next'
import { PilotForm } from '@/components/pilot/pilot-form'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export const metadata: Metadata = {
  title: 'Solicita una prueba piloto | SiloSense',
  description: 'Déjanos tus datos y coordinaremos una demostración de SiloSense para tu granja.',
}

const points = [
  { icon: Handshake, text: 'Coordinamos una visita para conocer tus silos y tu forma de control actual.' },
  { icon: Gauge, text: 'Instalamos la prueba en los silos que elijas, sin detener la operación.' },
  { icon: CalendarCheck, text: 'Revisas cada día el alimento disponible y las diferencias detectadas.' },
]

export default function PilotPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:py-16">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h1 className="text-pretty text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Solicita una prueba piloto
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Déjanos tus datos y coordinaremos una demostración de SiloSense para tu granja.
            </p>
            <ul className="flex flex-col gap-4">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-foreground/80">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8 lg:col-span-3">
            <PilotForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
