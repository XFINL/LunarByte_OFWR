import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimator({ children, className = '', delay = 0 }: ScrollAnimatorProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
