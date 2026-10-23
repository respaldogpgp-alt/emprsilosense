import { Benefits } from '@/components/landing/benefits'
import { Hero } from '@/components/landing/hero'
import { Problem } from '@/components/landing/problem'
import { Steps } from '@/components/landing/steps'
import { PilotCta } from '@/components/site/pilot-cta'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Steps />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <PilotCta
            title="Monitorea cada día cuánto alimento queda en tus silos"
            text="Detecta diferencias a tiempo. Solicita una prueba piloto y la coordinamos con tu equipo."
          />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
