# LunarByte_Zero

Official website for LunarByte_Zero music software.

## Overview

LunarByte_Zero is an innovative music player designed for music enthusiasts. This is the official website showcasing the software features, development team, download links, and open source details.

## Features

- Smooth scrolling animations throughout the page
- Multi-language support (Traditional Chinese, English, Japanese, Russian)
- Glass morphism design with high transparency
- Responsive design for all devices
- Dark theme with black and white color scheme

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- i18next
- Lucide React Icons

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Type check
pnpm run check
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation/     # Floating navigation bar
│   ├── Hero/           # Hero section with logo
│   ├── Introduction/   # Software introduction
│   ├── Team/           # Development team
│   ├── Download/       # Download section
│   ├── OpenSource/     # Open source details
│   ├── GlassCard/      # Glass morphism card component
│   ├── LanguageSwitcher/  # Language switcher
│   └── ScrollAnimator/    # Scroll animation wrapper
├── i18n/               # Internationalization
│   ├── config.ts       # i18next configuration
│   └── locales/        # Translation files
│       ├── zh-TW.json  # Traditional Chinese
│       ├── en.json     # English
│       ├── ja.json     # Japanese
│       └── ru.json     # Russian
└── styles/             # Global styles
    ├── variables.css   # CSS variables
    └── global.css      # Global styles
```

## Platform Support

- Android: Available
- macOS: In Development
- Windows: In Development
- iOS: In Development

## License

All rights reserved. LunarByte_Zero Development Team.
