"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="py-6 bg-[#FEF3E2] sticky top-0 z-50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Mint Studio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-neutral-500 transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-neutral-500 transition-colors">
              Portfolio
            </Link>
            <Link href="/services" className="hover:text-neutral-500 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-neutral-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
            <Link href="/" className="hover:text-neutral-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-neutral-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="hover:text-neutral-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-neutral-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

