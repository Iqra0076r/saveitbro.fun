import { motion, AnimatePresence } from 'framer-motion'
import { Download as DownloadIcon, Loader, AlertCircle, Copy, Music, Video } from 'lucide-react'
import toast from 'react-hot-toast'
import { useDownload } from '../hooks/useDownload'

export default function DownloadPage() {
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
    platform,
    setPlatform,
    fetchVideoInfo,
    handleDownload,
    clearError,
  } = useDownload()

  const platformOptions = [
    { value: 'youtube', label: '▶️ YouTube', icon: '▶️' },
    { value: 'instagram', label: '📷 Instagram', icon: '📷' },
    { value: 'twitter', label: '𝕏 Twitter/X', icon: '𝕏' },
    { value: 'facebook', label: 'f Facebook', icon: 'f' },
  ]

  const qualityOptions = [
    { value: '360', label: '360p (Low)' },
    { value: '480', label: '480p (SD)' },
    { value: '720', label: '720p (HD)' },
    { value: '1080', label: '1080p (FHD)' },
    { value: '4k', label: '4K (Ultra)' },
  ]

  const formatOptions = [
    { value: 'mp4', label: 'MP4 Video' },
    { value: 'webm', label: 'WebM Video' },
    { value: 'mp3', label: 'MP3 Audio' },
  ]

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
      clearError()
    } catch {
      toast.error('Could not read clipboard')
    }
  }

  const getPlatformPlaceholder = () => {
    const platformMap: Record<string, string> = {
      youtube: 'Paste YouTube URL here...',
      instagram: 'Paste Instagram post/reel URL here...',
      twitter: 'Paste Twitter/X video URL here...',
      facebook: 'Paste Facebook video URL here...',
    }
    return platformMap[platform] || 'Paste URL here...'
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-pink-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-pink bg-clip-text text-transparent mb-4">
            Download Videos
          </h1>
          <p className="text-xl text-gray-600">
            Multi-platform downloader for your favorite content
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card shadow-soft-lg mb-8"
        >
          {/* Platform Selection Section */}
          <div className="space-y-4 mb-8">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700 mb-3 block">
                Select Platform
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {platformOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPlatform(opt.value)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      platform === opt.value
                        ? 'bg-gradient-pink text-white shadow-soft'
                        : 'bg-pink-100 text-pink-900 hover:bg-pink-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </label>
          </div>

          {/* URL Input Section */}
          <div className="space-y-4 mb-8">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700 mb-3 block">
                Video URL
              </span>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && fetchVideoInfo()}
                  placeholder={getPlatformPlaceholder()}
                  className="flex-1 input input-bordered"
                />
                <button
                  onClick={handlePaste}
                  className="btn btn-outline"
                  title="Paste from clipboard"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </label>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700">{error}</p>
              </motion.div>
            )}

            <button
              onClick={fetchVideoInfo}
              disabled={!url.trim() || loading || downloading}
              className="w-full btn btn-primary text-lg"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Fetching...
                </>
              ) : (
                <>
                  <Video className="w-5 h-5" />
                  Fetch Video Info
                </>
              )}
            </button>
          </div>

          {/* Video Info Section */}
          <AnimatePresence>
            {videoInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 pb-8 border-t border-pink-200/30 pt-8"
              >
                {/* Video Preview */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Video Preview</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {videoInfo.thumbnail && (
                      <div className="relative overflow-hidden rounded-xl shadow-soft">
                        <img
                          src={videoInfo.thumbnail}
                          alt="Video thumbnail"
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <div className="md:col-span-2 space-y-2">
                      <div>
                        <p className="text-sm text-gray-500">Title</p>
                        <p className="text-gray-900 font-semibold line-clamp-2">
                          {videoInfo.title}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="text-gray-900 font-semibold">
                          {videoInfo.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quality Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Quality</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {qualityOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setQuality(opt.value)}
                        className={`p-3 rounded-xl font-semibold transition-all duration-300 ${
                          quality === opt.value
                            ? 'bg-gradient-pink text-white shadow-soft'
                            : 'bg-pink-100 text-pink-900 hover:bg-pink-200'
                        }`}
                        disabled={downloading}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Format Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Format</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {formatOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setFormat(opt.value)}
                        className={`p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                          format === opt.value
                            ? 'bg-gradient-pink text-white shadow-soft'
                            : 'bg-pink-100 text-pink-900 hover:bg-pink-200'
                        }`}
                        disabled={downloading}
                      >
                        {opt.value === 'mp3' ? (
                          <Music className="w-5 h-5" />
                        ) : (
                          <Video className="w-5 h-5" />
                        )}
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={!videoInfo || downloading}
                  className="w-full btn btn-primary text-lg py-4"
                >
                  {downloading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <DownloadIcon className="w-5 h-5" />
                      Download Video
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {!videoInfo && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-10 h-10 text-pink-600" />
              </div>
              <p className="text-gray-600 text-lg">
                Paste a URL above to get started
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {[
            {
              icon: '▶️',
              title: 'YouTube',
              desc: 'Videos & Playlists',
            },
            {
              icon: '📷',
              title: 'Instagram',
              desc: 'Posts & Reels',
            },
            {
              icon: '𝕏',
              title: 'Twitter/X',
              desc: 'Video Tweets',
            },
            {
              icon: 'f',
              title: 'Facebook',
              desc: 'Videos & Live',
            },
          ].map((tip, idx) => (
            <div key={idx} className="card text-center">
              <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center mx-auto mb-3 shadow-soft text-xl">
                {tip.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
