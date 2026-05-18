
export type Language = 'zh-TW' | 'en' | 'ja' | 'ru';

export interface Translations {
  nav: {
    home: string;
    features: string;
    download: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  features: {
    title: string;
    feature1: {
      title: string;
      desc: string;
    };
    feature2: {
      title: string;
      desc: string;
    };
    feature3: {
      title: string;
      desc: string;
    };
  };
  download: {
    title: string;
    android: string;
    comingSoon: string;
  };
  footer: {
    copyright: string;
  };
}
