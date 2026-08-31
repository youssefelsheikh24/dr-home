import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../../lib/sections'
import { scrollToId } from '../../lib/useSmoothScroll'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    // let the menu close before scrolling on mobile
    setTimeout(() => scrollToId(id), 60)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-cream/80 backdrop-blur-xl border-b border-charcoal/10'
              : 'bg-transparent'
          }`}
        >
          <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 md:py-5">
            {/* Brand */}
            <button
              onClick={() => go('start')}
              className="group flex items-center gap-2"
              aria-label="DR HOME"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-deep text-cream-100 transition-transform duration-500 group-hover:scale-110">
                <span className="brand-en text-[13px]">D</span>
              </span>
              <span className="brand-en text-base text-charcoal md:text-lg">
                DR&nbsp;HOME
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden items-center gap-7 lg:flex">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="relative text-[15px] font-medium text-charcoal/70 transition-colors hover:text-charcoal"
                >
                  {item.title}
                  <span className="absolute -bottom-1 right-0 h-px w-0 bg-teal-deep transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => go('end')}
                className="hidden rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-teal-deep sm:block"
              >
                احجز زيارتك
              </button>
              {/* Mobile toggle */}
              <button
                onClick={() => setOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal lg:hidden"
                aria-label="القائمة"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-charcoal text-cream-100 lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="brand-en text-lg">DR&nbsp;HOME</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20"
                aria-label="إغلاق"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-1 px-6 pt-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  onClick={() => go(item.id)}
                  className="border-b border-cream-100/10 py-4 text-right font-display text-3xl font-bold"
                >
                  {item.title}
                </motion.button>
              ))}
              <button
                onClick={() => go('end')}
                className="mt-8 rounded-full bg-teal-deep px-6 py-4 text-center text-lg font-medium"
              >
                احجز زيارتك
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
