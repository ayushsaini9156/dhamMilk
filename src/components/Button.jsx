import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 via-primary-600 to-emerald-600 text-white hover:from-primary-600 hover:via-primary-700 hover:to-emerald-700',
    secondary: 'bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-white hover:from-orange-500 hover:via-orange-600 hover:to-amber-600',
    outline: 'bg-white/80 backdrop-blur-sm text-primary-600 border-2 border-primary-400 hover:bg-primary-50 hover:border-primary-600',
    glass: 'bg-white/20 backdrop-blur-md text-gray-800 border border-white/40 hover:bg-white/30',
    success: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'glass', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Button
