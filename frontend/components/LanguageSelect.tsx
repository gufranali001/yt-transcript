"use client";

type Props = {
  language: string;
  setLanguage: (language: string) => void;
};

const languages = [
  { label: "Auto Detect", value: "auto" },
  { label: "English", value: "en" },
  { label: "Hindi", value: "hi" },
  { label: "Urdu", value: "ur" },
  { label: "Arabic", value: "ar" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
];

export default function LanguageSelect({
  language,
  setLanguage,
}: Props) {
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
          <option
            key={lang.value}
            value={lang.value}
          >
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}