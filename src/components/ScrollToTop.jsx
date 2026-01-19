import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import useSmoothScroll from '../hooks/useSmoothScroll'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollToTop } = useSmoothScroll()
  const rafRef = useRef(null)

  useEffect(() => {
    // Use requestAnimationFrame for throttling
    const toggleVisibility = () => {
      if (rafRef.current) return // Already scheduled
      
      rafRef.current = requestAnimationFrame(() => {
        setIsVisible(window.pageYOffset > 300)
        rafRef.current = null
      })
    }

    // Passive listener for better scroll performance
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => {
      window.removeEventListener('scroll', toggleVisibility, { passive: true })
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-primary-500 to-emerald-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:shadow-primary-500/50 transition-shadow"
          style={{ willChange: 'transform' }}
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </>
  )
}

export default ScrollToTop
