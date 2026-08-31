import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const PROBLEMS = [
  'مش فاضي أروح للدكتور.',
  'مش عايز أستنى في العيادة.',
  'عندي أطفال ومش سهل أتحرك بيهم.',
  'الحركة صعبة عليا.',
  'عندي ألم ومحتاج دكتور بسرعة.',
  'بخاف من تجربة عيادات الأسنان.',
  'عايز راحة وخصوصية أكتر.',
]

export function Problem() {
  return (
    <section
      id="problem"
      className="relative bg-cream px-5 py-28 sm:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1200px]">
        <Kicker index="02" label="المشكلة" />

        <h2 className="max-w-4xl font-display text-3xl font-black leading-[1.25] text-charcoal sm:text-5xl md:text-6xl">
          <RevealWords text="أحيانًا أصعب حاجة في زيارة الدكتور..." />
          <br />
          <span className="text-teal-deep">
            <RevealWords text="هي إنك تروح له." delay={0.3} />
          </span>
        </h2>

        <div className="mt-16 md:mt-24">
          {PROBLEMS.map((p, i) => (
            <Reveal key={i} delay={i * 0.05} y={26}>
              <div className="group flex items-baseline gap-5 border-t border-charcoal/10 py-6 md:gap-8 md:py-8">
                <span className="brand-en shrink-0 text-sm text-teal-deep/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-display text-2xl font-bold text-charcoal/85 transition-colors duration-500 group-hover:text-charcoal sm:text-3xl md:text-[2.6rem]">
                  {p}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-charcoal/10" />
        </div>
      </div>
    </section>
  )
}
