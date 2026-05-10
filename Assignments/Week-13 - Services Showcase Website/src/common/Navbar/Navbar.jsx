import { useMenuState } from "../../components/Navbar_Components/useMenuState";
import NavbarLogo from "../../components/Navbar_Components/NavbarLogo";
import NavbarMenu from "../../components/Navbar_Components/NavbarMenu";
import NavbarToggle from "../../components/Navbar_Components/NavbarToggle";
import "./Navbar.scss";

const Navbar = () => {
    const {
        showMenu,
        active,
        sidebarRef,
        handleMenuToggle,
        handleMenuItemClick,
    } = useMenuState();

    return (
        <nav
            className={`py-2 ${showMenu ? "showMenu" : ""}`}
            id="navbar"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container he-50 d-flex justify-content-between align-items-center">
                <NavbarLogo />

                <NavbarMenu
                    showMenu={showMenu}
                    active={active}
                    sidebarRef={sidebarRef}
                    onMenuToggle={handleMenuToggle}
                    onMenuItemClick={handleMenuItemClick}
                />

                <NavbarToggle onToggle={handleMenuToggle} isOpen={showMenu} />
            </div>
        </nav>
    );
};

export default Navbar;
