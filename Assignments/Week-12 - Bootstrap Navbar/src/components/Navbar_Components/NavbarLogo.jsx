import { logoData } from "./navbarData";

const NavbarLogo = () => {
    return (
        <a
            href="#home"
            className="text-decoration-none"
            aria-label="Go to home page"
        >
            <img
                src={logoData.src}
                className="rounded-circle logo"
                alt={logoData.alt}
            />
        </a>
    );
};

export default NavbarLogo;
