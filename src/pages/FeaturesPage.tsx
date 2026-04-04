import { motion } from 'framer-motion'
import {
  Zap,
  Lock,
  Smartphone,
  Music,
  Clock,
  Repeat,
  Check,
  Video,
  Settings,
  Share2,
} from 'lucide-react'

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

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Downloads',
    description: '4 parallel segments with 50MB chunks for blazing speed',
  },
  {
    icon: Video,
    title: 'Multiple Formats',
    description: '720p, 1080p, 4K downloads in MP4, WebM, and more',
  },
  {
    icon: Music,
    title: 'Audio Extraction',
    description: 'Extract audio from videos and save as MP3 instantly',
  },
  {
    icon: Share2,
    title: 'Multi-Platform Support',
    description: 'Download from YouTube, Instagram, Twitter, and Facebook',
  },
  {
    icon: Smartphone,
    title: 'All Devices',
    description: 'Works perfectly on desktop, tablet, and mobile devices',
  },
  {
    icon: Repeat,
    title: 'Unlimited Downloads',
    description: 'No limits, no quotas - download as much as you want',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Available round the clock, always ready to download',
  },
  {
    icon: Settings,
    title: 'Advanced Options',
    description: 'Customize quality, format, and download settings',
  },
  {
    icon: Lock,
    title: 'Complete Privacy',
    description: 'No signup, no login, no tracking - absolute privacy',
  },
]

const benefits = [
  'Download from YouTube, Instagram, Twitter, and Facebook',
  'No watermarks on downloaded videos',
  'Fastest download speeds available (2-3x faster)',
  'Works with all video types and qualities',
  'Automatic format detection',
  'Secure HTTPS connections',
  'Zero lag performance',
  'Extract audio to MP3 format',
]

export default function FeaturesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-96 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-pink bg-clip-text text-transparent">
              Powerful Features
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            SaveItBro comes loaded with features designed for creators and casual users alike
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div key={idx} variants={item} className="card-hover group">
                  <div className="w-14 h-14 bg-gradient-pink rounded-2xl flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            What You Get
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.slice(0, 4).map((benefit, idx) => (
                <motion.div key={idx} variants={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-pink flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.slice(4).map((benefit, idx) => (
                <motion.div key={idx} variants={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-pink flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Technical Excellence
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Global CDN for fastest downloads
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  256-bit SSL encryption
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  99.9% uptime guarantee
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Average download time: &lt; 5 seconds
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Supports videos up to 4K resolution
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Parallel processing for speed
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
