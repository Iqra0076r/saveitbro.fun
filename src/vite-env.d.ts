/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_DESCRIPTION: string
  readonly VITE_ENABLE_BATCH_DOWNLOAD: string
  readonly VITE_ENABLE_PLAYLIST_DOWNLOAD: string
  readonly VITE_ENABLE_CHANNEL_DOWNLOAD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
