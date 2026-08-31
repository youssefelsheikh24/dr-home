import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Idea() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const aOpacity = useTransform(scrollYProgress, [0, 0.14, 0.3, 0.4], [0, 1, 1, 0])
  const aX = useTransform(scrollYProgress, [0, 0.4], ['8%', '-6%'])

  const bOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.5, 0.66, 0.74],
    [0, 1, 1, 0],
  )
  const bScale = useTransform(scrollYProgress, [0.38, 0.74], [1.15, 0.95])

  const cOpacity = useTransform(scrollYProgress, [0.76, 0.9], [0, 1])
  const cY = useTransform(scrollYProgress, [0.76, 1], [40, 0])

  // A moving line conveying "movement toward you" (RTL: travels right→left)
  const lineX = useTransform(scrollYProgress, [0, 0.75], ['-40%', '60%'])

  return (
    <section id="idea" ref={ref} className="relative h-[300vh] bg-charcoal">
      <div className="grain sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-deep/20 blur-[130px]" />
        </div>

        {/* travelling line */}
        <motion.div
          style={{ x: lineX }}
          className="pointer-events-none absolute top-1/2 h-px w-[45%] bg-gradient-to-l from-teal-soft/70 to-transparent"
        />

        <motion.p
          style={{ opacity: aOpacity, x: aX }}
          className="absolute px-6 text-center font-display text-4xl font-bold text-cream/60 sm:text-6xl md:text-7xl"
        >
          بدل ما تتحرك...
        </motion.p>

        <motion.p
          style={{ opacity: bOpacity, scale: bScale }}
          className="absolute px-6 text-center font-display text-5xl font-black text-cream-100 sm:text-7xl md:text-8xl"
        >
          الدكتور
          <span className="text-teal-soft"> يتحرك.</span>
        </motion.p>

        <motion.div
          style={{ opacity: cOpacity, y: cY }}
          className="absolute flex flex-col items-center px-6 text-center"
        >
          <span className="brand-en text-5xl text-cream-100 sm:text-7xl md:text-8xl">
            DR&nbsp;HOME
          </span>
          <p className="mt-5 font-display text-xl font-medium text-cream/80 sm:text-3xl">
            طبيب أسنانك... عند باب بيتك.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
