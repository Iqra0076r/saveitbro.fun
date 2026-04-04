import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Zap, Lock, Smartphone, ArrowRight, Play } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={item}>
              <div className="inline-block px-4 py-2 bg-pink-100 rounded-full mb-6">
                <span className="text-sm font-semibold text-pink-700">✨ Multi-Platform Downloader</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-pink bg-clip-text text-transparent leading-tight">
                Download Videos from Any Platform
              </h1>
            </motion.div>

            <motion.p variants={item} className="text-xl text-gray-600 max-w-lg">
              SaveItBro lets you download videos from YouTube, Instagram, Twitter, and Facebook instantly. No watermarks, no limits, no signup required.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/download"
                className="btn btn-primary text-lg"
              >
                <Download className="w-5 h-5" />
                Start Downloading
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn btn-secondary text-lg">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div variants={item} className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-pink-600">10K+</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-600">1M+</p>
                <p className="text-sm text-gray-600">Videos Downloaded</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-600">24/7</p>
                <p className="text-sm text-gray-600">Always Available</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-baby/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white border-2 border-pink-200 rounded-3xl p-6 shadow-soft-lg backdrop-blur-sm h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-pink rounded-2xl mx-auto flex items-center justify-center shadow-glow">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Paste & Download</h3>
                <p className="text-gray-600">Just paste a YouTube URL and download instantly</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose SaveItBro?
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for creators, optimized for speed, designed for simplicity
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Download videos in seconds, not minutes',
              },
              {
                icon: Lock,
                title: 'Completely Private',
                description: 'No login required, no tracking, 100% secure',
              },
              {
                icon: Smartphone,
                title: 'Works Everywhere',
                description: 'Desktop, tablet, mobile - all devices supported',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div key={idx} variants={item} className="card-hover">
                  <div className="w-12 h-12 bg-gradient-pink rounded-xl flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to Download?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start downloading YouTube videos in seconds
            </p>
            <Link
              to="/download"
              className="btn btn-primary text-lg inline-flex"
            >
              <Download className="w-5 h-5" />
              Go to Downloader
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
