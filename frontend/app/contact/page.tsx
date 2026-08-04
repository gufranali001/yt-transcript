import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact YT Tube Transcript for support, feedback, partnership, or business inquiries. We usually respond within 24–48 hours.",

  keywords: [
    "Contact YT Tube Transcript",
    "YouTube Transcript Support",
    "Transcript Generator Contact",
    "Customer Support",
    "Business Inquiry",
  ],

  alternates: {
    canonical: "https://yttubetranscript.com/contact",
  },

  openGraph: {
    title: "Contact Us | YT Tube Transcript",
    description:
      "Need help? Contact the YT Tube Transcript team for support, feedback, or business inquiries.",
    url: "https://yttubetranscript.com/contact",
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
    title: "Contact Us | YT Tube Transcript",
    description:
      "Contact YT Tube Transcript for support and business inquiries.",
    images: ["https://yttubetranscript.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>

      <p className="text-gray-300 mb-8">
        We'd love to hear from you. If you have any questions,
        suggestions, partnership requests, or business inquiries,
        feel free to contact us.
      </p>

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Contact Information
        </h2>

        <p className="mb-4">
          <strong>Email:</strong> support.yttubetranscript@gmail.com
        </p>

        <p className="mb-4">
          <strong>Website:</strong>{" "}
          https://yttubetranscript.com
        </p>

        <p className="mb-8">
          We usually respond within 24–48 hours.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Send us a Message
        </h2>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
          />

          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </main>
  );
}