"use client"

import { useEffect, useRef, useState } from "react"

type FadeInSectionProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  threshold?: number
  once?: boolean
}

export default function FadeInSection({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
  once = true,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once && domRef.current) {
              observer.unobserve(domRef.current)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold }
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease-out, transform 0.6s ease-out ${delay}s`,
  }

  return (
    <div
      ref={domRef}
      style={fadeInStyle}
      className={className}
    >
      {children}
    </div>
  )
}