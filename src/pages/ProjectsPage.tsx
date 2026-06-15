import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';
import { experiences } from '../data/experience';
import Projects from '../components/Projects';
import GithubHistory from '../components/GithubHistory';
import SpotlightCard from '../components/SpotlightCard';
import { fadeInUp, staggerContainer, scaleIn } from '../lib/animations';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="pt-20 lg:pt-24 pb-20 overflow-hidden">
      {/* Projects Section */}
      <Projects />

      {/* GitHub Contributions */}
      <GithubHistory />

      {/* Certifications Section */}
      <section className="py-20 lg:py-32 relative">
        <motion.div
          className="container mx-auto px-4 lg:px-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="max-w-3xl mx-auto text-center mb-16 space-y-4" variants={fadeInUp}>
            <div className="neo-badge inline-flex mx-auto">
              <span className="text-xs font-bold font-mono tracking-widest uppercase">
                Achievements
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">Verified Certifications</h2>
            <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
              Verified professional credentials and accomplishments across Web Frameworks, Mobile Architecture, Cloud Infrastructure, and general IT systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <motion.div key={cert.id} variants={scaleIn}>
                <SpotlightCard className="p-6 space-y-4 h-full">
                  <div className="aspect-video bg-neo-elevated rounded-md border-2 border-neo-border flex items-center justify-center">
                    <i className="bx bx-medal text-4xl text-neo-text-muted" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-neo-accent uppercase">
                      {cert.category}
                    </span>
                    <h3 className="text-base font-extrabold text-neo-text-primary font-heading">{cert.title}</h3>
                    <p className="text-xs text-neo-text-secondary">{cert.issuer}</p>
                    <p className="text-xs text-neo-text-muted font-mono font-bold">{cert.date}</p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-neo-accent hover:text-neo-accent-secondary transition-colors underline decoration-2"
                    >
                      <span>View Credential</span>
                      <i className="bx bx-link-external text-sm" />
                    </a>
                  )}
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-32 border-t-3 border-neo-border relative">
        <motion.div
          className="container mx-auto px-4 lg:px-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="max-w-3xl mx-auto text-center mb-16 space-y-4" variants={fadeInUp}>
            <div className="neo-badge inline-flex mx-auto">
              <span className="text-xs font-bold font-mono tracking-widest uppercase">
                Career Map
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">Professional Experience</h2>
            <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
              A timeline tracking my experience across software engineering, academic systems, and community contributions.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={fadeInUp}>
                <SpotlightCard className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-extrabold text-neo-text-primary font-heading">{exp.role}</h3>
                        <p className="text-sm text-neo-text-secondary font-bold">{exp.company}</p>
                        <div className="flex items-center gap-2 text-xs text-neo-text-muted font-mono font-bold">
                          <i className="bx bx-map-pin" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <span
                        className="neo-badge text-xs whitespace-nowrap"
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neo-text-secondary">
                          <i className="bx bx-chevron-right text-neo-accent text-sm mt-0.5 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono font-bold px-2 py-0.5 bg-neo-elevated border-2 border-neo-border rounded-md text-neo-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}