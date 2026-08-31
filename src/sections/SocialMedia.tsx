import type { ReactNode } from 'react'
import { Play, Heart, MessageCircle, Send, Bookmark } from 'lucide-react'
import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full ${
          light ? 'bg-cream-100 text-charcoal' : 'bg-teal-deep text-cream-100'
        }`}
      >
        <span className="brand-en text-[10px]">D</span>
      </span>
      <span className="brand-en text-[11px]">DR&nbsp;HOME</span>
    </div>
  )
}

function ActionRail() {
  return (
    <div className="absolute bottom-16 left-3 flex flex-col items-center gap-4 text-cream-100">
      {[Heart, MessageCircle, Send, Bookmark].map((Icon, i) => (
        <Icon key={i} size={20} className="drop-shadow" />
      ))}
    </div>
  )
}

function Vertical({
  badge,
  children,
  caption,
  play = false,
}: {
  badge: string
  children: ReactNode
  caption: string
  play?: boolean
}) {
  return (
    <div className="grain relative aspect-[9/16] w-[240px] shrink-0 overflow-hidden rounded-[26px] border border-charcoal/10 bg-charcoal text-cream-100 shadow-2xl sm:w-[264px]">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/40 via-charcoal to-ink" />
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pt-4">
        <Brand />
        <span className="rounded-full bg-cream-100/15 px-2.5 py-1 text-[10px] font-bold tracking-wide backdrop-blur">
          {badge}
        </span>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        {children}
      </div>
      {play && (
        <span className="absolute left-1/2 top-1/2 z-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream-100/15 backdrop-blur">
          <Play size={22} className="translate-x-0.5" />
        </span>
      )}
      <ActionRail />
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink to-transparent px-4 pb-5 pt-10">
        <p className="pl-12 text-right text-xs text-cream/75">{caption}</p>
      </div>
    </div>
  )
}

function Square({
  badge,
  children,
  dots = 0,
}: {
  badge: string
  children: ReactNode
  dots?: number
}) {
  return (
    <div className="relative w-[240px] shrink-0 overflow-hidden rounded-[22px] border border-charcoal/10 bg-cream-100 shadow-2xl sm:w-[264px]">
      <div className="flex items-center justify-between px-4 py-3">
        <Brand />
        <span className="rounded-full bg-charcoal/8 px-2.5 py-1 text-[10px] font-bold tracking-wide text-charcoal/70">
          {badge}
        </span>
      </div>
      <div className="grain relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-cream to-cream-300 px-6 text-center">
        {children}
        {dots > 0 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {Array.from({ length: dots }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 0 ? 'bg-teal-deep' : 'bg-charcoal/25'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 px-4 py-3 text-charcoal/70">
        <Heart size={18} />
        <MessageCircle size={18} />
        <Send size={18} />
        <Bookmark size={18} className="mr-auto" />
      </div>
    </div>
  )
}

export function SocialMedia() {
  return (
    <section id="social" className="relative bg-cream px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[1300px]">
        <Kicker index="13" label="محتوى السوشيال ميديا" />
        <h2 className="max-w-3xl font-display text-3xl font-black leading-[1.2] text-charcoal sm:text-5xl md:text-6xl">
          <RevealWords text="حملة سوشيال ميديا كاملة..." />
          <br />
          <span className="text-teal-deep">
            <RevealWords text="مش مجرد بوستات." delay={0.3} />
          </span>
        </h2>

        <div className="mt-16 flex flex-wrap justify-center gap-6 md:mt-20">
          <Reveal>
            <Vertical badge="REEL" caption="طبيبك جاي لك · Dr Home" play>
              <p className="font-display text-3xl font-black leading-tight">
                طبيبك
                <br />
                جاي لك.
              </p>
            </Vertical>
          </Reveal>

          <Reveal delay={0.05}>
            <Square badge="POST">
              <p className="font-display text-2xl font-black leading-snug text-charcoal">
                الرعاية لما تقرب منك...
                <span className="text-teal-deep"> كل حاجة بتختلف.</span>
              </p>
            </Square>
          </Reveal>

          <Reveal delay={0.1}>
            <Square badge="CAROUSEL" dots={4}>
              <div>
                <span className="brand-en text-xs text-teal-deep">SWIPE →</span>
                <p className="mt-3 font-display text-2xl font-black leading-snug text-charcoal">
                  ٣ علامات
                  <br />
                  متستناش معاها
                </p>
              </div>
            </Square>
          </Reveal>

          <Reveal delay={0.05}>
            <Vertical badge="STORY" caption="اسأل · احجز · اطمّن">
              <div>
                <div className="absolute inset-x-4 top-12 flex gap-1">
                  {[100, 40, 0].map((w, i) => (
                    <span
                      key={i}
                      className="h-0.5 flex-1 overflow-hidden rounded-full bg-cream-100/30"
                    >
                      <span
                        className="block h-full bg-cream-100"
                        style={{ width: `${w}%` }}
                      />
                    </span>
                  ))}
                </div>
                <p className="font-display text-2xl font-black">
                  محتاج دكتور؟
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-cream-100/20 px-4 py-1.5 text-sm">
                    آه
                  </span>
                  <span className="rounded-full bg-cream-100/20 px-4 py-1.5 text-sm">
                    لسه
                  </span>
                </div>
              </div>
            </Vertical>
          </Reveal>

          <Reveal delay={0.1}>
            <Vertical badge="POV REEL" caption="POV: التجربة من عينيك" play>
              <p className="font-display text-3xl font-black leading-tight">
                POV:
                <br />
                حجزت
                <br />
                Dr Home
              </p>
            </Vertical>
          </Reveal>

          <Reveal delay={0.05}>
            <Vertical badge="DOCTOR REEL" caption="د. يوسف ياسر · Dr Home" play>
              <div>
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-deep font-display text-3xl font-black">
                  ي
                </span>
                <p className="mt-4 font-display text-xl font-bold leading-snug">
                  العلاج بيبدأ
                  <br />
                  بالطمأنينة.
                </p>
              </div>
            </Vertical>
          </Reveal>

          <Reveal delay={0.1}>
            <Vertical badge="EDUCATIONAL" caption="توعية طبية · Dr Home" play>
              <p className="font-display text-2xl font-black leading-snug">
                هل وجع الأسنان
                <br />
                بيروح لوحده؟
              </p>
            </Vertical>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
