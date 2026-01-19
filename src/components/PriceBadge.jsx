import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const PriceBadge = ({ price, originalPrice, discount }) => {
  const savings = originalPrice ? ((originalPrice - price) / originalPrice * 100).toFixed(0) : discount

  return (
    <div className="flex items-baseline gap-3 flex-wrap">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent"
      >
        ${price.toFixed(2)}
      </motion.span>
      
      {originalPrice && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 line-through"
        >
          ${originalPrice.toFixed(2)}
        </motion.span>
      )}
      
      {savings && (
        <motion.span
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg"
        >
          🔥 Save {savings}%
        </motion.span>
      )}
    </div>
  )
}

PriceBadge.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.number,
}

export default PriceBadge
