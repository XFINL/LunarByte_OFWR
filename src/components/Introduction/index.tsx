import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ScrollAnimator from '../ScrollAnimator';
import GlassCard from '../GlassCard';
import { Music, ListMusic, Smartphone, Palette } from 'lucide-react';

const features = [
  {
    icon: Music,
    key: 'hd_audio',
    descKey: 'hd_audio_desc',
  },
  {
    icon: ListMusic,
    key: 'smart_playlist',
    descKey: 'smart_playlist_desc',
  },
  {
    icon: Smartphone,
    key: 'cross_platform',
    descKey: 'cross_platform_desc',
  },
  {
    icon: Palette,
    key: 'custom_ui',
    descKey: 'custom_ui_desc',
  },
];

export default function Introduction() {
  const { t } = useTranslation();
  
  return (
    <section
      id="intro"
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollAnimator className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t('intro.title')}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {t('intro.description')}
          </p>
        </ScrollAnimator>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimator key={feature.key} delay={index * 0.1}>
              <GlassCard className="p-8 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                    <feature.icon size={28} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {t(`intro.features.${feature.key}`)}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {t(`intro.features.${feature.descKey}`)}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollAnimator>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
