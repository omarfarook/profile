'use client'

export default function SentryTestPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Sentry Test</h1>
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry client test error')
        }}
      >
        Trigger Sentry Error
      </button>
    </main>
  )
}
