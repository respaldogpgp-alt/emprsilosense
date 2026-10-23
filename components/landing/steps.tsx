const steps = [
  {
    title: 'Visualiza el alimento disponible',
    text: 'Cada silo muestra su nivel actual en kilos y porcentaje de capacidad.',
  },
  {
    title: 'Detecta diferencias frente a lo esperado',
    text: 'SiloSense compara el inventario real con el consumo previsto y marca las diferencias.',
  },
  {
    title: 'Actúa a tiempo',
    text: 'Revisa el silo con alerta, contrasta con el registro de despacho y corrige el mismo día.',
  },
]

export function Steps() {
  return (
    <section id="como-funciona" className="scroll-mt-16 border-y bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Cómo funciona</p>
          <h2 className="mt-2 text-pretty text-3xl font-semibold tracking-tight">Tres pasos, todos los días</h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent font-mono font-semibold text-accent-foreground">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="leading-relaxed text-primary-foreground/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
