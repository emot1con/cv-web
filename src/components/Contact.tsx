import { useState } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../lib/animations';

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
      className="py-20 lg:py-32 border-t-3 border-neo-border relative overflow-hidden"
    >
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
              Let's Connect
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">Get In Touch</h2>
          <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
            Available for new opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column */}
          <motion.div className="lg:col-span-5 space-y-6" variants={slideInLeft}>
            <h3 className="text-xl font-extrabold text-neo-text-primary tracking-tight font-heading">
              Let's create something amazing together.
            </h3>
            <p className="text-sm text-neo-text-secondary leading-relaxed">
              Have a project in mind, want to discuss software systems, or simply want to chat? Fill out
              the transmission board, or connect directly via WhatsApp.
            </p>

            <a
              href="https://wa.me/6285769371002"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-secondary"
            >
              <i className="bx bxl-whatsapp text-lg text-neo-success" />
              <span>WhatsApp Direct</span>
            </a>
          </motion.div>

          {/* Form Column */}
          <motion.div className="lg:col-span-7" variants={slideInRight}>
            <SpotlightCard className="p-8">
              {!submitted ? (
                <div className="space-y-6 relative z-10">
                  <div className="space-y-1">
                    <h4 className="text-lg font-extrabold text-neo-text-primary tracking-tight font-heading">Send a message</h4>
                    <p className="text-xs text-neo-text-muted font-mono font-bold">EST RESPONSE TIME: 2-24 HOURS</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold font-mono tracking-wider text-neo-text-secondary uppercase">
                          Your Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          className="neo-input"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold font-mono tracking-wider text-neo-text-secondary uppercase">
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          className="neo-input"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold font-mono tracking-wider text-neo-text-secondary uppercase">
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="neo-input min-h-[120px] resize-none"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="neo-btn w-full"
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
                  <div
                    className="w-14 h-14 rounded-md bg-neo-success/20 border-2 border-neo-success flex items-center justify-center mx-auto text-neo-success"
                    style={{ boxShadow: '3px 3px 0px var(--color-neo-shadow)' }}
                  >
                    <i className="bx bx-check text-2xl" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-extrabold text-neo-text-primary tracking-tight font-heading">Transmission Successful</h4>
                    <p className="text-sm text-neo-text-secondary max-w-sm mx-auto">
                      Your message has been sent. I will review it and get back to you shortly.
                    </p>
                  </div>
                </div>
              )}
            </SpotlightCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}