import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  build: {
    outDir: "dist",
    // Ensure the base path is correct if you're serving from a subdirectory
    base: "./",
  },
};
