import { Users, Baby, Armchair, Briefcase, Accessibility } from 'lucide-react'
import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const AUDIENCE = [
  {
    icon: Users,
    title: 'العائلات',
    desc: 'رعاية أسهل وأريح لكل أفراد الأسرة.',
  },
  {
    icon: Baby,
    title: 'الأطفال',
    desc: 'خصوصًا الأطفال اللي بيخافوا من العيادة.',
  },
  {
    icon: Armchair,
    title: 'كبار السن',
    desc: 'للأشخاص اللي الحركة والخروج بالنسبة لهم صعب.',
  },
  {
    icon: Briefcase,
    title: 'الناس المشغولة',
    desc: 'موظفين، أصحاب أعمال، أطباء، طلبة وكل شخص وقته محدود.',
  },
  {
    icon: Accessibility,
    title: 'أصحاب صعوبة الحركة',
    desc: 'لما الوصول للعيادة مش سهل.',
  },
]

export function WhoNeeds() {
  return (
    <section id="who" className="relative bg-cream px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Kicker index="06" label="مين محتاج Dr Home؟" />
              <h2 className="font-display text-3xl font-black leading-[1.25] text-charcoal sm:text-5xl">
                <RevealWords text="الرعاية اللي بتيجي لك... مش رفاهية." />
              </h2>
              <p className="mt-6 max-w-sm text-lg font-light leading-relaxed text-charcoal/60">
                فيه ناس كتير بالنسبة لهم الوصول للعيادة نفسه هو التحدي الأكبر. Dr
                Home اتعمل عشانهم.
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            {AUDIENCE.map((a, i) => {
              const Icon = a.icon
              return (
                <Reveal key={a.title} delay={i * 0.06} y={24}>
                  <div className="group flex items-start gap-6 border-t border-charcoal/10 py-8 md:gap-8 md:py-10">
                    <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-cream-100 transition-colors duration-500 group-hover:bg-teal-deep md:h-14 md:w-14">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-charcoal sm:text-3xl md:text-4xl">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-lg text-charcoal/60">{a.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
