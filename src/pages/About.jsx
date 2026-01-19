import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About DairyDelight
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted source for premium dairy products
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded in 2020, DairyDelight began with a simple mission: to bring
              farm-fresh, high-quality dairy products directly to your table. We
              partner with local farms committed to sustainable practices and animal
              welfare.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, we serve thousands of families across the region, ensuring that
              every product meets our rigorous standards for quality, freshness, and taste.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-2">🌱 Sustainable</h3>
                <p className="text-gray-700">
                  We work with farms that prioritize environmental sustainability
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2">✨ Premium Quality</h3>
                <p className="text-gray-700">
                  Every product is carefully selected and tested for excellence
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2">🚚 Fast Delivery</h3>
                <p className="text-gray-700">
                  Same-day delivery available for maximum freshness
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-2">💚 Natural</h3>
                <p className="text-gray-700">
                  No artificial hormones, antibiotics, or preservatives
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-primary-50 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700 text-lg">
              Quality • Freshness • Sustainability • Community • Trust
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
