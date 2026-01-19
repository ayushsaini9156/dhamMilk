import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { products as productsData, categories } from '../data/products'

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOrder, setSortOrder] = useState('default')

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = productsData

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort by price
    if (sortOrder === 'low-high') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'high-low') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [searchQuery, selectedCategory, sortOrder])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-white via-primary-50 to-dairy-lightCream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Premium dairy products for your healthy lifestyle. Fresh from farm to table.
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 lg:p-8 border border-primary-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🔍 Search Products
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Search by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📂 Category
              </label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700 bg-white cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </motion.select>
            </div>

            {/* Sort Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                💰 Sort by Price
              </label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-gray-700 bg-white cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </motion.select>
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-600 font-medium">
              Showing <span className="text-primary-600 font-bold">{filteredProducts.length}</span> of{' '}
              <span className="font-bold">{productsData.length}</span> products
            </p>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key="products-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="gradient-card group cursor-pointer overflow-hidden"
                >
                  {/* Product Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl mb-4 text-center"
                  >
                    {product.icon}
                  </motion.div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-3xl font-extrabold text-primary-600 mb-3">
                    ${product.price.toFixed(2)}
                  </p>

                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold mb-3">
                    {product.category}
                  </span>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="mr-2 text-primary-600 font-bold">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full"
                  >
                    Add to Cart
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-products"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                  setSortOrder('default')
                }}
                className="btn-secondary"
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Products
