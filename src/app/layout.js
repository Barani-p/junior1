import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "@/components/sections/Hero/Hero.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://junior1-ioi5.vercel.app"),
  title: "Jenny | UI UX Product Designer",
  description: "Jenny crafts modern UI/UX designs for web and mobile apps, focused on user experience.",
  keywords: [
    "UI UX Designer",
    "Product Designer",
    "Web Design",
    "App Design",
    "User Experience",
    "Portfolio",
    "Jenny Designer",
    "UI Design",
    "UX Research",
    "Dashboard Design",
  ],
  authors: [{ name: "Jenny", url: "https://junior1-ioi5.vercel.app" }],
  creator: "Jenny",
  publisher: "Jenny",
  alternates: {
    canonical: "https://junior1-ioi5.vercel.app",
  },
  openGraph: {
    title: "Jenny | UI UX Product Designer",
    description: "Jenny crafts modern UI/UX designs for web and mobile apps, focused on user experience.",
    url: "https://junior1-ioi5.vercel.app",
    siteName: "Jenny – UI UX Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jenny – UI UX Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenny | UI UX Product Designer",
    description: "Jenny crafts modern UI/UX designs for web and mobile apps, focused on user experience.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="2caHwKZ6YA3B1Z79eRZTB_VR9ZVUoHjMI6AWmsILeyc" />

        {/* Preload the LCP hero image so it paints before JS hydrates */}
        <link
          rel="preload"
          as="image"
          href="/images/girl.png"
          fetchPriority="high"
        />

        {/* Preload the primary font weight to avoid FOUT */}
        <link
          rel="preload"
          as="font"
          type="font/woff"
          href="https://fonts.cdnfonts.com/s/67775/LufgaRegular.woff"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Only load Urbanist — the font actually used in CSS (removed Figtree & IBM Plex Sans) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jenny",
              jobTitle: "UI UX Designer",
              description: "Jenny crafts modern UI/UX designs for web and mobile apps, focused on user experience and visual excellence.",
              url: "https://junior1-ioi5.vercel.app/",
              image: "https://junior1-ioi5.vercel.app/images/girl.png",
              email: "jaycrea36@gmail.com",
              knowsAbout: ["UI Design", "UX Design", "Product Design", "Web Design", "App Design", "Wireframing", "User Research"],
              sameAs: [
                "https://www.instagram.com/",
                "https://www.facebook.com/",
                "https://www.linkedin.com/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
