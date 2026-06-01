import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [path.resolve(__dirname, './src/tests/setup.ts')],
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['node_modules/', 'src/tests/', '**/*.stories.tsx', '**/*.config.*', '.storybook/'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
