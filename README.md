# ChainFlow — AI-Native Workflow Chains

A premium SaaS landing page built with modern web technologies, featuring 3D Spline integration, smooth animations, and performance-optimized design.

## 🚀 Tech Stack

- **React 18** + **TypeScript** - Modern React with full type safety
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Production-ready motion library for React
- **GSAP + ScrollTrigger** - Advanced scroll-triggered animations
- **Lenis** - Smooth scroll library for desktop experiences
- **Spline** - 3D scene integration for hero section
- **ESLint** + **Prettier** - Code quality and formatting

## 🎨 Design System

- **Dark theme** with iridescent color palette
- **Glass morphism** cards with subtle transparency
- **Color palette** using primary blue (#3BA2F6), electric purple (#7C4DFF), and lime accents (#B8FF5A)
- **Inter font** with optimized loading
- **8px spacing system** for consistent layouts
- **Accessibility-first** with WCAG AA compliance

## ⚡ Performance Features

- **Mobile-first** responsive design
- **Reduced motion** preferences respected
- **Lazy loading** for Spline 3D scenes
- **Optimized animations** disabled on mobile for performance
- **Intersection Observer** for scroll-triggered effects
- **Semantic HTML** with proper ARIA labels

## 🛠 Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Project Structure

```
src/
├── components/          # React components
│   ├── Hero3D.tsx      # Spline 3D hero section
│   ├── Navbar.tsx      # Navigation with blur effect
│   ├── FeatureCard.tsx # Feature display cards
│   ├── Pricing.tsx     # Pricing section with toggle
│   ├── FAQ.tsx         # Accordion FAQ section
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useReducedMotionSafe.ts
│   └── useLenis.ts
├── lib/                # Utilities and configurations
│   └── animations.ts   # GSAP animation setup
├── data/               # Static data and content
│   ├── features.ts
│   ├── integrations.ts
│   └── faqs.ts
└── styles/             # Global styles
    └── index.css
```

## 🎯 Key Features

- **3D Hero Section** - Interactive Spline chain animation
- **Smooth Scrolling** - Lenis integration with reduced motion support  
- **Animation System** - GSAP + Framer Motion with performance guards
- **Glass UI Components** - Translucent cards with backdrop blur
- **Integration Grid** - 50+ tool integrations with hover effects
- **Responsive Pricing** - Monthly/yearly toggle with highlights
- **Accessible FAQ** - Accordion with proper ARIA attributes
- **Performance Optimized** - Mobile-first with animation fallbacks

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Simplified layouts, animations disabled
- **Tablet**: 768px - 1024px - Adaptive grid layouts
- **Desktop**: > 1024px - Full feature set with smooth scrolling

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

Built with ⚡ by developers, for developers

---

*ChainFlow - Chain your tools. Ship work faster.*