import { Reveal } from '../motion/Reveal'

type KickerProps = {
  index?: string
  label: string
  dark?: boolean
}

/** Small numbered editorial eyebrow used at the head of each section. */
export function Kicker({ index, label, dark = false }: KickerProps) {
  return (
    <Reveal y={18}>
      <div
        className={`mb-6 flex items-center gap-3 text-sm font-medium tracking-wide ${
          dark ? 'text-teal-soft' : 'text-teal-deep'
        }`}
      >
        {index && (
          <span className="brand-en text-xs opacity-80">{index}</span>
        )}
        <span className="h-px w-8 bg-current opacity-50" />
        <span>{label}</span>
      </div>
    </Reveal>
  )
}
