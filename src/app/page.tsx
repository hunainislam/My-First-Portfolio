import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Project from "./component/Project";
import Skills from "./component/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <br />
      <About />
      <br />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
