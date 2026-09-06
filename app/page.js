import Homes from '../components/home'
import { getPostSummaries } from '../lib/blog'

export const metadata = {
  title: 'Senior Software Engineer',
  description: 'Mohamed Omar Farook is a Senior Software Engineer in Singapore focused on frontend architecture, React, Next.js, TypeScript, GraphQL, and enterprise applications.'
}

export default function HomePage() {
  return (
    <div className="home">
      <Homes latestPost={getPostSummaries()[0]} />
    </div>
  )
}
