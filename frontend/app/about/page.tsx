import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about YT Tube Transcript, the free YouTube Transcript Generator. Generate, copy and download YouTube transcripts in TXT, SRT and VTT formats.",

  keywords: [
    "About YT Tube Transcript",
    "YouTube Transcript Generator",
    "Free Transcript Tool",
    "Download YouTube Transcript",
    "YouTube Subtitle Generator",
  ],

  alternates: {
    canonical: "https://yttubetranscript.com/about",
  },

  openGraph: {
    title: "About Us | YT Tube Transcript",
    description:
      "Learn more about YT Tube Transcript and our mission to provide a free and fast YouTube Transcript Generator.",
    url: "https://yttubetranscript.com/about",
    siteName: "YT Tube Transcript",
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
    title: "About Us | YT Tube Transcript",
    description:
      "Learn more about YT Tube Transcript and our free transcript generator.",
    images: ["https://yttubetranscript.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <p className="text-gray-300 mb-8">
        Welcome to <strong>YT Tube Transcript</strong>, your free and simple
        tool for generating YouTube video transcripts in seconds.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Mission
      </h2>

      <p className="mb-6">
        Our goal is to make video content more accessible by helping users
        quickly extract transcripts from YouTube videos. Whether you're a
        student, content creator, researcher, marketer, or developer, our
        platform is designed to save time and improve productivity.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What We Offer
      </h2>

      <ul className="list-disc pl-6 space-y-3 mb-8">
        <li>Fast YouTube transcript generation</li>
        <li>Copy transcripts with one click</li>
        <li>Download transcripts in TXT, SRT and VTT formats</li>
        <li>Supports 100+ languages</li>
        <li>Simple and user-friendly interface</li>
        <li>Free access with no registration required</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Vision
      </h2>

      <p className="mb-6">
        We continuously improve YT Tube Transcript by adding new features,
        improving transcript accuracy, and delivering the best experience for
        users worldwide.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Contact
      </h2>

      <p>
        Have questions or suggestions? We'd love to hear from you. Visit our
        Contact page or email us at{" "}
        <strong>support.yttubetranscript@gmail.com</strong>.
      </p>
    </main>
  );
}