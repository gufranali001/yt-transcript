import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",

  description:
    "Read the Disclaimer of YT Tube Transcript to understand the limitations, transcript accuracy, third-party services, and copyright information.",

  keywords: [
    "Disclaimer",
    "YT Tube Transcript Disclaimer",
    "YouTube Transcript Disclaimer",
    "Copyright Notice",
    "Transcript Accuracy",
  ],

  alternates: {
    canonical: "https://yttubetranscript.com/disclaimer",
  },

  openGraph: {
    title: "Disclaimer | YT Tube Transcript",
    description:
      "Read the Disclaimer for using YT Tube Transcript and understand the limitations of our service.",
    url: "https://yttubetranscript.com/disclaimer",
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
    title: "Disclaimer | YT Tube Transcript",
    description:
      "Read the Disclaimer for YT Tube Transcript.",
    images: ["https://yttubetranscript.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Disclaimer
      </h1>

      <p className="text-gray-300 mb-8">
        Last updated: August 2026
      </p>

      <p className="mb-6">
        The information and services provided on{" "}
        <strong>YT Tube Transcript</strong> are offered for
        informational and educational purposes only.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Transcript Accuracy
      </h2>

      <p className="mb-6">
        We strive to provide accurate transcripts. However,
        transcript quality depends on the availability and
        accuracy of captions supplied through third-party
        services. We cannot guarantee that every transcript
        is complete, accurate, or available.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Third-Party Services
      </h2>

      <p className="mb-6">
        Our website relies on third-party APIs and services
        to retrieve transcript information. We are not
        responsible for interruptions, changes, or
        limitations of those external services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        No Professional Advice
      </h2>

      <p className="mb-6">
        The content on this website should not be considered
        legal, financial, educational, or professional
        advice. Please verify important information
        independently before relying on it.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        External Links
      </h2>

      <p className="mb-6">
        Our website may contain links to third-party
        websites. We are not responsible for the content,
        availability, or privacy practices of external
        websites.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Copyright Notice
      </h2>

      <p className="mb-6">
        All trademarks, logos, and related content belong to
        their respective owners. YT Tube Transcript does not
        claim ownership of YouTube videos or their
        transcripts.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Limitation of Liability
      </h2>

      <p className="mb-6">
        YT Tube Transcript shall not be liable for any
        direct, indirect, incidental, or consequential
        damages arising from the use of this website or its
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Contact Us
      </h2>

      <p>
        If you have any questions regarding this Disclaimer,
        please contact us at{" "}
        <strong>support.yttubetranscript@gmail.com</strong>.
      </p>

    </main>
  );
}