import Link from 'next/link'
import * as styles from './style'

export function PostMeta({ post }) {
  const date = new Intl.DateTimeFormat('en', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  }).format(new Date(`${post.date}T00:00:00Z`))

  return <styles.PostMeta><time dateTime={post.date}>{date}</time> · {post.readingMinutes} min read</styles.PostMeta>
}

export default function Blog({ posts }) {
  return (
    <styles.Page>
      <styles.Container>
        <h1>Blog</h1>
        <p>Notes on frontend architecture, testing, and the decisions behind the code.</p>
        {posts.map((post) => (
          <styles.Preview key={post.slug}>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <PostMeta post={post} />
            <p>{post.description}</p>
          </styles.Preview>
        ))}
      </styles.Container>
    </styles.Page>
  )
}
