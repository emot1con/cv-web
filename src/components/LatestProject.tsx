import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Project } from '../types';
import SpotlightCard from './SpotlightCard';
import ProjectModal from './ProjectModal';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function LatestProject() {
  const [selected, setSelected] = useState<Project | null>(null);
  
  // Get the latest project (Mistletoe)
  const latestProject = projects[0];

  return (
    <>
      <section className="py-20 lg:py-32 relative overflow-hidden border-t-3 border-neo-border">
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
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">My Latest Project</h2>
            <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
              A glimpse into what I've been building recently
            </p>
          </motion.div>

          {/* Latest Project Card */}
          <motion.div className="max-w-3xl mx-auto" variants={fadeInUp}>
            <SpotlightCard className="p-0 cursor-pointer">
              <div
                onClick={() => setSelected(latestProject)}
                className="p-6 md:p-8 space-y-6 md:space-y-0 md:flex md:gap-8 items-center"
              >
                {/* Image */}
                <div className="w-full md:w-1/2 aspect-video bg-neo-elevated rounded-md overflow-hidden border-2 border-neo-border flex items-center justify-center shrink-0">
                  {latestProject.image && latestProject.image !== '/img/placeholder-project.jpg' ? (
                    <img src={latestProject.image} alt={latestProject.title} className="w-full h-full object-cover" />
                  ) : (
                    <i className="bx bx-code-alt text-4xl text-neo-text-muted" />
                  )}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold font-mono tracking-widest uppercase">
                      <span className="text-neo-accent">{latestProject.date}</span>
                      <span className="text-neo-text-muted">•</span>
                      <span className="text-neo-text-secondary">{latestProject.role}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-neo-text-primary tracking-tight font-heading">{latestProject.title}</h3>
                    <p className="text-sm text-neo-text-secondary leading-relaxed">{latestProject.shortDesc}</p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {latestProject.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-bold px-2 py-0.5 bg-neo-elevated border-2 border-neo-border rounded-md text-neo-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {latestProject.techStack.length > 4 && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 text-neo-text-muted">
                        +{latestProject.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* See More Button */}
          <motion.div className="flex justify-center mt-12" variants={fadeInUp}>
            <Link to="/projects" className="neo-btn-secondary">
              <span>See More Projects</span>
              <i className="bx bx-right-arrow-alt text-lg" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
