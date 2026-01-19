import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b-2 border-primary-200/50 rounded-b-3xl"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-3 bg-gradient-to-br from-primary-100 to-dairy-cream px-4 py-2 rounded-2xl shadow-lg"
            >
              <span className="text-4xl">🥛</span>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent tracking-tight">
                DHAM
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-5 py-2.5 group"
              >
                <motion.span
                  className={`text-base font-semibold transition-colors duration-300 ${
                    isActive(item.path) 
                      ? 'text-primary-600' 
                      : 'text-gray-700 group-hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </motion.span>
                
                {/* Animated underline */}
                <motion.span
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ 
                    width: isActive(item.path) ? '100%' : '0%',
                  }}
                />
                
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-primary-50 rounded-2xl -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="flex flex-col items-center justify-center w-6 h-5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                className="w-6 h-0.5 bg-primary-700 rounded-full mb-1.5 transition-all"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-6 h-0.5 bg-primary-700 rounded-full mb-1.5 transition-all"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                className="w-6 h-0.5 bg-primary-700 rounded-full transition-all"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="pb-6 pt-2 space-y-2 bg-gradient-to-b from-primary-50/50 to-dairy-cream/30 rounded-2xl px-4"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 px-5 font-semibold rounded-2xl transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-white hover:text-primary-600 hover:shadow-md'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
