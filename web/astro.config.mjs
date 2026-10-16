// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'never',
  env: {
    schema: {
      WEBSITE_URL: envField.string({
        context: 'client',
        access: 'public',
      }),
      SITE_ENV: envField.enum({
        values: ['production', 'preview', 'development'],
        context: 'server',
        access: 'public',
        default: 'development',
      }),
    },
  },
})
