import Link from 'next/link'
import { Logo } from './logo'
import { CtaLink } from './cta-link'

const links = [
  { href: '/#beneficios', label: 'Beneficios' },
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/demo', label: 'Demo' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo className="text-primary" />
        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CtaLink href="/demo" variant="ghost" size="sm" className="md:hidden">
            Demo
          </CtaLink>
          <CtaLink href="/solicitar-prueba" size="sm">
            Solicitar prueba piloto
          </CtaLink>
        </div>
      </div>
    </header>
  )
}
