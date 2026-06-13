import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types';
import SpotlightCard from './SpotlightCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="project"
        className="py-20 lg:py-32 border-t border-[#1e293b] bg-[#090e17]/10 relative"
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#090e17] border border-[#1e293b] rounded-full">
              <span className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase">
                My Work
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-mono uppercase tracking-widest">
              Sleek designs & creative engineering
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <SpotlightCard key={project.id} className="p-0 cursor-pointer">
                <div
                  onClick={() => setSelected(project)}
                  className="p-6 space-y-4"
                >
                  {/* Image */}
                  <div className="aspect-video bg-[#111827] rounded-lg overflow-hidden border border-[#1e293b] flex items-center justify-center">
                    <i className="bx bx-code-alt text-3xl text-slate-600" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-semibold font-mono tracking-widest text-electric-indigo uppercase">
                      <span>{project.date}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">{project.role}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{project.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.shortDesc}</p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-[#111827] border border-[#1e293b] rounded text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 text-slate-500">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}