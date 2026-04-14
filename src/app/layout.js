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
  title: "Portfolio-Junior",
  description: "I am a web developer showcasing my projects, skills, and experience.",
  alternates: {
    canonical: "https://junior1-ioi5.vercel.app",
  },
  openGraph: {
    title: "Portfolio-Junior",
    description: "I am a web developer showcasing my projects, skills, and experience.",
    url: "https://junior1-ioi5.vercel.app",
    siteName: "Portfolio-Junior",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio-Junior",
    description: "I am a web developer showcasing my projects, skills, and experience.",
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
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&amp;family=Urbanist:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
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
              url: "https://junior1-ioi5.vercel.app/",
            }),
          }}
        />
      </body>
    </html>
  );
}
