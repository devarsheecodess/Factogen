import React from "react";

export default function Features() {
  const features = [
    {
      title: "Upload Research Papers (PDF)",
      description:
        "Seamlessly upload any research paper in PDF format. Our advanced parsing engine extracts and processes all content, from complex equations to detailed citations, preparing it for intelligent analysis.",
      icon: "📄",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "AI-Powered Chatbot Trained on Each Paper",
      description:
        "Every uploaded paper generates a custom chatbot trained exclusively on its content. Ask complex questions and get precise answers based solely on the paper's research and findings.",
      icon: "🤖",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Instant Paper Summarization",
      description:
        "Get comprehensive summaries of lengthy research papers in seconds. Our AI distills key points, methodologies, and conclusions into digestible insights without losing critical information.",
      icon: "⚡",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Paper Credibility Scoring",
      description:
        "Advanced credibility analysis using citation metrics, writing quality signals, and fact-checking algorithms. Understand the reliability and trustworthiness of research before making decisions.",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Source & Citation Extraction",
      description:
        "Automatically extract and organize all citations, references, and sources. Navigate through the research network and understand the paper's foundation and supporting evidence.",
      icon: "🔗",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Compare Multiple Papers Side-by-Side",
      description:
        "Upload multiple papers and compare their findings, methodologies, and conclusions. Identify contradictions, consensus, and gaps in research across different studies.",
      icon: "⚖️",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Highlight Key Insights and Findings",
      description:
        "AI automatically identifies and highlights the most important insights, breakthrough findings, and significant conclusions. Never miss critical information buried in dense academic text.",
      icon: "💡",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Ask Questions About Paper (Q&A)",
      description:
        "Interactive Q&A system that understands context and nuance. Ask about methodologies, results, limitations, or any specific aspect of the research and get detailed, accurate responses.",
      icon: "❓",
      gradient: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-50 rounded-full opacity-40 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-8 py-16">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black purple_theme bg-clip-text text-transparent mb-8">
            Features
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-800 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful capabilities that make FactoGen your ultimate
            research companion
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="max-w-4xl mx-auto mt-24 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-800 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Research Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of researchers, students, and professionals who
              trust FactoGen to make sense of complex academic literature.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
