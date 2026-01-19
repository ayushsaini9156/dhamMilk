import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const products = [
    { id: 1, name: 'Fresh Milk', icon: '🥛', description: 'Pure and creamy' },
    { id: 2, name: 'Yogurt', icon: '🍶', description: 'Rich in probiotics' },
    { id: 3, name: 'Cheese', icon: '🧀', description: 'Artisan crafted' },
    { id: 4, name: 'Butter', icon: '🧈', description: 'Farm fresh' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Welcome to DairyDelight
          </motion.h1>
          <p className="text-xl md:text-2xl mb-8">
            Farm-Fresh Dairy Products Delivered to Your Doorstep
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-white text-primary-600"
            >
              Explore Products
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Our Premium Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card text-center"
              >
                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dairy-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Experience Pure Dairy Goodness
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of satisfied customers who trust us for quality dairy products
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Started Today
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
