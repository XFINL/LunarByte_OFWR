import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../LanguageSwitcher';
import { clsx } from 'clsx';

export default function Navigation() {
  const { t } = useTranslation();
  
  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'intro', href: '#intro' },
    { key: 'team', href: '#team' },
    { key: 'download', href: '#download' },
    { key: 'opensource', href: '#opensource' },
  ];
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-[var(--z-index-sticky)]',
        'px-6 py-4 mx-auto max-w-7xl',
        'mt-4 rounded-2xl',
        'glass-heavy'
      )}
      style={{ marginLeft: '2rem', marginRight: '2rem' }}
    >
      <div className="flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, '#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-black font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            {t('hero.title')}
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium',
                'text-[var(--color-text-secondary)]',
                'hover:text-[var(--color-text-primary)]',
                'hover:bg-[var(--color-glass-bg-hover)]',
                'transition-[var(--transition-fast)]'
              )}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
}
