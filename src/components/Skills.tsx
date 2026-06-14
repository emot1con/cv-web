import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function Skills() {
  const allSkills = skillCategories.flatMap(cat => cat.skills);
  const half = Math.ceil(allSkills.length / 2);
  const topRowSkills = allSkills.slice(0, half);
  const bottomRowSkills = allSkills.slice(half);
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 border-t-3 border-neo-border bg-neo-bg relative overflow-hidden"
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
              Expertise
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">Technical Skills</h2>
          <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
            Technologies & Tools in Practice
          </p>
        </motion.div>

        <div className="space-y-6 relative overflow-hidden marquee-container">
          {/* Fading edges for marquee */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-neo-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-neo-bg to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden py-2">
            <div className="animate-marquee">
              {[...topRowSkills, ...topRowSkills].map((skill, i) => (
                <div
                  key={`top-${i}`}
                  className="flex items-center gap-3 px-5 py-3 mx-3 bg-neo-surface border-2 border-neo-border rounded-md cursor-pointer group transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_var(--color-neo-shadow)]"
                  style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
                >
                  <img src={skill.icon} className="w-6 h-6 group-hover:scale-110 transition-transform" alt={skill.name} />
                  <span className="font-bold text-neo-text-primary whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex overflow-hidden py-2">
            <div className="animate-marquee-reverse">
              {[...bottomRowSkills, ...bottomRowSkills].map((skill, i) => (
                <div
                  key={`bottom-${i}`}
                  className="flex items-center gap-3 px-5 py-3 mx-3 bg-neo-surface border-2 border-neo-border rounded-md cursor-pointer group transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_var(--color-neo-shadow)]"
                  style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
                >
                  <img src={skill.icon} className="w-6 h-6 group-hover:scale-110 transition-transform" alt={skill.name} />
                  <span className="font-bold text-neo-text-primary whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}