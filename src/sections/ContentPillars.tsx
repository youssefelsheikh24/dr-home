import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const PILLARS = [
  {
    n: '01',
    title: 'Dr Home Explained',
    desc: 'شرح الخدمة وطريقة الحجز والمناطق والخدمات.',
  },
  {
    n: '02',
    title: 'الأطباء',
    desc: 'تعريف بالدكتورين وبناء الثقة.',
  },
  {
    n: '03',
    title: 'التوعية الطبية',
    desc: 'محتوى بيقرّب الطب من الناس.',
    tags: [
      '٣ علامات متستناش معاها',
      'ليه سنانك بتنزف وإنت بتغسلها؟',
      'هل وجع الأسنان بيروح لوحده؟',
      'إمتى الطفل يحتاج دكتور أسنان؟',
      'هل تنظيف الأسنان مؤلم؟',
    ],
  },
  {
    n: '04',
    title: 'تجربة البيت',
    desc: 'من جرس الباب لحد نهاية الزيارة.',
  },
  {
    n: '05',
    title: 'القصص الإنسانية',
    desc: 'تجارب المرضى والعائلات مع الحفاظ الكامل على الخصوصية.',
  },
  {
    n: '06',
    title: 'الوعي بالبراند',
    desc: 'رسايل بتثبّت مكانة Dr Home.',
    tags: ['طبيبك جاي لك.', 'الرعاية لما تقرب منك... كل حاجة بتختلف.'],
  },
]

export function ContentPillars() {
  return (
    <section id="pillars" className="relative bg-cream-100 px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[1300px]">
        <Kicker index="10" label="أعمدة المحتوى" />
        <h2 className="max-w-3xl font-display text-3xl font-black leading-[1.2] text-charcoal sm:text-5xl md:text-6xl">
          <RevealWords text="من هنا تبدأ الحكاية..." />
        </h2>
        <p className="mt-6 max-w-lg text-lg font-light text-charcoal/60">
          ست أعمدة بتبني حضور Dr Home على السوشيال، من الشرح لحد الإحساس.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-charcoal/10 md:mt-20 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.1} className="h-full">
              <div className="group flex h-full flex-col bg-cream-100 p-8 transition-colors duration-500 hover:bg-cream md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="brand-en text-2xl font-black text-teal-deep/40">
                    {p.n}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 pr-10 text-base text-charcoal/60">{p.desc}</p>
                {p.tags && (
                  <div className="mt-5 flex flex-wrap gap-2 pr-10">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-charcoal/12 bg-cream px-3.5 py-1.5 text-sm text-charcoal/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
