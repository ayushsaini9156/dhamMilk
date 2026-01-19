import { motion } from 'framer-motion'

const SkeletonLoader = ({ type = 'product' }) => {
  if (type === 'product') {
    return (
      <div className="gradient-card">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="space-y-4"
        >
          {/* Image skeleton */}
          <div className="w-full h-48 bg-gray-200/60 rounded-xl" />
          
          {/* Title skeleton */}
          <div className="h-6 bg-gray-200/60 rounded w-3/4" />
          
          {/* Price skeleton */}
          <div className="h-8 bg-gray-200/60 rounded w-1/2" />
          
          {/* Badge skeleton */}
          <div className="h-4 bg-gray-200/60 rounded-full w-20" />
          
          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200/60 rounded" />
            <div className="h-4 bg-gray-200/60 rounded w-5/6" />
          </div>
          
          {/* Features skeleton */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-200/60 rounded w-4/5" />
            <div className="h-3 bg-gray-200/60 rounded w-3/5" />
          </div>
          
          {/* Button skeleton */}
          <div className="h-12 bg-gray-200/60 rounded-xl" />
        </motion.div>
      </div>
    )
  }

  if (type === 'list') {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            className="flex gap-4 gradient-card"
          >
            <div className="w-24 h-24 bg-gray-200/60 rounded-lg flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-5 bg-gray-200/60 rounded w-3/4" />
              <div className="h-4 bg-gray-200/60 rounded w-1/2" />
              <div className="h-4 bg-gray-200/60 rounded w-full" />
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  return null
}

export default SkeletonLoader
