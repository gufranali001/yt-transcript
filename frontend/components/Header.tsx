import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#050816] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

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

        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-8 text-slate-300">

          <Link
            href="/"
            className="hover:text-red-500 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/#languages"
            className="hover:text-red-500 transition-colors"
          >
            Languages
          </Link>

          <Link
            href="/#blog"
            className="hover:text-red-500 transition-colors"
          >
            Blog
          </Link>

          <Link
            href="/#faq"
            className="hover:text-red-500 transition-colors"
          >
            FAQ
          </Link>

          <Link
            href="/about"
            className="hover:text-red-500 transition-colors"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-red-500 transition-colors"
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}