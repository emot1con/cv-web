import Hero from '../components/Hero';
import About from '../components/About';
import VerticalTimeline from '../components/VerticalTimeline';
import Skills from '../components/Skills';
import GithubHistory from '../components/GithubHistory';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VerticalTimeline />
      <GithubHistory />
      <Skills />
      <Contact />
    </main>
  );
}