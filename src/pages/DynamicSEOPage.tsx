/**
 * PHASE 2: Programmatic SEO Page Generator
 * Dynamically generates optimized landing pages for each keyword cluster
 */

import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Zap, Lock, Smartphone, ArrowRight, Check, HelpCircle } from 'lucide-react'
import { SEO_KEYWORD_DATABASE, PLATFORM_FAQS } from '../config/seoDatabase'

export default function DynamicSEOPage() {
  const { platform, page } = useParams<{ platform: string; page: string }>()
  
  // Get the database entry
  const platformData = SEO_KEYWORD_DATABASE[platform as keyof typeof SEO_KEYWORD_DATABASE]
  if (!platformData) {
    return <div className="pt-40 text-center text-2xl">Page not found</div>
  }

  // Find the specific page config
  const pageConfig = platformData.pages.find(p => p.slug === page)
  if (!pageConfig) {
    return <div className="pt-40 text-center text-2xl">Page not found</div>
  }

  const faqs = PLATFORM_FAQS[platform as keyof typeof PLATFORM_FAQS] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white">
      {/* Meta tags would be injected by helmet in production */}
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
                {pageConfig.h1}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Download from {platformData.platform} instantly. No registration, no watermarks, completely free. Works on all devices.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              <Download className="w-6 h-6" />
              Start Downloading
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-pink-200">
              {[
                { label: 'Fast', value: '< 2s' },
                { label: 'Free', value: '∞' },
                { label: 'Quality', value: 'HD' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-pink-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Features Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: Zap, title: 'Lightning Fast', desc: '4 parallel streams for 2-3x faster downloads' },
              { icon: Lock, title: 'Completely Private', desc: 'No tracking, no storage, no history' },
              { icon: Smartphone, title: 'Works Everywhere', desc: 'Desktop, mobile, tablet - all supported' },
              { icon: Check, title: 'No Watermarks', desc: 'Original quality preserved, always' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="flex gap-4 p-4 bg-white/70 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section (Phase 3) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-pink max-w-none"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use {platformData.platform} Downloader</h2>

          <div className="grid gap-6 my-8">
            {[
              {
                step: 1,
                title: 'Paste the URL',
                description: `Copy any {platformData.platform} video/content URL and paste it into SaveItBro`
              },
              {
                step: 2,
                title: 'Choose Format',
                description: 'Select your preferred quality (HD, Full HD, 4K) and format (MP4, WebM, MP3)'
              },
              {
                step: 3,
                title: 'Download',
                description: 'Click download and your file starts instantly. No registration needed.'
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 p-6 bg-pink-50 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Supported Formats & Quality</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {['360p (Low)', '480p (SD)', '720p (HD)', '1080p (FHD)', '2K', '4K Ultra'].map((quality) => (
              <div key={quality} className="p-4 bg-white border-2 border-pink-200 rounded-lg font-semibold text-center">
                ✓ {quality}
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Why Choose SaveItBro?</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            {[
              '✓ Fastest downloader - 4 parallel streams (2-3x faster)',
              '✓ Best quality - Original resolution preserved',
              '✓ 100% Free - No hidden fees or Pro version',
              '✓ No Watermarks - Videos stay clean',
              '✓ No Registration - Instant downloads',
              '✓ Multi-platform - YouTube, Instagram, Twitter, Facebook',
              '✓ All Devices - Desktop, mobile, tablet',
              '✓ Private & Secure - No tracking, no history stored'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pink-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* FAQ Section (Phase 3: Content) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-pink-600" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-pink-200"
              >
                <summary className="flex items-center justify-between font-bold text-lg text-gray-900 cursor-pointer">
                  {faq.question}
                  <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          'name': `SaveItBro - ${platformData.platform} Downloader`,
          'description': pageConfig.metaDescription,
          'applicationCategory': 'Utility',
          'url': `https://saveitbro.fun/${platform}/${page}`,
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'ratingCount': '2500'
          },
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
          }
        })}
      </script>
    </div>
  )
}
