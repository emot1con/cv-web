import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function GithubHistory() {
  return (
    <section
      id="github-history"
      className="py-20 lg:py-32 border-t border-obsidian-border bg-obsidian-bg relative overflow-hidden"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian-surface border border-obsidian-border rounded-full">
            <span className="text-xs font-semibold font-mono tracking-widest text-text-secondary uppercase">
              Activity
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">GitHub Contributions</h2>
          <p className="text-sm text-text-muted leading-relaxed font-mono uppercase tracking-widest">
            My Open Source & Private Commits
          </p>
        </motion.div>

        {/* Calendar */}
        <motion.div 
          variants={fadeInUp} 
          className="flex justify-center p-6 lg:p-8 bg-obsidian-surface border border-obsidian-border rounded-2xl max-w-5xl mx-auto overflow-x-auto"
        >
          <GitHubCalendar 
            username="emot1con" 
            colorScheme="dark"
            fontSize={14}
            blockSize={12}
            blockMargin={5}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
