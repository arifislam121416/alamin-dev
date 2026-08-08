import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";



export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
    
      <Hero />
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Experience/>
      <HireMe/>
      <Contact/>
    </div>
  );
}
