import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BackgroundBlobs from './BackgroundBlobs'
import ScrollToTop from './ScrollToTop'
import PageLoader from './PageLoader'
import useSmoothScroll from '../hooks/useSmoothScroll'

const Layout = () => {
  const location = useLocation()
  const { scrollToTop } = useSmoothScroll()

  // Smooth scroll to top on route change
  useEffect(() => {
    // Use requestAnimationFrame for smooth transition
    requestAnimationFrame(() => {
      scrollToTop()
    })
  }, [location.pathname, scrollToTop])
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-dairy-milk via-primary-50 to-dairy-lightCream relative overflow-hidden">
      {/* Page Loading Indicator */}
      <PageLoader />
      
      {/* Animated Background Elements */}
      <BackgroundBlobs />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default Layout
