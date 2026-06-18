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
    setTimeout(onClose, 200);
  };

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 opacity-100 pointer-events-auto transition-all duration-200 ease-out"
    >
      {/* Backdrop */}
      <div
        id="project-modal-backdrop"
        className="absolute inset-0 bg-black/70 cursor-pointer transition-opacity duration-200 opacity-0"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        id="project-modal-box"
        className="relative bg-neo-surface border-3 border-neo-border w-full max-w-2xl rounded-lg overflow-hidden scale-95 opacity-0 transition-all duration-200 ease-out flex flex-col max-h-[90vh]"
        style={{ boxShadow: '8px 8px 0px var(--color-neo-shadow)' }}
      >
        {/* Banner */}
        <div className="relative aspect-video w-full bg-neo-elevated overflow-hidden border-b-3 border-neo-border">
          {project.image && project.image !== '/img/placeholder-project.jpg' ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-neo-elevated flex items-center justify-center">
              <i className="bx bx-code-alt text-5xl text-neo-text-muted" />
            </div>
          )}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-neo-surface border-2 border-neo-border text-neo-text-primary rounded-md transition-all duration-150 hover:bg-neo-accent hover:text-white"
            style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
          >
            <i className="bx bx-x text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow scrollbar-thin">
          {/* Title & Meta */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-mono tracking-widest text-neo-accent uppercase">
                {project.date}
              </span>
              <span className="text-neo-text-muted font-mono text-[10px]">•</span>
              <span className="text-[10px] font-bold font-mono tracking-widest text-neo-text-secondary uppercase">
                {project.role}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-neo-text-primary tracking-tight font-heading">{project.title}</h3>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-neo-text-secondary uppercase tracking-wider font-mono">
              Project Overview
            </h4>
            <p className="text-sm text-neo-text-secondary leading-relaxed">{project.longDesc}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-neo-text-secondary uppercase tracking-wider font-mono">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="neo-badge text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-neo-text-secondary uppercase tracking-wider font-mono">
              Key Features & Implementation
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neo-text-secondary font-mono list-none p-0">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <i className="bx bx-check-circle text-neo-accent text-sm mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 bg-neo-elevated/40 border-t-3 border-neo-border flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
          <button
            onClick={handleClose}
            className="neo-btn-secondary w-full sm:w-auto text-xs"
          >
            <span>Close Details</span>
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn w-full sm:w-auto text-xs"
          >
            <span>View Repository</span>
            <i className="bx bx-git-repo-forked text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}