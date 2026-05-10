const ContactIcons = () => {
    const links = [
        {
            href: "https://www.linkedin.com/in/ahmed-maher-algohary",
            title: "LinkedIn",
            label: "LinkedIn",
            icon: "bx bxl-linkedin",
            external: true,
        },
        {
            href: "mailto:ahmedmaher.dev1@gmail.com",
            title: "Email",
            label: "Email",
            icon: "bx bx-envelope",
            external: false,
        },
        {
            href: "https://m.facebook.com/ahmed.maher.algohary",
            title: "Facebook",
            label: "Facebook",
            icon: "bx bxl-facebook",
            external: true,
        },
        {
            href: "https://github.com/Ahmed-Maher77",
            title: "GitHub",
            label: "GitHub",
            icon: "bx bxl-github",
            external: true,
        },
    ];

    return (
        <ul className="contact-icons d-flex flex-wrap gap-3 justify-content-center list-unstyled mb-0">
            {links.map(({ href, title, label, icon, external }) => (
                <li key={label}>
                    <a
                        className="rotated-icon"
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        aria-label={label}
                        title={title}
                    >
                        <i className={icon}></i>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ContactIcons;
