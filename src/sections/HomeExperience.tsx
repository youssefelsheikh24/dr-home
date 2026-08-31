import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Kicker } from '../components/ui/Kicker'

const FRAMES = [
  { emoji: '📱', title: 'الحجز', line: 'كل حاجة بتبدأ من موبايلك.' },
  { emoji: '🚗', title: 'الوصول', line: 'العربية في الطريق ليك.' },
  { emoji: '🔔', title: 'جرس الباب', line: 'دقّة على الباب... مش في العيادة.' },
  { emoji: '🧰', title: 'تجهيز الأدوات', line: 'الشنطة بتتفتح، والعيادة بتتجهّز عندك.' },
  { emoji: '🦷', title: 'الكشف', line: 'كشف مطمّن، وإنت في بيتك.' },
  { emoji: '❤️', title: 'الرعاية', line: 'رعاية بإيد أمينة وقلب حاسس.' },
  { emoji: '🚪', title: 'المغادرة', line: 'الباب بيتقفل... والابتسامة بدأت.' },
]

export function HomeExperience() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const n = FRAMES.length
  // RTL filmstrip: frames enter from the left as the track slides right.
  // RTL filmstrip: the track is right-anchored (frame 01 starts on the right),
  // so it slides RIGHT (positive x) to bring the later frames in from the left.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `${((n - 1) / n) * 100}%`],
  )
  const barScale = useTransform(scrollYProgress, [0, 1], [0.05, 1])

  return (
    <section id="experience" ref={ref} className="relative h-[560vh] bg-ink">
      <div className="grain sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Reel header */}
        <div className="z-20 flex items-center justify-between px-5 pt-24 sm:px-10 md:pt-28">
          <Kicker label="تجربة البيت" dark />
          <div className="flex items-center gap-2 text-cream/50">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="h-2.5 w-2.5 rounded-full bg-red-500"
            />
            <span className="brand-en text-xs tracking-widest">REC</span>
          </div>
        </div>

        <div className="z-20 px-5 sm:px-10">
          <h2 className="max-w-4xl font-display text-2xl font-black leading-[1.3] text-cream-100 sm:text-4xl md:text-5xl">
            ماذا لو كانت عيادة الأسنان...
            <span className="text-teal-soft"> هي اللي جت لحد باب بيتك؟</span>
          </h2>
        </div>

        {/* Horizontal filmstrip */}
        <motion.div
          dir="ltr"
          style={{ x, width: `${n * 100}vw` }}
          className="flex h-full flex-row-reverse items-center"
        >
          {FRAMES.map((f, i) => (
            <div
              key={f.title}
              className="flex h-full w-screen shrink-0 flex-col items-center justify-center px-8"
              dir="rtl"
            >
              <div className="relative flex flex-col items-center text-center">
                <span className="pointer-events-none absolute -top-24 select-none brand-en text-[9rem] font-black text-cream/[0.04] sm:text-[14rem]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-7xl sm:text-8xl md:text-9xl">
                  {f.emoji}
                </span>
                <span className="mt-8 brand-en text-sm tracking-widest text-teal-soft">
                  {String(i + 1).padStart(2, '0')} / 0{n}
                </span>
                <h3 className="mt-3 font-display text-4xl font-black text-cream-100 sm:text-6xl">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-md text-lg font-light text-cream/60 sm:text-xl">
                  {f.line}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="z-20 px-5 pb-10 sm:px-10">
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-cream/10">
            <motion.div
              style={{ scaleX: barScale, transformOrigin: 'right' }}
              className="h-full w-full bg-teal-soft"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
