export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Generate YouTube transcripts within seconds using our fast and reliable transcript engine.",
    },
    {
      icon: "🌍",
      title: "100+ Languages",
      desc: "Supports English, Hindi, Urdu, Arabic, Spanish, French, German, Japanese and many more languages.",
    },
    {
      icon: "📋",
      title: "One-Click Copy",
      desc: "Copy the complete transcript instantly with a single click for easy editing and sharing.",
    },
    {
      icon: "⬇️",
      title: "Multiple Downloads",
      desc: "Download transcripts in TXT, SRT and VTT formats for subtitles, captions and documentation.",
    },
    {
      icon: "🔒",
      title: "Private & Secure",
      desc: "No registration required. Your YouTube URLs are processed securely without storing personal data.",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      desc: "Use the transcript generator on desktop, tablet or mobile with a fully responsive interface.",
    },
    {
      icon: "🎯",
      title: "Accurate Results",
      desc: "Extract clean and readable transcripts from available YouTube captions with high accuracy.",
    },
    {
      icon: "💯",
      title: "100% Free",
      desc: "Use all core transcript features for free with no subscriptions or hidden charges.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center text-white mb-4">
        Why Choose YT Tube Transcript?
      </h2>

      <p className="text-center text-slate-400 max-w-3xl mx-auto mb-14">
        Our free YouTube Transcript Generator helps creators, students,
        researchers and marketers quickly extract, copy and download
        YouTube transcripts in multiple formats.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {features.map((item) => (
          <div
            key={item.title}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-red-500 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-slate-400 leading-7">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}