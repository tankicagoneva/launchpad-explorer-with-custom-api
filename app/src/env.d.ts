/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_DEV: string
  readonly VITE_API_URL_STAGING: string
  readonly VITE_API_URL_PROD: string
  readonly VITE_APP_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Global variable injected by Vite
declare const __API_URL__: string
