"use client";

type Segment = {
  text: string;
  offset: string;
  duration: string;
  lang: string;
};

type Props = {
  transcript: string;
  segments: Segment[];
  language: string;
};

export default function TranscriptBox({
  transcript,
  segments,
  language,
}: Props) {
  function copyTranscript() {
    if (!transcript) return;

    navigator.clipboard.writeText(transcript);
    alert("Copied ✅");
  }

  function downloadTXT() {
    if (!transcript) return;

    const blob = new Blob([transcript], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.txt";
    a.click();

    URL.revokeObjectURL(url);
  }

  function downloadSRT() {
    if (!segments.length) return;

    let srt = "";

    segments.forEach((segment, index) => {
      const start = Number(segment.offset);
      const end = start + Number(segment.duration);

      srt += `${index + 1}\n`;
      srt += `${formatTime(start, ",")} --> ${formatTime(end, ",")}\n`;
      srt += `${segment.text}\n\n`;
    });

    const blob = new Blob([srt], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.srt";
    a.click();

    URL.revokeObjectURL(url);
  }

  function downloadVTT() {
    if (!segments.length) return;

    let vtt = "WEBVTT\n\n";

    segments.forEach((segment) => {
      const start = Number(segment.offset);
      const end = start + Number(segment.duration);

      vtt += `${formatTime(start, ".")} --> ${formatTime(end, ".")}\n`;
      vtt += `${segment.text}\n\n`;
    });

    const blob = new Blob([vtt], {
      type: "text/vtt",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.vtt";
    a.click();

    URL.revokeObjectURL(url);
  }

  function formatTime(
  seconds: number,
  separator: "," | "."
) {
  const hours = Math.floor(seconds / 3600);

  const minutes = Math.floor((seconds % 3600) / 60);

  const secs = Math.floor(seconds % 60);

  const milliseconds = Math.floor(
    (seconds - Math.floor(seconds)) * 1000
  );

  const hh = String(hours).padStart(2, "0");

  const mm = String(minutes).padStart(2, "0");

  const ss = String(secs).padStart(2, "0");

  const ms = String(milliseconds).padStart(3, "0");

  return `${hh}:${mm}:${ss}${separator}${ms}`;
}

  const wordCount = transcript
    ? transcript.trim().split(/\s+/).length
    : 0;

  const characterCount = transcript.length;

  const readingTime = Math.max(
    1,
    Math.ceil(wordCount / 200)
  );

  return (
    <div className="mt-8">
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mb-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Transcript
            </h2>

            {transcript && (

              <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-400">

                <span>🌍 {language}</span>

                <span>📝 {wordCount} Words</span>

                <span>🔠 {characterCount} Characters</span>

                <span>⏱ {readingTime} min read</span>

              </div>

            )}

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={copyTranscript}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Copy
            </button>

            <button
              onClick={downloadTXT}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              TXT
            </button>

            <button
              onClick={downloadSRT}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
            >
              SRT
            </button>

            <button
              onClick={downloadVTT}
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg"
            >
              VTT
            </button>

          </div>

        </div>

        <div className="bg-slate-950 rounded-lg p-5 min-h-[300px] whitespace-pre-wrap leading-8 text-slate-300">

          {transcript || "Your transcript will appear here..."}

        </div>

      </div>
    </div>
  );
}