import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Вы можете изменить порт, если хотите
  },
  build: {
    outDir: 'dist', // Убедитесь, что выходная директория указана правильно
  },
});