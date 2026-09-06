import Link from 'next/link'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { PostMeta } from './index'
import * as styles from './style'

export default function Article({ post }) {
  // The title remains in the Markdown source; the article header renders it once.
  const content = post.content.replace(/^\s*# [^\n]+\n/, '')

  return (
    <styles.Page>
      <styles.Container>
        <Link href="/blog">← Back to Blog</Link>
        <article>
          <header>
            <h1>{post.title}</h1>
            <p>By {post.author}</p>
            <PostMeta post={post} />
          </header>
          <styles.Prose>
            <Markdown
              rehypePlugins={[[rehypeHighlight, { detect: false }]]}
              components={{
                pre: ({ children }) => <pre tabIndex={0} aria-label="Code or request-flow example">{children}</pre>,
                a: ({ href, children }) => href?.startsWith('/')
                  ? <Link href={href}>{children}</Link>
                  : <a href={href}>{children}</a>
              }}
            >{content}</Markdown>
          </styles.Prose>
        </article>
      </styles.Container>
    </styles.Page>
  )
}
