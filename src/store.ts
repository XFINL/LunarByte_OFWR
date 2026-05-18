import { create } from 'zustand';

type Language = 'zh-TW' | 'en' | 'ja' | 'ru';

interface AppState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'zh-TW',
  setLanguage: (lang) => set({ language: lang }),
}));
