import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

type Doc = {
  monogram: string
  name: string
  quote: string
  qa: { q: string; a: string }[]
}

const DOCTORS: Doc[] = [
  {
    monogram: 'ي',
    name: 'د. يوسف ياسر',
    quote:
      'شغلي مش بس إني أعالج مشكلة في سنانك... الأهم إنك تحس إنك في إيد أمينة.',
    qa: [
      {
        q: 'مين هو؟',
        a: 'أنا دكتور يوسف ياسر، طبيب أسنان بشوف إن العلاج بيبدأ من الطمأنينة قبل أي أداة.',
      },
      {
        q: 'ليه اختار طب الأسنان؟',
        a: 'عشان اللحظة اللي بيروح فيها الوجع، وترجع الابتسامة مكانها تاني.',
      },
      {
        q: 'أسلوبه مع المرضى؟',
        a: 'بيطمّنك الأول، ويشرح، ويخليك مرتاح — الراحة النفسية عنده جزء من العلاج.',
      },
      {
        q: 'ليه بدأ Dr Home؟',
        a: 'عشان كده بدأت Dr Home — فكرة بتخلّي رعاية الأسنان أقرب وأسهل للمريض.',
      },
    ],
  },
  {
    monogram: 'ح',
    name: 'د. حسام',
    quote: 'أكتر حاجة بحبها في شغلي؟ إن كل حالة بتعلّمني حاجة جديدة.',
    qa: [
      {
        q: 'مين هو؟',
        a: 'أنا دكتور حسام، بشوف كل حالة كأنها درس جديد بيخليني أطوّر نفسي كل يوم.',
      },
      {
        q: 'ليه اختار طب الأسنان؟',
        a: 'لإن كل مريض حالة مختلفة، والتحدي ده هو اللي بيخليني أحب شغلي.',
      },
      {
        q: 'أسلوبه مع المرضى؟',
        a: 'هادي، بيشرح كل خطوة، وبيخليك شريك في القرار — مش مجرد كرسي كشف.',
      },
      {
        q: 'ليه اختار Dr Home؟',
        a: 'لأننا مؤمنين إن زيارة الدكتور مش لازم تبدأ من العيادة.',
      },
    ],
  },
]

function Portrait({ monogram }: { monogram: string }) {
  return (
    <div className="grain relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-charcoal">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-deep/60 via-charcoal to-ink" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/20 blur-3xl" />
      <span className="absolute inset-0 flex items-center justify-center font-display text-[13rem] font-black text-cream-100/90">
        {monogram}
      </span>
      <span className="absolute bottom-5 right-6 text-xs font-light tracking-wide text-cream/40">
        [ صورة الطبيب — Placeholder ]
      </span>
    </div>
  )
}

export function Doctors() {
  return (
    <section id="doctors" className="relative bg-cream px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[1300px]">
        <Kicker index="08" label="الأطباء" />
        <h2 className="max-w-4xl font-display text-4xl font-black leading-[1.2] text-charcoal sm:text-6xl md:text-7xl">
          <RevealWords text="وراء Dr Home..." />
          <span className="text-teal-deep">
            {' '}
            <RevealWords text="طبيبين." delay={0.25} />
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-lg font-light text-charcoal/60">
          مش بس بيعالجوا... بيبنوا ثقة. دي حكاية كل واحد فيهم.
        </p>

        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-36">
          {DOCTORS.map((doc, i) => (
            <div
              key={doc.name}
              className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 ${
                i % 2 === 1 ? 'md:[direction:ltr]' : ''
              }`}
            >
              <Reveal className="md:col-span-5" y={40}>
                <div dir="rtl">
                  <Portrait monogram={doc.monogram} />
                </div>
              </Reveal>

              <div className="md:col-span-7" dir="rtl">
                <Reveal>
                  <h3 className="font-display text-3xl font-black text-charcoal sm:text-5xl">
                    {doc.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium tracking-wide text-teal-deep">
                    [ التخصص · سنوات الخبرة · الشهادات — تُضاف من العميل ]
                  </p>
                  <p className="mt-6 border-r-2 border-teal-deep pr-5 font-display text-xl font-bold leading-relaxed text-charcoal sm:text-2xl">
                    «{doc.quote}»
                  </p>
                </Reveal>

                <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {doc.qa.map((item, j) => (
                    <Reveal key={item.q} delay={0.1 + j * 0.08}>
                      <div>
                        <p className="text-sm font-bold text-teal-deep">
                          {item.q}
                        </p>
                        <p className="mt-1.5 text-base leading-relaxed text-charcoal/70">
                          {item.a}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
