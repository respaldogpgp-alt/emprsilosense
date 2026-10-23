'use client'

import { CheckCircle2, Info } from 'lucide-react'
import { useState } from 'react'
import { CtaLink } from '@/components/site/cta-link'

const inputClass =
  'h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30'

const fields = [
  { name: 'nombre', label: 'Nombre', type: 'text', autoComplete: 'name', placeholder: 'Juan Pérez', required: true },
  { name: 'empresa', label: 'Empresa o granja', type: 'text', autoComplete: 'organization', placeholder: 'Granja San José', required: true },
  { name: 'cargo', label: 'Cargo', type: 'text', autoComplete: 'organization-title', placeholder: 'Administrador de granja', required: true },
  { name: 'telefono', label: 'Teléfono', type: 'tel', autoComplete: 'tel', placeholder: '+51 987 654 321', required: true },
  { name: 'correo', label: 'Correo electrónico', type: 'email', autoComplete: 'email', placeholder: 'juan@granja.com', required: true },
  { name: 'silos', label: 'Número de silos', type: 'number', autoComplete: 'off', placeholder: '6', required: true },
] as const

export function PilotForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center" role="status">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-[oklch(0.42_0.11_152)]">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <p className="max-w-sm text-lg font-medium text-primary">
          Gracias. Hemos recibido tu solicitud y nos pondremos en contacto contigo.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/demo" variant="outline">
            Volver a la demo
          </CtaLink>
          <CtaLink href="/">Ir al inicio</CtaLink>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label htmlFor={field.name} className="text-sm font-medium">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              required={field.required}
              min={field.type === 'number' ? 1 : undefined}
              max={field.type === 'number' ? 500 : undefined}
              inputMode={field.type === 'number' ? 'numeric' : undefined}
              className={inputClass}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensaje" className="text-sm font-medium">
          Mensaje <span className="font-normal text-muted-foreground">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          maxLength={1000}
          placeholder="Cuéntanos cómo controlan hoy el alimento en tus silos."
          className={`${inputClass} h-auto py-2.5`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-colors outline-none hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        Enviar solicitud
      </button>
      <p className="flex items-start gap-2 text-xs text-muted-foreground">
        <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        Este formulario es parte de un MVP demostrativo con fines de validación.
      </p>
    </form>
  )
}
