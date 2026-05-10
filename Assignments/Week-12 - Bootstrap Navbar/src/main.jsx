import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Boxicons
import "boxicons/css/boxicons.min.css";
// Animations
import "./common/Animations/animations.css";
import { initAnimations } from "./common/Animations/animations.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// Initialize on DOM ready
window.requestAnimationFrame(() => initAnimations());
