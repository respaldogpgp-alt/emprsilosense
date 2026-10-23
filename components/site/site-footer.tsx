import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Control diario del alimento en silos para granjas avícolas.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <h2 className="font-semibold">Contacto</h2>
          <a href="mailto:contacto@silosense.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
            <Mail className="size-4" aria-hidden="true" />
            contacto@silosense.com
          </a>
          <a href="tel:+51987654321" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
            <Phone className="size-4" aria-hidden="true" />
            +51 987 654 321
          </a>
          <p className="flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="size-4" aria-hidden="true" />
            Lima, Perú
          </p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-col gap-3 text-sm">
          <h2 className="font-semibold">Prototipo</h2>
          <Link href="/demo" className="text-primary-foreground/80 hover:text-primary-foreground">
            Ver demo
          </Link>
          <Link href="/solicitar-prueba" className="text-primary-foreground/80 hover:text-primary-foreground">
            Solicitar prueba piloto
          </Link>
        </nav>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6">
          {'© 2026 SiloSense. MVP demostrativo con datos simulados.'}
        </p>
      </div>
    </footer>
  )
}
