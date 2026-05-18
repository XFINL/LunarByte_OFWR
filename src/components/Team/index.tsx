import { useTranslation } from 'react-i18next';
import ScrollAnimator from '../ScrollAnimator';
import GlassCard from '../GlassCard';
import { User } from 'lucide-react';

export default function Team() {
  const { t } = useTranslation();
  
  return (
    <section
      id="team"
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollAnimator className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t('team.title')}
          </h2>
          <div className="mb-4">
            <span className="inline-block px-6 py-3 rounded-full glass text-xl font-semibold">
              {t('team.group_name')}
            </span>
          </div>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t('team.company')}
          </p>
          <p className="text-base text-[var(--color-text-muted)] max-w-2xl mx-auto mt-2">
            {t('team.description')}
          </p>
        </ScrollAnimator>
        
        <ScrollAnimator className="max-w-2xl mx-auto">
          <GlassCard className="p-12 text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-[var(--color-glass-bg-hover)] flex items-center justify-center border-4 border-[var(--color-secondary)]">
              <User size={64} className="text-[var(--color-secondary)]" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              {t('team.members.xfin')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full glass text-sm font-medium">
                UI
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium">
                {t('nav.intro')}
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium">
                Backend
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium">
                Testing
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium">
                DevOps
              </span>
            </div>
            <p className="text-[var(--color-text-secondary)]">
              {t('team.members.xfin_role')}
            </p>
          </GlassCard>
        </ScrollAnimator>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl" />
      </div>
    </section>
  );
}
