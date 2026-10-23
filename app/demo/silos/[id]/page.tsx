import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EventsPanel } from '@/components/detail/events-panel'
import { MetricsGrid } from '@/components/detail/metrics-grid'
import { Recommendation } from '@/components/detail/recommendation'
import { TrendChart } from '@/components/detail/trend-chart'
import { CtaLink } from '@/components/site/cta-link'
import { DemoBanner } from '@/components/site/demo-banner'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { getSilo, silos } from '@/lib/silos'

export function generateStaticParams() {
  return silos.map((silo) => ({ id: String(silo.id) }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const silo = getSilo(Number(id))
  return { title: silo ? `Detalle del ${silo.name} | SiloSense` : 'Silo no encontrado | SiloSense' }
}

export default async function SiloDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const silo = getSilo(Number(id))
  if (!silo) notFound()

  return (
    <>
      <SiteHeader />
      <DemoBanner />
      <main className="bg-secondary/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <CtaLink href="/demo" variant="ghost" size="sm" className="-ml-3 mb-2 text-muted-foreground">
                <ArrowLeft aria-hidden="true" />
                Resumen de silos
              </CtaLink>
              <h1 className="text-3xl font-semibold tracking-tight text-primary">Detalle del {silo.name}</h1>
              <p className="mt-1 text-muted-foreground">Seguimiento diario del alimento y diferencia detectada</p>
            </div>
          </div>

          <MetricsGrid silo={silo} />

          {silo.status === 'Alerta' && <Recommendation silo={silo} />}

          <div className="grid gap-6 lg:grid-cols-3">
            <section aria-labelledby="trend-title" className="rounded-xl border bg-card p-5 lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h2 id="trend-title" className="font-semibold text-primary">
                  Últimos 7 días
                </h2>
                <span className="text-xs text-muted-foreground">kg de alimento</span>
              </div>
              <TrendChart trend={silo.trend} />
            </section>
            <EventsPanel events={silo.events} />
          </div>

          <div className="flex flex-col gap-3 border-t pt-8 sm:flex-row sm:justify-between">
            <CtaLink href="/demo" variant="outline" size="lg">
              <ArrowLeft aria-hidden="true" />
              Volver al dashboard
            </CtaLink>
            <CtaLink href="/solicitar-prueba" size="lg">
              Solicitar prueba piloto
              <ArrowRight aria-hidden="true" />
            </CtaLink>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
