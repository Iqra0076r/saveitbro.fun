import { Link, useLocation } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'How It Works', path: '/how-it-works' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-pink-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-pink rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
              <Download className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-pink bg-clip-text text-transparent">
              SaveItBro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 relative ${
                  isActive(link.path)
                    ? 'text-pink-600'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-pink"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/download"
              className="btn btn-primary text-sm"
            >
              <Download className="w-4 h-4" />
              Download Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-pink-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-pink-200/30 pt-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-pink-100 text-pink-700'
                      : 'text-gray-600 hover:bg-pink-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/download"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full text-sm justify-center"
              >
                <Download className="w-4 h-4" />
                Download Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
