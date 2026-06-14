import Hero from '../components/Hero';
import About from '../components/About';
import VerticalTimeline from '../components/VerticalTimeline';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VerticalTimeline />
      <Skills />
      <Contact />
    </main>
  );
}