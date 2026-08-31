import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin cinematic progress line pinned to the top of the viewport (RTL: fills from right). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'right' }}
      className="fixed inset-x-0 top-0 z-[55] h-[3px] bg-teal-deep"
    />
  )
}
