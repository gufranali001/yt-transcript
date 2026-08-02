"use client";

import { useState } from "react";

const languages = [
  "Auto Detect",
  "English",
  "Hindi",
  "Urdu",
  "Arabic",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Korean",
];

export default function LanguageSelect() {
  const [language, setLanguage] = useState("Auto Detect");

  return (
    <div className="flex items-center gap-4">

      <label className="text-white font-semibold">
        Transcript Language
      </label>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-slate-900 text-white border border-slate-700 rounded-lg px-4 py-3"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

    </div>
  );
}