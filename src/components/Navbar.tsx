import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/writing', label: 'Writing' },
    { href: '/ventures', label: 'Ventures' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Pankaj Kumar Sinha
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-gray-900 dark:hover:text-gray-100 transition-colors ${
                  router.pathname === link.href
                    ? 'text-gray-900 dark:text-gray-100 font-medium'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

