import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Aquarius-calcados-VR/', // Caminho do repositório no GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Atalho para usar "@/alguma-coisa" ao invés de caminhos relativos feios
    },
  },
});
