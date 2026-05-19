import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ScrollAnimator from '../ScrollAnimator';
import GlassCard from '../GlassCard';
import { Smartphone, Monitor } from 'lucide-react';

const platforms = [
  {
    id: 'android',
    icon: Smartphone,
  },
  {
    id: 'mac',
    icon: Monitor,
  },
  {
    id: 'windows',
    icon: Monitor,
  },
  {
    id: 'ios',
    icon: Smartphone,
  },
];

export default function Download() {
  const { t } = useTranslation();
  
  const handleDownload = (platform: string) => {
    if (platform === 'android') {
      window.open('/downloads/Android/zero.apk', '_blank');
    }
  };
  
  return (
    <section
      id="download"
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollAnimator className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t('download.title')}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)]">
            {t('download.subtitle')}
          </p>
        </ScrollAnimator>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const isAvailable = platform.id === 'android';
            const Icon = platform.icon;
            
            return (
              <ScrollAnimator key={platform.id} delay={index * 0.1}>
                <motion.div
                  whileHover={isAvailable ? { scale: 1.05 } : {}}
                  whileTap={isAvailable ? { scale: 0.95 } : {}}
                >
                  <GlassCard
                    className="p-8 text-center cursor-pointer"
                    hover={isAvailable}
                  >
                    <div className={`
                      w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center
                      ${isAvailable ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-glass-bg-hover)]'}
                    `}>
                      <Icon 
                        size={40} 
                        className={isAvailable ? 'text-black' : 'text-[var(--color-text-muted)]'} 
                      />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-3">
                      {t(`download.${platform.id}.name`)}
                    </h3>
                    
                    <p className={`
                      text-sm mb-4
                      ${isAvailable ? 'text-[var(--color-text-secondary)]' : 'text-[var(--color-text-muted)]'}
                    `}>
                      {t(`download.${platform.id}.version`)}
                    </p>
                    
                    <div className={`
                      inline-block px-4 py-2 rounded-full text-xs font-medium
                      ${isAvailable 
                        ? 'bg-[var(--color-secondary)] text-black' 
                        : 'bg-[var(--color-glass-bg-hover)] text-[var(--color-text-muted)]'
                      }
                    `}>
                      {t(`download.${platform.id}.status`)}
                    </div>
                    
                    {isAvailable && (
                      <div className="mt-4">
                        <button
                          onClick={() => handleDownload(platform.id)}
                          className="px-6 py-2 rounded-xl bg-[var(--color-secondary)] text-black font-semibold hover:opacity-90 transition-opacity"
                        >
                          {t('nav.download')}
                        </button>
                      </div>
                    )}
                  </GlassCard>
                </motion.div>
              </ScrollAnimator>
            );
          })}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] max-w-[100vw] max-h-[100vh] bg-white/[0.01] rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
