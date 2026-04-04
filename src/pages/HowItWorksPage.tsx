import { motion } from 'framer-motion'
import { Link, Copy, Download as DownloadIcon, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Link,
    title: 'Copy YouTube Link',
    description: 'Find a video on YouTube you want to download and copy the link from the address bar',
  },
  {
    number: 2,
    icon: Copy,
    title: 'Paste the URL',
    description: 'Paste the URL into SaveItBro and let us fetch the video information instantly',
  },
  {
    number: 3,
    icon: DownloadIcon,
    title: 'Choose Settings',
    description: 'Select your preferred quality, format, and download options',
  },
  {
    number: 4,
    icon: CheckCircle,
    title: 'Download & Enjoy',
    description: 'Start the download and enjoy your video! No signup required.',
  },
]

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

export default function HowItWorksPage() {
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
              How It Works
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Download YouTube videos in 4 simple steps. No complexity, just results.
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div key={idx} variants={item}>
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    {/* Number Circle - Left on Desktop, Top on Mobile */}
                    <div className="md:col-span-2 flex md:flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-pink flex items-center justify-center shadow-soft flex-shrink-0">
                        <span className="text-white text-2xl font-bold">{step.number}</span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="hidden md:block w-1 h-20 bg-gradient-pink/30 mt-4"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10">
                      <div className="card group">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                            <Icon className="w-6 h-6 text-pink-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-lg">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                q: 'Is SaveItBro legal to use?',
                a: 'Yes, SaveItBro is completely legal. We respect copyright laws and only help you download videos for personal use.',
              },
              {
                q: 'Do I need to sign up?',
                a: 'No signup required! SaveItBro works anonymously. Just paste a URL and start downloading.',
              },
              {
                q: 'What formats are supported?',
                a: 'We support MP4, WebM, MKV, and audio-only MP3 format. Choose the format that works best for you.',
              },
              {
                q: 'How fast are the downloads?',
                a: 'Most videos download in under 5 seconds using our global CDN. Speed depends on your internet connection and video size.',
              },
              {
                q: 'Can I download live streams?',
                a: 'We support downloading completed videos and livestream archives. Live streams cannot be downloaded while still streaming.',
              },
              {
                q: 'Is my privacy protected?',
                a: 'Absolutely. We use 256-bit SSL encryption and do not store any download history or personal data.',
              },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                variants={item}
                className="group border-2 border-pink-200/50 rounded-xl overflow-hidden hover:border-pink-300 transition-colors"
              >
                <summary className="cursor-pointer flex items-center justify-between p-6 bg-white hover:bg-pink-50/50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                  <div className="w-6 h-6 rounded-full bg-gradient-pink flex items-center justify-center flex-shrink-0 text-white group-open:rotate-180 transition-transform">
                    <span>↓</span>
                  </div>
                </summary>
                <div className="px-6 py-4 bg-pink-50/50 border-t border-pink-200/30">
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-pink">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pro Tips</h2>
            <p className="text-white/90 text-lg mb-8">
              Get the most out of SaveItBro with these helpful tips
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Choose the Right Quality',
                  desc: 'Higher quality = larger file. Balance between quality and file size.',
                },
                {
                  title: 'Use Audio-Only Mode',
                  desc: 'Save space by extracting just the audio as MP3 from music videos.',
                },
                {
                  title: 'Check Your Storage',
                  desc: '4K videos can be large. Ensure you have enough disk space.',
                },
                {
                  title: 'Respect Copyrights',
                  desc: 'Only download videos you have the right to use.',
                },
              ].map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white"
                >
                  <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                  <p className="text-white/80">{tip.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
