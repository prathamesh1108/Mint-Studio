"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when the route changes
    const scrollAreaViewport = document.querySelector('[data-radix-scroll-area-viewport]');
    if (scrollAreaViewport) {
      scrollAreaViewport.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname])

  return null
}

