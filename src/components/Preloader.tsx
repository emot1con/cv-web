import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if this is a first visit in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Simulate progress
    const steps = [10, 25, 45, 60, 78, 90, 100];
    let i = 0;

    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem('hasVisited', 'true');
          setIsLoading(false);
        }, 400);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[10000] bg-neo-bg flex flex-col items-center justify-center gap-8"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-center space-y-2"
          >
            <div className="text-xl font-extrabold font-mono text-neo-text-primary tracking-tight">
              ~/Numpyh
            </div>
            <div className="text-xs font-mono text-neo-text-muted tracking-widest uppercase font-bold">
              Initializing system...
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="relative"
          >
            <div
              className="w-[200px] h-[6px] bg-neo-surface border-2 border-neo-border rounded-md overflow-hidden"
              style={{ boxShadow: '2px 2px 0px var(--color-neo-shadow)' }}
            >
              <motion.div
                className="h-full bg-neo-accent"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>
            <div className="text-center mt-3">
              <span className="text-[10px] font-mono text-neo-text-muted tabular-nums font-bold">
                {progress}%
              </span>
            </div>
          </motion.div>

          {/* Decorative squares */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 bg-neo-accent border-2 border-neo-border"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
