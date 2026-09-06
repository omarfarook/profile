import { getPostSummaries } from '../lib/blog'

const siteUrl = 'https://omarfarook.com'

const caseStudySlugs = [
  'etrm-businesspro-frontend-foundations',
  'react-modernization-enterprise-banking'
]

export default function sitemap() {
  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${siteUrl}/aboutme`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${siteUrl}/mycv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${siteUrl}/contactme`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ]

  return [
    ...routes,
    { url: `${siteUrl}/blog`, changeFrequency: 'monthly', priority: 0.8 },
    ...getPostSummaries().map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: 'monthly',
      priority: 0.75
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${siteUrl}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75
    }))
  ]
}
