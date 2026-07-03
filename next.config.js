const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = {
  turbopack: {
    root: __dirname
  }
}

module.exports = withSentryConfig(nextConfig, {
  org: process.env.NEXT_PUBLIC_SENTRY_ORG,
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN
  }
})
