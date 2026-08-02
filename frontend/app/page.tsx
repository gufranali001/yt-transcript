"use client";

import { useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import UrlInput from "../components/UrlInput";
import LanguageSelect from "../components/LanguageSelect";
import TranscriptBox from "../components/TranscriptBox";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {

  const [transcript, setTranscript] = useState("");

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="max-w-7xl mx-auto px-5 py-10">

          <UrlInput setTranscript={setTranscript} />

          <div className="mt-6">
            <LanguageSelect />
          </div>

          <div className="mt-8">
            <TranscriptBox transcript={transcript} />
          </div>

        </section>

        <Features />

        <FAQ />
      </main>

      <Footer />
    </>
  );
}