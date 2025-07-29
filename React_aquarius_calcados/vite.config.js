// vite.config.js
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Aquarius-calcados-VR/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
