import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const HIGHLIGHTS = [
  { k: 'راحة', v: 'في مكانك، على راحتك.' },
  { k: 'خصوصية', v: 'كشف بعيد عن زحمة العيادة.' },
  { k: 'قرب', v: 'الرعاية بتيجي لحد عندك.' },
]

export function WhatIsDrHome() {
  return (
    <section id="what" className="relative bg-cream-100 px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <Kicker index="04" label="ما هو Dr Home؟" />

        <h2 className="max-w-5xl font-display text-3xl font-black leading-[1.2] text-charcoal sm:text-5xl md:text-[4.2rem]">
          <RevealWords text="Dr Home مش عيادة تانية..." />
          <br />
          <span className="text-teal-deep">
            <RevealWords text="Dr Home هي العيادة اللي بتيجي لك." delay={0.35} />
          </span>
        </h2>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={0.1}>
            <p className="text-xl font-light leading-[2] text-charcoal/75 sm:text-2xl">
              خدمة رعاية أسنان بتنقل العيادة من مكانها لحد باب بيتك. طبيب أسنان
              بيوصلك في البيت بأدواته، ويكشف ويعمل الرعاية اللي محتاجها في مكان
              إنت مرتاح فيه — من غير مشوار، ولا انتظار، ولا قلق.
            </p>
            <p className="mt-8 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              إنت في بيتك... والدكتور جاي لك.
            </p>
          </Reveal>

          <div className="md:col-span-5">
            <div className="flex flex-col gap-px overflow-hidden rounded-2xl bg-charcoal/10">
              {HIGHLIGHTS.map((h, i) => (
                <Reveal key={h.k} delay={0.15 + i * 0.1}>
                  <div className="flex items-center justify-between bg-cream-100 px-6 py-6">
                    <span className="font-display text-2xl font-bold text-teal-deep">
                      {h.k}
                    </span>
                    <span className="text-left text-base text-charcoal/60">
                      {h.v}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
