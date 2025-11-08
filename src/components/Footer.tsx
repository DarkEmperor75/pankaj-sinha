import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '/research', label: 'Research' },
    { href: '/writing', label: 'Writing' },
    { href: '/ventures', label: 'Ventures' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub', icon: 'github' },
    { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
  ]

  return (
    <footer className="border-t border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-warm-900 dark:text-warm-100 mb-4">
              Pankaj Kumar Sinha
            </h3>
            <p className="text-sm text-warm-600 dark:text-warm-400 font-sans">
              Creative technologist, optimization researcher, and system architect.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-warm-900 dark:text-warm-100 mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-600 dark:text-warm-400 hover:text-warm-900 dark:hover:text-warm-100 transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-warm-900 dark:text-warm-100 mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-600 dark:text-warm-400 hover:text-warm-900 dark:hover:text-warm-100 transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-warm-200 dark:border-warm-800">
          <p className="text-center text-sm text-warm-500 dark:text-warm-500 font-sans">
            &copy; {currentYear} Pankaj Kumar Sinha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

