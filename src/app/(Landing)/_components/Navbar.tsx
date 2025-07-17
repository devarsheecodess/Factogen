"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-30 transition-all duration-500 ${
        isScrolled
          ? "fixed top-4 left-4 right-4 mx-auto max-w-6xl bg-purple-800/10 backdrop-blur-xl rounded-2xl shadow-2xl text-purple-600"
          : "absolute top-0 left-0 right-0 bg-transparent text-white"
      }`}
    >
      <header
        className={`flex justify-between ml-20 mr-20 items-center p-8 ${
          isScrolled ? "text-purple-600" : "text-white"
        }`}
      >
        <h1
          className="font-bold text-2xl cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Factogen
        </h1>
        <ul className="flex gap-4 font-medium">
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("features")}
          >
            Features
          </li>
          <Link href="/signup">
            <li className="cursor-pointer">Signup</li>
          </Link>
        </ul>
      </header>
    </div>
  );
}
