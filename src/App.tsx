import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import DownloadPage from './pages/DownloadPage'
import HowItWorksPage from './pages/HowItWorksPage'
import DynamicSEOPage from './pages/DynamicSEOPage'
import { SEO_KEYWORD_DATABASE } from './config/seoDatabase'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white flex flex-col">
        <Navigation />
        
        <main className="flex-1 pt-20">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            
            {/* PHASE 2: Dynamic SEO Pages - Programmatically Generated */}
            {Object.entries(SEO_KEYWORD_DATABASE).map(([platform, data]) =>
              data.pages.map((page) => (
                <Route
                  key={`${platform}-${page.slug}`}
                  path={`/${platform}/${page.slug}`}
                  element={<DynamicSEOPage />}
                />
              ))
            )}
            
            {/* Fallback for direct platform pages */}
            <Route path="/:platform/:page" element={<DynamicSEOPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
