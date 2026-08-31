import { Car, Briefcase, DoorClosed, UserRound, Home, ChevronLeft } from 'lucide-react'
import { Reveal } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const DIALOGUE = [
  { who: 'يوسف', m: 'ي', text: 'لأننا لاحظنا إن في ناس محتاجة دكتور...', side: 'r' },
  { who: 'حسام', m: 'ح', text: 'بس مش دايمًا تقدر تروح للدكتور.', side: 'l' },
  { who: 'يوسف', m: 'ي', text: 'فقلنا...', side: 'r' },
  { who: 'حسام', m: 'ح', text: 'ليه الدكتور مايروحش لهم؟', side: 'l' },
] as const

const CHAIN = [
  { icon: Car, label: 'العربية' },
  { icon: Briefcase, label: 'شنطة الأدوات' },
  { icon: DoorClosed, label: 'الباب' },
  { icon: UserRound, label: 'الدكتور' },
  { icon: Home, label: 'البيت' },
]

export function WhyDrHome() {
  return (
    <section
      id="why"
      className="grain relative overflow-hidden bg-charcoal px-5 py-28 text-cream-100 sm:px-8 md:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-teal-deep/15 blur-[130px]" />
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          <div className="flex justify-center">
            <Kicker index="09" label="لماذا Dr Home؟" dark />
          </div>
          <h2 className="font-display text-3xl font-black leading-[1.3] sm:text-5xl">
            الفكرة كلها بدأت بسؤال...
          </h2>
        </div>

        {/* Dialogue */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-5 md:mt-20">
          {DIALOGUE.map((d, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div
                className={`flex items-end gap-3 ${
                  d.side === 'l' ? 'flex-row-reverse text-left' : ''
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-deep font-display text-lg font-bold text-cream-100">
                  {d.m}
                </span>
                <div
                  className={`rounded-2xl px-6 py-4 ${
                    d.side === 'r'
                      ? 'rounded-br-sm bg-cream-100 text-charcoal'
                      : 'rounded-bl-sm bg-charcoal-700 text-cream-100'
                  }`}
                >
                  <span className="mb-1 block text-xs font-medium text-teal">
                    د. {d.who}
                  </span>
                  <p className="font-display text-lg font-bold sm:text-xl">
                    {d.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The chain */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-3 md:mt-28 md:gap-4">
            {CHAIN.map((c, i) => {
              const Icon = c.icon
              return (
                <div key={c.label} className="flex items-center gap-3 md:gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cream/15 bg-cream/[0.03] text-teal-soft md:h-20 md:w-20">
                      <Icon size={26} />
                    </span>
                    <span className="text-sm text-cream/60">{c.label}</span>
                  </div>
                  {i < CHAIN.length - 1 && (
                    <ChevronLeft size={20} className="text-cream/25" />
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Brand payoff */}
        <Reveal delay={0.15}>
          <div className="mt-20 text-center md:mt-28">
            <span className="brand-en text-5xl text-cream-100 sm:text-7xl">
              DR&nbsp;HOME
            </span>
            <p className="mt-4 font-display text-xl font-medium text-cream/80 sm:text-2xl">
              طبيب أسنانك... عند باب بيتك.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
