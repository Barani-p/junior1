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
  title: "Portfolio-Junior",
  description: "I am a web developer showcasing my projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect so the browser opens the socket early */}
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        {/* Single font load with display=swap to prevent invisible text */}
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/lufga?display=swap"
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
              url: "https://junior1-ten.vercel.app/",
            }),
          }}
        />
      </body>
    </html>
  );
}
