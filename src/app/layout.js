import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mxrlin.dev"),
  title: "Marlin Eichelmann",
  description: "Portfolio of Marlin Eichelmann (Mxrlin), Web Developer & Full Stack Engineer.",
  keywords: [
    "Marlin Eichelmann",
    "Mxrlin",
    "Portfolio",
    "Java", 
    "Spigot",
    "Minecraft Developer",
    "Web Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "JavaScript"
  ],
  authors: [{ name: "Marlin Eichelmann", url: "https://mxrlin.dev" }],
  category: "Technology",
  openGraph: {
    title: "Marlin Eichelmann Portfolio",
    description: "Showcasing my work as a web developer and software engineer.",
    url: "https://mxrlin.dev",
    siteName: "mxrlin.dev",
    locale: "en_EN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Marlin Eichelmann Portfolio",
    description: "Developer Portfolio of Marlin Eichelmann (Mxrlin)",
  },
  alternates: {
    canonical: "https://mxrlin.dev",
  },
  other: {
    ldJson: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Marlin Eichelmann",
      url: "https://mxrlin.dev",
      jobTitle: "Software Engineer",
      sameAs: [
        "https://github.com/DeveloperMxrlin",
        "https://www.linkedin.com/in/marlin-eichelmann-9b8b62379",
      ],
    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <head>

        <Script
          id="ld-person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.other.ldJson) }}
        />

        <link rel="icon" href="/favicon.ico" />

        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#18181b" />
      </head>

      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
