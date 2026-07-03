'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <main style={{ padding: 32 }}>
      <h1>Something went wrong</h1>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  )
}
