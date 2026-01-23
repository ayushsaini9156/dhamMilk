import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import Button from '../components/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success') // 'success' or 'error'

  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const showSuccessToast = (message) => {
    setToastType('success')
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 5000)
  }

  const showErrorToast = (message) => {
    setToastType('error')
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      showErrorToast('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    try {
      // Using Formspree (replace with your Formspree endpoint)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        showSuccessToast('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        showErrorToast('Oops! Something went wrong. Please try again.')
      }
    } catch (error) {
      showErrorToast('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen py-12 bg-gradient-to-br from-white via-orange-50 to-emerald-50">
        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
            initial={{ opacity: 0, y: -100, x: '-50%' }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className={`px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 ${
              toastType === 'success' 
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white' 
                : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
            }`}>
              <span className="text-2xl">
                {toastType === 'success' ? '✓' : '✕'}
              </span>
              <span className="font-semibold">{toastMessage}</span>
            </div>
          </motion.div>
          )}
        </AnimatePresence>

        <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="inline-block text-7xl mb-6"
          >
            📬
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="gradient-card"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-100' 
                      : 'border-primary-200 focus:border-primary-500 focus:ring-primary-100'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Email *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-100' 
                      : 'border-primary-200 focus:border-primary-500 focus:ring-primary-100'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-100' 
                      : 'border-primary-200 focus:border-primary-500 focus:ring-primary-100'
                  }`}
                  placeholder="Tell us how we can help you..."
                ></motion.textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  '📧 Send Message'
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="gradient-card"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    c/o Brijpalsingh<br />
                    Agwan Khera, Sarsawa<br />
                    Saharanpur (247232), Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="gradient-card"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Call Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Please contact us via email<br />
                    We'll respond as soon as possible
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="gradient-card"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Email Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    General: <a href="mailto:dhammilkindustries@gmail.com" className="text-primary-600 hover:underline">dhammilkindustries@gmail.com</a><br />
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="gradient-card"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🕒</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Business Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-700">Monday - Friday:</span> 8:00 AM - 6:00 PM<br />
                    <span className="font-semibold text-gray-700">Saturday:</span> 9:00 AM - 4:00 PM<br />
                    <span className="font-semibold text-gray-700">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Find Us on the Map</h2>
          <div className="gradient-card p-0 overflow-hidden">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-emerald-100 to-orange-100 flex items-center justify-center">
              <div className="text-center space-y-4">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="text-8xl"
                >
                  📍
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600 text-lg">Agwan Khera, Sarsawa, Saharanpur (247232)</p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 btn-primary"
                  >
                    🗺️ Open in Google Maps
                  </motion.a>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-10 left-10 w-32 h-32 bg-primary-300 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center bg-gradient-to-r from-primary-500 to-emerald-600 rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg mb-6">Our customer support team is available 24/7 to help you</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+15551234567"
              className="bg-white text-primary-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
              📞 Call Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:support@dham.com"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-all"
            >
              📧 Email Support
            </motion.a>
          </div>
        </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Contact
