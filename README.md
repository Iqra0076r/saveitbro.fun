# SaveItBro - Frontend

Modern, premium-quality React frontend for YouTube video downloader. Built with React 18, TypeScript, Vite, and Tailwind CSS.

## 🎨 Design System

**Color Palette:**
- Primary: Baby Pink (#FFB3CB)
- Secondary: White
- Gradients: Soft pink to deep pink
- Shadows: Soft (2px), soft-lg (8px), glow (24px)
- Animations: Fade, slide-up, scale, pulse

## 🚀 Tech Stack

- **Framework**: React 18.2.0 + React Router v6
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite 4.5.14
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.263.1
- **HTTP**: Axios 1.6.2
- **State**: Zustand 4.4.1
- **Notifications**: React Hot Toast 2.4.1

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/           # Shared components
│   │   ├── Navigation.tsx    # Top navigation bar
│   │   └── Footer.tsx        # Footer
│   │
│   ├── pages/                # Page components (routes)
│   │   ├── HomePage.tsx      # Hero, features preview
│   │   ├── FeaturesPage.tsx  # All features showcase
│   │   ├── HowItWorksPage.tsx # Tutorial + FAQ
│   │   └── DownloadPage.tsx  # Main downloader app
│   │
│   ├── hooks/                # Custom React hooks
│   │   └── useDownload.ts    # Download logic
│   │
│   ├── services/             # API integration
│   │   └── api.ts           # Axios client + API calls
│   │
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Environment types
│
├── public/                   # Static assets
├── package.json             # Dependencies
├── vite.config.ts           # Vite config
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind theme
├── postcss.config.js        # PostCSS config
├── .env.example             # Environment template
└── README.md
```

## 🎯 Pages

### HomePage
- Hero section with main CTA
- Feature highlights
- Statistics
- Call-to-action

### FeaturesPage
- 9 feature cards
- Benefits checklist
- Technical excellence section

### HowItWorksPage
- 4-step process guide
- Frequently asked questions
- Pro tips section

### DownloadPage
- URL input with paste button
- Video info fetching
- Quality selector (360p - 4K)
- Format options (MP4, WebM, MP3)
- Download management

## 🛠️ Development

### Installation

```bash
cd frontend
npm install
```

### Development Server

```bash
npm run dev
```

Starts dev server on http://localhost:3000 with hot reload.

### Build for Production

```bash
npm run build
```

Outputs optimized build to `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run lint
```

Validates TypeScript without building.

## 📡 API Integration

### Environment Variables

Create `.env` from `.env.example`:

```bash
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=SaveItBro
VITE_APP_DESCRIPTION=Download YouTube videos instantly
```

### API Endpoints Used

- `GET /health` - Health check
- `POST /fetch-info` - Get video information
- `POST /download` - Download video file
- `GET /formats` - Supported formats
- `GET /qualities` - Supported qualities

### API Service Layer

Located in `src/services/api.ts`:

```typescript
// Fetch video information
const videoInfo = await fetchVideoInfo({ url: 'https://...' })

// Download video
const blob = await downloadVideo({
  url: 'https://...',
  quality: '720',
  format: 'mp4'
})
```

## 🎣 Custom Hooks

### useDownload

Manages all download-related state and operations:

```typescript
const {
  url,
  setUrl,
  loading,
  downloading,
  videoInfo,
  error,
  quality,
  setQuality,
  format,
  setFormat,
  fetchVideoInfo,
  handleDownload,
  clearError,
} = useDownload()
```

## 🧩 Component Patterns

### Buttons

```typescript
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-ghost">Ghost</button>
```

### Cards

```typescript
<div className="card">Content</div>
<div className="card-hover">Hoverable card</div>
```

### Inputs

```typescript
<input className="input-field" placeholder="..." />
```

### Glass Effect

```typescript
<div className="glass">Glassmorphism background</div>
```

## 🎭 Animations

All animations use Framer Motion:

- `fade-in` - Fade in
- `slide-up` - Slide from bottom
- `scale-in` - Scale from small to normal
- `pulse-soft` - Soft pulsing

Example:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

## 📱 Responsive Design

Mobile-first approach using Tailwind breakpoints:

- **Mobile**: Default styles
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)

## ✅ Quality Standards

- ✓ TypeScript strict mode throughout
- ✓ All components use Framer Motion
- ✓ Baby pink + white theme only
- ✓ Premium animations and micro-interactions
- ✓ Full mobile responsiveness
- ✓ Semantic HTML
- ✓ Accessibility-first approach
- ✓ Error handling & loading states
- ✓ Toast notifications for feedback

## 🔗 Deployment

### Build Output

```bash
npm run build
# Outputs to dist/ directory
```

### Deploy to Vercel

```bash
vercel
```

### Deploy to Netlify

```bash
netlify deploy --prod --dir=dist
```

## 🐛 Debugging

### TypeScript Errors

```bash
npm run lint
```

### Build Issues

```bash
npm run build
```

### Dev Server Issues

- Clear cache: `rm -rf node_modules dist`
- Reinstall: `npm install`
- Restart dev server

## 📚 Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com)

## 📝 License

Built for SaveItBro project.

## 🤝 Contributing

Follow the existing code patterns:
- Use TypeScript strict mode
- Add Framer Motion animations
- Follow baby pink color scheme
- Keep components modular
- Document custom hooks

---

**Development Server**: http://localhost:3000  
**Backend API**: http://localhost:8000  
**Build Output**: `dist/` directory
