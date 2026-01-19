import { useCallback } from 'react'

/**
 * Custom hook for ultra-smooth scrolling with requestAnimationFrame
 * Performance-optimized for no-jank scrolling experience
 */
const useSmoothScroll = () => {
  // Smooth scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  // Smooth scroll to specific element by ID
  const scrollToElement = useCallback((elementId, offset = 100) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }, [])

  // Smooth scroll with custom animation using requestAnimationFrame
  const smoothScrollTo = useCallback((targetPosition, duration = 1000) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function for smooth animation (ease-in-out)
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

      window.scrollTo(0, startPosition + distance * easeInOutCubic)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  // Handle anchor link clicks with smooth scroll
  const handleAnchorClick = useCallback((e, targetId, offset = 100) => {
    e.preventDefault()
    scrollToElement(targetId, offset)
  }, [scrollToElement])

  return {
    scrollToTop,
    scrollToElement,
    smoothScrollTo,
    handleAnchorClick
  }
}

export default useSmoothScroll
