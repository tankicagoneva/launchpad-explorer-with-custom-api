// Environment configuration utility
export const getEnvironment = () => {
  // In development, Vite uses the proxy, so we use relative URLs
  if (import.meta.env.DEV) {
    return {
      apiUrl: '', // Empty string means use relative URLs (proxy will handle)
      environment: 'development'
    }
  }

  // In production/staging builds, use the full API URLs
  const env = import.meta.env.VITE_APP_ENV || 'production'
  
  switch (env) {
    case 'staging':
      return {
        apiUrl: import.meta.env.VITE_API_URL_STAGING,
        environment: 'staging'
      }
    case 'production':
      return {
        apiUrl: import.meta.env.VITE_API_URL_PROD,
        environment: 'production'
      }
    default:
      return {
        apiUrl: import.meta.env.VITE_API_URL_DEV,
        environment: 'development'
      }
  }
}

export const config = getEnvironment()
