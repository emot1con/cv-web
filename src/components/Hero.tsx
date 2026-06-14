import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import { useTypewriter } from '../hooks/useTypewriter';
import { useCountUp } from '../hooks/useCountUp';
import { fadeInUp, staggerContainer } from '../lib/animations';

const ROLES = [
  'Software Engineer',
  'Backend Engineer'
];

export default function Hero() {
  const [spotlightStyle, setSpotlightStyle] = useState({});
  const { displayText, showCursor } = useTypewriter({ strings: ROLES });
  const metricsRef = useRef<HTMLDivElement>(null);

  const projects = useCountUp({ end: 20, duration: 2000, suffix: '+' });
  const years = useCountUp({ end: 3, duration: 1500, suffix: '+' });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setSpotlightStyle({
        '--mouse-x': `${e.clientX}px`,
        '--mouse-y': `${e.clientY}px`,
      } as React.CSSProperties);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-28 lg:pt-36 pb-20 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none z-0" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0" />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 lg:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 400px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(99,102,241,0.065), transparent 85%)`,
          ...spotlightStyle,
        }}
      />

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-electric-indigo/5 filter blur-[100px] top-12 left-1/4 animate-slow-pulse pointer-events-none z-0" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-electric-cyan/5 filter blur-[100px] bottom-12 right-1/4 animate-slow-pulse pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20"
        >
          {/* Text Segment */}
          <motion.div variants={fadeInUp} className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              {/* Available Capsule */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-obsidian-surface border border-obsidian-border rounded-full shadow-lg shadow-black/25">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-emerald" />
                </span>
                <span className="text-xs font-semibold font-mono tracking-wider text-text-secondary uppercase">
                  Available for work
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-text-primary leading-tight">
                Hello, I'm
                <span className="block bg-gradient-to-r from-electric-emerald via-electric-indigo to-electric-cyan bg-clip-text text-transparent mt-2">
                  Arqan Purusa Eryan
                </span>
              </h1>
            </div>

            {/* Role typewriter */}
            <div className="space-y-2">
              <span className="text-base font-semibold font-mono text-text-muted uppercase tracking-widest">
                Currently building as a
              </span>
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl font-bold text-text-primary">
                  {displayText}
                  {showCursor && <span className="text-electric-indigo animate-pulse">|</span>}
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="relative border-l border-obsidian-border pl-6 py-1 italic text-text-secondary font-medium max-w-lg leading-relaxed">
              "The technology you use impresses no one. The experience you create with it is everything."
              <span className="block text-xs font-mono font-bold tracking-widest uppercase text-text-muted mt-2 not-italic">
                — Sean Gerety
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-text-primary hover:bg-slate-200 text-obsidian-bg px-8 py-3.5 rounded-xl font-semibold tracking-tight transition-all duration-200 shadow-md shadow-white/5 hover:scale-[1.01] magnetic-btn"
              >
                <i className="bx bx-download text-lg" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-obsidian-surface hover:bg-obsidian-elevated border border-obsidian-border hover:border-obsidian-border-active text-text-primary hover:text-text-primary px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 magnetic-btn"
              >
                <span>Get In Touch</span>
                <i className="bx bx-right-arrow-alt text-lg" />
              </a>
            </div>

            {/* Metrics — animated counters */}
            <div
              ref={metricsRef}
              className="flex items-center gap-8 justify-center lg:justify-start pt-6 border-t border-obsidian-border/50"
            >
              <div>
                <div className="text-2xl font-bold text-text-primary font-mono" ref={projects.ref as React.RefObject<HTMLDivElement>}>
                  {projects.display}
                </div>
                <div className="text-xs text-text-muted font-mono uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="w-px h-8 bg-[#1e293b]" />
              <div>
                <div className="text-2xl font-bold text-text-primary font-mono" ref={years.ref as React.RefObject<HTMLDivElement>}>
                  {years.display}
                </div>
                <div className="text-xs text-text-muted font-mono uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div variants={fadeInUp} className="flex-1 flex justify-center lg:justify-end">
            <Terminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}