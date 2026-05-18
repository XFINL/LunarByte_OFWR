import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  heavy?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  heavy = false 
}: GlassCardProps) {
  const baseClasses = heavy ? 'glass-heavy' : 'glass';
  
  return (
    <motion.div
      className={clsx(baseClasses, className)}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
