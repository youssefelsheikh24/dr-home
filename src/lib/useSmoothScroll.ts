import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Global Lenis smooth-scrolling. Mounted once at the app root.
 * Exposes the instance on window for anchor navigation.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    })

    ;(window as unknown as { lenis?: Lenis }).lenis = lenis

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      ;(window as unknown as { lenis?: Lenis }).lenis = undefined
    }
  }, [])
}

/** Smoothly scroll to an in-page anchor id. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const lenis = (window as unknown as { lenis?: Lenis }).lenis
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.3 })
  else el.scrollIntoView({ behavior: 'smooth' })
}
