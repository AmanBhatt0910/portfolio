import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
