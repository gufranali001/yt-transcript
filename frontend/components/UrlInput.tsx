"use client";

import { useState } from "react";

type UrlInputProps = {
  setTranscript: (text: string) => void;
};

export default function UrlInput({ setTranscript }: UrlInputProps) {
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
      const res = await fetch(
        `https://yt-transcript-production-71d5.up.railway.app/transcript?video_id=${videoId}`
      );

      const data = await res.json();

      if (data.success) {
        setTranscript(data.transcript);
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
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Paste YouTube URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none"
      />

      <button
        onClick={generateTranscript}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Transcript"}
      </button>
    </div>
  );
}