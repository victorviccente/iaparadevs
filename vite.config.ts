import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    port: 3000, // Porta que você deseja usar
    strictPort: true, // Força o uso específico desta porta
    host: true, // Permite acesso externo
  },
});
