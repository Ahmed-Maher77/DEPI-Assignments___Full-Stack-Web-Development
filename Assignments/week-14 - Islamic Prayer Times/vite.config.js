import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(() => {
    const base =
        "https://ahmed-maher77.github.io/Mawaqit-Arabia___Islamic-Prayer-Times/";
    return {
        base,
        plugins: [react()],
    };
});
