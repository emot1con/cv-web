import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '../hooks/useTheme';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function GithubHistory() {
  const { theme } = useTheme();

  return (
    <section
      id="github-history"
      className="py-20 lg:py-32 border-t-3 border-neo-border bg-neo-bg relative overflow-hidden"
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
              Activity
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neo-text-primary font-heading">GitHub Contributions</h2>
          <p className="text-sm text-neo-text-muted leading-relaxed font-mono uppercase tracking-widest">
            My Open Source & Private Commits
          </p>
        </motion.div>

        {/* Calendar */}
        <motion.div 
          variants={fadeInUp} 
          className="flex justify-center p-6 lg:p-8 bg-neo-surface border-2 border-neo-border rounded-lg max-w-5xl mx-auto overflow-x-auto"
          style={{ boxShadow: '4px 4px 0px var(--color-neo-shadow)' }}
        >
          <GitHubCalendar 
            username="emot1con" 
            colorScheme={theme === 'light' ? 'light' : 'dark'}
            fontSize={14}
            blockSize={12}
            blockMargin={5}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
