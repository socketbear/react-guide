// vite.config.ts
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import unocss from 'unocss/vite'

export default defineConfig({
  // SCSS 전역 사용
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~/assets/styles/_variables";'
      }
    }
  },
  plugins: [
    react(),
    unocss()
  ],
  server: {
    port: 3333,
    proxy: {
      '/mock': {
        target: 'http://localhost:3001', // json-server로 만들어진 mockup api 서버를 가르킴
        changeOrigin: true,
        rewrite: path => path.replace(/^\/mock/, '') // json-server를 사용할 수 있게 /mock을 제거
      }
      // TODO: API 서버가 만들어질 경우 Proxy 설정을 추가해주세요. (참고: https://vitejs.dev/config/server-options.html#server-proxy)
    }
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
})
