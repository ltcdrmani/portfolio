import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm" style={{ color: "var(--muted)" }}>
        © {new Date().getFullYear()} Lt Cdr Manikandan (Mani) Selvaraj (Retd), Indian Navy
      </footer>
    </>
  );
}
