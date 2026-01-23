import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageTransition from '../components/PageTransition'

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  // Refs for scroll animations
  const storyRef = useRef(null)
  const promiseRef = useRef(null)
  const timelineRef = useRef(null)
  const standardsRef = useRef(null)

  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isPromiseInView = useInView(promiseRef, { once: true, margin: "-100px" })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const isStandardsInView = useInView(standardsRef, { once: true, margin: "-100px" })

  const timeline = [
    {
      year: '2026',
      title: 'The Beginning',
      description: 'Dham was founded with a vision to bring premium dairy products directly from local farms to families.',
      icon: '🌱'
    },
    {
      year: '2026',
      title: 'Quality First',
      description: 'Started with a commitment to deliver pure, fresh milk to 2000+ happy customers.',
      icon: '🥛'
    },
    {
      year: '2026',
      title: 'Growing Strong',
      description: 'Expanding our product range with three core products and building trust in the community.',
      icon: '📈'
    }
  ]

  const standards = [
    {
      title: 'Farm to Table in 24 Hours',
      description: 'All our products are delivered within 24 hours of harvest, ensuring maximum freshness and nutritional value.',
      icon: '⚡'
    },
    {
      title: 'Grass-Fed & Organic',
      description: 'We partner exclusively with farms that practice organic, grass-fed farming without hormones or antibiotics.',
      icon: '🌾'
    },
    {
      title: 'Temperature Controlled',
      description: 'From farm to your doorstep, every product is maintained at optimal temperature to preserve quality.',
      icon: '❄️'
    },
    {
      title: 'Lab Tested Quality',
      description: 'Each batch undergoes rigorous testing for purity, freshness, and nutritional content.',
      icon: '🔬'
    },
    {
      title: 'Sustainable Packaging',
      description: '100% recyclable and biodegradable packaging to minimize environmental impact.',
      icon: '📦'
    },
    {
      title: 'Fair Trade Certified',
      description: 'We ensure fair prices for farmers and ethical treatment of animals in all our partner farms.',
      icon: '🤝'
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-emerald-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-orange-500/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, -5, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="inline-block text-7xl mb-6"
            >
              🥛
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-emerald-500 to-orange-500 bg-clip-text text-transparent">
              About DHAM
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Dham Milk is an upcoming dairy brand dedicated to providing fresh, pure, and hygienic milk products for everyday needs. We focus on quality, trust, and consistent freshness—bringing customers dairy products they can rely on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-6xl mb-4 block">📖</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <div className="gradient-card h-full p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">The Beginning</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Founded in 2026, Dham Milk is an upcoming dairy brand dedicated to providing fresh, pure, and hygienic milk products for everyday needs. Currently in the early launch phase, Dham Milk focuses on quality, trust, and consistent freshness—bringing customers dairy products they can rely on.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our website is designed to introduce the brand, showcase our upcoming product range, and share our commitment to clean production and high standards. Customers can explore product information, quality details, and our vision as we expand.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="gradient-card h-full p-8 bg-gradient-to-br from-primary-50 to-orange-50">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Dham Milk aims to become a trusted name for families who value purity, nutrition, and authenticity in dairy products. We serve over 2,000 happy customers, ensuring that every product meets our rigorous standards for quality, freshness, and taste.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="text-3xl font-bold text-primary-600">2K+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="text-3xl font-bold text-orange-600">3</div>
                      <div className="text-sm text-gray-600">Products</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="text-3xl font-bold text-emerald-600">100%</div>
                      <div className="text-sm text-gray-600">Pure</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Farm Fresh Promise Section */}
      <section ref={promiseRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-orange-100/50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate={isPromiseInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-6xl mb-4 block">🌾</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800">
                Farm Fresh Promise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every product we deliver comes with our commitment to freshness, quality, and sustainability.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={scaleIn} className="text-center">
                <div className="gradient-card p-8 h-full">
                  <div className="text-6xl mb-4">🐄</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Happy Animals</h3>
                  <p className="text-gray-600">
                    Our partner farms ensure all animals are grass-fed, well-cared for, and live in natural environments.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="text-center">
                <div className="gradient-card p-8 h-full">
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">No Chemicals</h3>
                  <p className="text-gray-600">
                    Zero artificial hormones, antibiotics, or preservatives. Just pure, natural dairy goodness.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="text-center">
                <div className="gradient-card p-8 h-full">
                  <div className="text-6xl mb-4">🚜</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Local Farms</h3>
                  <p className="text-gray-600">
                    Supporting local communities and reducing carbon footprint through local sourcing.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-6xl mb-4 block">⏰</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-emerald-500 to-orange-500 hidden md:block"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="gradient-card p-6 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 hidden md:block">
                      <div className={`w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-xl ${
                        index % 2 === 0 ? '-right-6 translate-x-full' : '-left-6 -translate-x-full'
                      }`}>
                        {item.icon}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3 md:hidden">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-3xl font-bold text-primary-600">{item.year}</span>
                    </div>
                    
                    <span className="hidden md:inline-block text-4xl font-bold text-primary-600 mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section ref={standardsRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-orange-100/50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate={isStandardsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-6xl mb-4 block">✨</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800">
                Quality Standards
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our unwavering commitment to excellence ensures every product meets the highest standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {standards.map((standard, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="gradient-card p-6 text-center"
                >
                  <div className="text-5xl mb-4">{standard.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{standard.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{standard.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="text-center mt-16 bg-gradient-to-r from-primary-500 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h3>
              <p className="text-xl md:text-2xl font-semibold tracking-wide">
                Quality • Freshness • Sustainability • Community • Trust • Innovation
              </p>
            </motion.div>
          </motion.div>
        </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default About
