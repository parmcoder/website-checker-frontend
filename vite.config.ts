import vite from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import 'dotenv/config'

export default vite.defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: process.env.HOST_IP,
    port: Number(process.env.PORT_NUMBER),
  },
  plugins: [vue()],
})
