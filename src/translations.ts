type Language = 'zh-TW' | 'en' | 'ja' | 'ru';

const translations: Record<Language, any> = {
  'zh-TW': {
    nav: {
      home: '首頁',
      features: '功能',
      download: '下載'
    },
    hero: {
      title: 'LunarByte_Zero',
      subtitle: '音樂從未如此動人',
      tagline: '下一代音樂體驗'
    },
    features: {
      title: '核心功能',
      feature1: {
        title: '無損音質',
        desc: '支持最高品質的音頻格式，帶來沉浸式聽覺體驗'
      },
      feature2: {
        title: '智能推薦',
        desc: 'AI驅動的個性化推薦，發現更多您喜愛的音樂'
      },
      feature3: {
        title: '極簡設計',
        desc: '優雅的界面設計，專注於音樂本身'
      }
    },
    download: {
      title: '立即下載',
      android: 'Android 版本',
      comingSoon: 'Mac/Windows/iOS 適配中...'
    },
    footer: {
      copyright: '© 2024 LunarByte_Zero. 保留所有權利.'
    },
    langs: {
      'zh-TW': '繁體中文',
      'en': 'English',
      'ja': '日本語',
      'ru': 'Русский'
    }
  },
  'en': {
    nav: {
      home: 'Home',
      features: 'Features',
      download: 'Download'
    },
    hero: {
      title: 'LunarByte_Zero',
      subtitle: 'Music Has Never Been So Beautiful',
      tagline: 'Next Generation Music Experience'
    },
    features: {
      title: 'Core Features',
      feature1: {
        title: 'Lossless Quality',
        desc: 'Support highest quality audio formats for an immersive listening experience'
      },
      feature2: {
        title: 'Smart Recommendations',
        desc: 'AI-powered personalized recommendations to discover more music you love'
      },
      feature3: {
        title: 'Minimal Design',
        desc: 'Elegant interface design focused on the music itself'
      }
    },
    download: {
      title: 'Download Now',
      android: 'Android Version',
      comingSoon: 'Mac/Windows/iOS Coming Soon...'
    },
    footer: {
      copyright: '© 2024 LunarByte_Zero. All rights reserved.'
    },
    langs: {
      'zh-TW': '繁體中文',
      'en': 'English',
      'ja': '日本語',
      'ru': 'Русский'
    }
  },
  'ja': {
    nav: {
      home: 'ホーム',
      features: '機能',
      download: 'ダウンロード'
    },
    hero: {
      title: 'LunarByte_Zero',
      subtitle: '音楽がこれほど美しいことはなかった',
      tagline: '次世代の音楽体験'
    },
    features: {
      title: 'コア機能',
      feature1: {
        title: 'ロスレス品質',
        desc: '最高品質のオーディオフォーマットをサポートし、没入型のリスニング体験を提供'
      },
      feature2: {
        title: 'スマートレコメンデーション',
        desc: 'AI駆動のパーソナライズされたレコメンデーションで、あなたの好きな音楽をもっと発見'
      },
      feature3: {
        title: 'ミニマルデザイン',
        desc: '音楽自体に焦点を当てたエレガントなインターフェースデザイン'
      }
    },
    download: {
      title: '今すぐダウンロード',
      android: 'Android バージョン',
      comingSoon: 'Mac/Windows/iOS 準備中...'
    },
    footer: {
      copyright: '© 2024 LunarByte_Zero. All rights reserved.'
    },
    langs: {
      'zh-TW': '繁體中文',
      'en': 'English',
      'ja': '日本語',
      'ru': 'Русский'
    }
  },
  'ru': {
    nav: {
      home: 'Главная',
      features: 'Функции',
      download: 'Скачать'
    },
    hero: {
      title: 'LunarByte_Zero',
      subtitle: 'Музыка никогда не была так прекрасна',
      tagline: 'Музыкальный опыт нового поколения'
    },
    features: {
      title: 'Основные функции',
      feature1: {
        title: 'Безпотерянное качество',
        desc: 'Поддержка аудиоформатов высочайшего качества для погружающего прослушивания'
      },
      feature2: {
        title: 'Умные рекомендации',
        desc: 'Персонализированные рекомендации на основе ИИ для открытия новой музыки'
      },
      feature3: {
        title: 'Минималистичный дизайн',
        desc: 'Элегантный интерфейс, сосредоточенный на самой музыке'
      }
    },
    download: {
      title: 'Скачать сейчас',
      android: 'Версия для Android',
      comingSoon: 'Mac/Windows/iOS Скоро...'
    },
    footer: {
      copyright: '© 2024 LunarByte_Zero. Все права защищены.'
    },
    langs: {
      'zh-TW': '繁體中文',
      'en': 'English',
      'ja': '日本語',
      'ru': 'Русский'
    }
  }
};

export default translations;
