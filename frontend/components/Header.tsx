export default function Header() {
  return (
    <header className="bg-[#050816] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white text-2xl">
            ▶
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              <span className="text-red-500">YT</span> Tube Transcript
            </h1>

            <p className="text-slate-400 text-xs">
              Free Transcript Generator
            </p>
          </div>

        </div>

        <nav className="hidden md:flex gap-8 text-slate-300">

          <a href="#">Home</a>

          <a href="#">Languages</a>

          <a href="#">Blog</a>

          <a href="#">FAQ</a>

        </nav>

      </div>
    </header>
  );
}