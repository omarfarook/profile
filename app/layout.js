import { GoogleTagManager } from "@next/third-parties/google";
import { Rubik } from "next/font/google";
import Layout from "../components/layout";
import "./globals.css";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Omar Farook",
  url: "https://omarfarook.com",
  image: "https://omarfarook.com/dp2.jpg",
  jobTitle: "Senior Software Engineer",
  gender: "Male",
  nationality: "Indian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Singapore",
    addressCountry: "SG",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Anna University Chennai",
  },
  worksFor: {
    "@type": "Organization",
    name: "Flo Energy",
  },
  knowsAbout: [
    "Frontend Architecture",
    "React",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "Playwright",
    "Keycloak",
    "OAuth2",
    "RBAC",
    "Enterprise Application Development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/mohamed-omar-farook/",
    "https://github.com/omarfarook",
  ],
};

export const metadata = {
  metadataBase: new URL("https://omarfarook.com"),
  title: {
    default: "Mohamed Omar Farook | Senior Software Engineer",
    template: "%s | Mohamed Omar Farook",
  },
  description:
    "Senior Software Engineer in Singapore specializing in frontend architecture, React, Next.js, TypeScript, GraphQL, test automation, and enterprise applications.",
  openGraph: {
    title: "Mohamed Omar Farook | Senior Software Engineer",
    description:
      "Frontend architecture, React, Next.js, TypeScript, GraphQL, test automation, and enterprise application work by Mohamed Omar Farook.",
    url: "https://omarfarook.com",
    siteName: "Mohamed Omar Farook",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohamed Omar Farook - Senior Software Engineer",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Omar Farook | Senior Software Engineer",
    description:
      "Frontend architecture, React, Next.js, TypeScript, GraphQL, test automation, and enterprise application work.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className={rubik.className} suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
