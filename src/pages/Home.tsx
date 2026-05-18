import React, { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../store';
import translations from '../translations';

type Language = 'zh-TW' | 'en' | 'ja' | 'ru';

const Home: React.FC = () => {
  const { language, setLanguage } = useAppStore();
  const t = translations[language];
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    download: useRef<HTMLDivElement>(null),
    github: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <div className="glass-strong rounded-3xl px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">L</span>
            </div>
            <span className="text-xl font-bold tracking-wider">LunarByte_Zero</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.home}
            </a>
            <a href="#download" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.download}
            </a>
            <a href="#github" className="text-gray-300 hover:text-white transition-colors">
              GitHub
            </a>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl glass hover:bg-white/10 transition-all"
            >
              <span>Lang</span>
              <span>{t.langs[language]}</span>
              <span className={`text-sm transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-3 glass-strong rounded-2xl p-2 min-w-[150px] shadow-2xl">
                {(['zh-TW', 'en', 'ja', 'ru'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-xl transition-all hover:bg-white/10 ${language === lang ? 'bg-white/10 text-white' : 'text-gray-300'}`}
                  >
                    {t.langs[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <main>
        <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <div className="text-[20rem] font-bold select-none">L</div>
          </div>
          
          <div className={`max-w-5xl w-full text-center transition-all duration-1000 ${isVisible('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="glass-strong rounded-[3rem] p-12 md:p-20">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-white/10 rounded-3xl flex items-center justify-center">
                  <span className="text-6xl font-bold">L</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">
                {t.hero.subtitle}
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12">
                {t.hero.tagline}
              </p>
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-2xl font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105"
              >
                Download Now
              </a>
            </div>
          </div>
        </section>

        <section id="download" ref={sectionRefs.download} className="py-24 px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ${isVisible('download') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              {t.download.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-strong rounded-3xl p-10 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-24 h-24 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl font-bold">A</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Android</h3>
                <p className="text-gray-400 mb-6">{t.download.android}</p>
                <button className="w-full py-4 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-lg transition-colors">
                  {t.download.android}
                </button>
              </div>
              <div className="glass rounded-3xl p-10 opacity-70">
                <div className="w-24 h-24 rounded-2xl bg-gray-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Mac / Windows / iOS</h3>
                <p className="text-gray-500 mb-6">{t.download.comingSoon}</p>
                <button disabled className="w-full py-4 bg-gray-700 rounded-xl font-semibold text-lg cursor-not-allowed opacity-50">
                  {t.download.comingSoon}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="github" ref={sectionRefs.github} className="py-24 px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-200 ${isVisible('github') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Open Source</h2>
            <div className="glass-strong rounded-3xl p-12 hover:scale-105 transition-all duration-500">
              <div className="w-24 h-24 rounded-2xl bg-gray-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold">G</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">GitHub Repository</h3>
              <p className="text-gray-400 mb-8">View source code, contribute, or star the project</p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">L</span>
            </div>
            <span className="text-xl font-bold tracking-wider">LunarByte_Zero</span>
          </div>
          <p className="text-gray-500">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
