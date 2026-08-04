import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yttubetranscript.com/#organization",
      name: "YT Tube Transcript",
      url: "https://yttubetranscript.com",
      logo: "https://yttubetranscript.com/favicon.ico",
    },
    {
      "@type": "WebSite",
      "@id": "https://yttubetranscript.com/#website",
      url: "https://yttubetranscript.com",
      name: "YT Tube Transcript",
      description:
        "Generate YouTube transcripts instantly. Download transcripts in TXT, SRT and VTT format.",
      publisher: {
        "@id": "https://yttubetranscript.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://yttubetranscript.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yttubetranscript.com"),

  verification: {
    google: "vprGQe8hL3GnLFPzVPbq0yRglPF2EYFOV0rqi-dacAo",
  },

  title: {
    default: "YT Tube Transcript - Free YouTube Transcript Generator",
    template: "%s | YT Tube Transcript",
  },

  description:
    "Generate YouTube transcripts instantly. Download transcript as TXT, SRT or VTT. Supports 100+ languages. Free YouTube Transcript Generator.",

  keywords: [
    "YouTube Transcript",
    "YT Transcript",
    "YouTube Transcript Generator",
    "Free YouTube Transcript",
    "Download YouTube Transcript",
    "YouTube Subtitle Downloader",
    "Transcript Generator",
    "YouTube Captions",
    "Video Transcript",
    "Transcript Tool",
  ],

  authors: [
    {
      name: "YT Tube Transcript",
      url: "https://yttubetranscript.com",
    },
  ],

  creator: "YT Tube Transcript",
  publisher: "YT Tube Transcript",

  alternates: {
    canonical: "https://yttubetranscript.com/",
  },

  openGraph: {
    title: "YT Tube Transcript - Free YouTube Transcript Generator",
    description:
      "Generate YouTube transcripts instantly. Download TXT, SRT and VTT files for free.",
    url: "https://yttubetranscript.com/",
    siteName: "YT Tube Transcript",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://yttubetranscript.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "YT Tube Transcript",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YT Tube Transcript - Free YouTube Transcript Generator",
    description:
      "Generate YouTube transcripts instantly. Download TXT, SRT and VTT files for free.",
    images: [
      "https://yttubetranscript.com/og-image.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}

      </body>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7W1GVMV0Z1"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7W1GVMV0Z1');
        `}
      </Script>

    </html>
  );
}