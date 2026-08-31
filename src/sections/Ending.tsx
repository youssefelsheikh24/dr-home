import { ArrowUpRight } from 'lucide-react'
import { Reveal, RevealWords } from '../components/motion/Reveal'
import { scrollToId } from '../lib/useSmoothScroll'

export function Ending() {
  return (
    <section
      id="end"
      className="grain relative overflow-hidden bg-charcoal px-5 pt-32 text-cream-100 sm:px-8 md:pt-44"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-teal-deep/25 blur-[140px]" />

      <div className="relative mx-auto max-w-[1100px] text-center">
        <h2 className="font-display text-4xl font-black leading-[1.2] sm:text-6xl md:text-7xl">
          <RevealWords text="رعاية الأسنان..." />
          <br />
          <span className="text-teal-soft">
            <RevealWords text="المفروض تكون أقرب." delay={0.3} />
          </span>
        </h2>

        <Reveal delay={0.2}>
          <div className="mt-20 md:mt-28">
            <span className="brand-en text-6xl text-cream-100 sm:text-8xl md:text-[10rem]">
              DR&nbsp;HOME
            </span>
            <p className="mt-5 font-display text-2xl font-medium text-cream/85 sm:text-3xl">
              طبيب أسنانك... عند باب بيتك.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollToId('how')}
              className="group flex items-center gap-2 rounded-full bg-cream-100 px-8 py-4 text-lg font-bold text-charcoal transition-transform duration-300 hover:scale-[1.03]"
            >
              احجز زيارتك
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
            <button
              onClick={() => scrollToId('what')}
              className="rounded-full border border-cream-100/25 px-8 py-4 text-lg font-medium text-cream-100 transition-colors hover:bg-cream-100/10"
            >
              اعرف أكتر
            </button>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="relative mx-auto mt-28 max-w-[1300px] border-t border-cream/12 py-10 md:mt-40">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-right">
          <div>
            <span className="brand-en text-xl">DR&nbsp;HOME</span>
            <p className="mt-1 text-sm text-cream/45">
              عرض حملة إعلانية — رعاية أسنان في البيت.
            </p>
          </div>
          <p className="text-sm text-cream/40">
            © ٢٠٢٥ Dr Home · جميع الحقوق محفوظة ·{' '}
            <span className="text-cream/30">[ بيانات التواصل — Placeholder ]</span>
          </p>
        </div>
      </footer>
    </section>
  )
}
