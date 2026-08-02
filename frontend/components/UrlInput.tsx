"use client";

import { useState } from "react";

type UrlInputProps = {
  setTranscript: (text: string) => void;
};

export default function UrlInput({ setTranscript }: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function getTranscript() {
    if (!url.trim()) {
      alert("Please paste a YouTube URL");
      return;
    }

    let videoId = "";

    try {
      const parsed = new URL(url);

      if (parsed.hostname.includes("youtu.be")) {
        videoId = parsed.pathname.replace("/", "");
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1];
      } else if (parsed.pathname.startsWith("/live/")) {
        videoId = parsed.pathname.split("/live/")[1];
      } else {
        videoId = parsed.searchParams.get("v") || "";
      }

      videoId = videoId.split("?")[0].split("&")[0].trim();

      if (!videoId) {
        alert("Invalid YouTube URL");
        return;
      }

      setLoading(true);

      const response = await fetch(
        `http://127.0.0.1:8000/transcript?video_id=${encodeURIComponent(videoId)}`
      );

      const data = await response.json();

      if (data.success) {
        setTranscript(data.transcript);
      } else {
        alert(data.error || "Transcript not found");
      }
    } catch (error) {
      console.error(error);
      alert("Backend Connection Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <input
        type="text"
        placeholder="Paste YouTube Video URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 rounded-xl bg-slate-900 border border-slate-700 px-6 py-5 text-white outline-none"
      />

      <button
        onClick={getTranscript}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 py-5 font-bold disabled:opacity-50"
      >
        {loading ? "Loading..." : "Get Transcript"}
      </button>
    </div>
  );
}