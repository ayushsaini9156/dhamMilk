import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const GlassCard = ({ 
  children, 
  variant = 'default',
  className = '', 
  hover = true,
  ...props 
}) => {
  const variants = {
    default: 'glass-card',
    gradient: 'gradient-card',
    solid: 'card',
    milk: 'milk-glass rounded-2xl p-6',
  }
  
  return (
    <motion.div
      whileHover={hover ? { y: -5, shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } : {}}
      transition={{ duration: 0.3 }}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'gradient', 'solid', 'milk']),
  className: PropTypes.string,
  hover: PropTypes.bool,
}

export default GlassCard
