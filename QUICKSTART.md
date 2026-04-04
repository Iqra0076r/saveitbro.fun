# SaveItBro Frontend - Quick Start Guide

## 🚀 Starting the Application

### Development Environment

```bash
cd frontend
npm run dev
```

**Access**: http://localhost:3000

The development server includes:
- ✅ Hot Module Reload (HMR) - Changes appear instantly
- ✅ Fast Refresh - React preserves state while updating
- ✅ TypeScript checking - Real-time error detection
- ✅ Source maps - Easy debugging

### Production Build

```bash
npm run build
```

Generates optimized output in `dist/` directory:
- Minified HTML/CSS/JavaScript
- Tree-shaken dependencies
- Code splitting for better performance
- 348KB JavaScript → 115KB gzipped

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally for testing.

---

## 🔗 Backend Integration

The frontend expects the Flask backend on `localhost:8000`

### Ensure Backend is Running

```bash
# In backend directory
python app.py
```

**Backend URL**: http://localhost:8000

### API Endpoints Used

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/health` | Server health check |
| POST | `/fetch-info` | Get video information |
| POST | `/download` | Download video file |

### Environment Configuration

Edit `frontend/.env`:

```env
VITE_API_URL=http://localhost:8000
```

---

## 🎯 Page Navigation

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero section, features overview |
| Features | `/features` | Complete feature showcase |
| How It Works | `/how-it-works` | Tutorial & FAQ |
| Download | `/download` | Main downloader app |

---

## 📊 Project Statistics

- **Total Files**: 25
- **Components**: 2 (Navigation, Footer)
- **Pages**: 4 (Home, Features, HowItWorks, Download)
- **Hooks**: 1 (useDownload)
- **Services**: 1 (api.ts)
- **Configuration Files**: 10
- **Lines of Code**: ~3,500+ (TypeScript + CSS)

---

## 🛠️ Development Workflow

### Making Changes

1. **Edit React components** in `src/components/` or `src/pages/`
2. **Update styles** in `src/index.css` or inline Tailwind classes
3. **Add API calls** in `src/services/api.ts`
4. **Create custom hooks** in `src/hooks/`
5. **Changes auto-reload** via HMR

### Adding New Pages

```typescript
// 1. Create page in src/pages/NewPage.tsx
export default function NewPage() {
  return <div>New page content</div>
}

// 2. Add route in src/App.tsx
<Route path="/new" element={<NewPage />} />

// 3. Add navigation link in src/components/Navigation.tsx
{ label: 'New', path: '/new' }
```

### Styling with Tailwind

All styles use Tailwind CSS with custom baby pink theme:

```tsx
<div className="card">                    {/* Custom card component */}
  <button className="btn btn-primary">   {/* Custom button */}
    Click me
  </button>
</div>
```

---

## 🔧 Debugging

### TypeScript Errors

```bash
npm run lint
```

Shows all TypeScript issues without building.

### Build Failures

1. Clear cache: `rm -rf dist node_modules/.vite`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

### Browser Console

Check browser developer tools (F12) for:
- React errors
- Network request failures
- API response issues
- Console logs from services

---

## 📦 Dependency Management

### Add New Package

```bash
npm install package-name
```

### Update Packages

```bash
npm update
```

### Check Vulnerabilities

```bash
npm audit
# Fix issues:
npm audit fix
```

---

## 🚢 Deployment Options

### Vercel (Recommended for Vite)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Traditional Server

1. Run `npm run build`
2. Upload `dist/` folder to server
3. Configure web server to serve `index.html` for routes
4. Set `VITE_API_URL` environment variable on server

---

## 📚 File Reference

### Components
- **Navigation.tsx** - Sticky header with mobile menu
- **Footer.tsx** - Footer with links and social

### Pages
- **HomePage.tsx** - Hero section (~150 lines)
- **FeaturesPage.tsx** - Features showcase (~250 lines)
- **HowItWorksPage.tsx** - Tutorial & FAQ (~300 lines)
- **DownloadPage.tsx** - Main app (~350 lines)

### Services
- **api.ts** - Axios client with interceptors (~180 lines)

### Hooks
- **useDownload.ts** - Download state management (~130 lines)

### Config
- **vite.config.ts** - Vite configuration
- **tsconfig.json** - TypeScript settings
- **tailwind.config.js** - Tailwind theme
- **package.json** - Dependencies

---

## 🎨 Design System

### Colors

```css
/* Baby Pink Palette */
baby-pink: #FFB3CB     /* Primary */
pink-50: #FFF5F8       /* Lightest */
pink-600: #EC4899      /* Medium */
pink-950: #FF3078      /* Darkest */
white: #FFFFFF         /* Background */
```

### Components

```tsx
/* Buttons */
btn btn-primary        /* Filled gradient pink */
btn btn-secondary      /* Outlined pink */
btn btn-ghost          /* Text only */

/* Cards */
card                   /* Standard card */
card-hover             /* Hoverable card */
glass                  /* Glass morphism */

/* Inputs */
input-field            /* Styled input */
```

### Responsive Grid

```tsx
grid                   /* Single column mobile */
md:grid-cols-2         /* 2 columns tablet+ */
lg:grid-cols-3         /* 3 columns desktop+ */
```

---

## 🔐 Security

- ✅ HTTPS ready (use https:// for backend in production)
- ✅ No sensitive data in code
- ✅ Environment variables for configuration
- ✅ CORS-enabled API communication
- ✅ Input validation on download forms

---

## 📞 Support

For issues or questions:
1. Check browser console (F12)
2. Review `src/services/api.ts` for API errors
3. Verify backend is running (`http://localhost:8000/health`)
4. Check `.env` configuration
5. Review console logs in terminal

---

## ✅ Checklist Before Production

- [ ] Backend is running and tested
- [ ] `VITE_API_URL` points to correct backend
- [ ] All pages tested in desktop view
- [ ] All pages tested in mobile view
- [ ] Video download tested
- [ ] Error states tested
- [ ] Build runs without errors
- [ ] Production build deployed
- [ ] HTTPS configured (if using HTTPS)
- [ ] Analytics/monitoring set up (optional)

---

**Version**: 2.0.0  
**Last Updated**: 2024  
**Status**: ✅ Production Ready
