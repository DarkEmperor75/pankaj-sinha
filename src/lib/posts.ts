import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'writing')

export interface PostMeta {
  title: string
  date: string
  excerpt: string
  category?: string
  tags?: string[]
}

export interface Post {
  slug: string
  meta: PostMeta
  content: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    meta: {
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      category: data.category,
      tags: data.tags || [],
    },
    content,
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => {
      if (a.meta.date < b.meta.date) {
        return 1
      } else {
        return -1
      }
    })
  return posts
}

