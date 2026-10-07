import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import HowIWork from "@/components/HowIWork";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <HowIWork />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}