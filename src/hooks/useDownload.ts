import { useState } from 'react'
import { fetchVideoInfo as getVideoInfo, downloadVideo } from '../services/api'
import toast from 'react-hot-toast'

export interface VideoInfo {
  title: string
  duration: string
  thumbnail: string
  platform?: string
}

interface UseDownloadReturn {
  url: string
  setUrl: (url: string) => void
  loading: boolean
  downloading: boolean
  videoInfo: VideoInfo | null
  error: string
  quality: string
  setQuality: (quality: string) => void
  format: string
  setFormat: (format: string) => void
  platform: string
  setPlatform: (platform: string) => void
  fetchVideoInfo: () => Promise<void>
  handleDownload: () => Promise<void>
  clearError: () => void
}

export const useDownload = (): UseDownloadReturn => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [quality, setQuality] = useState('720')
  const [format, setFormat] = useState('mp4')
  const [platform, setPlatform] = useState('youtube')
  const [error, setError] = useState('')

  const clearError = () => setError('')

  const fetchVideoInfo = async () => {
    if (!url.trim()) {
      setError(`Please enter a ${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`)
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await getVideoInfo({
        url: url.trim(),
      })

      setVideoInfo({
        title: response.title || 'Untitled Video',
        duration: response.duration || 'Unknown',
        thumbnail: response.thumbnail || '',
      })
      toast.success(`${platform} info fetched!`)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : `Failed to fetch ${platform} content. Please check the URL and try again.`
      setError(errorMessage)
      setVideoInfo(null)
      toast.error(`Could not fetch ${platform} info`)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!videoInfo) {
      setError('Please fetch video info first')
      return
    }

    setDownloading(true)

    try {
      const blob = await downloadVideo({
        url: url.trim(),
        quality,
        format,
      })

      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `${videoInfo.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${format}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(downloadUrl)

      toast.success('Download completed!')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Download failed. Please try again.'
      setError(errorMessage)
      toast.error('Download failed')
    } finally {
      setDownloading(false)
    }
  }

  return {
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
  }
}
