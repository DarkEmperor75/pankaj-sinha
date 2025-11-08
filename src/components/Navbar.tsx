import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/writing', label: 'Writing' },
    { href: '/ventures', label: 'Ventures' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-warm-200 dark:border-warm-800 bg-warm-50/80 dark:bg-warm-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-serif font-semibold text-warm-900 dark:text-warm-100 hover:text-warm-700 dark:hover:text-warm-300 transition-colors"
          >
            Pankaj Kumar Sinha
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors relative ${
                  router.pathname === link.href
                    ? 'text-warm-900 dark:text-warm-100'
                    : 'text-warm-600 dark:text-warm-400 hover:text-warm-900 dark:hover:text-warm-100'
                }`}
              >
                {link.label}
                {router.pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-warm-700 dark:bg-warm-300 rounded-full" />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-warm-200 dark:hover:bg-warm-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-warm-700 dark:text-warm-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-warm-700 dark:text-warm-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-200 dark:border-warm-800">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-sans text-base font-medium transition-colors ${
                    router.pathname === link.href
                      ? 'text-warm-900 dark:text-warm-100'
                      : 'text-warm-600 dark:text-warm-400 hover:text-warm-900 dark:hover:text-warm-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

