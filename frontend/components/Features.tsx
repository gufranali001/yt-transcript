export default function Features() {
  const features = [
    {
      title: "⚡ Fast",
      desc: "Generate YouTube transcripts in just a few seconds.",
    },
    {
      title: "🌍 100+ Languages",
      desc: "Supports English, Hindi, Urdu, Arabic, Spanish and many more.",
    },
    {
      title: "📋 Copy",
      desc: "Copy the transcript with one click.",
    },
    {
      title: "⬇️ Download",
      desc: "Download transcript as TXT or SRT.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-20">

      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Why Choose YT Tube Transcript?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item) => (
          <div
            key={item.title}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-slate-400">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}