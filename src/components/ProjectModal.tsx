import { useEffect } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    // Trigger entrance animation
    requestAnimationFrame(() => {
      const backdrop = document.getElementById('project-modal-backdrop');
      const box = document.getElementById('project-modal-box');
      if (backdrop) backdrop.classList.remove('opacity-0');
      if (box) {
        box.classList.remove('scale-95', 'opacity-0');
        box.classList.add('scale-100', 'opacity-100');
      }
    });

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleClose = () => {
    const backdrop = document.getElementById('project-modal-backdrop');
    const box = document.getElementById('project-modal-box');
    if (backdrop) backdrop.classList.add('opacity-0');
    if (box) {
      box.classList.remove('scale-100', 'opacity-100');
      box.classList.add('scale-95', 'opacity-0');
    }
    setTimeout(onClose, 300);
  };

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 opacity-100 pointer-events-auto transition-all duration-300 ease-out"
    >
      {/* Backdrop */}
      <div
        id="project-modal-backdrop"
        className="absolute inset-0 bg-[#050607]/80 backdrop-blur-md cursor-pointer transition-opacity duration-300 opacity-0"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        id="project-modal-box"
        className="relative bg-[#0B0D10] border border-[#181C24] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl scale-95 opacity-0 transition-all duration-300 ease-out flex flex-col max-h-[90vh]"
      >
        {/* Banner */}
        <div className="relative aspect-video w-full bg-black/40 overflow-hidden border-b border-[#181C24]">
          <div className="w-full h-full bg-gradient-to-br from-[#11141B] to-[#050607] flex items-center justify-center">
            <i className="bx bx-code-alt text-5xl text-slate-600" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] to-transparent" />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 text-white rounded-full transition-all duration-200"
          >
            <i className="bx bx-x text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow scrollbar-thin">
          {/* Title & Meta */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold font-mono tracking-widest text-electric-indigo uppercase">
                {project.date}
              </span>
              <span className="text-slate-600 font-mono text-[10px]">•</span>
              <span className="text-[10px] font-semibold font-mono tracking-widest text-slate-400 uppercase">
                {project.role}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              Project Overview
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.longDesc}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              Key Features & Implementation
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-400 font-mono list-none p-0">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <i className="bx bx-check-circle text-electric-indigo text-sm mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 bg-[#11141B]/40 border-t border-[#181C24] flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
          <button
            onClick={handleClose}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0B0D10] hover:bg-[#11141B] border border-[#181C24] hover:border-[#2A3040] text-slate-300 hover:text-white px-5 py-2.5 rounded-lg text-xs font-semibold font-mono tracking-tight transition-all duration-200"
          >
            <span>Close Details</span>
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-black px-5 py-2.5 rounded-lg text-xs font-semibold font-mono tracking-tight transition-all duration-200 hover:scale-[1.01]"
          >
            <span>View Repository</span>
            <i className="bx bx-git-repo-forked text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}