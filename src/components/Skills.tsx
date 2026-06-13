import { skillCategories } from '../data/skills';
import SpotlightCard from './SpotlightCard';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 border-t border-[#181C24] bg-[#050607] relative"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B0D10] border border-[#181C24] rounded-full">
            <span className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Technical Skills</h2>
          <p className="text-sm text-slate-500 leading-relaxed font-mono uppercase tracking-widest">
            Technologies & Tools in Practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <SpotlightCard key={cat.title} className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#11141B] border border-[#181C24] flex items-center justify-center text-white">
                  <i className={`bx ${cat.icon} text-lg`} />
                </div>
                <h3 className="text-base font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span key={skill.name} className="tech-badge">
                    <img
                      src={skill.icon}
                      className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100"
                      alt={skill.name}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}