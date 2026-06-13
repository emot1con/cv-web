import { howIWork } from '../data/timeline';

export default function VerticalTimeline() {
  return (
    <section
      id="how-i-work"
      className="py-20 lg:py-32 border-t border-[#181C24] bg-[#0B0D10]/10 relative"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B0D10] border border-[#181C24] rounded-full">
            <span className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase">
              Process
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">How I Work</h2>
          <p className="text-sm text-slate-500 leading-relaxed font-mono uppercase tracking-widest">
            From idea to production — my engineering workflow
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-indigo/40 via-electric-cyan/20 to-transparent md:-translate-x-px" />

          {howIWork.map((entry) => {

            return (
              <div
                key={entry.id}
                className="relative flex items-start mb-12 last:mb-0 md:even:flex-row-reverse"
              >
                {/* Connector Dot */}
                <div className="absolute left-5 md:left-1/2 z-10 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-full bg-[#0B0D10] border-2 border-electric-indigo flex items-center justify-center shadow-lg shadow-electric-indigo/20">
                    <i className={`bx ${entry.icon} text-electric-indigo text-sm`} />
                  </div>
                </div>

                {/* Spacer for desktop alignment */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <div className="spotlight-card group p-5 md:p-6">
                    <div className="spotlight-glow -top-32 -left-32 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 space-y-3">
                      {/* Step badge + Title */}
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold font-mono tracking-widest text-electric-indigo uppercase">
                          {entry.step}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white">{entry.title}</h3>

                      <p className="text-sm text-slate-400 leading-relaxed">
                        {entry.description}
                      </p>

                      <ul className="space-y-1.5 pt-1">
                        {entry.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                            <i className="bx bx-chevron-right text-electric-indigo text-sm mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}