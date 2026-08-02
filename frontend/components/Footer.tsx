export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">

      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-white">
            YT Tube Transcript
          </h2>

          <p className="text-slate-400 mt-2">
            Generate YouTube transcripts instantly in 100+ languages.
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">

          <a href="#" className="text-slate-400 hover:text-white">
            Home
          </a>

          <a href="#" className="text-slate-400 hover:text-white">
            Languages
          </a>

          <a href="#" className="text-slate-400 hover:text-white">
            Blog
          </a>

          <a href="#" className="text-slate-400 hover:text-white">
            FAQ
          </a>

        </div>

      </div>

      <div className="border-t border-slate-800 py-5 text-center text-slate-500">

        © 2026 YT Tube Transcript. All rights reserved.

      </div>

    </footer>
  );
}