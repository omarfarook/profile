import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const directory = path.join(process.cwd(), 'blogs')

export function getPosts() {
  return fs.readdirSync(directory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(directory, file), 'utf8'))
      for (const field of ['title', 'slug', 'description', 'date', 'author']) {
        if (typeof data[field] !== 'string' || !data[field].trim()) {
          throw new Error(`Missing blog ${field} in ${file}`)
        }
      }
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug) ||
          !/^\d{4}-\d{2}-\d{2}$/.test(data.date) || Number.isNaN(Date.parse(data.date))) {
        throw new Error(`Invalid blog slug or date in ${file}`)
      }
      return {
        ...data,
        content,
        readingMinutes: Math.max(1, Math.ceil(content.split(/\s+/).length / 220))
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug) {
  return getPosts().find((post) => post.slug === slug)
}

export function getPostSummaries() {
  return getPosts().map(({ content, ...post }) => post)
}
