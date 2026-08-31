import { motion } from 'framer-motion'
import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const PHASES = [
  {
    n: '01',
    key: 'الوعي',
    title: 'المرحلة الأولى — الوعي',
    desc: 'نعرف الناس بالمشكلة والفكرة.',
  },
  {
    n: '02',
    key: 'الثقة',
    title: 'المرحلة الثانية — الثقة',
    desc: 'نعرّفهم بالدكاترة ونقدم محتوى تعليمي.',
  },
  {
    n: '03',
    key: 'التجربة',
    title: 'المرحلة الثالثة — التجربة',
    desc: 'نوريهم تجربة Dr Home ونشجعهم على الحجز.',
  },
]

export function CampaignJourney() {
  return (
    <section
      id="journey"
      className="relative bg-cream-100 px-5 py-28 sm:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1300px]">
        <Kicker index="14" label="رحلة الحملة — الشهر الأول" />
        <h2 className="max-w-3xl font-display text-3xl font-black leading-[1.2] text-charcoal sm:text-5xl md:text-6xl">
          <RevealWords text="من أول ما يعرفوك..." />
          <br />
          <span className="text-teal-deep">
            <RevealWords text="لحد ما يجرّبوك." delay={0.3} />
          </span>
        </h2>

        {/* Flow keywords */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-4 font-display text-xl font-bold text-charcoal/40 sm:text-2xl">
            <span className="text-charcoal">الوعي</span>
            <span className="text-teal-deep">←</span>
            <span className="text-charcoal">الثقة</span>
            <span className="text-teal-deep">←</span>
            <span className="text-charcoal">التجربة</span>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-16 md:mt-24">
          <div className="absolute right-0 top-8 hidden h-px w-full bg-charcoal/12 md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'right' }}
              className="h-full w-full bg-teal-deep"
            />
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {PHASES.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.15}>
                <div className="md:pl-8">
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-charcoal font-display text-xl font-black text-cream-100">
                    {p.n}
                  </span>
                  <span className="mt-6 inline-block rounded-full bg-teal-deep/10 px-4 py-1 text-sm font-bold text-teal-deep">
                    {p.key}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-lg text-charcoal/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
