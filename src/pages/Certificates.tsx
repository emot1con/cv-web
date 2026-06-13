import { certificates } from '../data/certificates';
import { experiences } from '../data/experience';
import SpotlightCard from '../components/SpotlightCard';

export default function Certificates() {
  return (
    <main className="pt-28 lg:pt-36 pb-20">
      {/* Certifications Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#090e17] border border-[#1e293b] rounded-full">
              <span className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase">
                Achievements
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Verified Certifications</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-mono uppercase tracking-widest">
              Verified professional credentials and accomplishments across Web Frameworks, Mobile Architecture, Cloud Infrastructure, and general IT systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <SpotlightCard key={cert.id} className="p-6 space-y-4">
                <div className="aspect-video bg-[#111827] rounded-lg border border-[#1e293b] flex items-center justify-center">
                  <i className="bx bx-medal text-4xl text-slate-600" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-semibold tracking-widest text-electric-indigo uppercase">
                    {cert.category}
                  </span>
                  <h3 className="text-base font-bold text-white">{cert.title}</h3>
                  <p className="text-xs text-slate-400">{cert.issuer}</p>
                  <p className="text-xs text-slate-500 font-mono">{cert.date}</p>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-electric-indigo hover:text-white transition-colors"
                  >
                    <span>View Credential</span>
                    <i className="bx bx-link-external text-sm" />
                  </a>
                )}
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-32 border-t border-[#1e293b] relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#090e17] border border-[#1e293b] rounded-full">
              <span className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase">
                Career Map
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Professional Experience</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-mono uppercase tracking-widest">
              A timeline tracking my experience across software engineering, academic systems, and community contributions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp) => (
              <SpotlightCard key={exp.id} className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-sm text-slate-300">{exp.company}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
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
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <i className="bx bx-chevron-right text-electric-indigo text-sm mt-0.5 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-[#111827] border border-[#1e293b] rounded text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}