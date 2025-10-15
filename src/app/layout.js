import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Marlin Eichelmann",
  description: "Portfolio of Marlin Eichelmann (Mxrlin)",
  authors: [{ name: "Marlin Eichelmann" }],
  keywords: ["Portfolio", "Frontend Developer", "React", "Next.js", "UI/UX", "Web Development", "Marlin Eichelmann"],
  openGraph: {
    title: "Marlin Eichelmann | Portfolio",
    description: "Portfolio of Marlin Eichelmann (Mxrlin)",
    url: "https://mxrlin.dev",
    siteName: "Marlin Eichelmann Portfolio",
    locale: "en_EN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Marlin Eichelmann | Portfolio",
    description: "Portfolio of Marlin Eichelmann (Mxrlin)",
    creator: "@Mxrlin"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <head>
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
