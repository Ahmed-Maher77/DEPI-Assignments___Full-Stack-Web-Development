const NavbarItem = ({ item, isActive, onClick, className = "" }) => {
    const { id, label, href } = item;

    const handleClick = (e) => {
        e.preventDefault();
        try {
            const targetId = href.startsWith("#") ? href.slice(1) : href;
            const targetEl =
                document.getElementById(targetId) ||
                document.querySelector(href);
            if (targetEl) {
                const y =
                    targetEl.getBoundingClientRect().top +
                    window.pageYOffset -
                    100;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        } finally {
            onClick(id);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick(e);
        }
    };

    return (
        <li role="none">
            <a
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                className={`text-decoration-none c-gray fs-5 fw-medium p-4 py-2 d-block ${className} ${
                    isActive ? "active" : ""
                }`}
                href={href}
                role="menuitem"
                tabIndex={0}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Navigate to ${label} section`}
            >
                {label}
            </a>
        </li>
    );
};

export default NavbarItem;
