import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",

  description:
    "Read the Terms and Conditions for using YT Tube Transcript, the free YouTube Transcript Generator.",

  keywords: [
    "Terms and Conditions",
    "YT Tube Transcript Terms",
    "YouTube Transcript Generator Terms",
    "Website Terms",
  ],

  alternates: {
    canonical: "https://yttubetranscript.com/terms-and-conditions",
  },

  openGraph: {
    title: "Terms and Conditions | YT Tube Transcript",
    description:
      "Read the Terms and Conditions for using YT Tube Transcript.",
    url: "https://yttubetranscript.com/terms-and-conditions",
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
    title: "Terms and Conditions | YT Tube Transcript",
    description:
      "Read the Terms and Conditions for using YT Tube Transcript.",
    images: ["https://yttubetranscript.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditions() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Terms & Conditions
      </h1>

      <p className="mb-6 text-gray-300">
        Last updated: August 2026
      </p>

      <p className="mb-6">
        By using <strong>YT Tube Transcript</strong>, you agree to these
        Terms and Conditions. If you do not agree with these terms,
        please do not use our website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Website Usage
      </h2>

      <p className="mb-6">
        This website is provided for personal and informational use only.
        You agree not to misuse, copy, disrupt, or attempt to damage
        our services or interfere with other users.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Intellectual Property
      </h2>

      <p className="mb-6">
        All content, branding, logos, design, and website functionality
        are the property of YT Tube Transcript unless otherwise stated.
        Unauthorized reproduction or distribution is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Third-Party Services
      </h2>

      <p className="mb-6">
        Our website may use third-party services including APIs,
        Google Analytics, and Google AdSense.
        We are not responsible for the availability,
        content, or privacy practices of third-party services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Disclaimer
      </h2>

      <p className="mb-6">
        We strive to provide accurate transcript information,
        but we cannot guarantee that every transcript is complete,
        accurate, or always available.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Limitation of Liability
      </h2>

      <p className="mb-6">
        YT Tube Transcript shall not be liable for any direct,
        indirect, incidental, special, or consequential damages
        arising from the use of this website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Changes to These Terms
      </h2>

      <p className="mb-6">
        We may update these Terms and Conditions at any time.
        Continued use of the website constitutes acceptance
        of any updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Contact
      </h2>

      <p>
        If you have any questions regarding these Terms,
        please contact us through our Contact page
        or email us at{" "}
        <strong>support.yttubetranscript@gmail.com</strong>.
      </p>
    </main>
  );
}