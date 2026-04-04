import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000, // 60 seconds for regular requests (faster feedback)
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, deflate', // Enable compression
  },
})

// Special instance for downloads with longer timeout
export const downloadApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 300000, // 5 minutes for downloads
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'blob', // Stream response as blob for faster handling
})

// Add request interceptor for logging
api.interceptors.request.use((config) => {
  console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`)
  return config
})

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.statusText}`)
    return response
  },
  (error) => {
    if (error.response) {
      console.error(`API Error: ${error.response.status} - ${error.response.statusText}`)
      console.error('Error Data:', error.response.data)
    } else if (error.request) {
      console.error('API Error: No response from server')
    } else {
      console.error('API Error:', error.message)
    }
    return Promise.reject(error)
  }
)

export interface FetchVideoInfoRequest {
  url: string
}

export interface FetchVideoInfoResponse {
  title: string
  duration: string
  thumbnail: string
  url: string
}

export interface DownloadRequest {
  url: string
  quality: string
  format: string
}

/**
 * Check health of the API
 */
export const checkHealth = async () => {
  try {
    const response = await api.get('/health')
    return response.data
  } catch (error) {
    console.error('Health check failed:', error)
    throw error
  }
}

/**
 * Fetch video information from YouTube
 */
export const fetchVideoInfo = async (request: FetchVideoInfoRequest) => {
  try {
    const response = await api.post('/fetch-info', request)
    return response.data as FetchVideoInfoResponse
  } catch (error) {
    console.error('Failed to fetch video info:', error)
    throw error
  }
}

/**
 * Download video from YouTube
 */
export const downloadVideo = async (request: DownloadRequest) => {
  try {
    const response = await api.post('/download', request, {
      responseType: 'blob',
      timeout: 300000, // 5 minutes for downloads (long downloads + slow networks)
    })
    return response.data as Blob
  } catch (error) {
    console.error('Failed to download video:', error)
    throw error
  }
}

/**
 * Get supported formats
 */
export const getSupportedFormats = async () => {
  try {
    const response = await api.get('/formats')
    return response.data
  } catch (error) {
    console.error('Failed to get supported formats:', error)
    throw error
  }
}

/**
 * Get supported qualities
 */
export const getSupportedQualities = async () => {
  try {
    const response = await api.get('/qualities')
    return response.data
  } catch (error) {
    console.error('Failed to get supported qualities:', error)
    throw error
  }
}

export default api
