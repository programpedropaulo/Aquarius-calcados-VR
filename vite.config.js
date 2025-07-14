import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Aquarius-calcados-VR/", // <-- nome EXATO do seu repositório
  plugins: [react()],
});
