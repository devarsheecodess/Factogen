import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero01 from "./_components/Hero";
import About from "./_components/About";
import Features from "./_components/Features";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero01 />
      <About />
      <Features />
      <Footer />
    </>
  );
}
