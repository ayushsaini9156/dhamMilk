import { motion } from 'framer-motion'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import PageTransition from '../components/PageTransition'
import AnimatedRating from '../components/AnimatedRating'
import PriceBadge from '../components/PriceBadge'
import { useToast } from '../components/Toast'
import Button from '../components/Button'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const { success } = useToast()
  const [isZoomed, setIsZoomed] = useState(false)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity)
    }
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-2xl">★</span>
      )
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-2xl">★</span>
      )
    }
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-2xl">★</span>
      )
    }
    return stars
  }

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-12 bg-gradient-to-br from-white via-orange-50 to-emerald-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center gap-2 text-sm"
        >
          <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/products" className="text-gray-600 hover:text-primary-600 transition-colors">
            Products
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800 font-semibold">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="gradient-card flex items-center justify-center h-[500px] cursor-pointer overflow-hidden relative"
              onHoverStart={() => setIsZoomed(true)}
              onHoverEnd={() => setIsZoomed(false)}
            >
              <motion.div
                animate={{ scale: isZoomed ? 1.3 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-9xl"
              >
                {product.icon}
              </motion.div>

              {/* Zoom Indicator */}
              {isZoomed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm"
                >
                  🔍 Zoomed
                </motion.div>
              )}
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-4 left-4 bg-primary-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
            >
              {product.category}
            </motion.div>
          </motion.div>

          {/* Product Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Product Name */}
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-gray-800">
              {product.name}
            </h1>

            {/* Rating */}
            <AnimatedRating rating={product.rating} reviews={product.reviews} size="lg" />

            {/* Price */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <PriceBadge 
                price={product.price} 
                originalPrice={product.price * 1.2} 
              />
            </motion.div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-emerald-50 to-orange-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Key Features:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="font-bold text-gray-800 text-lg">Quantity:</label>
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleQuantityChange(-1)}
                  className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-2xl flex items-center justify-center transition-colors"
                >
                  −
                </motion.button>
                <span className="text-3xl font-bold text-gray-800 min-w-[60px] text-center">
                  {quantity}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleQuantityChange(1)}
                  className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-2xl flex items-center justify-center transition-colors"
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
              >
                📞 Contact Us for Inquiry
              </Button>
            </Link>

            {/* Additional Actions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary py-4"
              >
                ❤️ Add to Wishlist
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/products')}
                className="bg-white border-2 border-primary-500 text-primary-600 px-6 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all duration-300 shadow-lg"
              >
                ← Back to Products
              </motion.button>
            </div>

            {/* Shipping Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚚</span>
                  <span className="text-gray-700">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <span className="text-gray-700">Same-day delivery available</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <span className="text-gray-700">Secure checkout guaranteed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </motion.div>
    </PageTransition>
  )
}

export default ProductDetails
