import { useEffect, useState } from 'react';
import Terminal from './Terminal';
import { useTypewriter } from '../hooks/useTypewriter';

const ROLES = [
  'Software Developer',
  'Front End Developer',
  'Back End Developer',
  'Mobile Developer',
  'IT Enthusiast',
  'Cloud Engineer',
];

export default function Hero() {
  const [spotlightStyle, setSpotlightStyle] = useState({});
  const { displayText, showCursor } = useTypewriter({ strings: ROLES });

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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Text Segment */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              {/* Available Capsule */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B0D10] border border-[#181C24] rounded-full shadow-lg shadow-black/25">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-emerald" />
                </span>
                <span className="text-xs font-semibold font-mono tracking-wider text-slate-300 uppercase">
                  Available for work
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-white leading-tight">
                Hello, I'm
                <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent mt-2">
                  Your Name
                </span>
              </h1>
            </div>

            {/* Role typewriter */}
            <div className="space-y-2">
              <span className="text-base font-semibold font-mono text-slate-500 uppercase tracking-widest">
                Currently building as a
              </span>
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl font-bold text-white">
                  {displayText}
                  {showCursor && <span className="text-electric-indigo animate-pulse">|</span>}
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="relative border-l border-[#181C24] pl-6 py-1 italic text-slate-400 font-medium max-w-lg leading-relaxed">
              "The technology you use impresses no one. The experience you create with it is everything."
              <span className="block text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mt-2 not-italic">
                — Sean Gerety
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-black px-8 py-3.5 rounded-xl font-semibold tracking-tight transition-all duration-200 shadow-md shadow-white/5 hover:scale-[1.01]"
              >
                <i className="bx bx-download text-lg" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B0D10] hover:bg-[#11141B] border border-[#181C24] hover:border-[#2A3040] text-slate-200 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200"
              >
                <span>Get In Touch</span>
                <i className="bx bx-right-arrow-alt text-lg" />
              </a>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-6 border-t border-[#181C24]/50">
              <div>
                <div className="text-2xl font-bold text-white font-mono">20+</div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="w-px h-8 bg-[#181C24]" />
              <div>
                <div className="text-2xl font-bold text-white font-mono">3+</div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-down">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}