export type SiloStatus = 'Normal' | 'Alerta'

export type SiloEvent = {
  time: string
  label: string
  tone: 'info' | 'warning' | 'success'
}

export type Silo = {
  id: number
  name: string
  capacity: number
  current: number
  expected: number
  status: SiloStatus
  trend: { day: string; actual: number; expected: number }[]
  events: SiloEvent[]
}

const DAYS = ['Jue', 'Vie', 'Sáb', 'Dom', 'Lun', 'Mar', 'Hoy']

function buildTrend(current: number, expected: number, dailyUse: number, gapStartDay: number) {
  const finalGap = current - expected
  return DAYS.map((day, index) => {
    const daysBack = DAYS.length - 1 - index
    const expectedValue = expected + daysBack * dailyUse
    const gapProgress = index < gapStartDay ? 0 : (index - gapStartDay + 1) / (DAYS.length - gapStartDay)
    return {
      day,
      expected: expectedValue,
      actual: Math.round(expectedValue + finalGap * gapProgress),
    }
  })
}

const normalEvents: SiloEvent[] = [
  { time: '08:30', label: 'Actualización de lectura', tone: 'info' },
  { time: 'Ayer 17:40', label: 'Consumo normal', tone: 'success' },
  { time: 'Ayer 08:30', label: 'Actualización de lectura', tone: 'info' },
  { time: 'Lun 10:15', label: 'Descarga registrada', tone: 'info' },
]

export const silos: Silo[] = [
  {
    id: 1,
    name: 'Silo 1',
    capacity: 6000,
    current: 2900,
    expected: 3100,
    status: 'Alerta',
    trend: buildTrend(2900, 3100, 420, 4),
    events: [
      { time: '08:30', label: 'Actualización de lectura', tone: 'info' },
      { time: '07:15', label: 'Descarga registrada', tone: 'info' },
      { time: 'Ayer 16:20', label: 'Consumo normal', tone: 'success' },
      { time: 'Ayer 09:00', label: 'Diferencia detectada', tone: 'warning' },
    ],
  },
  {
    id: 2,
    name: 'Silo 2',
    capacity: 6000,
    current: 4300,
    expected: 4300,
    status: 'Normal',
    trend: buildTrend(4300, 4300, 230, 7),
    events: normalEvents,
  },
  {
    id: 3,
    name: 'Silo 3',
    capacity: 6000,
    current: 1800,
    expected: 1760,
    status: 'Normal',
    trend: buildTrend(1800, 1760, 380, 5),
    events: normalEvents,
  },
  {
    id: 4,
    name: 'Silo 4',
    capacity: 6000,
    current: 950,
    expected: 1100,
    status: 'Alerta',
    trend: buildTrend(950, 1100, 600, 3),
    events: [
      { time: '08:30', label: 'Actualización de lectura', tone: 'info' },
      { time: '06:50', label: 'Diferencia detectada', tone: 'warning' },
      { time: 'Ayer 15:10', label: 'Consumo normal', tone: 'success' },
      { time: 'Ayer 08:30', label: 'Nivel bajo, programar recarga', tone: 'warning' },
    ],
  },
  {
    id: 5,
    name: 'Silo 5',
    capacity: 6000,
    current: 3600,
    expected: 3550,
    status: 'Normal',
    trend: buildTrend(3600, 3550, 310, 5),
    events: normalEvents,
  },
  {
    id: 6,
    name: 'Silo 6',
    capacity: 6000,
    current: 5200,
    expected: 5200,
    status: 'Normal',
    trend: buildTrend(5200, 5200, 120, 7),
    events: normalEvents,
  },
]

export function getSilo(id: number) {
  return silos.find((silo) => silo.id === id)
}

export function difference(silo: Pick<Silo, 'current' | 'expected'>) {
  return silo.current - silo.expected
}

const numberFormat = new Intl.NumberFormat('es-PE')

export function formatKg(value: number) {
  return `${numberFormat.format(value)} kg`
}

export function formatDiff(value: number) {
  if (value === 0) return '0 kg'
  return `${value > 0 ? '+' : '−'}${numberFormat.format(Math.abs(value))} kg`
}
