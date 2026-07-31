const siteUrl = 'https://omarfarook.com'

export default function sitemap() {
  return [
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
}
