"use client";

import { useState } from "react";
import Script from "next/script";

import Header from "../components/Header";
import Hero from "../components/Hero";
import UrlInput from "../components/UrlInput";
import LanguageSelect from "../components/LanguageSelect";
import TranscriptBox from "../components/TranscriptBox";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

type Segment = {
  text: string;
  offset: string;
  duration: string;
  lang: string;
};

export default function Home() {
  const [transcript, setTranscript] = useState("");
  const [segments, setSegments] = useState<Segment[]>([]);
  const [language, setLanguage] = useState("");

  const [selectedLanguage, setSelectedLanguage] =
    useState("auto");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "YT Tube Transcript",
        url: "https://yttubetranscript.com",
        description:
          "Free YouTube Transcript Generator supporting 100+ languages.",
      },
      {
        "@type": "Organization",
        name: "YT Tube Transcript",
        url: "https://yttubetranscript.com",
        logo: "https://yttubetranscript.com/favicon.ico",
        email: "support.yttubetranscript@gmail.com",
      },
      {
        "@type": "SoftwareApplication",
        name: "YT Tube Transcript",
        applicationCategory: "UtilityApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "Generate YouTube transcripts instantly. Download TXT, SRT and VTT files for free.",
        url: "https://yttubetranscript.com",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Header />

      <main>
        <Hero />

        <section className="max-w-7xl mx-auto px-5 py-10">

          <UrlInput
            selectedLanguage={selectedLanguage}
            setTranscript={setTranscript}
            setSegments={setSegments}
            setLanguage={setLanguage}
          />

          <div className="mt-6">
            <LanguageSelect
              language={selectedLanguage}
              setLanguage={setSelectedLanguage}
            />
          </div>

          <div className="mt-8">
            <TranscriptBox
              transcript={transcript}
              segments={segments}
              language={language}
            />
          </div>

        </section>

        <Features />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}