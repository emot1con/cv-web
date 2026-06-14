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
        {/* Brutalist 404 */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="relative inline-block">
            <span
              className="text-[120px] md:text-[180px] font-extrabold font-mono tracking-tighter text-neo-accent leading-none select-none"
              style={{ textShadow: '6px 6px 0px var(--color-neo-shadow)' }}
            >
              404
            </span>
          </div>

          {/* Terminal-style message */}
          <div
            className="bg-neo-surface border-3 border-neo-border rounded-lg p-6 max-w-md mx-auto text-left"
            style={{ boxShadow: '4px 4px 0px var(--color-neo-shadow)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border-2 border-neo-border" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border-2 border-neo-border" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border-2 border-neo-border" />
            </div>
            <div className="font-mono text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-neo-accent font-bold">$</span>
                <span className="text-neo-text-secondary">cd /requested-page</span>
              </div>
              <div className="text-red-400 font-bold">
                bash: cd: /requested-page: No such file or directory
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neo-accent font-bold">$</span>
                <span className="text-neo-text-muted animate-pulse">_</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-xl font-extrabold text-neo-text-primary tracking-tight font-heading">
              Page not found
            </h1>
            <p className="text-sm text-neo-text-secondary max-w-sm mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="neo-btn"
            >
              <i className="bx bx-home text-base" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Keyboard shortcut hint */}
          <div className="text-[10px] font-mono text-neo-text-muted pt-4 font-bold">
            Tip: Press{' '}
            <kbd
              className="px-1.5 py-0.5 bg-neo-elevated border-2 border-neo-border rounded-md text-neo-text-secondary font-bold"
            >
              Ctrl+K
            </kbd>{' '}
            to search for pages
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
