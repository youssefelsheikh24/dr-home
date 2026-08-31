import { Reveal, RevealWords } from '../components/motion/Reveal'
import { Kicker } from '../components/ui/Kicker'

const SHOTS = [
  { emoji: '😣', scene: 'المشهد ١', title: 'ألم في البيت', note: 'إضاءة خافتة، إحساس بالتعب.' },
  { emoji: '📱', scene: 'المشهد ٢', title: 'البحث عن طبيب', note: 'الموبايل بينوّر وشّه في الضلمة.' },
  { emoji: '❓', scene: 'المشهد ٣', title: 'السؤال', note: 'ماذا لو جاء طبيب الأسنان إليك؟', hero: true },
  { emoji: '🚗', scene: 'المشهد ٤', title: 'العربية', note: 'بتتحرك في شارع هادي بالليل.' },
  { emoji: '🧑‍⚕️', scene: 'المشهد ٥', title: 'الدكتور', note: 'نازل بثقة وشنطته في إيده.' },
  { emoji: '🔔', scene: 'المشهد ٦', title: 'جرس الباب', note: 'صوت الجرس، وإيد بتفتح.' },
  { emoji: '🚪', scene: 'المشهد ٧', title: 'دخول البيت', note: 'ترحاب ودخول هادي.' },
  { emoji: '🦷', scene: 'المشهد ٨', title: 'الكشف', note: 'كشف في مكان دافي ومريح.' },
  { emoji: '🙂', scene: 'المشهد ٩', title: 'النهاية', note: 'ابتسامة، والباب بيتقفل.' },
]

export function MainFilm() {
  return (
    <section id="film" className="relative bg-ink px-5 py-28 text-cream-100 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[1300px]">
        <Kicker index="12" label="الفيلم الإعلاني الرئيسي" dark />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-black leading-[1.15] sm:text-6xl md:text-7xl">
            <RevealWords text="الفيلم الرئيسي للحملة" />
          </h2>
          <span className="brand-en text-sm tracking-widest text-cream/40">
            STORYBOARD · 00:00 — 00:30
          </span>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {SHOTS.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} y={30}>
              <figure
                className={`grain group overflow-hidden rounded-xl border border-cream/10 ${
                  s.hero ? 'bg-teal-deep' : 'bg-charcoal'
                }`}
              >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden">
                  {/* letterbox bars */}
                  <div className="absolute inset-x-0 top-0 h-4 bg-ink/70" />
                  <div className="absolute inset-x-0 bottom-0 h-4 bg-ink/70" />
                  {s.hero ? (
                    <p className="px-6 text-center font-display text-lg font-black leading-snug text-cream-100 sm:text-2xl">
                      {s.note}
                    </p>
                  ) : (
                    <span className="text-6xl transition-transform duration-500 group-hover:scale-110">
                      {s.emoji}
                    </span>
                  )}
                  <span className="absolute right-3 top-5 brand-en text-[10px] tracking-widest text-cream/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <figcaption className="flex items-center justify-between px-5 py-4">
                  <div>
                    <span className="text-xs text-teal-soft">{s.scene}</span>
                    <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  </div>
                  {!s.hero && (
                    <span className="max-w-[45%] text-left text-xs text-cream/45">
                      {s.note}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Final brand card */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-cream/10 bg-charcoal py-16 text-center">
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
