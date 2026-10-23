import Link from 'next/link'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <span
        aria-hidden="true"
        className="flex size-8 items-end justify-center gap-0.5 rounded-md bg-primary p-1.5"
      >
        <span className="h-2 w-1 rounded-sm bg-accent" />
        <span className="h-3.5 w-1 rounded-sm bg-accent" />
        <span className="h-2.5 w-1 rounded-sm bg-primary-foreground/80" />
      </span>
      <span className="text-lg">SiloSense</span>
    </Link>
  )
}
