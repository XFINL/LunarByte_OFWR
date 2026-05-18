# LunarByte_Zero 官方網站技術架構文檔

## 1. 架構設計
```
┌─────────────────────────────────────────────────┐
│                    前端應用                      │
│  ┌─────────────────────────────────────────────┐│
│  │              React 18 + TypeScript          ││
│  │  ┌─────────┐  ┌─────────┐  ┌─────────────┐ ││
│  │  │ i18n    │  │ 組件庫  │  │ 動畫系統    │ ││
│  │  │ 多語言  │  │ 玻璃態  │  │ 滾動觸發    │ ││
│  │  └─────────┘  └─────────┘  └─────────────┘ ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
```

## 2. 技術棧說明
- **前端框架**：React 18 + TypeScript
- **構建工具**：Vite
- **樣式方案**：CSS Modules + CSS Variables
- **多語言**：react-i18next
- **圖標庫**：阿里巴巴圖標庫（iconfont）
- **動畫庫**：Framer Motion（滾動動畫）
- **滾動觀測**：Intersection Observer API

## 3. 路由定義
| 路由 | 用途 |
|------|------|
| `/` | 首頁（單頁應用，包含所有內容區塊） |

## 4. 組件結構
```
src/
├── components/
│   ├── Navigation/        # 懸浮導航欄
│   ├── Hero/               # Logo + 副標題
│   ├── Introduction/       # 軟體介紹
│   ├── Team/               # 開發團隊
│   ├── Download/           # 下載區
│   ├── OpenSource/         # 開源詳情
│   ├── GlassCard/          # 玻璃態卡片
│   ├── LanguageSwitcher/   # 語言切換器
│   └── ScrollAnimator/     # 滾動動畫包裝器
├── i18n/
│   ├── config.ts           # i18next 配置
│   └── locales/
│       ├── zh-TW.json      # 繁體中文
│       ├── en.json         # 英語
│       ├── ja.json         # 日語
│       └── ru.json         # 俄語
├── styles/
│   ├── variables.css       # CSS 變量
│   └── global.css          # 全域樣式
├── App.tsx
└── main.tsx
```

## 5. 設計系統

### 5.1 色彩系統
```css
:root {
  --color-primary: #000000;      /* 主色：純黑 */
  --color-secondary: #FFFFFF;     /* 輔色：純白 */
  --color-glass-bg: rgba(255, 255, 255, 0.05);
  --color-glass-border: rgba(255, 255, 255, 0.1);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.7);
}
```

### 5.2 玻璃態效果
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
}
```

### 5.3 動畫配置
```typescript
const transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1]
};

const scrollAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};
```

## 6. 性能優化
- 圖片懒加載
- 組件代碼分割
- CSS 動畫優先於 JS 動畫
- Intersection Observer 替代滾動監聽

## 7. 瀏覽器兼容性
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- 不支持 Internet Explorer
