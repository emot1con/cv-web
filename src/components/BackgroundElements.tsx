import { motion, useScroll, useTransform } from 'framer-motion';

const elements = [
  // Top Section
  { text: '</>', left: '10%', top: '10%', speed: 0.5, scale: 1.2 },
  { text: '{}', left: '85%', top: '15%', speed: 0.8, scale: 1.5 },
  { text: '[]', left: '75%', top: '40%', speed: 0.3, scale: 0.9 },
  { text: '~/', left: '15%', top: '50%', speed: 0.6, scale: 1.1 },
  { text: '&&', left: '45%', top: '30%', speed: 0.4, scale: 1.4 },
  { text: '||', left: '90%', top: '65%', speed: 0.7, scale: 1.0 },
  
  // Middle Section
  { text: '--', left: '8%', top: '80%', speed: 0.55, scale: 1.3 },
  { text: '++', left: '82%', top: '95%', speed: 0.9, scale: 1.1 },
  { text: '==', left: '25%', top: '110%', speed: 0.35, scale: 0.8 },
  { text: '()', left: '65%', top: '130%', speed: 0.65, scale: 1.2 },
  { text: ';;', left: '50%', top: '150%', speed: 0.45, scale: 1.5 },
  
  // Bottom Section
  { text: '/**/', left: '12%', top: '170%', speed: 0.75, scale: 1.0 },
  { text: '$$', left: '88%', top: '190%', speed: 0.5, scale: 1.3 },
  { text: '->', left: '35%', top: '210%', speed: 0.85, scale: 0.9 },
  { text: '!=', left: '75%', top: '230%', speed: 0.4, scale: 1.4 },
  { text: '/>', left: '20%', top: '260%', speed: 0.6, scale: 1.1 },
];

export default function BackgroundElements() {
  const { scrollY } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {elements.map((el, i) => {
        // useTransform maps scrollY to a Y offset based on speed
        // Increased scroll range to 4000 to cover the whole page depth
        const yPos = useTransform(scrollY, [0, 4000], [0, -1000 * el.speed]);
        
        return (
          <motion.div
            key={i}
            className="absolute font-mono font-bold text-neo-text-secondary opacity-10"
            style={{
              left: el.left,
              top: el.top,
              y: yPos,
              fontSize: `${el.scale * 2.5}rem`,
            }}
          >
            {el.text}
          </motion.div>
        );
      })}
    </div>
  );
}
