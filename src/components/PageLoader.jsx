import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Top Loading Bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-emerald-500 to-orange-500 z-[999] origin-left"
          />
          
          {/* Optional: Center Spinner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white/60 backdrop-blur-sm z-[998] flex items-center justify-center pointer-events-none"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
