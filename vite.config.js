import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [tailwindcss(), sentryVitePlugin({
    org: "jsm-h0",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})