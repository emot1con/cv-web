import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { fadeInUp, staggerContainer } from '../lib/animations';

const dotColors = ['bg-purple-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-red-500', 'bg-teal-500', 'bg-pink-500'];

const getFilledSkills = (skills: any[]) => {
  const minItems = 12;
  let filled = [...skills];
  while (filled.length < minItems) {
    filled = [...filled, ...skills];
  }
  return filled;
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 border-t-3 border-neo-border relative overflow-hidden"
    >
      <motion.div
        className="container mx-auto relative z-10"
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

        <div className="space-y-12 lg:space-y-16 relative overflow-hidden marquee-container">
          {skillCategories.map((category, index) => {
            const filledSkills = getFilledSkills(category.skills);
            const displaySkills = [...filledSkills, ...filledSkills];
            const dotColor = dotColors[index % dotColors.length];

            return (
              <motion.div key={category.title} variants={fadeInUp} className="relative">
                {/* Category Badge */}
                <div className="px-4 lg:px-12 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neo-border bg-neo-surface/30 backdrop-blur-sm">
                    <div className={`w-2 h-2 rounded-full ${dotColor}`} />
                    <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest uppercase text-neo-text-secondary">
                      {category.title}
                    </span>
                  </div>
                </div>

                {/* Scrolling Icons */}
                <div className="flex overflow-hidden py-2 relative group">
                  {/* Fading Edges */}
                  <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-neo-bg to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-neo-bg to-transparent z-10 pointer-events-none" />
                  
                  <div className={index % 2 === 0 ? "animate-marquee flex items-center" : "animate-marquee-reverse flex items-center"}>
                    {displaySkills.map((skill, i) => (
                      <div
                        key={`${category.title}-${i}`}
                        className="flex items-center justify-center mx-6 sm:mx-10 transition-transform duration-300 hover:scale-125"
                        title={skill.name}
                      >
                        <img src={skill.icon} className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-sm" alt={skill.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}