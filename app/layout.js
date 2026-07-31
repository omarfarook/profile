import { GoogleTagManager } from '@next/third-parties/google'
import Layout from '../components/layout'
import './globals.css'

export const metadata = {
  title: {
    default: 'Mohamed Omar Farook | Senior Software Engineer',
    template: '%s | Mohamed Omar Farook'
  },
  description: 'Senior Software Engineer in Singapore specializing in frontend architecture, React, Next.js, TypeScript, GraphQL, test automation, and enterprise applications.',
  openGraph: {
    title: 'Mohamed Omar Farook | Senior Software Engineer',
    description: 'Frontend architecture, React, Next.js, TypeScript, GraphQL, test automation, and enterprise application work by Mohamed Omar Farook.',
    url: 'https://omarfarook.com',
    siteName: 'Mohamed Omar Farook',
    type: 'profile'
  },
  twitter: {
    card: 'summary',
    title: 'Mohamed Omar Farook | Senior Software Engineer',
    description: 'Frontend architecture, React, Next.js, TypeScript, GraphQL, test automation, and enterprise application work.'
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no'
}

const gtmId = process.env.NEXT_PUBLIC_GTM_ID

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
