import { motion } from 'framer-motion'

const BackgroundBlobs = () => {
  const blobs = [
    { 
      id: 1, 
      className: 'top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-200/30 to-emerald-300/20',
      animate: { 
        scale: [1, 1.1, 1],
      },
      transition: { duration: 25, repeat: Infinity, ease: 'easeInOut' }
    },
    { 
      id: 2, 
      className: 'bottom-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-orange-200/25 to-amber-300/20',
      animate: { 
        scale: [1, 1.15, 1],
      },
      transition: { duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 5 }
    },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ contain: 'layout style paint' }}>
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute rounded-full blur-3xl will-change-transform ${blob.className}`}
          style={{ transform: 'translateZ(0)' }}
          animate={blob.animate}
          transition={blob.transition}
        />
      ))}
    </div>
  )
}

export default BackgroundBlobs
