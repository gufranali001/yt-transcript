"use client";

import Script from "next/script";

const faqs = [
  {
    question: "Is this tool free?",
    answer: "Yes. You can generate YouTube transcripts for free.",
  },
  {
    question: "Can I download transcripts?",
    answer:
      "Yes. You can download transcripts in TXT format now, with SRT and VTT support available.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "More than 100 languages including English, Hindi, Urdu, Arabic, Spanish, French, German, Japanese, Korean and many more.",
  },
  {
    question: "Do I need to sign up?",
    answer:
      "No. Simply paste the YouTube video URL and generate the transcript instantly.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section
      id="faq"
      className="max-w-6xl mx-auto px-5 py-20"
    >
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {faq.question}
            </h3>

            <p className="text-slate-400 leading-7">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}