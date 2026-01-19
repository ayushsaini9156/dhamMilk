import { motion } from 'framer-motion'

const FloatingMilkDrops = () => {
  // Reduced to 3 drops for better performance
  const drops = [
    { id: 1, x: '20%', delay: 0, duration: 18 },
    { id: 2, x: '50%', delay: 4, duration: 20 },
    { id: 3, x: '80%', delay: 2, duration: 19 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ contain: 'layout style paint' }}>
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-2xl opacity-10"
          style={{ left: drop.x, transform: 'translateZ(0)', willChange: 'transform' }}
          initial={{ y: '100vh' }}
          animate={{
            y: '-10vh',
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          💧
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingMilkDrops
