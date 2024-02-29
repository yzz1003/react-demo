import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3001,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://0.0.0.0:3000",
        changeOrigin: true,
      },
    },
  },
});
