import "./App.scss";
import About from "./Main_Sections/About/About";
import Contact from "./Main_Sections/Contact/Contact";
import Home from "./Main_Sections/Home/Home";
import Slider from "./Main_Sections/Slider/Slider";
import Services from "./Main_Sections/Services/Services";
import Navbar from "./common/Navbar/Navbar";
import { useEffect, useState } from "react";
import Loader from "./common/Loader/Loader";
import { initAnimations } from "./common/Animations/animations";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Loading effect
    useEffect(() => {
        const t = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(t);
    }, []);

    if (isLoading) return <Loader />;

    // Re-init animations for the landing section right after loader disappears
    requestAnimationFrame(() => initAnimations());

    return (
        <div className="App">
            {/* Skip Navigation Link */}
            <a
                href="#main-content"
                className="sr-only sr-only-focusable btn btn-primary position-absolute"
                style={{ top: "10px", left: "10px", zIndex: 9999 }}
            >
                Skip to main content
            </a>

            <Navbar />
            <main id="main-content">
                <Home />
                <About />
                <Slider />
                <Services />
                <Contact />
            </main>
        </div>
    );
}

export default App;
