import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import useSmoothScroll from '../hooks/useSmoothScroll'

const Layout = () => {
  const location = useLocation()
  const { scrollToTop } = useSmoothScroll()

  // Smooth scroll to top on route change
  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToTop()
    })
  }, [location.pathname, scrollToTop])
  
  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      {/* Main Content */}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default Layout
