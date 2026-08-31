import { CalendarCheck, Car, Stethoscope, Check } from 'lucide-react'
import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const STEPS = [
  {
    n: '01',
    icon: CalendarCheck,
    title: 'احجز',
    desc: 'اختار ميعادك.',
  },
  {
    n: '02',
    icon: Car,
    title: 'إحنا جايين',
    desc: 'طبيب الأسنان يوصلك لحد البيت.',
  },
  {
    n: '03',
    icon: Stethoscope,
    title: 'رعاية أسنان',
    desc: 'كشف ورعاية أسنان حسب الحالة.',
  },
  {
    n: '04',
    icon: Check,
    title: 'خلصت',
    desc: 'رعاية أسنان بدون مشوار العيادة.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how"
      className="grain relative overflow-hidden bg-charcoal px-5 py-28 text-cream-100 sm:px-8 md:py-40"
    >
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[50vh] w-[50vh] rounded-full bg-teal-deep/20 blur-[130px]" />
      <div className="mx-auto max-w-[1300px]">
        <Kicker index="05" label="كيف تعمل الخدمة؟" dark />
        <h2 className="max-w-3xl font-display text-3xl font-black leading-[1.25] sm:text-5xl md:text-6xl">
          <RevealWords text="أربع خطوات... وبينتهي المشوار." />
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-cream/10 md:mt-24 md:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.n} delay={i * 0.12} className="h-full">
                <div className="group relative flex h-full flex-col justify-between bg-charcoal p-8 transition-colors duration-500 hover:bg-charcoal-800 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="brand-en text-5xl font-black text-cream/15 transition-colors duration-500 group-hover:text-teal-soft/40 md:text-6xl">
                      {s.n}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 text-teal-soft">
                      <Icon size={22} />
                    </span>
                  </div>
                  <div className="mt-16 md:mt-24">
                    <h3 className="font-display text-2xl font-bold md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-cream/55">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
