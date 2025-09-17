import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import BackToTopButton from "@/components/BackToTopButton";
import TechStack from "@/components/main/TechStack";
import Experience from "@/components/main/Experience";

export default function Home() {
  return (
    <>
      <BackToTopButton />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
