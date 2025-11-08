import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getAllPosts, getPostBySlug, Post } from '@/lib/posts'

interface WritingPostProps {
  post: Post
  mdxSource: MDXRemoteSerializeResult
}

const WritingPost: NextPage<WritingPostProps> = ({ post, mdxSource }) => {
  return (
    <>
      <Head>
        <title>{post.meta.title} | Pankaj Kumar Sinha</title>
        <meta name="description" content={post.meta.excerpt} />
        <meta property="og:title" content={post.meta.title} />
        <meta property="og:description" content={post.meta.excerpt} />
      </Head>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/writing"
              className="inline-block text-warm-600 dark:text-warm-400 hover:text-warm-900 dark:hover:text-warm-100 font-sans mb-8 transition-colors"
            >
              ← Back to Writing
            </Link>

            <article>
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-4">
                  {post.meta.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-warm-500 dark:text-warm-500 font-sans mb-4">
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
                {post.meta.tags && post.meta.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-warm-100 dark:bg-warm-900 text-warm-600 dark:text-warm-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <div className="prose prose-warm dark:prose-invert max-w-none font-sans">
                <MDXRemote {...mdxSource} />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getPostBySlug(slug)
  const mdxSource = await serialize(post.content)

  return {
    props: {
      post,
      mdxSource,
    },
  }
}

export default WritingPost

