const NavbarToggle = ({ onToggle, isOpen }) => {
    return (
        <div className="right d-flex align-items-center gap-4 d-lg-none">
            <button
                onClick={onToggle}
                className="toggleBtn bg-transparent border-0"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="navbar-menu"
            >
                <i
                    className={`bx ${
                        isOpen ? "bx-x" : "bx-menu-alt-right"
                    } c-black`}
                    aria-hidden="true"
                ></i>
            </button>
        </div>
    );
};

export default NavbarToggle;
