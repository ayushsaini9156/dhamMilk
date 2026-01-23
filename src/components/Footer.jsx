import { Link } from 'react-router-dom'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/dham_milk?igsh=MW5haTE4cW42NG1xYw==' },
  ]

  return (
    <footer className="bg-gradient-to-b from-cream-100 to-beige-50 text-beige-900 border-t border-beige-200">
      {/* Newsletter Section */}
      <div className="bg-primary-50/50 border-b border-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-beige-900 mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-beige-600 mb-6">
              Get the latest updates on our products and special offers
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white text-beige-900 border border-beige-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent shadow-sm"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap shadow-soft hover:shadow-card"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🥛</span>
              <h3 className="text-xl font-display font-bold text-primary-600">DHAM</h3>
            </div>
            <p className="text-beige-600 text-sm mb-4 leading-relaxed">
              An upcoming dairy brand dedicated to providing fresh, pure, and hygienic milk products for everyday needs. Quality, trust, and consistent freshness you can rely on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-beige-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-beige-600 hover:text-primary-600 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-beige-900 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-beige-600">
              <li className="hover:text-primary-600 transition-colors duration-200">📧 dhammilkindustries@gmail.com</li>
              <li className="hover:text-primary-600 transition-colors duration-200">📞 Contact via email</li>
              <li className="hover:text-primary-600 transition-colors duration-200">📍 c/o Brijpalsingh, Agwan Khera, Sarsawa, Saharanpur (247232)</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-beige-900 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white border border-beige-200 hover:bg-primary-500 hover:border-primary-500 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-soft group"
                  aria-label={social.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-beige-200 text-center text-sm text-beige-500">
          <p>&copy; {new Date().getFullYear()} DHAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
