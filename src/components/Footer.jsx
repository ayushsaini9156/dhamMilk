import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com', color: 'hover:text-red-400' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com', color: 'hover:text-blue-500' },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-primary-900 text-white py-12 mt-12">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-orange-400 to-accent-400"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-4xl">🥛</span>
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-300 via-accent-300 to-orange-300 bg-clip-text text-transparent">
                DHAM
              </h3>
            </motion.div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Premium quality dairy products showcased for your awareness. Experience the taste of purity.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-emerald-600 rounded-full text-sm font-semibold">
                ✓ 100% Organic
              </span>
            </motion.div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-primary-300 transition-all inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="inline-block"
                    >
                      →
                    </motion.span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-300">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2 transition-all"
              >
                <span className="text-xl">📧</span>
                <a href="mailto:info@dham.com" className="hover:text-primary-300 transition-colors">
                  info@dham.com
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2 transition-all"
              >
                <span className="text-xl">📞</span>
                <a href="tel:+15551234567" className="hover:text-primary-300 transition-colors">
                  +1 (555) 123-4567
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2 transition-all"
              >
                <span className="text-xl">📍</span>
                <span>123 Dairy Street,<br />Fresh City, FC 12345</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2 transition-all"
              >
                <span className="text-xl">🕒</span>
                <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</span>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-300">Follow Us</h3>
            <div className="flex gap-3 mb-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`text-3xl ${social.color} transition-all p-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-gray-300">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-lg font-semibold text-sm hover:shadow-lg transition-shadow"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} <span className="text-primary-300 font-semibold">DHAM</span>. All rights reserved. Made with 💚 for milk lovers.
            </p>
            <div className="flex gap-6">
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="hover:text-primary-300 transition-all"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="hover:text-primary-300 transition-all"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="hover:text-primary-300 transition-all"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
