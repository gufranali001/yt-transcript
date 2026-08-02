export default function FAQ() {
  const faqs = [
    {
      question: "Is this tool free?",
      answer: "Yes. You can generate YouTube transcripts for free.",
    },
    {
      question: "Can I download transcripts?",
      answer: "Yes. TXT and SRT download support will be available.",
    },
    {
      question: "Which languages are supported?",
      answer: "More than 100 languages including English, Hindi, Urdu, Arabic, Spanish and more.",
    },
    {
      question: "Do I need to sign up?",
      answer: "No. Simply paste the YouTube URL and generate the transcript.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 py-20">
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

            <p className="text-slate-400">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}