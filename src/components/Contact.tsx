import { useState } from 'react';
import SpotlightCard from './SpotlightCard';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will be replaced with actual form backend
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 border-t border-[#1e293b] bg-[#02050a] relative"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#090e17] border border-[#1e293b] rounded-full">
            <span className="text-xs font-semibold font-mono tracking-widest text-slate-400 uppercase">
              Let's Connect
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Get In Touch</h2>
          <p className="text-sm text-slate-500 leading-relaxed font-mono uppercase tracking-widest">
            Available for new opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Let's create something amazing together.
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Have a project in mind, want to discuss software systems, or simply want to chat? Fill out
              the transmission board, or connect directly via WhatsApp.
            </p>

            <a
              href="https://wa.me/6281369051268"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#090e17] hover:bg-[#111827] border border-[#1e293b] hover:border-slate-400 text-slate-200 px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <i className="bx bxl-whatsapp text-lg text-electric-emerald" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8">
              {!submitted ? (
                <div className="space-y-6 relative z-10">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white tracking-tight">Send a message</h4>
                    <p className="text-xs text-slate-500 font-mono">EST RESPONSE TIME: 2-24 HOURS</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold font-mono tracking-wider text-slate-400 uppercase">
                          Your Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          className="dark-input"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold font-mono tracking-wider text-slate-400 uppercase">
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          className="dark-input"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold font-mono tracking-wider text-slate-400 uppercase">
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="dark-input min-h-[120px] resize-none"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center bg-white text-black hover:bg-slate-200 px-6 py-3.5 rounded-lg font-semibold tracking-tight transition-all duration-200 hover:scale-[1.01]"
                    >
                      <div className="flex items-center gap-2">
                        <i className="bx bx-send text-base" />
                        <span>Send Message</span>
                      </div>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 space-y-4 relative z-10 animate-fade-in-up">
                  <div className="w-12 h-12 rounded-full bg-electric-emerald/10 border border-electric-emerald/30 flex items-center justify-center mx-auto text-electric-emerald">
                    <i className="bx bx-check text-2xl" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-white tracking-tight">Transmission Successful</h4>
                    <p className="text-sm text-slate-400 max-w-sm mx-auto">
                      Your message has been sent. I will review it and get back to you shortly.
                    </p>
                  </div>
                </div>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}