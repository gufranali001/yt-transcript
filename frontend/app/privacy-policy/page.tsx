import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",

  description:
    "Read the Privacy Policy of YT Tube Transcript to understand how we collect, use, and protect your information while using our free YouTube Transcript Generator.",

  keywords: [
    "Privacy Policy",
    "YT Tube Transcript Privacy",
    "YouTube Transcript Generator Privacy",
    "Data Protection",
    "Cookies Policy",
  ],

  alternates: {
    canonical: "https://yttubetranscript.com/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | YT Tube Transcript",
    description:
      "Learn how YT Tube Transcript collects, uses, and protects your information.",
    url: "https://yttubetranscript.com/privacy-policy",
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
    title: "Privacy Policy | YT Tube Transcript",
    description:
      "Read the Privacy Policy of YT Tube Transcript.",
    images: ["https://yttubetranscript.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <p className="mb-6 text-gray-300">
        Last updated: August 2026
      </p>

      <p className="mb-6">
        At <strong>YT Tube Transcript</strong>, we value your privacy.
        This Privacy Policy explains what information we collect,
        how we use it, and how we protect it when you use our website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Information We Collect
      </h2>

      <p className="mb-6">
        We do not require you to create an account.
        We may collect basic technical information such as browser type,
        device information, IP address, and anonymous usage statistics
        to improve our services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Cookies
      </h2>

      <p className="mb-6">
        Our website may use cookies to improve user experience
        and analyze website performance.
        You can disable cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Third-Party Services
      </h2>

      <p className="mb-6">
        We may use trusted third-party services such as Google Analytics
        and Google AdSense.
        These services may collect anonymous information according
        to their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Data Security
      </h2>

      <p className="mb-6">
        We take reasonable measures to protect your information.
        However, no method of transmission over the Internet
        is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Changes to this Policy
      </h2>

      <p className="mb-6">
        We may update this Privacy Policy from time to time.
        Any changes will be posted on this page
        with a revised update date.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Contact Us
      </h2>

      <p>
        If you have any questions regarding this Privacy Policy,
        please contact us through our Contact page
        or email us at{" "}
        <strong>support.yttubetranscript@gmail.com</strong>.
      </p>
    </main>
  );
}