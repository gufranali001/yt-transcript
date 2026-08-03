"use client";

type Props = {
  transcript: string;
};

export default function TranscriptBox({ transcript }: Props) {
  function copyTranscript() {
    if (!transcript) return;

    navigator.clipboard.writeText(transcript);

    alert("Copied ✅");
  }

  function downloadTranscript() {
    if (!transcript) return;

    const blob = new Blob([transcript], { type: "text/plain" });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.txt";
    a.click();

    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="mt-8">
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">
            Transcript
          </h2>

          <div className="flex gap-3">
            <button
              onClick={copyTranscript}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
            >
              Copy
            </button>

            <button
              onClick={downloadTranscript}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
            >
              Download
            </button>
          </div>
        </div>

        <div className="bg-slate-950 rounded-lg p-5 min-h-[250px] text-slate-300 whitespace-pre-wrap">
          {transcript || "Your transcript will appear here..."}
        </div>
      </div>
    </div>
  );
}