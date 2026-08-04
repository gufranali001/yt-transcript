"use client";

import { useState } from "react";

type Segment = {
  text: string;
  offset: string;
  duration: string;
  lang: string;
};

type UrlInputProps = {
  selectedLanguage: string;
  setTranscript: (text: string) => void;
  setSegments: (segments: Segment[]) => void;
  setLanguage: (language: string) => void;
};

export default function UrlInput({
  selectedLanguage,
  setTranscript,
  setSegments,
  setLanguage,
}: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  function getVideoId(link: string) {
    try {
      const u = new URL(link);

      if (u.hostname.includes("youtu.be")) {
        return u.pathname.slice(1).split("/")[0];
      }

      const watchId = u.searchParams.get("v");
      if (watchId) return watchId;

      if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.split("/")[2];
      }

      if (u.pathname.startsWith("/embed/")) {
        return u.pathname.split("/")[2];
      }

      return null;
    } catch {
      return null;
    }
  }

  async function generateTranscript() {
    const videoId = getVideoId(url);

    if (!videoId) {
      alert("Please enter a valid YouTube URL.");
      return;
    }

    setLoading(true);

    try {
      const apiUrl =
        selectedLanguage === "auto"
          ? `https://yt-transcript-production-71d5.up.railway.app/transcript?video_id=${videoId}`
          : `https://yt-transcript-production-71d5.up.railway.app/transcript?video_id=${videoId}&lang=${selectedLanguage}`;

      const res = await fetch(apiUrl);

      const data = await res.json();

      if (data.success) {
        setTranscript(data.transcript);
        setSegments(data.segments || []);
        setLanguage(data.language || "Unknown");
      } else {
        alert(data.error || "Transcript not found.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
        <div className="max-w-4xl mx-auto">

      <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="relative flex-1">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              ▶
            </span>

            <input
            autoFocus
            autoComplete="off"
              type="url"
              placeholder="Paste YouTube URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  generateTranscript();
                }
              }}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />

          </div>

          <button
            type="button"
            onClick={generateTranscript}
            disabled={loading}
            className="min-w-[220px] bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >

            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    opacity="0.25"
                  />
                  <path
                    fill="currentColor"
                    d="M22 12a10 10 0 0 1-10 10V18a6 6 0 0 0 6-6h4z"
                  />
                </svg>

                <span>Generating...</span>
              </>
            ) : (
              <>
                ⚡ Generate Transcript
              </>
            )}

          </button>

        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">

          <span className="bg-slate-800 px-3 py-1 rounded-full">
            ✅ Free
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full">
            🌍 100+ Languages
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full">
            ⚡ Instant
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full">
            📄 TXT • SRT • VTT
          </span>

        </div>

      </div>

    </div>
  );
}