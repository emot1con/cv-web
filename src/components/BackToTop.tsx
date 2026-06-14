import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[80] w-11 h-11 flex items-center justify-center bg-obsidian-surface/90 backdrop-blur-md border border-obsidian-border hover:border-electric-indigo/40 rounded-full shadow-lg shadow-black/40 text-text-secondary hover:text-text-primary transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <i className="bx bx-chevron-up text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
