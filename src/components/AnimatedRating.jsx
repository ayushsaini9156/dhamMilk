import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const AnimatedRating = ({ rating, reviews, size = 'md' }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - Math.ceil(rating)

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, i) => (
          <motion.span
            key={`full-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, type: 'spring' }}
            className={`${sizes[size]} text-yellow-400`}
          >
            ⭐
          </motion.span>
        ))}
        
        {/* Half Star */}
        {hasHalfStar && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: fullStars * 0.05, type: 'spring' }}
            className={`${sizes[size]} text-yellow-400`}
          >
            ⭐
          </motion.span>
        )}
        
        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <motion.span
            key={`empty-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.05, type: 'spring' }}
            className={`${sizes[size]} text-gray-300`}
          >
            ⭐
          </motion.span>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-1"
      >
        <span className="font-bold text-gray-800">{rating}</span>
        {reviews && (
          <span className="text-gray-500 text-sm">({reviews})</span>
        )}
      </motion.div>
    </div>
  )
}

AnimatedRating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

export default AnimatedRating
