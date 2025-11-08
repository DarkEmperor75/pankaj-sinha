import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getAllPosts, Post } from '@/lib/posts'

interface WritingProps {
  posts: Post[]
}

const Writing: NextPage<WritingProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Writing | Pankaj Kumar Sinha</title>
        <meta name="description" content="Essays, reflections, and philosophical notes on intelligence, systems, and technology" />
        <meta property="og:title" content="Writing | Pankaj Kumar Sinha" />
        <meta property="og:description" content="Essays, reflections, and philosophical notes" />
      </Head>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-4">
              Writing
            </h1>
            <p className="text-lg text-warm-600 dark:text-warm-400 font-sans mb-12">
              Essays, reflections, and philosophical notes on intelligence, systems, and technology.
            </p>

            {posts.length === 0 ? (
              <div className="text-warm-600 dark:text-warm-400 font-sans">
                <p>No posts yet. Check back soon!</p>
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="space-y-8"
              >
                {posts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4 }}
                    className="border-b border-warm-200 dark:border-warm-800 pb-8 last:border-0"
                  >
                    <Link href={`/writing/${post.slug}`}>
                      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-3 hover:text-warm-700 dark:hover:text-warm-300 transition-colors">
                        {post.meta.title}
                      </h2>
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-warm-500 dark:text-warm-500 font-sans">
                      <time dateTime={post.meta.date}>
                        {new Date(post.meta.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      {post.meta.category && (
                        <span className="px-2 py-1 rounded bg-warm-100 dark:bg-warm-900 text-warm-700 dark:text-warm-300">
                          {post.meta.category}
                        </span>
                      )}
                    </div>
                    <p className="text-warm-600 dark:text-warm-400 font-sans leading-relaxed mb-4">
                      {post.meta.excerpt}
                    </p>
                    <Link
                      href={`/writing/${post.slug}`}
                      className="inline-block text-warm-700 dark:text-warm-300 hover:text-warm-900 dark:hover:text-warm-100 font-sans font-medium transition-colors group"
                    >
                      Read more{' '}
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default Writing

