import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const products = [
    { id: 1, name: 'Fresh Milk', icon: '🥛', description: 'Pure and creamy' },
    { id: 2, name: 'Yogurt', icon: '🍶', description: 'Rich in probiotics' },
    { id: 3, name: 'Cheese', icon: '🧀', description: 'Artisan crafted' },
    { id: 4, name: 'Butter', icon: '🧈', description: 'Farm fresh' },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div>
      {/* Hero Section with Milk Splash Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background with Milk Splash Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-100 to-dairy-cream">
          {/* Milk Splash Circles */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-32 left-10 w-80 h-80 bg-primary-200 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dairy-butter rounded-full blur-3xl"
          />
          
          {/* Floating Milk Drops */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [-20, 20, -20],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              className="absolute w-4 h-4 bg-white rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-4 text-center"
        >
          {/* Emoji with Animation */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.span
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block text-8xl md:text-9xl"
            >
              🥛
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent leading-tight"
          >
            Fresh Dairy Products
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent"
            >
              Delivered Daily
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-medium"
          >
            Farm-fresh quality delivered to your doorstep. Experience the pure taste of nature with every sip.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary px-10 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Shop Now
              </motion.button>
            </Link>
            
            <Link to="/products">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(14, 165, 233, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary px-10 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                Explore Products
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats/Features Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: '🌱', label: '100% Organic', desc: 'Natural & Fresh' },
              { icon: '🚚', label: 'Free Delivery', desc: 'Within 24 Hours' },
              { icon: '⭐', label: 'Premium Quality', desc: 'Trusted by 10K+' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="gradient-card p-6 text-center"
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h3 className="font-bold text-lg text-gray-800">{badge.label}</h3>
                <p className="text-sm text-gray-600">{badge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Our Premium Products
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Handpicked dairy products from trusted farms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="gradient-card text-center cursor-pointer"
              >
                <div className="text-7xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Experience Pure Dairy Goodness
            </h2>
            <p className="text-xl md:text-2xl text-primary-50 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for quality dairy products
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.08, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
