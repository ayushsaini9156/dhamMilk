import { motion, AnimatePresence } from 'framer-motion'
import { createContext, useContext, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const ToastContext = createContext()

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, duration)
  }, [])

  const success = useCallback((message, duration) => addToast(message, 'success', duration), [addToast])
  const error = useCallback((message, duration) => addToast(message, 'error', duration), [addToast])
  const info = useCallback((message, duration) => addToast(message, 'info', duration), [addToast])

  return (
    <ToastContext.Provider value={{ addToast, success, error, info }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const ToastContainer = ({ toasts }) => {
  return (
    <div className="fixed top-20 right-4 z-[100] space-y-2 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </div>
  )
}

ToastContainer.propTypes = {
  toasts: PropTypes.array.isRequired,
}

const Toast = ({ message, type }) => {
  const variants = {
    success: {
      bg: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      icon: '✓',
    },
    error: {
      bg: 'bg-gradient-to-r from-red-500 to-rose-600',
      icon: '✕',
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      icon: 'ℹ',
    },
  }

  const config = variants[type] || variants.success

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`${config.bg} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[300px] pointer-events-auto`}
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ delay: 0.1, type: 'spring' }}
        className="text-2xl font-bold w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
      >
        {config.icon}
      </motion.span>
      <span className="font-semibold flex-1">{message}</span>
    </motion.div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
