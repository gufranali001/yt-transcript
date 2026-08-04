import type { Metadata } from "next";
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
    canonical: "https://yttubetranscript.com",
  },

  openGraph: {
    title: "YT Tube Transcript - Free YouTube Transcript Generator",
    description:
      "Generate YouTube transcripts instantly. Download TXT, SRT and VTT files free.",
    url: "https://yttubetranscript.com",
    siteName: "YT Tube Transcript",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YT Tube Transcript",
    description:
      "Generate YouTube transcripts instantly for free.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
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
        {children}
      </body>
    </html>
  );
}