import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      routes: `${path.resolve(__dirname, "./src/router/")}`,
      api: `${path.resolve(__dirname, "./src/api/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      context: `${path.resolve(__dirname, "./src/context/")}`,
      layouts: `${path.resolve(__dirname, "./src/layouts/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
    },
  },
});
