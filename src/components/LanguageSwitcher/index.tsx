import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { clsx } from 'clsx';

const languages = [
  { code: 'zh-TW', label: '繁體中文', flag: 'TW' },
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'ja', label: '日本語', flag: 'JA' },
  { code: 'ru', label: 'Русский', flag: 'RU' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex items-center gap-2 px-4 py-2 rounded-lg',
          'glass hover:bg-[var(--color-glass-bg-hover)]',
          'text-[var(--color-text-primary)]',
          'transition-[var(--transition-fast)]'
        )}
        aria-label="Language switcher"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLang.flag}</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={clsx(
                'absolute right-0 mt-2 py-2 px-2 min-w-[160px] rounded-lg z-50',
                'glass-heavy'
              )}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={clsx(
                    'w-full flex items-center gap-3 px-3 py-2 rounded-md',
                    'text-sm font-medium text-left',
                    'transition-[var(--transition-fast)]',
                    lang.code === i18n.language 
                      ? 'bg-[var(--color-glass-bg-hover)] text-[var(--color-secondary)]' 
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  )}
                >
                  <span className="w-6 text-center">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
