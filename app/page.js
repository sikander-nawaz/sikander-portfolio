import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="gradient-line" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Divider />
      <Achievements />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Volunteer />
      <Divider />
      <Contact />
    </main>
  );
}
