import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import type { Project } from '../types';
import SpotlightCard from './SpotlightCard';
import ProjectModal from './ProjectModal';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="project"
        className="pt-0 pb-20 lg:pb-32 relative overflow-hidden"
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
                My Work
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">Featured Projects</h2>
            <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
              Sleek designs & creative engineering
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <SpotlightCard className="p-0 cursor-pointer h-full">
                  <div
                    onClick={() => setSelected(project)}
                    className="p-6 space-y-4"
                  >
                    {/* Image */}
                    <div className="aspect-video bg-neo-elevated rounded-md overflow-hidden border-2 border-neo-border flex items-center justify-center">
                      <i className="bx bx-code-alt text-3xl text-neo-text-muted" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-bold font-mono tracking-widest uppercase">
                        <span className="text-neo-accent">{project.date}</span>
                        <span className="text-neo-text-muted">•</span>
                        <span className="text-neo-text-secondary">{project.role}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-neo-text-primary tracking-tight font-heading">{project.title}</h3>
                      <p className="text-sm text-neo-text-secondary leading-relaxed">{project.shortDesc}</p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono font-bold px-2 py-0.5 bg-neo-elevated border-2 border-neo-border rounded-md text-neo-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 text-neo-text-muted">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}