import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';
import { experiences } from '../data/experience';
import Projects from '../components/Projects';
import SpotlightCard from '../components/SpotlightCard';
import { fadeInUp, staggerContainer, scaleIn } from '../lib/animations';

export default function ProjectsPage() {
  return (
    <main className="pt-28 lg:pt-36 pb-20 overflow-hidden">
      {/* Projects Section */}
      <Projects />

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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian-surface border border-obsidian-border rounded-full">
              <span className="text-xs font-semibold font-mono tracking-widest text-text-secondary uppercase">
                Achievements
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Verified Certifications</h2>
            <p className="text-sm text-text-muted leading-relaxed font-mono uppercase tracking-widest">
              Verified professional credentials and accomplishments across Web Frameworks, Mobile Architecture, Cloud Infrastructure, and general IT systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <motion.div key={cert.id} variants={scaleIn}>
                <SpotlightCard className="p-6 space-y-4 h-full">
                  <div className="aspect-video bg-obsidian-elevated rounded-lg border border-obsidian-border flex items-center justify-center">
                    <i className="bx bx-medal text-4xl text-text-muted" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono font-semibold tracking-widest text-electric-indigo uppercase">
                      {cert.category}
                    </span>
                    <h3 className="text-base font-bold text-text-primary">{cert.title}</h3>
                    <p className="text-xs text-text-secondary">{cert.issuer}</p>
                    <p className="text-xs text-text-muted font-mono">{cert.date}</p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-electric-indigo hover:text-text-primary transition-colors"
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
      <section className="py-20 lg:py-32 border-t border-obsidian-border relative">
        <motion.div
          className="container mx-auto px-4 lg:px-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="max-w-3xl mx-auto text-center mb-16 space-y-4" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian-surface border border-obsidian-border rounded-full">
              <span className="text-xs font-semibold font-mono tracking-widest text-text-secondary uppercase">
                Career Map
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Professional Experience</h2>
            <p className="text-sm text-text-muted leading-relaxed font-mono uppercase tracking-widest">
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
                        <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                        <p className="text-sm text-text-secondary">{exp.company}</p>
                        <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                          <i className="bx bx-map-pin" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-electric-indigo font-semibold whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <i className="bx bx-chevron-right text-electric-indigo text-sm mt-0.5 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-obsidian-elevated border border-obsidian-border rounded text-text-secondary"
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