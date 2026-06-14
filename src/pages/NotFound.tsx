import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function NotFound() {
  return (
    <main className="pt-28 lg:pt-36 pb-20 min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="container mx-auto px-4 lg:px-8 text-center max-w-2xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Glitch-style 404 */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="relative inline-block">
            <span className="text-[120px] md:text-[180px] font-extrabold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 leading-none select-none">
              404
            </span>
            <span className="absolute inset-0 text-[120px] md:text-[180px] font-extrabold font-mono tracking-tighter text-electric-indigo/10 leading-none select-none animate-pulse">
              404
            </span>
          </div>

          {/* Terminal-style message */}
          <div className="bg-obsidian-surface border border-obsidian-border rounded-xl p-6 max-w-md mx-auto text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="font-mono text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-electric-indigo font-bold">$</span>
                <span className="text-text-secondary">cd /requested-page</span>
              </div>
              <div className="text-red-400/80">
                bash: cd: /requested-page: No such file or directory
              </div>
              <div className="flex items-center gap-2">
                <span className="text-electric-indigo font-bold">$</span>
                <span className="text-text-muted animate-pulse">_</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-xl font-bold text-text-primary tracking-tight">
              Page not found
            </h1>
            <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-text-primary hover:bg-slate-200 text-obsidian-bg px-6 py-3 rounded-xl font-semibold tracking-tight transition-all duration-200 hover:scale-[1.01] text-sm"
            >
              <i className="bx bx-home text-base" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Keyboard shortcut hint */}
          <div className="text-[10px] font-mono text-text-muted pt-4">
            Tip: Press{' '}
            <kbd className="px-1.5 py-0.5 bg-obsidian-elevated border border-obsidian-border rounded text-text-secondary">
              Ctrl+K
            </kbd>{' '}
            to search for pages
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
