import { defineConfig } from "vite"; // <--- THIS LINE IS CRUCIAL
import react from "@vitejs/plugin-react";
import path from "path";

// ... rest of your config
export default defineConfig({
  plugins: [
    // <--- Ensure this array now only contains 'react()'
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
