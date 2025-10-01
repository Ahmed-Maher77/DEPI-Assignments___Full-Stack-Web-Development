import { useEffect, useRef, useState } from "react";
import { useScrollTracking } from "./useScrollTracking";

export const useMenuState = (initialActive = "home") => {
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(initialActive);
    const sidebarRef = useRef();
    const activeSection = useScrollTracking();

    const handleMenuToggle = () => {
        setShowMenu((prev) => !prev);
    };

    const handleMenuItemClick = (value) => {
        setActive(value);
        setShowMenu(false); // Close menu when item is clicked
    };

    // Update active state based on scroll position
    useEffect(() => {
        setActive(activeSection);
    }, [activeSection]);

    // Click outside to close menu
    useEffect(() => {
        const handleDocClick = (e) => {
            if (
                showMenu &&
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                !e.target.closest(".toggleBtn")
            ) {
                setShowMenu(false);
            }
        };

        if (showMenu) {
            document.addEventListener("click", handleDocClick);
        }

        return () => {
            document.removeEventListener("click", handleDocClick);
        };
    }, [showMenu]);

    return {
        showMenu,
        active,
        sidebarRef,
        handleMenuToggle,
        handleMenuItemClick,
    };
};
