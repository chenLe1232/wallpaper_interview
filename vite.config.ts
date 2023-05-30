
// https://vitejs.dev/config/
import { defineConfig } from "vitest/config"
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";
import { vitePluginForArco } from '@arco-plugins/vite-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [visualizer(), vitePluginForArco(), react()],
  resolve: {
    alias: {
      // 在 Vite 配置文件中，使用以 / 开头的路径是因为 Vite 使用基于 URL 的路径解析。在这种情况下，'@': '/src' 表示将 @ 别名解析为 /src 目录，这在 Vite 中是正确的。
      '@': '/src'
    }
  },
  // 优化依赖
  optimizeDeps: {
    include: ['@arco-design/web-react', 'lodash-es']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 lodash-es @arco-design 分离出来
          'arco': ['@arco-design/web-react'],
          'lodash': ['lodash-es']
        }
      }
    }
  },
  test: {
    // 启用类似 jest 的全局测试 API
    globals: true,
    // 使用 happy-dom 模拟 DOM
    environment: 'happy-dom'
  }
})
