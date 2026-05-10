const ContactFooter = () => {
    return (
        <p className="contact-copy text-center mt-5 d-flex flex-column gap-2 mb-0">
            {/* Copyright */}
            <span>
                © {new Date().getFullYear()} - <b>DEPI</b>. All rights reserved.
            </span>

            {/* Developer */}
            <span className="mb-0">
                Designed and developed by&nbsp;
                <a
                    href="https://ahmedmaher-portfolio.vercel.app/"
                    target="_blank"
                    title="Ahmed Maher's Portfolio"
                    rel="noopener noreferrer"
                    className="animated-hover-link accept-hover green-c"
                >
                    Ahmed Maher
                </a>
            </span>
        </p>
    );
};

export default ContactFooter;
