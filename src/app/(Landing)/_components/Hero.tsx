"use client";
import { Button } from "@/components/_elements/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const Hero01 = () => {
  return (
    <section id="home">
      <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black text-white">
        {/* Background Image */}
        <img
          src="/hero.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-2xl">
          <h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold text-[#bc8fd3]"
            style={{ textShadow: "rgba(0, 0, 0, 0.5) 0px 0px 14px" }}
          >
            <span className="flex gap-2 justify-center">
              Read <span className="text-white">Less</span>
            </span>
            <span>Know More</span>
          </h1>
          <p className="mt-6 text-[17px] md:text-lg">
            Decode Research, Instantly Smart.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full text-base p-7 cursor-pointer"
              onClick={() => (window.location.href = "/login")}
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              size="lg"
              className="rounded-full text-base shadow-none p-7 cursor-pointer bg-transparent border-2 transition duration-300"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero01;
