import { motion } from 'framer-motion'

const Products = () => {
  const productList = [
    {
      id: 1,
      name: 'Whole Milk',
      price: '$4.99',
      icon: '🥛',
      description: 'Fresh, creamy whole milk from grass-fed cows',
      features: ['Vitamin D enriched', 'No hormones', 'Farm fresh'],
    },
    {
      id: 2,
      name: 'Greek Yogurt',
      price: '$6.99',
      icon: '🍶',
      description: 'Thick and creamy Greek yogurt',
      features: ['High protein', 'Live cultures', 'Low sugar'],
    },
    {
      id: 3,
      name: 'Cheddar Cheese',
      price: '$8.99',
      icon: '🧀',
      description: 'Aged cheddar cheese with rich flavor',
      features: ['Artisan crafted', 'Natural aging', 'No additives'],
    },
    {
      id: 4,
      name: 'Organic Butter',
      price: '$5.99',
      icon: '🧈',
      description: 'Creamy organic butter',
      features: ['Grass-fed cows', 'No salt added', 'Premium quality'],
    },
    {
      id: 5,
      name: 'Heavy Cream',
      price: '$7.99',
      icon: '🥛',
      description: 'Rich heavy cream for cooking',
      features: ['High fat content', 'Perfect for baking', 'Ultra-pasteurized'],
    },
    {
      id: 6,
      name: 'Ice Cream',
      price: '$9.99',
      icon: '🍦',
      description: 'Premium homemade ice cream',
      features: ['Natural ingredients', 'Multiple flavors', 'Creamy texture'],
    },
  ]

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600">
            Premium dairy products for your healthy lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card"
            >
              <div className="text-6xl mb-4 text-center">{product.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-3xl font-bold text-primary-600 mb-4">
                {product.price}
              </p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="mr-2 text-primary-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
