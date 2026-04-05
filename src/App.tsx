import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AppwriteStatusBanner from './components/AppwriteStatusBanner'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import DownloadPage from './pages/DownloadPage'
import HowItWorksPage from './pages/HowItWorksPage'
import DynamicSEOPage from './pages/DynamicSEOPage'
import AppwriteDebugPage from './pages/AppwriteDebugPage'
import SimpleTest from './pages/SimpleTest'
import { SEO_KEYWORD_DATABASE } from './config/seoDatabase'
import { client } from './services/appwrite'

function App() {
  // Verify Appwrite backend connection on app startup
  useEffect(() => {
    const testAppwriteConnection = async () => {
      try {
        console.log('🌐 Connecting to Appwrite backend...')
        const response = await client.ping()
        console.log('✅ Appwrite Connection SUCCESS!')
        console.log('Response:', response)
        console.log('Backend is ready to use')
      } catch (error) {
        console.error('❌ Appwrite Connection FAILED')
        if (error instanceof Error) {
          console.error('Error:', error.message)
          console.error('Details:', error)
        } else {
          console.error('Error:', error)
        }
      }
    }
    
    testAppwriteConnection()
  }, [])
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white flex flex-col">
        <AppwriteStatusBanner />
        <Navigation />
        
        <main className="flex-1 pt-20">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            
            {/* Debug Pages for Appwrite Testing */}
            <Route path="/debug/appwrite" element={<AppwriteDebugPage />} />
            <Route path="/test" element={<SimpleTest />} />
            
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
