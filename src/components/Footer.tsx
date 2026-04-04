import { Download, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-pink-200/30 bg-white/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-pink rounded-lg flex items-center justify-center shadow-soft">
                <Download className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">SaveItBro</span>
            </div>
            <p className="text-gray-600 text-sm">
              Download YouTube videos effortlessly with SaveItBro. Premium quality, instant downloads.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="/download" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  Download
                </a>
              </li>
              <li>
                <a href="/features" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} SaveItBro. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Made with <span className="text-pink-600">♥</span> for creators
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
