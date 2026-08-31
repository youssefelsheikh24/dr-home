import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, ArrowDown } from 'lucide-react'
import { scrollToId } from '../lib/useSmoothScroll'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Phase 1 — the "searching at home" scene
  const searchOpacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0])
  const searchScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.12])
  const searchBlur = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ['blur(0px)', 'blur(14px)'],
  )

  // Phase 2 — the question
  const qOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.34, 0.52, 0.6],
    [0, 1, 1, 0],
  )
  const qScale = useTransform(scrollYProgress, [0.22, 0.6], [0.92, 1.06])
  const qY = useTransform(scrollYProgress, [0.22, 0.6], [40, -30])

  // Phase 3 — the brand reveal
  const bOpacity = useTransform(scrollYProgress, [0.6, 0.74], [0, 1])
  const bY = useTransform(scrollYProgress, [0.6, 0.82], [50, 0])
  const bScale = useTransform(scrollYProgress, [0.6, 1], [0.96, 1])

  // Ambient light drift
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  return (
    <section id="start" ref={ref} className="relative h-[320vh] bg-charcoal">
      <div className="grain sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Ambient cinematic background */}
        <motion.div
          style={{ y: glowY }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-[62%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-teal-deep/25 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-[40vh] w-[40vh] rounded-full bg-teal/10 blur-[110px]" />
          <div className="absolute bottom-0 left-0 h-[50vh] w-full bg-gradient-to-t from-ink to-transparent" />
        </motion.div>

        {/* Phase 1 — search scene */}
        <motion.div
          style={{ opacity: searchOpacity, scale: searchScale, filter: searchBlur }}
          className="absolute flex w-full max-w-md flex-col items-center px-6"
        >
          <p className="mb-6 text-center text-sm font-light text-cream/50">
            الساعة ١١:٤٧ مساءً — وجع مش سايبني أنام
          </p>
          <div className="w-full rounded-2xl border border-cream/15 bg-cream/5 p-2 backdrop-blur-sm">
            <div className="flex items-center gap-3 rounded-xl bg-cream-100 px-4 py-3.5 text-charcoal shadow-2xl">
              <Search size={18} className="shrink-0 text-teal-deep" />
              <span className="typing-query overflow-hidden whitespace-nowrap text-[15px] font-medium">
                طبيب أسنان قريب مني
              </span>
            </div>
            <div className="mt-2 space-y-2 px-2 pb-1 pt-2">
              {[80, 64, 72].map((w, i) => (
                <div
                  key={i}
                  className="h-2.5 rounded-full bg-cream/12"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-xs font-light tracking-wide text-cream/35">
            لازم أروح لحد هناك... دلوقتي؟
          </p>
        </motion.div>

        {/* Phase 2 — the question */}
        <motion.h1
          style={{ opacity: qOpacity, scale: qScale, y: qY }}
          className="absolute px-6 text-center font-display text-4xl font-black leading-[1.15] text-cream-100 sm:text-6xl md:text-7xl"
        >
          ماذا لو جاء
          <br />
          طبيب الأسنان
          <span className="text-teal-soft"> إليك؟</span>
        </motion.h1>

        {/* Phase 3 — brand reveal */}
        <motion.div
          style={{ opacity: bOpacity, y: bY, scale: bScale }}
          className="absolute flex flex-col items-center px-6 text-center"
        >
          <span className="brand-en text-6xl text-cream-100 sm:text-8xl md:text-[9rem]">
            DR&nbsp;HOME
          </span>
          <div className="mt-4 h-px w-24 bg-teal-soft/60" />
          <p className="mt-6 font-display text-2xl font-medium text-cream/85 sm:text-3xl md:text-4xl">
            طبيب أسنانك... عند باب بيتك.
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          style={{ opacity: cueOpacity }}
          onClick={() => scrollToId('problem')}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-cream/50"
          aria-label="انزل لتحت"
        >
          <span className="text-xs tracking-widest">اسحب لتحت</span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  )
}
