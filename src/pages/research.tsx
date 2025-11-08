import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'

interface ResearchItem {
  title: string
  description: string
  year: string
  tags: string[]
  link?: string
}

const researchItems: ResearchItem[] = [
  {
    title: 'Optimization Algorithms for Large-Scale Systems',
    description: 'Novel approaches to solving optimization problems in distributed and high-dimensional spaces, with applications to resource allocation and system design.',
    year: '2023',
    tags: ['Optimization', 'Algorithms', 'Distributed Systems'],
  },
  {
    title: 'Machine Learning for Predictive Modeling',
    description: 'Exploring the intersection of traditional optimization techniques and modern machine learning approaches for improved predictive accuracy.',
    year: '2022',
    tags: ['Machine Learning', 'Predictive Modeling', 'Statistics'],
  },
  {
    title: 'Systems Architecture for Scalable Applications',
    description: 'Design patterns and architectural principles for building systems that maintain performance and reliability at scale.',
    year: '2021',
    tags: ['Systems Architecture', 'Scalability', 'Performance'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Research: NextPage = () => {
  return (
    <>
      <Head>
        <title>Research | Pankaj Kumar Sinha</title>
        <meta name="description" content="Research papers, publications, and academic interests in optimization, systems, and machine learning" />
        <meta property="og:title" content="Research | Pankaj Kumar Sinha" />
        <meta property="og:description" content="Research papers, publications, and academic interests" />
      </Head>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-4"
            >
              Research
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-warm-600 dark:text-warm-400 font-sans mb-12"
            >
              Academic papers, publications, and research interests at the intersection of optimization, 
              systems thinking, and artificial intelligence.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8"
            >
              {researchItems.map((item, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 hover:bg-warm-100 dark:hover:bg-warm-900 transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <h2 className="text-2xl font-serif font-semibold text-warm-900 dark:text-warm-100">
                      {item.title}
                    </h2>
                    <span className="text-sm text-warm-500 dark:text-warm-500 font-sans whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-warm-600 dark:text-warm-400 font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-warm-100 dark:bg-warm-900 text-warm-600 dark:text-warm-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Research

