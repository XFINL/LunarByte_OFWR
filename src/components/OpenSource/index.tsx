import { useTranslation } from 'react-i18next';
import ScrollAnimator from '../ScrollAnimator';
import GlassCard from '../GlassCard';
import { Github, Code, Heart } from 'lucide-react';

const techItems = [
  { key: 'frontend', valueKey: 'frontend_value' },
  { key: 'styling', valueKey: 'styling_value' },
  { key: 'animation', valueKey: 'animation_value' },
  { key: 'i18n', valueKey: 'i18n_value' },
  { key: 'build', valueKey: 'build_value' },
];

export default function OpenSource() {
  const { t } = useTranslation();
  
  return (
    <section
      id="opensource"
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollAnimator className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t('opensource.title')}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-4">
            {t('opensource.subtitle')}
          </p>
          <p className="text-base text-[var(--color-text-muted)] max-w-3xl mx-auto">
            {t('opensource.description')}
          </p>
        </ScrollAnimator>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <ScrollAnimator>
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center">
                  <Code size={24} className="text-black" />
                </div>
                <h3 className="text-2xl font-semibold">
                  {t('opensource.tech_stack')}
                </h3>
              </div>
              
              <div className="space-y-4">
                {techItems.map((item) => (
                  <div
                    key={item.key}
                    className="flex justify-between items-center py-3 border-b border-[var(--color-glass-border)] last:border-b-0"
                  >
                    <span className="text-[var(--color-text-secondary)]">
                      {t(`opensource.tech_items.${item.key}`)}
                    </span>
                    <span className="text-[var(--color-text-primary)] font-medium">
                      {t(`opensource.tech_items.${item.valueKey}`)}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollAnimator>
          
          <ScrollAnimator delay={0.2}>
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center">
                  <Github size={24} className="text-black" />
                </div>
                <h3 className="text-2xl font-semibold">
                  {t('opensource.contribute')}
                </h3>
              </div>
              
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                {t('opensource.contribute_desc')}
              </p>
              
              <button
                onClick={() => window.open('https://github.com/XFINL/Lunarbyte_zero', '_blank')}
                className="w-full px-6 py-4 rounded-xl bg-[var(--color-secondary)] text-black font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              >
                <Github size={20} />
                <span>GitHub Repository</span>
              </button>
            </GlassCard>
          </ScrollAnimator>
        </div>
        
        <ScrollAnimator className="text-center">
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Heart size={24} className="text-[var(--color-secondary)]" />
              <span className="text-xl font-semibold">Open Source</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm">
              {t('opensource.contribute_desc')}
            </p>
          </GlassCard>
        </ScrollAnimator>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 max-w-full max-h-full bg-white/[0.01] rounded-full blur-3xl" />
      </div>
    </section>
  );
}
