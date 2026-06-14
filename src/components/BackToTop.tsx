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
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[80] w-11 h-11 flex items-center justify-center bg-neo-surface border-2 border-neo-border rounded-md text-neo-text-secondary hover:text-neo-text-primary transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_var(--color-neo-shadow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--color-neo-shadow)]"
          style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
          aria-label="Scroll to top"
        >
          <i className="bx bx-chevron-up text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
