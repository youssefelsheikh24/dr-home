import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const IDEAS = [
  { n: '01', text: 'طبيبك جاي لك.', tag: 'رسالة رئيسية' },
  { n: '02', text: 'ماذا لو جاء طبيب الأسنان إليك؟', tag: 'سؤال الحملة' },
  { n: '03', text: 'POV: حجزت Dr Home', tag: 'Reel · تجربة' },
  {
    n: '04',
    text: 'مش كل طفل بيخاف من الدكتور... بعضهم بيخاف من العيادة.',
    tag: 'رؤية إنسانية',
  },
  { n: '05', text: 'مين محتاج Dr Home؟', tag: 'تفاعل' },
]

export function CampaignIdeas() {
  return (
    <section
      id="ideas"
      className="grain relative overflow-hidden bg-charcoal px-5 py-28 text-cream-100 sm:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1300px]">
        <Kicker index="11" label="أفكار الحملة" dark />
        <h2 className="max-w-3xl font-display text-4xl font-black leading-[1.15] sm:text-6xl md:text-7xl">
          <RevealWords text="أفكار بتتقال في جملة..." />
          <br />
          <span className="text-teal-soft">
            <RevealWords text="وتتفهم في لحظة." delay={0.3} />
          </span>
        </h2>

        <div className="mt-16 md:mt-24">
          {IDEAS.map((idea, i) => (
            <Reveal key={idea.n} delay={i * 0.06}>
              <div className="group grid grid-cols-[auto_1fr] items-center gap-6 border-t border-cream/12 py-8 md:grid-cols-[auto_1fr_auto] md:gap-10 md:py-12">
                <span className="brand-en text-4xl font-black text-cream/15 transition-colors duration-500 group-hover:text-teal-soft md:text-6xl">
                  {idea.n}
                </span>
                <p className="font-display text-2xl font-bold leading-snug transition-transform duration-500 group-hover:-translate-x-2 sm:text-4xl md:text-5xl">
                  {idea.text}
                </p>
                <span className="col-span-2 text-sm font-medium text-teal-soft md:col-span-1 md:text-left">
                  {idea.tag}
                </span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-cream/12" />
        </div>
      </div>
    </section>
  )
}
