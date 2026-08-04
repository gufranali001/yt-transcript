export const metadata = {
  title: "About Us",
  description:
    "Learn more about YT Tube Transcript and our mission to provide a fast, free, and easy YouTube transcript tool.",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">

      <h1 className="text-4xl font-bold mb-8">
        About Us
      </h1>

      <p className="text-gray-300 mb-8">
        Welcome to <strong>YT Tube Transcript</strong>, your free and simple
        tool for generating YouTube video transcripts in seconds.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Mission
      </h2>

      <p className="mb-6">
        Our goal is to make video content more accessible by helping users
        quickly extract transcripts from YouTube videos. Whether you're a
        student, content creator, researcher, marketer, or developer, our
        platform is designed to save time and improve productivity.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What We Offer
      </h2>

      <ul className="list-disc pl-6 space-y-3 mb-8">
        <li>Fast YouTube transcript generation</li>
        <li>Copy transcripts with one click</li>
        <li>Download transcripts in TXT, SRT and VTT formats</li>
        <li>Simple, clean and user-friendly interface</li>
        <li>Free access with no registration required</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Vision
      </h2>

      <p className="mb-6">
        We are continuously improving YT Tube Transcript by adding new
        features, improving accuracy, and creating a better experience for
        users around the world.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Contact
      </h2>

      <p>
        Have questions or suggestions? We'd love to hear from you.
        Visit our Contact page or email us at{" "}
        <strong>support.yttubetranscript@gmail.com</strong>.
      </p>

    </main>
  );
}