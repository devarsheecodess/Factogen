import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600 rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-purple-400 via-pueple-600 to-purple-800"></div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-8">
          {/* Main footer content */}
          <div className="text-center mb-12">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h2 className="text-4xl font-black  bg-clip-text mb-4">
                FactoGen
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Making research accessible, explainable, and trustworthy through
                the power of AI
              </p>
            </div>

            {/* Navigation Links */}
            <div className="mb-12">
              <ul className="flex flex-wrap justify-center space-x-8 text-lg">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:bg-clip-text transition-all duration-300 font-medium"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text transition-all duration-300 font-medium"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 font-medium"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social/Contact Section */}
            <div className="mb-12">
              <div className="flex justify-center space-x-6">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-white text-xl">🐦</span>
                </div>
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-white text-xl">💼</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 FactoGen. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="h-2 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-800"></div>
    </footer>
  );
}
