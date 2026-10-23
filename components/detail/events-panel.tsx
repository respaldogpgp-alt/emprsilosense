import type { SiloEvent } from '@/lib/silos'
import { cn } from '@/lib/utils'

const toneDot: Record<SiloEvent['tone'], string> = {
  info: 'bg-primary',
  success: 'bg-accent',
  warning: 'bg-warning',
}

export function EventsPanel({ events }: { events: SiloEvent[] }) {
  return (
    <section aria-labelledby="events-title" className="rounded-xl border bg-card p-5">
      <h2 id="events-title" className="mb-4 font-semibold text-primary">
        Eventos recientes
      </h2>
      <ol className="flex flex-col">
        {events.map((event, index) => (
          <li key={`${event.time}-${index}`} className="relative flex gap-4 pb-5 last:pb-0">
            {index < events.length - 1 && (
              <span className="absolute top-4 left-[5px] h-full w-px bg-border" aria-hidden="true" />
            )}
            <span className={cn('relative mt-1.5 size-2.5 shrink-0 rounded-full', toneDot[event.tone])} aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-muted-foreground">{event.time}</span>
              <span className={cn('text-sm font-medium', event.tone === 'warning' && 'text-[oklch(0.5_0.15_45)]')}>
                {event.label}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
