import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')
  
  const getApiTarget = () => {
    switch (mode) {
      case 'production':
        return env.VITE_API_URL_PROD 
      case 'staging':
        return env.VITE_API_URL_STAGING 
      case 'development':
      default:
        return env.VITE_API_URL_DEV 
    }
  }

  return {
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    },
    server: {
      proxy: {
        '/api': {
          target: getApiTarget(),
          changeOrigin: true,
          secure: mode === 'production', 
        },
      },
    },    define: {
      __API_URL__: JSON.stringify(getApiTarget()),
    },
  }
})
