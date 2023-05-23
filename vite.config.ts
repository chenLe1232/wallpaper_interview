
// https://vitejs.dev/config/
import { defineConfig } from "vitest/config"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 启用类似 jest 的全局测试 API
    globals: true,
    // 使用 happy-dom 模拟 DOM
    environment: 'happy-dom'
  }
})
