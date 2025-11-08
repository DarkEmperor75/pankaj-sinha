import { motion } from 'framer-motion'

const CurrentFocus = () => {
  const currentFocus = {
    title: 'Current Focus',
    items: [
      'Building systems that bridge research and practice',
      'Exploring the intersection of AI and consciousness',
      'Optimizing for both performance and human connection',
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950"
    >
      <h3 className="text-lg font-serif font-semibold text-warm-900 dark:text-warm-100 mb-4">
        {currentFocus.title}
      </h3>
      <ul className="space-y-2">
        {currentFocus.items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="text-sm text-warm-600 dark:text-warm-400 font-sans flex items-start"
          >
            <span className="mr-2 text-warm-500 dark:text-warm-500">•</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default CurrentFocus

