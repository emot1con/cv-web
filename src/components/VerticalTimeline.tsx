import { motion } from 'framer-motion';
import { howIWork } from '../data/timeline';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function VerticalTimeline() {
  return (
    <section
      id="how-i-work"
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
              Process
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">How I Work</h2>
          <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
            From idea to production — my engineering workflow
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[3px] bg-neo-border md:-translate-x-px" />

          {howIWork.map((entry) => (
            <motion.div
              key={entry.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative flex items-start mb-12 last:mb-0 md:even:flex-row-reverse"
            >
              {/* Connector Dot */}
              <div className="absolute left-5 md:left-1/2 z-10 -translate-x-1/2">
                <div
                  className="w-10 h-10 rounded-md bg-neo-surface border-2 border-neo-accent flex items-center justify-center"
                  style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
                >
                  <i className={`bx ${entry.icon} text-neo-accent text-sm`} />
                </div>
              </div>

              {/* Spacer for desktop alignment */}
              <div className="hidden md:block w-1/2" />

              {/* Content — no border card */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                <div className="space-y-2">
                  {/* Step */}
                  <span className="text-[10px] font-bold font-mono tracking-widest text-neo-accent uppercase">
                    {entry.step}
                  </span>
                  {/* Title */}
                  <h3 className="text-base font-extrabold text-neo-text-primary font-heading">
                    {entry.title}
                  </h3>
                  {/* Description — separate line */}
                  <p className="text-sm text-neo-text-secondary leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}