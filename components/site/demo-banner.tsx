import { Info } from 'lucide-react'

export function DemoBanner() {
  return (
    <div className="border-b bg-primary/5">
      <p className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2 text-xs text-muted-foreground sm:px-6">
        <Info className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
        Demo con datos simulados de una granja de 6 silos.
      </p>
    </div>
  )
}
