import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
  amount?: number
}

/** Fade + rise reveal on scroll into view. Calm, cinematic timing. */
export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
  once = true,
  amount = 0.4,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 1.05, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

type WordsProps = {
  text: string
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

/** Word-by-word masked text reveal for premium headings. */
export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
}: WordsProps) {
  const words = text.split(' ')
  return (
    <motion.span
      className={className}
      style={{ display: 'inline' }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            paddingBottom: '0.14em',
            marginBottom: '-0.14em',
          }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{ hidden: { y: '110%' }, show: { y: '0%' } }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
