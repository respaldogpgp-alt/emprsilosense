import type { Metadata } from 'next'
import { SiloTable } from '@/components/dashboard/silo-table'
import { SummaryCards } from '@/components/dashboard/summary-cards'
import { DemoBanner } from '@/components/site/demo-banner'
import { PilotCta } from '@/components/site/pilot-cta'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export const metadata: Metadata = {
  title: 'Resumen de silos | SiloSense',
  description: 'Vista diaria del alimento disponible y diferencias detectadas.',
}

export default function DemoPage() {
  return (
    <>
      <SiteHeader />
      <DemoBanner />
      <main className="bg-secondary/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-primary">Resumen de silos</h1>
            <p className="mt-1 text-muted-foreground">Vista diaria del alimento disponible y diferencias detectadas</p>
          </div>
          <SummaryCards />
          <SiloTable />
          <PilotCta />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
