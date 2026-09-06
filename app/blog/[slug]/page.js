import { notFound } from 'next/navigation'
import Article from '../../../components/blog/article'
import { getPost, getPostSummaries } from '../../../lib/blog'

export const dynamicParams = false

export function generateStaticParams() {
  return getPostSummaries().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: ['/opengraph-image']
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/opengraph-image']
    }
  }
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  return <Article post={post} />
}
