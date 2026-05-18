import { useTranslation } from 'react-i18next';
import ScrollAnimator from '../ScrollAnimator';
import GlassCard from '../GlassCard';
import { Code, Palette, AudioLines, Server } from 'lucide-react';

const teamMembers = [
  {
    roleKey: 'lead_dev',
    nameKey: 'lead_dev_name',
    icon: Code,
  },
  {
    roleKey: 'designer',
    nameKey: 'designer_name',
    icon: Palette,
  },
  {
    roleKey: 'audio_eng',
    nameKey: 'audio_eng_name',
    icon: AudioLines,
  },
  {
    roleKey: 'backend',
    nameKey: 'backend_name',
    icon: Server,
  },
];

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
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t('team.description')}
          </p>
        </ScrollAnimator>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <ScrollAnimator key={member.roleKey} delay={index * 0.1}>
              <GlassCard className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-glass-bg-hover)] flex items-center justify-center">
                  <member.icon size={40} className="text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`team.members.${member.nameKey}`)}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {t(`team.members.${member.roleKey}`)}
                </p>
              </GlassCard>
            </ScrollAnimator>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl" />
      </div>
    </section>
  );
}
