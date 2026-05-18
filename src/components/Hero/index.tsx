import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();
  
  const handleScrollDown = () => {
    const element = document.querySelector('#intro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 overflow-hidden"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-3xl bg-[var(--color-secondary)] flex items-center justify-center shadow-2xl">
            <span className="text-black font-bold text-6xl">L</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-2xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center gap-4"
        >
          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-2xl bg-[var(--color-secondary)] text-black font-semibold text-lg hover:scale-105 transition-transform"
          >
            {t('nav.download')}
          </a>
        </motion.div>
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={handleScrollDown}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={48} className="text-[var(--color-text-secondary)]" />
        </motion.div>
      </motion.button>
      
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 max-w-full max-h-full bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 max-w-full max-h-full bg-white/[0.02] rounded-full blur-3xl" />
      </div>
    </section>
  );
}
