import Blog from '../../components/blog'
import { getPostSummaries } from '../../lib/blog'

export const metadata = {
  title: 'Blog',
  description: 'Articles on frontend architecture, testing, and engineering decisions by Mohamed Omar Farook.',
  alternates: { canonical: '/blog' }
}

export default function BlogPage() {
  return <Blog posts={getPostSummaries()} />
}
