import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold text-white">
            <span className="text-red-500">YT</span> Tube Transcript
          </h2>

          <p className="text-slate-400 mt-3 leading-7">
            Generate YouTube transcripts instantly.
            Download transcripts in TXT, SRT and VTT format for free.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link
              href="/"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/#faq"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              FAQ
            </Link>

          </div>

        </div>

        {/* Legal */}

        <div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Legal
          </h3>

          <div className="flex flex-col gap-3">

            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              Disclaimer
            </Link>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6">

        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-slate-500 text-sm">
            © 2026 YT Tube Transcript. All Rights Reserved.
          </p>

          <a
            href="mailto:support.yttubetranscript@gmail.com"
            className="text-slate-500 hover:text-red-500 transition-colors text-sm"
          >
            support.yttubetranscript@gmail.com
          </a>

        </div>

      </div>

    </footer>
  );
}