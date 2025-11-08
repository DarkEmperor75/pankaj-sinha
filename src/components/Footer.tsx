const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Pankaj Kumar Sinha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

