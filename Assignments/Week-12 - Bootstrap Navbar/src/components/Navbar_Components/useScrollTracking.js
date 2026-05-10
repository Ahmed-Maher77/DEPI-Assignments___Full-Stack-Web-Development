import { useEffect, useState } from "react";

export const useScrollTracking = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const getSections = () => [
            { id: "home", element: document.getElementById("Home") },
            { id: "about", element: document.getElementById("About") },
            { id: "slider", element: document.getElementById("slider") }, // Slider section
            { id: "services", element: document.getElementById("Services") },
            { id: "contact", element: document.getElementById("Contact") },
        ];

        const handleScroll = () => {
            const sections = getSections();
            const scrollPosition = window.scrollY + 100; // Reduced offset for better detection
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            // Find the section that's currently in view
            let currentSection = "home"; // Default fallback

            // Check if we're near the bottom of the page (for contact section)
            if (scrollPosition + windowHeight >= documentHeight - 50) {
                currentSection = "contact";
            } else {
                for (let i = 0; i < sections.length; i++) {
                    const section = sections[i];
                    if (section.element) {
                        const sectionTop = section.element.offsetTop - 100;
                        const sectionHeight = section.element.offsetHeight;
                        const sectionBottom = sectionTop + sectionHeight;

                        // Check if we're in this section
                        if (
                            scrollPosition >= sectionTop &&
                            scrollPosition < sectionBottom
                        ) {
                            currentSection = section.id;
                            break;
                        }
                        // Also check if we're past this section but before the next one
                        if (scrollPosition >= sectionTop) {
                            currentSection = section.id;
                        }
                    }
                }
            }

            setActiveSection(currentSection);
        };

        // Wait for DOM to be ready, then initial check
        const timer = setTimeout(() => {
            handleScroll();
        }, 500);

        // Add scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return activeSection;
};
