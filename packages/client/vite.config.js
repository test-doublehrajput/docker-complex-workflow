import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
    host: true, // needed for the DC port mapping to work
    strictPort: true,
  },
  resolve: {
    alias: {
      "@app": "/src",
    },
  },
});
