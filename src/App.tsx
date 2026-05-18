import './i18n/config';
import './styles/global.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Team from './components/Team';
import Download from './components/Download';
import OpenSource from './components/OpenSource';

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <Team />
        <Download />
        <OpenSource />
      </main>
      <footer className="py-12 px-6 text-center">
        <p className="text-[var(--color-text-muted)] text-sm">
          © 2026 LunarByte. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
