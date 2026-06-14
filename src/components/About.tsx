import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../lib/animations';

export default function About() {
  return (
    <section
      id="profile"
      className="py-20 lg:py-32 border-t-3 border-neo-border relative overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-4 lg:px-8 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="max-w-3xl mx-auto text-center mb-16 space-y-4" variants={fadeInUp}>
          <div className="neo-badge inline-flex mx-auto">
            <span className="text-xs font-bold font-mono tracking-widest uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">My Profile</h2>
          <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
            Student, Developer, Thinker
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div className="lg:col-span-5 flex justify-center" variants={slideInLeft}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div
                className="relative w-full h-full p-2 bg-neo-surface border-3 border-neo-border rounded-lg"
                style={{ boxShadow: '6px 6px 0px var(--color-neo-shadow)' }}
              >
                <img
                  src="/img/self.webp"
                  alt="Profile"
                  width="720"
                  height="720"
                  className="w-full h-full object-cover rounded-md group-hover:scale-[1.02] transition-transform duration-200"
                />
                <div
                  className="absolute -top-3 -right-3 bg-neo-accent-secondary border-2 border-neo-border text-neo-accent px-3 py-1.5 rounded-md text-xs font-mono font-bold flex items-center gap-1.5 select-none -rotate-3"
                  style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-neo-success" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div className="lg:col-span-7 space-y-8" variants={slideInRight}>
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neo-accent font-bold mb-4">
                <i className="bx bx-terminal text-sm" />
                <span>Student & Developer</span>
              </div>
              <div className="space-y-4 text-neo-text-secondary text-base leading-relaxed">
                <p>
                  My name is <span className="text-neo-text-primary font-bold">Your Name</span>. I am an Informatics Engineering Student at{' '}
                  <a href="#" className="text-neo-accent font-bold underline decoration-2 decoration-neo-accent hover:text-neo-accent-secondary transition-colors">
                    University
                  </a>
                  . I possess a continuous curiosity about cutting-edge technology and engineering systems.
                </p>
                <p>
                  Since starting my programming journey, I have focused on exploring software design and understanding
                  architectural constructs. I believe that deliberate, continuous growth is the core element to delivering
                  premium-grade digital experiences.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-neo-text-muted font-mono mt-6 font-bold">
                <i className="bx bx-map-pin text-sm" />
                <span>Your City, Indonesia</span>
              </div>
            </SpotlightCard>

            {/* Sub Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard className="p-5 text-center">
                <div className="text-xl font-bold text-neo-text-primary font-mono">2022</div>
                <div className="text-xs text-neo-text-muted font-mono uppercase tracking-wider mt-1">Started Coding</div>
              </SpotlightCard>
              <a href="https://wa.me/6281369051268" target="_blank" rel="noopener noreferrer">
                <SpotlightCard className="p-5 text-center cursor-pointer">
                  <div className="text-xl font-bold text-neo-text-primary font-mono flex items-center justify-center gap-1 hover:text-neo-accent transition-colors">
                    <span>Connect</span>
                    <i className="bx bxl-whatsapp text-lg" />
                  </div>
                  <div className="text-xs text-neo-text-muted font-mono uppercase tracking-wider mt-1">Let's chat</div>
                </SpotlightCard>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}