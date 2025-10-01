import NavbarItem from "./NavbarItem";
import { menuItems, footerData } from "./navbarData";

const NavbarMenu = ({
    showMenu,
    active,
    sidebarRef,
    onMenuToggle,
    onMenuItemClick,
}) => {
    return (
        <ul
            id="navbar-menu"
            className={`position-fixed p-0 top-0 end-0 z-1 d-flex flex-column gap-2 relative ${
                showMenu ? "show" : ""
            }`}
            ref={sidebarRef}
            role="menubar"
            aria-label="Main navigation menu"
        >
            {/* Back button */}
            <li
                onClick={onMenuToggle}
                className="backMenu p-1 py-2 d-flex fs-5 fw-bold c-gray align-items-center border-bottom"
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onMenuToggle();
                    }
                }}
                aria-label="Close menu"
            >
                <i
                    className="bx bx-chevron-left c-gray fs-2"
                    aria-hidden="true"
                ></i>{" "}
                Back
            </li>

            {/* Menu items */}
            {menuItems.map((item, index) => (
                <NavbarItem
                    key={item.id}
                    item={item}
                    isActive={active === item.id}
                    onClick={onMenuItemClick}
                    className={index === 0 ? "mt-2" : ""}
                />
            ))}

            {/* Footer */}
            <li className="d-flex flex-wrap gap-1 p-4 py-3 position-absolute bottom-0 start-0 align-items-center justify-content-center d-lg-none">
                <span className="fs-small">{footerData.copyright}</span>
                <a
                    href={footerData.developer.url}
                    title={footerData.developer.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none fw-medium"
                    aria-label={`${footerData.developer.name} - opens in new tab`}
                >
                    {footerData.developer.name}
                </a>
            </li>
        </ul>
    );
};

export default NavbarMenu;
