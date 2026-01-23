import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const categories = [
    { id: 1, name: 'Fresh Milk', icon: '🥛', description: 'Pure & Creamy' },
    { id: 2, name: 'Yogurt', icon: '🍶', description: 'Rich in Probiotics' },
    { id: 3, name: 'Cheese', icon: '🧀', description: 'Artisan Crafted' },
    { id: 4, name: 'Butter', icon: '🧈', description: 'Farm Fresh' },
    { id: 5, name: 'Ice Cream', icon: '🍦', description: 'Delicious Treats' },
    { id: 6, name: 'Paneer', icon: '🥛', description: 'High Protein' },
  ]

  const bestSellers = [
    {
      id: 1,
      name: 'Organic Whole Milk',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
      price: 4.99,
      originalPrice: 5.99,
      rating: 4.8,
      reviews: 234,
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Greek Yogurt',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500',
      price: 3.49,
      rating: 4.6,
      reviews: 189,
    },
    {
      id: 3,
      name: 'Aged Cheddar Cheese',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=500',
      price: 7.99,
      originalPrice: 9.99,
      rating: 4.9,
      reviews: 412,
      badge: 'Sale',
    },
    {
      id: 4,
      name: 'Grass-Fed Butter',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500',
      price: 6.49,
      rating: 4.7,
      reviews: 156,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'The quality of DHAM products is outstanding! Fresh and delicious every time.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'Best dairy products I have ever tried. Highly recommend!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Williams',
      text: 'Great taste and excellent quality. My family loves their milk and cheese.',
      rating: 5,
    },
  ]

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-cream-100 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-beige-900 mb-6">
              Fresh Dairy Products
              <span className="block text-primary-600 mt-2">
                From Our Farm to Your Table
              </span>
            </h1>
            <p className="text-lg md:text-xl text-beige-600 mb-8 max-w-2xl mx-auto">
              Fresh, pure, and hygienic milk products for everyday needs. Quality, trust, and consistent freshness you can rely on.
            </p>
            <Link to="/products">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-beige-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-beige-600 max-w-2xl mx-auto">
              Explore our wide range of premium dairy products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/products"
                className="bg-white rounded-lg p-6 text-center shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-250 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-beige-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-beige-500">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-beige-900 mb-4">
              Best Sellers
            </h2>
            <p className="text-beige-600 max-w-2xl mx-auto">
              Our most popular products loved by customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <button className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-beige-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-beige-600 max-w-2xl mx-auto">
              Real experiences from our happy customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-soft"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-beige-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-beige-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
