import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Cambiamos a "/" para que Lovable gestione bien las rutas en su dominio
  base: "/", 
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Esto es lo que permite que el editor de Lovable funcione correctamente
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      // Esto permite usar @/components/... en lugar de ../../../components/...
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
