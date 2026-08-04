export default function Hero() {
  return (
    <section className="bg-[#050816] text-white py-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-900/30 border border-red-800 text-red-400 mb-8">

          🚀 Trusted by Thousands of Users • Supports 100+ Languages

        </div>

        {/* Heading */}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">

          <span className="text-white">
            Free YouTube
          </span>

          <br />

          <span className="text-red-500">
            Transcript Generator
          </span>

        </h1>

        {/* Description */}

        <p className="text-lg sm:text-xl text-slate-300 mt-6 max-w-3xl mx-auto leading-8">

          Generate accurate YouTube transcripts in seconds.
          Copy, download as <strong>TXT</strong>, <strong>SRT</strong>, or
          <strong> VTT</strong>, and support videos in more than
          <strong> 100 languages</strong>.

        </p>

        {/* Trust Stats */}

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-400">

          <div>
            ✅ Free Forever
          </div>

          <div>
            ⚡ Instant Results
          </div>

          <div>
            🌍 100+ Languages
          </div>

          <div>
            🔒 No Sign-Up Required
          </div>

        </div>

      </div>

    </section>
  );
}