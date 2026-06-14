import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../lib/animations';

export default function About() {
  return (
    <section
      id="profile"
      className="py-20 lg:py-32 border-t border-obsidian-border bg-obsidian-surface/10 relative overflow-hidden"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian-surface border border-obsidian-border rounded-full">
            <span className="text-xs font-semibold font-mono tracking-widest text-text-secondary uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">My Profile</h2>
          <p className="text-sm text-text-muted leading-relaxed font-mono uppercase tracking-widest">
            Student, Developer, Thinker
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div className="lg:col-span-5 flex justify-center" variants={slideInLeft}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-indigo/10 to-transparent rounded-2xl filter blur-md" />
              <div className="relative w-full h-full p-2 bg-obsidian-surface border border-obsidian-border rounded-2xl shadow-xl">
                <img
                  src="/img/self.webp"
                  alt="Profile"
                  width="720"
                  height="720"
                  className="w-full h-full object-cover rounded-xl grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute -top-3 -right-3 bg-obsidian-elevated border border-obsidian-border-active text-text-primary px-3 py-1.5 rounded-full text-xs font-mono font-medium shadow-lg flex items-center gap-1.5 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-emerald animate-pulse" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div className="lg:col-span-7 space-y-8" variants={slideInRight}>
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-electric-indigo mb-4">
                <i className="bx bx-terminal text-sm animate-pulse" />
                <span>Student & Developer</span>
              </div>
              <div className="space-y-4 text-text-secondary text-base leading-relaxed">
                <p>
                  My name is <span className="text-text-primary font-semibold">Your Name</span>. I am an Informatics Engineering Student at{' '}
                  <a href="#" className="text-text-primary hover:text-electric-indigo underline decoration-[#334155] hover:decoration-electric-indigo transition-all">
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

              <div className="flex items-center gap-2 text-xs text-text-muted font-mono mt-6">
                <i className="bx bx-map-pin text-sm" />
                <span>Your City, Indonesia</span>
              </div>
            </SpotlightCard>

            {/* Sub Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard className="p-5 text-center">
                <div className="text-xl font-bold text-text-primary font-mono">2022</div>
                <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">Started Coding</div>
              </SpotlightCard>
              <a href="https://wa.me/6281369051268" target="_blank" rel="noopener noreferrer">
                <SpotlightCard className="p-5 text-center cursor-pointer">
                  <div className="text-xl font-bold text-text-primary font-mono flex items-center justify-center gap-1 hover:text-electric-indigo transition-colors">
                    <span>Connect</span>
                    <i className="bx bxl-whatsapp text-lg" />
                  </div>
                  <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">Let's chat</div>
                </SpotlightCard>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}