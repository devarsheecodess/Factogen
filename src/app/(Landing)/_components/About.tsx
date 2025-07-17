import React from "react";
const Marquee = "marquee" as any;

export default function About() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-50 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black purple_theme mb-8">
            About FactoGen
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-800 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
            <p className="text-xl leading-relaxed text-gray-700 text-center space-y-8">
              <span className="block text-2xl font-light">
                In a world overflowing with information, not all research is
                created equal.
                <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  FactoGen
                </span>{" "}
                is your intelligent gateway to understanding and validating
                research papers — without the headache.
              </span>

              <span className="block">
                Built with cutting-edge AI, FactoGen allows you to upload any
                research paper and instantly generate a
                <span className="font-semibold text-blue-700">
                  {" "}
                  custom chatbot trained exclusively on its content
                </span>
                . Ask anything about the paper — from abstract to conclusions —
                and get answers in plain language.
              </span>

              <span className="block text-2xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                No more jargon. No more confusion.
              </span>

              <span className="block">
                But we don't stop there. FactoGen also performs an
                <span className="font-semibold text-purple-700">
                  {" "}
                  in-depth credibility analysis
                </span>{" "}
                using a blend of citation metrics, writing quality signals, and
                model-driven fact-checking to help you assess the reliability of
                the paper before trusting its claims. It highlights weak
                arguments, flags inconsistencies, and brings transparency to
                academic content.
              </span>

              <span className="block">
                Whether you're a student preparing for a presentation, a
                journalist verifying sources, or a lifelong learner exploring
                new ideas — FactoGen saves you hours of reading and brings
                clarity to complexity.
              </span>

              <span className="block text-2xl font-light">
                We believe in making knowledge
                <span className="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  accessible, explainable, and trustworthy
                </span>
                . With FactoGen, research becomes a conversation — not a
                challenge.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-16 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-20">
          <Marquee
            behavior="scroll"
            direction="left"
            scrollamount="8"
            className="whitespace-nowrap"
          >
            <span className="text-white text-4xl font-bold tracking-wider inline-flex items-center space-x-16">
              <span className="flex items-center space-x-4">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                <span>INTELLIGENT RESEARCH ANALYSIS</span>
              </span>
              <span className="flex items-center space-x-4">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                <span>AI-POWERED FACT CHECKING</span>
              </span>
              <span className="flex items-center space-x-4">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                <span>INSTANT PAPER INSIGHTS</span>
              </span>
              <span className="flex items-center space-x-4">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                <span>CREDIBILITY VALIDATION</span>
              </span>
              <span className="flex items-center space-x-4">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                <span>KNOWLEDGE MADE ACCESSIBLE</span>
              </span>
              <span className="flex items-center space-x-4">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                <span>RESEARCH REIMAGINED</span>
              </span>
            </span>
          </Marquee>
        </div>

        {/* Bottom gradient overlay for modern effect */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-800"></div>
      </div>
    </div>
  );
}
