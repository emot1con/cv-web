import { useRef } from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import { useTypewriter } from '../hooks/useTypewriter';
import { useCountUp } from '../hooks/useCountUp';
import { fadeInUp, staggerContainer } from '../lib/animations';

const ROLES = [
  'Software Engineer',
  'Backend Engineer',
  'Cloud Engineer',
  'DevOps Engineer'
];

export default function Hero() {
  const { displayText, showCursor } = useTypewriter({ strings: ROLES });
  const metricsRef = useRef<HTMLDivElement>(null);

  const projects = useCountUp({ end: 20, duration: 2000, suffix: '+' });
  const years = useCountUp({ end: 3, duration: 1500, suffix: '+' });

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-28 lg:pt-36 pb-20 overflow-hidden"
    >
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neo-accent-secondary border-2 border-neo-border rounded-md font-bold text-neo-accent"
                style={{ boxShadow: '3px 3px 0px var(--color-neo-shadow)' }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neo-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neo-success" />
                </span>
                <span className="text-xs font-bold font-mono tracking-wider uppercase">
                  Available for work
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-neo-text-primary leading-tight font-heading">
                Hello, I'm
                <span className="block mt-2 text-neo-accent">
                  Arqan Purusa Eryan
                </span>
              </h1>
            </div>

            {/* Role typewriter */}
            <div className="space-y-2">
              <span className="text-base font-bold font-mono text-neo-text-muted uppercase tracking-widest">
                Currently building as a
              </span>
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl font-bold text-neo-text-primary">
                  {displayText}
                  {showCursor && <span className="text-neo-accent animate-pulse">|</span>}
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="relative border-l-4 border-neo-accent pl-6 py-3 bg-neo-surface border-2 border-neo-border rounded-md text-neo-text-secondary font-medium max-w-lg leading-relaxed"
              style={{ boxShadow: '3px 3px 0px var(--color-neo-shadow)', borderLeftWidth: '6px', borderLeftColor: 'var(--color-neo-accent)' }}
            >
              <span className="italic">
                "The technology you use impresses no one. The experience you create with it is everything."
              </span>
              <span className="block text-xs font-mono font-bold tracking-widest uppercase text-neo-text-muted mt-2 not-italic">
                — Sean Gerety
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                target="_blank"
                className="neo-btn w-full sm:w-auto"
              >
                <i className="bx bx-download text-lg" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="neo-btn-secondary w-full sm:w-auto"
              >
                <span>Get In Touch</span>
                <i className="bx bx-right-arrow-alt text-lg" />
              </a>
            </div>

            {/* Metrics — animated counters */}
            <div
              ref={metricsRef}
              className="flex items-center gap-8 justify-center lg:justify-start pt-6 border-t-3 border-neo-border"
            >
              <div>
                <div className="text-2xl font-bold text-neo-text-primary font-mono" ref={projects.ref as React.RefObject<HTMLDivElement>}>
                  {projects.display}
                </div>
                <div className="text-xs text-neo-text-muted font-mono uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="w-[3px] h-8 bg-neo-border" />
              <div>
                <div className="text-2xl font-bold text-neo-text-primary font-mono" ref={years.ref as React.RefObject<HTMLDivElement>}>
                  {years.display}
                </div>
                <div className="text-xs text-neo-text-muted font-mono uppercase tracking-widest">Years Experience</div>
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