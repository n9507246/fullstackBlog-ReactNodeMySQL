import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@view': path.resolve(__dirname, './src/view'),
      '@layouts': path.resolve(__dirname, './src/view/layouts'),
      '@pages': path.resolve(__dirname, './src/view/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@hoc': path.resolve(__dirname, './src/hoc'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@context' : path.resolve(__dirname, './src/context'),
      '@':  path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@UI':  path.resolve(__dirname, './src/components/UI')
    },
  },
  plugins: [react()],
})
