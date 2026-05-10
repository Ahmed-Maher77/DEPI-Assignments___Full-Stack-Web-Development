import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5001,
    },
    base: "/Services-Showcase-Website/",
    // import.meta.env.VITE_NODE_ENV === "production"
    //     ? "/Services-Showcase-Website/"
    //     : "/",
    build: {
        outDir: "dist",
        assetsDir: "assets",
        sourcemap: false,
        minify: "terser",
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    bootstrap: ["bootstrap"],
                    icons: ["boxicons"],
                },
            },
        },
    },
});
