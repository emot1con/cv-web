import Hero from '../components/Hero';
import About from '../components/About';
import VerticalTimeline from '../components/VerticalTimeline';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VerticalTimeline />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}